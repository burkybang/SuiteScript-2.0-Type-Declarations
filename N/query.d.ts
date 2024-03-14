/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />

/**
 * SuiteScript query module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510275060}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275060.html}
 *
 * @module N/query
 * @NApiVersion 2.x
 */
interface query {

  /**
   * Create a Query object with a single query component based on the given query type
   *
   * @param options
   * @param options.type
   *
   * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE when query type is invalid
   */
  create(options: {
    type: query.Type | `${query.Type}` | string,
  }): query.Query;

  load: {
    /**
     * Loads query by id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510349101}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510349101.html}
     *
     * @param options
     * @param options.id Id of query to be loaded
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or id are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object or id isn't number
     * @throws {error.SuiteScriptError} UNABLE_TO_LOAD_QUERY if query doesn't exist or no permissions to load it
     */
    (options: {
      id: number | string,
    }): query.Query

    /**
     * Loads query by id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1552419444}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1552419444.html}
     *
     * @param options
     * @param options.id Id of query to be loaded
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or id are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object or id isn't number
     * @throws {error.SuiteScriptError} UNABLE_TO_LOAD_QUERY if query doesn't exist or no permissions to load it
     */
    promise(options: {
      id: number | string,
    }): Promise<query.Query>
  };

  /**
   * Deletes query by id
   *
   * @param options
   * @param options.id Id of query to be delete
   *
   * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or id are undefined
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object or id isn't number
   * @throws {error.SuiteScriptError} UNABLE_TO_DELETE_QUERY if query doesn't exist or no permissions to delete it
   */
  delete(options: {
    id: number | string,
  }): void;

  /**
   * Creates a query.RelativeDate object that represents a date relative to the current date
   *
   * @param options
   * @param options.dateId Id of the relative date to create
   * @param options.value Value to use to create the relative date
   */
  createRelativeDate(options: {
    dateId: query.DateId | `${query.DateId}`,
    value: number,
  }): query.RelativeDate;

  runSuiteQL: {
    /**
     * Runs an arbitrary SuiteQL query
     *
     * @governance 10 points
     *
     * @param query
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    (query: string): query.ResultSet;

    /**
     * Runs an arbitrary SuiteQL query
     *
     * @governance 10 points
     *
     * @param query
     * @param [params]
     * @param [customScriptId]
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    (options: {
      query: string,
      params?: (string | number | boolean)[],
      customScriptId?: string,
    }): query.ResultSet;

    /**
     * Runs an arbitrary SuiteQL query asynchronously
     *
     * @governance 10 points
     *
     * @param query
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    promise(query: string): Promise<query.ResultSet>;

    /**
     * Runs an arbitrary SuiteQL query asynchronously
     *
     * @governance 10 points
     *
     * @param query
     * @param [params]
     * @param [customScriptId]
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    promise(options: {
      query: string,
      params?: (string | number | boolean)[],
      customScriptId?: string,
    }): Promise<query.ResultSet>;
  };

  runSuiteQLPaged: {
    /**
     * Runs an arbitrary SuiteQL query as a paged query
     *
     * @governance 10 points
     *
     * @param query
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    (query: string): query.PagedData;

    /**
     * Runs an arbitrary SuiteQL query as a paged query
     *
     * @governance 10 points
     *
     * @param options
     * @param options.query
     * @param [options.params]
     * @param [options.pageSize=50] The size of each page in the query results. The default value is 50 results per page. The minimum page size is 5 results per page, and the maximum page size is 1000 results per page.
     * @param [customScriptId]
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    (options: {
      query: string,
      params?: (string | number | boolean)[],
      pageSize?: PageSize,
      customScriptId?: string,
    }): query.PagedData;

    /**
     * Runs an arbitrary SuiteQL query as a paged query asynchronously
     *
     * @governance 10 points
     *
     * @param query
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    promise(query: string): Promise<query.PagedData>;

    /**
     * Runs an arbitrary SuiteQL query as a paged query asynchronously
     *
     * @governance 10 points
     *
     * @param options
     * @param options.query
     * @param [options.params]
     * @param [options.pageSize=50] The size of each page in the query results. The default value is 50 results per page. The minimum page size is 5 results per page, and the maximum page size is 1000 results per page.
     * @param [customScriptId]
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or params are undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if types other than string, number, or boolean are included in the options.params array
     *
     * @since 2020.1
     */
    promise(options: {
      query: string,
      params?: (string | number | boolean)[],
      pageSize?: PageSize,
      customScriptId?: string,
    }): Promise<query.PagedData>;
  };

  /**
   * Lists the table view objects that are included in a workbook in SuiteAnalytics Workbook
   *
   * @governance 0 points
   *
   * @param options
   * @param options.workbookId
   *
   * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options or workbookId are undefined
   * @throws {error.SuiteScriptError} SCRIPT_ID_OF_WORKBOOK_IS_REQUIRED if workbookId represents an analytical record that is not a workbook
   * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if workbookId is not valid
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if workbookId is not a string
   *
   * @since 2020.1
   */
  listTables(options: {
    workbookId: string,
  }): { name: string, scriptId: string }[];
}

declare namespace query {

