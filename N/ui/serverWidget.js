/**
 * SuiteScript module
 *
 * @module N/ui/serverWidget
 * @NApiVersion 2.x
 *
 */
function serverWidget() {
}

/**
 * Instantiate a assistant object (specifying the title, and whether to hide the menu)
 * @restriction Server SuiteScript only
 * @param {Object} config
 * @param {string} config.title form title
 * @param {boolean} config.hideNavBar (optional)
 * @return {Assistant}
 * @since 2015.2
 */
serverWidget.prototype.createAssistant = function (options) {
};

/**
 * Instantiate a form object (specifying the title, and whether to hide the menu)
 * @restriction Server SuiteScript only
 * @param {Object} config
 * @param {string} config.title form title
 * @param {boolean} config.hideNavBar (optional)
 * @return {Form}
 * @since 2015.2
 */
serverWidget.prototype.createForm = function (options) {
};

/**
 * Instantiate a List object (specifying the title, and whether to hide the navigation bar)
 * @restriction This API is available to Suitelets only.
 * @param {Object} config
 * @param {string} config.title list title
 * @param {boolean} [config.hideNavBa]
 * @return {List}
 * @since 2015.2
 */
serverWidget.prototype.createList = function (options) {
};

/**
 * @enum
 */
function serverWidgetFieldType() {
  this.TEXT = 'TEXT';
  this.RADIO = 'RADIO';
  this.LABEL = 'LABEL';
  this.EMAIL = 'EMAIL';
  this.PHONE = 'PHONE';
  this.DATE = 'DATE';
  this.DATETIME = 'DATETIME';
  this.DATETIMETZ = 'DATETIMETZ';
  this.CURRENCY = 'CURRENCY';
  this.FLOAT = 'FLOAT';
  this.INTEGER = 'INTEGER';
  this.CHECKBOX = 'CHECKBOX';
  this.SELECT = 'SELECT';
  this.URL = 'URL';
  this.TIMEOFDAY = 'TIMEOFDAY';
  this.TEXTAREA = 'TEXTAREA';
  this.MULTISELECT = 'MULTISELECT';
  this.IMAGE = 'IMAGE';
  this.INLINEHTML = 'INLINEHTML';
  this.PASSWORD = 'PASSWORD';
  this.HELP = 'HELP';
  this.PERCENT = 'PERCENT';
  this.LONGTEXT = 'LONGTEXT';
  this.RICHTEXT = 'RICHTEXT';
  this.FILE = 'FILE';
}

serverWidget.prototype.FieldType = serverWidgetFieldType;

/**
 * @enum
 */
function serverWidgetFormPageLinkType() {
  this.BREADCRUMB = 'BREADCRUMB';
  this.CROSSLINK = 'CROSSLINK';
}

serverWidget.prototype.FormPageLinkType = serverWidgetFormPageLinkType;

/**
 * @enum
 */
function serverWidgetSublistType() {
  this.EDITOR = 'EDITOR';
  this.INLINEEDITOR = 'INLINEEDITOR';
  this.LIST = 'LIST';
  this.STATICLIST = 'STATICLIST';
}

serverWidget.prototype.SublistType = serverWidgetSublistType;

/**
 * @enum
 */
function serverWidgetFieldBreakType() {
  this.NONE = 'NONE';
  this.STARTCOL = 'STARTCOL';
  this.STARTROW = 'STARTROW';
}

serverWidget.prototype.FieldBreakType = serverWidgetFieldBreakType;

/**
 * @enum
 */
function serverWidgetFieldLayoutType() {
  this.NORMAL = 'NORMAL';
  this.OUTSIDE = 'OUTSIDE';
  this.OUTSIDEBELOW = 'OUTSIDEBELOW';
  this.OUTSIDEABOVE = 'OUTSIDEABOVE';
  this.STARTROW = 'STARTROW';
  this.MIDROW = 'MIDROW';
  this.ENDROW = 'ENDROW';
}

serverWidget.prototype.FieldLayoutType = serverWidgetFieldLayoutType;

/**
 * @enum
 */
function serverWidgetFieldDisplayType() {
  this.NORMAL = 'NORMAL';
  this.HIDDEN = 'HIDDEN';
  this.READONLY = 'READONLY';
  this.DISABLED = 'DISABLED';
  this.ENTRY = 'ENTRY';
  this.INLINE = 'INLINE';
}

