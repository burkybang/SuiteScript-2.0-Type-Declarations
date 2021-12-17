/**
 * SuiteScript portlet module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4473510730}
 *
 * @module N/portlet
 * @NApiVersion 2.x
 */
interface portlet {

  /**
   * Causes a FORM type portlet to immediately refresh.
   *
   * @return {void}
   * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
   *
   * @since 2016.1
   */
  refresh(): void;

  /**
   * Causes a FORM type portlet to be immediately resized.
   *
   * @return {void}
   * @throws {error.SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
   *
   * @since 2016.1
   */
  resize(): void;
}