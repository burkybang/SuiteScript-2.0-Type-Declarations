/**
 * SuiteScript Workflow Action Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1516394504}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516394504.html}
 */

/// <reference path="../N/record.d.ts" />
/// <reference path="../N/currentRecord.d.ts" />
/// <reference path="../N/ui/serverWidget.d.ts" />

/**
 * Defines a Workflow Action script trigger point
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429414}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429414.html}
 *
 * @since 2016.1
 */
interface OnActionContext {

  /**
   * The new record. Saving is not permitted
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429414}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429414.html}
   *
   * @type {record.RecordReadonly | currentRecord.CurrentRecordReadonly}
   * @readonly
   *
   * @since 2016.1
   */
  newRecord: record.RecordReadonly | currentRecord.CurrentRecordReadonly;

  /**
   * The old record. Saving is not permitted
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429414}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429414.html}
   *
   * @type {record.RecordReadonly | currentRecord.CurrentRecordReadonly}
   * @readonly
   *
   * @since 2016.1
   */
  oldRecord: record.RecordReadonly | currentRecord.CurrentRecordReadonly;

  /**
   * The current form that the script uses to interact with the record. This parameter is available only in the beforeLoad context.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429414}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429414.html}
   *
   * @type {serverWidget.Form}
   *
   * @since 2016.2
   */
  form?: serverWidget.Form;

  /**
   * An event type, such as create, edit, view, or delete
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429414}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429414.html}
   *
   * @type {string}
   *
   * @since 2016.2
   */
  type?: string;

  /**
   * The internal ID of the workflow that calls the script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429414}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429414.html}
   *
   * @type {number}
   *
   * @since 2016.2
   */
  workflowId?: number;
}