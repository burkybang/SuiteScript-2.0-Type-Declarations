/**
 * SuiteScript search common module
 *
 * @module N/search
 * @suiteScriptVersion 2.x
 *
 */
function search() {
}

/**
 * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively,
 * calling Search.save() will save the search to the database, so it can be reused later in the UI or using search.load().
 * @param {Object} options  the options object
 * @param {string} options.type  the record internal ID of the record type you are searching
 * @param {Filter|Filter[]|Array[]} options.filters (optional)  a single filter object or an array of filter objects or a search filter expression
 * @param {Column|Column[]|string} options.columns (optional)  a single search.Column or string or an array that contains elements of the two types
 * @param {Setting|Setting[]|string} [options.settings] (optional)  a single search.Setting or string or an array that contains elements of the two types
 * @param {string} [options.title] (optional)  name of the search (when saved)
 * @param {string} [options.id] (optional)  customer ID of the search (when saved), it's a string starting with 'customsearch'
 * @returns {Search} the created search
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when filters parameter is not a valid filter, array of filters or filter expression
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COL when columns parameter is not a valid column, string, or array of the two
 * @since 2015.2
 */
// function createSearch() {}
// createSearch.prototype.promise = function() {};
// search.prototype.create = new createSearch();
search.prototype.create = function (options) {
};

/**
 * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
 * in conjunction with Search.save().
 * @governance 5 units
 * @param {Object} options  the options object
 * @param {string} options.id  the customer ID or internal ID of the search
 * @returns {Search} the loaded search
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
 * @since 2015.2
 */
// function loadSearch() {}
// loadSearch.prototype.promise = function() {};
// search.prototype.load = new loadSearch();
search.prototype.load = function (options) {
};

/**
 * Deletes an existing saved search.
 * @governance 5 units
 * @param {Object} options  the options object
 * @param {string} options.id  the customer ID or internal ID of the search
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
 * @since 2015.2
 */
// function deleteSearch() {}
// deleteSearch.prototype.promise = function() {};
// search.prototype['delete'] = new deleteSearch();
search.prototype['delete'] = function (options) {
};

/**
 * Performs a search for duplicate records based on the account's Duplicate Detection configuration.
 * Note that this API only works for records that support duplicate record detection. These records include
 * customers, leads, prospects, contacts, partners, and vendors. Use either field or id parameter depending
 * on how you want to search for duplicates.
 * @governance 10 units
 * @param {Object} options  the options object
 * @param {string} options.type  the record type you are checking duplicates for
 * @param {Object} options.fields (optional)  a set of key/value pairs used to detect duplicate (e.g. email:'foo@bar.com')
 * @param {number} options.id (optional)  internalId of existing record
 * @returns {Result[]} array of result objects corresponding to the duplicate records; results are limited to 1000 rows; returns empty array if nothing is found
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @since 2015.2
 */
// function duplicatesSearch() {}
// duplicatesSearch.prototype.promise = function() {};
// search.prototype.duplicates = new duplicatesSearch();
search.prototype.duplicates = function (options) {
};

/**
 * Performs a global search against a single keyword or multiple keywords.
 * @governance 10 units
 * @param {Object} options  the options object
 * @param {string} options.keywords  global search keywords string or expression
 * @returns {Result[]} array of result objects containing the following four columns: name, type (as shown in the UI), info1, and info2
 *                                   results are limited to 1000 rows; returns empty array if nothing is found
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @since 2015.2
 */
// function globalSearch() {}
// globalSearch.prototype.promise = function() {};
// search.prototype.global = new globalSearch();
search.prototype.global = function (options) {
};

/**
 * Performs a search for one or more body fields on a record. This function supports joined-field lookups.
 * Note that the notation for joined fields is: join_id.field_name
 * @governance 1 unit
 * @param {Object} options  the options object
 * @param {string} options.type  the record internal ID of the record type you are searching
 * @param {string} options.id  the internalId of the record
 * @param {string|string[]} options.columns  array of column/field names to look up, or a single column/field name
 * @returns {Object} search results in the form of key/value pairs; example:
 *     {
 *         foo: 'bar',
 *         name.join: 'othervalue',
 *         select: [{
 *             value: '123',
 *             text: 'Some UI text'
 *         }],
 *         multiselect1: [],
 *         multiselect2: [{
 *             value: '3',
 *             text: 'Green'
 *         },{
 *             value: '5',
 *             text: 'Pinkish yellow'
 *         }]
 *     }
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @since 2015.2
 */
