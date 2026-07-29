/**
 * SuiteScript task/accounting/recognition module
 *
 * Use the `N/task/accounting/recognition` module to merge revenue arrangements or revenue elements.
 * A revenue arrangement is a transaction that records the details of a sale for the purposes of
 * revenue allocation and recognition. The module lets you combine revenue arrangements or revenue
 * elements from multiple sources to represent a single contract obligation for revenue allocation
 * and recognition.
 *
 * Use `recognition.create(options)` to create a merge task; this returns a
 * `recognition.MergeArrangementsTask` or `recognition.MergeElementsTask` depending on the
 * `taskType`. Set its properties (such as the list of arrangements or elements to merge, the
 * date on the merged revenue arrangement, and so on), then call `submit()` to process. Tasks
 * are processed asynchronously. Use `recognition.checkStatus(options)` to retrieve a
 * `recognition.MergeArrangementsTaskStatus` describing the current state of a submitted task.
 *
 * You cannot merge more than 10,000 revenue elements at one time; an error is thrown if you
 * exceed this limit. The Advanced Revenue Management feature must be enabled, and the executing
 * role must have the (Transactions) Revenue Arrangement permission at Create level or higher.
 *
 * **Feature-gating behavior:** the module loads and `create()`
 * succeeds even when the Advanced Revenue Management feature is OFF. The feature check is deferred
 * to `submit()` time. So code that constructs and configures tasks (but doesn't submit) will run
 * without the feature; only actual submission fails.
 *
 * **Property-assignment validation:** unlike most NetSuite
 * record/task APIs, most property assignments on `MergeArrangementsTask` / `MergeElementsTask`
 * fire validation errors SYNCHRONOUSLY at assignment time, not at `submit()` time. See the
 * per-property `@throws` notes for specifics. The docs' framing of "an error is thrown when
 * `submit()` is called" is wrong for most cases — the error fires immediately.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554472720}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554472720.html}
 *
 * @module N/task/accounting/recognition
 * @NApiVersion 2.x
 */
interface recognition {

  /**
   * Checks the status of a submitted merge task.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1555005560}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1555005560.html}
   *
   * @governance 50 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.taskId The task ID of the merge task to check. The task ID is assigned to the merge task when you call `MergeArrangementsTask.submit()` or `MergeElementsTask.submit()`.
   * @return The current status of the submitted merge task.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required `options.taskId` is missing (also fires for no-args calls and empty `{}`). Note: error message prefix is `task.checkStatus` (not `recognition.checkStatus`), indicating internal forwarding to `N/task`.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The `taskId` is not a string or number (e.g. an object). Message: `taskId is expected as string or number`.   * @throws {error.SuiteScriptError} THE_SPECIFIED_TASK_ID_IS_INVALID_THE_TASK_ID_MUST_BE_THE_INTERNAL_ID_OF_A_MERGEARRANGEMENTSTASK_OR_MERGEELEMENTSTASK The numeric `taskId` doesn't correspond to a real merge task.   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR Fires for some non-numeric string `taskId` values (e.g. `'NOT_A_REAL_TASK_ID_xyz'`). The expected `THE_SPECIFIED_TASK_ID_IS_INVALID_...` code is bypassed in this case — non-uniform behavior worth noting.   */
  checkStatus(options: {
    taskId: number | string,
  }): recognition.MergeArrangementsTaskStatus;

  create: {

    /**
     * Creates a merge task that combines entire revenue arrangements (when `taskType` is
     * `TaskType.MERGE_ARRANGEMENTS_TASK`).
     *
     * After creating the task, populate its properties (such as `MergeArrangementsTask.arrangements`)
     * before calling `MergeArrangementsTask.submit()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554995115}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554995115.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @param options
     * @param options.taskType The type of merge task to create. Use `TaskType.MERGE_ARRANGEMENTS_TASK`.
     * @return The newly-created (unsubmitted) merge-arrangements task.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required `options.taskType` is missing (also fires for no-args calls and empty `{}`). Error message prefix is `task.create`, indicating internal forwarding to `N/task`.   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE The `options.taskType` parameter represents an invalid task type.
     */
    (options: {
      taskType: recognition.TaskType.MERGE_ARRANGEMENTS_TASK | `${recognition.TaskType.MERGE_ARRANGEMENTS_TASK}`,
    }): recognition.MergeArrangementsTask;

    /**
     * Creates a merge task that combines individual revenue elements (when `taskType` is
     * `TaskType.MERGE_ELEMENTS_TASK`).
     *
     * After creating the task, populate its properties (such as `MergeElementsTask.elements`)
     * before calling `MergeElementsTask.submit()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554995115}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554995115.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @param options
     * @param options.taskType The type of merge task to create. Use `TaskType.MERGE_ELEMENTS_TASK`.
     * @return The newly-created (unsubmitted) merge-elements task.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required `options.taskType` is missing.   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE The `options.taskType` parameter represents an invalid task type.
     */
    (options: {
      taskType: recognition.TaskType.MERGE_ELEMENTS_TASK | `${recognition.TaskType.MERGE_ELEMENTS_TASK}`,
    }): recognition.MergeElementsTask;
  };
}

