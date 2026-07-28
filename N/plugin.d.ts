/// <reference path="./error.d.ts" />

/**
 * SuiteScript plugin module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4558176297}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4558176297.html}
 *
 * @module N/plugin
 * @NApiVersion 2.x
 */
interface plugin {

  /**
   * Returns the script IDs of implementations of the given custom plug-in type.
   *
   * Returns an empty array when the executing script does not have access to a custom plug-in type
   * with the given script ID. "Access" here means the executing script has declared a dependency on
   * the plug-in type (e.g. via its deployment); a plug-in type that exists in the account but is
   * unreachable from the current script context will produce an empty result, NOT an error.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4558224168}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4558224168.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2016.1
   *
   * @param options
   * @param options.type Script ID of the custom plug-in type.
   * @param [options.includeDefault=true] True if the default implementation should be included in the list.
   * @return List of script IDs of the custom plug-in implementations.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is `null`/`undefined`, or `options.type` is `null` or an empty string.
   * @throws {TypeError} Undocumented Java-layer leak: if `options.type` is omitted entirely (`undefined`) or set to a value not coercible to a Java string (plain object, array), the underlying `findCustomPluginImplementations` call fails with a string-coercion `TypeError`. Numbers and other primitives are silently coerced to strings instead.
   */
  findImplementations(options: {
    type: string,
    includeDefault?: boolean,
  }): string[];

  /**
   * Instantiates an implementation of the given custom plug-in type. If no `options.implementation`
   * is provided, returns the implementation currently selected in the UI (Manage Plug-ins page),
   * or the plug-in type's default implementation if none is selected.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4558229654}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4558229654.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2016.1
   *
   * @param options
   * @param options.type Script ID of the custom plug-in type.
   * @param [options.implementation] Script ID of the custom plug-in implementation. When omitted, the currently-selected or default implementation is loaded.
   * @return An object implementing the custom plug-in type. Its own properties are exactly the plug-in type's methods; the SuiteScript layer adds no standard wrapper properties, and the prototype is plain `Object`. Callers should supply the type parameter `T` to describe the plug-in's interface; otherwise the result is typed as `{ [key: string]: any }` (the shape is defined entirely by the plug-in type and is unknown to this module).
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is `null`/`undefined`, or `options.type` is `null` or an empty string.
   * @throws {error.SuiteScriptError} UNABLE_TO_FIND_IMPLEMENTATION_1_FOR_PLUGIN_2 If the plug-in type cannot be resolved or no matching implementation is available. This fires when (a) no plug-in type exists with the given script ID, (b) `options.implementation` is provided but doesn't match any implementation of the type, OR (c) the plug-in type exists in the account but the executing script does not have a declared dependency on it (so it cannot be loaded from this script context). The error `message` is formatted as `"Unable to find implementation <impl-or-'null'> for plugin <type>"`.
   * @throws {TypeError} Undocumented Java-layer leak: same string-coercion failure as `findImplementations` if `options.type` is omitted entirely or set to a value not coercible to a Java string.
   */
  loadImplementation<T extends Record<string, any> = Record<string, any>>(options: {
    type: string,
    implementation?: string,
  }): T;
}
