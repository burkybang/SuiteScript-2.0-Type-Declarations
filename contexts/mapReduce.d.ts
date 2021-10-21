/// <reference path="../typings.d.ts" />

/**
 * SuiteScript Map/Reduce Script Context
 *
 * @NApiVersion 2.x
 */

/**
 * Return a new instance of GetInputContext
 * @class
 * @classdesc References the object that contains the input data.
 * @return {GetInputContext}
 * @constructor
 *
 * @since 2015.2
 */
interface GetInputContext {

  /**
   * @name GetInputContext#type
   * @type {'mapreduce.InputContext'} type
   * @readonly
   */
  type: 'mapreduce.InputContext'

  /**
   * @name GetInputContext#isRestarted
   * @type {boolean} isRestarted - Indicates whether the getInputData(inputContext) function was invoked again
   * @readonly
   */
  isRestarted: boolean

  /**
   * @name GetInputContext#objectRefType
   * @enum {{FILE:'FILE', SEARCH:'SEARCH', QUERY:'QUERY'}} objectRefType
   * @readonly
   */
  objectRefType: {
    FILE: 'FILE',
    SEARCH: 'SEARCH',
    QUERY: 'QUERY',
  }

  /**
   * @return {string}
   */
  toString(): string

  /**
   * Convert to JSON object
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>
}

/**
 * Return a new instance of MapContext
 * @class
 * @classdesc Contains the key/value pairs to process through the map stage.
 * @return {MapContext}
 * @constructor
 *
 * @since 2015.2
 */
interface MapContext {

  /**
   * @name MapContext#type
   * @type {'mapreduce.MapContext'} type
   * @readonly
   */
  type: 'mapreduce.MapContext'

  /**
   * @name MapContext#key
   * @type {string} key - The key to be processed through the map stage
   * @readonly
   */
  key: string

  /**
   * @name MapContext#value
   * @type {string} value - The value to be processed through the map stage.
   * @readonly
   */
  value: string

  /**
   * @name MapContext#isRestarted
   * @type {boolean} isRestarted - Indicates whether the map(mapContext) function was invoked again
   * @readonly
   */
  isRestarted: boolean

  /**
   * @name MapContext#executionNo
   * @type {number} executionNo - execution no for current map record, i.e. for which time is the map function for the current record executed
   * @readonly
   */
  executionNo: number

  /**
   * @name MapContext#errors#iterator
   * @type {ErrorsIterator} errors - Iterator which provides errors thrown during particular map function execution.
   *      <pre> context.errors.each((key, error, executionNo) => {...}); </pre>
   * @readonly
   */
  errors: ErrorsIterator

  /**
   * Writes the key value pairs
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   * @return {void}
   */
  write(options: {
    key: string | number,
    value?: string | number | boolean | Date | Object | (string | number | boolean | Date | Object)[],
  }): void

  /**
   * @return {string}
   */
  toString(): string

  /**
   * Convert to JSON object
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>
}

/**
 * Return a new instance of ReduceContext
 * @class
 * @classdesc Contains the key/values groups to process through the reduce stage.
 * @return {ReduceContext}
 * @constructor
 *
 * @since 2015.2
 */
interface ReduceContext {

  /**
   * @name ReduceContext#type
   * @type {'mapreduce.ReduceContext'} type
   * @readonly
   */
  type: 'mapreduce.ReduceContext'

  /**
   * @name ReduceContext#isRestarted
   * @type {boolean} isRestarted - Indicates whether the Rap(reduceContext) function was invoked again
   * @readonly
   */
  isRestarted: boolean

  /**
   * @name ReduceContext#executionNo
   * @type {number} executionNo - execution no for current reduce record list, i.e. for which time is the reduce function for the current reduce record list executed
   * @readonly
   */
  executionNo: number

  /**
   * @name ReduceContext#key
   * @type {string} key - When the map/reduce process includes a map stage, the key is derived from the key written
   *     by MapContext.write(key,value).
   When the map stage is skipped, the key depends on the input type:
   * @readonly
   */
  key: string

