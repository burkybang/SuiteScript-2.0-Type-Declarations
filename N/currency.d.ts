/// <reference path="./error.d.ts" />

/**
 * SuiteScript currency module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358551775}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358551775.html}
 *
 * @module N/currency
 * @NApiVersion 2.x
 */
interface currency {

  exchangeRate: {

    /**
     * Retrieves the exchange rate between two currencies based on the specified date.
     * The return value comes from the Exchange Rate column of the Currency Exchange Rates record.
     *
     * Only base currencies can be reliably converted. If `target` is not a base currency in the
     * account, NetSuite returns a value derived from cross-rate arithmetic that may be inaccurate;
     * no error is thrown.
     *
     * The Multiple Currencies feature (runtime feature flag `MULTICURRENCY`) must be enabled for
     * cross-currency rates to be meaningful.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358678787}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358678787.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.source Source currency. Accepts the internal ID (`number` or numeric string) or the three-letter ISO code (case-sensitive — `'USD'` works, `'usd'` throws `SSS_INVALID_CURRENCY_ID`).
     * @param options.target Target currency. Same format as `source`. Should be a base currency in the account for accurate results.
     * @param [options.date] Effective date for the rate lookup. Must be a `Date` instance with a valid time value; `null` and `undefined` are accepted and default to today. Strings, numbers, and Invalid Date instances throw `WRONG_PARAMETER_TYPE`.
     * @return The exchange rate as a `number`.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.source` or `options.target` is missing, `null`, or an empty string. `source` is validated before `target`. Any non-object `options` argument (string, number, `null`, `undefined`) is treated as an object with no own properties and produces the same error against `source`.
     * @throws {error.SuiteScriptError} SSS_INVALID_CURRENCY_ID If `source` or `target` is not a valid currency ID or ISO code. There is no JS-layer type check on `source`/`target`, so wrong-type values (e.g. `boolean`) reach the currency lookup and fail with this code rather than a type error.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.date` is a non-`Date` value or a `Date` whose `getTime()` is `NaN`. Undocumented in the Help Center.
     */
    (options: {
      source: number | string,
      target: number | string,
      date?: Date,
    }): number;

    /**
     * Retrieves the exchange rate between two currencies based on the specified date — asynchronous form.
     * Undocumented in the Help Center but present at runtime with the same validation order, error codes, and governance as the synchronous form.
     *
     * The return value comes from the Exchange Rate column of the Currency Exchange Rates record.
     *
     * Only base currencies can be reliably converted. If `target` is not a base currency in the
     * account, NetSuite returns a value derived from cross-rate arithmetic that may be inaccurate;
     * no error is thrown.
     *
     * The Multiple Currencies feature (runtime feature flag `MULTICURRENCY`) must be enabled for
     * cross-currency rates to be meaningful.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358678787}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358678787.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.source Source currency. Accepts the internal ID (`number` or numeric string) or the three-letter ISO code (case-sensitive — `'USD'` works, `'usd'` throws `SSS_INVALID_CURRENCY_ID`).
     * @param options.target Target currency. Same format as `source`. Should be a base currency in the account for accurate results.
     * @param [options.date] Effective date for the rate lookup. Must be a `Date` instance with a valid time value; `null` and `undefined` are accepted and default to today. Strings, numbers, and Invalid Date instances throw `WRONG_PARAMETER_TYPE`.
     * @return A `Promise` resolving to the exchange rate as a `number`.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.source` or `options.target` is missing, `null`, or an empty string. `source` is validated before `target`. Any non-object `options` argument (string, number, `null`, `undefined`) is treated as an object with no own properties and produces the same error against `source`.
     * @throws {error.SuiteScriptError} SSS_INVALID_CURRENCY_ID If `source` or `target` is not a valid currency ID or ISO code. There is no JS-layer type check on `source`/`target`, so wrong-type values (e.g. `boolean`) reach the currency lookup and fail with this code rather than a type error.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.date` is a non-`Date` value or a `Date` whose `getTime()` is `NaN`. Undocumented in the Help Center.
     */
    promise(options: {
      source: number | string,
      target: number | string,
      date?: Date,
    }): Promise<number>;
  };
}
