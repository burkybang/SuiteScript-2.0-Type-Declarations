/// <reference path="./error.d.ts" />
/// <reference path="./record.d.ts" />

/**
 * SuiteScript config module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4261803800}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4261803800.html}
 *
 * @module N/config
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface config {

  /**
   * Loads a configuration page as a `record.Record` (standard mode). The returned record exposes
   * preference names and IDs via the usual record-member API (`getValue`, `setValue`, `getText`,
   * `setText`, `getField`, etc.) — `N/record` does NOT need to be loaded separately.
   *
   * Type strings are matched case-insensitively (`'USERPREFERENCES'`, `'UserPreferences'`,
   * `'userpreferences'` all resolve to the same configuration page).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4256772439}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4256772439.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.type One of the `config.Type` enum values (the lowercase runtime string, not the constant name). Matched case-insensitively. See `config.Type` for the list of supported configuration pages.
   * @param [options.isDynamic=false] If `false`, omitted, or any non-boolean value, the record is loaded in standard mode (returns `record.Record` with direct-sublist methods). Only the literal boolean `true` triggers dynamic mode; `1`, `'true'`, `null` etc. are silently coerced to `false`.
   * @return The loaded configuration record in standard mode.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null/undefined, an empty object, or if `options.type` is missing, `null`, `undefined`, or an empty string. Pre-validation phase: 0 governance billed.
   * @throws {error.SuiteScriptError} INVALID_TYP If `options.type` (or the bare positional type arg) is a non-empty string that doesn't match any known configuration page, or any number. Error message format: `"Invalid type {value}, use nlapiLoadRecord"` — the SuiteScript 1.0 API suggestion (`nlapiLoadRecord`) is a Java-layer error-message leak. Post-validation phase: full 10 governance billed even on failure, so consumer code should NOT loop on this error. (Docs incorrectly call this code `INVALID_RCRD_TYPE` — runtime actually emits `INVALID_TYP`.)
   * @throws {TypeError} (Java-layer leak, not a normal SuiteScript code) If `options.type` is a plain object or array, the underlying Java method (`com.netledger.app.common.scripting.api.record.RecordApiV2.loadConfiguration`) crashes before the string-validation layer, producing a raw `TypeError` instead of an SSS_* code.
   * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION If the executing role lacks the permission required to access the requested configuration page. For example, `config.Type.TIME_POST` and `config.Type.TIME_VOID` require the "Transactions > Post Time" permission; loading them without it produces `"Permission Violation: You need the 'Transactions -> Post Time' permission to access this page."`.
   */
  load(options: {
    type: config.Type | `${config.Type}` | string,
    isDynamic?: false,
  }): record.Record;

  /**
   * Loads a configuration page as a `record.DynamicRecord` (dynamic mode). The returned
   * record exposes preference names and IDs via the usual record-member API and also includes
   * dynamic-mode methods: `getMacros`/`getMacro`/`executeMacro` for macros and `selectLine` /
   * `commitLine` / `cancelLine` / `selectNewLine` for current-sublist-line manipulation.
   * `N/record` does NOT need to be loaded separately.
   *
   * Type strings are matched case-insensitively (`'USERPREFERENCES'`, `'UserPreferences'`,
   * `'userpreferences'` all resolve to the same configuration page).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4256772439}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4256772439.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.type One of the `config.Type` enum values (the lowercase runtime string, not the constant name). Matched case-insensitively. See `config.Type` for the list of supported configuration pages.
   * @param options.isDynamic Must be the literal boolean `true` to trigger dynamic mode.
   * @return The loaded configuration record in dynamic mode.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.type` is missing, `null`, `undefined`, or an empty string. Pre-validation phase: 0 governance billed.
   * @throws {error.SuiteScriptError} INVALID_TYP If `options.type` is a non-empty string that doesn't match any known configuration page, or any number. Error message format: `"Invalid type {value}, use nlapiLoadRecord"`. Post-validation phase: full 10 governance billed even on failure. (Docs incorrectly call this code `INVALID_RCRD_TYPE` — runtime actually emits `INVALID_TYP`.)
   * @throws {TypeError} (Java-layer leak) If `options.type` is a plain object or array, the underlying Java method crashes before the string-validation layer.
   * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION If the executing role lacks the permission required to access the requested configuration page (e.g. `config.Type.TIME_POST` / `config.Type.TIME_VOID` require the "Transactions > Post Time" permission).
   */
  load(options: {
    type: config.Type | `${config.Type}` | string,
    isDynamic: true,
  }): record.DynamicRecord;

  /**
   * Loads a configuration page as a `record.Record` (standard mode).
   * Positional-form overload of {@link config.load}; equivalent to
   * `config.load({type, isDynamic: false})`. The returned record exposes
   * preference names and IDs via the usual record-member API (`getValue`,
   * `setValue`, `getText`, `setText`, `getField`, etc.) — `N/record` does
   * NOT need to be loaded separately.
   *
   * Type strings are matched case-insensitively (`'USERPREFERENCES'`,
   * `'UserPreferences'`, `'userpreferences'` all resolve to the same
   * configuration page).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4256772439}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4256772439.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param type One of the `config.Type` enum values (the lowercase runtime string, not the constant name). Matched case-insensitively. See `config.Type` for the list of supported configuration pages.
   * @param [isDynamic=false] If `false`, omitted, or any non-boolean value, the record is loaded in standard mode (returns `record.Record` with direct-sublist methods). Only the literal boolean `true` triggers dynamic mode; `1`, `'true'`, `null` etc. are silently coerced to `false`.
   * @return The loaded configuration record in standard mode.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `type` is missing, `null`, `undefined`, or an empty string. Pre-validation phase: 0 governance billed.
   * @throws {error.SuiteScriptError} INVALID_TYP If `type` is a non-empty string that doesn't match any known configuration page, or any number. Error message format: `"Invalid type {value}, use nlapiLoadRecord"` — the SuiteScript 1.0 API suggestion (`nlapiLoadRecord`) is a Java-layer error-message leak. Post-validation phase: full 10 governance billed even on failure, so consumer code should NOT loop on this error. (Docs incorrectly call this code `INVALID_RCRD_TYPE` — runtime actually emits `INVALID_TYP`.)
   * @throws {TypeError} (Java-layer leak, not a normal SuiteScript code) If `type` is a plain object or array, the underlying Java method (`com.netledger.app.common.scripting.api.record.RecordApiV2.loadConfiguration`) crashes before the string-validation layer, producing a raw `TypeError` instead of an SSS_* code.
   * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION If the executing role lacks the permission required to access the requested configuration page. For example, `config.Type.TIME_POST` and `config.Type.TIME_VOID` require the "Transactions > Post Time" permission; loading them without it produces `"Permission Violation: You need the 'Transactions -> Post Time' permission to access this page."`.
   */
  load(type: config.Type | `${config.Type}` | string, isDynamic?: false): record.Record;

  /**
   * Loads a configuration page as a `record.DynamicRecord` (dynamic mode).
   * Positional-form overload of {@link config.load}; equivalent to
   * `config.load({type, isDynamic: true})`. The returned record exposes
   * preference names and IDs via the usual record-member API and also
   * includes dynamic-mode methods: `getMacros`/`getMacro`/`executeMacro`
   * for macros and `selectLine` / `commitLine` / `cancelLine` /
   * `selectNewLine` for current-sublist-line manipulation. `N/record`
   * does NOT need to be loaded separately.
   *
   * Type strings are matched case-insensitively (`'USERPREFERENCES'`,
   * `'UserPreferences'`, `'userpreferences'` all resolve to the same
   * configuration page).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4256772439}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4256772439.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param type One of the `config.Type` enum values (the lowercase runtime string, not the constant name). Matched case-insensitively. See `config.Type` for the list of supported configuration pages.
   * @param isDynamic Must be the literal boolean `true` to trigger dynamic mode.
   * @return The loaded configuration record in dynamic mode.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `type` is missing, `null`, `undefined`, or an empty string. Pre-validation phase: 0 governance billed.
   * @throws {error.SuiteScriptError} INVALID_TYP If `type` is a non-empty string that doesn't match any known configuration page, or any number. Error message format: `"Invalid type {value}, use nlapiLoadRecord"`. Post-validation phase: full 10 governance billed even on failure. (Docs incorrectly call this code `INVALID_RCRD_TYPE` — runtime actually emits `INVALID_TYP`.)
   * @throws {TypeError} (Java-layer leak) If `type` is a plain object or array, the underlying Java method crashes before the string-validation layer.
   * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION If the executing role lacks the permission required to access the requested configuration page (e.g. `config.Type.TIME_POST` / `config.Type.TIME_VOID` require the "Transactions > Post Time" permission).
   */
  load(type: config.Type | `${config.Type}` | string, isDynamic: true): record.DynamicRecord;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4261803800}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4261803800.html}
 */
declare namespace config {

  /**
   * Enum of supported NetSuite configuration pages. Use values from this enum as the `type`
   * argument to `config.load`. The string values shown here are the lowercase identifiers the
   * runtime actually uses; the runtime accepts them case-insensitively at the input boundary.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4256772632}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4256772632.html}
   *
   * @since 2015.2
   */
  export enum Type {
    USER_PREFERENCES = 'userpreferences',
    COMPANY_INFORMATION = 'companyinformation',
    COMPANY_PREFERENCES = 'companypreferences',
    ACCOUNTING_PREFERENCES = 'accountingpreferences',
    ACCOUNTING_PERIODS = 'accountingperiods',
    TAX_PERIODS = 'taxperiods',
    FEATURES = 'companyfeatures',
    MANUFACTURING_PREFERENCES = 'manufacturingpreferences',
    TIME_POST = 'timepost',
    TIME_VOID = 'timevoid',
  }
}
