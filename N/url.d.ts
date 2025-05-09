/**
 * SuiteScript url module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358552918}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358552918.html}
 *
 * @module N/url
 * @NApiVersion 2.x
 */
interface url {

  /**
   * Returns the URL string to a NetSuite record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358667680}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358667680.html}
   *
   * @param {Object} options
   * @param {string} options.recordType
   * @param {number|string} options.recordId
   * @param {boolean} [options.isEditMode]
   * @param {Object<string, string|number|boolean>} [options.params]
   *
   * @return {string} url
   *
   * @since 2015.1
   */
  resolveRecord(options: {
    recordType: string,
    recordId?: number | string,
    isEditMode?: boolean,
    params?: {
      [p: string]: string | number | boolean,
    },
  }): string;

  /**
   * Returns the internal URL to a NetSuite Tasklink
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672296}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672296.html}
   *
   * @param {Object} options
   * @param {string} options.id
   * @param {Object<string, string|number|boolean>} [options.params]
   *
   * @return {string} url
   *
   * @since 2015.1
   */
  resolveTaskLink(options: {
    id: string,
    params?: {
      [p: string]: string | number | boolean,
    },
  }): string;

  /**
   * Returns an external or internal URL string to a script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672433}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672433.html}
   *
   * @param {Object} options
   * @param {string} options.scriptId
   * @param {string} options.deploymentId
   * @param {boolean} [options.returnExternalUrl]
   * @param {Object<string, string|number|boolean>} [options.params]
   *
   * @return {string} url
   *
   * @since 2015.1
   */
  resolveScript(options: {
    scriptId: `customscript${string}` | string,
    deploymentId: `customdeploy${string}` | string,
    returnExternalUrl?: boolean,
    params?: {
      [p: string]: string | number | boolean,
    },
  }): string;

  /**
   * Returns a domain name for a NetSuite account
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4861456597}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4861456597.html}
   *
   * @param {Object} options
   * @param {url.HostType} options.hostType
   * @param {string} [options.accountId]
   *
   * @return {string} domain
   *
   * @since 2017.1
   */
  resolveDomain(options: {
    hostType: url.HostType | `${url.HostType}`,
    accountId?: string,
  }): string;

  /**
   * Creates a serialized representation of an object containing query parameters
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358672703}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358672703.html}
   *
   * @param {Object} options
   * @param {string} options.domain
   * @param {Object<string, string|number|boolean>} options.params
   *
   * @return {string} url
   *
   * @since 2015.1
   */
  format(options: {
    domain: string,
    params: {
      [p: string]: string | number | boolean,
    },
  }): string;
}

declare namespace url {

  /**
   * Enumeration whose string values each describe a category of domain name
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4834765371}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4834765371.html}
   *
   * @enum {string}
   */
  export enum HostType {
    // The domain for UI access - <accountID>.app.netsuite.com
    APPLICATION = 'APPLICATION',
    // The domain for customer center - ?
    CUSTOMER_CENTER = 'CUSTOMERCENTER',
    // The domain for calling a RESTlet from an external source - <accountID>.restlets.api.netsuite.com
    RESTLET = 'RESTLETS',
    // The domain for SOAP web services requests - <accountID>.suitetalk.api.netsuite.com
    SUITETALK = 'SUITETALK',
    // The domain for forms hosted online, usually in Suitelets - <accountID>.extforms.netsuite.com
    FORM = 'FORMS',
  }
}