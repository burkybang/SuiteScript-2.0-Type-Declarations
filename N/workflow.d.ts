/**
 * SuiteScript workflow module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4341725558}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4341725558.html}
 *
 * @module N/workflow
 * @NApiVersion 2.x
 */
interface workflow {

  /**
   * Triggers a workflow on a record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344303916}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344303916.html}
   *
   * @governance 20 units
   *
   * @param {Object} options
   * @param {string} options.recordType Record type ID of the workflow base record
   * @param {number|string} options.recordId Internal ID of the base record
   * @param {number|string} options.workflowId Internal ID or script ID of the workflow definition
   * @param {Object<string, *>} [options.defaultValues] Object containing key/value pairs providing default values for field defined on the specified workflow
   * @return {number} Internal ID of workflow instance that was initiated
   *
   * @since 2015.2
   */
  initiate(options: {
    recordType: string,
    recordId: number | string,
    workflowId: number | string,
    defaultValues?: {
      [p: string]: any,
    },
  }): number;

  /**
   * Triggers a workflow on a record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344892270}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344892270.html}
   *
   * @governance 20 units
   *
   * @param {Object} options
   * @param {string} options.recordType Record type ID of the workflow base record
   * @param {number|string} options.recordId Internal ID of the base record
   * @param {number|string} options.workflowId Internal ID or script ID for the workflow definition
   * @param {number|string} [options.workflowInstanceId] Internal ID of the workflow instance
   * @param {number|string} [options.actionId] Internal ID or script ID of the workflow action (usually button pressed)
   * @param {number|string} [options.stateId] Internal ID or script ID of the workflow state containing the action
   * @return {number} Internal ID of workflow instance that was triggered
   *
   * @since 2015.2
   */
  trigger(options: {
    recordId: number | string,
    workflowId: number | string,
    workflowInstanceId?: number | string,
    actionId?: number | string,
    stateId?: number | string,
  }): number;
}