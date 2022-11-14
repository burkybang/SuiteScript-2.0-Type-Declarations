/// <reference path="../typings.d.ts" />
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
     * Send a HTTP GET request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: {
        [p: string]: string | number,
      },
    }): http.ClientResponse

    /**
     * Send a HTTP GET request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: {
        [p: string]: string | number,
      },
    }): Promise<http.ClientResponse>
  };

  post: {

    /**
     * Send a HTTP POST request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {string|Object} config.body POST data
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      body: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): http.ClientResponse

    /**
     * Send a HTTP POST request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {string|Object} config.body POST data
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      body: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): Promise<http.ClientResponse>
  };

  put: {

    /**
     * Send a HTTP PUT request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {string|Object} options.body PUT data
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      body: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): http.ClientResponse

    /**
     * Send a HTTP PUT request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {string|Object} options.body PUT data
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      body: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): Promise<http.ClientResponse>
  };

  delete: {

    /**
     * Send a HTTP DELETE request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: {
        [p: string]: string | number,
      },
    }): http.ClientResponse

    /**
     * Send a HTTP DELETE request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: {
        [p: string]: string | number,
      },
    }): Promise<http.ClientResponse>
  };

  request: {

    /**
     * Send a HTTP request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {http.Method} options.method HTTP method of the request
     * @param {string} options.url the HTTP URL being requested
     * @param {string|Object} [options.body] POST data; must be present if and only if method is POST
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    (options: {
      method: http.Method | `${http.Method}`,
      url: string,
      body?: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): http.ClientResponse

    /**
     * Send a HTTP request and return server response.
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param {Object} options
     * @param {http.Method} options.method HTTP method of the request
     * @param {string} options.url the HTTP URL being requested
     * @param {string|Object} [options.body] POST data; must be present if and only if method is POST
     * @param {Object<string, string|number>} [options.headers] request HTTP headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    promise(options: {
      method: http.Method | `${http.Method}`,
      url: string,
      body?: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): Promise<http.ClientResponse>
  };
}

declare namespace http {
  /**
   * Enum describing available HTTP methods
   *
   * @enum {string}
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
   *
   * @enum {string}
   */
  export enum CacheDuration {
    UNIQUE = 'UNIQUE',
    SHORT = 'SHORT',
    MEDIUM = 'MEDIUM',
    LONG = 'LONG',
  }

  /**
   * Enum describing available redirect types
   *
   * @enum {string}
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
   * @classDescription Encapsulation of the response returned by a web server as a response to our HTTP request.
   * @return {http.ClientResponse}
   * @constructor
   *
   * @since 2015.2
   */
  export interface ClientResponse {

    /**
     * Response code
     *
     * @type {number}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    code: number;

    /**
     * Response headers
     *
     * @type {Object<string, string>}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    headers: {
      [p: string]: string,
    };

    /**
     * Response body
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    body: string;

    /**
     * Returns the object type name (http.ClientResponse)
     *
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Return a new instance of ServerRequest object that carries incoming HTTP request info.
   *
   * @classDescription Encapsulation of the HTTP request incoming to the suitelet.
   * @return {http.ServerRequest}
   * @constructor
   *
   * @since 2015.2
   */
  export interface ServerRequest {

    /**
     * Server request headers
     *
     * @type {Object<string, string>}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    headers: {
      [p: string]: string,
    };

    /**
     * Server request clientIpAddress
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    clientIpAddress: string;

    /**
     * Server request parameters
     *
     * @type {Object<string, string>}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    parameters: {
      [p: string]: string,
    };

    /**
     * Server request files
     *
     * @type {Object<string, *>}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    files: {
      [p: string]: any,
    };

    /**
     * Server request body
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    body: string;

    /**
     * Server request HTTP method
     *
     * @type {Method}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    method: Method | `${Method}`;

    /**
     * Server request URL
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    url: string;

    /**
     * Returns the number of lines in a sublist
     * @param {Object} options
     * @param {string} options.group sublist internal ID
     * @return {number} the integer value of the number of line items in the sublist
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getLineCount(options: {
      group: string,
    }): number;

    /**
     * Returns the value of a sublist line item
     * @param {Object} options
     * @param {string} options.group sublist internal ID
     * @param {string} options.name the name of the field whose value is returned
     * @param {string} options.line the line number for this field (1-based)
     * @return {string} the string value of the line item
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getSublistValue(options: {
      group: string,
      name: string,
      line: number,
    }): string;

    /**
     * Returns the object type name (http.ServerRequest)
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Return a new instance of ServerResponse object that carries the response to an incoming HTTP request
   *
   * @classDescription Encapsulation of the HTTP response that will be returned to the browser.
   * @return {http.ServerResponse}
   * @constructor
   *
   * @since 2015.2
   */
  export interface ServerResponse {

    /**
     * Server response headers. key/value pairs with all the headers; if multiple values are assigned to one header name, they are returned as an array
     *
     * @type {Object<string, string>}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    headers: {
      [p: string]: string,
    };

    /**
     * Sets the value of a response header.
     * @param {Object} options
     * @param {string} options.name the name of the header
     * @param {string} options.value the value used to set the header
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    setHeader(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Adds a header to the response. If this header has already been set, this will add another line for that header.
     * @param {Object} options
     * @param {string} options.name the name of the header
     * @param {string} options.value the value used to set the header
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    addHeader(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with custparam.
     * @param {Object} options
     * @param {string} options.type the base type for this resource - one of RECORD, TASKLINK or SUITELET
     * @param {string} options.identifier the primary id for this resource
     * @param {string} [options.id] the secondary id for this resource
     * @param {boolean} [options.editMode] for RECORD calls, this determines whether to return a URL for the record in edit mode or view mode
     * @param {Object<string, string>} [options.parameters] additional URL parameters as name/value pairs
     * @return {void}
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
     * Write information (text/xml/html) to the response.
     * @param {string} output string or file being written
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    write(output: string): void;

    /**
     * Write information (text/xml/html) to the response.
     * @param {Object} options
     * @param {string} options.output string or file being written
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    write(options: {
      output: string,
    }): void;

    /**
     * Write line information (text/xml/html) to the response.
     * @param {string} output string being written
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    writeLine(output: string): void;

    /**
     * Write line information (text/xml/html) to the response.
     * @param {Object} options
     * @param {string} options.output string being written
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    writeLine(options: {
      output: string,
    }): void;

    /**
     * Generates a page using a page element object.
     * @param {serverWidget.Assistant} assistant standalone page object: assistant, form or list
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(assistant: serverWidget.Assistant): void;

    /**
     * Generates a page using a page element object.
     * @param {serverWidget.Form} form standalone page object: assistant, form or list
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(form: serverWidget.Form): void;

    /**
     * Generates a page using a page element object.
     * @param {serverWidget.List} list standalone page object: assistant, form or list
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(list: serverWidget.List): void;

    /**
     * Generates a page using a page element object.
     * @param {Object} options
     * @param {serverWidget.Assistant|serverWidget.Form|serverWidget.List} options.pageObject standalone page object: assistant, form or list
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(options: {
      pageObject: serverWidget.Assistant | serverWidget.Form | serverWidget.List,
    }): void;

    /**
     * Write a file to the response.
     * @param {Object} options
     * @param {file.File} options.file the file to be written
     * @param {boolean} [options.isInline] true if the file is inline
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a file.File object
     */
    writeFile(options: {
      file: file.File,
      isInline?: boolean,
    }): void;

    /**
     * Returns the value for a header returned in the response.
     * @param {Object} options
     * @param {string} options.name the header name
     * @return {string|string[]} the value of the header; if multiple values are assigned to the header name, they are returned as an array
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getHeader(options: {
      name: string,
    }): string | string[];

    /**
     * Generates and renders a PDF directly to the response.
     * @param {Object} options
     * @param {string} options.xmlString content of your PDF
     * @return {void}
     * @governance 10 units
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    renderPdf(options: {
      xmlString: string,
    }): void;

    /**
     * Sets CDN caching for a period of time.
     * @param {Object} options
     * @param {http.CacheDuration} options.type constant value to represent the caching duration, see http.CacheDuration enum
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    setCdnCacheable(options: {
      type: CacheDuration | `${CacheDuration}`,
    }): void;

    /**
     * Returns the object type name (http.ServerResponse)
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }
}