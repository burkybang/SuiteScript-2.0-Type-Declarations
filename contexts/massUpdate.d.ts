/**
 * SuiteScript Mass Update Script Context
 *
 * @NApiVersion 2.x
 */
interface EachParams {

  /**
   * The internal ID of the record being processed
   *
   * @type {number}
   *
   * @readonly
   */
  id: number

  /**
   * The record type of the record being processed
   *
   * @type {string}
   *
   * @readonly
   */
  type: string
}