/**
 * SuiteScript translation module
 *
 * Use the N/translation module to allow SuiteScript developers to interact with NetSuite Translation
 * Collections programmatically. A Translation Collection is encapsulated in the `translation.Handle` object.
 * The `translation.Handle` object is hierarchical — each node is either another `translation.Handle` or a
 * `translation.Translator` function. Translator functions combine strings with parameters; placeholders in
 * the translation strings (e.g. `{1}`) are replaced with the values provided to the translator.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1538666156}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1538666156.html}
 *
 * @module N/translation
 * @NApiVersion 2.x
 */
interface translation {

  get: {

    /**
     * Creates a translator function for a key in the specified Translation Collection and locale.
     *
     * Returns a translator function, which is subsequently called with any specified parameters. If `locale`
     * is not specified, the method uses the current user's session locale. The `translation.Locale` enum
     * provides values for the current session locale and the company default locale; any valid locale
     * code (e.g. `'en_US'`, `'fr_FR'`) may also be passed as a string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541707388}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541707388.html}
     *
     * @governance 1 unit
     * @restriction Client-side and server-side scripts
     * @since 2019.1
     *
     * @param options
     * @param options.collection The script ID of the collection.
     * @param options.key A valid key from the collection.
     * @param [options.locale] A valid locale. Use values from `translation.Locale`, or any valid locale code string. Defaults to the current session locale.
     * @return A translator function that produces the translated string.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A `collection` or `key` parameter is missing.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_KEY The format of a specified key is invalid.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_COLLECTION The format of a specified collection is invalid.
     * @throws {error.SuiteScriptError} INVALID_LOCALE The format of a specified locale is invalid.
     * @throws {error.SuiteScriptError} TRANSLATION_KEY_NOT_FOUND A specified translation key was not found.
     */
    (options: {
      collection: string,
      key: string,
      locale?: string,
    }): translation.Translator;

    /**
     * Asynchronously creates a translator function for a key in the specified
     * Translation Collection and locale. Undocumented in the NetSuite Help
     * Center but exists at runtime — `translation.get.promise(options)`
     * accepts the same options bag as the synchronous {@link translation.get}
     * and returns a Promise that resolves to a `translation.Translator`.
     *
     * Returns a `Promise<translation.Translator>` — the resolved translator
     * function is then called with any specified parameters. If `locale` is
     * not specified, the method uses the current user's session locale. The
     * `translation.Locale` enum provides values for the current session
     * locale and the company default locale; any valid locale code (e.g.
     * `'en_US'`, `'fr_FR'`) may also be passed as a string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541707388}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541707388.html}
     *
     * @governance 1 unit
     * @restriction Client-side and server-side scripts
     * @since 2019.1
     *
     * @param options
     * @param options.collection The script ID of the collection.
     * @param options.key A valid key from the collection.
     * @param [options.locale] A valid locale. Use values from `translation.Locale`, or any valid locale code string. Defaults to the current session locale.
     * @return A promise that resolves to a translator function which produces the translated string.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A `collection` or `key` parameter is missing.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_KEY The format of a specified key is invalid.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_COLLECTION The format of a specified collection is invalid.
     * @throws {error.SuiteScriptError} INVALID_LOCALE The format of a specified locale is invalid.
     * @throws {error.SuiteScriptError} TRANSLATION_KEY_NOT_FOUND A specified translation key was not found.
     */
    promise(options: {
      collection: string,
      key: string,
      locale?: string,
    }): Promise<translation.Translator>;
  };

