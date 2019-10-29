/**
 * SuiteScript Message Module (Client Side)
 *
 * @module N/ui/message
 * @suiteScriptVersion 2.x
 *
 */
function message() {
}

/**
 * Creates a message which can be shown/hidden near the top of the page.
 *
 * @restriction Client SuiteScript only
 * @param {Object} options
 * @param {string} options.type The type of message, see message.Type
 * @param {string} [options.title] The title of the message. Defaults to empty string.
 * @param {string} [options.message] The content of the message. Defaults to empty string.
 * @param {int|string} [options.duration] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
 *
 * @return {Message} A message object which can be shown or hidden.
 *
 * @since 2016.1
 */
message.prototype.create = function (options) {
};

/**
 * Enum for message types
 * @enum {string}
 */
function messageType() {
  this.CONFIRMATION = 0.0;
  this.INFORMATION = 1.0;
  this.WARNING = 2.0;
  this.ERROR = 3.0;
}

message.prototype.Type = messageType();

/**
 * Return a new instance of Message, used to show/hide messages
 * @class
 * @classdesc Allows users to show/hide messages.
 * @return {message.Message}
 * @constructor
 *
 * @since 2015.2
 */
function Message() {
  
  /**
   * Shows the message.
   *
   * @restriction Client SuiteScript only
   * @param {Object} [options]
   * @param {int|string} [options.duration] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
   *
   * @return {void}
   *
   * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.duration is specified with a non-numerical value.
   *
   * @since 2016.1
   */
  this.prototype.show = function (options) {
  };
  
  /**
   * Hides the message
   *
   * @restriction Client SuiteScript only
   *
   * @return {void}
   *
   * @since 2016.1
   */
  this.prototype.hide = function (options) {
  };
  
  /**
   * Returns the object type name (message.Message)
   *
   * @return {string}
   */
  this.prototype.toString = function (options) {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @return {{type: string, title: string, message: string}}
   */
  this.prototype.toJSON = function (options) {
  };
}

message = new message();
var ui = {};
/**
 * @type {ui}
 */
N.prototype.ui = ui;
/**
 * @type {message}
 */
ui.prototype.message = message;