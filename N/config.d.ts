/// <reference path="./record.d.ts" />

/**
 * SuiteScript config module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4261803800}
 *
 * @module N/config
 * @NApiVersion 2.x
 */
interface config {

  /**
   * Load a configuration object with a specific type
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4256772439}
   *
   * @governance 10 units
   * @restriction Server SuiteScript only
   *
   * @param {Object} options
   * @param {string} options.type one of the Type values
   * @param {boolean} [options.isDynamic] load record in dynamic or deferred dynamic mode
   * @return {record.Record}
   *
   * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE Thrown if an invalid record type was provided.
   *
   * @since 2015.2
   */
  load(options: {
    type: config.Type,
    isDynamic?: boolean,
  }): record.Record;
}

/**
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4261803800}
 */
declare namespace config {

  /**
   * Enum configuration type values.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4256772632}
   *
   * @enum {string}
   *
   * @since 2015.2
   */
  export enum Type {
    USER_PREFERENCES = 'userpreferences',
    COMPANY_INFORMATION = 'companyinformation',
    COMPANY_PREFERENCES = 'companypreferences',
    ACCOUNTING_PREFERENCES = 'accountingpreferences',
    ACCOUNTING_PERIODS = 'accountingperiods',
    TAX_PERIODS = 'taxperiods',
    FEATURES = 'companyfeatures',
    TIME_POST = 'timepost',
    TIME_VOID = 'timevoid',
  }
}
