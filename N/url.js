/**
 * SuiteScript module
 *
 * @module N/url
 * @NApiVersion 2.x
 *
 */
function url() {
}

/**
 * @param {Object} options
 * @param {string} options.recordType
 * @param {string} options.recordId
 * @param {boolean} [options.isEditMode]
 * @param {Object} [options.params] Per url.format({query
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.resolveRecord = function (options) {
};

/**
 *
 * @param {Object} options
 * @param {string} options.id
 * @param {Map} [options.params] (optional) url parameters
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.resolveTaskLink = function (options) {
};

/**
 * @param {Object} options
 * @param {string} options.scriptId
 * @param {string} options.deploymentId
 * @param {boolean} [options.returnExternalUrl]
 * @param {Object} options.params Per url.format({query
 *
 * @return {string} url
 *
 * @since 2015.1
 */
url.prototype.resolveScript = function (options) {
};

/**
 * @param {Object} options
 * @param {string} options.hostType
 * @param {string} options.accountId
 *
 * @return {String} domain
 *
 * @since 2017.1
 */
url.prototype.resolveDomain = function (options) {
};

/**
 * @param {Object} options
 * @param {string} options.domain
 * @param {Object} options.params query string data parameters as an object
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.format = function (options) {
};

url = new url();
/**
 * @type {url}
 */
N.prototype.url = url;