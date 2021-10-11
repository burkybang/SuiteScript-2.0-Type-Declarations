/// <reference path="../typings.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./record.d.ts" />

/**
 * SuiteScript task module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345787858.html}
 *
 * @module N/task
 * @NApiVersion 2.x
 */
interface task {

  /**
   * Creates a task of the given type and returns the task object.
   *
   * @param {Object} options
   * @param {task.TaskType} options.taskType specifies the type of task to be created; use values from the task.TaskType enum
   * @param {number|string} [options.scriptId]
   * @param {string} [options.deploymentId]
   * @param {Object<string, string|string[]|number|Date|boolean>} [options.params]
   * @param {file.File|string} [options.importFile]
   * @param {number|string} [options.mappingId]
   * @param {number|string} [options.queueId]
   * @param {string} [options.name]
   * @param {Object<string, file.File|string>} [options.linkedFiles]
   * @param {string} [options.entityType]
   * @param {number|string} [options.masterRecordId]
   * @param {string} [options.masterSelectionMode]
   * @param {string} [options.dedupeMode]
   * @param {(number|string)[]} [options.recordIds]
   * @param {record.Type|string} [options.recordType]
   * @param {number|string} [options.recordId]
   * @param {number|string} [options.workflowId]
   * @param {number|string} [options.savedSearchId]
   * @param {number|string} [options.fileId]
   * @param {number|string} [options.filePath]
   * @return {task.ScheduledScriptTask|task.MapReduceScriptTask|task.CsvImportTask|task.EntityDeduplicationTask|task.WorkflowTriggerTask|task.SearchTask}
   */
  create(options: {
    taskType: task.TaskType,
    scriptId?: number | string,
    deploymentId?: string,
    params?: { [p: string]: string | string[] | number | Date | boolean },
    importFile?: file.File | string,
    mappingId?: number | string,
    queueId?: number | string,
    name?: string,
    linkedFiles?: { [p: string]: file.File | string },
    entityType?: string,
    masterRecordId?: number | string,
    masterSelectionMode?: string,
    dedupeMode?: string,
    recordIds?: (number | string)[],
    recordType?: record.Type | string,
    recordId?: number | string,
    workflowId?: number | string,
    savedSearchId?: number | string,
    fileId?: number | string,
    filePath?: number | string,
  }): task.ScheduledScriptTask
    | task.MapReduceScriptTask
    | task.CsvImportTask
    | task.EntityDeduplicationTask
    | task.WorkflowTriggerTask
    | task.SearchTask

  /**
   * Check current status of a submitted task. The task to be checked is identified by its task ID.
   *
   * @typedef task.TaskStatus
   * @property {string} status
   *
   * @param {Object} options
   * @param {string} options.taskId
   * @return {task.TaskStatus}
   */
  checkStatus(options: { taskId: string }): task.TaskStatus
}

declare namespace task {

  /**
   * @enum {string}
   */
  export enum TaskType {
    SCHEDULED_SCRIPT = 'SCHEDULED_SCRIPT',
    MAP_REDUCE = 'MAP_REDUCE',
    CSV_IMPORT = 'CSV_IMPORT',
    ENTITY_DEDUPLICATION = 'ENTITY_DEDUPLICATION',
    WORKFLOW_TRIGGER = 'WORKFLOW_TRIGGER',
    SEARCH = 'SEARCH',
    QUERY = 'QUERY',
    SUITEQL = 'SUITEQL',
    RECORD_ACTION = 'RECORD_ACTION',
  }

  /**
   * @enum {string}
   */
  export enum TaskStatus {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    COMPLETE = 'COMPLETE',
    FAILED = 'FAILED',
  }

  /**
   * @enum {string}
   */
  export enum MasterSelectionMode {
    CREATED_EARLIEST = 'CREATED_EARLIEST',
    MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY',
    MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS',
    SELECT_BY_ID = 'SELECT_BY_ID',
  }

  /**
   * @enum {string}
   */
  export enum DedupeMode {
    MERGE = 'MERGE',
    DELETE = 'DELETE',
    MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT',
    MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES',
  }

  /**
   * @enum {string}
   */
  export enum DedupeEntityType {
    CUSTOMER = 'CUSTOMER',
    CONTACT = 'CONTACT',
    VENDOR = 'VENDOR',
    PARTNER = 'PARTNER',
    LEAD = 'LEAD',
    PROSPECT = 'PROSPECT',
  }

