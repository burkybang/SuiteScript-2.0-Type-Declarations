/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./query.d.ts" />
/// <reference path="./action.d.ts" />
/// <reference path="./documentCapture.d.ts" />
/// <reference path="./workbook.d.ts" />

/**
 * SuiteScript task module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345787858}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345787858.html}
 * @module N/task
 * @NApiVersion 2.x
 */
interface task {

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.scriptId
   * @param [options.deploymentId]
   * @param [options.params]
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.SCHEDULED_SCRIPT | `${task.TaskType.SCHEDULED_SCRIPT}`,
    scriptId: number | `custscript${string}` | string,
    deploymentId?: `custdeploy${string}` | string,
    params?: Record<string, record.FieldValue>,
  }): task.ScheduledScriptTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.scriptId
   * @param [options.deploymentId]
   * @param [options.params]
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.MAP_REDUCE | `${task.TaskType.MAP_REDUCE}`,
    scriptId: number | `custscript${string}` | string,
    deploymentId?: `custdeploy${string}` | string,
    params?: Record<string, record.FieldValue>,
  }): task.MapReduceScriptTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param [options.importFile]
   * @param [options.linkedFiles]
   * @param options.mappingId
   * @param [options.name]
   * @param [options.queueId]
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.dedupeMode
   * @param options.entityType
   * @param [options.masterRecordId]
   * @param [options.masterSelectionMode]
   * @param options.recordIds
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param [options.params]
   * @param options.recordId
   * @param options.recordType
   * @param options.workflowId
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.WORKFLOW_TRIGGER | `${task.TaskType.WORKFLOW_TRIGGER}`,
    params?: Record<string, record.FieldValue>,
    recordId: number | string,
    recordType: record.Type | `${record.Type}` | record.CustomType | string,
    workflowId: number | string,
  }): task.WorkflowTriggerTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2017.1
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.savedSearchId
   * @param options.fileId
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
   * @governance none
   * @restriction Server-side scripts only
   * @since 2017.1
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.savedSearchId
   * @param options.filePath
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.SEARCH | `${task.TaskType.SEARCH}`,
    savedSearchId: number | string,
    filePath: string,
  }): task.SearchTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param options.fileId
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param options.filePath
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.QUERY | `${task.TaskType.QUERY}`,
    query: query.Query,
    filePath: string,
  }): task.QueryTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param [options.params]
   * @param options.fileId
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.query
   * @param [options.params]
   * @param options.filePath
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.SUITE_QL | `${task.TaskType.SUITE_QL}`,
    query: string,
    params?: (string | number | boolean)[],
    filePath: string,
  }): task.SuiteQLTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.recordType
   * @param options.action
   * @param [options.condition]
   * @param options.params
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
   * @governance none
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param options.recordType
   * @param options.action
   * @param [options.condition]
   * @param options.paramCallback
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2025.2
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param [options.inputFile]
   * @param [options.documentType]
   * @param [options.features]
   * @param [options.language]
   * @param [options.ociConfig]
   * @param [options.outputFilePath]
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.DOCUMENT_CAPTURE | `${task.TaskType.DOCUMENT_CAPTURE}`,
    inputFile?: file.File,
    documentType?: documentCapture.DocumentType | `${documentCapture.DocumentType}`,
    features?: (documentCapture.Feature | `${documentCapture.Feature}`)[],
    language?: documentCapture.Language | `${documentCapture.Language}`,
    ociConfig?: documentCapture.OciConfig,
    outputFilePath?: string,
  }): task.DocumentCaptureTask;

  /**
   * Creates a task of the given type and returns the task object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392320106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392320106.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * The PIVOT task type is undocumented in the Help Center; present at runtime. It returns a task.PivotExecutionTask, the asynchronous counterpart to workbook.Workbook.runPivot(options) [N/workbook].
   *
   * @param options
   * @param options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param [options.workbook]
   * @param [options.pivotId]
   * @param [options.pivotStorageId]
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskType` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskType` is not a recognized task type. Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
   */
  create(options: {
    taskType: task.TaskType.PIVOT | `${task.TaskType.PIVOT}`,
    workbook?: workbook.Workbook | string,
    pivotId?: string,
    pivotStorageId?: number,
  }): task.PivotExecutionTask;

  /**
   * Check current status of a submitted task. The task to be checked is identified by its task ID.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345805891}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345805891.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.taskId
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.taskId` is missing/null.
   * @throws {error.SuiteScriptError} INVALID_TASK_TYPE If `options.taskId` is malformed or does not correspond to a real task (the task type is parsed out of the ID). Note: the runtime code is `INVALID_TASK_TYPE`, unprefixed.
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
    | task.RecordActionTaskStatus
    | task.DocumentCaptureTaskStatus
    | task.PivotExecutionTaskStatus;
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
    /**
     * Note: the runtime value is `'SUITEQL'` (no underscore), even though the
     * member name and the Help Center both use `SUITE_QL`. Passing the
     * documented string `'SUITE_QL'` to `task.create` throws `INVALID_TASK_TYPE`;
     * the accepted string is `'SUITEQL'`.
     */
    SUITE_QL = 'SUITEQL',
    RECORD_ACTION = 'RECORD_ACTION',
    DOCUMENT_CAPTURE = 'DOCUMENT_CAPTURE',
    /**
     * Undocumented in the Help Center; present at runtime.
     */
    PIVOT = 'PIVOT',
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
   * @protected
   * @constructor
   */
  export interface ScheduledScriptTask {

    /**
     * The ID of the task.
     *
     * Note: not populated at runtime - this property reads `undefined` even after
     * `submit()`. The task's ID is the return value of `submit()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158220774438}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158220774438.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

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
    params: Record<string, record.FieldValue>;

    /**
     * Submits the task and returns a unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460871520995}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460871520995.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return taskId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `scriptId` was not set (required at submit time, even though `task.create` does not enforce it).
     * @throws {error.SuiteScriptError} INVALID_ID If `scriptId` does not resolve to an existing script (the message reports the invalid script id or internal id).
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.ScheduledScriptTask)
     */
    toString(): 'task.ScheduledScriptTask';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798266}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798266.html}
   * @protected
   * @constructor
   */
  export interface ScheduledScriptTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158220908669}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158220908669.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Script ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460720153807}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460720153807.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly scriptId: number;

    /**
     * Script deployment ID.
     *
     * Note: at runtime this is a `number` (a small internal deployment index),
     * NOT the `custdeploy`-prefixed script ID string. This is asymmetric with
     * `ScheduledScriptTask.deploymentId`, which is the `custdeploy`-prefixed
     * string passed to `task.create`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454809204101}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454809204101.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly deploymentId: number;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458090454100}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458090454100.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.ScheduledScriptTaskStatus).
     */
    toString(): 'task.ScheduledScriptTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798404}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798404.html}
   * @protected
   * @constructor
   */
  export interface MapReduceScriptTask {

    /**
     * The ID of the task.
     *
     * Note: populated with the task ID after `submit()`; reads `undefined`
     * before submit. (Differs from `ScheduledScriptTask.id`, which is never
     * populated at runtime.)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158227558782}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158227558782.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

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
    params: Record<string, record.FieldValue>;

    /**
     * Submits the task and returns a unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453639770507}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453639770507.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return taskId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `scriptId` was not set (required at submit time, even though `task.create` does not enforce it).
     * @throws {error.SuiteScriptError} INVALID_ID If `scriptId` does not resolve to an existing script (the message reports the invalid script id or internal id).
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.MapReduceScriptTask).
     */
    toString(): 'task.MapReduceScriptTask';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798546}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798546.html}
   * @protected
   * @constructor
   */
  export interface MapReduceScriptTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158227552252}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158227552252.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Script ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453886657714}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453886657714.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly scriptId: number;

    /**
     * Script deployment ID.
     *
     * Note: at runtime this is a `number` (a small internal deployment index),
     * NOT the `custdeploy`-prefixed script ID string. This is asymmetric with
     * `MapReduceScriptTask.deploymentId`, which is the `custdeploy`-prefixed
     * string passed to `task.create`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453416076659}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453416076659.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly deploymentId: number;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457534118651}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457534118651.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the current stage of the Map/Reduce script. Returns one of the task.MapReduceStage enum values.
     *
     * Note: returns `null` when the task is not in an active processing stage
     * (observed `null` while PENDING and at COMPLETE).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460753112791}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460753112791.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly stage: task.MapReduceStage | `${task.MapReduceStage}` | null;

    /**
     * Get percentage of completion for the current stage. Note that INPUT and SUMMARIZE are either 0% or 100% complete at any given time.
     *
     * Note: costs 0 governance units at runtime, despite the Help Center documenting 10 units.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456839538573}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456839538573.html}
     *
     * @governance none
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
    toString(): 'task.MapReduceScriptTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798668}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798668.html}
   * @protected
   * @constructor
   */
  export interface CsvImportTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228669163}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228669163.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

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
    queueId: number | string;

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
     * Submits the task and returns a unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_5594909667}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_5594909667.html}
     *
     * @governance 100 units
     * @restriction Scheduled, RESTlet, and Bundle Installation scripts only. The Help Center says "server-side scripts", but at runtime other server contexts (Suitelet, user event, on-demand) reject the call.
     * @since 2015.2
     *
     * @return taskId
     *
     * @throws {error.SuiteScriptError} NLAPISUBMITCSVIMPORT_IS_ONLY_SUPPORTED_IN_SCHEDULED_RESTLET_AND_BUNDLE_INSTALLATION_SCRIPTS If called outside a Scheduled, RESTlet, or Bundle Installation script.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `importFile` or `mappingId` was not set before submit (validated in that order).
     * @throws {error.SuiteScriptError} CANT_FIND_SAVED_IMPORT If `mappingId` does not correspond to an existing saved import map ("No saved import with internalId {id}").
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.CsvImportTask).
     */
    toString(): 'task.CsvImportTask';

    /**
     * Convert to JSON object
     *
     * Note: at runtime the returned object also carries a `type` discriminator
     * field (`'task.CsvImportTask'`); kept as `ExcludeMethods<this>`.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345798793}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345798793.html}
   * @protected
   * @constructor
   */
  export interface CsvImportTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228614995}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228614995.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453959899902}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453959899902.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.CsvImportTaskStatus).
     */
    toString(): 'task.CsvImportTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799008}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799008.html}
   * @protected
   * @constructor
   */
  export interface EntityDeduplicationTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228488492}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228488492.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

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
    masterRecordId: number | string;

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
     *
     * Note: at runtime the getter coerces every element to a string, so even
     * after setting numbers (e.g. `[1, 2, 3]`) the property reads back as
     * `['1', '2', '3']`. Typed `(number | string)[]` to match the create option.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456050964354}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456050964354.html}
     */
    recordIds: (number | string)[];

    /**
     * Submits the task and returns a unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459274536131}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459274536131.html}
     *
     * @governance 100 units
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return taskId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `entityType` or `masterSelectionMode` was not set before submit (validated in that order). Note: `masterSelectionMode` is required at submit for all dedupe modes, even though it is optional in the create() options and is not validated at create.
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason (e.g. "Master ID must be set." when `masterSelectionMode` is SELECT_BY_ID without a `masterRecordId`, or a bad/nonexistent record ID in `recordIds`).
     */
    submit(): string;

    /**
     * Returns the object type name (task.EntityDeduplicationTask).
     */
    toString(): 'task.EntityDeduplicationTask';

    /**
     * Convert to JSON object
     *
     * Note: at runtime the returned object also carries a `type` discriminator
     * field (`'task.EntityDeduplicationTask'`); kept as `ExcludeMethods<this>`.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799153}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799153.html}
   * @protected
   * @constructor
   */
  export interface EntityDeduplicationTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228461568}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228461568.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452162109374}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452162109374.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.EntityDeduplicationTaskStatus).
     */
    toString(): 'task.EntityDeduplicationTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799266}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799266.html}
   * @protected
   * @constructor
   */
  export interface WorkflowTriggerTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158228405355}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158228405355.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

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
     * Key-value pairs to set default values on fields specific to the workflow.
     * These can include fields on the Workflow Definition Page, or workflow and state Workflow Custom Fields.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457660766600}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457660766600.html}
     */
    params: Record<string, record.FieldValue>;

    /**
     * Submits the task and returns a unique ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459607788085}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459607788085.html}
     *
     * @governance 100 units (the Help Center documents 20, but the actual runtime cost is 100)
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return taskId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `recordType`, `recordId`, or `workflowId` was not set before submit (validated in that order).
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `recordType` is not a recognized record type.
     * @throws {error.SuiteScriptError} INVALID_ID If `workflowId` does not correspond to an existing workflow.
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string;

    /**
     * Returns the object type name (task.WorkflowTriggerTask)
     */
    toString(): 'task.WorkflowTriggerTask';

    /**
     * Convert to JSON object
     *
     * Note: at runtime the returned object also carries a `type` discriminator
     * field (`'task.WorkflowTriggerTask'`); kept as `ExcludeMethods<this>`.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345799392}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345799392.html}
   * @protected
   * @constructor
   */
  export interface WorkflowTriggerTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158221094722}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158221094722.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46640258788}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46640258788.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.WorkflowTriggerTaskStatus)
     */
    toString(): 'task.WorkflowTriggerTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4799343953}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4799343953.html}
   * @protected
   * @constructor
   */
  export interface SearchTask {

    /**
     * The ID of the task.
     *
     * Note: populated with the string task ID (e.g. `SEARCH_...`) after `submit()`;
     * reads `undefined` before submit.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158229269880}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158229269880.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

    /**
     * An ID of saved search to be executed during the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804561931}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804561931.html}
     */
    savedSearchId: number;

    /**
     * Id of CSV file to export results into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804562077}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804562077.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to set both SearchTask#filePath and SearchTask#fileId
     */
    fileId: number | string;

    /**
     * Path of CSV file to export results into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804562119}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804562119.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to set both SearchTask#filePath and SearchTask#fileId
     */
    filePath: string;

    /**
     * Completion scripts which will be run when the async search finishes.
     * When submission succeeds an id attribute will be added into each completion task.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530715682}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530715682.html}
     *
     * Note: at runtime this is an object keyed by stringified index
     * (`{"0": {...}, "1": {...}}`), NOT an array. Each entry's `type` is the
     * string type name (e.g. `'task.ScheduledScriptTask'`), and an `id` string is
     * added to each entry after a successful `submit()`.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    readonly inboundDependencies: {
      [index: string]: {
        type: `task.ScheduledScriptTask` | `task.MapReduceScriptTask`,
        id?: string,
        scriptId: `customscript${string}`,
        deploymentId: `customdeploy${string}`,
        params?: Record<string, string | number | boolean>,
      },
    };

    /**
     * Adds an inbound dependency (completion script). The task must be a
     * `ScheduledScriptTask` or `MapReduceScriptTask` instance (a plain
     * `{taskType, scriptId, deploymentId}` object is rejected with
     * WRONG_PARAMETER_TYPE). Accepts the task positionally or as `{task}`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530711128}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530711128.html}
     *
     * @governance none
     *
     * @param task
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If the argument is not a ScheduledScriptTask or MapReduceScriptTask instance.
     */
    addInboundDependency(task: ScheduledScriptTask | MapReduceScriptTask): void;

    /**
     * Adds an inbound dependency (completion script). Object form of
     * {@link addInboundDependency}.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530711128}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530711128.html}
     *
     * @governance none
     *
     * @param options
     * @param options.task The ScheduledScriptTask or MapReduceScriptTask instance to add as a dependency.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.task` is not a ScheduledScriptTask or MapReduceScriptTask instance.
     */
    addInboundDependency(options: {
      task: ScheduledScriptTask | MapReduceScriptTask,
    }): void;

    /**
     * Submits the task and returns a unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804558173}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804558173.html}
     *
     * @governance 100 units
     * @restriction Server-side scripts only
     * @since 2017.1
     *
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
    toString(): 'task.SearchTask';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4799344334}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4799344334.html}
   * @protected
   * @constructor
   */
  export interface SearchTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572729}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572729.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572441}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572441.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the fileId of exported file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572988}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572988.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly fileId: number;

    /**
     * Represents id of saved search being used for export
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4804572868}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4804572868.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly savedSearchId: number;

    /**
     * Returns the object type name (task.SearchTaskStatus).
     */
    toString(): 'task.SearchTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223655124}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223655124.html}
   * @protected
   * @constructor
   */
  export interface QueryTask {

    /**
     * The ID of the task.
     *
     * Note: populated with the string task ID (e.g. `QUERY_...`) after `submit()`;
     * reads `undefined` before submit.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

    /**
     * Query definition for the query task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223782030}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223782030.html}
     */
    query: query.Query;

    /**
     * Id of CSV file to export results into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223756577}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223756577.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to set both SearchTask#filePath and SearchTask#fileId
     */
    fileId: number | string;

    /**
     * Path of CSV file to export results into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223771684}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223771684.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to set both SearchTask#filePath and SearchTask#fileId
     */
    filePath: string;

    /**
     * Completion scripts which will be run when the async search finishes.
     * When submission succeeds an id attribute will be added into each completion task.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223776276}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223776276.html}
     *
     * Note: at runtime this is an object keyed by stringified index
     * (`{"0": {...}, "1": {...}}`), NOT an array. Each entry's `type` is the
     * string type name (e.g. `'task.ScheduledScriptTask'`), and an `id` string is
     * added to each entry after a successful `submit()`.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    readonly inboundDependencies: {
      [index: string]: {
        type: `task.ScheduledScriptTask` | `task.MapReduceScriptTask`,
        id?: string,
        scriptId: `customscript${string}`,
        deploymentId: `customdeploy${string}`,
        params?: Record<string, string | number | boolean>,
      },
    };

    /**
     * Adds an inbound dependency (completion script). The task must be a
     * `ScheduledScriptTask` or `MapReduceScriptTask` instance (a plain
     * `{taskType, scriptId, deploymentId}` object is rejected with
     * WRONG_PARAMETER_TYPE). Accepts the task positionally or as `{task}`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223731551}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223731551.html}
     *
     * @governance none
     *
     * @param task
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If the argument is not a ScheduledScriptTask or MapReduceScriptTask instance.
     */
    addInboundDependency(task: ScheduledScriptTask | MapReduceScriptTask): void;

    /**
     * Adds an inbound dependency (completion script). Object form of
     * {@link addInboundDependency}.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223731551}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223731551.html}
     *
     * @governance none
     *
     * @param options
     * @param options.task The ScheduledScriptTask or MapReduceScriptTask instance to add as a dependency.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.task` is not a ScheduledScriptTask or MapReduceScriptTask instance.
     */
    addInboundDependency(options: {
      task: ScheduledScriptTask | MapReduceScriptTask,
    }): void;

    /**
     * Submits the task and returns a unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223745979}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223745979.html}
     *
     * @governance 100 units
     * @restriction Server-side scripts only
     * @since 2020.2
     *
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
    toString(): 'task.QueryTask';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223798559}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223798559.html}
   * @protected
   * @constructor
   */
  export interface QueryTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223815752}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223815752.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223812701}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223812701.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the fileId of exported file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223806776}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223806776.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
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
    toString(): 'task.QueryTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223833809}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223833809.html}
   * @protected
   * @constructor
   */
  export interface SuiteQLTask {

    /**
     * The ID of the task.
     *
     * Note: populated with the string task ID (e.g. `SUITEQL_...`) after `submit()`;
     * reads `undefined` before submit.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

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
     * Id of CSV file to export results into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223852102}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223852102.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to set both SearchTask#filePath and SearchTask#fileId
     */
    fileId: number | string;

    /**
     * Path of CSV file to export results into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223855624}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223855624.html}
     *
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to set both SearchTask#filePath and SearchTask#fileId
     */
    filePath: string;

    /**
     * Completion scripts which will be run when the async search finishes.
     * When submission succeeds an id attribute will be added into each completion task.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223858725}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223858725.html}
     *
     * Note: at runtime this is an object keyed by stringified index
     * (`{"0": {...}, "1": {...}}`), NOT an array. Each entry's `type` is the
     * string type name (e.g. `'task.ScheduledScriptTask'`), and an `id` string is
     * added to each entry after a successful `submit()`.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    readonly inboundDependencies: {
      [index: string]: {
        type: `task.ScheduledScriptTask` | `task.MapReduceScriptTask`,
        id?: string,
        scriptId: `customscript${string}`,
        deploymentId: `customdeploy${string}`,
        params?: Record<string, string | number | boolean>,
      },
    };

    /**
     * Adds an inbound dependency (completion script). The task must be a
     * `ScheduledScriptTask` or `MapReduceScriptTask` instance (a plain
     * `{taskType, scriptId, deploymentId}` object is rejected with
     * WRONG_PARAMETER_TYPE). Accepts the task positionally or as `{task}`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223844941}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223844941.html}
     *
     * @governance none
     *
     * @param task
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If the argument is not a ScheduledScriptTask or MapReduceScriptTask instance.
     */
    addInboundDependency(task: ScheduledScriptTask | MapReduceScriptTask): void;

    /**
     * Adds an inbound dependency (completion script). Object form of
     * {@link addInboundDependency}.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223844941}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223844941.html}
     *
     * @governance none
     *
     * @param options
     * @param options.task The ScheduledScriptTask or MapReduceScriptTask instance to add as a dependency.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.task` is not a ScheduledScriptTask or MapReduceScriptTask instance.
     */
    addInboundDependency(options: {
      task: ScheduledScriptTask | MapReduceScriptTask,
    }): void;

    /**
     * Submits the task and returns a unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223847318}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223847318.html}
     *
     * @governance 100 units
     * @restriction Server-side scripts only
     * @since 2020.2
     *
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
     * Returns the object type name (task.SuiteQLTask)
     */
    toString(): 'task.SuiteQLTask';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223884561}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223884561.html}
   * @protected
   * @constructor
   */
  export interface SuiteQLTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223898107}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223898107.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223896074}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223896074.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Represents the fileId of exported file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159223887802}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159223887802.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
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
     * Returns the object type name (task.SuiteQLTaskStatus)
     */
    toString(): 'task.SuiteQLTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544121429}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544121429.html}
   * @protected
   * @constructor
   */
  export interface RecordActionTask {

    /**
     * The ID of the task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158221148568}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158221148568.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

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
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @return taskId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `recordType` or `action` was not set before submit (validated in that order). Note: create() does not validate; all validation happens at submit.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `recordType` is not a recognized record type.
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID If `action` does not correspond to a record action available on the record type ("No such record action found").
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If none of `params`, `condition`, or `paramCallback` was set ("One of the following arguments is mandatory: params, condition/paramCallback").
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If both `params` and `paramCallback` were set.
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 Failed to submit job request: {reason}
     */
    submit(): string;

    /**
     * Returns the object type name (task.RecordActionTask)
     */
    toString(): 'task.RecordActionTask';

    /**
     * Convert to JSON object
     *
     * Note: at runtime the returned object also carries a `type` discriminator
     * field (`'task.RecordActionTask'`); kept as `ExcludeMethods<this>`.
     */
    toJSON(): ExcludeMethods<this>;

  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544125423}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544125423.html}
   * @protected
   * @constructor
   */
  export interface RecordActionTaskStatus {

    /**
     * The taskId associated with the specified task
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158221207526}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158221207526.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544127664}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544127664.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * The number of record actions with a pending status
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128774}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128774.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pending: number;

    /**
     * The number of record actions with a successful status
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128436}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128436.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly succeeded: number;

    /**
     * The number of record actions with a failed status
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128556}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128556.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly failed: number;

    /**
     * The number of record actions that are already executed, either failed or successful
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128319}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128319.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly complete: number;

    /**
     * The results of successfully executed record action tasks. The property key is the record instance ID and the value is the corresponding action result.
     *
     * Note: the runtime shape differs from the Help Center. Each result carries `response` (with the record `id` and a `successful` flag, plus action-specific properties such as `displayName` and `recordActivationState` for the activate/inactivate actions) and a `notifications` array. There is no `action`, `recordCount`, or `success` property; the flag is spelled `successful`. Action-specific `response` properties are covered by the index signature.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128024}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128024.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly results: Record<`${number}`, {
      response: {
        id: string,
        successful: boolean,
        [p: string]: string | number | boolean | null,
      },
      notifications: {
        title: string,
        severity: {
          label: string,
          value: number,
        },
      }[],
    }>;

    /**
     * The error details of failed action executions. The property key is the record instance ID and the value is the corresponding error details.
     *
     * Note: at runtime each error is `{ code, message }` (e.g. `RECORD_DOES_NOT_EXIST` / "Record does not exist"), not `{ name, message }` as the Help Center implies.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544128200}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544128200.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly errors: Record<`${number}`, {
      code: string,
      message: string,
    }>;

    /**
     * Re-queries the server for the latest status and refreshes this instance in place. Returns nothing.
     *
     * Note: not documented in the Help Center but present at runtime alongside `toString`/`toJSON`.
     */
    refresh(): void;

    /**
     * Returns the object type name (task.RecordActionTaskStatus)
     */
    toString(): 'task.RecordActionTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;

  }

  /**
   * An asynchronous document capture task. Submits a document to the NetSuite task queue to extract its content asynchronously, exporting the results to a JSON file in the File Cabinet.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_78075142728}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_78075142728.html}
   * @protected
   * @constructor
   */
  export interface DocumentCaptureTask {

    /**
     * The ID of the task.
     *
     * Note: populated with the string task ID after `submit()`; reads `undefined` before submit.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_13075403661}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_13075403661.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

    /**
     * The document to extract content from. A file.File object representing a file in the NetSuite File Cabinet (PDF, TIFF, JPG, or PNG).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_75075322173}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_75075322173.html}
     *
     * @throws {error.SuiteScriptError} UNSUPPORTED_FILE_TYPE if the document is not in PDF, TIFF, JPG, or PNG format
     */
    inputFile: file.File;

    /**
     * The document type. Use a value from the documentCapture.DocumentType enum.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_25082104010}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_25082104010.html}
     *
     * @throws {error.SuiteScriptError} INVALID_DOCUMENT_TYPE if the assigned value is not a documentCapture.DocumentType value (validated when the property is set)
     */
    documentType: documentCapture.DocumentType | `${documentCapture.DocumentType}`;

    /**
     * The features to extract from the document (such as fields, tables, or text). Use values from the documentCapture.Feature enum. If left empty, the TEXT_EXTRACTION and TABLE_EXTRACTION features are used by default. Reads `[]` until set.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_23082157954}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_23082157954.html}
     *
     * Note: the setter validates the type only, not the values — assigning a non-array throws SSS_INVALID_TYPE_ARG, but an array containing out-of-enum strings is accepted and round-trips (any value check is deferred to submit).
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if the assigned value is not an array
     */
    features: (documentCapture.Feature | `${documentCapture.Feature}`)[];

    /**
     * The language of the document. Use a value from the documentCapture.Language enum. If not specified, English (ENG) is used by default.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_25082336704}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_25082336704.html}
     *
     * @throws {error.SuiteScriptError} INVALID_LANGUAGE if the assigned value is not a documentCapture.Language value (validated when the property is set)
     */
    language: documentCapture.Language | `${documentCapture.Language}`;

    /**
     * Oracle Cloud Infrastructure (OCI) credentials for unlimited usage mode. If not specified, the task consumes usage from the free usage pool provided by NetSuite.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_93075458095}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_93075458095.html}
     *
     * Note: the setter validates the full credential set at assignment. It requires tenancyId, compartmentId, userId, fingerprint, and privateKey (validated in that order); fingerprint and privateKey must each reference a NetSuite API secret (script ID). Unrecognized properties are rejected.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required credential field is missing
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if fingerprint or privateKey is not a NetSuite API secret
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if the value includes unrecognized properties
     */
    ociConfig: documentCapture.OciConfig;

    /**
     * The File Cabinet path of the JSON file to export document capture results to.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_4082548662}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_4082548662.html}
     */
    outputFilePath: string;

    /**
     * Key-value pairs describing the dependent tasks added via DocumentCaptureTask.addInboundDependency(options). Dependent tasks are processed automatically when the document capture task completes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_51075433575}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_51075433575.html}
     *
     * Note: at runtime this is an object keyed by stringified index (`{"0": {...}, "1": {...}}`), NOT an array; reads `{}` until a dependency is added. Only scheduled scripts are supported as dependents, so each entry's `type` is always `'task.ScheduledScriptTask'`. `deploymentId` is present only when set on the dependent task, and an `id` string is added to each entry after a successful `submit()`.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    readonly inboundDependencies: {
      [index: string]: {
        type: `task.ScheduledScriptTask`,
        id?: string,
        scriptId: `customscript${string}`,
        deploymentId?: `customdeploy${string}`,
        params?: Record<string, string | number | boolean>,
      },
    };

    /**
     * Adds a scheduled script task as a dependent task. The task must be a `ScheduledScriptTask` instance; a plain `{taskType, scriptId, deploymentId}` object is rejected with WRONG_PARAMETER_TYPE (despite the Help Center documenting that form), and map/reduce tasks are not accepted. Accepts the task positionally or as `{task}`. Only one dependent task may be added per call.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_3075210437}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_3075210437.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2025.2
     *
     * @param task The ScheduledScriptTask instance to add as a dependent task.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If the argument is not a ScheduledScriptTask instance.
     */
    addInboundDependency(task: ScheduledScriptTask): void;

    /**
     * Adds a scheduled script task as a dependent task. Object form of {@link addInboundDependency}.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_3075210437}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_3075210437.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2025.2
     *
     * @param options
     * @param options.task The ScheduledScriptTask instance to add as a dependent task.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.task` is not a ScheduledScriptTask instance.
     */
    addInboundDependency(options: {
      task: ScheduledScriptTask,
    }): void;

    /**
     * Submits the document capture task for asynchronous processing and returns a unique task ID. On a successful submission, the IDs of any dependent tasks (added via DocumentCaptureTask.addInboundDependency(options)) are added to the DocumentCaptureTask.inboundDependencies property.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_11075253797}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_11075253797.html}
     *
     * @governance 100 units
     * @restriction Server-side scripts only
     * @since 2025.2
     *
     * @return taskId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required property is not specified (inputFile is validated first)
     * @throws {error.SuiteScriptError} THAT_RECORD_DOES_NOT_EXIST if the inputFile property references a file that does not exist
     * @throws {error.SuiteScriptError} YOU_DO_NOT_HAVE_ACCESS_TO_THE_MEDIA_ITEM_YOU_SELECTED if you do not have permission to access the file specified by the inputFile property
     * @throws {error.SuiteScriptError} MUST_IDENTIFY_A_FILE if the outputFilePath property specifies a folder and not a file
     * @throws {error.SuiteScriptError} CANNOT_RESUBMIT_SUBMITTED_DOCUMENT_CAPTURE_TASK if the task was already submitted and completed successfully
     * @throws {error.SuiteScriptError} DOCUMENT_CAPTURE_DEPENDENCY_SS_ALREADY_SUBMITTED if a dependent scheduled script task is already submitted and is not complete
     * @throws {error.SuiteScriptError} DOCUMENT_CAPTURE_DEPENDENCY_SS_INCORRECT_STATUS if the deployment of a dependent scheduled script task has a status other than 'Not Scheduled'
     * @throws {error.SuiteScriptError} DOCUMENT_CAPTURE_DEPLOYMENT_FOR_DEPENDENCY if a script deployment for a dependent task is not available
     * @throws {error.SuiteScriptError} DOCUMENT_CAPTURE_MULTIPLE_DEPENDENCIES if the same dependent task is added more than once
     * @throws {error.SuiteScriptError} DOCUMENT_CAPTURE_SCRIPT_ID_NOT_FOUND if a dependent task is not found
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 if the task cannot be submitted due to an unexpected error
     */
    submit(): string;

    /**
     * Returns the object type name (task.DocumentCaptureTask).
     */
    toString(): 'task.DocumentCaptureTask';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Status of a document capture task (task.DocumentCaptureTask) in the NetSuite task queue. Obtain one via task.checkStatus(options), passing the task ID returned by DocumentCaptureTask.submit().
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_84075519375}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_84075519375.html}
   * @protected
   * @constructor
   */
  export interface DocumentCaptureTaskStatus {

    /**
     * ID of the submitted document capture task. References the same task ID returned by DocumentCaptureTask.submit().
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_38075637279}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_38075637279.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Status of the submitted document capture task. Returns one of the task.TaskStatus enum values (COMPLETE, FAILED, PENDING, or PROCESSING).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_78075616074}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_78075616074.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.DocumentCaptureTaskStatus).
     */
    toString(): 'task.DocumentCaptureTaskStatus';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * An asynchronous task that runs (executes) a pivot defined in a SuiteAnalytics workbook. This is the asynchronous counterpart to the synchronous workbook.Workbook.runPivot(options) method [N/workbook] — use it for a pivot whose execution would exceed synchronous script governance or time limits. Create it with task.create({ taskType: task.TaskType.PIVOT }), set the workbook, pivot, and storage target, then call submit().
   *
   * Undocumented in the Help Center; present at runtime. (The runtime type name is task.PivotExecutionTask.)
   */
  export interface PivotExecutionTask {

    /**
     * The workbook that contains the pivot to run. Accepts a loaded workbook.Workbook object or a workbook script ID string. Required at submit: submit() throws SSS_MISSING_REQD_ARGUMENT ("workbook") when it is not set. (Only the string form was exercised at runtime; instance acceptance is inferred from the setter and the runPivot pattern.)
     *
     * Undocumented in the Help Center; present at runtime.
     */
    workbook: workbook.Workbook | string;

    /**
     * The ID of the pivot, within the workbook, to run — the same identifier accepted by workbook.Workbook.runPivot's `options.id` (see workbook.Pivot.id). Required at submit: submit() throws SSS_MISSING_REQD_ARGUMENT ("pivotId") when it is not set.
     *
     * Undocumented in the Help Center; present at runtime.
     */
    pivotId: string;

    /**
     * Numeric ID of the storage target that receives the computed pivot result. Required at submit: submit() throws SSS_MISSING_REQD_ARGUMENT ("pivotStorageId") when it is not set, and coerces the value to a Java Long (a non-numeric string throws a TypeError at submit). The mechanism that provisions a pivot storage ID is not documented and was not verified at runtime.
     *
     * Undocumented in the Help Center; present at runtime.
     */
    pivotStorageId: number;

    /**
     * The task ID of the submitted pivot execution task. Populated after submit() (by parallel with the other task types; not verified at runtime).
     *
     * Undocumented in the Help Center; present at runtime.
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

    /**
     * The inbound dependencies registered for this task via addInboundDependency, as an object keyed by stringified index. Each entry describes a dependent scheduled-script or map/reduce task; `id` is added to an entry after submit(). Use addInboundDependency to populate it.
     *
     * Undocumented in the Help Center; present at runtime.
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly inboundDependencies: {
      [index: string]: {
        type: 'task.ScheduledScriptTask' | 'task.MapReduceScriptTask',
        id?: string,
        scriptId: `customscript${string}`,
        deploymentId?: `customdeploy${string}`,
        params?: { [fieldId: string]: record.FieldValue },
      },
    };

    /**
     * Registers a dependent task that runs after this pivot execution task completes. Accepts a task.ScheduledScriptTask or task.MapReduceScriptTask instance, passed positionally.
     *
     * Undocumented in the Help Center; present at runtime.
     * @param dependentTask the scheduled-script or map/reduce task to run after this task
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `dependentTask` is not a task.ScheduledScriptTask or task.MapReduceScriptTask instance (for example, a plain `{ taskType, scriptId }` object literal is rejected).
     */
    addInboundDependency(dependentTask: task.ScheduledScriptTask | task.MapReduceScriptTask): void;
    /**
     * Registers a dependent task that runs after this pivot execution task completes. Accepts an options object whose `task` property is a task.ScheduledScriptTask or task.MapReduceScriptTask instance.
     *
     * Undocumented in the Help Center; present at runtime.
     * @param options
     * @param options.task the scheduled-script or map/reduce task to run after this task
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.task` is not a task.ScheduledScriptTask or task.MapReduceScriptTask instance.
     */
    addInboundDependency(options: { task: task.ScheduledScriptTask | task.MapReduceScriptTask }): void;

    /**
     * Submits the pivot execution task to the NetSuite task queue and returns the task ID. The pivot runs asynchronously.
     *
     * Undocumented in the Help Center; present at runtime.
     * @restriction Server-side scripts only
     * @return the task ID of the submitted task (runtime returns a string ID, by parallel with the other task types; not verified at runtime)
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `workbook`, `pivotId`, or `pivotStorageId` is not set (validated in that order). Other submit-time errors (such as workbook/pivot existence checks) and the governance cost were not verified — a successful submit requires a valid `pivotStorageId`, which is deferred.
     */
    submit(): string;

    /**
     * Returns the object type name (task.PivotExecutionTask).
     *
     * Undocumented in the Help Center; present at runtime.
     */
    toString(): 'task.PivotExecutionTask';

    /**
     * Convert to JSON object. (At runtime the result also carries a `type` discriminator field set to 'task.PivotExecutionTask', which is not represented here.)
     *
     * Undocumented in the Help Center; present at runtime.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * The status of an asynchronous pivot execution task (task.PivotExecutionTask) in the NetSuite task queue. Obtain it via task.checkStatus({ taskId }) using the ID returned by PivotExecutionTask.submit().
   *
   * Undocumented in the Help Center; present at runtime. The shape below is inferred by parallel with the other task status objects (taskId + status) and was NOT verified at runtime — materializing a status requires a successful submit, which is deferred (it needs a valid pivotStorageId).
   */
  export interface PivotExecutionTaskStatus {

    /**
     * ID of the submitted pivot execution task. References the same task ID returned by PivotExecutionTask.submit().
     *
     * Undocumented in the Help Center; present at runtime. Not verified at runtime (see the interface note).
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly taskId: string;

    /**
     * Status of the submitted pivot execution task. Expected to return one of the task.TaskStatus enum values.
     *
     * Undocumented in the Help Center; present at runtime. Not verified at runtime (see the interface note).
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly status: task.TaskStatus | `${task.TaskStatus}`;

    /**
     * Returns the object type name (task.PivotExecutionTaskStatus).
     *
     * Undocumented in the Help Center; present at runtime. Not verified at runtime (see the interface note).
     */
    toString(): 'task.PivotExecutionTaskStatus';

    /**
     * Convert to JSON object.
     *
     * Undocumented in the Help Center; present at runtime. Not verified at runtime (see the interface note).
     */
    toJSON(): ExcludeMethods<this>;
  }
}