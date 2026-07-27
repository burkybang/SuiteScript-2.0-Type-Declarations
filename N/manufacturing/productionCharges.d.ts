/// <reference path="../error.d.ts" />

/**
 * SuiteScript manufacturing/productionCharges module
 *
 * Use the `productionCharges` module to update unit costs of manufacturing charges on Assembly Build, Work Order Close, and Work Order Completion transactions.
 *
 * Prerequisites: the **Assembly Items** feature must be enabled and the **Allow bulk cost updates for Production Charges** preference must be turned on. The executing user needs at least Edit permission on the relevant transactions (Build Assemblies when Manufacturing Work In Process is disabled; Assembly Build, Work Order Completion, and Work Order Issue when it is enabled). The target transaction must be of type Assembly Build, Work Order Completion, or Work Order Issue and in an open posting period.
 *
 * Cost changes made using this module do not trigger other SuiteScript scripts.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1110531599}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1110531599.html}
 *
 * @module N/manufacturing/productionCharges
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only; SuiteScript 2.1 only
 * @since 2026.1
 */
interface productionCharges {

  /**
   * Updates cost on a specific transaction line to a specified unit cost.
   *
   * Applies to transaction lines that must: be a credit line; be of type Non-Inventory, Service, or Other Charge; use items designated for Purchase or Resale; and use items whose cost category is not of type Outsourcing Charge, Landed, or Service.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0310114858}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0310114858.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2026.1
   *
   * @param options
   * @param options.transactionId ID of the transaction to be updated.
   * @param options.transactionLineIds Array of IDs of the lines to be updated.
   * @param options.newUnitCost New unit cost of the item on the transaction line.
   * @param [options.isUnitCostPerBaseUnit] Defaults to `true`. When `true`, for lines with the Multiple Units of Measure feature enabled, the value is applied as the unit cost of the base unit; when `false`, it is applied as a fixed unit cost irrespective of any Multiple Units of Measure conversion rates. This parameter can only be used when the Multiple Units of Measure feature is enabled.
   * @return {void}
   *
   * @throws {error.SuiteScriptError} INVALID_NUMBER_MUST_BE_GREATER_THAN_1 "Invalid number (must be greater than 0)" The value of `options.transactionId` or `options.transactionLineIds` is not a positive integer.
   * @throws {error.SuiteScriptError} FEATURE_1_MUST_BE_ENABLED_TO_USE_2_API "Feature 'Assembly Items' must be enabled to use 'N/manufacturing/productionCharges' API." The Assembly Items feature is not enabled.
   * @throws {error.SuiteScriptError} PREFERENCE_1_REQUIRED_FOR_THIS_OPERATION "Preference Allow bulk cost updates for Production Charges required for this operation." The Allow bulk cost updates for Production Charges preference is not enabled.
   * @throws {error.SuiteScriptError} ACCESS_DENIED "Access denied" The user does not have at least Edit permission for the relevant Build Assemblies / Assembly Build / Work Order Completion / Work Order Issue transactions.
   * @throws {error.SuiteScriptError} TRANSACTION_1_IS_INVALID_OR_HAS_NO_EDITABLE_TRANSACTION_LINES "Transaction with ID '{1}' is invalid or has no transaction lines that can be edited through this API" The transaction does not exist, is not of type Assembly Build / Work Order Completion / Work Order Issue, is not in an open posting period, or has no line editable by this API.
   * @throws {error.SuiteScriptError} PROVIDED_TRANSACTION_LINES_ARE_NOT_EDITABLE_OR_INVALID_1 "Provided transaction lines are invalid or cannot be edited through this API: [{1}]" One or more of the provided lines do not exist or do not meet the editable criteria (credit line; item of type Non-Inventory, Service, or Other Charge; cost category not Outsourcing Charge, Landed, or Service).
   */
  updateChargesToCustomUnitCost(options: {
    transactionId: number,
    transactionLineIds: number[],
    newUnitCost: number,
    isUnitCostPerBaseUnit?: boolean,
  }): void;

