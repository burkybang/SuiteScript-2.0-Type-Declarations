/// <reference path="./error.d.ts" />

/**
 * SuiteScript transaction module
 *
 * Use this module to void transactions. When a transaction is voided, its
 * total and all line items are set to zero — the record itself is NOT
 * removed from the system, and you cannot subsequently make changes to
 * the transaction that would impact the general ledger.
 *
 * NetSuite supports two underlying voiding strategies: **direct voids**
 * (the existing record is updated in-place to zero values) and **voids
 * by reversing journal** (a new offsetting journal entry is created
 * instead). Which strategy is used is determined by the target account's
 * preference settings, NOT by the script — `void()` always returns a
 * single ID, which is either the voided record's ID (direct void) or the
 * newly-created reversing journal's ID (reversing-journal void).
 *
 * **Account-level type restrictions:** the `transaction.Type` enum lists
 * every record type SuiteScript recognizes as voidable in some account
 * configuration. However, an individual account may reject some types
 * with `INVALID_RCRD_TYPE: "Invalid Record Type"` based on enabled
 * features (e.g. an account without Advanced Receiving may reject
 * `'itemreceipt'`). Always test in the target account before relying on
 * a specific type.
 * @see [Voiding, Deleting, or Closing Transactions]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1525870.html}
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4413162576}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4413162576.html}
 *
 * @module N/transaction
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface transaction {

  void: {

    /**
     * Voids a transaction record and returns the ID of the resulting record.
     * Positional-form overload of {@link transaction.void}; equivalent to
     * `transaction.void({type, id})`. Behavior depends on the account's
     * preference settings — for accounts configured for direct voids the
     * returned ID is the voided record itself (and that record is mutated
     * in place to zero values); for accounts configured for voids by
     * reversing journal, the returned ID belongs to a newly-created journal
     * entry that offsets the original transaction (the original is unchanged).
     *
     * After voiding, the transaction record cannot be modified in ways that
     * impact the general ledger.
     *
     * Account-level type restrictions apply: the `transaction.Type` enum
     * lists types voidable in some account configurations, but enabled
     * features (Advanced Receiving, Multi-Currency, Revenue Recognition,
     * etc.) determine which types can actually be voided in the current
     * account. Types listed in the enum but disabled for the current
     * account surface as `INVALID_RCRD_TYPE: "Invalid Record Type"` at
     * call time. Test in the target account before relying on a specific type.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4413165692}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4413165692.html}
     *
     * @governance 10 units (charged on every call that progresses past argument-presence validation — i.e. missing-argument failures cost 0, but invalid-type and record-not-found failures both cost the full 10).
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param type The internal record-type ID of the transaction to void (e.g. `'vendorpayment'`, `'journalentry'`). Pass a `transaction.Type` enum value or its underlying string literal. The runtime validates `type` BEFORE `id`.
     * @param id The internal ID of the transaction record to void.
     * @return The internal ID of the voided record (direct void) OR the newly-created reversing-journal record (reversing-journal void) — a number in both cases.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `type` or `id` is missing, `null`, `undefined`, or empty string. Message format: `"void: Missing a required argument: <field>"` — note the prefix is bare `void:` rather than `transaction.void:`. Validation order checks `type` first, then `id`.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `type` is not a known record type, or is known but not voidable in this account (because the type is non-transactional like `'customer'`, or because the account's enabled features don't support voiding that type). Two distinct message formats: (a) for unknown type strings, `"The record type [<VALUE_UPPERCASED>] is invalid."` (the supplied value appears in the message, uppercased); (b) for known-but-non-voidable or account-restricted types, the bare string `"Invalid Record Type"` (no value in message).
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If `type` was accepted but no record with `id` exists in this account. Message: `"That record does not exist.{1}"` — note the literal `{1}` placeholder is leaked by NetSuite's templating layer (an unfilled message variable).
     */
    (
      type: transaction.Type | `${transaction.Type}` | string,
      id: number | string,
    ): number;

    /**
     * Voids a transaction record and returns the ID of the resulting
     * record. Behavior depends on the account's preference settings —
     * for accounts configured for direct voids the returned ID is the
     * voided record itself (and that record is mutated in place to
     * zero values); for accounts configured for voids by reversing
     * journal, the returned ID belongs to a newly-created journal
     * entry that offsets the original transaction (the original is
     * unchanged).
     *
     * After voiding, the transaction record cannot be modified in ways
     * that impact the general ledger.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4413165692}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4413165692.html}
     *
     * @governance 10 units (charged on every call that progresses past argument-presence validation — i.e. missing-argument failures cost 0, but invalid-type and record-not-found failures both cost the full 10).
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type The internal record-type ID of the transaction to void (e.g. `'vendorpayment'`, `'journalentry'`). Pass a `transaction.Type` enum value or its underlying string literal. The runtime validates `type` BEFORE `id`.
     * @param options.id The internal ID of the transaction record to void.
     * @return The internal ID of the voided record (direct void) OR the newly-created reversing-journal record (reversing-journal void) — a number in both cases.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing, `null`, `undefined`, or if `options.type` or `options.id` is missing, `null`, `undefined`, or empty string. Message format: `"void: Missing a required argument: <field>"` — note the prefix is bare `void:` rather than `transaction.void:`. Validation order checks `type` first, then `id`.
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If `options.type` is not a known record type, or is known but not voidable in this account (because the type is non-transactional like `'customer'`, or because the account's enabled features don't support voiding that type). Two distinct message formats: (a) for unknown type strings, `"The record type [<VALUE_UPPERCASED>] is invalid."` (the supplied value appears in the message, uppercased); (b) for known-but-non-voidable or account-restricted types, the bare string `"Invalid Record Type"` (no value in message).
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If `options.type` was accepted but no record with `options.id` exists in this account. Message: `"That record does not exist.{1}"` — note the literal `{1}` placeholder is leaked by NetSuite's templating layer (an unfilled message variable).
     */
    (options: {
      type: transaction.Type | `${transaction.Type}` | string,
      id: number | string,
    }): number;

    promise: {

      /**
       * Voids a transaction record asynchronously and returns a Promise
       * resolving to the ID of the resulting record. Positional-form overload
       * of {@link transaction.void.promise}; equivalent to
       * `transaction.void.promise({type, id})`. Behavior depends on the
       * account's preference settings — for accounts configured for direct
       * voids the resolved ID is the voided record itself (and that record
       * is mutated in place to zero values); for accounts configured for
       * voids by reversing journal, the resolved ID belongs to a newly-created
       * journal entry that offsets the original transaction (the original is
       * unchanged).
       *
       * Failures from both argument-validation and runtime paths surface as
       * Promise rejections rather than synchronous throws.
       *
       * Account-level type restrictions apply: the `transaction.Type` enum
       * lists types voidable in some account configurations, but enabled
       * features (Advanced Receiving, Multi-Currency, Revenue Recognition,
       * etc.) determine which types can actually be voided in the current
       * account. Types listed in the enum but disabled for the current
       * account surface as `INVALID_RCRD_TYPE: "Invalid Record Type"` at
       * call time.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440850256}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440850256.html}
       *
       * @governance 10 units (charged on every call that progresses past argument-presence validation — missing-argument failures cost 0, but invalid-type and record-not-found failures both cost the full 10).
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param type The internal record-type ID of the transaction to void (e.g. `'vendorpayment'`, `'journalentry'`). Pass a `transaction.Type` enum value or its underlying string literal. The runtime validates `type` BEFORE `id`.
       * @param id The internal ID of the transaction record to void.
       * @return A Promise resolving to the internal ID of the voided record (direct void) or the newly-created reversing-journal record (reversing-journal void) — a number in both cases.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If `type` or `id` is missing, `null`, `undefined`, or empty string. Message format: `"void: Missing a required argument: <field>"` — note the prefix is bare `void:` rather than `transaction.void:`. Validation order checks `type` first, then `id`.
       * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE (via Promise rejection) If `type` is not a known record type, or is known but not voidable in this account. Two distinct message formats: (a) for unknown type strings, `"The record type [<VALUE_UPPERCASED>] is invalid."` (the supplied value appears in the message, uppercased); (b) for known-but-non-voidable or account-restricted types, the bare string `"Invalid Record Type"` (no value in message).
       * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST (via Promise rejection) If `type` was accepted but no record with `id` exists in this account. Message: `"That record does not exist.{1}"` — note the literal `{1}` placeholder is leaked by NetSuite's templating layer.
       */
      (
        type: transaction.Type | `${transaction.Type}` | string,
        id: number | string,
      ): Promise<number>;

      /**
       * Voids a transaction record asynchronously and returns a Promise
       * resolving to the ID of the resulting record. Behavior depends on the
       * account's preference settings — for accounts configured for direct
       * voids the resolved ID is the voided record itself (and that record
       * is mutated in place to zero values); for accounts configured for
       * voids by reversing journal, the resolved ID belongs to a newly-created
       * journal entry that offsets the original transaction (the original is
       * unchanged).
       *
       * Failures from both argument-validation and runtime paths surface as
       * Promise rejections rather than synchronous throws.
       *
       * Account-level type restrictions apply: the `transaction.Type` enum
       * lists types voidable in some account configurations, but enabled
       * features (Advanced Receiving, Multi-Currency, Revenue Recognition,
       * etc.) determine which types can actually be voided in the current
       * account. Types listed in the enum but disabled for the current
       * account surface as `INVALID_RCRD_TYPE: "Invalid Record Type"` at
       * call time.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440850256}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440850256.html}
       *
       * @governance 10 units (charged on every call that progresses past argument-presence validation — missing-argument failures cost 0, but invalid-type and record-not-found failures both cost the full 10).
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param options
       * @param options.type The internal record-type ID of the transaction to void (e.g. `'vendorpayment'`, `'journalentry'`). Pass a `transaction.Type` enum value or its underlying string literal. The runtime validates `type` BEFORE `id`.
       * @param options.id The internal ID of the transaction record to void.
       * @return A Promise resolving to the internal ID of the voided record (direct void) or the newly-created reversing-journal record (reversing-journal void) — a number in both cases.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If `options` is missing, `null`, `undefined`, or if `options.type` or `options.id` is missing, `null`, `undefined`, or empty string. Message format: `"void: Missing a required argument: <field>"` — note the prefix is bare `void:` rather than `transaction.void:`. Validation order checks `type` first, then `id`.
       * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE (via Promise rejection) If `options.type` is not a known record type, or is known but not voidable in this account. Two distinct message formats: (a) for unknown type strings, `"The record type [<VALUE_UPPERCASED>] is invalid."` (the supplied value appears in the message, uppercased); (b) for known-but-non-voidable or account-restricted types, the bare string `"Invalid Record Type"` (no value in message).
       * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST (via Promise rejection) If `options.type` was accepted but no record with `options.id` exists in this account. Message: `"That record does not exist.{1}"` — note the literal `{1}` placeholder is leaked by NetSuite's templating layer.
       */
      (options: {
        type: transaction.Type | `${transaction.Type}` | string,
        id: number | string,
      }): Promise<number>;
    };
  };
}

declare namespace transaction {

  /**
   * Internal record-type IDs for transaction types that the `transaction.void`
   * API recognizes as voidable. Values are the NetSuite record-type ID
   * strings — all lowercase, with underscores stripped (matching the
   * convention used by `N/record`, e.g. `record.load({type: 'vendorpayment'})`).
   *
   * **Not every entry is voidable in every account.** Account-level
   * feature settings (Advanced Receiving, Multi-Currency, Revenue
   * Recognition, etc.) determine which types can actually be voided.
   * Types listed here but disabled for the current account surface as
   * `INVALID_RCRD_TYPE: "Invalid Record Type"` at call time.
   *
   * Unlike most NetSuite SuiteScript enum objects, the runtime
   * `transaction.Type` is NOT frozen — but its keys and values should
   * be treated as constants.
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
    CUSTOM_SALE = 'customsale',
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