  load: {

    /**
     * Creates a `translation.Handle` object with translations for the specified Translation Collections and
     * locales.
     *
     * Returns a hierarchical `translation.Handle` organized by collection alias and key. You may load from
     * multiple collections in a single call but must list the specific keys to load — a maximum of 1,000
     * translation strings can be loaded per call. When multiple locales are provided, the first locale in
     * the list is used for the returned `translation.Handle`; `translation.selectLocale(options)` can then
     * be used to switch to any other loaded locale.
     *
     * **Sync error-mapping quirk:** when a specified `collection` script ID does not exist,
     * the synchronous form throws a generic `UNEXPECTED_ERROR` instead of the documented
     * `INVALID_TRANSLATION_COLLECTION`. Use `.promise()` instead to receive the correct error code.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541708603}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541708603.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2019.1
     *
     * @param options
     * @param options.collections A list of collection descriptors to load.
     * @param options.collections[].alias An alias to identify the collection. The script uses this alias to access the collection on the returned `Handle`.
     * @param options.collections[].collection The script ID of the collection to load.
     * @param options.collections[].keys A list of translation keys from the collection to load.
     * @param [options.locales] A list of locales to load the collection in. Use values from `translation.Locale`, or any valid locale code strings.
     * @return A hierarchical Handle containing the requested translations.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE One of the array parameters (`options.collections`, `options.collections.keys`, or `options.locales`) is not an array.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A `collection` or `key` parameter is missing.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_KEY The format of a specified key is invalid.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_COLLECTION The format of a specified collection is invalid. *(Sync form may mask this as `UNEXPECTED_ERROR` — use `.promise()` for the specific code.)*
     * @throws {error.SuiteScriptError} INVALID_LOCALE The format of a specified locale is invalid.
     * @throws {error.SuiteScriptError} INVALID_ALIAS The format of a specified alias is invalid.
     */
    (options: {
      collections: {
        alias: string,
        collection: string,
        keys: string[],
      }[],
      locales?: string[],
    }): translation.Handle;

    /**
     * Asynchronously creates a `translation.Handle` object with translations
     * for the specified Translation Collections and locales. Undocumented
     * in the NetSuite Help Center but exists at runtime —
     * `translation.load.promise(options)` accepts the same options bag as
     * the synchronous {@link translation.load} and returns a Promise that
     * resolves to a `translation.Handle`.
     *
     * Returns a `Promise<translation.Handle>` — the resolved handle is
     * organized hierarchically by collection alias and key. You may load
     * from multiple collections in a single call but must list the specific
     * keys to load — a maximum of 1,000 translation strings can be loaded
     * per call. When multiple locales are provided, the first locale in
     * the list is used for the returned `translation.Handle`;
     * `translation.selectLocale(options)` can then be used to switch to
     * any other loaded locale.
     *
     * Unlike the sync form, the promise variant surfaces the documented
     * error codes correctly — when a specified `collection` script ID does
     * not exist, the sync form throws a generic `UNEXPECTED_ERROR`, but
     * `.promise()` throws the documented `INVALID_TRANSLATION_COLLECTION`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541708603}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541708603.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2019.1
     *
     * @param options
     * @param options.collections A list of collection descriptors to load.
     * @param options.collections[].alias An alias to identify the collection. The script uses this alias to access the collection on the returned `Handle`.
     * @param options.collections[].collection The script ID of the collection to load.
     * @param options.collections[].keys A list of translation keys from the collection to load.
     * @param [options.locales] A list of locales to load the collection in. Use values from `translation.Locale`, or any valid locale code strings.
     * @return A promise that resolves to a hierarchical `Handle` containing the requested translations.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE One of the array parameters (`options.collections`, `options.collections.keys`, or `options.locales`) is not an array.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A `collection` or `key` parameter is missing.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_KEY The format of a specified key is invalid.
     * @throws {error.SuiteScriptError} INVALID_TRANSLATION_COLLECTION The format of a specified collection is invalid. (The promise variant reports this code correctly, unlike the sync form which masks it as `UNEXPECTED_ERROR`.)
     * @throws {error.SuiteScriptError} INVALID_LOCALE The format of a specified locale is invalid.
     * @throws {error.SuiteScriptError} INVALID_ALIAS The format of a specified alias is invalid.
     */
    promise(options: {
      collections: {
        alias: string,
        collection: string,
        keys: string[],
      }[],
      locales?: string[],
    }): Promise<translation.Handle>;
  };

  /**
   * Creates a `translation.Handle` object in the specified locale from an existing `translation.Handle`
   * object.
   *
   * The returned `Handle` contains the same translation strings as the input, but in the requested locale.
   * Before you can select a locale, it must first be loaded via the `locales` parameter of
   * `translation.load(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541708921}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541708921.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.handle The `translation.Handle` object to select a locale for.
   * @param options.locale The locale to select. Use values from `translation.Locale`, or any valid locale code string.
   * @return A Handle containing the same strings in the selected locale.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A `handle` or `locale` parameter is missing.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The `options.handle` parameter is not a `translation.Handle` object. In practice, passing a plain object first triggers a bare `TypeError` from internal `.toJSON()` access rather than this documented code.
   * @throws {error.SuiteScriptError} INVALID_LOCALE The specified `translation.Handle` object uses an unknown or unsupported locale.
   * @throws {error.SuiteScriptError} TRANSLATION_HANDLE_IS_IN_AN_ILLEGAL_STATE The specified `translation.Handle` object is in an illegal state.
   */
  selectLocale(options: {
    handle: translation.Handle,
    locale: string,
  }): translation.Handle;
}