// function lookupFieldsSearch() {}
// lookupFieldsSearch.prototype.promise = function() {};
// search.prototype.lookupFields = new lookupFieldsSearch();
search.prototype.lookupFields = function (options) {
};

/**
 * Creates a search.Column object.
 * @param {Object} options  the options object
 * @param {string} options.name  the search return column name
 * @param {string} [options.join] (optional)  the join ID for this search return column
 * @param {Summary} [options.summary] (optional)  the summary type for this column
 * @param {string} [options.formula] (optional)  formula used for this column
 * @param {string} [options.function] (optional)  function used for this column
 * @param {string} [options.label] (optional)  label used for this column
 * @param {string} [options.sort] (optional)  sort direction for this column; use values from the Sort enum
 * @returns {Column} the created column object
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
 * @throws {SuiteScriptError} INVALID_SRCH_FUNCTN if an unknown function is provided
 * @since 2015.2
 */
search.prototype.createColumn = function (options) {
};

/**
 * Creates a search.Filter object.
 * @param {Object} options  the options object
 * @param {string} options.name  internal ID of the search field
 * @param {string} [options.join] (optional)  if executing a joined search, this is the join ID used for the search field specified in the name parameter
 * @param {string} options.operator  search operator
 * @param {string|Date|number|string[]|Date[]} [options.values] (optional)  values to be used as filter parameters
 * @param {string} [options.formula] (optional)  formula used for this filter
 * @param {Summary} [options.summary] (optional)  summary type used for this filter
 * @returns {Filter} the created filter object
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
 * @throws {SuiteScriptError} INVALID_SRCH_SUMMARY_TYP if an unknown summary type is provided
 * @since 2015.2
 */
search.prototype.createFilter = function (options) {
};

/**
 * Creates a search.Setting object.
 * @param {Object} options  the options object
 * @param {string} options.name  name of the result setting parameter
 * @param {string} options.value  value of the result settting parameter
 * @returns {Setting} the created setting object
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
 * @since 2015.2
 */
search.prototype.createSetting = function (options) {
};

/**
 * Enum for search operators.
 * @enum {string}
 */
function searchOperator() {
  this.AFTER = 'after';
  this.ALLOF = 'allof';
  this.ANY = 'any';
  this.ANYOF = 'anyof';
  this.BEFORE = 'before';
  this.BETWEEN = 'between';
  this.CONTAINS = 'contains';
  this.DOESNOTCONTAIN = 'doesnotcontain';
  this.DOESNOTSTARTWITH = 'doesnotstartwith';
  this.EQUALTO = 'equalto';
  this.GREATERTHAN = 'greaterthan';
  this.GREATERTHANOREQUALTO = 'greaterthanorequalto';
  this.HASKEYWORDS = 'haskeywords';
  this.IS = 'is';
  this.ISEMPTY = 'isempty';
  this.ISNOT = 'isnot';
  this.ISNOTEMPTY = 'isnotempty';
  this.LESSTHAN = 'lessthan';
  this.LESSTHANOREQUALTO = 'lessthanorequalto';
  this.NONEOF = 'noneof';
  this.NOTAFTER = 'notafter';
  this.NOTALLOF = 'notallof';
  this.NOTBEFORE = 'notbefore';
  this.NOTBETWEEN = 'notbetween';
  this.NOTEQUALTO = 'notequalto';
  this.NOTGREATERTHAN = 'notgreaterthan';
  this.NOTGREATERTHANOREQUALTO = 'notgreaterthanorequalto';
  this.NOTLESSTHAN = 'notlessthan';
  this.NOTLESSTHANOREQUALTO = 'notlessthanorequalto';
  this.NOTON = 'noton';
  this.NOTONORAFTER = 'notonorafter';
  this.NOTONORBEFORE = 'notonorbefore';
  this.NOTWITHIN = 'notwithin';
  this.ON = 'on';
  this.ONORAFTER = 'onorafter';
  this.ONORBEFORE = 'onorbefore';
  this.STARTSWITH = 'startswith';
  this.WITHIN = 'within';
}

search.prototype.Operator = searchOperator;

