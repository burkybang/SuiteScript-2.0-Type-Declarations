/// <reference path="../typings.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />
/// <reference path="./crypto.d.ts" />

/**
 * SuiteScript https module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418229131.html}
 *
 * @module N/https
 * @NApiVersion 2.x
 */
interface https {

  /**
   * Send a HTTPS GET request and return server response.
   *
   * @governance 10 units
   * @restriction Server SuiteScript only
   *
   * @param {Object} options
   * @param {string} options.url the HTTPS URL being requested
   * @param {Object<string, string>} [options.headers] request HTTPS headers
   * @return {ClientResponse}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
   *
   * @since 2015.2
   */
  // function getHttps() {}
  // getHttps.prototype.promise = function() {};
  // https.prototype['get'] = new getHttps();
  get(options: {
    url: string,
    headers?: {
      [key: string]: string,
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
   * @param {Object<string, string>} [options.headers] request HTTPS headers
   * @return {ClientResponse}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
   *
   * @since 2015.2
   */
  // function postHttps() {}
  // postHttps.prototype.promise = function() {};
  // post = new postHttps();
  post(options: {
    url: string,
    body: string | Object,
    headers?: {
      [key: string]: string,
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
   * @param {Object<string, string>} [options.headers] request HTTPS headers
   * @return {ClientResponse}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
   *
   * @since 2015.2
   */
  // function putHttps() {}
  // putHttps.prototype.promise = function() {};
  // put = new putHttps();
  put(options: {
    url: string,
    body: string | Object,
    headers?: {
      [key: string]: string,
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
   * @param {Object<string, string>} [options.headers] request HTTPS headers
   * @return {ClientResponse}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
   *
   * @since 2015.2
   */
  // function deleteHttps() {}
  // deleteHttps.prototype.promise = function() {};
  // https.prototype['delete'] = new deleteHttps();
  delete(options: {
    url: string,
    headers?: {
      [key: string]: string,
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
   * @param {Object<string, string>} [options.headers] request HTTPS headers
   * @return {ClientResponse}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: https in the HTTP module)
   *
   * @since 2015.2
   */
  // function requestHttps() {}
  // requestHttps.prototype.promise = function() {};
  // request = new requestHttps();
  request(options: {
    method: https.Method,
    url: string,
    body?: string | Object,
    headers?: {
      [key: string]: string,
    },
  }): https.ClientResponse

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
  }): crypto_.SecretKey

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
  }): https.SecureString
}

declare namespace https {

  /**
   * Enum describing available HTTPS methods.
   * @enum {string}
   * @readonly
   */
  export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
  }

  /**
   * Enum describing available commerce API cache durations.
   * @enum {string}
   * @readonly
   */
  export enum CacheDuration {
    UNIQUE = 'UNIQUE',
    SHORT = 'SHORT',
    MEDIUM = 'MEDIUM',
    LONG = 'LONG',
  }

  /**
   * Enum describing available redirect types
   * @enum {string}
   * @readonly
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
   * @enum {string}
   * @readonly
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
   * @enum {string}
   * @readonly
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
     * Response code.
     * @name ClientResponse#code
     * @type {number}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    code: number

    /**
     * Response headers.
     * @name ClientResponse#headers
     * @type {Object<string, string>}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    headers: {
      [key: string]: string,
    }

    /**
     * Response body.
     * @name ClientResponse#body
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    body: string

    /**
     * Returns the object type name (https.ClientResponse)
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
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
     * Server request headers.
     * @name ServerRequest#headers
     * @type {Object<string, string>}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    headers: {
      [key: string]: string,
    }

    /**
     * Server request clientIpAddress.
     * @name ServerRequest#clientIpAddress
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    clientIpAddress: string

    /**
     * Server request parameters.
     * @name ServerRequest#parameters
     * @type {Object<string, string>}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    parameters: {
      [key: string]: string,
    }

    /**
     * Server request files.
     * @name ServerRequest#files
     * @type {Object<string, *>}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    files: {
      [key: string]: any,
    }

    /**
     * Server request body.
     * @name ServerRequest#body
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    body: string

    /**
     * Server request HTTPS method.
     * @name ServerRequest#method
     * @type {Method}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    method: Method

    /**
     * Server request URL.
     * @name ServerRequest#url
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    url: string

    /**
     * Returns the number of lines in a sublist.
     * @param {Object} options
     * @param {string} options.group sublist internal ID
     * @return {number} the integer value of the number of line items in the sublist
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getLineCount(options: {
      group: string,
    }): number

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
    }): string

    /**
     * Returns the object type name (https.ServerRequest)
     *
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
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
     * Server response headers.
     * @name ServerResponse#headers
     * @type {Object<string, string>}
     * @return {Object} key/value pairs with all the headers; if multiple values are assigned to one header name, they are returned as an array
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    headers: {
      [key: string]: string,
    }

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
    }): void

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
    }): void

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
        [key: string]: string,
      }
    }): void

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
    }): void

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
    }): void

    /**
     * Generates a page using a page element object.
     * @param {Object} options
     * @param {serverWidget.Assistant|serverWidget.Form|serverWidget.List} options.pageObject standalone page object: assistant, form or list
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(options: {
      pageObject: serverWidget.Assistant | serverWidget.Form | serverWidget.List,
    }): void

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
    }): void

    /**
     * Returns the value for a header returned in the response.
     * @param {Object} options
     * @param {string} options.name the header name
     * @return {string|string[]} the value of the header; if multiple values are assigned to the header name, they are returned as an array
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getHeader(options: {
      name: string,
    }): string | string[]

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
    }): void

    /**
     * Sets CDN caching for a period of time.
     * @param {Object} options
     * @param {https.CacheDuration} options.type constant value to represent the caching duration, see https.CacheDuration enum
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    setCdnCacheable(options: {
      type: CacheDuration,
    }): void

    /**
     * Returns the object type name (https.ServerResponse)
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  export interface SecureString {

    /**
     * @param {Object} options
     * @param {https.SecureString} options.secureString
     * @return {https.SecureString}
     */
    appendSecureString(options: {
      secureString: https.SecureString,
    }): https.SecureString

    /**
     * @param {Object} options
     * @param {string} options.input
     * @param {https.Encoding} options.inputEncoding
     * @return {https.SecureString}
     */
    appendString(options: {
      input: string,
      inputEncoding: https.Encoding,
    }): https.SecureString

    /**
     * @param {Object} options
     * @param {https.Encoding} options.toEncoding
     * @return {https.SecureString}
     */
    convertEncoding(options: {
      toEncoding: https.Encoding,
    }): https.SecureString

    /**
     * @param {Object} options
     * @param {https.HashAlg} options.algorithm
     * @return {https.SecureString}
     */
    hash(options: {
      algorithm: https.HashAlg,
    }): https.SecureString

    /**
     * @param {Object} options
     * @param {https.HashAlg} options.algorithm
     * @param {crypto_.SecretKey} options.key
     * @return {https.SecureString}
     */
    hmac(options: {
      algorithm: https.HashAlg,
      key: crypto_.SecretKey,
    }): https.SecureString
  }
}