/// <reference path="../../typings.d.ts" />
/// <reference path="./message.d.ts" />
/// <reference path="../search.d.ts" />
/// <reference path="../http.d.ts" />

/**
 * SuiteScript ui/serverWidget module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4321345532}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4321345532.html}
 *
 * @module N/ui/serverWidget
 * @NApiVersion 2.x
 */
interface serverWidget {

  /**
   * Instantiate a assistant object (specifying the title, and whether to hide the menu)
   *
   * @restriction Server-side scripts only
   * @param title form title
   * @param [hideNavBar=false]
   *
   * @since 2015.2
   */
  createAssistant(
    title: string,
    hideNavBar?: boolean,
  ): serverWidget.Assistant;

  /**
   * Instantiate a assistant object (specifying the title, and whether to hide the menu)
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.title form title
   * @param [options.hideNavBar=false]
   *
   * @since 2015.2
   */
  createAssistant(options: {
    title: string,
    hideNavBar?: boolean,
  }): serverWidget.Assistant;

  /**
   * Instantiate a form object (specifying the title, and whether to hide the menu)
   * @restriction Server-side scripts only
   *
   * @param title form title
   * @param [hideNavBar=false]
   *
   * @since 2015.2
   */
  createForm(
    title: string,
    hideNavBar?: boolean,
  ): serverWidget.Form;

  /**
   * Instantiate a form object (specifying the title, and whether to hide the menu)
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.title form title
   * @param [options.hideNavBar=false] (optional)
   *
   * @since 2015.2
   */
  createForm(options: {
    title: string,
    hideNavBar?: boolean,
  }): serverWidget.Form;

  /**
   * Instantiate a List object (specifying the title, and whether to hide the navigation bar)
   * @restriction Suitelet scripts only
   *
   * @param title list title
   * @param [hideNavBar=false]
   *
   * @since 2015.2
   */
  createList(
    title: string,
    hideNavBar?: boolean,
  ): serverWidget.List;

  /**
   * Instantiate a List object (specifying the title, and whether to hide the navigation bar)
   * @restriction Suitelet scripts only
   *
   * @param options
   * @param options.title list title
   * @param [options.hideNavBar=false]
   *
   * @since 2015.2
   */
  createList(options: {
    title: string,
    hideNavBar?: boolean,
  }): serverWidget.List;
}

declare namespace serverWidget {

  /**
   *
   */
  export enum FieldType {
    CHECKBOX = 'CHECKBOX',
    CURRENCY = 'CURRENCY',
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    DATETIMETZ = 'DATETIMETZ',
    EMAIL = 'EMAIL',
    FILE = 'FILE',
    FLOAT = 'FLOAT',
    HELP = 'HELP',
    IMAGE = 'IMAGE',
    INLINEHTML = 'INLINEHTML',
    INTEGER = 'INTEGER',
    LABEL = 'LABEL',
    LONGTEXT = 'LONGTEXT',
    MULTISELECT = 'MULTISELECT',
    PASSWORD = 'PASSWORD',
    PERCENT = 'PERCENT',
    PHONE = 'PHONE',
    RADIO = 'RADIO',
    RICHTEXT = 'RICHTEXT',
    SELECT = 'SELECT',
    TEXT = 'TEXT',
    TEXTAREA = 'TEXTAREA',
    TIMEOFDAY = 'TIMEOFDAY',
    URL = 'URL',
  }

  /**
   *
   */
  export enum FormPageLinkType {
    BREADCRUMB = 'BREADCRUMB',
    CROSSLINK = 'CROSSLINK',
  }

  /**
   *
   */
  export enum SublistType {
    EDITOR = 'EDITOR',
    INLINEEDITOR = 'INLINEEDITOR',
    LIST = 'LIST',
    STATICLIST = 'STATICLIST',
  }

  /**
   *
   */
  export enum FieldBreakType {
    NONE = 'NONE',
    STARTCOL = 'STARTCOL',
    STARTROW = 'STARTROW',
  }

