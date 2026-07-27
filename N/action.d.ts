/// <reference path="./error.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./task.d.ts" />

/**
 * SuiteScript action module
 *
 * Provides programmatic access to record actions — the SuiteScript equivalent
 * of clicking action buttons in the NetSuite UI (e.g. "Approve" on a TimeBill,
 * "Mark for Grouping" on an Invoice). Use `action.find()` or `action.get()`
 * to locate an action for a record type, then call the resulting `Action`
 * object (or `action.execute()`) to run it.
 *
 * For the canonical list of action IDs supported by NetSuite, see the
 * `ActionID` type. Note that the type accepts arbitrary strings as well as
 * the known IDs, because record-action availability is feature-, version-,
 * and (for custom actions) account-specific.
 *
 * Per-action governance varies: most actions bill `10 units` at the platform
 * level via `action.execute()`, but the Help Center documents some actions
 * (e.g. TimeBill `approve`) as billing `5 units`. The Help Center's
 * "Governance: None" entry for `action.execute(options)` itself is misleading
 * — at minimum a 10-unit charge is observed per execution against records
 * that pass pre-validation.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510761537}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510761537.html}
 * @see [Help Center: Supported Record Actions (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516982564.html}
 *
 * @module N/action
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface action {

  find: {

    /**
     * Searches for record actions available on a record type. If only
     * `recordType` is provided, returns all actions defined on that record
     * type. Providing `recordId` filters to actions that qualify for
     * execution on that specific record instance (and binds the returned
     * Actions to that instance — they become "qualified"). Providing `id`
     * filters to the single named action.
     *
     * The result is an object mapping action ID to `Action` instance. Each
     * value is itself a callable function that, when invoked, executes
     * the action — so `find()['markforgrouping']({recordId: 123})` is
     * equivalent to `find()['markforgrouping'].execute({recordId: 123})`.
     *
     * If `id` is provided and that action does not exist on the record
     * type, the call errors with `SSS_INVALID_ACTION_ID` (does NOT return
     * an empty result, despite earlier JSDoc claims).
     *
     * If `recordId` is provided and the record does not exist, the call
     * still succeeds — the bad ID is silently ignored at find-time and
     * only surfaces later when the Action is executed.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509389605}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509389605.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param options
     * @param options.recordType The record type (e.g. `record.Type.INVOICE` or `'invoice'`).
     * @param [options.recordId] A specific record instance ID; filters to actions qualifying for that instance and binds them.
     * @param [options.id] A specific action ID; filters the result to that single action.
     * @return An object mapping action ID to `Action` instance.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.recordType` is missing/null.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `options.recordType` is not a valid record type. (Note: the runtime error code is `INVALID_RCRD_TYPE`, not `SSS_INVALID_RECORD_TYPE` as documented in the Help Center.)
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID If `options.id` is provided and that action does not exist on the record type.
     */
    <ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      recordId?: number | string,
      id?: ID,
    }): { [p in ID]: action.Action<ID> };

    /**
     * Promise-returning form of `action.find()`. Same parameters, return
     * type, and error semantics; errors reject the Promise rather than
     * throwing synchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509391246}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509391246.html}
     *
     * @governance none
     * @restriction Client-side scripts only
     * @since 2018.2
     *
     * @param options
     * @param options.recordType The record type (e.g. `record.Type.INVOICE` or `'invoice'`).
     * @param [options.recordId] A specific record instance ID; filters to actions qualifying for that instance and binds them.
     * @param [options.id] A specific action ID; filters the result to that single action.
     * @return A Promise resolving to an object mapping action ID to `Action` instance.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If `options` is missing/null, or `options.recordType` is missing/null.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE (via Promise rejection) If `options.recordType` is not a valid record type.
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID (via Promise rejection) If `options.id` is provided and that action does not exist on the record type.
     */
    promise<ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      recordId?: number | string,
      id?: ID,
    }): Promise<{ [p in ID]: action.Action<ID> }>;
  };

  get: {

    /**
     * Returns a single `Action` instance for the given record type and
     * action ID. Providing `recordId` binds the returned Action to that
     * record instance — a "qualified" Action that can be executed without
     * re-supplying `recordId`.
     *
     * `recordId` is validated at `get()` time: an invalid ID raises
     * `RECORD_DOES_NOT_EXIST` immediately, unlike `find()` which silently
     * accepts bad IDs and defers the failure to execution.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509384818}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509384818.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param options
     * @param options.recordType The record type (e.g. `record.Type.INVOICE` or `'invoice'`).
     * @param options.id The action ID.
     * @param [options.recordId] A specific record instance ID; binds the returned Action to that instance.
     * @return The `Action` instance for the given action ID on the given record type.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.recordType` or `options.id` is missing/null.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `options.recordType` is not a valid record type. (Note: runtime code is `INVALID_RCRD_TYPE`, not `SSS_INVALID_RECORD_TYPE`.)
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID If `options.id` does not exist on the record type, or the record instance does not qualify for the action.
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST If `options.recordId` is provided and that record does not exist.
     */
    <ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      recordId?: number | string,
      id: ID,
    }): action.Action<ID>;

    /**
     * Promise-returning form of `action.get()`. Same parameters, return
     * type, and error semantics; errors reject the Promise rather than
     * throwing synchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509385970}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509385970.html}
     *
     * @governance none
     * @restriction Client-side scripts only
     * @since 2018.2
     *
     * @param options
     * @param options.recordType The record type (e.g. `record.Type.INVOICE` or `'invoice'`).
     * @param options.id The action ID.
     * @param [options.recordId] A specific record instance ID; binds the returned Action to that instance.
     * @return A Promise resolving to the `Action` instance.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If `options` is missing/null, or `options.recordType` or `options.id` is missing/null.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE (via Promise rejection) If `options.recordType` is not a valid record type.
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID (via Promise rejection) If `options.id` does not exist on the record type, or the record instance does not qualify for the action.
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST (via Promise rejection) If `options.recordId` is provided and that record does not exist.
     */
    promise<ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      recordId?: number | string,
      id: ID,
    }): Promise<action.Action<ID>>;
  };

  execute: {

    /**
     * Executes a record action and returns its result.
     *
     * The Help Center documents this method's governance as "None", but
     * runtime observation shows a charge of `10 units` per call that
     * reaches post-validation (pre-validation failures bill 0). Per-action
     * documentation in the Help Center lists action-specific costs (e.g.
     * TimeBill `approve` is `5 units`) — actual billing may depend on
     * which action is being executed.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509391388}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509391388.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param options
     * @param options.recordType The record type (e.g. `record.Type.INVOICE` or `'invoice'`).
     * @param options.id The action ID.
     * @param options.params Action arguments. The required `recordId` plus any action-specific parameters.
     * @param options.params.recordId The record instance ID on which to execute the action.
     * @return Action result. The action's own return value is stored in `response`; warnings and errors during execution are in `notifications`.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.recordType`/`options.id`/`options.params.recordId` is missing/null.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `options.recordType` is not a valid record type. (Note: runtime code is `INVALID_RCRD_TYPE`, not `SSS_INVALID_RECORD_TYPE`.)
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID If `options.id` does not exist on the record type.
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST If the record identified by `options.params.recordId` does not exist.
     */
    (options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      id: action.ActionID,
      params: {
        recordId: number | string,
        [p: string]: any,
      },
    }): action.ExecuteResult;

    /**
     * Promise-returning form of `action.execute()`. Same parameters,
     * return type, and error semantics; errors reject the Promise rather
     * than throwing synchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509392030}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509392030.html}
     *
     * @governance 10 units
     * @restriction Client-side scripts only
     * @since 2018.2
     *
     * @param options
     * @param options.recordType The record type.
     * @param options.id The action ID.
     * @param options.params Action arguments.
     * @param options.params.recordId The record instance ID on which to execute the action.
     * @return A Promise resolving to the action result.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If `options` is missing/null, or required fields are missing/null.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE (via Promise rejection) If `options.recordType` is invalid.
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID (via Promise rejection) If `options.id` does not exist on the record type.
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST (via Promise rejection) If `options.params.recordId` does not exist.
     */
    promise(options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      id: action.ActionID,
      params: {
        recordId: number | string,
        [p: string]: any,
      },
    }): Promise<action.ExecuteResult>;
  };

  /**
   * Executes a record action asynchronously over many records and returns
   * a task ID for status queries via `action.getBulkStatus()`.
   *
   * Two calling modes:
   *
   * 1. **Direct mode:** Provide `params` as an array of parameter objects
   *    (one per record). `condition` and `paramCallback` must be omitted.
   *
   *    ```
   *    action.executeBulk({
   *      recordType: 'invoice',
   *      id: 'markforgrouping',
   *      params: [{recordId: 123}, {recordId: 456}],
   *    });
   *    ```
   *
   * 2. **Condition mode:** Provide `condition` and `paramCallback` together.
   *    `params` must be omitted. The runtime selects record IDs via the
   *    `condition` predicate, then invokes `paramCallback` per ID to
   *    derive the per-record parameter object. Currently the only
   *    supported `condition` value is `action.ALL_QUALIFIED_INSTANCES`.
   *
   *    ```
   *    action.executeBulk({
   *      recordType: 'timebill',
   *      id: 'approve',
   *      condition: action.ALL_QUALIFIED_INSTANCES,
   *      paramCallback: (recordId) => ({recordId}),
   *    });
   *    ```
   *
   * In direct mode the runtime rejects single-object `params` with
   * `WRONG_PARAMETER_TYPE` ("params is expected as array of objects").
   * Passing `params` together with `condition` or `paramCallback` raises
   * `MUTUALLY_EXCLUSIVE_ARGUMENTS`. Passing `paramCallback` without
   * `condition` raises `SSS_MISSING_REQD_ARGUMENT: condition`. Passing
   * a `condition` value other than `ALL_QUALIFIED_INSTANCES` raises
   * `SSS_UNSUPPORTED_METHOD`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540815927}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540815927.html}
   *
   * @governance 50 units
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.recordType The record type.
   * @param options.id The action ID.
   * @param [options.params] Direct mode: an array of per-record parameter objects, each with a required `recordId`.
   * @param [options.condition] Condition mode: a predicate object selecting record IDs. Currently only `action.ALL_QUALIFIED_INSTANCES` is supported.
   * @param [options.paramCallback] Condition mode: a function that takes a record ID and returns the parameter object for that record.
   * @return The bulk task ID for use with `action.getBulkStatus()`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.recordType`/`options.id` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `options.recordType` is not a valid record type.
   * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID If `options.id` does not exist on the record type.
   * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If none of `params`, `condition`, or `paramCallback` is provided.
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If `params` is provided together with `condition` or `paramCallback`.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `params` is not an array of objects, or `condition` is not an object.
   * @throws {error.SuiteScriptError} SSS_UNSUPPORTED_METHOD If `condition` is an object other than `action.ALL_QUALIFIED_INSTANCES`.
   */
  executeBulk(options: {
    recordType: record.Type | `${record.Type}` | record.CustomType | string,
    id: action.ActionID,
    params?: {
      recordId: number | string,
      [p: string]: any,
    }[],
    condition?: action.AllQualifiedInstances,
    paramCallback?: <RecordID extends number | string>(recordId: RecordID) => {
      recordId: RecordID,
      [p: string]: any,
    },
  }): string;

  /**
   * Returns the current status of a bulk action submitted via
   * `action.executeBulk()`.
   *
   * The returned status object is lazy: accessing its properties triggers
   * server calls and may raise `INVALID_TASK_ID` if the task ID is not
   * recognized. The empty `Object.keys()` enumeration succeeds even for
   * a bogus task ID; the error appears on first property access.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540816132}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540816132.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.taskId The bulk task ID returned by `action.executeBulk()`.
   * @return A `task.RecordActionTaskStatus` object reflecting the task's current state.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskId` is missing/null/empty string.
   * @throws {error.SuiteScriptError} INVALID_TASK_ID If `options.taskId` is not a recognized bulk action task ID. (Thrown lazily on property access.)
   */
  getBulkStatus(options: {
    taskId: string,
  }): task.RecordActionTaskStatus;

  /**
   * Constant used as the `condition` value in condition-mode
   * `action.executeBulk()` calls to select all records that qualify for
   * the action. Pair with a `paramCallback` to derive per-record
   * parameters.
   *
   * The runtime exposes this as a frozen empty object (`{}`), not a
   * string as earlier type-file declarations claimed. Treat it as an
   * opaque sentinel; its content is intentionally empty.
   *
   * The `ALL_QUALIFIED_INSTANCES` condition only works for actions whose
   * implementation defines a `findInstances` method on its
   * `RecordActionQualifier` (e.g. TimeBill `approve`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540815927}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540815927.html}
   *
   * @since 2019.1
   */
  readonly ALL_QUALIFIED_INSTANCES: action.AllQualifiedInstances;
}

