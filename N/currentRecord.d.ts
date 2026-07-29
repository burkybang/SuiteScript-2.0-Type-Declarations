/// <reference path="./record.d.ts" />

/**
 * SuiteScript currentRecord module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4625600928}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4625600928.html}
 * @module N/currentRecord
 * @NApiVersion 2.x
 */
interface currentRecord {

  get: {

    /**
     * Retrieves a currentRecord object that represents the record active on the current page
     *
     * At runtime this returns undefined when there is no current record in the execution context (for example, when
     * called server-side); the declared return type assumes the supported client-side context.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637729624}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637729624.html}
     *
     * @governance none
     * @restriction Client-side scripts only
     * @since 2016.2
     *
     * @throws {error.SuiteScriptError} CANNOT_CREATE_RECORD_INSTANCE if current record page is not scriptable or an error occurred when creating the record object
     */
    (): record.DynamicRecord;

    /**
     * Retrieves a promise for a currentRecord object that represents the record active on the current page
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637734729}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637734729.html}
     *
     * @governance none
     * @restriction Client-side scripts only
     * @since 2016.2
     *
     * @throws {error.SuiteScriptError} CANNOT_CREATE_RECORD_INSTANCE if current record page is not scriptable or an error occurred when creating the record object
     */
    promise(): Promise<record.DynamicRecord>;
  };
}

declare namespace currentRecord {

  /**
   * @deprecated Renamed to {@link record.DynamicRecord}. A dynamic-mode record is not
   * "the current record on the page"; it is just a record opened in Dynamic Mode.
   */
  export type CurrentRecord = record.DynamicRecord;

  /**
   * @deprecated Use {@link record.DynamicRecord}. This alias historically excluded `save()`;
   * it now equals `record.DynamicRecord` (see the save() note about read-only contexts).
   */
  export type CurrentRecordReadonly = record.DynamicRecord;

  /** @deprecated Renamed to {@link record.DynamicField}. */
  export type Field = record.DynamicField;

  /** @deprecated Renamed to {@link record.DynamicSublist}. */
  export type Sublist = record.DynamicSublist;

  /** @deprecated Renamed to {@link record.DynamicColumn}. */
  export type Column = record.DynamicColumn;
}