declare namespace recognition {

  /**
   * Holds the string values for supported merge task statuses. This enum is used to represent
   * the task status in a `recognition.MergeArrangementsTaskStatus` object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1555011639}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1555011639.html}
   *
   * @since 2019.2
   */
  export enum TaskStatus {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    COMPLETE = 'COMPLETE',
    FAILED = 'FAILED',
  }

  /**
   * Holds the string values for supported merge task types. This enum is used to pass the task
   * type argument to `recognition.create(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1555011882}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1555011882.html}
   *
   * @since 2019.2
   */
  export enum TaskType {
    MERGE_ARRANGEMENTS_TASK = 'MERGE_ARRANGEMENTS_TASK',
    MERGE_ELEMENTS_TASK = 'MERGE_ELEMENTS_TASK',
  }

  /**
   * Encapsulates a task to merge all of the revenue elements from a specified list of revenue
   * arrangements.
   *
   * Use `recognition.create({ taskType: TaskType.MERGE_ARRANGEMENTS_TASK })` to create one. After
   * creation, populate its properties and submit via `submit()`. The `arrangements` property is
   * required; all other properties are optional.
   *
   * Note: Although the public docs overview table marks every property on this object as
   * read-only, both the per-property pages and the official code samples assign these properties
   * (e.g. `recognitionTask.arrangements = elementsList`). The overview "(read-only)" markers are
   * a documentation-table bug; the properties are writable.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554839832}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554839832.html}
   *
   * @since 2019.2
   */
  interface MergeArrangementsTask {

    /**
     * Holds an array of internal IDs of the revenue arrangement records to merge.
     *
     * This property is required. Assignment-time validation: setting this to an empty array, `null`,
     * or a non-array value throws SYNCHRONOUSLY at assignment time (NOT at `submit()` time as docs
     * imply). String IDs are coerced to numbers on assign (`['1', '2']` becomes `[1, 2]`).
     *
     * **Empty-array timing:** if `submit()` is reached with no `arrangements` ever assigned, a
     * `NO_REVENUE_ARRANGEMENT_IDS_ARE_INCLUDED_IN_YOUR_INPUT` error fires at submit time per docs.
     * However if you try to ASSIGN an empty array, an `SSS_MISSING_REQD_ARGUMENT` fires at assign
     * time first — different code, different timing.
     *
     * Invalid IDs (not real revenue arrangements) are silently ignored at submit; if no revenue
     * elements were found for the specified arrangement IDs, a
     * `NO_REVENUE_ELEMENTS_WERE_FOUND_FOR_THE_REVENUE_ARRANGEMENT_IDS_YOU_INPUT` error is thrown
     * at submit.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554917062}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554917062.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned `null` or a non-array value. Message: `arrangements is expected as Array`.     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Assigned an empty array `[]`. Message: `arrangements: Missing a required argument: null`.     */
    arrangements: (number | string)[];

    /**
     * References the contract acquisition deferred expense account for the new revenue
     * arrangement. This property is valid only if the accounting preference Enable Advanced
     * Cost Amortization is enabled. If that preference is not enabled, this property is ignored.
     *
     * Optional. The default value is the account specified by the accounting preference Contract
     * Acquisition Deferred Expense Account in your account.
     *
     * **Assignment-time validation:** the account ID is
     * validated synchronously at assignment time — both that the ID resolves to a real account
     * AND that the account's type is `DeferExpense`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554921345}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554921345.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned `null` or a non-string/non-number value.     * @throws {error.SuiteScriptError} THE_CONTRACT_ACQUISITION_DEFERRED_EXPENSE_ACCOUNT_IS_NOT_A_DEFEREXPENSE_ACCOUNT_TYPE Assigned an account ID that exists but isn't of type `DeferExpense`.     */
    contractAcquisitionDeferredExpenseAccount: number | string;

