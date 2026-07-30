/// <reference path="./error.d.ts" />
/// <reference path="./file.d.ts" />

/**
 * SuiteScript documentCapture module
 *
 * Load the N/documentCapture module to extract text content from supported documents. The
 * N/documentCapture module lets you programmatically extract structured content and key information
 * from a variety of document types (such as invoices, receipts, contracts, and so on) directly within
 * NetSuite. This module uses the AI-driven capabilities of the Oracle Cloud Infrastructure (OCI)
 * Document Understanding service.
 *
 * This module is available in NetSuite by default when the Server SuiteScript feature is enabled.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_8134325498}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8134325498.html}
 *
 * @module N/documentCapture
 * @NApiVersion 2.x
 */
interface documentCapture {

  /**
   * Extracts content (text, table content, and key-value pairs) from a document.
   *
   * The content returned depends on the features specified via `options.features`. Use values from
   * `documentCapture.Feature` (e.g. `TEXT_EXTRACTION`, `TABLE_EXTRACTION`, `FIELD_EXTRACTION`).
   *
   * Synchronous; supports documents up to five pages. For longer documents, submit an asynchronous
   * task using the `N/task` module (`task.TaskType.DOCUMENT_CAPTURE`) and parse the result with
   * `documentCapture.parseResult(options)`.
   *
   * Supports PDF, JPG, PNG, and TIFF files. Encrypted files are not supported.
   *
   * Successful calls consume usage from the monthly free pool of requests provided by NetSuite (track
   * usage on the AI Preferences page). To exceed the free pool, supply OCI credentials via
   * `options.ociConfig` for unlimited usage.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102801}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102801.html}
   *
   * @governance 100 units
   * @restriction Server-side scripts only
   * @since 2025.2
   */
  documentToStructure: {

    /**
     * Extracts content from a document synchronously.
     *
     * @param options
     * @param options.file The document file to extract content from. Must be located in the NetSuite File Cabinet, in PDF/JPG/PNG/TIFF format, and ≤ 5 pages. Encrypted files unsupported.
     * @param [options.documentType = 'OTHERS'] The document type. Required when `FIELD_EXTRACTION` is in `options.features`.
     * @param [options.features = ['TEXT_EXTRACTION', 'TABLE_EXTRACTION']] Features to extract.
     * @param [options.language = 'ENG'] Language of the document.
     * @param [options.ociConfig] OCI credentials for unlimited usage. Overrides any OCI credentials configured on the AI Preferences page.
     * @param [options.timeout = 30000] Timeout in milliseconds. Minimum 30,000; values below 30,000 are silently bumped to 30,000.
     *
     * @throws {error.SuiteScriptError} ACCESS_DENIED The OCI credentials in `options.ociConfig` don't grant access to the OCI Document Understanding service.
     * @throws {error.SuiteScriptError} DOCUMENT_TOO_LONG The file is longer than five pages.
     * @throws {error.SuiteScriptError} FEATURES_CANNOT_BE_EMPTY An empty array was specified for `options.features`.
     * @throws {error.SuiteScriptError} FEATURE_1_DOES_NOT_SUPPORT_LANGUAGE_2 A specified feature isn't supported in the specified language.
     * @throws {error.SuiteScriptError} INCOMPATIBLE_DOCUMENT_TYPE_FOR_FEATURE_1 A specified feature isn't supported for the specified document type.
     * @throws {error.SuiteScriptError} INVALID_DOCUMENT_CAPTURE_RESULT The document capture result provided by the service is invalid.
     * @throws {error.SuiteScriptError} INVALID_DOCUMENT_TYPE The specified document type isn't a `documentCapture.DocumentType` value.
     * @throws {error.SuiteScriptError} INVALID_LANGUAGE The specified language isn't a `documentCapture.Language` value.
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED More than five parallel requests to the service.
     * @throws {error.SuiteScriptError} MONTHLY_QUOTA_OF_1_SUITE_SCRIPT_DOCUMENT_CAPTURE_REQUESTS_HAS_BEEN_MET The monthly free request pool is exhausted.
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED `options.ociConfig.fingerprint` or `options.ociConfig.privateKey` is not a NetSuite secret.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The required `options.file` parameter wasn't provided.
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS `options.ociConfig` includes unknown properties or values.
     * @throws {error.SuiteScriptError} UNSUPPORTED_FILE_TYPE The file isn't in PDF, JPG, PNG, or TIFF format.
     */
    (options: {
      file: file.File,
      documentType?: documentCapture.DocumentType | `${documentCapture.DocumentType}`,
      features?: (documentCapture.Feature | `${documentCapture.Feature}`)[],
      language?: documentCapture.Language | `${documentCapture.Language}`,
      ociConfig?: documentCapture.OciConfig,
      timeout?: number,
    }): documentCapture.Document;

    /**
     * Extracts content from a document asynchronously, returning a `Promise`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_49090632931}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_49090632931.html}
     *
     * @param options
     * @param options.file The document file to extract content from. Must be located in the NetSuite File Cabinet, in PDF/JPG/PNG/TIFF format, and ≤ 5 pages. Encrypted files unsupported.
     * @param [options.documentType = 'OTHERS'] The document type. Required when `FIELD_EXTRACTION` is in `options.features`.
     * @param [options.features = ['TEXT_EXTRACTION', 'TABLE_EXTRACTION']] Features to extract.
     * @param [options.language = 'ENG'] Language of the document.
     * @param [options.ociConfig] OCI credentials for unlimited usage.
     * @param [options.timeout = 30000] Timeout in milliseconds. Minimum 30,000.
     * @return A promise that resolves to the extracted document.
     */
    promise(options: {
      file: file.File,
      documentType?: documentCapture.DocumentType | `${documentCapture.DocumentType}`,
      features?: (documentCapture.Feature | `${documentCapture.Feature}`)[],
      language?: documentCapture.Language | `${documentCapture.Language}`,
      ociConfig?: documentCapture.OciConfig,
      timeout?: number,
    }): Promise<documentCapture.Document>;
  };

