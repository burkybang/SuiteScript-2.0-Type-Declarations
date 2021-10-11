/// <reference path="../typings.d.ts" />
/// <reference path="./format.d.ts" />
/// <reference path="./currentRecord.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

/**
 * SuiteScript record module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267255811.html}
 *
 * @module N/record
 * @NApiVersion 2.x
 */
interface record {

  create: {

    /**
     * Create a new record object based on provided type
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258059.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object<string, *>} [options.defaultValues={}] record default values
     * @return {record.Record|currentRecord.CurrentRecord}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
     *
     * @since 2015.2
     */
    (options: {
      type: record.Type | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): record.Record | currentRecord.CurrentRecord

    /**
     * Create a new record object based on provided type
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440822690.html}
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Promise<record.Record|currentRecord.CurrentRecord>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
     *
     * @since 2015.2
     */
    promise(options: {
      type: record.Type | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): Promise<record.Record | currentRecord.CurrentRecord>
  }

  load: {

    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258486.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object<string, *>} [options.defaultValues={}] record default values
     * @return {record.Record|currentRecord.CurrentRecord}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    (options: {
      type: record.Type | string,
      id: number | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): record.Record | currentRecord.CurrentRecord

    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440830173.html}
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Promise<record.Record|currentRecord.CurrentRecord>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise(options: {
      type: record.Type | string,
      id: number | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): Promise<record.Record | currentRecord.CurrentRecord>
  }

  copy: {

    /**
     * Copy a record object based on provided type, id
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258260.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object<string, *>} [options.defaultValues={}] record default values
     * @return {Record}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    (options: {
      type: record.Type | string,
      id: number | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): record.Record | currentRecord.CurrentRecord

    /**
     * Copy a record object based on provided type, id
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440821922.html}
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Promise<record.Record|currentRecord.CurrentRecord>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise(options: {
      type: record.Type | string,
      id: number | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): Promise<record.Record | currentRecord.CurrentRecord>
  }

  transform: {

    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258715.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {record.Type|string} options.fromType record type to be transformed from
     * @param {number|string} options.fromId record id to be transformed from
     * @param {record.Type|string} options.toType record type to be transformed to
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object<string, *>} [options.defaultValues={}] transformed record's default values
     * @return {Record}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fromType, options.fromId, or options.toType is missing
     *
     * @since 2015.2
     */
    (options: {
      fromType: record.Type | string,
      fromId: number | string,
      toType: record.Type | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): record.Record | currentRecord.CurrentRecord

    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440843375.html}
     *
     * @param {Object} options
     * @param {string} options.fromType record type to be transformed from
     * @param {number|string} options.fromId record id to be transformed from
     * @param {string} options.toType record type to be transformed to
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] transformed record's default values
     * @return {Promise<record.Record|currentRecord.CurrentRecord>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    promise(options: {
      fromType: record.Type | string,
      fromId: number | string,
      toType: record.Type | string,
      isDynamic?: boolean,
      defaultValues?: {
        [p: string]: any,
      },
    }): Promise<record.Record | currentRecord.CurrentRecord>
  }

  delete: {

    /**
     * Delete a record object based on provided type, id and return the id of deleted record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267283372.html}
     *
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @return {number} recordId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    (options: {
      type: record.Type | string,
      id: number | string,
    }): number

    /**
     * Delete a record object based on provided type, id and return the id of deleted record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440823302.html}
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @return {Promise<number>} recordId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    promise(options: {
      type: record.Type | string,
      id: number | string,
    }): Promise<number>
  }

  submitFields: {

    /**
     * Commit record field updates to the system
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267283788.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {Object<string, string|number|(string|number)[]|Date|boolean>} options.values field and value mapping to be submitted
     * @param {Object} [options.options] additonal flags for submission
     * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
     * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    (options: {
      type: record.Type | string,
      id: number | string,
      values: {
        [p: string]: string | number | (string | number)[] | Date | boolean,
      },
      options?: {
        enablesourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      },
    }): number

    /**
     * Commit record field updates to the system
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440830813.html}
     *
     * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
     *
     * @param {Object} options
     * @param {record.Type|string} options.type record type
     * @param {number|string} options.id record id
     * @param {Object<string, *>} options.values field and value mapping to be submitted
     * @param {Object} [options.options] additonal flags for submission
     * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
     * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {Promise<number>} id of submitted record
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    promise(options: {
      type: record.Type | string,
      id: number | string,
      values: {
        [p: string]: any,
      },
      options?: {
        enablesourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      },
    }): Promise<number>
  }

  attach: {

    /**
     * Attach record to another record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267284169.html}
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {Record|{type:Type|string, id:number|string}} options.record record to be attached or object with the type and id of the record to be attached
     * @param {Record|{type:Type|string, id:number|string}} options.to the destination record where options.record will be attached to or object with the type and id of the destination record
     * @param {Object<string, string|number>} [options.attributes=null] name/value pairs containing attributes
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
     *
     * @since 2015.2
     */
    (options: {
      record: record.Record | {
        type: record.Type | string,
        id: number | string,
      },
      to: record.Record | {
        type: record.Type | string,
        id: number | string,
      },
      attributes?: {
        [p: string]: string | number,
      },
    }): void

    /**
     * Attach record to another record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440821175.html}
     *
     * @param {Object} options
     * @param {Record|{type:Type|string, id:number|string}} options.record record to be attached or object with the type and id of the record to be attached
     * @param {Record|{type:Type|string, id:number|string}} options.to the destination record where options.record will be attached to or object with the type and id of the destination record
     * @param {Object<string, string|number>} [options.attributes=null] name/value pairs containing attributes
     * @return {Promise<void>}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
     *
     * @since 2015.2
     */
    promise(options: {
      record: record.Record | {
        type: record.Type | string,
        id: number | string,
      },
      to: record.Record | {
        type: record.Type | string,
        id: number | string,
      },
      attributes?: {
        [p: string]: string | number,
      },
    }): Promise<void>
  }

  detach: {

    /**
     * Detach record from another record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267284360.html}
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {Record|{type:Type|string, id:number|string}} options.record record to be detached or object with type and id of the record to be detached
     * @param {Record|{type:Type|string, id:number|string}} options.from the destination record where options.record will be detached from or object with the type and id of the destination record
     * @param {Object<string, string|number>} [options.attributes=null] name/value pairs containing attributes
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
     *
     * @since 2015.2
     */
    (options: {
      record: record.Record | {
        type: record.Type | string,
        id: number | string,
      },
      from: record.Record | {
        type: record.Type | string,
        id: number | string,
      },
      attributes?: {
        [p: string]: string | number,
      },
    }): void
  }

  /**
   * Detach record from another record
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440824016.html}
   *
   * @param {Object} options
   * @param {Record|{type:Type|string, id:number|string}} options.record record to be detached or object with type and id of the record to be detached
   * @param {Record|{type:Type|string, id:number|string}} options.from the destination record where options.record will be detached from or object with the type and id of the destination record
   * @param {Object<string, string|number>} [options.attributes=null] name/value pairs containing attributes
   * @return {Promise<void>}
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
   *
   * @since 2015.2
   */
  promise(options: {
    record: record.Record | {
      type: record.Type | string,
      id: number | string,
    },
    from: record.Record | {
      type: record.Type | string,
      id: number | string,
    },
    attributes?: {
      [p: string]: string | number,
    }
  }): Promise<void>
}

declare namespace record {

  /**
   * Enum for record Type
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273205732.html}
   *
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
    BALANCE_TRX_BY_SEGMENTS = 'balancetrxbysegments',
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
    BONUS = 'bonus',
    BONUS_TYPE = 'bonustype',
    BUDGET_EXCHANGE_RATE = 'budgetexchangerate',
    BULK_OWNERSHIP_TRANSFER = 'bulkownershiptransfer',
    BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
    CALENDAR_EVENT = 'calendarevent',
    CAMPAIGN = 'campaign',
    CAMPAIGN_RESPONSE = 'campaignresponse',
    CAMPAIGN_TEMPLATE = 'campaigntemplate',
    CARDHOLDER_AUTHENTICATION = 'cardholderauthentication',
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
    CUSTOM_PURCHASE = 'custompurchase',
    CUSTOM_RECORD = 'customrecord',
    CUSTOM_SALE = 'customsale',
    CUSTOM_TRANSACTION = 'customtransaction',
    DEPARTMENT = 'department',
    DEPOSIT = 'deposit',
    DEPOSIT_APPLICATION = 'depositapplication',
    DESCRIPTION_ITEM = 'descriptionitem',
    DISCOUNT_ITEM = 'discountitem',
    DOWNLOAD_ITEM = 'downloaditem',
    EMAIL_TEMPLATE = 'emailtemplate',
    EMPLOYEE = 'employee',
    EMPLOYEE_CHANGE_REQUEST = 'employeechangerequest',
    EMPLOYEE_CHANGE_REQUEST_TYPE = 'employeechangerequesttype',
    EMPLOYEE_STATUS = 'employeestatus',
    EMPLOYEE_TYPE = 'employeetype',
    ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping',
    ESTIMATE = 'estimate',
    EXPENSE_AMORTIZATION_EVENT = 'expenseamortizationevent',
    EXPENSE_CATEGORY = 'expensecategory',
    EXPENSE_PLAN = 'expenseplan',
    EXPENSE_REPORT = 'expensereport',
    FAIR_VALUE_PRICE = 'fairvalueprice',
    FINANCIAL_INSTITUTION = 'financialinstitution',
    FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule',
    FOLDER = 'folder',
    FORMAT_PROFILE = 'formatprofile',
    FULFILLMENT_REQUEST = 'fulfillmentrequest',
    GENERAL_TOKEN = 'generaltoken',
    GENERIC_RESOURCE = 'genericresource',
    GIFT_CERTIFICATE = 'giftcertificate',
    GIFT_CERTIFICATE_ITEM = 'giftcertificateitem',
    GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping',
    GLOBAL_INVENTORY_RELATIONSHIP = 'globalinventoryrelationship',
    GL_NUMBERING_SEQUENCE = 'glnumberingsequence',
    GOAL = 'goal',
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
    INVOICE_GROUP = 'invoicegroup',
    ISSUE = 'issue',
    ISSUE_PRODUCT = 'issueproduct',
    ISSUE_PRODUCT_VERSION = 'issueproductversion',
    ITEM_ACCOUNT_MAPPING = 'itemaccountmapping',
    ITEM_COLLECTION = 'itemcollection',
    ITEM_COLLECTION_ITEM_MAP = 'itemcollectionitemmap',
    ITEM_DEMAND_PLAN = 'itemdemandplan',
    ITEM_FULFILLMENT = 'itemfulfillment',
    ITEM_GROUP = 'itemgroup',
    ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration',
    ITEM_PROCESS_FAMILY = 'itemprocessfamily',
    ITEM_PROCESS_GROUP = 'itemprocessgroup',
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
    MEM_DOC = 'memdoc',
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
    ORDER_TYPE = 'ordertype',
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
    PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule',
    PERFORMANCE_METRIC = 'performancemetric',
    PERFORMANCE_REVIEW = 'performancereview',
    PERFORMANCE_REVIEW_SCHEDULE = 'performancereviewschedule',
    PERIOD_END_JOURNAL = 'periodendjournal',
    PHONE_CALL = 'phonecall',
    PICK_STRATEGY = 'pickstrategy',
    PICK_TASK = 'picktask',
    PLANNED_ORDER = 'plannedorder',
    PLANNING_ITEM_CATEGORY = 'planningitemcategory',
    PLANNING_ITEM_GROUP = 'planningitemgroup',
    PLANNING_RULE_GROUP = 'planningrulegroup',
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
    SUBSIDIARY_SETTINGS = 'subsidiarysettings',
    SUBTOTAL_ITEM = 'subtotalitem',
    SUITELET = 'suitelet',
    SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot',
    SUPPLY_CHAIN_SNAPSHOT_SIMULATION = 'supplychainsnapshotsimulation',
    SUPPLY_CHANGE_ORDER = 'supplychangeorder',
    SUPPLY_PLAN_DEFINITION = 'supplyplandefinition',
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
    UNLOCKED_TIME_PERIOD = 'unlockedtimeperiod',
    USAGE = 'usage',
    USEREVENT_SCRIPT = 'usereventscript',
    VENDOR = 'vendor',
    VENDOR_BILL = 'vendorbill',
    VENDOR_CATEGORY = 'vendorcategory',
    VENDOR_CREDIT = 'vendorcredit',
    VENDOR_PAYMENT = 'vendorpayment',
    VENDOR_PREPAYMENT = 'vendorprepayment',
    VENDOR_PREPAYMENT_APPLICATION = 'vendorprepaymentapplication',
    VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
    VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship',
    WAVE = 'wave',
    WBS = 'wbs',
    WEBSITE = 'website',
    WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
    WORKPLACE = 'workplace',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
    ZONE = 'zone',
  }

  /**
   * Encapsulates a column of a sublist on a standard or custom record
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600354269.html}
   */
  export interface Column {

    /**
     * Returns the internal ID of the column
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600364069.html}
     *
     * @type {string}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2015.2
     */
    id: string

    /**
     * Returns the label of the column
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600366751.html}
     *
     * @type {string}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2015.2
     */
    label: string

    /**
     * Returns the internal ID of the standard or custom sublist that contains the column
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600369846.html}
     *
     * @type {string}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2015.2
     */
    sublistId: string

    /**
     * Returns the column type
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600370892.html}
     *
     * @type {format.Type}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2015.2
     */
    type: format.Type

    /**
     * Indicates whether the column is disabled
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158592991246.html}
     *
     * @type {boolean}
     *
     * @since 2020.2
     */
    isDisabled: boolean

    /**
     * Indicates whether the column is displayed
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593019143.html}
     *
     * @type {boolean}
     *
     * @since 2020.2
     */
    isDisplay: boolean

    /**
     * Indicates whether the column is mandatory
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593030499.html}
     *
     * @type {boolean}
     *
     * @since 2020.2
     */
    isMandatory: boolean

    /**
     * Indicates whether the column is sortable
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593039336.html}
     *
     * @type {boolean}
     *
     * @since 2020.2
     */
    isSortable: boolean

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     *
     * @return {'sublist.Column'}
     *
     * @since 2015.2
     */
    toString(): 'sublist.Column'

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     *
     * @return {Object<string, *>}
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * Encapsulates a record macro
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1529089092.html}
   *
   * @since 2018.2
   */
  export interface Macro {

    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730768.html}
     *
     * @param {Object} options
     * @param {string} options.id macro id
     * @param {Object<string, *>} [options.params] The macro arguments
     * @return {{notifications: [], response: {}}}
     *
     * @since 2018.2
     */
    constructor(options: {
      id: string,
      params?: {
        [p: string]: any,
      },
    }): {
      notifications: any[],
      response: Object,
    }

    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730798.html}
     *
     * @param {Object} options
     * @param {string} options.id macro id
     * @param {Object<string, *>} [options.params] The macro arguments
     * @return {Promise<{notifications: [], response: {}}>}
     *
     * @since 2018.2
     */
    promise(options: {
      id: string,
      params?: {
        [p: string]: any,
      },
    }): Promise<{
      notifications: any[],
      response: Object,
    }>

    /**
     * The ID of the macro
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731173.html}
     *
     * @type {string}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2018.2
     */
    id: string

    /**
     * The label of the macro
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731186.html}
     *
     * @type {string}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2018.2
     */
    label: string

    /**
     * The description of the macro
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731199.html}
     *
     * @type {string}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2018.2
     */
    description: string

    /**
     * The defined attributes of the macro
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731214.html}
     *
     * @type {Object}
     *
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2018.2
     */
    attributes: Object

    execute: {
      /**
       * Performs a macro operation and returns its result in a plain JavaScript object
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730726.html}
       *
       * @param {Object} options
       * @param {string} options.id macro id
       * @param {Object<string, *>} [options.params] The macro arguments
       * @return {{notifications: [], response: {}}}
       *
       * @since 2018.2
       */
      (options: {
        id: string,
        params?: {
          [p: string]: any,
        },
      }): {
        notifications: any[],
        response: Object,
      }

      /**
       * Performs a macro operation and returns its result in a plain JavaScript object
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730748.html}
       *
       * @param {Object} options
       * @param {string} options.id macro id
       * @param {Object<string, *>} [options.params] The macro arguments
       * @return {Promise<{notifications: [], response: {}}>}
       *
       * @since 2018.2
       */
      promise(options: {
        id: string,
        params?: {
          [p: string]: any,
        },
      }): Promise<{
        notifications: any[],
        response: Object,
      }>
    }

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     *
     * @return {'Macro'}
     *
     * @since 2015.2
     */
    toString(): 'Macro'

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     *
     * @return {Object<string, *>}
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * Encapsulates a NetSuite record
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4205869719.html}
   *
   * @since 2015.2
   */
  export interface Record {

