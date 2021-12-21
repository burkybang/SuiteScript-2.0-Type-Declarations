/**
 * SuiteScript Suitelet Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1506710621}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1506710621.html}
 */

/**
 * Defines the Scheduled script trigger point
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407979858}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407979858.html}
 *
 * @since 2015.2
 */
interface ExecuteContext {

  /**
   * The script execution context
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407979858}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407979858.html}
   *
   * @type {ExecuteContext.InvocationType} type - The context in which the script is executed
   * @readonly
   *
   * @since 2015.2
   */
  type: ExecuteContext.InvocationType;
}

declare namespace ExecuteContext {

  /**
   * Enumeration that holds the string values for scheduled script execution contexts
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407982532}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407982532.html}
   *
   * @enum {string}
   *
   * @since 2015.2
   */
  export enum InvocationType {
    // The normal execution according to the deployment options specified in the UI.
    SCHEDULED = 'SCHEDULED',
    // The script is executed via a call from a script (using ScheduledScriptTask.submit()). Note: The scheduled script must have a status of Not Scheduled on the Script Deployment page.
    ON_DEMAND = 'ON_DEMAND',
    // The script is executed via the UI (the Save & Execute button has been clicked).
    USER_INTERFACE = 'USER_INTERFACE',
    // The script re-executed automatically following an aborted execution (system went down during execution).
    ABORTED = 'ABORTED',
    // The script is executed automatically following downtime during which the script should have been executed.
    SKIPPED = 'SKIPPED',
  }
}