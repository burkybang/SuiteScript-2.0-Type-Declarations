/// <reference path="../typings.d.ts" />

/**
 * SuiteScript search module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345764122}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345764122.html}
 *
 * @module N/search
 * @NApiVersion 2.x
 */
interface search {

  create: {

    /**
     * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
     * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
     *
     * @param {Object} options  the options object
     * @param {search.Type|string} options.type  the record internal ID of the record type you are searching
     * @param {search.Filter|search.Filter[]|(string|number|(string|number|(string|number|[])[])[])[]} [options.filters]  a single filter object or an array of filter objects or a search filter expression
     * @param {search.Column|search.Column[]|string|string[]} [options.columns]  a single search.Column or string or an array that contains elements of the two types
     * @param {search.Setting|search.Setting[]|string} [options.settings]  a single search.Setting or string or an array that contains elements of the two types
     * @param {string} [options.title]  name of the search (when saved)
     * @param {string} [options.id]  customer ID of the search (when saved), it's a string starting with 'customsearch'
     * @return {search.Search} the created search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL when columns parameter is not a valid column, string, or array of the two
     *
     * @since 2015.2
     */
    (options: {
      type: search.Type | `${search.Type}` | string,
      filters?: search.Filter | search.Filter[] | (string | number | (string | number | (string | number | [])[])[])[],
      columns?: search.Column | search.Column[] | string | string[],
      settings?: search.Setting | search.Setting[] | string,
      title?: string,
      id?: string,
    }): search.Search

    /**
     * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
     * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
     *
     * @param {Object} options  the options object
     * @param {search.Type|string} options.type  the record internal ID of the record type you are searching
     * @param {search.Filter|search.Filter[]|(string|number|(string|number|(string|number|[])[])[])[]} [options.filters]  a single filter object or an array of filter objects or a search filter expression
     * @param {search.Column|search.Column[]|string|string[]} [options.columns]  a single search.Column or string or an array that contains elements of the two types
     * @param {search.Setting|search.Setting[]|string} [options.settings]  a single search.Setting or string or an array that contains elements of the two types
     * @param {string} [options.title]  name of the search (when saved)
     * @param {string} [options.id]  customer ID of the search (when saved), it's a string starting with 'customsearch'
     * @return {Promise<search.Search>} the created search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COL when columns parameter is not a valid column, string, or array of the two
     *
     * @since 2015.2
     */
    promise(options: {
      type: search.Type | `${search.Type}` | string,
      filters?: search.Filter | search.Filter[] | (string | number | (string | number | (string | number | [])[])[])[],
      columns?: search.Column | search.Column[] | string | string[],
      settings?: search.Setting | search.Setting[] | string,
      title?: string,
      id?: string,
    }): Promise<search.Search>
  };

  load: {

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @governance 5 units
     *
     * @param {string|number} id  the customer ID or internal ID of the search
     * @return {search.Search} the loaded search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    (
      id: string | number,
    ): search.Search

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     * @governance 5 units
     *
     * @param {Object} options  the options object
     * @param {string|number} options.id  the customer ID or internal ID of the search
     * @return {search.Search} the loaded search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    (options: {
      id: string | number,
      type?: search.Type | `${search.Type}` | string,
    }): search.Search

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     *
     * @param {string|number} id  the customer ID or internal ID of the search
     * @return {Promise<search.Search>} the loaded search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    promise(
      id: string | number,
    ): Promise<search.Search>

    /**
     * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
     * in conjunction with Search.save().
     *
     * @param {Object} options  the options object
     * @param {string|number} options.id  the customer ID or internal ID of the search
     * @return {Promise<search.Search>} the loaded search
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    promise(options: {
      id: string | number,
      type?: search.Type | `${search.Type}` | string,
    }): Promise<search.Search>
  };

  delete: {

    /**
     * Deletes an existing saved search.
     * @governance 5 units
     *
     * @param {string|number} id  the customer ID or internal ID of the search
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    (
      id: string | number,
    ): void

    /**
     * Deletes an existing saved search.
     * @governance 5 units
     *
     * @param {Object} options  the options object
     * @param {string|number} options.id  the customer ID or internal ID of the search
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    (options: {
      id: string | number,
    }): void

    /**
     * Deletes an existing saved search.
     *
     * @param {string|number} options.id  the customer ID or internal ID of the search
     * @return {Promise<void>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    promise(
      id: string | number,
    ): Promise<void>

    /**
     * Deletes an existing saved search.
     *
     * @param {Object} options  the options object
     * @param {string|number} options.id  the customer ID or internal ID of the search
     * @return {Promise<void>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
     *
     * @since 2015.2
     */
    promise(options: {
      id: string | number,
    }): Promise<void>
  };

