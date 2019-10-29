/**
 * SuiteScript plugin module
 *
 * @module N/plugin
 * @NApiVersion 2.x
 *
 */
function plugin() {
}

/**
 * Returns the script IDs of implementations of the given custom plugin type. If there's no custom plugin type
 * with the given script ID available for the executing script, an empty list is returned.
 *
 * @param {Object} options
 * @param {string} options.type  script ID of the custom plugin type
 * @param {boolean} options.includeDefault (optional)  true if default implementation is to be included in the list; default value is true
 * @return {string[]} list of scriptIDs of the custom plugin implementations
 */
plugin.prototype.findImplementations = function (options) {
};

/**
 * Instantiates an implementation of the given custom plugin type. If no implementation ID is explicitly given then
 * the implementation which is currently selected in the UI (Manage Plug-ins page) will be returned.
 *
 * @param {Object} options
 * @param {string} options.type  script ID of the custom plugin type
 * @param {string} options.implementation (optional)  script ID of the custom plugin implementation
 * @return {Object} an object implementing the custom plugin type
 */
plugin.prototype.loadImplementation = function (options) {
};

plugin = new plugin();
/**
 * @type {plugin}
 */
N.prototype.plugin = plugin;