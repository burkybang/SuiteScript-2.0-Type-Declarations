/// <reference path="../error.d.ts" />

/**
 * SuiteScript ui/message module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497735093}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497735093.html}
 *
 * @module N/ui/message
 * @NApiVersion 2.x
 *
 * @restriction Client-side scripts only
 */
interface message {

  /**
   * Creates a message which can be shown/hidden near the top of the page.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497873263}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497873263.html}
   *
   * @governance none
   * @restriction Client-side scripts only
   * @since 2016.1
   *
   * @param options
   * @param options.type The type of message, see message.Type
   * @param [options.title] The title of the message. Defaults to empty string.
   * @param [options.message] The content of the message. Defaults to empty string.
   * @param [options.duration=0] The amount of time (in milliseconds) to show the message. Default is 0 (show forever). A string is parsed to a number.
   *
   * @return A message object which can be shown or hidden.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is not specified.
   */
  create(options: {
    type: message.Type,
    title?: string,
    message?: string,
    duration?: number | string,
  }): message.Message;
}

declare namespace message {

  /**
   * Enum for message types
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4498688050}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4498688050.html}
   *
   * @since 2016.1
   */
  export enum Type {
    CONFIRMATION,
    INFORMATION,
    WARNING,
    ERROR,
  }

  /**
   * Return a new instance of Message, used to show/hide messages
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497858078}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497858078.html}
   * @constructor
   *
   * @since 2016.1
   */
  export interface Message {

    /**
     * Shows the message.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497866594}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497866594.html}
     *
     * @governance none
     * @restriction Client-side scripts only
     * @since 2016.1
     *
     * @param [duration=0] The amount of time (in milliseconds) to show the message. Default is 0 (show forever). A string is parsed to a number.
     */
    show(duration?: number | string): void;

    /**
     * Shows the message.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497866594}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497866594.html}
     *
     * @governance none
     * @restriction Client-side scripts only
     * @since 2016.1
     *
     * @param [options]
     * @param [options.duration=0] The amount of time (in milliseconds) to show the message. Default is 0 (show forever). A string is parsed to a number.
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.duration is specified with a non-numerical value.
     */
    show(options?: {
      duration?: number | string,
    }): void;

    /**
     * Hides the message.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4610801857}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4610801857.html}
     *
     * @governance none
     * @restriction Client-side scripts only
     * @since 2016.1
     */
    hide(): void;

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2016.1
     */
    toString(): 'message.Message';

    /**
     * JSON.stringify() implementation
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2016.1
     */
    toJSON(): {
      type: Type,
      title: string,
      message: string,
      duration: number,
    };
  }
}
