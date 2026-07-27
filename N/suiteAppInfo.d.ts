/// <reference path="./error.d.ts" />

/**
 * SuiteScript suiteAppInfo module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_160236086332}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_160236086332.html}
 *
 * @module N/suiteAppInfo
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface suiteAppInfo {

  isBundleInstalled: {

    /**
     * Returns `true` if a bundle with the specified ID is installed in the account, `false`
     * otherwise. Does NOT throw on non-existent bundle IDs — those just return `false`.
     * Negative numbers, zero, and floats are accepted without complaint and also return `false`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236055067}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236055067.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.bundleId The numeric ID of the bundle. Must be a number — string-form numbers (e.g. `'585474'`) are rejected with `SSS_INVALID_TYPE_ARG` (Help Center docs are imprecise here; the runtime is number-only).
     * @return `true` if installed, `false` otherwise.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.bundleId`, or its value is missing/`null`/`undefined`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.bundleId` is a non-empty string, array, or plain object (numbers including 0, negatives, and floats are accepted without error).
     * @throws {TypeError} (Java-layer leak) If `options.bundleId` is an empty string `''`, the underlying Java method (`com.netledger.app.common.scripting.api.suiteAppInfo.SuiteAppInfoApi.isBundleInstalled`) crashes before the string-validation layer, producing a raw `TypeError` instead of an SSS_* code.
     */
    (options: {
      bundleId: number,
    }): boolean;

    /**
     * Returns `true` if a bundle with the specified ID is installed in the account, asynchronously.
     * Does NOT throw on non-existent bundle IDs — those return `false`. Negative numbers, zero,
     * and floats are accepted without complaint and also return `false`. The Help Center documents
     * `isBundleInstalled` as a sync method only and does NOT mention the `.promise()` variant, but
     * it exists at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236055067}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236055067.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.bundleId The numeric ID of the bundle.
     * @return Promise resolving to `true` if installed, `false` otherwise.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.bundleId`, or its value is missing/`null`/`undefined`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.bundleId` is a non-empty string, array, or plain object (numbers including 0, negatives, and floats are accepted without error).
     * @throws {TypeError} (Java-layer leak) If `options.bundleId` is an empty string `''`, the underlying Java method crashes before the string-validation layer, producing a raw `TypeError` instead of an SSS_* code.
     */
    promise(options: {
      bundleId: number,
    }): Promise<boolean>;
  };

  isSuiteAppInstalled: {

    /**
     * Returns `true` if an SDF SuiteApp with the specified ID is installed in the account, `false`
     * otherwise. Does NOT throw on non-existent SuiteApp IDs — those return `false`. Empty strings
     * are also accepted and return `false`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236079756}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236079756.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.suiteAppId The SuiteApp's reverse-domain ID (e.g. `'com.scscloud.cccadamsmithtools'`). Must be a string — numeric IDs are rejected with `SSS_INVALID_TYPE_ARG`.
     * @return `true` if installed, `false` otherwise.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.suiteAppId`, or its value is missing/`null`/`undefined`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.suiteAppId` is a number, array, or plain object.
     */
    (options: {
      suiteAppId: string,
    }): boolean;

    /**
     * Returns `true` if an SDF SuiteApp with the specified ID is installed, asynchronously.
     * Does NOT throw on non-existent SuiteApp IDs — those return `false`. Empty strings are
     * also accepted and return `false`. The Help Center documents `isSuiteAppInstalled` as a
     * sync method only and does NOT mention the `.promise()` variant, but it exists at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236079756}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236079756.html}
     *
     * @governance 5 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.suiteAppId The SuiteApp's reverse-domain ID.
     * @return Promise resolving to `true` if installed, `false` otherwise.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.suiteAppId`, or its value is missing/`null`/`undefined`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.suiteAppId` is a number, array, or plain object.
     */
    promise(options: {
      suiteAppId: string,
    }): Promise<boolean>;
  };

  listBundlesContainingScripts: {

    /**
     * For each script ID supplied, returns the list of bundle IDs containing that script. Scripts
     * not in any bundle are returned with an empty array (`[]`).
     *
     * **Important parameter name:** the runtime accepts `scriptIds`, NOT `scriptsIds` (the Help
     * Center docs say `scriptsIds` — with a doubled `s` — but that's a docs typo; using the
     * documented spelling throws `SSS_MISSING_REQD_ARGUMENT: ...options.scriptIds`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236064276}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236064276.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.scriptIds Array of script IDs (e.g. `['customscript_my_ue', 'customscript_other']`). Every value must be a string — `WRONG_PARAMETER_TYPE` is thrown if any element is a non-string.
     * @return Object whose keys are the requested script IDs and whose values are arrays of bundle IDs containing each. Returns `[]` for scripts not in any bundle.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.scriptIds`, or its value is missing/`null`/empty array/non-array (a bare string is also rejected here, since the runtime requires array type before checking contents).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.scriptIds` contains any non-string element. Error message: `"Wrong parameter type: options.scriptIds is expected as String[]."`.
     */
    <ID extends string>(options: {
      scriptIds: ID[],
    }): { [key in ID]: number[] };

    /**
     * Asynchronous variant. For each script ID supplied, returns the list of bundle IDs
     * containing that script. The Help Center documents `listBundlesContainingScripts` as a
     * sync method only and does NOT mention the `.promise()` variant, but it exists at runtime.
     *
     * Parameter name is `scriptIds` (Help Center says `scriptsIds`; docs typo).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236064276}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236064276.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.scriptIds Array of script IDs.
     * @return Promise resolving to a `{scriptId: bundleIds[]}` map.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.scriptIds`, or its value is missing/`null`/empty array/non-array (a bare string is also rejected here, since the runtime requires array type before checking contents).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.scriptIds` contains any non-string element. Error message: `"Wrong parameter type: options.scriptIds is expected as String[]."`.
     */
    promise<ID extends string>(options: {
      scriptIds: ID[],
    }): Promise<{ [key in ID]: number[] }>;
  };

  listSuiteAppsContainingScripts: {

    /**
     * For each script ID supplied, returns the SDF SuiteApp ID containing that script (one
     * SuiteApp per script at most), or `null` if the script is not in any SuiteApp.
     *
     * **Important parameter name:** the runtime accepts `scriptIds`, NOT `scriptsIds` (the Help
     * Center docs say `scriptsIds` — with a doubled `s` — but that's a docs typo; using the
     * documented spelling throws `SSS_MISSING_REQD_ARGUMENT: ...options.scriptIds`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236084150}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236084150.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.scriptIds Array of script IDs. Every value must be a string.
     * @return Object whose keys are the requested script IDs and whose values are the containing SuiteApp ID (string) or `null` if not in any SuiteApp.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.scriptIds`, or its value is missing/`null`/empty array/non-array (a bare string is also rejected here, since the runtime requires array type before checking contents).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.scriptIds` contains any non-string element. Error message: `"Wrong parameter type: options.scriptIds is expected as String[]."`.
     */
    <ID extends string>(options: {
      scriptIds: ID[],
    }): { [key in ID]: string | null };

    /**
     * Asynchronous variant. Help Center documents the sync method only; this `.promise()`
     * variant exists at runtime but is undocumented.
     *
     * Parameter name is `scriptIds` (Help Center says `scriptsIds`; docs typo).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236084150}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236084150.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @param options
     * @param options.scriptIds Array of script IDs.
     * @return Promise resolving to a `{scriptId: suiteAppId|null}` map.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.scriptIds`, or its value is missing/`null`/empty array/non-array (a bare string is also rejected here, since the runtime requires array type before checking contents).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.scriptIds` contains any non-string element. Error message: `"Wrong parameter type: options.scriptIds is expected as String[]."`.
     */
    promise<ID extends string>(options: {
      scriptIds: ID[],
    }): Promise<{ [key in ID]: string | null }>;
  };

  listInstalledBundles: {

    /**
     * Returns an array of `Bundle` objects representing every successfully installed bundle in
     * the account. Each bundle includes id, name, version, install/update timestamps, publisher
     * info, and the user who performed the install. Bundles installed by NetSuite system
     * processes may have a negative `installedBy.id` (e.g. `-5` for the system user).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236062593}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236062593.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @return Array of `Bundle` objects. Returns an empty array if no bundles are installed.
     */
    (): suiteAppInfo.Bundle[];

    /**
     * Asynchronous variant. Returns an array of `Bundle` objects representing every successfully
     * installed bundle in the account. The Help Center documents `listInstalledBundles` as a sync
     * method only and does NOT mention the `.promise()` variant, but it exists at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236062593}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236062593.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @return Promise resolving to an array of `Bundle` objects.
     */
    promise(): Promise<suiteAppInfo.Bundle[]>;
  };

  listInstalledSuiteApps: {

    /**
     * Returns an array of `SuiteApp` objects representing every successfully installed SDF
     * SuiteApp in the account. Each SuiteApp includes appId (reverse-domain like
     * `com.scscloud.cccadamsmithtools`), publisherId, name, version, install/update timestamps,
     * and the user who performed the install.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236082257}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236082257.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @return Array of `SuiteApp` objects. Returns an empty array if no SuiteApps are installed.
     */
    (): suiteAppInfo.SuiteApp[];

    /**
     * Asynchronous variant. Returns an array of `SuiteApp` objects representing every
     * successfully installed SDF SuiteApp in the account. The Help Center documents
     * `listInstalledSuiteApps` as a sync method only and does NOT mention the `.promise()`
     * variant, but it exists at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236082257}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236082257.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2021.1
     *
     * @return Promise resolving to an array of `SuiteApp` objects.
     */
    promise(): Promise<suiteAppInfo.SuiteApp[]>;
  };
}

