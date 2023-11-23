/// <reference path="./error.d.ts" />

/**
 * SuiteScript sso module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424287223}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424287223.html}
 *
 * @module N/sso
 * @NApiVersion 2.x
 */
interface sso {

  /**
   * Generate a new SuiteSignOn token for a user
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4425177089}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4425177089.html}
   *
   * @governance 20 units
   *
   * @param {Object} options
   * @param {string} options.suiteSignOnId
   * @return {string}
   *
   * @throws {error.SuiteScriptError} SSS_SSO_CONFIG_REQD Thrown when the SuiteSignOn record is not configured for use with this script
   * @throws {error.SuiteScriptError} INVALID_SSO Thrown when the provided SuiteSignOn record ID is not valid.
   */
  generateSuiteSignOnToken(options: {
    suiteSignOnId: string,
  }): string;
}