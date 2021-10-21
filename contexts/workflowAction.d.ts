/// <reference path="../N/record.d.ts" />

/**
 * SuiteScript Workflow Action Script Context
 *
 * @NApiVersion 2.x
 */
interface OnActionContext {

  /**
   * The new record. Saving is not permitted
   *
   * @type {record.Record}
   *
   * @readonly
   */
  newRecord: Omit<record.Record, 'save'>

  /**
   * The old record. Saving is not permitted
   *
   * @type {record.Record}
   *
   * @readonly
   */
  oldRecord: Omit<record.Record, 'save'>
}