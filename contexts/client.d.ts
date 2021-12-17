/**
 * SuiteScript Client Script Context
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4489981198)
 */

/// <reference path="../N/currentRecord.d.ts" />

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671)
 *
 * @since 2015.2
 */
interface PageInitContext {

  /**
   * The access mode of the current record
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671)
   *
   * @type {'copy'|'create'|'edit'}
   * @readonly
   *
   * @since 2015.2
   */
  mode: 'copy' | 'create' | 'edit';

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   *
   * @since 2015.2
   */
  currentRecord: currentRecord.CurrentRecordReadonly;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152)
 *
 * @since 2015.2
 */
interface ValidateFieldContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;

  /**
   * The internal ID of the field being validated
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152)
   *
   * @type {string}
   * @readonly
   */
  fieldId: string;

  /**
   * The index of the line if the field is in a sublist or matrix
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152)
   *
   * @type {number}
   * @readonly
   */
  line: number;

  /**
   * The index of the column if the field is in a matrix
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152)
   *
   * @type {number}
   * @readonly
   */
  column: number;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508)
 *
 * @since 2015.2
 */
interface FieldChangedContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;

  /**
   * The internal ID of the field that was changed
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508)
   *
   * @type {string}
   * @readonly
   */
  fieldId: string;

  /**
   * The index of the line if the field is in a sublist or matrix
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508)
   *
   * @type {number}
   * @readonly
   */
  line: number;

  /**
   * The index of the column if the field is in a matrix
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508)
   *
   * @type {number}
   * @readonly
   */
  column: number;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692646)
 *
 * @since 2015.2
 */
interface PostSourcingContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692646)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692646)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;

  /**
   * The internal ID of the field that triggered postSourcing
   *
   * @type {string}
   *
   * @readonly
   */
  fieldId: string;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693004)
 *
 * @since 2015.2
 */
interface LineInitContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693004)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693004)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693302)
 *
 * @since 2015.2
 */
interface ValidateLineContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693302)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693302)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693455)
 *
 * @since 2015.2
 */
interface ValidateInsertContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693455)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693455)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693608)
 *
 * @since 2015.2
 */
interface ValidateDeleteContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693608)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693608)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812)
 *
 * @since 2015.2
 */
interface SublistChangedContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812)
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;

  /**
   * The type of change to the sublist
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812)
   *
   * @type {string}
   * @readonly
   */
  operation: 'commit' | 'insert' | 'remove';
}

/**
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693749)
 *
 * @since 2015.2
 */
interface SaveRecordContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693749)
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;
}