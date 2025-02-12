/// <reference path="./error.d.ts" />

/**
 * SuiteScript transaction module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4413162576}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4413162576.html}
 *
 * @module N/transaction
 * @NApiVersion 2.x
 */
interface transaction {

  void: {

    /**
     * Void a transaction record object and return an ID that indicates the type of void performed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4413165692}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4413165692.html}
     *
     * @param options
     * @param options.type Record type to be voided
     * @param options.id Record id to be voided
     * @return The ID of the the voided record or new reverse journal entry based on preference
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE if type is not voidable
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST if record does not exist
     *
     * @since 2015.2
     */
    (options: {
      type: transaction.Type | `${transaction.Type}` | string,
      id: number | string,
    }): number;

    /**
     * Void a transaction record object and return an ID that indicates the type of void performed asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440850256}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440850256.html}
     *
     * @param options
     * @param options.type Record type to be voided
     * @param options.id Record id to be voided
     * @return The ID of the the voided record or new reverse journal entry based on preference
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE if type is not voidable
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST if record does not exist
     *
     * @since 2015.2
     */
    promise(options: {
      type: transaction.Type | `${transaction.Type}` | string,
      id: number | string,
    }): Promise<number>;
  };
}

declare namespace transaction {

  /**
   * Enumeration that holds the string values for supported transaction record types
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4483109897}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4483109897.html}
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
    CUSTOM_TRANSACTION = 'customtransaction',
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
    INVENTORY_WORKSHEET = 'inventoryworksheet',
    INVOICE = 'invoice',
    ITEM_FULFILLMENT = 'itemfulfillment',
    ITEM_RECEIPT = 'itemreceipt',
    JOURNAL_ENTRY = 'journalentry',
    OPPORTUNITY = 'opportunity',
    ORDER_RESERVATION = 'orderreservation',
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
    TAX_LIABILITY_PAYMENT = 'taxliabilitypayment',
    TRANSFER_ORDER = 'transferorder',
    VENDOR_BILL = 'vendorbill',
    VENDOR_CREDIT = 'vendorcredit',
    VENDOR_PAYMENT = 'vendorpayment',
    VENDOR_PREPAYMENT = 'vendorprepayment',
    VENDOR_PREPAYMENT_APPLICATION = 'vendorprepaymentapplication',
    VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
    WAVE = 'wave',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
  }
}