  /**
   *
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
   *
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
  }

  /**
   *
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
  }

  /**
   *
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
    GREATER = 'GREATER',
    GREATER_NOT = 'GREATER_NOT',
    GREATER_OR_EQUAL = 'GREATER_OR_EQUAL',
    GREATER_OR_EQUAL_NOT = 'GREATER_OR_EQUAL_NOT',
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
   *
   */
  export enum RelativeDateRange {
    FISCAL_HALF_BEFORE_LAST = 'FHBL',
    FISCAL_HALF_BEFORE_LAST_TO_DATE = 'FHBLTD',
    FISCAL_QUARTER_BEFORE_LAST = 'FQBL',
    FISCAL_QUARTER_BEFORE_LAST_TO_DATE = 'FQBLTD',
    FISCAL_YEAR_BEFORE_LAST = 'FYBL',
    FISCAL_YEAR_BEFORE_LAST_TO_DATE = 'FYBLTD',
    FIVE_DAYS_AGO = 'DAGO5',
    FIVE_DAYS_FROM_NOW = 'DFN5',
    FOUR_DAYS_AGO = 'DAGO4',
    FOUR_DAYS_FROM_NOW = 'DFN4',
    FOUR_WEEKS_STARTING_THIS_WEEK = 'TWN3W',
    LAST_BUSINESS_WEEK = 'LBW',
    LAST_FISCAL_HALF = 'LFH',
    LAST_FISCAL_HALF_ONE_FISCAL_YEAR_AGO = 'LFHLFY',
    LAST_FISCAL_HALF_TO_DATE = 'LFHTD',
    LAST_FISCAL_QUARTER = 'LFQ',
    LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO = 'LFQLFY',
    LAST_FISCAL_QUARTER_TO_DATE = 'LFQTD',
    LAST_FISCAL_QUARTER_TWO_FISCAL_YEARS_AGO = 'LFQFYBL',
    LAST_FISCAL_YEAR = 'LFY',
    LAST_FISCAL_YEAR_TO_DATE = 'LFYTD',
    LAST_MONTH = 'LM',
    LAST_MONTH_ONE_FISCAL_QUARTER_AGO = 'LMLFQ',
    LAST_MONTH_ONE_FISCAL_YEAR_AGO = 'LMLFY',
    LAST_MONTH_TO_DATE = 'LMTD',
    LAST_MONTH_TWO_FISCAL_QUARTERS_AGO = 'LMFQBL',
    LAST_MONTH_TWO_FISCAL_YEARS_AGO = 'LMFYBL',
    LAST_ROLLING_HALF = 'LRH',
    LAST_ROLLING_QUARTER = 'LRQ',
    LAST_ROLLING_YEAR = 'LRY',
    LAST_WEEK = 'LW',
    LAST_WEEK_TO_DATE = 'LWTD',
    LAST_YEAR = 'LY',
    LAST_YEAR_TO_DATE = 'LYTD',
    MONTH_AFTER_NEXT = 'MAN',
    MONTH_AFTER_NEXT_TO_DATE = 'MANTD',
    MONTH_BEFORE_LAST = 'MBL',
    MONTH_BEFORE_LAST_TO_DATE = 'MBLTD',
    NEXT_BUSINESS_WEEK = 'NBW',
    NEXT_FISCAL_HALF = 'NFH',
    NEXT_FISCAL_QUARTER = 'NFQ',
    NEXT_FISCAL_YEAR = 'NFY',
    NEXT_FOUR_WEEKS = 'N4W',
    NEXT_MONTH = 'NM',
    NEXT_ONE_HALF = 'NOH',
    NEXT_ONE_MONTH = 'NOM',
    NEXT_ONE_QUARTER = 'NOQ',
    NEXT_ONE_WEEK = 'NOW',
    NEXT_ONE_YEAR = 'NOY',
    NEXT_WEEK = 'NW',
    NINETY_DAYS_AGO = 'DAGO90',
    NINETY_DAYS_FROM_NOW = 'DFN90',
    ONE_YEAR_BEFORE_LAST = 'OYBL',
    PREVIOUS_FISCAL_QUARTERS_LAST_FISCAL_YEAR = 'PQLFY',
    PREVIOUS_FISCAL_QUARTERS_THIS_FISCAL_YEAR = 'PQTFY',
    PREVIOUS_MONTHS_LAST_FISCAL_HALF = 'PMLFH',
    PREVIOUS_MONTHS_LAST_FISCAL_QUARTER = 'PMLFQ',
    PREVIOUS_MONTHS_LAST_FISCAL_YEAR = 'PMLFY',
    PREVIOUS_MONTHS_SAME_FISCAL_HALF_LAST_FISCAL_YEAR = 'PMSFHLFY',
    PREVIOUS_MONTHS_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR = 'PMSFQLFY',
    PREVIOUS_MONTHS_THIS_FISCAL_HALF = 'PMTFH',
    PREVIOUS_MONTHS_THIS_FISCAL_QUARTER = 'PMTFQ',
    PREVIOUS_MONTHS_THIS_FISCAL_YEAR = 'PMTFY',
    PREVIOUS_ONE_DAY = 'OD',
    PREVIOUS_ONE_HALF = 'OH',
    PREVIOUS_ONE_MONTH = 'OM',
    PREVIOUS_ONE_QUARTER = 'OQ',
    PREVIOUS_ONE_WEEK = 'OW',
    PREVIOUS_ONE_YEAR = 'OY',
    PREVIOUS_ROLLING_HALF = 'PRH',
    PREVIOUS_ROLLING_QUARTER = 'PRQ',
    PREVIOUS_ROLLING_YEAR = 'PRY',
    SAME_DAY_FISCAL_QUARTER_BEFORE_LAST = 'SDFQBL',
    SAME_DAY_FISCAL_YEAR_BEFORE_LAST = 'SDFYBL',
    SAME_DAY_LAST_FISCAL_QUARTER = 'SDLFQ',
    SAME_DAY_LAST_FISCAL_YEAR = 'SDLFY',
    SAME_DAY_LAST_MONTH = 'SDLM',
    SAME_DAY_LAST_WEEK = 'SDLW',
    SAME_DAY_MONTH_BEFORE_LAST = 'SDMBL',
    SAME_DAY_WEEK_BEFORE_LAST = 'SDWBL',
    SAME_FISCAL_HALF_LAST_FISCAL_YEAR = 'SFHLFY',
    SAME_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE = 'SFHLFYTD',
    SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST = 'SFQFYBL',
    SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR = 'SFQLFY',
    SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE = 'SFQLFYTD',
    SAME_MONTH_FISCAL_QUARTER_BEFORE_LAST = 'SMFQBL',
    SAME_MONTH_FISCAL_YEAR_BEFORE_LAST = 'SMFYBL',
    SAME_MONTH_LAST_FISCAL_QUARTER = 'SMLFQ',
    SAME_MONTH_LAST_FISCAL_QUARTER_TO_DATE = 'SMLFQTD',
    SAME_MONTH_LAST_FISCAL_YEAR = 'SMLFY',
    SAME_MONTH_LAST_FISCAL_YEAR_TO_DATE = 'SMLFYTD',
    SAME_WEEK_FISCAL_YEAR_BEFORE_LAST = 'SWFYBL',
    SAME_WEEK_LAST_FISCAL_YEAR = 'SWLFY',
    SIXTY_DAYS_AGO = 'DAGO60',
    SIXTY_DAYS_FROM_NOW = 'DFN60',
    TEN_DAYS_AGO = 'DAGO10',
    TEN_DAYS_FROM_NOW = 'DFN10',
    THIRTY_DAYS_AGO = 'DAGO30',
    THIRTY_DAYS_FROM_NOW = 'DFN30',
    THIS_BUSINESS_WEEK = 'TBW',
    THIS_FISCAL_HALF = 'TFH',
    THIS_FISCAL_HALF_TO_DATE = 'TFHTD',
    THIS_FISCAL_QUARTER = 'TFQ',
    THIS_FISCAL_QUARTER_TO_DATE = 'TFQTD',
    THIS_FISCAL_YEAR = 'TFY',
    THIS_FISCAL_YEAR_TO_DATE = 'TFYTD',
    THIS_MONTH = 'TM',
    THIS_MONTH_TO_DATE = 'TMTD',
    THIS_ROLLING_HALF = 'TRH',
    THIS_ROLLING_QUARTER = 'TRQ',
    THIS_ROLLING_YEAR = 'TRY',
    THIS_WEEK = 'TW',
    THIS_WEEK_TO_DATE = 'TWTD',
    THIS_YEAR = 'TY',
    THIS_YEAR_TO_DATE = 'TYTD',
    THREE_DAYS_AGO = 'DAGO3',
    THREE_DAYS_FROM_NOW = 'DFN3',
    THREE_FISCAL_QUARTERS_AGO = 'FQB',
    THREE_FISCAL_QUARTERS_AGO_TO_DATE = 'FQBTD',
    THREE_FISCAL_YEARS_AGO = 'FYB',
    THREE_FISCAL_YEARS_AGO_TO_DATE = 'FYBTD',
    THREE_MONTHS_AGO = 'MB',
    THREE_MONTHS_AGO_TO_DATE = 'MBTD',
    TODAY = 'TODAY',
    TODAY_TO_END_OF_THIS_MONTH = 'TODAYTTM',
    TOMORROW = 'TOMORROW',
    TWO_DAYS_AGO = 'DAGO2',
    TWO_DAYS_FROM_NOW = 'DFN2',
    WEEK_AFTER_NEXT = 'WAN',
    WEEK_AFTER_NEXT_TO_DATE = 'WANTD',
    WEEK_BEFORE_LAST = 'WBL',
    WEEK_BEFORE_LAST_TO_DATE = 'WBLTD',
    YESTERDAY = 'YESTERDAY',
  }