    /**
     * References the contract acquisition expense account for the new revenue arrangement. This
     * property is valid only if the accounting preference Enable Advanced Cost Amortization is
     * enabled. If that preference is not enabled, this property is ignored.
     *
     * Optional. The default value is the account specified by the accounting preference Contract
     * Acquisition Expense Account in your account.
     *
     * **Assignment-time validation:** the account ID is
     * validated synchronously at assignment time — both that the ID resolves to a real account
     * AND that the account's type is one of: Expense, COGS, Other Expense.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554920949}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554920949.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned `null` or a non-string/non-number value.     * @throws {error.SuiteScriptError} THE_CONTRACT_ACQUISITION_EXPENSE_ACCOUNT_IS_NOT_ONE_OF_THE_FOLLOWING_ACCOUNT_TYPES_EXPENSE_COGS_OTHEXPENSE Assigned an account ID whose type isn't Expense, COGS, or Other Expense.     */
    contractAcquisitionExpenseAccount: number | string;

    /**
     * The contract cost accrual date to use for the new revenue arrangement. This property is
     * valid only if the accounting preference Enable Advanced Cost Amortization is enabled.
     *
     * Optional. Default value is today's date.
     *
     * **Assignment-time validation:** strict `Date` type
     * required at assignment. Strings, numbers, and other types are rejected immediately
     * with `WRONG_PARAMETER_TYPE` — NOT at submit time as the docs imply.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554921464}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554921464.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned a non-`Date` value (string, number, etc.). Message: `contractCostAccrualDate is expected as Date`.     */
    contractCostAccrualDate: Date;

    /**
     * Indicates whether the revenue arrangements are merged prospectively. For more information
     * about prospective merges, see Prospective Merges.
     *
     * Optional. Default value is `false`.
     *
     * **Assignment-time validation:** strict `boolean` type
     * required at assignment. Strings like `'true'` are rejected immediately with
     * `WRONG_PARAMETER_TYPE`. No truthy-coercion.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554921647}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554921647.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned a non-boolean value (string, number, etc.). Message: `mergeResidualRevenueAmounts is expected as boolean`.     */
    mergeResidualRevenueAmounts: boolean;

    /**
     * Indicates whether to recalculate the fair value on residual elements when revenue
     * arrangements are prospectively merged.
     *
     * Optional. Default value is `false`. Per docs, this property is "ignored" if
     * `mergeResidualRevenueAmounts` is `false`: assignment
     * succeeds regardless of the `mergeResidualRevenueAmounts` value (no assignment-time
     * cross-validation). The ignore happens silently at submit time.
     *
     * **Assignment-time validation:** strict `boolean` type
     * required at assignment.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554921873}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554921873.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned a non-boolean value.     */
    recalculateResidualFairValue: boolean;

    /**
     * The date of the new revenue arrangement.
     *
     * Optional. Default value is today's date.
     *
     * **Assignment-time validation:** strict `Date` type
     * required at assignment. Strings, numbers, and other types are rejected immediately
     * with `WRONG_PARAMETER_TYPE` — NOT at submit time as the docs imply.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554921989}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554921989.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned a non-`Date` value (string, number, etc.). Message: `revenueArrangementDate is expected as Date`.     */
    revenueArrangementDate: Date;

    /**
     * Submits the merge task for processing.
     *
     * Returns a task ID that uniquely identifies the merge task. This task ID also represents
     * the submission ID of the internal bulk process that performs the merge.
     *
     * Before calling this method, you must populate the task's properties (such as `arrangements`,
     * `contractAcquisitionExpenseAccount`, and so on).
     *
     * **Note on error timing:** most of the docs' "thrown when submit() is
     * called" claims actually fire at PROPERTY-ASSIGNMENT time instead — see the per-property
     * `@throws` notes. The errors below are ones that genuinely fire at submit time only (because
     * they require interacting with the actual data — checking whether the arrangement IDs
     * resolve to revenue elements, checking the ARM feature flag, etc.).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554926010}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554926010.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @return The task ID of the submitted merge task.
     *
     * @throws {error.SuiteScriptError} NO_REVENUE_ARRANGEMENT_IDS_ARE_INCLUDED_IN_YOUR_INPUT The `arrangements` property was never set (left as `null`). Note: setting `arrangements` to `[]` triggers an earlier assignment-time `SSS_MISSING_REQD_ARGUMENT` instead.
     * @throws {error.SuiteScriptError} NO_REVENUE_ELEMENTS_WERE_FOUND_FOR_THE_REVENUE_ARRANGEMENT_IDS_YOU_INPUT No revenue elements were found for the revenue arrangements specified in the `arrangements` property.
     */
    submit(): number;

