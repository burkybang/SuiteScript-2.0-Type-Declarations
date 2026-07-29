/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./record.d.ts" />

/**
 * SuiteScript runtime module
 *
 * Read information about the currently executing script, the current user,
 * and the user session. Also exposes module-level properties for the
 * NetSuite account (`accountId`, `country`, `envType`, `version`,
 * `executionContext`, `queueCount`, `processorCount`) and a feature-check
 * helper (`isFeatureInEffect`).
 *
 * Access nested object data via the three getter methods:
 * `getCurrentScript()` (script ID, deployment, governance), `getCurrentUser()`
 * (logged-in user details, permissions, preferences), `getCurrentSession()`
 * (per-user session storage).
 *
 * Note: the runtime object additionally exposes a `toJSON()` method that
 * returns an empty object (`{}`) — unlike the `Script`, `Session`, and `User`
 * `toJSON()` methods, it serializes none of the module's readable properties.
 * It is omitted from this type because the empty return carries no information
 * and the TypeScript `{}` type incorrectly represents "any non-nullish value"
 * rather than "empty object".
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296359529}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296359529.html}
 *
 * @module N/runtime
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface runtime {

  /**
   * Returns the `runtime.User` object for the user currently executing the
   * script. Includes id, name, email, role, location, department,
   * subsidiary, contact, and helpers for permissions and preferences.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296529105}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296529105.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2015.2
   *
   * @return The `User` object for the current user.
   */
  getCurrentUser(): runtime.User;

  /**
   * Returns the `runtime.Script` object for the currently executing script.
   * Includes script id, deployment id, api version, log level, bundle ids,
   * and helpers for governance, parameters, and percent-complete.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296529387}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296529387.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2015.2
   *
   * @return The `Script` object for the currently executing script.
   */
  getCurrentScript(): runtime.Script;

  /**
   * Returns the `runtime.Session` object for the current user session.
   * Use for per-user, per-session key/value storage that persists across
   * script executions within the same NetSuite session.
   *
   * In a client script, session information can change in some situations
   * (restart, HTTPS session timeout, restart of a server script running
   * in the same session).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296529736}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296529736.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2015.2
   *
   * @return The `Session` object for the current user session.
   */
  getCurrentSession(): runtime.Session;

  isFeatureInEffect: {

    /**
     * Checks whether a feature is enabled in the current account. Pass the
     * feature's internal ID (e.g. `'SUBSIDIARIES'`, `'MULTILANGUAGE'`,
     * `'INVENTORY'`). Unknown feature IDs silently return `false` rather
     * than throwing.
     * @see [SuiteAnswers: Feature Names and IDs]{@link https://suiteanswers.custhelp.com/app/answers/detail/a_id/10417}
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296530135}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296530135.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param feature The internal ID of the feature to check.
     * @return `true` if the feature is enabled; `false` if not enabled or unknown.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `feature` is missing, `null`, or empty string. Message format: `"runtime.isFeatureInEffect: Missing a required argument: options.feature"` (note: uses `options.feature` wording even for positional call form).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `feature` is a non-string non-empty value. Message: `"Wrong parameter type: feature is expected as string. "` (trailing space in message).
     */
    (
      feature: string,
    ): boolean;

    /**
     * Checks whether a feature is enabled in the current account.
     * @see [SuiteAnswers: Feature Names and IDs]{@link https://suiteanswers.custhelp.com/app/answers/detail/a_id/10417}
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296530135}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296530135.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.feature The internal ID of the feature to check.
     * @return `true` if the feature is enabled; `false` if not enabled or unknown.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.feature` is missing, `null`, or empty string. Message format: `"runtime.isFeatureInEffect: Missing a required argument: options.feature"`.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options` is `{}` (treated as a `null` feature), or `options.feature` is a non-string non-empty value. Message: `"Wrong parameter type: feature is expected as string. "`.
     */
    (options: {
      feature: string,
    }): boolean;
  };

  /**
   * The number of scheduled-script queues available to the current
   * account. Reflects the account's SuiteCloud Plus settings, not the
   * number of queues actually in use by deployments. For map/reduce and
   * newer scheduled-script deployments using SuiteCloud Processors, see
   * `processorCount`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531705}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531705.html}
   *
   * @since 2015.2
   */
  readonly queueCount: number;

  /**
   * The number of SuiteCloud Processors available to the current account.
   * Used by map/reduce and newer scheduled-script deployments. May differ
   * from `queueCount`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1513808179}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1513808179.html}
   *
   * @since 2018.1
   */
  readonly processorCount: number;

  /**
   * The NetSuite version the current account is running, e.g. `'2026.1'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531948}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531948.html}
   *
   * @since 2015.2
   */
  readonly version: string;

  /**
   * The NetSuite account ID for the current account, e.g. `'TD2927492'`
   * or `'1234567_SB1'` for sandboxes.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296530806}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296530806.html}
   *
   * @since 2015.2
   */
  readonly accountId: string;

  /**
   * The country code for the current account (e.g. `'US'`, `'CA'`,
   * `'GB'`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159983960584}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159983960584.html}
   *
   * @since 2020.2
   */
  readonly country: string;

  /**
   * The current environment in which the script is executing. One of the
   * `runtime.EnvType` enum values.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531123}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531123.html}
   *
   * @since 2015.2
   */
  readonly envType: runtime.EnvType | `${runtime.EnvType}`;

  /**
   * The execution context trigger of the current script — one of the
   * `runtime.ContextType` enum values. Use to branch logic based on
   * how a script was invoked (e.g. skip work when running under
   * `REST_WEBSERVICES`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531348}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531348.html}
   *
   * @since 2015.2
   */
  readonly executionContext: runtime.ContextType | `${runtime.ContextType}`;

  /**
   * Returns the literal string `'runtime.Runtime'` — a class-name tag,
   * not a representation of the module's contents.
   *
   * @return The literal `'runtime.Runtime'`.
   */
  toString(): 'runtime.Runtime';
}