  /**
   * @name MapContext#value
   * @type {string} values - When the map/reduce process includes a map stage, the values are derived from the values
   *     written by MapContext.write(key,value).
   When the map stage is skipped, the values are already grouped by key into a list, and the value depends on the input type:
   * @readonly
   */
  values: string[]

  /**
   * @name ReduceContext#errors#iterator
   * @type {ErrorsIterator} errors - Iterator which provides errors thrown during particular reduce function execution.
   *      <pre> context.errors.iterator().each((key, error, executionNo) => {...}); </pre>
   * @readonly
   */
  errors: ErrorsIterator

  /**
   * Writes the key/values groups
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   */
  write(options: {
    key: string | number,
    value?: string | number | boolean | Date | Object | (string | number | boolean | Date | Object)[],
  }): void

  /**
   * @return {string}
   */
  toString(): string

  /**
   * Convert to JSON object
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>
}

/**
 * Return a new instance of SummarizeContext
 * @class
 * @classdesc Used for accessing Map/Reduce job output and metadata.
 * @return {SummarizeContext}
 * @constructor
 *
 * @since 2015.2
 */
interface SummarizeContext {

  /**
   * @name SummarizeContext#type
   * @type {'mapreduce.Summary'} type
   * @readonly
   */
  type: 'mapreduce.Summary'

  /**
   * @name SummarizeContext#dateCreated
   * @type {Date} dateCreated - Time M/R job began running.
   * @readonly
   */
  dateCreated: Date

  /**
   * @name SummarizeContext#seconds
   * @type {number} seconds - Total seconds elapsed while running.
   * @readonly
   */
  seconds: number

  /**
   * @name SummarizeContext#usage
   * @type {number} usage - Total usage points consumed while running.
   * @readonly
   */
  usage: number

  /**
   * @name SummarizeContext#concurrency
   * @type {number} concurrency - Maximum number of queues utilized at the same time while running.
   * @readonly
   */
  concurrency: number

  /**
   * @name SummarizeContext#yields
   * @type {number} yields - Total number of times yielding the queue while running.
   * @readonly
   */
  yields: number

  /**
   * @name SummarizeContext#output#iterator
   * @type {OutputIterator} output - Iterator which provides keys and values written as output during the REDUCE phase.
   *      <pre> summary.output.iterator().each((key, value) => {...}) </pre>
   * @readonly
   */
  output: OutputIterator

  /**
   * @name SummarizeContext#inputSummary
   * @type {InputSummary} inputSummary - Stats about the INPUT stage.
   */
  inputSummary: SummarizeContext.InputSummary

  /**
   * @name SummarizeContext#mapSummary
   * @type {MapSummary} mapSummary - Stats about the MAP stage.
   */
  mapSummary: SummarizeContext.MapSummary

  /**
   * @name SummarizeContext#reduceSummary
   * @type {ReduceSummary} reduceSummary - Stats about the REDUCE stage.
   */
  reduceSummary: SummarizeContext.ReduceSummary

  /**
   * @return {string}
   */
  toString(): string

  /**
   * Convert to JSON object
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<this>
}

declare namespace SummarizeContext {

  /**
   * Return a new instance of SummarizeContext.InputSummary
   * @class
   * @classdesc Used for accessing Map/Reduce INPUT stage metadata.
   * @return {InputSummary}
   * @constructor
   *
   * @since 2015.2
   */
  export interface InputSummary {

    /**
     * @name InputSummary#dateCreated
     * @type {Date} dateCreated - Time M/R INPUT stage began running.
     * @readonly
     */
    dateCreated: Date

    /**
     * @name InputSummary#seconds
     * @type {number} seconds - Total seconds elapsed while during the INPUT stage.
     * @readonly
     */
    seconds: number

    /**
     * @name InputSummary#usage
     * @type {number} usage - Total usage points consumed during the INPUT stage.
     * @readonly
     */
    usage: number

    /**
     * @name InputSummary#error
     *  @type {string} error - Serialized error is thrown out of getInputData() - if applicable
     *      <pre> var inputError = summary.inputSummary.error; </pre>
     * @readonly
     */
    error: string

