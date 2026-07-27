/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />

/**
 * SuiteScript search module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345764122}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345764122.html}
 * @module N/search
 * @NApiVersion 2.x
 */
interface search {

  create: {

    /**
     * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
     * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345171487}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345171487.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.type the record internal ID of the record type you are searching
     * @param [options.filters] a single filter object or an array of filter objects or a search filter expression
     * @param [options.columns] a single search.Column or string or an array that contains elements of the two types
     * @param [options.settings] a single search.Setting or string or an array that contains elements of the two types
     * @param [options.title] name of the search (when saved)
     * @param [options.id] customer ID of the search (when saved), it's a string starting with 'customsearch'
     * @param [options.filterExpression] search filter expression as a nested array, e.g. [['fieldid', 'operator', 'value']]; an alternative to options.filters
     * @param [options.packageId] the application ID (bundle or SuiteApp) for this search
     * @param [options.isPublic] set to true to make a saved search public; defaults to false
     * @return the created search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing, or a filter in options.filters is missing its operator
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.filters is not an array
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if a filter in options.filters specifies an invalid operator
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR if options.filters is a malformed filter expression
     */
    (options: {
      type: search.Type | `${search.Type}` | string,
      filters?: search.Filter | search.Filter[] | (string | number | (string | number | (string | number | [])[])[])[],
      columns?: search.Column | search.Column[] | string | string[],
      settings?: search.Setting | search.Setting[] | string,
      title?: string,
      id?: string,
      filterExpression?: (string | number | (string | number | (string | number | [])[])[])[],
      packageId?: string,
      isPublic?: boolean,
    }): search.Search

    /**
     * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
     * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345171487}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345171487.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.type the record internal ID of the record type you are searching
     * @param [options.filters] a single filter object or an array of filter objects or a search filter expression
     * @param [options.columns] a single search.Column or string or an array that contains elements of the two types
     * @param [options.settings] a single search.Setting or string or an array that contains elements of the two types
     * @param [options.title] name of the search (when saved)
     * @param [options.id] customer ID of the search (when saved), it's a string starting with 'customsearch'
     * @param [options.filterExpression] search filter expression as a nested array, e.g. [['fieldid', 'operator', 'value']]; an alternative to options.filters
     * @param [options.packageId] the application ID (bundle or SuiteApp) for this search
     * @param [options.isPublic] set to true to make a saved search public; defaults to false
     * @return the created search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing, or a filter in options.filters is missing its operator
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.filters is not an array
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if a filter in options.filters specifies an invalid operator
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR if options.filters is a malformed filter expression
     */
    promise(options: {
      type: search.Type | `${search.Type}` | string,
      filters?: search.Filter | search.Filter[] | (string | number | (string | number | (string | number | [])[])[])[],
      columns?: search.Column | search.Column[] | string | string[],
      settings?: search.Setting | search.Setting[] | string,
      title?: string,
      id?: string,
      filterExpression?: (string | number | (string | number | (string | number | [])[])[])[],
      packageId?: string,
      isPublic?: boolean,
    }): Promise<search.Search>
  };

