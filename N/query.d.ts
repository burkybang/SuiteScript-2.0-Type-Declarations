/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />

/**
 * SuiteScript query module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275060}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275060.html}
 * @module N/query
 * @NApiVersion 2.x
 */
interface query {

  create: {

    /**
     * Creates a `query.Query` object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275581}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275581.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2018.1
     *
     * @param type The query type that you want to use for the initial query definition.
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH_TYPE The specified query type is invalid.
     */
    (type: query.Type | `${query.Type}` | string): query.Query;

    /**
     * Creates a `query.Query` object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275581}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275581.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2018.1
     *
     * @param options
     * @param options.type The query type that you want to use for the initial query definition.
     * @param [options.columns] An array of objects to be used as query columns.
     * @param [options.condition] A condition for the query.
     * @param [options.sort] An array of objects representing sort options.
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH_TYPE The specified query type is invalid.
     */
    (options: {
      type: query.Type | `${query.Type}` | string,
      columns?: Parameters<query.Query['createColumn']>[0][],
      condition?: Parameters<query.Query['createCondition']>[0],
      sort?: Parameters<query.Query['createSort']>[0][],
    }): query.Query;
  };

  /**
   * Creates a `query.RelativeDate` object that represents a date relative to the current date.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544108154}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544108154.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.dateId The ID of the relative date to create.
   * @param options.value The value to use to create the relative date.
   *
   * @throws {error.SuiteScriptError} INVALID_DATE_ID The specified value for `options.dateId` is not a value from the `query.DateId` enum.
   */
  createRelativeDate(options: {
    dateId: query.DateId | `${query.DateId}`,
    value: number,
  }): query.RelativeDate;

  createPeriod: {

    /**
     * Creates a `query.Period` object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289670344}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289670344.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2020.1
     *
     * @param code The code of the period to create.
     *
     * @throws {error.SuiteScriptError} INVALID_PERIOD_ADJUSTMENT The specified period adjustment is not a value from the `query.PeriodAdjustment` enum.
     * @throws {error.SuiteScriptError} INVALID_PERIOD_CODE The specified period code is not a value from the `query.PeriodCode` enum.
     * @throws {error.SuiteScriptError} INVALID_PERIOD_TYPE The specified period type is not a value from the `query.PeriodType` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Any of the parameters is not a string.
     */
    (code: query.PeriodCode | `${query.PeriodCode}`): query.Period;

    /**
     * Creates a `query.Period` object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289670344}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289670344.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2020.1
     *
     * @param options
     * @param options.code The code of the period to create.
     * @param [options.adjustment] The adjustment of the period to create.
     * @param [options.type] The type of the period to create.
     *
     * @throws {error.SuiteScriptError} INVALID_PERIOD_ADJUSTMENT The specified period adjustment is not a value from the `query.PeriodAdjustment` enum.
     * @throws {error.SuiteScriptError} INVALID_PERIOD_CODE The specified period code is not a value from the `query.PeriodCode` enum.
     * @throws {error.SuiteScriptError} INVALID_PERIOD_TYPE The specified period type is not a value from the `query.PeriodType` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Any of the parameters is not a string.
     */
    (options: {
      code: query.PeriodCode | `${query.PeriodCode}`,
      adjustment?: query.PeriodAdjustment | `${query.PeriodAdjustment}`,
      type?: query.PeriodType | `${query.PeriodType}`,
    }): query.Period;
  };

  load: {

    /**
     * Loads an existing query as a `query.Query` object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510349101}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510349101.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param id The workbook ID or dataset ID of the query definition to load.
     *
     * @throws {error.SuiteScriptError} UNABLE_TO_LOAD_QUERY A query with the specified ID cannot be loaded because the query does not exist or you do not have permission to load it.
     * @throws {error.SuiteScriptError} WORKBOOK_MORE_TABLEVIEWS_ARE_ASSIGNED More than one table view is included in the specified workbook or dataset.
     * @throws {error.SuiteScriptError} WORKBOOK_NO_TABLEVIEW_IS_ASSIGNED No table views are included in the specified workbook or dataset.
     */
    (id: number | string): query.Query;

    /**
     * Loads an existing query as a `query.Query` object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510349101}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510349101.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param options
     * @param options.id The workbook ID or dataset ID of the query definition to load.
     *
     * @throws {error.SuiteScriptError} UNABLE_TO_LOAD_QUERY A query with the specified ID cannot be loaded because the query does not exist or you do not have permission to load it.
     * @throws {error.SuiteScriptError} WORKBOOK_MORE_TABLEVIEWS_ARE_ASSIGNED More than one table view is included in the specified workbook or dataset.
     * @throws {error.SuiteScriptError} WORKBOOK_NO_TABLEVIEW_IS_ASSIGNED No table views are included in the specified workbook or dataset.
     */
    (options: {
      id: number | string,
    }): query.Query;

    promise: {

      /**
       * Loads an existing query asynchronously as a `query.Query` object.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1552419444}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1552419444.html}
       *
       * @governance 5 units
       * @restriction Client-side and server-side scripts
       * @since 2018.2
       *
       * @param id The workbook ID or dataset ID of the query definition to load.
       *
       * @throws {error.SuiteScriptError} UNABLE_TO_LOAD_QUERY A query with the specified ID cannot be loaded because the query does not exist or you do not have permission to load it.
       * @throws {error.SuiteScriptError} WORKBOOK_MORE_TABLEVIEWS_ARE_ASSIGNED More than one table view is included in the specified workbook or dataset.
       * @throws {error.SuiteScriptError} WORKBOOK_NO_TABLEVIEW_IS_ASSIGNED No table views are included in the specified workbook or dataset.
       */
      (id: number | string): Promise<query.Query>;

      /**
       * Loads an existing query asynchronously as a `query.Query` object.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1552419444}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1552419444.html}
       *
       * @governance 5 units
       * @restriction Client-side and server-side scripts
       * @since 2018.2
       *
       * @param options
       * @param options.id The workbook ID or dataset ID of the query definition to load.
       *
       * @throws {error.SuiteScriptError} UNABLE_TO_LOAD_QUERY A query with the specified ID cannot be loaded because the query does not exist or you do not have permission to load it.
       * @throws {error.SuiteScriptError} WORKBOOK_MORE_TABLEVIEWS_ARE_ASSIGNED More than one table view is included in the specified workbook or dataset.
       * @throws {error.SuiteScriptError} WORKBOOK_NO_TABLEVIEW_IS_ASSIGNED No table views are included in the specified workbook or dataset.
       */
      (options: {
        id: number | string,
      }): Promise<query.Query>;
    };
  };

  delete: {

    /**
     * Deletes an existing query.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819817}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819817.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param id The script ID of the query to delete.
     *
     * @throws {error.SuiteScriptError} UNABLE_TO_DELETE_QUERY A query with the specified ID cannot be deleted because the query does not exist or you do not have permission to delete it.
     */
    (id: number | string): void;

    /**
     * Deletes an existing query.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819817}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819817.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2018.2
     *
     * @param options
     * @param options.id The script ID of the query to delete.
     *
     * @throws {error.SuiteScriptError} UNABLE_TO_DELETE_QUERY A query with the specified ID cannot be deleted because the query does not exist or you do not have permission to delete it.
     */
    (options: {
      id: number | string,
    }): void;

    promise: {

      /**
       * Deletes an existing query.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819817}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819817.html}
       *
       * @governance 5 units
       * @restriction Client-side and server-side scripts
       * @since 2018.2
       *
       * @param id The script ID of the query to delete.
       *
       * @throws {error.SuiteScriptError} UNABLE_TO_DELETE_QUERY A query with the specified ID cannot be deleted because the query does not exist or you do not have permission to delete it.
       */
      (id: number | string): Promise<void>;

      /**
       * Deletes an existing query.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819817}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819817.html}
       *
       * @governance 5 units
       * @restriction Client-side and server-side scripts
       * @since 2018.2
       *
       * @param options
       * @param options.id The script ID of the query to delete.
       *
       * @throws {error.SuiteScriptError} UNABLE_TO_DELETE_QUERY A query with the specified ID cannot be deleted because the query does not exist or you do not have permission to delete it.
       */
      (options: {
        id: number | string,
      }): Promise<void>;
    };
  };

  runSuiteQL: {

    /**
     * Runs an arbitrary SuiteQL query.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960542026}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960542026.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2020.1
     *
     * @param query The string representation of the SuiteQL query to run.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
     */
    (query: string): query.ResultSet;

    /**
     * Runs an arbitrary SuiteQL query.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960542026}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960542026.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2020.1
     *
     * @param options
     * @param options.query The string representation of the SuiteQL query to run.
     * @param [options.params] The parameters to use in the SuiteQL query.
     * @param [options.customScriptId] A unique identifier used for potential performance issues in a query.
     * @param [options.metaDataProvider] Indicates whether the query should fail if you lack the necessary permissions for some fields or records.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
     */
    (options: {
      query: string,
      params?: (string | number | boolean)[],
      customScriptId?: string,
      metaDataProvider?: query.MetadataProvider | `${query.MetadataProvider}`,
    }): query.ResultSet;

    promise: {

      /**
       * Asynchronously runs an arbitrary SuiteQL query.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0429104416}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0429104416.html}
       *
       * @governance 10 units
       * @restriction Client-side and server-side scripts
       * @since 2020.1
       *
       * @param query The string representation of the SuiteQL query to run.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
       */
      (query: string): Promise<query.ResultSet>;

      /**
       * Asynchronously runs an arbitrary SuiteQL query.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0429104416}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0429104416.html}
       *
       * @governance 10 units
       * @restriction Client-side and server-side scripts
       * @since 2020.1
       *
       * @param options
       * @param options.query The string representation of the SuiteQL query to run.
       * @param [options.params] The parameters to use in the SuiteQL query.
       * @param [options.customScriptId] A unique identifier used for potential performance issues in a query.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
       */
      (options: {
        query: string,
        params?: (string | number | boolean)[],
        customScriptId?: string,
      }): Promise<query.ResultSet>;
    };
  };

  runSuiteQLPaged: {

    /**
     * Runs an arbitrary SuiteQL query as a paged query.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960586441}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960586441.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2020.1
     *
     * @param query The string representation of the SuiteQL query to run.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
     */
    (query: string): query.PagedData;

    /**
     * Runs an arbitrary SuiteQL query as a paged query.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960586441}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960586441.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2020.1
     *
     * @param options
     * @param options.query The string representation of the SuiteQL query to run.
     * @param [options.params] The parameters to use in the SuiteQL query.
     * @param [options.pageSize] The size of each page in the query results. The default value is 50 results per page. The minimum page size is 5 results per page, and the maximum page size is 1000 results per page.
     * @param [options.customScriptId] A unique identifier used for potential performance issues in a query.
     * @param [options.metaDataProvider] Indicates whether the query should fail if you lack the necessary permissions for some fields or records.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
     */
    (options: {
      query: string,
      params?: (string | number | boolean)[],
      pageSize?: PageSize,
      customScriptId?: string,
      metaDataProvider?: query.MetadataProvider | `${query.MetadataProvider}`,
    }): query.PagedData;

    promise: {

      /**
       * Asynchronously runs an arbitrary SuiteQL query as a paged query.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0429112941}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0429112941.html}
       *
       * @governance 10 units
       * @restriction Client-side and server-side scripts
       * @since 2020.1
       *
       * @param query The string representation of the SuiteQL query to run.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
       */
      (query: string): Promise<query.PagedData>;

      /**
       * Asynchronously runs an arbitrary SuiteQL query as a paged query.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0429112941}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0429112941.html}
       *
       * @governance 10 units
       * @restriction Client-side and server-side scripts
       * @since 2020.1
       *
       * @param options
       * @param options.query The string representation of the SuiteQL query to run.
       * @param [options.params] The parameters to use in the SuiteQL query.
       * @param [options.pageSize] The size of each page in the query results. The default value is 50 results per page. The minimum page size is 5 results per page, and the maximum page size is 1000 results per page.
       * @param [options.customScriptId] A unique identifier used for potential performance issues in a query.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The parameter is missing.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG Types other than string, number, or boolean are included in `options.params`.
       */
      (options: {
        query: string,
        params?: (string | number | boolean)[],
        pageSize?: PageSize,
        customScriptId?: string,
      }): Promise<query.PagedData>;
    };
  };

  listTables: {

    /**
     * Lists the table view objects that are included in a workbook in SuiteAnalytics Workbook
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289760700}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289760700.html}
     *
     * @governance 5 units
     * @since 2020.1
     *
     * @param workbookId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options or workbookId are undefined
     * @throws {error.SuiteScriptError} SCRIPT_ID_OF_WORKBOOK_IS_REQUIRED if workbookId represents an analytical record that is not a workbook
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if workbookId is not valid
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if workbookId is not a string
     */
    (workbookId: string): { name: string, scriptId: string }[];

    /**
     * Lists the table view objects that are included in a workbook in SuiteAnalytics Workbook
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289760700}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289760700.html}
     *
     * @governance 5 units
     * @since 2020.1
     *
     * @param options
     * @param options.workbookId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options or workbookId are undefined
     * @throws {error.SuiteScriptError} SCRIPT_ID_OF_WORKBOOK_IS_REQUIRED if workbookId represents an analytical record that is not a workbook
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if workbookId is not valid
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if workbookId is not a string
     */
    (options: {
      workbookId: string,
    }): { name: string, scriptId: string }[];

    promise: {

      /**
       * Lists the table view objects that are included in a workbook in SuiteAnalytics Workbook asynchronously
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289760700}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289760700.html}
       *
       * @governance 5 units
       * @since 2020.1
       *
       * @param workbookId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options or workbookId are undefined
       * @throws {error.SuiteScriptError} SCRIPT_ID_OF_WORKBOOK_IS_REQUIRED if workbookId represents an analytical record that is not a workbook
       * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if workbookId is not valid
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if workbookId is not a string
       */
      (workbookId: string): Promise<{ name: string, scriptId: string }[]>;

      /**
       * Lists the table view objects that are included in a workbook in SuiteAnalytics Workbook asynchronously
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289760700}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289760700.html}
       *
       * @governance 5 units
       * @since 2020.1
       *
       * @param options
       * @param options.workbookId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options or workbookId are undefined
       * @throws {error.SuiteScriptError} SCRIPT_ID_OF_WORKBOOK_IS_REQUIRED if workbookId represents an analytical record that is not a workbook
       * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if workbookId is not valid
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if workbookId is not a string
       */
      (options: {
        workbookId: string,
      }): Promise<{ name: string, scriptId: string }[]>;
    };
  };
}