  /**
   * @enum {string}
   */
  export enum MapReduceStage {
    GET_INPUT = 'GET_INPUT',
    MAP = 'MAP',
    SHUFFLE = 'SHUFFLE',
    REDUCE = 'REDUCE',
    SUMMARIZE = 'SUMMARIZE',
  }

  /**
   * @protected
   * @constructor
   */
  export interface ScheduledScriptTask {

    /**
     * The ID of the task.
     * @name ScheduledScriptTask#id
     * @type {string}
     */
    id: string

    /**
     * Private setter of the ID of the task.
     * @name ScheduledScriptTask#_id
     * @type {string}
     */
    _id: string

    /**
     * The Internal ID or Script ID of the Script record.
     * @name ScheduledScriptTask#scriptId
     * @type {number | string}
     */
    scriptId: number | string

    /**
     * The Internal ID or Script ID of the Script Deployment record.
     * @name ScheduledScriptTask#deploymentId
     * @type {number | string}
     */
    deploymentId: number | string

    /**
     * Key/value pairs which override static script parameter field values on the deployment.
     * Used to dynamically pass context to the script.
     * @name ScheduledScriptTask#params
     * @type {Object<string, string>}
     */
    params: { [p: string]: string }

    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 20 units
     *
     * @return {string} taskId
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string

    /**
     * Returns the object type name (task.ScheduledScriptTask).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * @protected
   * @constructor
   */
  export interface ScheduledScriptTaskStatus {

    /**
     * The taskId associated with the specified task.
     * @name ScheduledScriptTaskStatus#taskId
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    taskId: string

    /**
     * Script ID.
     * @name ScheduledScriptTaskStatus#scriptId
     * @type {number}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    scriptId: number

    /**
     * Script deployment ID.
     * @name ScheduledScriptTaskStatus#deploymentId
     * @type {number}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    deploymentId: number

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name ScheduledScriptTaskStatus#status
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    status: string

    /**
     * Returns the object type name (task.ScheduledScriptTaskStatus).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * @protected
   * @constructor
   */
  export interface MapReduceScriptTask {

    /**
     * The ID of the task.
     * @name MapReduceScriptTask#id
     * @type {string}
     */
    id: string

    /**
     * Private setter of the ID of the task.
     * @name MapReduceScriptTask#_id
     * @type {string}
     */
    _id: string

    /**
     * The Internal ID or Script ID of the Script record.
     * @name MapReduceScriptTask#scriptId
     * @type {number | string}
     */
    scriptId: number | string

    /**
     * The Internal ID or Script ID of the Script Deployment record.
     * @name MapReduceScriptTask#deploymentId
     * @type {number | string}
     */
    deploymentId: number | string

    /**
     * Key/value pairs which override static script parameter field values on the deployment.
     * Used to dynamically pass context to the script.
     * @name MapReduceScriptTask#params
     * @type {Object<string, string>}
     */
    params: {
      [p: string]: string,
    }

    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 20 units
     * @return {string} taskId
     */
    submit(): string

    /**
     * Returns the object type name (task.MapReduceScriptTask).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * @protected
   * @constructor
   */
  export interface MapReduceScriptTaskStatus {

    /**
     * The taskId associated with the specified task.
     * @name MapReduceScriptTaskStatus#taskId
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    taskId: string

    /**
     * Script ID.
     * @name MapReduceScriptTaskStatus#scriptId
     * @type {number}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    scriptId: number

    /**
     * Script deployment ID.
     * @name MapReduceScriptTaskStatus#deploymentId
     * @type {number}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    deploymentId: number

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name MapReduceScriptTaskStatus#status
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    status: string

    /**
     * Represents the current stage of the Map/Reduce script. Returns one of the task.MapReduceStage enum values.
     * @name MapReduceScriptTaskStatus#stage
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    stage: string

    /**
     * Get percentage of completion for the current stage. Note that INPUT and SUMMARIZE are either 0% or 100% complete at any given time.
     *
     * @governance 10 units
     * @return {number}
     */
    getPercentageCompleted(): number

    /**
     * Total number of records/rows not yet processed by the MAP phase.
     *
     * @governance 10 units
     * @return {number}
     */
    getPendingMapCount(): number

