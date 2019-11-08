/**
 * SuiteScript Map/Reduce Context
 *
 * @NApiVersion 2.x
 *
 */

/**
 * Return a new instance of mapreduce.InputContext
 * @class
 * @classdesc Contains ObjectRefType enum.
 * @returns {InputContext}
 * @constructor
 *
 * @since 2015.2
 */
class InputContext {
  
  /**
   * @name InputContext#isRestarted
   * @type {boolean} isRestarted - Indicates whether the getInputData(inputContext) function was invoked again
   * @readonly
   */
  isRestarted = undefined;
  
  /**
   * @name InputContext#ObjectRefType
   * @type {string} value - Enum describing valid "type" attribute values for ObjectRef.
   * @readonly
   */
  ObjectRefType = undefined;
  
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
 * Return a new instance of mapreduce.MapContext
 * @class
 * @classdesc Contains the key/value pairs to process through the map stage.
 * @returns {MapContext}
 * @constructor
 *
 * @since 2015.2
 */
class MapContext {
  
  /**
   * @name MapContext#isRestarted
   * @type {boolean} isRestarted - Indicates whether the map(mapContext) function was invoked again
   * @readonly
   */
  isRestarted = undefined;
  
  /**
   * @name MapContext#executionNo
   * @type {int} executionNo - execution no for current map record, i.e. for which time is the map function for the current record executed
   * @readonly
   */
  executionNo = undefined;
  
  /**
   * @name MapContext#key
   * @type {string} key - The key to be processed through the map stage
   * @readonly
   */
  key = undefined;
  
  /**
   * @name MapContext#value
   * @type {string} value - The value to be processed through the map stage.
   * @readonly
   */
  value = undefined;
  
  /**
   * @name MapContext#errors#iterator
   * @type {Iterator} iterator - Iterator which provides errors thrown during particular map function execution.
   *      <pre> context.errors.each(function(key, value){...}); </pre>
   * @readonly
   */
  errors = undefined;
  
  /**
   * Writes the key value pairs
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   */
  write(options) {
  };
  
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
 * Return a new instance of mapreduce.ReduceContext
 * @class
 * @classdesc Contains the key/values groups to process through the reduce stage.
 * @returns {ReduceContext}
 * @constructor
 *
 * @since 2015.2
 */
class ReduceContext {
  
  /**
   * @name ReduceContext#isRestarted
   * @type {boolean} isRestarted - Indicates whether the Rap(reduceContext) function was invoked again
   * @readonly
   */
  isRestarted = undefined;
  
  /**
   * @name ReduceContext#executionNo
   * @type {int} executionNo - execution no for current reduce record list, i.e. for which time is the reduce function for the current reduce record list executed
   * @readonly
   */
  executionNo = undefined;
  
  /**
   * @name ReduceContext#key
   * @type {string} key - When the map/reduce process includes a map stage, the key is derived from the key written
   *     by MapContext.write(key,value).
   When the map stage is skipped, the key depends on the input type:
   * @readonly
   */
  key = undefined;
  
  /**
   * @name MapContext#value
   * @type {string} values - When the map/reduce process includes a map stage, the values are derived from the values
   *     written by MapContext.write(key,value).
   When the map stage is skipped, the values are already grouped by key into a list, and the value depends on the input type:
   * @readonly
   */
  values = undefined;
  
  /**
   * @name ReduceContext#errors#iterator
   * @type {Iterator} iterator - Iterator which provides errors thrown during particular reduce function execution.
   *      <pre> context.errors.iterator().each(function(key, value){...}); </pre>
   * @readonly
   */
  errors = undefined;
  
  /**
   * Writes the key/values groups
   *
   * @param {Object} options
   * @param {string} options.key - The key to write
   * @param {Object} options.value - The value to write
   */
  write(options) {
  };
  
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