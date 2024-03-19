/// <reference path="./record.d.ts" />
/// <reference path="./search.d.ts" />

/**
 * SuiteScript redirect module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424286105}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424286105.html}
 *
 * @module N/redirect
 * @NApiVersion 2.x
 */
interface redirect {

  /**
   * Redirect to a URL
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988767}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988767.html}
   *
   * @governance 0 units
   * @restriction Can only direct to external URL by suitelet without login
   *
   * @param options
   * @param options.url
   * @param [options.parameters]
   */
  redirect(options: {
    url: string,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Redirect to a suitelet
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988773}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988773.html}
   *
   * @governance 0 units
   * @restriction Suitelet and User Event scripts only
   *
   * @param options
   * @param options.scriptId  script Id
   * @param options.deploymentId deployment Id
   * @param [options.isExternal] default to false indicate it is external Suitelet URL
   * @param [options.parameters]
   */
  toSuitelet(options: {
    scriptId: string,
    deploymentId: string,
    isExternal?: boolean,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Redirect to a record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424995667}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424995667.html}
   *
   * @governance 0 units
   * @restriction Suitelet and User Event scripts only
   *
   * @param options
   * @param options.type record type
   * @param options.id  record Id
   * @param [options.isEditMode] default to false
   * @param [options.parameters]
   */
  toRecord(options: {
    type: record.Type | `${record.Type}` | record.CustomType | string,
    id?: number | string,
    isEditMode?: boolean,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Redirect to a task link
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988740}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988740.html}
   *
   * @governance 0 units
   * @restriction Suitelet and User Event scripts only
   *
   * @param options
   * @param options.id task Id
   * @param [options.parameters]
   */
  toTaskLink(options: {
    id: number | string,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Redirect to saved search
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988669}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988669.html}
   *
   * @governance 5 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param options
   * @param options.id search id
   */
  toSavedSearch(options: {
    id: number | string,
  }): void;

  /**
   * Redirect to saved search results
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988694}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988694.html}
   *
   * @governance 5 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param options
   * @param options.id search id
   */
  toSavedSearchResult(options: {
    id: number | string,
  }): void;

  /**
   * Redirect to search
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988719}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988719.html}
   *
   * @governance 0 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param options
   * @param options.search
   */
  toSearch(options: {
    search: search.Search,
  }): void;

  /**
   * Redirect to search results
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988724}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988724.html}
   *
   * @governance 0 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param options
   * @param options.search
   */
  toSearchResult(options: {
    search: search.Search,
  }): void;
}