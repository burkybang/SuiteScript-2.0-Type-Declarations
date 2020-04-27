/// <reference path="./record.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

// todo: Complete this

/**
 * SuiteScript currentRecord common module
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4625600928.html
 *
 * @restriction Client Scripts only
 *
 * @module N/currentRecord
 * @NApiVersion 2.x
 */
interface currentRecord {
  
  /**
   * Retrieves a currentRecord object that represents the record active on the current page
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637729624.html
   *
   * @restriction Client Scripts only
   *
   * @return {currentRecord.CurrentRecord}
   *
   * @throws {SuiteScriptError} CANNOT_CREATE_RECORD_INSTANCE if current record page is not scriptable or an error occurred when creating the record object
   *
   * @since 2016.2
   */
  get(): currentRecord.CurrentRecord
}

declare namespace currentRecord {
  
  export interface get {
    
    /**
     * Retrieves a promise for a currentRecord object that represents the record active on the current page
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637734729.html
     *
     * @restriction Client Scripts only
     *
     * @return {Promise<CurrentRecord>}
     *
     * @throws {SuiteScriptError} CANNOT_CREATE_RECORD_INSTANCE if current record page is not scriptable or an error occurred when creating the record object
     *
     * @since 2016.2
     */
    promise(): Promise<CurrentRecord>
  }
  
  export interface CurrentRecord {
    
    /**
     * The internal ID of the record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576907.html
     *
     * @type {number}
     * @readonly
     */
    id: number
    
    /**
     * The type of the record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576636.html
     *
     * @restriction This property is not available for subrecords
     *
     * @type {record.Type|string}
     * @readonly
     */
    type: record.Type | string
    
    /**
     * Indicates whether the record is in dynamic or standard mode
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637576809.html
     *
     * @type {boolean}
     * @readonly
     */
    isDynamic: boolean
    
    /**
     * Return value of the field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582256.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue(options: { fieldId: string }): string | string[] | number | Date | boolean
    
    /**
     * Set value of the field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577499.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setValue(options: { fieldId: string, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean, forceSyncSourcing?: boolean }): CurrentRecord
    
    /**
     * Get value of the field in text representation
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582421.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getText(options: { fieldId: string }): string
    
    /**
     * Set value of the field by text representation
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637577945.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|string[]} options.text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setText(options: { fieldId: string, text: string | string[], ignoreFieldChange?: boolean, forceSyncSourcing?: boolean }): CurrentRecord
    
    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586103.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @return {number}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */
    findSublistLineWithValue(options: { sublistId: string, fieldId: string, value: string | string[] | number | Date | boolean }): number
    
    /**
     * Return value of a sublist field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583237.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue(options: { sublistId: string, fieldId: string, line: number }): string | string[] | number | Date | boolean
    
    /**
     * Return value of a sublist field in text representation
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583397.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    getSublistText(options: { sublistId: string, fieldId: string, line: number }): string
    
    /**
     * Return line count of sublist
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584890.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    getLineCount(options: { sublistId: string }): number
    
    /**
     * Insert a sublist line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */
    insertLine(options: { sublistId: string, line: number, ignoreRecalc?: boolean }): CurrentRecord
    
    /**
     * Remove a sublist line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581252.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */
    removeLine(options: { sublistId: string, line: number, ignoreRecalc?: boolean }): CurrentRecord
    
    /**
     * Select a new line at the end of sublist
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580046.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {CurrentRecord}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     */
    selectNewLine(options: { sublistId: string }): CurrentRecord
    
    /**
     * Cancel the current selected line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637546866.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     */
    cancelLine(options: { sublistId: string }): CurrentRecord
    
    /**
     * Commit the current selected line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637565703.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     */
    commitLine(options: { sublistId: string }): CurrentRecord
    
    /**
     * Return value of a sublist field on the current selected sublist line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585213.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     */
    getCurrentSublistValue(options: { sublistId: string, fieldId: string }): string | string[] | number | Date | boolean
    
    /**
     * Set the value for field in the current selected line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579473.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistValue(options: { sublistId: string, fieldId: string, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean, forceSyncSourcing?: boolean }): CurrentRecord
    
    /**
     * Return the value for field in the current selected line by text representation
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585436.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     */
    getCurrentSublistText(options: { sublistId: string, fieldId: string }): string
    
