/// <reference path="../N/record.d.ts" />

/**
 * SuiteScript Workflow Action Script Context
 *
 * @NApiVersion 2.x
 */
type OnActionContext = {

  /**
   * The new record. Saving is not permitted
   *
   * @type {record.Record}
   *
   * @readonly
   */
  newRecord: record.Record

  /**
   * The old record. Saving is not permitted
   *
   * @type {record.Record}
   *
   * @readonly
   */
  oldRecord: record.Record
}