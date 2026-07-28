/// <reference path="../error.d.ts" />
/// <reference path="../https.d.ts" />

/**
 * SuiteScript https/clientCertificate module
 *
 * Use the `clientCertificate` module to send SSL requests with a digital certificate.
 *
 * If negotiating a connection to the destination server exceeds 5 seconds, a connection timeout occurs.
 * If transferring a payload to the server exceeds 45 seconds, a request timeout occurs.
 *
 * Unlike the parent `N/https`, these methods have no `.promise()` asynchronous variant; all five are synchronous-only.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543986321}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543986321.html}
 *
 * @module N/https/clientCertificate
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface clientCertificate {

  /**
   * Sends an SSL secured POST request to a remote service and returns the response.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547245856}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547245856.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param options
   * @param options.url The URL address of the remote server.
   * @param options.certId The ID of the client certificate.
   * @param options.body The POST data to be sent to the remote server.
   * @param [options.headers] The HTTPS headers associated with the request.
   * @return The server's response to the HTTPS request.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "{HTTP method}: Missing a required argument: {param name}" (the message is prefixed with the request method, e.g. `GET:`) One of `options.url`, `options.certId`, or `options.body` is not specified.
   * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND "Certificate '{certId}' not found" The `options.certId` value does not resolve to a client certificate in this account.
   * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request." A script is calling back into itself recursively using an HTTPS request. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_TIME_EXCEEDED "The host you are trying to connect to has exceeded the maximum allowed response time." Connection negotiation exceeded 5 seconds, or payload transfer exceeded 45 seconds. *(Inferred from N/https sibling.)*
   */
  post(options: {
    url: string,
    certId: string,
    body: string,
    headers?: Record<string, string | number>,
  }): https.ClientResponse;

  /**
   * Sends an SSL secured GET request to a remote service and returns the response.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156409084544}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156409084544.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.url The URL address of the remote server.
   * @param options.certId The ID of the client certificate.
   * @param [options.headers] The HTTPS headers associated with the request.
   * @return The server's response to the HTTPS request.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "{HTTP method}: Missing a required argument: {param name}" (the message is prefixed with the request method, e.g. `GET:`) One of `options.url` or `options.certId` is not specified.
   * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND "Certificate '{certId}' not found" The `options.certId` value does not resolve to a client certificate in this account.
   * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request." A script is calling back into itself recursively using an HTTPS request. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_TIME_EXCEEDED "The host you are trying to connect to has exceeded the maximum allowed response time." Connection negotiation exceeded 5 seconds, or payload transfer exceeded 45 seconds. *(Inferred from N/https sibling.)*
   */
  get(options: {
    url: string,
    certId: string,
    headers?: Record<string, string | number>,
  }): https.ClientResponse;

  /**
   * Sends an SSL secured PUT request to a remote service and returns the response.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156409092290}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156409092290.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.url The URL address of the remote server.
   * @param options.body The PUT data to be sent to the remote server.
   * @param options.certId The ID of the client certificate.
   * @param [options.headers] The HTTPS headers associated with the request.
   * @return The server's response to the HTTPS request.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "{HTTP method}: Missing a required argument: {param name}" (the message is prefixed with the request method, e.g. `GET:`) One of `options.url`, `options.body`, or `options.certId` is not specified.
   * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND "Certificate '{certId}' not found" The `options.certId` value does not resolve to a client certificate in this account.
   * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request." A script is calling back into itself recursively using an HTTPS request. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_TIME_EXCEEDED "The host you are trying to connect to has exceeded the maximum allowed response time." Connection negotiation exceeded 5 seconds, or payload transfer exceeded 45 seconds. *(Inferred from N/https sibling.)*
   */
  put(options: {
    url: string,
    body: string,
    certId: string,
    headers?: Record<string, string | number>,
  }): https.ClientResponse;

  /**
   * Sends an SSL secured DELETE request to a remote service and returns the response.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156409102713}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156409102713.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.url The URL address of the remote server.
   * @param options.certId The ID of the client certificate.
   * @param [options.headers] The HTTPS headers associated with the request.
   * @return The server's response to the HTTPS request.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "{HTTP method}: Missing a required argument: {param name}" (the message is prefixed with the request method, e.g. `GET:`) One of `options.url` or `options.certId` is not specified.
   * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND "Certificate '{certId}' not found" The `options.certId` value does not resolve to a client certificate in this account.
   * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request." A script is calling back into itself recursively using an HTTPS request. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_TIME_EXCEEDED "The host you are trying to connect to has exceeded the maximum allowed response time." Connection negotiation exceeded 5 seconds, or payload transfer exceeded 45 seconds. *(Inferred from N/https sibling.)*
   */
  delete(options: {
    url: string,
    certId: string,
    headers?: Record<string, string | number>,
  }): https.ClientResponse;

  /**
   * Sends an SSL secured request to a remote service and returns the response. The HTTP method is specified
   * via `options.method`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156409111673}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156409111673.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.url The URL address of the remote server.
   * @param options.certId The ID of the client certificate.
   * @param options.method The HTTP method to be used. Use the `https.Method` enum to set this value.
   * @param [options.headers] The HTTP headers associated with the request.
   * @param [options.body] The body content to send in the HTTPS request. Only the `PUT`, `POST`, and `PATCH` `https.Method` values support this parameter (and require it); all other methods ignore it.
   * @return The server's response to the HTTPS request.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT "{HTTP method}: Missing a required argument: {param name}" (the message is prefixed with the request method, e.g. `GET:`) One of `options.url`, `options.certId`, or `options.method` is not specified (or `options.body` when `options.method` is `POST`, `PUT`, or `PATCH`).
   * @throws {error.SuiteScriptError} INVALID_HTTP_METHOD "Invalid HTTP method: {method}" The `options.method` value is not a recognized HTTP method.
   * @throws {error.SuiteScriptError} SSS_INVALID_URL "The URL must be a fully qualified HTTPS URL." An invalid URL is specified in the `options.url` parameter.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND "Certificate '{certId}' not found" The `options.certId` value does not resolve to a client certificate in this account.
   * @throws {error.SuiteScriptError} SSS_INVALID_HOST_CERT "An untrusted, unsupported, or invalid certificate was found for this host." The client and server could not negotiate the desired level of security. The connection is no longer usable. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_LOOP_DETECTED "This script executes a recursive function that has exceeded the limit for the number of times a script can call itself using an HTTP request." A script is calling back into itself recursively using an HTTPS request. *(Inferred from N/https sibling.)*
   * @throws {error.SuiteScriptError} SSS_REQUEST_TIME_EXCEEDED "The host you are trying to connect to has exceeded the maximum allowed response time." Connection negotiation exceeded 5 seconds, or payload transfer exceeded 45 seconds. *(Inferred from N/https sibling.)*
   */
  request(options: {
    url: string,
    certId: string,
    method: https.Method | `${https.Method}`,
    headers?: Record<string, string | number>,
    body?: string,
  }): https.ClientResponse;
}
