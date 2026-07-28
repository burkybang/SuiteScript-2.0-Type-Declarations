/**
 * SuiteScript piremoval module
 *
 * Use the N/piremoval module to remove personal information (PI) from system notes, workflow history,
 * and specific field values, in compliance with privacy regulations such as the right to be forgotten.
 * Information can be removed from system notes only, or also from workflow history and field values on
 * the record. Entity records, transactions, and custom records are supported.
 *
 * Use `piremoval.createTask(options)` to create a PI removal task or `piremoval.loadTask(options)` to
 * load an existing one — both return a `piremoval.PiRemovalTask`. Configure the task by assigning to
 * its properties (most are writable despite being documented as read-only — see `PiRemovalTask`), then
 * call `PiRemovalTask.save()` to persist (cross-reference validation runs at save), and
 * `PiRemovalTask.run()` to execute. Use `piremoval.getTaskStatus(options)` to check the status of a
 * submitted task; the returned `piremoval.PiRemovalTaskStatus` exposes log entries via `logList`.
 *
 * **Feature gate.** All four module methods require the "Remove Personal Information" feature to be
 * enabled (script ID `pi_removal`, runtime feature name `PI_REMOVAL`). When the feature is OFF, calls
 * throw a **plain JS `Error`** (NOT a `SuiteScriptError` — no `.name`/`.code`) with the message
 * `"To complete this action the Remove Personal Information feature must be enabled in the account."`
 *
 * **Permission gate.** `createTask` (effectively, anything reaching `save()`) additionally requires
 * the "Remove Personal Information Create" permission; `run()` requires "Remove Personal Information
 * Run" permission. Without the relevant permission, a `NOT_ENOUGH_PERMISSIONS` `SuiteScriptError` is
 * thrown.
 *
 * **No `.promise()` on any method.** None of the four module methods nor any `PiRemovalTask` instance
 * method has a `.promise()` variant.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156173791240}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156173791240.html}
 *
 * @module N/piremoval
 * @NApiVersion 2.x
 */
interface piremoval {

  /**
   * Creates a new personal information removal task.
   *
   * Although the public docs mark `options.recordType` as optional, **it is required at create time**:
   * `piremoval.createTask({})` throws `WRONG_PARAMETER_TYPE` synchronously, NOT `_1_CANNOT_BE_EMPTY`
   * at save as the docs suggest. The original JSDoc note on this method was misleading — the check
   * fires at create, not save.
   *
   * Other documented options remain optional at create time and can be configured by assigning to
   * the returned `PiRemovalTask`'s writable properties (most documented "read-only" properties are
   * actually writable — see `PiRemovalTask`).
   *
   * Note: Remove Personal Information Create permission is required. Without it, `save()` throws
   * `NOT_ENOUGH_PERMISSIONS`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174907211}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174907211.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.recordType The record type that is updated by the PI removal task. Use a value from `record.Type` or a custom record type ID. **Required at create time** (despite docs marking it optional). Empty string passes the JS type check (deferred to save).
   * @param [options.recordIds] IDs of records whose personal information is removed. JS-side type check at create only verifies it's an array — element types are not enforced (numeric/string IDs both pass at this stage).
   * @param [options.fieldIds] Script IDs of fields whose personal information is removed (e.g. `'phone'`, `'email'`). Note: the docs parameter table lists this as `number[]`, but both the inline syntax sample and the full module script sample pass strings — strings are correct. JS-side type check only verifies it's an array; numeric elements are coerced to strings when read back via the property setter.
   * @param [options.workflowIds] Workflow IDs whose history is processed by the PI removal task. Same array-only JS-side check as the other ID arrays; numeric elements coerced to strings on read-back.
   * @param [options.historyOnly] If `true`, the task removes information from system notes only. If `false`, the task removes information from system notes, workflow history, and field values. **Major doc bug:** the docs claim the default is `false`, but at runtime **`false` is silently rejected by both this option and the setter — only `true` is a stable value** (`createTask({historyOnly: false})`, `task.historyOnly = false`, and any combination with recordIds/fieldIds populated all leave `historyOnly === true`). The documented effect of `false` (deleting field values + workflow history) appears unreachable via the public N/piremoval API. JS-side type check is strict — string `'true'` or number `1` is rejected with `WRONG_PARAMETER_TYPE`.
   * @param [options.historyReplacement] The text used in system notes to replace the original values.
   * @return The newly-created (unsaved) PI removal task with `id` set to `-1` (sentinel for unsaved).
   *
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: options.<param> is expected as <type>. Fires synchronously when any options property is the wrong type (recordType: string, recordIds/fieldIds/workflowIds: array, historyOnly: boolean, historyReplacement: string). The `options` argument itself, if a non-object primitive, fails as `recordType is expected as string`.
   * @throws {Error} A **plain JS `Error`** (not a SuiteScriptError) is thrown if `options` is missing/null/undefined OR if the "Remove Personal Information" feature is not enabled. Message: `"To complete this action the Remove Personal Information feature must be enabled in the account."` when options is missing/null/undefined OR when the feature is off.
   * @throws {error.SuiteScriptError} NOT_ENOUGH_PERMISSIONS Not enough permissions. Fires later on `save()` if the calling role lacks the Remove Personal Information Create permission, even with the feature on.
   */
  createTask(options: {
    recordType: string,
    recordIds?: number[],
    fieldIds?: string[],
    workflowIds?: number[],
    historyOnly?: boolean,
    historyReplacement?: string,
  }): piremoval.PiRemovalTask;

