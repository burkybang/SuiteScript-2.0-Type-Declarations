/// <reference path="../typings.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./xml.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./search.d.ts" />
/// <reference path="./http.d.ts" />

/**
 * SuiteScript render module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412042824.html}
 *
 * @module N/render
 * @NApiVersion 2.x
 */
interface render {

  /**
   * Use this method to create a PDF or HTML object of a transaction
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452452331542.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param {Object} options
   * @param {number} options.entityId The internal ID of the transaction being printed
   * @param {string} [options.printMode] The output type: PDF|HTML|DEFAULT. DEFAULT uses the user/company preference for print output
   * @param {number} [options.formId]
   * @param {boolean} [options.inCustLocale]
   *
   * @return {file.File}
   */
  transaction(options: {
    entityId: number,
    printMode?: string,
    formId?: number,
    inCustLocale?: boolean,
  }): file.File

  /**
   * Use this method to create a PDF or HTML object of a statement
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455095458983.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param {Object} options
   * @param {number} options.entityId
   * @param {string} [options.printMode]
   * @param {number} [options.formId]
   * @param {boolean} [options.inCustLocale]
   * @param {date} [options.startDate]
   * @param {date} [options.statementDate]
   * @param {boolean} [options.openTransactionsOnly]
   * @param {boolean} [options.consolidateStatements]
   *
   * @return {file.File}
   */
  statement(options: {
    entityId: number,
    printMode?: string,
    formId?: number,
    inCustLocale?: boolean,
    startDate?: Date,
    statementDate?: Date,
    openTransactionsOnly?: boolean,
    consolidateStatements?: boolean,
  }): file.File

  /**
   * Use this method to create a PDF or HTML object of a packing slip
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458625732421.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param {Object} options
   * @param {number} options.entityId
   * @param {string} [options.printMode]
   * @param {number} [options.formId]
   * @param {boolean} [options.inCustLocale]
   * @param {number} [options.fulfillmentId]
   *
   * @return {file.File}
   */
  packingSlip(options: {
    entityId: number,
    printMode?: string,
    formId?: number,
    inCustLocale?: boolean,
    fulfillmentId?: number,
  }): file.File

  /**
   * Use this method to create a PDF or HTML object of a picking ticket
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456921936034.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param {Object} options
   * @param {number} options.entityId
   * @param {string} [options.printMode]
   * @param {number} [options.formId]
   * @param {boolean} [options.inCustLocale]
   * @param {number} [options.shipgroup]
   * @param {number} [options.location]
   *
   * @return {file.File}
   */
  pickingTicket(options: {
    entityId: number,
    printMode?: string,
    formId?: number,
    inCustLocale?: boolean,
    shipgroup?: number,
    location?: number,
  }): file.File

  /**
   * Use this method to create a PDF or HTML object of a bill of material
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457552429198.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param {Object} options
   * @param {number} options.entityId
   * @param {string} [options.printMode]
   *
   * @return {file.File}
   */
  bom(options: {
    entityId: number,
    printMode?: string,
  }): file.File

  /**
   * Use this method to produce HTML and PDF printed forms with advanced PDF/HTML templates
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455028930663.html}
   *
   * @governance 0 units
   * @restriction Supported by all server side scirpts

   * @return {render.TemplateRenderer}
   */
  create(): render.TemplateRenderer

  /**
   * Method used to pass XML to the Big Faceless Organization (BFO) tag library (which is stored by NetSuite), and return a PDF file.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459185424803.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param {Object} options
   * @param {xml.Document|string} options.xmlString
   *
   * @return {file.File}
   */
  xmlToPdf(options: {
    xmlString: xml.Document | string,
  }): file.File

  /**
   * Creates a render.EmailMergeResult object for a mail merge with an existing scriptable email template
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454332824706.html}
   *
   * @governance 0 units
   *
   * @param {Object} options
   * @param {number} options.templateId
   * @param {{id: number, type: record.Type|string}} options.entity
   * @param {{id: number, type: record.Type|string}} options.recipient
   * @param {{id: number, type: record.Type|string}} options.customRecord
   * @param {number} options.supportCaseId
   * @param {number} options.transactionId
   *
   * @return {render.EmailMergeResult}
   */
  mergeEmail(options: {
    templateId: number,
    entity: {
      id: number,
      type: record.Type | string,
    },
    recipient: {
      id: number,
      type: record.Type | string,
    },
    customRecord: {
      id: number,
      type: record.Type | string,
    },
    supportCaseId: number,
    transactionId: number,
  }): render.EmailMergeResult
}

