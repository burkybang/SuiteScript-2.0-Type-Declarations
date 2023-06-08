/**
 * SuiteScript Map/Reduce Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4685231336}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4685231336.html}
 */

/// <reference path="../typings.d.ts" />
/// <reference path="../N/search.d.ts" />
/// <reference path="../N/query.d.ts" />
/// <reference path="../N/file.d.ts" />

/**
 * References the object that contains the input data
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4685231336}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4685231336.html}
 *
 * @governance 10,000
 * @time 60 minutes
 * @instructions 1B
 *
 * @since 2015.2
 */
interface GetInputContext {

  /**
   * @type {'mapreduce.InputContext'} type
   * @readonly
   */
  type: 'mapreduce.InputContext';

  /**
   * Indicates whether the getInputData(inputContext) function was invoked again
   *
   * @type {boolean} isRestarted
   * @readonly
   */
  isRestarted: boolean;

  /**
   * @type {{FILE:'FILE', SEARCH:'SEARCH', QUERY:'QUERY'}} objectRefType
   */
  objectRefType: {
    FILE: 'FILE',
    SEARCH: 'SEARCH',
    QUERY: 'QUERY',
  };

  /**
   * @return {string}
   */
  toString(): string;

  /**
   * Convert to JSON object
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>;
}

/**
 * References the object that contains the input data
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412447940}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412447940.html}
 *
 * @since 2015.2
 */
type GetInputReturn = any[] | { [p: string]: any } |
  search.Search | GetInputReturnSearchReference |
  query.Query | GetInputReturnQueryReference |
  file.File | GetInputContext;

/**
 * search.Search Object Reference
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412447940}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412447940.html}
 *
 * @since 2015.2
 */
interface GetInputReturnSearchReference {
  type: 'search';
  id: number | string;
}

/**
 * query.Query Object Reference
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4412447940}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4412447940.html}
 *
 * @since 2015.2
 */
interface GetInputReturnQueryReference {
  type: 'query';
  id: number | string;
}

/**
 * Contains the key/value pairs to process through the map stage
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472712193}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472712193.html}
 *
 * @governance 1000
 * @time 5 minutes
 * @instructions 100M
 *
 * @since 2015.2
 */
interface MapContext {

  /**
   * @type {'mapreduce.MapContext'} type
   * @readonly
   */
  type: 'mapreduce.MapContext';

  /**
   * The key to be processed through the map stage
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483840988}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483840988.html}
   *
   * @type {string} key
   * @readonly
   */
  key: string;

  /**
   * The value to be processed through the map stage
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483841695}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483841695.html}
   *
   * @type {string} value
   * @readonly
   */
  value: string;

  /**
   * Indicates whether the map(mapContext) function was invoked again
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4540852756}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4540852756.html}
   *
   * @type {boolean} isRestarted
   * @readonly
   */
  isRestarted: boolean;

  /**
   * Indicates whether the current invocation of the map(mapContext) function is the first or a subsequent invocation for the current key/value pair
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1516217757}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516217757.html}
   *
   * @type {number} executionNo
   * @readonly
   */
  executionNo: number;

  /**
   * Iterator which provides errors thrown during particular map function execution
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1516209193}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516209193.html}
   *
   * @type {ErrorsIterator} errors
   * @readonly
   *
   * @example
   *  context.errors.iterator().each((key, error, executionNo) => {...});
   */
  errors: ErrorsIterator;

  /**
   * Writes the key value pairs
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472712995}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472712995.html}
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   * @return {void}
   */
  write(options: {
    key: string | number,
    value?: string | number | boolean | Date | Object | (string | number | boolean | Date | Object)[],
  }): void;

  /**
   * @return {string}
   */
  toString(): string;

  /**
   * Convert to JSON object
   *
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>;
}

/**
 * Contains the key/values groups to process through the reduce stage
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483843828}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483843828.html}
 *
 * @governance 5000
 * @time 15 minutes
 * @instructions 100M
 *
 * @since 2015.2
 */
interface ReduceContext {

  /**
   * @type {'mapreduce.ReduceContext'} type
   * @readonly
   */
  type: 'mapreduce.ReduceContext';

