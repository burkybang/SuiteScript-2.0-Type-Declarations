/// <reference path="../typings.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />
/// <reference path="./crypto.d.ts" />

/**
 * SuiteScript https module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418229131}
 *
 * @module N/https
 * @NApiVersion 2.x
 */
interface https {

  get: {

    /**
     * Send a HTTPS GET request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: {
        [p: string]: string | number,
      },
    }): https.ClientResponse

    /**
     * Send a HTTPS GET request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {Promise<http.ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
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
     * Send a HTTPS POST request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} options.body POST data
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      body: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): https.ClientResponse

    /**
     * Send a HTTPS POST request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} options.body POST data
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
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
     * Send a HTTPS PUT request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} options.body PUT data
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      body: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): https.ClientResponse

    /**
     * Send a HTTPS PUT request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} options.body PUT data
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
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
     * Send a HTTPS DELETE request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      url: string,
      headers?: {
        [p: string]: string | number,
      },
    }): https.ClientResponse

    /**
     * Send a HTTPS DELETE request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
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
     * Send a HTTPS request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {https.Method} options.method HTTPS method of the request
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} [options.body] POST data; must be present if and only if method is POST
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    (options: {
      method: https.Method,
      url: string,
      body?: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): https.ClientResponse

    /**
     * Send a HTTPS request and return server response.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {https.Method} options.method HTTPS method of the request
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} [options.body] POST data; must be present if and only if method is POST
     * @param {Object<string, string|number>} [options.headers] request HTTPS headers
     * @return {Promise<ClientResponse>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
     *
     * @since 2015.2
     */
    promise(options: {
      method: https.Method,
      url: string,
      body?: string | Object,
      headers?: {
        [p: string]: string | number,
      },
    }): Promise<http.ClientResponse>
  };

  /**
   * Sends an HTTPS request to a RESTlet and returns the response. Authentication headers are automatically added
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159139340774}
   *
   * @governance 10 units
   * @restriction Server SuiteScript only
   *
   * @param {Object} options
   * @param {string|number} options.scriptId The internal ID or script ID of the script record
   * @param {string} options.deploymentId The script ID of the script deployment record
   * @param {https.Method} [options.method=https.Method.GET] HTTPS method of the request
   * @param {Object<string, string|number>} [options.headers] Request HTTPS headers
   * @param {string|Object} [options.body] The PUT/POST data. This is ignored if the options.method is not POST or PUT
   * @param {Object<string, string|number>} [options.urlParams] The parameters to be appended to the target URL as a query string
   * @return {https.ClientResponse}
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
  requestRestlet(options: {
    scriptId: string | number,
    deploymentId: string,
    method?: https.Method,
    headers?: {
      [p: string]: string | number,
    },
    body?: string | Object,
    urlParams?: {
      [p: string]: string | number,
    },
  }): https.ClientResponse;

  /**
   *
   * @param {Object} options
   * @param {string} options.guid
   * @param {https.Encoding} [options.encoding]
   * @return {crypto_.SecretKey}
   *
   * .promise
   */
  createSecureKey(options: {
    guid: string,
    encoding?: https.Encoding,
  }): crypto_.SecretKey;

  /**
   *
   * @param {Object} options
   * @param {string} options.input
   * @param {https.Encoding} [options.inputEncoding] defaults to UTF_8
   * @return {https.SecureString}
   *
   * .promise
   */
  createSecureString(options: {
    input: string,
    inputEncoding?: https.Encoding,
  }): https.SecureString;
}

declare namespace https {

  /**
   * Enum describing available HTTPS methods
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
   * Enum describing available encodings
   *
   * @enum {string}
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
   *
   * @enum {string}
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
   * @classDescription Encapsulation of the response returned by a web server as a response to our HTTPS request.
   * @return {https.ClientResponse}
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
     * Returns the object type name (https.ClientResponse)
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
   * Return a new instance of ServerRequest object that carries incoming HTTPS request info.
   *
   * @classDescription Encapsulation of the HTTPS request incoming to the suitelet.
   * @return {https.ServerRequest}
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
     * Server request HTTPS method
     *
     * @type {Method}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    method: Method;

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
     * Returns the number of lines in a sublist.
     * @param {Object} options
     * @param {string} options.group sublist internal ID
     * @return {number} the integer value of the number of line items in the sublist
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getLineCount(options: {
      group: string,
    }): number;

    /**
     * Returns the value of a sublist line item.
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
     * Returns the object type name (https.ServerRequest)
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
   * Return a new instance of ServerResponse object that carries the response to an incoming HTTPS request.
   *
   * @classDescription Encapsulation of the HTTPS response that will be returned to the browser.
   * @return {https.ServerResponse}
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
      }
    }): void;

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
     * @param {https.CacheDuration} options.type constant value to represent the caching duration, see https.CacheDuration enum
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    setCdnCacheable(options: {
      type: CacheDuration,
    }): void;

    /**
     * Returns the object type name (https.ServerResponse)
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface SecureString {

    /**
     * @param {Object} options
     * @param {https.SecureString} options.secureString
     * @return {https.SecureString}
     */
    appendSecureString(options: {
      secureString: SecureString,
    }): SecureString;

    /**
     * @param {Object} options
     * @param {string} options.input
     * @param {https.Encoding} options.inputEncoding
     * @return {https.SecureString}
     */
    appendString(options: {
      input: string,
      inputEncoding: Encoding,
    }): SecureString;

    /**
     * @param {Object} options
     * @param {https.Encoding} options.toEncoding
     * @return {https.SecureString}
     */
    convertEncoding(options: {
      toEncoding: Encoding,
    }): SecureString;

    /**
     * @param {Object} options
     * @param {https.HashAlg} options.algorithm
     * @return {https.SecureString}
     */
    hash(options: {
      algorithm: HashAlg,
    }): SecureString;

    /**
     * @param {Object} options
     * @param {https.HashAlg} options.algorithm
     * @param {crypto_.SecretKey} options.key
     * @return {https.SecureString}
     */
    hmac(options: {
      algorithm: HashAlg,
      key: crypto_.SecretKey,
    }): SecureString;
  }
}