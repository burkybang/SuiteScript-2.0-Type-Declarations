/// <reference path="../typings.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./xml.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./search.d.ts" />
/// <reference path="./http.d.ts" />

/**
 * SuiteScript render module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412042824}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412042824.html}
 *
 * @module N/render
 * @NApiVersion 2.x
 * @restriction Server SuiteScript only
 */
interface render {

  /**
   * Use this method to create a PDF or HTML object of a transaction
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452452331542}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452452331542.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param options
   * @param options.entityId The internal ID of the transaction being printed
   * @param [options.printMode] The output type: PDF|HTML|DEFAULT. DEFAULT uses the user/company preference for print output
   * @param [options.formId] The transaction form number
   * @param [options.inCustLocale] Applies when advanced templates are used. Prints the document in the customer's locale. If basic printing is used, this parameter is ignored and the transaction form is printed in the customer's locale.
   */
  transaction(options: {
    entityId: number,
    printMode?: string,
    formId?: number,
    inCustLocale?: boolean,
  }): file.File;

  /**
   * Use this method to create a PDF or HTML object of a statement
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455095458983}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455095458983.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param options
   * @param options.entityId
   * @param [options.printMode]
   * @param [options.formId]
   * @param [options.inCustLocale]
   * @param [options.startDate]
   * @param [options.statementDate]
   * @param [options.openTransactionsOnly]
   * @param [options.consolidateStatements]
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
  }): file.File;

  /**
   * Use this method to create a PDF or HTML object of a packing slip
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458625732421}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458625732421.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param options
   * @param options.entityId
   * @param [options.printMode]
   * @param [options.formId]
   * @param [options.inCustLocale]
   * @param [options.fulfillmentId]
   */
  packingSlip(options: {
    entityId: number,
    printMode?: string,
    formId?: number,
    inCustLocale?: boolean,
    fulfillmentId?: number,
  }): file.File;

  /**
   * Use this method to create a PDF or HTML object of a picking ticket
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456921936034}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456921936034.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param options
   * @param options.entityId
   * @param [options.printMode]
   * @param [options.formId]
   * @param [options.inCustLocale]
   * @param [options.shipgroup]
   * @param [options.location]
   */
  pickingTicket(options: {
    entityId: number,
    printMode?: string,
    formId?: number,
    inCustLocale?: boolean,
    shipgroup?: number,
    location?: number,
  }): file.File;

  /**
   * Use this method to create a PDF or HTML object of a bill of material
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457552429198}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457552429198.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param options
   * @param options.entityId
   * @param [options.printMode]
   */
  bom(options: {
    entityId: number,
    printMode?: string,
  }): file.File;

  /**
   * Use this method to produce HTML and PDF printed forms with advanced PDF/HTML templates
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455028930663}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455028930663.html}
   *
   * @governance 0 units
   * @restriction Supported by all server side scirpts
   */
  create(): render.TemplateRenderer;

  /**
   * Method used to pass XML to the Big Faceless Organization (BFO) tag library (which is stored by NetSuite), and return a PDF file.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459185424803}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459185424803.html}
   *
   * @governance 10 units
   * @restriction Supported by all server side scirpts
   *
   * @param options
   * @param options.xmlString
   */
  xmlToPdf(options: {
    xmlString: xml.Document | string,
  }): file.File;

  /**
   * Creates a render.EmailMergeResult object for a mail merge with an existing scriptable email template
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454332824706}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454332824706.html}
   *
   * @governance 0 units
   *
   * @param options
   * @param options.templateId
   * @param options.entity.id
   * @param options.entity.type
   * @param options.recipient.id
   * @param options.recipient.type
   * @param options.customRecord.id
   * @param options.customRecord.type
   * @param options.supportCaseId
   * @param options.transactionId
   */
  mergeEmail(options: {
    templateId: number,
    entity?: {
      id: number,
      type: record.Type | `${record.Type}` | string,
    },
    recipient?: {
      id: number,
      type: record.Type | `${record.Type}` | string,
    },
    customRecord?: {
      id: number,
      type: record.CustomType | string,
    },
    supportCaseId?: number,
    transactionId?: number,
  }): render.EmailMergeResult;
}