    /**
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * Return a new instance of SummarizeContext.MapSummary
   * @class
   * @classdesc Used for accessing Map/Reduce MAP stage metadata.
   * @return {MapSummary}
   * @constructor
   *
   * @since 2015.2
   */
  export interface MapSummary {

    /**
     * @name MapSummary#dateCreated
     * @type {Date} dateCreated - Time MAP stage began running.
     * @readonly
     */
    dateCreated: Date

    /**
     * @name MapSummary#seconds
     * @type {number} seconds - Total seconds elapsed while running MAP stage.
     * @readonly
     */
    seconds: number

    /**
     * @name MapSummary#usage
     * @type {number} usage - Total usage points consumed while running MAP stage.
     * @readonly
     */
    usage: number

    /**
     * @name MapSummary#concurrency
     * @type {number} concurrency - Maximum number of queues utilized at the same time while running MAP stage.
     * @readonly
     */
    concurrency: number

    /**
     * @name MapSummary#yields
     * @type {number} yields - Total number of times yielding the queue while running MAP stage.
     * @readonly
     */
    yields: number

    /**
     * @name MapSummary#keys#iterator
     * @type {KeysIterator} keys - Iterator which provides input keys processed during the MAP phase.
     *      <pre> summary.mapSummary.keys.iterator.each((key, executionCount, completionState) => {...}); </pre>
     * @readonly
     */
    keys: KeysIterator

    /**
     * @name MapSummary#errors#iterator
     * @type {ErrorsIterator} errors - Iterator which provides errors thrown during the MAP phase.
     *      <pre> summary.mapSummary.errors.each((key, error, executionNo) => {...}); </pre>
     * @readonly
     */
    errors: ErrorsIterator

    /**
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * Return a new instance of SummarizeContext.ReduceSummary
   * @class
   * @classdesc Used for accessing Map/Reduce REDUCE stage metadata.
   * @return {ReduceSummary}
   * @constructor
   *
   * @since 2015.2
   */
  export interface ReduceSummary {

    /**
     * @name ReduceSummary#dateCreated
     * @type {Date} dateCreated - Time REDUCE stage began running.
     * @readonly
     */
    dateCreated: Date

    /**
     * @name ReduceSummary#seconds
     * @type {number} seconds - Total seconds elapsed while running REDUCE stage.
     * @readonly
     */
    seconds: number

    /**
     * @name ReduceSummary#usage
     * @type {number} usage - Total usage points consumed while running REDUCE stage.
     * @readonly
     */
    usage: number

    /**
     * @name ReduceSummary#concurrency
     * @type {number} concurrency - Maximum number of queues utilized at the same time while running REDUCE stage.
     * @readonly
     */
    concurrency: number

    /**
     * @name ReduceSummary#yields
     * @type {number} yields - Total number of times yielding the queue while running REDUCE stage.
     * @readonly
     */
    yields: number

    /**
     * @name ReduceSummary#keys#iterator
     * @type {KeysIterator} keys - Iterator which provides input keys processed during the REDUCE phase.
     *      <pre> summary.reduceSummary.iterator.keys.each((key, executionCount, completionState) => {...}); </pre>
     * @readonly
     */
    keys: KeysIterator

    /**
     * @name ReduceSummary#errors#iterator
     * @type {ErrorsIterator} errors - Iterator which provides errors thrown during the REDUCE phase.
     *      <pre> summary.reduceSummary.errors.iterator().each((key, error, executionNo) => {...}); </pre>
     * @readonly
     */
    errors: ErrorsIterator

    /**
     * @return {string}
     */
    toString(): string

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }
}

interface KeysIterator {
  iterator(): {
    each(callback: (key: string, executionCount: number, completionState: 'PENDING' | 'FAILED' | 'COMPLETE') => boolean): void
  }
}

interface ErrorsIterator {
  iterator(): {
    each(callback: (key: string, error: string, executionNo: number) => boolean): void
  }
}

interface OutputIterator {
  iterator(): {
    each(callback: (key: string, value: string) => boolean): void
  }
}