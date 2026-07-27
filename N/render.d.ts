/// <reference path="../typings.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./xml.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./search.d.ts" />
/// <reference path="./query.d.ts" />
/// <reference path="./http.d.ts" />

/**
 * SuiteScript render module
 *
 * Produces PDF and HTML output: built-in transactional renderers (transaction,
 * statement, packing slip, picking ticket, BOM, GL impact), an advanced
 * PDF/HTML template renderer, and an email-template merger.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412042824}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412042824.html}
 *
 * @module N/render
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface render {

  /**
   * Creates a PDF or HTML file from a transaction record.
   *
   * Note: the runtime pre-validator's error messages for missing/wrong
   * `entityId` all begin with `render.transaction:` regardless of which
   * sibling method was called (`statement`, `packingSlip`, `pickingTicket`,
   * `bom`). The siblings share a Java-layer pre-validator that is hard-coded
   * to that prefix.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452452331542}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452452331542.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.entityId Internal ID of the transaction to render
   * @param [options.printMode=render.PrintMode.DEFAULT] Output type. `DEFAULT` follows the user/company preference for print output
   * @param [options.formId] Internal ID of the custom transaction form to use
   * @param [options.inCustLocale] When using advanced templates, renders in the customer's locale. Ignored for basic printing (which already uses the customer locale)
   * @return The rendered PDF or HTML file
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `entityId` is missing or null
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `entityId` is not a number
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `entityId` references a non-existent or inaccessible transaction, or if `printMode` is not a recognized PrintMode value (validation happens post-pre-validation in the Java rendering layer rather than the SuiteScript pre-validator, so the error code is generic)
   */
  transaction(options: {
    entityId: number,
    printMode?: render.PrintMode | `${render.PrintMode}`,
    formId?: number,
    inCustLocale?: boolean,
  }): file.File;

  /**
   * Creates a PDF or HTML file from a customer statement.
   *
   * Pre-validator error messages identify themselves as `render.transaction:`
   * (see the note on `transaction`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455095458983}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455095458983.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.entityId Internal ID of the customer to render a statement for
   * @param [options.printMode=render.PrintMode.DEFAULT] Output type. `DEFAULT` follows the user/company preference for print output
   * @param [options.formId] Internal ID of the custom statement form to use
   * @param [options.inCustLocale] When using advanced templates, renders in the customer's locale
   * @param [options.startDate] Start date of the statement's transaction range
   * @param [options.statementDate] Effective date of the statement (used for aging calculations)
   * @param [options.openTransactionsOnly] If `true`, includes only transactions with open balances
   * @param [options.consolidateStatements] If `true`, consolidates statements for parent-child customer hierarchies
   * @return The rendered PDF or HTML file
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `entityId` is missing or null
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `entityId` is not a number
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `entityId` references a non-existent or inaccessible customer, or if `printMode` is not a recognized PrintMode value
   */
  statement(options: {
    entityId: number,
    printMode?: render.PrintMode | `${render.PrintMode}`,
    formId?: number,
    inCustLocale?: boolean,
    startDate?: Date,
    statementDate?: Date,
    openTransactionsOnly?: boolean,
    consolidateStatements?: boolean,
  }): file.File;

  /**
   * Creates a PDF or HTML file from a packing slip for a sales order or item
   * fulfillment.
   *
   * Pre-validator error messages identify themselves as `render.transaction:`
   * (see the note on `transaction`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458625732421}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458625732421.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.entityId Internal ID of the transaction to render a packing slip for
   * @param [options.printMode=render.PrintMode.DEFAULT] Output type
   * @param [options.formId] Internal ID of the custom packing slip form
   * @param [options.inCustLocale] When using advanced templates, renders in the customer's locale
   * @param [options.fulfillmentId] Internal ID of a specific item fulfillment (when the transaction has multiple)
   * @return The rendered PDF or HTML file
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `entityId` is missing or null
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `entityId` is not a number
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `entityId` references a non-existent or inaccessible transaction
   */
  packingSlip(options: {
    entityId: number,
    printMode?: render.PrintMode | `${render.PrintMode}`,
    formId?: number,
    inCustLocale?: boolean,
    fulfillmentId?: number,
  }): file.File;

  /**
   * Creates a PDF or HTML file from a picking ticket for a sales order or item
   * fulfillment.
   *
   * Pre-validator error messages identify themselves as `render.transaction:`
   * (see the note on `transaction`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456921936034}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456921936034.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.entityId Internal ID of the transaction to render a picking ticket for
   * @param [options.printMode=render.PrintMode.DEFAULT] Output type
   * @param [options.formId] Internal ID of the custom picking ticket form
   * @param [options.inCustLocale] When using advanced templates, renders in the customer's locale
   * @param [options.shipgroup] Internal ID of a specific ship group (when the transaction has multiple)
   * @param [options.location] Internal ID of a specific location (when the transaction has multiple)
   * @return The rendered PDF or HTML file
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `entityId` is missing or null
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `entityId` is not a number
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `entityId` references a non-existent or inaccessible transaction
   */
  pickingTicket(options: {
    entityId: number,
    printMode?: render.PrintMode | `${render.PrintMode}`,
    formId?: number,
    inCustLocale?: boolean,
    shipgroup?: number,
    location?: number,
  }): file.File;

  /**
   * Creates a PDF or HTML file from a Bill of Materials.
   *
   * Pre-validator error messages identify themselves as `render.transaction:`
   * (see the note on `transaction`). Unlike the other transaction-style
   * renderers, `bom` does NOT accept `formId` or `inCustLocale` — passing
   * them yields `UNEXPECTED_ERROR`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457552429198}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457552429198.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.entityId Internal ID of the assembly/BOM record to render
   * @param [options.printMode=render.PrintMode.DEFAULT] Output type
   * @return The rendered PDF or HTML file
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `entityId` is missing or null
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `entityId` is not a number
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `entityId` references a non-existent or inaccessible record, or if any disallowed parameter (`formId`, `inCustLocale`) is passed
   */
  bom(options: {
    entityId: number,
    printMode?: render.PrintMode | `${render.PrintMode}`,
  }): file.File;

  /**
   * Creates a GL impact PDF for a transaction. Undocumented in the Help
   * Center; present at runtime.
   *
   * Beyond `internalId`, the full parameter shape is unknown — calls with
   * common candidate parameters (`accountingBookId`, `formId`, `locale`)
   * all yield `UNEXPECTED_ERROR` on a bogus `internalId`, so we can't tell
   * whether they are accepted or ignored. Pass only `internalId`.
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.internalId Internal ID of the transaction whose GL impact should be rendered
   * @return The rendered PDF file
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `internalId` is missing or null
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `internalId` references a non-existent or inaccessible transaction
   */
  glImpact(options: {
    internalId: number,
  }): file.File;

  /**
   * Creates a `TemplateRenderer` for producing HTML and PDF output from an
   * Advanced PDF/HTML template. Bind data via `addRecord`, `addSearchResults`,
   * `addQuery`, and `addCustomDataSource`, then render via `renderAsString`,
   * `renderAsPdf`, `renderToResponse`, or `renderPdfToResponse`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455028930663}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455028930663.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @return A new TemplateRenderer
   */
  create(): render.TemplateRenderer;

  /**
   * Passes a Big Faceless Organization (BFO) XML string to the BFO PDF tag
   * library and returns the resulting PDF file. The tag library is stored
   * and versioned by NetSuite.
   *
   * Notes:
   * - `xmlString` must be a string. Passing an `xml.Document` triggers
   *   `UNEXPECTED_ERROR` — the Java method takes a string argument and the
   *   xml.Document cannot be coerced.
   * - Passing an options bag with no `xmlString` property triggers a Java
   *   `TypeError` (`Cannot convert '{}' to Java type 'java.lang.String'`),
   *   not the usual SuiteScript pre-validator path.
   * - The XML structure itself is NOT validated at parse time; malformed
   *   XML is accepted at this call and fails (or silently produces broken
   *   output) at the BFO rendering layer.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459185424803}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459185424803.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.xmlString BFO-formatted XML string
   * @return The rendered PDF file
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `xmlString` is missing, null, or an empty string
   * @throws {TypeError} If `options` is omitted (Java cast failure: `Cannot convert '{}' to Java type 'java.lang.String'`)
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `xmlString` is an `xml.Document` instance, or if the underlying BFO rendering fails
   */
  xmlToPdf(options: {
    xmlString: string,
  }): file.File;

  /**
   * Performs a mail merge between a scriptable email template and a record,
   * returning the merged subject and body as a `render.EmailMergeResult`.
   * Pass the entity, recipient, customRecord, supportCase, or transaction
   * to bind as the template's data context.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454332824706}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454332824706.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.templateId Internal ID or script ID of the scriptable email template
   * @param [options.entity] Entity (employee, customer, etc.) to bind as the template's primary record context
   * @param [options.entity.id] Internal ID of the entity record
   * @param [options.entity.type] Record type of the entity
   * @param [options.recipient] Recipient entity to bind as the template's recipient context
   * @param [options.recipient.id] Internal ID of the recipient record
   * @param [options.recipient.type] Record type of the recipient
   * @param [options.customRecord] Custom record instance to bind
   * @param [options.customRecord.id] Internal ID of the custom record
   * @param [options.customRecord.type] Custom record type ID
   * @param [options.supportCaseId] Internal ID of a support case to bind
   * @param [options.transactionId] Internal ID of a transaction to bind
   * @return An EmailMergeResult containing the merged `subject` and `body`
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `templateId` is missing or null
   * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If `templateId` references a non-existent email template, or if a bound entity/recipient/customRecord/transaction record does not exist (note: NetSuite leaks the unresolved `{1}` placeholder in this error's message — bug)
   */
  mergeEmail(options: {
    templateId: number | string,
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
   * Enum of print-mode values used by the transaction-style renderers
   * (`transaction`, `statement`, `packingSlip`, `pickingTicket`, `bom`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412215015}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412215015.html}
   *
   * @since 2015.2
   */
  export enum PrintMode {
    PDF = 'PDF',
    HTML = 'HTML',
    DEFAULT = 'DEFAULT',
  }

  /**
   * Enum of data-source format values used by `TemplateRenderer.addCustomDataSource`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619588793}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619588793.html}
   *
   * @since 2015.2
   */
  export enum DataSource {
    XML_DOC = 'XML_DOC',
    XML_STRING = 'XML_STRING',
    OBJECT = 'OBJECT',
    JSON = 'JSON',
  }

  /**
   * Result of a `render.mergeEmail` call. Contains the merged email subject
   * and body. Both properties are strictly read-only at runtime — writes
   * raise `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4417244174}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4417244174.html}
   *
   * @since 2015.2
   */
  export interface EmailMergeResult {

    /**
     * The merged email subject. Read-only — writes raise `READ_ONLY_PROPERTY`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412212830}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412212830.html}
     *
     * @since 2015.2
     */
    readonly subject: string;

    /**
     * The merged email body. Read-only — writes raise `READ_ONLY_PROPERTY`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412212816}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412212816.html}
     *
     * @since 2015.2
     */
    readonly body: string;

    /**
     * Returns the class-name literal for this object. Undocumented in the
     * Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'render.EmailMergeResult';

    /**
     * Returns the EmailMergeResult's settable fields as a plain object.
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Advanced PDF/HTML template renderer produced by `render.create`. Bind
   * data sources (records, search results, queries, custom XML/JSON/object
   * payloads), then render to a string, file, or HTTP response.
   *
   * Note: the runtime object additionally exposes a `toJSON()` method that
   * returns `null`. It is omitted from this type because the `null` return
   * carries no information and would mislead consumers expecting a serializable
   * snapshot.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412065265}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412065265.html}
   *
   * @since 2015.2
   */
  export interface TemplateRenderer {

    /**
     * The raw template content as a string. Initially `null` until populated
     * via `setTemplateByScriptId`, `setTemplateById`, or direct assignment.
     * Writable.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453133789062}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453133789062.html}
     *
     * @since 2015.2
     */
    templateContent: string | null;

    /**
     * Loads the template's content from an Advanced PDF/HTML Template record
     * looked up by its script ID.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528574899}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4528574899.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2016.1
     *
     * @param options
     * @param options.scriptId Script ID of the Advanced PDF/HTML Template record (e.g. `'custtmpl_my_template'`)
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `scriptId` is missing or null
     */
    setTemplateByScriptId(options: {
      scriptId: string,
    }): void;

    /**
     * Loads the template's content from an Advanced PDF/HTML Template record
     * looked up by its internal ID (nKey).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528552999}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4528552999.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2016.1
     *
     * @param options
     * @param options.id Internal ID of the Advanced PDF/HTML Template record
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `id` is missing or null
     */
    setTemplateById(options: {
      id: number,
    }): void;

    /**
     * Binds a record to a template variable. The bound record is exposed
     * inside the FreeMarker template under the supplied `templateName`.
     * Both positional and options-bag forms are accepted.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456543212890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456543212890.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param templateName Name to use for the record inside the FreeMarker template
     * @param record Record or RecordReadonly instance to bind
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If no arguments are provided
     */
    addRecord(
      templateName: string,
      record: record.Record | record.RecordReadonly,
    ): void;

    /**
     * Binds a record to a template variable. The bound record is exposed
     * inside the FreeMarker template under the supplied `templateName`.
     * Both positional and options-bag forms are accepted.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456543212890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456543212890.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.templateName Name to use for the record inside the FreeMarker template
     * @param options.record Record or RecordReadonly instance to bind
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if either field is missing or null
     */
    addRecord(options: {
      templateName: string,
      record: record.Record | record.RecordReadonly,
    }): void;

    /**
     * Binds a search result to a template variable.
     *
     * Note: at the time of this writing, this method rejects every
     * `search.Result` value passed to it with `WRONG_PARAMETER_TYPE:
     * searchResult is expected as search.Result.` — including instances
     * returned from `search.create(...).run().getRange(...)` whose
     * `toString()` is `'search.Result'`. This appears to be a NetSuite
     * runtime bug; the documented type remains `search.Result` and the
     * type definition is preserved as documented.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456249023436}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456249023436.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.templateName Name to use for the search result inside the FreeMarker template
     * @param options.searchResult Search result to bind
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if either field is missing or null
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Currently fires on every input — see note above
     */
    addSearchResults(options: {
      templateName: string,
      searchResult: search.Result,
    }): void;

    /**
     * Binds a saved query (referenced by script ID) to a template variable.
     * Undocumented in the Help Center; present at runtime.
     *
     * Mutually exclusive with the `query` form — passing both raises an
     * error.
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2018.2
     *
     * @param options
     * @param options.templateName Name to use for the query inside the FreeMarker template
     * @param options.id Script ID of a saved query
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `templateName` is missing or null
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If neither `id` nor `query` is provided
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If both `id` and `query` are provided
     */
    addQuery(options: {
      templateName: string,
      id: string,
    }): void;

    /**
     * Binds a `query.Query` instance to a template variable. Undocumented in
     * the Help Center; present at runtime.
     *
     * Mutually exclusive with the `id` form — passing both raises an error.
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2018.2
     *
     * @param options
     * @param options.templateName Name to use for the query inside the FreeMarker template
     * @param options.query A `query.Query` instance
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `templateName` is missing or null
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If neither `id` nor `query` is provided
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If both `id` and `query` are provided
     */
    addQuery(options: {
      templateName: string,
      query: query.Query,
    }): void;

    /**
     * Adds an XML, JSON, or object data source to the template under the
     * supplied alias. The `format` determines how `data` is interpreted.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4528541027}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4528541027.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2016.1
     *
     * @param options
     * @param options.alias Namespace name to expose the data source under inside the FreeMarker template
     * @param options.format Format of `data` — XML_DOC, XML_STRING, OBJECT, or JSON
     * @param options.data The data to bind. For XML_DOC, an `xml.Document`. For XML_STRING and JSON, a string. For OBJECT, a plain JavaScript object
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `data` is missing or null
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `format` is not one of `XML_DOC`, `XML_STRING`, `OBJECT`, or `JSON`
     */
    addCustomDataSource(options: {
      alias: string,
      format: render.DataSource | `${render.DataSource}`,
      data: Object | xml.Document | string,
    }): void;

    /**
     * Renders the template to a string. Useful for inline HTML rendering or
     * when piping the output into a different downstream processor.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455231872558}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455231872558.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return The rendered template as a string
     */
    renderAsString(): string;

    /**
     * Renders the template directly to a Suitelet's HTTP response object.
     * Use this when the script context is a Suitelet generating HTML output
     * to the browser.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459426513671}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459426513671.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.response The Suitelet's `http.ServerResponse` instance
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `response` is missing or null
     */
    renderToResponse(options: {
      response: http.ServerResponse,
    }): void;

    /**
     * Renders the template as a PDF file.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452241760253}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452241760253.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return The rendered PDF file
     */
    renderAsPdf(): file.File;

    /**
     * Renders the template as a PDF directly to a Suitelet's HTTP response.
     * Positional form. Use this when the script context is a Suitelet
     * generating PDF output to the browser.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455108276366}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455108276366.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param response The Suitelet's `http.ServerResponse` instance
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `response` is missing or null
     */
    renderPdfToResponse(response: http.ServerResponse): void;

    /**
     * Renders the template as a PDF directly to a Suitelet's HTTP response.
     * Options-bag form. Undocumented in the Help Center; present at runtime
     * alongside the positional form.
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.response The Suitelet's `http.ServerResponse` instance
     *
     * @throws {error.SuiteScriptError} MISSING_PDF_PARAMETERS If `options` is empty or if `response` is missing or null
     */
    renderPdfToResponse(options: {
      response: http.ServerResponse,
    }): void;

    /**
     * Returns the class-name literal for this object. Undocumented in the
     * Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'render.TemplateRenderer';
  }
}