    /**
     * Total number of record/row inputs to the MAP phase.
     *
     * @governance 10 units
     * @return {number}
     */
    getTotalMapCount(): number

    /**
     * Total number of bytes not yet processed by the MAP phase (a component of total size).
     *
     * @governance 25 units
     * @return {number}
     */
    getPendingMapSize(): number

    /**
     * Total number of records/rows not yet processed by the REDUCE phase.
     *
     * @governance 10 units
     * @return {number}
     */
    getPendingReduceCount(): number

    /**
     * Total number of record/row inputs to the REDUCE phase.
     *
     * @governance 10 units
     * @return {number}
     */
    getTotalReduceCount(): number

    /**
     * Total number of bytes not yet processed by the REDUCE phase (a component of total size).
     *
     * @governance 25 units
     * @return {number}
     */
    getPendingReduceSize(): number

    /**
     * Total number of records/rows not yet iterated by the script.
     *
     * @governance 10 units
     * @return {number}
     */
    getPendingOutputCount(): number

    /**
     * Returns the total size in bytes of all key/value pairs written as output (a component of total size).
     *
     * @governance 25 units
     * @return {number}
     */
    getPendingOutputSize(): number

    /**
     * Total number of record/row inputs to the OUTPUT phase.
     *
     * @governance 10 units
     * @return {number}
     */
    getTotalOutputCount(): number

    /**
     * Returns the total size in bytes of all stored work in progress.
     *
     * @governance 25 units
     * @return {number}
     */
    getCurrentTotalSize(): number

    /**
     * Returns the object type name (task.MapReduceScriptTaskStatus).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * @protected
   * @constructor
   */
  export interface SearchTask {

    /**
     * The ID of the task.
     * @name SearchTask#id
     * @type {number}
     */
    id: number

    /**
     * An ID of saved search to be executed during the task.
     * @name SearchTask#savedSearchId
     * @type {number}
     */
    savedSearchId: number

    /**
     * Id of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @name SearchTask#fileId
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     * @type {number}
     */
    fileId: number

    /**
     * Path of CVS file to export results of search into. See N/file.
     * If fileId is provided then parameter filePath is ignored.
     * There's no synchronization between fileId and filePath attributes.
     * @name SearchTask#filePath
     * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
     * @type {number}
     */
    filePath: number

    /**
     * Completion scripts which will be run when the async search finishes.
     * When submission succeeds an id attribute will be added into each completion task.
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
     * @name SearchTask#inboundDependencies
     * @type {Object[]}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting of the property is attempted
     */
    inboundDependencies: Object[]

    /**
     * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit.
     *
     * @governance 100 units
     *
     * @return {string} taskId
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
    submit(): string

    /**
     * Adds an inbound dependency (completion script).
     *
     * @param {Object} options
     * @param {ScheduledScriptTask | MapReduceScriptTask} options.dependentScript
     */
    addInboundDependency(options: {
      dependentScript: ScheduledScriptTask | MapReduceScriptTask,
    }): void

    /**
     * Returns the object type name (task.SearchTask).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * Represents the status of
   * @protected
   * @constructor
   */
  export interface SearchTaskStatus {

    /**
     * The taskId associated with the specified task.
     * @name SearchTaskStatus#taskId
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    taskId: string

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name SearchTaskStatus#status
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    status: string

    /**
     * Represents the fileId of exported file.
     * @name SearchTaskStatus#fileId
     * @type {number}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    fileId: number

    /**
     * Represents id of saved search being used for export.
     * @name SearchTaskStatus#savedSearchId
     * @type {number}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    savedSearchId: number

    /**
     * Returns the object type name (task.SearchTaskStatus).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * @protected
   * @constructor
   */
  export interface CsvImportTask {

    /**
     * The ID of the task.
     * @name CsvImportTask#id
     * @type {string}
     */
    id: string

    /**
     * A file.File object containing data to be imported OR a string containing raw CSV text to be imported.
     * @name CsvImportTask#importFile
     * @type {file.File | string}
     */
    importFile: file.File | string

    /**
     * Internal ID or script ID of a saved import map to be used for the import.
     * @name CsvImportTask#mappingId
     * @type {number | string}
     */
    mappingId: number | string