  /**
   *
   */
  export enum ReturnType {
    ANY = 'ANY',
    BOOLEAN = 'BOOLEAN',
    CURRENCY = 'CURRENCY',
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    DURATION = 'DURATION',
    FLOAT = 'FLOAT',
    INTEGER = 'INTEGER',
    KEY = 'KEY',
    RELATIONSHIP = 'RELATIONSHIP',
    STRING = 'STRING',
    UNKNOWN = 'UNKNOWN',
  }

  /**
   *
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
    DANISH = 'DANISH',
    DANISH_CI = 'DANISH_CI',
    DANISH_M = 'DANISH_M',
    DA_DK = 'DA_DK',
    DE_DE = 'DE_DE',
    DUTCH = 'DUTCH',
    DUTCH_CI = 'DUTCH_CI',
    EBCDIC = 'EBCDIC',
    EBCDIC_CI = 'EBCDIC_CI',
    EEC_EURO = 'EEC_EURO',
    EEC_EUROPA3 = 'EEC_EUROPA3',
    EEC_EUROPA3_CI = 'EEC_EUROPA3_CI',
    EEC_EURO_CI = 'EEC_EURO_CI',
    EN = 'EN',
    EN_AU = 'EN_AU',
    EN_CA = 'EN_CA',
    EN_GB = 'EN_GB',
    EN_US = 'EN_US',
    ESTONIAN = 'ESTONIAN',
    ESTONIAN_CI = 'ESTONIAN_CI',
    ES_AR = 'ES_AR',
    ES_ES = 'ES_ES',
    FINNISH = 'FINNISH',
    FINNISH_CI = 'FINNISH_CI',
    FRENCH = 'FRENCH',
    FRENCH_AI = 'FRENCH_AI',
    FRENCH_CI = 'FRENCH_CI',
    FRENCH_M = 'FRENCH_M',
    FR_CA = 'FR_CA',
    FR_FR = 'FR_FR',
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
    HEBREW = 'HEBREW',
    HEBREW_AI = 'HEBREW_AI',
    HEBREW_CI = 'HEBREW_CI',
    HE_IL = 'HE_IL',
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
    ITALIAN = 'ITALIAN',
    ITALIAN_AI = 'ITALIAN_AI',
    ITALIAN_CI = 'ITALIAN_CI',
    IT_IT = 'IT_IT',
    JAPANESE_M = 'JAPANESE_M',
    JA_JP = 'JA_JP',
    KOREAN_M = 'KOREAN_M',
    KO_KR = 'KO_KR',
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
    RUSSIAN = 'RUSSIAN',
    RUSSIAN_AI = 'RUSSIAN_AI',
    RUSSIAN_CI = 'RUSSIAN_CI',
    RU_RU = 'RU_RU',
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
    THAI_M = 'THAI_M',
    TH_TH = 'TH_TH',
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
   *
   */
  export enum Type {
    ACCOUNT = 'account',
    ACCOUNTING_BOOK = 'accountingbook',
    ACCOUNTING_CONTEXT = 'accountingcontext',
    ACCOUNTING_PERIOD = 'accountingperiod',
    ACTIVITY = 'activity',
    ADDRESS_BOOK = 'addressbook',
    ALL_PARSER_PLUGIN = 'allparserplugin',
    ALLOCATION_METHOD = 'allocationmethod',
    AMORTIZATION_SCHEDULE = 'amortizationschedule',
    AMORTIZATION_TEMPLATE = 'amortizationtemplate',
    AS_CHARGED_PROJECT_REVENUE_RULE = 'aschargedprojectrevenuerule',
    AUTOMATED_CLEARING_HOUSE = 'automatedclearinghouse',
    BILLING_CLASS = 'billingclass',
    BILLING_RATE_CARD = 'billingratecard',
    BILLING_REVENUE_EVENT = 'billingrevenueevent',
    BILLING_SCHEDULE = 'billingschedule',
    BILL_RUN = 'billrun',
    BILL_RUN_SCHEDULE = 'billrunschedule',
    BUDGETCATEGORY = 'budgetcategory',
    BUDGETS = 'budgets',
    BUDGET_EXCHANGE_RATE = 'budgetexchangerate',
    BULK_PROC_SUBMISSION = 'bulkprocsubmission',
    BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
    BUNDLE_INSTALLATION_SCRIPT_DEPLOYMENT = 'bundleinstallationscriptdeployment',
    CALENDAR_EVENT = 'calendarevent',
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
    COMPANY_FEATURE_SETUP = 'companyfeaturesetup',
    COMPETITOR = 'competitor',
    CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate',
    CONSOLIDATED_RATE_ADJUSTOR_PLUGIN = 'consolidatedrateadjustorplugin',
    CONTACT = 'contact',
    CONTACT_CATEGORY = 'contactcategory',
    CONTACT_ROLE = 'contactrole',
    CONTACT_SUBSIDIARY_RELATIONSHIP = 'contactsubsidiaryrelationship',
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
    CUSTOMER = 'customer',
    CUSTOMER_CATEGORY = 'customercategory',
    CUSTOMER_MESSAGE = 'customermessage',
    CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship',
    DATASET_BUILDER_PLUGIN = 'datasetbuilderplugin',
    DELETED_RECORD = 'deletedrecord',
    DEPARTMENT = 'department',
    DEVICE_ID = 'deviceid',
    DOMAIN = 'domain',
    DUAL = 'dual',
    EMAIL_CAPTURE_PLUGIN = 'emailcaptureplugin',
    EMAIL_TEMPLATE = 'emailtemplate',
    EMPLOYEE = 'employee',
    EMPLOYEE_EXPENSE_SOURCE_TYPE = 'employeeexpensesourcetype',
    EMPLOYEE_LIST = 'employeelist',
    EMPLOYEE_STATUS = 'employeestatus',
    EMPLOYEE_SUBSIDIARY_RELATIONSHIP = 'employeesubsidiaryrelationship',
    EMPLOYEE_TYPE = 'employeetype',
    ENTITY = 'entity',
    ENTITY_GROUP = 'entitygroup',
    ENTITY_SUBSIDIARY_RELATIONSHIP = 'entitysubsidiaryrelationship',
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
    GATEWAY_NOTIFICATION = 'gatewaynotification',
    GENERAL_ALLOCATION_SCHEDULE = 'generalallocationschedule',
    GENERAL_TOKEN = 'generaltoken',
    GENERALIZED_ITEM = 'generalizeditem',
    GENERIC_RESOURCE = 'genericresource',
    GENERIC_RESOURCE_SUBSIDIARY_RELATIONSHIP = 'genericresourcesubsidiaryrelationship',
    GIFT_CERTIFICATE = 'giftcertificate',
    GL_LINES_AUDIT_LOG = 'gllinesauditlog',
    GL_LINES_PLUGIN_REVISION = 'gllinespluginrevision',
    IMPORTED_EMPLOYEE_EXPENSE = 'importedemployeeexpense',
    INCOTERM = 'incoterm',
    INVT_ITEM_PRICE_HISTORY = 'invtitempricehistory',
    ITEM = 'item',
    ITEM_COLLECTION = 'itemcollection',
    ITEM_REVENUE_CATEGORY = 'itemrevenuecategory',
    ITEM_REVISION = 'itemrevision',
    I_P_RESTRICTIONS = 'iprestrictions',
    JOB = 'job',
    JOB_RESOURCE_ROLE = 'jobresourcerole',
    JOB_STATUS = 'jobstatus',
    JOB_TYPE = 'jobtype',
    KNOWLEDGE_BASE = 'knowledgebase',
    LEAD_SOURCE = 'leadsource',
    LOCATION = 'location',
    LOGIN_AUDIT = 'loginaudit',
    MAIL_TEMPLATE = 'mailtemplate',
    MANUFACTURING_COMPONENT = 'manufacturingcomponent',
    MANUFACTURING_TRANSACTION = 'manufacturingtransaction',
    MAP_REDUCE_SCRIPT = 'mapreducescript',
    MAP_REDUCE_SCRIPT_DEPLOYMENT = 'mapreducescriptdeployment',
    MASS_UPDATE_SCRIPT = 'massupdatescript',
    MASS_UPDATE_SCRIPT_DEPLOYMENT = 'massupdatescriptdeployment',
    MEDIA_ITEM_FOLDER = 'mediaitemfolder',
    MEM_DOC = 'memdoc',
    MEM_DOC_TRANSACTION_TEMPLATE = 'memdoctransactiontemplate',
    MESSAGE = 'message',
    NEXUS = 'nexus',
    NOTE = 'note',
    ONLINE_CASE_FORM = 'onlinecaseform',
    ONLINE_LEAD_FORM = 'onlineleadform',
    OTHER_NAME = 'othername',
    OTHER_NAME_CATEGORY = 'othernamecategory',
    OTHER_NAME_SUBSIDIARY_RELATIONSHIP = 'othernamesubsidiaryrelationship',
    OUTBOUND_REQUEST = 'outboundrequest',
    O_AUTH_TOKEN = 'oauthtoken',
    PARTNER = 'partner',
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
    PHONE_CALL = 'phonecall',
    PLATFORM_EXTENSION_PLUGIN = 'platformextensionplugin',
    PLUG_IN_TYPE = 'plugintype',
    PLUG_IN_TYPE_IMPL = 'plugintypeimpl',
    PORTLET = 'portlet',
    PORTLET_DEPLOYMENT = 'portletdeployment',
    PRICE_LEVEL = 'pricelevel',
    PRICING = 'pricing',
    PRICING_GROUP = 'pricinggroup',
    PRICING_WITH_CUSTOMERS = 'pricingwithcustomers',
    PROJECT_EXPENSE_TYPE = 'projectexpensetype',
    PROJECT_FINANCIALS = 'projectfinancials',
    PROJECT_SUBSIDIARY_RELATIONSHIP = 'projectsubsidiaryrelationship',
    PROJECT_TASK = 'projecttask',
    PROJECT_TEMPLATE = 'projecttemplate',
    PROJECT_TEMPLATE_SUBSIDIARY_RELATIONSHIP = 'projecttemplatesubsidiaryrelationship',
    PROMOTION_CODE = 'promotioncode',
    PROMOTIONS_PLUGIN = 'promotionsplugin',
    PUBLISHED_SAVED_SEARCH = 'publishedsavedsearch',
    QUANTITY_PRICING_SCHEDULE = 'quantitypricingschedule',
    QUOTA = 'quota',
    RATABLE_EVENT_TYPE = 'ratableeventtype',
    RECENT_RECORD = 'recentrecord',
    RECORD_ACTION_SCRIPT_DEPLOYMENT = 'recordactionscriptdeployment',
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
    SALES_TAX_ITEM = 'salestaxitem',
    SCHEDULED_SCRIPT = 'scheduledscript',
    SCHEDULED_SCRIPT_DEPLOYMENT = 'scheduledscriptdeployment',
    SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance',
    SCRIPT = 'script',
    SCRIPT_CUSTOM_RECORD_TYPE = 'scriptcustomrecordtype',
    SCRIPT_DEPLOYMENT = 'scriptdeployment',
    SCRIPT_NOTE = 'scriptnote',
    SCRIPT_RECORD_TYPE = 'scriptrecordtype',
    SENT_EMAIL = 'sentemail',
    SHIPPING_PACKAGE = 'shippingpackage',
    SHIPPING_PARTNERS_PLUGIN = 'shippingpartnersplugin',
    SHIP_ITEM = 'shipitem',
    SITE_AUDIENCE = 'siteaudience',
    SITE_CATEGORY = 'sitecategory',
    SOLUTION = 'solution',
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
    SYSTEM_EMAIL_TEMPLATE = 'systememailtemplate',
    SYSTEM_NOTE = 'systemnote',
    SYSTEM_NOTE2 = 'systemnote2',
    SYSTEM_NOTE_FIELD = 'systemnotefield',
    TASK = 'task',
    TAX_CALCULATION_PLUGIN = 'taxcalculationplugin',
    TAX_ITEM_TAX_GROUP = 'taxitemtaxgroup',
    TAX_TYPE = 'taxtype',
    TERM = 'term',
    TEST_PLUGIN = 'testplugin',
    TIME_BILL = 'timebill',
    TIME_MODIFICATION_REQUEST = 'timemodificationrequest',
    TIME_SHEET = 'timesheet',
    TOPIC = 'topic',
    TRACKING_NUMBER = 'trackingnumber',
    TRANSACTION = 'transaction',
    TRANSACTION_ADDRESSBOOK = 'transactionaddressbook',
    TRANSACTION_BILLING_ADDRESSBOOK = 'transactionbillingaddressbook',
    TRANSACTION_HISTORY = 'transactionhistory',
    TRANSACTION_NUMBERING_AUDIT_LOG = 'transactionnumberingauditlog',
    TRANSACTION_PAYEE_ADDRESSBOOK = 'transactionpayeeaddressbook',
    TRANSACTION_RETURN_ADDRESSBOOK = 'transactionreturnaddressbook',
    TRANSACTION_SHIPPING_ADDRESSBOOK = 'transactionshippingaddressbook',
    UMD_FIELD = 'umdfield',
    UNDELIVERED_EMAIL = 'undeliveredemail',
    UNITS_TYPE = 'unitstype',
    UNLOCKED_TIME_PERIOD = 'unlockedtimeperiod',
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
    WEB_SITE = 'website',
    WEBAPP = 'webapp',
    WORKBOOK_BUILDER_PLUGIN = 'workbookbuilderplugin',
    WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
    WORKFLOW_ACTION_SCRIPT_DEPLOYMENT = 'workflowactionscriptdeployment',
    WORK_CALENDAR = 'workcalendar',
  }

