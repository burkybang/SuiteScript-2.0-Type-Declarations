/// <reference path="../N/record.d.ts" />
/// <reference path="../N/http.d.ts" />
/// <reference path="../N/ui/serverWidget.d.ts" />

/**
 * SuiteScript User Event Script Context
 *
 * @NApiVersion 2.x
 */

/**
 * Return a new instance of userevent.BeforeLoadContext
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781.html}
 *
 * @since 2015.2
 */
type BeforeLoadContext = {

  /**
   * @name BeforeLoadContext#newRecord
   * @type {record.Record} newRecord - The new record being loaded
   *
   * @readonly
   */
  newRecord: record.Record

  /**
   * @name BeforeLoadContext#type
   * @type {string} type - The action type that triggered this event
   *
   * @readonly
   */
  type: BeforeLoadContext.UserEventType

  /**
   * @name BeforeLoadContext#form
   * @type {serverWidget.Form} form - The current UI form
   *
   * @readonly
   */
  form: serverWidget.Form

  /**
   * @name BeforeLoadContext#request
   * @type {http.ServerRequest} request
   *
   * @readonly
   */
  request?: http.ServerRequest
}

/**
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781.html}
 */
declare namespace BeforeLoadContext {

  /**
   * @enum {string}
   */
  export enum UserEventType {
    COPY = 'copy',
    CREATE = 'create',
    VIEW = 'view',
    EDIT = 'edit',
    XEDIT = 'xedit',
    DELETE = 'delete',
    DROPSHIP = 'dropship',
    SPECIALORDER = 'specialorder',
    ORDERITEMS = 'orderitems',
    CANCEL = 'cancel',
    APPROVE = 'approve',
    REJECT = 'reject',
    PACK = 'pack',
    SHIP = 'ship',
    EDITFORECAST = 'editforecast',
    REASSIGN = 'reassign',
    MARKCOMPLETE = 'markcomplete',
    PRINT = 'print',
    EMAIL = 'email',
    CHANGEPASSWORD = 'changepassword',
    TRANSFORM = 'transform',
    PAYBILLS = 'paybills',
    QUICKVIEW = 'quickview',
  }
}

/**
 * Return a new instance of userevent.BeforeSubmitContext
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992070.html}
 *
 * @since 2015.2
 */
type BeforeSubmitContext = {
  /**
   * @name BeforeSubmitContext#newRecord
   * @type {record.Record} newRecord - The new record being loaded
   *
   * @readonly
   */
  newRecord: record.Record

  /**
   * @name BeforeSubmitContext#oldRecord
   * @type {record.Record} oldRecord - The old record before it was modified
   *
   * @readonly
   */
  oldRecord: record.Record

  /**
   * @name BeforeSubmitContext#type
   * @type {string} type - The action type that triggered this event
   *
   * @readonly
   */
  type: BeforeSubmitContext.UserEventType
}

/**
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992070.html}
 */
declare namespace BeforeSubmitContext {

  /**
   * @enum {string}
   */
  export enum UserEventType {
    COPY = 'copy',
    CREATE = 'create',
    VIEW = 'view',
    EDIT = 'edit',
    XEDIT = 'xedit', // inline editing
    DELETE = 'delete',
    DROPSHIP = 'dropship',
    SPECIALORDER = 'specialorder',
    ORDERITEMS = 'orderitems',
    CANCEL = 'cancel', // only available for certain record types
    APPROVE = 'approve', // only available for certain record types
    REJECT = 'reject', // only available for certain record types
    PACK = 'pack', // only available for certain record types, for example Item Fulfillment records
    SHIP = 'ship', // only available for certain record types, for example Item Fulfillment records
    EDITFORECAST = 'editforecast', // specify this type for a beforeSubmit script to execute when users update opportunity and estimate records using the Forecast Editor
    REASSIGN = 'reassign', // specify this type for a beforeSubmit script to execute when users click Grab on case records
    MARKCOMPLETE = 'markcomplete', // specify this type for a beforeSubmit script to execute when users click Mark Complete on call and task records
    PRINT = 'print',
    EMAIL = 'email',
    CHANGEPASSWORD = 'changepassword',
    TRANSFORM = 'transform',
    PAYBILLS = 'paybills',
    QUICKVIEW = 'quickview',
  }
}

/**
 * Return a new instance of userevent.AfterSubmitContext
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992281.html}
 *
 * @since 2015.2
 */
type AfterSubmitContext = {

  /**
   * @name AfterSubmitContext#newRecord
   * @type {record.Record} newRecord - The new record being loaded
   *
   * @readonly
   */
  newRecord: record.Record

  /**
   * @name AfterSubmitContext#oldRecord
   * @type {record.Record} oldRecord - The old record before it was modified
   *
   * @readonly
   */
  oldRecord: record.Record

  /**
   * @name AfterSubmitContext#type
   * @type {string} type - The action type that triggered this event
   *
   * @readonly
   */
  type: AfterSubmitContext.UserEventType
}

/**
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992281.html}
 */
declare namespace AfterSubmitContext {

  /**
   * @enum {string}
   */
  export enum UserEventType {
    COPY = 'copy',
    CREATE = 'create',
    VIEW = 'view',
    EDIT = 'edit',
    XEDIT = 'xedit', // inline editing; only returns the fields edited and not the full record
    DELETE = 'delete',
    DROPSHIP = 'dropship', // for purchase orders with items specified as "drop ship"
    SPECIALORDER = 'specialorder',
    ORDERITEMS = 'orderitems',
    CANCEL = 'cancel', // only available for certain record types
    APPROVE = 'approve', // only available for certain record types
    REJECT = 'reject', // only available for certain record types
    PACK = 'pack', // only available for certain record types, for example Item Fulfillment records
    SHIP = 'ship', // only available for certain record types, for example Item Fulfillment records
    EDITFORECAST = 'editforecast',
    REASSIGN = 'reassign',
    MARKCOMPLETE = 'markcomplete',
    PRINT = 'print',
    EMAIL = 'email',
    CHANGEPASSWORD = 'changepassword',
    TRANSFORM = 'transform',
    PAYBILLS = 'paybills',
    QUICKVIEW = 'quickview',
  }
}