  /**
   * Deletes a personal information removal task.
   *
   * **Soft delete:** the task is NOT physically removed from the system —
   * `status.status` transitions to `'DELETED'`, a log entry is appended, but the task remains
   * loadable. See `PiRemovalTask.deleteTask` for full details. Subsequent calls on the same ID are
   * idempotent. Return value is a tombstoned `PiRemovalTask` whose data-property getters throw
   * `"Empty invocation target!"` — typed as `void` for safety.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174955494}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174955494.html}
   *
   * @governance 20 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.id Unique identifier of the personal information removal task. Must be a number. Bare-number invocation (`deleteTask(123)`) is rejected — the `options` object wrapper is required.
   *
   * @throws {TypeError} Raw `TypeError: Cannot read property 'id' of undefined/null` if `options` is missing, `undefined`, or `null` — note this is a plain JS `TypeError`, NOT a `SuiteScriptError`.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: options.id is expected as number. Fires when `id` is missing from the options bag or is not a number (string IDs rejected). Also fires for bare-number invocation.
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR Cannot delete PIRemoval job that was not saved.
   * @throws {Error} A **plain JS `Error`** (not a SuiteScriptError) with message `"To complete this action the Remove Personal Information feature must be enabled in the account."` if the `PI_REMOVAL` feature is not enabled.
   */
  deleteTask(options: {
    id: number,
  }): void;

  /**
   * Retrieves the status of a personal information removal task.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174976129}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174976129.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.id Unique identifier of the personal information removal task. Must be a number. Bare-number invocation (`getTaskStatus(123)`) is rejected — the `options` object wrapper is required.
   * @return The current status of the removal task.
   *
   * @throws {TypeError} Raw `TypeError: Cannot read property 'id' of undefined/null` if `options` is missing, `undefined`, or `null` — note this is a plain JS `TypeError`, NOT a `SuiteScriptError`.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: options.id is expected as number. Fires when `id` is missing from the options bag or is not a number (string IDs rejected). Also fires for bare-number invocation.
   * @throws {Error} A **plain JS `Error`** (not a SuiteScriptError) with message `"To complete this action the Remove Personal Information feature must be enabled in the account."` if the `PI_REMOVAL` feature is not enabled.
   */
  getTaskStatus(options: {
    id: number,
  }): piremoval.PiRemovalTaskStatus;