  /**
   *
   */
  export enum FieldLayoutType {
    NORMAL = 'NORMAL',
    OUTSIDE = 'OUTSIDE',
    OUTSIDEBELOW = 'OUTSIDEBELOW',
    OUTSIDEABOVE = 'OUTSIDEABOVE',
    STARTROW = 'STARTROW',
    MIDROW = 'MIDROW',
    ENDROW = 'ENDROW',
  }

  /**
   *
   */
  export enum FieldDisplayType {
    NORMAL = 'NORMAL',
    HIDDEN = 'HIDDEN',
    READONLY = 'READONLY',
    DISABLED = 'DISABLED',
    ENTRY = 'ENTRY',
    INLINE = 'INLINE',
  }

  /**
   *
   */
  export enum SublistDisplayType {
    NORMAL = 'NORMAL',
    HIDDEN = 'HIDDEN',
  }

  /**
   *
   */
  export enum LayoutJustification {
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
  }

  /**
   *
   */
  export enum ListStyle {
    GRID = 'grid',
    REPORT = 'report',
    PLAIN = 'plain',
    NORMAL = 'normal',
  }

  /**
   *
   */
  export enum AssistantSubmitAction {
    NEXT = 'next',
    BACK = 'back',
    CANCEL = 'cancel',
    FINISH = 'finish',
    JUMP = 'jump',
  }

  /**
   * Encapsulates a Tab in a serverWidget.Form
   * @constructor
   *
   * @since 2015.2
   */
  export interface Tab {

    /**
     * The label of the Tab
     */
    label: string;

    /**
     * The Tab's field help
     */
    helpText: string;
  }

  /**
   * Encalsulates a Sublist in a Form or a serverWidget.Assistant
   * @constructor
   *
   * @since 2015.2
   */
  export interface Sublist {

    /**
     * The label of the field group
     */
    label: string;

    /**
     * The number of lines in the Sublist
     */
    readonly lineCount: number;

    /**
     * Display type of the sublist
     */
    displayType: SublistDisplayType | `${SublistDisplayType}`;

    /**
     * Inline help text to this sublist
     */
    helpText: string;

    /**
     * Set an id of a field that is to have unique values accross the rows in the sublist
     *
     * @param options
     * @param options.id The id of the field to use as a unique field
     * @return same object for chaining
     */
    updateUniqueFieldId(options: {
      id: string,
    }): this;

    /**
     * Id of a field designated as a totalling column, which is used to calculate and display a running total for the sublist
     *
     * @param options
     * @param options.id The id of the field to use as a total field
     * @return same object for chaining
     */
    updateTotallingFieldId(options: {
      id: string,
    }): this;

    /**
     * Adds a button to the sublist
     *
     * @param options
     * @param options.id the script id of button
     * @param options.label the label of button
     * @param [options.functionName] the function name to be triggered onClick for the button
     */
    addButton(options: {
      id: string,
      label: string,
      functionName?: string,
    }): Button;

    /**
     * Returns string value of a sublist field.
     *
     * @param options
     * @param options.id Id of the field
     * @param options.line Line number
     */
    getSublistValue(options: {
      id: string,
      line: number,
    }): string;

    /**
     * Set the value of a field on the list
     *
     * @param options
     * @param options.id   id of the field to set
     * @param options.line line number
     * @param options.value value to set on the field
     */
    setSublistValue(options: {
      id: string,
      line: number,
      value: string | number | boolean,
    }): void;

    /**
     * Adds refresh all buttons to the sublist
     */
    addRefreshButton(): Button;

    /**
     * Adds a "Mark All" and an "Unmark All" button to a sublist.
     */
    addMarkAllButtons(): Button[];

    /**
     * Add a field, column,  to the Sublist
     *
     * @param options
     * @param options.id ID of the filed to add
     * @param options.label The UI label for the field
     * @param options.type The type for this field
     * @param [options.source] The internal id of the source list for this field if the field is a select
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType | `${FieldType}` | string,
      align?: LayoutJustification | `${LayoutJustification}`,
      source?: string,
    }): Field;

    /**
     * Gets field from sublist
     *
     * @param id ID of the field to get
     */
    getField(
      id: string,
    ): Field;

    /**
     * Gets field from sublist
     *
     * @param options
     * @param options.id ID of the field to get
     */
    getField(options: {
      id: string,
    }): Field;
  }

