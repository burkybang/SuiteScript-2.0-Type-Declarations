/**
 * SuiteScript record common module
 *
 * @module N/record
 * @suiteScriptVersion 2.x
 *
 */
class record {
  /**
   * Create a new record object based on provided type
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {string} options.type record type
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] record default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
   *
   * @since 2015.2
   */
  // function createRecord() {}
  // createRecord.prototype.promise = function() {};
  // create = new createRecord();
  create(options) {
  };
  
  /**
   * Load an existing nlobjRecord from the database based on provided type, id
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {string} options.type record type
   * @param {number|string} options.id record id
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] record default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
   *
   * @since 2015.2
   */
  // function loadRecord() {}
  // loadRecord.prototype.promise = function() {};
  // load = new loadRecord();
  load(options) {
  };
  
  /**
   * Copy a record object based on provided type, id
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {string} options.type record type
   * @param {number|string} options.id record id
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] record default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
   *
   * @since 2015.2
   */
  // function copyRecord() {}
  // copyRecord.prototype.promise = function() {};
  // copy = new copyRecord();
  copy(options) {
  };
  
  /**
   * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {string} options.fromType record type to be transformed from
   * @param {number|string} options.fromId record id to be transformed from
   * @param {string} options.toType record type to be transformed to
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] transformed record's default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
   *
   * @since 2015.2
   */
  // function transformRecord() {}
  // transformRecord.prototype.promise = function() {};
  // transform = new transformRecord();
  transform(options) {
  };
  
  /**
   * Delete a record object based on provided type, id and return the id of deleted record
   *
   * @governance 20 units for transactions, 4 for custom records, 10 for all other records
   *
   * @param {Object} options
   * @param {string} options.type record type
   * @param {number|string} options.id record id
   * @return {number} recordId
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
   *
   * @since 2015.2
   */
  // function deleteRecord() {}
  // deleteRecord.prototype.promise = function() {};
  // record.prototype['delete'] = new deleteRecord();
  delete(options) {
  };
  
  /**
   * commit record field updates to the system
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
   *
   * @param {Object} options
   * @param {string} options.type record type
   * @param {number|string} options.id record id
   * @param {Object} options.values field and value mapping to be submitted
   * @param {Object} [options.options] additonal flags for submission
   * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
   * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
   *
   * @return {number} id of submitted record
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
   *
   * @since 2015.2
   */
  // function submitFieldsRecord() {}
  // submitFieldsRecord.prototype.promise = function() {};
  // submitFields = new submitFieldsRecord();
  submitFields(options) {
  };
  
  /**
   * attach record to another record
   *
   * @governance 10 units
   *
   * @param {Object} options
   * @param {Object} options.record record to be attached
   * @param {Object} options.record.type the type of the record to be attached
   * @param {number|string} options.record.id the id of the record to be attached
   * @param {Object} options.to the destination record where options.record will be attached to
   * @param {string} options.to.type the type of the destination
   * @param {number|string} options.to.id the id of the destination
   * @param {Object} [options.attributes=null] name/value pairs containing attributes
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
   *
   * @since 2015.2
   */
  // function attachRecord() {}
  // attachRecord.prototype.promise = function() {};
  // attach = new attachRecord();
  attach(options) {
  };
  
  /**
   * detach record from another record
   *
   * @governance 10 units
   *
   * @param {Object} options
   * @param {Object} options.record record to be detached
   * @param {Object} options.record.type the type of the record to be detached
   * @param {number|string} options.record.id the id of the record to be detached
   * @param {Object} options.from the destination record where options.record will be detached from
   * @param {string} options.from.type the type of the destination
   * @param {number|string} options.from.id the id of the destination
   * @param {Object} [options.attributes=null] name/value pairs containing attributes
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
   *
   * @since 2015.2
   */
  // function detachRecord() {}
  // detachRecord.prototype.promise = function() {};
  // detach = new detachRecord();
  detach(options) {
  };
}