  /**
   * Retrieves an existing personal information removal task.
   *
   * Works on soft-deleted tasks too — after `deleteTask`, the task remains loadable with
   * `status.status === 'DELETED'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174989271}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174989271.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.id Unique identifier of the personal information removal task. Must be a number. Bare-number invocation (`loadTask(123)`) is rejected with `WRONG_PARAMETER_TYPE` — the `options` object wrapper is required, despite the module-level script sample in the public docs showing the bare-number form.
   * @return The loaded PI removal task.
   *
   * @throws {TypeError} Raw `TypeError: Cannot read property 'id' of undefined/null` if `options` is missing, `undefined`, or `null` — note this is a plain JS `TypeError`, NOT a `SuiteScriptError`.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: options.id is expected as number. Fires when `id` is missing from the options bag or is not a number (string IDs rejected). Also fires for bare-number invocation.
   * @throws {error.SuiteScriptError} _1_WAS_NOT_FOUND PIRemoval job was not found.
   * @throws {Error} A **plain JS `Error`** (not a SuiteScriptError) with message `"To complete this action the Remove Personal Information feature must be enabled in the account."` if the `PI_REMOVAL` feature is not enabled.
   */
  loadTask(options: {
    id: number,
  }): piremoval.PiRemovalTask;
}

declare namespace piremoval {

  /**
   * Encapsulates a task to remove personal information (PI). Includes the record, field, and workflow
   * IDs to remove personal information from, as well as history replacement information.
   *
   * Use `piremoval.createTask(options)` to create one, or `piremoval.loadTask(options)` to load an
   * existing one. Configure the task by assigning to its writable properties (see notes below),
   * then call `PiRemovalTask.save()` to persist, and `PiRemovalTask.run()` to execute.
   *
   * **Object characteristics:**
   * - Runtime constructor name is `NetSuiteObject`.
   * - The object is **frozen and sealed** (`Object.isFrozen === true`, `Object.isExtensible === false`).
   *   Arbitrary property assignments silently no-op (no error thrown, no value retained).
   * - **The docs mark all 8 properties as read-only, but at runtime only `id` and `status` are.** The
   *   other 6 (`recordType`, `recordIds`, `fieldIds`, `workflowIds`, `historyOnly`, `historyReplacement`)
   *   have working setters with strict type validation at assign time.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174263975}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174263975.html}
   *
   * @since 2019.2
   */
  interface PiRemovalTask {

    /**
     * Script IDs of the fields whose PI is removed. If no field IDs are entered, no field-value changes
     * are performed.
     *
     * The setter accepts only an array (strict JS-side check); non-array assignments throw
     * `WRONG_PARAMETER_TYPE: Wrong parameter type: options.fieldIds is expected as array.` Element
     * types are not validated at assign time — **numeric elements (e.g. `[1, 2]`) are coerced to
     * strings on read-back** (`['1', '2']`); the docs parameter table on `createTask` claims `number[]`
     * but both official samples and the runtime read-back behavior confirm strings are the intended
     * element type.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174501852}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174501852.html}
     *
     * @since 2019.2
     */
    fieldIds: string[];

    /**
     * Indicates whether the PI removal task removes system note information only. The docs state that
     * `true` removes system notes only and `false` additionally removes workflow history and field
     * values. Both halves of that are inaccurate at runtime (see below).
     *
     * **Major doc bug — `false` is silently rejected.** The docs claim the default is `false`, but
     * **`true` is effectively the only stable value:**
     * - On a freshly-`createTask`'d task, the value is `true` regardless of whether `createTask({historyOnly: false})` was passed.
     * - Setter assignments of `false` return without throwing, but the value remains `true` on read-back.
     * - This behavior was reproduced with empty IDs, with `recordIds` populated, with `fieldIds`
     *   populated, and with both populated.
     * - `save()` does NOT change the value to `false` either; reloading via `loadTask` returns `true`.
     *
     * And the documented meaning of `true` ("system notes only") is wrong. A `run()` at the forced
     * `true` value masks the targeted fields' CURRENT values to placeholders (e.g. phone
     * `000000000`, email `PI_removed@example.com`) AND replaces their system-note history with
     * `historyReplacement`, and it processes workflow history as well. So field-value removal is not
     * unreachable: it happens under the only reachable (`true`) mode.
     *
     * The setter is otherwise a strict boolean type check — string `'true'` or number `1` is rejected
     * with `WRONG_PARAMETER_TYPE: Wrong parameter type: options.historyOnly is expected as boolean.`
     * No truthy coercion.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174552829}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174552829.html}
     *
     * @since 2019.2
     */
    historyOnly: boolean;

