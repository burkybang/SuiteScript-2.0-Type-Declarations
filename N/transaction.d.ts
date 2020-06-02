/**
 * SuiteScript transaction common module
 *
 * @module N/transaction
 * @suiteScriptVersion 2.x
 *
 */
interface transaction {
  
  /**
   * Method used to void a transaction record object and return an id that indicates the type of void performed
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4413165692.html}
   *
   * @param {Object} options
   * @param {transaction.Type|string} options.type record type to be voided
   * @param {number|string} options.id record id to be voided
   * @return {number} the id is the voided record or new reverse journal entry based on preference
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
   * @throws {SuiteScriptError} INVALID_RCRD_TYPE if type is not voidable
   * @throws {SuiteScriptError} RCRD_DSNT_EXIST if record does not exist
   *
   * @since 2015.2
   */
  void(options: { type: transaction.Type | string, id: number | string }): number
}

declare namespace transaction {
  
  /*export interface void {
  
    /!**
     * Method used to void a transaction record object asynchronously and return an ID that indicates the type of void performed
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440850256.html}
     *
     * @param {Object} options
     * @param {string} options.type record type to be voided
     * @param {number|string} options.id record id to be voided
     * @return {Promise<number>} the id is the voided record or new reverse journal entry based on preference
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     * @throws {SuiteScriptError} INVALID_RCRD_TYPE if type is not voidable
     * @throws {SuiteScriptError} RCRD_DSNT_EXIST if record does not exist
     *
     * @since 2015.2
     *!/
    promise(): Promise<number>
  }*/
  
  
  /**
   * Enumeration that holds the string values for supported transaction record types
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483109897.html}
   *
   * @enum
   * @readonly
   *
   * @since 2015.2
   */
  export enum Type {
    ASSEMBLY_BUILD = 'assemblybuild',
    ASSEMBLY_UNBUILD = 'assemblyunbuild',
    BIN_TRANSFER = 'bintransfer',
    BIN_WORKSHEET = 'binworksheet',
    BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder',
    CASH_REFUND = 'cashrefund',
    CASH_SALE = 'cashsale',
    CHECK = 'check',
    CREDIT_CARD_CHARGE = 'creditcardcharge',
    CREDIT_CARD_REFUND = 'creditcardrefund',
    CREDIT_MEMO = 'creditmemo',
    CUSTOMER_DEPOSIT = 'customerdeposit',
    CUSTOMER_PAYMENT = 'customerpayment',
    CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization',
    CUSTOMER_REFUND = 'customerrefund',
    DEPOSIT = 'deposit',
    DEPOSIT_APPLICATION = 'depositapplication',
    ESTIMATE = 'estimate',
    EXPENSE_REPORT = 'expensereport',
    FULFILLMENT_REQUEST = 'fulfillmentrequest',
    INBOUND_SHIPMENT = 'inboundshipment',
    INVENTORY_ADJUSTMENT = 'inventoryadjustment',
    INVENTORY_COST_REVALUATION = 'inventorycostrevaluation',
    INVENTORY_COUNT = 'inventorycount',
    INVENTORY_STATUS_CHANGE = 'inventorystatuschange',
    INVENTORY_TRANSFER = 'inventorytransfer',
    INVOICE = 'invoice',
    ITEM_FULFILLMENT = 'itemfulfillment',
    ITEM_RECEIPT = 'itemreceipt',
    JOURNAL_ENTRY = 'journalentry',
    OPPORTUNITY = 'opportunity',
    PAYCHECK = 'paycheck',
    PAYCHECK_JOURNAL = 'paycheckjournal',
    PERIOD_END_JOURNAL = 'periodendjournal',
    PURCHASE_CONTRACT = 'purchasecontract',
    PURCHASE_ORDER = 'purchaseorder',
    PURCHASE_REQUISITION = 'purchaserequisition',
    RETURN_AUTHORIZATION = 'returnauthorization',
    REVENUE_ARRANGEMENT = 'revenuearrangement',
    REVENUE_COMMITMENT = 'revenuecommitment',
    REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal',
    SALES_ORDER = 'salesorder',
    STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment',
    TRANSFER_ORDER = 'transferorder',
    VENDOR_BILL = 'vendorbill',
    VENDOR_CREDIT = 'vendorcredit',
    VENDOR_PAYMENT = 'vendorpayment',
    VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
  }
}