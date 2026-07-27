/// <reference path="../error.d.ts" />

/**
 * SuiteScript scriptTypes/restlet module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_4130555042}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_4130555042.html}
 *
 * @module N/scriptTypes/restlet
 * @NApiVersion 2.x
 *
 * @restriction Supported only by RESTlet scripts
 */
interface restlet {

  /**
   * Creates a custom HTTP response for a RESTlet.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0618021129}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0618021129.html}
   *
   * @governance none
   * @restriction Supported only by RESTlet scripts
   * @since 2024.2
   *
   * @param options
   * @param options.content The body content of the HTTP response.
   * @param options.contentType The Content-Type header value of the HTTP response. Overrides the default Content-Type, which mirrors the Content-Type of the inbound RESTlet HTTP request.
   * @return A `Response` object representing the configured HTTP response.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing entirely, or if `options.content` or `options.contentType` is missing from the options bag. The runtime error message names the internal method as `scriptTypes/restlet.createConfig` rather than `createResponse` — a NetSuite-side internal naming leak.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive (`null`, `undefined`, string, number, boolean, array), or if `options.content` or `options.contentType` is `null` or not a string (number, boolean, object, array). An existing `Response` instance is also rejected by this code — `createResponse` does NOT accept a `Response` for re-wrapping.
   * @throws {error.SuiteScriptError} UNKNOWN_PARAM If the `options` bag contains any property other than `content` and `contentType`. The runtime message lists the VALID parameter names rather than the unknown ones — e.g. `"Unknown parameter: content, contentType."` when an unexpected property was passed alongside them.
   */
  createResponse(options: {
    content: string,
    contentType: string,
  }): restlet.Response;
}

declare namespace restlet {

  /**
   * An HTTP response for a RESTlet script. Created by `restlet.createResponse(options)`; the
   * two data properties are populated from the options bag at construction and are immutable
   * thereafter (assignment throws `READ_ONLY_PROPERTY`; `Object.defineProperty` throws
   * `TypeError: Cannot redefine property` because the property descriptor is non-configurable).
   *
   * The object itself is NOT frozen or sealed — arbitrary properties can be added to a
   * `Response` instance, though they have no effect on the response NetSuite emits.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0618010851}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0618010851.html}
   *
   * @since 2024.2
   */
  export interface Response {

    /**
     * The body content of the HTTP response.
     *
     * @restriction Supported only by RESTlet scripts
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY On any assignment attempt (the property has a setter, but the setter always throws — same behavior for valid strings, `null`, `undefined`, and wrong-type values).
     */
    readonly content: string;

    /**
     * The Content-Type header value of the HTTP response.
     *
     * @restriction Supported only by RESTlet scripts
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY On any assignment attempt — same behavior as `content`.
     */
    readonly contentType: string;

    /**
     * Returns a plain-object serialization of this `Response`. Used implicitly by
     * `JSON.stringify(response)`. The returned object includes an undocumented
     * `__stringTag` field set to the literal `'scriptTypes/restlet.Response'` —
     * useful for runtime type identification of serialized responses.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2024.2
     */
    toJSON(): {
      __stringTag: 'scriptTypes/restlet.Response',
      content: string,
      contentType: string,
    };

    /**
     * Returns the literal string `'scriptTypes/restlet.Response'`. Useful for runtime type
     * identification.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2024.2
     */
    toString(): 'scriptTypes/restlet.Response';
  }
}
