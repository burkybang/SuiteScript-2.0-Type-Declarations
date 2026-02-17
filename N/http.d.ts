/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./https.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

/**
 * Use the N/http module to make HTTP calls from server or client scripts.
 * For client scripts, this module also provides the ability to make cross-domain HTTP requests using NetSuite servers as proxies.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296361104}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296361104.html}
 */
interface http {

  get: {

    /**
     * Sends an HTTP GET request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024767}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024767.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested.
     * @param [options.headers] The HTTP headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): http.ClientResponse;

    /**
     * Sends an HTTP GET request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440810374}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440810374.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested.
     * @param [options.headers] The HTTP headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<http.ClientResponse>;
  };

  post: {

    /**
     * Sends an HTTP POST request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024574}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024574.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested.
     * @param [options.headers] The HTTP headers.
     * @param [options.body] The POST data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." The URL specified in the `options.url` parameter must be a fully qualified URL.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}." The `options.body` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): http.ClientResponse;

    /**
     * Sends an HTTP POST request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440816463}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440816463.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested.
     * @param [options.headers] The HTTP headers.
     * @param [options.body] The POST data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." The URL specified in the `options.url` parameter must be a fully qualified URL.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}." The `options.body` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<http.ClientResponse>;
  };

  put: {

    /**
     * Sends an HTTP PUT request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024367}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024367.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested
     * @param [options.headers] The HTTP headers.
     * @param [options.body] The PUT data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.body` or `options.url` parameter is not specified.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): http.ClientResponse;

    /**
     * Sends an HTTP PUT request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440817389}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440817389.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested
     * @param [options.headers] The HTTP headers.
     * @param [options.body] The PUT data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.body` or `options.url` parameter is not specified.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<http.ClientResponse>;
  };

  delete: {

    /**
     * Sends an HTTP DELETE request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024970}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024970.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested
     * @param [options.headers] The HTTP headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): http.ClientResponse;

    /**
     * Sends an HTTP DELETE request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440810687}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440810687.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.url The HTTP URL being requested
     * @param [options.headers] The HTTP headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<http.ClientResponse>;
  };

  request: {

    /**
     * Sends an HTTP request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024227}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024227.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.method The HTTP request method. Set using `http.Method`.
     * @param options.url The HTTP URL being requested
     * @param [options.headers] The HTTP headers.
     * @param [options.body] The body content to send in the HTTP request.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.method` or `options.url` parameter is not specified.
     */
    (options: {
      method: http.Method | https.Method | `${http.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): http.ClientResponse;

    /**
     * Sends an HTTP request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440816259}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440816259.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Client and server scripts
     *
     * @param options
     * @param options.method The HTTP request method. Set using `http.Method`.
     * @param options.url The HTTP URL being requested
     * @param [options.headers] The HTTP headers.
     * @param [options.body] The body content to send in the HTTP request.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTP/HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.method` or `options.url` parameter is not specified.
     */
    promise(options: {
      method: http.Method | https.Method | `${http.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<http.ClientResponse>;
  };
}

declare namespace http {

  /**
   * Holds the string values for supported HTTP requests.
   * Use this enum to set the value of method parameter in `http.request(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426027649}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426027649.html}
   *
   * @since 2015.2
   * @restriction Client and server scripts
   */
  export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    /** @since 2026.1 */
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
  }

  /**
   * Holds the string values for supported cache durations.
   * Use this enum to set the value of the type parameter in `ServerResponse.setCdnCacheable(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426027147}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426027147.html}
   *
   * @since 2015.2
   * @restriction Client and server scripts
   */
  export enum CacheDuration {
    UNIQUE = 'UNIQUE',
    SHORT = 'SHORT',
    MEDIUM = 'MEDIUM',
    LONG = 'LONG',
  }

  /**
   * Holds the string values for supported NetSuite resources that you can redirect to.
   * Use this enum to set the value of the type parameter for `ServerResponse.sendRedirect(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1492804577}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1492804577.html}
   *
   * @since 2015.2
   * @restriction Client and server scripts
   */
  export enum RedirectType {
    RECORD = 'RECORD',
    SUITELET = 'SUITELET',
    RESTLET = 'RESTLET',
    MEDIA_ITEM = 'MEDIAITEM',
    TASK_LINK = 'TASKLINK',
  }

  /**
   * The response from the server to an HTTP request (for example, `http.get(options)`) from a client.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4299069814}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4299069814.html}
   *
   * @since 2015.2
   * @restriction Server scripts
   */
  export interface ClientResponse {

    /**
     * The client HTTP response or status code.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314732346}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314732346.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly code: number;

    /**
     * The response header or headers.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314733103}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314733103.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * The client response body.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314733286}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314733286.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly body: string;

    /**
     * Returns the object type name (http.ClientResponse)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * The HTTP request information set to an HTTP server. For example, a request received by a Suitelet or RESTlet.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314608702}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314608702.html}
   *
   * @since 2015.2
   * @restriction Server scripts
   */
  export interface ServerRequest {

    /**
     * The header information included in the http call. This object represents a series of name:value pairs. Each pair represents a request header name and its value.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314803549}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314803549.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * The remote client IP address.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158232403519}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158232403519.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly clientIpAddress: string;

    /**
     * The server request parameters, as name:value pairs. Note that if the server request is a Get request, parameters are sent as part of the URL. If the server request is a Post request, parameters are sent within the request body.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314803781}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314803781.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly parameters: Record<string, string>;

    /**
     * The server request files.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314805947}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314805947.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly files: Record<string, file.File>;

    /**
     * The server request body.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314806583}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314806583.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly body: string;

    /**
     * The server request HTTP method.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314807135}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314807135.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly method: http.Method | https.Method | `${http.Method}`;

    /**
     * The server request URL.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314807784}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314807784.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly url: string;

    /**
     * Returns the number of lines in a sublist.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314815897}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314815897.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.group The sublist internal ID.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.group` parameter is not specified.
     */
    getLineCount(options: {
      group: string,
    }): number;

    /**
     * Returns the value of a sublist line item.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314828231}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314828231.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.group The sublist internal ID.
     * @param options.line The sublist line number. Sublist index starts at 0.
     * @param options.name The name of the field.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.group`, `options.line`, or the `options.name` parameter is not specified.
     */
    getSublistValue(options: {
      group: string,
      name: string,
      line: number,
    }): string;

    /**
     * Returns the object type name (http.ServerRequest)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * The response from an HTTP server (for example, Suitelet or RESTlet) to an HTTP request from a server, such as a user event script.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314609319}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314609319.html}
   *
   * @since 2015.2
   * @restriction Server scripts
   */
  export interface ServerResponse {

    /**
     * The server response headers.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4314846555}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314846555.html}
     *
     * @since 2015.2
     * @restriction Server scripts
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * Sets the value of a response header.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4315325840}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4315325840.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.name The name of the header.
     * @param options.value The value used to set the header.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER "One or more headers are not valid." The header name or value is invalid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.name` or `options.value` parameter is not specified.
     */
    setHeader(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Adds a header to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4315356945}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4315356945.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.name The name of the header.
     * @param options.value The value used to set the header.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER "One or more headers are not valid." The header name or value is invalid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.name` or `options.value` parameter is not specified.
     */
    addHeader(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Returns the value or values of a response header. If multiple values are assigned to the header name, the values are returned as an Array.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4321649843}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4321649843.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.name The name of the header.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.name` parameter is not specified.
     */
    getHeader<T extends string | string[]>(options: {
      name: string,
    }): T;

    /**
     * Sets the redirect URL by resolving to a NetSuite resource.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4315616450}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4315616450.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.identifier The primary ID for this resource. The value you use varies depending on the value of `options.type`, as follows:
     * @param options.type The type of resource redirected to.
     * @param [options.editMode] Applicable when redirecting to a record resource.
     * @param [options.id] The secondary ID for this resource. If the `options.type` parameter is set to SUITELET or RESTLET, use the deployment ID. If the `options.type` parameter is set to RECORD, you can use the internal ID of a specific record instance.
     * @param [options.parameters] Additional URL parameters as name:value pairs.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE "Type argument {type} is not a valid record or is not available in your account. Please see the documentation for a list of supported record types." The redirect type is set to record, and an invalid record type is input for `options.identifier`.
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 "You have provided an invalid script id or internal id: {id}" The type is set to Suitelet or RESTlet, and an invalid script ID or invalid deployment ID is input for `options.identifier` or `options.id`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TASK_ID "The task ID: {id} is not valid. Please refer to the documentation for a list of supported task IDs." The type is set to task link, and an invalid task ID is input for `options.identifier`.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY "The `options.type`: {type} is not valid. Please use `http.RedirectType` for supported types." The script uses an unrecognizable string value for the `options.type` parameter. To avoid this error, use `http.RedirectType`.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.identifier` or `options.type` parameter is not specified. Note that this error is thrown if an enum is misspelled within a script. For example, you see this error if you use `http.RedirectType.TASKLINK` instead of `http.RedirectType.TASK_LINK` in the `options.type` field.
     */
    sendRedirect(options: {
      type: RedirectType | `${RedirectType}`,
      identifier: string,
      id?: string,
      editMode?: boolean,
      parameters?: Record<string, string>,
    }): void;

    /**
     * Writes information (text, xml, html) to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4316382571}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4316382571.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param output The string being written.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.output` parameter is not specified.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE "{param name}" The value input for `options.output` is not a string.
     */
    write(output: string): void;

    /**
     * Writes information (text, xml, html) to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4316382571}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4316382571.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.output The string being written.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.output` parameter is not specified.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE "{param name}" The value input for `options.output` is not a string.
     */
    write(options: {
      output: string,
    }): void;

    /**
     * Writes line information (text, xml, html) to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4316493873}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4316493873.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param output The string being written.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.output` parameter is not specified.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE "{param name}" The value input for `options.output` is not a string.
     */
    writeLine(output: string): void;

    /**
     * Writes line information (text, xml, html) to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4316493873}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4316493873.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.output The string being written.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.output` parameter is not specified.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE "{param name}" The value input for `options.output` is not a string.
     */
    writeLine(options: {
      output: string,
    }): void;

    /**
     * Generates a page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426014272}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426014272.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param assistant A standalone page Object in the form of an assistant.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.pageObject` parameter is not specified.
     */
    writePage(assistant: serverWidget.Assistant): void;

    /**
     * Generates a page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426014272}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426014272.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param form A standalone page Object in the form of a form.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.pageObject` parameter is not specified.
     */
    writePage(form: serverWidget.Form): void;

    /**
     * Generates a page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426014272}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426014272.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param list A standalone page Object in the form of a list.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.pageObject` parameter is not specified.
     */
    writePage(list: serverWidget.List): void;

    /**
     * Generates a page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426014272}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426014272.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.pageObject A standalone page Object in the form of an assistant, form, or list.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.pageObject` parameter is not specified.
     */
    writePage(options: {
      pageObject: serverWidget.Assistant | serverWidget.Form | serverWidget.List,
    }): void;

    /**
     * Writes a file to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426015540}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426015540.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.file A file.File Object that encapsulates the file to be written.
     * @param [options.isInline] If true, the file is inline.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.file` parameter is not specified.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE "{param name}" The value input for `options.file` is not a `file.File` object.
     */
    writeFile(options: {
      file: file.File,
      isInline?: boolean,
    }): void;

    /**
     * Generates and renders a PDF directly to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426014776}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426014776.html}
     *
     * @since 2015.2
     * @governance 10 units
     * @restriction Server scripts
     *
     * @param options
     * @param options.xmlString Content of the PDF.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.xmlString` parameter is not specified.
     */
    renderPdf(options: {
      xmlString: string,
    }): void;

    /**
     * Sets CDN caching for a period of time.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426015213}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426015213.html}
     *
     * @since 2015.2
     * @governance none
     * @restriction Server scripts
     *
     * @param options
     * @param options.type The value of the caching duration. Use `http.CacheDuration` to set this value.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.type` parameter is not specified.
     */
    setCdnCacheable(options: {
      type: CacheDuration | `${CacheDuration}`,
    }): void;

    /**
     * Returns the object type name (http.ServerResponse)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }
}