    /**
     * The internal ID of the record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296706656.html}
     *
     * @type {number}
     *
     * @readonly
     *
     * @since 2015.2
     */
    id: number

    /**
     * The type of the record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296706984.html}
     *
     * @restriction This property is not available for subrecords
     *
     * @type {record.Type|string}
     *
     * @readonly
     *
     * @since 2015.2
     */
    type: record.Type | string

    /**
     * Indicates whether the record is in dynamic or standard mode
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296707316.html}
     *
     * @type {boolean}
     *
     * @readonly
     *
     * @since 2015.2
     */
    isDynamic: boolean

    /**
     * Provides a macro to be executed
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509992196.html}
     *
     * @param {Object} options
     * @param {string} options.id macro id
     * @return {Function} executor function for macro specified by options, or null if not found
     *
     * @since 2018.2
     */
    getMacro(options: {
      id: string,
    }): Macro

    /**
     * Provides a plain JavaScript object of available macro objects defined for a record type, indexed by the Macro ID
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509992211.html}
     *
     * @return {Object<string, record.Macro>} a set of macros (@see Macro) defined on the record indexed by macroId
     *
     * @since 2018.2
     */
    getMacros(): {
      [p: string]: Macro,
    }

    executeMacro: {

      /**
       * Performs macro operation and returns result
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509992174.html}
       *
       * @param {Object} options
       * @param {string} options.id macro id
       * @param {Object<string, *>} [options.params] macro arguments
       * @return {{notifications: [], response: {}}}
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
       *
       * @since 2018.2
       */
      (options: {
        id: string,
        params?: {
          [p: string]: any,
        },
      }): {
        notifications: any[],
        response: Object,
      }

      /**
       * Performs macro operation and returns result
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510066072.html}
       *
       * @param {Object} options
       * @param {string} options.id macro id
       * @param {Object<string, *>} [options.params] macro arguments
       * @return {Promise<{notifications: [], response: {}}>}
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
       *
       * @since 2015.2
       */
      promise(options: {
        id: string,
        params?: {
          [p: string]: any,
        },
      }): Promise<{
        notifications: [],
        response: {},
      }>
    }