declare namespace suiteAppInfo {

  /**
   * Identifies the publisher of an installed bundle.
   */
  export interface Publisher {

    /**
     * NetSuite account identifier of the publisher (e.g. `'TSTDRV1588309'`). String, not numeric —
     * publisher IDs follow NetSuite's account ID format.
     */
    id: string;

    /**
     * Display name of the publisher.
     */
    name: string;
  }

  /**
   * Identifies the user who installed a bundle or SuiteApp.
   */
  export interface InstalledBy {

    /**
     * Internal numeric ID of the installer. May be negative for NetSuite system users (e.g. `-5`
     * for system-initiated installs).
     */
    id: number;

    /**
     * Display name of the installer.
     */
    name: string;
  }

  /**
   * Metadata for an installed bundle. Returned from `suiteAppInfo.listInstalledBundles`.
   */
  export interface Bundle {

    /**
     * Numeric bundle ID.
     */
    id: number;

    /**
     * Display name of the bundle.
     */
    name: string;

    /**
     * Version string (e.g. `'1.0.0'`).
     */
    version: string;

    /**
     * Description of the bundle. `null` if the publisher did not supply one.
     */
    description: string | null;

    /**
     * Source environment the bundle was installed from (e.g. `'Production'`).
     */
    installedFrom: string;

