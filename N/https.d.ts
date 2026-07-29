/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./http.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />
/// <reference path="./crypto.d.ts" />

/**
 * Use the N/https module to manage content sent to a third party using HTTPS calls.
 * This module encapsulates all the functionality of the N/http Module, but does not allow the HTTP protocol.
 * You can make HTTPS calls from client and server scripts.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418229131}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418229131.html}
 */
interface https {

  get: {

    /**
     * Sends an HTTPS GET request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567631366}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567631366.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTPS URL being requested.
     * @param [options.headers] The HTTPS headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS GET request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619547935}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619547935.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTPS URL being requested.
     * @param [options.headers] The HTTPS headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<https.ClientResponse>;
  };

  post: {

    /**
     * Sends an HTTPS POST request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567628658}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567628658.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTP URL being 'posted' to.
     * @param [options.headers] The HTTPS headers.
     * @param [options.credentials] An array of string GUIDs. These GUIDS are searched for in the `options.body` of the request and are replaced by the decrypted passwords before they are sent to a third-party server.
     * @param [options.body] The POST data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." The URL specified in the `options.url` parameter must be a fully qualified URL.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}." The `options.body` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      credentials?: string[],
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS POST request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619553255}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619553255.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTP URL being 'posted' to.
     * @param [options.headers] The HTTPS headers.
     * @param [options.credentials] An array of string GUIDs. These GUIDS are searched for in the `options.body` of the request and are replaced by the decrypted passwords before they are sent to a third-party server.
     * @param [options.body] The POST data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." The URL specified in the `options.url` parameter must be a fully qualified URL.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}." The `options.body` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      credentials?: string[],
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  put: {

    /**
     * Sends an HTTPS PUT request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567627984}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567627984.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTPS URL being 'put' to.
     * @param [options.headers] The HTTPS headers.
     * @param [options.credentials] An array of string GUIDs. These GUIDS are searched for in the `options.body` of the request and are replaced by the decrypted passwords before they are sent to a third-party server.
     * @param [options.body] The PUT data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.body` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
      credentials?: string[],
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS PUT request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619558092}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619558092.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTPS URL being 'put' to.
     * @param [options.headers] The HTTPS headers.
     * @param [options.credentials] An array of string GUIDs. These GUIDS are searched for in the `options.body` of the request and are replaced by the decrypted passwords before they are sent to a third-party server.
     * @param [options.body] The PUT data.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.body` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
      credentials?: string[],
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  delete: {

    /**
     * Sends an HTTPS DELETE request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567631039}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567631039.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTPS URL being requested
     * @param [options.headers] The HTTPS headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    (options: {
      url: string,
      headers?: Record<string, string | number>,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS DELETE request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619548807}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619548807.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.url The HTTPS URL being requested
     * @param [options.headers] The HTTPS headers.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     */
    promise(options: {
      url: string,
      headers?: Record<string, string | number>,
    }): Promise<https.ClientResponse>;
  };

