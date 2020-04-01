// todo: Convert to TypeScript definition

/**
 * SuiteScript selectFieldOptions module
 *
 * @private
 * @module N/selectFieldOptions
 * @NApiVersion 2.0
 *
 */
function selectFieldOptions() {
}

/**
 * Returns filter options, segmentation options and value options relevant to a field
 * with respect to the state of the supplied record.
 *
 * @governance 0 units
 * @param {Object} options
 * @param {Object} options.record
 * @param {string} options.sublistId
 * @param {string} options.fieldId
 * @param {string} [options.group=-ALLGROUP-]
 * @param {string} [options.searchText=]
 * @param {number|string} [options.segment=1]
 *
 * @return {Object} result
 * @return {Object[]} result.filters
 * @return {string} result.filters[].value
 * @return {string} result.filters[].label
 * @return {Object[]} result.segments
 * @return {string} result.segments[].value
 * @return {string} result.segments[].label
 * @return {Object[]} result.options
 * @return {string} result.options[].key
 * @return {string} result.options[].value
 * @return {string} result.options[].label
 * @return {string[]} result.options[].description
 *
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if options is missing
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if options.record is missing
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if options.fieldId is missing
 * @throws {SuiteScriptError} INVALID_KEY_OR_REF if options.record does not have a field with an id macthing options.fieldId
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.group is not a string
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.searchText is not a string
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.segment is not an integer
 *
 * @since 2015.2
 */
selectFieldOptions.prototype['get'] = function (options) {
};

/**
 * responsible for taking an options object and making a server request to retieve select field options data
 *
 * @param {Object} options
 * @param {Object} options.record
 * @param {string} options.sublistId
 * @param {string} options.fieldId
 * @param {string} [options.group=-ALLGROUP-]
 * @param {string} [options.searchText=]
 * @param {number|string} [options.segment=1]
 *
 * @return {Object} result
 * @return {Object[]} result.filters
 * @return {string} result.filters[].value
 * @return {string} result.filters[].label
 * @return {Object[]} result.segments
 * @return {string} result.segments[].value
 * @return {string} result.segments[].label
 * @return {Object[]} result.options
 * @return {string} result.options[].key
 * @return {string} result.options[].value
 * @return {string} result.options[].label
 * @return {string[]} result.options[].description
 */
function fetchOptions() {
}

selectFieldOptions = new selectFieldOptions();
/**
 * @type {selectFieldOptions}
 */
N.prototype.selectFieldOptions = selectFieldOptions;