/// <reference path="../typings.d.ts" />

/**
 * SuiteScript error module
 *
 * Create custom `SuiteScriptError` objects that can be thrown to abort script
 * execution. The module itself does NOT throw errors on your behalf — call
 * `error.create(...)` to construct one, then `throw` it explicitly.
 *
 * `SuiteScriptError` is a NetSuite-defined class (not a subclass of native
 * `Error`) — `caught instanceof Error` is `false`. It exposes its own
 * `type`, `id`, `name`, `message`, `stack` (array), `cause`, `notifyOff`,
 * and `userFacing` properties, plus `toJSON()` and `toString()` helpers.
 *
 * Errors caught from built-in NetSuite operations (e.g. `record.load`,
 * `query.runSuiteQL`) are also `SuiteScriptError` instances and share the
 * same shape, though their `cause` field is populated with a richer
 * internal-error object describing the underlying failure.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243798608}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243798608.html}
 *
 * @module N/error
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface error {

  /**
   * Creates a new `error.SuiteScriptError` object. The returned error is NOT
   * thrown — your script must `throw` it explicitly to abort execution.
   *
   * Despite the Help Center listing `name` and `message` as required, the
   * runtime accepts a partial or empty options bag: `error.create({})`
   * succeeds and returns an error with `name`/`message` set to `undefined`.
   * Missing/non-string `name` and `message` do NOT throw
   * `SSS_MISSING_REQD_ARGUMENT` or `WRONG_PARAMETER_TYPE` as the docs claim
   * — only an entirely missing or `null` options bag triggers the missing-
   * argument error. Despite that runtime tolerance, callers should still
   * supply both for the error to be useful.
   *
   * Unknown properties in the options bag are silently ignored. Two
   * undocumented properties ARE honored: `cause` (sets `SuiteScriptError.cause`
   * verbatim — any value, not just string) and `userFacing` (sets
   * `SuiteScriptError.userFacing`, default `true`).
   *
   * The returned error's `id` is `null` for created errors — the docs
   * claim it is "automatically generated when a new error is created"
   * but that does not apply to `error.create(...)`. Errors caught from
   * built-in operations may carry an empty-string `id`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803203}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803203.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2015.2
   *
   * @param options
   * @param options.name User-defined error code. Sets the `SuiteScriptError.name` property. May be one of the `error.Type` enum values or any custom string (e.g. `'MY_CUSTOM_ERROR'`). Required by convention; the runtime tolerates omission (sets `name` to `undefined`) but a missing name makes the error nearly useless.
   * @param options.message Error message text. Sets the `SuiteScriptError.message` property. Displayed in the Details column of the Execution Log. Required by convention; the runtime tolerates omission but a missing message makes the error nearly useless.
   * @param [options.notifyOff = false] If `true`, suppresses email notification to the users listed on the script record's Unhandled Errors subtab when the error is thrown.
   * @param [options.cause] Sets the `SuiteScriptError.cause` property verbatim. Undocumented but accepted at runtime. If omitted, `cause` defaults to `{name, message}` (a self-referential echo). Accepts any value (string, object, `Error` — though `Error` is flattened to `{message, stack}`).
   * @param [options.userFacing = true] Sets the `SuiteScriptError.userFacing` property. Undocumented but accepted at runtime.
   * @return The new `SuiteScriptError` (not thrown).
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is omitted, `null`, or `undefined`. Message format: `"error.create: Missing a required argument: options"`. Note: contrary to the Help Center, missing/invalid `options.name` and `options.message` do NOT throw at runtime.
   */
  create(options: {
    name: error.Type | `${error.Type}` | string,
    message: string,
    notifyOff?: boolean,
    cause?: unknown,
    userFacing?: boolean,
  }): error.SuiteScriptError;
}

declare namespace error {