  /**
   *
   */
  export enum PeriodAdjustment {
    ALL = 'ALL',
    NOT_LAST = 'NOT_LAST',
  }

  /**
   *
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
    LAST_ROLLING_18_PERIODS = 'LR18FP',
    LAST_ROLLING_6_FISCAL_QUARTERS = 'LR6FQ',
    PERIOD_BEFORE_LAST = 'PBL',
    SAME_FISCAL_QUARTER_LAST_FY = 'TQOLFY',
    SAME_FISCAL_QUARTER_LAST_FY_TO_PERIOD = 'TFQOLFYTP',
    SAME_PERIOD_LAST_FY = 'TPOLFY',
    SAME_PERIOD_LAST_FISCAL_QUARTER = 'TPOLQ',
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
   *
   */
  export enum PeriodType {
    START = 'START',
    END = 'END',
  }

  /**
   * The query definition.
   */
  export interface Query {

    /**
     * Returns the query type given upon the creation of the query object
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly type: Type | `${Type}` | string;

    /**
     * Query condition
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than Query.Condition
     */
    condition: Condition;

    /**
     * Columns to be returned from the query
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than Query.Column array
     */
    columns: Column[];

    /**
     * Specifies how the results will be sorted
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than Query.Sort array
     */
    sort: Sort[];

