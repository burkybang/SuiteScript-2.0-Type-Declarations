/// <reference path="./error.d.ts" />

/**
 * SuiteScript cache module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642573343}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642573343.html}
 *
 * @module N/cache
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface cache {

  getCache: {

    /**
     * Returns a `Cache` object for a named, scoped cache. If a cache with the given name and
     * scope does not exist, the system creates and returns a new one. Each call returns a
     * fresh `Cache` handle — successive calls with identical `name` and `scope` do NOT return
     * the same object reference, but they access the same underlying cache storage.
     *
     * The `scope` parameter is matched case-insensitively at the input boundary (`'private'`,
     * `'Private'`, `'PRIVATE'` all resolve identically), but the returned `Cache.scope`
     * property is always uppercase.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642627983}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642627983.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2016.2
     *
     * @param options
     * @param options.name The cache name. Maximum 1 KB.
     * @param [options.scope=cache.Scope.PRIVATE] The cache scope. Determines which scripts can access entries in the cache. Defaults to `PRIVATE`.
     * @return A `Cache` handle for the named cache.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/`null`, or if `options.name` is `null`, `undefined`, or an empty string. Error message format: `"cache.getCache: Missing a required argument: options.name"`.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.name` is missing from the bag entirely (different from `null`) or is a non-string type (e.g. number). Error message format: `"Wrong parameter type: options.name is expected as string."`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.name` exceeds 1 KB. Error message: `"Input value name cannot exceed 1 KB."`.
     * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `options.scope` is a string that doesn't match any `Scope` value (case-insensitive comparison) or a non-string type (e.g. number). Generic catch-all message: `"An unexpected error has occurred."` (the runtime doesn't surface a more specific error for this case).
     */
    (options: {
      name: string,
      scope?: cache.Scope | `${cache.Scope}`,
    }): cache.Cache;

    /**
     * Returns a `Cache` object for a named, scoped cache. Positional-form overload of
     * {@link cache.getCache}; equivalent to `cache.getCache({name, scope})`. If a cache
     * with the given name and scope does not exist, the system creates and returns a new
     * one. Each call returns a fresh `Cache` handle — successive calls with identical
     * `name` and `scope` do NOT return the same object reference, but they access the
     * same underlying cache storage.
     *
     * The `scope` parameter is matched case-insensitively at the input boundary (`'private'`,
     * `'Private'`, `'PRIVATE'` all resolve identically), but the returned `Cache.scope`
     * property is always uppercase.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642627983}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642627983.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2016.2
     *
     * @param name The cache name. Maximum 1 KB.
     * @param [scope=cache.Scope.PRIVATE] The cache scope. Determines which scripts can access entries in the cache. Defaults to `PRIVATE`.
     * @return A `Cache` handle for the named cache.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `name` is `null`, `undefined`, or an empty string. Error message format: `"cache.getCache: Missing a required argument: options.name"` (uses `options.name` wording even when called positionally).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `name` is a non-string type (e.g. number). Error message format: `"Wrong parameter type: options.name is expected as string."`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `name` exceeds 1 KB. Error message: `"Input value name cannot exceed 1 KB."`.
     * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `scope` is a string that doesn't match any `Scope` value (case-insensitive comparison) or a non-string type (e.g. number). Generic catch-all message: `"An unexpected error has occurred."` (the runtime doesn't surface a more specific error for this case).
     */
    (name: string, scope?: cache.Scope | `${cache.Scope}`): cache.Cache;
  };
}

declare namespace cache {

  /**
   * Enum of cache scopes — controls which scripts can access entries in a cache.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4655722738}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4655722738.html}
   *
   * @since 2016.2
   */
  export enum Scope {

    /**
     * Cache entries are only accessible to the current script. This is the default scope.
     */
    PRIVATE = 'PRIVATE',

    /**
     * Cache entries are accessible to scripts in the same bundle, or to all scripts not in
     * any bundle if the cache was created outside a bundle context.
     */
    PROTECTED = 'PROTECTED',