serverWidget.prototype.FieldDisplayType = serverWidgetFieldDisplayType;

/**
 * @enum
 */
function serverWidgetSublistDisplayType() {
  this.NORMAL = 'NORMAL';
  this.HIDDEN = 'HIDDEN';
}

serverWidget.prototype.SublistDisplayType = serverWidgetSublistDisplayType;

/**
 * @enum
 */
function serverWidgetLayoutJustification() {
  this.CENTER = 'CENTER';
  this.LEFT = 'LEFT';
  this.RIGHT = 'RIGHT';
}

serverWidget.prototype.LayoutJustification = serverWidgetLayoutJustification;

/**
 * @enum
 */
function serverWidgetListStyle() {
  this.GRID = 'grid';
  this.REPORT = 'report';
  this.PLAIN = 'plain';
  this.NORMAL = 'normal';
}

serverWidget.prototype.ListStyle = serverWidgetListStyle;

/**
 * @enum
 */
function serverWidgetAssistantSubmitAction() {
  this.NEXT = 'next';
  this.BACK = 'back';
  this.CANCEL = 'cancel';
  this.FINISH = 'finish';
  this.JUMP = 'jump';
}

serverWidget.prototype.AssistantSubmitAction = serverWidgetAssistantSubmitAction;

/**
 *
 * Encapsulates a Tab in a serverWidget.Form
 * @return {Tab}
 * @constructor
 *
 * @since 2015.2
 */
function Tab() {
  
  /**
   * The label of the Tab
   * @name Tab#label
   * @type {string}
   */
  this.prototype.label = undefined;
  /**
   * The Tab's field help
   * @name Field#helpText
   * @type {string}
   */
  this.prototype.helpText = undefined;
}

/**
 * Encalsulates a Sublist in a Form or a serverWidget.Assistant
 *
 *
 * @return {Sublist}
 * @constructor
 *
 * @since 2015.2
 */
function Sublist() {
  
  /**
   * The label of the field group
   * @name Sublist#label
   * @type {string}
   */
  this.prototype.label = undefined;
  /**
   * The number of lines in the Sublist.
   * @name Sublist#lineCount
   * @type {number}
   * @readonly
   */
  this.prototype.lineCount = undefined;
  /**
   * Set an id of a field that is to have unique values accross the rows in the sublist
   *
   * @param {Object} options
   * @param {string} options.id The id of the field to use as a unique field
   * @returns {Sublist}
   */
  this.prototype.updateUniqueFieldId = function (options) {
  };
  
  /**
   * Id of a field designated as a totalling column, which is used to calculate and display a running total for the sublist
   *
   * @param {Object} options
   * @param {string} options.id The id of the field to use as a total field
   * @returns {Sublist}
   */
  this.prototype.updateTotallingFieldId = function (options) {
  };
  
  /**
   * Display type of the sublist.  Possible values are in serverWidget.SublistDisplayType
   * @name Sublist#displayType
   * @type {FieldDisplayType}
   */
  this.prototype.displayType = undefined;
  /**
   * Inline help text to this sublist.
   * @name Sublist#helpText
   * @type {string}
   */
  this.prototype.helpText = undefined;
  /**
   * Adds a button to the sublist
   *
   * @param {Object} options
   * @param {string} options.id the script id of button
   * @param {string} options.label the label of button
   * @param {string} [options.functionName] the function name to be triggered onClick for the button
   * @returns {Button}
   */
  this.prototype.addButton = function (options) {
  };
  
  /**
   * Returns string value of a sublist field.
   *
   * @param {Object} options
   * @param {string} options.id Id of the field
   * @param {number} options.line Line number
   * @returns {string}
   */
  this.prototype.getSublistValue = function (options) {
  };
  
  /**
   * Set the value of a field on the list
   *
   * @param {Object} options
   * @param {string} options.id   id of the field to set
   * @param {number} options.line line number
   * @param {string} options.value value to set on the field
   */
  this.prototype.setSublistValue = function (options) {
  };
  
  /**
   * Adds refresh all buttons to the sublist
   *
   * @returns {Button}
   */
  this.prototype.addRefreshButton = function (options) {
  };
  
  /**
   * Adds a "Mark All" and an "Unmark All" button to a sublist.
   *
   * @returns {Button[]}
   */
  this.prototype.addMarkAllButtons = function (options) {
  };
  
  /**
   * Add a field, column,  to the Sublist
   * @param {Object} options
   * @param {string} options.id    id of the filed to add
   * @param {string} options.label the UI label for the field
   * @param {string} options.type  the type for this field
   * @param {string} [options.source] The internal id of the source list for this field if the field is a select
   * @param {string} [options.container] Used to specify either a tab or a field group
   * @returns {Field}
   */
  this.prototype.addField = function (options) {
  };
  
  /**
   * Gets field from sublist
   * @param {Object} options
   * @param {string} options.id    id of the field to get
   * @returns {Field}
   */
  this.prototype.getField = function (options) {
  };
}

