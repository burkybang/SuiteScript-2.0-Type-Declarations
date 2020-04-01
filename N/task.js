// todo: Convert to TypeScript definition

/**
 * SuiteScript module
 *
 * @module N/task
 * @NApiVersion 2.x
 *
 */
function task() {
}

/**
 * Creates a task of the given type and returns the task object.
 *
 * @param {Object} options
 * @param {string} options.taskType specifies the type of task to be created; use values from the task.TaskType enum
 * @return {task.ScheduledScriptTask | task.MapReduceScriptTask | task.CsvImportTask | task.EntityDeduplicationTask | task.WorkflowTriggerTask | task.SearchTask }
 */
task.prototype.create = function (options) {
};

/**
 * Check current status of a submitted task. The task to be checked is identified by its task ID.
 *
 * @typedef task.TaskStatus
 * @property {String} status
 *
 * @param {Object} options
 * @param {string} options.taskId
 * @return {task.TaskStatus}
 */
task.prototype.checkStatus = function (options) {
};

/**
 * @enum
 */
function taskTaskType() {
  this.SCHEDULED_SCRIPT = 'SCHEDULED_SCRIPT';
  this.MAP_REDUCE = 'MAP_REDUCE';
  this.CSV_IMPORT = 'CSV_IMPORT';
  this.ENTITY_DEDUPLICATION = 'ENTITY_DEDUPLICATION';
  this.WORKFLOW_TRIGGER = 'WORKFLOW_TRIGGER';
  this.SEARCH = 'SEARCH';
}

task.prototype.TaskType = taskTaskType;

/**
 * @enum
 */
function taskTaskStatus() {
  this.PENDING = 'PENDING';
  this.PROCESSING = 'PROCESSING';
  this.COMPLETE = 'COMPLETE';
  this.FAILED = 'FAILED';
}

task.prototype.TaskStatus = taskTaskStatus;

/**
 * @enum
 */
function taskMasterSelectionMode() {
  this.CREATED_EARLIEST = 'CREATED_EARLIEST';
  this.MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY';
  this.MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS';
  this.SELECT_BY_ID = 'SELECT_BY_ID';
}

task.prototype.MasterSelectionMode = taskMasterSelectionMode;

/**
 * @enum
 */
function taskDedupeMode() {
  this.MERGE = 'MERGE';
  this.DELETE = 'DELETE';
  this.MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT';
  this.MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES';
}

task.prototype.DedupeMode = taskDedupeMode;

/**
 * @enum
 */
function taskDedupeEntityType() {
  this.CUSTOMER = 'CUSTOMER';
  this.CONTACT = 'CONTACT';
  this.VENDOR = 'VENDOR';
  this.PARTNER = 'PARTNER';
  this.LEAD = 'LEAD';
  this.PROSPECT = 'PROSPECT';
}

task.prototype.DedupeEntityType = taskDedupeEntityType;

/**
 * @enum
 */
function taskMapReduceStage() {
  this.GET_INPUT = 'GET_INPUT';
  this.MAP = 'MAP';
  this.SHUFFLE = 'SHUFFLE';
  this.REDUCE = 'REDUCE';
  this.SUMMARIZE = 'SUMMARIZE';
}

task.prototype.MapReduceStage = taskMapReduceStage;

/**
 * @protected
 * @constructor
 */