  /**
   * Updates cost on a specific transaction line according to the current purchase price of the originating item.
   *
   * Applies to transaction lines that must: be a credit line; be of type Non-Inventory, Service, or Other Charge; use items designated for Purchase or Resale; and use items whose cost category is not of type Outsourcing Charge, Landed, or Service.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0310115150}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0310115150.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2026.1
   *
   * @param options
   * @param options.transactionId ID of the transaction to be updated.
   * @param options.transactionLineIds Array of IDs of the lines to be updated.
   * @return {void}
   *
   * @throws {error.SuiteScriptError} INVALID_NUMBER_MUST_BE_GREATER_THAN_1 "Invalid number (must be greater than 0)" The value of `options.transactionId` or `options.transactionLineIds` is not a positive integer.
   * @throws {error.SuiteScriptError} FEATURE_1_MUST_BE_ENABLED_TO_USE_2_API "Feature 'Assembly Items' must be enabled to use 'N/manufacturing/productionCharges' API." The Assembly Items feature is not enabled.
   * @throws {error.SuiteScriptError} PREFERENCE_1_REQUIRED_FOR_THIS_OPERATION "Preference Allow bulk cost updates for Production Charges required for this operation." The Allow bulk cost updates for Production Charges preference is not enabled.
   * @throws {error.SuiteScriptError} ACCESS_DENIED "Access denied" The user does not have at least Edit permission for the relevant Build Assemblies / Assembly Build / Work Order Completion / Work Order Issue transactions.
   * @throws {error.SuiteScriptError} TRANSACTION_1_IS_INVALID_OR_HAS_NO_EDITABLE_TRANSACTION_LINES "Transaction with ID '{1}' is invalid or has no transaction lines that can be edited through this API" The transaction does not exist, is not of type Assembly Build / Work Order Completion / Work Order Issue, is not in an open posting period, or has no line editable by this API.
   * @throws {error.SuiteScriptError} PROVIDED_TRANSACTION_LINES_ARE_NOT_EDITABLE_OR_INVALID_1 "Provided transaction lines are invalid or cannot be edited through this API: [{1}]" One or more of the provided lines do not exist or do not meet the editable criteria (credit line; item of type Non-Inventory, Service, or Other Charge; cost category not Outsourcing Charge, Landed, or Service).
   */
  updateChargesToItemPurchasePrice(options: {
    transactionId: number,
    transactionLineIds: number[],
  }): void;

  /**
   * Updates cost on all routing and non-inventory transaction lines on a specified transaction to the current price.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0310115209}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0310115209.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2026.1
   *
   * @param options
   * @param options.transactionId ID of the transaction to be updated.
   * @return {void}
   *
   * @throws {error.SuiteScriptError} INVALID_NUMBER_MUST_BE_GREATER_THAN_1 "Invalid number (must be greater than 0)" The value of `options.transactionId` is not a positive integer.
   * @throws {error.SuiteScriptError} FEATURE_1_MUST_BE_ENABLED_TO_USE_2_API "Feature 'Assembly Items' must be enabled to use 'N/manufacturing/productionCharges' API." The Assembly Items feature is not enabled.
   * @throws {error.SuiteScriptError} PREFERENCE_1_REQUIRED_FOR_THIS_OPERATION "Preference Allow bulk cost updates for Production Charges required for this operation." The Allow bulk cost updates for Production Charges preference is not enabled.
   * @throws {error.SuiteScriptError} ACCESS_DENIED "Access denied" The user does not have at least Edit permission for the relevant Build Assemblies / Assembly Build / Work Order Completion / Work Order Issue transactions.
   * @throws {error.SuiteScriptError} TRANSACTION_1_IS_INVALID_OR_HAS_NO_EDITABLE_TRANSACTION_LINES "Transaction with ID '{1}' is invalid or has no transaction lines that can be edited through this API" The transaction does not exist, is not of type Assembly Build / Work Order Completion / Work Order Issue, is not in an open posting period, or has no line editable by this API.
   */
  updateAllChargesToItemPurchasePrice(options: {
    transactionId: number,
  }): void;
}
