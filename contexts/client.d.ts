/// <reference path="../N/currentRecord.d.ts" />

/**
 * SuiteScript Client Script Context
 *
 * @NApiVersion 2.x
 */

type PageInitContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

  /**
   * The access mode of the current record
   *
   * @type {'copy'|'create'|'edit'}
   *
   * @readonly
   */
  mode: 'copy' | 'create' | 'edit'
}

type ValidateFieldContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

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

type FieldChangedContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

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

type PostSourcingContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

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

type LineInitContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

type ValidateLineContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

type ValidateInsertContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

type ValidateDeleteContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

type SublistChangedContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord

  /**
   * The internal ID of the sublist
   *
   * @type {string}
   *
   * @readonly
   */
  sublistId: string
}

type SaveRecordContext = {

  /**
   * The current record the user is manipulating in the UI
   *
   * @type {currentRecord.CurrentRecord}
   *
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecord
}