declare namespace query {

  /**
   * Enum that determines how field and record metadata is resolved when a SuiteQL query runs.
   *
   * Undocumented in the Help Center; present at runtime as a frozen module member (`query.MetadataProvider`).
   * Used as the type of the `metaDataProvider` option on `runSuiteQL` and `runSuiteQLPaged`. The resulting
   * `ResultSet.metadataProvider` / `PagedData.metadataProvider` property reports the provider in effect
   * (observed to be `SUITE_QL` for SuiteQL queries regardless of the option passed).
   */
  export enum MetadataProvider {
    STATIC = 'STATIC',
    SUITE_QL = 'SUITE_QL',
  }

  /**
   * Enum for aggregate functions
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878932}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878932.html}
   */
  export enum Aggregate {
    // Calculates the average value.
    AVERAGE = 'AVERAGE',
    // Calculates the average distinct value.
    AVERAGE_DISTINCT = 'AVERAGE_DISTINCT',
    // Counts the number of results.
    COUNT = 'COUNT',
    // Counts the number of distinct results.
    COUNT_DISTINCT = 'COUNT_DISTINCT',
    // Determines the maximum value. If the values are dates, the most recent date is determined.
    MAXIMUM = 'MAXIMUM',
    // Determines the maximum distinct value. If the values are dates, the most recent date is determined.
    MAXIMUM_DISTINCT = 'MAXIMUM_DISTINCT',
    // Calculates the median value.
    MEDIAN = 'MEDIAN',
    // Determines the minimum value. If the values are dates, the earliest date is determined.
    MINIMUM = 'MINIMUM',
    // Determines the minimum distinct value. If the values are dates, the earliest date is determined.
    MINIMUM_DISTINCT = 'MINIMUM_DISTINCT',
    // Adds all values.
    SUM = 'SUM',
    // Adds all distinct values.
    SUM_DISTINCT = 'SUM_DISTINCT',
  }

  /**
   * Enum for date codes in relative dates
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544111587}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544111587.html}
   */
  export enum DateId {
    DAYS_AGO = 'dago',
    DAYS_FROM_NOW = 'dfn',
    HOURS_AGO = 'hago',
    HOURS_FROM_NOW = 'hfn',
    MINUTES_AGO = 'nago',
    MINUTES_FROM_NOW = 'nfn',
    MONTHS_AGO = 'mago',
    MONTHS_FROM_NOW = 'mfn',
    QUARTERS_AGO = 'qago',
    QUARTERS_FROM_NOW = 'qfn',
    SECONDS_AGO = 'sago',
    SECONDS_FROM_NOW = 'sfn',
    WEEKS_AGO = 'wago',
    WEEKS_FROM_NOW = 'wfn',
    YEARS_AGO = 'yago',
    YEARS_FROM_NOW = 'yfn',
  }

  /**
   * Enum for field contexts
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1552071599}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1552071599.html}
   */
  export enum FieldContext {
    // Displays converted currency amounts using the exchange rate that was in effect on a specific date.
    CONVERTED = 'CONVERTED',
    // Displays consolidated currency amounts in the base currency.
    CURRENCY_CONSOLIDATED = 'CURRENCY_CONSOLIDATED',
    // Displays user-friendly field values. For example, for the entity field on Transaction records, using the DISPLAY enum value displays the name of the entity instead of its ID.
    DISPLAY = 'DISPLAY',
    // Displays user-friendly field values for hierarchical fields (for example, “Parent Company : SUB CAD”). This value is similar to the DISPLAY enum value but applies to hierarchical fields.
    HIERARCHY = 'HIERARCHY',
    // Displays raw field values for hierarchical fields (for example, “1 : 5”). This value is similar to the RAW enum value but applies to hierarchical fields.
    HIERARCHY_IDENTIFIER = 'HIERARCHY_IDENTIFIER',
    // Displays raw field values. For example, for the entity field on Transaction records, using the RAW enum value displays the ID of the entity.
    RAW = 'RAW',
    // No description available
    SIGN_CONSOLIDATED = 'SIGN_CONSOLIDATED',
  }

  /**
   * Enum for operators
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275752}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275752.html}
   */
  export enum Operator {
    AFTER = 'AFTER',
    AFTER_NOT = 'AFTER_NOT',
    ANY_OF = 'ANY_OF',
    ANY_OF_NOT = 'ANY_OF_NOT',
    BEFORE = 'BEFORE',
    BEFORE_NOT = 'BEFORE_NOT',
    BETWEEN = 'BETWEEN',
    BETWEEN_NOT = 'BETWEEN_NOT',
    CONTAIN = 'CONTAIN',
    CONTAIN_NOT = 'CONTAIN_NOT',
    EMPTY = 'EMPTY',
    EMPTY_NOT = 'EMPTY_NOT',
    ENDWITH = 'ENDWITH',
    ENDWITH_NOT = 'ENDWITH_NOT',
    EQUAL = 'EQUAL',
    EQUAL_NOT = 'EQUAL_NOT',
    EXCLUDE_ALL = 'MN_EXCLUDE',
    EXCLUDE_ANY = 'MN_EXCLUDE_ALL',
    EXCLUDE_EXACTLY = 'MN_EXCLUDE_EXACTLY',
    GREATER = 'GREATER',
    GREATER_NOT = 'GREATER_NOT',
    GREATER_OR_EQUAL = 'GREATER_OR_EQUAL',
    GREATER_OR_EQUAL_NOT = 'GREATER_OR_EQUAL_NOT',
    INCLUDE_ALL = 'MN_INCLUDE_ALL',
    INCLUDE_ANY = 'MN_INCLUDE',
    INCLUDE_EXACTLY = 'MN_INCLUDE_EXACTLY',
    IS = 'IS',
    IS_NOT = 'IS_NOT',
    LESS = 'LESS',
    LESS_NOT = 'LESS_NOT',
    LESS_OR_EQUAL = 'LESS_OR_EQUAL',
    LESS_OR_EQUAL_NOT = 'LESS_OR_EQUAL_NOT',
    ON = 'ON',
    ON_NOT = 'ON_NOT',
    ON_OR_AFTER = 'ON_OR_AFTER',
    ON_OR_AFTER_NOT = 'ON_OR_AFTER_NOT',
    ON_OR_BEFORE = 'ON_OR_BEFORE',
    ON_OR_BEFORE_NOT = 'ON_OR_BEFORE_NOT',
    START_WITH = 'START_WITH',
    START_WITH_NOT = 'START_WITH_NOT',
    WITHIN = 'WITHIN',
    WITHIN_NOT = 'WITHIN_NOT',
  }

  /**
   * Holds query.RelativeDate object values for supported date ranges in relative dates. This "enum" is used to pass the
   * `values` argument to Query.createCondition(options) and Component.createCondition(options), and as the value of the
   * RelativeDate.value property. Each member is a pre-built query.RelativeDate object (NOT a string) representing a date
   * range relative to the current date - e.g. `query.createCondition({ fieldId, operator: query.Operator.WITHIN, values:
   * query.RelativeDateRange.THIS_MONTH })`. The members look similar to query.DateId values but serve a different purpose:
   * use query.DateId with query.createRelativeDate(options) to build a RelativeDate; use query.RelativeDateRange members
   * directly as condition values. Declared as a `const` object rather than an `enum` because enum members cannot hold
   * object values; runtime-verified each member is a frozen query.RelativeDate (ctor `RelativeDate`). The abbreviation in
   * each member's comment is the internal date-range code exposed as RelativeDate.dateId.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544111773}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544111773.html}
   *
   * @since 2019.1
   */
  export const RelativeDateRange: {
    // FHBL
    readonly FISCAL_HALF_BEFORE_LAST: RelativeDate,
    // FHBLTD
    readonly FISCAL_HALF_BEFORE_LAST_TO_DATE: RelativeDate,
    // FQBL
    readonly FISCAL_QUARTER_BEFORE_LAST: RelativeDate,
    // FQBLTD
    readonly FISCAL_QUARTER_BEFORE_LAST_TO_DATE: RelativeDate,
    // FYBL
    readonly FISCAL_YEAR_BEFORE_LAST: RelativeDate,
    // FYBLTD
    readonly FISCAL_YEAR_BEFORE_LAST_TO_DATE: RelativeDate,
    // DAGO5
    readonly FIVE_DAYS_AGO: RelativeDate,
    // DFN5
    readonly FIVE_DAYS_FROM_NOW: RelativeDate,
    // DAGO4
    readonly FOUR_DAYS_AGO: RelativeDate,
    // DFN4
    readonly FOUR_DAYS_FROM_NOW: RelativeDate,
    // TWN3W
    readonly FOUR_WEEKS_STARTING_THIS_WEEK: RelativeDate,
    // LBW
    readonly LAST_BUSINESS_WEEK: RelativeDate,
    // LFH
    readonly LAST_FISCAL_HALF: RelativeDate,
    // LFHLFY
    readonly LAST_FISCAL_HALF_ONE_FISCAL_YEAR_AGO: RelativeDate,
    // LFHTD
    readonly LAST_FISCAL_HALF_TO_DATE: RelativeDate,
    // LFQ
    readonly LAST_FISCAL_QUARTER: RelativeDate,
    // LFQLFY
    readonly LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO: RelativeDate,
    // LFQTD
    readonly LAST_FISCAL_QUARTER_TO_DATE: RelativeDate,
    // LFQFYBL
    readonly LAST_FISCAL_QUARTER_TWO_FISCAL_YEARS_AGO: RelativeDate,
    // LFY
    readonly LAST_FISCAL_YEAR: RelativeDate,
    // LFYTD
    readonly LAST_FISCAL_YEAR_TO_DATE: RelativeDate,
    // LM
    readonly LAST_MONTH: RelativeDate,
    // LMLFQ
    readonly LAST_MONTH_ONE_FISCAL_QUARTER_AGO: RelativeDate,
    // LMLFY
    readonly LAST_MONTH_ONE_FISCAL_YEAR_AGO: RelativeDate,
    // LMTD
    readonly LAST_MONTH_TO_DATE: RelativeDate,
    // LMFQBL
    readonly LAST_MONTH_TWO_FISCAL_QUARTERS_AGO: RelativeDate,
    // LMFYBL
    readonly LAST_MONTH_TWO_FISCAL_YEARS_AGO: RelativeDate,
    // LRH
    readonly LAST_ROLLING_HALF: RelativeDate,
    // LRQ
    readonly LAST_ROLLING_QUARTER: RelativeDate,
    // LRY
    readonly LAST_ROLLING_YEAR: RelativeDate,
    // LW
    readonly LAST_WEEK: RelativeDate,
    // LWTD
    readonly LAST_WEEK_TO_DATE: RelativeDate,
    // LY
    readonly LAST_YEAR: RelativeDate,
    // LYTD
    readonly LAST_YEAR_TO_DATE: RelativeDate,
    // MAN
    readonly MONTH_AFTER_NEXT: RelativeDate,
    // MANTD
    readonly MONTH_AFTER_NEXT_TO_DATE: RelativeDate,
    // MBL
    readonly MONTH_BEFORE_LAST: RelativeDate,
    // MBLTD
    readonly MONTH_BEFORE_LAST_TO_DATE: RelativeDate,
    // NBW
    readonly NEXT_BUSINESS_WEEK: RelativeDate,
    // NFH
    readonly NEXT_FISCAL_HALF: RelativeDate,
    // NFQ
    readonly NEXT_FISCAL_QUARTER: RelativeDate,
    // NFY
    readonly NEXT_FISCAL_YEAR: RelativeDate,
    // N4W
    readonly NEXT_FOUR_WEEKS: RelativeDate,
    // NM
    readonly NEXT_MONTH: RelativeDate,
    // NOH
    readonly NEXT_ONE_HALF: RelativeDate,
    // NOM
    readonly NEXT_ONE_MONTH: RelativeDate,
    // NOQ
    readonly NEXT_ONE_QUARTER: RelativeDate,
    // NOW
    readonly NEXT_ONE_WEEK: RelativeDate,
    // NOY
    readonly NEXT_ONE_YEAR: RelativeDate,
    // NW
    readonly NEXT_WEEK: RelativeDate,
    // DAGO90
    readonly NINETY_DAYS_AGO: RelativeDate,
    // DFN90
    readonly NINETY_DAYS_FROM_NOW: RelativeDate,
    // OYBL
    readonly ONE_YEAR_BEFORE_LAST: RelativeDate,
    // PQLFY
    readonly PREVIOUS_FISCAL_QUARTERS_LAST_FISCAL_YEAR: RelativeDate,
    // PQTFY
    readonly PREVIOUS_FISCAL_QUARTERS_THIS_FISCAL_YEAR: RelativeDate,
    // PMLFH
    readonly PREVIOUS_MONTHS_LAST_FISCAL_HALF: RelativeDate,
    // PMLFQ
    readonly PREVIOUS_MONTHS_LAST_FISCAL_QUARTER: RelativeDate,
    // PMLFY
    readonly PREVIOUS_MONTHS_LAST_FISCAL_YEAR: RelativeDate,
    // PMSFHLFY
    readonly PREVIOUS_MONTHS_SAME_FISCAL_HALF_LAST_FISCAL_YEAR: RelativeDate,
    // PMSFQLFY
    readonly PREVIOUS_MONTHS_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR: RelativeDate,
    // PMTFH
    readonly PREVIOUS_MONTHS_THIS_FISCAL_HALF: RelativeDate,
    // PMTFQ
    readonly PREVIOUS_MONTHS_THIS_FISCAL_QUARTER: RelativeDate,
    // PMTFY
    readonly PREVIOUS_MONTHS_THIS_FISCAL_YEAR: RelativeDate,
    // OD
    readonly PREVIOUS_ONE_DAY: RelativeDate,
    // OH
    readonly PREVIOUS_ONE_HALF: RelativeDate,
    // OM
    readonly PREVIOUS_ONE_MONTH: RelativeDate,
    // OQ
    readonly PREVIOUS_ONE_QUARTER: RelativeDate,
    // OW
    readonly PREVIOUS_ONE_WEEK: RelativeDate,
    // OY
    readonly PREVIOUS_ONE_YEAR: RelativeDate,
    // PRH
    readonly PREVIOUS_ROLLING_HALF: RelativeDate,
    // PRQ
    readonly PREVIOUS_ROLLING_QUARTER: RelativeDate,
    // PRY
    readonly PREVIOUS_ROLLING_YEAR: RelativeDate,
    // SDFQBL
    readonly SAME_DAY_FISCAL_QUARTER_BEFORE_LAST: RelativeDate,
    // SDFYBL
    readonly SAME_DAY_FISCAL_YEAR_BEFORE_LAST: RelativeDate,
    // SDLFQ
    readonly SAME_DAY_LAST_FISCAL_QUARTER: RelativeDate,
    // SDLFY
    readonly SAME_DAY_LAST_FISCAL_YEAR: RelativeDate,
    // SDLM
    readonly SAME_DAY_LAST_MONTH: RelativeDate,
    // SDLW
    readonly SAME_DAY_LAST_WEEK: RelativeDate,
    // SDMBL
    readonly SAME_DAY_MONTH_BEFORE_LAST: RelativeDate,
    // SDWBL
    readonly SAME_DAY_WEEK_BEFORE_LAST: RelativeDate,
    // SFHLFY
    readonly SAME_FISCAL_HALF_LAST_FISCAL_YEAR: RelativeDate,
    // SFHLFYTD
    readonly SAME_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE: RelativeDate,
    // SFQFYBL
    readonly SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST: RelativeDate,
    // SFQLFY
    readonly SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR: RelativeDate,
    // SFQLFYTD
    readonly SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE: RelativeDate,
    // SMFQBL
    readonly SAME_MONTH_FISCAL_QUARTER_BEFORE_LAST: RelativeDate,
    // SMFYBL
    readonly SAME_MONTH_FISCAL_YEAR_BEFORE_LAST: RelativeDate,
    // SMLFQ
    readonly SAME_MONTH_LAST_FISCAL_QUARTER: RelativeDate,
    // SMLFQTD
    readonly SAME_MONTH_LAST_FISCAL_QUARTER_TO_DATE: RelativeDate,
    // SMLFY
    readonly SAME_MONTH_LAST_FISCAL_YEAR: RelativeDate,
    // SMLFYTD
    readonly SAME_MONTH_LAST_FISCAL_YEAR_TO_DATE: RelativeDate,
    // SWFYBL
    readonly SAME_WEEK_FISCAL_YEAR_BEFORE_LAST: RelativeDate,
    // SWLFY
    readonly SAME_WEEK_LAST_FISCAL_YEAR: RelativeDate,
    // DAGO60
    readonly SIXTY_DAYS_AGO: RelativeDate,
    // DFN60
    readonly SIXTY_DAYS_FROM_NOW: RelativeDate,
    // DAGO10
    readonly TEN_DAYS_AGO: RelativeDate,
    // DFN10
    readonly TEN_DAYS_FROM_NOW: RelativeDate,
    // DAGO30
    readonly THIRTY_DAYS_AGO: RelativeDate,
    // DFN30
    readonly THIRTY_DAYS_FROM_NOW: RelativeDate,
    // TBW
    readonly THIS_BUSINESS_WEEK: RelativeDate,
    // TFH
    readonly THIS_FISCAL_HALF: RelativeDate,
    // TFHTD
    readonly THIS_FISCAL_HALF_TO_DATE: RelativeDate,
    // TFQ
    readonly THIS_FISCAL_QUARTER: RelativeDate,
    // TFQTD
    readonly THIS_FISCAL_QUARTER_TO_DATE: RelativeDate,
    // TFY
    readonly THIS_FISCAL_YEAR: RelativeDate,
    // TFYTD
    readonly THIS_FISCAL_YEAR_TO_DATE: RelativeDate,
    // TM
    readonly THIS_MONTH: RelativeDate,
    // TMTD
    readonly THIS_MONTH_TO_DATE: RelativeDate,
    // TRH
    readonly THIS_ROLLING_HALF: RelativeDate,
    // TRQ
    readonly THIS_ROLLING_QUARTER: RelativeDate,
    // TRY
    readonly THIS_ROLLING_YEAR: RelativeDate,
    // TW
    readonly THIS_WEEK: RelativeDate,
    // TWTD
    readonly THIS_WEEK_TO_DATE: RelativeDate,
    // TY
    readonly THIS_YEAR: RelativeDate,
    // TYTD
    readonly THIS_YEAR_TO_DATE: RelativeDate,
    // DAGO3
    readonly THREE_DAYS_AGO: RelativeDate,
    // DFN3
    readonly THREE_DAYS_FROM_NOW: RelativeDate,
    // FQB
    readonly THREE_FISCAL_QUARTERS_AGO: RelativeDate,
    // FQBTD
    readonly THREE_FISCAL_QUARTERS_AGO_TO_DATE: RelativeDate,
    // FYB
    readonly THREE_FISCAL_YEARS_AGO: RelativeDate,
    // FYBTD
    readonly THREE_FISCAL_YEARS_AGO_TO_DATE: RelativeDate,
    // MB
    readonly THREE_MONTHS_AGO: RelativeDate,
    // MBTD
    readonly THREE_MONTHS_AGO_TO_DATE: RelativeDate,
    // TODAY
    readonly TODAY: RelativeDate,
    // TODAYTTM
    readonly TODAY_TO_END_OF_THIS_MONTH: RelativeDate,
    // TOMORROW
    readonly TOMORROW: RelativeDate,
    // DAGO2
    readonly TWO_DAYS_AGO: RelativeDate,
    // DFN2
    readonly TWO_DAYS_FROM_NOW: RelativeDate,
    // WAN
    readonly WEEK_AFTER_NEXT: RelativeDate,
    // WANTD
    readonly WEEK_AFTER_NEXT_TO_DATE: RelativeDate,
    // WBL
    readonly WEEK_BEFORE_LAST: RelativeDate,
    // WBLTD
    readonly WEEK_BEFORE_LAST_TO_DATE: RelativeDate,
    // YESTERDAY
    readonly YESTERDAY: RelativeDate,
  };