  /**
   * Indicates whether the Rap(reduceContext) function was invoked again
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4540820922}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4540820922.html}
   *
   * @type {boolean} isRestarted
   * @readonly
   */
  isRestarted: boolean;

  /**
   * Indicates whether the current invocation of the reduce(reduceContext) function is the first, second, third, or fourth for the current key and its values
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1516393633}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516393633.html}
   *
   * @type {number} executionNo
   * @readonly
   */
  executionNo: number;

  /**
   * When the map/reduce process includes a map stage, the key is derived from the key written by MapContext.write(key, value).
   * When the map stage is skipped, the key depends on the input type
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472721827}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472721827.html}
   *
   * @type {string} key
   * @readonly
   */
  key: string;

  /**
   * When the map/reduce process includes a map stage, the values are derived from the values written by MapContext.write(key,value). When the map stage is skipped, the values are already grouped by key into a list, and the value depends on the input type.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472721828}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472721828.html}
   *
   * @type {string} values
   * @readonly
   */
  values: string[];

  /**
   * Iterator which provides errors thrown during particular reduce function execution
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1516393583}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516393583.html}
   *
   * @type {ErrorsIterator} errors
   * @readonly
   *
   * @example
   *  context.errors.iterator().each((key, error, executionNo) => {...});
   */
  errors: ErrorsIterator;

  /**
   * Writes the key/values groups
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472721829}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472721829.html}
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   * @return {void}
   */
  write(options: {
    key: string | number,
    value?: string | number | boolean | Date | Object | (string | number | boolean | Date | Object)[],
  }): void;

  /**
   * @return {string}
   */
  toString(): string;

  /**
   * Convert to JSON object
   *
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>;
}

/**
 * Used for accessing Map/Reduce job output and metadata
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472725629}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472725629.html}
 *
 * @governance 10,000
 * @time 60 minutes
 * @instructions 1B
 *
 * @since 2015.2
 */
interface SummarizeContext {

  /**
   * @type {'mapreduce.Summary'} type
   * @readonly
   */
  type: 'mapreduce.Summary';

  /**
   * Time M/R job began running
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472725620}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472725620.html}
   *
   * @type {Date} dateCreated
   * @readonly
   */
  dateCreated: Date;

  /**
   * Total seconds elapsed while running
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472726014}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472726014.html}
   *
   * @type {number} seconds
   * @readonly
   */
  seconds: number;

  /**
   * Total usage points consumed while running
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472726050}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472726050.html}
   *
   * @type {number} usage
   * @readonly
   */
  usage: number;

  /**
   * Maximum number of queues utilized at the same time while running
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472726080}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472726080.html}
   *
   * @type {number} concurrency
   * @readonly
   */
  concurrency: number;

  /**
   * Total number of times yielding the queue while running
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472727250}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472727250.html}
   *
   * @type {number} yields
   * @readonly
   */
  yields: number;

  /**
   * Iterator which provides keys and values written as output during the REDUCE phase
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472729410}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472729410.html}
   *
   * @type {OutputIterator} output
   * @readonly
   *
   * @example
   *  summary.output.iterator().each((key, value) => {...})
   */
  output: OutputIterator;

  /**
   * Stats about the INPUT stage
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472730724}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472730724.html}
   *
   * @type {InputSummary} inputSummary
   */
  inputSummary: SummarizeContext.InputSummary;

  /**
   * Stats about the MAP stage
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483844888}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483844888.html}
   *
   * @type {MapSummary} mapSummary
   */
  mapSummary: SummarizeContext.MapSummary;

  /**
   * Stats about the REDUCE stage
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472747839}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472747839.html}
   *
   * @type {ReduceSummary} reduceSummary
   */
  reduceSummary: SummarizeContext.ReduceSummary;

  /**
   * @return {string}
   */
  toString(): string;

  /**
   * Convert to JSON object
   *
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>;
}

declare namespace SummarizeContext {

  /**
   * Used for accessing Map/Reduce INPUT stage metadata
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472730724}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472730724.html}
   *
   * @since 2015.2
   */
  export interface InputSummary {

    /**
     * Time M/R INPUT stage began running
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472730723}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472730723.html}
     *
     * @type {Date} dateCreated
     * @readonly
     */
    dateCreated: Date;