  /**
   * Extracts plain text content from a PDF file. For non-PDF formats (JPG/PNG/TIFF) or richer
   * extraction (tables, fields), use `documentCapture.documentToStructure(options)` instead.
   *
   * The returned text can be passed to `N/llm` methods (e.g. `llm.generateText`) for further analysis.
   *
   * Encrypted files are not supported.
   *
   * Unlike `documentToStructure`, this method does **not** consume usage from the monthly free
   * request pool.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704103115}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704103115.html}
   *
   * @governance 100 units
   * @restriction Server-side scripts only
   * @since 2025.2
   */
  documentToText: {

    /**
     * Extracts text from a PDF file synchronously.
     *
     * @param options
     * @param options.file The PDF file to extract content from. Must be located in the NetSuite File Cabinet. Encrypted files unsupported.
     * @param [options.timeout = 30000] Timeout in milliseconds. Minimum 30,000; values below 30,000 are silently bumped to 30,000.
     * @return The extracted text.
     *
     * @throws {error.SuiteScriptError} FILE_CANNOT_BE_EMPTY The specified file is empty.
     * @throws {error.SuiteScriptError} FILE_CORRUPTED_OR_INVALID The file couldn't be parsed (corrupted or invalid).
     * @throws {error.SuiteScriptError} UNSUPPORTED_ENCODING_EXCEPTION The file is corrupted or contains invalid characters.
     * @throws {error.SuiteScriptError} UNSUPPORTED_FILE_TYPE_1_USE_2 The file is not a PDF.
     */
    (options: {
      file: file.File,
      timeout?: number,
    }): string;

    /**
     * Extracts text from a PDF file asynchronously, returning a `Promise`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_6091025132}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_6091025132.html}
     *
     * @param options
     * @param options.file The PDF file to extract content from.
     * @param [options.timeout = 30000] Timeout in milliseconds. Minimum 30,000.
     * @return A promise that resolves to the extracted text.
     */
    promise(options: {
      file: file.File,
      timeout?: number,
    }): Promise<string>;
  };

  /**
   * Returns the number of available concurrent requests remaining.
   *
   * Up to five concurrent requests are supported between `documentToText`/`documentToStructure`
   * (and their promise versions).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_70083055604}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_70083055604.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2025.2
   */
  getRemainingConcurrency: {

    /**
     * Returns the number of available concurrent requests remaining.
     *
     * @return Number of concurrent slots available.
     */
    (): number;

    /**
     * Returns the number of available concurrent requests remaining, asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_32092152071}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_32092152071.html}
     *
     * @return A promise that resolves to the number of concurrent slots available.
     */
    promise(): Promise<number>;
  };