  /**
   * Enum for formula return types
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878969}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878969.html}
   */
  export enum ReturnType {
    ANY = 'ANY',
    BOOLEAN = 'BOOLEAN',
    CLOBTEXT = 'CLOBTEXT',
    CURRENCY = 'CURRENCY',
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    DURATION = 'DURATION',
    FLOAT = 'FLOAT',
    INTEGER = 'INTEGER',
    KEY = 'KEY',
    PERCENT = 'PERCENT',
    RELATIONSHIP = 'RELATIONSHIP',
    STRING = 'STRING',
    UNKNOWN = 'UNKNOWN',
  }

  /**
   * Enum for sort locales
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819885}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819885.html}
   */
  export enum SortLocale {
    ARABIC = 'ARABIC',
    ARABIC_ABJ_MATCH = 'ARABIC_ABJ_MATCH',
    ARABIC_ABJ_MATCH_CI = 'ARABIC_ABJ_MATCH_CI',
    ARABIC_ABJ_SORT = 'ARABIC_ABJ_SORT',
    ARABIC_ABJ_SORT_CI = 'ARABIC_ABJ_SORT_CI',
    ARABIC_CI = 'ARABIC_CI',
    ARABIC_MATCH = 'ARABIC_MATCH',
    ARABIC_MATCH_CI = 'ARABIC_MATCH_CI',
    ASCII7 = 'ASCII7',
    ASCII7_CI = 'ASCII7_CI',
    AZERBAIJANI = 'AZERBAIJANI',
    AZERBAIJANI_CI = 'AZERBAIJANI_CI',
    BENGALI = 'BENGALI',
    BENGALI_CI = 'BENGALI_CI',
    BIG5 = 'BIG5',
    BIG5_CI = 'BIG5_CI',
    BINARY = 'BINARY',
    BINARY_CI = 'BINARY_CI',
    BULGARIAN = 'BULGARIAN',
    BULGARIAN_CI = 'BULGARIAN_CI',
    CANADIAN_M = 'CANADIAN_M',
    CATALAN = 'CATALAN',
    CATALAN_CI = 'CATALAN_CI',
    CROATIAN = 'CROATIAN',
    CROATIAN_CI = 'CROATIAN_CI',
    CS_CZ = 'CS_CZ',
    CZECH = 'CZECH',
    CZECH_CI = 'CZECH_CI',
    CZECH_PUNCTUATION = 'CZECH_PUNCTUATION',
    CZECH_PUNCTUATION_CI = 'CZECH_PUNCTUATION_CI',
    DA_DK = 'DA_DK',
    DANISH = 'DANISH',
    DANISH_CI = 'DANISH_CI',
    DANISH_M = 'DANISH_M',
    DE_DE = 'DE_DE',
    DUTCH = 'DUTCH',
    DUTCH_CI = 'DUTCH_CI',
    EBCDIC = 'EBCDIC',
    EBCDIC_CI = 'EBCDIC_CI',
    EEC_EURO = 'EEC_EURO',
    EEC_EURO_CI = 'EEC_EURO_CI',
    EEC_EUROPA3 = 'EEC_EUROPA3',
    EEC_EUROPA3_CI = 'EEC_EUROPA3_CI',
    EN = 'EN',
    EN_AU = 'EN_AU',
    EN_CA = 'EN_CA',
    EN_GB = 'EN_GB',
    EN_US = 'EN_US',
    ES_AR = 'ES_AR',
    ES_ES = 'ES_ES',
    ESTONIAN = 'ESTONIAN',
    ESTONIAN_CI = 'ESTONIAN_CI',
    FI_FI = 'FI_FI',
    FINNISH = 'FINNISH',
    FINNISH_CI = 'FINNISH_CI',
    FR_CA = 'FR_CA',
    FR_FR = 'FR_FR',
    FRENCH = 'FRENCH',
    FRENCH_AI = 'FRENCH_AI',
    FRENCH_CI = 'FRENCH_CI',
    FRENCH_M = 'FRENCH_M',
    GBK = 'GBK',
    GBK_AI = 'GBK_AI',
    GBK_CI = 'GBK_CI',
    GENERIC_M = 'GENERIC_M',
    GERMAN = 'GERMAN',
    GERMAN_AI = 'GERMAN_AI',
    GERMAN_CI = 'GERMAN_CI',
    GERMAN_DIN = 'GERMAN_DIN',
    GERMAN_DIN_AI = 'GERMAN_DIN_AI',
    GERMAN_DIN_CI = 'GERMAN_DIN_CI',
    GREEK = 'GREEK',
    GREEK_AI = 'GREEK_AI',
    GREEK_CI = 'GREEK_CI',
    HE_IL = 'HE_IL',
    HEBREW = 'HEBREW',
    HEBREW_AI = 'HEBREW_AI',
    HEBREW_CI = 'HEBREW_CI',
    HKSCS = 'HKSCS',
    HKSCS_AI = 'HKSCS_AI',
    HKSCS_CI = 'HKSCS_CI',
    HUNGARIAN = 'HUNGARIAN',
    HUNGARIAN_AI = 'HUNGARIAN_AI',
    HUNGARIAN_CI = 'HUNGARIAN_CI',
    ICELANDIC = 'ICELANDIC',
    ICELANDIC_AI = 'ICELANDIC_AI',
    ICELANDIC_CI = 'ICELANDIC_CI',
    ID_ID = 'ID_ID',
    INDONESIAN = 'INDONESIAN',
    INDONESIAN_AI = 'INDONESIAN_AI',
    INDONESIAN_CI = 'INDONESIAN_CI',
    IT_IT = 'IT_IT',
    ITALIAN = 'ITALIAN',
    ITALIAN_AI = 'ITALIAN_AI',
    ITALIAN_CI = 'ITALIAN_CI',
    JA_JP = 'JA_JP',
    JAPANESE_M = 'JAPANESE_M',
    KO_KR = 'KO_KR',
    KOREAN_M = 'KOREAN_M',
    LATIN = 'LATIN',
    LATIN_AI = 'LATIN_AI',
    LATIN_CI = 'LATIN_CI',
    LATVIAN = 'LATVIAN',
    LATVIAN_AI = 'LATVIAN_AI',
    LATVIAN_CI = 'LATVIAN_CI',
    LITHUANIAN = 'LITHUANIAN',
    LITHUANIAN_AI = 'LITHUANIAN_AI',
    LITHUANIAN_CI = 'LITHUANIAN_CI',
    MALAY = 'MALAY',
    MALAY_AI = 'MALAY_AI',
    MALAY_CI = 'MALAY_CI',
    NL_NL = 'NL_NL',
    NO_NO = 'NO_NO',
    NORWEGIAN = 'NORWEGIAN',
    NORWEGIAN_AI = 'NORWEGIAN_AI',
    NORWEGIAN_CI = 'NORWEGIAN_CI',
    POLISH = 'POLISH',
    POLISH_AI = 'POLISH_AI',
    POLISH_CI = 'POLISH_CI',
    PT_BR = 'PT_BR',
    PUNCTUATION = 'PUNCTUATION',
    PUNCTUATION_AI = 'PUNCTUATION_AI',
    PUNCTUATION_CI = 'PUNCTUATION_CI',
    ROMANIAN = 'ROMANIAN',
    ROMANIAN_AI = 'ROMANIAN_AI',
    ROMANIAN_CI = 'ROMANIAN_CI',
    RU_RU = 'RU_RU',
    RUSSIAN = 'RUSSIAN',
    RUSSIAN_AI = 'RUSSIAN_AI',
    RUSSIAN_CI = 'RUSSIAN_CI',
    SCHINESE_PINYIN_M = 'SCHINESE_PINYIN_M',
    SCHINESE_RADICAL_M = 'SCHINESE_RADICAL_M',
    SCHINESE_STROKE_M = 'SCHINESE_STROKE_M',
    SLOVAK = 'SLOVAK',
    SLOVAK_AI = 'SLOVAK_AI',
    SLOVAK_CI = 'SLOVAK_CI',
    SLOVENIAN = 'SLOVENIAN',
    SLOVENIAN_AI = 'SLOVENIAN_AI',
    SLOVENIAN_CI = 'SLOVENIAN_CI',
    SPANISH = 'SPANISH',
    SPANISH_AI = 'SPANISH_AI',
    SPANISH_CI = 'SPANISH_CI',
    SPANISH_M = 'SPANISH_M',
    SV_SE = 'SV_SE',
    SWEDISH = 'SWEDISH',
    SWEDISH_AI = 'SWEDISH_AI',
    SWEDISH_CI = 'SWEDISH_CI',
    SWISS = 'SWISS',
    SWISS_AI = 'SWISS_AI',
    SWISS_CI = 'SWISS_CI',
    TCHINESE_RADICAL_M = 'TCHINESE_RADICAL_M',
    TCHINESE_STROKE_M = 'TCHINESE_STROKE_M',
    TH_TH = 'TH_TH',
    THAI_M = 'THAI_M',
    TR_TR = 'TR_TR',
    TURKISH = 'TURKISH',
    TURKISH_AI = 'TURKISH_AI',
    TURKISH_CI = 'TURKISH_CI',
    UKRAINIAN = 'UKRAINIAN',
    UKRAINIAN_AI = 'UKRAINIAN_AI',
    UKRAINIAN_CI = 'UKRAINIAN_CI',
    UNICODE_BINARY = 'UNICODE_BINARY',
    UNICODE_BINARY_AI = 'UNICODE_BINARY_AI',
    UNICODE_BINARY_CI = 'UNICODE_BINARY_CI',
    VI_VN = 'VI_VN',
    VIETNAMESE = 'VIETNAMESE',
    VIETNAMESE_AI = 'VIETNAMESE_AI',
    VIETNAMESE_CI = 'VIETNAMESE_CI',
    WEST_EUROPEAN = 'WEST_EUROPEAN',
    WEST_EUROPEAN_AI = 'WEST_EUROPEAN_AI',
    WEST_EUROPEAN_CI = 'WEST_EUROPEAN_CI',
    ZH_CN = 'ZH_CN',
    ZH_TW = 'ZH_TW',
  }

