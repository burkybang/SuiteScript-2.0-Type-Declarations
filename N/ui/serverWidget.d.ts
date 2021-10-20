/// <reference path="../../typings.d.ts" />
/// <reference path="./message.d.ts" />
/// <reference path="../search.d.ts" />
/// <reference path="../http.d.ts" />

/**
 * SuiteScript serverWidget module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4321345532.html}
 *
 * @module N/ui/serverWidget
 * @NApiVersion 2.x
 */
interface serverWidget {

  /**
   * Instantiate a assistant object (specifying the title, and whether to hide the menu)
   *
   * @restriction Server SuiteScript only
   * @param {string} title form title
   * @param {boolean} [hideNavBar=false] (optional)
   * @return {Assistant}
   * @since 2015.2
   */
  createAssistant(
    title: string,
    hideNavBar?: boolean,
  ): serverWidget.Assistant

  /**
   * Instantiate a assistant object (specifying the title, and whether to hide the menu)
   *
   * @restriction Server SuiteScript only
   * @param {Object} options
   * @param {string} options.title form title
   * @param {boolean} [options.hideNavBar=false] (optional)
   * @return {Assistant}
   * @since 2015.2
   */
  createAssistant(options: {
    title: string,
    hideNavBar?: boolean,
  }): serverWidget.Assistant

  /**
   * Instantiate a form object (specifying the title, and whether to hide the menu)
   *
   * @restriction Server SuiteScript only
   * @param {string} title form title
   * @param {boolean} [hideNavBar=false] (optional)
   * @return {Form}
   * @since 2015.2
   */
  createForm(
    title: string,
    hideNavBar?: boolean,
  ): serverWidget.Form

  /**
   * Instantiate a form object (specifying the title, and whether to hide the menu)
   *
   * @restriction Server SuiteScript only
   * @param {Object} options
   * @param {string} options.title form title
   * @param {boolean} [options.hideNavBar=false] (optional)
   * @return {Form}
   * @since 2015.2
   */
  createForm(options: {
    title: string,
    hideNavBar?: boolean,
  }): serverWidget.Form

  /**
   * Instantiate a List object (specifying the title, and whether to hide the navigation bar)
   *
   * @restriction This API is available to Suitelets only.
   * @param {string} title list title
   * @param {boolean} [hideNavBar=false]
   * @return {List}
   * @since 2015.2
   */
  createList(
    title: string,
    hideNavBar?: boolean,
  ): serverWidget.List

  /**
   * Instantiate a List object (specifying the title, and whether to hide the navigation bar)
   *
   * @restriction This API is available to Suitelets only.
   * @param {Object} options
   * @param {string} options.title list title
   * @param {boolean} [options.hideNavBar=false]
   * @return {List}
   * @since 2015.2
   */
  createList(options: {
    title: string,
    hideNavBar?: boolean,
  }): serverWidget.List
}

declare namespace serverWidget {

  /**
   * @enum {string}
   * @readonly
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
   * @enum {string}
   * @readonly
   */
  export enum FormPageLinkType {
    BREADCRUMB = 'BREADCRUMB',
    CROSSLINK = 'CROSSLINK',
  }

  /**
   * @enum {string}
   * @readonly
   */
  export enum SublistType {
    EDITOR = 'EDITOR',
    INLINEEDITOR = 'INLINEEDITOR',
    LIST = 'LIST',
    STATICLIST = 'STATICLIST',
  }

  /**
   * @enum {string}
   * @readonly
   */
  export enum FieldBreakType {
    NONE = 'NONE',
    STARTCOL = 'STARTCOL',
    STARTROW = 'STARTROW',
  }

  /**
   * @enum {string}
   * @readonly
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
   * @enum {string}
   * @readonly
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
   * @enum {string}
   * @readonly
   */
  export enum SublistDisplayType {
    NORMAL = 'NORMAL',
    HIDDEN = 'HIDDEN',
  }

  /**
   * @enum {string}
   * @readonly
   */
  export enum LayoutJustification {
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
  }

  /**
   * @enum {string}
   * @readonly
   */
  export enum ListStyle {
    GRID = 'grid',
    REPORT = 'report',
    PLAIN = 'plain',
    NORMAL = 'normal',
  }

  /**
   * @enum {string}
   * @readonly
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
   *
   * @return {Tab}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Tab {

    /**
     * The label of the Tab
     *
     * @name Tab#label
     * @type {string}
     */
    label: string