declare namespace render {

  /**
   * Enum print mode type values.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412215015}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412215015.html}
   */
  export enum PrintMode {
    PDF = 'PDF',
    HTML = 'HTML',
    DEFAULT = 'DEFAULT',
  }

  /**
   * Enum data source type values.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619588793}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619588793.html}
   */
  export enum DataSource {
    XML_DOC = 'XML_DOC',
    XML_STRING = 'XML_STRING',
    OBJECT = 'OBJECT',
    JSON = 'JSON',
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4417244174}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4417244174.html}
   *
   * @protected
   * @constructor
   */
  export interface EmailMergeResult {

    /**
     * The subject of the email distribution in string format
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412212830}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412212830.html}
     *
     * @since 2015.2
     */
    readonly subject: string;

    /**
     * The body of the email distribution in string format
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412212816}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412212816.html}
     *
     * @since 2015.2
     */
    readonly body: string;

    /**
     *
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412065265}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412065265.html}
   *
   * @protected
   * @constructor
   */
  export interface TemplateRenderer {

    /**
     * Template content
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453133789062}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453133789062.html}
     *
     * @since 2015.2
     */
    templateContent: string;

    /**
     * Sets template content by scriptId
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528574899}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4528574899.html}
     *
     * @param options
     * @param options.scriptId
     *
     * @since 2016.1
     */
    setTemplateByScriptId(options: {
      scriptId: string,
    }): void;

    /**
     * Sets template content by internal Id (nKey)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528552999}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4528552999.html}
     *
     * @param options
     * @param options.id
     *
     * @since 2016.1
     */
    setTemplateById(options: {
      id: number,
    }): void;

    /**
     * Binds a record to a template variable
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456543212890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456543212890.html}
     *
     * @param templateName
     * @param record
     *
     * @since 2015.2
     */
    addRecord(
      templateName: string,
      record: record.Record,
    ): void;

    /**
     * Binds a record to a template variable
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456543212890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456543212890.html}
     *
     * @param options
     * @param options.templateName
     * @param options.record
     *
     * @since 2015.2
     */
    addRecord(options: {
      templateName: string,
      record: record.Record,
    }): void;

    /**
     * Binds a search result to a template variable
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456249023436}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456249023436.html}
     *
     * @param options
     * @param options.templateName
     * @param options.searchResult
     *
     * @since 2015.2
     */
    addSearchResults(options: {
      templateName: string,
      searchResult: search.Result,
    }): void;

    /**
     * Adds XML or JSON as custom data source to an advanced PDF/HTML template
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528541027}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4528541027.html}
     *
     * @param options
     * @param options.alias namespace name of the record used in the template
     * @param options.format data format
     * @param options.data
     *
     * @since 2016.1
     */
    addCustomDataSource(options: {
      alias: string,
      format: render.DataSource | `${render.DataSource}`,
      data: Object | Document | string,
    }): void;

    /**
     * Return template content in string form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455231872558}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455231872558.html}
     *
     * @since 2015.2
     */
    renderAsString(): string;

    /**
     * Writes template content to a server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459426513671}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459426513671.html}
     *
     * @param options
     * @param options.response
     *
     * @since 2015.2
     */
    renderToResponse(options: {
      response: http.ServerResponse,
    }): void;

    /**
     * Uses the advanced template to produce a PDF printed form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452241760253}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452241760253.html}
     *
     * @since 2015.2
     */
    renderAsPdf(): file.File;

    /**
     * Renders a server response into a PDF file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455108276366}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455108276366.html}
     *
     * @param response
     */
    renderPdfToResponse(response: http.ServerResponse): void;

    /**
     *
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }
}