    /**
     * Returns the MergeArrangementsTask's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     *
     * @return A snapshot of this MergeArrangementsTask's data properties.
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the literal string `'task.MergeArrangementsTask'`. Useful for runtime type
     * identification.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     *
     * @return `'task.MergeArrangementsTask'`
     */
    toString(): 'task.MergeArrangementsTask';
  }

  /**
   * Encapsulates the current status of a submitted merge task. Use `recognition.checkStatus(options)`
   * to obtain one. The current status corresponds to one of the values in the `recognition.TaskStatus`
   * enum: `PENDING`, `PROCESSING`, `COMPLETE`, or `FAILED`.
   *
   * The same status object type is returned for both `MergeArrangementsTask` and `MergeElementsTask`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554922557}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554922557.html}
   *
   * @since 2019.2
   */
  interface MergeArrangementsTaskStatus {

    /**
     * Holds an error message that describes the failure of the merge task. Valid only when
     * `status` is `TaskStatus.FAILED`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554923349}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554923349.html}
     *
     * @since 2019.2
     */
    readonly errorMessage: string;

    /**
     * Holds an array of internal IDs of the revenue arrangement records to merge. Valid only if
     * the merge task was created with `TaskType.MERGE_ARRANGEMENTS_TASK`.
     *
     * Note: Reading this property has a potential governance value of 10 units.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554923372}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554923372.html}
     *
     * @since 2019.2
     */
    readonly inputArrangements: number[];

    /**
     * Holds an array of internal IDs of the revenue elements to merge. Valid only if the merge
     * task was created with `TaskType.MERGE_ELEMENTS_TASK`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554923579}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554923579.html}
     *
     * @since 2019.2
     */
    readonly inputElements: number[];

    /**
     * The internal ID of the new revenue arrangement that was created. Valid only when `status`
     * is `TaskStatus.COMPLETE`.
     *
     * Note: The module overview table claims this is `number | string`, but the per-property
     * documentation page specifies `number`. Per-property pages are more authoritative.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554923835}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554923835.html}
     *
     * @since 2019.2
     */
    readonly resultingArrangement: number;

    /**
     * The current status of the merge task. Returns one of the `recognition.TaskStatus` values:
     * `PENDING`, `PROCESSING`, `COMPLETE`, or `FAILED`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554924176}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554924176.html}
     *
     * @since 2019.2
     */
    readonly status: recognition.TaskStatus | `${recognition.TaskStatus}`;

    /**
     * The submission ID of the merge arrangements bulk process. This ID is the same as the task
     * ID returned by `MergeArrangementsTask.submit()` or `MergeElementsTask.submit()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554924308}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554924308.html}
     *
     * @since 2019.2
     */
    readonly submissionId: number;

    /**
     * The task ID of the merge task. The task ID is assigned to the merge task when you call
     * `MergeArrangementsTask.submit()` or `MergeElementsTask.submit()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554924405}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554924405.html}
     *
     * @since 2019.2
     */
    readonly taskId: number | string;

    /**
     * Returns the MergeArrangementsTaskStatus's own data properties (not its methods) as a plain
     * object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     *
     * @return A snapshot of this MergeArrangementsTaskStatus's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a task to merge all of the specified revenue elements.
   *
   * Use `recognition.create({ taskType: TaskType.MERGE_ELEMENTS_TASK })` to create one. After
   * creation, populate its properties and submit via `submit()`. The `elements` property is
   * required; all other properties are optional.
   *
   * Note: Although the public docs overview table marks every property on this object as
   * read-only, both the per-property pages and the official code samples assign these properties
   * (e.g. `recognitionTask.elements = elementsList`). The overview "(read-only)" markers are a
   * documentation-table bug; the properties are writable.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554924495}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554924495.html}
   *
   * @since 2019.2
   */
  interface MergeElementsTask {

