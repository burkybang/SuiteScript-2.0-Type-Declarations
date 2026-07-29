/// <reference path="./error.d.ts" />
/// <reference path="./record.d.ts" />

/**
 * SuiteScript recordContext module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627324548}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627324548.html}
 *
 * @module N/recordContext
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface recordContext {

  getContext: {

    /**
     * Returns the record context object for a record identified by type and ID. Use this overload
     * when the record is NOT already loaded in the script; pass `record` to the other overload if
     * the record object is already in hand. The two parameter shapes are mutually exclusive — see
     * `MUTUALLY_EXCLUSIVE_ARGUMENTS` below.
     *
     * The return shape is a plain object whose keys are the LOWERCASED context type names (e.g.
     * `LOCALIZATION` → `localization`) and whose values are arrays of strings. For `LOCALIZATION`,
     * the strings are country codes (e.g. `['US']`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
     *
     * @governance none (the Help Center claims "10 units", but the runtime bills 0 units per call — verified across both sync and `.promise()` invocations and across success and every failure path)
     * @restriction Client-side and server-side scripts
     * @since 2020.2
     *
     * @param options
     * @param options.recordType The record's type. Pass a `record.Type` enum value, the string form, or a custom-record-type script ID.
     * @param options.recordId The internal ID of the record. May be a number or its string form. NetSuite does NOT verify that the ID corresponds to an existing record — non-existent IDs simply return empty context arrays rather than throwing `RCRD_DSNT_EXIST`.
     * @param [options.contextTypes] Array of context type names to retrieve. Each value must be an UPPERCASE `recordContext.ContextType` enum value or literal string — runtime matching is case-sensitive (`'localization'` is rejected with `UNKNOWN_CONTEXT_TYPE`). Defaulting behavior: if omitted, `null`, or a bare string (not an array), the parameter is treated as `['LOCALIZATION']`. An empty array `[]` returns an empty result `{}`. An empty string `''` is rejected with `UNKNOWN_CONTEXT_TYPE`.
     * @return Object whose keys are the lowercased context type names and whose values are `string[]`. Generic parameter narrows the return type to the specific keys requested.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.recordType`, or `options.recordId` is missing. The runtime error message format is `"getContext: Missing a required argument: {name}"`. (Docs label this `MISSING_REQD_ARGUMENT` without the `SSS_` prefix — that's wrong; the runtime emits `SSS_MISSING_REQD_ARGUMENT`.)
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive (string, number, etc.), or if `options.recordType` is not a string (e.g. a number).
     * @throws {error.SuiteScriptError} INVALID_UNSUPRTD_RCRD_TYP If `options.recordType` is a non-empty string that doesn't match any known record type. Error message format: `"Invalid or unsupported record type: {value}"`.
     * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE If `options.contextTypes` contains a value that isn't a recognized context type (including the lowercase form `'localization'` and the empty string `''`). Error message: `"Unknown context type."` (no detail about which value was bad).
     */
    <ContextTypes extends recordContext.ContextType[]>(options: {
      recordType: record.Type | `${record.Type}` | record.CustomType | string,
      recordId: number | string,
      contextTypes?: ContextTypes,
    }): recordContext.RecordContext<ContextTypes>;

    /**
     * Returns the record context object for an already-loaded record. Use this overload when you
     * already have a `record.Record` (or related) instance; pass `recordType` + `recordId` to the
     * other overload otherwise. The two parameter shapes are mutually exclusive — see
     * `MUTUALLY_EXCLUSIVE_ARGUMENTS` below.
     *
     * The return shape is a plain object whose keys are the LOWERCASED context type names (e.g.
     * `LOCALIZATION` → `localization`) and whose values are arrays of strings. For `LOCALIZATION`,
     * the strings are country codes (e.g. `['US']`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
     *
     * @governance none (the Help Center claims "10 units", but the runtime bills 0 units per call — verified across both sync and `.promise()` invocations and across success and every failure path)
     * @restriction Client-side and server-side scripts
     * @since 2020.2
     *
     * @param options
     * @param options.record The loaded record object. May be a `record.Record` (standard mode) or `record.DynamicRecord` (dynamic mode).
     * @param [options.contextTypes] Array of context type names to retrieve. Each value must be an UPPERCASE `recordContext.ContextType` enum value or literal string — runtime matching is case-sensitive (`'localization'` is rejected with `UNKNOWN_CONTEXT_TYPE`). Defaulting behavior: if omitted, `null`, or a bare string (not an array), the parameter is treated as `['LOCALIZATION']`. An empty array `[]` returns an empty result `{}`. An empty string `''` is rejected with `UNKNOWN_CONTEXT_TYPE`.
     * @return Object whose keys are the lowercased context type names and whose values are `string[]`. Generic parameter narrows the return type to the specific keys requested.
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If `options.record` is passed alongside `options.recordType` or `options.recordId` (or both). Error message: `"Can't use mutually exclusive arguments."`. (Docs label this `MUTUALY_EXCLUSIVE_ARGUMENT` — note the missing second `L` and singular form — that's a docs typo; the runtime emits `MUTUALLY_EXCLUSIVE_ARGUMENTS`.)
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` or `options.record` is missing.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive.
     * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE If `options.contextTypes` contains a value that isn't a recognized context type.
     */
    <ContextTypes extends recordContext.ContextType[]>(options: {
      record: record.Record | record.DynamicRecord,
      contextTypes?: ContextTypes,
    }): recordContext.RecordContext<ContextTypes>;

    promise: {

      /**
       * Returns the record context object for a record identified by type and ID, asynchronously.
       *
       * The return shape is a `Promise` resolving to a plain object whose keys are the LOWERCASED
       * context type names (e.g. `LOCALIZATION` → `localization`) and whose values are arrays of
       * strings. For `LOCALIZATION`, the strings are country codes (e.g. `['US']`).
       *
       * The Help Center documents `getContext` as a sync method only and does NOT mention the
       * `.promise()` variant, but it exists at runtime.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
       *
       * @governance none (Help Center claims "10 units" for sync; the `.promise()` variant is undocumented and also bills 0 units per call)
       * @restriction Client-side and server-side scripts
       * @since 2020.2
       *
       * @param options
       * @param options.recordType The record's type. Pass a `record.Type` enum value, the string form, or a custom-record-type script ID.
       * @param options.recordId The internal ID of the record. May be a number or its string form. NetSuite does NOT verify that the ID corresponds to an existing record — non-existent IDs simply return empty context arrays rather than throwing `RCRD_DSNT_EXIST`.
       * @param [options.contextTypes] Array of context type names to retrieve. Each value must be an UPPERCASE `recordContext.ContextType` enum value or literal string — runtime matching is case-sensitive (`'localization'` is rejected with `UNKNOWN_CONTEXT_TYPE`). Defaulting behavior: if omitted, `null`, or a bare string (not an array), the parameter is treated as `['LOCALIZATION']`. An empty array `[]` returns an empty result `{}`. An empty string `''` is rejected with `UNKNOWN_CONTEXT_TYPE`.
       * @return Promise resolving to an object whose keys are the lowercased context type names and whose values are `string[]`.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.recordType`, or `options.recordId` is missing.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive, or if `options.recordType` is not a string.
       * @throws {error.SuiteScriptError} INVALID_UNSUPRTD_RCRD_TYP If `options.recordType` is a non-empty string that doesn't match any known record type.
       * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE If `options.contextTypes` contains an unrecognized value.
       */
      <ContextTypes extends recordContext.ContextType[]>(options: {
        recordType: record.Type | `${record.Type}` | record.CustomType | string,
        recordId: number | string,
        contextTypes?: ContextTypes,
      }): Promise<recordContext.RecordContext<ContextTypes>>;

      /**
       * Returns the record context object for an already-loaded record, asynchronously.
       *
       * The return shape is a `Promise` resolving to a plain object whose keys are the LOWERCASED
       * context type names (e.g. `LOCALIZATION` → `localization`) and whose values are arrays of
       * strings.
       *
       * The Help Center documents `getContext` as a sync method only and does NOT mention the
       * `.promise()` variant, but it exists at runtime.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627355521}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627355521.html}
       *
       * @governance none (Help Center claims "10 units" for sync; the `.promise()` variant is undocumented and also bills 0 units per call)
       * @restriction Client-side and server-side scripts
       * @since 2020.2
       *
       * @param options
       * @param options.record The loaded record object. May be a `record.Record` (standard mode) or `record.DynamicRecord` (dynamic mode).
       * @param [options.contextTypes] Array of context type names to retrieve. Each value must be an UPPERCASE `recordContext.ContextType` enum value or literal string — runtime matching is case-sensitive (`'localization'` is rejected with `UNKNOWN_CONTEXT_TYPE`). Defaulting behavior: if omitted, `null`, or a bare string (not an array), the parameter is treated as `['LOCALIZATION']`. An empty array `[]` returns an empty result `{}`. An empty string `''` is rejected with `UNKNOWN_CONTEXT_TYPE`.
       * @return Promise resolving to an object whose keys are the lowercased context type names and whose values are `string[]`.
       *
       * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If `options.record` is passed alongside `options.recordType` or `options.recordId`.
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` or `options.record` is missing.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive.
       * @throws {error.SuiteScriptError} UNKNOWN_CONTEXT_TYPE If `options.contextTypes` contains an unrecognized value.
       */
      <ContextTypes extends recordContext.ContextType[]>(options: {
        record: record.Record | record.DynamicRecord,
        contextTypes?: ContextTypes,
      }): Promise<recordContext.RecordContext<ContextTypes>>;
    };
  };
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627324548}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627324548.html}
 */
declare namespace recordContext {

  /**
   * Return shape of `recordContext.getContext`. Keys are the lowercased forms of the
   * `ContextType` values passed in (e.g. `LOCALIZATION` → `localization`); values are
   * arrays of strings (country codes for `LOCALIZATION`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159311113661}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159311113661.html}
   *
   * @since 2020.2
   */
  type RecordContext<ContextTypes extends ContextType[]> = Record<Lowercase<ContextTypes[number]>, string[]>;

  /**
   * Enum of supported record-context types. Currently only `LOCALIZATION` is exposed; runtime
   * matching is case-sensitive — only the uppercase form is accepted at the input boundary.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627386827}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627386827.html}
   *
   * @since 2020.2
   */
  export enum ContextType {
    LOCALIZATION = 'LOCALIZATION',
  }
}