    /**
     * Overrides the CSV import queue preference.
     * @name CsvImportTask#queueId
     * @type {number}
     */
    queueId: number

    /**
     * The name of the import job to be shown on the status page for CSV imports.
     * @name CsvImportTask#name
     * @type {string}
     */
    name: string

    /**
     * A map of key/value pairs "sublist->file" for a multi-file import job.
     * The key defines the internal ID of the record sublist for which data is being imported.
     * The value is a file.File object containing data to be imported OR a string containing raw CSV text to be imported.
     * @name CsvImportTask#linkedFiles
     * @type {Object}
     */
    linkedFiles: Object

    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 100 units
     *
     * @return {string} taskId
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string

    /**
     * Returns the object type name (task.CsvImportTask).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   *
   * @protected
   * @constructor
   */
  export interface CsvImportTaskStatus {

    /**
     * The taskId associated with the specified task.
     * @name CsvImportTaskStatus#taskId
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    taskId: string

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name CsvImportTaskStatus#status
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    status: string

    /**
     * Returns the object type name (task.CsvImportTaskStatus).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * @protected
   * @constructor
   */
  export interface EntityDeduplicationTask {

    /**
     * The ID of the task.
     * @name EntityDeduplicationTask#id
     * @type {string}
     */
    id: string

    /**
     * Represents the entity type. Use values from the task.DedupeEntityType enum.
     * @name EntityDeduplicationTask#entityType
     * @type {string}
     */
    entityType: string

    /**
     * Master record ID.
     * @name EntityDeduplicationTask#masterRecordId
     * @type {number}
     */
    masterRecordId: number

    /**
     * Master selection mode. Use values from the task.MasterSelectionMode enum.
     * @name EntityDeduplicationTask#masterSelectionMode
     * @type {string}
     */
    masterSelectionMode: string

    /**
     * Deduplication mode. Use values from the task.DedupeMode enum.
     * @name EntityDeduplicationTask#dedupeMode
     * @type {string}
     */
    dedupeMode: string

    /**
     * Records to deduplicate.
     * @name EntityDeduplicationTask#recordIds
     * @type {number[]}
     */
    recordIds: number[]

    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 100 units
     *
     * @return {string} taskId
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string

    /**
     * Returns the object type name (task.EntityDeduplicationTask).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   *
   * @protected
   * @constructor
   */
  export interface EntityDeduplicationTaskStatus {

    /**
     * The taskId associated with the specified task.
     * @name EntityDeduplicationTaskStatus#taskId
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    taskId: string

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name EntityDeduplicationTaskStatus#status
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    status: string

    /**
     * Returns the object type name (task.EntityDeduplicationTaskStatus).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * @protected
   * @constructor
   */
  export interface WorkflowTriggerTask {

    /**
     * The ID of the task.
     * @name WorkflowTriggerTask#id
     * @type {string}
     */
    id: string

    /**
     * The record type of the workflow base record.
     * @name WorkflowTriggerTask#recordType
     * @type {string}
     */
    recordType: string

    /**
     * The internal ID of the base record.
     * @name WorkflowTriggerTask#recordId
     * @type {number}
     */
    recordId: number

    /**
     * The internal ID (number) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
     * @name WorkflowTriggerTask#workflowId
     * @type {number | string}
     */
    workflowId: number | string

    /**
     * Key/value pairs which override static script parameter field values on the deployment.
     * Used to dynamically pass context to the script.
     * @name WorkflowTriggerTask#params
     * @type {Object<string, string>}
     */
    params: {
      [p: string]: string,
    }

    /**
     * Submits the task and returns an unique ID.
     *
     * @governance 20 units
     *
     * @return {string} taskId
     * @throws {error.SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
     */
    submit(): string

    /**
     * Returns the object type name (task.WorkflowTriggerTask).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   *
   * @protected
   * @constructor
   */
  export interface WorkflowTriggerTaskStatus {

    /**
     * The taskId associated with the specified task.
     * @name WorkflowTriggerTaskStatus#taskId
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    taskId: string

    /**
     * Represents the task status. Returns one of the task.TaskStatus enum values.
     * @name WorkflowTriggerTaskStatus#status
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    status: string

    /**
     * Returns the object type name (task.WorkflowTriggerTaskStatus).
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }
}