declare namespace runtime {

  /**
   * NetSuite account environment types. Use to branch logic by
   * environment (e.g. enable verbose logging only in `SANDBOX`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296647065}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296647065.html}
   *
   * @since 2015.2
   */
  export enum EnvType {
    SANDBOX = 'SANDBOX',
    PRODUCTION = 'PRODUCTION',
    BETA = 'BETA',
    INTERNAL = 'INTERNAL',
  }

  /**
   * User permission levels for `User.getPermission(...)` results.
   * Returned as numeric values (0–4), NOT strings. Higher values
   * indicate broader access — e.g. `FULL` (4) > `EDIT` (3) > `CREATE`
   * (2) > `VIEW` (1) > `NONE` (0).
   *
   * Note: the Help Center claims `getPermission` returns string values
   * matching the enum keys (e.g. `'FULL'`); in practice the runtime
   * returns NUMBERS matching the enum values.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296647244}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296647244.html}
   *
   * @since 2015.2
   */
  export enum Permission {
    FULL = 4,
    EDIT = 3,
    CREATE = 2,
    VIEW = 1,
    NONE = 0,
  }

  /**
   * Execution contexts a script can run under. Compare against
   * `runtime.executionContext` to branch on trigger source.
   *
   * **Important — many enum VALUES differ from their KEY NAMES:**
   * keys use underscores between words (`BUNDLE_INSTALLATION`,
   * `CSV_IMPORT`, `MAP_REDUCE`, etc.) but the runtime values omit
   * those underscores (`'BUNDLEINSTALLATION'`, `'CSVIMPORT'`,
   * `'MAPREDUCE'`). This is the opposite of what the Help Center
   * documentation indicates. The values encoded below are the actual
   * runtime values.
   *
   * Unlike `EnvType` and `Permission`, the `ContextType` enum object
   * is NOT frozen at runtime — but the keys/values are stable and
   * should be treated as constants.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296646855}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296646855.html}
   *
   * @since 2015.2
   */
  export enum ContextType {
    ACTION = 'ACTION',
    ADVANCEDREVREC = 'ADVANCEDREVREC',
    BANKCONNECTIVITY = 'BANKCONNECTIVITY',
    BANKSTATEMENTPARSER = 'BANKSTATEMENTPARSER',
    BUNDLE_INSTALLATION = 'BUNDLEINSTALLATION',
    CLIENT = 'CLIENT',
    CONSOLRATEADJUSTOR = 'CONSOLRATEADJUSTOR',
    CSV_IMPORT = 'CSVIMPORT',
    CUSTOM_MASSUPDATE = 'CUSTOMMASSUPDATE',
    CUSTOMGLLINES = 'CUSTOMGLLINES',
    /** Custom-tool execution context, used by SuiteApp MCP custom tools. */
    CUSTOMTOOL = 'CUSTOMTOOL',
    DATASETBUILDER = 'DATASETBUILDER',
    DEBUGGER = 'DEBUGGER',
    EMAIL_CAPTURE = 'EMAILCAPTURE',
    FICONNECTIVITY = 'FICONNECTIVITY',
    FIPARSER = 'FIPARSER',
    MAP_REDUCE = 'MAPREDUCE',
    NONE = 'NONE',
    OCRPLUGIN = 'OCRPLUGIN',
    PAYMENTGATEWAY = 'PAYMENTGATEWAY',
    PAYMENTPOSTBACK = 'PAYMENTPOSTBACK',
    PLATFORMEXTENSION = 'PLATFORMEXTENSION',
    PORTLET = 'PORTLET',
    PROMOTIONS = 'PROMOTIONS',
    RECORDACTION = 'RECORDACTION',
    REST_WEBSERVICES = 'RESTWEBSERVICES',
    RESTLET = 'RESTLET',
    SCHEDULED = 'SCHEDULED',
    SDF_INSTALLATION = 'SDFINSTALLATION',
    SHIPPING_PARTNERS = 'SHIPPINGPARTNERS',
    SUITELET = 'SUITELET',
    TAX_CALCULATION = 'TAXCALCULATION',
    USER_INTERFACE = 'USERINTERFACE',
    USEREVENT = 'USEREVENT',
    WEBAPPLICATION = 'WEBAPPLICATION',
    WEBSERVICES = 'WEBSERVICES',
    WEBSTORE = 'WEBSTORE',
    WORKBOOKBUILDER = 'WORKBOOKBUILDER',
    WORKFLOW = 'WORKFLOW',
  }