    /**
     * The text used in system notes to replace the original value. `null` on a freshly-created task.
     *
     * The setter performs a strict string type check; numeric assignment is rejected with
     * `WRONG_PARAMETER_TYPE: Wrong parameter type: options.historyReplacement is expected as string.`
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174597006}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174597006.html}
     *
     * @since 2019.2
     */
    historyReplacement: string | null;

    /**
     * ID that uniquely identifies the PI removal task.
     *
     * This ID is assigned by NetSuite when `PiRemovalTask.save()` is called. **On a freshly-created
     * (unsaved) task the value is `-1`** (sentinel). You cannot specify your own task ID — `id` is
     * one of only two genuinely read-only properties on this object (along with `status`); assignment
     * throws `READ_ONLY_PROPERTY: Read only property: id.`
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174615502}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174615502.html}
     *
     * @since 2019.2
     */
    readonly id: number;

    /**
     * IDs of records whose PI is removed. If no record IDs are entered, no information changes are
     * performed.
     *
     * The setter accepts only an array (strict JS-side check); non-array assignments throw
     * `WRONG_PARAMETER_TYPE: Wrong parameter type: options.recordIds is expected as array.` Element
     * types are not validated at assign time — both `[1, 2]` and `['1', '2']` are accepted.
     *
     * **Not validated at save:** contrary to the docs' claim that `save()`
     * throws `_1_JOB_WAS_NOT_FOUND` for nonexistent record IDs, `save()` succeeds
     * even with `recordIds: [999999999]` (no such customer). Field IDs and workflow IDs ARE
     * validated at save (those throw `_1_WAS_NOT_FOUND`), but record IDs are not. A nonexistent
     * record ID surfaces only at `run()` time, and even then it does not throw or fail the task: the
     * task still reaches `'COMPLETE'`, with the failure captured in `status.logList` as a
     * `{type: 'FIELDVALUE', status: 'ERROR', message: 'That record does not exist.', exception: 'That record does not exist.'}`
     * entry.
     *
     * **All elements are stringified post-save**: even when assigned as numbers (`[3]`), the runtime
     * reads them back as strings (`['3']`) on the in-memory task after save and on `loadTask`-loaded
     * tasks.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174629555}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174629555.html}
     *
     * @since 2019.2
     */
    recordIds: number[];

    /**
     * Type of record whose PI is removed. All records referenced in this `PiRemovalTask` must be the
     * same type. Set initially via `createTask({recordType})` (required); can be reassigned after
     * create.
     *
     * The setter performs a strict string type check; numeric/null/undefined/array assignments throw
     * `WRONG_PARAMETER_TYPE: Wrong parameter type: options.recordType is expected as string.` Empty
     * string passes the JS check; nonexistent record-type strings (e.g. `'invalidrecordtype'`) also
     * pass at assign time — the validation against the real record-type catalog is deferred to
     * `save()` and throws `_1_WAS_NOT_FOUND` (not `_1_JOB_WAS_NOT_FOUND` as docs claim).
     *
     * **Case normalization on save:** whatever case you assign, the backend
     * stores the value in **uppercase**. `task.recordType` on the in-memory instance retains the
     * originally-assigned case, but `loadTask(...)` always returns the uppercase form. Consumers
     * doing case-sensitive comparisons should be aware of the asymmetry between just-created and
     * just-loaded tasks.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174658201}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174658201.html}
     *
     * @since 2019.2
     */
    recordType: string;

    /**
     * Status of the PI removal task. Set internally; **genuinely read-only** at runtime (assignment
     * throws `READ_ONLY_PROPERTY: Read only property: status.`).
     *
     * **Observed transitions:**
     * - **Fresh `createTask`** → `{status: 'CREATED', logList: []}`.
     * - **After `save()`** → `status` stays `'CREATED'`, `logList` gains a single entry:
     *   `{type: 'OTHER', status: 'INFO', message: 'Personal Information Removal Request Created', exception: null}`.
     * - **After `deleteTask()`** → `status` transitions to `'DELETED'`, `logList` appends a second
     *   entry: `{type: 'OTHER', status: 'INFO', message: 'Deleted', exception: null}`. The task
     *   remains loadable via `loadTask` (soft delete).
     * - **After `run()`** → transitions `'CREATED'` → `'PENDING'` (returns immediately; processing is
     *   asynchronous) → `'COMPLETE'`. `logList` gains `Started`, `Processing` (both `type: 'OTHER'`,
     *   `status: 'INFO'`), then one entry per category processed: `type: 'FIELDVALUE'`,
     *   `'SYSTEMNOTE'`, `'WORKFLOW'`, each `status: 'SUCCESS'` with a `message` like `'Count: 2'`
     *   (`'WORKFLOW'` reads `'Count: 0, Workflow History: 0'`). `'ERROR'` is the presumed failure state.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174701248}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174701248.html}
     *
     * @since 2019.2
     */
    readonly status: piremoval.PiRemovalTaskStatus;

