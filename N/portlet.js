/**
 * SuiteScript portlet module
 *
 * @module N/portlet
 * @NApiVersion 2.x
 *
 */
function portlet() {
}

/**
 * Causes a FORM type portlet to immediately refresh.
 *
 * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
 *
 * @since 2016.1
 */
portlet.prototype.refresh = function () {
};

/**
 * Causes a FORM type portlet to be immediately resized.
 *
 * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
 *
 * @since 2016.1
 */
portlet.prototype.resize = function () {
};

portlet = new portlet();
/**
 * @type {portlet}
 */
N.prototype.portlet = portlet;