    /**
     * Children of the root component of the query. It is an object with key/value pairs where key is the name of the
     * child component and value is the corresponding Component object. This is a shortcut for the Query.root.child expression.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly child: Object;

    /**
     * Id of this query, null if query is not saved
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly id: number;

    /**
     * Name of this query, null if query is not saved
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly name: string;

    /**
     * Access the root component of the query. It is the component that corresponds to the query type given upon the
     * creation of the whole Query object.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly root: Component;

    run: {
      /**
       * Execute the query and return results.
       *
       * @governance 10 points
       *
       * @return the result set object
       */
      (): ResultSet;

      /**
       * Execute the query and return results.
       *
       * @governance 10 points
       *
       * @return the result set object
       */
      promise(): ResultSet;
    };

    runPaged: {
      /**
       * Execute the query and return paged results.
       *
       * @governance 10 points
       *
       * @param [options]
       * @param [options.pageSize]
       * @return The paged query object
       */
      (options?: {
        PageSize?: number,
      }): PagedData;

      /**
       * Execute the query and return paged results.
       *
       * @governance 10 points
       *
       * @param [options]
       * @param [options.pageSize]
       * @return The paged query object
       */
      promise(options?: {
        PageSize?: number,
      }): PagedData;
    };

    /**
     * Join the root component of the Query with another query type. This is a shortcut for Query.root.autoJoin.
     *
     * @param options
     * @param options.fieldId Column type (field type) that joins the parent component to the new component
     */
    autoJoin(options: {
      fieldId: string,
    }): Component;