    /**
     * Cache entries are accessible to any server script running in the account.
     */
    PUBLIC = 'PUBLIC',
  }

  /**
   * A named cache for storing the results of expensive (in terms of time or governance)
   * computations. Returned from `cache.getCache`. Cache entries are stored as strings;
   * non-string values are automatically `JSON.stringify`d on put.
   *
   * The object itself is NOT frozen or sealed — arbitrary properties can be added to a
   * `Cache` instance, though they have no effect on the underlying cache. The `name` and
   * `scope` properties ARE read-only (configurable: false; setter throws `READ_ONLY_PROPERTY`;
   * `Object.defineProperty` throws `TypeError: Cannot redefine property`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642656915}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642656915.html}
   *
   * @since 2016.2
   */
  interface Cache {

    /**
     * The name of the cache.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642698188}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642698188.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY On any assignment attempt. Error message format: `"Read only property: name."`. The property has a setter function, but the setter always throws.
     */
    readonly name: string;

    /**
     * The scope of the cache. Always returned in uppercase regardless of the case used to
     * create the cache via `getCache`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642698254}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642698254.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY On any assignment attempt. Error message format: `"Read only property: scope."`.
     */
    readonly scope: Scope | `${Scope}`;

    /**
     * Retrieves a value from the cache. Returns the cached string if present. If absent and
     * a `loader` is provided, calls the loader to generate the value, caches it (after
     * `JSON.stringify` if the loader returns a non-string), and returns the cached string.
     * If absent and no `loader` is provided, returns `null`.
     *
     * The `loader` callback receives `{key}` as its single argument (allowing a key-agnostic
     * loader to be defined once and used for multiple keys). If the loader returns `null` or
     * `undefined`, the cache is NOT populated and `get` returns `null`. If the loader throws,
     * the error propagates to the caller unchanged.
     *
     * A `loader` may also be supplied as a string referring to a deployed loader script, but
     * this form is undocumented and frequently fails silently (returns `null` without
     * caching) — prefer passing a function.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642661440}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642661440.html}
     *
     * @governance 1 unit on cache hit OR cache miss without a loader; 2 units on cache miss with a loader (the loader is called and its result is cached). Help Center claims "2 units if the loader function is used" without distinguishing — the runtime actually bills 1 unit for any miss without a loader, including the `null`-returning case.
     * @restriction Server-side scripts only
     * @since 2016.2
     *
     * @param options
     * @param options.key The cache key. Must be a non-empty string; maximum 4 KB. Number keys are silently accepted and coerced to string. Cannot be `null` or `undefined`.
     * @param [options.loader] Function called on cache miss to generate the value. Receives `{key: keyName}`. Return value: any (auto-stringified by `JSON.stringify` if non-string). A string form referring to a deployed loader script is also accepted but typically fails silently (returns `null` without caching) — prefer passing a function.
     * @param [options.ttl] Time To Live in seconds. Maximum lifetime of the loaded value in the cache. Minimum 300 (5 minutes); no maximum; `0` is treated as "no limit". Only applies when the `loader` populates the cache — has no effect on cache hits.
     * @return The cached string value, the stringified loader result, or `null` if the key is missing and no loader is supplied (or the loader returns `null`/`undefined`).
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.key` is missing, `null`, `undefined`, or an empty string. Error message format: `"get: Missing a required argument: key"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.ttl` is less than 300 (excluding `0`), or is a non-number. Error message formats: `"Input value ttl must be greater than or equal to 300."` for out-of-range numbers; `"You have entered an invalid type argument: {value}"` for non-numbers.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.key` exceeds 4 KB. Error message: `"Input value key cannot exceed 4 KB."`.
     * @throws {TypeError} (JS-layer leak) If `options` is missing, `null`, or `undefined`, the JS implementation crashes with `"Cannot read property 'key' of undefined/null"` before any SSS_* check fires.
     * @throws {Error} (loader propagation) If the `loader` function throws, the original error is re-thrown unchanged to the caller of `get`. The error is NOT wrapped as a `SuiteScriptError`.
     */
    get(options: {
      key: string,
      loader?: ((context: { key: string }) => unknown) | string,
      ttl?: number,
    }): string | null;