declare namespace action {

  /**
   * The type of the `action.ALL_QUALIFIED_INSTANCES` sentinel — a frozen
   * empty object used as the `condition` value in condition-mode
   * `executeBulk()` calls. Declared as a named type so the type system
   * can reference its shape from inside the namespace (where the
   * `action` identifier resolves to the namespace, not the value).
   */
  export type AllQualifiedInstances = Readonly<object>;

  /**
   * Result returned by `action.execute()` (module method) and
   * `Action.execute()` / `Action()` (instance methods). The action's own
   * return value is in `response`; per-execution warnings and errors
   * are in `notifications`.
   *
   * Undocumented in the Help Center as a named type; documented only
   * via prose ("action result is returned in a plain JavaScript object").
   */
  export interface ExecuteResult {
    /**
     * Array of notification objects describing warnings, errors, or
     * informational messages raised during action execution. Empty
     * (or near-empty) on success.
     */
    notifications: any[];

    /**
     * The action's response payload.
     */
    response: {
      action: string,
      id: string,
      recordCount: number,
      success: boolean,
    };
  }

  /**
   * Action IDs supported by NetSuite record actions. The list combines:
   * (a) IDs documented in the Help Center's "Supported Record Actions"
   * page, (b) IDs observed at runtime that the Help Center does not
   * document (e.g. `activate`, `inactivate` on entity records), and
   * (c) `string` to accept any string ID. (WebStorm — the primary
   * consumer of this types repo — already provides literal-name
   * autocomplete inside the string when the union ends in plain `string`,
   * so the more common `(string & {})` trick is unnecessary here and
   * would only widen the runtime acceptance to `{}` in WebStorm's
   * evaluator.)
   *
   * Action availability is record-type-, feature-, and account-specific
   * — for example, `selectAllBudgetLines` is only available with the
   * Budget feature enabled, and custom actions defined via the Record
   * Action SuiteApp framework introduce their own IDs not enumerated
   * here.
   * @see [Help Center: Supported Record Actions (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516982564.html}
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1516982564}
   */
  export type ActionID =
    | 'activate'
    | 'allocate'
    | 'allocatesalesorder'
    | 'approve'
    | 'cancel'
    | 'clearBudgetAmounts'
    | 'completecount'
    | 'confirm'
    | 'decline'
    | 'distributeBudgetTotalAmount'
    | 'groupinvoices'
    | 'inactivate'
    | 'launch'
    | 'markforgrouping'
    | 'markprojectascompletelybilled'
    | 'recalculatepercentcompleteoverride'
    | 'reject'
    | 'removeinvoicefromgroup'
    | 'removeinvoicesfromgroup'
    | 'retract'
    | 'selectAllBudgetLines'
    | 'setBudgetAmountsToCalculated'
    | 'startcount'
    | 'submit'
    | 'ungroupinvoice'
    | 'unlinkinvoices'
    | 'unmarkforgrouping'
    | 'unselectAllBudgetLines'
    | string;

