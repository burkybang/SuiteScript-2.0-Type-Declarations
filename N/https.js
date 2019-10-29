/**
 * SuiteScript https module (Client Side)
 * @private Ignore for JSDoc stub generation
 * @module N/https
 * @NApiVersion 2.x
 *
 */
function https() {
}

/**
 * Enum for HTTP methods.
 * @enum {string}
 */
function httpsMethod() {
  this.GET = 'GET';
  this.POST = 'POST';
  this.PUT = 'PUT';
  this.DELETE = 'DELETE';
  this.HEAD = 'HEAD';
}

https.prototype.Method = httpsMethod;

/**
 * Enum describing available Commerce API Cache Durations.
 * @enum {string}
 * @readonly
 */
function httpsCacheDuration() {
  this.UNIQUE = 'UNIQUE';
  this.SHORT = 'SHORT';
  this.MEDIUM = 'MEDIUM';
  this.LONG = 'LONG';
}

https.prototype.CacheDuration = httpsCacheDuration;

/**
 * Send a HTTPS GET request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {Object} [options.headers] (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
// function getHttps() {}
// getHttps.prototype.promise = function() {};
// https.prototype['get'] = new getHttps();
https.prototype['get'] = function (options) {
};

/**
 * Send a HTTPS POST request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body POST data
 * @param {Object} [options.headers] (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
// function postHttps() {}
// postHttps.prototype.promise = function() {};
// https.prototype.post = new postHttps();
https.prototype.post = function (options) {
};

/**
 * Send a HTTPS PUT request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body PUT data
 * @param {Object} [options.headers] (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
// function putHttps() {}
// putHttps.prototype.promise = function() {};
// https.prototype.put = new putHttps();
https.prototype.put = function (options) {
};

/**
 * Send a HTTPS DELETE request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {Object} [options.headers] (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
// function deleteHttps() {}
// deleteHttps.prototype.promise = function() {};
// https.prototype['delete'] = new deleteHttps();
https.prototype['delete'] = function (options) {
};

/**
 * Send a HTTP request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {http.Method} options.method HTTP method of the request
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body POST data; must be present if and only if method is POST
 * @param {Object} [options.headers] (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
// function requestHttps() {}
// requestHttps.prototype.promise = function() {};
// https.prototype.request = new requestHttps();
https.prototype.request = function (options) {
};

/**
 *
 * @param {Object} options
 * @param {string} options.guid
 * @param {string} options.encoding
 * @return {SecretKey}
 */
https.prototype.createSecretKey = function (options) {
};

/**
 *
 * @param {Object} options
 * @param {string} options.input
 * @param {string} [options.inputEncoding] (Optional) defaults to UTF_8
 * @returns {SecureString}
 */
https.prototype.createSecureString = function (options) {
};

/**
 * @enum
 */
function httpsEncoding() {
  this.UTF_8 = 'UTF_8';
  this.BASE_16 = 'BASE_16';
  this.BASE_32 = 'BASE_32';
  this.BASE_64 = 'BASE_64';
  this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
  this.HEX = 'HEX';
}

https.prototype.Encoding = httpsEncoding;

/**
 * @enum
 */
function httpsHashAlg() {
  this.SHA1 = 'SHA1';
  this.SHA256 = 'SHA256';
  this.SHA512 = 'SHA512';
  this.MD5 = 'MD5';
}

https.prototype.HashAlg = httpsHashAlg;

/**
 * @enum
 */
function httpsRedirectType() {
  this.RECORD = 'RECORD';
  this.SUITELET = 'SUITELET';
  this.RESTLET = 'RESTLET';
  this.MEDIA_ITEM = 'MEDIAITEM';
  this.TASK_LINK = 'TASKLINK';
}

https.prototype.RedirectType = httpsRedirectType;

https = new https();
/**
 * @type {https}
 */
N.prototype.https = https;