  /**
   * Encapsulate a field group on an Assistant or a Form objects.
   * @constructor
   *
   * @since 2015.2
   */
  export interface FieldGroup {

    /**
     * Is the field group collapsible
     */
    isCollapsible: boolean;

    /**
     * Is the field group collapsed
     */
    isCollapsed: boolean;

    /**
     * Is the field group's border hidden
     */
    isBorderHidden: boolean;

    /**
     * Do all the fields in this group display in a single column
     */
    isSingleColumn: boolean;

    /**
     * The label of the field group
     */
    label: string;
  }

  /**
   * Return a wrapped an nlobjField
   * @constructor
   *
   * @since 2015.2
   */
  export interface Field {

    /**
     * The internal id of the field
     */
    readonly id: string;

    /**
     * The type of the field
     */
    readonly type: FieldType | `${FieldType}` | string;

    /**
     * The text that gets displayed in lieu of the field value for URL fields
     */
    linkText: string;

    /**
     * The max length of the field
     */
    maxLength: number;

    /**
     * Is the field mandatory
     */
    isMandatory: boolean;

    /**
     * The alias for the field. By default the alias is the field id
     */
    alias: string;

    /**
     * The default value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4335275520}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4335275520.html}
     */
    defaultValue: string | string[] | number | Date | boolean;

    /**
     * If Rich Text Editing is enabled, you can use this property to set the height of the rich text field only.
     */
    richTextHeight: number;

    /**
     * If Rich Text Editing is enabled, you can use this property to set the width of the rich text field only.
     */
    richTextWidth: number;

    /**
     * The label of the field
     */
    label: string;

    /**
     * The number of empty field spaces before/above this field
     */
    padding: number;

    /**
     * Update the breakType of the field
     *
     * @param options
     * @param options.breakType
     * @return same object for chaining
     */
    updateBreakType(options: {
      breakType: FieldBreakType | `${FieldBreakType}`,
    }): Field;

    /**
     * Update the layout type of the field
     *
     * @param options
     * @param options.layoutType
     * @return same object for chaining
     */
    updateLayoutType(options: {
      layoutType: FieldLayoutType | `${FieldLayoutType}`,
    }): Field;

    /**
     * Sets the height and width for the field. Only supported on multi-selects,
     * long text, rich text, and fields that get rendered as INPUT (type=text) fields.
     * This API is not supported on list/record fields.
     *
     * @param options
     * @param options.height
     * @param options.width
     * @return same object for chaining
     */
    updateDisplaySize(options: {
      height: number,
      width: number,
    }): Field;

    /**
     * Udpdate the field display type
     *
     * @param options
     * @param options.displayType
     * @return same object for chaining
     */
    updateDisplayType(options: {
      displayType: FieldDisplayType | `${FieldDisplayType}`,
    }): Field;

    /**
     * Set help text for a field
     *
     * @param help The help text for the field
     * @return same object for chaining
     */
    setHelpText(
      help: string,
    ): Field;

    /**
     * Set help text for a field
     *
     * @param options
     * @param options.help The help text for the field
     * @param [options.showInlineForAssistant] This means that field help will appear only in a field help popup box when the field label is clicked
     * @return same object for chaining
     */
    setHelpText(options: {
      help: string,
      showInlineForAssistant?: boolean,
    }): Field;

    /**
     * Get the select options for a field
     *
     * @param [options]
     * @param [options.filter] A search string to filter the select options that are returned.
     * @param [options.filteroperator='contains']  Supported operators are contains, is, and startswith. If not specified, defaults to the contains operator
     */
    getSelectOptions(options?: {
      filter?: string,
      filteroperator?: 'contains' | 'is' | 'startswith'
    }): {
      value: string,
      text: string,
    }[];

    /**
     * Add a select option to a select field
     *
     * @param options
     * @param options.value The internal id of the option
     * @param options.text  The display text for this option
     * @param [options.isSelected=false] If true, this option is selected
     */
    addSelectOption(options: {
      value: string | number,
      text: string,
      isSelected?: boolean,
    }): void;
  }