namespace record {
  export enum Type {
    ACCOUNT = 'account',
    ACCOUNTING_BOOK = 'accountingbook',
    ACCOUNTING_CONTEXT = 'accountingcontext',
    ACCOUNTING_PERIOD = 'accountingperiod',
    ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry',
    ALLOCATION_SCHEDULE = 'allocationschedule',
    AMORTIZATION_SCHEDULE = 'amortizationschedule',
    AMORTIZATION_TEMPLATE = 'amortizationtemplate',
    ASSEMBLY_BUILD = 'assemblybuild',
    ASSEMBLY_ITEM = 'assemblyitem',
    ASSEMBLY_UNBUILD = 'assemblyunbuild',
    BILLING_ACCOUNT = 'billingaccount',
    BILLING_CLASS = 'billingclass',
    BILLING_RATE_CARD = 'billingratecard',
    BILLING_REVENUE_EVENT = 'billingrevenueevent',
    BILLING_SCHEDULE = 'billingschedule',
    BIN = 'bin',
    BIN_TRANSFER = 'bintransfer',
    BIN_WORKSHEET = 'binworksheet',
    BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder',
    BOM = 'bom',
    BOM_REVISION = 'bomrevision',
    BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
    BULK_OWNERSHIP_TRANSFER = 'bulkownershiptransfer',
    CALENDAR_EVENT = 'calendarevent',
    CAMPAIGN = 'campaign',
    CAMPAIGN_RESPONSE = 'campaignresponse',
    CAMPAIGN_TEMPLATE = 'campaigntemplate',
    CASH_REFUND = 'cashrefund',
    CASH_SALE = 'cashsale',
    CHARGE = 'charge',
    CHARGE_RULE = 'chargerule',
    CHECK = 'check',
    CLASSIFICATION = 'classification',
    CLIENT_SCRIPT = 'clientscript',
    CMS_CONTENT = 'cmscontent',
    CMS_CONTENT_TYPE = 'cmscontenttype',
    CMS_PAGE = 'cmspage',
    COMMERCE_CATEGORY = 'commercecategory',
    COMPETITOR = 'competitor',
    CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate',
    CONTACT = 'contact',
    CONTACT_CATEGORY = 'contactcategory',
    CONTACT_ROLE = 'contactrole',
    COST_CATEGORY = 'costcategory',
    COUPON_CODE = 'couponcode',
    CREDIT_CARD_CHARGE = 'creditcardcharge',
    CREDIT_CARD_REFUND = 'creditcardrefund',
    CREDIT_MEMO = 'creditmemo',
    CURRENCY = 'currency',
    CUSTOMER = 'customer',
    CUSTOMER_CATEGORY = 'customercategory',
    CUSTOMER_DEPOSIT = 'customerdeposit',
    CUSTOMER_MESSAGE = 'customermessage',
    CUSTOMER_PAYMENT = 'customerpayment',
    CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization',
    CUSTOMER_REFUND = 'customerrefund',
    CUSTOMER_STATUS = 'customerstatus',
    CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship',
    CUSTOM_RECORD = 'customrecord',
    CUSTOM_TRANSACTION = 'customtransaction',
    DEPARTMENT = 'department',
    DEPOSIT = 'deposit',
    DEPOSIT_APPLICATION = 'depositapplication',
    DESCRIPTION_ITEM = 'descriptionitem',
    DISCOUNT_ITEM = 'discountitem',
    DOWNLOAD_ITEM = 'downloaditem',
    EMAIL_TEMPLATE = 'emailtemplate',
    EMPLOYEE = 'employee',
    ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping',
    ESTIMATE = 'estimate',
    EXPENSE_CATEGORY = 'expensecategory',
    EXPENSE_REPORT = 'expensereport',
    FAIR_VALUE_PRICE = 'fairvalueprice',
    FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule',
    FOLDER = 'folder',
    FULFILLMENT_REQUEST = 'fulfillmentrequest',
    GENERAL_TOKEN = 'generaltoken',
    GENERIC_RESOURCE = 'genericresource',
    GIFT_CERTIFICATE = 'giftcertificate',
    GIFT_CERTIFICATE_ITEM = 'giftcertificateitem',
    GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping',
    GLOBAL_INVENTORY_RELATIONSHIP = 'globalinventoryrelationship',
    INBOUND_SHIPMENT = 'inboundshipment',
    INTERCOMP_ALLOCATION_SCHEDULE = 'intercompallocationschedule',
    INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry',
    INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder',
    INVENTORY_ADJUSTMENT = 'inventoryadjustment',
    INVENTORY_COST_REVALUATION = 'inventorycostrevaluation',
    INVENTORY_COUNT = 'inventorycount',
    INVENTORY_DETAIL = 'inventorydetail',
    INVENTORY_ITEM = 'inventoryitem',
    INVENTORY_NUMBER = 'inventorynumber',
    INVENTORY_STATUS = 'inventorystatus',
    INVENTORY_STATUS_CHANGE = 'inventorystatuschange',
    INVENTORY_TRANSFER = 'inventorytransfer',
    INVOICE = 'invoice',
    ISSUE = 'issue',
    ISSUE_PRODUCT = 'issueproduct',
    ISSUE_PRODUCT_VERSION = 'issueproductversion',
    ITEM_ACCOUNT_MAPPING = 'itemaccountmapping',
    ITEM_DEMAND_PLAN = 'itemdemandplan',
    ITEM_FULFILLMENT = 'itemfulfillment',
    ITEM_GROUP = 'itemgroup',
    ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration',
    ITEM_RECEIPT = 'itemreceipt',
    ITEM_REVISION = 'itemrevision',
    ITEM_SUPPLY_PLAN = 'itemsupplyplan',
    JOB = 'job',
    JOB_STATUS = 'jobstatus',
    JOB_TYPE = 'jobtype',
    JOURNAL_ENTRY = 'journalentry',
    KIT_ITEM = 'kititem',
    LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule',
    LEAD = 'lead',
    LOCATION = 'location',
    LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem',
    LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem',
    MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate',
    MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask',
    MANUFACTURING_ROUTING = 'manufacturingrouting',
    MAP_REDUCE_SCRIPT = 'mapreducescript',
    MARKUP_ITEM = 'markupitem',
    MASSUPDATE_SCRIPT = 'massupdatescript',
    MERCHANDISE_HIERARCHY_LEVEL = 'merchandisehierarchylevel',
    MERCHANDISE_HIERARCHY_NODE = 'merchandisehierarchynode',
    MERCHANDISE_HIERARCHY_VERSION = 'merchandisehierarchyversion',
    MESSAGE = 'message',
    MFG_PLANNED_TIME = 'mfgplannedtime',
    NEXUS = 'nexus',
    NON_INVENTORY_ITEM = 'noninventoryitem',
    NOTE = 'note',
    NOTE_TYPE = 'notetype',
    OPPORTUNITY = 'opportunity',
    ORDER_SCHEDULE = 'orderschedule',
    OTHER_CHARGE_ITEM = 'otherchargeitem',
    OTHER_NAME = 'othername',
    OTHER_NAME_CATEGORY = 'othernamecategory',
    PARTNER = 'partner',
    PARTNER_CATEGORY = 'partnercategory',
    PAYCHECK = 'paycheck',
    PAYCHECK_JOURNAL = 'paycheckjournal',
    PAYMENT_CARD = 'paymentcard',
    PAYMENT_CARD_TOKEN = 'paymentcardtoken',
    PAYMENT_ITEM = 'paymentitem',
    PAYMENT_METHOD = 'paymentmethod',
    PAYROLL_ITEM = 'payrollitem',
    PERIOD_END_JOURNAL = 'periodendjournal',
    PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule',
    PHONE_CALL = 'phonecall',
    PORTLET = 'portlet',
    PRICE_BOOK = 'pricebook',
    PRICE_LEVEL = 'pricelevel',
    PRICE_PLAN = 'priceplan',
    PRICING_GROUP = 'pricinggroup',
    PROJECT_EXPENSE_TYPE = 'projectexpensetype',
    PROJECT_TASK = 'projecttask',
    PROJECT_TEMPLATE = 'projecttemplate',
    PROMOTION_CODE = 'promotioncode',
    PROSPECT = 'prospect',
    PURCHASE_CONTRACT = 'purchasecontract',
    PURCHASE_ORDER = 'purchaseorder',
    PURCHASE_REQUISITION = 'purchaserequisition',
    REALLOCATE_ITEM = 'reallocateitem',
    RECEIVE_INBOUND_SHIPMENT = 'receiveinboundshipment',
    RESOURCE_ALLOCATION = 'resourceallocation',
    RESTLET = 'restlet',
    RETURN_AUTHORIZATION = 'returnauthorization',
    REVENUE_ARRANGEMENT = 'revenuearrangement',
    REVENUE_COMMITMENT = 'revenuecommitment',
    REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal',
    REVENUE_PLAN = 'revenueplan',
    REV_REC_SCHEDULE = 'revrecschedule',
    REV_REC_TEMPLATE = 'revrectemplate',
    SALES_ORDER = 'salesorder',
    SALES_ROLE = 'salesrole',
    SALES_TAX_ITEM = 'salestaxitem',
    SCHEDULED_SCRIPT = 'scheduledscript',
    SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance',
    SCRIPT_DEPLOYMENT = 'scriptdeployment',
    SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem',
    SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem',
    SERVICE_ITEM = 'serviceitem',
    SHIP_ITEM = 'shipitem',
    SOLUTION = 'solution',
    STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry',
    STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment',
    SUBSCRIPTION = 'subscription',
    SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder',
    SUBSCRIPTION_LINE = 'subscriptionline',
    SUBSCRIPTION_PLAN = 'subscriptionplan',
    SUBSIDIARY = 'subsidiary',
    SUBTOTAL_ITEM = 'subtotalitem',
    SUITELET = 'suitelet',
    SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot',
    SUPPORT_CASE = 'supportcase',
    TASK = 'task',
    TAX_ACCT = 'taxacct',
    TAX_GROUP = 'taxgroup',
    TAX_PERIOD = 'taxperiod',
    TAX_TYPE = 'taxtype',
    TERM = 'term',
    TIME_BILL = 'timebill',
    TIME_ENTRY = 'timeentry',
    TIME_OFF_CHANGE = 'timeoffchange',
    TIME_OFF_PLAN = 'timeoffplan',
    TIME_OFF_REQUEST = 'timeoffrequest',
    TIME_OFF_RULE = 'timeoffrule',
    TIME_OFF_TYPE = 'timeofftype',
    TIME_SHEET = 'timesheet',
    TOPIC = 'topic',
    TRANSFER_ORDER = 'transferorder',
    UNITS_TYPE = 'unitstype',
    USAGE = 'usage',
    USEREVENT_SCRIPT = 'usereventscript',
    VENDOR = 'vendor',
    VENDOR_BILL = 'vendorbill',
    VENDOR_CATEGORY = 'vendorcategory',
    VENDOR_CREDIT = 'vendorcredit',
    VENDOR_PAYMENT = 'vendorpayment',
    VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
    VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship',
    WEBSITE = 'website',
    WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
    WORKPLACE = 'workplace',
  }
  