  /**
   * Encapsulates a NetSuite record action. Produced by `action.find()`
   * and `action.get()`. Itself a callable function: calling an Action
   * directly is equivalent to calling its `.execute()` method.
   *
   * An Action is "qualified" if it was created with a `recordId` (via
   * `action.get({recordType, id, recordId})` or via `action.find()`
   * with a `recordId`). Qualified Actions remember their bound record
   * and don't require `recordId` at execution time.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509380249}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509380249.html}
   *
   * @since 2018.2
   */
  export interface Action<ID extends ActionID> {

    /**
     * The action description, or `null` if no description is defined.
     * Earlier type-file declarations typed this as `string`; runtime can
     * return `null` for actions without a description.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509388207}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509388207.html}
     */
    readonly description: string | null;

    /**
     * The record type on which the action operates.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387977}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387977.html}
     */
    readonly recordType: record.Type | `${record.Type}` | record.CustomType | string;

    /**
     * The action ID.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387777}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387777.html}
     */
    readonly id: ID;

    /**
     * The action label (the user-visible button text in the UI).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509388068}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509388068.html}
     */
    readonly label: string;

    /**
     * The action's parameter schema. The shape depends on the specific
     * action; the only universally-required parameter is `recordId` (and
     * only when the Action is unqualified).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509389367}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509389367.html}
     */
    readonly parameters: {
      recordId?: number | string,
      [p: string]: any,
    };

