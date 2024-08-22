/// <reference path="../error.d.ts" />

/**
 * SuiteScript scriptTypes/restlet module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_4130555042}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_4130555042.html}
 *
 * @module N/scriptTypes/restlet
 * @NApiVersion 2.x
 * @restriction RESTlet scripts only
 */
interface restlet {

  /**
   * Creates a custom RESTlet HTTP response
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0618021129}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0618021129.html}
   *
   * @governance none
   * @restriction RESTlet scripts only
   *
   * @param options
   * @param options.content - The content of the response
   * @param options.contentType - The Content-Type header of the response
   *
   * @return An HTTP response of a RESTlet script
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG A parameter has an invalid type
   *
   * @since 2024.2
   */
  createResponse(options: {
    content: string,
    contentType: string,
  } | restlet.Response): restlet.Response;
}

declare namespace restlet {

  /**
   * An HTTP response of a RESTlet script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0618010851}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0618010851.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface Response {

    /**
     * The content of the RESTlet HTTP response
     *
     * @restriction RESTlet scripts only
     *
     * @since 2024.2
     */
    content: string;

    /**
     * The Content-Type header of the RESTlet HTTP response
     *
     * @restriction RESTlet scripts only
     *
     * @since 2024.2
     */
    contentType: string;
  }
}