  /**
   * Return a wrapped an nlobjButton
   * @constructor
   *
   * @since 2015.2
   */
  export interface Button {

    /**
     * The label of the button
     */
    label: string;

    /**
     * Is the button disabled
     */
    isDisabled: boolean;

    /**
     * Is the button hidden
     */
    isHidden: boolean;
  }

  /**
   * Return a wrapped an nlobjAssistantStep
   * @constructor
   *
   * @since 2015.2
   */
  export interface AssistantStep {

    /**
     * The internal id of the step
     */
    readonly id: string;

    /**
     * The label of the step
     */
    label: string;

    /**
     * The numerical order of the step
     */
    stepNumber: number;

    /**
     * Help text for the step
     */
    helpText: number;

    /**
     * Get all sublist fields' internal ids entered by the user during this step
     *
     * @param options
     * @param options.group The internal id of the sublist
     */
    getSublistFieldIds(options: {
      group: string,
    }): string[];

    /**
     * Use this method to get all sublists entered by the user during this step
     */
    getSubmittedSublistIds(): string[];

    /**
     * Get all ids for fields in the assistant step
     */
    getFieldIds(): string[];

    /**
     * Get the value of a field
     *
     * @param options
     * @param options.id Internal id for the field
     */
    getValue(options: {
      id: string,
    }): string | string[];

    /**
     * Get the number of lines in a sublist
     *
     * @param options
     * @param options.group internal Id of the sublist
     */
    getLineCount(options: {
      group: string,
    }): number;

    /**
     * Get the value of a field in a sublist
     *
     * @param options
     * @param options.group Internal id of the sublist
     * @param options.id Internal id of the field
     * @param options.line line number
     */
    getSublistValue(options: {
      group: string,
      id: string,
      line: number,
    }): string;
  }

  /**
   * Return a wrapped an nlobjAssistant
   * @constructor
   *
   * @since 2015.2
   */
  export interface Assistant {

    /**
     * The current step of the assistant
     */
    readonly currentStep: AssistantStep;

    /**
     * An error message for the current step. If you choose, you can use HTML tags to format the message.
     */
    errorHtml: string;

    /**
     * Mark the last page in an assistant. Set the rich text to display a completion message on the last page.
     */
    finishedHtml: string;

    /**
     * Show or hide the assistant step numbers
     */
    hideStepNumber: boolean;

    /**
     * Use this method to enforce a sequential ordering of assistant steps. If steps are ordered,
     * users must complete the current step before the assistant will allow them to proceed to
     * the next step. From a display perspective, ordered steps will always appear in the left
     * panel of the assistant. Note that by default, steps in an assistant are ordered.
     */
    isNotOrdered: boolean;

    /**
     * Overall title of the Assistant
     */
    title: string;

    /**
     * Show/hide the Add to Shortcuts link that appears in the top-right corner of an assistant page.
     */
    hideAddToShortcutsLink: boolean;

    /**
     * Set the default values of many fields at once
     *
     * @param options
     * @param options.values
     */
    updateDefaultValues(options: {
      values: Object[],
    }): void;

    /**
     * The script file id to be used in the assistant
     */
    clientScriptFileId: number;

    /**
     * The script file path to be used in the assistant
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example 'SuiteScripts/client_script' - Absolute path
     * @example './client_script.js' - Relative path
     * @example './client_script' - Relative path
     */
    clientScriptModulePath: string;

    /**
     * Set the splash screen for an assistant page.
     *
     * @param options
     * @param options.title Title of the splash screen
     * @param options.text1 Text of the splash scheen
     * @param [options.text2] If you want splash content to have a two-column appearance, provide content in the text2 parameter.
     */
    setSplash(options: {
      title: string,
      text1: string,
      text2: string
    }): void;

    /**
     * Get a Field object from its id
     *
     * @param options
     * @param options.id Internal id for the field
     */
    getField(options: {
      id: string,
    }): Field;

    /**
     * Get a FieldGroup  object from its id
     *
     * @param options
     * @param options.id Id of the field group
     */
    getFieldGroup(options: {
      id: string,
    }): FieldGroup;

    /**
     * Get the name of last action taken by the user
     */
    getLastAction(): string;