    /**
     * References the contract acquisition deferred expense account for the new revenue
     * arrangement. This property is valid only if the accounting preference Enable Advanced
     * Cost Amortization is enabled. If that preference is not enabled, this property is ignored.
     *
     * Optional. The default value is the account specified by the accounting preference Contract
     * Acquisition Deferred Expense Account in your account.
     *
     * **Assignment-time validation (MergeElementsTask uses the same backing implementation as
     * MergeArrangementsTask):** the account ID is validated
     * synchronously at assignment time — both that the ID resolves to a real account AND that
     * the account's type is `DeferExpense`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554925170}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554925170.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned `null` or a non-string/non-number value.
     * @throws {error.SuiteScriptError} THE_CONTRACT_ACQUISITION_DEFERRED_EXPENSE_ACCOUNT_IS_NOT_A_DEFEREXPENSE_ACCOUNT_TYPE Assigned an account ID that exists but isn't of type `DeferExpense`.
     */
    contractAcquisitionDeferredExpenseAccount: number | string;

    /**
     * References the contract acquisition expense account for the new revenue arrangement. This
     * property is valid only if the accounting preference Enable Advanced Cost Amortization is
     * enabled. If that preference is not enabled, this property is ignored.
     *
     * Optional. The default value is the account specified by the accounting preference Contract
     * Acquisition Expense Account in your account.
     *
     * **Assignment-time validation (same backing implementation as MergeArrangementsTask):** the
     * account ID is validated synchronously at assignment time — both that the ID resolves to
     * a real account AND that the account's type is one of: Expense, COGS, Other Expense.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554924516}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554924516.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned `null` or a non-string/non-number value.
     * @throws {error.SuiteScriptError} THE_CONTRACT_ACQUISITION_EXPENSE_ACCOUNT_IS_NOT_ONE_OF_THE_FOLLOWING_ACCOUNT_TYPES_EXPENSE_COGS_OTHEXPENSE Assigned an account ID whose type isn't Expense, COGS, or Other Expense.
     */
    contractAcquisitionExpenseAccount: number | string;

    /**
     * The contract cost accrual date to use for the new revenue arrangement. This property is
     * valid only if the accounting preference Enable Advanced Cost Amortization is enabled.
     *
     * Optional. Default value is today's date.
     *
     * **Assignment-time validation (same backing implementation as MergeArrangementsTask):** strict
     * `Date` type required at assignment. Strings, numbers, and other types are rejected
     * immediately with `WRONG_PARAMETER_TYPE` — NOT at submit time as the docs imply.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554925269}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554925269.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned a non-`Date` value.
     */
    contractCostAccrualDate: Date;

    /**
     * Holds an array of internal IDs of the revenue element records to merge.
     *
     * This property is required. Assignment-time validation: setting this to an empty array, `null`,
     * or a non-array value throws SYNCHRONOUSLY at assignment time (NOT at `submit()` time as docs
     * imply).     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554925375}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554925375.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned `null` or a non-array value. Message: `elements is expected as Array`.     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Assigned an empty array `[]`. Message: `elements: Missing a required argument: null`.     */
    elements: (number | string)[];

    /**
     * The date of the new revenue arrangement.
     *
     * Optional. Default value is today's date.
     *
     * **Assignment-time validation (same backing implementation as MergeArrangementsTask):** strict
     * `Date` type required at assignment. Strings, numbers, and other types are rejected
     * immediately with `WRONG_PARAMETER_TYPE` — NOT at submit time as the docs imply.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554925489}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554925489.html}
     *
     * @since 2019.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Assigned a non-`Date` value.
     */
    revenueArrangementDate: Date;

    /**
     * Submits the merge task for processing.
     *
     * Returns a task ID that uniquely identifies the merge task. This task ID also represents
     * the submission ID of the internal bulk process that performs the merge.
     *
     * **Note on error timing:** the docs' `WRONG_PARAMETER_TYPE` claim for
     * date properties fires at PROPERTY-ASSIGNMENT time instead — see the per-property `@throws`
     * notes. By the time `submit()` runs, type errors have already been caught.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554994855}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554994855.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @return The task ID of the submitted merge task.
     */
    submit(): number;

    /**
     * Returns the MergeElementsTask's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     *
     * @return A snapshot of this MergeElementsTask's data properties.
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the literal string `'task.MergeElementsTask'`. Useful for runtime type
     * identification.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     *
     * @return `'task.MergeElementsTask'`
     */
    toString(): 'task.MergeElementsTask';
  }
}