  duplicates: {

    /**
     * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
     * Note that this API only works for records that support duplicate record detection. These records include
     * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
     * on how you want to search for duplicates.
     * @governance 10 units
     *
     * @param {Object} options  the options object
     * @param {search.Type|string} options.type  the record type you are checking duplicates for
     * @param {Object<string, string|number>} [options.fields]  a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
     * @param {number} [options.id]  internalId of existing record
     * @return {search.Result[]} array of result objects corresponding to the duplicate records results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
     */
    (option: {
      type: search.Type | `${search.Type}` | string,
      fields?: {
        [p: string]: string | number,
      },
      id?: number,
    }): search.Result[]


    /**
     * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
     * Note that this API only works for records that support duplicate record detection. These records include
     * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
     * on how you want to search for duplicates.
     *
     * @param {Object} options  the options object
     * @param {search.Type|string} options.type  the record type you are checking duplicates for
     * @param {Object<string, string|number>} [options.fields]  a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
     * @param {number} [options.id]  internalId of existing record
     * @return {Promise<search.Result[]>} array of result objects corresponding to the duplicate records results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
     */
    promise(option: {
      type: search.Type | `${search.Type}` | string,
      fields?: {
        [p: string]: string | number,
      },
      id?: number,
    }): Promise<search.Result[]>
  };

