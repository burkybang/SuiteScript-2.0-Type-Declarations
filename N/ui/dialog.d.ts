/**
 * SuiteScript ui/dialog module
 *
 * @restriction Client-side scripts only
 *
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497725142}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497725142.html}
 *
 * @module N/ui/dialog
 * @NApiVersion 2.x
 */
interface dialog {

  /**
   * Creates an Alert Dialog with an OK Button
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497744851}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497744851.html}
   *
   * @restriction Client-side scripts only
   *
   * @param [options]
   * @param [options.title] The title of the alert. Defaults to empty string.
   * @param [options.message] The content of the alert. Defaults to empty string.
   *
   * @return A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
   * The callback will be passed in a response object which contains the value of the button where:
   * OK returns true.
   * @since 2016.1
   */
  alert(options?: {
    title?: string,
    message?: string,
  }): Promise<true>;

  /**
   * Creates an Confirm Dialog with an OK and Cancel Button
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497799943}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497799943.html}
   *
   * @restriction Client-side scripts only
   *
   * @param [options]
   * @param [options.title] The title of the confirmation box. Defaults to empty string.
   * @param [options.message] The content of the confirmation box. Defaults to empty string.
   *
   * @return A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
   * The callback will be passed in a response object which contains the value of the button where:
   *  OK returns true and Cancel returns false.
   * @since 2016.1
   */
  confirm(options?: {
    title?: string,
    message?: string,
  }): Promise<boolean>;

  /**
   * Creates an Dialog with the specified buttons
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497804898}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4497804898.html}
   *
   * @restriction Client SuiteScript only
   *
   * @param [options]
   * @param [options.title]   The title of the dialog box. Defaults to empty string.
   * @param [options.message] The content of the dialog box. Defaults to empty string.
   * @param [options.buttons] The list of buttons to add. Each item in the list requires a label and value.
   *                                            If empty, defaults to a button with label "OK" and value true.
   *
   * @return A Promise object. Pass a function into the then portion to fire a callback when the button is pressed.
   * The callback will be passed in a response object which contains the value of the button where:
   * The value parameter of the button clicked is returned.
   * @since 2016.1
   *
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options.buttons is specified and is not an array.
   * @throws {error.SuiteScriptError} BUTTONS_MUST_INCLUDE_BOTH_A_LABEL_AND_VALUE if options.buttons is specified and one or more items do not have a label and/or value.
   */
  create<T>(options?: {
    title?: string,
    message?: string,
    buttons?: {
      label: string,
      value: T,
    }[],
  }): Promise<T>;
}