    /**
     * Get the step the last submitted action came from
     */
    getLastStep(): AssistantStep;

    /**
     * Get next logical step corresponding to the user's last submitted action
     */
    getNextStep(): AssistantStep;

    /**
     * Get the number of steps
     */
    getStepCount(): number;

    /**
     * True if the assistant has an error set
     */
    hasErrorHtml(): boolean;

    /**
     * Is the assistant finished
     */
    isFinished(): boolean;

    /**
     * Get the a step given its id
     *
     * @param options
     * @param options.id Id for the step
     */
    getStep(options: {
      id: string,
    }): AssistantStep;

    /**
     * Get a Sublist  object from its id
     *
     * @param options
     * @param options.id  Id for the sublist
     */
    getSublist(options: {
      id: string,
    }): Sublist;

    /**
     * Add a step to the assistant
     * @param options
     * @param options.id  Id for the step
     * @param options.label UI label for the step
     */
    addStep(options: {
      id: string,
      label: string,
    }): void;

    /**
     * Add a field to the Assistant
     *
     * @param options
     * @param options.id  Id for the field
     * @param options.label Label for the field
     * @param options.type  Type for the field
     * @param [options.source] The internalId or scriptId of the source list for this field if
     * it is a select (List/Record) field.
     * @param [options.container]  Id for the field group of tab to place the field in
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType | `${FieldType}` | string,
      source?: string,
      container?: string,
    }): Field;

    /**
     * Add a field group to the assistant
     *
     * @param options
     * @param options.id  Id for the field group
     * @param options.label UI label for the field group
     */
    addFieldGroup(options: {
      id: string,
      label: string,
    }): FieldGroup;

    /**
     * Add a Sublist to the assistant
     *
     * @param options
     * @param options.id  Id for the sublist
     * @param options.label UI label for the sublist
     * @param options.type  Type of sublist
     */
    addSublist(options: {
      id: string,
      label: string,
      type: SublistType | `${SublistType}`,
    }): Sublist;

    /**
     * Get all ids for fields in the assistant
     */
    getFieldIds(): string[];

    /**
     * Get all field ids in the given assistant field group
     * @param options
     * @param options.id Id of the field group
     */
    getFieldIdsByFieldGroup(options: {
      id: string,
    }): string[];

    /**
     * Get all ids for field groups in the assistant
     */
    getFieldGroupIds(): string[];

    /**
     * Get all ids for sublists in the assistant
     */
    getSublistIds(): string[];

    /**
     * Get all steps in the assistant
     */
    getSteps(): AssistantStep[];

    /**
     *  Use this method to manage redirects in an assistant. In most cases, an assistant redirects to itself
     *  The sendRedirect(response) method is like a wrapper method that performs this redirect. This method
     *  also addresses the case in which one assistant redirects to another assistant. In this scenario,
     *  the second assistant must return to the first assistant if the user Cancels or the user Finishes.
     *  This method, when used in the second assistant, ensures that the user is redirected back to the
     *  first assistant.
     * @param options
     * @param options.response
     */
    sendRedirect(options: {
      response: http.ServerResponse,
    }): void;
  }

  /**
   * Primary object used to encapsulate a NetSuite-looking form
   * @constructor
   *
   * @since 2015.2
   */
  export interface Form {

    /**
     * The form title
     */
    title: string;

    /**
     * The script file id to be used in the form
     */
    clientScriptFileId: number;

    /**
     * The script file path to be used in the form
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example 'SuiteScripts/client_script' - Absolute path
     * @example './client_script.js' - Relative path
     * @example './client_script' - Relative path
     */
    clientScriptModulePath: string;

    /**
     * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
     * once the pageInit script is completed. The method takes either an already created Message object or the options
     * object that would be used for creating the message.
     * @param message the message object to be displayed in browser
     */
    addPageInitMessage(message: message.Message): void;

    /**
     * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
     * once the pageInit script is completed. The method takes either an already created Message object or the options
     * object that would be used for creating the message.
     * @param options
     * @param options.type The type of message, see message.Type
     * @param [options.title] The title of the message. Defaults to empty string.
     * @param [options.message] The content of the message. Defaults to empty string.
     * @param [options.duration] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
     */
    addPageInitMessage(options: {
      type: message.Type | `${message.Type}`,
      title?: string,
      message?: string,
      duration?: number | string,
    }): void;

