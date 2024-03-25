/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./query.d.ts" />
/// <reference path="./action.d.ts" />

/**
 * SuiteScript task module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345787858}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345787858.html}
 *
 * @module N/task
 * @NApiVersion 2.x
 */
interface task {

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.scriptId
   * @param [options.deploymentId]
   * @param [options.params]
   */
  create(options: {
    taskType: task.TaskType.SCHEDULED_SCRIPT | `${task.TaskType.SCHEDULED_SCRIPT}`,
    scriptId: number | `custscript${string}` | string,
    deploymentId?: `custdeploy${string}` | string,
    params?: Record<string, string | string[] | number | Date | boolean>,
  }): task.ScheduledScriptTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.scriptId
   * @param [options.deploymentId]
   * @param [options.params]
   */
  create(options: {
    taskType: task.TaskType.MAP_REDUCE | `${task.TaskType.MAP_REDUCE}`,
    scriptId: number | `custscript${string}` | string,
    deploymentId?: `custdeploy${string}` | string,
    params?: Record<string, string | string[] | number | Date | boolean>,
  }): task.MapReduceScriptTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param [options.importFile]
   * @param [options.linkedFiles]
   * @param options.mappingId
   * @param [options.name]
   * @param [options.queueId]
   */
  create(options: {
    taskType: task.TaskType.CSV_IMPORT | `${task.TaskType.CSV_IMPORT}`,
    importFile?: file.File | string,
    linkedFiles?: Record<string, file.File | string>,
    mappingId: number | string,
    name?: string,
    queueId?: number | string,
  }): task.CsvImportTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.dedupeMode
   * @param options.entityType
   * @param [options.masterRecordId]
   * @param [options.masterSelectionMode]
   * @param options.recordIds
   */
  create(options: {
    taskType: task.TaskType.ENTITY_DEDUPLICATION | `${task.TaskType.ENTITY_DEDUPLICATION}`,
    dedupeMode: task.DedupeMode | `${task.DedupeMode}`,
    entityType: task.DedupeEntityType | `${task.DedupeEntityType}`,
    masterRecordId?: number | string,
    masterSelectionMode?: task.MasterSelectionMode,
    recordIds: (number | string)[],
  }): task.EntityDeduplicationTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param [options.params]
   * @param options.recordId
   * @param options.recordType
   * @param options.workflowId
   */
  create(options: {
    taskType: task.TaskType.WORKFLOW_TRIGGER | `${task.TaskType.WORKFLOW_TRIGGER}`,
    params?: Record<string, string | string[] | number | Date | boolean>,
    recordId: number | string,
    recordType: record.Type | `${record.Type}` | record.CustomType | string,
    workflowId: number | string,
  }): task.WorkflowTriggerTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.savedSearchId
   * @param options.fileId
   */
  create(options: {
    taskType: task.TaskType.SEARCH | `${task.TaskType.SEARCH}`,
    savedSearchId: number | string,
    fileId: number | string,
  }): task.SearchTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.savedSearchId
   * @param options.filePath
   */
  create(options: {
    taskType: task.TaskType.SEARCH | `${task.TaskType.SEARCH}`,
    savedSearchId: number | string,
    filePath: number | string,
  }): task.SearchTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param options.fileId
   */
  create(options: {
    taskType: task.TaskType.QUERY | `${task.TaskType.QUERY}`,
    query: query.Query,
    fileId: number | string,
  }): task.QueryTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param options.filePath
   */
  create(options: {
    taskType: task.TaskType.QUERY | `${task.TaskType.QUERY}`,
    query: query.Query,
    filePath: number | string,
  }): task.QueryTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param [options.params]
   * @param options.fileId
   */
  create(options: {
    taskType: task.TaskType.SUITE_QL | `${task.TaskType.SUITE_QL}`,
    query: string,
    params?: (string | number | boolean)[],
    fileId: number | string,
  }): task.SuiteQLTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param [options.params]
   * @param options.filePath
   */
  create(options: {
    taskType: task.TaskType.SUITE_QL | `${task.TaskType.SUITE_QL}`,
    query: string,
    params?: (string | number | boolean)[],
    filePath: number | string,
  }): task.SuiteQLTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.recordType
   * @param options.action
   * @param [options.condition]
   * @param options.params
   */
  create(options: {
    taskType: task.TaskType.RECORD_ACTION | `${task.TaskType.RECORD_ACTION}`,
    recordType: record.Type | `${record.Type}` | record.CustomType | string,
    action: action.ActionID | `${action.ActionID}`,
    condition: task.ActionCondition | `${task.ActionCondition}`,
    params: {
      recordId: number | string,
      [p: string]: string | string[] | number | Date | boolean,
    }[],
  }): task.RecordActionTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.recordType
   * @param options.action
   * @param [options.condition]
   * @param options.paramCallback
   */
  create(options: {
    taskType: task.TaskType.RECORD_ACTION | `${task.TaskType.RECORD_ACTION}`,
    recordType: record.Type | `${record.Type}` | record.CustomType | string,
    action: action.ActionID | `${action.ActionID}`,
    condition: task.ActionCondition | `${task.ActionCondition}`,
    paramCallback: <RecordID extends number | string>(recordId: RecordID) => {
      recordId: RecordID,
      [p: string]: string | string[] | number | Date | boolean,
    },
  }): task.RecordActionTask;

