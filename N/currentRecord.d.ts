/// <reference path="./record.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

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
    (): currentRecord.CurrentRecordReadonly;

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
    promise(): Promise<currentRecord.CurrentRecordReadonly>;
  };
}

declare namespace currentRecord {

  /**
   * @since 2016.2
   */
  export interface CurrentRecordReadonly {

    /**
     * The internal ID of the record, or null if the record has not been saved
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576907}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637576907.html}
     *
     * @since 2016.2
     */
    readonly id: number | null;

    /**
     * The type of the record
     *
     * This property is not available for subrecords.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637576636.html}
     *
     * @since 2016.2
     */
    readonly type: record.Type | `${record.Type}` | record.CustomType | string;

    /**
     * Indicates whether the record is in dynamic or standard mode
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576809}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637576809.html}
     *
     * @since 2016.2
     */
    readonly isDynamic: boolean;

    /**
     * Indicates whether the record is read-only or editable
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly isReadOnly: boolean;

    /**
     * Indicates whether the record is new or not
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly isNew: boolean;

    /**
     * Provides a macro to be executed
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509992196}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509992196.html}
     *
     * @governance none
     * @since 2018.2
     *
     * @param options
     * @param options.id macro id
     * @return executor function for the macro specified by options
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_MACRO_ID if the macro id is not valid for this record type
     */
    getMacro(options: {
      id: string,
    }): record.Macro;

    /**
     * Provides a plain JavaScript object of available macro objects defined for a record type, indexed by the Macro ID
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509992211}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509992211.html}
     *
     * @governance none
     * @since 2018.2
     *
     * @return a set of macros (@see Macro) defined on the record indexed by macroId; an empty object if the record type
     *     has no macros
     */
    getMacros(): alias.Record<string, record.Macro>;

    executeMacro: {

      /**
       * Performs macro operation and returns result
       *
       * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
       * object, which shares this implementation — see the links below.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509992174}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509992174.html}
       *
       * @governance none
       * @since 2018.2
       *
       * @param options
       * @param options.id macro id
       * @param [options.params] macro arguments
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_MACRO_ID if the macro id is not valid for this record type
       */
      (options: {
        id: string,
        params?: alias.Record<string, any>,
      }): {
        notifications: alias.Record<string, unknown>[],
        response: alias.Record<string, unknown>,
      };

      /**
       * Performs macro operation and returns its result wrapped in a promise
       *
       * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
       * object, which shares this implementation — see the links below.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510066072}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510066072.html}
       *
       * @governance none
       * @since 2018.2
       *
       * @param options
       * @param options.id macro id
       * @param [options.params] macro arguments
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_MACRO_ID if the macro id is not valid for this record type
       */
      promise(options: {
        id: string,
        params?: alias.Record<string, any>,
      }): Promise<{
        notifications: alias.Record<string, unknown>[],
        response: alias.Record<string, unknown>,
      }>;
    };

