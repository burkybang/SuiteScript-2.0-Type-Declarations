/// <reference path="../typings.d.ts" />

/**
 * SuiteScript error module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243798608}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243798608.html}
 *
 * @module N/error
 * @NApiVersion 2.x
 * @restriction Server-side scripts only
 */
interface error {

  /**
   * Create a new Error object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803203}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803203.html}
   *
   * @param options
   * @param options.name
   * @param options.message
   * @param [options.notifyOff]
   */
  create(options: {
    name: string,
    message: string,
    notifyOff?: boolean,
  }): error.SuiteScriptError | error.UserEventError;
}

declare namespace error {

  /**
   * Encapsulates a custom SuiteScript error for any server script type that is not a user event script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4253432660}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4253432660.html}
   *
   * @restriction Server-side scripts only, Not supported in User Event scripts
   *
   * @protected
   * @constructor
   */
  export interface SuiteScriptError {

    /**
     * @since 2015.2
     */
    readonly type: 'error.SuiteScriptError';

    /**
     * Error ID that is automatically generated when a new error is created
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803497}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803497.html}
     *
     * @since 2015.2
     */
    readonly id: string;

    /**
     * User-defined error code
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803552}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803552.html}
     *
     * @since 2015.2
     */
    readonly name: string;

    /**
     * Error message text displayed in the Details column of the Execution Log
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803629}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803629.html}
     *
     * @since 2015.2
     */
    readonly message: string;

    /**
     * List of method calls that the script is executing when the error is thrown
     * The most recently executed method is listed at the top of the list.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803715}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803715.html}
     *
     * @since 2015.2
     */
    readonly stack: string[];

    /**
     * @since 2016.1
     */
    readonly cause: {
      name: string,
      message: string,
    };

    /**
     * @since 2016.2
     */
    readonly notifyOff: boolean;

    /**
     * @since 2016.2
     */
    readonly userFacing: boolean;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a custom SuiteScript error for a user event script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4253440386}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4253440386.html}
   *
   * @restriction Server-side User Event scripts only
   *
   * @protected
   * @constructor
   */
  export interface UserEventError {

    /**
     * @since 2015.2
     */
    readonly type: 'error.UserEventError';

    /**
     * Error ID that is automatically generated when a new error is created
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4254922120}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4254922120.html}
     *
     * @since 2015.2
     */
    readonly id: string;

    /**
     * User-defined error code
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4254922635}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4254922635.html}
     *
     * @since 2015.2
     */
    readonly name: string;

    /**
     * Error message text displayed in the Details column of the Execution Log
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4254962538}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4254962538.html}
     *
     * @since 2015.2
     */
    readonly message: string;

    /**
     * List of method calls that the script is executing when the error is thrown
     * The most recently executed method is listed at the top of the list.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4254923191}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4254923191.html}
     *
     * @since 2015.2
     */
    readonly stack: string[];

    /**
     * Internal ID of the submitted record that triggered the script
     * This property only holds a value when the error is thrown by an afterSubmit user event script.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803775}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803775.html}
     *
     * @since 2015.2
     */
    readonly recordId: string;

    /**
     * User event type (beforeLoad, beforeSubmit, or afterSubmit)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4243803835}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243803835.html}
     *
     * @since 2015.2
     */
    readonly eventType: 'beforeLoad' | 'beforeSubmit' | 'afterSubmit';

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }
}