  /**
   * Enum for query types
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878994}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878994.html}
   */
  export enum Type {
    ACCOUNT = 'account',
    ACCOUNT_PERIOD_ACTIVITY = 'accountperiodactivity',
    ACCOUNTING_BOOK = 'accountingbook',
    ACCOUNTING_CONTEXT = 'accountingcontext',
    ACCOUNTING_PERIOD = 'accountingperiod',
    ACTIVITY = 'activity',
    ADDRESS_BOOK = 'addressbook',
    ADVANCED_PDF_TEMPLATE = 'advancedpdftemplate',
    ALL_PARSER_PLUGIN = 'allparserplugin',
    ALLOCATION_METHOD = 'allocationmethod',
    AMORTIZATION_SCHEDULE = 'amortizationschedule',
    AMORTIZATION_TEMPLATE = 'amortizationtemplate',
    AS_CHARGED_PROJECT_REVENUE_RULE = 'aschargedprojectrevenuerule',
    AUTHORIZATION_CONSENT = 'authorizationconsent',
    AUTOMATED_CLEARING_HOUSE = 'automatedclearinghouse',
    BILLING_CLASS = 'billingclass',
    BILLING_RATE_CARD = 'billingratecard',
    BILLING_REVENUE_EVENT = 'billingrevenueevent',
    BILLING_SCHEDULE = 'billingschedule',
    BILL_RUN = 'billrun',
    BILL_RUN_SCHEDULE = 'billrunschedule',
    BIN = 'bin',
    BONUS = 'bonus',
    BONUS_TYPE = 'bonustype',
    BUDGET_LEGACY = 'budgetlegacy',
    BUDGETCATEGORY = 'budgetcategory',
    BUDGETIMPORT = 'budgetimport',
    BUDGETS = 'budgets',
    BUDGET_EXCHANGE_RATE = 'budgetexchangerate',
    BULK_PROC_SUBMISSION = 'bulkprocsubmission',
    BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
    BUNDLE_INSTALLATION_SCRIPT_DEPLOYMENT = 'bundleinstallationscriptdeployment',
    BUSINESS_EVENTS_PROCESSING_HISTORY = 'businesseventsprocessinghistory',
    BUYING_REASON = 'buyingreason',
    BUYING_TIME_FRAME = 'buyingtimeframe',
    CALENDAR_EVENT = 'calendarevent',
    CAMPAIGN_AUDIENCE = 'campaignaudience',
    CAMPAIGN_CATEGORY = 'campaigncategory',
    CAMPAIGN_CHANNEL = 'campaignchannel',
    CAMPAIGN_EMAIL_ADDRESS = 'campaignemailaddress',
    CAMPAIGN_EVENT = 'campaignevent',
    CAMPAIGN_FAMILY = 'campaignfamily',
    CAMPAIGN_OFFER = 'campaignoffer',
    CAMPAIGN_RESPONSE = 'campaignresponse',
    CAMPAIGN_SEARCH_ENGINE = 'campaignsearchengine',
    CAMPAIGN_SUBSCRIPTION = 'campaignsubscription',
    CAMPAIGN_TEMPLATE = 'campaigntemplate',
    CAMPAIGN_VERTICAL = 'campaignvertical',
    CARDHOLDER_AUTHENTICATION = 'cardholderauthentication',
    CARDHOLDER_AUTHENTICATION_EVENT = 'cardholderauthenticationevent',
    CATEGORY1099MISC = 'category1099misc',
    CHARGE = 'charge',
    CHARGE_RULE = 'chargerule',
    CHARGE_RUN = 'chargerun',
    CHARGE_TYPE = 'chargetype',
    CLASSIFICATION = 'classification',
    CLIENT_SCRIPT = 'clientscript',
    CLIENT_SCRIPT_DEPLOYMENT = 'clientscriptdeployment',
    COMPANY_CONTACT_RELATIONSHIP = 'companycontactrelationship',
    COMPANY_FEATURE_SETUP = 'companyfeaturesetup',
    COMPANY_PREFERENCE = 'companypreference',
    COMPETITOR = 'competitor',
    CONNECT_LOGIN_AUDIT = 'connectloginaudit',
    CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate',
    CONSOLIDATED_RATE_ADJUSTOR_PLUGIN = 'consolidatedrateadjustorplugin',
    CONTACT = 'contact',
    CONTACT_CATEGORY = 'contactcategory',
    CONTACT_ROLE = 'contactrole',
    CONTACT_SUBSIDIARY_RELATIONSHIP = 'contactsubsidiaryrelationship',
    COST_CATEGORY = 'costcategory',
    COUPON_CODE = 'couponcode',
    CURRENCY = 'currency',
    CURRENCY_RATE = 'currencyrate',
    CURRENCY_RATE_TYPE = 'currencyratetype',
    CUSTOM_FIELD = 'customfield',
    CUSTOM_FIELD2 = 'customfield2',
    CUSTOM_GL_PLUGIN = 'customglplugin',
    CUSTOM_LIST = 'customlist',
    CUSTOM_RECORD_ACTION_SCRIPT = 'customrecordactionscript',
    CUSTOM_RECORD_TYPE = 'customrecordtype',
    CUSTOM_SEGMENT = 'customsegment',
    CUSTOM_SEGMENT_FIELD = 'customsegmentfield',
    CUSTOMER = 'customer',
    CUSTOMER_CATEGORY = 'customercategory',
    CUSTOMER_MESSAGE = 'customermessage',
    CUSTOMER_STATUS = 'customerstatus',
    CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship',
    DATASET_BUILDER_PLUGIN = 'datasetbuilderplugin',
    DELETED_RECORD = 'deletedrecord',
    DELETED_TRANSACTION = 'deletedtransaction',
    DEPARTMENT = 'department',
    DEVICE_ID = 'deviceid',
    DOMAIN = 'domain',
    DUAL = 'dual',
    EMAIL_CAPTURE_PLUGIN = 'emailcaptureplugin',
    EMAIL_TEMPLATE = 'emailtemplate',
    EMPLOYEE = 'employee',
    EMPLOYEE_CHANGE_REASON = 'employeechangereason',
    EMPLOYEE_EXPENSE_SOURCE_TYPE = 'employeeexpensesourcetype',
    EMPLOYEE_LIST = 'employeelist',
    EMPLOYEE_STATUS = 'employeestatus',
    EMPLOYEE_SUBSIDIARY_RELATIONSHIP = 'employeesubsidiaryrelationship',
    EMPLOYEE_TYPE = 'employeetype',
    ENTITY = 'entity',
    ENTITY_GROUP = 'entitygroup',
    ENTITY_SUBSIDIARY_RELATIONSHIP = 'entitysubsidiaryrelationship',
    ESCALATION_TERRITORY = 'escalationterritory',
    EXPENSE_CATEGORY = 'expensecategory',
    EXPENSE_REPORT_POLICY = 'expensereportpolicy',
    F_I_PARSER_PLUGIN = 'fiparserplugin',
    FAIR_VALUE_DIMENSION = 'fairvaluedimension',
    FAIR_VALUE_FORMULA = 'fairvalueformula',
    FAIR_VALUE_PRICE = 'fairvalueprice',
    FAX_TEMPLATE = 'faxtemplate',
    FILE = 'file',
    FISCAL_CALENDAR = 'fiscalcalendar',
    FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule',
    FI_CONNECTIVITY_PLUGIN = 'ficonnectivityplugin',
    FORECAST = 'forecast',
    FORMAT_PROFILE = 'formatprofile',
    FULFILLMENT_EXCEPTION_REASON = 'fulfillmentexceptionreason',
    FULL_SUBSIDIARY_HIERARCHY = 'fullsubsidiaryhierarchy',
    GATEWAY_NOTIFICATION = 'gatewaynotification',
    GENERAL_ALLOCATION_SCHEDULE = 'generalallocationschedule',
    GENERAL_TOKEN = 'generaltoken',
    GENERALIZED_ITEM = 'generalizeditem',
    GENERIC_RESOURCE = 'genericresource',
    GENERIC_RESOURCE_SUBSIDIARY_RELATIONSHIP = 'genericresourcesubsidiaryrelationship',
    GIFT_CERTIFICATE = 'giftcertificate',
    GL_LINES_AUDIT_LOG = 'gllinesauditlog',
    GL_LINES_PLUGIN_REVISION = 'gllinespluginrevision',
    HCM_JOB = 'hcmjob',
    IMPORTED_EMPLOYEE_EXPENSE = 'importedemployeeexpense',
    INCOTERM = 'incoterm',
    INVENTORY_BALANCE = 'inventorybalance',
    INVENTORY_COST_TEMPLATE = 'inventorycosttemplate',
    INVENTORY_NUMBER = 'inventorynumber',
    INVENTORY_STATUS = 'inventorystatus',
    INVT_ITEM_PRICE_HISTORY = 'invtitempricehistory',
    ITEM = 'item',
    ITEM_COLLECTION = 'itemcollection',
    ITEM_DEMAND_PLAN = 'itemdemandplan',
    ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration',
    ITEM_REVENUE_CATEGORY = 'itemrevenuecategory',
    ITEM_REVISION = 'itemrevision',
    ITEM_SUPPLY_PLAN = 'itemsupplyplan',
    I_P_RESTRICTIONS = 'iprestrictions',
    JOB = 'job',
    JOB_REQUISITION = 'jobrequisition',
    JOB_RESOURCE_ROLE = 'jobresourcerole',
    JOB_STATUS = 'jobstatus',
    JOB_TYPE = 'jobtype',
    KNOWLEDGE_BASE = 'knowledgebase',
    LEAD_SOURCE = 'leadsource',
    LOCATION = 'location',
    LOGIN_AUDIT = 'loginaudit',
    MAIL_TEMPLATE = 'mailtemplate',
    MANUFACTURING_COMPLETION_OPERATION = 'manufacturingcompletionoperation',
    MANUFACTURING_COMPONENT = 'manufacturingcomponent',
    MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate',
    MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask',
    MANUFACTURING_ROUTING = 'manufacturingrouting',
    MANUFACTURING_TRANSACTION = 'manufacturingtransaction',
    MANUFACTURING_TRANSACTION_ART_BASE = 'manufacturingtransactionartbase',
    MAP_REDUCE_SCRIPT = 'mapreducescript',
    MAP_REDUCE_SCRIPT_DEPLOYMENT = 'mapreducescriptdeployment',
    MASS_UPDATE_SCRIPT = 'massupdatescript',
    MASS_UPDATE_SCRIPT_DEPLOYMENT = 'massupdatescriptdeployment',
    MEDIA_ITEM_FOLDER = 'mediaitemfolder',
    MEM_DOC = 'memdoc',
    MEM_DOC_TRANSACTION_TEMPLATE = 'memdoctransactiontemplate',
    MESSAGE = 'message',
    MFG_PLANNED_TIME = 'mfgplannedtime',
    NEXUS = 'nexus',
    NOTE = 'note',
    NOTE_TYPE = 'notetype',
    O_AUTH2_CLIENT_CREDENTIALS = 'oauth2clientcredentials',
    ONLINE_CASE_FORM = 'onlinecaseform',
    ONLINE_FORM_TEMPLATE = 'onlineformtemplate',
    ONLINE_LEAD_FORM = 'onlineleadform',
    OPPORTUNITIES_AND_ESTIMATES = 'opportunitiesandestimates',
    ORDERS_AND_RETURNS = 'ordersandreturns',
    OTHER_NAME = 'othername',
    OTHER_NAME_CATEGORY = 'othernamecategory',
    OTHER_NAME_SUBSIDIARY_RELATIONSHIP = 'othernamesubsidiaryrelationship',
    OUTBOUND_REQUEST = 'outboundrequest',
    O_AUTH_TOKEN = 'oauthtoken',
    PARTNER = 'partner',
    PARTNER_CATEGORY = 'partnercategory',
    PARTNER_SUBSIDIARY_RELATIONSHIP = 'partnersubsidiaryrelationship',
    PAYMENT_CARD = 'paymentcard',
    PAYMENT_CARD_TOKEN = 'paymentcardtoken',
    PAYMENT_EVENT = 'paymentevent',
    PAYMENT_GATEWAY_PLUGIN = 'paymentgatewayplugin',
    PAYMENT_INSTRUMENT = 'paymentinstrument',
    PAYMENT_METHOD = 'paymentmethod',
    PAYMENT_PROCESSING_PROFILE = 'paymentprocessingprofile',
    PAYMENT_RESULT_PREVIEW = 'paymentresultpreview',
    PAYROLL_ITEM = 'payrollitem',
    PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule',
    PDF_TEMPLATE = 'pdftemplate',
    PERFORMANCE_REVIEW_SCHEDULE_TALENT_DATASET = 'performancereviewscheduletalentdataset',
    PERIOD_CLOSING_TASK = 'periodclosingtask',
    PHONE_CALL = 'phonecall',
    PICK_TASK_INVENTORY_BALANCE = 'picktaskinventorybalance',
    PLANNED_STANDARD_COST = 'plannedstandardcost',
    PLATFORM_EXTENSION_PLUGIN = 'platformextensionplugin',
    PLUG_IN_TYPE = 'plugintype',
    PLUG_IN_TYPE_IMPL = 'plugintypeimpl',
    PORTLET = 'portlet',
    PORTLET_DEPLOYMENT = 'portletdeployment',
    POSTING_ACCOUNT_ACTIVITY = 'postingaccountactivity',
    PRICE_LEVEL = 'pricelevel',
    PRICING = 'pricing',
    PRICING_GROUP = 'pricinggroup',
    PRICING_WITH_CUSTOMERS = 'pricingwithcustomers',
    PROJECT_BUDGET = 'projectbudget',
    PROJECT_EXPENSE_TYPE = 'projectexpensetype',
    PROJECT_FINANCIALS = 'projectfinancials',
    PROJECT_RESOURCE_AVAILABLE_TIME = 'projectresourceavailabletime',
    PROJECT_SUBSIDIARY_RELATIONSHIP = 'projectsubsidiaryrelationship',
    PROJECT_TASK = 'projecttask',
    PROJECT_TEMPLATE = 'projecttemplate',
    PROJECT_TEMPLATE_SUBSIDIARY_RELATIONSHIP = 'projecttemplatesubsidiaryrelationship',
    PROMOTION_CODE = 'promotioncode',
    PROMOTIONS_PLUGIN = 'promotionsplugin',
    PROMPT = 'prompt',
    PUBLISHED_SAVED_SEARCH = 'publishedsavedsearch',
    QUANTITY_PRICING_SCHEDULE = 'quantitypricingschedule',
    QUOTA = 'quota',
    RATABLE_EVENT_TYPE = 'ratableeventtype',
    REC_SYS_ALGORITHM = 'recsysalgorithm',
    REC_SYS_ANALYTICS_REPORT = 'recsysanalyticsreport',
    REC_SYS_ANALYTICS_REPORT_AGG = 'recsysanalyticsreportagg',
    REC_SYS_BLOCKLIST = 'recsysblocklist',
    REC_SYS_CONVERSION = 'recsysconversion',
    REC_SYS_ELIGIBILITY = 'recsyseligibility',
    REC_SYS_SCENARIO = 'recsysscenario',
    RECEIVABLES = 'receivables',
    RECENT_ACTIVITY = 'recentactivity',
    RECENT_RECORD = 'recentrecord',
    RECENT_TRANSACTIONS = 'recenttransactions',
    RECORD_ACTION_SCRIPT_DEPLOYMENT = 'recordactionscriptdeployment',
    REDIRECT = 'redirect',
    RESOURCE_ALLOCATION = 'resourceallocation',
    RESOURCE_GROUP = 'resourcegroup',
    RESTLET = 'restlet',
    RESTLET_DEPLOYMENT = 'restletdeployment',
    REVENUE_ALLOCATIONGROUP = 'revenueallocationgroup',
    REVENUE_ELEMENT = 'revenueelement',
    REVENUE_PLAN = 'revenueplan',
    REVENUE_RECOGNITION_RULE = 'revenuerecognitionrule',
    ROLE = 'role',
    SALES_INVOICED = 'salesinvoiced',
    SALES_ORDERED = 'salesordered',
    SALES_OVERVIEW = 'salesoverview',
    SALES_READINESS = 'salesreadiness',
    SALES_TAX_ITEM = 'salestaxitem',
    SALES_TERRITORY = 'salesterritory',
    SCHEDULED_SCRIPT = 'scheduledscript',
    SCHEDULED_SCRIPT_DEPLOYMENT = 'scheduledscriptdeployment',
    SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance',
    SCRIPT = 'script',
    SCRIPT_CUSTOM_RECORD_TYPE = 'scriptcustomrecordtype',
    SCRIPT_DEPLOYMENT = 'scriptdeployment',
    SCRIPT_NOTE = 'scriptnote',
    SCRIPT_RECORD_TYPE = 'scriptrecordtype',
    SEARCH_CAMPAIGN = 'searchcampaign',
    SENT_EMAIL = 'sentemail',
    SHIPPING_PACKAGE = 'shippingpackage',
    SHIPPING_PARTNERS_PLUGIN = 'shippingpartnersplugin',
    SHOPPING_CART = 'shoppingcart',
    SHIP_ITEM = 'shipitem',
    SITE_AUDIENCE = 'siteaudience',
    SITE_CATEGORY = 'sitecategory',
    SITE_THEME = 'sitetheme',
    SOLUTION = 'solution',
    STANDARD_COST_VERSION = 'standardcostversion',
    STATE = 'state',
    STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry',
    STATISTICAL_SCHEDULE = 'statisticalschedule',
    STORE_TAB = 'storetab',
    SUBLIST = 'sublist',
    SUBSIDIARY = 'subsidiary',
    SUBSIDIARY_SETTINGS = 'subsidiarysettings',
    SUITE_SCRIPT_DETAIL = 'suitescriptdetail',
    SUITELET = 'suitelet',
    SUITELET_DEPLOYMENT = 'suiteletdeployment',
    SUPPORT_CASE = 'supportcase',
    SUPPORT_CASE_ORIGIN = 'supportcaseorigin',
    SUPPORT_CASE_PRIORITY = 'supportcasepriority',
    SUPPORT_CASE_STATUS = 'supportcasestatus',
    SUPPORT_CASE_TYPE = 'supportcasetype',
    SUPPORT_TERRITORY = 'supportterritory',
    SYSTEM_EMAIL_TEMPLATE = 'systememailtemplate',
    SYSTEM_NOTE = 'systemnote',
    SYSTEM_NOTE2 = 'systemnote2',
    SYSTEM_NOTE_FIELD = 'systemnotefield',
    TAG = 'tag',
    TASK = 'task',
    TAX_CALCULATION_PLUGIN = 'taxcalculationplugin',
    TAX_ITEM_TAX_GROUP = 'taxitemtaxgroup',
    TAX_TYPE = 'taxtype',
    TERM = 'term',
    TERMINATION_REASON = 'terminationreason',
    TEST_PLUGIN = 'testplugin',
    TEXT_ENHANCE_ACTION = 'textenhanceaction',
    TIME_BILL = 'timebill',
    TIME_MODIFICATION_REQUEST = 'timemodificationrequest',
    TIME_OFF_CHANGE = 'timeoffchange',
    TIME_OFF_PLAN = 'timeoffplan',
    TIME_OFF_REQUEST = 'timeoffrequest',
    TIME_OFF_RULE = 'timeoffrule',
    TIME_OFF_TYPE = 'timeofftype',
    TIME_SHEET = 'timesheet',
    TOP_SELLING_ITEMS = 'topsellingitems',
    TOPIC = 'topic',
    TRACKING_NUMBER = 'trackingnumber',
    TRANSACTION = 'transaction',
    TRANSACTION_ADDRESSBOOK = 'transactionaddressbook',
    TRANSACTION_BILLING = 'transactionbilling',
    TRANSACTION_BILLING_ADDRESSBOOK = 'transactionbillingaddressbook',
    TRANSACTION_HISTORY = 'transactionhistory',
    TRANSACTION_NUMBERING_AUDIT_LOG = 'transactionnumberingauditlog',
    TRANSACTION_PAYEE_ADDRESSBOOK = 'transactionpayeeaddressbook',
    TRANSACTION_RETURN_ADDRESSBOOK = 'transactionreturnaddressbook',
    TRANSACTION_SHIPPING_ADDRESSBOOK = 'transactionshippingaddressbook',
    TRANSACTION_STATUS = 'transactionstatus',
    UMD_FIELD = 'umdfield',
    UNDELIVERED_EMAIL = 'undeliveredemail',
    UNITS_TYPE = 'unitstype',
    UNLOCKED_TIME_PERIOD = 'unlockedtimeperiod',
    USER_AUTHORIZATION_CONSENT = 'userauthorizationconsent',
    USER_EVENT_SCRIPT = 'usereventscript',
    USER_EVENT_SCRIPT_DEPLOYMENT = 'usereventscriptdeployment',
    USER_O_AUTH_TOKEN = 'useroauthtoken',
    USRSAVEDSEARCH = 'usrsavedsearch',
    USR_AUDIT_LOG = 'usrauditlog',
    USR_DS_AUDIT_LOG = 'usrdsauditlog',
    USR_DS_EXECUTION_LOG = 'usrdsexecutionlog',
    USR_EXECUTION_LOG = 'usrexecutionlog',
    VENDOR = 'vendor',
    VENDOR_CATEGORY = 'vendorcategory',
    VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship',
    WBS = 'wbs',
    WEB_SITE = 'website',
    WEBAPP = 'webapp',
    WIN_LOSS_REASON = 'winlossreason',
    WORKBOOK_BUILDER_PLUGIN = 'workbookbuilderplugin',
    WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
    WORKFLOW_ACTION_SCRIPT_DEPLOYMENT = 'workflowactionscriptdeployment',
    WORK_CALENDAR = 'workcalendar',