    /**
     * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
     * once the pageInit script is completed. The method takes either an already created Message object or the options
     * object that would be used for creating the message.
     * @param options
     * @param options.message the message object to be displayed in browser
     */
    addPageInitMessage(options: {
      message: message.Message,
    }): void;

    /**
     * Adds a button to the ui form
     *
     * @param options
     * @param options.label the label of button
     * @param [options.id] the script id of button
     * @param [options.functionName] the function name to be triggered onClick for the button
     */
    addButton(options: {
      label: string,
      id?: string,
      functionName?: string,
    }): Button;

    /**
     * add a credential field to the ui form
     *
     * @param options
     * @param options.id the script id of field
     * @param options.label the label of field
     * @param options.restrictToDomains  List of domains that restrict the destination domains for the credential
     * @param options.restrictToScriptIds  List of scripts where the credential can be used
     * @param [options.restrictToCurrentUser=false] Restrict the use of this credential to the user that creates is
     * @param [options.container]  Id of the form tab where the credential is placed
     */
    addCredentialField(options: {
      id: string,
      label: string,
      restrictToDomains?: string | string[],
      restrictToScriptIds?: string | string[],
      restrictToCurrentUser?: boolean,
      container?: string,
    }): Field;

    /**
     * add a secret key field to the ui form
     *                                        `
     * @param options
     * @param options.id the script id of field
     * @param options.label the label of field
     * @param [options.restrictToScriptIds]  List of scripts where the key can be used
     * @param [options.restrictToCurrentUser=false] Restrict the use of this key to the user that created it
     * @param [options.container]  Id of the form tab or group where the key is placed
     */
    addSecretKeyField(options: {
      id: string,
      label: string,
      restrictToScriptIds?: string | string[],
      restrictToCurrentUser?: boolean,
      container?: string,
    }): Field;

    /**
     * Add a field to the form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4337905245}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4337905245.html}
     *
     * @param options
     * @param options.id Internal id for the field
     * @param options.label UI label for the field
     * @param options.type Type of the field
     * @param [options.container] Tab or Field Group to add the field to
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType | `${FieldType}` | string,
      container?: string,
    }): Field;

    /**
     * Add a field to the form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4337905245}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4337905245.html}
     *
     * @param options
     * @param options.id Internal id for the field
     * @param options.label UI label for the field
     * @param options.type  Type of the field
     * @param [options.source] The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field
     * @param [options.container] Tab or Field Group to add the field to
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType.SELECT | FieldType.MULTISELECT
        | `${FieldType.SELECT | FieldType.MULTISELECT}`,
      source?: string | number,
      container?: string,
    }): Field;

    /**
     * Add a field to the form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4337905245}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4337905245.html}
     *
     * @param options
     * @param options.id Internal id for the field
     * @param options.label UI label for the field
     * @param options.type  Type of the field
     * @param [options.source] The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field
     * @param [options.container] Tab or Field Group to add the field to
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType.RADIO | `${FieldType.RADIO}`,
      source: string,
      container?: string,
    }): Field;

    /**
     * Add a field group to the form
     * @param options
     * @param options.id the script id for field group
     * @param options.label the label for field group
     * @param [options.tab] the tab where field group should be added
     */
    addFieldGroup(options: {
      id: string,
      label: string,
      tab?: string,
    }): FieldGroup;

    /**
     * Add a link to the form
     * @param options
     * @param options.type  The type of link
     * @param options.title  The UI label for the linl
     * @param options.url  The URL the link navigates to
     */
    addPageLink(options: {
      type: FormPageLinkType | `${FormPageLinkType}`,
      title: string,
      url: string,
    }): void;

    /**
     * Add a Sublist to the form
     * @param options
     * @param options.id  The internal id for the sublist
     * @param options.label The ui label for the sublist
     * @param options.type  The type of sublist
     * @param [options.tab] The id of the tab where to add the sublist to
     */
    addSublist(options: {
      id: string,
      label: string,
      type: SublistType | `${SublistType}`,
      tab?: string,
    }): Sublist;