  global: {

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @governance 10 units
     *
     * @param {Object} options  the options object
     * @param {string} options.keywords  global search keywords string or expression
     * @return {search.Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
     */
    (options: {
      keywords: string,
    }): search.Result[]

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @governance 10 units
     *
     * @param {string} keywords  global search keywords string or expression
     * @return {search.Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
     */
    (keywords: string): search.Result[]

    /**
     * Performs a global search against a single keyword or multiple keywords.
     *
     * @param {Object} options  the options object
     * @param {string} options.keywords  global search keywords string or expression
     * @return {Promise<search.Result[]>} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
     */
    promise(option: {
      keywords: string,
    }): Promise<search.Result[]>

    /**
     * Performs a global search against a single keyword or multiple keywords.
     *
     * @param {string} keywords  global search keywords string or expression
     * @return {Promise<search.Result[]>} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2 results are limited to 1000 rows returns empty array if nothing is found
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
     */
    promise(keywords: string): Promise<search.Result[]>
  };

  lookupFields: {

    /**
     * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
     * Note that the notation for joined fields is: join_id.field_name
     * @governance 1 unit
     *
     * @param {Object} options  the options object
     * @param {Type|string} options.type  the record internal ID of the record type you are searching
     * @param {string|number} options.id  the internalId of the record
     * @param {string} options.columns  array of column/field names to look up, or a single column/field name
     * @return {Object<string, string|boolean|{value:string, text:string}[]>} search results in the form of key/value pairs example:
     *     {
     *         foo: 'bar',
     *         'name.join': 'othervalue',
     *         select: [{
     *             value: '123',
     *             text: 'Some UI text'
     *         }],
     *         multiselect1: [],
     *         multiselect2: [{
     *             value: '3',
     *             text: 'Green'
     *         },{
     *             value: '5',
     *             text: 'Pinkish yellow'
     *         }]
     *     }
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
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
     * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
     * Note that the notation for joined fields is: join_id.field_name
     * @governance 1 unit
     *
     * @param {Object} options  the options object
     * @param {Type|string} options.type  the record internal ID of the record type you are searching
     * @param {string|number} options.id  the internalId of the record
     * @param {string[]} options.columns  array of column/field names to look up, or a single column/field name
     * @return {Object<string, string|boolean|{value:string, text:string}[]>} search results in the form of key/value pairs example:
     *     {
     *         foo: 'bar',
     *         'name.join': 'othervalue',
     *         select: [{
     *             value: '123',
     *             text: 'Some UI text'
     *         }],
     *         multiselect1: [],
     *         multiselect2: [{
     *             value: '3',
     *             text: 'Green'
     *         },{
     *             value: '5',
     *             text: 'Pinkish yellow'
     *         }]
     *     }
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
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
     * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
     * Note that the notation for joined fields is: join_id.field_name
     *
     * @param {Object} options  the options object
     * @param {Type|string} options.type  the record internal ID of the record type you are searching
     * @param {string|number} options.id  the internalId of the record
     * @param {string} options.columns  array of column/field names to look up, or a single column/field name
     * @return {Promise<Object<string, string|boolean|{value:string, text:string}[]>>} search results in the form of key/value pairs example:
     *     {
     *         foo: 'bar',
     *         'name.join': 'othervalue',
     *         select: [{
     *             value: '123',
     *             text: 'Some UI text'
     *         }],
     *         multiselect1: [],
     *         multiselect2: [{
     *             value: '3',
     *             text: 'Green'
     *         },{
     *             value: '5',
     *             text: 'Pinkish yellow'
     *         }]
     *     }
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
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
     * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
     * Note that the notation for joined fields is: join_id.field_name
     *
     * @param {Object} options  the options object
     * @param {Type|string} options.type  the record internal ID of the record type you are searching
     * @param {string|number} options.id  the internalId of the record
     * @param {string[]} options.columns  array of column/field names to look up, or a single column/field name
     * @return {Promise<Object<string, string|boolean|{value:string, text:string}[]>>} search results in the form of key/value pairs example:
     *     {
     *         foo: 'bar',
     *         'name.join': 'othervalue',
     *         select: [{
     *             value: '123',
     *             text: 'Some UI text'
     *         }],
     *         multiselect1: [],
     *         multiselect2: [{
     *             value: '3',
     *             text: 'Green'
     *         },{
     *             value: '5',
     *             text: 'Pinkish yellow'
     *         }]
     *     }
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     *
     * @since 2015.2
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
   * Creates a search.Column object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453268676757}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453268676757.html}
   *
   * @param {Object} options  the options object
   * @param {string} options.name  the search return column name
   * @param {string} [options.join]  the join ID for this search return column
   * @param {search.Summary} [options.summary]  the summary type for this column
   * @param {search.ColumnFunction} [options.function]  function used for this column
   * @param {string} [options.label]  label used for this column
   * @param {search.Sort} [options.sort]  sort direction for this column uses values from the Sort enum
   * @return {search.Column} the created column object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
   * @throws {error.SuiteScriptError} INVALID_SRCH_FUNCTN if an unknown function is provided
   *
   * @since 2015.2
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
   * Creates a search.Column object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453268676757}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453268676757.html}
   *
   * @param {Object} options  the options object
   * @param {search.FormulaName} options.name  the search return column name
   * @param {string} [options.join]  the join ID for this search return column
   * @param {search.Summary} [options.summary]  the summary type for this column
   * @param {string} options.formula  formula used for this column
   * @param {search.ColumnFunction} [options.function]  function used for this column
   * @param {string} [options.label]  label used for this column
   * @param {search.Sort} [options.sort]  sort direction for this column uses values from the Sort enum
   * @return {search.Column} the created column object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
   * @throws {error.SuiteScriptError} INVALID_SRCH_FUNCTN if an unknown function is provided
   *
   * @since 2015.2
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
   * Creates a search.Filter object.
   *
   * @param {Object} options  the options object
   * @param {string} options.name  internal ID of the search field
   * @param {string} [options.join]  if executing a joined search, this is the join ID used for the search field specified in the name parameter
   * @param {search.Operator|string} options.operator  search operator
   * @param {string|number|Date|(string|number)[]|Date[]} [options.values]  values to be used as filter parameters
   * @param {search.Summary} [options.summary]  summary type used for this filter
   * @return {search.Filter} the created filter object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
   * @throws {error.SuiteScriptError} INVALID_SRCH_SUMMARY_TYP if an unknown summary type is provided
   *
   * @since 2015.2
   */
  createFilter(options: {
    name: string,
    join?: string,
    operator: search.Operator | `${search.Operator}`,
    values?: string | number | Date | (string | number)[] | Date[],
    summary?: search.Summary | `${search.Summary}`,
  }): search.Filter;

  /**
   * Creates a search.Filter object.
   *
   * @param {Object} options  the options object
   * @param {search.FormulaName} options.name  internal ID of the search field
   * @param {string} options.formula formula used for this filter
   * @param {string} [options.join]  if executing a joined search, this is the join ID used for the search field specified in the name parameter
   * @param {search.Operator|string} options.operator  search operator
   * @param {string|number|Date|(string|number)[]|Date[]} [options.values]  values to be used as filter parameters
   * @param {search.Summary} [options.summary]  summary type used for this filter
   * @return {search.Filter} the created filter object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
   * @throws {error.SuiteScriptError} INVALID_SRCH_SUMMARY_TYP if an unknown summary type is provided
   *
   * @since 2015.2
   */
  createFilter(options: {
    name: search.FormulaName,
    formula: string,
    operator: search.Operator | `${search.Operator}`,
    values?: string | number | Date | (string | number)[] | Date[],
    summary?: search.Summary | `${search.Summary}`,
  }): search.Filter;

  /**
   * Creates a search.Setting object.
   *
   * @param {Object} options  the options object
   * @param {string} options.name  name of the result setting parameter
   * @param {string} options.value  value of the result settting parameter
   * @return {search.Setting} the created setting object
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
   * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
   *
   * @since 2015.2
   */
  createSetting(options: {
    name: string,
    value: string,
  }): search.Setting;
}

declare namespace search {

  export type FormulaName =
    'formulacurrency' |
    'formuladate' |
    'formuladatetime' |
    'formulanumeric' |
    'formulapercent' |
    'formulatext'

  export type ColumnFunction =
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
    'year' // Year, Date Function, Output: text

  /**
   * @enum {string}
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
   * @enum {string}
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
   * @enum {string}
   */
  export enum Sort {
    ASC = 'ASC',
    DESC = 'DESC',
    NONE = 'NONE',
  }

  /**
   * @enum {string}
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
    ESTIMATE = 'estimate',
    EXPENSE_AMORTIZATION_EVENT = 'expenseamortizationevent',
    EXPENSE_AMORT_PLAN_AND_SCHEDULE = 'ExpenseAmortPlanAndSchedule',
    EXPENSE_CATEGORY = 'expensecategory',
    EXPENSE_PLAN = 'expenseplan',
    EXPENSE_REPORT = 'expensereport',
    EXPENSE_REPORT_POLICY = 'expensereportpolicy',
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
    PICK_STRATEGY = 'pickstrategy',
    PICK_TASK = 'picktask',
    PLANNED_ORDER = 'plannedorder',
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
    RECENT_RECORD = 'RecentRecord',
    RESOURCE_ALLOCATION = 'resourceallocation',
    RESTLET = 'restlet',
    RES_ALLOCATION_TIME_OFF_CONFLICT = 'ResAllocationTimeOffConflict',
    RETURN_AUTHORIZATION = 'returnauthorization',
    REVENUE_ARRANGEMENT = 'revenuearrangement',
    REVENUE_COMMITMENT = 'revenuecommitment',
    REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal',
    REVENUE_PLAN = 'revenueplan',
    REV_REC_PLAN_AND_SCHEDULE = 'RevRecPlanAndSchedule',
    REV_REC_SCHEDULE = 'revrecschedule',
    REV_REC_TEMPLATE = 'revrectemplate',
    ROLE = 'Role',
    SALES_CHANNEL = 'saleschannel',
    SALES_ORDER = 'salesorder',
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
    TAX_PERIOD = 'taxperiod',
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
    WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
    WORKPLACE = 'workplace',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
    ZONE = 'zone',
  }

  export interface Search {

    /**
     * Search type
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    searchType: search.Type | `${search.Type}` | string;

    /**
     * Internal ID of the search
     * @type {number}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    searchId: number;

    /**
     * Search filters
     * @type {search.Filter[]}
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER when setting value of different type than search.Filter
     */
    filters: Filter[];

    /**
     * Allows to set or get the search filters in the form of a search filter expression
     * @type {(string|number|(string|number|(string|number|[])[])[])[]}
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when setting invalid search filter expression
     */
    filterExpression: (string | number | (string | number | (string | number | [])[])[])[];

    /**
     * Columns to be returned from the search
     * @type {search.Column[]}
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_COLUMN when setting value of different type than search.Column or string
     */
    columns: Column[];

    /**
     * Array of search.Setting objects or a string array of column names
     * @type {search.Setting[]}
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
     */
    settings: Setting[];

    /**
     * Name of the saved search. Needs to be set before saving the search
     * @type {string}
     */
    title: string;

    /**
     * Custom ID of the saved search (string starting with 'customsearch'). If not set, then it is automatically
     * generated upon save.
     * @type {string}
     */
    id: string;

    /**
     * Specifies whether the search is public or private
     * @type {boolean}
     */
    isPublic: boolean;

    save: {

      /**
       * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
       * id property may also be set, if it's not then it's automatically generated. The title and id properties may be
       * set:
       * 1) upon creation (parameters title and id of the options object)
       * 2) by explicitly setting the properties (e.g. Search.title = 'foo' Search.id = 'customsearch_bar' )
       * 3) by loading a previously saved search (the properties are inherited)
       * @governance 5 units
       * @return {number} the internal search ID of the saved search
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
       * @throws {error.SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
       * @throws {error.SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
       * @since 2015.2
       */
      (): number

      /**
       * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
       * id property may also be set, if it's not then it's automatically generated. The title and id properties may be
       * set:
       * 1) upon creation (parameters title and id of the options object)
       * 2) by explicitly setting the properties (e.g. Search.title = 'foo' Search.id = 'customsearch_bar' )
       * 3) by loading a previously saved search (the properties are inherited)
       * @governance 5 units
       * @return {Promise<number>} the internal search ID of the saved search
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
       * @throws {error.SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
       * @throws {error.SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
       * @since 2015.2
       */
      promise(): Promise<number>
    };

    /**
     * Runs the current search.
     * @return {search.ResultSet} the result set object
     * @since 2015.2
     */
    run(): ResultSet;

    runPaged: {

      /**
       * Runs the current search with a paged interface.
       * @param {Object} [options]
       * @param {number} [options.pageSize]
       * @return {search.PagedData} PagedData object that allows user to page through the search result
       * @since 2016.1
       */
      (options?: {
        pageSize?: number,
      }): PagedData

      /**
       * Runs the current search with a paged interface.
       * @param {Object} [options]
       * @param {number} [options.pageSize]
       * @return {Promise<search.PagedData>} PagedData object that allows user to page through the search result
       * @since 2016.1
       */
      promise(options?: {
        pageSize?: number,
      }): Promise<PagedData>
    };

    /**
     * Returns the object type name (search.Search)
     * @return {'search.Search'}
     */
    toString(): 'search.Search';

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface SerializedFilterInput {

    /**
     * Summary type for this search filter
     * @type {search.Summary}
     */
    summarytype: Summary | `${Summary}` | null;

    /**
     * Formula used for this search filter
     * @type {string}
     */
    formula: string | null;

    isnot: boolean;
    isor: boolean;
    leftparens: number;
    rightparens: number;
  }

  export interface SerializedFilterOutput {

    /**
     * Field name for this search filter
     * @type {string}
     */
    name: string;

    /**
     * Join ID for this search filter
     * @type {string}
     */
    join: string;

    /**
     * Filter operator
     * @type {search.Operator}
     */
    operator: Operator | `${Operator}`;

    /**
     * Summary type for this search filter
     * @type {search.Summary}
     */
    summarytype: Summary | `${Summary}` | null;

    /**
     * Formula used for this search filter
     * @type {string}
     */
    formula: string | null;

    isnot: boolean;
    isor: boolean;
    leftparens: number;
    rightparens: number;
    values: string[] | null;
  }

  export interface Filter {

    /**
     * Field name for this search filter
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    name: string;

    /**
     * Join ID for this search filter
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    join: string;

    /**
     * Filter operator
     * @type {search.Operator}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    operator: Operator | `${Operator}`;

    /**
     * Summary type for this search filter
     * @type {search.Summary}
     * @throws {error.SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM when setting invalid summary type
     */
    summary: Summary | `${Summary}`;

    /**
     * Formula used for this search filter
     * @type {string}
     */
    formula: string;

    /**
     * Clones a search.Filter object
     * @param {Filter} filter
     */
    _clone(): Filter;

    /**
     * Converts a serialized object into a search.Filter object
     * @param {SerializedFilter} filter
     */
    _unmarshal(filter: SerializedFilterInput): void;

    /**
     * Converts a search.Filter into a serialized object
     * @return {SerializedFilter}
     */
    _marshal(): SerializedFilterOutput;

    /**
     * Returns the object type name (search.Filter)
     * @return {'search.Filter'}
     */
    toString(): 'search.Filter';

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface Column {

    /**
     * The name of the search column
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    name: string;

    /**
     * The join ID for this search column
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    join: string;

    /**
     * The summary type for this search column
     * @type {search.Summary}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    summary: Summary | `${Summary}`;

    /**
     * The formula used for this search column
     * @type {string}
     */
    formula: string;

    /**
     * The label used for this search column
     * @type {string}
     */
    label: string;

    /**
     * The function used in this search column
     * @type {search.ColumnFunction}
     * @throws {error.SuiteScriptError} INVALID_SRCH_FUNCTN when setting an unknown function is attempted
     */
    function: ColumnFunction;

    /**
     * The sort direction for this search column. Use values from the Sort enum.
     * @type {search.Sort}
     */
    sort: Sort | `${Sort}`;

    /**
     * Returns the search column for which the minimal or maximal value should be found when returning the search.Column
     * value. For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a
     * record, and then the search.Column value for that record is returned. Can only be used when summary type is MIN
     * or MAX.
     * @param {Object} options  the options object
     * @param {string} options.name  name of the search column for which the minimal or maximal value should be found
     * @param {string} options.join  join id for this search column
     * @return {Column} this search column
     * @since 2015.2
     */
    setWhenOrderedBy(options: {
      name: string,
      join: string,
    }): Column;

    /**
     * Returns the object type name (search.Column)
     * @return {'search.Column'}
     */
    toString(): 'search.Column';

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface Setting {

    /**
     * Name for this search setting
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    name: string;

    /**
     * value for this search setting
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    value: string;

    /**
     * Returns the object type name (search.Setting)
     * @return {'search.Setting'}
     */
    toString(): 'search.Setting';

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface ResultSet {

    /**
     * List of columns contained in this result set.
     * @type {search.Column[]}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    columns: Column[];

    /**
     * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
     * available than requested, then the array will be truncated.
     * @governance 10 units
     * @param {number} start  the index number of the first result to return, inclusive
     * @param {number} end  the index number of the last result to return, exclusive
     * @return {search.Result[]} the requested slice of the search result set
     * @since 2015.2
     */
    getRange(start: number, end: number): Result[];

    /**
     * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
     * available than requested, then the array will be truncated.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {number} options.start  the index number of the first result to return, inclusive
     * @param {number} options.end  the index number of the last result to return, exclusive
     * @return {search.Result[]} the requested slice of the search result set
     * @since 2015.2
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
     * @governance 10 units
     * @param {function(result: Result): boolean} callback  the function called for each result in the result set
     * @return {void}
     * @since 2015.2
     */
    each(callback: (result: Result) => boolean): void;

    /**
     * Returns the object type name (search.ResultSet)
     * @return {'search.ResultSet'}
     */
    toString(): 'search.ResultSet';

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface Result {

    /**
     * Record type of the result
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    recordType: string;

    /**
     * Record internal ID of the result
     * @type {string}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    id: string;

    /**
     * List of columns contained in this result
     * @type {search.Column[]}
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    columns: Column[];

    /**
     * @return {Object<string, string | { value: string, text: string }[]>}
     */
    getAllValues(): Record<string, string | { value: string, text: string }[]>;

    /**
     * Returns the value of a specified search return column.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @param {string|search.Column} column  search return column name or object whose value you want to return
     * @return {string|boolean} value of the search result column
     * @since 2015.2
     */
    getValue(column: string | Column): string | boolean;

    /**
     * Returns the value of a specified search return column.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @param {Object} options  the options object
     * @param {string} options.name  the name of the search column whose value you want to return
     * @param {string} [options.join]  the join ID for this search column
     * @param {search.Summary} [options.summary]  the summary type used for this search column
     * @return {string|boolean} value of the search result column
     * @since 2015.2
     */
    getValue(options: {
      name: string,
      join?: string,
      summary?: Summary | `${Summary}`,
    }): string | boolean;

    /**
     * Returns the UI display name (i.e. the text value) of a specified search return column.
     * Note that this method is supported on select, image and document fields only.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @param {string|search.Column} column  search return column name or object whose value you want to return
     * @return {string} UI display name (text value) of the search result column
     * @since 2015.2
     */
    getText(column: string | Column): string;

    /**
     * Returns the UI display name (i.e. the text value) of a specified search return column.
     * Note that this method is supported on select, image and document fields only.
     * The column may be specified in three ways:
     * 1) by providing a column name string
     * 2) by providing a search.Column object
     * 3) by providing name, join and summary parameters
     * @param {Object} options  the options object
     * @param {string} options.name  the name of the search column whose value you want to return
     * @param {string} [options.join]  the join ID for this search column
     * @param {search.Summary} [options.summary]  the summary type used for this search column
     * @return {string} UI display name (text value) of the search result column
     * @since 2015.2
     */
    getText(options: {
      name: string,
      join?: string,
      summary?: Summary | `${Summary}`,
    }): string;

    /**
     * Returns the object type name (search.Result)
     * @return {'search.Result'}
     */
    toString(): 'search.Result';

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface PagedData {

    /**
     * Rows per page - defined in search definition [5 - 1000]
     * @type {number}
     */
    pageSize: number;

    /**
     * Total row count
     * @type {number}
     */
    count: number;

    /**
     * @type {search.PageRange[]}
     */
    pageRanges: PageRange[];

    /**
     * The search criteria used to execute the result set for this PagedData Object
     * @type {search.Search}
     */
    searchDefinition: Search;

    /**
     * @param {number|string} index
     * @return {search.Page}
     */
    fetch(
      index: number | string,
    ): search.Page;

    /**
     * @param {Object} options
     * @param {number|string} options.index
     * @return {search.Page}
     */
    fetch(options: {
      index: number | string,
    }): search.Page;

    /**
     * Returns the object type name (search.PagedData)
     * @return {'search.PagedData'}
     */
    toString(): 'search.PagedData';

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  export interface Page {

    /**
     * The results from a paginated search
     * @type {search.Result[]}
     */
    data: Result[];

    /**
     * Indicates whether the page is within the first range of the result set
     * @type {boolean}
     */
    isFirst: boolean;

    /**
     * Indicates whether a page is within the last range of the result set
     * @type {boolean}
     */
    isLast: boolean;

    /**
     * The PagedData Object used to fetch this Page Object
     * @type {search.PagedData}
     */
    pagedData: PagedData;

    /**
     * The PageRange Object used to fetch this Page Object
     * @type {search.PageRange}
     */
    pageRange: PageRange;

    next: {

      /**
       * Method used to fetch the next segment of data
       * @return {search.Page}
       */
      (): Page

      /**
       * Method used to asynchronously fetch the next segment of data
       * @return {Promise<search.Page>}
       */
      promise(): Promise<Page>
    };

    prev: {

      /**
       * Method used to fetch the previous segment of data
       * @return {search.Page}
       */
      (): Page

      /**
       * Method used to asynchronously fetch the previous segment of data
       * @return {Promise<search.Page>}
       */
      promise(): Promise<Page>
    };
  }

  export interface PageRange {

    /**
     * Human-readable label with beginning and ending range identifiers
     * @type {string}
     */
    compoundLabel: string;

    /**
     * The index of the pageRange
     * @type {number}
     */
    index: number;
  }
}