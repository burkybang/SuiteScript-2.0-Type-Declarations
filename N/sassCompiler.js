/**
 * SuiteScript SASS Compiler module (Server Side)
 *
 * @module N/sassCompiler
 * @NApiVersion 2.x
 *
 */
function sassCompiler() {
}

/**
 * Return a new instance of Output used to store the result of a compilation process.
 *
 * @protected
 * @classDescription Encapsulation of the output returned by a SASS compiler.
 * @return {Output}
 * @constructor
 *
 * @since 2018.1
 */
function Output() {
  
  /**
   * Total amount of source files.
   * @name Output#sourceFileCount
   * @type number
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.sourceFileCount = undefined;
  /**
   * Total size of source files in bytes.
   * @name Output#sourceSize
   * @type number
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.sourceSize = undefined;
  /**
   * Total duration of the compilation.
   * @name Output#compileTime
   * @type number
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   */
  this.prototype.compileTime = undefined;
  /**
   * Returns the object type name (sassCompiler.Output)
   *
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   *
   * @returns {{type: string, sourceFileCount: *, sourceSize: *, compileTime: *}}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Compiles input SASS file into output CSS file.
 * Note: Supports SCSS syntax only.
 *
 * @governance 100 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.inputPath Absolute FileCabinet input SASS file path
 * @param {string} options.outputPath Absolute FileCabinet output CSS file path
 * @param {Object} options.settings (optional) Additional settings
 * @return {Output}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_TYPE_ARG if some parameter is of unsupported type
 * @throws {SuiteScriptError} SASS_ILLEGAL_ARGUMENT if some parameter has illegal value
 * @throws {SuiteScriptError} SASS_FILE_NON_EXISTENT if file does not exist
 * @throws {SuiteScriptError} SASS_FILE_INACCESSIBLE if file is not accessible
 * @throws {SuiteScriptError} SASS_INPUT_SIZE_EXCEEDED_BY_FILE if file size exceeds the compiler limit
 * @throws {SuiteScriptError} SASS_UNABLE_TO_READ_FILE if it is not possible to read the file
 * @throws {SuiteScriptError} SASS_UNABLE_TO_COMPILE if some problem occurs during the compilation process
 *
 * @since 2018.1
 */
function compile() {
}

sassCompiler = new sassCompiler();
/**
 * @type {sassCompiler}
 */
N.prototype.sassCompiler = sassCompiler;