/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />

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
   */
  getCurrentUser(): runtime.User;

  /**
   * Get the current executing Script object
   */
  getCurrentScript(): runtime.Script;

  /**
   * Get the current session object
   */
  getCurrentSession(): runtime.Session;

  /**
   * Check if a feature is turned on and in effect
   * @see [SuiteAnswers: Feature Names and IDs]{@link https://suiteanswers.custhelp.com/app/answers/detail/a_id/10417}
   * @param feature id of the feature
   */
  isFeatureInEffect(
    feature: string,
  ): boolean;

  /**
   * Check if a feature is turned on and in effect
   * @see [SuiteAnswers: Feature Names and IDs]{@link https://suiteanswers.custhelp.com/app/answers/detail/a_id/10417}
   * @param options
   * @param options.feature id of the feature
   */
  isFeatureInEffect(options: {
    feature: string,
  }): boolean;

  /**
   * @since 2015.2
   */
  readonly queueCount: number;

  /**
   * @since 2018.1
   */
  readonly processorCount: number;

  /**
   * The version of NetSuite the current account is runnning
   *
   * @since 2015.2
   */
  readonly version: string;

  /**
   * @since 2015.2
   */
  readonly accountId: string;

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531123}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531123.html}
   *
   * @since 2015.2
   */
  readonly envType: runtime.EnvType | `${runtime.EnvType}`;

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531348}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296531348.html}
   *
   * @since 2015.2
   */
  readonly executionContext: runtime.ContextType | `${runtime.ContextType}`;

  /**
   *
   */
  toString(): string;

  /**
   * Convert to JSON object
   */
  toJSON(): ExcludeMethods<runtime>;
}


declare namespace runtime {

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296647065}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296647065.html}
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
   */
  export enum Permission {
    FULL = 4,
    EDIT = 3,
    CREATE = 2,
    VIEW = 1,
    NONE = 0,
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296646855}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296646855.html}
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
     * @since 2015.2
     */
    readonly logLevel: string;

    /**
     * Current script id
     *
     * @since 2015.2
     */
    readonly id: string;

    /**
     * Current script runtime version
     *
     * @since 2015.2
     */
    readonly apiVersion: string;

    /**
     * The deploymentId for the current script deployment
     *
     * @since 2015.2
     */
    readonly deploymentId: string;

    /**
     * The bundle IDs the current script belongs to
     *
     * @since 2015.2
     */
    readonly bundleIds: string[];

    /**
     * Returns the remaining amount of unit usage for the current script
     */
    getRemainingUsage(): number;

    /**
     * Returns script parameter value which is defined per script
     * @param name The name of the parameter
     */
    getParameter(
      name: string,
    ): number | Date | string | string[] | boolean;

    /**
     * Returns script parameter value which is defined per script
     * @param options
     * @param options.name The name of the parameter
     */
    getParameter(options: {
      name: string,
    }): number | Date | string | string[] | boolean;

    /**
     * Percentage complete specified for the current scheduled script execution
     *
     * @throws {error.SuiteScriptError} SSS_OPERATION_UNAVAILABLE
     *
     * @since 2015.2
     */
    percentComplete: number;

    /**
     *
     */
    toString(): string;

    /**
     * Convert to JSON object
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
     * @param options
     * @param options.name The key used to store the session object
     */
    get(options: {
      name: string,
    }): string;

    /**
     * Add or set the value of a user-defined session object for the current user.
     *
     * @param options
     * @param options.name The key used to store the session object
     * @param options.value The value to associate with this key in the user's session
     */
    set(options: {
      name: string,
      value: string,
    }): void;

    /**
     *
     */
    toString(): string;

    /**
     * Convert to JSON object
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
     * @since 2015.2
     */
    readonly email: string;

    /**
     * Returns the currently logged in user's name
     *
     * @since 2015.2
     */
    readonly name: string;

    /**
     * Returns the internal ID of the currently logged in user's location
     *
     * @since 2015.2
     */
    readonly location: number;

    /**
     * Returns the internal ID of the currently logged in user's department
     *
     * @since 2015.2
     */
    readonly department: number;

    /**
     * Returns the internal ID of the currently logged in user's role
     *
     * @since 2015.2
     */
    readonly role: number;

    /**
     * Returns the internal ID of the currently logged in user's center type (role center)
     * The string value of the logged in user's center - for example, SALES, ACCOUNTING, CLASSIC.
     *
     * @since 2015.2
     */
    readonly roleCenter: string;

    /**
     * Returns the custom scriptId of the role (as opposed to the internal numerical ID)
     *
     * @since 2015.2
     */
    readonly roleId: string;

    /**
     * Returns the currently logged in user's internal ID
     *
     * @since 2015.2
     */
    readonly id: number;

    /**
     * Returns the internal ID of the currently logged in user's subsidiary
     *
     * @since 2015.2
     */
    readonly subsidiary: number;

    /**
     * Get a user's permission level for a given permission
     *
     * @param name The internal ID of a permission
     * @return one value of the Permission
     */
    getPermission(name: string): Permission | 0 | 1 | 2 | 3 | 4;

    /**
     * Get a user's permission level for a given permission
     *
     * @param options
     * @param options.name The internal ID of a permission
     * @return one value of the Permission
     */
    getPermission(options: {
      name: string,
    }): Permission | 0 | 1 | 2 | 3 | 4;

    /**
     * Get the value of a NetSuite preference
     *
     * @param name The internal ID of the preference
     * @return The value of a system or script preference for the current user
     */
    getPreference(name: string): string;

    /**
     * Get the value of a NetSuite preference
     *
     * @param options
     * @param options.name The internal ID of the preference
     * @return The value of a system or script preference for the current user
     */
    getPreference(options: {
      name: string,
    }): string;

    /**
     *
     */
    toString(): string;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }
}