  /**
   * String values for error types. Use these in `error.create({name})` or
   * compare against `SuiteScriptError.name` to identify caught errors.
   *
   * **WARNING — 8 enum keys are ALIASES whose value does NOT match the
   * key name.** The runtime resolves these to a different canonical value.
   * For example:
   *
   *     error.Type.MISSING_REQD_ARGUMENT === 'SSS_MISSING_REQD_ARGUMENT'  // true
   *     error.Type.INVALID_KEY_OR_REF    === 'WS_INVALID_REFERENCE_KEY_1' // true
   *
   * The alias members are: `EMPTY_KEY_NOT_ALLOWED`, `INVALID_KEY_OR_REF`,
   * `INVALID_GETSELECTOPTION_FILTER_OPERATOR`, `INVALID_SUBLIST_OPERATION`,
   * `INVALID_UI_OBJECT_TYPE`, `INVALID_SCRIPT_OPERATION_ON_READONLY_SUBLIST_FIELD`,
   * `METHOD_IS_ONLY_ALLOWED_FOR_MATRIX_FIELD`, `MISSING_REQD_ARGUMENT`.
   * Their values are encoded faithfully below; consumers comparing
   * `e.name === error.Type.X` get the correct runtime semantics even
   * when `X`'s value isn't `'X'`.
   *
   * NetSuite does NOT validate that `error.create({name})` is a member of
   * this enum — any string is accepted as a custom error code. The
   * `Type` enum is documentation/convention, not enforcement.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159469488562}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159469488562.html}
   *
   * @since 2015.2
   */
  export enum Type {
    ARRAY_1_CANNOT_BE_EMPTY = 'ARRAY_1_CANNOT_BE_EMPTY',
    AT_LEAST_ONE_EXPRESSION_IS_NEEDED = 'AT_LEAST_ONE_EXPRESSION_IS_NEEDED',
    A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD = 'A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD',
    BUTTONS_MUST_INCLUDE_BOTH_A_LABEL_AND_VALUE = 'BUTTONS_MUST_INCLUDE_BOTH_A_LABEL_AND_VALUE',
    CANNOT_CREATE_RECORD_DRAFT_OF_EXISTING_RECORD = 'CANNOT_CREATE_RECORD_DRAFT_OF_EXISTING_RECORD',
    CANNOT_CREATE_RECORD_INSTANCE = 'CANNOT_CREATE_RECORD_INSTANCE',
    CANNOT_DETERMINE_TYPE_FOR_ALIAS = 'CANNOT_DETERMINE_TYPE_FOR_ALIAS',
    CANNOT_DETERMINE_VALUE_FOR_ALIAS = 'CANNOT_DETERMINE_VALUE_FOR_ALIAS',
    CANNOT_RESUBMIT_SUBMITTED_ASYNC_DOCUMENT_CAPTURE_TASK = 'CANNOT_RESUBMIT_SUBMITTED_ASYNC_DOCUMENT_CAPTURE_TASK',
    CANNOT_RESUBMIT_SUBMITTED_ASYNC_PIVOT_TASK = 'CANNOT_RESUBMIT_SUBMITTED_ASYNC_PIVOT_TASK',
    CANNOT_RESUBMIT_SUBMITTED_ASYNC_QUERY_TASK = 'CANNOT_RESUBMIT_SUBMITTED_ASYNC_QUERY_TASK',
    CANNOT_RESUBMIT_SUBMITTED_ASYNC_SEARCH_TASK = 'CANNOT_RESUBMIT_SUBMITTED_ASYNC_SEARCH_TASK',
    CANNOT_RESUBMIT_SUBMITTED_ASYNC_SUITEQL_TASK = 'CANNOT_RESUBMIT_SUBMITTED_ASYNC_SUITEQL_TASK',
    CAN_EMBED_1_INPUTS_AT_MAXIMUM = 'CAN_EMBED_1_INPUTS_AT_MAXIMUM',
    CAN_REFERENCE_ONLY_PERSISTED_DATASET = 'CAN_REFERENCE_ONLY_PERSISTED_DATASET',
    CAN_SELECT_ONLY_ONE_DEFAULT_CHOICE = 'CAN_SELECT_ONLY_ONE_DEFAULT_CHOICE',
    COLOR_VALUE_MUST_BE_6_HEXADECIMAL_DIGITS_OF_THE_FORM_RRGGBB__EXAMPLE_FF0000_FOR_RED = 'COLOR_VALUE_MUST_BE_6_HEXADECIMAL_DIGITS_OF_THE_FORM_RRGGBB__EXAMPLE_FF0000_FOR_RED',
    CREDIT_CARD_NUMBERS_MUST_CONTAIN_BETWEEN_13_AND_20_DIGITS = 'CREDIT_CARD_NUMBERS_MUST_CONTAIN_BETWEEN_13_AND_20_DIGITS',
    CREDIT_CARD_NUMBER_IS_NOT_VALID__PLEASE_CHECK_THAT_ALL_DIGITS_WERE_ENTERED_CORRECTLY = 'CREDIT_CARD_NUMBER_IS_NOT_VALID__PLEASE_CHECK_THAT_ALL_DIGITS_WERE_ENTERED_CORRECTLY',
    CREDIT_CARD_NUMBER_MUST_CONTAIN_ONLY_DIGITS = 'CREDIT_CARD_NUMBER_MUST_CONTAIN_ONLY_DIGITS',
    DATASET_NAME_IS_MISSING = 'DATASET_NAME_IS_MISSING',
    DEFAULT_CHOICE_IS_MISSING = 'DEFAULT_CHOICE_IS_MISSING',
    DOCUMENT_CANNOT_BE_EMPTY = 'DOCUMENT_CANNOT_BE_EMPTY',
    DOCUMENT_IDS_MUST_BE_UNIQUE = 'DOCUMENT_IDS_MUST_BE_UNIQUE',
    DOCUMENT_TOO_LARGE = 'DOCUMENT_TOO_LARGE',
    DUPLICATE_PARAMETER_NAME = 'DUPLICATE_PARAMETER_NAME',
    DUPLICATE_TOOL_NAME = 'DUPLICATE_TOOL_NAME',
    DUPLICATE_TOOL_RESULT = 'DUPLICATE_TOOL_RESULT',
    EACH_VIEW_MUST_HAVE_AN_ID = 'EACH_VIEW_MUST_HAVE_AN_ID',
    EACH_VIEW_MUST_HAVE_A_NAME = 'EACH_VIEW_MUST_HAVE_A_NAME',
    /** ALIAS: the runtime value is `'EMPTY_KEY_NOT_ALLOWED_FOR_1'`, not `'EMPTY_KEY_NOT_ALLOWED'`. */
    EMPTY_KEY_NOT_ALLOWED = 'EMPTY_KEY_NOT_ALLOWED_FOR_1',
    EMPTY_KEY_NOT_ALLOWED_FOR_1 = 'EMPTY_KEY_NOT_ALLOWED_FOR_1',
    EXPRESSION_CANNOT_BE_SPECIFIED_WHEN_USING_COUNT_DISTINCT_AGGREGATION = 'EXPRESSION_CANNOT_BE_SPECIFIED_WHEN_USING_COUNT_DISTINCT_AGGREGATION',
    EXPRESSION_MUST_BE_SPECIFIED_WHEN_USING_OTHER_THAN_COUNT_DISTINCT_AGGREGATION = 'EXPRESSION_MUST_BE_SPECIFIED_WHEN_USING_OTHER_THAN_COUNT_DISTINCT_AGGREGATION',
    EXPRESSIONS_CANNOT_BE_SPECIFIED_WHEN_USING_OTHER_THAN_COUNT_DISTINCT_AGGREGATION = 'EXPRESSIONS_CANNOT_BE_SPECIFIED_WHEN_USING_OTHER_THAN_COUNT_DISTINCT_AGGREGATION',
    EXPRESSIONS_MUST_BE_SPECIFIED_WHEN_USING_COUNT_DISTINCT_AGGREGATION = 'EXPRESSIONS_MUST_BE_SPECIFIED_WHEN_USING_COUNT_DISTINCT_AGGREGATION',
    FAILED_AN_UNEXPECTED_ERROR_OCCURRED = 'FAILED_AN_UNEXPECTED_ERROR_OCCURRED',
    FEATURES_CANNOT_BE_EMPTY = 'FEATURES_CANNOT_BE_EMPTY',
    FEATURE_1_DOES_NOT_SUPPORT_LANGUAGE_2 = 'FEATURE_1_DOES_NOT_SUPPORT_LANGUAGE_2',
    FIELD_1_ALREADY_CONTAINS_A_SUBRECORD_YOU_CANNOT_CALL_CREATESUBRECORD = 'FIELD_1_ALREADY_CONTAINS_A_SUBRECORD_YOU_CANNOT_CALL_CREATESUBRECORD',
    FIELD_1_CANNOT_BE_EMPTY = 'FIELD_1_CANNOT_BE_EMPTY',
    FIELD_1_IS_NOT_A_SUBRECORD_FIELD = 'FIELD_1_IS_NOT_A_SUBRECORD_FIELD',
    FIELD_MUST_CONTAIN_A_VALUE = 'FIELD_MUST_CONTAIN_A_VALUE',
    FILE_CANNOT_BE_EMPTY = 'FILE_CANNOT_BE_EMPTY',
    FORM_VALIDATION_FAILED_YOU_CANNOT_CREATE_THIS_SUBRECORD = 'FORM_VALIDATION_FAILED_YOU_CANNOT_CREATE_THIS_SUBRECORD',
    FORM_VALIDATION_FAILED_YOU_CANNOT_SUBMIT_THIS_RECORD = 'FORM_VALIDATION_FAILED_YOU_CANNOT_SUBMIT_THIS_RECORD',
    FREQUENCY_PENALTY_PARAMETER_NOT_AVAILABLE = 'FREQUENCY_PENALTY_PARAMETER_NOT_AVAILABLE',
    HISTORY_IS_ONLY_AVAILABLE_FOR_THE_LAST_30_DAYS = 'HISTORY_IS_ONLY_AVAILABLE_FOR_THE_LAST_30_DAYS',
    ID_CANNOT_HAVE_MORE_THAN_N_CHARACTERS = 'ID_CANNOT_HAVE_MORE_THAN_N_CHARACTERS',
    IDENTIFIERS_CAN_CONTAIN_ONLY_DIGITS_ALPHABETIC_CHARACTERS_OR__WITH_NO_SPACES = 'IDENTIFIERS_CAN_CONTAIN_ONLY_DIGITS_ALPHABETIC_CHARACTERS_OR__WITH_NO_SPACES',
    INCOMPATIBLE_DOCUMENT_TYPE_FOR_FEATURE_1 = 'INCOMPATIBLE_DOCUMENT_TYPE_FOR_FEATURE_1',
    INPUT_TOO_LARGE = 'INPUT_TOO_LARGE',
    INVALID_AGGREGATE_TYPE = 'INVALID_AGGREGATE_TYPE',
    INVALID_AGGREGATION = 'INVALID_AGGREGATION',
    INVALID_ALGORITHM = 'INVALID_ALGORITHM',
    INVALID_ALPHA_VALUE = 'INVALID_ALPHA_VALUE',
    INVALID_ASPECT_TYPE = 'INVALID_ASPECT_TYPE',
    INVALID_CERTIFICATE_TYPE = 'INVALID_CERTIFICATE_TYPE',
    INVALID_CHART_TYPE = 'INVALID_CHART_TYPE',
    INVALID_CHAT_ROLE = 'INVALID_CHAT_ROLE',
    INVALID_COLOR_VALUE = 'INVALID_COLOR_VALUE',
    INVALID_COLUMN_ALIAS = 'INVALID_COLUMN_ALIAS',
    INVALID_COLUMN_FOR_SORTING = 'INVALID_COLUMN_FOR_SORTING',
    INVALID_CONFIGURATION_UNABLE_TO_CHANGE_REQUIRE_CONFIGURATION_FOR_1 = 'INVALID_CONFIGURATION_UNABLE_TO_CHANGE_REQUIRE_CONFIGURATION_FOR_1',
    INVALID_CONFIGURATION_UNABLE_TO_CHANGE_REQUIRE_CONFIGURATION_WITHOUT_A_CONTEXT = 'INVALID_CONFIGURATION_UNABLE_TO_CHANGE_REQUIRE_CONFIGURATION_WITHOUT_A_CONTEXT',
    INVALID_CONFLICT_RESOLUTION_1 = 'INVALID_CONFLICT_RESOLUTION_1',
    INVALID_CURRENCY = 'INVALID_CURRENCY',
    INVALID_CUSTOM_VIEW_VALUE = 'INVALID_CUSTOM_VIEW_VALUE',
    INVALID_DATASET_ID = 'INVALID_DATASET_ID',
    INVALID_DATE_ID = 'INVALID_DATE_ID',
    INVALID_DATE_OBJECT = 'INVALID_DATE_OBJECT',
    INVALID_DATE_VALUE_MUST_BE_1 = 'INVALID_DATE_VALUE_MUST_BE_1',
    INVALID_DATE_VALUE_MUST_BE_ON_OR_AFTER_1CUTOFF_DATE = 'INVALID_DATE_VALUE_MUST_BE_ON_OR_AFTER_1CUTOFF_DATE',
    INVALID_DIMENSIONS = 'INVALID_DIMENSIONS',
    INVALID_DIRECTION_FOR_SORTING = 'INVALID_DIRECTION_FOR_SORTING',
    INVALID_DOCUMENT_CAPTURE_RESULT = 'INVALID_DOCUMENT_CAPTURE_RESULT',
    INVALID_DOCUMENT_TYPE = 'INVALID_DOCUMENT_TYPE',
    INVALID_EMAILS_FOUND = 'INVALID_EMAILS_FOUND',
    INVALID_EMBED_MODEL_FAMILY_VALUE = 'INVALID_EMBED_MODEL_FAMILY_VALUE',
    INVALID_EXPRESSION = 'INVALID_EXPRESSION',
    INVALID_EXPRESSION_1_EXPECTED_PARAMETER_TYPE_2_GOT_3 = 'INVALID_EXPRESSION_1_EXPECTED_PARAMETER_TYPE_2_GOT_3',
    INVALID_EXPRESSION_NOT_COMPARABLE = 'INVALID_EXPRESSION_NOT_COMPARABLE',
    INVALID_FIELD_CONTEXT = 'INVALID_FIELD_CONTEXT',
    INVALID_FIELD_ID = 'INVALID_FIELD_ID',
    INVALID_FIELD_INDEX = 'INVALID_FIELD_INDEX',
    INVALID_FIELD_VALUE = 'INVALID_FIELD_VALUE',
    INVALID_FIELD_VALUE_WITH_REASON = 'INVALID_FIELD_VALUE_WITH_REASON',
    INVALID_FILTER_FIELD_FOR_CURRENT_VIEW = 'INVALID_FILTER_FIELD_FOR_CURRENT_VIEW',
    INVALID_FLD_VALUE = 'INVALID_FLD_VALUE',
    INVALID_FONT_SIZE = 'INVALID_FONT_SIZE',
    INVALID_FONT_STYLE = 'INVALID_FONT_STYLE',
    INVALID_FONT_WEIGHT = 'INVALID_FONT_WEIGHT',
    INVALID_FORMULA_TYPE = 'INVALID_FORMULA_TYPE',
    INVALID_FREQUENCY_PENALTY_VALUE = 'INVALID_FREQUENCY_PENALTY_VALUE',
    /** ALIAS: the runtime value is `'SSS_INVALID_GETSELECTOPTION_FILTER_OPERATOR'`. */
    INVALID_GETSELECTOPTION_FILTER_OPERATOR = 'SSS_INVALID_GETSELECTOPTION_FILTER_OPERATOR',
    INVALID_HTTP_METHOD = 'INVALID_HTTP_METHOD',
    INVALID_ID_PREFIX = 'INVALID_ID_PREFIX',
    INVALID_IMAGE = 'INVALID_IMAGE',
    /** ALIAS: the runtime value is `'WS_INVALID_REFERENCE_KEY_1'`. */
    INVALID_KEY_OR_REF = 'WS_INVALID_REFERENCE_KEY_1',
    INVALID_KEY_TYPE = 'INVALID_KEY_TYPE',
    INVALID_LANGUAGE = 'INVALID_LANGUAGE',
    INVALID_LOCALE = 'INVALID_LOCALE',
    INVALID_MAX_TOKENS_VALUE = 'INVALID_MAX_TOKENS_VALUE',
    INVALID_MODEL_FAMILY_VALUE = 'INVALID_MODEL_FAMILY_VALUE',
    INVALID_NUMBER_MUST_BE_BETWEEN_1_AND_2 = 'INVALID_NUMBER_MUST_BE_BETWEEN_1_AND_2',
    INVALID_NUMBER_MUST_BE_GREATER_THAN_1 = 'INVALID_NUMBER_MUST_BE_GREATER_THAN_1',
    INVALID_NUMBER_MUST_BE_LOWER_THAN_1 = 'INVALID_NUMBER_MUST_BE_LOWER_THAN_1',
    INVALID_NUMBER_OR_PERCENTAGE = 'INVALID_NUMBER_OR_PERCENTAGE',
    INVALID_OPERATION = 'INVALID_OPERATION',
    INVALID_OPERATOR = 'INVALID_OPERATOR',
    INVALID_OR_UNSUPPORTED_RECORD_TYPE_1 = 'INVALID_OR_UNSUPPORTED_RECORD_TYPE_1',
    INVALID_OWNER_CATEGORY = 'INVALID_OWNER_CATEGORY',
    INVALID_PAGE_INDEX = 'INVALID_PAGE_INDEX',
    INVALID_PAGE_RANGE = 'INVALID_PAGE_RANGE',
    INVALID_PERIOD_ADJUSTMENT = 'INVALID_PERIOD_ADJUSTMENT',
    INVALID_PERIOD_CODE = 'INVALID_PERIOD_CODE',
    INVALID_PERIOD_TYPE = 'INVALID_PERIOD_TYPE',
    INVALID_POSITION = 'INVALID_POSITION',
    INVALID_PRESENCE_PENALTY_VALUE = 'INVALID_PRESENCE_PENALTY_VALUE',
    INVALID_RCRD_TYPE = 'INVALID_RCRD_TYPE',
    INVALID_REASONING_EFFORT = 'INVALID_REASONING_EFFORT',
    INVALID_RETURN_TYPE_EXPECTED_1 = 'INVALID_RETURN_TYPE_EXPECTED_1',
    INVALID_SAFETY_MODE = 'INVALID_SAFETY_MODE',
    /** ALIAS: the runtime value is the long `'A_SCRIPT_IS_ATTEMPTING_TO_EDIT_...'` string. */
    INVALID_SCRIPT_OPERATION_ON_READONLY_SUBLIST_FIELD = 'A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD',
    INVALID_SEARCH_OPERATOR = 'INVALID_SEARCH_OPERATOR',
    INVALID_SEARCH_TYPE = 'INVALID_SEARCH_TYPE',
    INVALID_SIGNATURE = 'INVALID_SIGNATURE',
    INVALID_SIGNATURE_TAG = 'INVALID_SIGNATURE_TAG',
    INVALID_SORT = 'INVALID_SORT',
    INVALID_SORT_LOCALE = 'INVALID_SORT_LOCALE',
    INVALID_STACKING_TYPE = 'INVALID_STACKING_TYPE',
    /** ALIAS: the runtime value is `'SSS_INVALID_SUBLIST_OPERATION'`. */
    INVALID_SUBLIST_OPERATION = 'SSS_INVALID_SUBLIST_OPERATION',
    INVALID_SUBRECORD_MERGE = 'INVALID_SUBRECORD_MERGE',
    INVALID_SUITEAPP_APPLICATION_ID = 'INVALID_SUITEAPP_APPLICATION_ID',
    INVALID_TASK_TYPE = 'INVALID_TASK_TYPE',
    INVALID_TEMPERATURE_VALUE = 'INVALID_TEMPERATURE_VALUE',
    INVALID_TEMPORAL_UNIT = 'INVALID_TEMPORAL_UNIT',
    INVALID_TEXT_ALIGN = 'INVALID_TEXT_ALIGN',
    INVALID_TEXT_DECORATION_LINE = 'INVALID_TEXT_DECORATION_LINE',
    INVALID_TEXT_DECORATION_STYLE = 'INVALID_TEXT_DECORATION_STYLE',
    INVALID_TOOL_PARAMETER_TYPE = 'INVALID_TOOL_PARAMETER_TYPE',
    INVALID_TOP_K_VALUE = 'INVALID_TOP_K_VALUE',
    INVALID_TOP_P_VALUE = 'INVALID_TOP_P_VALUE',
    INVALID_TOTAL_LINE = 'INVALID_TOTAL_LINE',
    INVALID_TRUNCATION_METHOD = 'INVALID_TRUNCATION_METHOD',
    INVALID_TYPE_1_USE_2 = 'INVALID_TYPE_1_USE_2',
    /** ALIAS: the runtime value is `'SSS_INVALID_UI_OBJECT_TYPE'`. */
    INVALID_UI_OBJECT_TYPE = 'SSS_INVALID_UI_OBJECT_TYPE',
    INVALID_UNIT = 'INVALID_UNIT',
    INVALID_URL_SPACES_ARE_NOT_ALLOWED_IN_THE_URL = 'INVALID_URL_SPACES_ARE_NOT_ALLOWED_IN_THE_URL',
    INVALID_URL_URL_MUST_START_WITH_HTTP_HTTPS_FTP_OR_FILE = 'INVALID_URL_URL_MUST_START_WITH_HTTP_HTTPS_FTP_OR_FILE',
    INVALID_VERBOSITY = 'INVALID_VERBOSITY',
    INVALID_WEB_SEARCH_CONTEXT = 'INVALID_WEB_SEARCH_CONTEXT',
    INVALID_WORKBOOK_ID = 'INVALID_WORKBOOK_ID',
    /** ALIAS: the runtime value is `'SSS_METHOD_IS_ONLY_ALLOWED_FOR_MATRIX_FIELD'`. */
    METHOD_IS_ONLY_ALLOWED_FOR_MATRIX_FIELD = 'SSS_METHOD_IS_ONLY_ALLOWED_FOR_MATRIX_FIELD',
    MISSING_MANDATORY_FIELDS = 'MISSING_MANDATORY_FIELDS',
    /** ALIAS: the runtime value is `'SSS_MISSING_REQD_ARGUMENT'`. */
    MISSING_REQD_ARGUMENT = 'SSS_MISSING_REQD_ARGUMENT',
    MODEL_1_DOES_NOT_ACCEPT_DOCUMENTS = 'MODEL_1_DOES_NOT_ACCEPT_DOCUMENTS',
    MODEL_1_DOES_NOT_ACCEPT_IMAGE = 'MODEL_1_DOES_NOT_ACCEPT_IMAGE',
    MODEL_1_DOES_NOT_ACCEPT_PREAMBLE = 'MODEL_1_DOES_NOT_ACCEPT_PREAMBLE',
    MODEL_1_DOES_NOT_ACCEPT_RESPONSE_FORMAT = 'MODEL_1_DOES_NOT_ACCEPT_RESPONSE_FORMAT',
    MODEL_1_DOES_NOT_ACCEPT_SAFETY_MODE = 'MODEL_1_DOES_NOT_ACCEPT_SAFETY_MODE',
    MUTUALLY_EXCLUSIVE_ARGUMENTS = 'MUTUALLY_EXCLUSIVE_ARGUMENTS',
    NAME_CANNOT_BE_EMPTY = 'NAME_CANNOT_BE_EMPTY',
    NAME_CANNOT_HAVE_MORE_THAN_N_CHARACTERS = 'NAME_CANNOT_HAVE_MORE_THAN_N_CHARACTERS',
    NEITHER_ARGUMENT_DEFINED = 'NEITHER_ARGUMENT_DEFINED',
    NEW_TYPES_NOT_DEFINED = 'NEW_TYPES_NOT_DEFINED',
    NON_KATAKANA_DATA_FOUND = 'NON_KATAKANA_DATA_FOUND',
    NOTHING_TO_TRANSLATE = 'NOTHING_TO_TRANSLATE',
    NOTICE_THE_CREDIT_CARD_APPEARS_TO_BE_INCORRECT = 'NOTICE_THE_CREDIT_CARD_APPEARS_TO_BE_INCORRECT',
    NOT_SUPPORTED_ON_CURRENT_SUBRECORD = 'NOT_SUPPORTED_ON_CURRENT_SUBRECORD',
    NO_ASPECTS_DEFINED = 'NO_ASPECTS_DEFINED',
    NO_CHILDREN_DEFINED = 'NO_CHILDREN_DEFINED',
    NO_COLUMN_DEFINED = 'NO_COLUMN_DEFINED',
    NO_DATASET_DEFINED = 'NO_DATASET_DEFINED',
    NO_DIMENSION_ITEM_DEFINED = 'NO_DIMENSION_ITEM_DEFINED',
    NO_ELEMENTS_DEFINED = 'NO_ELEMENTS_DEFINED',
    NO_INPUTS_TO_EMBED = 'NO_INPUTS_TO_EMBED',
    NO_MEASURES_DEFINED = 'NO_MEASURES_DEFINED',
    NO_RULE_DEFINED = 'NO_RULE_DEFINED',
    NO_SELECTORS_DEFINED = 'NO_SELECTORS_DEFINED',
    NO_SORT_BY_DEFINED = 'NO_SORT_BY_DEFINED',
    NO_VALID_TOOL_AVAILABLE = 'NO_VALID_TOOL_AVAILABLE',
    ONLY_API_SECRET_IS_ACCEPTED = 'ONLY_API_SECRET_IS_ACCEPTED',
    OPERATION_IS_NOT_ALLOWED = 'OPERATION_IS_NOT_ALLOWED',
    OPERATOR_ARITY_MISMATCH = 'OPERATOR_ARITY_MISMATCH',
    PASSWORD_CANNOT_HAVE_MORE_THAN_N_CHARACTERS = 'PASSWORD_CANNOT_HAVE_MORE_THAN_N_CHARACTERS',
    PHONE_NUMBER_SHOULD_HAVE_SEVEN_DIGITS_OR_MORE = 'PHONE_NUMBER_SHOULD_HAVE_SEVEN_DIGITS_OR_MORE',
    PIVOT_DOES_NOT_EXIST = 'PIVOT_DOES_NOT_EXIST',
    PLEASE_ENTER_AN_EXPIRATION_DATE_IN_MMYYYY_FORMAT = 'PLEASE_ENTER_AN_EXPIRATION_DATE_IN_MMYYYY_FORMAT',
    PLEASE_ENTER_A_VALID_FROM_START_DATE_IN_MMYYYY_FORMAT = 'PLEASE_ENTER_A_VALID_FROM_START_DATE_IN_MMYYYY_FORMAT',
    PLEASE_INCLUDE_THE_AREA_CODE_FOR_PHONE_NUMBER = 'PLEASE_INCLUDE_THE_AREA_CODE_FOR_PHONE_NUMBER',
    PRESENCE_PENALTY_PARAMETER_NOT_AVAILABLE = 'PRESENCE_PENALTY_PARAMETER_NOT_AVAILABLE',
    PROPERTY_VALUE_CONFLICT = 'PROPERTY_VALUE_CONFLICT',
    READ_ONLY_PROPERTY = 'READ_ONLY_PROPERTY',
    REASONING_EFFORT_PARAMETER_NOT_AVAILABLE = 'REASONING_EFFORT_PARAMETER_NOT_AVAILABLE',
    RELATIONSHIP_ALREADY_USED = 'RELATIONSHIP_ALREADY_USED',
    SCRIPT_EXECUTION_USAGE_LIMIT_EXCEEDED = 'SCRIPT_EXECUTION_USAGE_LIMIT_EXCEEDED',
    SELECT_OPTION_ALREADY_PRESENT = 'SELECT_OPTION_ALREADY_PRESENT',
    SELECT_OPTION_NOT_FOUND = 'SELECT_OPTION_NOT_FOUND',
    SERVER_SIDE_VALIDATION_FAILED = 'SERVER_SIDE_VALIDATION_FAILED',
    SIGNATURE_VERIFICATION_FAILED = 'SIGNATURE_VERIFICATION_FAILED',
    SSS_ARGUMENT_DISCREPANCY = 'SSS_ARGUMENT_DISCREPANCY',
    SSS_DUPLICATE_ALIAS = 'SSS_DUPLICATE_ALIAS',
    SSS_INVALID_ACTION_ID = 'SSS_INVALID_ACTION_ID',
    SSS_INVALID_API_USAGE = 'SSS_INVALID_API_USAGE',
    SSS_INVALID_COUNTRY_ID = 'SSS_INVALID_COUNTRY_ID',
    SSS_INVALID_CURRENCY_ID = 'SSS_INVALID_CURRENCY_ID',
    SSS_INVALID_FORMAT_TYPE = 'SSS_INVALID_FORMAT_TYPE',
    SSS_INVALID_GETSELECTOPTION_FILTER_OPERATOR = 'SSS_INVALID_GETSELECTOPTION_FILTER_OPERATOR',
    SSS_INVALID_MACRO_ID = 'SSS_INVALID_MACRO_ID',
    SSS_INVALID_READ_SIZE = 'SSS_INVALID_READ_SIZE',
    SSS_INVALID_REDIRECT_OPERATION_ID = 'SSS_INVALID_REDIRECT_OPERATION_ID',
    SSS_INVALID_SEARCH_RESULT_INDEX = 'SSS_INVALID_SEARCH_RESULT_INDEX',
    SSS_INVALID_SEGMENT_SEPARATOR = 'SSS_INVALID_SEGMENT_SEPARATOR',
    SSS_INVALID_SRCH_OPERATOR = 'SSS_INVALID_SRCH_OPERATOR',
    SSS_INVALID_SUBLIST = 'SSS_INVALID_SUBLIST',
    SSS_INVALID_SUBLIST_OPERATION = 'SSS_INVALID_SUBLIST_OPERATION',
    SSS_INVALID_TYPE_ARG = 'SSS_INVALID_TYPE_ARG',
    SSS_INVALID_UI_OBJECT_TYPE = 'SSS_INVALID_UI_OBJECT_TYPE',
    SSS_INVALID_URL = 'SSS_INVALID_URL',
    SSS_INVALID_VALUE_WITH_REASON = 'SSS_INVALID_VALUE_WITH_REASON',
    SSS_METHOD_IS_ONLY_ALLOWED_FOR_MATRIX_FIELD = 'SSS_METHOD_IS_ONLY_ALLOWED_FOR_MATRIX_FIELD',
    SSS_METHOD_IS_ONLY_ALLOWED_FOR_MULTISELECT_FIELD = 'SSS_METHOD_IS_ONLY_ALLOWED_FOR_MULTISELECT_FIELD',
    SSS_METHOD_IS_ONLY_ALLOWED_FOR_SELECT_FIELD = 'SSS_METHOD_IS_ONLY_ALLOWED_FOR_SELECT_FIELD',
    SSS_MISSING_ALIAS = 'SSS_MISSING_ALIAS',
    SSS_MISSING_REQD_ARGUMENT = 'SSS_MISSING_REQD_ARGUMENT',
    SSS_NOT_YET_SUPPORTED = 'SSS_NOT_YET_SUPPORTED',
    SSS_REASON_EXPECTED_TYPE = 'SSS_REASON_EXPECTED_TYPE',
    SSS_RECORD_DOES_NOT_SATISFY_CONDITION = 'SSS_RECORD_DOES_NOT_SATISFY_CONDITION',
    SSS_RECORD_TYPE_MISMATCH = 'SSS_RECORD_TYPE_MISMATCH',
    SSS_SEARCH_FOR_EACH_LIMIT_EXCEEDED = 'SSS_SEARCH_FOR_EACH_LIMIT_EXCEEDED',
    SSS_SEARCH_RESULT_LIMIT_EXCEEDED = 'SSS_SEARCH_RESULT_LIMIT_EXCEEDED',
    SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES = 'SSS_SUBLIST_DOESNT_SUPPORT_MOVING_LINES',
    SSS_TAG_CANNOT_BE_EMPTY = 'SSS_TAG_CANNOT_BE_EMPTY',
    SSS_TAX_REGISTRATION_REQUIRED = 'SSS_TAX_REGISTRATION_REQUIRED',
    SSS_UNSUPPORTED_METHOD = 'SSS_UNSUPPORTED_METHOD',
    TABLE_DOES_NOT_EXIST = 'TABLE_DOES_NOT_EXIST',
    TEMPERATURE_PARAMETER_NOT_AVAILABLE = 'TEMPERATURE_PARAMETER_NOT_AVAILABLE',
    THAT_RECORD_IS_NOT_EDITABLE = 'THAT_RECORD_IS_NOT_EDITABLE',
    THE_FIELD_1_CONTAINED_MORE_THAN_THE_MAXIMUM_NUMBER__2__OF_CHARACTERS_ALLOWED = 'THE_FIELD_1_CONTAINED_MORE_THAN_THE_MAXIMUM_NUMBER__2__OF_CHARACTERS_ALLOWED',
    THE_OPTIONS_ARE_MUTUALLY_EXCLUSIVE_1_2_ARG2_ = 'THE_OPTIONS_ARE_MUTUALLY_EXCLUSIVE_1_2_ARG2_',
    TOO_MANY_RESULTS = 'TOO_MANY_RESULTS',
    TOP_K_PARAMETER_NOT_AVAILABLE = 'TOP_K_PARAMETER_NOT_AVAILABLE',
    TOP_K_VALUE_INVALID = 'TOP_K_VALUE_INVALID',
    TOP_P_PARAMETER_NOT_AVAILABLE = 'TOP_P_PARAMETER_NOT_AVAILABLE',
    TRANSLATION_HANDLE_IS_IN_AN_ILLEGAL_STATE = 'TRANSLATION_HANDLE_IS_IN_AN_ILLEGAL_STATE',
    UNHANDLED_ERRORS_ON_RESTORE = 'UNHANDLED_ERRORS_ON_RESTORE',
    UNKNOWN_CONTEXT_TYPE = 'UNKNOWN_CONTEXT_TYPE',
    UNKNOWN_PARAM = 'UNKNOWN_PARAM',
    UNRECOGNIZED_MODEL_PARAMETERS = 'UNRECOGNIZED_MODEL_PARAMETERS',
    UNRECOGNIZED_OCI_CONFIG_PARAMETERS = 'UNRECOGNIZED_OCI_CONFIG_PARAMETERS',
    UNSUPPORTED_COLOR = 'UNSUPPORTED_COLOR',
    UNSUPPORTED_FILE_TYPE = 'UNSUPPORTED_FILE_TYPE',
    UNSUPPORTED_FILE_TYPE_1_USE_2 = 'UNSUPPORTED_FILE_TYPE_1_USE_2',
    UNSUPPORTED_NUMBER_OF_TOKENS = 'UNSUPPORTED_NUMBER_OF_TOKENS',
    UNSUPPORTED_SAFETY_MODE = 'UNSUPPORTED_SAFETY_MODE',
    VALUE_1_OUTSIDE_OF_VALID_MINMAX_RANGE_FOR_FIELD_2 = 'VALUE_1_OUTSIDE_OF_VALID_MINMAX_RANGE_FOR_FIELD_2',
    VERBOSITY_PARAMETER_NOT_AVAILABLE = 'VERBOSITY_PARAMETER_NOT_AVAILABLE',
    WEB_SEARCH_CONTEXT_PARAMETER_NOT_AVAILABLE = 'WEB_SEARCH_CONTEXT_PARAMETER_NOT_AVAILABLE',
    WORKBOOK_NAME_IS_MISSING = 'WORKBOOK_NAME_IS_MISSING',
    WRONG_PARAMETER_TYPE = 'WRONG_PARAMETER_TYPE',
    WS_INVALID_REFERENCE_KEY_1 = 'WS_INVALID_REFERENCE_KEY_1',
    WS_NO_PERMISSIONS_TO_SET_VALUE = 'WS_NO_PERMISSIONS_TO_SET_VALUE',
    YOU_HAVE_ATTEMPTED_AN_UNSUPPORTED_ACTION = 'YOU_HAVE_ATTEMPTED_AN_UNSUPPORTED_ACTION',
  }