    /**
     * Removes a value from the cache. Idempotent — removing a non-existent key does not
     * throw. When values in the cache were derived from a record, the associated cache keys
     * should be invalidated via a beforeSubmit User Event Script on the source record to
     * prevent stale reads.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642660820}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642660820.html}
     *
     * @governance 1 unit
     * @restriction Server-side scripts only
     * @since 2016.2
     *
     * @param options
     * @param options.key The cache key. Must be a non-empty string. Removing a key that does not exist is a no-op (no error).
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.key` is `null`, `undefined`, or missing from the options bag. Error message format: `"remove: Missing a required argument: key"`.
     * @throws {TypeError} (JS-layer leak) If `options` is missing, `null`, or `undefined`, the JS implementation crashes with `"Cannot read property 'hasOwnProperty' of undefined/null"` before any SSS_* check fires. (Note the different property name in the leak message than `get`/`put` — `remove` uses `hasOwnProperty` as the access point.)
     */
    remove(options: {
      key: string,
    }): void;

    /**
     * Stores a value in the cache. If the value is not a string, the system calls
     * `JSON.stringify` on it before storing. The maximum value size is 512 KB at runtime
     * (Help Center claims 500 KB — the runtime accepts up to 512 KB).
     *
     * For most use cases, prefer `get` with a `loader` over `put` — the loader pattern
     * combines the lookup and the put into a single atomic operation that also handles
     * cache misses correctly.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642661313}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642661313.html}
     *
     * @governance 1 unit
     * @restriction Server-side scripts only
     * @since 2016.2
     *
     * @param options
     * @param options.key The cache key. Must be a non-empty string; maximum 4 KB.
     * @param options.value The value to cache. Strings are stored verbatim; numbers, booleans, objects, and arrays are `JSON.stringify`d before storage. Cannot be `null` or `undefined` — both throw `SSS_MISSING_REQD_ARGUMENT`. Maximum 512 KB after stringification.
     * @param [options.ttl] Time To Live in seconds. Minimum 300 (5 minutes); no maximum; `0` is treated as "no limit". Default is no limit when omitted.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.key` or `options.value` is missing, `null`, or `undefined`. Error message format: `"put: Missing a required argument: key"` or `"put: Missing a required argument: value"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.ttl` is less than 300 (excluding `0`), negative, or a non-number; or if `options.key` exceeds 4 KB; or if `options.value` exceeds 512 KB. Error message formats: `"Input value ttl must be greater than or equal to 300."`, `"You have entered an invalid type argument: {value}"`, `"Input value key cannot exceed 4 KB."`, `"Input value value cannot exceed 512 KB."`.
     * @throws {TypeError} (JS-layer leak) If `options` is missing, `null`, or `undefined`, the JS implementation crashes with `"Cannot read property 'key' of undefined/null"` before any SSS_* check fires.
     */
    put(options: {
      key: string,
      value: string | number | boolean | object | (string | number | boolean | object)[],
      ttl?: number,
    }): void;

    /**
     * Returns a plain-object serialization of this `Cache`. Used implicitly by
     * `JSON.stringify(cache)`. The returned object contains the `name` and `scope` data
     * properties; methods are not included.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @return A plain object with the cache's `name` and `scope`.
     *
     * @since 2016.2
     */
    toJSON(): {
      name: string,
      scope: string,
    };

    /**
     * Returns the JSON-stringified form of this `Cache` (e.g. `'{"name":"myCache","scope":"PRIVATE"}'`).
     * Unlike most NetSuite class objects (which return a literal class-identifier string from
     * `toString`), `Cache.toString()` returns the same JSON as `JSON.stringify(cache)`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @return The JSON-stringified form of `toJSON()`.
     *
     * @since 2016.2
     */
    toString(): string;
  }
}