/**
 * Encapsulate a field group on an Assistant or a Form objects.
 *
 *
 * @return {FieldGroup}
 * @constructor
 *
 * @since 2015.2
 */
function FieldGroup() {
  
  /**
   * Is the field group collapsible.
   * @name FieldGroup#isCollapsible
   * @type {boolean}
   */
  this.prototype.isCollapsible = undefined;
  /**
   * Is the field group collapsed
   * @name FieldGroup#isCollapsed
   * @type {boolean}
   */
  this.prototype.isCollapsed = undefined;
  /**
   * Is the field group's border hidden
   * @name FieldGroup#isBorderHidden
   * @type {boolean}
   */
  this.prototype.isBorderHidden = undefined;
  /**
   * Do all the fields in this group display in a single column
   * @name Field#isBorderHidden
   * @type {boolean}
   */
  this.prototype.isSingleColumn = undefined;
  /**
   * The label of the field group
   * @name FieldGroup#label
   * @type {string}
   */
  this.prototype.label = undefined;
}

/**
 * Return a wrapped an nlobjField
 *
 *
 * @return {Field}
 * @constructor
 *
 * @since 2015.2
 */
function Field() {
  
  /**
   * The internal id of the field.
   * @name Field#id
   * @type {string}
   * @readonly
   */
  this.prototype.id = undefined;
  /**
   * The type of the field.
   * @name Field#FieldType
   * @type {FieldType}
   * @readonly
   */
  this.prototype.type = undefined;
  /**
   * Update the breakType of the field
   * @param {Object} options
   * @param {FieldBreakType} options.breakType
   * @return {Field}
   */
  this.prototype.updateBreakType = function (options) {
  };
  
  /**
   * Update the layout type of the field
   * @param {Object} options
   * @param {FieldLayoutType} options.layoutType
   * @return {Field}
   */
  this.prototype.updateLayoutType = function (options) {
  };
  
  /**
   * the text that gets displayed in lieu of the field value for URL fields
   * @name Field#linkText
   * @type {string}
   */
  this.prototype.linkText = undefined;
  /**
   * The max length of the field
   * @name Field#maxLength
   * @type {number}
   */
  this.prototype.maxLength = undefined;
  /**
   * Is the field mandatory
   * @name Field#isMandatory
   * @type {boolean}
   */
  this.prototype.isMandatory = undefined;
  /**
   * The alias for the field. By default the alias is the field id
   * @name Field#alias
   * @type {string}
   */
  this.prototype.alias = undefined;
  /**
   * The default value of the field
   * @name Field#defaultValue
   * @type {string}
   */
  this.prototype.defaultValue = undefined;
  /**
   * Sets the height and width for the field. Only supported on multi-selects,
   * long text, rich text, and fields that get rendered as INPUT (type=text) fields.
   * This API is not supported on list/record fields.
   * @param {Object} options
   * @param {number} options.height
   * @param {number} options.width
   * @return {Field}
   */
  this.prototype.updateDisplaySize = function (options) {
  };
  
  /**
   *
   * Udpdate the field display type
   * @param {Object} options
   * @param {string} options.displayType
   * @return {Field}
   */
  this.prototype.updateDisplayType = function (options) {
  };
  
  /**
   * If Rich Text Editing is enabled, you can use this property
   * to set the height of the rich text field only.
   * @name Field#richTextHeight
   * @type {number}
   */
  this.prototype.richTextHeight = undefined;
  /**
   * If Rich Text Editing is enabled, you can use this property
   * to set the width of the rich text field only.
   * @name Field#richTextWidth
   * @type {number}
   */
  this.prototype.richTextWidth = undefined;
  /**
   * The label of the field
   * @name Field#label
   * @type {string}
   */
  this.prototype.label = undefined;
  /**
   * the number of empty field spaces before/above this field.
   * @name Field#padding
   * @type {number}
   */
  this.prototype.padding = undefined;
  /**
   * Get the select options for a field
   * @param {Object} options
   * @param {string} [options.filter] A search string to filter the select options that are returned.
   * @param {string} [options.filteroperator]  Supported operators are contains | is | startswith. If not specified, defaults to the contains operator
   * @returns {Object[]}
   */
  this.prototype.getSelectOptions = function (options) {
  };
  
  /**
   * Set help text for a field
   * @param {Object} options
   * @param {string} options.help The help text for the field
   * @param {boolean} [options.showInlineForAssistant] This means that field help will appear only in a field help popup box when the field label is clicked
   */
  this.prototype.setHelpText = function (options) {
  };
  
  /**
   * Add a select option to a select field
   * @param {Object} options
   * @param {string|number} options.value The internal id of the option
   * @param {string} options.text  The display text for this option
   * @param {boolean} [options.isSelected] If true, this option is selected
   */
  this.prototype.addSelectOption = function (options) {
  };
}

