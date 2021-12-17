/**
 * SuiteScript Suitelet Script Context
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1515615411)
 */

/// <reference path="../N/http.d.ts" />

/**
 * Defines the Suitelet script trigger point
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407987288)
 */
interface OnRequestContext {

  /**
   * The incoming request
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407987288)
   *
   * @type {http.ServerRequest} request - The incoming request object
   * @readonly
   */
  request: http.ServerRequest;

  /**
   * The Suitelet response
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407987288)
   *
   * @type {http.ServerResponse} response - The outgoing response object
   * @readonly
   */
  response: http.ServerResponse;
}