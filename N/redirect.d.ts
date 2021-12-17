/// <reference path="./record.d.ts" />
/// <reference path="./search.d.ts" />

/**
 * SuiteScript redirect module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424286105}
 *
 * @module N/redirect
 * @NApiVersion 2.x
 */
interface redirect {

  /**
   * Redirect to a URL
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988767}
   *
   * @governance 0 units
   * @restriction Can only direct to external URL by suitelet without login
   *
   * @param {Object} options
   * @param {string} options.url
   * @param {Object<string, *>} [options.parameters]
   * @return {void}
   */
  redirect(options: {
    url: string,
    parameters?: {
      [p: string]: any,
    },
  }): void;

  /**
   * Redirect to a suitelet
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988773}
   *
   * @governance 0 units
   * @restriction Suitelet and UE only
   *
   * @param {Object} options
   * @param {string} options.scriptId  script Id
   * @param {string} options.deploymentId deployment Id
   * @param {boolean} [options.isExternal] default to false indicate it is external Suitelet URL
   * @param {Object<string, *>} [options.parameters]
   * @return {void}
   */
  toSuitelet(options: {
    scriptId: string,
    deploymentId: string,
    isExternal?: boolean,
    parameters?: {
      [p: string]: any,
    },
  }): void;

  /**
   * Redirect to a record
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424995667}
   *
   * @governance 0 units
   * @restriction Suitelet and UE only
   *
   * @param {Object} options
   * @param {record.Type|string} options.type record type
   * @param {number|string} options.id  record Id
   * @param {boolean} [options.isEditMode] default to false
   * @param {Object<string, *>} [options.parameters]
   * @return {void}
   */
  toRecord(options: {
    type: record.Type | string,
    id?: number | string,
    isEditMode?: boolean,
    parameters?: {
      [p: string]: any,
    },
  }): void;

  /**
   * Redirect to a task link
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988740}
   *
   * @governance 0 units
   * @restriction Suitelet and UE only
   *
   * @param {Object} options
   * @param {number|string} options.id task Id
   * @param {Object<string, *>} [options.parameters]
   * @return {void}
   */
  toTaskLink(options: {
    id: number | string,
    parameters?: {
      [p: string]: any,
    },
  }): void;

  /**
   * Redirect to saved search
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988669}
   *
   * @governance 5 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {number|string} options.id search id
   * @return {void}
   */
  toSavedSearch(options: {
    id: number | string,
  }): void;

  /**
   * Redirect to saved search results
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988694}
   *
   * @governance 5 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {number|string} options.id search id
   * @return {void}
   */
  toSavedSearchResult(options: {
    id: number | string,
  }): void;

  /**
   * Redirect to search
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988719}
   *
   * @governance 0 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {search.Search} options.search
   * @return {void}
   */
  toSearch(options: {
    search: search.Search,
  }): void;

  /**
   * Redirect to search results
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988724}
   *
   * @governance 0 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {search.Search} options.search
   * @return {void}
   */
  toSearchResult(options: {
    search: search.Search,
  }): void;
}