  class Column {
    id = undefined;
    label = undefined;
    sublistId = undefined;
    type = undefined;
  }
  
  class Macro {
    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {String} [options.params] The macro arguments
     * @returns {notifications: [], response: {}}
     */
    constructor(options) {
    }
    
    id = undefined;
    label = undefined;
    description = undefined;
    attributes = undefined;
    
    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {String} [options.params] The macro arguments
     * @returns {notifications: [], response: {}}
     */
    execute(options) {
    }
  }
  
  class Record {
    /**
     * Primary object used to encapsulate a record object.
     *
     * @protected
     * @param {Object} options
     * @param {Object} options.recordObj (server-generated object holding the full metadata and data for a record type,
     *     including all scripting and customization. See RecordSerializationKey.java)
     * @param {number} options.recordObj.id
     * @param {boolean} options.recordObj.isSubrecord = true if the record instance is a subrecord
     * @param {boolean} options.recordObj.isReadOnly = true if the record instance is read only instance
     * @param {boolean} options.recordObj.isDynamic = true if the record instance is a dynamic record
     * @param {boolean} options.recordObj.isCurrentRecord
     * @param {boolean} options.recordObj.isUserEvent
     * @param {Object} options.recordObj.recordContext
     * @param {Metadata} options.recordObj.metadata (record metadata data used to populate the model controller)
     * @param {ModelController} options.recordObj.data (record data used to populate the model)
     * @param {RecordStateController} options.recordObj.state (record state to use to pre-populate the model controller)
     * @return {Record} client-side record implementation
     * @constructor
     */
    constructor(options) {
    }
    