    /**
     * join the root component of the Query with another query type. This is a shortcut for Query.root.autoJoin.
     *
     * @param options
     * @param options.fieldId Column type (field type) that joins the parent component to the new component
     */
    join(options: {
      fieldId: string,
    }): Component;

    /**
     * Join the root component of the Query with another (target) query type. This is a shortcut for Query.root.joinTo.
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
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param options.operator Use the Operator enum
     * @param [options.values] Array of values
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} OPERATOR_ARITY_MISMATCH if requested operator cannot work with specified number of arguments
     * @throws {error.SuiteScriptError} INVALID_SEARCH_OPERATOR if wrong query operator is used
     *
     * @since 2018.1
     */
    createCondition(options: {
      fieldId?: string,
      operator: Operator | `${Operator}`,
      values?: string | number | boolean | Date | RelativeDate | Period | string[] | number[] | boolean[] | Date[] | RelativeDate[] | Period[],
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
    }): Condition;

    /**
     * Create a Column object based on the root component of the Query. This is a shortcut for Query.root.createColumn.
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     * @param [options.groupBy] Indicates that we want the results grouped by this column used together with aggregate function defined on other columns.
     * @param [options.context] Field context for values in the query result column
     * @param [options.context.name] Name of the field context
     * @param [options.context.params] Additional parameters to use with the specified field context
     * @param [options.context.params.currencyId] ID of the currency to convert to
     * @param [options.context.params.date] Date to use for the actual exchange rate between the base currency and the currency to convert to
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when two mutually arguments are defined
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED when neither of two mandatory arguments is defined
     *
     * @since 2018.1
     */
    createColumn(options: {
      fieldId?: string,
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
      alias?: string,
      groupBy?: boolean,
      context?: {
        name?: string,
        params?: {
          currencyId?: number,
          date?: RelativeDate | Date,
        },
      },
    }): Column;

    /**
     * Create a Sort object based on the root component of the Query. This is a shortcut for Query.root.createSort.
     *
     * @param options
     * @param options.column The Column by which we want to sort.
     * @param [options.ascending] The sort direction. True by default.
     * @param [options.nullsLast] Where to put results with null value. Defaults to value of ascending flag
     * @param [options.caseSensitive] Indicates whether the sort is case sensitive
     * @param [options.locale] Locale to use for the sort
     * @param [options.nullsLast] Indicates whether query results with null values are listed at the end of the query results
     *
     * @since 2018.1
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
     *
     * @param conditions
     */
    and(...conditions: Condition[]): Condition;

    /**
     * Create a new Condition object that corresponds to a logical disjunction (OR) of the Condition objects given to
     * the method as arguments. The arguments must be one or more Condition objects.
     *
     * @param conditions
     */
    or(...conditions: Condition[]): Condition;

    /**
     * Create a new Condition object that corresponds to a logical negation (NOT) of the Condition object given to the method
     * as argument.
     *
     * @param condition
     */
    not(condition: Condition): Condition;

    /**
     * Converts this query.Query object to its corresponding SuiteQL representation
     */
    toSuiteQL(): SuiteQL;

