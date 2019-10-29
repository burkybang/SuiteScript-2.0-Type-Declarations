/**
 * SuiteScript module - defines the Suitelet response and request objects
 *
 * @module N/suiteletContext
 * @NApiVersion 2.x
 *
 */
function suiteletContext() {
}

/**
 * Return a new instance of ServerRequest object that carries incoming HTTP request info.
 *
 * @classDescription Encapsulation of the HTTP request incoming to the suitelet.
 * @return {http.ServerRequest}
 * @constructor
 *
 * @since 2015.2
 */
function ServerRequest() {
  
  /**
   * Server request headers.
   * @name ServerRequest#headers
   * @type Object
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.headers = undefined;
  /**
   * Server request clientIpAddress.
   * @name ServerRequest#clientIpAddress
   * @type Object
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.clientIpAddress = undefined;
  /**
   * Server request parameters.
   * @name ServerRequest#parameters
   * @type Object
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.parameters = undefined;
  /**
   * Server request files.
   * @name ServerRequest#files
   * @type Object
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.files = undefined;
  /**
   * Server request body.
   * @name ServerRequest#body
   * @type string
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.body = undefined;
  /**
   * Server request HTTP method.
   * @name ServerRequest#method
   * @type string
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.method = undefined;
  /**
   * Server request URL.
   * @name ServerRequest#url
   * @type string
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.url = undefined;
  /**
   * Returns the number of lines in a sublist.
   * @param {Object} options
   * @param {string} options.group sublist internal ID
   * @returns {integer} the integer value of the number of line items in the sublist
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   */
  this.prototype.getLineCount = function (options) {
  };
  
  /**
   * Returns the value of a sublist line item.
   * @param {Object} options
   * @param {string} options.group sublist internal ID
   * @param {string} options.name the name of the field whose value is returned
   * @param {string} options.line the line number for this field (1-based)
   * @returns {string} the string value of the line item
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   */
  this.prototype.getSublistValue = function (options) {
  };
  
  /**
   * Returns the object type name (http.ServerRequest)
   *
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of ServerResponse object that carries the response to an incoming HTTP request.
 *
 * @classDescription Encapsulation of the HTTP response that will be returned to the browser.
 * @return {http.ServerResponse}
 * @constructor
 *
 * @since 2015.2
 */
function ServerResponse() {
  
  /**
   * Server response headers.
   * @name ServerResponse#headers
   * @type Object
   * @returns {Object} key/value pairs with all the headers; if multiple values are assigned to one header name, they are returned as an array
   * @readonly
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.headers = undefined;
  /**
   * Sets the value of a response header.
   * @param {Object} options
   * @param {string} options.name the name of the header
   * @param {string} options.value the value used to set the header
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
   */
  this.prototype.setHeader = function (options) {
  };
  
  /**
   * Adds a header to the response. If this header has already been set, this will add another line for that header.
   * @param {Object} options
   * @param {string} options.name the name of the header
   * @param {string} options.value the value used to set the header
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
   */
  this.prototype.addHeader = function (options) {
  };
  
  /**
   * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with custparam.
   * @param {Object} options
   * @param {string} options.type the base type for this resource - one of RECORD, TASKLINK or SUITELET
   * @param {string} options.identifier the primary id for this resource
   * @param {string} options.id (optional) the secondary id for this resource
   * @param {boolean} options.editMode (optional) for RECORD calls, this determines whether to return a URL for the record in edit mode or view mode
   * @param {Object} options.parameters (optional) additional URL parameters as name/value pairs
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY if type is none of RECORD, TASKLINK or SUITELET
   * @throws {error.SuiteScriptError} SSS_INVALID_TASK_ID if type is TASKLINK and an invalid task identifier is passed in the options.identifier parameter
   * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if type is RECORD and an invalid record type is passed in the options.identifier parameter
   * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if type is SUITELET and an invalid script ID and deployment ID are passed in the options.identifier and options.id parameters
   */
  this.prototype.sendRedirect = function (options) {
  };
  
  /**
   * Write information (text/xml/html) to the response.
   * @param {Object} options
   * @param {string} options.output string or file being written
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
   */
  this.prototype.write = function (options) {
  };
  
  /**
   * Write line information (text/xml/html) to the response.
   * @param {Object} options
   * @param {string} options.output string being written
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
   */
  this.prototype.writeLine = function (options) {
  };
  
  /**
   * Generates a page using a page element object.
   * @param {Object} options
   * @param {serverWidget.Assistant|serverWidget.Form|serverWidget.List} options.pageObject standalone page object: assistant, form or list
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   */
  this.prototype.writePage = function (options) {
  };
  
  /**
   * Write a file to the response.
   * @param {Object} options
   * @param {file.File} options.file the file to be written
   * @param {boolean} options.isInline (optional) true if the file is inline
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a file.File object
   */
  this.prototype.writeFile = function (options) {
  };
  
  /**
   * Returns the value for a header returned in the response.
   * @param {Object} options
   * @param {string} options.name the header name
   * @returns {string|Array} the value of the header; if multiple values are assigned to the header name, they are returned as an array
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   */
  this.prototype.getHeader = function (options) {
  };
  
  /**
   * Generates and renders a PDF directly to the response.
   * @param {Object} options
   * @param {string} options.xmlString content of your PDF
   * @governance 10 units
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   */
  this.prototype.renderPdf = function (options) {
  };
  
  /**
   * Sets CDN caching for a period of time.
   * @param {Object} options
   * @param {string} options.type constant value to represent the caching duration, see http.CacheDuration enum
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   */
  this.prototype.setCdnCacheable = function (options) {
  };
  
  /**
   * Returns the object type name (http.ServerResponse)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

suiteletContext = new suiteletContext();
/**
 * @type {suiteletContext}
 */
N.prototype.suiteletContext = suiteletContext;