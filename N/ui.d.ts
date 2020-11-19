/// <reference path="./ui/dialog.d.ts" />
/// <reference path="./ui/message.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

/**
 * SuiteScript ui module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156939471908.html}
 *
 * @module N/ui
 * @NApiVersion 2.x
 */
interface ui {

  /**
   * Load the dialog module to create a modal dialog that persists until a button on the dialog is pressed
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497725142.html}
   *
   * @type {dialog}
   *
   * @restriction Client SuiteScript only
   */
  dialog: dialog

  /**
   * Load the message module to display a message at the top of the screen under the menu bar
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4497735093.html}
   *
   * @type {message}
   *
   * @restriction Client SuiteScript only
   */
  message: message

  /**
   * Load the serverWidget module when you want to work with the user interface within NetSuite
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4321345532.html}
   *
   * @type {serverWidget}
   *
   * @restriction Server SuiteScript only
   */
  serverWidget: serverWidget
}