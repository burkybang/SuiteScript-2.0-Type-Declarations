/// <reference path="./error.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./search.d.ts" />

/**
 * SuiteScript redirect module.
 *
 * Supported only when triggered from the UI, in Suitelets, beforeLoad user event scripts, and afterSubmit user event scripts. Not supported in beforeSubmit, in the asynchronous afterSubmit that runs only during webstore checkout, or in backend contexts such as CSV Import and scheduled scripts. Individual methods are further restricted — see each method's @restriction.
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
   * @governance none
   * @restriction Supported only by Suitelets, beforeLoad User Event scripts, and afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.url The URL to redirect to.
   * @param [options.parameters] Additional URL parameters as key-value pairs.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.url) is missing.
   */
  redirect(options: {
    url: string,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Redirect to a Suitelet
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988773}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988773.html}
   *
   * @governance none
   * @restriction Supported only by Suitelets, beforeLoad User Event scripts, and afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.scriptId The Suitelet's script ID.
   * @param options.deploymentId The script deployment ID.
   * @param [options.isExternal=false] Whether the target is an externally available (no-login) Suitelet URL.
   * @param [options.parameters] Additional URL parameters as key-value pairs.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.scriptId or options.deploymentId) is missing.
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
   * @governance none
   * @restriction Supported only by Suitelets, beforeLoad User Event scripts, and afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.type The record type.
   * @param options.id The record's internal ID.
   * @param [options.isEditMode=false] Whether to open the record in edit mode.
   * @param [options.parameters] Additional URL parameters as key-value pairs.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.type) is missing.
   */
  toRecord(options: {
    type: record.Type | `${record.Type}` | record.CustomType | string,
    id?: number | string,
    isEditMode?: boolean,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Transforms a record to a standard or custom transaction instance and redirects to the new transaction in edit mode. The fromId and fromType can be obtained from the onAction(scriptContext) context of a workflow action script; toType must be specified manually.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157713182405}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157713182405.html}
   *
   * @governance none
   * @restriction Supported only by Workflow Action scripts
   * @since 2020.1
   *
   * @param options
   * @param options.fromId The ID of the source record.
   * @param options.fromType The ID of the source record type.
   * @param options.toType The ID of the target record type.
   * @param [options.parameters] Additional parameters as key-value pairs. Use the record.fieldId format to default field values on the transformed record; invalid keys are ignored.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.fromId, options.fromType, or options.toType) is missing.
   * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE The record type is invalid.
   * @throws {error.SuiteScriptError} INVALID_RCRD_TRANSFRM That type of record transformation is not allowed. See the documentation for a list of supported transformation types.
   */
  toRecordTransform(options: {
    fromId: number | string,
    fromType: record.Type | `${record.Type}` | record.CustomType | string,
    toType: record.Type | `${record.Type}` | record.CustomType | string,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Redirect to a task link
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988740}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988740.html}
   *
   * @governance none
   * @restriction Supported only by Suitelets, beforeLoad User Event scripts, and afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.id The task link ID.
   * @param [options.parameters] Additional URL parameters as key-value pairs.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.id) is missing.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE options.id must be a string.
   */
  toTaskLink(options: {
    id: string,
    parameters?: Record<string, string | number>,
  }): void;

  /**
   * Redirect to saved search
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988669}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988669.html}
   *
   * @governance 5 units
   * @restriction Supported only by afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.id The saved search ID.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.id) is missing.
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
   * @restriction Supported only by afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.id The saved search ID.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.id) is missing.
   */
  toSavedSearchResult(options: {
    id: number | string,
  }): void;

  /**
   * Redirect to search
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988719}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988719.html}
   *
   * @governance none
   * @restriction Supported only by afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.search The search to redirect to.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.search) is missing.
   */
  toSearch(options: {
    search: search.Search,
  }): void;

  /**
   * Redirect to search results
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424988724}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4424988724.html}
   *
   * @governance none
   * @restriction Supported only by afterSubmit User Event scripts — except the asynchronous afterSubmit that runs only during webstore checkout
   * @since 2015.2
   *
   * @param options
   * @param options.search The search whose results to redirect to.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument (options.search) is missing.
   */
  toSearchResult(options: {
    search: search.Search,
  }): void;
}
