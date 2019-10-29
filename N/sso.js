/**
 * SuiteScript module
 *
 * @module N/sso
 * @NApiVersion 2.x
 *
 */
function sso() {
}

/**
 * Generate a new SuiteSignOn token for a user
 *
 * @governance 20 units
 *
 * @param {Object} options
 * @param {string} options.suiteSignOnId
 * @return {string}
 * @throws {SuiteScriptError} SSS_SSO_CONFIG_REQD Thrown when the SuiteSignOn record is not configured for use with this script
 * @throws {SuiteScriptError} INVALID_SSO Thrown when the provided SuiteSignOn record ID is not valid.
 */
sso.prototype.generateSuiteSignOnToken = function (options) {
};

sso = new sso();
/**
 * @type {sso}
 */
N.prototype.sso = sso;