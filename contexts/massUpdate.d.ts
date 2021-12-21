/**
 * SuiteScript Mass Update Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4557193103}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4557193103.html}
 */

/**
 * Iterates through each applicable record
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452985}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460452985.html}
 *
 * @since 2016.2
 */
interface EachParams {

  /**
   * The internal ID of the record being processed
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452985}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460452985.html}
   *
   * @type {number}
   * @readonly
   */
  id: number;

  /**
   * The record type of the record being processed
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452985}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460452985.html}
   *
   * @type {string}
   * @readonly
   */
  type: string;
}