  /**
   * Encapsulates a custom or built-in SuiteScript error.
   *
   * **Important: `SuiteScriptError` is NOT a subclass of native `Error`.**
   * `caught instanceof Error` returns `false`. The class shares its
   * surface shape (`name`, `message`, `stack`) with native `Error` but is
   * its own thing — you cannot pass it to APIs expecting an `Error`.
   *
   * Created by `error.create(...)` or thrown by built-in NetSuite
   * operations. Both produce instances with the same shape, though the
   * `cause` field differs: created errors carry a `{name, message}`
   * self-echo; caught built-in errors carry a richer internal-error
   * object `{type, code, details, userEvent, stackTrace, notifyOff}`.
   *
   * The instance is not frozen, but its persisted properties are
   * read-only via property descriptors (assignment throws
   * `READ_ONLY_PROPERTY` for `type`/`id`/`name`/`message`/`cause`/
   * `notifyOff`, and silently no-ops with stack-recapture for `stack`).
   * The `userFacing` property is read-WRITE despite the Help Center.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4253432660}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4253432660.html}
   *
   * @restriction Client-side and server-side scripts
   * @since 2015.2
   */
  export interface SuiteScriptError {

    /**
     * The literal string `'error.SuiteScriptError'` — a type tag that
     * never changes per instance. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159475480456}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159475480456.html}
     *
     * @since 2015.2
     */
    readonly type: 'error.SuiteScriptError';

