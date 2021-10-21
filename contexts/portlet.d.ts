/// <reference path="../N/ui/serverWidget.d.ts" />

/**
 * SuiteScript Portlet Script Context
 *
 * @NApiVersion 2.x
 */

interface PortletParams {
  /**
   * The portlet object used for rendering
   * @type {Portlet}
   *
   * @readonly
   */
  portlet: PortletParams.Portlet

  /**
   * The column index for the portlet on the dashboard (1=left, 2=center, 3=right)
   * @type {1|2|3}
   *
   * @readonly
   */
  column: 1 | 2 | 3

  /**
   * The customer ID for the selected customer
   * @type {string}
   *
   * @readonly
   */
  entity: string
}

declare namespace PortletParams {

  /**
   * Scriptable Portlet.
   *
   * @protected
   * @constructor
   */
  export interface Portlet {

    /**
     * @name Portlet#title
     * @type {string}
     */
    title: string

    /**
     * @name Portlet#html
     * @type {string}
     */
    html: string

    /**
     * file Id for Portlet form script
     *
     * @name Portlet#clientScriptFileId
     * @type {number}
     */
    clientScriptFileId: number

    /**
     * file Path for Portlet form script
     *
     * @name Portlet#clientScriptModulePath
     * @type {string}
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example './client_script.js' - Relative path
     */
    clientScriptModulePath: string

    /**
     * Add a Column to the Portlete
     *
     * @param {Object} options
     * @param {string} options.id
     * @param {string} options.type
     * @param {string} options.label
     * @param {string} [options.align]
     * @return {ListColumn}
     */
    addColumn(options: {
      id: string,
      type: string,
      label: string,
      align?: string,
    }): serverWidget.ListColumn

    /**
     * Add an Edit or Edit/View column
     *
     * @param {Object} options
     * @param {string} options.column
     * @param {string} [options.showHrefCol]
     * @param {string} [options.showView]
     * @param {string} [options.link]
     * @param {string} [options.linkParam]
     * @param {string} [options.linkParamName]
     * @return {serverWidget.ListColumn}
     */
    addEditColumn(options: {
      column: string,
      showHrefCol?: string,
      showView?: string,
      link?: string,
      linkParam?: string,
      linkParamName?: string,
    }): serverWidget.ListColumn

    /**
     * Add a field to the form
     *
     * @param {Object} options
     * @param {string} options.id
     * @param {string} options.type
     * @param {string} options.label
     * @param {string} [options.source]
     * @return {Field}
     */
    addField(options: {
      id: string,
      type: string,
      label: string,
      source?: string,
    }): serverWidget.Field

    /**
     * Add a field to the form
     *
     * @param {Object} options
     * @param {string} options.text
     * @param {string} [options.url]
     * @param {number} [options.align]
     * @return {Portlet}
     */
    addLine(options: {
      text: string,
      url?: string,
      align?: string,
    }): Portlet

    /**
     * Add a row (Array of name/value pairs or search.Result)
     *
     * @param {Object} options
     * @param {search.Result|Object<string, string>} options.row
     * @return {Portlet}
     */
    addRow(options: {
      row: search.Result | {
        [p: string]: string,
      },
    }): Portlet

    /**
     * Add a field to the form
     *
     * @param {Object} options
     * @param {string} options.url
     * @param {string} [options.label]
     * @param {string} [options.target]
     * @return {serverWidget.Button}
     */
    setSubmitButton(options: {
      url: string,
      label?: string,
      target?: string,
    }): serverWidget.Button

    /**
     * Adds multiple rows (Array of search.Result or name/value pair Arrays)
     *
     * @param {Object} options
     * @param {search.Result[]|Object<string, string>[]} options.rows
     * @return {Portlet}
     */
    addRows(options: {
      rows: search.Result[] | {
        [p: string]: string,
      }[],
    }): Portlet
  }
}