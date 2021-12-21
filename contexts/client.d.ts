/**
 * SuiteScript Client Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4489981198}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4489981198.html}
 */

/// <reference path="../N/currentRecord.d.ts" />

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410597671.html}
 *
 * @since 2015.2
 */
interface PageInitContext {

  /**
   * The access mode of the current record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410597671.html}
   *
   * @type {'copy'|'create'|'edit'}
   * @readonly
   *
   * @since 2015.2
   */
  mode: 'copy' | 'create' | 'edit';

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410597671.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   *
   * @since 2015.2
   */
  currentRecord: currentRecord.CurrentRecordReadonly;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693152.html}
 *
 * @since 2015.2
 */
interface ValidateFieldContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693152.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693152.html}
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;

  /**
   * The internal ID of the field being validated
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693152.html}
   *
   * @type {string}
   * @readonly
   */
  fieldId: string;

  /**
   * The index of the line if the field is in a sublist or matrix
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693152.html}
   *
   * @type {number}
   * @readonly
   */
  line: number;

  /**
   * The index of the column if the field is in a matrix
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693152.html}
   *
   * @type {number}
   * @readonly
   */
  column: number;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692508.html}
 *
 * @since 2015.2
 */
interface FieldChangedContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692508.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692508.html}
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;

  /**
   * The internal ID of the field that was changed
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692508.html}
   *
   * @type {string}
   * @readonly
   */
  fieldId: string;

  /**
   * The index of the line if the field is in a sublist or matrix
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692508.html}
   *
   * @type {number}
   * @readonly
   */
  line: number;

  /**
   * The index of the column if the field is in a matrix
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692508.html}
   *
   * @type {number}
   * @readonly
   */
  column: number;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692646}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692646.html}
 *
 * @since 2015.2
 */
interface PostSourcingContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692646}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692646.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692646}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692646.html}
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
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693004}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693004.html}
 *
 * @since 2015.2
 */
interface LineInitContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693004}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693004.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693004}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693004.html}
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693302}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693302.html}
 *
 * @since 2015.2
 */
interface ValidateLineContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693302}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693302.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693302}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693302.html}
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693455}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693455.html}
 *
 * @since 2015.2
 */
interface ValidateInsertContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693455}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693455.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693455}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693455.html}
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693608}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693608.html}
 *
 * @since 2015.2
 */
interface ValidateDeleteContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693608}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693608.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693608}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693608.html}
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692812.html}
 *
 * @since 2015.2
 */
interface SublistChangedContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692812.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;

  /**
   * The internal ID of the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692812.html}
   *
   * @type {string}
   * @readonly
   */
  sublistId: string;

  /**
   * The type of change to the sublist
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410692812.html}
   *
   * @type {string}
   * @readonly
   */
  operation: 'commit' | 'insert' | 'remove';
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693749}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693749.html}
 *
 * @since 2015.2
 */
interface SaveRecordContext {

  /**
   * The current record the user is manipulating in the UI
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4410693749}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4410693749.html}
   *
   * @type {currentRecord.CurrentRecord}
   * @readonly
   */
  currentRecord: currentRecord.CurrentRecordReadonly;
}