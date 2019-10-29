/**
 * SuiteScript Dialog Module (Client Side)
 *
 * @module N/ui/dialog
 * @suiteScriptVersion 2.x
 *
 */
function dialog() {
}

/**
 * Creates an Alert Dialog with an OK Button.
 *
 * @restriction Client SuiteScript only
 *
 * @param {Object} options
 * @param {string} [options.title] The title of the alert. Defaults to empty string.
 * @param {string} [options.message] The content of the alert. Defaults to empty string.
 *
 * @return {Promise} A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
 *                   The callback will be passed in a response object which contains the value of the button where:
 *                   OK returns true.
 * @since 2016.1
 */
dialog.prototype.alert = function (options) {
};

/**
 * Creates an Confirm Dialog with an OK and Cancel Button.
 *
 * @restriction Client SuiteScript only
 *
 * @param {Object} options
 * @param {string} [options.title] The title of the confirmation box. Defaults to empty string.
 * @param {string} [options.message] The content of the confirmation box. Defaults to empty string.
 *
 * @return {Promise} A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
 *           The callback will be passed in a response object which contains the value of the button where:
 *           OK returns true and Cancel returns false.
 * @since 2016.1
 */
dialog.prototype.confirm = function (options) {
};

/**
 * Creates an Dialog with the specified buttons.
 *
 * @restriction Client SuiteScript only
 *
 * @param {Object} options
 * @param {string} [options.title]   The title of the dialog box. Defaults to empty string.
 * @param {string} [options.message] The content of the dialog box. Defaults to empty string.
 * @param {string} [options.buttons] The list of buttons to add. Each item in the list requires a label and value.
 *                                            If empty, defaults to a button with label "OK" and value true.
 *
 * @return {Promise} A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
 *           The callback will be passed in a response object which contains the value of the button where:
 *           OK returns true and Cancel returns false.
 * @since 2016.1
 *
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if options.buttons is specified and is not an array.
 * @throws {SuiteScriptError} BUTTONS_MUST_INCLUDE_BOTH_A_LABEL_AND_VALUE if options.buttons is specified and one or more items do not have a label and/or value.
 */
dialog.prototype.create = function (options) {
};

dialog = new dialog();
var ui = {};
/**
 * @type {ui}
 */
N.prototype.ui = ui;
/**
 * @type {dialog}
 */
ui.prototype.dialog = dialog;