    /**
     * Add a Subtab to the form
     * @param options
     * @param options.id  The internal id for the sub tab
     * @param options.label The UI label for the sub tab
     * @param [options.tab] The tab under which to display this subtab. If empty, it is added to the main tab.
     */
    addSubtab(options: {
      id: string,
      label: string,
      tab?: string,
    }): Tab;

    /**
     * Add a Tab to the form
     * @param options
     * @param options.id  The internal id for the Tab
     * @param options.label The UI label for the tab
     */
    addTab(options: {
      id: string,
      label: string,
    }): Tab;

    /**
     * Add a Reset button to the form
     * @param [options.label='Reset']  The UI label used for this button. If no label is provided, the label defaults to Reset.
     */
    addResetButton(label?: string): Button;

    /**
     * Add a Reset button to the form
     * @param [options]
     * @param [options.label='Reset']  The UI label used for this button. If no label is provided, the label defaults to Reset.
     */
    addResetButton(options?: {
      label?: string,
    }): Button;

    /**
     * Add a Submit button to the form
     * @param [label='Save'] The UI label for this button. If no label is provided, the label defaults to Save.
     */
    addSubmitButton(label?: string): Button;

    /**
     * Add a Submit button to the form
     * @param [options]
     * @param [options.label='Save'] The UI label for this button. If no label is provided, the label defaults to Save.
     */
    addSubmitButton(options?: {
      label?: string,
    }): Button;

    /**
     * Get a Button object from its id
     * @param id The id of the button to get
     */
    getButton(
      id: string,
    ): Button;

    /**
     * Get a Button object from its id
     * @param options
     * @param options.id The id of the button to get
     */
    getButton(options: {
      id: string,
    }): Button;

    /**
     * Get a Field object from its id
     * @param options
     * @param options.id The id for the field to get
     */
    getField(options: {
      id: string,
    }): Field;

    /**
     * Get a Subtab object from its id
     * @param options
     * @param options.id  The id for the Tab to get
     */
    getSubtab(options: {
      id: string,
    }): Tab;

    /**
     * Get a Subtab object from its id
     * @param options
     * @param options.id  The id for the Tab to get
     */
    getTab(options: {
      id: string,
    }): Tab;

    /**
     * Get all the Tab objects
     */
    getTabs(): string[];

    /**
     * Get a Sublist object from its id
     * @param id The id for the Sublist to get
     */
    getSublist(
      id: string,
    ): Sublist;

    /**
     * Get a Sublist object from its id
     * @param options
     * @param options.id The id for the Sublist to get
     */
    getSublist(options: {
      id: string,
    }): Sublist;

    /**
     * Insert a field before another field
     * @param options
     * @param options.field The field to insert
     * @param options.nextfield  Id of the field to insert before
     */
    insertField(options: {
      field: Field,
      nextfield: string,
    }): void;

    /**
     * Insert a sublist before another sublist
     * @param options
     * @param options.sublist   Sublist to insert
     * @param options.nextsublist  Id of the sublist to insert before
     */
    insertSublist(options: {
      sublist: Sublist,
      nextsublist: string,
    }): void;

    /**
     * Insert a subtab before another sublist
     * @param options
     * @param options.subtab   Subtab to insert
     * @param options.nextsub The id of the sublist/subtab you are inserting in front of
     */
    insertSubtab(options: {
      subtab: Tab,
      nextsub: string,
    }): void;

    /**
     * Insert a Tab before another tab
     * @param options
     * @param options.tab Tab to insert
     * @param options.nexttab    Id of the tab to insert before
     */
    insertTab(options: {
      tab: Tab,
      nexttab: string,
    }): void;

    /**
     * Remove a button given its id
     * @param options
     * @param options.id   Id of the button to remove
     */
    removeButton(options: {
      id: string,
    }): void;

    /**
     * Set the default values of many fields at once
     * @param values
     */
    updateDefaultValues(values: {
      [p: string]: string,
    }): void;

