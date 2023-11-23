/// <reference path="../error.d.ts" />

/**
 * SuiteScript message module (Client Side)
 *
 * @module N/ui/message
 * @NApiVersion 2.x
 */
interface message {

  /**
   * Creates a message which can be shown/hidden near the top of the page.
   *
   * @restriction Client-side scripts only
   * @param {Object} options
   * @param {message.Type} options.type The type of message, see message.Type
   * @param {string} [options.title] The title of the message. Defaults to empty string.
   * @param {string} [options.message] The content of the message. Defaults to empty string.
   * @param {number|string} [options.duration] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
   *
   * @return {message.Message} A message object which can be shown or hidden.
   *
   * @since 2016.1
   */
  create(options: {
    type: message.Type | `${message.Type}`,
    title?: string,
    message?: string,
    duration?: number | string,
  }): message.Message;
}

declare namespace message {

  /**
   * Enum for message types
   *
   * @enum {number}
   */
  export enum Type {
    CONFIRMATION,
    INFORMATION,
    WARNING,
    ERROR,
  }

  /**
   * Return a new instance of Message, used to show/hide messages
   * @class
   * @classdesc Allows users to show/hide messages.
   * @return {message.Message}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Message {

    /**
     * Shows the message.
     *
     * @restriction Client-side scripts only
     * @param {number} [duration=0] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
     *
     * @return {void}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.duration is specified with a non-numerical value.
     *
     * @since 2016.1
     */
    show(duration?: number): void;

    /**
     * Shows the message.
     *
     * @restriction Client-side scripts only
     * @param {Object} [options]
     * @param {number|string} [options.duration=0] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
     *
     * @return {void}
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.duration is specified with a non-numerical value.
     *
     * @since 2016.1
     */
    show(options?: {
      duration?: number | string,
    }): void;

    /**
     * Hides the message
     *
     * @restriction Client-side scripts only
     *
     * @return {void}
     *
     * @since 2016.1
     */
    hide(): void;

    /**
     * Returns the object type name (message.Message)
     *
     * @return {string}
     */
    toString(): string;

    /**
     * JSON.stringify() implementation.
     *
     * @return {{type: string, title: string, message: string}}
     */
    toJSON(): {
      type: Type | `${message.Type}`,
      title: string,
      message: string,
      duration: number,
    };
  }
}