function ScheduledScriptTask() {
  
  /**
   * The ID of the task.
   * @name ScheduledScriptTask#id
   * @type {string}
   */
  this.prototype.id = undefined;
  /**
   * Private setter of the ID of the task.
   * @name ScheduledScriptTask#_id
   * @type {string}
   */
  this.prototype._id = undefined;
  /**
   * The Internal ID or Script ID of the Script record.
   * @name ScheduledScriptTask#scriptId
   * @type {number | string}
   */
  this.prototype.scriptId = undefined;
  /**
   * The Internal ID or Script ID of the Script Deployment record.
   * @name ScheduledScriptTask#deploymentId
   * @type {number | string}
   */
  this.prototype.deploymentId = undefined;
  /**
   * Key/value pairs which override static script parameter field values on the deployment.
   * Used to dynamically pass context to the script.
   * @name ScheduledScriptTask#params
   * @type {Object}
   */
  this.prototype.params = undefined;
  /**
   * Submits the task and returns an unique ID.
   *
   * @governance 20 units
   *
   * @return {String} taskId
   * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
   */
  this.prototype.submit = function () {
  };
  
  /**
   * Returns the object type name (task.ScheduledScriptTask).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function ScheduledScriptTaskStatus() {
  
  /**
   * The taskId associated with the specified task.
   * @name ScheduledScriptTaskStatus#taskId
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.taskId = undefined;
  /**
   * Script ID.
   * @name ScheduledScriptTaskStatus#scriptId
   * @type {number}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.scriptId = undefined;
  /**
   * Script deployment ID.
   * @name ScheduledScriptTaskStatus#deploymentId
   * @type {number}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.deploymentId = undefined;
  /**
   * Represents the task status. Returns one of the task.TaskStatus enum values.
   * @name ScheduledScriptTaskStatus#status
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.status = undefined;
  /**
   * Returns the object type name (task.ScheduledScriptTaskStatus).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function MapReduceScriptTask() {
  
  /**
   * The ID of the task.
   * @name MapReduceScriptTask#id
   * @type {string}
   */
  this.prototype.id = undefined;
  /**
   * Private setter of the ID of the task.
   * @name MapReduceScriptTask#_id
   * @type {string}
   */
  this.prototype._id = undefined;
  /**
   * The Internal ID or Script ID of the Script record.
   * @name MapReduceScriptTask#scriptId
   * @type {number | string}
   */
  this.prototype.scriptId = undefined;
  /**
   * The Internal ID or Script ID of the Script Deployment record.
   * @name MapReduceScriptTask#deploymentId
   * @type {number | string}
   */
  this.prototype.deploymentId = undefined;
  /**
   * Key/value pairs which override static script parameter field values on the deployment.
   * Used to dynamically pass context to the script.
   * @name MapReduceScriptTask#params
   * @type {Object}
   */
  this.prototype.params = undefined;
  /**
   * Submits the task and returns an unique ID.
   *
   * @governance 20 units
   * @return {String} taskId
   */
  this.prototype.submit = function () {
  };
  
  /**
   * Returns the object type name (task.MapReduceScriptTask).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function MapReduceScriptTaskStatus() {
  
  /**
   * The taskId associated with the specified task.
   * @name MapReduceScriptTaskStatus#taskId
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.taskId = undefined;
  /**
   * Script ID.
   * @name MapReduceScriptTaskStatus#scriptId
   * @type {number}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.scriptId = undefined;
  /**
   * Script deployment ID.
   * @name MapReduceScriptTaskStatus#deploymentId
   * @type {number}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.deploymentId = undefined;
  /**
   * Represents the task status. Returns one of the task.TaskStatus enum values.
   * @name MapReduceScriptTaskStatus#status
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.status = undefined;
  /**
   * Represents the current stage of the Map/Reduce script. Returns one of the task.MapReduceStage enum values.
   * @name MapReduceScriptTaskStatus#stage
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.stage = undefined;
  /**
   * Get percentage of completion for the current stage. Note that INPUT and SUMMARIZE are either 0% or 100% complete at any given time.
   *
   * @governance 10 units
   * @return {Number}
   */
  this.prototype.getPercentageCompleted = function () {
  };
  
  /**
   * Total number of records/rows not yet processed by the MAP phase.
   *
   * @governance 10 units
   * @return {Number}
   */
  this.prototype.getPendingMapCount = function () {
  };
  
  /**
   * Total number of record/row inputs to the MAP phase.
   *
   * @governance 10 units
   * @return {Number}
   */
  this.prototype.getTotalMapCount = function () {
  };
  
  /**
   * Total number of bytes not yet processed by the MAP phase (a component of total size).
   *
   * @governance 25 units
   * @return {Number}
   */
  this.prototype.getPendingMapSize = function () {
  };
  
  /**
   * Total number of records/rows not yet processed by the REDUCE phase.
   *
   * @governance 10 units
   * @return {Number}
   */
  this.prototype.getPendingReduceCount = function () {
  };
  
  /**
   * Total number of record/row inputs to the REDUCE phase.
   *
   * @governance 10 units
   * @return {Number}
   */
  this.prototype.getTotalReduceCount = function () {
  };
  
  /**
   * Total number of bytes not yet processed by the REDUCE phase (a component of total size).
   *
   * @governance 25 units
   * @return {Number}
   */
  this.prototype.getPendingReduceSize = function () {
  };
  
  /**
   * Total number of records/rows not yet iterated by the script.
   *
   * @governance 10 units
   * @return {Number}
   */
  this.prototype.getPendingOutputCount = function () {
  };
  
  /**
   * Returns the total size in bytes of all key/value pairs written as output (a component of total size).
   *
   * @governance 25 units
   * @return {Number}
   */
  this.prototype.getPendingOutputSize = function () {
  };
  
  /**
   * Total number of record/row inputs to the OUTPUT phase.
   *
   * @governance 10 units
   * @return {Number}
   */
  this.prototype.getTotalOutputCount = function () {
  };
  
  /**
   * Returns the total size in bytes of all stored work in progress.
   *
   * @governance 25 units
   * @return {Number}
   */
  this.prototype.getCurrentTotalSize = function () {
  };
  
  /**
   * Returns the object type name (task.MapReduceScriptTaskStatus).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function SearchTask() {
  
  /**
   * The ID of the task.
   * @name SearchTask#id
   * @type {number}
   */
  this.prototype.id = undefined;
  /**
   * An ID of saved search to be executed during the task.
   * @name SearchTask#savedSearchId
   * @type {number}
   */
  this.prototype.savedSearchId = undefined;
  /**
   * Id of CVS file to export results of search into. See N/file.
   * If fileId is provided then parameter filePath is ignored.
   * There's no synchronization between fileId and filePath attributes.
   * @name SearchTask#fileId
   * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
   * @type {number}
   */
  this.prototype.fileId = undefined;
  /**
   * Path of CVS file to export results of search into. See N/file.
   * If fileId is provided then parameter filePath is ignored.
   * There's no synchronization between fileId and filePath attributes.
   * @name SearchTask#filePath
   * @throws {error.SuiteScriptError} PROPERTY_VALUE_CONFLICT if trying to se both SearchTask#filePath and SearchTask#fileId
   * @type {number}
   */
  this.prototype.filePath = undefined;
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
  this.prototype.inboundDependencies = undefined;
  /**
   * Submits the task and returns an unique ID. Sets inbound dependency (task) id in inboundDependencies attribute on successful submit.
   *
   * @governance 100 units
   *
   * @return {String} taskId
   * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
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
  this.prototype.submit = function () {
  };
  
  /**
   * Returns the object type name (task.SearchTask).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
  
  /**
   * Adds an inbound dependency (completion script).
   *
   * @param {Object} options
   * @param {Object} options.taskType task.TaskType.SCHEDULED_SCRIPT | task.TaskType.MAP_REDUCE
   * @param {Object} options.scriptId
   * @param {Object} [options.deploymentId] optional, the script has to be deployed, a free deployment id can be detected automatically if available
   * @param {Object} [options.params] a previosly created script parameter has to be set to async search csv result file id if the file is needed in the script, e.g. {'custscript_srch_res' : 'File.csv'}
   */
  this.prototype.addInboundDependency = function (options) {
  };
}