    /**
     * The record ID this Action is bound to (only set when the Action
     * was created via `action.get()`/`action.find()` with a `recordId`,
     * or when an explicit `recordId` was supplied at execution).
     * Undefined for unqualified Actions even though the property key
     * is enumerable.
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly recordId?: number | string;

    /**
     * Calling the Action directly is equivalent to calling `.execute()`
     * with the same options.
     *
     * Unlike the module-level `action.execute()`, the instance form
     * takes `recordId` at the top level of `options`, NOT inside a
     * `params` sub-object. The Help Center is ambiguous on this point;
     * the runtime accepts only the top-level `recordId` form.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387360}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387360.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param options
     * @param [options.recordId] The record instance ID. Required for unqualified Actions; optional for qualified Actions (defaults to the bound `recordId`).
     * @return Action result with the action's response and any notifications.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If the Action is unqualified and `options.recordId` is missing/null.
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST If the record identified by `recordId` does not exist.
     */
    (options?: {
      recordId?: number | string,
      [p: string]: any,
    }): ExecuteResult;

    /**
     * Executes the action and returns the result. Equivalent to calling
     * the Action directly as a function.
     *
     * Unlike the module-level `action.execute()`, this instance form
     * takes `recordId` at the top level of `options`, NOT inside a
     * `params` sub-object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509386224}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509386224.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param options
     * @param [options.recordId] The record instance ID. Required for unqualified Actions; optional for qualified Actions.
     * @return Action result with the action's response and any notifications.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If the Action is unqualified and `options.recordId` is missing/null.
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST If the record identified by `recordId` does not exist.
     */
    execute: {
      (options?: {
        recordId?: number | string,
        [p: string]: any,
      }): ExecuteResult;

      /**
       * Promise-returning form of `Action.execute()`.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509386721}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509386721.html}
       *
       * @governance 10 units
       * @restriction Client-side scripts only
       * @since 2018.2
       *
       * @param options
       * @param [options.recordId] The record instance ID.
       * @return A Promise resolving to the action result.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If the Action is unqualified and `options.recordId` is missing/null.
       * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST (via Promise rejection) If the record does not exist.
       */
      promise(options?: {
        recordId?: number | string,
        [p: string]: any,
      }): Promise<ExecuteResult>;
    };

