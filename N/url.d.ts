/// <reference path="./error.d.ts" />
/// <reference path="./record.d.ts" />

/**
 * SuiteScript url module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358552918}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358552918.html}
 *
 * @module N/url
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface url {

  /**
   * Returns the URL path to a NetSuite record. The returned string is a relative path (e.g.
   * `/app/common/entity/custjob.nl?id=3&compid=TD2927492`), not a full URL — pair with
   * `resolveDomain` to build an absolute URL when needed.
   *
   * When `recordId` is omitted, returns the URL to the LIST page for the record type. The
   * runtime accepts case-insensitive `recordType` strings (`'CUSTOMER'`, `'Customer'`,
   * `'customer'` all resolve identically). NetSuite does NOT verify that the supplied
   * `recordId` corresponds to an existing record — non-existent IDs produce a URL that 404s
   * when followed, rather than throwing.
   *
   * Does not work in unauthenticated client-side contexts.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358667680}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358667680.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2015.1
   *
   * @param options
   * @param options.recordType The record type. Accepts `record.Type` enum values, their string forms, custom record type script IDs, or any other recognized record-type string (case-insensitive).
   * @param [options.recordId] The internal ID of the target record. Accepts a number or string-form number. Omit to get the LIST URL for the record type. `0` is treated as falsy (omitted from the URL); negatives and alpha strings are passed through to the URL as-is without validation.
   * @param [options.isEditMode=false] If `true`, returns the URL in Edit mode (adds `&e=T`). Defaults to View mode.
   * @param [options.params] Additional query parameters as name/value pairs, appended to the resulting URL.
   *
   * @return The URL path to the record (relative — e.g. `/app/common/entity/custjob.nl?id=3&compid=TD2927492`). For the LIST URL (when `recordId` is omitted), the path points to the record-type list page.
   *
   * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `recordType` is missing, `null`, `undefined`, or a non-empty string that doesn't match any known record type. Error message format: `"The record type [{VALUE_UPPERCASED}] is invalid."` (the value is uppercased in the message; missing/null/undefined show as `[UNDEFINED]`).
   * @throws {TypeError} (Java-layer leak) If `recordId` is a plain object or array, the underlying Java method (`com.netsuite.suitescript.api.url.UrlApi.nlapiResolveURL`) crashes before the string-coercion layer, producing a raw `TypeError` instead of an SSS_* code. Also thrown as a JS-layer `TypeError: Cannot read property 'recordType' of undefined` when `options` itself is missing/`null`/`undefined` — no pre-validation check before property access.
   */
  resolveRecord(options: {
    recordType: record.Type | `${record.Type}` | record.CustomType | string,
    recordId?: number | string,
    isEditMode?: boolean,
    params?: Record<string, string | number | boolean>,
  }): string;

  resolveTaskLink: {

    /**
     * Returns the URL path to a NetSuite Tasklink. The returned string is a relative path (e.g.
     * `/app/accounting/transactions/salesord.nl?compid=TD2927492`), not a full URL.
     *
     * Task IDs are NOT free-form — they identify specific NetSuite pages and must match the
     * documented Task IDs list (see the Help Center "Task IDs" topic). Examples of valid IDs:
     * `LIST_CUSTJOB`, `EDIT_TRAN_SALESORD`, `LIST_TRANSACTION`. Misleadingly intuitive forms
     * like `EDIT_CUSTOMER`, `EDIT_CUST`, or `CARD_CUSTOMER` are NOT valid — verify against the
     * docs.
     *
     * Does not work in unauthenticated client-side contexts.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672296}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672296.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.id The task ID. Must match an entry in the documented Task IDs list.
     * @param [options.params] Additional query parameters as name/value pairs, appended to the resulting URL.
     *
     * @return The URL path to the tasklink (relative — e.g. `/app/accounting/transactions/salesord.nl?compid=TD2927492`).
     *
     * @throws {error.SuiteScriptError} INVALID_TASK_ID If `id` is missing, `null`, `undefined`, a number, or a non-matching string. Error message format: `"The task ID: {value} is not valid. Please refer to the documentation for a list of supported task IDs."` (missing/null/undefined render as the literal `null` in the message).
     */
    (options: {
      id: string,
      params?: Record<string, string | number | boolean>,
    }): string;

    /**
     * Returns the URL path to a NetSuite Tasklink. Positional-form overload of
     * {@link url.resolveTaskLink}; equivalent to `url.resolveTaskLink({id, params})`.
     * The returned string is a relative path (e.g.
     * `/app/accounting/transactions/salesord.nl?compid=TD2927492`), not a full URL.
     *
     * Task IDs are NOT free-form — they identify specific NetSuite pages and must match the
     * documented Task IDs list (see the Help Center "Task IDs" topic). Examples of valid IDs:
     * `LIST_CUSTJOB`, `EDIT_TRAN_SALESORD`, `LIST_TRANSACTION`. Misleadingly intuitive forms
     * like `EDIT_CUSTOMER`, `EDIT_CUST`, or `CARD_CUSTOMER` are NOT valid — verify against the
     * docs.
     *
     * Does not work in unauthenticated client-side contexts.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672296}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672296.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param id The task ID. Must match an entry in the documented Task IDs list.
     * @param [params] Additional query parameters as name/value pairs, appended to the resulting URL.
     *
     * @return The URL path to the tasklink (relative — e.g. `/app/accounting/transactions/salesord.nl?compid=TD2927492`).
     *
     * @throws {error.SuiteScriptError} INVALID_TASK_ID If `id` is missing, `null`, `undefined`, a number, or a non-matching string. Error message format: `"The task ID: {value} is not valid. Please refer to the documentation for a list of supported task IDs."` (missing/null/undefined render as the literal `null` in the message).
     */
    (
      id: string,
      params?: Record<string, string | number | boolean>,
    ): string;
  };

  /**
   * Returns the URL to a Suitelet or RESTlet. When `returnExternalUrl` is `false` (default),
   * returns a relative path (e.g. `/app/site/hosting/restlet.nl?script=202&deploy=1&compid=TD2927492`).
   * When `returnExternalUrl` is `true`, returns a full HTTPS URL (e.g.
   * `https://td2927492.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=202&deploy=1&compid=TD2927492`).
   *
   * `scriptId` and `deploymentId` accept either the script-ID strings (`'customscript_my_ue'`,
   * `'customdeploy_my_ue'`) or the internal numeric IDs (passed as number or numeric string).
   * The script must be a Suitelet or RESTlet — other script types fail with
   * `SSS_INVALID_URL_CATEGORY`.
   *
   * Does not work in unauthenticated client-side contexts.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672433}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672433.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2015.1
   *
   * @param options
   * @param options.scriptId The script's ID. Accepts the script-ID string (e.g. `'customscript_my_restlet'`), the internal numeric ID (e.g. `202`), or its numeric-string form (e.g. `'202'`).
   * @param options.deploymentId The deployment's ID. Same accepted forms as `scriptId`.
   * @param [options.returnExternalUrl=false] If `true`, returns the full external HTTPS URL (e.g. `<accountId>.restlets.api.netsuite.com/...`). Requires a trusted context for authenticated users. If `false` or omitted, returns the internal path. Internal URLs from client scripts work directly; to call a Suitelet's internal URL from a server script, use `https.requestSuitelet` instead.
   * @param [options.params] Additional query parameters as name/value pairs, appended to the resulting URL.
   *
   * @return The URL to the script. Relative path when `returnExternalUrl` is `false`; full HTTPS URL (with scheme and host) when `returnExternalUrl` is `true`.
   *
   * @throws {error.SuiteScriptError} INVALID_ID If `scriptId` or `deploymentId` is missing, `null`, `undefined`, or doesn't match any known script/deployment. Error message format: `"You have provided an invalid script id or internal id: {value}"`. `scriptId` is validated before `deploymentId`.
   * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY If `scriptId` resolves to a script that is NOT a Suitelet or RESTlet. The error message names the actual script type (e.g. `"USEREVENT"`).
   * @throws {TypeError} (Java-layer leak) If `options` is missing, `null`, or `undefined`, the JS implementation crashes with `"Cannot read property 'scriptId' of undefined/null"` before any SSS_* check fires.
   */
  resolveScript(options: {
    scriptId: number | string,
    deploymentId: number | string,
    returnExternalUrl?: boolean,
    params?: Record<string, string | number | boolean>,
  }): string;

  /**
   * Returns the fully-qualified domain name for a NetSuite account category, suitable for use
   * with `format` or as the base of a manually-constructed URL. Returns just the domain
   * (e.g. `td2927492.app.netsuite.com`), without scheme or path.
   *
   * The runtime matches `hostType` case-insensitively — `'application'`, `'Application'`,
   * `'APPLICATION'` all work — though using the `url.HostType` enum is preferred for IDE
   * autocomplete. Note: `CUSTOMERCENTER` returns the same domain as `APPLICATION`
   * (`<accountId>.app.netsuite.com`); they're served from the same domain.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4861456597}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4861456597.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2017.1
   *
   * @param options
   * @param options.hostType The category of domain to retrieve. Use `url.HostType` enum values.
   * @param [options.accountId] The target NetSuite account ID (e.g. `'TSTDRV1234567'`). If omitted, uses the current account. The supplied value is lowercased in the returned domain.
   *
   * @return The fully-qualified domain name (e.g. `td2927492.app.netsuite.com`), without scheme or path.
   *
   * @throws {error.SuiteScriptError} INVALID_FLD_VALUE If `hostType` is missing, `null`, `undefined`, or a string that doesn't match any `HostType` value (case-insensitive comparison). Error message format: `"You have entered an Invalid Field Value {value} for the following field: hostType"` (missing/null values render as `null` in the message).
   * @throws {TypeError} (Java-layer leak) If `options` is missing, `null`, or `undefined`, the JS implementation crashes with `"Cannot read property 'hostType' of undefined/null"` before any SSS_* check fires.
   */
  resolveDomain(options: {
    hostType: url.HostType | `${url.HostType}`,
    accountId?: string,
  }): string;

  format: {

    /**
     * Builds a URL string from a domain and a query-parameter object. Returns
     * `{domain}?{key1}={value1}&{key2}={value2}...`. URL-encodes parameter values (spaces become
     * `+`, special characters are percent-encoded).
     *
     * Parameter value coercion: `null` and `undefined` values render as empty strings (`x=`);
     * array values render with `[]` suffix per element (`x[]=0&x[]=1`); object values stringify
     * to `[object Object]` (typically not useful — flatten first). Empty `params` produces a
     * trailing `?` with no parameters.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672703}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672703.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.1
     *
     * @param options
     * @param options.domain The base domain or URL the query string is appended to. Required.
     * @param [options.params] Object of name/value pairs to serialize. Despite the Help Center marking this as required, it is effectively optional at runtime — omitted, `null`, or non-object values are silently ignored and the bare domain is returned.
     *
     * @return The serialized URL: `{domain}?{key1}={value1}&{key2}={value2}...`. Bare domain with trailing `?` when params is empty `{}`; bare domain alone (no `?`) when params is omitted or non-object.
     *
     * @throws {TypeError} (Java-layer leak) If `options` or `options.domain` is missing, `null`, or `undefined`, the JS implementation crashes with `"Cannot read property 'indexOf' of undefined"` before any SSS_* check fires.
     */
    (options: {
      domain: string,
      params?: Record<string, string | number | boolean>,
    }): string;

    /**
     * Builds a URL string from a domain and a query-parameter object. Positional-form overload
     * of {@link url.format}; equivalent to `url.format({domain, params})`. Returns
     * `{domain}?{key1}={value1}&{key2}={value2}...`. URL-encodes parameter values (spaces become
     * `+`, special characters are percent-encoded).
     *
     * Parameter value coercion: `null` and `undefined` values render as empty strings (`x=`);
     * array values render with `[]` suffix per element (`x[]=0&x[]=1`); object values stringify
     * to `[object Object]` (typically not useful — flatten first). Empty `params` produces a
     * trailing `?` with no parameters.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672703}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672703.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.1
     *
     * @param domain The base domain or URL the query string is appended to. Required.
     * @param [params] Object of name/value pairs to serialize. Despite the Help Center marking this as required, it is effectively optional at runtime — omitted, `null`, or non-object values are silently ignored and the bare domain is returned.
     *
     * @return The serialized URL: `{domain}?{key1}={value1}&{key2}={value2}...`. Bare domain with trailing `?` when params is empty `{}`; bare domain alone (no `?`) when params is omitted or non-object.
     *
     * @throws {TypeError} (Java-layer leak) If `domain` is missing, `null`, or `undefined`, the JS implementation crashes with `"Cannot read property 'indexOf' of undefined"` before any SSS_* check fires.
     */
    (
      domain: string,
      params?: Record<string, string | number | boolean>,
    ): string;
  };
}