    /**
     * Set the value for field in the current selected line by text representation
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579678.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @param {boolean} [options.forceSyncSourcing=false] Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistText(options: { sublistId: string, fieldId: string, text: string, ignoreFieldChange?: boolean, forceSyncSourcing?: boolean }): CurrentRecord
    
    /**
     * Selects an existing line in a sublist (dynamic mode only)
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580249.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     */
    selectLine(options: { sublistId: string, line: number }): CurrentRecord
    
    /**
     * Return a value indicating if the field has a subrecord
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581381.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasSubrecord(options: { fieldId: string }): boolean
    
    /**
     * Get the subrecord for the associated field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583010.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {CurrentRecord} client-side subrecord implementation
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     * @throws {SuiteScriptError} SSS_INVALID_FIELD_ON_SUBRECORD_OPERATION if field does not refer to a subrecord
     */
    getSubrecord(options: { fieldId: string }): CurrentRecord
    
    /**
     * Remove the subrecord for the associated field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637580399.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {CurrentRecord} same record, for chaining
     */
    removeSubrecord(options: { fieldId: string }): CurrentRecord
    
    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581548.html
     *
     * @restriction only available in deferred dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {boolean}
     */
    hasSublistSubrecord(options: { sublistId: string, fieldId: string, line: number }): boolean
    
    /**
     * Return a value indicating if the associated sublist field has a subrecord on the current line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637582063.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasCurrentSublistSubrecord(options: { sublistId: string, fieldId: string }): boolean
    
    /**
     * Get the subrecord for the associated sublist field on the current line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585570.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {CurrentRecord} client-side subrecord implementation
     */
    getCurrentSublistSubrecord(options: { sublistId: string, fieldId: string }): CurrentRecord
    
    /**
     * Remove the subrecord for the associated sublist field on the current line
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637581076.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {CurrentRecord} same record, for chaining
     */
    removeCurrentSublistSubrecord(options: { sublistId: string, fieldId: string }): CurrentRecord
    
    /**
     * Returns the specified sublist
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583811.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */
    getSublist(options: { sublistId: string }): Sublist
    
    /**
     * Return field object from record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585044.html
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options: { fieldId: string }): Field
    
    /**
     * Return field object from record's sublist
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637583684.html
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Field}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(options: { sublistId: string, fieldId: string, line: number }): Field
    
    /**
     * Set the value for the associated header in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579241.html
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string|string[]|number|Date|boolean} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setMatrixHeaderValue(options: { sublistId: string, fieldId: string, column: number, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean }): CurrentRecord
    
    /**
     * Get the value for the associated header in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584433.html
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderValue(options: { sublistId: string, fieldId: string, column: number }): string | string[] | number | Date | boolean
    
    /**
     * Set the value for the associated field in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579037.html
     *
     * @restriction only available in deferred dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @param {string|string[]|number|Date|boolean} options.value the value to set it to
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} INVALID_FLD_VALUE if value type does not match field type
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number, line: number, value: string | string[] | number | Date | boolean }): CurrentRecord
    
    /**
     * Get the value for the associated field in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584028.html
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number, line: number }): string | string[] | number | Date | boolean
    
    /**
     * Get the field for the specified header in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584607.html
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @return {Field}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderField(options: { sublistId: string, fieldId: string, column: number }): Field
    
    /**
     * Get the field for the specified sublist in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584261.html
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {Field}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistField(options: { sublistId: string, fieldId: string, column: number, line: number }): Field
    
    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637586269.html
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {string|string[]|number|Date|boolean} options.value the value to search for
     * @param {number} options.column the column number for the field
     * @return {number} line number
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     */
    findMatrixSublistLineWithValue(options: { sublistId: string, fieldId: string, value: string | string[] | number | Date | boolean, column: number }): number
    
    /**
     * Returns the number of columns for the specified matrix.
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637584779.html
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @return {number}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderCount(options: { sublistId: string, fieldId: string }): number
    
    /**
     * Set the value for the line currently selected in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637579872.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string|string[]|number|Date|boolean} options.value - the value to set it to
     * @param {boolean} [options.ignoreFieldChange=false] - Ignore the field change script (default false)
     * @param {boolean} [options.forceSyncSourcing=false] - Indicates whether to perform field sourcing synchronously
     * @return {CurrentRecord} same record, for chaining
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setCurrentMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean, forceSyncSourcing?: boolean }): CurrentRecord
    
    /**
     * Get the value for the line currently selected in the matrix
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4637585905.html
     *
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getCurrentMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number }): string | string[] | number | Date | boolean
  }
  
  /**
   * Encapsulates a body or sublist field on the current record
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4793291846.html
   *
   * @since 2016.2
   */
  export interface Field {
    