/**
 * Return a wrapped an nlobjButton
 *
 *
 * @return {Button}
 * @constructor
 *
 * @since 2015.2
 */
function Button() {
  
  /**
   * Is the button disabled
   * @name Button#isDisabled
   * @type {boolean}
   */
  this.prototype.isDisabled = undefined;
  /**
   * The label of the button
   * @name Button#label
   * @type {string}
   */
  this.prototype.label = undefined;
  /**
   * Is the button hidden
   * @name Button#isHidden
   * @type {boolean}
   */
  this.prototype.isHidden = undefined;
}

/**
 * Return a wrapped an nlobjAssistantStep
 *
 *
 * @return {AssistantStep}
 * @constructor
 *
 * @since 2015.2
 */
function AssistantStep() {
  
  /**
   * The internal id of the step.
   * @name AssistantStep#id
   * @type {string}
   * @readonly
   */
  this.prototype.id = undefined;
  /**
   * The label of the step
   * @name AssistantStep#label
   * @type {string}
   */
  this.prototype.label = undefined;
  /**
   * The numerical order of the step
   * @name AssistantStep#stepNumber
   * @type {number}
   */
  this.prototype.stepNumber = undefined;
  /**
   * Help text for the step
   * @name AssistantStep#helpText
   * @type {number}
   */
  this.prototype.helpText = undefined;
  /**
   *  get all sublist fields' internal ids entered by the user during this step
   * @param {Object} options
   * @param {string} options.group  The internal id of the sublist
   * @return {string[]}
   */
  this.prototype.getSublistFieldIds = function (options) {
  };
  
  /**
   * Use this method to get all sublists entered by the user during this step
   * @return {string[]}
   */
  this.prototype.getSubmittedSublistIds = function (options) {
  };
  
  /**
   * Get all ids for fields in the assistant step
   * @return {string[]}
   */
  this.prototype.getFieldIds = function (options) {
  };
  
  /**
   * Get the value of a field
   * @param {Object} options
   * @param {string} options.id Internal id for the field
   * @return {string|string[]}
   */
  this.prototype.getValue = function (options) {
  };
  
  /**
   * Get the number of lines in a sublist
   * @param {Object} options
   * @param {string} options.group internal Id of the sublist
   * @return {number}
   */
  this.prototype.getLineCount = function (options) {
  };
  
  /**
   * Get the value of a field in a sublist
   * @param {Object} options
   * @param {string} options.group Internal id of the sublist
   * @param {string} options.id Internal id of the field
   * @param {string} options.line line number
   * @return {string}
   */
  this.prototype.getSublistValue = function (options) {
  };
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
function Assistant() {
  
  /**
   * the current step of the assistant
   * @name Assistant#currentStep
   * @type {AssistantStep}
   * @readonly
   */
  this.prototype.currentStep = undefined;
  /**
   * an error message for the current step. If you choose, you can use HTML tags to format the message.
   * @name Assistant#errorHtml
   * @type {string}
   */
  this.prototype.errorHtml = undefined;
  /**
   *   Mark the last page in an assistant. Set the rich text to display a completion message on the last page.
   * @name Assistant#finishedHtml
   * @type {string}
   */
  this.prototype.finishedHtml = undefined;
  /**
   * Show or hide the assistant step numbers
   * @name Assistant#hideStepNumber
   * @type {boolean}
   */
  this.prototype.hideStepNumber = undefined;
  /**
   *  Use this method to enforce a sequential ordering of assistant steps. If steps are ordered,
   *  users must complete the current step before the assistant will allow them to proceed to
   *  the next step. From a display perspective, ordered steps will always appear in the left
   *  panel of the assistant. Note that by default, steps in an assistant are ordered.
   * @name Assistant#isNotOrdered
   * @type {boolean}
   */
  this.prototype.isNotOrdered = undefined;
  /**
   *  Overall title of the Assistant
   * @name Assistant#title
   * @type {string}
   */
  this.prototype.title = undefined;
  /**
   *  show/hide the Add to Shortcuts link that appears in the top-right corner of an assistant page.
   * @name Assistant#hideAddToShortcutsLink
   * @type {boolean}
   */
  this.prototype.hideAddToShortcutsLink = undefined;
  /**
   * Set the default values of many fields at once
   * @param {Object[]} values
   */
  this.prototype.updateDefaultValues = function (options) {
  };
  
  /**
   * The script file id to be used in the assistant
   * @name Assistant#clientScriptFileId
   * @type {number}
   */
  this.prototype.clientScriptFileId = undefined;
  /**
   *  set the splash screen for an assistant page.
   * @param {Object}options
   * @param {string}options.title Title of the splash screen
   * @param {string}options.text1 Text of the splash scheen
   * @param {string} [options.text2] If you want splash content to have a two-column appearance, provide content
   * in the text2 parameter.
   */
  this.prototype.setSplash = function (options) {
  };
  
  /**
   * Get a Field object from its id
   * @param {Object} options
   * @param {string} options.id Internal id for the field
   * @return {Field}
   */
  this.prototype.getField = function (options) {
  };
  
  /**
   * Get a FieldGroup  object from its id
   * @param {Object} options
   * @param {string} options.id Id of the field group
   * @return {FieldGroup}
   */
  this.prototype.getFieldGroup = function (options) {
  };
  
  /**
   * Get the name of last action taken by the user
   * @return {string}
   */
  this.prototype.getLastAction = function (options) {
  };
  
  /**
   * get the step the last submitted action came from
   * @return {AssistantStep}
   */
  this.prototype.getLastStep = function (options) {
  };
  
  /**
   * Get next logical step corresponding to the user's last submitted action
   * @return {AssistantStep}
   */
  this.prototype.getNextStep = function (options) {
  };
  
  /**
   * Get the number of steps
   * @return {number}
   */
  this.prototype.getStepCount = function (options) {
  };
  
  /**
   * True if the assistant has an error set
   * @return {boolean}
   */
  this.prototype.hasErrorHtml = function (options) {
  };
  
  /**
   * Is the assistant finished
   * @return {boolean}
   */
  this.prototype.isFinished = function (options) {
  };
  
  /**
   * Get the a step given its id
   * @param {Object} options
   * @param {string} options.id Id for the step
   * @return {AssistantStep}
   */
  this.prototype.getStep = function (options) {
  };
  
  /**
   * Get a Sublist  object from its id
   * @param {Object} options
   * @param {string} options.id  Id for the sublist
   * @return {Sublist}
   */
  this.prototype.getSublist = function (options) {
  };
  
  /**
   * Add a step to the assistant
   * @param {Object} options
   * @param {string} options.id  Id for the step
   * @param {string} options.label UI label for the step
   */
  this.prototype.addStep = function (options) {
  };
  
  /**
   * Add a field to the Assistant
   * @param {Object} options
   * @param {string} options.id  Id for the field
   * @param {string} options.label Label for the field
   * @param {string} options.type  Type for the field
   * @param {string} [options.source] The internalId or scriptId of the source list for this field if
   * it is a select (List/Record) field.
   * @param {string} [options.container]  Id for the field group of tab to place the field in
   * @returns {Field}
   */
  this.prototype.addField = function (options) {
  };
  
  /**
   * Add a field group to the assistant
   * @param {Object} options
   * @param {string} options.id  Id for the field group
   * @param {string} options.label UI label for the field group
   * @return {FieldGroup}
   */
  this.prototype.addFieldGroup = function (options) {
  };
  
  /**
   * Add a Sublist to the assistant
   * @param {Object} options
   * @param {string} options.id  Id for the sublist
   * @param {string} options.label UI label for the sublist
   * @param {string} options.type  Type of sublist
   * @return {Sublist}
   */
  this.prototype.addSublist = function (options) {
  };
  
  /**
   * Get all ids for fields in the assistant
   *
   * @return {string[]}
   */
  this.prototype.getFieldIds = function (options) {
  };
  
  /**
   * Get all field ids in the given assistant field group
   * @param {Object} options
   * @param {string} options.id Id of the field group
   * @return {string[]}
   */
  this.prototype.getFieldIdsByFieldGroup = function (options) {
  };
  
  /**
   * Get all ids for field groups in the assistant
   *
   * @return {string[]}
   */
  this.prototype.getFieldGroupIds = function (options) {
  };
  
  /**
   * Get all ids for sublists in the assistant
   *
   * @return {string[]}
   */
  this.prototype.getSublistIds = function (options) {
  };
  
  /**
   * Get all steps in the assistant
   *
   * @return {AssistantStep[]}
   */
  this.prototype.getSteps = function (options) {
  };
  
  /**
   *  Use this method to manage redirects in an assistant. In most cases, an assistant redirects to itself
   *  The sendRedirect(response) method is like a wrapper method that performs this redirect. This method
   *  also addresses the case in which one assistant redirects to another assistant. In this scenario,
   *  the second assistant must return to the first assistant if the user Cancels or the user Finishes.
   *  This method, when used in the second assistant, ensures that the user is redirected back to the
   *  first assistant.
   * @param {Object} options
   * @param {ServerResponse} options.response
   */
  this.prototype.sendRedirect = function (options) {
  };
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
function Form() {
  
  /**
   * The form title
   * @name Form#title
   * @type {string}
   */
  this.prototype.title = undefined;
  /**
   * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
   * once the pageInit script is completed. The method takes either an already created Message object or the options
   * object that would be used for creating the message.
   * @param {Object} options
   * @param {message.Message} options.message the message object to be displayed in browser
   * -- or --
   * @param {Object} options the message options object as described in N/ui/message: create()
   */
  this.prototype.addPageInitMessage = function (options) {
  };
  
  /**
   * Adds a button to the ui form
   *
   * @param {Object} options
   * @param {string} options.id the script id of button
   * @param {string} options.label the label of button
   * @param {string} [options.functionName] the function name to be triggered onClick for the button
   * @returns {Button}
   */
  this.prototype.addButton = function (options) {
  };
  
  /**
   * add a credential field to the ui form
   *
   * @param {Object} options
   * @param {string} options.id the script id of field
   * @param {string} options.label the label of field
   * @param {string[]|string} options.restrictToDomains  List of domains that restrict the destination domains for the credential
   * @param {string[]|string} options.restrictToScriptIds  List of scripts where the credential can be used
   * @param {boolean} [options.restrictToCurrentUser=false] Restrict the use of this credential to the user that creates is
   * @param {string} [options.container]  Id of the form tab where the credential is placed
   * @returns {Field}
   */
  this.prototype.addCredentialField = function (options) {
  };
  
  /**
   * add a secret key field to the ui form
   *                                        `
   * @param {Object} options
   * @param {string} options.id the script id of field
   * @param {string[]|string} [options.restrictToScriptIds]  List of scripts where the key can be used
   * @param {boolean} [options.restrictToCurrentUser=false] Restrict the use of this key to the user that created it
   * @param {string} [options.container]  Id of the form tab or group where the key is placed
   * @returns {Field}
   */
  this.prototype.addSecretKeyField = function (options) {
  };
  
  /**
   * Add a field to the form
   * @param {Object} options
   * @param {string} options.id Internal id for the field
   * @param {string} options.label UI label for the field
   * @param {string} options.type  Type of the field
   * @param {string} [options.source]  The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field
   * @param {string} [options.container]   Tab or Field Group to add the field to
   * @returns {Field}
   */
  this.prototype.addField = function (options) {
  };
  
  /**
   * Add a field group to the form
   * @param {Object} options
   * @param {string} options.id the script id for field group
   * @param {string} options.label the label for field group
   * @param {string} [options.tab] the tab where field group should be added
   *
   * @return {FieldGroup}
   */
  this.prototype.addFieldGroup = function (options) {
  };
  
  /**
   * Add a link to the form
   * @param {Object} options
   * @param {string} options.type  The type of link
   * @param {string} options.title  The UI label for the linl
   * @param {string} options.url  The URL the link navigates to
   */
  this.prototype.addPageLink = function (options) {
  };
  
  /**
   * Add a Sublist to the form
   * @param {Object} options
   * @param {string} options.id  The internal id for the sublist
   * @param {string} options.label The ui label for the sublist
   * @param {string} options.type  The type of sublist
   * @param {string} [options.tab] The id of the tab where to add the sublist to
   * @return {Sublist}
   */
  this.prototype.addSublist = function (options) {
  };
  
  /**
   * Add a Subtab to the form
   * @param {Object} options
   * @param {string} options.id  The internal id for the sub tab
   * @param {string} options.label The UI label for the sub tab
   * @param {string} [options.tab] The tab under which to display this subtab. If empty, it is added to the main tab.
   * @return {Tab}
   */
  this.prototype.addSubtab = function (options) {
  };
  
  /**
   * Add a Tab to the form
   * @param {Object} options
   * @param {string} options.id  The internal id for the Tab
   * @param {string} options.label The UI label for the tab
   * @return {Tab}
   */
  this.prototype.addTab = function (options) {
  };
  
  /**
   * Add a Reset button to the form
   * @param {Object} [options]
   * @param {string} [options.label]  The UI label used for this button. If no label is provided, the label defaults to Reset.
   * @return {Button}
   */
  this.prototype.addResetButton = function (options) {
  };
  
  /**
   * Add a Submit button to the form
   * @param {Object} [options]
   * @param {string} [options.label] The UI label for this button. If no label is provided, the label defaults to Save.
   * @return {Button}
   */
  this.prototype.addSubmitButton = function (options) {
  };
  
  /**
   * Get a Button object from its id
   * @param {Object} options
   * @param {string} options.id The id of the button to get
   * @return {Button}
   */
  this.prototype.getButton = function (options) {
  };
  
  /**
   * Get a Field object from its id
   * @param {Object} options
   * @param {string} options.id The id for the field to get
   * @return {Field}
   */
  this.prototype.getField = function (options) {
  };
  
  /**
   * Get a Subtab object from its id
   * @param {Object} options
   * @param {string} options.id  The id for the Tab to get
   * @return {Tab}
   */
  this.prototype.getSubtab = function (options) {
  };
  
  /**
   * Get a Subtab object from its id
   * @param {Object} options
   * @param {string} options.id  The id for the Tab to get
   * @return {Tab}
   */
  this.prototype.getTab = function (options) {
  };
  
  /**
   * Get all the Tab objects
   * @return {Tab[]}
   */
  this.prototype.getTabs = function (options) {
  };
  
  /**
   * Get a Sublist object from its id
   * @param {Object} options
   * @param {string} options.id The id for the Sublist to get
   * @return {Sublist}
   */
  this.prototype.getSublist = function (options) {
  };
  
  /**
   * Insert a field before another field
   * @param {Object} options
   * @param {Field} options.field The field to insert
   * @param {string} options.nextfield  Id of the field to insert before
   */
  this.prototype.insertField = function (options) {
  };
  
  /**
   * Insert a sublist before another sublist
   * @param {Object} options
   * @param {Sublist} options.sublist   Sublist to insert
   * @param {string} options.nextsublist  Id of the sublist to insert before
   */
  this.prototype.insertSublist = function (options) {
  };
  
  /**
   * Insert a subtab before another sublist
   * @param {Object} options
   * @param {Subtab} options.subtab   Subtab to insert
   * @param {string} options.nextsub The id of the sublist/subtab you are inserting in front of
   */
  this.prototype.insertSubtab = function (options) {
  };
  
  /**
   * Insert a Tab before another tab
   * @param {Object} options
   * @param {Tab} options.tab Tab to insert
   * @param {string} options.nexttab    Id of the tab to insert before
   */
  this.prototype.insertTab = function (options) {
  };
  
  /**
   * Remove a button given its id
   * @param {Object} options
   * @param {string} options.id   Id of the button to remove
   */
  this.prototype.removeButton = function (options) {
  };
  
  /**
   * Set the default values of many fields at once
   * @param {Object[]} values
   */
  this.prototype.updateDefaultValues = function (options) {
  };
  
  /**
   * The script file id to be used in the form
   * @name Form#clientScriptFileId
   * @type {number}
   */
  this.prototype.clientScriptFileId = undefined;
}

/**
 * Primary object used to encapsulate a list page
 *
 * @return {List}
 * @constructor
 *
 * @since 2015.2
 */
function List() {
  
  /**
   * Sets the display style for this list
   * @name List#style
   * @type string
   * @since 2015.2
   */
  this.prototype.style = undefined;
  /**
   * List title
   * @name List#title
   * @type string
   * @since 2015.2
   */
  this.prototype.title = undefined;
  /**
   * Add a Button to the list page
   *
   * @param {Object} options
   * @param {string} options.id the script id for button
   * @param {string} options.label the ui label of button
   * @param {string} [options.functionName] the function name to be triggered onClick for the button
   * @returns {Button}
   */
  this.prototype.addButton = function (options) {
  };
  
  /**
   * Add a Column to the List page
   * @param {Object} options
   * @param {string} options.id   The internal id for the column
   * @param {string} options.type  The type for the column
   * @param {string} options.label  The ui label for the column
   * @param {string} [options.align] The layout justification for this column.
   * @return {ListColumn}
   */
  this.prototype.addColumn = function (options) {
  };
  
  /**
   * Add an Edit or Edit/View column
   * @param {Object} options
   * @param {ListColumn} options.column  The Edit/View column is added to the left of this column
   * @param {boolean} [options.showView]  If true then an Edit/View column will be added. Otherwise only an Edit column will be added.
   * @param {boolean} [options.showHrefCol] - If set, this value must be included in row data provided for the
   * list and will be used to determine whether the URL for this link is clickable
   * @return {ListColumn}
   */
  this.prototype.addEditColumn = function (options) {
  };
  
  /**
   * Adds a navigation cross-link to the list page
   * @param {Object} options
   * @param {string} options.type  The type of link to add: breadcrumb or crosslink
   * @param {string} options.title  The UI text displayed in the link
   * @param {string} options.url  The URL used for this link
   * @return {List}
   */
  this.prototype.addPageLink = function (options) {
  };
  
  /**
   * Add a row (Array of name/value pairs or search.Result)
   * @param {Object} options
   * @param {string} options.row  An Array of rows containing name/value pairs containing the values for corresponding
   * @return {List}
   */
  this.prototype.addRow = function (options) {
  };
  
  /**
   * Adds multiple rows (Array of search.Result or name/value pair Arrays)
   * @param {Object} options
   * @param {string} options.rows Array of search.Result or name/value pair Arrays
   * @return {List}
   */
  this.prototype.addRows = function (options) {
  };
  
  /**
   * The script file id to be used in the list page
   * @name List#clientScriptFileId
   * @type {number}
   */
  this.prototype.clientScriptFileId = undefined;
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
function ListColumn() {
  
  /**
   * Adds a URL parameter (optionally defined per row) to the list column's URL
   * @param {Object} options
   * @param {string} options.param  Name for the parameter
   * @param {string} options.value  Value for the parameter
   * @param {string} [options.dynamic]  If true, then the parameter value is actually an alias that is calculated per row
   * @return {ListColumn}
   */
  this.prototype.addParamToURL = function (options) {
  };
  
  /**
   * @name ColumnList#label Label this list column
   * @type {string} string
   */
  this.prototype.label = undefined;
  /**
   * Sets the base URL for the list column
   * @param {Object} options
   * @param {string} options.url  The base url or a column in the data source that returs the
   * base url for each row
   * @param {string} [options.dynamic] If true, then the URL is actually an alias that is calculated per row
   * @return {ListColumn}
   */
  this.prototype.setURL = function (options) {
  };
}

serverWidget = new serverWidget();
var ui = {};
/**
 * @type {ui}
 */
N.prototype.ui = ui;
/**
 * @type {serverWidget}
 */
ui.prototype.serverWidget = serverWidget;