  load: {

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775360}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775360.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param id the scriptid or internal ID of the search
     * @return the loaded search
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    (id: string | number): search.Search

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775360}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775360.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param options
     * @param options.id the scriptid or internal ID of the search
     * @param [options.type] the search type. Required for standalone search types (those with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch); optional otherwise, since the type is normally inferred from the corresponding record type
     * @return the loaded search
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    (options: {
      id: string | number,
      type?: search.Type | `${search.Type}` | string,
    }): search.Search

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775360}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775360.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param id the scriptid or internal ID of the search
     * @return the loaded search
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    promise(id: string | number): Promise<search.Search>

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775360}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775360.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param options
     * @param options.id the scriptid or internal ID of the search
     * @param [options.type] the search type. Required for standalone search types (those with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch); optional otherwise, since the type is normally inferred from the corresponding record type
     * @return the loaded search
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    promise(options: {
      id: string | number,
      type?: search.Type | `${search.Type}` | string,
    }): Promise<search.Search>
  };

  delete: {

    /**
     * Deletes an existing saved search.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775501}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775501.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param id the scriptid or internal ID of the search
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    (id: string | number): void

    /**
     * Deletes an existing saved search.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775501}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775501.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param options
     * @param options.id the scriptid or internal ID of the search
     * @param [options.type] the search type. Required for standalone search types (those with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch); optional otherwise, since the type is normally inferred from the corresponding record type
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    (options: {
      id: string | number,
      type?: search.Type | `${search.Type}` | string,
    }): void

    /**
     * Deletes an existing saved search.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775501}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775501.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param id the scriptid or internal ID of the search
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    promise(id: string | number): Promise<void>

    /**
     * Deletes an existing saved search.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775501}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775501.html}
     *
     * @governance 5 units
     * @since 2015.2
     *
     * @param options
     * @param options.id the scriptid or internal ID of the search
     * @param [options.type] the search type. Required for standalone search types (those with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch); optional otherwise, since the type is normally inferred from the corresponding record type
     *
     * @throws {error.SuiteScriptError} INVALID_SEARCH if no saved search matches the id, or the supplied type does not match the search's type
     * @throws {error.SuiteScriptError} UNABLE_TO_DETERMINE_RECORD_TYPE_FOR_SAVED_SEARCH_ID_1 if type is omitted for a standalone search type (one with no corresponding record type, e.g. DeletedRecord, Role, Permission, SavedSearch)
     */
    promise(options: {
      id: string | number,
      type?: search.Type | `${search.Type}` | string,
    }): Promise<void>
  };

  duplicates: {

    /**
     * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
     * Note that this API only works for records that support duplicate record detection. These records include
     * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
     * on how you want to search for duplicates.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775593}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775593.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param options
     * @param options.type the record type you are checking duplicates for
     * @param [options.fields] a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
     * @param [options.id] internalId of existing record
     * @return array of result objects corresponding to the duplicate records results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    (option: {
      type: search.Type | `${search.Type}` | string,
      fields?: Record<string, string | number>,
      id?: number,
    }): search.Result[]


    /**
     * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
     * Note that this API only works for records that support duplicate record detection. These records include
     * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
     * on how you want to search for duplicates.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775593}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775593.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param options
     * @param options.type the record type you are checking duplicates for
     * @param [options.fields] a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
     * @param [options.id] internalId of existing record
     * @return array of result objects corresponding to the duplicate records results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    promise(option: {
      type: search.Type | `${search.Type}` | string,
      fields?: Record<string, string | number>,
      id?: number,
    }): Promise<search.Result[]>
  };

  global: {

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775747}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775747.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param options
     * @param options.keywords global search keywords string or expression
     * @return array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    (options: {
      keywords: string,
    }): search.Result[]

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775747}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775747.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param keywords global search keywords string or expression
     * @return array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    (keywords: string): search.Result[]

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775747}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775747.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param options
     * @param options.keywords global search keywords string or expression
     * @return array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    promise(option: {
      keywords: string,
    }): Promise<search.Result[]>

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345775747}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345775747.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param keywords global search keywords string or expression
     * @return array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    promise(keywords: string): Promise<search.Result[]>
  };

  lookupFields: {

    /**
     * Performs a search for one or more body fields on a record. Supports joined-field lookups,
     * where the notation for a joined field is join_id.field_name.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345776651}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345776651.html}
     *
     * @governance 1 unit
     * @since 2015.2
     *
     * @param options
     * @param options.type the record type you are searching
     * @param options.id the internal ID of the record
     * @param options.columns a single column/field name to look up
     * @return an object keyed by column/field name; a select field returns {value, text}, a multiselect field returns an array of {value, text}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL if a column/field name in options.columns is invalid
     */<ColumnName extends string>(options: {
      type: search.Type | `${search.Type}` | string,
      id: string | number,
      columns: ColumnName,
    }): {
      [key in ColumnName]: (string | boolean | {
        value: string,
        text: string,
      }[])
    }

    /**
     * Performs a search for one or more body fields on a record. Supports joined-field lookups,
     * where the notation for a joined field is join_id.field_name.
     *
     * @governance 1 unit
     * @since 2015.2
     *
     * @param options
     * @param options.type the record type you are searching
     * @param options.id the internal ID of the record
     * @param options.columns an array of column/field names to look up
     * @return an object keyed by column/field name; a select field returns {value, text}, a multiselect field returns an array of {value, text}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL if a column/field name in options.columns is invalid
     */<ColumnName extends string>(options: {
      type: search.Type | `${search.Type}` | string,
      id: string | number,
      columns: ColumnName[],
    }): {
      [key in ColumnName]: (string | boolean | {
        value: string,
        text: string,
      }[])
    }

    /**
     * Performs a search for one or more body fields on a record. Supports joined-field lookups,
     * where the notation for a joined field is join_id.field_name.
     *
     * @governance 1 unit
     * @since 2015.2
     *
     * @param options
     * @param options.type the record type you are searching
     * @param options.id the internal ID of the record
     * @param options.columns a single column/field name to look up
     * @return a Promise resolving to an object keyed by column/field name; a select field returns {value, text}, a multiselect field returns an array of {value, text}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL if a column/field name in options.columns is invalid
     */
    promise<ColumnName extends string>(options: {
      type: search.Type | `${search.Type}` | string,
      id: string | number,
      columns: ColumnName,
    }): Promise<{
      [key in ColumnName]: (string | boolean | {
        value: string,
        text: string,
      }[])
    }>

    /**
     * Performs a search for one or more body fields on a record. Supports joined-field lookups,
     * where the notation for a joined field is join_id.field_name.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345776651}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345776651.html}
     *
     * @governance 1 unit
     * @since 2015.2
     *
     * @param options
     * @param options.type the record type you are searching
     * @param options.id the internal ID of the record
     * @param options.columns an array of column/field names to look up
     * @return a Promise resolving to an object keyed by column/field name; a select field returns {value, text}, a multiselect field returns an array of {value, text}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL if a column/field name in options.columns is invalid
     */
    promise<ColumnName extends string>(options: {
      type: search.Type | `${search.Type}` | string,
      id: string | number,
      columns: ColumnName[],
    }): Promise<{
      [key in ColumnName]: (string | boolean | {
        value: string,
        text: string,
      }[])
    }>
  };

  /**
   * Creates a search.Column object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345776927}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345776927.html}
   *
   * @governance none
   * @since 2015.2
   *
   * @param options
   * @param options.name the search return column name
   * @param [options.join] the join ID for this search return column
   * @param [options.summary] the summary type for this column
   * @param options.formula formula used for this column
   * @param [options.function] function used for this column
   * @param [options.label] label used for this column
   * @param [options.sort] sort direction for this column uses values from the Sort enum
   * @return the created column object
   *
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.summary or options.function is not a recognized enum value
   */
  createColumn(options: {
    name: search.FormulaName,
    summary?: search.Summary | `${search.Summary}`,
    formula: string,
    function?: search.ColumnFunction
    label?: string,
    sort?: search.Sort | `${search.Sort}`,
  }): search.Column;

  /**
   * Creates a search.Column object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345776927}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345776927.html}
   *
   * @governance none
   * @since 2015.2
   *
   * @param options
   * @param options.name the search return column name
   * @param [options.join] the join ID for this search return column
   * @param [options.summary] the summary type for this column
   * @param [options.function] function used for this column
   * @param [options.label] label used for this column
   * @param [options.sort] sort direction for this column uses values from the Sort enum
   * @return the created column object
   *
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.summary or options.function is not a recognized enum value
   */
  createColumn(options: {
    name: string,
    join?: string,
    summary?: search.Summary | `${search.Summary}`,
    function?: search.ColumnFunction
    label?: string,
    sort?: search.Sort | `${search.Sort}`,
  }): search.Column;

  /**
   * Creates a search.Filter object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345777107}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345777107.html}
   *
   * @governance none
   * @since 2015.2
   *
   * @param options
   * @param options.name internal ID of the search field
   * @param options.formula formula used for this filter
   * @param [options.join] if executing a joined search, this is the join ID used for the search field specified in the name parameter
   * @param options.operator search operator
   * @param [options.values] values to be used as filter parameters
   * @param [options.summary] summary type used for this filter
   * @return the created filter object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.operator is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if options.operator is not a recognized operator
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.summary is not a recognized enum value
   */
  createFilter(options: {
    name: search.FormulaName,
    formula: string,
    operator: search.Operator | `${search.Operator}`,
    values?: string | number | Date | (string | number)[] | Date[],
    summary?: search.Summary | `${search.Summary}`,
  }): search.Filter;

  /**
   * Creates a search.Filter object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345777107}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345777107.html}
   *
   * @governance none
   * @since 2015.2
   *
   * @param options
   * @param options.name internal ID of the search field
   * @param [options.join] if executing a joined search, this is the join ID used for the search field specified in the name parameter
   * @param options.operator search operator
   * @param [options.values] values to be used as filter parameters
   * @param [options.summary] summary type used for this filter
   * @return the created filter object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.operator is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if options.operator is not a recognized operator
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.summary is not a recognized enum value
   */
  createFilter(options: {
    name: string,
    join?: string,
    operator: search.Operator | `${search.Operator}`,
    values?: string | number | Date | (string | number)[] | Date[],
    summary?: search.Summary | `${search.Summary}`,
  }): search.Filter;

  /**
   * Creates a search.Setting object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1536171305}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1536171305.html}
   *
   * @governance none
   * @since 2018.2
   *
   * @param options
   * @param options.name name of the result setting parameter
   * @param options.value value of the result settting parameter
   * @return the created setting object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.value is missing
   */
  createSetting(options: {
    name: string,
    value: string,
  }): search.Setting;
}

