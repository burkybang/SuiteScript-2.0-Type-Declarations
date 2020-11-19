/**
 * SuiteScript module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296359529.html}
 *
 * @module N/runtime
 * @NApiVersion 2.x
 */
interface runtime {

  /**
   * Get the current log in user object
   * @return {runtime.User}
   */
  getCurrentUser(): runtime.User

  /**
   * Get the current executing Script object
   * @return {runtime.Script}
   */
  getCurrentScript(): runtime.Script

  /**
   * Get the current session object
   * @return {runtime.Session}
   */
  getCurrentSession(): runtime.Session

  /**
   * Check if a feature is turned on and in effect
   * @param {Object} options
   * @param {string} options.feature id of the feature
   * @return {boolean}
   */
  isFeatureInEffect(options: {
    feature: string,
  }): boolean

  /**
   * @name runtime#queueCount
   * @type {number}
   * @readonly
   * @since 2015.2
   */
  queueCount: number

  /**
   * @name runtime#processorCount
   * @type {number}
   * @readonly
   * @since 2018.1
   */
  processorCount: number

  /**
   * The version of NetSuite the current account is runnning.
   *
   * @name runtime#version
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  version: string

  /**
   * @name runtime#accountId
   * @type {string}
   * @readonly
   * @since 2015.2
   */
  accountId: string

  /**
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531123.html}
   *
   * @name runtime#envType
   * @type {runtime.EnvType}
   * @readonly
   * @since 2015.2
   */
  envType: runtime.EnvType

  /**
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296531348.html}
   *
   * @name runtime#executionContext
   * @type {runtime.ContextType}
   * @readonly
   * @since 2015.2
   */
  executionContext: runtime.ContextType

  /**
   * get JSON format of the object
   * @return {string}
   */
  toJSON(): string

  /**
   * @return {string}
   */
  toString(): string
}


declare namespace runtime {

  /**
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296647065.html}
   * @enum {string}
   */
  export enum EnvType {
    SANDBOX = 'SANDBOX',
    PRODUCTION = 'PRODUCTION',
    BETA = 'BETA',
    INTERNAL = 'INTERNAL',
  }

  /**
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296647244.html}
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
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296646855.html}
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
     * @name Script#logLevel
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    logLevel: string

    /**
     * Current script id
     * @name Script#id
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    id: string

    /**
     * Current script runtime version
     * @name Script#apiVersion
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    apiVersion: string

    /**
     * The deploymentId for the current script deployment
     * @name Script#deploymentId
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    deploymentId: string

    /**
     * The bundle IDs the current script belongs to
     * @name Script#bundleIds
     * @type {string[]}
     * @readonly
     * @since 2015.2
     */
    bundleIds: string[]

    /**
     * Returns the remaining amount of unit usage for the current script
     * @return {number}
     *
     */
    getRemainingUsage(): number

    /**
     * Returns script parameter value which is defined per script
     *
     * @param {Object} options
     * @param {string} options.name The name of the parameter
     * @return {number|Date|string|Array}
     *
     */
    getParameter(options: {
      name: string,
    }): number | Date | string | string[]

    /**
     * Percentage complete specified for the current scheduled script execution
     * @name Script#percentComplete
     * @type {number}
     * @throws {SuiteScriptError} SSS_OPERATION_UNAVAILABLE
     * @since 2015.2
     */
    percentComplete: number

    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    toJSON(): string

    /**
     * @return {string}
     *
     */
    toString(): string
  }

  /**
   * @protected
   * @constructor
   */
  export interface Session {

    /**
     * Get the value of a user-defined session object for the current user.
     * @param {Object} options
     * @param {string} options.name The key used to store the session object
     * @return {string}
     *
     */
    get(options: {
      name: string,
    }): string

    /**
     * Add or set the value of a user-defined session object for the current user.
     * @param {Object} options
     * @param {string} options.name The key used to store the session object
     * @param {string} options.value The value to associate with this key in the user's session
     * @return {void}
     *
     */
    set(options: {
      name: string,
      value: string,
    }): void

    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    toJSON(): string

    /**
     * @return {string}
     *
     */
    toString(): string
  }

  /**
   * @protected
   * @constructor
   */
  export interface User {

    /**
     * Returns the currently logged in user's e-mail address
     * @name User#email
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    email: string

    /**
     * Returns the currently logged in user's name
     * @name User#name
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    name: string

    /**
     * Returns the internal ID of the currently logged in user's location
     * @name User#location
     * @type {number}
     * @readonly
     * @since 2015.2
     */
    location: number

    /**
     * Returns the internal ID of the currently logged in user's department
     * @name User#department
     * @type {number}
     * @readonly
     * @since 2015.2
     */
    department: number

    /**
     * Returns the internal ID of the currently logged in user's role
     * @name User#role
     * @type {number}
     * @readonly
     * @since 2015.2
     */
    role: number

    /**
     * Returns the internal ID of the currently logged in user's center type (role center)
     * @name User#roleCenter  The string value of the logged in user's center - for example, SALES, ACCOUNTING, CLASSIC.
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    roleCenter: string

    /**
     * Returns the custom scriptId of the role (as opposed to the internal numerical ID).
     * @name User#roleId
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    roleId: string

    /**
     * Returns the currently logged in user's internal ID
     * @name User#id
     * @type {number}
     * @readonly
     * @since 2015.2
     */
    id: number

    /**
     * Returns the internal ID of the currently logged in user's subsidiary
     * @name User#subsidiary
     * @type {number}
     * @readonly
     * @since 2015.2
     */
    subsidiary: number

    /**
     * Get a user's permission level for a given permission
     * @param {Object} options
     * @param {string} options.name The internal ID of a permission
     * @return {number} one value of the Permission
     *
     */
    getPermission(options: {
      name: string,
    }): number

    /**
     * Get the value of a NetSuite preference
     * @param {Object} options
     * @param {string} options.name The internal ID of the preference
     * @return {string} The value of a system or script preference for the current user
     *
     */
    getPreference(options: {
      name: string,
    }): string

    /**
     * get JSON format of the object
     * @return {string}
     *
     */
    toJSON(): string

    /**
     * @return {string}
     *
     */
    toString(): string
  }
}