/**
 * Enum for search summary types.
 * @enum {string}
 */
function searchSummary() {
  this.GROUP = 'GROUP';
  this.COUNT = 'COUNT';
  this.SUM = 'SUM';
  this.AVG = 'AVG';
  this.MIN = 'MIN';
  this.MAX = 'MAX';
}

search.prototype.Summary = searchSummary;

/**
 * Enum for sort directions.
 * @enum {string}
 */
function searchSort() {
  this.ASC = 'ASC';
  this.DESC = 'DESC';
  this.NONE = 'NONE';
}

search.prototype.Sort = searchSort;

function searchType() {
  this.ACCOUNT = 'account';
  this.ACCOUNTING_BOOK = 'accountingbook';
  this.ACCOUNTING_CONTEXT = 'accountingcontext';
  this.ACCOUNTING_PERIOD = 'accountingperiod';
  this.ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry';
  this.AMORTIZATION_SCHEDULE = 'amortizationschedule';
  this.AMORTIZATION_TEMPLATE = 'amortizationtemplate';
  this.ASSEMBLY_BUILD = 'assemblybuild';
  this.ASSEMBLY_ITEM = 'assemblyitem';
  this.ASSEMBLY_UNBUILD = 'assemblyunbuild';
  this.BILLING_ACCOUNT = 'billingaccount';
  this.BILLING_CLASS = 'billingclass';
  this.BILLING_RATE_CARD = 'billingratecard';
  this.BILLING_REVENUE_EVENT = 'billingrevenueevent';
  this.BILLING_SCHEDULE = 'billingschedule';
  this.BIN = 'bin';
  this.BIN_ITEM_BALANCE = 'BinItemBalance';
  this.BIN_TRANSFER = 'bintransfer';
  this.BIN_WORKSHEET = 'binworksheet';
  this.BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder';
  this.BOM = 'bom';
  this.BOM_REVISION = 'bomrevision';
  this.BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript';
  this.CALENDAR_EVENT = 'calendarevent';
  this.CAMPAIGN = 'campaign';
  this.CASH_REFUND = 'cashrefund';
  this.CASH_SALE = 'cashsale';
  this.CHARGE = 'charge';
  this.CHARGE_RULE = 'chargerule';
  this.CHECK = 'check';
  this.CLASSIFICATION = 'classification';
  this.CLIENT_SCRIPT = 'clientscript';
  this.CMS_CONTENT = 'cmscontent';
  this.CMS_CONTENT_TYPE = 'cmscontenttype';
  this.CMS_PAGE = 'cmspage';
  this.COMMERCE_CATEGORY = 'commercecategory';
  this.COMPETITOR = 'competitor';
  this.COM_SEARCH_ONE_WAY_SYN = 'ComSearchOneWaySyn';
  this.COM_SEARCH_GROUP_SYN = 'ComSearchGroupSyn';
  this.CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate';
  this.CONTACT = 'contact';
  this.CONTACT_CATEGORY = 'contactcategory';
  this.CONTACT_ROLE = 'contactrole';
  this.COST_CATEGORY = 'costcategory';
  this.COUPON_CODE = 'couponcode';
  this.CREDIT_CARD_CHARGE = 'creditcardcharge';
  this.CREDIT_CARD_REFUND = 'creditcardrefund';
  this.CREDIT_MEMO = 'creditmemo';
  this.CROSSCHARGEABLE = 'Crosschargeable';
  this.CURRENCY = 'currency';
  this.CUSTOMER = 'customer';
  this.CUSTOMER_CATEGORY = 'customercategory';
  this.CUSTOMER_DEPOSIT = 'customerdeposit';
  this.CUSTOMER_MESSAGE = 'customermessage';
  this.CUSTOMER_PAYMENT = 'customerpayment';
  this.CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization';
  this.CUSTOMER_REFUND = 'customerrefund';
  this.CUSTOMER_STATUS = 'customerstatus';
  this.CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship';
  this.CUSTOM_RECORD = 'customrecord';
  this.CUSTOM_TRANSACTION = 'customtransaction';
  this.DEPARTMENT = 'department';
  this.DEPOSIT = 'deposit';
  this.DEPOSIT_APPLICATION = 'depositapplication';
  this.DESCRIPTION_ITEM = 'descriptionitem';
  this.DISCOUNT_ITEM = 'discountitem';
  this.DOWNLOAD_ITEM = 'downloaditem';
  this.EMPLOYEE = 'employee';
  this.ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping';
  this.ESTIMATE = 'estimate';
  this.EXPENSE_AMORT_PLAN_AND_SCHEDULE = 'ExpenseAmortPlanAndSchedule';
  this.EXPENSE_CATEGORY = 'expensecategory';
  this.EXPENSE_REPORT = 'expensereport';
  this.FAIR_VALUE_PRICE = 'fairvalueprice';
  this.FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule';
  this.FOLDER = 'folder';
  this.FULFILLMENT_REQUEST = 'fulfillmentrequest';
  this.GENERIC_RESOURCE = 'genericresource';
  this.GIFT_CERTIFICATE = 'giftcertificate';
  this.GIFT_CERTIFICATE_ITEM = 'giftcertificateitem';
  this.GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping';
  this.GLOBAL_INVENTORY_RELATIONSHIP = 'globalinventoryrelationship';
  this.INBOUND_SHIPMENT = 'inboundshipment';
  this.INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry';
  this.INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder';
  this.INVENTORY_ADJUSTMENT = 'inventoryadjustment';
  this.INVENTORY_COST_REVALUATION = 'inventorycostrevaluation';
  this.INVENTORY_COUNT = 'inventorycount';
  this.INVENTORY_DETAIL = 'inventorydetail';
  this.INVENTORY_ITEM = 'inventoryitem';
  this.INVENTORY_NUMBER = 'inventorynumber';
  this.INVENTORY_NUMBER_ITEM = 'InventoryNumberItem';
  this.INVENTORY_STATUS = 'inventorystatus';
  this.INVENTORY_STATUS_LOCATION = 'InventoryStatusLocation';
  this.INVENTORY_STATUS_CHANGE = 'inventorystatuschange';
  this.INVENTORY_TRANSFER = 'inventorytransfer';
  this.INVOICE = 'invoice';
  this.INVT_NUMBER_ITEM_BALANCE = 'InvtNumberItemBalance';
  this.ISSUE = 'issue';
  this.ITEM_ACCOUNT_MAPPING = 'itemaccountmapping';
  this.ITEM_BIN_NUMBER = 'ItemBinNumber';
  this.ITEM_DEMAND_PLAN = 'itemdemandplan';
  this.ITEM_FULFILLMENT = 'itemfulfillment';
  this.ITEM_GROUP = 'itemgroup';
  this.ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration';
  this.ITEM_RECEIPT = 'itemreceipt';
  this.ITEM_REVISION = 'itemrevision';
  this.ITEM_SUPPLY_PLAN = 'itemsupplyplan';
  this.JOB = 'job';
  this.JOB_STATUS = 'jobstatus';
  this.JOB_TYPE = 'jobtype';
  this.JOURNAL_ENTRY = 'journalentry';
  this.KIT_ITEM = 'kititem';
  this.LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule';
  this.LEAD = 'lead';
  this.LOCATION = 'location';
  this.LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem';
  this.LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem';
  this.MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate';
  this.MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask';
  this.MANUFACTURING_ROUTING = 'manufacturingrouting';
  this.MAP_REDUCE_SCRIPT = 'mapreducescript';
  this.MARKUP_ITEM = 'markupitem';
  this.MASSUPDATE_SCRIPT = 'massupdatescript';
  this.MERCHANDISE_HIERARCHY_LEVEL = 'merchandisehierarchylevel';
  this.MERCHANDISE_HIERARCHY_NODE = 'merchandisehierarchynode';
  this.MERCHANDISE_HIERARCHY_VERSION = 'merchandisehierarchyversion';
  this.MESSAGE = 'message';
  this.MFG_PLANNED_TIME = 'mfgplannedtime';
  this.NEXUS = 'nexus';
  this.NON_INVENTORY_ITEM = 'noninventoryitem';
  this.NOTE = 'note';
  this.NOTE_TYPE = 'notetype';
  this.OPPORTUNITY = 'opportunity';
  this.OTHER_CHARGE_ITEM = 'otherchargeitem';
  this.OTHER_NAME = 'othername';
  this.OTHER_NAME_CATEGORY = 'othernamecategory';
  this.PARTNER = 'partner';
  this.PARTNER_CATEGORY = 'partnercategory';
  this.PAYCHECK = 'paycheck';
  this.PAYCHECK_JOURNAL = 'paycheckjournal';
  this.PAYMENT_ITEM = 'paymentitem';
  this.PAYMENT_METHOD = 'paymentmethod';
  this.PAYROLL_ITEM = 'payrollitem';
  this.PERIOD_END_JOURNAL = 'periodendjournal';
  this.PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule';
  this.PHONE_CALL = 'phonecall';
  this.PORTLET = 'portlet';
  this.PRICE_BOOK = 'pricebook';
  this.PRICE_LEVEL = 'pricelevel';
  this.PRICE_PLAN = 'priceplan';
  this.PRICING_GROUP = 'pricinggroup';
  this.PROJECT_EXPENSE_TYPE = 'projectexpensetype';
  this.PROJECT_TASK = 'projecttask';
  this.PROJECT_TEMPLATE = 'projecttemplate';
  this.PROMOTION_CODE = 'promotioncode';
  this.PROSPECT = 'prospect';
  this.PURCHASE_CONTRACT = 'purchasecontract';
  this.PURCHASE_ORDER = 'purchaseorder';
  this.PURCHASE_REQUISITION = 'purchaserequisition';
  this.RESOURCE_ALLOCATION = 'resourceallocation';
  this.RES_ALLOCATION_TIME_OFF_CONFLICT = 'ResAllocationTimeOffConflict';
  this.RESTLET = 'restlet';
  this.RETURN_AUTHORIZATION = 'returnauthorization';
  this.REVENUE_ARRANGEMENT = 'revenuearrangement';
  this.REVENUE_COMMITMENT = 'revenuecommitment';
  this.REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal';
  this.REVENUE_PLAN = 'revenueplan';
  this.REV_REC_PLAN_AND_SCHEDULE = 'RevRecPlanAndSchedule';
  this.REV_REC_SCHEDULE = 'revrecschedule';
  this.REV_REC_TEMPLATE = 'revrectemplate';
  this.SALES_ORDER = 'salesorder';
  this.SALES_ROLE = 'salesrole';
  this.SALES_TAX_ITEM = 'salestaxitem';
  this.SCHEDULED_SCRIPT = 'scheduledscript';
  this.SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance';
  this.SCRIPT_DEPLOYMENT = 'scriptdeployment';
  this.SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem';
  this.SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem';
  this.SERVICE_ITEM = 'serviceitem';
  this.SHIP_ITEM = 'shipitem';
  this.SOLUTION = 'solution';
  this.STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry';
  this.STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment';
  this.SUBSCRIPTION = 'subscription';
  this.SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder';
  this.SUBSCRIPTION_LINE = 'subscriptionline';
  this.SUBSCRIPTION_PLAN = 'subscriptionplan';
  this.SUBSIDIARY = 'subsidiary';
  this.SUBTOTAL_ITEM = 'subtotalitem';
  this.SUITELET = 'suitelet';
  this.SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot';
  this.SUPPLY_CHAIN_SNAPSHOT_DETAILS = 'SupplyChainSnapshotDetails';
  this.SUPPORT_CASE = 'supportcase';
  this.TASK = 'task';
  this.TAX_GROUP = 'taxgroup';
  this.TAX_PERIOD = 'taxperiod';
  this.TAX_TYPE = 'taxtype';
  this.TERM = 'term';
  this.TIME_APPROVAL = 'TimeApproval';
  this.TIME_BILL = 'timebill';
  this.TIME_ENTRY = 'timeentry';
  this.TIME_OFF_CHANGE = 'timeoffchange';
  this.TIME_OFF_PLAN = 'timeoffplan';
  this.TIME_OFF_REQUEST = 'timeoffrequest';
  this.TIME_OFF_RULE = 'timeoffrule';
  this.TIME_OFF_TYPE = 'timeofftype';
  this.TIME_SHEET = 'timesheet';
  this.TIMESHEET_APPROVAL = 'TimesheetApproval';
  this.TOPIC = 'topic';
  this.TRANSFER_ORDER = 'transferorder';
  this.UNITS_TYPE = 'unitstype';
  this.USAGE = 'usage';
  this.USEREVENT_SCRIPT = 'usereventscript';
  this.VENDOR = 'vendor';
  this.VENDOR_BILL = 'vendorbill';
  this.VENDOR_CATEGORY = 'vendorcategory';
  this.VENDOR_CREDIT = 'vendorcredit';
  this.VENDOR_PAYMENT = 'vendorpayment';
  this.VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization';
  this.VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship';
  this.WEBSITE = 'website';
  this.WORKFLOW_ACTION_SCRIPT = 'workflowactionscript';
  this.WORK_ORDER = 'workorder';
  this.WORK_ORDER_CLOSE = 'workorderclose';
  this.WORK_ORDER_COMPLETION = 'workordercompletion';
  this.WORK_ORDER_ISSUE = 'workorderissue';
  this.WORKPLACE = 'workplace';
  this.FIN_RPT_AGGREGATE_F_R = 'FinRptAggregateFR';
  this.AGGR_FIN_DAT = 'AggrFinDat';
  this.BILLING_ACCOUNT_BILL_CYCLE = 'BillingAccountBillCycle';
  this.BILLING_ACCOUNT_BILL_REQUEST = 'BillingAccountBillRequest';
  this.DELETED_RECORD = 'DeletedRecord';
  this.END_TO_END_TIME = 'EndToEndTime';
  this.GL_LINES_AUDIT_LOG = 'GlLinesAuditLog';
  this.INSTALLMENT = 'Installment';
  this.INVENTORY_BALANCE = 'InventoryBalance';
  this.INVENTORY_NUMBER_BIN = 'InventoryNumberBin';
  this.PERMISSION = 'Permission';
  this.PRICING = 'Pricing';
  this.RECENT_RECORD = 'RecentRecord';
  this.ROLE = 'Role';
  this.SAVED_SEARCH = 'SavedSearch';
  this.SHOPPING_CART = 'ShoppingCart';
  this.SUBSCRIPTION_RENEWAL_HISTORY = 'SubscriptionRenewalHistory';
  this.SUITE_SCRIPT_DETAIL = 'SuiteScriptDetail';
  this.SYSTEM_NOTE = 'SystemNote';
  this.TAX_DETAIL = 'TaxDetail';
  this.UBER = 'Uber';
  this.ENTITY = 'entity';
  this.ACTIVITY = 'activity';
  this.ITEM = 'item';
  this.TRANSACTION = 'transaction';
  this.PAYMENT_EVENT = 'PaymentEvent';
  this.GATEWAY_NOTIFICATION = 'GatewayNotification';
}

