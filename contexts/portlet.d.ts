/**
 * SuiteScript Portlet Script Context
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1515620357)
 */

/// <reference path="../N/ui/serverWidget.d.ts" />

/**
 * Defines the portlet script trigger point
 * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407951965)
 *
 * @since 2015.2
 */
interface PortletParams {

  /**
   * The portlet object used for rendering
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407951965)
   *
   * @type {Portlet}
   * @readonly
   *
   * @since 2015.2
   */
  portlet: PortletParams.Portlet;

  /**
   * The column index for the portlet on the dashboard (1=left, 2=center, 3=right)
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407951965)
   *
   * @type {1|2|3}
   * @readonly
   *
   * @since 2015.2
   */
  column: 1 | 2 | 3;

  /**
   * The customer ID for the selected customer
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407951965)
   *
   * @type {string}
   * @readonly
   *
   * @since 2015.2
   */
  entity: string;
}

declare namespace PortletParams {

  /**
   * Scriptable Portlet
   * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671201924)
   *
   * @since 2016.2
   */
  export interface Portlet {

    /**
     * The title of the portlet
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671239839)
     *
     * @type {string}
     *
     * @since 2016.2
     */
    title: string;

    /**
     * The complete HTML contents of the portlet
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671250782)
     *
     * @type {string}
     *
     * @since 2016.2
     */
    html: string;

    /**
     * File Id for Portlet form script
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671255061)
     *
     * @type {number}
     *
     * @since 2016.2
     */
    clientScriptFileId: number;

    /**
     * File Path for Portlet form script
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671252102)
     *
     * @type {string}
     *
     * @since 2016.2
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example 'SuiteScripts/client_script' - Absolute path
     * @example './client_script.js' - Relative path
     * @example './client_script' - Relative path
     */
    clientScriptModulePath: string;

    /**
     * Add a Column to the Portlete
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671258932)
     *
     * @param {Object} options
     * @param {string} options.id
     * @param {string} options.type
     * @param {string} options.label
     * @param {string} [options.align]
     * @return {ListColumn}
     *
     * @since 2016.2
     */
    addColumn(options: {
      id: string,
      type: string,
      label: string,
      align?: string,
    }): serverWidget.ListColumn;

    /**
     * Add an Edit or Edit/View column
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671382437)
     *
     * @param {Object} options
     * @param {string} options.column
     * @param {string} [options.showHrefCol]
     * @param {string} [options.showView]
     * @param {string} [options.link]
     * @param {string} [options.linkParam]
     * @param {string} [options.linkParamName]
     * @return {serverWidget.ListColumn}
     *
     * @since 2016.2
     */
    addEditColumn(options: {
      column: string,
      showHrefCol?: string,
      showView?: string,
      link?: string,
      linkParam?: string,
      linkParamName?: string,
    }): serverWidget.ListColumn;

    /**
     * Add a field to the form
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671374019)
     *
     * @param {Object} options
     * @param {string} options.id
     * @param {string} options.type
     * @param {string} options.label
     * @param {string} [options.source]
     * @return {Field}
     *
     * @since 2016.2
     */
    addField(options: {
      id: string,
      type: string,
      label: string,
      source?: string,
    }): serverWidget.Field;

    /**
     * Add a field to the form
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671361504)
     *
     * @param {Object} options
     * @param {string} options.text
     * @param {string} [options.url]
     * @param {number} [options.align]
     * @return {Portlet}
     *
     * @since 2016.2
     */
    addLine(options: {
      text: string,
      url?: string,
      align?: string,
    }): Portlet;

    /**
     * Add a row (Array of name/value pairs or search.Result)
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671356858)
     *
     * @param {Object} options
     * @param {search.Result|Object<string, string>} options.row
     * @return {Portlet}
     *
     * @since 2016.2
     */
    addRow(options: {
      row: search.Result | {
        [p: string]: string,
      },
    }): Portlet;

    /**
     * Adds multiple rows (Array of search.Result or name/value pair Arrays)
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671342323)
     *
     * @param {Object} options
     * @param {search.Result[]|Object<string, string>[]} options.rows
     * @return {Portlet}
     *
     * @since 2016.2
     */
    addRows(options: {
      rows: search.Result[] | {
        [p: string]: string,
      }[],
    }): Portlet;

    /**
     * Add a field to the form
     * @see [Help Center](@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4671280175)
     *
     * @param {Object} options
     * @param {string} options.url
     * @param {string} [options.label]
     * @param {string} [options.target]
     * @return {serverWidget.Button}
     *
     * @since 2016.2
     */
    setSubmitButton(options: {
      url: string,
      label?: string,
      target?: string,
    }): serverWidget.Button;
  }
}