    // ---- Additional documented query types (runtime + Help Center) ----
    BOM = 'bom',
    BOM_REVISION = 'bomrevision',
    BOM_REVISION_COMPONENT = 'bomrevisioncomponent',
    CUSTOM_TRANSACTION_TYPE = 'customtransactiontype',
    INBOUND_SHIPMENT = 'inboundshipment',
    INVOICE_GROUP = 'invoicegroup',
    ISSUE = 'issue',
    ISSUE_PRIORITY = 'issuepriority',
    ISSUE_SEVERITY = 'issueseverity',
    ISSUE_STATUS = 'issuestatus',
    PLANNED_ORDER = 'plannedorder',
    PLANNING_ITEM_CATEGORY = 'planningitemcategory',
    PLANNING_ITEM_GROUP = 'planningitemgroup',
    PLANNING_ITEM_GROUP_SOURCE = 'planningitemgroupsource',
    PLANNING_RULE_GROUP = 'planningrulegroup',
    PLANNING_VIEW = 'planningview',
    PREDICTED_RISK_TRAIN_EVAL_HISTORY = 'predictedrisktrainevalhistory',
    REV_REC_SCHEDULE = 'revrecschedule',
    REV_REC_TEMPLATE = 'revrectemplate',
    SALES_ROLE = 'salesrole',
    SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot',
    SUPPLY_CHAIN_SNAPSHOT_SIMULATION = 'supplychainsnapshotsimulation',
    SUPPLY_CHANGE_ORDER = 'supplychangeorder',
    SUPPLY_PLAN_DEFINITION = 'supplyplandefinition',

