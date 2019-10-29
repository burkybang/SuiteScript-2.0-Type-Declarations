/**
 * SuiteScript record action module
 *
 * @module N/action
 * @suiteScriptVersion 2.x
 */
function action() {
}

/**
 * Performs a search for available record actions. If only the recordType parameter is provided, all actions available
 * for the record type are returned. If recordId is also provided, then only actions that qualify for execution on the
 * given record instance are returned. If id is provided, then only the action with the given ID is returned. In other
 * words, the recordId and id parameters act as additional filters and may result in an empty result set being returned.
 * If the recordId is provided than the returned actions are "qualified" and you don't have to provide the recordId
 * again when executing an Action object from the result set.
 * @param {Object} options
 * @param {string} options.recordType record type
 * @param {string} (optional) options.recordId record instance ID
 * @param {string} (optional) options.id action ID
 * @returns {Object} a set of actions (@see Action) defined on the record type indexed by action ID
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType is missing or undefined
 * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
 * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if an action is specified and such action doesn't exist on the said record type
 * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
 */
// function findAction() {}
// findAction.prototype.promise = function() {};
// action.prototype.find = new findAction();
action.prototype.find = function (options) {
};

/**
 * Returns an executable record action for the given record type. If the recordId parameter is provided, then the
 * action object is only returned if the given record instance qualifies for execution of the given record action.
 * Also, if recordId is provided than the returned action is "qualified" and you don't have to provide the recordId
 * again when executing the Action object.
 * @param {Object} options
 * @param {string} options.recordType record type
 * @param {string} options.id action ID
 * @param {string} (optional) options.recordId record instance ID
 * @returns {Action} record action executor for action specified by options
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id is missing or undefined
 * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
 * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn’t exist on the said record type OR
 *                                                  the specified record instance does not qualify for executing the action
 * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
 */
// function getAction() {}
// getAction.prototype.promise = function() {};
// action.prototype['get'] = new getAction();
action.prototype['get'] = function (options) {
};

/**
 * Executes a record action and returns its result.
 * @param {Object} options
 * @param {string} options.recordType record type
 * @param {string} options.id action ID
 * @param {Object} options.params action arguments
 * @param {string} options.params.recordId record instance ID
 * @returns {Object} action result; the actual return value returned by the action implementation is stored in the response property
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
 * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
 * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
 * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
 */
// function executeAction() {}
// executeAction.prototype.promise = function() {};
// action.prototype.execute = new executeAction();
action.prototype.execute = function (options) {
};

action = new action();
/**
 * @type {action}
 */
N.prototype.action = action;