    /**
     * IDs of workflows where PI is removed from the workflow history. If no workflow IDs are entered,
     * no workflow-history changes are performed.
     *
     * The setter accepts only an array (strict JS-side check); non-array assignments throw
     * `WRONG_PARAMETER_TYPE: Wrong parameter type: options.workflowIds is expected as array.`
     * **Numeric elements are coerced to strings on read-back** (e.g. `[10, 20]` reads as `['10','20']`),
     * mirroring `fieldIds` behavior. Workflows that don't exist are validated at save and throw
     * `_1_WAS_NOT_FOUND` (not `_1_JOB_WAS_NOT_FOUND` as docs claim) with message
     * `"workflow id '<id>' was not found."`
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174717892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174717892.html}
     *
     * @since 2019.2
     */
    workflowIds: number[];

    /**
     * Deletes the PI removal task. Equivalent to module-level `piremoval.deleteTask({id: this.id})`.
     *
     * **Soft delete:** the task is NOT physically removed from the system. Instead:
     * - `status.status` transitions from `'CREATED'` to `'DELETED'` (`piremoval.Status.DELETED`).
     * - `status.logList` appends `{type: 'OTHER', status: 'INFO', message: 'Deleted', exception: null}`.
     * - The task remains loadable via `piremoval.loadTask({id})` with all properties readable.
     * - Subsequent `deleteTask()` calls on the same ID are **idempotent and do NOT throw**.
     *
     * **Return value:** the runtime returns a tombstoned `PiRemovalTask` instance (same shape — methods
     * present, `toString()` returns `'piremoval.PiRemovalTask'`), but **every data-property getter on
     * the returned object throws `"Empty invocation target!"`**, making the return value effectively
     * unusable. The signature is typed `void` for consumer safety; consumers should not attempt to
     * use the return.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174490300}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174490300.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} UNEXPECTED_ERROR Cannot delete PiRemoval job that was not saved.
     * @throws {Error} A **plain JS `Error`** (not a SuiteScriptError) with message `"To complete this action the Remove Personal Information feature must be enabled in the account."` if the `PI_REMOVAL` feature is not enabled.
     */
    deleteTask(): void;

    /**
     * Runs the PI removal task. **This is the only destructive call on the module — PI is permanently
     * removed from the targeted records with no undo.** The task must be saved first.
     *
     * Returns immediately (`void`); processing is asynchronous. For the targeted fields it masks the
     * records' current values to placeholders (e.g. phone `000000000`, email
     * `PI_removed@example.com`) and replaces their system-note history with `historyReplacement`.
     * The task's `status` moves `'CREATED'` → `'PENDING'` → `'COMPLETE'`; poll `getTaskStatus` and
     * read `status.logList` for the per-category results. See `historyOnly` for why field values are
     * removed even though the docs describe the reachable mode as system-notes-only.
     *
     * All validation for the task (for example, ensuring that the specified record IDs are valid)
     * occurs when the task is saved using `PiRemovalTask.save()`, not when it is run.
     *
     * Note: Remove Personal Information Run permission is required to run a PI removal task.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174672468}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174672468.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} UNEXPECTED_ERROR Cannot run unsaved PiRemoval job.
     * @throws {error.SuiteScriptError} NOT_ENOUGH_PERMISSIONS Not enough permissions. Fires if the calling role lacks the Remove Personal Information Run permission.
     * @throws {Error} A **plain JS `Error`** (not a SuiteScriptError) with message `"To complete this action the Remove Personal Information feature must be enabled in the account."` if the `PI_REMOVAL` feature is not enabled.
     */
    run(): void;

