/**
 * SuiteScript module
 *
 * @module N/redirect
 * @NApiVersion 2.x
 *
 */
function redirect() {
}

/**
 * Redirect to a URL
 *
 * @governance 0 units
 * @restriction Can only direct to external URL by suitelet without login
 *
 * @param {Object} options
 * @param {string} options.url
 * @param {Object} options.parameters (optional)
 */
redirect.prototype.redirect = function (options) {
};

/**
 * Redirect to a suitelet
 *
 * @governance 0 units
 * @restriction Suitelet and UE only
 *
 * @param {Object} options
 * @param {string} options.scriptId  script Id
 * @param {string} options.deploymentId deployment Id
 * @param {boolean} [options.isExternal] (optional) default to false indicate it is external Suitelet URL
 * @param {Object} [options.parameters] (optional)
 */
redirect.prototype.toSuitelet = function (options) {
};

/**
 * Redirect to a record
 *
 * @governance 0 units
 * @restriction Suitelet and UE only
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {string} options.id  record Id
 * @param {boolean} [options.isEditMode] (optional) default to false
 * @param {Object} [options.parameters] (optional)
 */
redirect.prototype.toRecord = function (options) {
};

/**
 * Redirect to a task link
 *
 * @governance 0 units
 * @restriction Suitelet and UE only
 *
 * @param {Object} options
 * @param {string} options.id task Id
 * @param {Object} options.parameters (optional)
 */
redirect.prototype.toTaskLink = function (options) {
};

/**
 * Redirect to saved search
 *
 * @governance 5 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {number} options.id search id
 */
redirect.prototype.toSavedSearch = function (options) {
};

/**
 * Redirect to saved search results
 *
 * @governance 5 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {number} options.id search id
 */
redirect.prototype.toSavedSearchResult = function (options) {
};

/**
 * Redirect to search
 *
 * @governance 0 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {Search} options.Search
 */
redirect.prototype.toSearch = function (options) {
};

/**
 * Redirect to search results
 *
 * @governance 0 units
 * @restriction Supppprted only by afterSubmit user event scripts and client scripts
 *
 * @param {Object} options
 * @param {Search} options.Search
 */
redirect.prototype.toSearchResult = function (options) {
};

redirect = new redirect();
/**
 * @type {redirect}
 */
N.prototype.redirect = redirect;