    /**
     * `true` if the bundle is managed (auto-updated by the publisher), `false` otherwise.
     */
    isManaged: boolean;

    /**
     * Date the bundle was originally installed.
     */
    dateInstalled: Date;

    /**
     * Date the bundle was last updated, or `null` if never updated since installation.
     */
    dateLastUpdated: Date | null;

    /**
     * Publisher metadata.
     */
    publisher: Publisher;

    /**
     * User who installed the bundle.
     */
    installedBy: InstalledBy;
  }

  /**
   * Metadata for an installed SDF SuiteApp. Returned from
   * `suiteAppInfo.listInstalledSuiteApps`.
   */
  export interface SuiteApp {

    /**
     * Reverse-domain SuiteApp identifier (e.g. `'com.scscloud.cccadamsmithtools'`).
     */
    appId: string;

    /**
     * Reverse-domain publisher identifier (e.g. `'com.scscloud'`, `'com.netsuite'`).
     */
    publisherId: string;

    /**
     * Display name of the SuiteApp.
     */
    name: string;

    /**
     * Version string.
     */
    version: string;

    /**
     * Description of the SuiteApp. Frequently `null` — many SuiteApps do not surface a
     * description through this API even if one exists in the SuiteApp metadata.
     */
    description: string | null;

    /**
     * Date the SuiteApp was originally installed.
     */
    dateInstalled: Date;

    /**
     * Date the SuiteApp was last updated, or `null` if never updated since installation.
     */
    dateLastUpdated: Date | null;

    /**
     * User who installed the SuiteApp.
     */
    installedBy: InstalledBy;
  }
}