    // ---- Undocumented in the Help Center; present at runtime ----
    ACCOUNTS_PAYABLE_AGING_ART = 'accountspayableagingart',
    ACCOUNTS_RECEIVABLE_AGING_ART = 'accountsreceivableagingart',
    ADV_INTERCOMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry',
    ALLOCATION_BATCH = 'allocationbatch',
    ASSEMBLY_BUILD = 'assemblybuild',
    ASSEMBLY_ITEM = 'assemblyitem',
    ASSEMBLY_UNBUILD = 'assemblyunbuild',
    BANKING_IMPORT = 'bankingimport',
    BANKING_STATEMENT = 'bankingstatement',
    BANKING_TRANSACTION = 'bankingtransaction',
    BANK_STATEMENT_PARSER_PLUGIN = 'bankstatementparserplugin',
    BIN_TRANSFER = 'bintransfer',
    BIN_WORKSHEET = 'binworksheet',
    BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder',
    // Runtime member name for the same value the Help Center documents as BUDGETCATEGORY (above); both map to 'budgetcategory'.
    BUDGET_CATEGORY = 'budgetcategory',
    CASE_FIELD_RULE = 'casefieldrule',
    CASH_REFUND = 'cashrefund',
    CASH_SALE = 'cashsale',
    CENTER_CATEGORY = 'centercategory',
    CENTER_LINK = 'centerlink',
    CENTER_TAB = 'centertab',
    CHECK = 'check',
    COMMISSION = 'commission',
    COMMISSION_PLAN = 'commissionplan',
    COMMISSION_SCHEDULE = 'commissionschedule',
    CREDIT_CARD_CHARGE = 'creditcardcharge',
    CREDIT_CARD_REFUND = 'creditcardrefund',
    CREDIT_MEMO = 'creditmemo',
    CUSTOMER_CHARGE = 'customercharge',
    CUSTOMER_DEPOSIT = 'customerdeposit',
    CUSTOMER_FIELD_RULE = 'customerfieldrule',
    CUSTOMER_PAYMENT = 'customerpayment',
    CUSTOMER_REFUND = 'customerrefund',
    CUSTOM_TRANSACTION_STATUS = 'customtransactionstatus',
    DEPOSIT = 'deposit',
    DEPOSIT_APPLICATION = 'depositapplication',
    DESCRIPTION_ITEM = 'descriptionitem',
    DISCOUNT_ITEM = 'discountitem',
    EDUCATION = 'education',
    EMAIL_LAYOUT = 'emaillayout',
    ENTITY_STATUS_HISTORY = 'entitystatushistory',
    ESCALATION_FIELD_RULE = 'escalationfieldrule',
    ESTIMATE = 'estimate',
    ETHNICITY = 'ethnicity',
    EXPENSE_REPORT = 'expensereport',
    FINANCIAL_INSTITUTION = 'financialinstitution',
    INBOUND_SHIPMENT_LINK = 'inboundshipmentlink',
    INTEGRATION_APP = 'integrationapp',
    INTERCOMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry',
    INTERCOMPANY_TRANSFER_ORDER = 'intercompanytransferorder',
    INVENTORY_ADJUSTMENT = 'inventoryadjustment',
    INVENTORY_COST_ACCOUNTING = 'inventorycostaccounting',
    INVENTORY_COST_REVALUATION = 'inventorycostrevaluation',
    INVENTORY_COUNT = 'inventorycount',
    INVENTORY_DISTRIBUTION = 'inventorydistribution',
    INVENTORY_ITEM = 'inventoryitem',
    INVENTORY_STATUS_CHANGE = 'inventorystatuschange',
    INVENTORY_TRANSFER = 'inventorytransfer',
    INVENTORY_WORKSHEET = 'inventoryworksheet',
    INVOICE = 'invoice',
    ISSUE_PRODUCT = 'issueproduct',
    ISSUE_TAG = 'issuetag',
    ITEM_FULFILLMENT = 'itemfulfillment',
    ITEM_GROUP = 'itemgroup',
    ITEM_RECEIPT = 'itemreceipt',
    JOURNAL_ENTRY = 'journalentry',
    JOURNAL_TRANSACTIONS = 'journaltransactions',
    KIT_ITEM = 'kititem',
    LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem',
    LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem',
    MARITAL_STATUS = 'maritalstatus',
    MARKUP_ITEM = 'markupitem',
    MONTH_END_ELIMINATION_DETAIL = 'monthendeliminationdetail',
    NON_INVENTORY_PURCHASE_ITEM = 'noninventorypurchaseitem',
    NON_INVENTORY_RESALE_ITEM = 'noninventoryresaleitem',
    NON_INVENTORY_SALE_ITEM = 'noninventorysaleitem',
    OPPORTUNITY = 'opportunity',
    OTHER_CHARGE_PURCHASE_ITEM = 'otherchargepurchaseitem',
    OTHER_CHARGE_RESALE_ITEM = 'otherchargeresaleitem',
    OTHER_CHARGE_SALE_ITEM = 'otherchargesaleitem',
    OWNERSHIP_TRANSFER = 'ownershiptransfer',
    PAYMENT_ITEM = 'paymentitem',
    PERIOD_CLOSE_READINESS_METRIC = 'periodclosereadinessmetric',
    PLANNING_ENGINE_CYCLE = 'planningenginecycle',
    PLANNING_ENGINE_MESSAGE = 'planningenginemessage',
    PLANNING_ENGINE_PEGGING = 'planningenginepegging',
    PLANNING_ENGINE_RESULT = 'planningengineresult',
    PLANNING_REPOSITORY_ALLOCATION = 'planningrepositoryallocation',
    PLANNING_REPOSITORY_BOM_EDGE = 'planningrepositorybomedge',
    PLANNING_REPOSITORY_ITEM_LOCATION = 'planningrepositoryitemlocation',
    PLANNING_REPOSITORY_SOURCE = 'planningrepositorysource',
    PRINT_LAYOUT = 'printlayout',
    PURCHASE_CONTRACT = 'purchasecontract',
    PURCHASE_ORDER = 'purchaseorder',
    PURCHASE_ORDER_ART = 'purchaseorderart',
    PURCHASE_REQUISITION = 'purchaserequisition',
    REALIZED_GAIN_OR_LOSS = 'realizedgainorloss',
    RECENT_ACTIVITY_STATUS = 'recentactivitystatus',
    RECENT_ACTIVITY_TYPE = 'recentactivitytype',
    RECENT_TRANSACTIONS_WITHOUT_JOURNAL = 'recenttransactionswithoutjournal',
    REC_SYS_CRM_CONVERSION = 'recsyscrmconversion',
    RESIDENT_STATUS = 'residentstatus',
    RETURN_AUTHORIZATION = 'returnauthorization',
    REV_REC_FIELD_MAPPING_CUSTOM_FIELD = 'revrecfieldmappingcustomfield',
    ROUNDING_GAIN_OR_LOSS = 'roundinggainorloss',
    SALES_ORDER = 'salesorder',
    SALES_PRICING_OVERVIEW = 'salespricingoverview',
    SALES_TAX_PAYMENT = 'salestaxpayment',
    SAVED_REPORT = 'savedreport',
    SAVED_SEARCH = 'savedsearch',
    SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem',
    SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem',
    SERVICE_PURCHASE_ITEM = 'servicepurchaseitem',
    SERVICE_RESALE_ITEM = 'serviceresaleitem',
    SERVICE_SALE_ITEM = 'servicesaleitem',
    STATISTICAL_ACCOUNT = 'statisticalaccount',
    SUBTOTAL_ITEM = 'subtotalitem',
    SUPPORT_CASE_ISSUE = 'supportcaseissue',
    SYSTEM_JOURNAL = 'systemjournal',
    TAX_ACCT = 'taxacct',
    TAX_GROUP = 'taxgroup',
    TAX_PERIOD = 'taxperiod',
    TAX_SCHEDULE = 'taxschedule',
    TRANSACTION_BIN_NUMBERS = 'transactionbinnumbers',
    TRANSFER = 'transfer',
    TRANSFER_ORDER = 'transferorder',
    UN_REALIZED_GAIN_OR_LOSS = 'unrealizedgainorloss',
    VAT_LIABILITY = 'vatliability',
    VENDOR_BILL = 'vendorbill',
    VENDOR_CREDIT = 'vendorcredit',
    VENDOR_PAYMENT = 'vendorpayment',
    VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
    VISA_TYPE = 'visatype',
    WEEKLY_TIME_TRACKING = 'weeklytimetracking',
    WORKFLOW = 'workflow',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
  }

  /**
   * Enum for adjustment types for a period
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289865548}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289865548.html}
   */
  export enum PeriodAdjustment {
    ALL = 'ALL',
    NOT_LAST = 'NOT_LAST',
  }

  /**
   * Enum for period codes for a period
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289876878}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289876878.html}
   */
  export enum PeriodCode {
    FIRST_FISCAL_QUARTER_LAST_FY = 'Q1LFY',
    FIRST_FISCAL_QUARTER_THIS_FY = 'Q1TFY',
    FISCAL_QUARTER_BEFORE_LAST = 'QBL',
    FISCAL_YEAR_BEFORE_LAST = 'FYBL',
    FOURTH_FISCAL_QUARTER_LAST_FY = 'Q4LFY',
    FOURTH_FISCAL_QUARTER_THIS_FY = 'Q4TFY',
    LAST_FISCAL_QUARTER = 'LQ',
    LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO = 'LQOLFY',
    LAST_FISCAL_QUARTER_TO_PERIOD = 'LFQTP',
    LAST_FISCAL_YEAR = 'LFY',
    LAST_FISCAL_YEAR_TO_PERIOD = 'LFYTP',
    LAST_PERIOD = 'LP',
    LAST_PERIOD_ONE_FISCAL_QUARTER_AGO = 'LPOLQ',
    LAST_PERIOD_ONE_FISCAL_YEAR_AGO = 'LPOLFY',
    LAST_ROLLING_6_FISCAL_QUARTERS = 'LR6FQ',
    LAST_ROLLING_18_PERIODS = 'LR18FP',
    PERIOD_BEFORE_LAST = 'PBL',
    SAME_FISCAL_QUARTER_LAST_FY = 'TQOLFY',
    SAME_FISCAL_QUARTER_LAST_FY_TO_PERIOD = 'TFQOLFYTP',
    SAME_PERIOD_LAST_FISCAL_QUARTER = 'TPOLQ',
    SAME_PERIOD_LAST_FY = 'TPOLFY',
    SECOND_FISCAL_QUARTER_LAST_FY = 'Q2LFY',
    SECOND_FISCAL_QUARTER_THIS_FY = 'Q2TFY',
    THIRD_FISCAL_QUARTER_LAST_FY = 'Q3LFY',
    THIRD_FISCAL_QUARTER_THIS_FY = 'Q3TFY',
    THIS_FISCAL_QUARTER = 'TQ',
    THIS_FISCAL_QUARTER_TO_PERIOD = 'TFQTP',
    THIS_FISCAL_YEAR = 'TFY',
    THIS_FISCAL_YEAR_TO_PERIOD = 'TFYTP',
    THIS_PERIOD = 'TP',
  }

  /**
   * Enum for period types for a period
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289949288}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289949288.html}
   */
  export enum PeriodType {
    START = 'START',
    END = 'END',
  }

  /**
   * The query definition
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275177}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275177.html}
   */
  export interface Query {

    /**
     * Returns the query type given upon the creation of the query object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275511}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275511.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly type: Type | `${Type}` | string;

    /**
     * Query condition
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510781832}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510781832.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than Query.Condition
     */
    condition: Condition;

    /**
     * Columns to be returned from the query
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510781812}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510781812.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than Query.Column array
     */
    columns: Column[];

    /**
     * Specifies how the results will be sorted
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510781853}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510781853.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than Query.Sort array
     */
    sort: Sort[];

    /**
     * Children of the root component of the query. It is an object with key/value pairs where key is the name of the
     * child component and value is the corresponding Component object. This is a shortcut for the Query.root.child expression.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510781899}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510781899.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly child: Object;

    /**
     * Id of this query, null if query is not saved
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819439}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819439.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: number;

    /**
     * Name of this query, null if query is not saved
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819481.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly name: string;

    /**
     * Access the root component of the query. It is the component that corresponds to the query type given upon the
     * creation of the whole Query object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510781874}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510781874.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly root: Component;

    run: {

      /**
       * Execute the query and return results.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780212}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780212.html}
       *
       * @governance 10 points
       *
       * @return the result set object
       */
      (): ResultSet;

      promise: {

        /**
         * Execute the query and return results.
         * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780250}
         * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780250.html}
         *
         * @governance 10 points
         *
         * @return the result set object
         */
        (): Promise<ResultSet>;
      };
    };

    runPaged: {

      /**
       * Execute the query and return paged results.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780277}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780277.html}
       *
       * @governance 10 points
       *
       * @param [pageSize]
       * @return The paged query object
       */
      (pageSize?: number): PagedData;

      /**
       * Execute the query and return paged results.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780277}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780277.html}
       *
       * @governance 10 points
       *
       * @param [options]
       * @param [options.pageSize]
       * @return The paged query object
       */
      (options?: {
        pageSize?: number,
      }): PagedData;

      promise: {

        /**
         * Execute the query and return paged results asynchrounously
         * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780308}
         * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780308.html}
         *
         * @governance 10 points
         *
         * @param [pageSize]
         * @return The paged query object
         */
        (pageSize?: number): Promise<PagedData>;

        /**
         * Execute the query and return paged results asynchrounously
         * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780308}
         * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780308.html}
         *
         * @governance 10 points
         *
         * @param [options]
         * @param [options.pageSize]
         * @return The paged query object
         */
        (options?: {
          pageSize?: number,
        }): Promise<PagedData>;
      };
    };

    /**
     * Join the root component of the Query with another query type. This is a shortcut for Query.root.autoJoin.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819144}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819144.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId Column type (field type) that joins the parent component to the new component
     */
    autoJoin(options: {
      fieldId: string,
    }): Component;

    /**
     * Join the root component of the Query with another query type. This is a shortcut for Query.root.autoJoin.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275377}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275377.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId Column type (field type) that joins the parent component to the new component
     */
    join(options: {
      fieldId: string,
    }): Component;

    /**
     * Join the root component of the Query with another (target) query type. This is a shortcut for Query.root.joinTo.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819329}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819329.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId Column type (field type) that joins the parent component to the new component
     * @param options.target Search type of the component joined to this component
     */
    joinTo(options: {
      fieldId: string,
      target: string,
    }): Component;

    /**
     * Join the root component of the Query with another (source) query type. This is a shortcut for Query.root.joinFrom.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819218}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819218.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId Column type (field type) that joins the parent component to the new component
     * @param options.source Search type of the component joined to this component
     */
    joinFrom(options: {
      fieldId: string,
      source: string,
    }): Component;

    /**
     * Create a Condition object based on the root component of the Query. This is a shortcut for Query.root.createCondition.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780329}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780329.html}
     *
     * @governance none
     * @since 2018.1
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param options.operator Use the Operator enum
     * @param [options.values] Array of values
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     * @param [options.caseSensitive] Indicates whether the condition is case sensitive
     * @param [options.context] Field context for values in the query result column
     * @param options.context.name Name of the field context
     * @param [options.context.params] Additional parameters to use with the specified field context. Required when context.name is the CONVERTED field context, which needs both context.params.currencyId and context.params.date.
     * @param [options.context.params.currencyId] ID of the currency to convert to
     * @param [options.context.params.date] Date to use for the actual exchange rate between the base currency and the currency to convert to
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} OPERATOR_ARITY_MISMATCH if requested operator cannot work with specified number of arguments
     * @throws {error.SuiteScriptError} INVALID_SEARCH_OPERATOR if wrong query operator is used
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if context.name is the CONVERTED field context and context.params.currencyId or context.params.date is not provided
     */
    createCondition(options: {
      fieldId?: string,
      operator: Operator | `${Operator}`,
      values?: string | number | boolean | Date | RelativeDate | Period | string[] | number[] | boolean[] | Date[] | RelativeDate[] | Period[],
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
      caseSensitive?: boolean,
      context?: FieldContext | `${FieldContext}` | {
        name: FieldContext | `${FieldContext}`,
        params?: {
          currencyId?: number,
          date?: RelativeDate | Date,
        },
      },
    }): Condition;

    /**
     * Create a Column object based on the root component of the Query. This is a shortcut for Query.root.createColumn.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780373}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780373.html}
     *
     * @governance none
     * @since 2018.1
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     * @param [options.groupBy] Indicates that we want the results grouped by this column used together with aggregate function defined on other columns.
     * @param [options.context] Field context for values in the query result column
     * @param options.context.name Name of the field context
     * @param [options.context.params] Additional parameters to use with the specified field context. Required when context.name is the CONVERTED field context, which needs both context.params.currencyId and context.params.date.
     * @param [options.context.params.currencyId] ID of the currency to convert to
     * @param [options.context.params.date] Date to use for the actual exchange rate between the base currency and the currency to convert to
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when two mutually arguments are defined
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED when neither of two mandatory arguments is defined
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if context.name is the CONVERTED field context and context.params.currencyId or context.params.date is not provided
     */
    createColumn(options: {
      fieldId?: string,
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
      alias?: string,
      groupBy?: boolean,
      context?: FieldContext | `${FieldContext}` | {
        name: FieldContext | `${FieldContext}`,
        params?: {
          currencyId?: number,
          date?: RelativeDate | Date,
        },
      },
    }): Column;

