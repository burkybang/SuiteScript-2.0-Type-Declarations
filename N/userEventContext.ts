/**
 * SuiteScript User Event Context
 *
 * @NApiVersion 2.x
 *
 */

/**
 * Return a new instance of userevent.BeforeLoad
 * @class
 * @classdesc beforeLoad event handler.
 * @returns {BeforeLoad}
 * @constructor
 *
 * @since 2015.2
 */
class BeforeLoad {

  /**
   * @name BeforeLoad#newRecord
   * @type {Record} newRecord - The new record being loaded
   * @readonly
   */
  newRecord: Record;

  /**
   * @name BeforeLoad#type
   * @type {string} type - The action type that triggered this event
   * @readonly
   */
  type: BeforeLoad.UserEventType;

  /**
   * @name BeforeLoad#form
   * @type {Form} form - The current UI form
   * @readonly
   */
  form: Form;
}

namespace BeforeLoad {
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
 * Return a new instance of userevent.BeforeSubmit
 * @class
 * @classdesc beforeSubmit event handler.
 * @returns {BeforeSubmit}
 * @constructor
 *
 * @since 2015.2
 */
class BeforeSubmit {

  /**
   * @name BeforeSubmit#newRecord
   * @type {Record} newRecord - The new record being loaded
   * @readonly
   */
  newRecord: Record;

  /**
   * @name BeforeSubmit#oldRecord
   * @type {Record} oldRecord - The old record before it was modified
   * @readonly
   */
  oldRecord: Record;

  /**
   * @name BeforeSubmit#type
   * @type {string} type - The action type that triggered this event
   * @readonly
   */
  type: BeforeSubmit.UserEventType;
}

namespace BeforeSubmit {
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
 * Return a new instance of userevent.AfterSubmit
 * @class
 * @classdesc afterSubmit event handler.
 * @returns {AfterSubmit}
 * @constructor
 *
 * @since 2015.2
 */
class AfterSubmit {

  /**
   * @name AfterSubmit#newRecord
   * @type {Record} newRecord - The new record being loaded
   * @readonly
   */
  newRecord: Record;

  /**
   * @name AfterSubmit#oldRecord
   * @type {Record} oldRecord - The old record before it was modified
   * @readonly
   */
  oldRecord: Record;

  /**
   * @name AfterSubmit#type
   * @type {string} type - The action type that triggered this event
   * @readonly
   */
  type: AfterSubmit.UserEventType;
}

namespace AfterSubmit {
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