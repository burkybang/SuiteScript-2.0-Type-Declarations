/**
 * SuiteScript mapReduceSummary module
 *
 * @module N/mapReduceSummary
 * @NApiVersion 2.x
 *
 */
function mapReduceSummary() {
}

/**
 * Return a new instance of mapreduce.Summary
 * @class
 * @classdesc Used for accessing Map/Reduce job output and metadata.
 * @return {Summary}
 * @constructor
 *
 * @since 2015.2
 */
function Summary() {
  
  /**
   * @name Summary#dateCreated
   * @type {Date} dateCreated - Time M/R job began running.
   * @readonly
   */
  this.prototype.dateCreated = undefined;
  /**
   * @name Summary#seconds
   * @type {Number} seconds - Total seconds elapsed while running.
   * @readonly
   */
  this.prototype.seconds = undefined;
  /**
   * @name Summary#usage
   * @type {Number} usage - Total usage points consumed while running.
   * @readonly
   */
  this.prototype.usage = undefined;
  /**
   * @name Summary#concurrency
   * @type {Number} concurrency - Maximum number of queues utilized at the same time while running.
   * @readonly
   */
  this.prototype.concurrency = undefined;
  /**
   * @name Summary#yields
   * @type {Number} yields - Total number of times yielding the queue while running.
   * @readonly
   */
  this.prototype.yields = undefined;
  /**
   * @name Summary#output#iterator()
   * @type {Iterator} iterator - Iterator which provides keys and values written as output during the REDUCE phase.
   *      <pre> summary.output.iterator().each(function(key, value){...}); </pre>
   * @readonly
   */
  this.prototype.output = undefined;
  /**
   * @name Summary#inputSummary
   * @type {InputSummary} inputSummary - Stats about the INPUT stage.
   */
  this.prototype.inputSummary = undefined;
  /**
   * @name Summary#mapSummary
   * @type {mapSummary} mapSummary - Stats about the MAP stage.
   */
  this.prototype.mapSummary = undefined;
  /**
   * @name Summary#reduceSummary
   * @type {reduceSummary} reduceSummary - Stats about the REDUCE stage.
   */
  this.prototype.reduceSummary = undefined;
  /**
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of mapreduce.InputSummary
 * @class
 * @classdesc Used for accessing Map/Reduce INPUT stage metadata.
 * @return {InputSummary}
 * @constructor
 *
 * @since 2015.2
 */
function InputSummary() {
  
  /**
   * @name InputSummary#dateCreated
   * @type {Date} dateCreated - Time M/R INPUT stage began running.
   * @readonly
   */
  this.prototype.dateCreated = undefined;
  /**
   * @name InputSummary#seconds
   * @type {Number} seconds - Total seconds elapsed while during the INPUT stage.
   * @readonly
   */
  this.prototype.seconds = undefined;
  /**
   * @name InputSummary#usage
   * @type {Number} usage - Total usage points consumed during the INPUT stage.
   * @readonly
   */
  this.prototype.usage = undefined;
  /**
   * @name InputSummary#error
   *  @type {SuiteScriptError} error - Serialized error is thrown out of getInputData() - if applicable
   *      <pre> var inputError = summary.input.error; </pre>
   * @readonly
   */
  this.prototype.error = undefined;
  /**
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of mapreduce.MapSummary
 * @class
 * @classdesc Used for accessing Map/Reduce MAP stage metadata.
 * @return {MapSummary}
 * @constructor
 *
 * @since 2015.2
 */
function MapSummary() {
  
  /**
   * @name MapSummary#dateCreated
   * @type {Date} dateCreated - Time MAP stage began running.
   * @readonly
   */
  this.prototype.dateCreated = undefined;
  /**
   * @name MapSummary#seconds
   * @type {Number} seconds - Total seconds elapsed while running MAP stage.
   * @readonly
   */
  this.prototype.seconds = undefined;
  /**
   * @name MapSummary#usage
   * @type {Number} usage - Total usage points consumed while running MAP stage.
   * @readonly
   */
  this.prototype.usage = undefined;
  /**
   * @name MapSummary#concurrency
   * @type {Number} concurrency - Maximum number of queues utilized at the same time while running MAP stage.
   * @readonly
   */
  this.prototype.concurrency = undefined;
  /**
   * @name MapSummary#yields
   * @type {Number} yields - Total number of times yielding the queue while running MAP stage.
   * @readonly
   */
  this.prototype.yields = undefined;
  /**
   * @name MapSummary#keys#iterator
   * @type {Iterator} iterator - Iterator which provides input keys processed during the MAP phase.
   *      <pre> summary.map.keys.iterator.each(function(key){...}); </pre>
   * @readonly
   */
  this.prototype.keys = undefined;
  /**
   * @name MapSummary#errors#iterator
   * @type {Iterator} iterator - Iterator which provides errors thrown during the MAP phase.
   *      <pre> summary.map.errors.each(function(key, value){...}); </pre>
   * @readonly
   */
  this.prototype.errors = undefined;
  /**
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of mapreduce.ReduceSummary
 * @class
 * @classdesc Used for accessing Map/Reduce REDUCE stage metadata.
 * @return {ReduceSummary}
 * @constructor
 *
 * @since 2015.2
 */
function ReduceSummary() {
  
  /**
   * @name ReduceSummary#dateCreated
   * @type {Date} dateCreated - Time REDUCE stage began running.
   * @readonly
   */
  this.prototype.dateCreated = undefined;
  /**
   * @name ReduceSummary#seconds
   * @type {Number} seconds - Total seconds elapsed while running REDUCE stage.
   * @readonly
   */
  this.prototype.seconds = undefined;
  /**
   * @name ReduceSummary#usage
   * @type {Number} usage - Total usage points consumed while running REDUCE stage.
   * @readonly
   */
  this.prototype.usage = undefined;
  /**
   * @name ReduceSummary#concurrency
   * @type {Number} concurrency - Maximum number of queues utilized at the same time while running REDUCE stage.
   * @readonly
   */
  this.prototype.concurrency = undefined;
  /**
   * @name ReduceSummary#yields
   * @type {Number} yields - Total number of times yielding the queue while running REDUCE stage.
   * @readonly
   */
  this.prototype.yields = undefined;
  /**
   * @name ReduceSummary#keys#iterator
   * @type {Iterator} iterator - Iterator which provides input keys processed during the REDUCE phase.
   *      <pre> summary.reduce.iterator.keys.each(function(key){...}); </pre>
   * @readonly
   */
  this.prototype.keys = undefined;
  /**
   * @name ReduceSummary#errors#iterator
   * @type {Iterator} iterator - Iterator which provides errors thrown during the REDUCE phase.
   *      <pre> summary.reduce.errors.iterator().each(function(key, value){...}); </pre>
   * @readonly
   */
  this.prototype.errors = undefined;
  /**
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   */
  this.prototype.toJSON = function () {
  };
}

mapReduceSummary = new mapReduceSummary();
/**
 * @type {mapReduceSummary}
 */
N.prototype.mapReduceSummary = mapReduceSummary;