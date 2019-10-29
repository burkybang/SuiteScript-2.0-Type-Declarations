/**
 * SuiteScript module
 *
 * @module N/render
 * @NApiVersion 2.x
 *
 */
function render() {
}

/**
 *
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId The internal ID of the transaction being printed
 * @param {string} options.printMode (optional) The output type: PDF|HTML|DEFAULT. DEFAULT uses the user/company preference for print output
 * @param {number} options.formId (optional)
 * @param {boolean} options.inCustLocale (optional)
 *
 * @returns {File}
 */
render.prototype.transaction = function (options) {
};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 * @param {number} options.formId  (optional)
 * @param {boolean} options.inCustLocale (optional)
 * @param {date} options.startDate (optional)
 * @param {date} options.statementDate (optional)
 * @param {boolean} options.openTransactionsOnly  (optional)
 * @param {boolean} options.consolidateStatements (optional)
 *
 * @returns {File}
 */
render.prototype.statement = function (options) {
};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 * @param {number} options.formId  (optional)
 * @param {boolean} options.inCustLocale (optional)
 * @param {number} options.fulfillmentId (optional)
 *
 * @returns {File}
 */
render.prototype.packingSlip = function (options) {
};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 * @param {number} options.formId  (optional)
 * @param {boolean} options.inCustLocale (optional)
 * @param {number} options.shipgroup (optional)
 * @param {number} options.location (optional)
 *
 * @returns {File}
 */
render.prototype.pickingTicket = function (options) {
};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {number} options.entityId
 * @param {string} options.printMode (optional)
 *
 * @returns {File}
 */
render.prototype.bom = function (options) {
};

/**
 * @governance 0 units
 * @restriction Supported by all server side scirpts
 
 * @returns {TemplateRenderer}
 */
render.prototype.create = function (options) {
};

/**
 * @governance 10 units
 * @restriction Supported by all server side scirpts
 *
 * @param {Object} options
 * @param {Document|string} options.xmlString
 * @returns {File}
 */
render.prototype.xmlToPdf = function (options) {
};

/**
 *
 * RecordRef Encapsulates the type and id of a particular record instance.
 * @typedef {Object} RecordRef
 * @property {number} id - Internal ID of the record instance.
 * @property {string} type - Record type id.
 *
 * @governance 0 units
 * @param {Object} options
 * @param {number} options.templateId
 * @param {RecordRef} options.entity
 * @param {RecordRef} options.recipient
 * @param {RecordRef} options.customRecord
 * @param {number} options.supportCaseId
 * @param {number} options.transactionId
 *
 * @returns {EmailMergeResult}
 *
 */
render.prototype.mergeEmail = function (options) {
};

/**
 * Enum print mode type values.
 * @readonly
 * @enum {string}
 */
function renderPrintMode() {
  this.PDF = 'PDF';
  this.HTML = 'HTML';
  this.DEFAULT = 'DEFAULT';
}

render.prototype.PrintMode = renderPrintMode;

/**
 * Enum data source type values.
 * @readonly
 * @enum {string}
 */
function renderDataSource() {
  this.XML_DOC = 'XML_DOC';
  this.XML_STRING = 'XML_STRING';
  this.OBJECT = 'OBJECT';
  this.JSON = 'JSON';
}

render.prototype.DataSource = renderDataSource;

/**
 * @protected
 * @constructor
 */
function EmailMergeResult() {
  
  /**
   * @name EmailMergeResult#subject
   * @type string
   * @readonly
   * @since 2015.2
   */
  this.prototype.subject = undefined;
  /**
   * @name EmailMergeResult#body
   * @type string
   * @readonly
   * @since 2015.2
   */
  this.prototype.body = undefined;
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
function TemplateRenderer() {
  
  /**
   * Template content
   * @name TemplateRenderer#templateContent
   * @type string
   * @since 2015.2
   */
  this.prototype.templateContent = undefined;
  /**
   * Sets template content by scriptId
   * @param {Object} options
   * @param {string} options.scriptId
   * @return {undefined}
   * @since 2016.1
   */
  this.prototype.setTemplateByScriptId = function (options) {
  };
  
  /**
   * Sets template content by internal Id (nKey)
   * @param {Object} options
   * @param {number} options.id
   * @return {undefined}
   * @since 2016.1
   */
  this.prototype.setTemplateById = function (options) {
  };
  
  /**
   * @param {Object} options
   * @param {string} options.templateName
   * @param {record.Record} options.record
   * @return {undefined}
   *
   */
  this.prototype.addRecord = function (options) {
  };
  
  /**
   * @param {Object} options
   * @param {string} options.templateName
   * @param {search.Result} options.searchResult
   * @return {undefined}
   *
   */
  this.prototype.addSearchResults = function (options) {
  };
  
  /**
   * Adds XML or Json as custom data source
   *
   * @param {Object} options
   * @param {string} options.format data format
   * @param {string} options.alias namespace name of the record used in the template
   * @param {Object|Document|string} options.data Object, Document or String
   * @return {undefined}
   *
   */
  this.prototype.addCustomDataSource = function (options) {
  };
  
  /**
   * @return {string}
   *
   */
  this.prototype.renderAsString = function (options) {
  };
  
  /**
   * @param {Object} options
   * @param { http.ServerResponse } options.response
   * @return {undefined}
   *
   */
  this.prototype.renderToResponse = function (options) {
  };
  
  /**
   * @return {file.File}
   *
   */
  this.prototype.renderAsPdf = function () {
  };
  
  /**
   * @param { http.ServerResponse } response
   * @return {undefined}
   *
   */
  this.prototype.renderPdfToResponse = function () {
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

render = new render();
/**
 * @type {render}
 */
N.prototype.render = render;