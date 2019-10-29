/**
 * SuiteScript log global object
 * @namespace
 * @global
 * @name log
 * @type {Object}
 */
var log = {
  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   * @param {*} [details] The details of the message
   */
  debug: function (options, details) {
  },
  
  /**
   * Log an audit level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   * @param {*} [details] The details of the message
   */
  audit: function (options, details) {
  },
  
  /**
   * Log an error level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   * @param {*} [details] The details of the message
   */
  error: function (options, details) {
  },
  
  /**
   * Log an emergency level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   * @param {*} [details] The details of the message
   */
  emergency: function (options, details) {
  }
};