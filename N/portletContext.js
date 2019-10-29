/**
 * SuiteScript module
 *
 * @module N/portletContext
 * @NApiVersion 2.x
 *
 */
function portletContext() {
}

/**
 * Scriptable Portlet.
 * @param delegate
 * @protected
 * @constructor
 */
function Portlet() {
  
  /**
   *
   * @name Portlet#title
   * @type {String}
   */
  this.prototype.title = undefined;
  /**
   *
   * @name Portlet#html
   * @type {String}
   */
  this.prototype.html = undefined;
  /**
   * file Id for Portlet form script
   * @name Portlet#clientScriptFileId
   * @type {Number}
   */
  this.prototype.clientScriptFileId = undefined;
  /**
   * Add a Column to the Portlete
   * @param {Object} options
   * @param {string} options.id
   * @param {string} options.type
   * @param {string} options.label
   * @param {string} [options.align]
   * @return {PortletColumn}
   */
  this.prototype.addColumn = function (options) {
  };
  
  /**
   * Add an Edit or Edit/View column
   * @param {Object} options
   * @param {string} options.column
   * @param {string} [options.showView]
   * @param {string} [options.showHrefCol]
   * @return {PortletColumn}
   */
  this.prototype.addEditColumn = function (options) {
  };
  
  /**
   * Add a field to the form
   * @param {Object} options
   * @param {string} options.id
   * @param {string} options.type
   * @param {string} [options.label]
   * @param {string} [options.source]
   * @param {string} [options.tab]
   * @returns {Field}
   */
  this.prototype.addField = function (options) {
  };
  
  /**
   * Add a field to the form
   * @param {Object} options
   * @param {string} options.text
   * @param {string} [options.url]
   * @param {number} [options.align]
   * @returns {Portlet}
   */
  this.prototype.addLine = function (options) {
  };
  
  /**
   * Add a row (Array of name/value pairs or search.Result)
   * @param {Object} options
   * @param {string} options.row
   * @return {Portlet}
   */
  this.prototype.addRow = function (options) {
  };
  
  /**
   * Add a field to the form
   * @param {Object} options
   * @param {string} options.url
   * @param {string} [options.label]
   * @param {string} [options.target]
   * @returns {Button}
   */
  this.prototype.setSubmitButton = function (options) {
  };
  
  /**
   * Adds multiple rows (Array of search.Result or name/value pair Arrays)
   * @param {Object} options
   * @param {string} options.rows
   * @return {Portlet}
   */
  this.prototype.addRows = function (options) {
  };
}

portletContext = new portletContext();
/**
 * @type {portletContext}
 */
N.prototype.portletContext = portletContext;