declare namespace search {

  type FormulaName =
    'formulacurrency' |
    'formuladate' |
    'formuladatetime' |
    'formulanumeric' |
    'formulapercent' |
    'formulatext';

  type ColumnFunction =
    'none' |
    'percentOfTotal' | // % of Total, Output: percent
    'absoluteValue' | // Absolute Value, Output: integer
    'ageInDays' | // Age In Days, Date Function, Output: integer
    'ageInHours' | // Age In Hours, Date Function, Output: integer
    'ageInMonths' | // Age In Months, Date Function, Output: integer
    'ageInWeeks' | // Age In Weeks, Date Function, Output: integer
    'ageInYears' | // Age In Years, Date Function, Output: integer
    'calendarWeek' | // Calendar Week, Date Function, Output: date
    'day' | // Day, Date Function, Output: date
    'month' | // Month, Date Function, Output: text
    'negate' | // Negate, Output: integer
    'numberAsTime' | // Number as Time, Output: text
    'quarter' | // Quarter, Date Function, Output: text
    'rank' | // Rank, Output: integer
    'round' | // Round, Output: float
    'roundToHundredths' | // Round to Hundredths, Output: float
    'roundToTenths' | // Round to Tenths, Output: float
    'weekOfYear' | // Week of Year, Date Function, Output: text
    'year'; // Year, Date Function, Output: text

  /**
   * Holds the values for search operators to use with the search.Filter.
   * See SuiteScript 2.x Search Operators for more information about the field types supported for each search operator type.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345782273}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345782273.html}
   */
  export enum Operator {
    AFTER = 'after',
    ALLOF = 'allof',
    ANY = 'any',
    ANYOF = 'anyof',
    BEFORE = 'before',
    BETWEEN = 'between',
    CONTAINS = 'contains',
    DOESNOTCONTAIN = 'doesnotcontain',
    DOESNOTSTARTWITH = 'doesnotstartwith',
    EQUALTO = 'equalto',
    GREATERTHAN = 'greaterthan',
    GREATERTHANOREQUALTO = 'greaterthanorequalto',
    HASKEYWORDS = 'haskeywords',
    IS = 'is',
    ISEMPTY = 'isempty',
    ISNOT = 'isnot',
    ISNOTEMPTY = 'isnotempty',
    LESSTHAN = 'lessthan',
    LESSTHANOREQUALTO = 'lessthanorequalto',
    NONEOF = 'noneof',
    NOTAFTER = 'notafter',
    NOTALLOF = 'notallof',
    NOTBEFORE = 'notbefore',
    NOTBETWEEN = 'notbetween',
    NOTEQUALTO = 'notequalto',
    NOTGREATERTHAN = 'notgreaterthan',
    NOTGREATERTHANOREQUALTO = 'notgreaterthanorequalto',
    NOTLESSTHAN = 'notlessthan',
    NOTLESSTHANOREQUALTO = 'notlessthanorequalto',
    NOTON = 'noton',
    NOTONORAFTER = 'notonorafter',
    NOTONORBEFORE = 'notonorbefore',
    NOTWITHIN = 'notwithin',
    ON = 'on',
    ONORAFTER = 'onorafter',
    ONORBEFORE = 'onorbefore',
    STARTSWITH = 'startswith',
    WITHIN = 'within',
  }

  /**
   * Holds the values for summary types used by the Column.summary or Filter.summary properties.
   * For more information about each search summary type, see SuiteScript 1.0 Documentation.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345777923}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345777923.html}
   */
  export enum Summary {
    GROUP = 'GROUP',
    COUNT = 'COUNT',
    SUM = 'SUM',
    AVG = 'AVG',
    MIN = 'MIN',
    MAX = 'MAX',
  }

  /**
   * Holds the values for supported sorting directions used with search.createColumn(options).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486581209}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486581209.html}
   */
  export enum Sort {
    ASC = 'ASC',
    DESC = 'DESC',
    NONE = 'NONE',
  }