declare namespace render {

  /**
   * Enum print mode type values.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412215015.html}
   *
   * @readonly
   * @enum {string}
   */
  export enum PrintMode {
    PDF = 'PDF',
    HTML = 'HTML',
    DEFAULT = 'DEFAULT',
  }

  /**
   * Enum data source type values.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619588793.html}
   *
   * @readonly
   * @enum {string}
   */
  export enum DataSource {
    XML_DOC = 'XML_DOC',
    XML_STRING = 'XML_STRING',
    OBJECT = 'OBJECT',
    JSON = 'JSON',
  }

  /**
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4417244174.html}
   *
   * @protected
   * @constructor
   */
  export interface EmailMergeResult {

    /**
     * The subject of the email distribution in string format
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412212830.html}
     *
     * @name EmailMergeResult#subject
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    subject: string

    /**
     * The body of the email distribution in string format
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412212816.html}
     *
     * @name EmailMergeResult#body
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    body: string

    /**
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
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412065265.html}
   *
   * @protected
   * @constructor
   */
  export interface TemplateRenderer {

    /**
     * Template content
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453133789062.html}
     *
     * @name TemplateRenderer#templateContent
     * @type {string}
     * @since 2015.2
     */
    templateContent: string

    /**
     * Sets template content by scriptId
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528574899.html}
     *
     * @param {Object} options
     * @param {string} options.scriptId
     * @return {void}
     *
     * @since 2016.1
     */
    setTemplateByScriptId(options: {
      scriptId: string,
    }): void

    /**
     * Sets template content by internal Id (nKey)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528552999.html}
     *
     * @param {Object} options
     * @param {number} options.id
     * @return {void}
     *
     * @since 2016.1
     */
    setTemplateById(options: {
      id: number,
    }): void

    /**
     * Binds a record to a template variable
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456543212890.html}
     *
     * @param {Object} options
     * @param {string} options.templateName
     * @param {record.Record} options.record
     * @return {void}
     *
     * @since 2015.2
     */
    addRecord(options: {
      templateName: string,
      record: record.Record,
    }): void

    /**
     * Binds a search result to a template variable
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456249023436.html}
     *
     * @param {Object} options
     * @param {string} options.templateName
     * @param {search.Result} options.searchResult
     * @return {void}
     *
     * @since 2015.2
     */
    addSearchResults(options: {
      templateName: string,
      searchResult: search.Result,
    }): void

    /**
     * Adds XML or JSON as custom data source to an advanced PDF/HTML template
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528541027.html}
     *
     * @param {Object} options
     * @param {string} options.alias namespace name of the record used in the template
     * @param {render.DataSource} options.format data format
     * @param {Object|Document|string} options.data
     * @return {void}
     *
     * @since 2016.1
     */
    addCustomDataSource(options: {
      alias: string,
      format: render.DataSource,
      data: Object | Document | string,
    }): void

    /**
     * Return template content in string form
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455231872558.html}
     *
     * @return {string}
     *
     * @since 2015.2
     */
    renderAsString(): string

    /**
     * Writes template content to a server response
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459426513671.html}
     *
     * @param {Object} options
     * @param {http.ServerResponse} options.response
     * @return {void}
     *
     * @since 2015.2
     */
    renderToResponse(options: {
      response: http.ServerResponse,
    }): void

    /**
     * Uses the advanced template to produce a PDF printed form
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452241760253.html}
     *
     * @return {file.File}
     *
     * @since 2015.2
     */
    renderAsPdf(): file.File

    /**
     * Renders a server response into a PDF file
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455108276366.html}
     *
     * @param {http.ServerResponse} response
     * @return {void}
     */
    renderPdfToResponse(response: http.ServerResponse): void

    /**
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