  /**
   * Encapsulates runtime information about the currently executing
   * script. Obtained via `runtime.getCurrentScript()`.
   *
   * The instance is frozen + sealed + non-extensible at runtime;
   * all property assignments throw `READ_ONLY_PROPERTY` with the
   * fully-qualified message format `"Read only property: runtime.Script.<name>."`.
   *
   * @restriction Client-side and server-side scripts
   */
  export interface Script {

    /**
     * The script's log level (`'DEBUG'`, `'AUDIT'`, `'ERROR'`,
     * `'EMERGENCY'`). Not supported on client scripts. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296662791}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296662791.html}
     *
     * @since 2015.2
     */
    readonly logLevel: string;

    /**
     * The script's record ID (the custom script ID, e.g.
     * `'customscript_mymodule'`). Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296662491}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296662491.html}
     *
     * @since 2015.2
     */
    readonly id: string;

    /**
     * The SuiteScript API version of the script (e.g. `'2.0'`, `'2.1'`).
     * Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1550072971}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1550072971.html}
     *
     * @since 2015.2
     */
    readonly apiVersion: string;

    /**
     * The deployment ID for the script deployment running this script
     * (e.g. `'customdeploy_mymodule'`). Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4439939144}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4439939144.html}
     *
     * @since 2015.2
     */
    readonly deploymentId: string;

    /**
     * The bundle IDs of the bundles containing the script, as strings,
     * sorted ascending. Empty array if the script is not part of any
     * bundle. Does NOT include deprecated bundles. The last element is
     * NOT guaranteed to be the bundle that triggered execution during
     * bundle installation. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4439977567}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4439977567.html}
     *
     * @since 2015.2
     */
    readonly bundleIds: string[];

    /**
     * Returns the remaining governance unit allowance for the currently
     * executing script. Call before/after expensive operations to budget
     * usage and avoid `SCRIPT_EXECUTION_USAGE_LIMIT_EXCEEDED`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296661153}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296661153.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @return Remaining governance units as a number.
     */
    getRemainingUsage(): number;