    /**
     * Error identifier. `null` for errors created via `error.create(...)`,
     * empty string `''` for built-in NetSuite errors caught from
     * operations like `record.load`. The Help Center claims the ID is
     * "automatically generated when a new error is created" — that
     * behavior is not observed at runtime. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803497}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803497.html}
     *
     * @since 2015.2
     */
    readonly id: string | null;

    /**
     * Error name or error code (e.g. `'INVALID_RCRD_TYPE'`,
     * `'MY_CUSTOM_ERROR'`). For created errors, set from
     * `error.create({name})`. For built-in errors, set to the relevant
     * `error.Type` value. May be `undefined` if created without a
     * `name`. Read-only.
     *
     * The runtime does NOT validate that `name` is a member of
     * `error.Type` — any string is accepted as a custom code.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803552}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803552.html}
     *
     * @since 2015.2
     */
    readonly name: error.Type | `${error.Type}` | string;

    /**
     * Human-readable error message. Set from `error.create({message})`
     * for custom errors, or assigned by NetSuite for built-in errors
     * (e.g. `'The record type [INVALID_TYPE] is invalid.'`). May be
     * `undefined` if created without a `message`. Displayed in the
     * Details column of the Execution Log. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803629}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803629.html}
     *
     * @since 2015.2
     */
    readonly message: string;

