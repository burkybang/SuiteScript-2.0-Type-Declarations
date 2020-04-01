// todo: Convert to TypeScript definition

/**
 * SuiteScript auth module
 *
 * @module N/auth
 * @NApiVersion 2.x
 */
function auth() {
}

/**
 * Change current user's email
 *
 * @param {Object} options
 * @param {string} options.password
 * @param {string} options.newEmail
 * @param {boolean} [options.onlyThisAccount=true]
 *
 * @throws {SuiteScriptError} INVALID_PSWD When password does not conform to rules.
 * @throws {SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
 */
auth.prototype.changeEmail = function (options) {
};

/**
 * Change current user's password
 *
 * @param {object} options
 * @param {string} options.currentPassword
 * @param {string} options.newPassword
 *
 * @throws {SuiteScriptError} INVALID_PSWD When password does not conform to rules.
 * @throws {SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
 */
auth.prototype.changePassword = function (options) {
};

auth = new auth();
/**
 * @type {auth}
 */
N.prototype.auth = auth;