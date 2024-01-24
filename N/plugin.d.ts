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
   * Returns the script IDs of implementations of the given custom plug-in type. If there's no custom plug-in type
   * with the given script ID available for the executing script, an empty list is returned.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4558224168}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4558224168.html}
   *
   * @param options
   * @param options.type Script ID of the custom plug-in type
   * @param [options.includeDefault=true] True if default implementation is to be included in the list; default value is true
   * @return List of scriptIDs of the custom plug-in implementations
   */
  findImplementations(options: {
    type: string,
    includeDefault?: boolean,
  }): string[];

  /**
   * Instantiates an implementation of the given custom plug-in type. If no implementation ID is explicitly given then
   * the implementation which is currently selected in the UI (Manage Plug-ins page) will be returned.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4558229654}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4558229654.html}
   *
   * @param options
   * @param options.type Script ID of the custom plug-in type
   * @param [options.implementation] Script ID of the custom plug-in implementation
   * @return An object implementing the custom plug-in type
   */
  loadImplementation(options: {
    type: string,
    implementation?: string,
  }): Object;
}