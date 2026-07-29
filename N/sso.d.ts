/// <reference path="./error.d.ts" />

/**
 * SuiteScript sso module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424287223}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424287223.html}
 *
 * @module N/sso
 * @NApiVersion 2.x
 * @deprecated The SuiteSignOn feature is no longer supported as of NetSuite 2025.1.
 */
interface sso {

  generateSuiteSignOnToken: {

    /**
     * Generates a new SuiteSignOn token for the current user against the specified SuiteSignOn record.
     *
     * Returns a URL containing the OAuth token and any integration variables defined on the
     * SuiteSignOn record.
     *
     * Two call shapes are supported — see overloads. Both forms accept the SuiteSignOn record's
     * scriptId (e.g. `'customsso1'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4425177089}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4425177089.html}
     *
     * @governance 20 units
     * @restriction Supported only by Portlet, User Event, and Suitelet scripts
     * @since 2015.2
     *
     * @param options
     * @param options.suiteSignOnId The scriptId specified on the SuiteSignOn record (e.g. `'customsso1'`).
     * @return URL, OAuth token, and any integration variables as a string.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `suiteSignOnId` is missing, `null`, or an empty string.
     * @throws {error.SuiteScriptError} SSS_SSO_CONFIG_REQD If the SuiteSignOn record is not configured for use with this script. You must specify the script as a connection point on the SuiteSignOn record.
     * @throws {error.SuiteScriptError} INVALID_SSO If the SuiteSignOn record does not exist or has been marked inactive.
     *
     * @deprecated The SuiteSignOn feature is no longer supported as of NetSuite 2025.1.
     */
    (options: {
      suiteSignOnId: string,
    }): string;

    /**
     * Generates a new SuiteSignOn token for the current user against the specified SuiteSignOn record.
     * Bare-string form; functionally equivalent to the object form.
     *
     * Returns a URL containing the OAuth token and any integration variables defined on the
     * SuiteSignOn record.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4425177089}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4425177089.html}
     *
     * @governance 20 units
     * @restriction Supported only by Portlet, User Event, and Suitelet scripts
     * @since 2015.2
     *
     * @param suiteSignOnId The scriptId specified on the SuiteSignOn record (e.g. `'customsso1'`).
     * @return URL, OAuth token, and any integration variables as a string.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `suiteSignOnId` is missing, `null`, or an empty string.
     * @throws {error.SuiteScriptError} SSS_SSO_CONFIG_REQD If the SuiteSignOn record is not configured for use with this script. You must specify the script as a connection point on the SuiteSignOn record.
     * @throws {error.SuiteScriptError} INVALID_SSO If the SuiteSignOn record does not exist or has been marked inactive.
     *
     * @deprecated The SuiteSignOn feature is no longer supported as of NetSuite 2025.1.
     */
    (suiteSignOnId: string): string;
  };
}