  /**
   * Check current status of a submitted task. The task to be checked is identified by its task ID.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345805891}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345805891.html}
   *
   * @param options
   * @param options.taskId
   */
  checkStatus(options: {
    taskId: string,
  }): task.ScheduledScriptTaskStatus
    | task.MapReduceScriptTaskStatus
    | task.CsvImportTaskStatus
    | task.EntityDeduplicationTaskStatus
    | task.WorkflowTriggerTaskStatus
    | task.SearchTaskStatus
    | task.QueryTaskStatus
    | task.SuiteQLTaskStatus
    | task.RecordActionTaskStatus;
}

declare namespace task {

  /**
   * Holds the string values for the types of task objects you can create using `task.create(options)`
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345806937}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345806937.html}
   */
  export enum TaskType {
    SCHEDULED_SCRIPT = 'SCHEDULED_SCRIPT',
    MAP_REDUCE = 'MAP_REDUCE',
    CSV_IMPORT = 'CSV_IMPORT',
    ENTITY_DEDUPLICATION = 'ENTITY_DEDUPLICATION',
    WORKFLOW_TRIGGER = 'WORKFLOW_TRIGGER',
    SEARCH = 'SEARCH',
    QUERY = 'QUERY',
    SUITE_QL = 'SUITE_QL',
    RECORD_ACTION = 'RECORD_ACTION',
  }

  /**
   * Holds the string values for possible task statuses
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345807357}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345807357.html}
   */
  export enum TaskStatus {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    COMPLETE = 'COMPLETE',
    FAILED = 'FAILED',
  }

  /**
   * Holds the string values for supported master selection modes when merging duplicate records with `task.EntityDeduplicationTask`
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345807507}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345807507.html}
   */
  export enum MasterSelectionMode {
    CREATED_EARLIEST = 'CREATED_EARLIEST',
    MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY',
    MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS',
    SELECT_BY_ID = 'SELECT_BY_ID',
  }

  /**
   * Holds the string values for the available deduplication modes when merging duplicate records with `task.EntityDeduplicationTask`
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345807658}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345807658.html}
   */
  export enum DedupeMode {
    MERGE = 'MERGE',
    DELETE = 'DELETE',
    MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT',
    MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES',
  }

  /**
   * Holds the string values for entity types for which you can merge duplicate records with `task.EntityDeduplicationTask`
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345807845}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345807845.html}
   */
  export enum DedupeEntityType {
    CUSTOMER = 'CUSTOMER',
    LEAD = 'LEAD',
    PROSPECT = 'PROSPECT',
    CONTACT = 'CONTACT',
    VENDOR = 'VENDOR',
    PARTNER = 'PARTNER',
  }

  /**
   * Holds the string values for possible stages in `task.MapReduceScriptTask` for a map/reduce script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345808152}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345808152.html}
   */
  export enum MapReduceStage {
    GET_INPUT = 'GET_INPUT',
    MAP = 'MAP',
    SHUFFLE = 'SHUFFLE',
    REDUCE = 'REDUCE',
    SUMMARIZE = 'SUMMARIZE',
  }