    /**
     * The Tab's field help
     *
     * @name Tab#helpText
     * @type {string}
     */
    helpText: string
  }

  /**
   * Encalsulates a Sublist in a Form or a serverWidget.Assistant
   *
   * @return {Sublist}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Sublist {

    /**
     * The label of the field group
     *
     * @name Sublist#label
     * @type {string}
     */
    label: string

    /**
     * The number of lines in the Sublist
     *
     * @name Sublist#lineCount
     * @type {number}
     * @readonly
     */
    lineCount: number

    /**
     * Set an id of a field that is to have unique values accross the rows in the sublist
     *
     * @param {Object} options
     * @param {string} options.id The id of the field to use as a unique field
     * @return {Sublist} same object for chaining
     */
    updateUniqueFieldId(options: {
      id: string,
    }): this

    /**
     * Id of a field designated as a totalling column, which is used to calculate and display a running total for the sublist
     *
     * @param {Object} options
     * @param {string} options.id The id of the field to use as a total field
     * @return {Sublist} same object for chaining
     */
    updateTotallingFieldId(options: {
      id: string,
    }): this

    /**
     * Display type of the sublist
     *
     * @name Sublist#displayType
     * @type {SublistDisplayType}
     */
    displayType: SublistDisplayType

    /**
     * Inline help text to this sublist
     * @name Sublist#helpText
     * @type {string}
     */
    helpText: string

    /**
     * Adds a button to the sublist
     *
     * @param {Object} options
     * @param {string} options.id the script id of button
     * @param {string} options.label the label of button
     * @param {string} [options.functionName] the function name to be triggered onClick for the button
     * @return {Button}
     */
    addButton(options: {
      id: string,
      label: string,
      functionName?: string,
    }): Button

    /**
     * Returns string value of a sublist field.
     *
     * @param {Object} options
     * @param {string} options.id Id of the field
     * @param {number} options.line Line number
     * @return {string}
     */
    getSublistValue(options: {
      id: string,
      line: number,
    }): string

    /**
     * Set the value of a field on the list
     *
     * @param {Object} options
     * @param {string} options.id   id of the field to set
     * @param {number} options.line line number
     * @param {string} options.value value to set on the field
     * @return {void}
     */
    setSublistValue(options: {
      id: string,
      line: number,
      value: string,
    }): void

    /**
     * Adds refresh all buttons to the sublist
     *
     * @return {Button}
     */
    addRefreshButton(): Button

    /**
     * Adds a "Mark All" and an "Unmark All" button to a sublist.
     *
     * @return {Button[]}
     */
    addMarkAllButtons(): Button[]

    /**
     * Add a field, column,  to the Sublist
     *
     * @param {Object} options
     * @param {string} options.id    id of the filed to add
     * @param {string} options.label the UI label for the field
     * @param {FieldType|string} options.type  the type for this field
     * @param {string} [options.source] The internal id of the source list for this field if the field is a select
     * @param {string} [options.container] Used to specify either a tab or a field group
     * @return {Field}
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType | string,
      source?: string,
      container?: string,
    }): Field

    /**
     * Gets field from sublist
     *
     * @param {string} id    id of the field to get
     * @return {Field}
     */
    getField(
      id: string,
    ): Field

    /**
     * Gets field from sublist
     *
     * @param {Object} options
     * @param {string} options.id    id of the field to get
     * @return {Field}
     */
    getField(options: {
      id: string,
    }): Field
  }

  /**
   * Encapsulate a field group on an Assistant or a Form objects.
   *
   * @return {FieldGroup}
   * @constructor
   *
   * @since 2015.2
   */
  export interface FieldGroup {

    /**
     * Is the field group collapsible
     *
     * @name FieldGroup#isCollapsible
     * @type {boolean}
     */
    isCollapsible: boolean

    /**
     * Is the field group collapsed
     *
     * @name FieldGroup#isCollapsed
     * @type {boolean}
     */
    isCollapsed: boolean

    /**
     * Is the field group's border hidden
     *
     * @name FieldGroup#isBorderHidden
     * @type {boolean}
     */
    isBorderHidden: boolean

    /**
     * Do all the fields in this group display in a single column
     *
     * @name Field#isBorderHidden
     * @type {boolean}
     */
    isSingleColumn: boolean

    /**
     * The label of the field group
     *
     * @name FieldGroup#label
     * @type {string}
     */
    label: string
  }

  /**
   * Return a wrapped an nlobjField
   *
   * @return {Field}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Field {

    /**
     * The internal id of the field
     *
     * @name Field#id
     * @type {string}
     * @readonly
     */
    id: string

    /**
     * The type of the field
     *
     * @name Field#FieldType
     * @type {FieldType}
     * @readonly
     */
    type: FieldType

    /**
     * The text that gets displayed in lieu of the field value for URL fields
     *
     * @name Field#linkText
     * @type {string}
     */
    linkText: string

    /**
     * The max length of the field
     *
     * @name Field#maxLength
     * @type {number}
     */
    maxLength: number

    /**
     * Is the field mandatory
     *
     * @name Field#isMandatory
     * @type {boolean}
     */
    isMandatory: boolean

    /**
     * The alias for the field. By default the alias is the field id
     *
     * @name Field#alias
     * @type {string}
     */
    alias: string

    /**
     * The default value of the field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4335275520.html}
     *
     * @name Field#defaultValue
     * @type {string|string[]|number|Date|boolean}
     */
    defaultValue: string | string[] | number | Date | boolean

    /**
     * If Rich Text Editing is enabled, you can use this property to set the height of the rich text field only.
     *
     * @name Field#richTextHeight
     * @type {number}
     */
    richTextHeight: number

    /**
     * If Rich Text Editing is enabled, you can use this property to set the width of the rich text field only.
     *
     * @name Field#richTextWidth
     * @type {number}
     */
    richTextWidth: number

    /**
     * The label of the field
     *
     * @name Field#label
     * @type {string}
     */
    label: string

    /**
     * The number of empty field spaces before/above this field
     *
     * @name Field#padding
     * @type {number}
     */
    padding: number

    /**
     * Update the breakType of the field
     *
     * @param {Object} options
     * @param {FieldBreakType} options.breakType
     * @return {Field} same object for chaining
     */
    updateBreakType(options: {
      breakType: FieldBreakType,
    }): this

    /**
     * Update the layout type of the field
     *
     * @param {Object} options
     * @param {FieldLayoutType} options.layoutType
     * @return {Field} same object for chaining
     */
    updateLayoutType(options: {
      layoutType: FieldLayoutType,
    }): this

    /**
     * Sets the height and width for the field. Only supported on multi-selects,
     * long text, rich text, and fields that get rendered as INPUT (type=text) fields.
     * This API is not supported on list/record fields.
     *
     * @param {Object} options
     * @param {number} options.height
     * @param {number} options.width
     * @return {Field} same object for chaining
     */
    updateDisplaySize(options: {
      height: number,
      width: number,
    }): this

    /**
     * Udpdate the field display type
     *
     * @param {Object} options
     * @param {FieldDisplayType|string} options.displayType
     * @return {Field} same object for chaining
     */
    updateDisplayType(options: {
      displayType: FieldDisplayType | string,
    }): this

    /**
     * Set help text for a field
     *
     * @param {Object} options
     * @param {string} options.help The help text for the field
     * @param {boolean} [options.showInlineForAssistant] This means that field help will appear only in a field help popup box when the field label is clicked
     * @return {Field} same object for chaining
     */
    setHelpText(options: {
      help: string,
      showInlineForAssistant?: boolean,
    }): this

    /**
     * Get the select options for a field
     * @restriction Dynamic mode only
     *
     * @param {Object} [options]
     * @param {string} [options.filter] A search string to filter the select options that are returned.
     * @param {'contains'|'is'|'startswith'} [options.filteroperator]  Supported operators are contains | is | startswith. If not specified, defaults to the contains operator
     * @return {{value:string, text:string}[]}
     */
    getSelectOptions(options?: {
      filter?: string,
      filteroperator?: 'contains' | 'is' | 'startswith'
    }): {
      value: string,
      text: string,
    }[]

    /**
     * Add a select option to a select field
     *
     * @param {Object} options
     * @param {string|number} options.value The internal id of the option
     * @param {string} options.text  The display text for this option
     * @param {boolean} [options.isSelected=false] If true, this option is selected
     * @return {void}
     */
    addSelectOption(options: {
      value: string | number,
      text: string,
      isSelected?: boolean,
    }): void
  }

  /**
   * Return a wrapped an nlobjButton
   *
   * @return {Button}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Button {

    /**
     * The label of the button
     *
     * @name Button#label
     * @type {string}
     */
    label: string

    /**
     * Is the button disabled
     *
     * @name Button#isDisabled
     * @type {boolean}
     */
    isDisabled: boolean

    /**
     * Is the button hidden
     *
     * @name Button#isHidden
     * @type {boolean}
     */
    isHidden: boolean
  }

  /**
   * Return a wrapped an nlobjAssistantStep
   *
   * @return {AssistantStep}
   * @constructor
   *
   * @since 2015.2
   */
  export interface AssistantStep {

    /**
     * The internal id of the step
     *
     * @name AssistantStep#id
     * @type {string}
     * @readonly
     */
    id: string;

    /**
     * The label of the step
     *
     * @name AssistantStep#label
     * @type {string}
     */
    label: string;

    /**
     * The numerical order of the step
     *
     * @name AssistantStep#stepNumber
     * @type {number}
     */
    stepNumber: number

    /**
     * Help text for the step
     *
     * @name AssistantStep#helpText
     * @type {number}
     */
    helpText: number

    /**
     * Get all sublist fields' internal ids entered by the user during this step
     *
     * @param {Object} options
     * @param {string} options.group  The internal id of the sublist
     * @return {string[]}
     */
    getSublistFieldIds(options: {
      group: string,
    }): string[]

    /**
     * Use this method to get all sublists entered by the user during this step
     *
     * @return {string[]}
     */
    getSubmittedSublistIds(): string[]

    /**
     * Get all ids for fields in the assistant step
     *
     * @return {string[]}
     */
    getFieldIds(): string[]

    /**
     * Get the value of a field
     *
     * @param {Object} options
     * @param {string} options.id Internal id for the field
     * @return {string|string[]}
     */
    getValue(options: {
      id: string,
    }): string | string[]

    /**
     * Get the number of lines in a sublist
     *
     * @param {Object} options
     * @param {string} options.group internal Id of the sublist
     * @return {number}
     */
    getLineCount(options: {
      group: string,
    }): number

    /**
     * Get the value of a field in a sublist
     *
     * @param {Object} options
     * @param {string} options.group Internal id of the sublist
     * @param {string} options.id Internal id of the field
     * @param {number} options.line line number
     * @return {string}
     */
    getSublistValue(options: {
      group: string,
      id: string,
      line: number,
    }): string
  }

  /**
   * Return a wrapped an nlobjAssistant
   *
   *
   * @return {Assistant}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Assistant {

    /**
     * The current step of the assistant
     *
     * @name Assistant#currentStep
     * @type {AssistantStep}
     * @readonly
     */
    currentStep: AssistantStep

    /**
     * An error message for the current step. If you choose, you can use HTML tags to format the message.
     *
     * @name Assistant#errorHtml
     * @type {string}
     */
    errorHtml: string

    /**
     * Mark the last page in an assistant. Set the rich text to display a completion message on the last page.
     *
     * @name Assistant#finishedHtml
     * @type {string}
     */
    finishedHtml: string

    /**
     * Show or hide the assistant step numbers
     *
     * @name Assistant#hideStepNumber
     * @type {boolean}
     */
    hideStepNumber: boolean

    /**
     * Use this method to enforce a sequential ordering of assistant steps. If steps are ordered,
     * users must complete the current step before the assistant will allow them to proceed to
     * the next step. From a display perspective, ordered steps will always appear in the left
     * panel of the assistant. Note that by default, steps in an assistant are ordered.
     *
     * @name Assistant#isNotOrdered
     * @type {boolean}
     */
    isNotOrdered: boolean

    /**
     * Overall title of the Assistant
     *
     * @name Assistant#title
     * @type {string}
     */
    title: string

    /**
     * Show/hide the Add to Shortcuts link that appears in the top-right corner of an assistant page.
     *
     * @name Assistant#hideAddToShortcutsLink
     * @type {boolean}
     */
    hideAddToShortcutsLink: boolean

    /**
     * Set the default values of many fields at once
     *
     * @param {Object[]} values
     * @return {void}
     */
    updateDefaultValues(options: {
      values: Object[],
    }): void

    /**
     * The script file id to be used in the assistant
     *
     * @name Assistant#clientScriptFileId
     * @type {number}
     */
    clientScriptFileId: number

    /**
     * The script file path to be used in the assistant
     *
     * @name Assistant#clientScriptModulePath
     * @type {string}
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example './client_script.js' - Relative path
     */
    clientScriptModulePath: string

    /**
     * Set the splash screen for an assistant page.
     *
     * @param {Object}options
     * @param {string}options.title Title of the splash screen
     * @param {string}options.text1 Text of the splash scheen
     * @param {string} [options.text2] If you want splash content to have a two-column appearance, provide content
     * @return {void}
     * in the text2 parameter.
     */
    setSplash(options: {
      title: string,
      text1: string,
      text2: string
    }): void

    /**
     * Get a Field object from its id
     *
     * @param {Object} options
     * @param {string} options.id Internal id for the field
     * @return {Field}
     */
    getField(options: {
      id: string,
    }): Field

    /**
     * Get a FieldGroup  object from its id
     *
     * @param {Object} options
     * @param {string} options.id Id of the field group
     * @return {FieldGroup}
     */
    getFieldGroup(options: {
      id: string,
    }): FieldGroup

    /**
     * Get the name of last action taken by the user
     *
     * @return {string}
     */
    getLastAction(): string

    /**
     * Get the step the last submitted action came from
     *
     * @return {AssistantStep}
     */
    getLastStep(): AssistantStep

    /**
     * Get next logical step corresponding to the user's last submitted action
     *
     * @return {AssistantStep}
     */
    getNextStep(): AssistantStep

    /**
     * Get the number of steps
     *
     * @return {number}
     */
    getStepCount(): number

    /**
     * True if the assistant has an error set
     *
     * @return {boolean}
     */
    hasErrorHtml(): boolean

    /**
     * Is the assistant finished
     *
     * @return {boolean}
     */
    isFinished(): boolean

    /**
     * Get the a step given its id
     *
     * @param {Object} options
     * @param {string} options.id Id for the step
     * @return {AssistantStep}
     */
    getStep(options: {
      id: string,
    }): AssistantStep

    /**
     * Get a Sublist  object from its id
     *
     * @param {Object} options
     * @param {string} options.id  Id for the sublist
     * @return {Sublist}
     */
    getSublist(options: {
      id: string,
    }): Sublist

    /**
     * Add a step to the assistant
     * @param {Object} options
     * @param {string} options.id  Id for the step
     * @param {string} options.label UI label for the step
     * @return {void}
     */
    addStep(options: {
      id: string,
      label: string,
    }): void

    /**
     * Add a field to the Assistant
     *
     * @param {Object} options
     * @param {string} options.id  Id for the field
     * @param {string} options.label Label for the field
     * @param {FieldType|string} options.type  Type for the field
     * @param {string} [options.source] The internalId or scriptId of the source list for this field if
     * it is a select (List/Record) field.
     * @param {string} [options.container]  Id for the field group of tab to place the field in
     * @return {Field}
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType | string,
      source?: string,
      container?: string,
    }): Field

    /**
     * Add a field group to the assistant
     *
     * @param {Object} options
     * @param {string} options.id  Id for the field group
     * @param {string} options.label UI label for the field group
     * @return {FieldGroup}
     */
    addFieldGroup(options: {
      id: string,
      label: string,
    }): FieldGroup

    /**
     * Add a Sublist to the assistant
     *
     * @param {Object} options
     * @param {string} options.id  Id for the sublist
     * @param {string} options.label UI label for the sublist
     * @param {SublistType} options.type  Type of sublist
     * @return {Sublist}
     */
    addSublist(options: {
      id: string,
      label: string,
      type: SublistType,
    }): Sublist

    /**
     * Get all ids for fields in the assistant
     *
     * @return {string[]}
     */
    getFieldIds(): string[]

    /**
     * Get all field ids in the given assistant field group
     * @param {Object} options
     * @param {string} options.id Id of the field group
     * @return {string[]}
     */
    getFieldIdsByFieldGroup(options: {
      id: string,
    }): string[]

    /**
     * Get all ids for field groups in the assistant
     *
     * @return {string[]}
     */
    getFieldGroupIds(): string[]

    /**
     * Get all ids for sublists in the assistant
     *
     * @return {string[]}
     */
    getSublistIds(): string[]

    /**
     * Get all steps in the assistant
     *
     * @return {AssistantStep[]}
     */
    getSteps(): AssistantStep[]

    /**
     *  Use this method to manage redirects in an assistant. In most cases, an assistant redirects to itself
     *  The sendRedirect(response) method is like a wrapper method that performs this redirect. This method
     *  also addresses the case in which one assistant redirects to another assistant. In this scenario,
     *  the second assistant must return to the first assistant if the user Cancels or the user Finishes.
     *  This method, when used in the second assistant, ensures that the user is redirected back to the
     *  first assistant.
     * @param {Object} options
     * @param {ServerResponse} options.response
     * @return {void}
     */
    sendRedirect(options: {
      response: http.ServerResponse,
    }): void
  }

  /**
   * Primary object used to encapsulate a NetSuite-looking form.
   *
   *
   * @return {Form}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Form {

    /**
     * The form title
     * @name Form#title
     * @type {string}
     */
    title: string

    /**
     * The script file id to be used in the form
     * @name Form#clientScriptFileId
     * @type {number}
     */
    clientScriptFileId: number

    /**
     * The script file path to be used in the form
     * @name Form#clientScriptModulePath
     * @type {string}
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example './client_script.js' - Relative path
     */
    clientScriptModulePath: string

    /**
     * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
     * once the pageInit script is completed. The method takes either an already created Message object or the options
     * object that would be used for creating the message.
     * @param {message.Message} message the message object to be displayed in browser
     * @return {void}
     */
    addPageInitMessage(message: message.Message): void

    /**
     * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
     * once the pageInit script is completed. The method takes either an already created Message object or the options
     * object that would be used for creating the message.
     * @param {Object} options
     * @param {message.Type} options.type The type of message, see message.Type
     * @param {string} [options.title] The title of the message. Defaults to empty string.
     * @param {string} [options.message] The content of the message. Defaults to empty string.
     * @param {number|string} [options.duration] The amount of time (in milliseconds) to show the message. Default is 0 (show forever)
     * @return {void}
     */
    addPageInitMessage(options: {
      type: message.Type,
      title?: string,
      message?: string,
      duration?: number | string,
    }): void

    /**
     * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
     * once the pageInit script is completed. The method takes either an already created Message object or the options
     * object that would be used for creating the message.
     * @param {Object} options
     * @param {message.Message} options.message the message object to be displayed in browser
     * @return {void}
     */
    addPageInitMessage(options: {
      message: message.Message,
    }): void

    /**
     * Adds a button to the ui form
     *
     * @param {Object} options
     * @param {string} options.label the label of button
     * @param {string} [options.id] the script id of button
     * @param {string} [options.functionName] the function name to be triggered onClick for the button
     * @return {Button}
     */
    addButton(options: {
      label: string,
      id?: string,
      functionName?: string,
    }): Button

    /**
     * add a credential field to the ui form
     *
     * @param {Object} options
     * @param {string} options.id the script id of field
     * @param {string} options.label the label of field
     * @param {string|string[]} options.restrictToDomains  List of domains that restrict the destination domains for the credential
     * @param {string|string[]} options.restrictToScriptIds  List of scripts where the credential can be used
     * @param {boolean} [options.restrictToCurrentUser=false] Restrict the use of this credential to the user that creates is
     * @param {string} [options.container]  Id of the form tab where the credential is placed
     * @return {Field}
     */
    addCredentialField(options: {
      id: string,
      label: string,
      restrictToDomains?: string | string[],
      restrictToScriptIds?: string | string[],
      restrictToCurrentUser?: boolean,
      container?: string,
    }): Field

    /**
     * add a secret key field to the ui form
     *                                        `
     * @param {Object} options
     * @param {string} options.id the script id of field
     * @param {string} options.label the label of field
     * @param {string|string[]} [options.restrictToScriptIds]  List of scripts where the key can be used
     * @param {boolean} [options.restrictToCurrentUser=false] Restrict the use of this key to the user that created it
     * @param {string} [options.container]  Id of the form tab or group where the key is placed
     * @return {Field}
     */
    addSecretKeyField(options: {
      id: string,
      label: string,
      restrictToScriptIds?: string | string[],
      restrictToCurrentUser?: boolean,
      container?: string,
    }): Field

    /**
     * Add a field to the form
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4337905245.html}
     *
     * @param {Object} options
     * @param {string} options.id Internal id for the field
     * @param {string} options.label UI label for the field
     * @param {FieldType|string} options.type  Type of the field
     * @param {string} [options.source]  The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field
     * @param {string} [options.container]   Tab or Field Group to add the field to
     * @return {Field}
     */
    addField(options: {
      id: string,
      label: string,
      type: FieldType | string,
      source?: string,
      container?: string,
    }): Field

    /**
     * Add a field group to the form
     * @param {Object} options
     * @param {string} options.id the script id for field group
     * @param {string} options.label the label for field group
     * @param {string} [options.tab] the tab where field group should be added
     *
     * @return {FieldGroup}
     */
    addFieldGroup(options: {
      id: string,
      label: string,
      tab?: string,
    }): FieldGroup

    /**
     * Add a link to the form
     * @param {Object} options
     * @param {FormPageLinkType} options.type  The type of link
     * @param {string} options.title  The UI label for the linl
     * @param {string} options.url  The URL the link navigates to
     * @return {void}
     */
    addPageLink(options: {
      type: FormPageLinkType,
      title: string,
      url: string,
    }): void

    /**
     * Add a Sublist to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the sublist
     * @param {string} options.label The ui label for the sublist
     * @param {SublistType} options.type  The type of sublist
     * @param {string} [options.tab] The id of the tab where to add the sublist to
     * @return {Sublist}
     */
    addSublist(options: {
      id: string,
      label: string,
      type: SublistType,
      tab?: string,
    }): Sublist

    /**
     * Add a Subtab to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the sub tab
     * @param {string} options.label The UI label for the sub tab
     * @param {string} [options.tab] The tab under which to display this subtab. If empty, it is added to the main tab.
     * @return {Tab}
     */
    addSubtab(options: {
      id: string,
      label: string,
      tab?: string,
    }): Tab

    /**
     * Add a Tab to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the Tab
     * @param {string} options.label The UI label for the tab
     * @return {Tab}
     */
    addTab(options: {
      id: string,
      label: string,
    }): Tab

    /**
     * Add a Reset button to the form
     * @param {string} [options.label='Reset']  The UI label used for this button. If no label is provided, the label defaults to Reset.
     * @return {Button}
     */
    addResetButton(label?: string): Button

    /**
     * Add a Reset button to the form
     * @param {Object} [options]
     * @param {string} [options.label='Reset']  The UI label used for this button. If no label is provided, the label defaults to Reset.
     * @return {Button}
     */
    addResetButton(options?: {
      label?: string,
    }): Button

    /**
     * Add a Submit button to the form
     * @param {string} [label='Save'] The UI label for this button. If no label is provided, the label defaults to Save.
     * @return {Button}
     */
    addSubmitButton(label?: string): Button

    /**
     * Add a Submit button to the form
     * @param {Object} [options]
     * @param {string} [options.label='Save'] The UI label for this button. If no label is provided, the label defaults to Save.
     * @return {Button}
     */
    addSubmitButton(options?: {
      label?: string,
    }): Button

    /**
     * Get a Button object from its id
     * @param {Object} options
     * @param {string} options.id The id of the button to get
     * @return {Button}
     */
    getButton(options: {
      id: string,
    }): Button

    /**
     * Get a Field object from its id
     * @param {Object} options
     * @param {string} options.id The id for the field to get
     * @return {Field}
     */
    getField(options: {
      id: string,
    }): Field

    /**
     * Get a Subtab object from its id
     * @param {Object} options
     * @param {string} options.id  The id for the Tab to get
     * @return {Tab}
     */
    getSubtab(options: {
      id: string,
    }): Tab

    /**
     * Get a Subtab object from its id
     * @param {Object} options
     * @param {string} options.id  The id for the Tab to get
     * @return {Tab}
     */
    getTab(options: {
      id: string,
    }): Tab

    /**
     * Get all the Tab objects
     * @return {Tab[]}
     */
    getTabs(): Tab[]

    /**
     * Get a Sublist object from its id
     * @param {string} id The id for the Sublist to get
     * @return {Sublist}
     */
    getSublist(
      id: string,
    ): Sublist

    /**
     * Get a Sublist object from its id
     * @param {Object} options
     * @param {string} options.id The id for the Sublist to get
     * @return {Sublist}
     */
    getSublist(options: {
      id: string,
    }): Sublist

    /**
     * Insert a field before another field
     * @param {Object} options
     * @param {Field} options.field The field to insert
     * @param {string} options.nextfield  Id of the field to insert before
     * @return {void}
     */
    insertField(options: {
      field: Field,
      nextfield: string,
    }): void

    /**
     * Insert a sublist before another sublist
     * @param {Object} options
     * @param {Sublist} options.sublist   Sublist to insert
     * @param {string} options.nextsublist  Id of the sublist to insert before
     * @return {void}
     */
    insertSublist(options: {
      sublist: Sublist,
      nextsublist: string,
    }): void

    /**
     * Insert a subtab before another sublist
     * @param {Object} options
     * @param {Subtab} options.subtab   Subtab to insert
     * @param {string} options.nextsubtab The id of the sublist/subtab you are inserting in front of
     * @return {void}
     */
    insertSubtab(options: {
      subtab: Tab,
      nextsubtab: string,
    }): void

    /**
     * Insert a Tab before another tab
     * @param {Object} options
     * @param {Tab} options.tab Tab to insert
     * @param {string} options.nexttab    Id of the tab to insert before
     * @return {void}
     */
    insertTab(options: {
      tab: Tab,
      nexttab: string,
    }): void

    /**
     * Remove a button given its id
     * @param {Object} options
     * @param {string} options.id   Id of the button to remove
     * @return {void}
     */
    removeButton(options: {
      id: string,
    }): void

    /**
     * Set the default values of many fields at once
     * @param {Object<string, string>} values
     * @return {void}
     */
    updateDefaultValues(values: {
      [p: string]: string,
    }): void

    /**
     * Set the default values of many fields at once
     * @param {Object} options
     * @param {Object<string, string>} options.values
     * @return {void}
     */
    updateDefaultValues(options: {
      values: {
        [p: string]: string,
      },
    }): void

    /**
     * Convert to JSON object
     * @return {Object<string, *>}
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * Primary object used to encapsulate a list page
   *
   * @return {List}
   * @constructor
   *
   * @since 2015.2
   */
  export interface List {

    /**
     * Sets the display style for this list
     * @name List#style
     * @type {string}
     * @since 2015.2
     */
    style: string

    /**
     * List title
     * @name List#title
     * @type {string}
     * @since 2015.2
     */
    title: string

    /**
     * The script file id to be used in the list page
     * @name List#clientScriptFileId
     * @type {number}
     */
    clientScriptFileId: number

    /**
     * The script file path to be used in the list page
     * @name List#clientScriptModulePath
     * @type {string}
     *
     * @example 'SuiteScripts/client_script.js' - Absolute path
     * @example './client_script.js' - Relative path
     */
    clientScriptModulePath: string

    /**
     * Add a Button to the list page
     * @param {Object} options
     * @param {string} options.id the script id for button
     * @param {string} options.label the ui label of button
     * @param {string} [options.functionName] the function name to be triggered onClick for the button
     * @return {Button}
     */
    addButton(options: {
      id: string,
      label: string,
      functionName?: string,
    }): Button

    /**
     * Add a Column to the List page
     * @param {Object} options
     * @param {string} options.id   The internal id for the column
     * @param {FieldType|string} options.type  The type for the column
     * @param {string} options.label  The ui label for the column
     * @param {string} [options.align] The layout justification for this column.
     * @return {ListColumn}
     */
    addColumn(options: {
      id: string,
      type: FieldType | string,
      label: string,
      align?: string,
    }): ListColumn

    /**
     * Add an Edit or Edit/View column
     * @param {Object} options
     * @param {ListColumn} options.column  The Edit/View column is added to the left of this column
     * @param {boolean} [options.showView]  If true then an Edit/View column will be added. Otherwise only an Edit column will be added.
     * @param {boolean} [options.showHrefCol] - If set, this value must be included in row data provided for the
     * list and will be used to determine whether the URL for this link is clickable
     * @return {ListColumn}
     */
    addEditColumn(options: {
      column: ListColumn,
      showView?: boolean,
      showHrefCol?: boolean,
    }): ListColumn

    /**
     * Adds a navigation cross-link to the list page
     * @param {Object} options
     * @param {FormPageLinkType} options.type  The type of link to add: breadcrumb or crosslink
     * @param {string} options.title  The UI text displayed in the link
     * @param {string} options.url  The URL used for this link
     * @return {List}
     */
    addPageLink(options: {
      type: FormPageLinkType,
      title: string,
      url: string,
    }): List

    /**
     * Add a row (Array of name/value pairs or search.Result)
     * @param {Object} options
     * @param {search.Result|Object<string, string>} options.row  An Array of rows containing name/value pairs containing the values for corresponding
     * @return {List}
     */
    addRow(options: {
      row: search.Result | { [p: string]: string }
    }): List

    /**
     * Adds multiple rows (Array of search.Result or name/value pair Arrays)
     * @param {Object} options
     * @param {search.Result[]|Object<string, string>[]} options.rows Array of search.Result or name/value pair Arrays
     * @return {List}
     */
    addRows(options: {
      rows: search.Result[] | { [p: string]: string }[]
    }): List
  }

  /**
   * Return a wrapped an nlobjListColumn
   *
   *
   * @return {ListColumn}
   * @constructor
   *
   * @since 2015.2
   */
  export interface ListColumn {

    /**
     * @name ColumnList#label Label this list column
     * @type {string} string
     */
    label: string

    /**
     * Adds a URL parameter (optionally defined per row) to the list column's URL
     * @param {Object} options
     * @param {string} options.param  Name for the parameter
     * @param {string} options.value  Value for the parameter
     * @param {boolean} [options.dynamic]  If true, then the parameter value is actually an alias that is calculated per row
     * @return {ListColumn}
     */
    addParamToURL(options: {
      param: string,
      value: string,
      dynamic?: boolean,
    }): ListColumn

    /**
     * Sets the base URL for the list column
     * @param {Object} options
     * @param {string} options.url  The base url or a column in the data source that returs the
     * base url for each row
     * @param {boolean} [options.dynamic] If true, then the URL is actually an alias that is calculated per row
     * @return {ListColumn}
     */
    setURL(options: {
      url: string,
      dynamic?: boolean,
    }): ListColumn
  }
}