    /**
     * Return value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582256}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582256.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getValue<T extends record.FieldValue>(
      fieldId: string,
    ): T | undefined;

    /**
     * Return value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582256}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582256.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getValue<T extends record.FieldValue>(options: {
      fieldId: string,
    }): T | undefined;

    setValue: {

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577499}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577499.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @param value
       * @param [ignoreFieldChange=false] Ignore the field change script
       * @param [forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(
        this: R,
        fieldId: string,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      ): R;

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577499}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577499.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @param options.value
       * @param [options.ignoreFieldChange=false] Ignore the field change script
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(this: R, options: {
        fieldId: string,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): R;

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577499}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577499.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @param value
       * @param [ignoreFieldChange=false] Ignore the field change script
       * @param [forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(
        fieldId: string,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577499}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577499.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @param options.value
       * @param [options.ignoreFieldChange=false] Ignore the field change script
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(options: {
        fieldId: string,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    getText: {

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582421}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582421.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <T extends string | string[]>(
        fieldId: string,
      ): T | undefined;

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582421}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582421.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <T extends string | string[]>(options: {
        fieldId: string,
      }): T | undefined;

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582421}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582421.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise<T extends string | string[]>(
        fieldId: string,
      ): Promise<T | undefined>;

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582421}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637582421.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise<T extends string | string[]>(options: {
        fieldId: string,
      }): Promise<T | undefined>;
    };

    setText: {

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577945}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577945.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @param text The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(
        this: R,
        fieldId: string,
        text: string | string[],
      ): R;

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577945}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577945.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @param options.text The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(this: R, options: {
        fieldId: string,
        text: string | string[],
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): R;

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577945}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577945.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @param text The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(
        fieldId: string,
        text: string | string[],
      ): Promise<CurrentRecordReadonly>;

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577945}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637577945.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @param options.text The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(options: {
        fieldId: string,
        text: string | string[],
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    removeField: {

      /**
       * Remove a field from the current form and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Server-side, the observable effect is that the field's value is cleared; the field remains returned by getField
       * and listed by getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(
        this: R,
        fieldId: string,
      ): R;

      /**
       * Remove a field from the current form and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Server-side, the observable effect is that the field's value is cleared; the field remains returned by getField
       * and listed by getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(this: R, options: {
        fieldId: string,
      }): R;

      /**
       * Remove a field from the current form and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Server-side, the observable effect is that the field's value is cleared; the field remains returned by getField
       * and listed by getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(
        fieldId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Remove a field from the current form and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Server-side, the observable effect is that the field's value is cleared; the field remains returned by getField
       * and listed by getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(options: {
        fieldId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586103}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637586103.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param sublistId
     * @param fieldId
     * @param value
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    findSublistLineWithValue(
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
    ): number;

    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586103}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637586103.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.value
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
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
     * @governance none
     * @since 2016.2
     *
     * @param sublistId
     * @param fieldId
     * @param line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
     */
    getSublistValue<T extends record.FieldValue>(
      sublistId: string,
      fieldId: string,
      line: number,
    ): T | undefined;

    /**
     * Return value of a sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583237}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583237.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
     */
    getSublistValue<T extends record.FieldValue>(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): T | undefined;

