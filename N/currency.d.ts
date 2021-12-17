/**
 * SuiteScript currency module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358551775}
 *
 * @module N/currency
 * @NApiVersion 2.x
 */
interface currency {

  /**
   * Retrieves the exchange rate between two currencies based on the specified date.
   * The return value comes from the Exchange Rate column of the Currency Exchange Rates record.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358678787}
   *
   * @governance 10 units
   *
   * @param {Object} options
   * @param {number|string} options.source The source currency ID or String
   * @param {number|string} options.target The target currency ID or String
   * @param {Date} options.date [optional] The date of the desired effective currency rate. Defaults to today.
   *
   * @return {number}
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_CURRENCY_ID if an invalid currency (source or target) is specified
   *
   * @since 2015.2
   */
  exchangeRate(options: {
    source: number | string,
    target: number | string,
    date?: Date,
  }): number;
}