    /**
     * provides available macros
     * @return {Object} a set of macros (@see Macro) defined on the record indexed by macroId
     */
    getMacros() {
    };
    
    /**
     * provide scripting context for records
     * getScriptContext is only in recordDefinition.js and not in dynamicrecord.js.So it is only visible inside NetSuite.
     */
    getScriptingContext() {
    };
    
    /**
     * provide scripting context for records
     */
    eventHandlerModules() {
    };
    
    /**
     *
     * provides a macro to execute
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {String} [options.package] macro package
     * @return {?Macro} [executor function for macro specified by options, or null if not found]
     */
    getMacro(options) {
    };
    
    /**
     * performs macro operation and returns result
     * executeMacro.promise returns a Promise
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {String} [options.package] macro package
     * @param {Object} [options.params] macro arguments
     * @return {Object} [macro result]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */
    executeMacro(options) {
    };
    
    /**
     * Executes record action and returns its result. Record ID and type is automatically taken from this record instance.
     * @param {Object} options
     * @param {String} options.id action ID
     * @param {Object} [options.params] action arguments
     * @returns {Object} action result; the actual return value returned by the action implementation is stored in the
     *     response property
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */
    executeAction(options) {
    };
    
    /**
     * Provides available record actions for this record instance.
     * @returns {Object} a set of actions (@see Action) defined on the record indexed by action ID
     */
    getActions() {
    };
    
