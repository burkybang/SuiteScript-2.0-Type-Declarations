/**
 * SuiteScript cache module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642573343}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642573343.html}
 *
 * @module N/cache
 * @NApiVersion 2.x
 */
interface cache {

  /**
   * Get a named, scoped cache
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642627983}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642627983.html}
   *
   * @param options
   * @param options.name The cache name. If a cache does not exist with the given name it will be created and returned. The maximum size for the cache name is 1K.
   * @param [options.scope] The cache scope (optional). The default cache scope is SCRIPT.
   */
  getCache(options: {
    name: string,
    scope?: string,
  }): cache.Cache;
}

declare namespace cache {

  /**
   * Defines all possible cache scopes
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4655722738}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4655722738.html}
   *
   * - PRIVATE - (Default) Cache entries are only accessible to the current script
   * - PROTECTED - Cache entries are only accessible to scripts in the same bundle or not in bundle
   * - PUBLIC - Cache entries are accessible to any script running in your account
   */
  export enum Scope {
    PRIVATE = 'PRIVATE',
    PROTECTED = 'PROTECTED',
    PUBLIC = 'PUBLIC',
  }

  /**
   * Named Cache for caching the result of expensive (in terms of time or governance) computations
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642656915}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642656915.html}
   *
   * @protected
   * @constructor
   */
  interface Cache {

    /**
     * The name of the cache
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642698188}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642698188.html}
     *
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly name: string;

    /**
     * The scope of the cache
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642698254}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642698254.html}
     *
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly scope: string;

    /**
     * Get a value from the cache. If the key is not present, the loader will be called to generate the value which will
     * then be cached and returned. If the value returned by the loader is not a string, JSON.stringify() will be called
     * on the value before it is placed in the cache.
     * The maximum size for the cache key is 4kb and 500kb for the value returned by the loader.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642661440}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642661440.html}
     *
     * @governance 1 unit for cache hit and 2 units for cache miss
     *
     * @param options
     * @param options.key The cache key used to identify the value.
     * @param [options.loader] A function which will return the value if it is not present in the cache.
     * The callback signature for the loader is loader({ key : key }), which allows the loader to be pre-defined in a key-agnostic way (used to get different values for the same cache type, for example).
     * @param [options.ttl] The Time To Live (aka TTL) duration in seconds. The cache entry will be
     * automatically purged when the TTL expires, if it is still in the cache.
     */
    get(options: {
      key: string,
      loader?: Function,
      ttl?: number,
    }): string;

    /**
     * Remove a value from the cache. If values in the cache were retrieved from a record, the associated cache keys
     * should be invalidated by a beforeSubmit UserEvent Script when the record is updated in order to prevent stale
     * values.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642660820}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642660820.html}
     *
     * @governance 1 unit
     *
     * @param options
     * @param options.key The cache key used to identify the value.
     */
    remove(options: {
      key: string,
    }): void;

    /**
     * Put a value into the cache. Note that "get" can be called with a loader as simpler alternative. If the value
     * is not a string, JSON.stringify() will be called on the value before it is placed in the cache.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642661313}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4642661313.html}
     *
     * @governance 1 unit
     *
     * @param options
     * @param options.key The cache key used to identify the value.
     * @param options.value The value to cache.
     * @param [options.ttl] The Time To Live (aka TTL) duration in seconds. The cache entry will be automatically purged when the TTL expires, if it is still in the cache. The default TTL is no limit. The minimum value is 300 seconds (5 minutes).
     */
    put(options: {
      key: string,
      value: any,
      ttl?: number,
    }): void;
  }
}