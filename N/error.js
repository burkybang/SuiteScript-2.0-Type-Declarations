/**
 * SuiteScript error module
 *
 * @module N/error
 * @NApiVersion 2.x
 *
 */
function error() {
}

/**
 * Create a new Error object
 *
 * @param {Object} options
 * @param {string} options.name
 * @param {string} options.message
 * @param {string} options.notifyOff
 * @return {SuiteScriptError}
 */
error.prototype.create = function (options) {
};

/**
 *
 * @protected
 * @constructor
 */
function SuiteScriptError() {
  
  /**
   * @name SuiteScriptError#id
   * @type string
   * @readonly
   * @since 2015.2
   */
  this.prototype.id = undefined;
  /**
   * @name SuiteScriptError#name
   * @type string
   * @readonly
   * @since 2015.2
   */
  this.prototype.name = undefined;
  /**
   * @name SuiteScriptError#message
   * @type string
   * @readonly
   * @since 2015.2
   */
  this.prototype.message = undefined;
  /**
   * @name SuiteScriptError#stack
   * @type string[]
   * @readonly
   * @since 2015.2
   */
  this.prototype.stack = undefined;
  /**
   * @name SuiteScriptError#cause
   * @type Anything
   * @readonly
   * @since 2016.1
   */
  this.prototype.cause = undefined;
  /**
   * @name SuiteScriptError#notifyOff
   * @type boolean
   * @readonly
   * @since 2016.2
   */
  this.prototype.notifyOff = undefined;
}

/**
 *
 * @protected
 * @constructor
 */
function UserEventError() {
  
  /**
   * @name SuiteScriptError#recordId
   * @type string
   * @readonly
   * @since 2015.2
   */
  this.prototype.recordId = undefined;
  /**
   * @name SuiteScriptError#eventType
   * @type string
   * @readonly
   * @since 2015.2
   */
  this.prototype.eventType = undefined;
}

error = new error();
/**
 * @type {error}
 */
N.prototype.error = error;