    /**
     * Return value of the field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273154686.html}
     *
     * @param {string} fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     *
     * @since 2015.2
     */
    getValue(
      fieldId: string,
    ): string | string[] | number | Date | boolean

    /**
     * Return value of the field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273154686.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     *
     * @since 2015.2
     */
    getValue(options: {
      fieldId: string,
    }): string | string[] | number | Date | boolean

    /**
     * Set value of the field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273155868.html}
     *
     * @param {string} fieldId
     * @param {string|number|(string|number)[]|Date|boolean} value
     * @param {boolean} [ignoreFieldChange=false] Ignore the field change script
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     *
     * @since 2015.2
     */
    setValue(
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    ): this

    /**
     * Set value of the field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273155868.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|number|(string|number)[]|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     *
     * @since 2015.2
     */
    setValue(options: {
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    }): this

    /**
     * Get value of the field in text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273156769.html}
     *
     * @param {string} fieldId
     * @return {string}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     *
     * @since 2015.2
     */
    getText(
      fieldId: string,
    ): string

    /**
     * Get value of the field in text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273156769.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     *
     * @since 2015.2
     */
    getText(options: {
      fieldId: string,
    }): string

    /**
     * Set value of the field by text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157034.html}
     *
     * @param {string} fieldId
     * @param {string|string[]} text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     *
     * @since 2015.2
     */
    setText(
      fieldId: string,
      text: string | string[],
      ignoreFieldChange?: boolean,
    ): this

