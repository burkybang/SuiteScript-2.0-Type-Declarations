/// <reference path="../typings.d.ts" />

/**
 * SuiteScript module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296359529}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296359529.html}
 *
 * @module N/runtime
 * @NApiVersion 2.x
 */
interface runtime {

  /**
   * Get the current log in user object
   * @return {runtime.User}
   */
  getCurrentUser(): runtime.User;

  /**
   * Get the current executing Script object
   * @return {runtime.Script}
   */
  getCurrentScript(): runtime.Script;

  /**
   * Get the current session object
   * @return {runtime.Session}
   */
  getCurrentSession(): runtime.Session;

  /**
   * Check if a feature is turned on and in effect
   * @param {Object} options
   * @param {string} options.feature id of the feature
   * @return {boolean}
   */
  isFeatureInEffect(options: {
    feature: string,
  }): boolean;

  /**
   * @type {number}
   * @readonly
   *
   * @since 2015.2
   */
  queueCount: number;

  /**
   * @type {number}
   * @readonly
   *
   * @since 2018.1
   */
  processorCount: number;

  /**
   * The version of NetSuite the current account is runnning.
   *
   * @type {string}
   * @readonly
   *
   * @since 2015.2
   */
  version: string;

  /**
   * @type {string}
   * @readonly
   *
   * @since 2015.2
   */
  accountId: string;

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531123}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531123.html}
   *
   * @type {runtime.EnvType}
   * @readonly
   *
   * @since 2015.2
   */
  envType: runtime.EnvType;

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531348}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531348.html}
   *
   * @type {runtime.ContextType}
   * @readonly
   *
   * @since 2015.2
   */
  executionContext: runtime.ContextType;

  /**
   * @return {string}
   */
  toString(): string;

  /**
   * Convert to JSON object
   * @return {Object<string, *>}
   */
  toJSON(): ExcludeMethods<runtime>;
}