    /**
     * Returns an executable record action for this record instance.
     * @param {Object} options
     * @param {String} options.id action ID
     * @returns {?Action} record action executor for action specified by options
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */
    getAction(options) {
    };
    
    /**
     * remove body field data
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    removeField(options) {
    };
    
    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @return {string[]}
     */
    getFields() {
    };
    
    /**
     * return array of names of all sublists
     * @return {string[]}
     */
    getSublists() {
    };
    
    /**
     * return value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue(options) {
    };
    
    /**
     * set value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {number|Date|string|Array|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setValue(options) {
    };
    
    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getText(options) {
    };
    
    /**
     * set value of the field by text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setText(options) {
    };
    
    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */
    findSublistLineWithValue(options) {
    };
    
    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue(options) {
    };
    
    /**
     * set the value of a sublist field (available for deferred dynamic only)
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {(number|Date|string|Array|boolean)} options.value
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */
    setSublistValue(options) {
    };
    
    /**
     * return value of a sublist field in text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    getSublistText(options) {
    };
    
    /**
     * set the value of a sublist field in text representation (available for deferred dynamic only)
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */
    setSublistText(options) {
    };
    
    /**
     * return line count of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    getLineCount(options) {
    };
    
    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.beforeLineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {Line} [new line object]
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */
    insertLine(options) {
    };
    