    /**
     * Set value of the field by text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157034.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string|string[]} options.text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     *
     * @since 2015.2
     */
    setText(options: {
      fieldId: string,
      text: string | string[],
      ignoreFieldChange?: boolean,
    }): this

    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157398.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {string|string[]|number|Date|boolean} value
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     *
     * @since 2015.2
     */
    findSublistLineWithValue(
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
    ): number

    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157398.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|string[]|number|Date|boolean} options.value
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     *
     * @since 2015.2
     */
    findSublistLineWithValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
    }): number

    /**
     * Return value of a sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166148.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     *
     * @since 2015.2
     */
    getSublistValue(
      sublistId: string,
      fieldId: string,
      line: number,
    ): string | string[] | number | Date | boolean

    /**
     * Return value of a sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166148.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     *
     * @since 2015.2
     */
    getSublistValue(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): string | string[] | number | Date | boolean

    /**
     * Set the value of a sublist field (available for deferred dynamic only)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166777.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @param {string|number|(string|number)[]|Date|boolean} value
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     *
     * @since 2015.2
     */
    setSublistValue(
      sublistId: string,
      fieldId: string,
      line: number,
      value: string | number | (string | number)[] | Date | boolean,
    ): this

    /**
     * Set the value of a sublist field (available for deferred dynamic only)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166777.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string|number|(string|number)[]|Date|boolean} options.value
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     *
     * @since 2015.2
     */
    setSublistValue(options: {
      sublistId: string,
      fieldId: string,
      line: number,
      value: string | number | (string | number)[] | Date | boolean,
    }): this

    /**
     * Return value of a sublist field in text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167233.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {string}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     *
     * @since 2015.2
     */
    getSublistText(
      sublistId: string,
      fieldId: string,
      line: number,
    ): string

    /**
     * Return value of a sublist field in text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167233.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     *
     * @since 2015.2
     */
    getSublistText(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): string

    /**
     * Set the value of a sublist field in text representation (available for deferred dynamic only)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167591.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @param {string} text
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     *
     * @since 2015.2
     */
    setSublistText(
      sublistId: string,
      fieldId: string,
      line: number,
      text: string,
    ): this

    /**
     * Set the value of a sublist field in text representation (available for deferred dynamic only)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167591.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     *
     * @since 2015.2
     */
    setSublistText(options: {
      sublistId: string,
      fieldId: string,
      line: number,
      text: string,
    }): this

    /**
     * Return line count of sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157892.html}
     *
     * @param {string} sublistId
     * @return {number}
     *
     * @since 2015.2
     */
    getLineCount(
      sublistId: string,
    ): number

    /**
     * Return line count of sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157892.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {number}
     *
     * @since 2015.2
     */
    getLineCount(options: {
      sublistId: string,
    }): number

    /**
     * Insert a sublist line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273158210.html}
     *
     * @param {string} sublistId
     * @param {number} line
     * @param {boolean} [ignoreRecalc=false] ignore recalc scripting
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     *
     * @since 2015.2
     */
    insertLine(
      sublistId: string,
      line: number,
      ignoreRecalc?: boolean,
    ): this

    /**
     * Insert a sublist line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273158210.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [options.ignoreRecalc=false] ignore recalc scripting
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     *
     * @since 2015.2
     */
    insertLine(options: {
      sublistId: string,
      line: number,
      ignoreRecalc?: boolean,
    }): this

    /**
     * Remove a sublist line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273165479.html}
     *
     * @param {string} sublistId
     * @param {number} line
     * @param {boolean} [ignoreRecalc=false] ignore recalc scripting
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     *
     * @since 2015.2
     */
    removeLine(
      sublistId: string,
      line: number,
      ignoreRecalc?: boolean,
    ): this

    /**
     * Remove a sublist line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273165479.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {boolean} [options.ignoreRecalc=false] ignore recalc scripting
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     *
     * @since 2015.2
     */
    removeLine(options: {
      sublistId: string,
      line: number,
      ignoreRecalc?: boolean,
    }): this

    /**
     * Select a new line at the end of sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273170152.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     *
     * @since 2015.2
     */
    selectNewLine(
      sublistId: string,
    ): this

    /**
     * Select a new line at the end of sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273170152.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     *
     * @since 2015.2
     */
    selectNewLine(options: {
      sublistId: string,
    }): this

    /**
     * Selects an existing line in a sublist (dynamic mode only)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273169163.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {number} line
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     *
     * @since 2015.2
     */
    selectLine(
      sublistId: string,
      line: number,
    ): this

    /**
     * Selects an existing line in a sublist (dynamic mode only)
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273169163.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if a required argument is invalid or the sublist is not editable
     *
     * @since 2015.2
     */
    selectLine(options: {
      sublistId: string,
      line: number,
    }): this

    /**
     * Cancel the current selected line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273168483.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     *
     * @since 2015.2
     */
    cancelLine(
      sublistId: string,
    ): this

    /**
     * Cancel the current selected line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273168483.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     *
     * @since 2015.2
     */
    cancelLine(options: {
      sublistId: string,
    }): this

    /**
     * Commit the current selected line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273168899.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     *
     * @since 2015.2
     */
    commitLine(
      sublistId: string,
    ): this

    /**
     * Commit the current selected line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273168899.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     *
     * @since 2015.2
     */
    commitLine(options: {
      sublistId: string,
    }): this

    /**
     * Return value of a sublist field on the current selected sublist line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273170578.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     *
     * @since 2015.2
     */
    getCurrentSublistValue(
      sublistId: string,
      fieldId: string,
    ): string | string[] | number | Date | boolean

    /**
     * Return value of a sublist field on the current selected sublist line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273170578.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     *
     * @since 2015.2
     */
    getCurrentSublistValue(options: {
      sublistId: string,
      fieldId: string,
    }): string | string[] | number | Date | boolean

    /**
     * Set the value for field in the current selected line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273171484.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {string|number|(string|number)[]|Date|boolean} value
     * @param {boolean} [ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     *
     * @since 2015.2
     */
    setCurrentSublistValue(
      sublistId: string,
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    ): this

    /**
     * Set the value for field in the current selected line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273171484.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string|number|(string|number)[]|Date|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     *
     * @since 2015.2
     */
    setCurrentSublistValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    }): this

    /**
     * Return the value for field in the current selected line by text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273172039.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     *
     * @since 2015.2
     */
    getCurrentSublistText(
      sublistId: string,
      fieldId: string,
    ): string

    /**
     * Return the value for field in the current selected line by text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273172039.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     *
     * @since 2015.2
     */
    getCurrentSublistText(options: {
      sublistId: string,
      fieldId: string,
    }): string

    /**
     * Set the value for field in the current selected line by text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709001.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {string} text
     * @param {boolean} [ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     *
     * @since 2015.2
     */
    setCurrentSublistText(
      sublistId: string,
      fieldId: string,
      text: string,
      ignoreFieldChange?: boolean,
    ): this

    /**
     * Set the value for field in the current selected line by text representation
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709001.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {string} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     *
     * @since 2015.2
     */
    setCurrentSublistText(options: {
      sublistId: string,
      fieldId: string,
      text: string,
      ignoreFieldChange?: boolean,
    }): this

    save: {

      /**
       * Save record updates to the system
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       *
       * @param {Object} [options]
       * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
       * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return {number} id of submitted record
       *
       * @since 2015.2
       */
      (options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      }): number

      /**
       * Save record updates to the system
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       *
       * @param {boolean} [enableSourcing=false] enable sourcing during record update
       * @param {boolean} [ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return {number} id of submitted record
       *
       * @since 2015.2
       */
      (
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      ): number

      /**
       * Save record updates to the system
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440842328.html}
       *
       * @param {Object} [options]
       * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
       * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
       *
       * @return {Promise<number>} id of submitted record
       *
       * @since 2015.2
       */
      promise(options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      }): Promise<number>

      /**
       * Save record updates to the system
       * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440842328.html}
       *
       * @param {boolean} [enableSourcing=false] enable sourcing during record update
       * @param {boolean} [ignoreMandatoryFields=false] ignore mandatory field during record submission
       *
       * @return {Promise<number>} id of submitted record
       *
       * @since 2015.2
       */
      promise(
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      ): Promise<number>
    }


    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600438392.html}
     *
     * @param {string} fieldId
     * @return {boolean}
     *
     * @since 2015.2
     */
    hasSubrecord(
      fieldId: string,
    ): boolean

    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600438392.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     *
     * @since 2015.2
     */
    hasSubrecord(options: {
      fieldId: string,
    }): boolean

    /**
     * Get the subrecord for the associated field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709996.html}
     *
     * @param {string} fieldId
     * @return {Record} client-side subrecord implementation
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     *
     * @since 2015.2
     */
    getSubrecord(
      fieldId: string,
    ): Record

    /**
     * Get the subrecord for the associated field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709996.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} client-side subrecord implementation
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     *
     * @since 2015.2
     */
    getSubrecord(options: {
      fieldId: string,
    }): Record

    /**
     * Remove the subrecord for the associated field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710374.html}
     *
     * @param {string} fieldId
     * @return {Record} same object for chaining
     *
     * @since 2015.2
     */
    removeSubrecord(
      fieldId: string,
    ): this

    /**
     * Remove the subrecord for the associated field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710374.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} same object for chaining
     *
     * @since 2015.2
     */
    removeSubrecord(options: {
      fieldId: string,
    }): this

    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600435332.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {boolean}
     *
     * @since 2015.2
     */
    hasSublistSubrecord(
      sublistId: string,
      fieldId: string,
      line: number,
    ): boolean

    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600435332.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {boolean}
     *
     * @since 2015.2
     */
    hasSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): boolean

    /**
     * Get the subrecord for the associated sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296711506.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {Record} client-side subrecord implementation
     *
     * @since 2015.2
     */
    getSublistSubrecord(
      sublistId: string,
      fieldId: string,
      line: number,
    ): Record

    /**
     * Get the subrecord for the associated sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296711506.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Record} client-side subrecord implementation
     *
     * @since 2015.2
     */
    getSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): Record

    /**
     * Remove the subrecord for the associated sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712585.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {Record} same object for chaining
     *
     * @since 2015.2
     */
    removeSublistSubrecord(
      sublistId: string,
      fieldId: string,
      line: number,
    ): Record

    /**
     * Remove the subrecord for the associated sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712585.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Record} same object for chaining
     *
     * @since 2015.2
     */
    removeSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): Record

    /**
     * Return a value indicating if the associated sublist field has a subrecord on the current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600423347.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {boolean}
     *
     * @since 2015.2
     */
    hasCurrentSublistSubrecord(
      sublistId: string,
      fieldId: string,
    ): boolean

    /**
     * Return a value indicating if the associated sublist field has a subrecord on the current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600423347.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {boolean}
     *
     * @since 2015.2
     */
    hasCurrentSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
    }): boolean

    /**
     * Get the subrecord for the associated sublist field on the current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710967.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {Record} client-side subrecord implementation
     *
     * @since 2015.2
     */
    getCurrentSublistSubrecord(
      sublistId: string,
      fieldId: string,
    ): Record

    /**
     * Get the subrecord for the associated sublist field on the current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710967.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Record} client-side subrecord implementation
     *
     * @since 2015.2
     */
    getCurrentSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
    }): Record

    /**
     * Remove the subrecord for the associated sublist field on the current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712054.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {Record} same object for chaining
     *
     * @since 2015.2
     */
    removeCurrentSublistSubrecord(
      sublistId: string,
      fieldId: string,
    ): Record

    /**
     * Remove the subrecord for the associated sublist field on the current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712054.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Record} same object for chaining
     *
     * @since 2015.2
     */
    removeCurrentSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
    }): Record

    /**
     * Returns the specified sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599715398.html}
     *
     * @param {string} sublistId
     * @return {Sublist}
     *
     * @since 2015.2
     */
    getSublist(
      sublistId: string,
    ): Sublist

    /**
     * Returns the specified sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599715398.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     *
     * @since 2015.2
     */
    getSublist(options: {
      sublistId: string,
    }): Sublist

    /**
     * Return array of names of all sublists
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599718205.html}
     *
     * @return {string[]}
     *
     * @since 2015.2
     */
    getSublists(): string[]

    /**
     * Return field object from record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153320.html}
     *
     * @param {string} fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     *
     * @since 2015.2
     */
    getField(
      fieldId: string,
    ): Field

    /**
     * Return field object from record
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153320.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     *
     * @since 2015.2
     */
    getField(options: {
      fieldId: string,
    }): Field

    /**
     * Return array of field IDs of all body fields including machine header fields and matrix header fields
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152646.html}
     *
     * @return {string[]}
     *
     * @since 2015.2
     */
    getFields(): string[]

    /**
     * Return field object from record's sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153882.html}
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @param {number} line
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     *
     * @since 2015.2
     */
    getSublistField(
      sublistId: string,
      fieldId: string,
      line: number,
    ): Field

    /**
     * Return field object from record's sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153882.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     *
     * @since 2015.2
     */
    getSublistField(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): Field

    /**
     * Return array of names of all fields in a sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943.html}
     *
     * @param {string} sublistId
     * @return {string[]}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     *
     * @since 2015.2
     */
    getSublistFields(
      sublistId: string,
    ): string[]

    /**
     * Return array of names of all fields in a sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {string[]}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     *
     * @since 2015.2
     */
    getSublistFields(options: {
      sublistId: string,
    }): string[]

    /**
     * Return field object from record's sublist current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4659853446.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId
     * @param {string} fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     *
     * @since 2015.2
     */
    getCurrentSublistField(
      sublistId: string,
      fieldId: string,
    ): Field

    /**
     * Return field object from record's sublist current line
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4659853446.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     *
     * @since 2015.2
     */
    getCurrentSublistField(options: {
      sublistId: string,
      fieldId: string,
    }): Field

    /**
     * Get the field for the specified header in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599679237.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixHeaderField(
      sublistId: string,
      fieldId: string,
      column: number,
    ): Field

    /**
     * Get the field for the specified header in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599679237.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixHeaderField(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): Field

    /**
     * Get the field for the specified sublist in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599708431.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {number} line the line number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixSublistField(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    ): Field

    /**
     * Get the field for the specified sublist in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599708431.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {Field}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixSublistField(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    }): Field

    /**
     * Get the value for the associated header in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599703938.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixHeaderValue(
      sublistId: string,
      fieldId: string,
      column: number,
    ): string | string[] | number | Date | boolean

    /**
     * Get the value for the associated header in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599703938.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixHeaderValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): string | string[] | number | Date | boolean

    /**
     * Set the value for the associated header in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600547643.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} value the value to set it to
     * @param {boolean} [ignoreFieldChange] Ignore the field change script (default false)
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    setMatrixHeaderValue(
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    ): this

    /**
     * Set the value for the associated header in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600547643.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    setMatrixHeaderValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    }): this

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599712373.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {number} line the line number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    ): string | string[] | number | Date | boolean

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599712373.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    }): string | string[] | number | Date | boolean

    /**
     * Set the value for the associated field in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600551458.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {number} column the column number for the field
     * @param {number} line the line number for the field
     * @param {string|number|(string|number)[]|Date|boolean} value the value to set it to
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    setMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
      value: string | number | (string | number)[] | Date | boolean,
    ): this

    /**
     * Set the value for the associated field in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600551458.html}
     * @restriction only available in deferred dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @param {string|number|(string|number)[]|Date|boolean} options.value the value to set it to
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    setMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
      value: string | number | (string | number)[] | Date | boolean,
    }): this

    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4597993860.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @param {string|string[]|number|Date|boolean} value the value to search for
     * @param {number} column the column number for the field
     * @return {number} line number
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    findMatrixSublistLineWithValue(
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
      column: number,
    ): number

    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4597993860.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {string|string[]|number|Date|boolean} options.value the value to search for
     * @param {number} options.column the column number for the field
     * @return {number} line number
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    findMatrixSublistLineWithValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
      column: number,
    }): number

    /**
     * Returns the number of columns for the specified matrix.
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599668537.html}
     *
     * @param {string} sublistId the id of sublist in which the matrix is in.
     * @param {string} fieldId the id of the matrix field
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixHeaderCount(
      sublistId: string,
      fieldId: string,
    ): number

    /**
     * Returns the number of columns for the specified matrix.
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599668537.html}
     *
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @return {number}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getMatrixHeaderCount(options: {
      sublistId: string,
      fieldId: string,
    }): number

    /**
     * Get the value for the line currently selected in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599582937.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId - the id of sublist in which the matrix is in.
     * @param {string} fieldId - the id of the matrix field
     * @param {number} column - the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getCurrentMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
    ): string | string[] | number | Date | boolean

    /**
     * Get the value for the line currently selected in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599582937.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @return {string|string[]|number|Date|boolean}
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    getCurrentMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): string | string[] | number | Date | boolean

    /**
     * Set the value for the line currently selected in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600520541.html}
     * @restriction only available in dynamic record
     *
     * @param {string} sublistId - the id of sublist in which the matrix is in.
     * @param {string} fieldId - the id of the matrix field
     * @param {number} column - the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} value - the value to set it to
     * @param {boolean} [ignoreFieldChange] - Ignore the field change script (default false)
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    setCurrentMatrixSublistValue(
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    ): this

    /**
     * Set the value for the line currently selected in the matrix
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600520541.html}
     * @restriction only available in dynamic record
     *
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string|number|(string|number)[]|Date|boolean} options.value - the value to set it to
     * @param {boolean} [options.ignoreFieldChange] - Ignore the field change script (default false)
     * @return {Record} same object for chaining
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     *
     * @since 2015.2
     */
    setCurrentMatrixSublistValue(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      value: string | number | (string | number)[] | Date | boolean,
      ignoreFieldChange?: boolean,
    }): this

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     *
     * @return {'standard record'|'dynamic record'}
     *
     * @since 2015.2
     */
    toString(): 'standard record' | 'dynamic record'

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     *
     * @return {Object<string, *>}
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this> & {
      [p: string]: any,
    }
  }

  /**
   * Encapsulates a sublist on a standard or custom record
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600574625.html}
   *
   * @since 2015.2
   */
  export interface Sublist {

    /**
     *
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600577122.html}
     *
     * @type {string}
     *
     * @readonly
     *
     * @since 2015.2
     */
    id: string

    /**
     * Returns the sublist type
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600594177.html}
     *
     * @type {serverWidget.SublistType}
     *
     * @readonly
     *
     * @since 2015.2
     */
    type: Lowercase<serverWidget.SublistType>

    /**
     * A flag to indicate whether or not the sublist supports multi-line buffer feature
     * @see Not Documented in NetSuite Help Center
     *
     * @type {boolean}
     *
     * @readonly
     *
     * @since 2015.2
     */
    isMultilineEditable: boolean

    /**
     * Indicates whether the sublist has changed on the record form
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600574626.html}
     *
     * @type {boolean}
     *
     * @readonly
     *
     * @since 2015.2
     */
    isChanged: boolean

    /**
     * Indicates whether the sublist is displayed on the record form
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600593345.html}
     *
     * @type {boolean}
     *
     * @readonly
     *
     * @since 2015.2
     */
    isDisplay: boolean

    /**
     * Returns a column in the sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600579417.html}
     *
     * @param {string} fieldId
     * @return {record.Column}
     *
     * @since 2015.2
     */
    getColumn(
      fieldId: string,
    ): Column

    /**
     * Returns a column in the sublist
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600579417.html}
     *
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {record.Column}
     *
     * @since 2015.2
     */
    getColumn(options: {
      fieldId: string,
    }): Column

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     *
     * @return {'sublist.Sublist'}
     *
     * @since 2015.2
     */
    toString(): 'sublist.Sublist'

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     *
     * @return {Object<string, *>}
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>
  }

  /**
   * Encapsulates a body or sublist field on a standard or custom record
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435738444.html}
   *
   * @since 2015.2
   */
  export interface Field {

    /**
     * Returns the UI label for a standard or custom field body or sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435738555.html}
     *
     * @type {string}
     *
     * @readonly
     *
     * @since 2015.2
     */
    label: string

    /**
     * Returns the internal ID of a standard or custom body or sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435754429.html}
     *
     * @type {string}
     *
     * @readonly
     *
     * @since 2015.2
     */
    id: string

    /**
     * Return type of the field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435754577.html}
     *
     * @type {format.Type}
     *
     * @readonly
     *
     * @since 2015.2
     */
    type: Lowercase<serverWidget.FieldType>

    /**
     * Returns the sublist ID if this field is a sublist field
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4834774974.html}
     *
     * @type {string}
     *
     * @readonly
     *
     * @since 2015.2
     */
    sublistId?: string

    /**
     * Returns true if the standard or custom field is mandatory on the record form or false otherwise
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435755588.html}
     *
     * @type {boolean}
     *
     * @since 2015.2
     */
    isMandatory: boolean

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     *
     * @return {'Field'}
     *
     * @since 2015.2
     */
    toString(): 'Field'

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     *
     * @return {Object<string, *>}
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>
  }
}