  request: {

    /**
     * Sends an HTTPS request.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567630582}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567630582.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.method The HTTPS request method. Use `https.Method` to set this value.
     * @param options.url The HTTPS URL being requested.
     * @param [options.headers] The HTTPS headers.
     * @param [options.credentials] An array of string GUIDs. These GUIDS are searched for in the `options.body` of the request and are replaced by the decrypted passwords before they are sent to a third-party server.
     * @param [options.body] The body content to send in the HTTPS request.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.method` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     * @throws {error.SuiteScriptError} SSS_REQUEST_TIME_EXCEEDED "The host you are trying to connect to has exceeded the maximum allowed response time." If negotiating a connection to the destination server exceeds 5 seconds, a connection timeout occurs. If transferring a payload to the server exceeds 45 seconds, a request timeout occurs.
     */
    (options: {
      method: https.Method | http.Method | `${https.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      credentials?: string[],
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS request asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4619550220}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4619550220.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.method The HTTPS request method. Use `https.Method` to set this value.
     * @param options.url The HTTPS URL being requested.
     * @param [options.headers] The HTTPS headers.
     * @param [options.credentials] An array of string GUIDs. These GUIDS are searched for in the `options.body` of the request and are replaced by the decrypted passwords before they are sent to a third-party server.
     * @param [options.body] The body content to send in the HTTPS request.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.method` or `options.url` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request. Please examine the script for a potential infinite recursion problem." A script is calling back into itself recursively using an HTTP/HTTPS request.
     * @throws {error.SuiteScriptError} SSS_REQUEST_TIME_EXCEEDED "The host you are trying to connect to has exceeded the maximum allowed response time." If negotiating a connection to the destination server exceeds 5 seconds, a connection timeout occurs. If transferring a payload to the server exceeds 45 seconds, a request timeout occurs.
     */
    promise(options: {
      method: https.Method | http.Method | `${https.Method}`,
      url: string,
      headers?: Record<string, string | number>,
      credentials?: string[],
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  requestSuitelet: {

    /**
     * Sends an HTTPS request to a Suitelet and returns the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_44162330742}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_44162330742.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2023.1
     *
     * @param options
     * @param options.scriptId The script ID of the script record.
     * @param options.deploymentId The script ID of the script deployment record.
     * @param [options.method] The HTTPS request method. Use `https.Method` to set this value.
     * @param [options.headers] The HTTPS headers.
     * @param [options.urlParams] Parameters to be appended to the target URL as a query string.
     * @param [options.body] The body content to send in the HTTPS request.
     *
     * @throws {error.SuiteScriptError} INVALID_SCRIPT_DEPLOYMENT_ID_1 The `options.deploymentId` parameter does not reference a valid deployment for the script.
     * @throws {error.SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED The authorization header is set.
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER The `options.headers` parameter is in an invalid format or contains an invalid header.
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 The `options.scriptId` parameter does not reference a Suitelet script.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_PARAMS The `options.urlParams` parameter is in an invalid format.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.deploymentId` or `options.scriptId` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED The script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTPS request.
     */
    (options: {
      scriptId: string,
      deploymentId: string,
      method?: https.Method | http.Method | `${https.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS request asynchronously to a Suitelet and returns the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_95100734176}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_95100734176.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2023.1
     *
     * @param options
     * @param options.scriptId The script ID of the script record.
     * @param options.deploymentId The script ID of the script deployment record.
     * @param [options.method] The HTTPS request method. Use `https.Method` to set this value.
     * @param [options.headers] The HTTPS headers.
     * @param [options.urlParams] Parameters to be appended to the target URL as a query string.
     * @param [options.body] The body content to send in the HTTPS request.
     *
     * @throws {error.SuiteScriptError} INVALID_SCRIPT_DEPLOYMENT_ID_1 The `options.deploymentId` parameter does not reference a valid deployment for the script.
     * @throws {error.SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED The authorization header is set.
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER The `options.headers` parameter is in an invalid format or contains an invalid header.
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 The `options.scriptId` parameter does not reference a Suitelet script.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_PARAMS The `options.urlParams` parameter is in an invalid format.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.deploymentId` or `options.scriptId` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED The script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTPS request.
     */
    promise(options: {
      scriptId: string,
      deploymentId: string,
      method?: https.Method | http.Method | `${https.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  requestRestlet: {

    /**
     * Sends an HTTPS request to a RESTlet and returns the response. Authentication headers are automatically added.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159139340774}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159139340774.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2020.2
     *
     * @param options
     * @param options.scriptId The internal ID or script ID of the script record. Specify internal ID as a number. Specify script ID as a string.
     * @param options.deploymentId The script ID of the script deployment record.
     * @param [options.method] The HTTPS method (DELETE, GET, HEAD, POST, PUT). The default value is GET if `options.body` is not specified, and POST if `options.body` is specified.
     * @param [options.headers] The HTTPS headers.
     * @param [options.urlParams] The parameters to be appended to the target URL as a query string.
     * @param [options.body] The PUT/POST data. This is ignored if the `options.method` is not POST or PUT.
     *
     * @throws {error.SuiteScriptError} INVALID_SCRIPT_DEPLOYMENT_ID_1 If the `options.deploymentId` parameter does not reference a valid deployment for the script.
     * @throws {error.SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED The authorization header is set.
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER The `options.headers` parameter is in an invalid format or contains an invalid header.
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 The `options.scriptId` parameter does not reference a RESTlet script.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_PARAMS The `options.urlParams` parameter is in an invalid format.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.body`, `options.deploymentId`, or `options.scriptId` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED The script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTPS request.
     */
    (options: {
      scriptId: string,
      deploymentId: string,
      method?: https.Method | http.Method | `${https.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): https.ClientResponse;

    /**
     * Sends an HTTPS request asynchronously to a RESTlet and returns the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_95165853712}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_95165853712.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2020.2
     *
     * @param options
     * @param options.scriptId The internal ID or script ID of the script record. Specify internal ID as a number. Specify script ID as a string.
     * @param options.deploymentId The script ID of the script deployment record.
     * @param [options.method] The HTTPS method (DELETE, GET, HEAD, POST, PUT). The default value is GET if `options.body` is not specified, and POST if `options.body` is specified.
     * @param [options.headers] The HTTPS headers.
     * @param [options.urlParams] The parameters to be appended to the target URL as a query string.
     * @param [options.body] The PUT/POST data. This is ignored if the `options.method` is not POST or PUT.
     *
     * @throws {error.SuiteScriptError} INVALID_SCRIPT_DEPLOYMENT_ID_1 If the `options.deploymentId` parameter does not reference a valid deployment for the script.
     * @throws {error.SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED The authorization header is set.
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER The `options.headers` parameter is in an invalid format or contains an invalid header.
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 The `options.scriptId` parameter does not reference a RESTlet script.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_PARAMS The `options.urlParams` parameter is in an invalid format.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.body`, `options.deploymentId`, or `options.scriptId` parameter is not specified.
     * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED The script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTPS request.
     */
    promise(options: {
      scriptId: string,
      deploymentId: string,
      external?: boolean,
      method?: https.Method | http.Method | `${https.Method}`,
      headers?: Record<string, string | number>,
      urlParams?: Record<string, string | number>,
      body?: string | Object,
    }): Promise<https.ClientResponse>;
  };

  /**
   * Sends an HTTPS request to a SuiteTalk REST endpoint and returns the response. Authentication headers are automatically added.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159139347369}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159139347369.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.url The URL of a SuiteTalk REST endpoint. It may also contain query parameters.
   * @param [options.method] The HTTPS method (DELETE, GET, HEAD, POST, PUT). The default value is GET if `options.body` is not specified, and POST if `options.body` is specified.
   * @param [options.headers] The HTTPS headers.
   * @param options.body The PUT/POST data. This is ignored if the `options.method` parameter is not POST or PUT.
   *
   * @throws {error.SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED The authorization header is set.
   * @throws {error.SuiteScriptError} SSS_INVALID_HEADER The `options.headers` parameter is in an invalid format or contains an invalid header.
   * @throws {error.SuiteScriptError} SSS_INVALID_URL If the value of the `options.url` parameter is invalid or does not reference a SuiteTalk REST endpoint.
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.body`, `options.method`, or `options.url` parameter is not specified.
   * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED The script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTPS request.
   */
  requestSuiteTalkRest(options: {
    url: string,
    method?: https.Method | http.Method | `${https.Method}`,
    headers?: Record<string, string | number>,
    body?: string | Object,
  }): https.ClientResponse;

  /**
   * Creates and returns a crypto.SecretKey Object. This method can take a GUID or a secret.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418247967}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418247967.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.guid A GUID used to generate a secret key. Use Form.addCredentialField(options) to generate a GUID.
   * @param [options.encoding] Specifies the encoding for the Secret Key.
   */
  createSecretKey(options: {
    guid: string,
    encoding?: https.Encoding | `${https.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Creates and returns a crypto.SecretKey Object. This method can take a GUID or a secret.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418247967}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418247967.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.secret The script ID of the secret used for authentication. You can store secrets at Setup > Company > API Secrets. For more information, see Secrets Management.
   * @param [options.encoding] Specifies the encoding for the Secret Key.
   */
  createSecretKey(options: {
    secret: string,
    encoding?: https.Encoding | `${https.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Creates and returns an https.SecureString. The input for the secure string can be a GUID or a secret. For more information about secrets, see Secrets Management.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418247678}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418247678.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.input The string to convert to a `https.SecureString`.
   * @param [options.inputEncoding] Identifies the encoding that the input string uses.
   */
  createSecureString(options: {
    input: string,
    inputEncoding?: https.Encoding | `${https.Encoding}`,
  }): https.SecureString;
}

declare namespace https {

  /**
   * Holds the string values for supported HTTPS requests. Use this enum to set the value of method parameter in `https.request(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567626997}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567626997.html}
   *
   * @restriction Client-side and server-side scripts
   * @since 2020.2
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
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567627367}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567627367.html}
   *
   * @restriction Client-side and server-side scripts
   * @since 2020.2
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
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1494603145}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1494603145.html}
   *
   * @restriction Server-side scripts only
   * @since 2020.2
   */
  export enum RedirectType {
    RECORD = 'RECORD',
    SUITELET = 'SUITELET',
    RESTLET = 'RESTLET',
    MEDIA_ITEM = 'MEDIAITEM',
    TASK_LINK = 'TASKLINK',
  }

  /**
   * Holds the string values for supported encoding types.
   * Use this enum to set the value of parameters in `SecureString.appendString(options)`, `SecureString.convertEncoding(options)`, `https.createSecureString(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4612521061}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4612521061.html}
   *
   * @restriction Server-side scripts only
   * @since 2020.2
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
   * Holds the string values for supported hashing algorithms. Use this enum to set the value of parameters in `SecureString.hash(options)` and `SecureString.hmac(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543504694}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543504694.html}
   *
   * @restriction Server-side scripts only
   * @since 2020.2
   */
  export enum HashAlg {
    SHA1 = 'SHA1',
    SHA256 = 'SHA256',
    SHA512 = 'SHA512',
    MD5 = 'MD5',
  }

  /**
   * Encapsulates the response to an HTTPS client request.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567656083}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567656083.html}
   *
   * @restriction Server-side scripts only
   * @since 2015.2
   */
  export interface ClientResponse {

    /**
     * The client HTTP response or status code.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567655849}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567655849.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly code: number;

    /**
     * The response header or headers.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567655700}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567655700.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * The client response body.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567655965}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567655965.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly body: string;

    /**
     * Returns the object type name (https.ClientResponse)
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * The HTTPS request information set to an HTTPS server. For example, a request received by a Suitelet or RESTlet.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567655097}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567655097.html}
   *
   * @restriction Server-side scripts only
   * @since 2015.2
   */
  export interface ServerRequest {

    /**
     * This object represents a series of name:value pairs. Each pair represents a server request header name and its value.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567654177}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567654177.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * The remote client IP address.
     * Undocumented property
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly clientIpAddress: string;

    /**
     * The server request parameters, as name:value pairs. Note that if the server request is a Get request, parameters are sent as part of the URL. If the server request is a Post request, parameters are sent within the request body.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567653880}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567653880.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly parameters: Record<string, string>;

    /**
     * The server request files represented as object in ID-file.File pair.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567654371}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567654371.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly files: Record<string, file.File>;

    /**
     * The server request body.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567654549}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567654549.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly body: string;

    /**
     * The server request HTTPS method.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567654020}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567654020.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly method: Method | http.Method | `${Method}`;

    /**
     * The server request URL.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567653744}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567653744.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly url: string;

    /**
     * Returns the number of lines in a sublist.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567655008}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567655008.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567654796}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567654796.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * Returns the object type name (https.ServerRequest)
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * The response from an HTTPS server (for example, Suitelet or RESTlet) to an HTTPS request from a server, such as a user event script.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567653583}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567653583.html}
   *
   * @restriction Server-side scripts only
   * @since 2015.2
   */
  export interface ServerResponse {

    /**
     * The server response headers.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567631816}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567631816.html}
     *
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to edit this property. This property is read-only.
     */
    readonly headers: Record<string, string | string[]>;

    /**
     * Sets the value of a response header.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567652689}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567652689.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567653484}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567653484.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567653267}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567653267.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * Creates a redirect URL that resolves to a NetSuite resource.
     * For example, you could use this method to redirect to a new sales order page for a particular entity.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567653054}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567653054.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.identifier The primary ID for this resource. The value you use varies depending on the value of `options.type`.
     * @param options.type The type of resource to which the script redirects. Use `https.RedirectType` to set a value for this parameter.
     * @param [options.editMode] Applicable when redirecting to a record resource.
     * @param [options.id] The secondary ID for this resource. If the `options.type` parameter is set to SUITELET or RESTLET, use the deployment ID. If the `options.type` parameter is set to RECORD, you can use the internal ID of a specific record instance.
     * @param [options.parameters] Additional URL parameters as name:value pairs.
     *
     * @throws {error.SuiteScriptError} INVALID_ID "You have provided an invalid script id or internal id: {id}" The `options.type` parameter is set to RESTLET or SUITELET, and the script uses an invalid ID for `options.identifier` or `options.id`.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE "The record type {type} is invalid." The `options.type` parameter is set to RECORD, and the script uses an unrecognizable string value for `options.identifier`. To avoid this error, use record.Type to identify the appropriate record type.
     * @throws {error.SuiteScriptError} INVALID_TASK_ID "The task ID: {id} is not valid. Please refer to the documentation for a list of supported task IDs." The `options.type` parameter is set to TASK_LINK, and the script uses an invalid task ID for `options.identifier`. For a list of valid IDs, see Task IDs.
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY "The `options.type`: {type} is not valid. Please use `https.RedirectType` enum for supported types." The script uses an unrecognizable string value for the `options.type` parameter. To avoid this error, use `https.RedirectType` to set the value.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.identifier` or `options.type` parameter is not specified. Note that this error is thrown if an enum is misspelled within a script. For example, you see this error if you use `https.RedirectType.TASKLINK` instead of `https.RedirectType.TASK_LINK` in the `options.type` field.
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567651956}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567651956.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param output The string being written.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.output` parameter is not specified.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE "{param name}" The value input for `options.output` is not a string.
     */
    write(output: string): void;

    /**
     * Writes information (text, xml, html) to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567651956}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567651956.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567632751}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567632751.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param output The string being written.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.output` parameter is not specified.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE "{param name}" The value input for `options.output` is not a string.
     */
    writeLine(output: string): void;

    /**
     * Writes line information (text, xml, html) to the response.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567632751}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567632751.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567632500}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567632500.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param assistant A standalone page Object in the form of an assistant.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.pageObject` parameter is not specified.
     */
    writePage(assistant: serverWidget.Assistant): void;

    /**
     * Generates a page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567632500}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567632500.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param form A standalone page Object in the form of a form.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.pageObject` parameter is not specified.
     */
    writePage(form: serverWidget.Form): void;

    /**
     * Generates a page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567632500}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567632500.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param list A standalone page Object in the form of a list.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.pageObject` parameter is not specified.
     */
    writePage(list: serverWidget.List): void;

    /**
     * Generates a page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567632500}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567632500.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567633001}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567633001.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567652460}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567652460.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2015.2
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4567652215}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4567652215.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.type The value of the caching duration. Use `https.CacheDuration` to set this value.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "Missing a required argument: {param name}" The `options.type` parameter is not specified.
     */
    setCdnCacheable(options: {
      type: CacheDuration | `${CacheDuration}`,
    }): void;

    /**
     * Returns the object type name (https.ServerResponse)
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates data that may be sent to a third-party using an HTTPS call, such as a fragment of sensitive data.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418286676}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4418286676.html}
   *
   * @restriction Server-side scripts only
   * @since 2015.2
   */
  export interface SecureString {

    /**
     * Appends one https.SecureString to another https.SecureString.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453662353515}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453662353515.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.secureString The `https.SecureString` to append.
     * @param [options.keepEncoding] Keeps the appended string in its original encoding. Set this value to true to prevent unexpected content re-encoding.
     *
     * @throws {error.SuiteScriptError} FAILED_TO_CONVERT_BINARY_DATA_TO_UTF_8 The `options.keepEncoding` parameter is set to false and an invalid attempt to re-encode from binary to string data occurred during the append.
     * @throws {error.SuiteScriptError} FAILED_TO_DECODE_STRING_ENCODED_BINARY_DATA_USING_1_ENCODING The `options.keepEncoding` parameter is set to false and an invalid attempt to re-encode from string to binary data occurred during the append.
     */
    appendSecureString(options: {
      secureString: SecureString,
      keepEncoding?: boolean,
    }): SecureString;

    /**
     * Appends a string to an https.SecureString.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460942016600}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460942016600.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.input The string to append. Only certain patterns are accepted.
     * @param [options.inputEncoding] The encoding of the string that is being appended.
     * @param [options.keepEncoding] Keeps the appended string in its original encoding. Set this value to true to prevent unexpected content re-encoding.
     *
     * @throws {error.SuiteScriptError} FAILED_TO_CONVERT_BINARY_DATA_TO_UTF_8 The `options.keepEncoding` parameter is set to false and an invalid attempt to re-encode from binary to string data occurred during the append.
     * @throws {error.SuiteScriptError} FAILED_TO_DECODE_STRING_ENCODED_BINARY_DATA_USING_1_ENCODING The `options.keepEncoding` parameter is set to false and an invalid attempt to re-encode from string to binary data occurred during the append.
     * @throws {error.SuiteScriptError} INVALID_VALUE_1_FOR_PARAMETER_2 The `options.InputEncoding` parameter is set to a value other than `https.Encoding.UTF_8` and the `options.keepEncoding` parameter is set to true.
     */
    appendString(options: {
      input: string,
      inputEncoding: Encoding | `${Encoding}`,
      keepEncoding?: boolean,
    }): SecureString;

    /**
     * Replaces all occurrences of a pattern string inside an https.SecureString with a replacement string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162190865586}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162190865586.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2021.2
     *
     * @param options
     * @param options.pattern The string to be replaced.
     * @param options.replacement The replacement string.
     */
    replaceString(options: {
      pattern: string,
      replacement: string,
    }): SecureString;

    /**
     * Converts the content of a https.SecureString between two encodings.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457542663573}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457542663573.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.fromEncoding The encoding to be used to decode the current content of the SecureString.
     * @param options.toEncoding The encoding to store the content as.
     *
     * @throws {error.SuiteScriptError} FAILED_TO_CONVERT_BINARY_DATA_TO_UTF_8 The content of the SecureString is binary data and it does not represent a valid UTF-8-encoded string.
     * @throws {error.SuiteScriptError} FAILED_TO_DECODE_STRING_ENCODED_BINARY_DATA_USING_1_ENCODING The content of the SecureString is not a valid encoded string according to the `options.fromEncoding` parameter value.
     */
    convertEncoding(options: {
      fromEncoding: Encoding | `${Encoding}`,
      toEncoding: Encoding | `${Encoding}`,
    }): SecureString;

    /**
     * Creates a hash for a https.SecureString. You can optionally specify the encoding used to convert the SecureString content to and the encoding used to encode the result as a string. Use https.HashAlg to set the hash algorithm.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459472900389}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459472900389.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.algorithm The hash algorithm. Use values from the `https.HashAlg` enum.
     * @param [options.contentEncoding] Encoding used to convert/decode the current string content into binary data for hashing. Use values from the `https.Encoding` enum.
     * @param [options.resultEncoding] Encoding used encode the binary result as a string. Use values from the `https.Encoding` enum.
     *
     * @throws {error.SuiteScriptError} FAILED_TO_CONVERT_BINARY_DATA_TO_UTF_8 An invalid attempt was made to encode the binary result to UTF-8 string.
     * @throws {error.SuiteScriptError} FAILED_TO_DECODE_STRING_ENCODED_BINARY_DATA_USING_1_ENCODING The content of the SecureString is not a valid encoded string according to the `options.contentEncoding` parameter value.
     */
    hash(options: {
      algorithm: HashAlg | `${HashAlg}`,
      contentEncoding?: Encoding | `${Encoding}`,
      resultEncoding?: Encoding | `${Encoding}`,
    }): SecureString;

    /**
     * Creates an hmac for a https.SecureString using a specified hash algorithm and secret key. You can optionally specify the encoding used to convert the SecureString content to and the encoding used to encode the result as a string. Use https.HashAlg to set the hash algorithm.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459579406737}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459579406737.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.algorithm The hash algorithm. Use values from the `https.HashAlg` enum.
     * @param options.key A key returned from `https.createSecretKey`(options).
     * @param [options.contentEncoding] Encoding used to convert/decode the current string content into binary data for hmac processing. Use values from the `https.Encoding` enum.
     * @param [options.resultEncoding] Encoding used to encode the binary result as a string. Use values from the `https.Encoding` enum.
     *
     * @throws {error.SuiteScriptError} FAILED_TO_CONVERT_BINARY_DATA_TO_UTF_8 An invalid attempt was made to encode the binary result to UTF-8 string.
     * @throws {error.SuiteScriptError} FAILED_TO_DECODE_STRING_ENCODED_BINARY_DATA_USING_1_ENCODING The content of the SecureString is not a valid encoded string according to the `options.contentEncoding` parameter value.
     */
    hmac(options: {
      algorithm: HashAlg | `${HashAlg}`,
      key: crypto_.SecretKey,
      contentEncoding?: Encoding | `${Encoding}`,
      resultEncoding?: Encoding | `${Encoding}`,
    }): SecureString;
  }
}