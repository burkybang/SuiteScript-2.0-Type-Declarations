/// <reference path="./record.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

/**
 * SuiteScript currentRecord module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4625600928}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4625600928.html}
 *
 * @module N/currentRecord
 * @NApiVersion 2.x
 */
interface currentRecord {

  get: {

    /**
     * Retrieves a currentRecord object that represents the record active on the current page
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637729624}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637729624.html}
     *
     * @restriction Client-side scripts only
     *
     * @return {currentRecord.CurrentRecord}
     *
     * @throws {error.SuiteScriptError} CANNOT_CREATE_RECORD_INSTANCE if current record page is not scriptable or an error occurred when creating the record object
     *
     * @since 2016.2
     */
    (): currentRecord.CurrentRecord;

    /**
     * Retrieves a promise for a currentRecord object that represents the record active on the current page
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637734729}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637734729.html}
     *
     * @restriction Client-side scripts only
     *
     * @return {Promise<currentRecord.CurrentRecord>}
     *
     * @throws {error.SuiteScriptError} CANNOT_CREATE_RECORD_INSTANCE if current record page is not scriptable or an error occurred when creating the record object
     *
     * @since 2016.2
     */
    promise(): Promise<currentRecord.CurrentRecord>;
  };
}

declare namespace currentRecord {

  export interface CurrentRecordReadonly {

    /**
     * The internal ID of the record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576907}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637576907.html}
     *
     * @type {number}
     * @readonly
     */
    id: number;

    /**
     * The type of the record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637576636.html}
     *
     * @restriction This property is not available for subrecords
     *
     * @type {record.Type|string}
     * @readonly
     */
    type: record.Type | string;

    /**
     * Indicates whether the record is in dynamic or standard mode
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576809}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637576809.html}
     *
     * @type {boolean}
     * @readonly
     */
    isDynamic: boolean;