    /**
     * Returns the object type name
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * One component of the query definition. The Query object always contains at least one Component object called the root
   * component. Queries with multi-level joins contain multiple Component objects linked together into a parent/child hierarchy.
   */
  export interface Component {

    /**
     * Returns the query type of this component
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly type: Type | `${Type}` | string;

    /**
     * Inverse target. Returns the source query type from which is this component joined
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly source: string;

    /**
     * Polymorphic target. Returns the target target of this component
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly target: string;

    /**
     * Returns the Component that corresponds to the ancestor of this component in the query object model
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly parent: string;

    /**
     * Children of this component. It is an object with key/value pairs where key is the name of the child component
     * and value is the corresponding Component object.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly child: Record<string, Component>;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     *
     * @param options
     * @param options.fieldId The relationship field that will be used to determine the query type of the newly joined component and also the columns on which the query types will be joined together. For example "salesrep".
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if fieldId is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    autoJoin(options: {
      fieldId: string,
    }): Component;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     *
     * @param options
     * @param options.name The name of the relationship that will be used to determine the query type of the newly joined component and also the columns on which the query types will be joined together. For example "salesrep".
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if name is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    join(options: {
      fieldId: string,
    }): Component;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     *
     * @param options
     * @param options.name The name of the relationship field on which join with other query type is performed. For example "entity".
     * @param options.target The target target of the join. It is the specialized query type with which is this component joined. For example query.Type.CUSTOMER
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if relationship is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    joinTo(options: {
      fieldId: string,
      target: string,
    }): Component;

    /**
     * Join this component with another query type. A new component corresponding to the given relationship is created
     * and joined with this one.
     *
     * @param options
     * @param options.name The name of the relationship field on which join with other query type is performed. For example "salesrep".
     * @param options.source The query type on which is relationship field used to create the join with this component. For example query.Type.CUSTOMER
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if relationship is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     */
    joinFrom(options: {
      fieldId: string,
      source: string,
    }): Component;

    /**
     * Create a Condition object based on this query component. Use either fieldId + operator + values or formula + (optional) type.
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param options.operator Use the Operator enum
     * @param [options.values] Array of values
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} OPERATOR_ARITY_MISMATCH if requested operator cannot work with specified number of arguments
     * @throws {error.SuiteScriptError} INVALID_SEARCH_OPERATOR if wrong query operator is used
     *
     * @since 2018.1
     */
    createCondition(options: {
      fieldId?: string,
      operator: Operator | `${Operator}`,
      values?: string[] | Date[],
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
    }): Condition;

    /**
     * Create a Column object based on this query component. Use either name or formula + (optional) type.
     *
     * @param options
     * @param [options.fieldId] Field (column) id
     * @param [options.formula] Formula
     * @param [options.type] Explicitly define value type in case it is not determined correctly from the formula. Use the ReturnType enum.
     * @param [options.aggregate] Aggregate function. Use the Aggregate enum.
     * @param [options.groupBy] Indicates that we want the results grouped by this column used together with aggregate function defined on other columns.
     * @param [options.context] Field context for values in the query result column
     * @param [options.context.name] Name of the field context
     * @param [options.context.params] Additional parameters to use with the specified field context
     * @param [options.context.params.currencyId] ID of the currency to convert to
     * @param [options.context.params.date] Date to use for the actual exchange rate between the base currency and the currency to convert to
     *
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when two mutually arguments are defined
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED when neither of two mandatory arguments is defined
     *
     * @since 2018.1
     */
    createColumn(options: {
      fieldId?: string,
      formula?: string,
      type?: string,
      aggregate?: Aggregate | `${Aggregate}`,
      alias?: string,
      groupBy?: boolean,
      context?: {
        name?: string,
        params?: {
          currencyId?: number,
          date?: RelativeDate | Date,
        },
      },
    }): Column;

    /**
     * Create a Sort object based on this query component
     *
     * @param options
     * @param options.column The Column by which we want to sort.
     * @param [options.ascending] The sort direction. True by default.
     * @param [options.nullsLast] Where to put results with null value. Defaults to value of ascending flag
     * @param [options.caseSensitive] Indicates whether the sort is case sensitive
     * @param [options.locale] Locale to use for the sort
     * @param [options.nullsLast] Indicates whether query results with null values are listed at the end of the query results
     *
     * @since 2018.1
     */
    createSort(options: {
      column: Column,
      ascending?: boolean,
      caseSensitive?: boolean,
      locale?: SortLocale | `${SortLocale}`,
      nullsLast?: boolean,
    }): Sort;
  }

  /**
   * Specifies a return column.
   */
  export interface Column {

    /**
     * Id of column field
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly fieldId: string;

    /**
     * Returns the Component to which this column belongs
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly component: Component;

    /**
     * Formula
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly formula: string;

    /**
     * Desired value type of the formula (if it was explicitly stated upon Column creation)
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly type: ReturnType | `${ReturnType}`;

    /**
     * Aggregate function
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly aggregate: Aggregate | `${Aggregate}`;

    /**
     * The group-by flag
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly groupBy: boolean;
  }

  /**
   * Specifies sorting by the values of a given column and the sort direction.
   */
  export interface Sort {

    /**
     * The query column by which we want to sort
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly column: Column;

    /**
     * Flag indicating if sort is ascending
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting wrong sort order is attempted
     */
    ascending: boolean;

    /**
     * Sort case sensitivity
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
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting non-boolean parameter
     */
    locale: SortLocale | `${SortLocale}`;
  }

  /**
   * Specifies the condition used to filter the results. It can consist of other Condition objects.
   */
  export interface Condition {