declare namespace url {

  /**
   * Enumeration of NetSuite domain categories. Use as the `hostType` argument to
   * `url.resolveDomain`. The constant names and their runtime string values differ for three
   * of the five entries (`CUSTOMER_CENTER`, `RESTLET`, `FORM`) — always pass the enum value,
   * not the constant name.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4834765371}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4834765371.html}
   *
   * @since 2017.1
   */
  export enum HostType {

    /**
     * The domain for UI access — `<accountId>.app.netsuite.com`.
     */
    APPLICATION = 'APPLICATION',

    /**
     * The domain for the Customer Center — same as `APPLICATION` at runtime
     * (`<accountId>.app.netsuite.com`). The Customer Center is served from the
     * regular app domain.
     */
    CUSTOMER_CENTER = 'CUSTOMERCENTER',

    /**
     * The domain for calling a RESTlet from an external source —
     * `<accountId>.restlets.api.netsuite.com`.
     */
    RESTLET = 'RESTLETS',

    /**
     * The domain for SOAP web services requests — `<accountId>.suitetalk.api.netsuite.com`.
     */
    SUITETALK = 'SUITETALK',

    /**
     * The domain for forms hosted online, usually in Suitelets —
     * `<accountId>.extforms.netsuite.com`.
     */
    FORM = 'FORMS',
  }
}
