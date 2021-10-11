/**
 * SuiteScript auth module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296360422.html}
 *
 * @module N/auth
 * @NApiVersion 2.x
 */
interface auth {

  /**
   * Change current user's email
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4298156427.html}
   *
   * @param {Object} options
   * @param {string} options.password
   * @param {string} options.newEmail
   * @param {boolean} [options.onlyThisAccount=true]
   * @return {void}
   *
   * @throws {error.SuiteScriptError} INVALID_PSWD When password does not conform to rules.
   * @throws {error.SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
   */
  changeEmail(options: {
    password: string,
    newEmail: string,
    onlyThisAccount?: boolean,
  }): void

  /**
   * Change current user's password
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4298157647.html}
   *
   * @param {object} options
   * @param {string} options.currentPassword
   * @param {string} options.newPassword
   * @return {void}
   *
   * @throws {error.SuiteScriptError} INVALID_PSWD When password does not conform to rules.
   * @throws {error.SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
   */
  changePassword(options: {
    currentPassword: string,
    newPassword: string,
  }): void
}