/// <reference path="../N/record.d.ts" />

/**
 * SuiteScript Client Script Context
 *
 * @NApiVersion 2.x
 */

interface PageInitContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The access mode of the current record
   *
   * @type {'copy'|'created'|'edit'}
   *
   * @readonly
   */
  mode: 'copy' | 'created' | 'edit'
}

interface ValidateFieldContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
  
  /**
   * The internal ID of the field being validated
   *
   * @type {string}
   *
   * @readonly
   */
  fieldId: string
  
  /**
   * The index of the line if the field is in a sublist or matrix
   *
   * @type {number}
   *
   * @readonly
   */
  lineNum: number
  
  /**
   * The index of the column if the field is in a matrix
   *
   * @type {number}
   *
   * @readonly
   */
  columnNum: number
}

interface FieldChangedContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
  
  /**
   * The internal ID of the field that was changed
   *
   * @type {string}
   *
   * @readonly
   */
  fieldId: string
  
  /**
   * The index of the line if the field is in a sublist or matrix
   *
   * @type {number}
   *
   * @readonly
   */
  lineNum: number
  
  /**
   * The index of the column if the field is in a matrix
   *
   * @type {number}
   *
   * @readonly
   */
  columnNum: number
}

interface PostSourcingContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
  
  /**
   * The internal ID of the field that triggered postSourcing
   *
   * @type {string}
   *
   * @readonly
   */
  fieldId: string
}

interface LineInitContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

interface ValidateLineContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

interface ValidateInsertContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

interface ValidateDeleteContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

interface SublistChangedContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
  
  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

interface SaveRecordContext {
  
  /**
   * The current record the user is manipulating in the UI
   *
   * @type {record.Record}
   *
   * @readonly
   */
  currentRecord: record.Record
}