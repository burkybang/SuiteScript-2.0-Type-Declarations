/**
 * SuiteScript suiteAppInfo module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_160236086332}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_160236086332.html}
 *
 * @module N/suiteAppInfo
 * @NApiVersion 2.x
 */
interface suiteAppInfo {

  /**
   * Use this method to determine if a specified bundle is installed
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236055067}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236055067.html}
   *
   * @governance 5 units
   *
   * @param options
   * @param options.bundleId
   */
  isBundleInstalled(options: {
    bundleId: number | string,
  }): boolean;

  /**
   * Use this method to determine if a specified SDF SuiteApp is installed
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236079756}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236079756.html}
   *
   * @governance 5 units
   *
   * @param options
   * @param options.suiteAppId
   */
  isSuiteAppInstalled(options: {
    suiteAppId: number | string,
  }): boolean;

  /**
   * Use this method to retrieve the IDs for bundles that contain the specified script, for each script specified
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236064276}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236064276.html}
   *
   * @governance 10 units
   *
   * @param options
   * @param options.scriptsIds - The list of script ids
   */
  listBundlesContainingScripts<ID extends string>(options: {
    scriptsIds: ID[],
  }): { [key in ID]: number[] };

  /**
   * Use this method to retrieve the ID for the SDF SuiteApp that contains the specified script, for each script specified
   * Only one ID will be returned for each specified script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236084150}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236084150.html}
   *
   * @governance 10 units
   *
   * @param options
   * @param options.scriptsIds - The list of script ids
   */
  listSuiteAppsContainingScripts<ID extends string>(options: {
    scriptsIds: ID[],
  }): { [key in ID]: string | null };

  /**
   * Use this method to retrieve a list of successfully installed bundles, as an array of objects
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236062593}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236062593.html}
   *
   * @governance 10 units
   */
  listInstalledBundles(): suiteAppInfo.Bundle[];

  /**
   * Use this method to retrieve a list of successfully installed SDF SuiteApps, as an array of objects
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160236082257}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160236082257.html}
   *
   * @governance 10 units
   */
  listInstalledSuiteApps(): suiteAppInfo.SuiteApp[];
}

declare namespace suiteAppInfo {

  export interface Publisher {
    id: string;
    name: string;
  }

  export interface InstalledBy {
    id: number;
    name: string;
  }

  export interface Bundle {
    id: number;
    name: string;
    version: string;
    description: string | null;
    installedFrom: string;
    isManaged: boolean;
    dateInstalled: Date;
    dateLastUpdated: Date | null;
    publisher: Publisher;
    installedBy: InstalledBy;
  }

  export interface SuiteApp {
    appId: string;
    publisherId: string;
    name: string;
    version: string;
    description: string | null;
    dateInstalled: Date;
    dateLastUpdated: Date | null;
    installedBy: InstalledBy;
  }

}