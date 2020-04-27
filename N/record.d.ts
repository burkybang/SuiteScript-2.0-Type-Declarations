/// <reference path="./format.d.ts" />

/**
 * SuiteScript record common module
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267255811.html
 *
 * @module N/record
 * @NApiVersion 2.x
 */
interface record {
  
  /**
   * Create a new record object based on provided type
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258059.html
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {Type|string} options.type record type
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] record default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
   *
   * @since 2015.2
   */
  create(options: { type: record.Type | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): record.Record
  
  /**
   * Load an existing nlobjRecord from the database based on provided type, id
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258486.html
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {Type|string} options.type record type
   * @param {number|string} options.id record id
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] record default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
   *
   * @since 2015.2
   */
  load(options: { type: record.Type | string, id: number | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): record.Record
  
  /**
   * Copy a record object based on provided type, id
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258260.html
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {Type|string} options.type record type
   * @param {number|string} options.id record id
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] record default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
   *
   * @since 2015.2
   */
  copy(options: { type: record.Type | string, id: number | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): record.Record
  
  /**
   * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258715.html
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   *
   * @param {Object} options
   * @param {Type|string} options.fromType record type to be transformed from
   * @param {number|string} options.fromId record id to be transformed from
   * @param {Type|string} options.toType record type to be transformed to
   * @param {boolean} [options.isDynamic=false] record is dynamic
   * @param {Object} [options.defaultValues={}] transformed record's default values
   * @return {Record}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fromType, options.fromId, or options.toType is missing
   *
   * @since 2015.2
   */
  transform(options: { fromType: record.Type | string, fromId: number | string, toType: record.Type | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): record.Record
  
  /**
   * Delete a record object based on provided type, id and return the id of deleted record
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267283372.html
   *
   * @governance 20 units for transactions, 4 for custom records, 10 for all other records
   *
   * @param {Object} options
   * @param {Type|string} options.type record type
   * @param {number|string} options.id record id
   * @return {number} recordId
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
   *
   * @since 2015.2
   */
  delete(options: { type: record.Type | string, id: number | string }): number
  
  /**
   * Commit record field updates to the system
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267283788.html
   *
   * @governance 10 units for transactions, 2 for custom records, 5 for all other records
   * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
   *
   * @param {Object} options
   * @param {Type|string} options.type record type
   * @param {number|string} options.id record id
   * @param {Object.<string, string|string[]|number|Date|boolean>} options.values field and value mapping to be submitted
   * @param {Object} [options.options] additonal flags for submission
   * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
   * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
   * @return {number} id of submitted record
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
   *
   * @since 2015.2
   */
  submitFields(options: { type: record.Type | string, id: number | string, values: { [key: string]: string | string[] | number | Date | boolean }, options?: { enablesourcing?: boolean, ignoreMandatoryFields?: boolean } }): number
  
  /**
   * Attach record to another record
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267284169.html
   *
   * @governance 10 units
   *
   * @param {Object} options
   * @param {Record|{type:Type|string, id:number|string}} options.record record to be attached or object with the type and id of the record to be attached
   * @param {Record|{type:Type|string, id:number|string}} options.to the destination record where options.record will be attached to or object with the type and id of the destination record
   * @param {Object.<string, string|number>} [options.attributes=null] name/value pairs containing attributes
   * @return {void}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
   *
   * @since 2015.2
   */
  attach(options: { record: record.Record | { type: record.Type | string, id: number | string }, to: record.Record | { type: record.Type | string, id: number | string }, attributes?: { [key: string]: string | number } }): void
  
  /**
   * Detach record from another record
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267284360.html
   *
   * @governance 10 units
   *
   * @param {Object} options
   * @param {Record|{type:Type|string, id:number|string}} options.record record to be detached or object with type and id of the record to be detached
   * @param {Record|{type:Type|string, id:number|string}} options.from the destination record where options.record will be detached from or object with the type and id of the destination record
   * @param {Object.<string, string|number>} [options.attributes=null] name/value pairs containing attributes
   * @return {void}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
   *
   * @since 2015.2
   */
  detach(options: { record: record.Record | { type: record.Type | string, id: number | string }, from: record.Record | { type: record.Type | string, id: number | string }, attributes?: { [key: string]: string | number } }): void
}

declare namespace record {
  
  export interface create {
    
    /**
     * Create a new record object based on provided type
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440822690.html
     *
     * @param {Object} options
     * @param {Type|string} options.type record type
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Promise<Record>}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
     *
     * @since 2015.2
     */
    promise(options: { type: record.Type | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): Promise<Record>
  }
  
  export interface load {
    
    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440830173.html
     *
     * @param {Object} options
     * @param {Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Promise<Record>}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise(options: { type: record.Type | string, id: number | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): Promise<Record>
  }
  
  export interface copy {
    
    /**
     * Copy a record object based on provided type, id
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440821922.html
     *
     * @param {Object} options
     * @param {Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Promise<Record>}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise(options: { type: record.Type | string, id: number | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): Promise<Record>
  }
  
  export interface transform {
    
    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440843375.html
     *
     * @param {Object} options
     * @param {string} options.fromType record type to be transformed from
     * @param {number|string} options.fromId record id to be transformed from
     * @param {string} options.toType record type to be transformed to
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] transformed record's default values
     * @return {Promise<Record>}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise(options: { fromType: record.Type | string, fromId: number | string, toType: record.Type | string, isDynamic?: boolean, defaultValues?: { [key: string]: any } }): Promise<Record>
  }
  
  /*export interface delete {
  
    /!**
     * Delete a record object based on provided type, id and return the id of deleted record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440823302.html
     *
     * @param {Object} options
     * @param {Type|string} options.type record type
     * @param {number|string} options.id record id
     * @return {Promise<number>} recordId
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     *!/
    promise(options: { type: record.Type | string, id: number | string }): Promise<number>
  }*/
  
  export interface submitFields {
    
    /**
     * Commit record field updates to the system
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440830813.html
     *
     * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
     *
     * @param {Object} options
     * @param {Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {Object.<string, *>} options.values field and value mapping to be submitted
     * @param {Object} [options.options] additonal flags for submission
     * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
     * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {Promise<number>} id of submitted record
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    promise(options: { type: record.Type | string, id: number | string, values: { [key: string]: any }, options?: { enablesourcing?: boolean, ignoreMandatoryFields?: boolean } }): Promise<number>
  }
  
  export interface attach {
    
    /**
     * Attach record to another record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440821175.html
     *
     * @param {Object} options
     * @param {Record|{type:Type|string, id:number|string}} options.record record to be attached or object with the type and id of the record to be attached
     * @param {Record|{type:Type|string, id:number|string}} options.to the destination record where options.record will be attached to or object with the type and id of the destination record
     * @param {Object.<string, string|number>} [options.attributes=null] name/value pairs containing attributes
     * @return {Promise<void>}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
     *
     * @since 2015.2
     */
    promise(options: { record: Record | { type: record.Type | string, id: number | string }, to: Record | { type: record.Type | string, id: number | string }, attributes?: { [key: string]: string | number } }): Promise<void>
  }
  
  export interface detach {
    
    /**
     * Detach record from another record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440824016.html
     *
     * @param {Object} options
     * @param {Record|{type:Type|string, id:number|string}} options.record record to be detached or object with type and id of the record to be detached
     * @param {Record|{type:Type|string, id:number|string}} options.from the destination record where options.record will be detached from or object with the type and id of the destination record
     * @param {Object.<string, string|number>} [options.attributes=null] name/value pairs containing attributes
     * @return {Promise<void>}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
     *
     * @since 2015.2
     */
    promise(options: { record: Record | { type: record.Type | string, id: number | string }, from: Record | { type: record.Type | string, id: number | string }, attributes?: { [key: string]: string | number } }): Promise<void>
  }
  
  /**
   * Enum for record Type.
   * @enum {string}
   */
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
  
  export interface Column {
    
    /**
     * @name Column#id
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    id: string
    
    /**
     * @name Column#label
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    label: string
    
    /**
     * @name Column#sublistId
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    sublistId: string
    
    /**
     * @name Column#type
     * @type {format.Type}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    type: format.Type
  }
  
  export interface Macro {
    
    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     *
     * @param {Object} options
     * @param {string} options.id macro id
     * @param {string} [options.params] The macro arguments
     * @return {Macro}
     */
    constructor(options: { id: string }): Macro
    
    /**
     * @name Macro#id
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    id: string
    
    /**
     * @name Macro#label
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    label: string
    
    /**
     * @name Macro#description
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    description: string
    
    /**
     * @name Macro#attributes
     * @type {Object}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    attributes: Object
    
    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     *
     * @param {Object} options
     * @param {string} options.id macro id
     * @param {Object.<string, *>} [options.params] The macro arguments
     * @return {notifications: [], response: {}}
     */
    execute(options: { id: string, params?: { [key: string]: any } }): { notifications: [], response: {} }
  }
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4205869719.html
   */
  export interface Record {
    
    /**
     * The internal ID of the record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296706656.html
     *
     * @type {number}
     * @readonly
     */
    id: number
    
    /**
     * The type of the record
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296706984.html
     *
     * @restriction This property is not available for subrecords
     *
     * @type {record.Type|string}
     * @readonly
     */
    type: record.Type | string
    
    /**
     * Indicates whether the record is in dynamic or standard mode
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296707316.html
     *
     * @type {boolean}
     * @readonly
     */
    isDynamic: boolean
    
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
    constructor(options): Record
    
    /**
     * Provides a macro to execute
     *
     * @param {Object} options
     * @param {string} options.id macro id
     * @return {Function} executor function for macro specified by options, or null if not found
     */
    getMacro(options: { id: string }): Function
    
    /**
     * Provides available macros
     *
     * @return {Object} a set of macros (@see Macro) defined on the record indexed by macroId
     */
    getMacros(): Object
    
    /**
     * Performs macro operation and returns result
     *
     * @param {Object} options
     * @param {string} options.id macro id
     * @param {Object.<string, *>} [options.params] macro arguments
     * @return {{notifications: [], response: {}}}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */
    executeMacro(options: { id: string, params?: { [key: string]: any } }): { notifications: [], response: {} }
    
    /**
     * Provide scripting context for records
     *
     * getScriptContext is only in recordDefinition.js and not in dynamicrecord.js, so it is only visible inside NetSuite.
     */
    // getScriptingContext()
    
    /**
     * Executes record action and returns its result. Record ID and type is automatically taken from this record instance.
     *
     * @param {Object} options
     * @param {string} options.id action ID
     * @param {Object} [options.params] action arguments
     * @return {Object} action result the actual return value returned by the action implementation is stored in the
     *     response property
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */
    // executeAction(options)
    
    /**
     * Provides available record actions for this record instance.
     *
     * @return {Object} a set of actions (@see Action) defined on the record indexed by action ID
     */
    // getActions()
    
    /**
     * Returns an executable record action for this record instance.
     *
     * @param {Object} options
     * @param {string} options.id action ID
     * @return {?Action} record action executor for action specified by options
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */
    // getAction(options)
    
    /**
     * Remove body field data
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    
    // removeField(options)
    
    /**
     * Return array of names of all body fields, including machine header field and matrix header fields
     *
     * @return {string[]}
     */
    getFields(): string[]
    
    /**
     * Return array of names of all sublists
     *
     * @return {string[]}
     */
    getSublists(): string[]
    
    /**
     * Return value of the field
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue(options: { fieldId: string }): string | string[] | number | Date | boolean
    
    /**
     * Set value of the field
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setValue(options: { fieldId: string, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean }): Record
    
    /**
     * Get value of the field in text representation
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getText(options: { fieldId: string }): string
    
    /**
     * Set value of the field by text representation
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|string[]} options.text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setText(options: { fieldId: string, text: string | string[], ignoreFieldChange?: boolean }): Record
    
    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */
    findSublistLineWithValue(options: { sublistId: string, fieldId: string, value: string | string[] | number | Date | boolean }): number
    
    /**
     * Return value of a sublist field
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string|string[]|number|Date|boolean}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue(options: { sublistId: string, fieldId: string, line: number }): string | string[] | number | Date | boolean
    
    /**
     * Set the value of a sublist field (available for deferred dynamic only)
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string|string[]|number|Date|boolean} options.value
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */
    setSublistValue(options: { sublistId: string, fieldId: string, line: number, value: string | string[] | number | Date | boolean }): Record
    
    /**
     * Return value of a sublist field in text representation
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    getSublistText(options: { sublistId: string, fieldId: string, line: number }): string
    
    /**
     * Set the value of a sublist field in text representation (available for deferred dynamic only)
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */
    setSublistText(options: { sublistId: string, fieldId: string, line: number, text: string }): Record
    
    /**
     * Return line count of sublist
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     */
    getLineCount(options: { sublistId: string }): number
    
    /**
     * Insert a sublist line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */
    insertLine(options: { sublistId: string, line: number, ignoreRecalc?: boolean }): Record
    
    /**
     * Commits and copies the currently selected line into a new line, which will be the new selected line.
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or not editable
     */
    copyLine(options: { sublistId: string }): Record
    
    /**
     * Remove a sublist line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */
    removeLine(options: { sublistId: string, line: number, ignoreRecalc?: boolean }): Record
    
    /**
     * Select a new line at the end of sublist
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    selectNewLine(options: { sublistId: string }): Record
    
    /**
     * Cancel the current selected line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    cancelLine(options: { sublistId: string }): Record
    
    /**
     * Commit the current selected line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    commitLine(options: { sublistId: string }): Record
    
    /**
     * Return value of a sublist field on the current selected sublist line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistValue(options: { sublistId: string, fieldId: string }): string | string[] | number | Date | boolean
    
    /**
     * Set the value for field in the current selected line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistValue(options: { sublistId: string, fieldId: string, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean }): Record
    
    /**
     * Return the value for field in the current selected line by text representation
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistText(options: { sublistId: string, fieldId: string }): string
    
    /**
     * Set the value for field in the current selected line by text representation
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    setCurrentSublistText(options: { sublistId: string, fieldId: string, text: string, ignoreFieldChange?: boolean }): Record
    
    /**
     * Selects an existing line in a sublist (dynamic mode only)
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     * @restriction only available in dynamic record
     */
    selectLine(options: { sublistId: string, line: number }): Record
    
    /**
     * Save record updates to the system
     * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323.html
     *
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} [options]
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    save(options?: { enableSourcing?: boolean, ignoreMandatoryFields?: boolean }): number
    
    /**
     * Return a value indicating if the field has a subrecord
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasSubrecord(options: { fieldId: string }): boolean
    
    /**
     * Get the subrecord for the associated field
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} client-side subrecord implementation
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    getSubrecord(options: { fieldId: string }): Record
    
    /**
     * Remove the subrecord for the associated field
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} same record, for chaining
     */
    removeSubrecord(options: { fieldId: string }): Record
    
    /**
     * Return a value indicating if the associated sublist field has a subrecord
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {boolean}
     * @restriction only available in deferred dynamic record
     */
    hasSublistSubrecord(options: { sublistId: string, fieldId: string, line: number }): boolean
    
    /**
     * Get the subrecord for the associated sublist field
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Record} client-side subrecord implementation
     * @restriction only available in deferred dynamic record
     */
    getSublistSubrecord(options: { sublistId: string, fieldId: string, line: number }): Record
    
    /**
     * Remove the subrecord for the associated sublist field
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Record} same record, for chaining
     * @restriction only available in deferred dynamic record
     */
    removeSublistSubrecord(options: { sublistId: string, fieldId: string, line: number }): Record
    
    /**
     * Return a value indicating if the associated sublist field has a subrecord on the current line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {boolean}
     * @restriction only available in dynamic record
     */
    hasCurrentSublistSubrecord(options: { sublistId: string, fieldId: string }): boolean
    
    /**
     * Get the subrecord for the associated sublist field on the current line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Record} client-side subrecord implementation
     * @restriction only available in dynamic record
     */
    getCurrentSublistSubrecord(options: { sublistId: string, fieldId: string }): Record
    
    /**
     * Remove the subrecord for the associated sublist field on the current line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Record} same record, for chaining
     * @restriction only available in dynamic record
     */
    removeCurrentSublistSubrecord(options: { sublistId: string, fieldId: string }): Record
    
    /**
     * Returns the specified sublist
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */
    getSublist(options: { sublistId: string }): Sublist
    
    /**
     * Return array of names of all fields in a sublist﻿
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {string[]}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */
    getSublistFields(options: { sublistId: string }): string[]
    
    /**
     * Return field object from record
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options: { fieldId: string }): Field
    
    /**
     * Return field object from record's sublist
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(options: { sublistId: string, fieldId: string, line: number }): Field
    
    /**
     * Return field object from record's sublist current line
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @restriction only available in dynamic record
     */
    getCurrentSublistField(options: { sublistId: string, fieldId: string }): Field
  
    /**
     * Get the select options for a field
     * @restriction Dynamic mode only
     *
     * @param {Object} options
     * @param {string} [options.filter] A search string to filter the select options that are returned.
     * @param {'contains'|'is'|'startswith'} [options.filteroperator]  Supported operators are contains | is | startswith. If not specified, defaults to the contains operator
     * @return {{value:string, text:string}[]}
     */
    getSelectOptions(options: { filter?: string, filteroperator?: 'contains' | 'is' | 'startswith' }): { value: string, text: string }[]
    
    /**
     * Set the value for the associated header in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string|string[]|number|Date|boolean} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    setMatrixHeaderValue(options: { sublistId: string, fieldId: string, column: number, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean }): Record
    
    /**
     * Get the value for the associated header in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {string|string[]|number|Date|boolean}
     */
    getMatrixHeaderValue(options: { sublistId: string, fieldId: string, column: number }): string | string[] | number | Date | boolean
    
    /**
     * Set the value for the associated field in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @param {string|string[]|number|Date|boolean} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record} same record, for chaining
     * @restriction only available in deferred dynamic record
     */
    setMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number, line: number, value: string | string[] | number | Date | boolean }): Record
    
    /**
     * Get the value for the associated field in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {string|string[]|number|Date|boolean}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number, line: number }): string | string[] | number | Date | boolean
    
    /**
     * Get the field for the specified header in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderField(options: { sublistId: string, fieldId: string, column: number }): Field
    
    /**
     * Get the field for the specified sublist in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixSublistField(options: { sublistId: string, fieldId: string, column: number, line: number }): Field
    
    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {string|string[]|number|Date|boolean} options.value the value to search for
     * @param {number} options.column the column number for the field
     * @return {number} line number
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    findMatrixSublistLineWithValue(options: { sublistId: string, fieldId: string, value: string | string[] | number | Date | boolean, column: number }): number
    
    /**
     * Returns the number of columns for the specified matrix.
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderCount(options: { sublistId: string, fieldId: string }): number
    
    /**
     * Set the value for the line currently selected in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string|string[]|number|Date|boolean} options.value - the value to set it to
     * @param {boolean} [options.ignoreFieldChange] - Ignore the field change script (default false)
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     */
    setCurrentMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number, value: string | string[] | number | Date | boolean, ignoreFieldChange?: boolean }): Record
    
    /**
     * Get the value for the line currently selected in the matrix
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @return {string|string[]|number|Date|boolean}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     */
    getCurrentMatrixSublistValue(options: { sublistId: string, fieldId: string, column: number }): string | string[] | number | Date | boolean
  }
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4205869719.html
   */
  export namespace Record {
    
    export interface executeMacro {
      
      /**
       * Performs macro operation and returns result
       *
       * @param {Object} options
       * @param {string} options.id macro id
       * @param {Object.<string, *>} [options.params] macro arguments
       * @return {Promise<{notifications: [], response: {}}>}
       * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
       */
      promise(options: { id: string, params?: { [key: string]: any } }): Promise<{ notifications: [], response: {} }>
    }
    
    export interface save {
      
      /**
       * Save record updates to the system
       * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440842328.html
       *
       * @param {Object} [options]
       * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
       * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return {Promise<number>} id of submitted record
       */
      promise(options?: { enableSourcing?: boolean, ignoreMandatoryFields?: boolean }): Promise<number>
    }
  }
  
  export interface Sublist {
    
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
    constructor(sublist): Sublist
    
    /**
     * The name of the sublist.
     *
     * @name Sublist#name
     * @type {string}
     * @readonly
     */
    getName(): string
    
    /**
     * The type of the sublist.
     *
     * @name Sublist#type
     * @type {string}
     * @readonly
     */
    getType(): string
    
    /**
     * The sublist is changed
     *
     * @name Sublist#isChanged
     * @type {boolean}
     * @readonly
     */
    isChanged(): boolean
    
    /**
     * The sublist is hidden
     *
     * @name Sublist#isHidden
     * @type {boolean}
     * @readonly
     */
    isHidden(): boolean
    
    /**
     * The sublist is display
     *
     * @name Sublist#isDisplay
     * @type {boolean}
     * @readonly
     */
    isDisplay(): boolean
    
    /**
     * A flag to indicate whether or not the sublist supports multi-line buffer feature.
     *
     * @name Sublist#isMultilineEditable
     * @type {boolean}
     * @readonly
     */
    isMultilineEditable(): boolean
    
    /**
     * Returns the object type name (sublist.Sublist)
     *
     * @return {string}
     */
    toString(): string
    
    /**
     * JSON.stringify() implementation.
     *
     * @return {{id: string, type: string, isChanged: boolean, isDisplay: boolean}}
     */
    toJSON(): Object
  }
  
  export interface Field {
    
    /**
     * @protected
     * @constructor
     */
    constructor(): Field
    
    /**
     * Return label of the field
     *
     * @name Field#label
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    label: string
    
    /**
     * Return id of the field
     *
     * @name Field#id
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    id: string
    
    /**
     * Disabled state of the field
     *
     * @name Field#isDisabled
     * @type {boolean}
     * @since 2015.2
     */
    isDisabled: boolean
    
    /**
     * Display state of the field
     *
     * @name Field#isDisplay
     * @type {boolean}
     * @since 2015.2
     */
    isDisplay: boolean
    
    /**
     * Mandatory state of the field
     *
     * @name Field#isMandatory
     * @type {boolean}
     * @since 2015.2
     */
    isMandatory: boolean
    
    /**
     * Read Only state of the field
     *
     * @name Field#isReadOnly
     * @type {boolean}
     * @since 2015.2
     */
    isReadOnly: boolean
    
    /**
     * Visible state of the field
     *
     * @name Field#isVisible
     * @type {boolean}
     * @since 2015.2
     */
    isVisible: boolean
    
    /**
     * Return type of the field
     *
     * @name Field#type
     * @type {format.Type}
     * @readonly
     * @since 2015.2
     */
    type: format.Type
    
    /**
     * Return the sublistId of the field
     *
     * @name Field#sublistId
     * @type {string}
     * @readonly
     * @since 2015.2
     */
    sublistId: string
    
    /**
     * Returns if the field is a popup
     *
     * @name Field#isPopup
     * @type {boolean}
     * @readonly
     * @since 2015.2
     */
    isPopup: boolean
    
    /**
     * Get JSON format of the object
     *
     * @return {{id: *, label: *, type: *}}
     */
    toJSON(): Object
    
    /**
     * @return {string}
     */
    toString(): string
  }
}