  /**
   * Returns the number of free document capture requests remaining for the current month.
   *
   * This method tracks usage for `documentCapture.documentToStructure(options)`.
   * `documentCapture.documentToText(options)` doesn't consume usage from the free pool. You can
   * also track usage on the AI Preferences page in NetSuite.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_42084005061}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_42084005061.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2025.2
   */
  getRemainingFreeUsage: {

    /**
     * Returns the number of free document capture requests remaining for the current month.
     *
     * @return Number of free requests remaining for the current month.
     */
    (): number;

    /**
     * Returns the number of free document capture requests remaining for the current month, asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_86092527607}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_86092527607.html}
     *
     * @return A promise that resolves to the number of free requests remaining.
     */
    promise(): Promise<number>;
  };

  /**
   * Converts a JSON file (the result of an asynchronous extraction task created via
   * `task.create({type: task.TaskType.DOCUMENT_CAPTURE})`) into a `documentCapture.Document` object.
   *
   * Use this to process the JSON output written to the File Cabinet by an async document capture
   * task. See the official `Extract Content from a Document Asynchronously` example.
   *
   * **Two call shapes are supported:** both
   * `parseResult({file: jsonFile})` (object form, per the docs parameter table) AND
   * `parseResult(jsonFile)` (bare-file form, per both official code samples) work at runtime and
   * yield the same downstream errors. The docs parameter table is incomplete; the samples
   * are correct.
   *
   * **`.promise()` exists at runtime:** although not documented in the Help Center,
   * `parseResult.promise` is a function at runtime, accepting the same two call shapes.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704103210}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704103210.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2025.2
   */
  parseResult: {

    /**
     * Object-form sync call.
     *
     * @param options
     * @param options.file The JSON file to parse. Must be located in the NetSuite File Cabinet.
     * @return The parsed document.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `parseResult()` called with no args at all. Not documented in the Help Center.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG `options.file` is not a `file.File` (e.g. `{}`, `undefined`, a number, or a string). Not documented in the Help Center.
     * @throws {error.SuiteScriptError} INVALID_DOCUMENT_CAPTURE_RESULT The file is a real JSON file but doesn't have the shape of an async-document-capture result. Not documented in the Help Center.
     * @throws {error.SuiteScriptError} UNSUPPORTED_FILE_TYPE_1_USE_2 The file is not a JSON file (likely fires before `INVALID_DOCUMENT_CAPTURE_RESULT` for non-JSON file types — unverified).
     */
    (options: {
      file: file.File,
    }): documentCapture.Document;

    /**
     * Bare-file sync call. Functionally equivalent to the object form.
     *
     * @param file The JSON file to parse. Must be located in the NetSuite File Cabinet.
     * @return The parsed document.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG The argument is not a `file.File`.
     * @throws {error.SuiteScriptError} INVALID_DOCUMENT_CAPTURE_RESULT The file is a real JSON file but doesn't have the shape of an async-document-capture result.
     * @throws {error.SuiteScriptError} UNSUPPORTED_FILE_TYPE_1_USE_2 The file is not a JSON file.
     */
    (file: file.File): documentCapture.Document;

    promise: {

      /**
       * Object-form async call.
       *
       * @param options
       * @param options.file The JSON file to parse. Must be located in the NetSuite File Cabinet.
       * @return Promise resolving to the parsed document.
       *
       * @throws {error.SuiteScriptError} See sync variants for the inferred/confirmed `@throws` codes.
       */
      (options: {
        file: file.File,
      }): Promise<documentCapture.Document>;

      /**
       * Bare-file async call. Functionally equivalent to the object-form promise.
       *
       * @param file The JSON file to parse. Must be located in the NetSuite File Cabinet.
       * @return Promise resolving to the parsed document.
       *
       * @throws {error.SuiteScriptError} See sync variants for the inferred/confirmed `@throws` codes.
       */
      (file: file.File): Promise<documentCapture.Document>;
    };
  };
}

declare namespace documentCapture {

