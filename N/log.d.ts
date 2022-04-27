/**
 * SuiteScript log module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html}
 *
 * @module N/log
 * @NApiVersion 2.x
 */
interface log {

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   */
  debug(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} title     The title of the message
   * @param {*} [details] The details of the message
   */
  debug(title: any, details?: any): void;

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   */
  audit(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} title     The title of the message
   * @param {*} [details] The details of the message
   */
  audit(title: any, details?: any): void;

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   */
  error(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} title     The title of the message
   * @param {*} [details] The details of the message
   */
  error(title: any, details?: any): void;

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} options.title     The title of the message
   * @param {*} [options.details] The details of the message
   */
  emergency(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @param {Object} options
   * @param {*} title     The title of the message
   * @param {*} [details] The details of the message
   */
  emergency(title: any, details?: any): void;
}

declare const log: log;