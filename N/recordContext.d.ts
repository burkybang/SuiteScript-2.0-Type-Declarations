/// <reference path="./record.d.ts" />
/// <reference path="./currentRecord.d.ts" />

/**
 * SuiteScript record module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627324548}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627324548.html}
 *
 * @module N/recordContext
 * @NApiVersion 2.x
 */
interface recordContext {

  getContext: {

    /**
     * Returns the record context object for a given record type and record ID
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
     *
     * @governance 10 units
     *
     * @param options
     * @param options.recordType record type
     * @param options.recordId record ID
     * @param options.contextTypes context types
     *
     * @throws {error.SuiteScriptError} MUTUALY_EXCLUSIVE_ARGUMENT if the record is present alongside a record ID or record type
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if any of the record ID or record type parameter is missing
     * @throws {error.SuiteScriptError} INVALID_UNSUPRTD_RCRD_TYP if the record type selection is invalid or not supported
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if the parameter type is wrong
     * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE if the context type selection is unknown
     *
     * @since 2015.2
     */<ContextTypes extends recordContext.ContextType[]>(options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      recordId: number | string,
      contextTypes: ContextTypes,
    }): recordContext.RecordContext<ContextTypes>;

    /**
     * Returns the record context object for a given record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
     *
     * @governance 10 units
     *
     * @param options
     * @param options.record record object
     * @param options.contextTypes context types
     *
     * @throws {error.SuiteScriptError} MUTUALY_EXCLUSIVE_ARGUMENT if the record is present alongside a record ID or record type
     * @throws {error.SuiteScriptError} INVALID_UNSUPRTD_RCRD_TYP if the record type selection is invalid or not supported
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if the parameter type is wrong
     * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE if the context type selection is unknown
     *
     * @since 2015.2
     */<ContextTypes extends recordContext.ContextType[]>(options: {
      record: record.Record | record.RecordReadonly | currentRecord.CurrentRecord | currentRecord.CurrentRecordReadonly,
      contextTypes: ContextTypes,
    }): recordContext.RecordContext<ContextTypes>;

    promise: {

      /**
       * Returns the record context object for a given record type and record ID asynchronously
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
       *
       * @governance 10 units
       *
       * @param options
       * @param options.recordType record type
       * @param options.recordId record ID
       * @param options.contextTypes context types
       *
       * @throws {error.SuiteScriptError} MUTUALY_EXCLUSIVE_ARGUMENT if the record is present alongside a record ID or record type
       * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if any of the record ID or record type parameter is missing
       * @throws {error.SuiteScriptError} INVALID_UNSUPRTD_RCRD_TYP if the record type selection is invalid or not supported
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if the parameter type is wrong
       * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE if the context type selection is unknown
       *
       * @since 2015.2
       */<ContextTypes extends recordContext.ContextType[]>(options: {
        recordType: record.Type | `${record.Type}` | record.CustomType | string,
        recordId: number | string,
        contextTypes: ContextTypes,
      }): Promise<recordContext.RecordContext<ContextTypes>>;

      /**
       * Returns the record context object for a given record asynchronously
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
       *
       * @governance 10 units
       *
       * @param options
       * @param options.record record object
       * @param options.contextTypes context types
       *
       * @throws {error.SuiteScriptError} MUTUALY_EXCLUSIVE_ARGUMENT if the record is present alongside a record ID or record type
       * @throws {error.SuiteScriptError} INVALID_UNSUPRTD_RCRD_TYP if the record type selection is invalid or not supported
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if the parameter type is wrong
       * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE if the context type selection is unknown
       *
       * @since 2015.2
       */<ContextTypes extends recordContext.ContextType[]>(options: {
        record: record.Record | record.RecordReadonly | currentRecord.CurrentRecord | currentRecord.CurrentRecordReadonly,
        contextTypes: ContextTypes,
      }): Promise<recordContext.RecordContext<ContextTypes>>;
    };
  };
}

declare namespace recordContext {

  /**
   * Contains key-value pairs that represent context types and their values. Each key is the name of the context type, and each value is the record context. Multiple values for a single context type can be returned in an array.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159311113661}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159311113661.html}
   */
  type RecordContext<ContextTypes extends ContextType[]> = Record<Lowercase<ContextTypes[number]>, string[]>;

  /**
   * Enum for possible context type values
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627386827}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627386827.html}
   */
  export enum ContextType {
    LOCALIZATION = 'LOCALIZATION',
  }
}