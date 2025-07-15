/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./https.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

/**
 * SuiteScript http module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296361104}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296361104.html}
 *
 * @module N/http
 * @NApiVersion 2.x
 */
interface http {

  get: {

    /**
     * Send a HTTP GET request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024767}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024767.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): http.ClientResponse;

    /**
     * Send a HTTP GET request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440810374}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440810374.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<http.ClientResponse>;
  };

  post: {

    /**
     * Send a HTTP POST request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024574}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024574.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     * @param options.body POST data
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): http.ClientResponse;

    /**
     * Send a HTTP POST request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440816463}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440816463.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param config.body POST data
     * @param [options.headers] request HTTP headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): Promise<http.ClientResponse>;
  };

  put: {

    /**
     * Send a HTTP PUT request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024367}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024367.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     * @param options.body PUT data
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): http.ClientResponse;

    /**
     * Send a HTTP PUT request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440817389}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440817389.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     * @param options.body PUT data
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): Promise<http.ClientResponse>;
  };

  delete: {

    /**
     * Send a HTTP DELETE request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024970}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024970.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): http.ClientResponse;

    /**
     * Send a HTTP DELETE request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440810687}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440810687.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<http.ClientResponse>;
  };

  request: {

    /**
     * Send a HTTP request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4426024227}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4426024227.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.method HTTP method of the request
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     * @param [options.body] POST data; must be present if and only if method is POST
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      method: http.Method | https.Method | `${http.Method | https.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): http.ClientResponse;

    /**
     * Send a HTTP request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440816259}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440816259.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.method HTTP method of the request
     * @param options.url the HTTP URL being requested
     * @param [options.headers] request HTTP headers
     * @param [options.body] POST data; must be present if and only if method is POST
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      method: http.Method | https.Method | `${http.Method | https.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<http.ClientResponse>;
  };
}

declare namespace http {

  /**
   * Enum describing available HTTP methods
   */
  export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
  }

  /**
   * Enum describing available commerce API cache durations
   */
  export enum CacheDuration {
    UNIQUE = 'UNIQUE',
    SHORT = 'SHORT',
    MEDIUM = 'MEDIUM',
    LONG = 'LONG',
  }

  /**
   * Enum describing available redirect types
   */
  export enum RedirectType {
    RECORD = 'RECORD',
    SUITELET = 'SUITELET',
    RESTLET = 'RESTLET',
    MEDIA_ITEM = 'MEDIAITEM',
    TASK_LINK = 'TASKLINK',
  }

  /**
   * Return a new instance of ClientResponse used to store the result of a HTTP request.
   *
   * @protected
   * @classDescription Encapsulation of the response returned by a web server as a response to our HTTP request
   * @constructor
   *
   * @since 2015.2
   */
  export interface ClientResponse {

    /**
     * Response code
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly code: number;

    /**
     * Response headers
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * Response body
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
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
   * Return a new instance of ServerRequest object that carries incoming HTTP request info.
   *
   * @classDescription Encapsulation of the HTTP request incoming to the suitelet.
   * @constructor
   *
   * @since 2015.2
   */
  export interface ServerRequest {

    /**
     * Server request headers
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * Server request clientIpAddress
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly clientIpAddress: string;

    /**
     * Server request parameters
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly parameters: Record<string, string>;

    /**
     * Server request files
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly files: Record<string, file.File>;

    /**
     * Server request body
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly body: string;

    /**
     * Server request HTTP method
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly method: http.Method | https.Method | `${http.Method | https.Method}`;

    /**
     * Server request URL
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly url: string;

    /**
     * Returns the number of lines in a sublist
     *
     * @param options
     * @param options.group sublist internal ID
     * @return the integer value of the number of line items in the sublist
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getLineCount(options: {
      group: string,
    }): number;

    /**
     * Returns the value of a sublist line item
     *
     * @param options
     * @param options.group sublist internal ID
     * @param options.name the name of the field whose value is returned
     * @param options.line the line number for this field (1-based)
     * @return the string value of the line item
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
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
   * Return a new instance of ServerResponse object that carries the response to an incoming HTTP request
   *
   * @classDescription Encapsulation of the HTTP response that will be returned to the browser
   * @constructor
   *
   * @since 2015.2
   */
  export interface ServerResponse {