    /**
     * Promise-returning form of the Action's callable. Equivalent to
     * `Action.execute.promise()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387674}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387674.html}
     *
     * @governance 10 units
     * @restriction Client-side scripts only
     * @since 2018.2
     *
     * @param options
     * @param [options.recordId] The record instance ID.
     * @return A Promise resolving to the action result.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If the Action is unqualified and `options.recordId` is missing/null.
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST (via Promise rejection) If the record does not exist.
     */
    promise(options?: {
      recordId?: number | string,
      [p: string]: any,
    }): Promise<ExecuteResult>;

    /**
     * Executes the action in bulk over many records (instance form).
     * Same calling modes and semantics as the module-level
     * `action.executeBulk()` — see that method for full details.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540816431}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540816431.html}
     *
     * @governance 50 units
     * @restriction Client-side and server-side scripts
     * @since 2019.1
     *
     * @param options
     * @param [options.params] Direct mode: array of per-record parameter objects.
     * @param [options.condition] Condition mode: a predicate selecting records.
     * @param [options.paramCallback] Condition mode: function deriving parameters from a record ID.
     * @return The bulk task ID for use with `action.getBulkStatus()`.
     *
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If none of `params`, `condition`, or `paramCallback` is provided.
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If `params` is provided together with `condition` or `paramCallback`.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `params` is not an array of objects.
     * @throws {error.SuiteScriptError} SSS_UNSUPPORTED_METHOD If `condition` is a value other than `action.ALL_QUALIFIED_INSTANCES`.
     */
    executeBulk(options: {
      params?: {
        recordId: number | string,
        [p: string]: any,
      }[],
      condition?: AllQualifiedInstances,
      paramCallback?: <RecordID extends number | string>(recordId: RecordID) => {
        recordId: RecordID,
        [p: string]: any,
      },
    }): string;

    /**
     * Returns a plain-object representation of the Action, suitable for
     * `JSON.stringify()`. Includes `id`, `recordType`, `label`,
     * `description`, and `parameters`; omits methods and the `recordId`
     * binding.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2018.2
     */
    toJSON(): {
      id: ID,
      recordType: string,
      label: string,
      description: string | null,
      parameters: Action<ID>['parameters'],
    };

    /**
     * Returns a string representation in the form
     * `'Action{"id":"<id>","recordType":"<type>","label":"<label>"}'`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2018.2
     */
    toString(): string;
  }
}