    /**
     * Stack trace as an ARRAY of pre-formatted strings (NOT a single
     * newline-delimited string like native `Error.stack`). The first
     * element is the literal `'Error'`; subsequent elements are
     * `'    at <fn> (<file>:<line>:<col>)'` frames. The most recently
     * executed method is at the top of the list.
     *
     * Assignment is silently overwritten — the property accepts writes
     * without throwing, but the runtime re-captures the current call
     * stack on each write rather than storing the assigned value.
     * `Object.defineProperty` throws `TypeError: Cannot redefine property: stack`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803715}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803715.html}
     *
     * @since 2015.2
     */
    readonly stack: string[];

    /**
     * The cause of the error. Read-only.
     *
     * **The shape varies dramatically by error source:**
     * - For errors created via `error.create({name, message})`, `cause`
     *   is a self-referential echo `{name: string, message: string}`.
     * - For errors created via `error.create({name, message, cause})`,
     *   `cause` is the value passed to `options.cause` (any type
     *   accepted — string, object, etc. Native `Error` instances are
     *   flattened to `{message, stack}` losing their prototype).
     * - For errors caught from built-in NetSuite operations, `cause`
     *   is a rich internal-error object:
     *   `{type: 'internal error', code: string, details: string,
     *      userEvent: null | string, stackTrace: string[], notifyOff: boolean}`.
     *
     * Typed as `unknown` so consumers must narrow before using.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158049399342}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158049399342.html}
     *
     * @since 2015.2
     */
    readonly cause: unknown;

