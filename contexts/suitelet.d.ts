/**
 * SuiteScript Suitelet Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1515615411}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1515615411.html}
 */

/// <reference path="../N/http.d.ts" />

/**
 * Defines the Suitelet script trigger point
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407987288}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407987288.html}
 */
interface OnRequestContext {

  /**
   * The incoming request
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407987288}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407987288.html}
   *
   * @type {http.ServerRequest} request - The incoming request object
   * @readonly
   */
  request: http.ServerRequest;

  /**
   * The Suitelet response
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407987288}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407987288.html}
   *
   * @type {http.ServerResponse} response - The outgoing response object
   * @readonly
   */
  response: http.ServerResponse;
}