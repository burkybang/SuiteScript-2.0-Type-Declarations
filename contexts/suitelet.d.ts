/// <reference path="../N/http.d.ts" />

/**
 * SuiteScript Suitelet Script Context
 *
 * @NApiVersion 2.x
 */
interface OnRequestContext {

  /**
   * @name SuiteletContext#request
   * @type {http.ServerRequest} request - The incoming request object
   *
   * @readonly
   */
  request: http.ServerRequest

  /**
   * @name SuiteletContext#response
   * @type {http.ServerResponse} response - The outgoing response object
   *
   * @readonly
   */
  response: http.ServerResponse
}