    /**
     * Total seconds elapsed while during the INPUT stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483844442}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483844442.html}
     *
     * @type {number} seconds
     * @readonly
     */
    seconds: number;

    /**
     * Total usage points consumed during the INPUT stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472730725}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472730725.html}
     *
     * @type {number} usage
     * @readonly
     */
    usage: number;

    /**
     * Serialized error is thrown out of getInputData() - if applicable
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472730726}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472730726.html}
     *
     * @type {string} error
     * @readonly
     */
    error: string;

    /**
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Used for accessing Map/Reduce MAP stage metadata
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483844888}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483844888.html}
   *
   * @since 2015.2
   */
  export interface MapSummary {

    /**
     * Time MAP stage began running
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472737470}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472737470.html}
     *
     * @type {Date} dateCreated
     * @readonly
     */
    dateCreated: Date;

    /**
     * Total seconds elapsed while running MAP stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472737479}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472737479.html}
     *
     * @type {number} seconds
     * @readonly
     */
    seconds: number;

    /**
     * Total usage points consumed while running MAP stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472737471}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472737471.html}
     *
     * @type {number} usage
     * @readonly
     */
    usage: number;

    /**
     * Maximum number of queues utilized at the same time while running MAP stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483895829}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483895829.html}
     *
     * @type {number} concurrency
     * @readonly
     */
    concurrency: number;

    /**
     * Total number of times yielding the queue while running MAP stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472740448}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472740448.html}
     *
     * @type {number} yields
     * @readonly
     */
    yields: number;

    /**
     * Iterator which provides input keys processed during the MAP phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472745365}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472745365.html}
     *
     * @type {KeysIterator} keys
     * @readonly
     *
     * @example
     *  summary.mapSummary.keys.iterator().each((key, executionCount, completionState) => {...});
     */
    keys: KeysIterator;

    /**
     * Iterator which provides errors thrown during the MAP phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472745988}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472745988.html}
     *
     * @type {ErrorsIterator} errors
     * @readonly
     *
     * @example
     *  summary.mapSummary.errors.iterator().each((key, error, executionNo) => {...});
     */
    errors: ErrorsIterator;

    /**
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Used for accessing Map/Reduce REDUCE stage metadata
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472747839}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472747839.html}
   *
   * @since 2015.2
   */
  export interface ReduceSummary {

    /**
     * Time REDUCE stage began running
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483896562}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483896562.html}
     *
     * @type {Date} dateCreated
     * @readonly
     */
    dateCreated: Date;

    /**
     * Total seconds elapsed while running REDUCE stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472747831}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472747831.html}
     *
     * @type {number} seconds
     * @readonly
     */
    seconds: number;

    /**
     * Total usage points consumed while running REDUCE stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483898658}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483898658.html}
     *
     * @type {number} usage
     * @readonly
     */
    usage: number;

    /**
     * Maximum number of queues utilized at the same time while running REDUCE stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472747830}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472747830.html}
     *
     * @type {number} concurrency
     * @readonly
     */
    concurrency: number;

    /**
     * Total number of times yielding the queue while running REDUCE stage
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483899918}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483899918.html}
     *
     * @type {number} yields
     * @readonly
     */
    yields: number;

    /**
     * Iterator which provides input keys processed during the REDUCE phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4472747832}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4472747832.html}
     *
     * @type {KeysIterator} keys
     * @readonly
     *
     * @example
     *  summary.reduceSummary.keys.iterator().each((key, executionCount, completionState) => {...});
     */
    keys: KeysIterator;

    /**
     * Iterator which provides errors thrown during the REDUCE phase
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483900159}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483900159.html}
     *
     * @type {ErrorsIterator} errors
     * @readonly
     *
     * @example
     *  summary.reduceSummary.errors.iterator().each((key, error, executionNo) => {...});
     */
    errors: ErrorsIterator;

    /**
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }
}

interface KeysIterator {
  iterator(): {
    each(callback: (key: string, executionCount: number, completionState: 'PENDING' | 'FAILED' | 'COMPLETE') => boolean): void
  };
}

interface ErrorsIterator {
  iterator(): {
    each(callback: (key: string, error: string, executionNo: number) => boolean): void
  };
}

interface OutputIterator {
  iterator(): {
    each(callback: (key: string, value: string) => boolean): void
  };
}