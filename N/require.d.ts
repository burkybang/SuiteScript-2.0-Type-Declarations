/**
 * @param {string[]} dependencies list of module paths, either to file cabinet scripts or standard modules (via virtual path)
 * @param {Function} callback which executes once all dependencies are available
 *
 * @throws {error.SuiteScriptError} MODULE_DOES_NOT_EXIST if path is invalid
 *
 * @since 2015.2
 */
declare function require(dependencies, callback)