    getParameter: {

      /**
       * Returns the value of a script parameter for the currently executing
       * script. Returns `null` if no parameter with the given name is
       * defined on the script record. The generic type parameter `T` lets
       * the caller assert the expected value type at call sites; the
       * actual runtime return is one of `string | number | boolean | Date
       * | null`.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296661592}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296661592.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param name The script parameter's internal ID (e.g. `'custscript_max_rows'`).
       * @return The parameter value, or `null` if not set.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `name` is missing, `null`, or empty string. Message format: `"Script.getParameter: Missing a required argument: name"`.
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `name` is a non-string. Message: `"Wrong parameter type: name is expected as string. "`.
       */
      <T extends record.FieldValue>(
        name: string,
      ): T;

      /**
       * Returns the value of a script parameter for the currently executing
       * script. Returns `null` if no parameter with the given name is
       * defined on the script record. The generic type parameter `T` lets
       * the caller assert the expected value type at call sites; the
       * actual runtime return is one of `string | number | boolean | Date
       * | null`.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296661592}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296661592.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param options
       * @param options.name The script parameter's internal ID (e.g. `'custscript_max_rows'`).
       * @return The parameter value, or `null` if not set.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null/empty, or `options.name` is missing/null/empty string. Message format: `"Script.getParameter: Missing a required argument: name"`.
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.name` is a non-string. Message: `"Wrong parameter type: name is expected as string. "`.
       */
      <T extends record.FieldValue>(options: {
        name: string,
      }): T;
    };

    /**
     * Percent-complete value for the current scheduled-script execution
     * (0–100). Appears in the % Complete column on the Scheduled Script
     * Status page. Both READ and WRITE access throw
     * `SSS_OPERATION_UNAVAILABLE` when the current script is NOT a
     * scheduled script (the Help Center notes this for write but it
     * applies to read too).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296662993}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296662993.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} SSS_OPERATION_UNAVAILABLE On read or write outside of a scheduled-script context.
     */
    percentComplete: number;

    /**
     * Returns the literal string `'runtime.Script'` — a class-name tag.
     *
     * @return The literal `'runtime.Script'`.
     */
    toString(): 'runtime.Script';

    /**
     * Returns a NARROWED snapshot of the script — only `id`,
     * `deploymentId`, `logLevel`, and `bundleIds` are included. Other
     * readable properties (`apiVersion`, `percentComplete`) are
     * intentionally OMITTED.
     *
     * @return A plain object with id, deploymentId, logLevel, and bundleIds.
     */
    toJSON(): {
      id: string,
      deploymentId: string,
      logLevel: string,
      bundleIds: string[],
    };
  }

  /**
   * Encapsulates the user session for the currently executing script.
   * Used to set/get user-defined session values that persist across
   * script executions within the same session.
   *
   * The instance is frozen + sealed + non-extensible at runtime.
   *
   * @restriction Client-side and server-side scripts
   */
  export interface Session {

    /**
     * Returns the session value for the given key, or `null` if the key
     * has not been set in this session.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296666278}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296666278.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.name The key to look up in the session store.
     * @return The stored value, or `null` if the key is not set (or was explicitly cleared with `set({value: null})`).
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.name` is missing, `null`, or empty string. Message format: `"Session.get: Missing a required argument: name"`. Note: contrary to the Help Center, a non-string `options.name` (e.g. number) does NOT throw `WRONG_PARAMETER_TYPE` — it is silently coerced and used as a lookup key.
     */
    get(options: {
      name: string,
    }): string | null;

