/**
 * SuiteScript Suitelet Script Context
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407979858.html}
 *
 * @NApiVersion 2.x
 */
type ExecuteContext = {

  /**
   * @name ExecuteContext#type
   * @type {string} type - The context in which the script is executed
   *
   * @readonly
   */
  type: ExecuteContext.InvocationType
}

declare namespace ExecuteContext {

  /**
   * @enum {string}
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407982532.html}
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