    /**
     * Saves the PI removal task. Cross-reference validation against the real catalog of record types,
     * field IDs, and workflow IDs occurs at save time. On success, assigns the generated task ID to
     * the `id` property and appends a log entry to `status.logList`.
     *
     * **Side effects on the in-memory task after save:**
     * - `id` updated from `-1` to the assigned task ID (positive integer).
     * - `status.status` stays `'CREATED'`.
     * - `status.logList` gains an entry: `{type: 'OTHER', status: 'INFO', message: 'Personal Information Removal Request Created', exception: null}`.
     * - `recordIds` elements stringified (e.g. `[3]` becomes `['3']`).
     * - `recordType` retains its as-assigned case on the in-memory object (backend stores uppercase; visible via `loadTask`).
     *
     * **Liberal validation:** `save()` succeeds with no `recordIds`/`fieldIds`/`workflowIds` at all,
     * and `recordIds` are NOT validated against the customer/record catalog (no error for nonexistent
     * IDs at save — presumably checked at `run()`). Field IDs and workflow IDs ARE validated.
     *
     * Return value is `undefined` (`void`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174691190}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174691190.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} _1_CANNOT_BE_EMPTY RecordType cannot be empty. Fires when `recordType` is the empty string at save time. (Note: missing/wrong-type `recordType` is caught earlier by the setter as `WRONG_PARAMETER_TYPE`.)
     * @throws {error.SuiteScriptError} _1_WAS_NOT_FOUND `record type '<type>' was not found.` Fires for nonexistent record types. Note: code is `_1_WAS_NOT_FOUND`, NOT `_1_JOB_WAS_NOT_FOUND` as the docs claim.
     * @throws {error.SuiteScriptError} _1_WAS_NOT_FOUND `field id '<id>' was not found.` Fires for nonexistent field script IDs in `fieldIds`. Note: code is `_1_WAS_NOT_FOUND`, NOT `_1_JOB_WAS_NOT_FOUND` as the docs claim.
     * @throws {error.SuiteScriptError} _1_WAS_NOT_FOUND `workflow id '<id>' was not found.` Fires for nonexistent workflow IDs in `workflowIds`. Note: code is `_1_WAS_NOT_FOUND`, NOT `_1_JOB_WAS_NOT_FOUND` as the docs claim.
     * @throws {error.SuiteScriptError} NOT_ENOUGH_PERMISSIONS Not enough permissions. Fires if the calling role lacks the Remove Personal Information Create permission, even with the feature enabled.
     * @throws {Error} A **plain JS `Error`** (not a SuiteScriptError) with message `"To complete this action the Remove Personal Information feature must be enabled in the account."` if the `PI_REMOVAL` feature is not enabled.
     */
    save(): void;

    /**
     * Returns a stable runtime class identifier — the literal string `'piremoval.PiRemovalTask'`.
     *
     * Undocumented in the Help Center; present at runtime. Useful for runtime type-narrowing when
     * discriminating between task-like objects from different NetSuite modules. Matches the
     * `task.MergeArrangementsTask`/`task.MergeElementsTask` pattern.
     *
     * @since 2019.2
     *
     * @return The literal string `'piremoval.PiRemovalTask'`.
     */
    toString(): 'piremoval.PiRemovalTask';

    /**
     * Returns the PiRemovalTask's own data properties (not its methods, and **excluding `status`**) as
     * a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * Verified shape:
     * `{id, recordType, recordIds, fieldIds, workflowIds, historyOnly, historyReplacement}`. Notably
     * `status` is omitted from `toJSON()` output despite being a regular property — diverges from the
     * default `ExcludeMethods<this>` pattern used elsewhere in this repo. The omission is permanent,
     * not lifecycle-dependent: a `COMPLETE` task (post-`run()`) omits `status` just like a fresh one.
     *
     * @since 2019.2
     *
     * @return A snapshot of this PiRemovalTask's data properties, excluding `status`.
     */
    toJSON(): Omit<ExcludeMethods<this>, 'status'>;
  }

