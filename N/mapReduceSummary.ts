/**
 * SuiteScript Map/Reduce Summary
 *
 * @NApiVersion 2.x
 *
 */

/**
 * Return a new instance of mapreduce.Summary
 * @class
 * @classdesc Used for accessing Map/Reduce job output and metadata.
 * @returns {Summary}
 * @constructor
 *
 * @since 2015.2
 */
class Summary {
  
  /**
   * @name Summary#dateCreated
   * @type {Date} dateCreated - Time M/R job began running.
   * @readonly
   */
  dateCreated = undefined;
  
  /**
   * @name Summary#seconds
   * @type {Number} seconds - Total seconds elapsed while running.
   * @readonly
   */
  seconds = undefined;
  
  /**
   * @name Summary#usage
   * @type {Number} usage - Total usage points consumed while running.
   * @readonly
   */
  usage = undefined;
  
  /**
   * @name Summary#concurrency
   * @type {Number} concurrency - Maximum number of queues utilized at the same time while running.
   * @readonly
   */
  concurrency = undefined;
  
  /**
   * @name Summary#yields
   * @type {Number} yields - Total number of times yielding the queue while running.
   * @readonly
   */
  yields = undefined;
  
  /**
   * @name Summary#output#iterator()
   * @type {Iterator} iterator - Iterator which provides keys and values written as output during the REDUCE phase.
   *      <pre> summary.output.iterator().each(function(key, value){...}); </pre>
   * @readonly
   */
  output = undefined;
  
  /**
   * @name Summary#inputSummary
   * @type {InputSummary} inputSummary - Stats about the INPUT stage.
   */
  inputSummary = undefined;
  
  /**
   * @name Summary#mapSummary
   * @type {mapSummary} mapSummary - Stats about the MAP stage.
   */
  mapSummary = undefined;
  
  /**
   * @name Summary#reduceSummary
   * @type {reduceSummary} reduceSummary - Stats about the REDUCE stage.
   */
  reduceSummary = undefined;
  
  /**
   * @returns {string}
   */
  toString() {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  toJSON() {
  };
}

/**
 * Return a new instance of mapreduce.InputSummary
 * @class
 * @classdesc Used for accessing Map/Reduce INPUT stage metadata.
 * @returns {InputSummary}
 * @constructor
 *
 * @since 2015.2
 */
class InputSummary {
  
  /**
   * @name InputSummary#dateCreated
   * @type {Date} dateCreated - Time M/R INPUT stage began running.
   * @readonly
   */
  dateCreated = undefined;
  
  /**
   * @name InputSummary#seconds
   * @type {Number} seconds - Total seconds elapsed while during the INPUT stage.
   * @readonly
   */
  seconds = undefined;
  
  /**
   * @name InputSummary#usage
   * @type {Number} usage - Total usage points consumed during the INPUT stage.
   * @readonly
   */
  usage = undefined;
  
  /**
   * @name InputSummary#error
   *  @type {SuiteScriptError} error - Serialized error is thrown out of getInputData() - if applicable
   *      <pre> var inputError = summary.input.error; </pre>
   * @readonly
   */
  error = undefined;
  
  /**
   * @returns {string}
   */
  toString() {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  toJSON() {
  };
}

/**
 * Return a new instance of mapreduce.MapSummary
 * @class
 * @classdesc Used for accessing Map/Reduce MAP stage metadata.
 * @returns {MapSummary}
 * @constructor
 *
 * @since 2015.2
 */
class MapSummary {
  
  /**
   * @name MapSummary#dateCreated
   * @type {Date} dateCreated - Time MAP stage began running.
   * @readonly
   */
  dateCreated = undefined;
  
  /**
   * @name MapSummary#seconds
   * @type {Number} seconds - Total seconds elapsed while running MAP stage.
   * @readonly
   */
  seconds = undefined;
  
  /**
   * @name MapSummary#usage
   * @type {Number} usage - Total usage points consumed while running MAP stage.
   * @readonly
   */
  usage = undefined;
  
  /**
   * @name MapSummary#concurrency
   * @type {Number} concurrency - Maximum number of queues utilized at the same time while running MAP stage.
   * @readonly
   */
  concurrency = undefined;
  
  /**
   * @name MapSummary#yields
   * @type {Number} yields - Total number of times yielding the queue while running MAP stage.
   * @readonly
   */
  yields = undefined;
  
  /**
   * @name MapSummary#keys#iterator
   * @type {Iterator} iterator - Iterator which provides input keys processed during the MAP phase.
   *      <pre> summary.map.keys.iterator.each(function(key){...}); </pre>
   * @readonly
   */
  keys = undefined;
  
  /**
   * @name MapSummary#errors#iterator
   * @type {Iterator} iterator - Iterator which provides errors thrown during the MAP phase.
   *      <pre> summary.map.errors.each(function(key, value){...}); </pre>
   * @readonly
   */
  errors = undefined;
  
  /**
   * @returns {string}
   */
  toString() {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  toJSON() {
  };
}

/**
 * Return a new instance of mapreduce.ReduceSummary
 * @class
 * @classdesc Used for accessing Map/Reduce REDUCE stage metadata.
 * @returns {ReduceSummary}
 * @constructor
 *
 * @since 2015.2
 */
class ReduceSummary {
  
  /**
   * @name ReduceSummary#dateCreated
   * @type {Date} dateCreated - Time REDUCE stage began running.
   * @readonly
   */
  dateCreated = undefined;
  
  /**
   * @name ReduceSummary#seconds
   * @type {Number} seconds - Total seconds elapsed while running REDUCE stage.
   * @readonly
   */
  seconds = undefined;
  
  /**
   * @name ReduceSummary#usage
   * @type {Number} usage - Total usage points consumed while running REDUCE stage.
   * @readonly
   */
  usage = undefined;
  
  /**
   * @name ReduceSummary#concurrency
   * @type {Number} concurrency - Maximum number of queues utilized at the same time while running REDUCE stage.
   * @readonly
   */
  concurrency = undefined;
  
  /**
   * @name ReduceSummary#yields
   * @type {Number} yields - Total number of times yielding the queue while running REDUCE stage.
   * @readonly
   */
  yields = undefined;
  
  /**
   * @name ReduceSummary#keys#iterator
   * @type {Iterator} iterator - Iterator which provides input keys processed during the REDUCE phase.
   *      <pre> summary.reduce.iterator.keys.each(function(key){...}); </pre>
   * @readonly
   */
  keys = undefined;
  
  /**
   * @name ReduceSummary#errors#iterator
   * @type {Iterator} iterator - Iterator which provides errors thrown during the REDUCE phase.
   *      <pre> summary.reduce.errors.iterator().each(function(key, value){...}); </pre>
   * @readonly
   */
  errors = undefined;
  
  /**
   * @returns {string}
   */
  toString() {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  toJSON() {
  };
}