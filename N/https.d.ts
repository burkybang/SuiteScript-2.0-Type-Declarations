/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./http.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />
/// <reference path="./crypto.d.ts" />

/**
 * SuiteScript https module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418229131}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418229131.html}
 *
 * @module N/https
 * @NApiVersion 2.x
 */
interface https {

  get: {

    /**
     * Send a HTTPS GET request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567631366}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567631366.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): https.ClientResponse;

    /**
     * Send a HTTPS GET request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619547935}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619547935.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<https.ClientResponse>;
  };

  post: {

    /**
     * Send a HTTPS POST request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567628658}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567628658.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     * @param options.body POST data
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): https.ClientResponse;

    /**
     * Send a HTTPS POST request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619553255}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619553255.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     * @param options.body POST data
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): Promise<https.ClientResponse>;
  };

  put: {

    /**
     * Send a HTTPS PUT request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567627984}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567627984.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     * @param options.body PUT data
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): https.ClientResponse;

    /**
     * Send a HTTPS PUT request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619558092}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619558092.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     * @param options.body PUT data
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      body: string | Object,
    }): Promise<https.ClientResponse>;
  };

  delete: {

    /**
     * Send a HTTPS DELETE request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567631039}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567631039.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): https.ClientResponse;

    /**
     * Send a HTTPS DELETE request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619548807}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619548807.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<https.ClientResponse>;
  };

  request: {

    /**
     * Send a HTTPS request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567630582}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567630582.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.method HTTPS method of the request
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     * @param [options.body] POST data; must be present if and only if method is POST
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      method: https.Method | http.Method | `${https.Method | http.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Send a HTTPS request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619550220}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619550220.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.method HTTPS method of the request
     * @param options.url the HTTPS URL being requested
     * @param [options.headers] request HTTPS headers
     * @param [options.body] POST data; must be present if and only if method is POST
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    promise(options: {
      method: https.Method | http.Method | `${https.Method | http.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  requestSuitelet: {

    /**
     * Send a HTTPS request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_44162330742}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_44162330742.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.scriptId The script ID of the script record
     * @param options.deploymentId The script ID of the script deployment record
     * @param [options.external] Specifies whether to perform the request as an unauthenticated user; this case uses the Online Form User role
     * @param [options.method] HTTPS method of the request. The default value is GET if options.body is not specified, and POST if options.body is specified
     * @param [options.headers] HTTPS headers
     * @param [options.urlParams] Parameters to be appended to the target URL as a query string
     * @param [options.body] POST data; must be present if and only if method is POST or PUT
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      scriptId: string,
      deploymentId: string,
      external?: boolean,
      method?: https.Method | http.Method | `${https.Method | http.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Send a HTTPS request and return server response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_95100734176}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_95100734176.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.scriptId The internal ID or script ID of the script record
     * @param options.deploymentId The script ID of the script deployment record
     * @param [options.method=https.Method.GET] HTTPS method of the request
     * @param [options.headers] Request HTTPS headers
     * @param [options.urlParams] The parameters to be appended to the target URL as a query string
     * @param [options.body] The PUT/POST data. This is ignored if the options.method is not POST or PUT
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    promise(options: {
      scriptId: string,
      deploymentId: string,
      method?: https.Method | http.Method | `${https.Method | http.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  requestRestlet: {

    /**
     * Sends an HTTPS request to a RESTlet and returns the response. Authentication headers are automatically added
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159139340774}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159139340774.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.scriptId The internal ID or script ID of the script record
     * @param options.deploymentId The script ID of the script deployment record
     * @param [options.method=https.Method.GET] HTTPS method of the request
     * @param [options.headers] Request HTTPS headers
     * @param [options.urlParams] The parameters to be appended to the target URL as a query string
     * @param [options.body] The PUT/POST data. This is ignored if the options.method is not POST or PUT
     *
     * @throws {error.SuiteScriptError} INVALID_SCRIPT_DEPLOYMENT_ID_1 If the options.deploymentId parameter does not reference a valid deployment for the script.
     * @throws {error.SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED The authorization header is set.
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER The options.headers parameter is in an invalid format or contains an invalid header.
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 The options.scriptId parameter does not reference a RESTlet script.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_PARAMS The options.urlParams parameter is in an invalid format.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The options.body, options.deploymentID, or options.scriptID parameter is not specified.
     *
     * @since 2020.2
     */
    (options: {
      scriptId: string,
      deploymentId: string,
      method?: https.Method | http.Method | `${https.Method | http.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS request to a RESTlet and returns the response. Authentication headers are automatically added
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_95165853712}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_95165853712.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.scriptId The internal ID or script ID of the script record
     * @param options.deploymentId The script ID of the script deployment record
     * @param [options.method=https.Method.GET] HTTPS method of the request
     * @param [options.headers] Request HTTPS headers
     * @param [options.body] The PUT/POST data. This is ignored if the options.method is not POST or PUT
     * @param [options.urlParams] The parameters to be appended to the target URL as a query string
     *
     * @throws {error.SuiteScriptError} INVALID_SCRIPT_DEPLOYMENT_ID_1 If the options.deploymentId parameter does not reference a valid deployment for the script.
     * @throws {error.SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED The authorization header is set.
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER The options.headers parameter is in an invalid format or contains an invalid header.
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 The options.scriptId parameter does not reference a RESTlet script.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_PARAMS The options.urlParams parameter is in an invalid format.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The options.body, options.deploymentID, or options.scriptID parameter is not specified.
     *
     * @since 2020.2
     */
    promise(options: {
      scriptId: string,
      deploymentId: string,
      external?: boolean,
      method?: https.Method | http.Method | `${https.Method | http.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  /**
   * Creates and returns a crypto.SecretKey Object. This method can take a GUID OR a secret.
   * You cannot use both the `guid` parameter and `secret` parameter in combination.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418247967}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418247967.html}
   *
   * @param options
   * @param options.guid Required if `secret` is not specified. A GUID used to generate a secret key. Use Form.addCredentialField(options) to generate a GUID.
   * @param [options.encoding] Specifies the encoding for the Secret Key
   */
  createSecretKey(options: {
    guid: string,
    encoding?: https.Encoding | `${https.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Creates and returns a crypto.SecretKey Object. This method can take a GUID OR a secret.
   * You cannot use both the `guid` parameter and `secret` parameter in combination.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418247967}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418247967.html}
   *
   * @param options
   * @param options.secret Required if `guid` is not specified. The script ID of the secret used for authentication. You can store secrets at Setup > Company > API Secrets.
   * @param [options.encoding] Specifies the encoding for the Secret Key
   */
  createSecretKey(options: {
    secret: string,
    encoding?: https.Encoding | `${https.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Creates and returns an https.SecureString. The input for the secure string can be a GUID or a secret
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418247967}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418247967.html}
   *
   * @param options
   * @param options.input The string to convert to a https.SecureString
   * @param [options.inputEncoding=https.Encoding.UTF_8] Identifies the encoding that the input string uses
   */
  createSecureString(options: {
    input: string,
    inputEncoding?: https.Encoding | `${https.Encoding}`,
  }): https.SecureString;
}

declare namespace https {

  /**
   * Enum describing available HTTPS methods
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
   * Enum describing available encodings
   */
  export enum Encoding {
    UTF_8 = 'UTF_8',
    BASE_16 = 'BASE_16',
    BASE_32 = 'BASE_32',
    BASE_64 = 'BASE_64',
    BASE_64_URL_SAFE = 'BASE_64_URL_SAFE',
    HEX = 'HEX',
  }

  /**
   * Enum describing available hashing algorithms
   */
  export enum HashAlg {
    SHA1 = 'SHA1',
    SHA256 = 'SHA256',
    SHA512 = 'SHA512',
    MD5 = 'MD5',
  }

  /**
   * Return a new instance of ClientResponse used to store the result of a HTTPS request.
   *
   * @protected
   * @classDescription Encapsulation of the response returned by a web server as a response to our HTTPS request
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
     * Returns the object type name (https.ClientResponse)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Return a new instance of ServerRequest object that carries incoming HTTPS request info.
   *
   * @classDescription Encapsulation of the HTTPS request incoming to the suitelet
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
     * Server request HTTPS method
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly method: Method | http.Method | `${Method | http.Method}`;

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
     * Returns the object type name (https.ServerRequest)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Return a new instance of ServerResponse object that carries the response to an incoming HTTPS request
   *
   * @classDescription Encapsulation of the HTTPS response that will be returned to the browser
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
     * Adds a header to the response. If this header has already been set, this will add another line for that header
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
      parameters?: Record<string, string>,
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
    getHeader(options: {
      name: string,
    }): string | string[];

    /**
     * Generates and renders a PDF directly to the response
     *
     * @governance 10 units
     *
     * @param options
     * @param options.xmlString content of your PDF
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    renderPdf(options: {
      xmlString: string,
    }): void;

    /**
     * Sets CDN caching for a period of time
     *
     * @param options
     * @param options.type constant value to represent the caching duration, see https.CacheDuration enum
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    setCdnCacheable(options: {
      type: CacheDuration | `${CacheDuration}`,
    }): void;

    /**
     * Returns the object type name (https.ServerResponse)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface SecureString {

    /**
     * @param options
     * @param options.secureString
     */
    appendSecureString(options: {
      secureString: SecureString,
    }): SecureString;

    /**
     * @param options
     * @param options.input
     * @param options.inputEncoding
     */
    appendString(options: {
      input: string,
      inputEncoding: Encoding | `${Encoding}`,
    }): SecureString;

    /**
     * @param options
     * @param options.toEncoding
     */
    convertEncoding(options: {
      toEncoding: Encoding | `${Encoding}`,
    }): SecureString;

    /**
     * @param options
     * @param options.algorithm
     */
    hash(options: {
      algorithm: HashAlg | `${HashAlg}`,
    }): SecureString;

    /**
     * @param options
     * @param options.algorithm
     * @param options.key
     */
    hmac(options: {
      algorithm: HashAlg | `${HashAlg}`,
      key: crypto_.SecretKey,
    }): SecureString;
  }
}