    getSublistText: {

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583397}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583397.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
       */
      <T extends string | string[]>(
        sublistId: string,
        fieldId: string,
        line: number,
      ): T | undefined;

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583397}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583397.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
       */
      <T extends string | string[]>(options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): T | undefined;

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583397}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583397.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
       */
      promise<T extends string | string[]>(
        sublistId: string,
        fieldId: string,
        line: number,
      ): Promise<T | undefined>;

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583397}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583397.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
       */
      promise<T extends string | string[]>(options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): Promise<T | undefined>;
    };

    /**
     * Return line count of sublist, or -1 if the sublist does not exist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584890.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     */
    getLineCount(
      sublistId: string,
    ): number;

    /**
     * Return line count of sublist, or -1 if the sublist does not exist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584890}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584890.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     */
    getLineCount(options: {
      sublistId: string,
    }): number;

    insertLine: {

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581252.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(
        this: R,
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): R;

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581252.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(this: R, options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): R;

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581252.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581252.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    removeLine: {

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580808}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580808.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(
        this: R,
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): R;

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580808}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580808.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(this: R, options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): R;

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580808}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580808.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580808}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580808.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    moveLine: {

      /**
       * Move a sublist line from one position to another
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Sublists must support line moving: a sublist that does not throws SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES.
       *
       * @governance none
       * @restriction Only available in dynamic mode
       *
       * @param sublistId
       * @param from the line index to move from
       * @param to the line index to move to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, from, or to is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id is invalid
       * @throws {error.SuiteScriptError} SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES if the sublist does not support moving lines
       */
      <R>(
        this: R,
        sublistId: string,
        from: number,
        to: number,
      ): R;

      /**
       * Move a sublist line from one position to another
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Sublists must support line moving: a sublist that does not throws SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES.
       *
       * @governance none
       * @restriction Only available in dynamic mode
       *
       * @param options
       * @param options.sublistId
       * @param options.from the line index to move from
       * @param options.to the line index to move to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, from, or to is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id is invalid
       * @throws {error.SuiteScriptError} SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES if the sublist does not support moving lines
       */
      <R>(this: R, options: {
        sublistId: string,
        from: number,
        to: number,
      }): R;

      /**
       * Move a sublist line from one position to another
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Sublists must support line moving: a sublist that does not throws SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES.
       *
       * @governance none
       * @restriction Only available in dynamic mode
       *
       * @param sublistId
       * @param from the line index to move from
       * @param to the line index to move to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, from, or to is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id is invalid
       * @throws {error.SuiteScriptError} SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES if the sublist does not support moving lines
       */
      promise(
        sublistId: string,
        from: number,
        to: number,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Move a sublist line from one position to another
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * Sublists must support line moving: a sublist that does not throws SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES.
       *
       * @governance none
       * @restriction Only available in dynamic mode
       *
       * @param options
       * @param options.sublistId
       * @param options.from the line index to move from
       * @param options.to the line index to move to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, from, or to is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id is invalid
       * @throws {error.SuiteScriptError} SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES if the sublist does not support moving lines
       */
      promise(options: {
        sublistId: string,
        from: number,
        to: number,
      }): Promise<CurrentRecordReadonly>;
    };

    selectNewLine: {

      /**
       * Select a new line at the end of sublist
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580046}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580046.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
       */
      <R>(
        this: R,
        sublistId: string,
      ): R;

      /**
       * Select a new line at the end of sublist
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580046}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580046.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
       */
      <R>(this: R, options: {
        sublistId: string,
      }): R;

      /**
       * Select a new line at the end of sublist
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580046}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580046.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
       */
      promise(
        sublistId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Select a new line at the end of sublist
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580046}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580046.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
       */
      promise(options: {
        sublistId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    selectLine: {

      /**
       * Selects an existing line in a sublist (dynamic mode only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580249}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580249.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param line
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
       */
      <R>(
        this: R,
        sublistId: string,
        line: number,
      ): R;

      /**
       * Selects an existing line in a sublist (dynamic mode only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580249}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580249.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
       */
      <R>(this: R, options: {
        sublistId: string,
        line: number,
      }): R;

      /**
       * Selects an existing line in a sublist (dynamic mode only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580249}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580249.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param line
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
       */
      promise(
        sublistId: string,
        line: number,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Selects an existing line in a sublist (dynamic mode only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580249}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580249.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
       */
      promise(options: {
        sublistId: string,
        line: number,
      }): Promise<CurrentRecordReadonly>;
    };

    cancelLine: {

      /**
       * Cancel the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637546866}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637546866.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
       */
      <R>(
        this: R,
        sublistId: string,
      ): R;

      /**
       * Cancel the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637546866}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637546866.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
       */
      <R>(this: R, options: {
        sublistId: string,
      }): R;

      /**
       * Cancel the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637546866}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637546866.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
       */
      promise(
        sublistId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Cancel the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637546866}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637546866.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
       */
      promise(options: {
        sublistId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    commitLine: {

      /**
       * Commit the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637565703}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637565703.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
       */
      <R>(
        this: R,
        sublistId: string,
      ): R;

      /**
       * Commit the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637565703}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637565703.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
       */
      <R>(this: R, options: {
        sublistId: string,
      }): R;

      /**
       * Commit the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637565703}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637565703.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
       */
      promise(
        sublistId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Commit the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637565703}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637565703.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
       */
      promise(options: {
        sublistId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Return the line number of the currently selected line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585731}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585731.html}
     *
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param sublistId
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
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
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
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param sublistId
     * @param fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    getCurrentSublistValue<T extends record.FieldValue>(
      sublistId: string,
      fieldId: string,
    ): T | undefined;

    /**
     * Return value of a sublist field on the current selected sublist line
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585213}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585213.html}
     *
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    getCurrentSublistValue<T extends record.FieldValue>(options: {
      sublistId: string,
      fieldId: string,
    }): T | undefined;

    setCurrentSublistValue: {

      /**
       * Set the value for field in the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579473}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579473.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @param value
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        value: record.FieldValue,
      ): R;

      /**
       * Set the value for field in the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579473}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579473.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.value
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): R;

      /**
       * Set the value for field in the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579473}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579473.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @param value
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      promise(
        sublistId: string,
        fieldId: string,
        value: record.FieldValue,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Set the value for field in the current selected line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579473}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579473.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.value
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    getCurrentSublistText: {

      /**
       * Return the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585436}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585436.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       */
      <T extends string | string[]>(
        sublistId: string,
        fieldId: string,
      ): T | undefined;

      /**
       * Return the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585436}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585436.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       */
      <T extends string | string[]>(options: {
        sublistId: string,
        fieldId: string,
      }): T | undefined;

      /**
       * Return the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585436}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585436.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       */
      promise<T extends string | string[]>(
        sublistId: string,
        fieldId: string,
      ): Promise<T | undefined>;

      /**
       * Return the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585436}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585436.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       */
      promise<T extends string | string[]>(options: {
        sublistId: string,
        fieldId: string,
      }): Promise<T | undefined>;
    };

    setCurrentSublistText: {

      /**
       * Set the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579678}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579678.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @param text
       * @param [ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        text: string | string[],
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      ): R;

      /**
       * Set the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579678}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579678.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.text
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        text: string | string[],
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): R;

      /**
       * Set the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579678}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579678.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @param text
       * @param [ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      promise(
        sublistId: string,
        fieldId: string,
        text: string | string[],
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Set the value for field in the current selected line by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579678}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579678.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.text
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @param [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
       * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD if user tries to edit readonly sublist field
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        text: string | string[],
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581381}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581381.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param fieldId
     */
    hasSubrecord(
      fieldId: string,
    ): boolean;

    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581381}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581381.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.fieldId
     */
    hasSubrecord(options: {
      fieldId: string,
    }): boolean;

    getSubrecord: {

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583010}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583010.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       * @throws {error.SuiteScriptError} SSS_INVALID_FIELD_ON_SUBRECORD_OPERATION if field does not refer to a subrecord
       */
      (
        fieldId: string,
      ): CurrentRecordReadonly;

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583010}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583010.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       * @throws {error.SuiteScriptError} SSS_INVALID_FIELD_ON_SUBRECORD_OPERATION if field does not refer to a subrecord
       */
      (options: {
        fieldId: string,
      }): CurrentRecordReadonly;

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583010}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583010.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       * @throws {error.SuiteScriptError} SSS_INVALID_FIELD_ON_SUBRECORD_OPERATION if field does not refer to a subrecord
       */
      promise(
        fieldId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583010}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583010.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       * @throws {error.SuiteScriptError} SSS_INVALID_FIELD_ON_SUBRECORD_OPERATION if field does not refer to a subrecord
       */
      promise(options: {
        fieldId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    removeSubrecord: {

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580399}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580399.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @return same object for chaining
       */
      <R>(
        this: R,
        fieldId: string,
      ): R;

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580399}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580399.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       */
      <R>(this: R, options: {
        fieldId: string,
      }): R;

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580399}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580399.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param fieldId
       * @return same object for chaining
       */
      promise(
        fieldId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580399}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637580399.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       */
      promise(options: {
        fieldId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581548}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581548.html}
     *
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param sublistId
     * @param fieldId
     * @param line
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
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.line
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
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param sublistId
     * @param fieldId
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
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     */
    hasCurrentSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
    }): boolean;

    getCurrentSublistSubrecord: {

      /**
       * Get the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585570}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585570.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @return client-side subrecord implementation
       */
      (
        sublistId: string,
        fieldId: string,
      ): CurrentRecordReadonly;

      /**
       * Get the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585570}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585570.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @return client-side subrecord implementation
       */
      (options: {
        sublistId: string,
        fieldId: string,
      }): CurrentRecordReadonly;

      /**
       * Get the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585570}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585570.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @return client-side subrecord implementation
       */
      promise(
        sublistId: string,
        fieldId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Get the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585570}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585570.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @return client-side subrecord implementation
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    removeCurrentSublistSubrecord: {

      /**
       * Remove the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581076}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581076.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @return same object for chaining
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
      ): R;

      /**
       * Remove the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581076}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581076.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @return same object for chaining
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
      }): R;

      /**
       * Remove the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581076}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581076.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId
       * @param fieldId
       * @return same object for chaining
       */
      promise(
        sublistId: string,
        fieldId: string,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Remove the subrecord for the associated sublist field on the current line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581076}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637581076.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @return same object for chaining
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Return array of names of all sublists
     *
     * Not available when using `currentRecord.get()`.
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599718205}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599718205.html}
     *
     * @governance none
     * @since 2015.2
     */
    getSublists(): string[];

    /**
     * Returns the specified sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583811}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583811.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param sublistId
     */
    getSublist(
      sublistId: string,
    ): Sublist | null;

    /**
     * Returns the specified sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583811}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583811.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     */
    getSublist(options: {
      sublistId: string,
    }): Sublist | null;

    /**
     * Return array of field IDs of all body fields including machine header fields and matrix header fields
     *
     * Not available when using `currentRecord.get()`.
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152646}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152646.html}
     *
     * @governance none
     * @since 2015.2
     */
    getFields(): string[];

    /**
     * Return field object from record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585044}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585044.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(
      fieldId: string,
    ): Field | null;

    /**
     * Return field object from record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585044}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585044.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options: {
      fieldId: string,
    }): Field | null;

    /**
     * Return array of names of all fields in a sublist
     *
     * Not available when using `currentRecord.get()`.
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152943.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     */
    getSublistFields(
      sublistId: string,
    ): string[];

    /**
     * Return array of names of all fields in a sublist
     *
     * Not available when using `currentRecord.get()`.
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152943.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     */
    getSublistFields(options: {
      sublistId: string,
    }): string[];

    /**
     * Return field object from record's sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583684}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583684.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param sublistId
     * @param fieldId
     * @param line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
     */
    getSublistField(
      sublistId: string,
      fieldId: string,
      line: number,
    ): Field | null;

    /**
     * Return field object from record's sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583684}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637583684.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line number is invalid
     */
    getSublistField(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): Field | null;

    /**
     * Return field object from record's sublist current line
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4659853446}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4659853446.html}
     *
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2015.2
     *
     * @param sublistId
     * @param fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    getCurrentSublistField(
      sublistId: string,
      fieldId: string,
    ): Field | null;

    /**
     * Return field object from record's sublist current line
     *
     * Not documented on the CurrentRecord Help Center page; present at runtime. Documented for the N/record Record
     * object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4659853446}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4659853446.html}
     *
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    getCurrentSublistField(options: {
      sublistId: string,
      fieldId: string,
    }): Field | null;

    /**
     * Get the field for the specified header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584607}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584607.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
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
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
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
     * @governance none
     * @since 2016.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     * @param line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
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
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     * @param options.line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
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
     * @governance none
     * @since 2016.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixHeaderValue<FieldType extends string | string[] | number | Date | boolean>(
      sublistId: string,
      fieldId: string,
      column: number,
    ): FieldType;

    /**
     * Get the value for the associated header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584433}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584433.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixHeaderValue<FieldType extends string | string[] | number | Date | boolean>(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): FieldType;

    setMatrixHeaderValue: {

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579241}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579241.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param value the value to set it to
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
      ): R;

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579241}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579241.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.value the value to set it to
       * @param [options.ignoreFieldChange] Ignore the field change script (default false)
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
      }): R;

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579241}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579241.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param value the value to set it to
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      promise(
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579241}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579241.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.value the value to set it to
       * @param [options.ignoreFieldChange] Ignore the field change script (default false)
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584028}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584028.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     * @param line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixSublistValue<FieldType extends string | string[] | number | Date | boolean>(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    ): FieldType;

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584028}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637584028.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     * @param options.line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixSublistValue<FieldType extends string | string[] | number | Date | boolean>(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    }): FieldType;

    setMatrixSublistValue: {

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579037}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579037.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param line the line number for the field
       * @param value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: record.FieldValue,
      ): R;

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579037}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579037.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.line the line number for the field
       * @param options.value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: record.FieldValue
      }): R;

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579037}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579037.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param line the line number for the field
       * @param value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      promise(
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: record.FieldValue,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579037}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579037.html}
       *
       * @governance none
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.line the line number for the field
       * @param options.value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: record.FieldValue
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586269}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637586269.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param value the value to search for
     * @param column the column number for the field
     * @return line number
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
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.value the value to search for
     * @param options.column the column number for the field
     * @return line number
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
     * @governance none
     * @since 2016.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
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
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
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
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param sublistId - the id of sublist in which the matrix is in.
     * @param fieldId - the id of the matrix field
     * @param column - the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getCurrentMatrixSublistValue<FieldType extends string | string[] | number | Date | boolean>(
      sublistId: string,
      fieldId: string,
      column: number,
    ): FieldType;

    /**
     * Get the value for the line currently selected in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585905}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637585905.html}
     *
     * @governance none
     * @restriction Only available in dynamic mode
     * @since 2016.2
     *
     * @param options
     * @param options.sublistId - the id of sublist in which the matrix is in.
     * @param options.fieldId - the id of the matrix field
     * @param options.column - the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getCurrentMatrixSublistValue<FieldType extends string | string[] | number | Date | boolean>(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): FieldType;

    setCurrentMatrixSublistValue: {

      /**
       * Set the value for the line currently selected in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579872}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579872.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId - the id of sublist in which the matrix is in.
       * @param fieldId - the id of the matrix field
       * @param column - the column number for the field
       * @param value - the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
      ): R;

      /**
       * Set the value for the line currently selected in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579872}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579872.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId - the id of sublist in which the matrix is in.
       * @param options.fieldId - the id of the matrix field
       * @param options.column - the column number for the field
       * @param options.value - the value to set it to
       * @param [options.ignoreFieldChange=false] - Ignore the field change script (default false)
       * @param [options.forceSyncSourcing=false] - Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): R;

      /**
       * Set the value for the line currently selected in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579872}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579872.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param sublistId - the id of sublist in which the matrix is in.
       * @param fieldId - the id of the matrix field
       * @param column - the column number for the field
       * @param value - the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      promise(
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
      ): Promise<CurrentRecordReadonly>;

      /**
       * Set the value for the line currently selected in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579872}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4637579872.html}
       *
       * @governance none
       * @restriction Only available in dynamic mode
       * @since 2016.2
       *
       * @param options
       * @param options.sublistId - the id of sublist in which the matrix is in.
       * @param options.fieldId - the id of the matrix field
       * @param options.column - the column number for the field
       * @param options.value - the value to set it to
       * @param [options.ignoreFieldChange=false] - Ignore the field change script (default false)
       * @param [options.forceSyncSourcing=false] - Indicates whether to perform field sourcing synchronously
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        column: number,
        value: record.FieldValue,
        ignoreFieldChange?: boolean,
        forceSyncSourcing?: boolean,
      }): Promise<CurrentRecordReadonly>;
    };

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     */
    toString(): 'dynamic record';

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     */
    toJSON(): {
      type: string;
      isDynamic: boolean;
      fields: alias.Record<string, string | string[]>;
      sublists: alias.Record<string, alias.Record<string, alias.Record<string, string | string[]>>>;
    };
  }

  export interface CurrentRecord extends CurrentRecordReadonly {

    save: {

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267286323.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       * @since 2015.2
       *
       * @param [options]
       * @param [options.enableSourcing=false] enable sourcing during record update
       * @param [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      (options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      }): number;

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267286323.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       * @since 2015.2
       *
       * @param [enableSourcing=false] enable sourcing during record update
       * @param [ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      (
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      ): number;

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440842328}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440842328.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param [options]
       * @param [options.enableSourcing=false] enable sourcing during record update
       * @param [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      promise(options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      }): Promise<number>;

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440842328}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440842328.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param [enableSourcing=false] enable sourcing during record update
       * @param [ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      promise(
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      ): Promise<number>;
    };
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
     * @since 2016.2
     */
    label: string;

    /**
     * The internal id of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794247756}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794247756.html}
     *
     * @since 2016.2
     */
    readonly id: string;

    /**
     * The type of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794225547}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794225547.html}
     *
     * @since 2016.2
     */
    readonly type: Lowercase<serverWidget.FieldType>;

    /**
     * The sublist ID of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1490026603}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1490026603.html}
     *
     * @since 2016.2
     */
    readonly sublistId?: string;

    /**
     * Is the field mandatory?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794223029}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794223029.html}
     *
     * @since 2016.2
     */
    isMandatory: boolean;

    /**
     * Is the field disabled?
     *
     * Available only in client context (client scripts). Accessing this property server-side on a dynamic record
     * throws a ReferenceError — the server-side field proxy does not expose it.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794215939}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794215939.html}
     *
     * @since 2016.2
     */
    isDisabled: boolean;

    /**
     * Is the field a popup list field?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794222162}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794222162.html}
     *
     * @since 2016.2
     */
    readonly isPopup: boolean;

    /**
     * Is the field set to display on the record form?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794214205}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794214205.html}
     *
     * @since 2016.2
     */
    isDisplay: boolean;

    /**
     * Is the field visible on the record form?
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794214500}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794214500.html}
     *
     * @since 2016.2
     */
    isVisible: boolean;

    /**
     * Can the field be edited on the record form?
     *
     * Available only in client context (client scripts). Accessing this property server-side on a dynamic record
     * throws a ReferenceError — the server-side field proxy does not expose it.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794213415}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4794213415.html}
     *
     * @since 2016.2
     */
    readonly isReadOnly: boolean;

    /**
     * Returns an array of available options on a standard or custom select, multiselect, or radio field as key-value pairs
     *
     * Only the first 1,000 available options are returned. If there are more than 1,000 available options, an empty
     * array [] is returned.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4834781098}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4834781098.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param [options] NetSuite Help Center says this is required, but it's not
     * @param [options.filter] A search string to filter the select options that are returned.
     * @param [options.operator='contains']  Defaults to the "contains" operator
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
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
     *
     * This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event
     * script. The IDs for these fields always have a prefix of custpage.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4779675098}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4779675098.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param value The internal id of the option
     * @param text  The display text for this option
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     */
    insertSelectOption(value: string | number, text: string): void;

    /**
     * Inserts an option into certain types of select and multiselect fields
     *
     * This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event
     * script. The IDs for these fields always have a prefix of custpage.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4779675098}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4779675098.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.value The internal id of the option
     * @param options.text  The display text for this option
     * @param [options.isSelected=false] If true, this option is selected
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     */
    insertSelectOption(options: {
      value: string | number,
      text: string,
      isSelected?: boolean,
    }): void;

    /**
     * Removes a select option from certain types of select and multiselect fields
     *
     * This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event
     * script. The IDs for these fields always have a prefix of custpage.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4780315055}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4780315055.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.value The internal id of the option
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     */
    removeSelectOption(options: {
      value: string | number,
    }): void;
  }

  /**
   * Encapsulates a sublist on the current record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501618457}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501618457.html}
   *
   * @since 2016.2
   */
  export interface Sublist {

    /**
     * Returns a column in the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619036}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619036.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param fieldId
     * @return the column, or null if the field id is not a column of this sublist
     */
    getColumn(
      fieldId: string,
    ): Column | null;

    /**
     * Returns a column in the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619036}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619036.html}
     *
     * @governance none
     * @since 2016.2
     *
     * @param options
     * @param options.fieldId
     * @return the column, or null if the field id is not a column of this sublist
     */
    getColumn(options: {
      fieldId: string,
    }): Column | null;

    /**
     * Returns the internal ID of the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619218}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619218.html}
     *
     * @since 2016.2
     */
    readonly id: string;

    /**
     * Indicates whether the sublist has changed on the current record form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619246}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619246.html}
     *
     * @since 2016.2
     */
    readonly isChanged: boolean;

    /**
     * Indicates whether the sublist is displayed on the current record form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619367}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619367.html}
     *
     * @since 2016.2
     */
    isDisplay: boolean;

    /**
     * Returns the sublist type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619432}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619432.html}
     *
     * @since 2016.2
     */
    readonly type: Lowercase<serverWidget.SublistType>;

    /**
     * Indicates whether the sublist supports the multi-line buffer feature
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2016.2
     */
    readonly isMultilineEditable: boolean;

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2016.2
     */
    toString(): 'sublist.Sublist';

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2016.2
     */
    toJSON(): ExcludeMethods<this>;
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
     * @since 2016.2
     */
    readonly id: string;

    /**
     * Indicates whether the column is disabled
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158618597707}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158618597707.html}
     *
     * @since 2020.2
     */
    isDisabled: boolean;

    /**
     * Indicates whether the column is mandatory
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158618632629}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158618632629.html}
     *
     * @since 2020.2
     */
    isMandatory: boolean;

    /**
     * Returns the label of the column
     *
     * The Help Center page for this property describes it as "Returns the internal ID of the column" — a copy-paste
     * error in the docs; the property holds the column's display label.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619880}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619880.html}
     *
     * @since 2016.2
     */
    readonly label: string;

    /**
     * Returns the internal ID of the standard or custom sublist that contains the column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619931}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501619931.html}
     *
     * @since 2016.2
     */
    readonly sublistId: string;

    /**
     * Returns the column type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501620041}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1501620041.html}
     *
     * @since 2016.2
     */
    readonly type: Lowercase<serverWidget.FieldType>;

    /**
     * Indicates whether the column is displayed
     *
     * Not documented on the currentRecord.Column Help Center page; present at runtime. Documented for the N/record
     * sublist.Column object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593019143}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158593019143.html}
     *
     * @since 2020.2
     */
    isDisplay: boolean;

    /**
     * Indicates whether the column is sortable
     *
     * Not documented on the currentRecord.Column Help Center page; present at runtime. Documented for the N/record
     * sublist.Column object, which shares this implementation — see the links below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593039336}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158593039336.html}
     *
     * @since 2020.2
     */
    readonly isSortable: boolean;

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2016.2
     */
    toString(): 'sublist.Column';

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2016.2
     */
    toJSON(): ExcludeMethods<this>;
  }
}
