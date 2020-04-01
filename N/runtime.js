// todo: Convert to TypeScript definition

/**
 * SuiteScript module
 *
 * @module N/runtime
 * @NApiVersion 2.x
 *
 */
function runtime() {
}

/**
 * Get the current log in user object
 * @return {User}
 */
runtime.prototype.getCurrentUser = function () {
};

/**
 * Get the current executing Script object
 * @return {Script}
 */
runtime.prototype.getCurrentScript = function () {
};

/**
 * Get the current session object
 * @return {Session}
 */
runtime.prototype.getCurrentSession = function () {
};

/**
 * Check if a feature is turned on and in effect
 * @param {Object} options
 * @param {string} options.feature id of the feature
 * @return {boolean}
 */
runtime.prototype.isFeatureInEffect = function (options) {
};

/**
 * @name runtime#queueCount
 * @type {number}
 * @readonly
 * @since 2015.2
 */
runtime.prototype.queueCount = undefined;
/**
 * @name runtime#processorCount
 * @type {number}
 * @readonly
 * @since 2018.1
 */
runtime.prototype.processorCount = undefined;
/**
 * The version of NetSuite the current account is runnning.
 *
 * @name runtime#version
 * @type {string}
 * @readonly
 * @since 2015.2
 */
runtime.prototype.version = undefined;
/**
 * @name runtime#accountId
 * @type {string}
 * @readonly
 * @since 2015.2
 */
runtime.prototype.accountId = undefined;
/**
 * @name runtime#envType
 * @type {string}
 * @readonly
 * @since 2015.2
 */
runtime.prototype.envType = undefined;
/**
 * @name runtime#executionContext
 * @type {string}
 * @readonly
 * @since 2015.2
 */
runtime.prototype.executionContext = undefined;
/**
 * get JSON format of the object
 * @return {Object}
 *
 */
runtime.prototype.toJSON = function () {
};

/**
 * @return {string}
 *
 */
runtime.prototype.toString = function () {
};

/**
 * @enum
 */
function runtimeEnvType() {
  this.SANDBOX = 'SANDBOX';
  this.PRODUCTION = 'PRODUCTION';
  this.BETA = 'BETA';
  this.INTERNAL = 'INTERNAL';
}

runtime.prototype.EnvType = runtimeEnvType;

/**
 * @name runtime#ContextType
 * @type {object}
 * @readonly
 * @since 2018.1
 */
runtime.prototype.ContextType = undefined;

/**
 * @enum
 */
function runtimePermission() {
  this.FULL = 4.0;
  this.EDIT = 3.0;
  this.CREATE = 2.0;
  this.VIEW = 1.0;
  this.NONE = 0.0;
}

runtime.prototype.Permission = runtimePermission;

/**
 * @protected
 * @constructor
 */
function Script() {
  
  /**
   * Current script log level
   * @name Script#logLevel
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.logLevel = undefined;
  /**
   * Current script id
   * @name Script#id
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.id = undefined;
  /**
   * Current script runtime version
   * @name Script#apiVersion
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.apiVersion = undefined;
  /**
   * The deploymentId for the current script deployment
   * @name Script#deploymentId
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.deploymentId = undefined;
  /**
   * The bundle IDs the current script belongs to
   * @name Script#bundleIds
   * @type {string[]}
   * @readonly
   * @since 2015.2
   */
  this.prototype.bundleIds = undefined;
  /**
   * Returns the remaining amount of unit usage for the current script
   * @return {number}
   *
   */
  this.prototype.getRemainingUsage = function () {
  };
  
  /**
   * Returns script parameter value which is defined per script
   *
   * @param {Object} options
   * @param {string} options.name The name of the parameter
   * @return {number|Date|string|Array}
   *
   */
  this.prototype.getParameter = function (options) {
  };
  
  /**
   * Percentage complete specified for the current scheduled script execution
   * @name Script#percentComplete
   * @type {number}
   * @throws {SuiteScriptError} SSS_OPERATION_UNAVAILABLE
   * @since 2015.2
   */
  this.prototype.percentComplete = undefined;
  /**
   * get JSON format of the object
   * @return {string}
   *
   */
  this.prototype.toJSON = function () {
  };
  
  /**
   * @return {string}
   *
   */
  this.prototype.toString = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function Session() {
  
  /**
   * Get the value of a user-defined session object for the current user.
   * @param {Object} options
   * @param {string} options.name The key used to store the session object
   * @return {string}
   *
   */
  this.prototype['get'] = function (options) {
  };
  
  /**
   * Add or set the value of a user-defined session object for the current user.
   * @param {Object} options
   * @param {string} options.name The key used to store the session object
   * @param {string} options.value The value to associate with this key in the user's session
   * @return {undefined}
   *
   */
  this.prototype['set'] = function (options) {
  };
  
  /**
   * get JSON format of the object
   * @return {string}
   *
   */
  this.prototype.toJSON = function () {
  };
  
  /**
   * @return {string}
   *
   */
  this.prototype.toString = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function User() {
  
  /**
   * Returns the currently logged in user's e-mail address
   * @name User#email
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.email = undefined;
  /**
   * Returns the currently logged in user's name
   * @name User#name
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.name = undefined;
  /**
   * Returns the internal ID of the currently logged in user's location
   * @name User#location
   * @type {number}
   * @readonly
   * @since 2015.2
   */
  this.prototype.location = undefined;
  /**
   * Returns the internal ID of the currently logged in user's department
   * @name User#department
   * @type {number}
   * @readonly
   * @since 2015.2
   */
  this.prototype.department = undefined;
  /**
   * Returns the internal ID of the currently logged in user's role
   * @name User#role
   * @type {number}
   * @readonly
   * @since 2015.2
   */
  this.prototype.role = undefined;
  /**
   * Returns the internal ID of the currently logged in user's center type (role center)
   * @name User#roleCenter  The string value of the logged in user's center - for example, SALES, ACCOUNTING, CLASSIC.
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.roleCenter = undefined;
  /**
   * Returns the custom scriptId of the role (as opposed to the internal numerical ID).
   * @name User#roleId
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  this.prototype.roleId = undefined;
  /**
   * Returns the currently logged in user's internal ID
   * @name User#id
   * @type {number}
   * @readonly
   * @since 2015.2
   */
  this.prototype.id = undefined;
  /**
   * Returns the internal ID of the currently logged in user's subsidiary
   * @name User#subsidiary
   * @type {number}
   * @readonly
   * @since 2015.2
   */
  this.prototype.subsidiary = undefined;
  /**
   * Get a user's permission level for a given permission
   * @param {Object} options
   * @param {string} options.name The internal ID of a permission
   * @return {number} one value of the Permission
   *
   */
  this.prototype.getPermission = function (options) {
  };
  
  /**
   * Get the value of a NetSuite preference
   * @param {Object} options
   * @param {string} options.name The internal ID of the preference
   * @return {string} The value of a system or script preference for the current user
   *
   */
  this.prototype.getPreference = function (options) {
  };
  
  /**
   * get JSON format of the object
   * @return {string}
   *
   */
  this.prototype.toJSON = function () {
  };
  
  /**
   * @return {string}
   *
   */
  this.prototype.toString = function () {
  };
}

runtime = new runtime();
/**
 * @type {runtime}
 */
N.prototype.runtime = runtime;