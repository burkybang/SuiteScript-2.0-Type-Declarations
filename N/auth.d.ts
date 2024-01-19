/// <reference path="./error.d.ts" />

/**
 * SuiteScript auth module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296360422}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296360422.html}
 *
 * @module N/auth
 * @NApiVersion 2.x
 */
interface auth {

  /**
   * Change current user's email
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4298156427}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4298156427.html}
   *
   * @param options
   * @param options.password
   * @param options.newEmail
   * @param [options.onlyThisAccount=true]
   *
   * @throws {error.SuiteScriptError} INVALID_PSWD When password does not conform to rules.
   * @throws {error.SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
   */
  changeEmail(options: {
    password: string,
    newEmail: string,
    onlyThisAccount?: boolean,
  }): void;

  /**
   * Change current user's password
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4298157647}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4298157647.html}
   *
   * @param options
   * @param options.currentPassword
   * @param options.newPassword
   *
   * @throws {error.SuiteScriptError} INVALID_PSWD When password does not conform to rules.
   * @throws {error.SuiteScriptError} INVALID_EMAIL When email does not conform to rules.
   */
  changePassword(options: {
    currentPassword: string,
    newPassword: string,
  }): void;
}