declare namespace translation {

  /**
   * Holds string values for supported locales for Translation Collections. Use this object to set the
   * locale argument to `translation.get(options)`, `translation.selectLocale(options)`, and
   * `translation.load(options)`.
   *
   * **Runtime values are dynamic:** `Locale.CURRENT` and `Locale.COMPANY_DEFAULT`
   * resolve at runtime to the actual locale string (e.g., `'en_US'`), NOT to the literal strings
   * `'CURRENT'` and `'COMPANY_DEFAULT'`. The runtime object also includes one additional member per
   * company-enabled locale, keyed by locale code (e.g., `Locale.en_US === 'en_US'`,
   * `Locale.fr_FR === 'fr_FR'`); the test account had 61 such members in addition to `CURRENT` and
   * `COMPANY_DEFAULT`. Because the company-enabled set cannot be enumerated at design time, this
   * declaration uses an index signature instead of an `enum`; any valid locale code may also be
   * passed as a plain string where a locale is expected.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541709045}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541709045.html}
   *
   * @since 2019.1
   */
  const Locale: {
    /** The current user's session locale, resolved at runtime to the actual locale code (e.g., `'en_US'`). */
    readonly CURRENT: string;
    /** The company's default locale, resolved at runtime to the actual locale code. */
    readonly COMPANY_DEFAULT: string;
    /** All company-enabled locales appear as additional keys at runtime; both key and value equal the locale code. */
    readonly [locale: string]: string;
  };

  /**
   * Encapsulates a Translation Collection for a locale.
   *
   * Use `translation.load(options)` to create a Handle with translations for specified collections and
   * locales. Use `translation.selectLocale(options)` to create a Handle in a different (already loaded)
   * locale from an existing Handle.
   *
   * A Handle is hierarchical. When built via `translation.load`, its first-level keys are the aliases
   * defined in the load call; within each alias, keys are the translation keys from the collection.
   * Every leaf node is callable as a translator function (returning the translated string with any
   * placeholders substituted); the type signature reflects this by making every node callable. Calling
   * an intermediate (non-leaf) node is not supported at runtime.
   *
   * **Caveat:** the root Handle (and likely all intermediate non-leaf nodes) is NOT
   * callable at runtime: `typeof handle === 'object'`, and `handle({...})` throws
   * `TypeError: handle is not a function`. Only leaf nodes (Translator functions, reached via the alias
   * and key path) are callable. The current self-callable interface is a JSDoc-ergonomics choice that
   * permits `handle.alias.KEY()` to type-check; consumers should not call the root or intermediate
   * Handle nodes.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541705125}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541705125.html}
   *
   * @since 2019.1
   */
  interface Handle {
    /**
     * Returns the translated string for this leaf node. If the translation contains parameter
     * placeholders (e.g. `{1}`, `{2}`), provide the corresponding values via `options.params`.
     *
     * @param [options]
     * @param [options.params] The parameter values to inject into the translation string's placeholders (by 1-based position).
     * @return The translated string with any placeholders substituted.
     */
    (options?: {
      params: (string | number | boolean)[],
    }): string;

    [key: string]: Handle;
  }

  /**
   * Represents a translator function that returns translated strings. The translated strings include
   * variables that are passed as parameters to the translator function. `translation.Translator` is what
   * `translation.get(options)` returns; it is a single callable (not hierarchical).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1541706219}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1541706219.html}
   *
   * @since 2019.1
   */
  interface Translator {

    /**
     * Returns the translated string. If the translation contains parameter placeholders (e.g. `{1}`,
     * `{2}`), provide the corresponding values via `options.params`.
     *
     * @param [options]
     * @param [options.params] The parameter values to inject into the translation string's placeholders (by 1-based position).
     * @return The translated string with any placeholders substituted.
     */
    (options?: {
      params: (string | number | boolean)[],
    }): string;
  }
}