  /**
   * Represents a single log item associated with a `piremoval.PiRemovalTaskStatus`. Logs are generated
   * separately when a task is created, started, deleted, and completed. Retrieved via the
   * `PiRemovalTaskStatus.logList` property; sorted by date.
   *
   * **Object characteristics:** NOT frozen (`Object.isFrozen === false`),
   * unlike `PiRemovalTask` and `PiRemovalTaskStatus` which both are. Properties have no setters
   * (read-only via descriptor).
   *
   * **Observed log entries from non-`run()` lifecycle events:**
   * - On `save()`: `{type: 'OTHER', status: 'INFO', message: 'Personal Information Removal Request Created', exception: null}`
   * - On `deleteTask()`: `{type: 'OTHER', status: 'INFO', message: 'Deleted', exception: null}`
   *
   * Both `type` and `status` field types were extensively wrong in the original docs — see field-level
   * JSDoc for the corrected interpretations.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174820776}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174820776.html}
   *
   * @since 2019.2
   */
  interface PiRemovalTaskLogItem {

    /**
     * Exception message for the log item. On an `'ERROR'`-severity entry it carries the failure
     * message (observed identical to `message`, e.g. `'That record does not exist.'` for a
     * nonexistent record ID). `null` on non-error entries (lifecycle events and `'SUCCESS'` category
     * entries), despite the docs typing it a plain `string`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174844834}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174844834.html}
     *
     * @since 2019.2
     */
    readonly exception: string | null;

    /**
     * Log item text message. Examples observed: `'Personal Information Removal Request Created'`
     * (on save), `'Deleted'` (on deleteTask). For run-time-generated logs the docs claim the message
     * specifies if the record type is not set, or if one of record, field, or workflow IDs do not
     * exist.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174862773}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174862773.html}
     *
     * @since 2019.2
     */
    readonly message: string;

    /**
     * **Severity of this log item — NOT a task status.** The original docs claim this returns one
     * of the `task.TaskStatus` values (`PENDING`, `PROCESSING`, `COMPLETE`, `FAILED`), but at runtime
     * it is a log severity level, not a task status. Confirmed values: `'INFO'` on lifecycle entries
     * (create / save / delete / started / processing), `'SUCCESS'` on the per-category entries a
     * `run()` emits, and `'ERROR'` on a per-category entry when that category hit a failure (e.g. a
     * nonexistent record). `'WARN'` is inferred from typical logging conventions (not yet observed).
     *
     * This is a separate concept from `PiRemovalTaskStatus.status` (which IS a task status of type
     * `piremoval.Status`). The original docs conflated the two.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174870975}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174870975.html}
     *
     * @since 2019.2
     */
    readonly status: 'INFO' | 'SUCCESS' | 'WARN' | 'ERROR' | string;

    /**
     * Indicates the change described by this log item. Lifecycle entries (create / save / delete /
     * started / processing) use `'OTHER'`. A `run()` then emits one entry per processed category, and
     * at runtime these are UPPERCASE `'FIELDVALUE'`, `'SYSTEMNOTE'`, and `'WORKFLOW'`, not the
     * mixed-case `'FieldValue'`/`'SystemNote'`/`'Workflow'` the docs list. No formal enum exists.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174886448}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174886448.html}
     *
     * @since 2019.2
     */
    readonly type: 'OTHER' | 'FIELDVALUE' | 'SYSTEMNOTE' | 'WORKFLOW' | string;

    /**
     * Returns a stable runtime class identifier — the literal string `'piremoval.PiRemovalTaskLogItem'`.
     *
     * Undocumented in the Help Center; present at runtime. Useful for runtime type-narrowing.
     *
     * @since 2019.2
     *
     * @return The literal string `'piremoval.PiRemovalTaskLogItem'`.
     */
    toString(): 'piremoval.PiRemovalTaskLogItem';