    /**
     * This is only applicable to "non-leaf" conditions that were created by AND-ing, OR-ing or NOT-ing other Condition objects.
     * In such case this property holds the child Component objects that are arguments of the logical operation.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly children: Condition[];

    /**
     * This is only applicable to "leaf" conditions (equivalent to the former Filter)
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly fieldId: string;

    /**
     * This is only applicable to "leaf" conditions (equivalent to the former Filter)
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly operator: Operator | `${Operator}`;

    /**
     * Values. This is only applicable to "leaf" conditions (equivalent to the former Filter)
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly values: string[] | Date[];

    /**
     * Formula. This is only applicable to "leaf" conditions (equivalent to the former Filter)
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly formula: string;

    /**
     * Return type of the formula, if explicitly specified. This is only applicable to "leaf" conditions (equivalent to the
     * former Filter).
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly type: ReturnType | `${ReturnType}`;

    /**
     * This is only applicable to "leaf" conditions (equivalent to the former Filter)
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly aggregate: Aggregate | `${Aggregate}`;

    /**
     * Query component to which this condition belongs. This is only applicable to "leaf" conditions (equivalent to the
     * former Filter)
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly component: Component;
  }

  /**
   * Encapsulates a relative date to use in query conditions
   */
  export interface RelativeDate {

    /**
     * Holds the date ID of the relative date
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly dateId: DateId | `${DateId}`;

    /**
     * References the start of the relative date
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly start: {
      type: 'start',
      value: number,
      dateId: DateId | `${DateId}`,
    };

    /**
     * References the end of the relative date
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly end: {
      type: 'end',
      value: number,
      dateId: DateId | `${DateId}`,
    };

    /**
     * Describes the interval that the relative date represents
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly interval: {
      type: 'interval',
      value: number,
      dateId: DateId | `${DateId}`,
    };

    /**
     * Holds the value of the relative date range
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly value: number | undefined;

    /**
     * Indicates whether the relative date represents a range of dates or a specific moment in time
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly isRange: boolean;
  }

  /**
   * Set of results returned by the query.
   */
  export interface ResultSet {

    /**
     * Standard object for iterating through results
     *
     * @governance 10 points for each page returned
     */
    iterator(): NetSuiteIterator<Result>;

    /**
     * The actual query results
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly results: Result[];

    /**
     * The types of the return values. Array of values from the ReturnType enum. Number and order of values in the array
     * exactly matches the ResultSet#columns property
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly types: (ReturnType | `${ReturnType}`)[];

    /**
     * The return columns
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly columns: Column[];

    /**
     * Returns the query result set as an array of mapped results. A mapped result is a JavaScript object with key-value pairs. In this object, the key is either the field ID or the alias that was used for the corresponding query.Column object. When you call this method, Result.asMap() is called on each query.Result object in the result set.
     */
    asMappedResults<MappedResult extends Record<string, string | number>>(): MappedResult[];
  }

  /**
   * Corresponds to a single row of the ResultSet.
   */
  export interface Result {

    /**
     * The result values. Value types correspond to the ResultSet.types property. Number and order of values in the array
     * exactly matches the ResultSet#types, ResultSet#columns or Result#columns property
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly values: (string | number | boolean)[];

    /**
     * The return columns. This is equivalent to ResultSet.columns
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly columns: Column[];
  }

  /**
   * One page of the paged query results
   */
  export interface Page {

    /**
     * Whether the page is the first of the paged query results
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly isFirst: boolean;

    /**
     * Whether the page is the last of the paged query results
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly isLast: boolean;

    /**
     * The query results contained in this page
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly data: ResultSet;

    /**
     * The range of query results for this page
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly pageRange: PageRange;

    /**
     * The set of paged query results that this page is from
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly pagedData: PagedData;
  }

  /**
   * Encapsulates a set of paged query results. This object also contains information about the set of paged results it encapsulates.
   */
  export interface PagedData {

    /**
     * Standard object for iterating through results
     */
    iterator(): NetSuiteIterator<Page>;

    /**
     * Describes the total number of paged query result rows
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly count: number;

    /**
     * Describes the number of query result rows per page
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly pageSize: PageSize;

    /**
     * Holds an array of page ranges for the paged query results
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
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

      /**
       * Fetch a specific page of the paged query results asynchronously
       *
       * @param index
       */
      promise(index: number): Promise<query.Page>;

      /**
       * Fetch a specific page of the paged query results asynchronously
       *
       * @param options
       * @param options.index
       */
      promise(options: {
        index: number,
      }): Promise<query.Page>;
    };

    /**
     * Returns the object type name (search.PagedData)
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates the range of query results for a page.
   */
  export interface PageRange {

    /**
     * Describes the array index for this page range
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly index: number;

    /**
     * Describes the number of query result rows in this page range
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly size: number;
  }

  /**
   * A period of time to use in query conditions.
   */
  export interface Period {

    /**
     * The adjustment of the period
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly adjustment: PeriodAdjustment | `${PeriodAdjustment}`;

    /**
     * The code of the period
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly code: PeriodCode | `${PeriodCode}`;

    /**
     * The type of the period
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly type: PeriodType | `${PeriodType}`;
  }

  export interface SuiteQL {

    /**
     * The type of the query
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly type: Type | `${Type}` | string;

    /**
     * The string representation of the SuiteQL query
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly query: string;

    /**
     * The parameters for the query
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly params: (string | number | boolean)[];

    /**
     * The result columns to be returned from the query
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly columns: Column[];

    /**
     * Runs the SuiteQL query and returns the query results
     *
     * @governance 10 points
     *
     * @since 2020.1
     */
    run(): ResultSet;

    /**
     * Runs the SuiteQL query as a paged query and returns the paged query results
     *
     * @governance 10 points
     *
     * @param [options]
     * @param [options.pageSize] The size of each page in the query results. The default value is 50 results per page. The minimum page size is 5 results per page, and the maximum page size is 1000 results per page.
     *
     * @since 2020.1
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