    /**
     * The internal id of the field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794247756.html
     *
     * @name Field#id
     * @type {string}
     * @readonly
     *
     * @since 2016.2
     */
    id: string
    
    /**
     * The type of the field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794225547.html
     *
     * @name Field#FieldType
     * @type {serverWidget.FieldType}
     * @readonly
     *
     * @since 2016.2
     */
    type: serverWidget.FieldType
    
    /**
     * The sublist ID of the field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1490026603.html
     *
     * @name Field#sublistId
     * @type {string}
     * @readonly
     *
     * @since 2016.2
     */
    sublistId: string
    
    /**
     * The label of the field
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794248033.html
     *
     * @name Field#label
     * @type {string}
     *
     * @since 2016.2
     */
    label: string
    
    /**
     * Is the field mandatory?
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794223029.html
     *
     * @name Field#isMandatory
     * @type {boolean}
     *
     * @since 2016.2
     */
    isMandatory: boolean
    
    /**
     * Is the field disabled?
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794215939.html
     *
     * @name Field#isDisabled
     * @type {boolean}
     *
     * @since 2016.2
     */
    isDisabled: boolean
    
    /**
     * Is the field a popup list field?
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794222162.html
     *
     * @name Field#isPopup
     * @type {boolean}
     *
     * @since 2016.2
     */
    isPopup: boolean
    
    /**
     * Is the field set to display on the record form?
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794214205.html
     *
     * @name Field#isDisplay
     * @type {boolean}
     *
     * @since 2016.2
     */
    isDisplay: boolean
    
    /**
     * Is the field visible on the record form?
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794214500.html
     *
     * @name Field#isVisible
     * @type {boolean}
     *
     * @since 2016.2
     */
    isVisible: boolean
    
    /**
     * Can the field be edited on the record form?
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4794213415.html
     *
     * @name Field#isReadOnly
     * @type {boolean}
     *
     * @since 2016.2
     */
    isReadOnly: boolean
    
    /**
     * Returns an array of available options on a standard or custom select, multiselect, or radio field as key-value pairs
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4834781098.html
     *
     * @restriction Only the first 1,000 available options are returned in an array. If there are more than 1,000 available options, an empty array [] is returned.
     *
     * @param {Object} options
     * @param {string} [options.filter] A search string to filter the select options that are returned.
     * @param {'contains'|'is'|'startswith'} [options.operator='contains']  Defaults to the "contains" operator
     * @return {{value:string, text:string}[]}
     *
     * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     *
     * @since 2016.2
     */
    getSelectOptions(options: { filter?: string, operator?: 'contains' | 'is' | 'startswith' }): { value: string, text: string }[]
    
    /**
     * Inserts an option into certain types of select and multiselect fields
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4779675098.html
     *
     * @restriction This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event script. The IDs for these fields always have a prefix of custpage.
     *
     * @param {Object} options
     * @param {string|number} options.value The internal id of the option
     * @param {string} options.text  The display text for this option
     * @param {boolean} [options.isSelected=false] If true, this option is selected
     * @return {void}
     *
     * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     *
     * @since 2016.2
     */
    insertSelectOption(options: { value: string | number, text: string, isSelected?: boolean }): void
    
    /**
     * Removes a select option from certain types of select and multiselect fields
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4780315055.html
     *
     * @restriction This method is usable only in select fields that were added by a front-end Suitelet or beforeLoad user event script. The IDs for these fields always have a prefix of custpage.
     *
     * @param {Object} options
     * @param {string|number} options.value The internal id of the option
     * @return {void}
     *
     * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if this method is used on a field that is not of type "select" or "multiselect" and whose ID doesn't begin with the prefix "custpage"
     *
     * @since 2016.2
     */
    removeSelectOption(options: { value: string | number, text: string, isSelected?: boolean }): void
  }
  
  /**
   * Encapsulates a sublist on the current record
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4793291846.html
   *
   * @since 2016.2
   */
  export interface Sublist {
    // todo: Complete this
  }
  
  /**
   * Encapsulates a column of a sublist on the current record
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1501619693.html
   *
   * @since 2016.2
   */
  export interface Column {
    // todo: Complete this
  }
}