/**
 * Represents the status of
 * @protected
 * @constructor
 */
function SearchTaskStatus() {
  
  /**
   * The taskId associated with the specified task.
   * @name SearchTaskStatus#taskId
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.taskId = undefined;
  /**
   * Represents the task status. Returns one of the task.TaskStatus enum values.
   * @name SearchTaskStatus#status
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.status = undefined;
  /**
   * Represents the fileId of exported file.
   * @name SearchTaskStatus#fileId
   * @type {number}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.fileId = undefined;
  /**
   * Represents id of saved search being used for export.
   * @name SearchTaskStatus#savedSearchId
   * @type {number}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.savedSearchId = undefined;
  /**
   * Returns the object type name (task.SearchTaskStatus).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function CsvImportTask() {
  
  /**
   * The ID of the task.
   * @name CsvImportTask#id
   * @type {string}
   */
  this.prototype.id = undefined;
  /**
   * A file.File object containing data to be imported OR a string containing raw CSV text to be imported.
   * @name CsvImportTask#importFile
   * @type {file.File | string}
   */
  this.prototype.importFile = undefined;
  /**
   * Internal ID or script ID of a saved import map to be used for the import.
   * @name CsvImportTask#mappingId
   * @type {number | string}
   */
  this.prototype.mappingId = undefined;
  /**
   * Overrides the CSV import queue preference.
   * @name CsvImportTask#queueId
   * @type {number}
   */
  this.prototype.queueId = undefined;
  /**
   * The name of the import job to be shown on the status page for CSV imports.
   * @name CsvImportTask#name
   * @type {string}
   */
  this.prototype.name = undefined;
  /**
   * A map of key/value pairs "sublist->file" for a multi-file import job.
   * The key defines the internal ID of the record sublist for which data is being imported.
   * The value is a file.File object containing data to be imported OR a string containing raw CSV text to be imported.
   * @name CsvImportTask#linkedFiles
   * @type {Object}
   */
  this.prototype.linkedFiles = undefined;
  /**
   * Submits the task and returns an unique ID.
   *
   * @governance 100 units
   *
   * @return {String} taskId
   * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
   */
  this.prototype.submit = function () {
  };
  
  /**
   * Returns the object type name (task.CsvImportTask).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 *
 * @protected
 * @constructor
 */
function CsvImportTaskStatus() {
  
  /**
   * The taskId associated with the specified task.
   * @name CsvImportTaskStatus#taskId
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.taskId = undefined;
  /**
   * Represents the task status. Returns one of the task.TaskStatus enum values.
   * @name CsvImportTaskStatus#status
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.status = undefined;
  /**
   * Returns the object type name (task.CsvImportTaskStatus).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function EntityDeduplicationTask() {
  
  /**
   * The ID of the task.
   * @name EntityDeduplicationTask#id
   * @type {string}
   */
  this.prototype.id = undefined;
  /**
   * Represents the entity type. Use values from the task.DedupeEntityType enum.
   * @name EntityDeduplicationTask#entityType
   * @type {string}
   */
  this.prototype.entityType = undefined;
  /**
   * Master record ID.
   * @name EntityDeduplicationTask#masterRecordId
   * @type {number}
   */
  this.prototype.masterRecordId = undefined;
  /**
   * Master selection mode. Use values from the task.MasterSelectionMode enum.
   * @name EntityDeduplicationTask#masterSelectionMode
   * @type {string}
   */
  this.prototype.masterSelectionMode = undefined;
  /**
   * Deduplication mode. Use values from the task.DedupeMode enum.
   * @name EntityDeduplicationTask#dedupeMode
   * @type {string}
   */
  this.prototype.dedupeMode = undefined;
  /**
   * Records to deduplicate.
   * @name EntityDeduplicationTask#recordIds
   * @type {number[]}
   */
  this.prototype.recordIds = undefined;
  /**
   * Submits the task and returns an unique ID.
   *
   * @governance 100 units
   *
   * @return {String} taskId
   * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
   */
  this.prototype.submit = function () {
  };
  
  /**
   * Returns the object type name (task.EntityDeduplicationTask).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 *
 * @protected
 * @constructor
 */
function EntityDeduplicationTaskStatus() {
  
  /**
   * The taskId associated with the specified task.
   * @name EntityDeduplicationTaskStatus#taskId
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.taskId = undefined;
  /**
   * Represents the task status. Returns one of the task.TaskStatus enum values.
   * @name EntityDeduplicationTaskStatus#status
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.status = undefined;
  /**
   * Returns the object type name (task.EntityDeduplicationTaskStatus).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function WorkflowTriggerTask() {
  
  /**
   * The ID of the task.
   * @name WorkflowTriggerTask#id
   * @type {string}
   */
  this.prototype.id = undefined;
  /**
   * The record type of the workflow base record.
   * @name WorkflowTriggerTask#recordType
   * @type {string}
   */
  this.prototype.recordType = undefined;
  /**
   * The internal ID of the base record.
   * @name WorkflowTriggerTask#recordId
   * @type {number}
   */
  this.prototype.recordId = undefined;
  /**
   * The internal ID (number) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
   * @name WorkflowTriggerTask#workflowId
   * @type {number | string}
   */
  this.prototype.workflowId = undefined;
  /**
   * Key/value pairs which override static script parameter field values on the deployment.
   * Used to dynamically pass context to the script.
   * @name WorkflowTriggerTask#params
   * @type {Object}
   */
  this.prototype.params = undefined;
  /**
   * Submits the task and returns an unique ID.
   *
   * @governance 20 units
   *
   * @return {String} taskId
   * @throws {SuiteScriptError} FAILED_TO_SUBMIT_JOB_REQUEST_1 when task cannot be submitted for some reason
   */
  this.prototype.submit = function () {
  };
  
  /**
   * Returns the object type name (task.WorkflowTriggerTask).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 *
 * @protected
 * @constructor
 */
function WorkflowTriggerTaskStatus() {
  
  /**
   * The taskId associated with the specified task.
   * @name WorkflowTriggerTaskStatus#taskId
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.taskId = undefined;
  /**
   * Represents the task status. Returns one of the task.TaskStatus enum values.
   * @name WorkflowTriggerTaskStatus#status
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.status = undefined;
  /**
   * Returns the object type name (task.WorkflowTriggerTaskStatus).
   *
   * @return {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {Object}
   */
  this.prototype.toJSON = function () {
  };
}

task = new task();
/**
 * @type {task}
 */
N.prototype.task = task;