    /**
     * Returns the PiRemovalTaskLogItem's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * Verified shape: `{type, status, message, exception}`.
     *
     * @since 2019.2
     *
     * @return A snapshot of this PiRemovalTaskLogItem's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates the status of a personal information removal task. Returned by
   * `piremoval.getTaskStatus(options)`, and also exposed via `PiRemovalTask.status`.
   *
   * **Object characteristics:** frozen (`Object.isFrozen === true`), all
   * properties read-only via descriptor. `constructor.name === 'NetSuiteObject'`.
   *
   * **On a freshly-created (unsaved) task, the value is `{status: 'CREATED', logList: []}`. After
   * `save()` and `deleteTask()` the `logList` grows by one entry each, and `status` transitions
   * `'CREATED'` → `'DELETED'` on delete.**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174751485}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174751485.html}
   *
   * @since 2019.2
   */
  interface PiRemovalTaskStatus {

    /**
     * Logs for the PiRemovalTask job. Each entry corresponds to a separate event; items are sorted by
     * date. Empty array (`[]`) on a freshly-created task; gains one entry on `save()` and one on
     * `deleteTask()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174788348}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174788348.html}
     *
     * @since 2019.2
     */
    readonly logList: piremoval.PiRemovalTaskLogItem[];

    /**
     * Status of the PI removal task — one of the values in `piremoval.Status`.
     *
     * The original docs claim this returns one of the `task.TaskStatus` values (`PENDING`,
     * `PROCESSING`, `COMPLETE`, `FAILED`), but the `piremoval` module exposes its own `piremoval.Status`
     * enum. Confirmed at runtime: `'CREATED'` (freshly-saved), `'DELETED'` (after `deleteTask`), and
     * `'PENDING'` → `'COMPLETE'` across a `run()`. Note `'COMPLETE'` is reached even when individual
     * records fail (e.g. a nonexistent record ID): such failures are captured as `'ERROR'`-severity
     * `logList` entries rather than failing the task. `'ERROR'` and `'NOT_APPLIED'` as task-level
     * status values remain unobserved (re-running against already-removed data still reports
     * `'COMPLETE'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156174807831}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156174807831.html}
     *
     * @since 2019.2
     */
    readonly status: piremoval.Status | `${piremoval.Status}`;

    /**
     * Returns a stable runtime class identifier — the literal string `'piremoval.PiRemovalTaskStatus'`.
     *
     * Undocumented in the Help Center; present at runtime. Useful for runtime type-narrowing.
     *
     * @since 2019.2
     *
     * @return The literal string `'piremoval.PiRemovalTaskStatus'`.
     */
    toString(): 'piremoval.PiRemovalTaskStatus';

    /**
     * Returns the PiRemovalTaskStatus's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * Verified shape: `{status, logList}`.
     *
     * @since 2019.2
     *
     * @return A snapshot of this PiRemovalTaskStatus's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Status values for a `piremoval.PiRemovalTask`. Returned via `PiRemovalTaskStatus.status` (and
   * indirectly via `PiRemovalTask.status.status`).
   *
   * **Undocumented in the NetSuite Help Center** — present as a module-level export
   * (`Object.keys(piremoval)` returns `['Status', 'createTask', 'deleteTask', 'getTaskStatus', 'loadTask']`).
   * The original type file declared
   * `PiRemovalTaskStatus.status` against `task.TaskStatus`, which is the wrong source enum.
   *
   * **Note:** this enum is for `PiRemovalTaskStatus.status` only. The separate
   * `PiRemovalTaskLogItem.status` is a log SEVERITY (e.g. `'INFO'`), not a task status — the
   * original docs conflated the two concepts.
   *
   * Member names equal their string values.
   *
   * @since 2019.2
   */
  export enum Status {
    /**
     * Task has been created. Set immediately on `createTask` and persists through `save` until
     * `run()` is called or the task is deleted.
     */
    CREATED = 'CREATED',
    /** Task has been started and is awaiting completion. Inferred, not directly confirmed. */
    PENDING = 'PENDING',
    /** Task has finished successfully. Inferred, not directly confirmed. */
    COMPLETE = 'COMPLETE',
    /** Task finished with an error. Inferred, not directly confirmed. */
    ERROR = 'ERROR',
    /** Task was deleted via `deleteTask`. The task is soft-deleted (still loadable). */
    DELETED = 'DELETED',
    /** Task was not applied. Inferred meaning; not directly confirmed. */
    NOT_APPLIED = 'NOT_APPLIED',
  }
}