  /**
   * Holds the string values for the possible record action conditions used in `RecordActionTask.condition`
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128916}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128916.html}
   */
  export enum ActionCondition {
    ALL_QUALIFIED_INSTANCES = 'ALL_QUALIFIED_INSTANCES',
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392318707}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392318707.html}
   *
   * @protected
   * @constructor
   */
  export interface ScheduledScriptTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158220774438}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158220774438.html}
     */
    id: string;

    /**
     * The Internal ID or Script ID of the Script record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459331604003}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459331604003.html}
     */
    scriptId: number | `custscript${string}` | string;

    /**
     * The Internal ID or Script ID of the Script Deployment record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46258483886}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46258483886.html}
     */
    deploymentId: `custdeploy${string}` | string;

    /**
     * Key/value pairs which override static script parameter field values on the deployment
     * Used to dynamically pass context to the script
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459205261229}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459205261229.html}
     */
    params: Record<string, string>;

    /**
     * Submits the task and returns an unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460871520995}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460871520995.html}
     *
     * @governance 20 units
     * @return taskId
     *
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.ScheduledScriptTask)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798266}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798266.html}
   *
   * @protected
   * @constructor
   */
  export interface ScheduledScriptTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158220908669}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158220908669.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Script ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460720153807}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460720153807.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly scriptId: number;

    /**
     * Script deployment ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454809204101}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454809204101.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly deploymentId: `custdeploy${string}` | string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458090454100}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458090454100.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.ScheduledScriptTaskStatus).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798404}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798404.html}
   *
   * @protected
   * @constructor
   */
  export interface MapReduceScriptTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158227558782}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158227558782.html}
     */
    id: string;

    /**
     * The Internal ID or Script ID of the Script record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456008239745}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456008239745.html}
     */
    scriptId: number | `custscript${string}` | string;

    /**
     * The Internal ID or Script ID of the Script Deployment record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456020446776}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456020446776.html}
     */
    deploymentId: `custdeploy${string}` | string;

    /**
     * Key/value pairs which override static script parameter field values on the deployment
     * Used to dynamically pass context to the script
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457650390624}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457650390624.html}
     */
    params: Record<string, string>;

    /**
     * Submits the task and returns an unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453639770507}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453639770507.html}
     *
     * @governance 20 units
     * @return taskId
     */
    submit(): string;

    /**
     * Returns the object type name (task.MapReduceScriptTask).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798546}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798546.html}
   *
   * @protected
   * @constructor
   */
  export interface MapReduceScriptTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158227552252}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158227552252.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Script ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453886657714}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453886657714.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly scriptId: number;

    /**
     * Script deployment ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453416076659}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453416076659.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly deploymentId: `custdeploy${string}` | string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457534118651}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457534118651.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the current stage of the Map/Reduce script. Returns one of the task.MapReduceStage enum values.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460753112791}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460753112791.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly stage: task.MapReduceStage | `${task.MapReduceStage}`;

    /**
     * Get percentage of completion for the current stage. Note that INPUT and SUMMARIZE are either 0% or 100% complete at any given time.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456839538573}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456839538573.html}
     *
     * @governance 10 units
     */
    getPercentageCompleted(): number;

    /**
     * Total number of records/rows not yet processed by the MAP phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454059082030}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454059082030.html}
     *
     * @governance 10 units
     */
    getPendingMapCount(): number;

    /**
     * Total number of record/row inputs to the MAP phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459523559569}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459523559569.html}
     *
     * @governance 10 units
     */
    getTotalMapCount(): number;

    /**
     * Total number of bytes not yet processed by the MAP phase (a component of total size)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456033874511}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456033874511.html}
     *
     * @governance 25 units
     */
    getPendingMapSize(): number;

    /**
     * Total number of records/rows not yet processed by the REDUCE phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453019348144}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453019348144.html}
     *
     * @governance 10 units
     */
    getPendingReduceCount(): number;

    /**
     * Total number of record/row inputs to the REDUCE phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458279663085}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458279663085.html}
     *
     * @governance 10 units
     */
    getTotalReduceCount(): number;

    /**
     * Total number of bytes not yet processed by the REDUCE phase (a component of total size)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454281860351}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454281860351.html}
     *
     * @governance 25 units
     */
    getPendingReduceSize(): number;

    /**
     * Total number of records/rows not yet iterated by the script
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453068786620}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453068786620.html}
     *
     * @governance 10 units
     */
    getPendingOutputCount(): number;

    /**
     * Returns the total size in bytes of all key/value pairs written as output (a component of total size)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458842102049}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458842102049.html}
     *
     * @governance 25 units
     */
    getPendingOutputSize(): number;

    /**
     * Total number of record/row inputs to the OUTPUT phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452285705566}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452285705566.html}
     *
     * @governance 10 units
     */
    getTotalOutputCount(): number;

    /**
     * Returns the total size in bytes of all stored work in progress
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455688720702}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455688720702.html}
     *
     * @governance 25 units
     */
    getCurrentTotalSize(): number;

    /**
     * Returns the object type name (task.MapReduceScriptTaskStatus)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798668}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798668.html}
   *
   * @protected
   * @constructor
   */
  export interface CsvImportTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228669163}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228669163.html}
     */
    id: string;

    /**
     * A file.File object containing data to be imported OR a string containing raw CSV text to be imported
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459367004393}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459367004393.html}
     */
    importFile: file.File | string;

    /**
     * Internal ID or script ID of a saved import map to be used for the import
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457792297362}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457792297362.html}
     */
    mappingId: number | string;

    /**
     * Overrides the CSV import queue preference
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454650817870}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454650817870.html}
     */
    queueId: number;

    /**
     * The name of the import job to be shown on the status page for CSV imports
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454580627441}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454580627441.html}
     */
    name: string;

    /**
     * A map of key/value pairs "sublist->file" for a multi-file import job.
     * The key defines the internal ID of the record sublist for which data is being imported.
     * The value is a file.File object containing data to be imported OR a string containing raw CSV text to be imported
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458306823729}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458306823729.html}
     */
    linkedFiles: Record<string, file.File | string>;

    /**
     * Submits the task and returns an unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_5594909667}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_5594909667.html}
     *
     * @governance 100 units
     *
     * @return taskId
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.CsvImportTask).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798793}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798793.html}
   *
   * @protected
   * @constructor
   */
  export interface CsvImportTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228614995}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228614995.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453959899902}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453959899902.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.CsvImportTaskStatus).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799008}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799008.html}
   *
   * @protected
   * @constructor
   */
  export interface EntityDeduplicationTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228488492}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228488492.html}
     */
    id: string;

    /**
     * Represents the entity type. Use values from the task.DedupeEntityType enum
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458601928710}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458601928710.html}
     */
    entityType: task.DedupeEntityType | `${task.DedupeEntityType}`;

    /**
     * Master record ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456971679686}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456971679686.html}
     */
    masterRecordId: number;

    /**
     * Master selection mode. Use values from the task.MasterSelectionMode enum
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46682983398}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46682983398.html}
     */
    masterSelectionMode: task.MasterSelectionMode | `${task.MasterSelectionMode}`;

    /**
     * Deduplication mode. Use values from the task.DedupeMode enum
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456247802733}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456247802733.html}
     */
    dedupeMode: task.DedupeMode | `${task.DedupeMode}`;

    /**
     * Records to deduplicate
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456050964354}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456050964354.html}
     */
    recordIds: number[];

    /**
     * Submits the task and returns an unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459274536131}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459274536131.html}
     *
     * @governance 100 units
     *
     * @return taskId
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.EntityDeduplicationTask).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799153}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799153.html}
   *
   * @protected
   * @constructor
   */
  export interface EntityDeduplicationTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228461568}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228461568.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452162109374}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452162109374.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.EntityDeduplicationTaskStatus).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799266}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799266.html}
   *
   * @protected
   * @constructor
   */
  export interface WorkflowTriggerTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228405355}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228405355.html}
     */
    id: string;

    /**
     * The record type of the workflow base record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452073913574}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452073913574.html}
     */
    recordType: record.Type | `${record.Type}` | record.CustomType | string;

    /**
     * The internal ID of the base record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456538635253}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456538635253.html}
     */
    recordId: number;

    /**
     * The internal ID (number) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46870056152}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46870056152.html}
     */
    workflowId: number | string;

    /**
     * Key/value pairs which override static script parameter field values on the deployment.
     * Used to dynamically pass context to the script
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457660766600}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457660766600.html}
     */
    params: Record<string, string>;

    /**
     * Submits the task and returns an unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459607788085}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459607788085.html}
     *
     * @governance 20 units
     *
     * @return taskId
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.WorkflowTriggerTask)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799392}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799392.html}
   *
   * @protected
   * @constructor
   */
  export interface WorkflowTriggerTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158221094722}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158221094722.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46640258788}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46640258788.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.WorkflowTriggerTaskStatus)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4799343953}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4799343953.html}
   *
   * @protected
   * @constructor
   */
  export interface SearchTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158229269880}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158229269880.html}
     */
    id: number;

    /**
     * An ID of saved search to be executed during the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804561931}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804561931.html}
     */
    savedSearchId: number;

    /**
     * Id of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804562077}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804562077.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     */
    fileId: number;

    /**
     * Path of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804562119}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804562119.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     */
    filePath: number;

    /**
     * Completion scripts which will be run when the async search finishes.
     * When submission succeeds an id attribute will be added into each completion task.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530715682}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530715682.html}
     *
     * Example - two inbound dependencies, a Scheduled Script and a Map Reduce Script.
     *
     * inboundDependencies before submit(), after adding two inbound dependencies:
     * {"0":{"type":"task.ScheduledScriptTask","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
     * "1":{"type":"task.MapReduceScriptTask","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
     *
     * inboundDependencies after succesfull submit(), id was added into tasks:
     * {"0":{"type":"task.ScheduledScriptTask","id":"SCHEDSCRIPT_0168697b126d1705061d0d690a787755500b046a1912686b10_349d94266564827c739a2ba0a5b9d476f4097217","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
     * "1":{"type":"task.MapReduceScriptTask","id":"MAPREDUCETASK_0268697b126d1705061d0d69027f7b39560f01001c_7a02acb4bdebf0103120b09302170720aa57bca4","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    readonly inboundDependencies: {
      type: task.ScheduledScriptTask | task.MapReduceScriptTask,
      scriptId: `customscript${string}`,
      deploymentId: `customdeploy${string}`,
      params?: Record<string, string | number | boolean>,
    }[];

    /**
     * Adds an inbound dependency (completion script)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530711128}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530711128.html}
     *
     * @param options
     * @param options.dependentScript
     */
    addInboundDependency(options: {
      dependentScript: ScheduledScriptTask | MapReduceScriptTask | {
        taskType: task.TaskType.SCHEDULED_SCRIPT | task.TaskType.MAP_REDUCE,
        scriptId: `customscript${string}`,
        deploymentId?: `customdeploy${string}`,
        params?: Record<string, string | number | boolean>,
      },
    }): void;

    /**
     * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804558173}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804558173.html}
     *
     * @governance 100 units
     * @return taskId
     *
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} YOU_DO_NOT_HAVE_ACCESS_TO_THE_MEDIA_ITEM_YOU_SELECTED if you do not have permission to access the file
     * @throws {error.SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if file object references non existing file
     * @throws {error.SuiteScriptError} MUST_IDENTIFY_A_FILE if path specifies folder
     * @throws {error.SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_ASYNC_SEARCH_TASK an attempt to submit a search task instance which has been submitted successfully before
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_MR_ALREADY_SUBMITTED map reduce dependency has had already been submitted and has not finished yet
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_MR_INCORRECT_STATUS status of map reduce dependency script is incorrect, it has to be "Not Scheduled"
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_SS_ALREADY_SUBMITTED scheduled script dependency has had already been submitted and has not finished yet
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_DEPENDENCY_SS_INCORRECT_STATUS status of scheduled script dependency script is incorrect, it has to be "Not Scheduled"
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_DEPLOYMENT_FOR_DEPENDENCY no available deployment was found for dependency
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_MULTIPLE_DEPENDENCIES multiple dependencies with the same script id were submitted
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_SCRIPT_ID_NOT_FOUND script with the entered id was not found
     * @throws {error.SuiteScriptError} ASYNC_SEARCH_SEARCH_ID_NOT_FOUND search id was not found
     */
    submit(): string;

    /**
     * Returns the object type name (task.SearchTask).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4799344334}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4799344334.html}
   *
   * @protected
   * @constructor
   */
  export interface SearchTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572729}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572729.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572441}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572441.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the fileId of exported file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572988}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572988.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly fileId: number;

    /**
     * Represents id of saved search being used for export
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572868}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572868.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly savedSearchId: number;

    /**
     * Returns the object type name (task.SearchTaskStatus).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223655124}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223655124.html}
   *
   * @protected
   * @constructor
   */
  export interface QueryTask {

    /**
     * Query definition for the query task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223782030}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223782030.html}
     */
    query: query.Query;

    /**
     * Id of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223756577}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223756577.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     */
    fileId: number;

    /**
     * Path of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223771684}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223771684.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     */
    filePath: number;

    /**
     * Completion scripts which will be run when the async search finishes.
     * When submission succeeds an id attribute will be added into each completion task.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223776276}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223776276.html}
     *
     * Example - two inbound dependencies, a Scheduled Script and a Map Reduce Script.
     *
     * inboundDependencies before submit(), after adding two inbound dependencies:
     * {"0":{"type":"task.ScheduledScriptTask","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
     * "1":{"type":"task.MapReduceScriptTask","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
     *
     * inboundDependencies after succesfull submit(), id was added into tasks:
     * {"0":{"type":"task.ScheduledScriptTask","id":"SCHEDSCRIPT_0168697b126d1705061d0d690a787755500b046a1912686b10_349d94266564827c739a2ba0a5b9d476f4097217","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
     * "1":{"type":"task.MapReduceScriptTask","id":"MAPREDUCETASK_0268697b126d1705061d0d69027f7b39560f01001c_7a02acb4bdebf0103120b09302170720aa57bca4","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    readonly inboundDependencies: {
      type: task.ScheduledScriptTask | task.MapReduceScriptTask,
      scriptId: `customscript${string}`,
      deploymentId: `customdeploy${string}`,
      params?: Record<string, string | number | boolean>,
    }[];

    /**
     * Adds an inbound dependency (completion script)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223731551}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223731551.html}
     *
     * @param options
     * @param options.dependentScript
     */
    addInboundDependency(options: {
      dependentScript: ScheduledScriptTask | MapReduceScriptTask | {
        taskType: task.TaskType.SCHEDULED_SCRIPT | task.TaskType.MAP_REDUCE,
        scriptId: `customscript${string}`,
        deploymentId?: `customdeploy${string}`,
        params?: Record<string, string | number | boolean>,
      },
    }): void;

    /**
     * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223745979}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223745979.html}
     *
     * @governance 100 units
     * @return taskId
     *
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_MR_ALREADY_SUBMITTED A dependent map/reduce script task is already submitted and is not complete.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_MR_INCORRECT_STATUS The status of the script deployment record for the specified dependent map/reduce script task has a value other than "Not Scheduled".
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_SS_ALREADY_SUBMITTED A dependent scheduled script task is already submitted and is not complete.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_SS_INCORRECT_STATUS The status of the script deployment record for the specified dependent scheduled script task has a value other than "Not Scheduled".
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPLOYMENT_FOR_DEPENDENCY A script deployment record for the specified dependent script task is not available for one of the following reasons: 1) A script deployment record was not specified when the dependent task was created, and automatic lookup for an available script deployment record failed. 2) The script deployment record specified when the dependent task was created is not found.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_MULTIPLE_DEPENDENCIES The same dependent task is passed to this method more than one time.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_QUERY_ID_NOT_FOUND A query task with the specified script ID is not found.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_SCRIPT_ID_NOT_FOUND The specified dependent task is not found.
     * @throws {error.SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_ASYNC_QUERY_TASK The query task was already submitted and completed successfully.
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 The query task cannot be submitted due to an unexpected error.
     * @throws {error.SuiteScriptError} MUST_IDENTIFY_A_FILE The QueryTask.filePath property specifies a folder and not a file.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required property is not specified.
     * @throws {error.SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST The QueryTask.fileId property or QueryTask.filePath property references a file that does not exist.
     * @throws {error.SuiteScriptError} YOU_DO_NOT_HAVE_ACCESS_TO_THE_MEDIA_ITEM_YOU_SELECTED You do not have permission to access the file specified by the QueryTask.fileId property or QueryTask.filePath property.
     */
    submit(): string;

    /**
     * Returns the object type name (task.QueryTask)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223798559}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223798559.html}
   *
   * @protected
   * @constructor
   */
  export interface QueryTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223815752}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223815752.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223812701}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223812701.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the fileId of exported file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223806776}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223806776.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly fileId: number;

    /**
     * Query definition for the submitted query task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223809924}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223809924.html}
     */
    query: query.Query;

    /**
     * Returns the object type name (task.QueryTaskStatus).
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223833809}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223833809.html}
   *
   * @protected
   * @constructor
   */
  export interface SuiteQLTask {

    /**
     * SuiteQL query definition for the SuiteQL task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223864743}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223864743.html}
     */
    query: string;

    /**
     * Parameters for the SuiteQL query
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223862155}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223862155.html}
     */
    params: (string | number | boolean)[];

    /**
     * Id of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223852102}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223852102.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     */
    fileId: number;

    /**
     * Path of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223855624}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223855624.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     */
    filePath: number;

    /**
     * Completion scripts which will be run when the async search finishes.
     * When submission succeeds an id attribute will be added into each completion task.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223858725}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223858725.html}
     *
     * Example - two inbound dependencies, a Scheduled Script and a Map Reduce Script.
     *
     * inboundDependencies before submit(), after adding two inbound dependencies:
     * {"0":{"type":"task.ScheduledScriptTask","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
     * "1":{"type":"task.MapReduceScriptTask","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
     *
     * inboundDependencies after succesfull submit(), id was added into tasks:
     * {"0":{"type":"task.ScheduledScriptTask","id":"SCHEDSCRIPT_0168697b126d1705061d0d690a787755500b046a1912686b10_349d94266564827c739a2ba0a5b9d476f4097217","scriptId":"customscript_as_ftr_ss","deploymentId":"customdeploy_ss_dpl","params":{"custscript_ss_as_srch_res":"SuiteScripts/ExportFile.csv"}},
     * "1":{"type":"task.MapReduceScriptTask","id":"MAPREDUCETASK_0268697b126d1705061d0d69027f7b39560f01001c_7a02acb4bdebf0103120b09302170720aa57bca4","scriptId":"customscript_as_ftr_mr","deploymentId":"customdeploy_mr_dpl","params":{"custscript_mr_as_srch_res":"SuiteScripts/ExportFile.csv"}}}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    readonly inboundDependencies: {
      type: task.ScheduledScriptTask | task.MapReduceScriptTask,
      scriptId: `customscript${string}`,
      deploymentId: `customdeploy${string}`,
      params?: Record<string, string | number | boolean>,
    }[];

    /**
     * Adds an inbound dependency (completion script)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223844941}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223844941.html}
     *
     * @param options
     * @param options.dependentScript
     */
    addInboundDependency(options: {
      dependentScript: ScheduledScriptTask | MapReduceScriptTask | {
        taskType: task.TaskType.SCHEDULED_SCRIPT | task.TaskType.MAP_REDUCE,
        scriptId: `customscript${string}`,
        deploymentId?: `customdeploy${string}`,
        params?: Record<string, string | number | boolean>,
      },
    }): void;

    /**
     * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223847318}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223847318.html}
     *
     * @governance 100 units
     * @return taskId
     *
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_MR_ALREADY_SUBMITTED A dependent map/reduce script task is already submitted and is not complete.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_MR_INCORRECT_STATUS The status of the script deployment record for the specified dependent map/reduce script task has a value other than "Not Scheduled".
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_SS_ALREADY_SUBMITTED A dependent scheduled script task is already submitted and is not complete.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPENDENCY_SS_INCORRECT_STATUS The status of the script deployment record for the specified dependent scheduled script task has a value other than "Not Scheduled".
     * @throws {error.SuiteScriptError} ASYNC_QUERY_DEPLOYMENT_FOR_DEPENDENCY A script deployment record for the specified dependent script task is not available for one of the following reasons: 1) A script deployment record was not specified when the dependent task was created, and automatic lookup for an available script deployment record failed. 2) The script deployment record specified when the dependent task was created is not found.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_MULTIPLE_DEPENDENCIES The same dependent task is passed to this method more than one time.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_QUERY_ID_NOT_FOUND A query task with the specified script ID is not found.
     * @throws {error.SuiteScriptError} ASYNC_QUERY_SCRIPT_ID_NOT_FOUND The specified dependent task is not found.
     * @throws {error.SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_ASYNC_QUERY_TASK The query task was already submitted and completed successfully.
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 The query task cannot be submitted due to an unexpected error.
     * @throws {error.SuiteScriptError} MUST_IDENTIFY_A_FILE The QueryTask.filePath property specifies a folder and not a file.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required property is not specified.
     * @throws {error.SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST The QueryTask.fileId property or QueryTask.filePath property references a file that does not exist.
     * @throws {error.SuiteScriptError} YOU_DO_NOT_HAVE_ACCESS_TO_THE_MEDIA_ITEM_YOU_SELECTED You do not have permission to access the file specified by the QueryTask.fileId property or QueryTask.filePath property.
     */
    submit(): string;

    /**
     * Returns the object type name (task.QueryTask)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223884561}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223884561.html}
   *
   * @protected
   * @constructor
   */
  export interface SuiteQLTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223898107}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223898107.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223896074}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223896074.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the fileId of exported file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223887802}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223887802.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly fileId: number;

    /**
     * SuiteQL query definition for the SuiteQL task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223889689}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223889689.html}
     */
    query: string;

    /**
     * Parameters for the SuiteQL query
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223893036}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223893036.html}
     */
    params: (string | number | boolean)[];

    /**
     * Returns the object type name (task.QueryTaskStatus)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544121429}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544121429.html}
   *
   * @protected
   * @constructor
   */
  export interface RecordActionTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158221148568}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158221148568.html}
     */
    id: string;

    /**
     * The record type on which the action is to be performed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544122891}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544122891.html}
     */
    recordType: record.Type | `${record.Type}` | record.CustomType | string;

    /**
     * The ID of the action to be invoked
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544123083}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544123083.html}
     */
    action: action.ActionID | `${action.ActionID}`;

    /**
     * The condition used to select record IDs of records for which the action is to be executed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544123142}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544123142.html}
     */
    condition: task.ActionCondition | `${task.ActionCondition}`;

    /**
     * An array of parameter objects. Each object corresponds to one record ID of the record for which the action is to be executed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544132018}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544132018.html}
     */
    params: {
      recordId: number | string,
      [p: string]: string | string[] | number | Date | boolean,
    }[];

    /**
     * Property of type function that takes record ID and returns the parameter object for the specified record ID. Is to be used in conjunction with `task.ActionCondition`.
     * This parameter cannot be specified when `RecordActionTask.params` is specified.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544131790}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544131790.html}
     */
    paramCallback: <RecordID extends number | string>(recordId: RecordID) => {
      recordId: RecordID,
      [p: string]: string | string[] | number | Date | boolean,
    };

    /**
     * Submits a record action task script deployment for processing and returns its task ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544121926}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544121926.html}
     *
     * @governance 50 units
     * @return taskId
     *
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 Failed to submit job request: {reason}
     */
    submit(): string;

    /**
     * Returns the object type name (task.RecordActionTask)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;

  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544125423}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544125423.html}
   *
   * @protected
   * @constructor
   */
  export interface RecordActionTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158221207526}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158221207526.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544127664}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544127664.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * The number of record actions with a pending status
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128774}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128774.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly pending: number;

    /**
     * The number of record actions with a successful status
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128436}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128436.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly succeeded: number;

    /**
     * The number of record actions with a failed status
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128556}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128556.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly failed: number;

    /**
     * The number of record actions that are already executed, either failed or successful
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128319}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128319.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly complete: number;

    /**
     * The results of successfully executed record action tasks. The value of the property is the task instance ID and the corresponding action result.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128024}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128024.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly results: Record<`${number}`, {
      notifications: any[],
      response: {
        action: string,
        id: string,
        recordCount: number,
        success: boolean,
      },
    }>;

    /**
     * The error details of failed action executions. The value of the property is the record instance ID and the corresponding error details.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128200}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128200.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly errors: Record<`${number}`, {
      name: string,
      message: string,
    }>;

    /**
     * Returns the object type name (task.RecordActionTaskStatus)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;

  }
}