  /**
   * Holds values for the document type. Used with `documentCapture.documentToStructure(options)`
   * via `options.documentType`. Specifying the type lets the service apply pretrained models
   * optimized for that type. Defaults to `OTHERS` when omitted.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704103314}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704103314.html}
   *
   * @since 2025.2
   */
  export enum DocumentType {
    BANK_STATEMENT = 'BANK_STATEMENT',
    CHECK = 'CHECK',
    DRIVER_LICENSE = 'DRIVER_LICENSE',
    HEALTH_INSURANCE_ID = 'HEALTH_INSURANCE_ID',
    INVOICE = 'INVOICE',
    OTHERS = 'OTHERS',
    PASSPORT = 'PASSPORT',
    PAYSLIP = 'PAYSLIP',
    RECEIPT = 'RECEIPT',
    RESUME = 'RESUME',
    TAX_FORM = 'TAX_FORM',
  }

  /**
   * Holds values for the document features to extract. Used with
   * `documentCapture.documentToStructure(options)` via `options.features`. If unspecified,
   * `TEXT_EXTRACTION` and `TABLE_EXTRACTION` are used by default.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704103522}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704103522.html}
   *
   * @since 2025.2
   */
  export enum Feature {
    DOCUMENT_CLASSIFICATION = 'DOCUMENT_CLASSIFICATION',
    FIELD_EXTRACTION = 'FIELD_EXTRACTION',
    TABLE_EXTRACTION = 'TABLE_EXTRACTION',
    TEXT_EXTRACTION = 'TEXT_EXTRACTION',
  }

  /**
   * Holds values for the type of an extracted field. Returned via `Field.type` when the
   * `FIELD_EXTRACTION` feature is requested. Describes the semantic category of the field's data.
   * In an invoice extraction the observed `Field.type` was `KEY_VALUE`, and line-item data came back
   * through `Page.tables` rather than as `LINE_ITEM*` fields, so those enum values are carried from
   * the docs but were not reproduced at runtime here.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704103558}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704103558.html}
   *
   * @since 2025.2
   */
  export enum FieldType {
    KEY_VALUE = 'KEY_VALUE',
    LINE_ITEM = 'LINE_ITEM',
    LINE_ITEM_FIELD = 'LINE_ITEM_FIELD',
    LINE_ITEM_GROUP = 'LINE_ITEM_GROUP',
    UNKNOWN = 'UNKNOWN',
  }

  /**
   * Holds values for the language of a document. Used with
   * `documentCapture.documentToStructure(options)` via `options.language`. Defaults to `ENG`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0828075605}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0828075605.html}
   *
   * @since 2025.2
   */
  export enum Language {
    /** Arabic */
    ARABIC = 'ARA',
    /** Czech */
    CZECH = 'CES',
    /** Simplified Chinese */
    CHINESE_SIMPLIFIED = 'CHI_SIM',
    /** Danish */
    DANISH = 'DAN',
    /** German */
    GERMAN = 'DEU',
    /** Greek */
    GREEK = 'ELL',
    /** English */
    ENGLISH = 'ENG',
    /** Finnish */
    FINNISH = 'FIN',
    /** French */
    FRENCH = 'FRA',
    /** Hindi */
    HINDI = 'HIN',
    /** Hungarian */
    HUNGARIAN = 'HUN',
    /** Italian */
    ITALIAN = 'ITA',
    /** Japanese */
    JAPANESE = 'JPN',
    /** Korean */
    KOREAN = 'KOR',
    /** Dutch */
    DUTCH = 'NLD',
    /** Norwegian */
    NORWEGIAN = 'NOR',
    /**
     * Other languages not listed here.
     *
     * **Naming quirk:** the runtime member name is `OTHER`
     * (singular) but the runtime VALUE is `'OTHERS'` (plural). The Help Center docs page lists
     * `OTHERS` as the Value column entry and doesn't show member names, so
     * `documentCapture.Language.OTHER === 'OTHERS'`.
     */
    OTHER = 'OTHERS',
    /** Polish */
    POLISH = 'POL',
    /** Portuguese */
    PORTUGUESE = 'POR',
    /** Romanian */
    ROMANIAN = 'RON',
    /** Russian */
    RUSSIAN = 'RUS',
    /** Slovak */
    SLOVAK = 'SLK',
    /** Swedish */
    SWEDISH = 'SWE',
    /** Turkish */
    TURKISH = 'TUR',
  }