  /**
   * Holds the string values for search types supported in the N/search Module.
   * Use this enum to set the value for the options.type parameter of the search.create(options) method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483165708}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483165708.html}
   */
  export enum Type {
    ACCOUNT = 'account',
    ACCOUNTING_BOOK = 'accountingbook',
    ACCOUNTING_CONTEXT = 'accountingcontext',
    ACCOUNTING_PERIOD = 'accountingperiod',
    ACTIVITY = 'activity',
    ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry',
    AGGR_FIN_DAT = 'AggrFinDat',
    ALLOC_RECOMMENDATION_DEMAND = 'AllocRecommendationDemand',
    ALLOC_RECOMMENDATION_DETAIL = 'AllocRecommendationDetail',
    AMORTIZATION_SCHEDULE = 'amortizationschedule',
    AMORTIZATION_TEMPLATE = 'amortizationtemplate',
    ANALYTICAL_IMPACT = 'analyticalimpact',
    AS_CHARGED_PROJECT_REVENUE_RULE = 'aschargedprojectrevenuerule',
    ASSEMBLY_BUILD = 'assemblybuild',
    ASSEMBLY_ITEM = 'assemblyitem',
    ASSEMBLY_UNBUILD = 'assemblyunbuild',
    AUTHENTICATE_DEVICE_INPUT = 'AuthenticateDeviceInput',
    BALANCE_TRX_BY_SEGMENTS = 'BalanceTrxBySegments',
    BALANCING_DETAIL = 'BalancingDetail',
    BALANCING_RESULT = 'BalancingResult',
    BALANCING_TRANSACTION = 'BalancingTransaction',
    BILLING_ACCOUNT = 'billingaccount',
    BILLING_ACCOUNT_BILL_CYCLE = 'BillingAccountBillCycle',
    BILLING_ACCOUNT_BILL_REQUEST = 'BillingAccountBillRequest',
    BILLING_CLASS = 'billingclass',
    BILLING_RATE_CARD = 'billingratecard',
    BILLING_REVENUE_EVENT = 'billingrevenueevent',
    BILLING_SCHEDULE = 'billingschedule',
    BIN = 'bin',
    BIN_ITEM_BALANCE = 'BinItemBalance',
    BIN_TRANSFER = 'bintransfer',
    BIN_WORKSHEET = 'binworksheet',
    BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder',
    BOM = 'bom',
    BOM_REVISION = 'bomrevision',
    BONUS = 'bonus',
    BONUS_TYPE = 'bonustype',
    BUDGET_EXCHANGE_RATE = 'budgetexchangerate',
    BUDGET_IMPORT = 'budgetimport',
    BULK_OWNERSHIP_TRANSFER = 'bulkownershiptransfer',
    BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
    CALENDAR_EVENT = 'calendarevent',
    CAMPAIGN = 'campaign',
    CARDHOLDER_AUTHENTICATION = 'CardholderAuthentication',
    CARDHOLDER_AUTHENTICATION_EVENT = 'CardholderAuthenticationEvent',
    CASH_REFUND = 'cashrefund',
    CASH_SALE = 'cashsale',
    CHALLENGE_SHOPPER_INPUT = 'ChallengeShopperInput',
    CHARGE = 'charge',
    CHARGE_PERIOD_SEGMENT = 'ChargePeriodSegment',
    CHARGE_RULE = 'chargerule',
    CHECK = 'check',
    CLASSIFICATION = 'classification',
    CLIENT_SCRIPT = 'clientscript',
    CMS_CONTENT = 'cmscontent',
    CMS_CONTENT_TYPE = 'cmscontenttype',
    CMS_PAGE = 'cmspage',
    COMMERCE_CATEGORY = 'commercecategory',
    COMMERCE_SEARCH_ACTIVITY_DATA = 'CommerceSearchActivityData',
    COMM_AN_SESSION = 'CommAnSession',
    COMPETITOR = 'competitor',
    COM_SEARCH_BOOST = 'ComSearchBoost',
    COM_SEARCH_BOOST_TYPE = 'ComSearchBoostType',
    COM_SEARCH_GROUP_SYN = 'ComSearchGroupSyn',
    COM_SEARCH_ONE_WAY_SYN = 'ComSearchOneWaySyn',
    CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate',
    CONTACT = 'contact',
    CONTACT_CATEGORY = 'contactcategory',
    CONTACT_ROLE = 'contactrole',
    COST_CATEGORY = 'costcategory',
    COUPON_CODE = 'couponcode',
    CREDIT_CARD_CHARGE = 'creditcardcharge',
    CREDIT_CARD_REFUND = 'creditcardrefund',
    CREDIT_MEMO = 'creditmemo',
    CURRENCY = 'currency',
    CURRENCY_EXCHANGE_RATE = 'CurrencyExchangeRate',
    CURRENCY_RATE = 'currencyrate',
    CUSTOMER = 'customer',
    CUSTOMER_CATEGORY = 'customercategory',
    CUSTOMER_DEPOSIT = 'customerdeposit',
    CUSTOMER_MESSAGE = 'customermessage',
    CUSTOMER_PAYMENT = 'customerpayment',
    CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization',
    CUSTOMER_REFUND = 'customerrefund',
    CUSTOMER_STATUS = 'customerstatus',
    CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship',
    CUSTOM_PURCHASE = 'custompurchase',
    CUSTOM_RECORD = 'customrecord',
    CUSTOM_SALE = 'customsale',
    CUSTOM_TRANSACTION = 'customtransaction',
    DELETED_RECORD = 'DeletedRecord',
    DEPARTMENT = 'department',
    DEPOSIT = 'deposit',
    DEPOSIT_APPLICATION = 'depositapplication',
    DESCRIPTION_ITEM = 'descriptionitem',
    DISCOUNT_ITEM = 'discountitem',
    DOWNLOAD_ITEM = 'downloaditem',
    EMAIL_TEMPLATE = 'emailtemplate',
    EMPLOYEE = 'employee',
    EMPLOYEE_CHANGE_REQUEST = 'employeechangerequest',
    EMPLOYEE_CHANGE_REQUEST_TYPE = 'employeechangerequesttype',
    EMPLOYEE_EXPENSE_SOURCE_TYPE = 'employeeexpensesourcetype',
    EMPLOYEE_PAYROLL_ITEM = 'EmployeePayrollItem',
    EMPLOYEE_STATUS = 'EmployeeStatus',
    EMPLOYEE_TYPE = 'EmployeeType',
    END_TO_END_TIME = 'EndToEndTime',
    ENTITY = 'entity',
    ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping',
    ENTITY_GROUP = 'entitygroup',
    ESTIMATE = 'estimate',
    EXPENSE_AMORTIZATION_EVENT = 'expenseamortizationevent',
    EXPENSE_AMORT_PLAN_AND_SCHEDULE = 'ExpenseAmortPlanAndSchedule',
    EXPENSE_CATEGORY = 'expensecategory',
    EXPENSE_PLAN = 'expenseplan',
    EXPENSE_REPORT = 'expensereport',
    EXPENSE_REPORT_POLICY = 'expensereportpolicy',
    FAIR_VALUE_FORMULA = 'fairvalueformula',
    FAIR_VALUE_PRICE = 'fairvalueprice',
    FINANCIAL_INSTITUTION = 'financialinstitution',
    FIN_RPT_AGGREGATE_F_R = 'FinRptAggregateFR',
    FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule',
    FOLDER = 'folder',
    FULFILLMENT_REQUEST = 'fulfillmentrequest',
    GATEWAY_NOTIFICATION = 'GatewayNotification',
    GENERIC_RESOURCE = 'genericresource',
    GIFT_CERTIFICATE = 'giftcertificate',
    GIFT_CERTIFICATE_ITEM = 'giftcertificateitem',
    GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping',
    GLOBAL_INVENTORY_RELATIONSHIP = 'globalinventoryrelationship',
    GL_LINES_AUDIT_LOG = 'GlLinesAuditLog',
    GL_NUMBERING_SEQUENCE = 'glnumberingsequence',
    GOAL = 'goal',
    HCM_JOB = 'hcmjob',
    IMPACT_SUBCATEGORY = 'impactsubcategory',
    IMPORTED_EMPLOYEE_EXPENSE = 'importedemployeeexpense',
    INBOUND_SHIPMENT = 'inboundshipment',
    INSTALLMENT = 'Installment',
    INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry',
    INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder',
    INVENTORY_ADJUSTMENT = 'inventoryadjustment',
    INVENTORY_BALANCE = 'InventoryBalance',
    INVENTORY_COST_REVALUATION = 'inventorycostrevaluation',
    INVENTORY_COUNT = 'inventorycount',
    INVENTORY_DEMAND = 'InventoryDemand',
    INVENTORY_DETAIL = 'inventorydetail',
    INVENTORY_ITEM = 'inventoryitem',
    INVENTORY_NUMBER = 'inventorynumber',
    INVENTORY_NUMBER_BIN = 'InventoryNumberBin',
    INVENTORY_NUMBER_ITEM = 'InventoryNumberItem',
    INVENTORY_STATUS = 'inventorystatus',
    INVENTORY_STATUS_CHANGE = 'inventorystatuschange',
    INVENTORY_STATUS_LOCATION = 'InventoryStatusLocation',
    INVENTORY_TRANSFER = 'inventorytransfer',
    INVENTORY_WORKSHEET = 'inventoryworksheet',
    INVOICE = 'invoice',
    INVOICE_GROUP = 'invoicegroup',
    INVT_NUMBER_ITEM_BALANCE = 'InvtNumberItemBalance',
    ISSUE = 'issue',
    ITEM = 'item',
    ITEM_ACCOUNT_MAPPING = 'itemaccountmapping',
    ITEM_BIN_NUMBER = 'ItemBinNumber',
    ITEM_COLLECTION = 'itemcollection',
    ITEM_COLLECTION_ITEM_MAP = 'itemcollectionitemmap',
    ITEM_DEMAND_PLAN = 'itemdemandplan',
    ITEM_FULFILLMENT = 'itemfulfillment',
    ITEM_GROUP = 'itemgroup',
    ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration',
    ITEM_LOCATION_MAP = 'ItemLocationMap',
    ITEM_PROCESS_FAMILY = 'itemprocessfamily',
    ITEM_PROCESS_GROUP = 'itemprocessgroup',
    ITEM_RECEIPT = 'itemreceipt',
    ITEM_REVISION = 'itemrevision',
    ITEM_SUPPLY_PLAN = 'itemsupplyplan',
    JOB = 'job',
    JOB_STATUS = 'jobstatus',
    JOB_TYPE = 'jobtype',
    JOURNAL_ENTRY = 'journalentry',
    KIT_ITEM = 'kititem',
    LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule',
    LABOR_CATEGORY = 'LaborCategory',
    LABOR_COST_CARD = 'LaborCostCard',
    LABOR_COST_CARD_ITEM = 'LaborCostCardItem',
    LABOR_COST_CARD_SEGMENT = 'LaborCostCardSegment',
    LABOR_COST_ELEMENT = 'LaborCostElement',
    LEAD = 'lead',
    LOCATION = 'location',
    LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem',
    LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem',
    MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate',
    MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask',
    MANUFACTURING_ROUTING = 'manufacturingrouting',
    MAP_REDUCE_SCRIPT = 'mapreducescript',
    MARKUP_ITEM = 'markupitem',
    MASSUPDATE_SCRIPT = 'massupdatescript',
    MEM_DOC = 'memdoc',
    MERCHANDISE_HIERARCHY_LEVEL = 'merchandisehierarchylevel',
    MERCHANDISE_HIERARCHY_NODE = 'merchandisehierarchynode',
    MERCHANDISE_HIERARCHY_VERSION = 'merchandisehierarchyversion',
    MESSAGE = 'message',
    MFG_PLANNED_TIME = 'mfgplannedtime',
    NEXUS = 'nexus',
    NON_INVENTORY_ITEM = 'noninventoryitem',
    NOTE = 'note',
    NOTE_TYPE = 'notetype',
    OPPORTUNITY = 'opportunity',
    ORDER_RESERVATION = 'orderreservation',
    ORDER_TYPE = 'ordertype',
    OTHER_CHARGE_ITEM = 'otherchargeitem',
    OTHER_NAME = 'othername',
    OTHER_NAME_CATEGORY = 'othernamecategory',
    PARTNER = 'partner',
    PARTNER_CATEGORY = 'partnercategory',
    PAYCHECK = 'paycheck',
    PAYCHECK_JOURNAL = 'paycheckjournal',
    PAYMENT_EVENT = 'PaymentEvent',
    PAYMENT_INSTRUMENT = 'PaymentInstrument',
    PAYMENT_ITEM = 'paymentitem',
    PAYMENT_METHOD = 'paymentmethod',
    PAYMENT_OPTION = 'PaymentOption',
    PAYMENT_RESULT_PREVIEW = 'PaymentResultPreview',
    PAYROLL_ITEM = 'payrollitem',
    PAYROLL_SETUP = 'PayrollSetup',
    PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule',
    PERFORMANCE_METRIC = 'performancemetric',
    PERFORMANCE_REVIEW = 'performancereview',
    PERFORMANCE_REVIEW_SCHEDULE = 'performancereviewschedule',
    PERIOD_END_JOURNAL = 'periodendjournal',
    PERMISSION = 'Permission',
    PHONE_CALL = 'phonecall',
    PICK_DECOMPOSITION = 'pickdecomposition',
    PICK_STRATEGY = 'pickstrategy',
    PICK_TASK = 'picktask',
    PLANNED_ORDER = 'plannedorder',
    PLANNING_ENGINE_CYCLE = 'PlanningEngineCycle',
    PLANNING_ENGINE_MESSAGE = 'PlanningEngineMessage',
    PLANNING_ENGINE_PEGGING = 'PlanningEnginePegging',
    PLANNING_ENGINE_RESULT = 'PlanningEngineResult',
    PLANNING_ITEM_CATEGORY = 'planningitemcategory',
    PLANNING_ITEM_GROUP = 'planningitemgroup',
    PLANNING_REPOSITORY_ALLOCATION = 'PlanningRepositoryAllocation',
    PLANNING_REPOSITORY_BOM_EDGE = 'PlanningRepositoryBomEdge',
    PLANNING_REPOSITORY_ITEM_LOCATION = 'PlanningRepositoryItemLocation',
    PLANNING_REPOSITORY_SOURCE = 'PlanningRepositorySource',
    PLANNING_RULE_GROUP = 'planningrulegroup',
    PLANNING_VIEW = 'planningview',
    PORTLET = 'portlet',
    PRICE_BOOK = 'pricebook',
    PRICE_LEVEL = 'pricelevel',
    PRICE_PLAN = 'priceplan',
    PRICING = 'Pricing',
    PRICING_GROUP = 'pricinggroup',
    PROJECT_EXPENSE_TYPE = 'projectexpensetype',
    PROJECT_IC_CHARGE_REQUEST = 'ProjectIcChargeRequest',
    PROJECT_TASK = 'projecttask',
    PROJECT_TEMPLATE = 'projecttemplate',
    PROMISING_SETUP = 'PromisingSetup',
    PROMOTION_CODE = 'promotioncode',
    PROSPECT = 'prospect',
    PURCHASE_CONTRACT = 'purchasecontract',
    PURCHASE_ORDER = 'purchaseorder',
    PURCHASE_REQUISITION = 'purchaserequisition',
    RECEIVED_VENDOR_BILL = 'ReceivedVendorBill',
    RECENT_RECORD = 'RecentRecord',
    RESOURCE_ALLOCATION = 'resourceallocation',
    RESOURCE_GROUP = 'resourcegroup',
    RESTLET = 'restlet',
    RES_ALLOCATION_TIME_OFF_CONFLICT = 'ResAllocationTimeOffConflict',
    RETURN_AUTHORIZATION = 'returnauthorization',
    REVENUE_ARRANGEMENT = 'revenuearrangement',
    REVENUE_COMMITMENT = 'revenuecommitment',
    REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal',
    REVENUE_PLAN = 'revenueplan',
    REV_REC_FIELD_MAPPING = 'revrecfieldmapping',
    REV_REC_PLAN_AND_SCHEDULE = 'RevRecPlanAndSchedule',
    REV_REC_SCHEDULE = 'revrecschedule',
    REV_REC_TEMPLATE = 'revrectemplate',
    ROLE = 'Role',
    SAAS_METRIC = 'saasmetric',
    SALES_CAMPAIGN = 'salescampaign',
    SALES_CHANNEL = 'saleschannel',
    SALES_ORDER = 'salesorder',
    SALES_PRICE_RULE = 'salespricerule',
    SALES_PRICE_RULE_ENTRY = 'salespriceruleentry',
    SALES_ROLE = 'salesrole',
    SALES_TAX_ITEM = 'salestaxitem',
    SAVED_SEARCH = 'SavedSearch',
    SCHEDULED_SCRIPT = 'scheduledscript',
    SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance',
    SCRIPT_DEPLOYMENT = 'scriptdeployment',
    SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem',
    SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem',
    SERVICE_ITEM = 'serviceitem',
    SHIP_ITEM = 'shipitem',
    SHOPPING_CART = 'ShoppingCart',
    SITE_CATEGORY = 'sitecategory',
    SOLUTION = 'solution',
    STATE = 'State',
    STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry',
    STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment',
    SUBSCRIPTION = 'subscription',
    SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder',
    SUBSCRIPTION_LINE = 'subscriptionline',
    SUBSCRIPTION_LINE_REVISION = 'SubscriptionLineRevision',
    SUBSCRIPTION_PLAN = 'subscriptionplan',
    SUBSCRIPTION_RENEWAL_HISTORY = 'SubscriptionRenewalHistory',
    SUBSCRIPTION_TERM = 'subscriptionterm',
    SUBSIDIARY = 'subsidiary',
    SUBTOTAL_ITEM = 'subtotalitem',
    SUITELET = 'suitelet',
    SUITE_SCRIPT_DETAIL = 'SuiteScriptDetail',
    SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot',
    SUPPLY_CHAIN_SNAPSHOT_DETAILS = 'SupplyChainSnapshotDetails',
    SUPPLY_CHANGE_ORDER = 'supplychangeorder',
    SUPPLY_PLAN_DEFINITION = 'supplyplandefinition',
    SUPPORT_CASE = 'supportcase',
    SYSTEM_NOTE = 'SystemNote',
    S_C_M_PREDICTED_RISKS = 'SCMPredictedRisks',
    S_C_M_PREDICTION_TRAIN_HISTORY = 'SCMPredictionTrainHistory',
    S_C_M_PREDICTION_TRAIN_W_Q_STATUS = 'SCMPredictionTrainWQStatus',
    TASK = 'task',
    TAX_DETAIL = 'TaxDetail',
    TAX_GROUP = 'taxgroup',
    TAX_LIABILITY_PAYMENT = 'taxliabilitypayment',
    TAX_PERIOD = 'taxperiod',
    TAX_SCHEDULE = 'taxschedule',
    TAX_TYPE = 'taxtype',
    TERM = 'term',
    TIMESHEET_APPROVAL = 'TimesheetApproval',
    TIME_APPROVAL = 'TimeApproval',
    TIME_BILL = 'timebill',
    TIME_ENTRY = 'timeentry',
    TIME_OFF_CHANGE = 'timeoffchange',
    TIME_OFF_PLAN = 'timeoffplan',
    TIME_OFF_REQUEST = 'timeoffrequest',
    TIME_OFF_RULE = 'timeoffrule',
    TIME_OFF_TYPE = 'timeofftype',
    TIME_SHEET = 'timesheet',
    TOPIC = 'topic',
    TRANSACTION = 'transaction',
    TRANSFER_ORDER = 'transferorder',
    UBER = 'Uber',
    UNITS_TYPE = 'unitstype',
    UNLOCKED_TIME_PERIOD = 'unlockedtimeperiod',
    USAGE = 'usage',
    USEREVENT_SCRIPT = 'usereventscript',
    VENDOR = 'vendor',
    VENDOR_BILL = 'vendorbill',
    VENDOR_CATEGORY = 'vendorcategory',
    VENDOR_CREDIT = 'vendorcredit',
    VENDOR_PAYMENT = 'vendorpayment',
    VENDOR_PREPAYMENT = 'vendorprepayment',
    VENDOR_PREPAYMENT_APPLICATION = 'vendorprepaymentapplication',
    VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
    VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship',
    WAVE = 'wave',
    WBS = 'wbs',
    WEBSITE = 'website',
    WIN_LOSS_REASON = 'winlossreason',
    WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
    WORKPLACE = 'workplace',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
    ZONE = 'zone',
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392315904}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392315904.html}
   */
  export interface Search {

    /**
     * Search type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459534851073}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459534851073.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly searchType: search.Type | `${search.Type}` | string;

    /**
     * Internal ID of the search
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458892150878}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458892150878.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly searchId: number;

    /**
     * Search filters
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459415222167}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459415222167.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when an element of the array is not a search.Filter
     */
    filters: Filter[];

    /**
     * Allows to set or get the search filters in the form of a search filter expression
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458440490721}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458440490721.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when the value is not a valid search filter expression array
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR when the expression contains an invalid operator
     */
    filterExpression: (string | number | (string | number | (string | number | [])[])[])[];

    /**
     * Columns to be returned from the search
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456374450683}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456374450683.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when an element of the array is not a search.Column
     */
    columns: Column[];

    /**
     * Array of search.Setting objects. An invalid setting name or value is not validated on assignment; it
     * surfaces when the results are fetched (see search.ResultSet) as SSS_INVALID_SRCH_SETTING or
     * SSS_INVALID_SRCH_SETTING_VALUE.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1536244062}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1536244062.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when an element of the array is not a search.Setting
     */
    settings: Setting[];

    /**
     * Name of the saved search. Needs to be set before saving the search
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458807006835}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458807006835.html}
     */
    title: string;

    /**
     * Custom ID of the saved search (string starting with 'customsearch'). If not set, then it is automatically
     * generated upon save.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455917297362}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455917297362.html}
     */
    id: string;

    /**
     * Specifies whether the search is public or private
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460638366698}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460638366698.html}
     */
    isPublic: boolean;

    /**
     * The application ID (bundle or SuiteApp) associated with the search
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156336419831}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156336419831.html}
     */
    packageId: string;

    save: {

      /**
       * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
       * id property may also be set, if it's not then it's automatically generated. The title and id properties may be
       * set:
       * 1) upon creation (parameters title and id of the options object)
       * 2) by explicitly setting the properties (e.g. Search.title = 'foo' Search.id = 'customsearch_bar' )
       * 3) by loading a previously saved search (the properties are inherited)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452655578613}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452655578613.html}
       *
       * @governance 5 units
       * @since 2015.2
       *
       * @return the internal search ID of the saved search
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
       * @throws {error.SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
       * @throws {error.SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
       */
      (): number

      /**
       * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
       * id property may also be set, if it's not then it's automatically generated. The title and id properties may be
       * set:
       * 1) upon creation (parameters title and id of the options object)
       * 2) by explicitly setting the properties (e.g. Search.title = 'foo' Search.id = 'customsearch_bar' )
       * 3) by loading a previously saved search (the properties are inherited)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452655578613}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452655578613.html}
       *
       * @governance 5 units
       * @since 2015.2
       *
       * @return the internal search ID of the saved search
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
       * @throws {error.SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
       * @throws {error.SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
       */
      promise(): Promise<number>
    };

    /**
     * Runs the current search. The returned result set is lazy: invalid columns or settings surface when the
     * results are fetched (see search.ResultSet), not here.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452292724609}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452292724609.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @return the result set object
     */
    run(): ResultSet;

    runPaged: {

      /**
       * Runs the current search with a paged interface. The Help Center documents 5 units, but at runtime the
       * runPaged call itself bills 0 (paging governance is charged when pages are fetched).
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486596158}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486596158.html}
       *
       * @governance none
       * @since 2016.1
       *
       * @param [options]
       * @param [options.pageSize]
       * @return PagedData object that allows user to page through the search result
       */
      (options?: {
        pageSize?: number,
      }): PagedData;

      /**
       * Runs the current search with a paged interface. The Help Center documents 5 units, but at runtime the
       * runPaged call itself bills 0 (paging governance is charged when pages are fetched).
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486596158}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486596158.html}
       *
       * @governance none
       * @since 2016.1
       *
       * @param [options]
       * @param [options.pageSize]
       * @return PagedData object that allows user to page through the search result
       */
      promise(options?: {
        pageSize?: number,
      }): Promise<PagedData>;
    };

    /**
     * Redirects the current request to this search's definition page. Undocumented
     * runtime method (not in the SuiteScript Help Center) intended for server-side
     * contexts that issue a redirect, such as Suitelets or user event scripts.
     *
     * @governance none
     */
    redirectToSearch(): void;

    /**
     * Redirects the current request to this search's results page. Undocumented
     * runtime method (not in the SuiteScript Help Center) intended for server-side
     * contexts that issue a redirect, such as Suitelets or user event scripts.
     *
     * @governance none
     */
    redirectToSearchResults(): void;

    /**
     * Returns the object type name (search.Search)
     */
    toString(): 'search.Search';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345767603}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345767603.html}
   */
  export interface Filter {

    /**
     * Field name for this search filter
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459893737792}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459893737792.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly name: string;

    /**
     * Join ID for this search filter
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460736328124}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460736328124.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly join: string;

    /**
     * Filter operator
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452460571288}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452460571288.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly operator: Operator | `${Operator}`;

    /**
     * Summary type for this search filter
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46485229492}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46485229492.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when the value is not a valid summary type
     */
    summary: Summary | `${Summary}`;

    /**
     * Formula used for this search filter
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46683898925}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46683898925.html}
     */
    formula: string;

    /**
     * Returns the object type name (search.Filter)
     */
    toString(): 'search.Filter';

    /**
     * Convert to JSON object
     */
    toJSON(): {
      name: string;
      join: string;
      operator: Operator | `${Operator}`;
      summarytype: Summary | `${Summary}` | null;
      formula: string | null;
      isnot: boolean;
      isor: boolean;
      leftparens: number;
      rightparens: number;
      values: string[] | null;
    };
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345767216}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345767216.html}
   */
  export interface Column {

    /**
     * The name of the search column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456729370116}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456729370116.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly name: string;

    /**
     * The join ID for this search column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460655456542}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460655456542.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly join: string;

    /**
     * The summary type for this search column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455339294433}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455339294433.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly summary: Summary | `${Summary}`;

    /**
     * The formula used for this search column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454645935058}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454645935058.html}
     */
    formula: string;

    /**
     * The label used for this search column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459848266600}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459848266600.html}
     */
    label: string;

    /**
     * The function used in this search column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453268676757}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453268676757.html}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when the value is not a valid function
     */
    function: ColumnFunction;

    /**
     * The sort direction for this search column. Use values from the Sort enum.
     */
    sort: Sort | `${Sort}`;

    /**
     * Returns the search column for which the minimal or maximal value should be found when returning the search.Column
     * value. For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a
     * record, and then the search.Column value for that record is returned. Can only be used when summary type is MIN
     * or MAX.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457130065917}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457130065917.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options the options object
     * @param options.name name of the search column for which the minimal or maximal value should be found
     * @param options.join join id for this search column
     * @return this search column
     */
    setWhenOrderedBy(options: {
      name: string,
      join: string,
    }): Column;

    /**
     * Returns the object type name (search.Column)
     */
    toString(): 'search.Column';

    /**
     * Convert to JSON object
     */
    toJSON(): {
      formula: string;
      function: ColumnFunction;
      join: string;
      label: string;
      name: string;
      sortdir: Sort | `${Sort}`;
      summary: Summary | `${Summary}`;
      type: string;
      whenorderedby: string;
      whenorderedbyjoin: string;
      whenorderedbyalias: string;
    };
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1536244919}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1536244919.html}
   */
  export interface Setting {

    /**
     * Name for this search setting
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1536177181}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1536177181.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly name: string;

    /**
     * value for this search setting
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1536177235}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1536177235.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly value: string;

    /**
     * Returns the object type name (search.Setting)
     */
    toString(): 'search.Setting';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345767679}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345767679.html}
   */
  export interface ResultSet {

    /**
     * List of columns contained in this result set
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456520019530}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456520019530.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly columns: Column[];

    /**
     * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
     * available than requested, then the array will be truncated.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456010986327}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456010986327.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param start the index number of the first result to return, inclusive
     * @param end the index number of the last result to return, exclusive
     * @return the requested slice of the search result set
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL when the search contains an invalid column
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_SETTING when the search contains an invalid setting
     */
    getRange(start: number, end: number): Result[];

    /**
     * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
     * available than requested, then the array will be truncated.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456010986327}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456010986327.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param options the options object
     * @param options.start the index number of the first result to return, inclusive
     * @param options.end the index number of the last result to return, exclusive
     * @return the requested slice of the search result set
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL when the search contains an invalid column
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_SETTING when the search contains an invalid setting
     */
    getRange(options: {
      start: number,
      end: number,
    }): Result[];

    /**
     * Calls the developer-defined callback function for every result in this set. The result set processed by each()
     * may have maximum 4000 rows. The callback function has the following signature: boolean callback(result.Result
     * result) If the return value of the callback is false, the iteration over results is stopped, otherwise it
     * continues. Note that the work done in the context of the callback function counts towards the governance of the
     * script that called it.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457160888671}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457160888671.html}
     *
     * @governance 10 units
     * @since 2015.2
     *
     * @param callback the function called for each result in the result set
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL when the search contains an invalid column
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_SETTING when the search contains an invalid setting
     */
    each(callback: (result: Result) => boolean): void;

    /**
     * Returns the object type name (search.ResultSet)
     */
    toString(): 'search.ResultSet';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345767112}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345767112.html}
   */
  export interface Result {

    /**
     * Record type of the result
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456526428222}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456526428222.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly recordType: string;

    /**
     * Record internal ID of the result
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454656921386}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454656921386.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly id: string;

    /**
     * List of columns contained in this result
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452222534179}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452222534179.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly columns: Column[];

    /**
     * Returns all of this result's search return columns as an object keyed by column name.
     *
     * @governance none
     * @return an object mapping each search column name to its value
     */
    getAllValues<T extends Record<string, string | { value: string, text: string }[]>>(): T;

    /**
     * Returns the value of a specified search return column.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46988464355}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46988464355.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param column search return column name or object whose value you want to return
     * @return value of the search result column
     */
    getValue<T extends string | boolean>(column: string | Column): T;

    /**
     * Returns the value of a specified search return column.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46917053222}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46917053222.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options the options object
     * @param options.name the name of the search column whose value you want to return
     * @param [options.join] the join ID for this search column
     * @param [options.summary] the summary type used for this search column
     * @return value of the search result column
     */
    getValue<T extends string | boolean>(options: {
      name: string,
      join?: string,
      summary?: Summary | `${Summary}`,
    }): T;

    /**
     * Returns the UI display name (i.e. the text value) of a specified search return column.
     * Note that this method is supported on select, image and document fields only.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460663391112}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460663391112.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param column search return column name or object whose value you want to return
     * @return UI display name (text value) of the search result column
     */
    getText(column: string | Column): string;

    /**
     * Returns the UI display name (i.e. the text value) of a specified search return column.
     * Note that this method is supported on select, image and document fields only.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456658264159}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456658264159.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options the options object
     * @param options.name the name of the search column whose value you want to return
     * @param [options.join] the join ID for this search column
     * @param [options.summary] the summary type used for this search column
     * @return UI display name (text value) of the search result column
     */
    getText(options: {
      name: string,
      join?: string,
      summary?: Summary | `${Summary}`,
    }): string;

    /**
     * Returns the object type name (search.Result)
     */
    toString(): 'search.Result';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486558900}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486558900.html}
   */
  export interface PagedData {

    /**
     * Rows per page - defined in search definition [5 - 1000]
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486608636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486608636.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pageSize: number;

    /**
     * Total row count
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486607957}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486607957.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly count: number;

    /**
     * The page ranges that partition this result set
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486608251}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486608251.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pageRanges: PageRange[];

    /**
     * The search criteria used to execute the result set for this PagedData Object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486608824}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486608824.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly searchDefinition: Search;

    /**
     * Fetches the page at the given index. The Help Center documents 5 units, but at runtime the call bills 0.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486609298}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486609298.html}
     *
     * @governance none
     * @since 2016.1
     *
     * @param index
     */
    fetch(index: number | string): search.Page;

    /**
     * Fetches the page at the given index. The Help Center documents 5 units, but at runtime the call bills 0.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486609298}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486609298.html}
     *
     * @governance none
     * @since 2016.1
     *
     * @param options
     * @param options.index
     */
    fetch(options: {
      index: number | string,
    }): search.Page;

    /**
     * Returns the object type name (search.PagedData)
     */
    toString(): 'search.PagedData';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486547978}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486547978.html}
   */
  export interface Page {

    /**
     * The results from a paginated search
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486604985}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486604985.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly data: Result[];

    /**
     * Indicates whether the page is within the first range of the result set
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486603498}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486603498.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly isFirst: boolean;

    /**
     * Indicates whether a page is within the last range of the result set
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486603745}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486603745.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly isLast: boolean;

    /**
     * The PagedData Object used to fetch this Page Object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486604468}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486604468.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pagedData: PagedData;

    /**
     * The PageRange Object used to fetch this Page Object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486602257}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486602257.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly pageRange: PageRange;

    next: {

      /**
       * Method used to fetch the next segment of data. The Help Center documents 5 units, but at runtime the call bills 0.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486605324}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486605324.html}
       *
       * @governance none
       * @since 2016.1
       */
      (): Page

      /**
       * Method used to asynchronously fetch the next segment of data
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486605324}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486605324.html}
       *
       * @governance none
       * @since 2016.1
       */
      promise(): Promise<Page>
    };

    prev: {

      /**
       * Method used to fetch the previous segment of data. The Help Center documents 5 units, but at runtime the call bills 0.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486606245}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486606245.html}
       *
       * @governance none
       * @since 2016.1
       */
      (): Page

      /**
       * Method used to asynchronously fetch the previous segment of data
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486606245}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486606245.html}
       *
       * @governance none
       * @since 2016.1
       */
      promise(): Promise<Page>
    };

    /**
     * Returns the object type name (search.Page)
     */
    toString(): 'search.Page';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486559010}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486559010.html}
   */
  export interface PageRange {

    /**
     * Human-readable label with beginning and ending range identifiers
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486607482}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486607482.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly compoundLabel: string;

    /**
     * The index of the pageRange
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4486606935}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4486606935.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly index: number;

    /**
     * Returns the object type name (search.PageRange)
     */
    toString(): 'search.PageRange';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }
}