    /**
     * Create a Sort object based on the root component of the Query. This is a shortcut for Query.root.createSort.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780402}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780402.html}
     *
     * @governance none
     * @since 2018.1
     *
     * @param options
     * @param options.column The Column by which we want to sort.
     * @param [options.ascending] The sort direction. True by default.
     * @param [options.nullsLast] Where to put results with null value. Defaults to value of ascending flag
     * @param [options.caseSensitive] Indicates whether the sort is case sensitive
     * @param [options.locale] Locale to use for the sort
     * @param [options.nullsLast] Indicates whether query results with null values are listed at the end of the query results
     */
    createSort(options: {
      column: Column | Object,
      ascending?: boolean,
      caseSensitive?: boolean,
      locale?: SortLocale | `${SortLocale}`,
      nullsLast?: boolean,
    }): Sort;

    /**
     * Create a new Condition object that corresponds to a logical conjunction (AND) of the Condition objects given to
     * the method as arguments. The arguments must be one or more Condition objects.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780422}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780422.html}
     *
     * @governance none
     *
     * @param conditions
     */
    and(...conditions: Condition[]): Condition;

    /**
     * Create a new Condition object that corresponds to a logical disjunction (OR) of the Condition objects given to
     * the method as arguments. The arguments must be one or more Condition objects.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780444}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780444.html}
     *
     * @governance none
     *
     * @param conditions
     */
    or(...conditions: Condition[]): Condition;

    /**
     * Create a new Condition object that corresponds to a logical negation (NOT) of the Condition object given to the method
     * as argument.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510780462}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510780462.html}
     *
     * @governance none
     *
     * @param condition
     */
    not(condition: Condition): Condition;

    /**
     * Converts this query.Query object to its corresponding SuiteQL representation
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960522744}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960522744.html}
     *
     * @governance none
     */
    toSuiteQL(): SuiteQL;

    /**
     * Converts this query.Query object to its corresponding SuiteQL representation, omitting the BUILTIN_RESULT.TYPE_*
     * result-type wrapper functions that toSuiteQL() emits (the generated SQL selects the raw column expressions instead).
     * Returns a query.SuiteQL object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     */
    toSuiteQLWithoutResultFunctions(): SuiteQL;

    /**
     * Returns the object type name
     */
    toString(): 'query.Query';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * One component of the query definition. The Query object always contains at least one Component object called the root
   * component. Queries with multi-level joins contain multiple Component objects linked together into a parent/child hierarchy.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779141}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779141.html}
   */
  export interface Component {

    /**
     * Returns the query type of this component
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510785195}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510785195.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly type: Type | `${Type}` | string;

    /**
     * Inverse target. Returns the source query type from which is this component joined
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510785292}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510785292.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly source: string | null;

    /**
     * Polymorphic target. Returns the target of this component
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510785266}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510785266.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly target: string | null;

    /**
     * Returns the Component that corresponds to the ancestor of this component in the query object model
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510785228}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510785228.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly parent: Component | null;

    /**
     * Children of this component. It is an object with key/value pairs where key is the name of the child component
     * and value is the corresponding Component object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510785245}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510785245.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly child: Record<string, Component>;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530818573}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530818573.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId The relationship field that will be used to determine the query type of the newly joined component and also the columns on which the query types will be joined together. For example "salesrep".
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if fieldId is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    autoJoin(options: {
      fieldId: string,
    }): Component;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510784833}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510784833.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId The relationship field that will be used to determine the query type of the newly joined component and also the columns on which the query types will be joined together. For example "salesrep".
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if fieldId is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    join(options: {
      fieldId: string,
    }): Component;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530818855}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530818855.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId The relationship field on which join with other query type is performed. For example "entity".
     * @param options.target The target of the join. It is the specialized query type with which is this component joined. For example query.Type.CUSTOMER
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if target is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    joinTo(options: {
      fieldId: string,
      target: string,
    }): Component;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530818705}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530818705.html}
     *
     * @governance none
     *
     * @param options
     * @param options.fieldId The relationship field on which join with other query type is performed. For example "salesrep".
     * @param options.source The query type on which is relationship field used to create the join with this component. For example query.Type.CUSTOMER
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if source is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    joinFrom(options: {
      fieldId: string,
      source: string,
    }): Component;

    /**
     * Create a Condition object based on this query component. Use either fieldId + operator + values or formula + (optional) type.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510784922}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510784922.html}
     *
     * @governance none
     * @since 2018.1
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param options.operator Use the Operator enum
     * @param [options.values] Array of values
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     * @param [options.caseSensitive] Indicates whether the condition is case sensitive
     * @param [options.context] Field context for values in the query result column
     * @param options.context.name Name of the field context
     * @param [options.context.params] Additional parameters to use with the specified field context. Required when context.name is the CONVERTED field context, which needs both context.params.currencyId and context.params.date.
     * @param [options.context.params.currencyId] ID of the currency to convert to
     * @param [options.context.params.date] Date to use for the actual exchange rate between the base currency and the currency to convert to
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} OPERATOR_ARITY_MISMATCH if requested operator cannot work with specified number of arguments
     * @throws {error.SuiteScriptError} INVALID_SEARCH_OPERATOR if wrong query operator is used
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if context.name is the CONVERTED field context and context.params.currencyId or context.params.date is not provided
     */
    createCondition(options: {
      fieldId?: string,
      operator: Operator | `${Operator}`,
      values?: string | number | boolean | Date | RelativeDate | Period | string[] | number[] | boolean[] | Date[] | RelativeDate[] | Period[],
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
      caseSensitive?: boolean,
      context?: FieldContext | `${FieldContext}` | {
        name: FieldContext | `${FieldContext}`,
        params?: {
          currencyId?: number,
          date?: RelativeDate | Date,
        },
      },
    }): Condition;

    /**
     * Create a Column object based on this query component. Use either name or formula + (optional) type.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510784945}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510784945.html}
     *
     * @governance none
     * @since 2018.1
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     * @param [options.groupBy] Indicates that we want the results grouped by this column used together with aggregate function defined on other columns.
     * @param [options.context] Field context for values in the query result column
     * @param options.context.name Name of the field context
     * @param [options.context.params] Additional parameters to use with the specified field context. Required when context.name is the CONVERTED field context, which needs both context.params.currencyId and context.params.date.
     * @param [options.context.params.currencyId] ID of the currency to convert to
     * @param [options.context.params.date] Date to use for the actual exchange rate between the base currency and the currency to convert to
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when two mutually arguments are defined
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED when neither of two mandatory arguments is defined
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if context.name is the CONVERTED field context and context.params.currencyId or context.params.date is not provided
     */
    createColumn(options: {
      fieldId?: string,
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
      alias?: string,
      groupBy?: boolean,
      context?: FieldContext | `${FieldContext}` | {
        name: FieldContext | `${FieldContext}`,
        params?: {
          currencyId?: number,
          date?: RelativeDate | Date,
        },
      },
    }): Column;

    /**
     * Create a Sort object based on this query component
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510785047}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510785047.html}
     *
     * @governance none
     * @since 2018.1
     *
     * @param options
     * @param options.column The Column by which we want to sort.
     * @param [options.ascending] The sort direction. True by default.
     * @param [options.nullsLast] Where to put results with null value. Defaults to value of ascending flag
     * @param [options.caseSensitive] Indicates whether the sort is case sensitive
     * @param [options.locale] Locale to use for the sort
     * @param [options.nullsLast] Indicates whether query results with null values are listed at the end of the query results
     */
    createSort(options: {
      column: Column,
      ascending?: boolean,
      caseSensitive?: boolean,
      locale?: SortLocale | `${SortLocale}`,
      nullsLast?: boolean,
    }): Sort;

    /**
     * Returns the object type name
     */
    toString(): 'query.Component';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Specifies a return column.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779196}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779196.html}
   */
  export interface Column {

    /**
     * Id of column field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510788976}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510788976.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly fieldId: string;

    /**
     * Returns the Component to which this column belongs
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789028}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789028.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly component: Component;

    /**
     * Formula
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789062}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789062.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly formula: string;

    /**
     * Desired value type of the formula (if it was explicitly stated upon Column creation)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789090}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789090.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly type: ReturnType | `${ReturnType}`;

    /**
     * A label is important if the query object is used as the data source for printing
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158291894456}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158291894456.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly label: string;

    /**
     * An alternate name for a column used in mapped results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156336566313}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156336566313.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly alias: string;

    /**
     * The field context for values in the query result column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544109085}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544109085.html}
     *
     * The Help Center types this as a field-context name string, but at runtime the getter returns an object
     * (`{ name, params? }`) mirroring the `createColumn` `context` option, or `undefined` when no context was set.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly context: {
      name: FieldContext | `${FieldContext}`,
      params?: {
        currencyId?: number,
        date?: RelativeDate | Date,
      },
    } | undefined;

    /**
     * Aggregate function
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789115}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789115.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly aggregate: Aggregate | `${Aggregate}`;

    /**
     * The group-by flag
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789147}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789147.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly groupBy: boolean;

    /**
     * Returns the object type name
     */
    toString(): 'query.Column';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Specifies sorting by the values of a given column and the sort direction.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779222}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779222.html}
   */
  export interface Sort {

    /**
     * The query column by which we want to sort
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510790467}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510790467.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly column: Column;

    /**
     * Flag indicating if sort is ascending
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530897548}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530897548.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting wrong sort order is attempted
     */
    ascending: boolean;

    /**
     * Sort case sensitivity
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819572}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819572.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting non-boolean parameter
     */
    caseSensitive: boolean;

    /**
     * Flag indicating where results with null value should be sorted
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting non-boolean parameter
     */
    nullsLast: boolean;

    /**
     * Sort locale
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1530819644}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530819644.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting non-boolean parameter
     */
    locale: SortLocale | `${SortLocale}`;

    /**
     * Returns the object type name
     */
    toString(): 'query.Sort';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Specifies the condition used to filter the results. It can consist of other Condition objects.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779210}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779210.html}
   */
  export interface Condition {

    /**
     * This is only applicable to "non-leaf" conditions that were created by AND-ing, OR-ing or NOT-ing other Condition objects.
     * In such case this property holds the child Component objects that are arguments of the logical operation.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789455}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789455.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly children: Condition[];

    /**
     * This is only applicable to "leaf" conditions (equivalent to the former Filter)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789485}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789485.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly fieldId: string;

    /**
     * This is only applicable to "leaf" conditions (equivalent to the former Filter)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789501}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789501.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly operator: Operator | `${Operator}`;

    /**
     * Values. This is only applicable to "leaf" conditions (equivalent to the former Filter)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789525}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789525.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly values: string | number | boolean | Date | RelativeDate | Period | string[] | number[] | boolean[] | Date[] | RelativeDate[] | Period[];

    /**
     * Formula. This is only applicable to "leaf" conditions (equivalent to the former Filter)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789560}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789560.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly formula: string;

    /**
     * Return type of the formula, if explicitly specified. This is only applicable to "leaf" conditions (equivalent to the
     * former Filter).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789582}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789582.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly type: ReturnType | `${ReturnType}`;

    /**
     * This is only applicable to "leaf" conditions (equivalent to the former Filter)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789603}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789603.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly aggregate: Aggregate | `${Aggregate}`;

    /**
     * Query component to which this condition belongs. This is only applicable to "leaf" conditions (equivalent to the
     * former Filter)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510789643}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510789643.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly component: Component;

    /**
     * Field context for values in the query result column. This is only applicable to "leaf" conditions (equivalent to the former Filter).
     *
     * Undocumented in the Help Center; present and functional at runtime (verified). Returns null when the context is not set.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly context: {
      name: FieldContext | `${FieldContext}`,
      params?: {
        currencyId?: number,
        date?: RelativeDate | Date,
      },
    } | null;

    /**
     * Indicates whether the condition is case sensitive. This is only applicable to "leaf" conditions (equivalent to the former Filter).
     *
     * Undocumented in the Help Center; present and functional at runtime (verified). Writable; defaults to false.
     */
    caseSensitive: boolean;

    /**
     * Returns the object type name
     */
    toString(): 'query.Condition';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a relative date to use in query conditions
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544109440}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544109440.html}
   */
  export interface RelativeDate {

    /**
     * Holds the date ID of the relative date
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544109453}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544109453.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly dateId: DateId | `${DateId}`;

    /**
     * References the start of the relative date
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544109794}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544109794.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly start: {
      type: 'start',
      value: number,
      dateId: DateId | `${DateId}`,
    };

    /**
     * References the end of the relative date
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544109465}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544109465.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly end: {
      type: 'end',
      value: number,
      dateId: DateId | `${DateId}`,
    };

    /**
     * Describes the interval that the relative date represents
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544109758}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544109758.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly interval: {
      type: 'interval',
      value: number,
      dateId: DateId | `${DateId}`,
    };

    /**
     * Holds the value of the relative date range
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544109837}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544109837.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly value: number | undefined;

    /**
     * Indicates whether the relative date represents a range of dates or a specific moment in time
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1552334952}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1552334952.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly isRange: boolean;

    /**
     * Returns the object type name
     */
    toString(): 'query.RelativeDate';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Set of results returned by the query.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779235}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779235.html}
   */
  export interface ResultSet {

    /**
     * The actual query results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510857646}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510857646.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly results: Result[];

    /**
     * The types of the return values. Array of values from the ReturnType enum. Number and order of values in the array exactly matches the columns property
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510857678}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510857678.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly types: (ReturnType | `${ReturnType}`)[];

    /**
     * The return columns
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510857693}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510857693.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly columns: Column[] | null;

    /**
     * The metadata provider in effect for this object. Observed to report query.MetadataProvider.SUITE_QL for
     * SuiteQL-backed results.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly metadataProvider: MetadataProvider | `${MetadataProvider}` | undefined;

    /**
     * Returns the query result set as an array of mapped results. A mapped result is a JavaScript object with key-value pairs. In this object, the key is either the field ID or the alias that was used for the corresponding query.Column object. When you call this method, Result.asMap() is called on each query.Result object in the result set.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156336700395}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156336700395.html}
     *
     * @governance none
     */
    asMappedResults<MappedResult extends Record<string, string | number>>(): MappedResult[];

    /**
     * Returns the result-value type (a query.ReturnType value) for a given column alias.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @param alias
     *
     * @throws {error.SuiteScriptError} CANNOT_DETERMINE_TYPE_FOR_ALIAS Cannot determine type for alias
     */
    getTypeForAlias(alias: string): ReturnType | `${ReturnType}`;

    /**
     * Returns the result-value type (a query.ReturnType value) for a given column alias.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @param options
     * @param options.alias
     *
     * @throws {error.SuiteScriptError} CANNOT_DETERMINE_TYPE_FOR_ALIAS Cannot determine type for alias
     */
    getTypeForAlias(options: {
      alias: string,
    }): ReturnType | `${ReturnType}`;

    /**
     * Standard object for iterating through results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510790932}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510790932.html}
     *
     * @governance 10 points for each page returned
     */
    iterator(): NetSuiteIterator<Result>;

    /**
     * Returns the object type name
     */
    toString(): 'query.ResultSet';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Corresponds to a single row of the ResultSet.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779258}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779258.html}
   */
  export interface Result {

    /**
     * The result values. Value types correspond to the ResultSet.types property. Number and order of values in the array
     * exactly matches the ResultSet#types, ResultSet#columns or Result#columns property
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510859061}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510859061.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly values: (string | number)[];

    /**
     * Returns the query result as a mapped result. A mapped result is a JavaScript object with key-value pairs.
     * In this object, the key is either the field ID or the alias that was used.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156336629343}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156336629343.html}
     *
     * @governance none
     */
    asMap<MappedResult extends Record<string, string | number>>(): MappedResult;

    /**
     * Undocumented method
     *
     * @governance none
     *
     * @param columnIndex
     */
    getValue<T extends string | number>(columnIndex: number): T;

    /**
     * Undocumented method
     *
     * @param alias
     */
    getValueForAlias<T extends string | number>(alias: string): T;

    /**
     * Undocumented method
     *
     * @param options
     * @param options.alias
     */
    getValueForAlias<T extends string | number>(options: {
      alias: string,
    }): T;

    /**
     * Returns the object type name
     */
    toString(): 'query.Result';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * One page of the paged query results
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779287}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779287.html}
   */
  export interface Page {

    /**
     * Whether the page is the first of the paged query results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878267}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878267.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly isFirst: boolean;

    /**
     * Whether the page is the last of the paged query results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878292}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878292.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly isLast: boolean;

    /**
     * The query results contained in this page
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878060}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878060.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly data: ResultSet;

    /**
     * The range of query results for this page
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878146}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878146.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pageRange: PageRange;

    /**
     * The set of paged query results that this page is from
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878184}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878184.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pagedData: PagedData;

    /**
     * Returns the object type name
     */
    toString(): 'query.Page';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a set of paged query results. This object also contains information about the set of paged results it encapsulates.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779273}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779273.html}
   */
  export interface PagedData {

    /**
     * The metadata provider in effect for this object. Observed to report query.MetadataProvider.SUITE_QL for
     * SuiteQL-backed results.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly metadataProvider: MetadataProvider | `${MetadataProvider}` | undefined;

    /**
     * Undocumented in the Help Center; present at runtime.
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly queryDefinition: {
      query: string,
      params: (string | number | boolean)[],
    };

    /**
     * Describes the total number of paged query result rows
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510861385}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510861385.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly count: number;

    /**
     * Describes the number of query result rows per page
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510861410}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510861410.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pageSize: PageSize;

    /**
     * Holds an array of page ranges for the paged query results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510861433}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510861433.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pageRanges: PageRange[];

    fetch: {

      /**
       * Fetch a specific page of the paged query results
       *
       * @param index
       */
      (index: number): query.Page;

      /**
       * Fetch a specific page of the paged query results
       *
       * @param options
       * @param options.index
       */
      (options: {
        index: number,
      }): query.Page;

      promise: {

        /**
         * Fetch a specific page of the paged query results asynchronously
         *
         * @param index
         */
        (index: number): Promise<query.Page>;

        /**
         * Fetch a specific page of the paged query results asynchronously
         *
         * @param options
         * @param options.index
         */
        (options: {
          index: number,
        }): Promise<query.Page>;
      };
    };

    /**
     * Standard object for iterating through results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510861317}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510861317.html}
     *
     * @governance 10 units
     */
    iterator(): NetSuiteIterator<Page>;

    /**
     * Returns the object type name
     */
    toString(): 'query.PagedData';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates the range of query results for a page.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510779296}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510779296.html}
   */
  export interface PageRange {

    /**
     * Describes the array index for this page range
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878655}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878655.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly index: number;

    /**
     * Describes the number of query result rows in this page range
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510878735}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510878735.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly size: number;
  }

  /**
   * A period of time to use in query conditions.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289614570}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289614570.html}
   */
  export interface Period {

    /**
     * The adjustment of the period
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289613523}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289613523.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly adjustment: PeriodAdjustment | `${PeriodAdjustment}`;

    /**
     * The code of the period
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289612641}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289612641.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly code: PeriodCode | `${PeriodCode}`;

    /**
     * The type of the period
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158289645227}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158289645227.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly type: PeriodType | `${PeriodType}`;

    /**
     * Returns the object type name
     */
    toString(): 'query.Period';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960384819}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960384819.html}
   */
  export interface SuiteQL {

    /**
     * The type of the query
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960456167}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960456167.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly type: Type | `${Type}` | string;

    /**
     * The string representation of the SuiteQL query
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960443690}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960443690.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly query: string;

    /**
     * The parameters for the query
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960427733}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960427733.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly params: (string | number | boolean)[];

    /**
     * The result columns to be returned from the query
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960405619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960405619.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly columns: Column[];

    /**
     * Runs the SuiteQL query and returns the query results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960470046}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960470046.html}
     *
     * @governance 10 points
     * @since 2020.1
     */
    run(): ResultSet;

    /**
     * Runs the SuiteQL query as a paged query and returns the paged query results
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157960491275}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157960491275.html}
     *
     * @governance 10 points
     * @since 2020.1
     *
     * @param [options]
     * @param [options.pageSize] The size of each page in the query results. The default value is 50 results per page. The minimum page size is 5 results per page, and the maximum page size is 1000 results per page.
     */
    runPaged(options?: {
      pageSize?: PageSize,
    }): PagedData;
  }

}