search.prototype.Type = searchType();

/**
 * Return a new instance of search.Search object.
 *
 * @classDescription Encapsulation of a search.
 * @constructor
 * @param {string} typeOrJavaSearch (optional)  the record type you are searching
 * @param {number} id  the internal ID of the search
 * @param {Filter | array of search.Filter} filters (optional)  a single filter object or an array of filters used to
 *     filter the search
 * @param {Column|string|Column[]|string[]} columns (optional)  columns to be returned from the search
 * @return {Search}
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER when provided filters contain a different type than search.Filter
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when provided columns contain a different type than search.Column
 *     or string
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING when provided filters contain a different type than search.Setting
 * @since 2015.2
 */
function Search() {
  
  /**
   * Search type.
   * @name Search#searchType
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.searchType = undefined;
  /**
   * Internal ID of the search.
   * @name Search#searchId
   * @type number
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.searchId = undefined;
  /**
   * Search filters.
   * @name Search#filters
   * @type Filter[] (setter accepts also a single search.Filter object)
   * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER when setting value of different type than search.Filter
   */
  this.prototype.filters = undefined;
  /**
   * Allows to set or get the search filters in the form of a search filter expression.
   * @name Search#filterExpression
   * @type Array[]
   * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when setting invalid search filter expression
   */
  this.prototype.filterExpression = undefined;
  /**
   * Columns to be returned from the search.
   * @name Search#columns
   * @type Column[]|string[] (setter accepts also a single search.Column or string)
   * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when setting value of different type than search.Column or
   *     string
   */
  this.prototype.columns = undefined;
  /**
   * Columns to be returned from the search.
   * @name Search#settings
   * @type Setting[]|string[] (setter accepts also a single search.Setting or string)
   * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
   * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
   */
  this.prototype.settings = undefined;
  /**
   * Name of the saved search. Needs to be set before saving the search.
   * @name Search#title
   * @type string
   */
  this.prototype.title = undefined;
  /**
   * Customer ID of the saved search (string starting with 'customsearch'). If not set, then it is automatically
   * generated upon save.
   * @name Search#id
   * @type string
   */
  this.prototype.id = undefined;
  /**
   * Specifies whether the search is public or private.
   * @name Search#isPublic
   * @type boolean
   */
  this.prototype.isPublic = undefined;
  /**
   * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
   * id property may also be set, if it's not then it's automatically generated. The title and id properties may be
   * set:
   * 1) upon creation (parameters title and id of the options object)
   * 2) by explicitly setting the properties (e.g. Search.title = 'foo'; Search.id = 'customsearch_bar'; )
   * 3) by loading a previously saved search (the properties are inherited)
   * @governance 5 units
   * @returns {number} the internal search ID of the saved search
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
   * @throws {SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
   * @throws {SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
   * @since 2015.2
   */
  // function saveThis() {}
  // saveThis.prototype.promise = function() {};
  // this.prototype.save = new saveThis();
  this.prototype.save = function () {
  };
  
  /**
   * Runs the current search.
   * @returns {ResultSet} the result set object
   * @since 2015.2
   */
  this.prototype.run = function () {
  };
  
  /**
   * Runs the current search with a paged interface.
   * @param {Object} options
   * @param {number} options.pageSize
   * @returns {SearchPagedData} PagedData object that allows user to page through the search result
   * @since 2016.1
   */
  // function runPagedThis() {}
  // runPagedThis.prototype.promise = function() {};
  // this.prototype.runPaged = new runPagedThis();
  this.prototype.runPaged = function (options) {
  };
  
  /**
   * Returns the object type name (search.Search)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of search.Filter object.
 *
 * @classDescription Encapsulation of a search filter.
 * @protected
 * @constructor
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
 *
 * @since 2015.2
 */
function Filter() {
  
  /**
   * Field name for this search filter.
   * @name Filter#name
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.name = undefined;
  /**
   * Join ID for this search filter.
   * @name Filter#join
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.join = undefined;
  /**
   * Filter operator.
   * @name Filter#operator
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.operator = undefined;
  /**
   * Summary type for this search filter.
   * @name Filter#summary
   * @type string
   * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_SUM when setting invalid summary type
   */
  this.prototype.summary = undefined;
  /**
   * Formula used for this search filter.
   * @name Filter#formula
   * @type string
   */
  this.prototype.formula = undefined;
  /**
   * Returns the object type name (search.Filter)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of search.Column object.
 *
 * @classDescription Encapsulation of a search column.
 * @protected
 * @constructor
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
 *
 * @since 2015.2
 */
function Column() {
  
  /**
   * The name of the search column.
   * @name Column#name
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.name = undefined;
  /**
   * The join ID for this search column.
   * @name Column#join
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.join = undefined;
  /**
   * The summary type for this search column.
   * @name Column#summary
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.summary = undefined;
  /**
   * The formula used for this search column.
   * @name Column#formula
   * @type string
   */
  this.prototype.formula = undefined;
  /**
   * The label used for this search column.
   * @name Column#label
   * @type string
   */
  this.prototype.label = undefined;
  /**
   * The function used in this search column.
   * @name Column#function
   * @type string
   * @throws {SuiteScriptError} INVALID_SRCH_FUNCTN when setting an unknown function is attempted
   */
  this.prototype['function'] = undefined;
  /**
   * The sort direction for this search column. Use values from the Sort enum.
   * @name Column#sort
   * @type string
   */
  this.prototype.sort = undefined;
  /**
   * Returns the search column for which the minimal or maximal value should be found when returning the search.Column
   * value. For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a
   * record, and then the search.Column value for that record is returned. Can only be used when summary type is MIN
   * or MAX.
   * @param {Object} options  the options object
   * @param {string} options.name  name of the search column for which the minimal or maximal value should be found
   * @param {string} options.join  join id for this search column
   * @returns {Column} this search column
   * @since 2015.2
   */
  this.prototype.setWhenOrderedBy = function (options) {
  };
  
  /**
   * Returns the object type name (search.Column)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of search.Setting object.
 *
 * @classDescription Encapsulation of a search setting.
 * @protected
 * @constructor
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
 * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
 *
 * @since 2018.2
 */
function Setting() {
  
  /**
   * Name for this search setting.
   * @name Option#name
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.name = undefined;
  /**
   * value for this search setting.
   * @name Option#value
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.value = undefined;
  /**
   * Returns the object type name (search.Setting)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of search.ResultSet object.
 *
 * @classDescription Encapsulation of a search result set.
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function ResultSet() {
  
  /**
   * List of columns contained in this result set.
   * @name ResultSet#columns
   * @type Column[]
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.columns = undefined;
  /**
   * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
   * available than requested, then the array will be truncated.
   * @governance 10 units
   * @param {Object} options  the options object
   * @param {number} options.start  the index number of the first result to return, inclusive
   * @param {number} options.end  the index number of the last result to return, exclusive
   * @returns {Result[]} the requested slice of the search result set
   * @since 2015.2
   */
  this.prototype.getRange = function (options) {
  };
  
  /**
   * Calls the developer-defined callback function for every result in this set. The result set processed by each()
   * may have maximum 4000 rows. The callback function has the following signature: boolean callback(result.Result
   * result); If the return value of the callback is false, the iteration over results is stopped, otherwise it
   * continues. Note that the work done in the context of the callback function counts towards the governance of the
   * script that called it.
   * @governance 10 units
   * @param {Function} callback  the function called for each result in the result set
   * @returns {undefined}
   * @since 2015.2
   */
  this.prototype.each = function (options) {
  };
  
  /**
   * Returns the object type name (search.ResultSet)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * Return a new instance of search.Result object.
 *
 * @classDescription Encapsulation of a search result.
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Result() {
  
  /**
   * Record type of the result.
   * @name Result#recordType
   * @type string
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.recordType = undefined;
  /**
   * Record internal ID of the result.
   * @name Result#id
   * @type number
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.id = undefined;
  /**
   * List of columns contained in this result.
   * @name Result#columns
   * @type Column[]
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.columns = undefined;
  /**
   * Returns the value of a specified search return column. The column may be specified in two ways:
   * 1) by providing a search.Column object
   * 2) by providing name, join and summary parameters
   * @param {search.Column} column  search return column object whose value you want to return
   * - or -
   * @param {Object} options  the options object
   * @param {string} options.name  the name of the search column whose value you want to return
   * @param {string} options.join (optional)  the join ID for this search column
   * @param {string} options.summary (optional)  the summary type used for this search column
   * @returns {string} string value of the search result column
   * @since 2015.2
   */
  this.prototype.getValue = function (options) {
  };
  
  /**
   * Returns the UI display name (i.e. the text value) of a specified search return column.
   * Note that this method is supported on select, image and document fields only.
   * The column may be specified in two ways:
   * 1) by providing a search.Column object
   * 2) by providing name, join and summary parameters
   * @param {Column} column  search return column object whose value you want to return
   * - or -
   * @param {Object} options  the options object
   * @param {string} options.name  the name of the search column whose value you want to return
   * @param {string} options.join (optional)  the join ID for this search column
   * @param {Summary} options.summary (optional)  the summary type used for this search column
   * @returns {string} UI display name (text value) of the search result column
   * @since 2015.2
   */
  this.prototype.getText = function (options) {
  };
  
  /**
   * Returns the object type name (search.Result)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
  
  /**
   * JSON.stringify() implementation.
   * @returns {Object}
   */
  this.prototype.toJSON = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function SearchPagedData() {
  
  /**
   * rows per page - defined in search definition [5 - 1000]
   * @type {number}
   */
  this.prototype.pageSize = undefined;
  /**
   * total row count
   * @type {number}
   */
  this.prototype.count = undefined;
  /**
   * @type {SearchPageRange}
   */
  this.prototype.pageRanges = undefined;
}

/**
 *
 * @protected
 * @constructor
 */
function SearchPageRange() {
  
  /**
   * @return {number}
   */
  this.prototype.getIndex = function () {
  };
  
  /**
   *
   * @return {string}
   */
  this.prototype.getCompoundKey = function () {
  };
  
  /**
   *
   * @return {string}
   */
  this.prototype.getCompoundLabel = function () {
  };
}

search = new search();
/**
 * @type {search}
 */
N.prototype.search = search;