    /**
     * Sets a session value for the given key. Setting `value: null`
     * effectively clears the value (subsequent `get` returns `null`),
     * but the key persists in the session store with a `null` entry —
     * there is no way to truly delete a session key.
     *
     * **Server-script only:** per the Help Center, `Session.set` is
     * restricted to server scripts. (Client scripts can call it but
     * the call has no effect.) `Session.get` works in both contexts.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296667139}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296667139.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.name The key to store the value under.
     * @param options.value The value to associate with the key. Non-string values are silently coerced to strings; `null` clears the value (but leaves a null entry).
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.name` is missing, `null`, or empty string. Message format: `"Session.set: Missing a required argument: name"`. Note: contrary to the Help Center, missing or `null` `options.value` does NOT throw — the call succeeds and stores a `null` value for the key.
     */
    set(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Whether the user was prompted with a two-factor-authentication
     * (TFA) challenge during this session. Read-only. Undocumented in
     * the Help Center; present at runtime.
     */
    readonly wasTfaChallenged: boolean;

    /**
     * Returns the literal string `'runtime.Session'` — a class-name tag.
     *
     * @return The literal `'runtime.Session'`.
     */
    toString(): 'runtime.Session';

    /**
     * Returns the ENTIRE session key/value store as a plain object —
     * keys are session-object keys, values are the stored values
     * (including `null` for explicitly cleared entries).
     *
     * **Security note:** the returned object contains all session
     * values from prior `set(...)` calls, including those set by
     * other scripts in the same session. Avoid logging or transmitting
     * the result if any session keys hold sensitive data.
     *
     * @return A plain object mapping all session keys to their stored values.
     */
    toJSON(): { [key: string]: string | null };
  }

  /**
   * Encapsulates the properties and preferences of the user currently
   * executing the script. Obtained via `runtime.getCurrentUser()`.
   *
   * The instance is frozen + sealed + non-extensible at runtime; all
   * property assignments throw `READ_ONLY_PROPERTY` with the
   * fully-qualified message format `"Read only property: runtime.User.<name>."`.
   *
   * @restriction Client-side and server-side scripts
   */
  export interface User {

    /**
     * The current user's email address. Empty string if the user
     * record has no email. In shopping contexts where the shopper is
     * recognized but not logged in, returns the shopper's email
     * instead of the customer record's. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296669120}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296669120.html}
     *
     * @since 2015.2
     */
    readonly email: string;

    /**
     * The current user's display name (e.g. `'Adam Smith'`). Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296669367}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296669367.html}
     *
     * @since 2015.2
     */
    readonly name: string;

    /**
     * Internal ID of the current user's location, or `0` if no
     * location is assigned. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296669502}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296669502.html}
     *
     * @since 2015.2
     */
    readonly location: number;

    /**
     * Internal ID of the current user's department, or `0` if no
     * department is assigned. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296669751}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296669751.html}
     *
     * @since 2015.2
     */
    readonly department: number;

    /**
     * Internal ID of the current user's role. For the role's
     * scriptId, use `roleId` instead. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296669948}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296669948.html}
     *
     * @since 2015.2
     */
    readonly role: number;

    /**
     * The center type (or "role center") for the current user's role
     * — e.g. `'ACCOUNTCENTER'`, `'SALES'`, `'ACCOUNTING'`,
     * `'CLASSIC'`. Determines which navigation tabs and pages NetSuite
     * displays. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296670081}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296670081.html}
     *
     * @since 2015.2
     */
    readonly roleCenter: string;

    /**
     * The scriptId of the current user's role (e.g.
     * `'customrole_ccc_admin_mcp'`). Prefer this over `role` (the
     * numeric ID) when bundling: numeric IDs can change between
     * accounts after bundle install, but scriptIds remain stable.
     * Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296670260}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296670260.html}
     *
     * @since 2015.2
     */
    readonly roleId: string;

    /**
     * Internal ID of the current user. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296670466}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296670466.html}
     *
     * @since 2019.2
     */
    readonly id: number;

    /**
     * Internal ID of the current user's subsidiary, or `0` in
     * non-OneWorld accounts. Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296670612}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296670612.html}
     *
     * @since 2015.2
     */
    readonly subsidiary: number;

    /**
     * Internal ID of the currently logged-in contact entity, or `0`
     * if the logged-in entity is not a contact (or no one is logged
     * in). Read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1554920187}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1554920187.html}
     *
     * @since 2019.1
     */
    readonly contact: number;

    /**
     * Whether the user is enabled for NetSuite Next (the next-generation
     * platform). Read-only. Undocumented in the Help Center; present at
     * runtime.
     */
    readonly isNextEnabled: boolean;