    /**
     * Return value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582256}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582256.html}
     *
     * @param {string} fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue(
      fieldId: string,
    ): string | string[] | number | Date | boolean;

    /**
     * Return value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582256}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582256.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue(options: {
      fieldId: string,
    }): string | string[] | number | Date | boolean;

    /**
     * Set value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577499}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577499.html}
     *
     * @param {string} fieldId
     * @param {string|number|(string|number)[]|Date|boolean} value
     * @param {boolean} [ignoreFieldChange=false] Ignore the field change script
     * @param {boolean} [forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setValue(
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
      forceSyncSourcing?: boolean,
    ): this;

    /**
     * Set value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577499}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577499.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|number|(string|number)[]|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setValue(options: {
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
      forceSyncSourcing?: boolean,
    }): this;

    /**
     * Get value of the field in text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582421}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582421.html}
     *
     * @param {string} fieldId
     * @return {string|string[]}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getText(
      fieldId: string,
    ): string | string[];

    /**
     * Get value of the field in text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582421}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582421.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string|string[]}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getText(options: {
      fieldId: string,
    }): string | string[];

    /**
     * Set value of the field by text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577945}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577945.html}
     *
     * @param {string} fieldId
     * @param {string|string[]} text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setText(
      fieldId: string,
      text: string | string[],
    ): this;

    /**
     * Set value of the field by text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577945}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577945.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|string[]} options.text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setText(options: {
      fieldId: string,
      text: string | string[],
      ignoreFieldChange?: boolean,
      forceSyncSourcing?: boolean,
    }): this;

    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586103}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637586103.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */
    findSublistLineWithValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
    }): number;

    /**
     * Return value of a sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583237}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583237.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue(
      sublistId: string,
      fieldId: string,
      line: number,
    ): string | string[] | number | Date | boolean;

    /**
     * Return value of a sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583237}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583237.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): string | string[] | number | Date | boolean;

    /**
     * Return value of a sublist field in text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583397}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583397.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    getSublistText(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): string;

    /**
     * Return line count of sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584890.html}
     *
     * @param {string} sublistId
     * @return {number}
     */
    getLineCount(
      sublistId: string,
    ): number;

    /**
     * Return line count of sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584890.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    getLineCount(options: {
      sublistId: string,
    }): number;

    /**
     * Insert a sublist line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581252.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */
    insertLine(options: {
      sublistId: string,
      line: number,
      ignoreRecalc?: boolean,
    }): this;

    /**
     * Remove a sublist line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581252.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */
    removeLine(options: {
      sublistId: string,
      line: number,
      ignoreRecalc?: boolean,
    }): this;

    /**
     * Select a new line at the end of sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580046}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580046.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     */
    selectNewLine(
      sublistId: string,
    ): this;

    /**
     * Select a new line at the end of sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580046}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580046.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     */
    selectNewLine(options: {
      sublistId: string,
    }): this;

    /**
     * Selects an existing line in a sublist (dynamic mode only)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580249}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580249.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {number} line
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     */
    selectLine(
      sublistId: string,
      line: number,
    ): this;

    /**
     * Selects an existing line in a sublist (dynamic mode only)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580249}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580249.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     */
    selectLine(options: {
      sublistId: string,
      line: number,
    }): this;

    /**
     * Cancel the current selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637546866}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637546866.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     */
    cancelLine(
      sublistId: string,
    ): this;

    /**
     * Cancel the current selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637546866}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637546866.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     */
    cancelLine(options: {
      sublistId: string,
    }): this;

    /**
     * Commit the current selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637565703}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637565703.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     */
    commitLine(
      sublistId: string,
    ): this;

    /**
     * Commit the current selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637565703}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637565703.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     */
    commitLine(options: {
      sublistId: string,
    }): this;

    /**
     * Return the line number of the currently selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585731}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585731.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    getCurrentSublistIndex(
      sublistId: string,
    ): number;

    /**
     * Return the line number of the currently selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585731}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585731.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    getCurrentSublistIndex(options: {
      sublistId: string,
    }): number;

    /**
     * Return value of a sublist field on the current selected sublist line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585213}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585213.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     */
    getCurrentSublistValue(
      sublistId: string,
      fieldId: string,
    ): string | string[] | number | Date | boolean;

    /**
     * Return value of a sublist field on the current selected sublist line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585213}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585213.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     */
    getCurrentSublistValue(options: {
      sublistId: string,
      fieldId: string,
    }): string | string[] | number | Date | boolean;

    /**
     * Set the value for field in the current selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579473}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579473.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {string|number|(string|number)[]|Date|boolean} value
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistValue(
      sublistId: string,
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
    ): this;

    /**
     * Set the value for field in the current selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579473}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579473.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|number|(string|number)[]|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
      forceSyncSourcing?: boolean,
    }): this;

    /**
     * Return the value for field in the current selected line by text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585436}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585436.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     */
    getCurrentSublistText(
      sublistId: string,
      fieldId: string,
    ): string;

    /**
     * Return the value for field in the current selected line by text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585436}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585436.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     */
    getCurrentSublistText(options: {
      sublistId: string,
      fieldId: string,
    }): string;

    /**
     * Set the value for field in the current selected line by text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579678}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579678.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {string} text
     * @param {boolean} [ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @param {boolean} [forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistText(
      sublistId: string,
      fieldId: string,
      text: string,
      ignoreFieldChange?: boolean,
      forceSyncSourcing?: boolean,
    ): this;

    /**
     * Set the value for field in the current selected line by text representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579678}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579678.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistText(options: {
      sublistId: string,
      fieldId: string,
      text: string,
      ignoreFieldChange?: boolean,
      forceSyncSourcing?: boolean,
    }): this;

    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581381}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581381.html}
     *
     * @param {string} fieldId
     * @return {boolean}
     */
    hasSubrecord(
      fieldId: string,
    ): boolean;

    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581381}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581381.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasSubrecord(options: {
      fieldId: string,
    }): boolean;

    /**
     * Get the subrecord for the associated field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583010}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583010.html}
     *
     * @param {string} fieldId
     * @return {CurrentRecord} client-side subrecord implementation
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     * @throws {error.SuiteScriptError} SSS_INVALID_FIELD_ON_SUBRECORD_OPERATION if field does not refer to a subrecord
     */
    getSubrecord(
      fieldId: string,
    ): CurrentRecord;

    /**
     * Get the subrecord for the associated field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583010}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583010.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {CurrentRecord} client-side subrecord implementation
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     * @throws {error.SuiteScriptError} SSS_INVALID_FIELD_ON_SUBRECORD_OPERATION if field does not refer to a subrecord
     */
    getSubrecord(options: {
      fieldId: string,
    }): CurrentRecord;

    /**
     * Remove the subrecord for the associated field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580399}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580399.html}
     *
     * @param {string} fieldId
     * @return {CurrentRecord} same object for chaining
     */
    removeSubrecord(
      fieldId: string,
    ): this;

    /**
     * Remove the subrecord for the associated field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580399}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580399.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {CurrentRecord} same object for chaining
     */
    removeSubrecord(options: {
      fieldId: string,
    }): this;

    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581548}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581548.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {boolean}
     */
    hasSublistSubrecord(
      sublistId: string,
      fieldId: string,
      line: number,
    ): boolean;

    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581548}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581548.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {boolean}
     */
    hasSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): boolean;

    /**
     * Return a value indicating if the associated sublist field has a subrecord on the current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582063}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582063.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {boolean}
     */
    hasCurrentSublistSubrecord(
      sublistId: string,
      fieldId: string,
    ): boolean;

    /**
     * Return a value indicating if the associated sublist field has a subrecord on the current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582063}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582063.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasCurrentSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
    }): boolean;

    /**
     * Get the subrecord for the associated sublist field on the current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585570}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585570.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {CurrentRecord} client-side subrecord implementation
     */
    getCurrentSublistSubrecord(
      sublistId: string,
      fieldId: string,
    ): CurrentRecord;

    /**
     * Get the subrecord for the associated sublist field on the current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585570}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585570.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {CurrentRecord} client-side subrecord implementation
     */
    getCurrentSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
    }): CurrentRecord;

    /**
     * Remove the subrecord for the associated sublist field on the current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581076}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581076.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {CurrentRecord} same object for chaining
     */
    removeCurrentSublistSubrecord(
      sublistId: string,
      fieldId: string,
    ): this;

    /**
     * Remove the subrecord for the associated sublist field on the current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581076}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581076.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {CurrentRecord} same object for chaining
     */
    removeCurrentSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
    }): this;

    /**
     * Return array of names of all sublists
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599718205}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599718205.html}
     *
     * @restriction Not available when using `currentRecord.get()`
     *
     * @return {string[]}
     *
     * @since 2015.2
     */
    getSublists(): string[];

    /**
     * Returns the specified sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583811}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583811.html}
     *
     * @param {string} sublistId
     * @return {Sublist}
     */
    getSublist(
      sublistId: string,
    ): Sublist;

    /**
     * Returns the specified sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583811}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583811.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */
    getSublist(options: {
      sublistId: string,
    }): Sublist;

    /**
     * Return array of field IDs of all body fields including machine header fields and matrix header fields
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152646}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152646.html}
     *
     * @restriction Not available when using `currentRecord.get()`
     *
     * @return {string[]}
     *
     * @since 2015.2
     */
    getFields(): string[];

    /**
     * Return field object from record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585044}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585044.html}
     *
     * @param {string} fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(
      fieldId: string,
    ): Field;

    /**
     * Return field object from record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585044}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585044.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options: {
      fieldId: string,
    }): Field;

    /**
     * Return array of names of all fields in a sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152943.html}
     *
     * @restriction Not available when using `currentRecord.get()`
     *
     * @param {string} sublistId
     * @return {string[]}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     *
     * @since 2015.2
     */
    getSublistFields(
      sublistId: string,
    ): string[];

    /**
     * Return array of names of all fields in a sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152943.html}
     *
     * @restriction Not available when using `currentRecord.get()`
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {string[]}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     *
     * @since 2015.2
     */
    getSublistFields(options: {
      sublistId: string,
    }): string[];

    /**
     * Return field object from record's sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583684}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583684.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(
      sublistId: string,
      fieldId: string,
      line: number,
    ): Field;

    /**
     * Return field object from record's sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583684}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583684.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): Field;

    /**
     * Return field object from record's sublist current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4659853446}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4659853446.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     *
     * @since 2015.2
     */
    getCurrentSublistField(
      sublistId: string,
      fieldId: string,
    ): Field;

    /**
     * Return field object from record's sublist current line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4659853446}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4659853446.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     *
     * @since 2015.2
     */
    getCurrentSublistField(options: {
      sublistId: string,
      fieldId: string,
    }): Field;

    /**
     * Get the field for the specified header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584607}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584607.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderField(
      sublistId: string,
      fieldId: string,
      column: number,
    ): Field;

    /**
     * Get the field for the specified header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584607}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584607.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderField(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): Field;

    /**
     * Get the field for the specified sublist in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584261}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584261.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {number} line the line number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistField(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    ): Field;

    /**
     * Get the field for the specified sublist in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584261}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584261.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistField(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    }): Field;

    /**
     * Get the value for the associated header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584433}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584433.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderValue(
      sublistId: string,
      fieldId: string,
      column: number,
    ): string | string[] | number | Date | boolean;

    /**
     * Get the value for the associated header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584433}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584433.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): string | string[] | number | Date | boolean;

    /**
     * Set the value for the associated header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579241}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579241.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} value the value to set it to
     *
     * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setMatrixHeaderValue(
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
    ): this;

    /**
     * Set the value for the associated header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579241}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579241.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setMatrixHeaderValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    }): this;

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584028}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584028.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {number} line the line number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    ): string | string[] | number | Date | boolean;

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584028}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584028.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    }): string | string[] | number | Date | boolean;

    /**
     * Set the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579037}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579037.html}
     *
     * @restriction only available in deferred dynamic record
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {number} line the line number for the field
     * @param {string|number|(string|number)[]|Date|boolean} value the value to set it to
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
      value: string | number | (string | number)[] | Date | boolean,
    ): this;

    /**
     * Set the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579037}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579037.html}
     *
     * @restriction only available in deferred dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @param {string|number|(string|number)[]|Date|boolean} options.value the value to set it to
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
      value: string | number | (string | number)[] | Date | boolean
    }): this;

    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586269}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637586269.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {string|string[]|number|Date|boolean} value the value to search for
     * @param {number} column the column number for the field
     * @return {number} line number
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     */
    findMatrixSublistLineWithValue(
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
      column: number,
    ): number;

    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586269}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637586269.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {string|string[]|number|Date|boolean} options.value the value to search for
     * @param {number} options.column the column number for the field
     * @return {number} line number
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     */
    findMatrixSublistLineWithValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
      column: number,
    }): number;

    /**
     * Returns the number of columns for the specified matrix.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584779}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584779.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderCount(
      sublistId: string,
      fieldId: string,
    ): number;

    /**
     * Returns the number of columns for the specified matrix.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584779}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584779.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderCount(options: {
      sublistId: string,
      fieldId: string,
    }): number;

    /**
     * Get the value for the line currently selected in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585905}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585905.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId - the id of sublist in which the matrix is in.
     * @param {string} fieldId - the id of the matrix field
     * @param {number} column - the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getCurrentMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
    ): string | string[] | number | Date | boolean;

    /**
     * Get the value for the line currently selected in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585905}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585905.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getCurrentMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): string | string[] | number | Date | boolean;

    /**
     * Set the value for the line currently selected in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579872}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579872.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {string} sublistId - the id of sublist in which the matrix is in.
     * @param {string} fieldId - the id of the matrix field
     * @param {number} column - the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} value - the value to set it to
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setCurrentMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
    ): this;

    /**
     * Set the value for the line currently selected in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579872}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579872.html}
     *
     * @restriction Only available in dynamic mode
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} options.value - the value to set it to
     * @param {boolean} [options.ignoreFieldChange=false] - Ignore the field change script (default false)
     * @param {boolean} [options.forceSyncSourcing=false] - Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setCurrentMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
      forceSyncSourcing?: boolean,
    }): this;

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     *
     * @return {'dynamic record'}
     *
     * @since 2015.2
     */
    toString(): 'dynamic record';

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     *
     * @return {Object<string, *>}
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this> & {
      [p: string]: any,
    };
  }

  export interface CurrentRecord extends CurrentRecordReadonly {

    /**
     * Save record updates to the system
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267286323.html}
     *
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} [options]
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    save(options?: {
      enableSourcing?: boolean,
      ignoreMandatoryFields?: boolean,
    }): number;
  }

  /**
   * Encapsulates a body or sublist field on the current record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4793291846}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4793291846.html}
   *
   * @since 2016.2
   */
  export interface Field {

    /**
     * The label of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794248033}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794248033.html}
     *
     * @type {string}
     *
     * @since 2016.2
     */
    label: string;

    /**
     * The internal id of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794247756}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794247756.html}
     *
     * @type {string}
     * @readonly
     *
     * @since 2016.2
     */
    id: string;

    /**
     * The type of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794225547}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794225547.html}
     *
     * @type {serverWidget.FieldType}
     * @readonly
     *
     * @since 2016.2
     */
    type: Lowercase<serverWidget.FieldType>;

    /**
     * The sublist ID of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1490026603}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1490026603.html}
     *
     * @type {string}
     * @readonly
     *
     * @since 2016.2
     */
    sublistId?: string;

    /**
     * Is the field mandatory?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794223029}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794223029.html}
     *
     * @type {boolean}
     *
     * @since 2016.2
     */
    isMandatory: boolean;

    /**
     * Is the field disabled?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794215939}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794215939.html}
     *
     * @type {boolean}
     *
     * @since 2016.2
     */
    isDisabled: boolean;

    /**
     * Is the field a popup list field?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794222162}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794222162.html}
     *
     * @type {boolean}
     *
     * @since 2016.2
     */
    isPopup: boolean;

    /**
     * Is the field set to display on the record form?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794214205}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794214205.html}
     *
     * @type {boolean}
     *
     * @since 2016.2
     */
    isDisplay: boolean;

    /**
     * Is the field visible on the record form?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794214500}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794214500.html}
     *
     * @type {boolean}
     *
     * @since 2016.2
     */
    isVisible: boolean;

    /**
     * Can the field be edited on the record form?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794213415}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794213415.html}
     *
     * @type {boolean}
     *
     * @since 2016.2
     */
    isReadOnly: boolean;

    /**
     * Returns an array of available options on a standard or custom select, multiselect, or radio field as key-value pairs
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4834781098}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4834781098.html}
     *
     * @restriction Only the first 1,000 available options are returned in an array. If there are more than 1,000 available options, an empty array [] is returned.
     *
     * @param {Object} [options] NetSuite Help Center says this is required, but it's not
     * @param {string} [options.filter] A search string to filter the select options that are returned.
     * @param {'contains'|'is'|'startswith'} [options.operator='contains']  Defaults to the "contains" operator
     * @return {{value:string, text:string}[]}
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     *
     * @since 2016.2
     */
    getSelectOptions(options?: {
      filter?: string,
      operator?: 'contains' | 'is' | 'startswith'
    }): {
      value: string,
      text: string,
    }[];

    /**
     * Inserts an option into certain types of select and multiselect fields
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4779675098}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4779675098.html}
     *
     * @restriction This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event script. The IDs for these fields always have a prefix of custpage.
     *
     * @param {string|number} value The internal id of the option
     * @param {string} text  The display text for this option
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     *
     * @since 2016.2
     */
    insertSelectOption(value: string | number, text: string): void;

    /**
     * Inserts an option into certain types of select and multiselect fields
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4779675098}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4779675098.html}
     *
     * @restriction This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event script. The IDs for these fields always have a prefix of custpage.
     *
     * @param {Object} options
     * @param {string|number} options.value The internal id of the option
     * @param {string} options.text  The display text for this option
     * @param {boolean} [options.isSelected=false] If true, this option is selected
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     *
     * @since 2016.2
     */
    insertSelectOption(options: {
      value: string | number,
      text: string,
      isSelected?: boolean,
    }): void;

    /**
     * Removes a select option from certain types of select and multiselect fields
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4780315055}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4780315055.html}
     *
     * @restriction This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event script. The IDs for these fields always have a prefix of custpage.
     *
     * @param {Object} options
     * @param {string|number} options.value The internal id of the option
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     *
     * @since 2016.2
     */
    removeSelectOption(options: {
      value: string | number,
    }): void;
  }

  /**
   * Encapsulates a sublist on the current record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4793291846}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4793291846.html}
   *
   * @since 2016.2
   */
  export interface Sublist {

    /**
     * Returns a column in the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619036}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619036.html}
     *
     * @param {string} fieldId
     * @return {Column}
     *
     * @since 2016.2
     */
    getColumn(
      fieldId: string,
    ): Column;

    /**
     * Returns a column in the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619036}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619036.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Column}
     *
     * @since 2016.2
     */
    getColumn(options: {
      fieldId: string,
    }): Column;

    /**
     * Returns the internal ID of the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619218}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619218.html}
     *
     * @type {string}
     *
     * @readonly
     * @since 2016.2
     */
    id: string;

    /**
     * Indicates whether the sublist has changed on the current record form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619246}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619246.html}
     *
     * @type {boolean}
     *
     * @readonly
     * @since 2016.2
     */
    isChanged: boolean;

    /**
     * Indicates whether the sublist is displayed on the current record form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619367}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619367.html}
     *
     * @type {boolean}
     *
     * @readonly
     * @since 2016.2
     */
    isDisplay: boolean;

    /**
     * Returns the sublist type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619432}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619432.html}
     *
     * @type {string}
     *
     * @readonly
     * @since 2016.2
     */
    type: string;
  }

  /**
   * Encapsulates a column of a sublist on the current record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619693}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619693.html}
   *
   * @since 2016.2
   */
  export interface Column {

    /**
     * Returns the internal ID of the column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619846}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619846.html}
     *
     * @type {string}
     *
     * @readonly
     * @since 2016.2
     */
    id: string;

    /**
     * Indicates whether the column is disabled
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158618597707}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158618597707.html}
     *
     * @type {boolean}
     *
     * @since 2020.2
     */
    isDisabled: boolean;

    /**
     * Indicates whether the column is mandatory
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158618632629}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158618632629.html}
     *
     * @type {boolean}
     *
     * @since 2020.2
     */
    isMandatory: boolean;

    /**
     * Returns the internal ID of the column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619880}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619880.html}
     *
     * @type {string}
     *
     * @readonly
     * @since 2016.2
     */
    label: string;

    /**
     * Returns the internal ID of the standard or custom sublist that contains the column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619931}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619931.html}
     *
     * @type {string}
     *
     * @readonly
     * @since 2016.2
     */
    sublistId: string;

    /**
     * Returns the column type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501620041}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501620041.html}
     *
     * @type {string}
     *
     * @readonly
     * @since 2016.2
     */
    type: string;
  }
}