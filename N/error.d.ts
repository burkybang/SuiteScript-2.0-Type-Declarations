/**
 * SuiteScript error module
 * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243798608.html
 *
 * @module N/error
 * @NApiVersion 2.x
 */
interface error {
  
  /**
   * Create a new Error object
   * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243803203.html
   *
   * @param {Object} options
   * @param {string} options.name
   * @param {string} options.message
   * @param {string} [options.notifyOff]
   * @return {error.SuiteScriptError|error.UserEventError}
   */
  create(options: { name: string, message: string, notifyOff?: boolean }): error.SuiteScriptError | error.UserEventError
}

declare namespace error {
  
  /**
   * Encapsulates a custom SuiteScript error for any server script type that is not a user event script
   * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4253432660.html
   *
   * @restriction Server scripts that are not user event scripts and client scripts
   *
   * @protected
   * @constructor
   */
  export interface SuiteScriptError {
    
    /**
     * Error ID that is automatically generated when a new error is created
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243803497.html
     *
     * @name SuiteScriptError#id
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    id: string
    
    /**
     * User-defined error code
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243803552.html
     *
     * @name SuiteScriptError#name
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    name: string
    
    /**
     * Error message text displayed in the Details column of the Execution Log
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243803629.html
     *
     * @name SuiteScriptError#message
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    message: string
    
    /**
     * List of method calls that the script is executing when the error is thrown
     * The most recently executed method is listed at the top of the list.
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243803715.html
     *
     * @name SuiteScriptError#stack
     * @type {string[]}
     *
     * @readonly
     * @since 2015.2
     */
    stack: string[]
    
    /**
     * @see unknown
     *
     * @name SuiteScriptError#cause
     * @type {{name:string, message:string}}
     *
     * @readonly
     * @since 2016.1
     */
    cause: { name: string, message: string }
    
    /**
     * @see unknown
     *
     * @name SuiteScriptError#notifyOff
     * @type {boolean}
     * @readonly
     * @since 2016.2
     */
    notifyOff: boolean
    
    /**
     * @see unknown
     *
     * @name SuiteScriptError#userFacing
     * @type {boolean}
     *
     * @readonly
     * @since 2016.2
     */
    userFacing: boolean
  }
  
  /**
   * Encapsulates a custom SuiteScript error for a user event script
   * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4253440386.html
   *
   * @restriction User event scripts
   *
   * @protected
   * @constructor
   */
  export interface UserEventError {
  
    /**
     * Error ID that is automatically generated when a new error is created
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4254922120.html
     *
     * @name UserEventError#id
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    id: string
  
    /**
     * User-defined error code
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4254922635.html
     *
     * @name UserEventError#name
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    name: string
  
    /**
     * Error message text displayed in the Details column of the Execution Log
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4254962538.html
     *
     * @name UserEventError#message
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    message: string
  
    /**
     * List of method calls that the script is executing when the error is thrown
     * The most recently executed method is listed at the top of the list.
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4254923191.html
     *
     * @name UserEventError#stack
     * @type {string[]}
     *
     * @readonly
     * @since 2015.2
     */
    stack: string[]
    
    /**
     * Internal ID of the submitted record that triggered the script
     * This property only holds a value when the error is thrown by an afterSubmit user event script.
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243803775.html
     *
     * @name UserEventError#recordId
     * @type {string}
     *
     * @readonly
     * @since 2015.2
     */
    recordId: string
    
    /**
     * User event type (beforeLoad, beforeSubmit, or afterSubmit)
     * @see https://5540748.app.netsuite.com/app/help/helpcenter.nl?fid=section_4243803835.html
     *
     * @name UserEventError#eventType
     * @type {'beforeLoad'|'beforeSubmit'|'afterSubmit'}
     *
     * @readonly
     * @since 2015.2
     */
    eventType: 'beforeLoad' | 'beforeSubmit' | 'afterSubmit'
  }
}