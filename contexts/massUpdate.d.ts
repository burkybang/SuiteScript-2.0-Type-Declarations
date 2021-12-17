/**
 * SuiteScript Mass Update Script Context
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4557193103)
 */

/**
 * Iterates through each applicable record
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452985)
 *
 * @since 2016.2
 */
interface EachParams {

  /**
   * The internal ID of the record being processed
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452985)
   *
   * @type {number}
   * @readonly
   */
  id: number;

  /**
   * The record type of the record being processed
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452985)
   *
   * @type {string}
   * @readonly
   */
  type: string;
}