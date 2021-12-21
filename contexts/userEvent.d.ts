/**
 * SuiteScript User Event Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4490073437}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4490073437.html}
 */

/// <reference path="../N/record.d.ts" />
/// <reference path="../N/http.d.ts" />
/// <reference path="../N/ui/serverWidget.d.ts" />

/**
 * Defines the function that is executed before a record is loaded; that is, whenever a read operation occurs on a record, and prior to returning the record or page.
 * These operations include navigating to a record in the UI, reading a record in SOAP web services, and loading a record.
 * The beforeLoad event cannot be used to source standard records. Use the pageInit client script for this purpose.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407991781.html}
 *
 * @since 2015.2
 */
interface BeforeLoadContext {

  /**
   * The action type that triggered this event
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407991781.html}
   *
   * @type {string} type
   * @readonly
   *
   * @since 2015.2
   */
  type: BeforeLoadContext.UserEventType;

  /**
   * The new record being loaded
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407991781.html}
   *
   * @type {record.RecordReadonly} newRecord
   * @readonly
   *
   * @since 2015.2
   */
  newRecord: record.RecordReadonly;

  /**
   * The current UI form
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407991781.html}
   *
   * @type {serverWidget.Form} form
   * @readonly
   *
   * @since 2015.2
   */
  form: serverWidget.Form;

  /**
   * The HTTP request information sent by the browser. If the event was triggered by a server action, this value is not present
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407991781.html}
   *
   * @type {http.ServerRequest} request
   * @readonly
   *
   * @since 2015.2
   */
  request?: http.ServerRequest;
}

declare namespace BeforeLoadContext {

  /**
   * Holds the string values for user event execution contexts
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992596}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992596.html}
   *
   * @enum {string}
   *
   * @since 2015.2
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
 * Defines the function that is executed before a record is submitted; that is, prior to any write operation on the record.
 * Changes made to the current record in this script persist after the write operation.
 * The beforeSubmit event can be used to validate the submitted record, perform any restriction and permission checks, and perform any last-minute changes to the current record.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992070}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992070.html}
 *
 * @since 2015.2
 */
interface BeforeSubmitContext {

  /**
   * The action type that triggered this event
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992070}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992070.html}
   *
   * @type {string} type
   * @readonly
   *
   * @since 2015.2
   */
  type: BeforeSubmitContext.UserEventType;

  /**
   * The new record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992070}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992070.html}
   *
   * @type {record.RecordReadonly} newRecord
   * @readonly
   *
   * @since 2015.2
   */
  newRecord: record.RecordReadonly;

  /**
   * The old record before it was modified
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992070}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992070.html}
   *
   * @type {record.RecordReadonly} oldRecord
   * @readonly
   *
   * @since 2015.2
   */
  oldRecord: record.RecordReadonly;
}

declare namespace BeforeSubmitContext {

  /**
   * Holds the string values for user event execution contexts
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992596}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992596.html}
   *
   * @enum {string}
   *
   * @since 2015.2
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
 * Defines the function that is executed after a record is submitted.
 * The afterSubmit operation is useful for performing any actions that need to occur following a write operation on a record. Examples of these actions include email notification, browser redirect, creation of dependent records, and synchronization with an external system.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992281}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992281.html}
 *
 * @since 2015.2
 */
interface AfterSubmitContext {

  /**
   * The action type that triggered this event
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992281}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992281.html}
   *
   * @type {string} type
   * @readonly
   *
   * @since 2015.2
   */
  type: AfterSubmitContext.UserEventType;

  /**
   * The new record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992281}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992281.html}
   *
   * @type {record.RecordReadonly} newRecord
   * @readonly
   *
   * @since 2015.2
   */
  newRecord: record.RecordReadonly;

  /**
   * The old record before it was modified
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992281}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992281.html}
   *
   * @type {record.RecordReadonly} oldRecord
   * @readonly
   *
   * @since 2015.2
   */
  oldRecord: record.RecordReadonly;
}

declare namespace AfterSubmitContext {

  /**
   * Holds the string values for user event execution contexts
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407992596}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407992596.html}
   *
   * @enum {string}
   *
   * @since 2015.2
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