    /**
     * Server response headers. Key/value pairs with all the headers.
     * If multiple values are assigned to one header name, they are returned as an array
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * Sets the value of a response header
     *
     * @param options
     * @param options.name the name of the header
     * @param options.value the value used to set the header
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    setHeader(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Adds a header to the response. If this header has already been set, this will add another line for that header.
     *
     * @param options
     * @param options.name the name of the header
     * @param options.value the value used to set the header
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    addHeader(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with custparam.
     *
     * @param options
     * @param options.type the base type for this resource - one of RECORD, TASKLINK or SUITELET
     * @param options.identifier the primary id for this resource
     * @param [options.id] the secondary id for this resource
     * @param [options.editMode] for RECORD calls, this determines whether to return a URL for the record in edit mode or view mode
     * @param [options.parameters] additional URL parameters as name/value pairs
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY if type is none of RECORD, TASKLINK or SUITELET
     * @throws {error.SuiteScriptError} SSS_INVALID_TASK_ID if type is TASKLINK and an invalid task identifier is passed in the options.identifier parameter
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if type is RECORD and an invalid record type is passed in the options.identifier parameter
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if type is SUITELET and an invalid script ID and deployment ID are passed in the options.identifier and options.id parameters
     */
    sendRedirect(options: {
      type: string,
      identifier: string,
      id?: string,
      editMode?: boolean,
      parameters?: {
        [p: string]: string,
      },
    }): void;

    /**
     * Write information (text/xml/html) to the response
     *
     * @param output string or file being written
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    write(output: string): void;

    /**
     * Write information (text/xml/html) to the response
     *
     * @param options
     * @param options.output string or file being written
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    write(options: {
      output: string,
    }): void;

    /**
     * Write line information (text/xml/html) to the response
     *
     * @param output string being written
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    writeLine(output: string): void;

    /**
     * Write line information (text/xml/html) to the response
     *
     * @param options
     * @param options.output string being written
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    writeLine(options: {
      output: string,
    }): void;

    /**
     * Generates a page using a page element object
     *
     * @param assistant standalone page object: assistant, form or list
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(assistant: serverWidget.Assistant): void;

    /**
     * Generates a page using a page element object
     *
     * @param form standalone page object: assistant, form or list
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(form: serverWidget.Form): void;

    /**
     * Generates a page using a page element object
     *
     * @param list standalone page object: assistant, form or list
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(list: serverWidget.List): void;

    /**
     * Generates a page using a page element object
     *
     * @param options
     * @param options.pageObject standalone page object: assistant, form or list
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(options: {
      pageObject: serverWidget.Assistant | serverWidget.Form | serverWidget.List,
    }): void;

    /**
     * Write a file to the response
     *
     * @param options
     * @param options.file the file to be written
     * @param [options.isInline] true if the file is inline
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a file.File object
     */
    writeFile(options: {
      file: file.File,
      isInline?: boolean,
    }): void;

    /**
     * Returns the value for a header returned in the response
     *
     * @param options
     * @param options.name the header name
     * @return the value of the header; if multiple values are assigned to the header name, they are returned as an array
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getHeader<T extends string | string[]>(options: {
      name: string,
    }): T;

    /**
     * Generates and renders a PDF directly to the response
     *
     * @param options
     * @param options.xmlString content of your PDF
     *
     * @governance 10 units
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    renderPdf(options: {
      xmlString: string,
    }): void;

    /**
     * Sets CDN caching for a period of time
     *
     * @param options
     * @param options.type constant value to represent the caching duration, see http.CacheDuration enum
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
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