    /**
     * Commits and copies the currently selected line into a new line, which will be the new selected line.
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or not editable
     */
    copyLine(options) {
    };
    
    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.lineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */
    removeLine(options) {
    };
    
    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Line} [new line object]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    selectNewLine(options) {
    };
    
    /**
     * return an array of sublist lines in a sorted order
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {(string|Array)} options.orderBy
     * @return {Array} array of line objects
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} YOU_HAVE_ATTEMPTED_AN_UNSUPPORTED_ACTION if ascending is missing or undefined or not a boolean when orderBy is an array.
     * @restriction only available in readonly record
     */
    getLines(options) {
    };
    
    /**
     * Creates a new line to the specified sublist and adds it to the end of the sublist sequentially.
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Line} the Line object that was created.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     */
    addNewLine(options) {
    };
    
    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    cancelLine(options) {
    };
    
    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    commitLine(options) {
    };
    
    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistValue(options) {
    };
    
    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistValue(options) {
    };
    
    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistText(options) {
    };
    
    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    setCurrentSublistText(options) {
    };

    /**
     * selects an existing line in a sublist (dynamic mode only)
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     * @restriction only available in dynamic record
     */
    selectLine(options) {
    };
    
    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    // function saveThis() {}
    // saveThis.prototype.promise = function() {};
    // save = new saveThis();
    save() {
    };
    