declare namespace runtime {

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296647065}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296647065.html}
   * @enum {string}
   */
  export enum EnvType {
    SANDBOX = 'SANDBOX',
    PRODUCTION = 'PRODUCTION',
    BETA = 'BETA',
    INTERNAL = 'INTERNAL',
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296647244}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296647244.html}
   * @enum {string}
   */
  export enum Permission {
    EDIT = 3.0,
    FULL = 4.0,
    CREATE = 2.0,
    VIEW = 1.0,
    NONE = 0.0,
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296646855}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296646855.html}
   * @enum {string}
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
    CUSTOMGLLINES = 'CUSTOMGLLINES',
    CUSTOM_MASSUPDATE = 'CUSTOMMASSUPDATE',
    DEBUGGER = 'DEBUGGER',
    EMAIL_CAPTURE = 'EMAILCAPTURE',
    FICONNECTIVITY = 'FICONNECTIVITY',
    MAP_REDUCE = 'MAPREDUCE',
    NONE = 'NONE',
    PAYMENTGATEWAY = 'PAYMENTGATEWAY',
    PAYMENTPOSTBACK = 'PAYMENTPOSTBACK',
    PLATFORMEXTENSION = 'PLATFORMEXTENSION',
    PORTLET = 'PORTLET',
    PROMOTIONS = 'PROMOTIONS',
    RESTLET = 'RESTLET',
    REST_WEBSERVICES = 'RESTWEBSERVICES',
    SCHEDULED = 'SCHEDULED',
    SDF_INSTALLATION = 'SDFINSTALLATION',
    SHIPPING_PARTNERS = 'SHIPPINGPARTNERS',
    SUITELET = 'SUITELET',
    TAX_CALCULATION = 'TAXCALCULATION',
    USEREVENT = 'USEREVENT',
    USER_INTERFACE = 'USERINTERFACE',
    WEBAPPLICATION = 'WEBAPPLICATION',
    WEBSERVICES = 'WEBSERVICES',
    WEBSTORE = 'WEBSTORE',
    WORKFLOW = 'WORKFLOW',
  }


  /**
   * @protected
   * @constructor
   */
  export interface Script {

    /**
     * Current script log level
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    logLevel: string;

    /**
     * Current script id
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    id: string;

    /**
     * Current script runtime version
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    apiVersion: string;

    /**
     * The deploymentId for the current script deployment
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    deploymentId: string;

    /**
     * The bundle IDs the current script belongs to
     *
     * @type {string[]}
     * @readonly
     *
     * @since 2015.2
     */
    bundleIds: string[];

    /**
     * Returns the remaining amount of unit usage for the current script
     * @return {number}
     */
    getRemainingUsage(): number;

    /**
     * Returns script parameter value which is defined per script
     * @param {string} name The name of the parameter
     * @return {number|Date|string|string[]}
     */
    getParameter(
      name: string,
    ): number | Date | string | string[] | boolean;

    /**
     * Returns script parameter value which is defined per script
     * @param {Object} options
     * @param {string} options.name The name of the parameter
     * @return {number|Date|string|string[]}
     */
    getParameter(options: {
      name: string,
    }): number | Date | string | string[] | boolean;

    /**
     * Percentage complete specified for the current scheduled script execution
     *
     * @type {number}
     *
     * @throws {error.SuiteScriptError} SSS_OPERATION_UNAVAILABLE
     *
     * @since 2015.2
     */
    percentComplete: number;

    /**
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @protected
   * @constructor
   */
  export interface Session {

    /**
     * Get the value of a user-defined session object for the current user.
     *
     * @param {Object} options
     * @param {string} options.name The key used to store the session object
     * @return {string}
     */
    get(options: {
      name: string,
    }): string;

    /**
     * Add or set the value of a user-defined session object for the current user.
     *
     * @param {Object} options
     * @param {string} options.name The key used to store the session object
     * @param {string} options.value The value to associate with this key in the user's session
     * @return {void}
     *
     */
    set(options: {
      name: string,
      value: string,
    }): void;

    /**
     * @return {string}
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * @protected
   * @constructor
   */
  export interface User {

    /**
     * Returns the currently logged in user's e-mail address
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    email: string;

    /**
     * Returns the currently logged in user's name
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    name: string;

    /**
     * Returns the internal ID of the currently logged in user's location
     *
     * @type {number}
     * @readonly
     *
     * @since 2015.2
     */
    location: number;

    /**
     * Returns the internal ID of the currently logged in user's department
     *
     * @type {number}
     * @readonly
     *
     * @since 2015.2
     */
    department: number;

    /**
     * Returns the internal ID of the currently logged in user's role
     *
     * @type {number}
     * @readonly
     *
     * @since 2015.2
     */
    role: number;

    /**
     * Returns the internal ID of the currently logged in user's center type (role center)
     * The string value of the logged in user's center - for example, SALES, ACCOUNTING, CLASSIC.
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    roleCenter: string;

    /**
     * Returns the custom scriptId of the role (as opposed to the internal numerical ID)
     *
     * @type {string}
     * @readonly
     *
     * @since 2015.2
     */
    roleId: string;

    /**
     * Returns the currently logged in user's internal ID
     *
     * @type {number}
     * @readonly
     *
     * @since 2015.2
     */
    id: number;

    /**
     * Returns the internal ID of the currently logged in user's subsidiary
     *
     * @type {number}
     * @readonly
     *
     * @since 2015.2
     */
    subsidiary: number;

    /**
     * Get a user's permission level for a given permission
     * @param {string} name The internal ID of a permission
     * @return {number} one value of the Permission
     *
     */
    getPermission(name: string): number;

    /**
     * Get a user's permission level for a given permission
     * @param {Object} options
     * @param {string} options.name The internal ID of a permission
     * @return {number} one value of the Permission
     *
     */
    getPermission(options: {
      name: string,
    }): number;

    /**
     * Get the value of a NetSuite preference
     * @param {string} name The internal ID of the preference
     * @return {string} The value of a system or script preference for the current user
     *
     */
    getPreference(name: string): string;

    /**
     * Get the value of a NetSuite preference
     * @param {Object} options
     * @param {string} options.name The internal ID of the preference
     * @return {string} The value of a system or script preference for the current user
     *
     */
    getPreference(options: {
      name: string,
    }): string;

    /**
     * @return {string}
     *
     */
    toString(): string;

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>;
  }
}