type PageSize = 5 | 6 | 7 | 8 | 9 | 10 |
  11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
  21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
  31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
  41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 |
  51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
  61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 |
  71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
  81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
  91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 |
  101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 |
  111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 |
  121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 |
  131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 |
  141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 |
  151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 |
  161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 |
  171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 |
  181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 |
  191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 |
  201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 |
  211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 |
  221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 |
  231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 |
  241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 |
  251 | 252 | 253 | 254 | 255 | 256 | 257 | 258 | 259 | 260 |
  261 | 262 | 263 | 264 | 265 | 266 | 267 | 268 | 269 | 270 |
  271 | 272 | 273 | 274 | 275 | 276 | 277 | 278 | 279 | 280 |
  281 | 282 | 283 | 284 | 285 | 286 | 287 | 288 | 289 | 290 |
  291 | 292 | 293 | 294 | 295 | 296 | 297 | 298 | 299 | 300 |
  301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 309 | 310 |
  311 | 312 | 313 | 314 | 315 | 316 | 317 | 318 | 319 | 320 |
  321 | 322 | 323 | 324 | 325 | 326 | 327 | 328 | 329 | 330 |
  331 | 332 | 333 | 334 | 335 | 336 | 337 | 338 | 339 | 340 |
  341 | 342 | 343 | 344 | 345 | 346 | 347 | 348 | 349 | 350 |
  351 | 352 | 353 | 354 | 355 | 356 | 357 | 358 | 359 | 360 |
  361 | 362 | 363 | 364 | 365 | 366 | 367 | 368 | 369 | 370 |
  371 | 372 | 373 | 374 | 375 | 376 | 377 | 378 | 379 | 380 |
  381 | 382 | 383 | 384 | 385 | 386 | 387 | 388 | 389 | 390 |
  391 | 392 | 393 | 394 | 395 | 396 | 397 | 398 | 399 | 400 |
  401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 |
  411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 419 | 420 |
  421 | 422 | 423 | 424 | 425 | 426 | 427 | 428 | 429 | 430 |
  431 | 432 | 433 | 434 | 435 | 436 | 437 | 438 | 439 | 440 |
  441 | 442 | 443 | 444 | 445 | 446 | 447 | 448 | 449 | 450 |
  451 | 452 | 453 | 454 | 455 | 456 | 457 | 458 | 459 | 460 |
  461 | 462 | 463 | 464 | 465 | 466 | 467 | 468 | 469 | 470 |
  471 | 472 | 473 | 474 | 475 | 476 | 477 | 478 | 479 | 480 |
  481 | 482 | 483 | 484 | 485 | 486 | 487 | 488 | 489 | 490 |
  491 | 492 | 493 | 494 | 495 | 496 | 497 | 498 | 499 | 500 |
  501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 |
  511 | 512 | 513 | 514 | 515 | 516 | 517 | 518 | 519 | 520 |
  521 | 522 | 523 | 524 | 525 | 526 | 527 | 528 | 529 | 530 |
  531 | 532 | 533 | 534 | 535 | 536 | 537 | 538 | 539 | 540 |
  541 | 542 | 543 | 544 | 545 | 546 | 547 | 548 | 549 | 550 |
  551 | 552 | 553 | 554 | 555 | 556 | 557 | 558 | 559 | 560 |
  561 | 562 | 563 | 564 | 565 | 566 | 567 | 568 | 569 | 570 |
  571 | 572 | 573 | 574 | 575 | 576 | 577 | 578 | 579 | 580 |
  581 | 582 | 583 | 584 | 585 | 586 | 587 | 588 | 589 | 590 |
  591 | 592 | 593 | 594 | 595 | 596 | 597 | 598 | 599 | 600 |
  601 | 602 | 603 | 604 | 605 | 606 | 607 | 608 | 609 | 610 |
  611 | 612 | 613 | 614 | 615 | 616 | 617 | 618 | 619 | 620 |
  621 | 622 | 623 | 624 | 625 | 626 | 627 | 628 | 629 | 630 |
  631 | 632 | 633 | 634 | 635 | 636 | 637 | 638 | 639 | 640 |
  641 | 642 | 643 | 644 | 645 | 646 | 647 | 648 | 649 | 650 |
  651 | 652 | 653 | 654 | 655 | 656 | 657 | 658 | 659 | 660 |
  661 | 662 | 663 | 664 | 665 | 666 | 667 | 668 | 669 | 670 |
  671 | 672 | 673 | 674 | 675 | 676 | 677 | 678 | 679 | 680 |
  681 | 682 | 683 | 684 | 685 | 686 | 687 | 688 | 689 | 690 |
  691 | 692 | 693 | 694 | 695 | 696 | 697 | 698 | 699 | 700 |
  701 | 702 | 703 | 704 | 705 | 706 | 707 | 708 | 709 | 710 |
  711 | 712 | 713 | 714 | 715 | 716 | 717 | 718 | 719 | 720 |
  721 | 722 | 723 | 724 | 725 | 726 | 727 | 728 | 729 | 730 |
  731 | 732 | 733 | 734 | 735 | 736 | 737 | 738 | 739 | 740 |
  741 | 742 | 743 | 744 | 745 | 746 | 747 | 748 | 749 | 750 |
  751 | 752 | 753 | 754 | 755 | 756 | 757 | 758 | 759 | 760 |
  761 | 762 | 763 | 764 | 765 | 766 | 767 | 768 | 769 | 770 |
  771 | 772 | 773 | 774 | 775 | 776 | 777 | 778 | 779 | 780 |
  781 | 782 | 783 | 784 | 785 | 786 | 787 | 788 | 789 | 790 |
  791 | 792 | 793 | 794 | 795 | 796 | 797 | 798 | 799 | 800 |
  801 | 802 | 803 | 804 | 805 | 806 | 807 | 808 | 809 | 810 |
  811 | 812 | 813 | 814 | 815 | 816 | 817 | 818 | 819 | 820 |
  821 | 822 | 823 | 824 | 825 | 826 | 827 | 828 | 829 | 830 |
  831 | 832 | 833 | 834 | 835 | 836 | 837 | 838 | 839 | 840 |
  841 | 842 | 843 | 844 | 845 | 846 | 847 | 848 | 849 | 850 |
  851 | 852 | 853 | 854 | 855 | 856 | 857 | 858 | 859 | 860 |
  861 | 862 | 863 | 864 | 865 | 866 | 867 | 868 | 869 | 870 |
  871 | 872 | 873 | 874 | 875 | 876 | 877 | 878 | 879 | 880 |
  881 | 882 | 883 | 884 | 885 | 886 | 887 | 888 | 889 | 890 |
  891 | 892 | 893 | 894 | 895 | 896 | 897 | 898 | 899 | 900 |
  901 | 902 | 903 | 904 | 905 | 906 | 907 | 908 | 909 | 910 |
  911 | 912 | 913 | 914 | 915 | 916 | 917 | 918 | 919 | 920 |
  921 | 922 | 923 | 924 | 925 | 926 | 927 | 928 | 929 | 930 |
  931 | 932 | 933 | 934 | 935 | 936 | 937 | 938 | 939 | 940 |
  941 | 942 | 943 | 944 | 945 | 946 | 947 | 948 | 949 | 950 |
  951 | 952 | 953 | 954 | 955 | 956 | 957 | 958 | 959 | 960 |
  961 | 962 | 963 | 964 | 965 | 966 | 967 | 968 | 969 | 970 |
  971 | 972 | 973 | 974 | 975 | 976 | 977 | 978 | 979 | 980 |
  981 | 982 | 983 | 984 | 985 | 986 | 987 | 988 | 989 | 990 |
  991 | 992 | 993 | 994 | 995 | 996 | 997 | 998 | 999 | 1000;