    /**
     * Save record updates to the system and return object with additional information about the saved record.
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {Object} contains id of submitted record
     */
    // function saveAndFetchThis() {}
    // saveAndFetchThis.prototype.promise = function() {};
    // saveAndFetch = new saveAndFetchThis();
    saveAndFetch() {
    };
    
    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasSubrecord(options) {
    };
    
    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} [client-side subrecord implementation]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    getSubrecord(options) {
    };
    
    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} same record, for chaining
     */
    removeSubrecord(options) {
    };
    
    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */
    hasSublistSubrecord(options) {
    };
    
    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record} [client-side subrecord implementation]
     */
    getSublistSubrecord(options) {
    };
    
    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record} same record, for chaining
     */
    removeSublistSubrecord(options) {
    };
    
    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */
    hasCurrentSublistSubrecord(options) {
    };
    
    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record} [client-side subrecord implementation]
     */
    getCurrentSublistSubrecord(options) {
    };
    
    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record} same record, for chaining
     */
    removeCurrentSublistSubrecord(options) {
    };
    
    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist} [requested sublist]
     */
    getSublist(options) {
    };
    
    /**
     * return array of names of all fields in a sublist﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */
    getSublistFields(options) {
    };
    
    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options) {
    };
    
    /**
     * return field object from record's sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Field} [requested field]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(options) {
    };
    
    /**
     * return field object from record's sublist current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @restriction only available in dynamic record
     */
    getCurrentSublistField(options) {
    };
    
    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record} same record, for chaining
     */
    setMatrixHeaderValue(options) {
    };
    
    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    getMatrixHeaderValue(options) {
    };
    
    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record} same record, for chaining
     */
    setMatrixSublistValue(options) {
    };
    
    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    getMatrixSublistValue(options) {
    };
    
    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field} [requested field]
     */
    getMatrixHeaderField(options) {
    };
    
    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field} [requested field]
     */
    getMatrixSublistField(options) {
    };
    
    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    findMatrixSublistLineWithValue(options) {
    };
    
    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    getMatrixHeaderCount(options) {
    };
    
    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record} same record, for chaining
     */
    setCurrentMatrixSublistValue(options) {
    };
    
    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */
    getCurrentMatrixSublistValue(options) {
    };
    
    /**
     * Start listening to events
     * @param {Object} options
     * @param {string[]} options.types [required]
     * @param {eventCallback} options.listener [required]
     * @return {Object} record
     */
    on(options) {
    };
    
    /**
     * Stop listening to events
     * @param {Object} options
     * @param {string[]} options.types [required]
     * @param {eventCallback} options.listener [required]
     * @return {Object} record
     */
    off(options) {
    };
  }
  
  class Sublist {
    /**
     * Return a new instance of sublist object
     *
     * @param {Object} sublist
     * @param {string} sublist.type type of sublist
     * @param {SublistState} sublist.sublistState SublistState
     
     * @return {Sublist}
     * @constructor
     *
     * @since 2015.2
     */
    constructor(sublist) {
    }
    
    /**
     * The name of the sublist.
     * @name Sublist#name
     * @type string
     * @readonly
     */
    getName() {
    };
    
    /**
     * The type of the sublist.
     * @name Sublist#type
     * @type string
     * @readonly
     */
    getType() {
    };
    
    /**
     * The sublist is changed
     * @name Sublist#isChanged
     * @type boolean
     * @readonly
     */
    isChanged() {
    };
    
    /**
     * The sublist is hidden
     * @name Sublist#isHidden
     * @type boolean
     * @readonly
     */
    isHidden() {
    };
    
    /**
     * The sublist is display
     * @name Sublist#isDisplay
     * @type boolean
     * @readonly
     */
    isDisplay() {
    };
    
    /**
     * A flag to indicate whether or not the sublist supports multi-line buffer feature.
     * @name Sublist#isMultilineEditable
     * @type boolean
     * @readonly
     */
    isMultilineEditable() {
    };
    
    /**
     * Returns the object type name (sublist.Sublist)
     * @returns {string}
     */
    toString() {
    };
    
    /**
     * JSON.stringify() implementation.
     * @returns {{id: string, type: string, isChanged: boolean, isDisplay: boolean}}
     */
    toJSON() {
    };
  }
  
  class Field {
    /**
     * @protected
     * @constructor
     */
    constructor() {
    }
    
    /**
     * Return label of the field
     * @name Field#label
     * @type string
     * @readonly
     * @since 2015.2
     */
    label = undefined;
    /**
     * Return id of the field
     * @name Field#id
     * @type string
     * @readonly
     * @since 2015.2
     */
    id = undefined;
    /**
     * Disabled state of the field
     * @name Field#isDisabled
     * @type boolean
     * @since 2015.2
     */
    isDisabled = undefined;
    /**
     * Display state of the field
     * @name Field#isDisplay
     * @type boolean
     * @since 2015.2
     */
    isDisplay = undefined;
    /**
     * Mandatory state of the field
     * @name Field#isMandatory
     * @type boolean
     * @since 2015.2
     */
    isMandatory = undefined;
    /**
     * Read Only state of the field
     * @name Field#isReadOnly
     * @type boolean
     * @since 2015.2
     */
    isReadOnly = undefined;
    /**
     * Visible state of the field
     * @name Field#isVisible
     * @type boolean
     * @since 2015.2
     */
    isVisible = undefined;
    /**
     * Return type of the field
     * @name Field#type
     * @type string
     * @readonly
     * @since 2015.2
     */
    type = undefined;
    /**
     * Return the sublistId of the field
     * @name Field#sublistId
     * @type string
     * @readonly
     * @since 2015.2
     */
    sublistId = undefined;
    /**
     * Returns if the field is a popup
     * @name Field#isPopup
     * @type boolean
     * @readonly
     * @since 2015.2
     */
    isPopup = undefined;
    
    /**
     * get JSON format of the object
     * @return {{id: *, label: *, type: *}}
     *
     */
    toJSON() {
    };
    
    /**
     * @return {string}
     *
     */
    toString() {
    };
  }
}

export {record};