    /**
     * Set the default values of many fields at once
     * @param options
     * @param options.values
     */
    updateDefaultValues(options: {
      values: {
        [p: string]: string,
      },
    }): void;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Primary object used to encapsulate a list page
   * @constructor
   *
   * @since 2015.2
   */
  export interface List {

    /**
     * Sets the display style for this list
     *
     * @since 2015.2
     */
    style: string;

    /**
     * List title
     *
     * @since 2015.2
     */
    title: string;

    /**
     * The script file id to be used in the list page
     */
    clientScriptFileId: number;

    /**
     * The script file path to be used in the list page
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example 'SuiteScripts/client_script' - Absolute path
     * @example './client_script.js' - Relative path
     * @example './client_script' - Relative path
     */
    clientScriptModulePath: string;

    /**
     * Add a Button to the list page
     * @param options
     * @param options.id the script id for button
     * @param options.label the ui label of button
     * @param [options.functionName] the function name to be triggered onClick for the button
     */
    addButton(options: {
      id: string,
      label: string,
      functionName?: string,
    }): Button;

    /**
     * Add a Column to the List page
     * @param options
     * @param options.id   The internal id for the column
     * @param options.type  The type for the column
     * @param options.label  The ui label for the column
     * @param [options.align] The layout justification for this column.
     */
    addColumn(options: {
      id: string,
      type: FieldType | `${FieldType}` | string,
      label: string,
      align?: string,
    }): ListColumn;

    /**
     * Add an Edit or Edit/View column
     * @param options
     * @param options.column  The Edit/View column is added to the left of this column
     * @param [options.showView]  If true then an Edit/View column will be added. Otherwise only an Edit column will be added.
     * @param [options.showHrefCol] - If set, this value must be included in row data provided for the
     * list and will be used to determine whether the URL for this link is clickable
     */
    addEditColumn(options: {
      column: ListColumn,
      showView?: boolean,
      showHrefCol?: boolean,
    }): ListColumn;

    /**
     * Adds a navigation cross-link to the list page
     * @param options
     * @param options.type  The type of link to add: breadcrumb or crosslink
     * @param options.title  The UI text displayed in the link
     * @param options.url  The URL used for this link
     */
    addPageLink(options: {
      type: FormPageLinkType | `${FormPageLinkType}`,
      title: string,
      url: string,
    }): List;

    /**
     * Add a row (Array of name/value pairs or search.Result)
     * @param row  An Array of rows containing name/value pairs containing the values for corresponding
     */
    addRow(row: search.Result | Record<string, string>): List;

    /**
     * Add a row (Array of name/value pairs or search.Result)
     * @param options
     * @param options.row  An Array of rows containing name/value pairs containing the values for corresponding
     */
    addRow(options: {
      row: search.Result | Record<string, string>,
    }): List;

    /**
     * Adds multiple rows (Array of search.Result or name/value pair Arrays)
     * @param rows Array of search.Result or name/value pair Arrays
     */
    addRows(rows: search.Result[] | Record<string, string>[]): List;

    /**
     * Adds multiple rows (Array of search.Result or name/value pair Arrays)
     * @param options
     * @param options.rows Array of search.Result or name/value pair Arrays
     */
    addRows(options: {
      rows: search.Result[] | Record<string, string>[],
    }): List;
  }

  /**
   * Return a wrapped an nlobjListColumn
   * @constructor
   *
   * @since 2015.2
   */
  export interface ListColumn {

    /**
     *
     */
    label: string;

    /**
     * Adds a URL parameter (optionally defined per row) to the list column's URL
     * @param options
     * @param options.param  Name for the parameter
     * @param options.value  Value for the parameter
     * @param [options.dynamic]  If true, then the parameter value is actually an alias that is calculated per row
     */
    addParamToURL(options: {
      param: string,
      value: string,
      dynamic?: boolean,
    }): ListColumn;

    /**
     * Sets the base URL for the list column
     * @param options
     * @param options.url  The base url or a column in the data source that returs the
     * base url for each row
     * @param [options.dynamic] If true, then the URL is actually an alias that is calculated per row
     */
    setURL(options: {
      url: string,
      dynamic?: boolean,
    }): ListColumn;
  }
}