    getPermission: {

      /**
       * Returns the user's permission level for the given permission
       * internal ID (e.g. `'LIST_FILECABINET'`). The return is a NUMBER
       * matching one of the `Permission` enum values (0–4) — `0` is
       * `NONE` (no access or unknown permission ID), `4` is `FULL`.
       * Unknown or unrecognized permission IDs silently return `0`,
       * NOT an error.
       *
       * The Help Center claims this method returns a string (e.g.
       * `'FULL'`); the runtime returns a number. The type below
       * reflects runtime behavior.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296668393}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296668393.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param name The permission's internal ID.
       * @return One of the `Permission` enum values as a number (0–4).
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `name` is missing/null/empty. Message format: `"User.getPermission: Missing a required argument: name"`.
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `name` is a non-string. Message: `"Wrong parameter type: name is expected as string. "`.
       */
      (name: string): Permission | 0 | 1 | 2 | 3 | 4;

      /**
       * Returns the user's permission level for the given permission
       * internal ID (e.g. `'LIST_FILECABINET'`). The return is a NUMBER
       * matching one of the `Permission` enum values (0–4) — `0` is
       * `NONE` (no access or unknown permission ID), `4` is `FULL`.
       * Unknown or unrecognized permission IDs silently return `0`,
       * NOT an error.
       *
       * The Help Center claims this method returns a string (e.g.
       * `'FULL'`); the runtime returns a number. The type below
       * reflects runtime behavior.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296668393}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296668393.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param options
       * @param options.name The permission's internal ID.
       * @return One of the `Permission` enum values as a number (0–4).
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.name` is missing/null/empty. Message format: `"User.getPermission: Missing a required argument: name"`.
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.name` is a non-string. Message: `"Wrong parameter type: name is expected as string. "`.
       */
      (options: {
        name: string,
      }): Permission | 0 | 1 | 2 | 3 | 4;
    };

    getPreference: {

      /**
       * Returns the value of a NetSuite preference for the current user
       * (General Preferences and Accounting Preferences are exposed).
       * Returns `null` for unknown or unset preference IDs.
       *
       * If the script is configured to "Execute as Administrator" on
       * the script deployment, permission-protected preferences are
       * returned as if the user had `Permission.FULL`.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296668859}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296668859.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param name The preference's internal ID (e.g. `'DATEFORMAT'`).
       * @return The preference value as a string, or `null` if unknown/unset.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `name` is missing/null/empty. Message format: `"User.getPreference: Missing a required argument: name"`.
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `name` is a non-string. Message: `"Wrong parameter type: name is expected as string. "`.
       */
      (name: string): string | null;

      /**
       * Returns the value of a NetSuite preference for the current user
       * (General Preferences and Accounting Preferences are exposed).
       * Returns `null` for unknown or unset preference IDs.
       *
       * If the script is configured to "Execute as Administrator" on
       * the script deployment, permission-protected preferences are
       * returned as if the user had `Permission.FULL`.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296668859}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296668859.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param options
       * @param options.name The preference's internal ID (e.g. `'DATEFORMAT'`).
       * @return The preference value as a string, or `null` if unknown/unset.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.name` is missing/null/empty. Message format: `"User.getPreference: Missing a required argument: name"`.
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.name` is a non-string. Message: `"Wrong parameter type: name is expected as string. "`.
       */
      (options: {
        name: string,
      }): string | null;
    };

    /**
     * Returns the literal string `'runtime.User'` — a class-name tag.
     *
     * @return The literal `'runtime.User'`.
     */
    toString(): 'runtime.User';

    /**
     * Returns a NARROWED snapshot of the user — only `id`, `name`,
     * `email`, `location`, `department`, `role`, `roleId`,
     * `roleCenter`, `subsidiary` are included. `contact` and
     * `isNextEnabled` are intentionally OMITTED.
     *
     * @return A plain object snapshot of the user's documented properties.
     */
    toJSON(): {
      id: number,
      name: string,
      email: string,
      location: number,
      department: number,
      role: number,
      roleId: string,
      roleCenter: string,
      subsidiary: number,
    };
  }
}
