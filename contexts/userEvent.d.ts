/// <reference path="../N/record.d.ts" />
/// <reference path="../N/ui/serverWidget.d.ts" />

/**
 * SuiteScript User Event Script Context
 *
 * @NApiVersion 2.x
 */

/**
 * Return a new instance of userevent.BeforeLoadContext
 *
 * @since 2015.2
 */
interface BeforeLoadContext {
  
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
}

declare namespace BeforeLoadContext {
  
  /**
   * @enum
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
 *
 * @since 2015.2
 */

interface BeforeSubmitContext {
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

declare namespace BeforeSubmitContext {
  
  /**
   * @enum
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
 * Return a new instance of userevent.AfterSubmitContext
 *
 * @since 2015.2
 */
interface AfterSubmitContext {
  
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

declare namespace AfterSubmitContext {
  
  /**
   * @enum
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