    /**
     * If `true`, suppresses email notification to users listed on the
     * script record's Unhandled Errors subtab when the error is thrown.
     * Set from `error.create({notifyOff})` (default `false`). Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159475415674}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159475415674.html}
     *
     * @since 2015.2
     */
    readonly notifyOff: boolean;

    /**
     * Whether the error is shown to end users in the UI (vs. just
     * logged for administrators). Default `true` for errors created
     * via `error.create(...)`. Settable via the undocumented
     * `options.userFacing` parameter or by direct assignment on the
     * instance — unlike most other properties, `userFacing` is
     * read-WRITE at runtime despite no `READ_ONLY_PROPERTY` enforcement.
     *
     * @since 2015.2
     */
    userFacing: boolean;

    /**
     * Returns a plain-object snapshot of the error suitable for
     * serialization. Includes `type`, `name`, `message`, `id`, `stack`,
     * `cause`, `notifyOff`, and `userFacing`. The `data` property is
     * also present in `Object.keys` but always `undefined` (omitted by
     * `JSON.stringify`).
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @return A plain-object snapshot of the error's persisted fields.
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the JSON-stringified output of `toJSON()`. This differs
     * from native `Error.toString()` (which returns `'<name>: <message>'`)
     * — `SuiteScriptError.toString()` returns a full JSON blob.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @return The JSON-stringified error snapshot.
     *
     * @since 2015.2
     */
    toString(): string;
  }
}
