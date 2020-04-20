/// <reference path="../N/error.d.ts" />

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
   * @name GetInputContext#isRestarted
   * @type {boolean} isRestarted - Indicates whether the getInputData(inputContext) function was invoked again
   * @readonly
   */
  isRestarted: boolean
  
  /**
   * @name GetInputContext#ObjectRef
   * @type {{
   *   id: number,
   *   value: 'search',
   * }} ObjectRef
   * @readonly
   */
  ObjectRef: { id: number, value: 'search' }
  
  /**
   * @return {string}
   */
  toString(): string
  
  /**
   * JSON.stringify() implementation.
   * @return {Object}
   */
  toJSON(): Object
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
   * @type {Iterator} iterator - Iterator which provides errors thrown during particular map function execution.
   *      <pre> context.errors.each(function(key, value){...}); </pre>
   * @readonly
   */
  errors
  
  /**
   * Writes the key value pairs
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   * @return {void}
   */
  write(options: { key: string, value: Object }): void
  
  /**
   * @return {string}
   */
  toString(): string
  
  /**
   * JSON.stringify() implementation.
   * @return {Object}
   */
  toJSON(): Object
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
   * @type {Iterator} iterator - Iterator which provides errors thrown during particular reduce function execution.
   *      <pre> context.errors.iterator().each(function(key, value){...}); </pre>
   * @readonly
   */
  errors
  
  /**
   * Writes the key/values groups
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   */
  write(options: { key: string, value: Object }): void
  
  /**
   * @return {string}
   */
  toString(): string
  
  /**
   * JSON.stringify() implementation.
   * @return {Object}
   */
  toJSON(): Object
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
   * @name SummarizeContext#output#iterator()
   * @type {Iterator} iterator - Iterator which provides keys and values written as output during the REDUCE phase.
   *      <pre> summary.output.iterator().each(function(key, value){...}) </pre>
   * @readonly
   */
  output
  
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
   * JSON.stringify() implementation.
   * @return {Object}
   */
  toJSON(): Object
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
     *  @type {error.SuiteScriptError} error - Serialized error is thrown out of getInputData() - if applicable
     *      <pre> var inputError = summary.input.error; </pre>
     * @readonly
     */
    error: error.SuiteScriptError
    
    /**
     * @return {string}
     */
    toString(): string
    
    /**
     * JSON.stringify() implementation.
     * @return {Object}
     */
    toJSON(): Object
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
     * @type {Iterator} iterator - Iterator which provides input keys processed during the MAP phase.
     *      <pre> summary.map.keys.iterator.each(function(key){...}); </pre>
     * @readonly
     */
    keys
    
    /**
     * @name MapSummary#errors#iterator
     * @type {Iterator} iterator - Iterator which provides errors thrown during the MAP phase.
     *      <pre> summary.map.errors.each(function(key, value){...}); </pre>
     * @readonly
     */
    errors
    
    /**
     * @return {string}
     */
    toString(): string
    
    /**
     * JSON.stringify() implementation.
     * @return {Object}
     */
    toJSON(): Object
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
     * @type {Iterator} iterator - Iterator which provides input keys processed during the REDUCE phase.
     *      <pre> summary.reduce.iterator.keys.each(function(key){...}); </pre>
     * @readonly
     */
    keys
    
    /**
     * @name ReduceSummary#errors#iterator
     * @type {Iterator} iterator - Iterator which provides errors thrown during the REDUCE phase.
     *      <pre> summary.reduce.errors.iterator().each(function(key, value){...}); </pre>
     * @readonly
     */
    errors
    
    /**
     * @return {string}
     */
    toString()
    
    /**
     * JSON.stringify() implementation.
     * @return {Object}
     */
    toJSON(): Object
  }
}