  /**
   * Configuration for OCI Document Understanding service credentials, used with
   * `documentCapture.documentToStructure(options)` via `options.ociConfig` to obtain unlimited
   * usage. Credentials supplied here override any OCI credentials configured on the AI Preferences
   * page.
   *
   * Defined as a named interface (not anonymous) to make it reusable from JSDoc and to make the
   * shape easier to discover.
   *
   * @since 2025.2
   */
  interface OciConfig {

    /**
     * Compartment OCID.
     */
    compartmentId?: string;

    /**
     * Endpoint ID. Required only when an OCI dedicated AI cluster (DAC) is used.
     */
    endpointId?: string;

    /**
     * Fingerprint of the public key. Only a NetSuite secret (script ID) is accepted.
     */
    fingerprint?: string;

    /**
     * Private key of the OCI user. Only a NetSuite secret (script ID) is accepted.
     */
    privateKey?: string;

    /**
     * Tenancy OCID.
     */
    tenancyId?: string;

    /**
     * User OCID.
     */
    userId?: string;
  }

  /**
   * An extracted table cell. Includes a confidence level (`confidence`) and the cell's extracted
   * text (`text`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703022335}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703022335.html}
   *
   * @since 2025.2
   */
  interface Cell {

    /**
     * Confidence level for the cell's extracted text. A number between 0 and 1 indicating how
     * confident the service is in the accuracy of `text`. For example, `0.95` means 95% confidence.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703022616}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703022616.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly confidence: number;

    /**
     * The extracted text of the cell.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703023215}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703023215.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly text: string;
  }

  /**
   * The extracted data from a document. Returned by `documentCapture.documentToStructure(options)`
   * and `documentCapture.parseResult(options)`. Includes the document's MIME type and an array of
   * extracted pages.
   *
   * Which sub-properties on each page are populated depends on the features specified in the
   * extraction call. By default (no features specified), `TEXT_EXTRACTION` and `TABLE_EXTRACTION`
   * are used.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703030933}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703030933.html}
   *
   * @since 2025.2
   */
  interface Document {

    /**
     * The MIME type of the document, e.g. `image/jpeg`, `application/pdf`, `image/png`, `image/tiff`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703031202}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703031202.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly mimeType: string;

    /**
     * The extracted pages of the document. `documentToStructure` supports up to five pages;
     * documents parsed via `parseResult` (originating from an async task) can contain any number.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703031346}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703031346.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly pages: documentCapture.Page[];

    /**
     * Returns the entire text of the document.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_93100953424}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_93100953424.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2025.2
     *
     * @return The full text of the document.
     */
    getText(): string;
  }

  /**
   * An extracted field from a document, represented as a key-value pair. Included in extracted
   * content only when the `FIELD_EXTRACTION` feature is requested.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703031446}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703031446.html}
   *
   * @since 2025.2
   */
  interface Field {

    /**
     * The label (name) of the field.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0703031534}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0703031534.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly label: documentCapture.FieldLabel;

    /**
     * The type of the field. Documented as a string but values come from `FieldType`. Includes
     * `UNKNOWN` for fields the service can't classify; `| string` is included only as a defensive
     * fallback against future enum additions.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704094825}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704094825.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly type: documentCapture.FieldType | `${documentCapture.FieldType}` | string;

    /**
     * The value of the field.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704094949}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704094949.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly value: documentCapture.FieldValue;
  }

  /**
   * An extracted field label (the "key" side of a key-value field pair). Includes a confidence
   * level (`confidence`) and the label's name (`name`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704095038}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704095038.html}
   *
   * @since 2025.2
   */
  interface FieldLabel {

    /**
     * Confidence level for the field label's extracted name. A number between 0 and 1.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704095138}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704095138.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly confidence: number;

    /**
     * The name of the field label.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704095251}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704095251.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly name: string;
  }

  /**
   * An extracted field value (the "value" side of a key-value field pair). Includes a confidence
   * level (`confidence`) and the value's text (`text`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704095437}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704095437.html}
   *
   * @since 2025.2
   */
  interface FieldValue {

    /**
     * Confidence level for the field value's extracted text. A number between 0 and 1.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704095514}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704095514.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly confidence: number;

    /**
     * The text of the field value.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704095601}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704095601.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly text: string;
  }

  /**
   * An extracted line of text from a document. A line corresponds to one rendered line in the
   * document — not necessarily one sentence.
   *
   * Included only when the `TEXT_EXTRACTION` feature is requested (the default).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704100631}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704100631.html}
   *
   * @since 2025.2
   */
  interface Line {

    /**
     * Confidence level for the line's extracted text. A number between 0 and 1.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704100717}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704100717.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly confidence: number;

    /**
     * The text of the line.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704100807}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704100807.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly text: string;
  }

  /**
   * An extracted page from a document. Sub-arrays (`fields`, `lines`, `tables`, `words`,
   * `detectedDocumentTypes`) are populated only when the matching feature is requested; when a
   * feature is not requested its array is present but empty (`[]`), never `undefined` or `null`,
   * which is why they are typed as non-optional arrays.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704100841}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704100841.html}
   *
   * @since 2025.2
   */
  interface Page {

    /**
     * A ranked list of candidate document types this page resembles (highest `confidence` first),
     * not just the single best match. Each entry has a `documentType` (one of the `DocumentType`
     * enum values) and a `confidence` between 0 and 1.
     *
     * Populated only when the `DOCUMENT_CLASSIFICATION` feature is requested.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_28102340830}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_28102340830.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly detectedDocumentTypes: {
      readonly documentType: documentCapture.DocumentType | `${documentCapture.DocumentType}` | string,
      readonly confidence: number,
    }[];

    /**
     * Extracted fields from the page. Populated only when the `FIELD_EXTRACTION` feature is requested.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704100922}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704100922.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly fields: documentCapture.Field[];

    /**
     * Extracted lines from the page. Populated only when the `TEXT_EXTRACTION` feature is requested
     * (the default).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704101048}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704101048.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly lines: documentCapture.Line[];

    /**
     * Extracted tables from the page. Populated only when the `TABLE_EXTRACTION` feature is requested
     * (the default).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704101117}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704101117.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly tables: documentCapture.Table[];

    /**
     * Extracted words from the page. Populated only when the `TEXT_EXTRACTION` feature is requested
     * (the default).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704101139}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704101139.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly words: documentCapture.Word[];

    /**
     * Returns the entire text of the page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_65101108674}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_65101108674.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2025.2
     *
     * @return The full text of the page.
     */
    getText(): string;
  }

  /**
   * An extracted table from a document. Has separate header/body/footer row arrays plus row/column
   * counts and an overall confidence score.
   *
   * Included in extracted content only when the `TABLE_EXTRACTION` feature is requested (the default).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704101225}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704101225.html}
   *
   * @since 2025.2
   */
  interface Table {

    /**
     * The body rows of the table. Body rows are the main content rows, excluding header/footer rows.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704101315}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704101315.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly bodyRows: documentCapture.TableRow[];

    /**
     * The number of extracted columns in the table.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704101358}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704101358.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly columnCount: number;

    /**
     * Confidence level for the extracted rows of the table. A number between 0 and 1.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704101426}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704101426.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly confidence: number;

    /**
     * The footer rows of the table. Footer rows are at the bottom and often contain summaries or totals.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102012}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102012.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly footerRows: documentCapture.TableRow[];

    /**
     * The header rows of the table. Header rows are at the top and contain column labels.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102044}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102044.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly headerRows: documentCapture.TableRow[];

    /**
     * Total number of extracted rows in the table (header + body + footer).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102126}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102126.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly rowCount: number;
  }

  /**
   * An extracted table row, holding an array of cells.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102217}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102217.html}
   *
   * @since 2025.2
   */
  interface TableRow {

    /**
     * The cells of the row.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102248}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102248.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly cells: documentCapture.Cell[];
  }

  /**
   * An extracted word from a document. Included only when the `TEXT_EXTRACTION` feature is
   * requested (the default).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102321}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102321.html}
   *
   * @since 2025.2
   */
  interface Word {

    /**
     * Confidence level for the word's extracted text. A number between 0 and 1.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102426}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102426.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly confidence: number;

    /**
     * The extracted text of the word.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0704102521}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0704102521.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY This property is read-only.
     */
    readonly text: string;
  }
}
