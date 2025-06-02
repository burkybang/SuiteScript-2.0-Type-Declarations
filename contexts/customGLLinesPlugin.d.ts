/**
 * SuiteScript Custom GL Lines Plug-In Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3987870163}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_3987870163.html}
 */

/// <reference path="../N/record.d.ts" />

/**
 *
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_8102434206}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8102434206.html}
 */
interface CustomizeGlImpactContext {
  standardLines: StandardLines;
  customLines: CustomLines;
  transactionRecord: Omit<record.RecordReadonly, `set${string}`>;
  book: AccountingBook;
}

/**
 *
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_74095018462}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_74095018462.html}
 */
interface AccountingBook {
  readonly id: number;
  readonly isPrimary: boolean;
}

/**
 *
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_7095141731}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_7095141731.html}
 */
interface CustomLines {
  /**
   * Returns the number of custom lines with GL impact for a specific accounting book in a transaction. These lines are added with addNewLine(). Use this property in conjunction with getLine(options) to get individual custom lines after you add them in the plug-in implementation.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_7095141731#bridgehead_41095302485}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_7095141731.html#bridgehead_41095302485}
   */
  readonly count: number;

  /**
   * Adds a CustomLine object to the parent `CustomLines` object in a Custom GL Lines plug-in implementation and returns the new object. Use this method to add a custom line with GL impact to a transaction.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_7095141731#bridgehead_62095244735}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_7095141731.html#bridgehead_62095244735}
   */
  addNewLine(): CustomLine;

  /**
   * Returns a `CustomLine` object that represents a custom line with GL impact. `CustomLine` objects are stored in the `CustomLines` object starting at index 0.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_7095141731#bridgehead_52095308608}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_7095141731.html#bridgehead_52095308608}
   *
   * @param options
   * @param options.index - Index of the line to be returned by the method, starting at 0
   */
  getLine(options: {
    index: number;
  }): CustomLine | null;
}

/**
 *
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_97094831021}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_97094831021.html}
 */
interface CustomLine {
  accountId: unknown;
  amount: string;
  subsidiaryId: number;
  departmentId: number;
  locationId: number;
  classId: number;
  entityId: number;
  creditAmount: string;
  deditAmount: string;
  isBookSpecific: boolean;
  memo: string;

  /**
   * Returns the internal NetSuite ID for the custom segment value set on the line on a `CustomLine` object. Use this method to define plug-in implementation functionality based on the value for a GL impact line.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_97094831021#bridgehead_0812010616}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_97094831021.html#bridgehead_0812010616}
   *
   * @param options
   * @param options.segmentId - String value of the custom segment ID
   */
  getSegmentValueId(options: {
    segmentId: string,
  }): number;

  /**
   * Sets custom segment values on a `CustomLine` object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_97094831021#bridgehead_10095005117}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_97094831021.html#bridgehead_10095005117}
   *
   * @param options
   * @param options.segmentId - String value of the custom segment ID
   * @param options.segmentValueId - Internal ID of the custom segment value that the custom line should be set to. Omitting this parameter unsets the custom segment value
   */
  setSegmentValueId(options: {
    segmentId: string,
    segmentValueId?: number,
  }): number;
}

/**
 *
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_48095106414}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_48095106414.html}
 */
interface StandardLines {
  /**
   * Returns the number of standard lines with GL impact for a specific accounting book in a transaction. Use this method in conjunction with reading individual standard lines.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_48095106414#bridgehead_51095122385}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_48095106414.html#bridgehead_51095122385}
   */
  readonly count: number;

  /**
   * Returns a `StandardLine` object that represents a standard line with GL impact. `StandardLine` objects are stored in the `StandardLines` object starting at index 0.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_48095106414#bridgehead_60095129955}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_48095106414.html#bridgehead_60095129955}
   *
   * @param options
   * @param options.index - Index of the line to be returned by the method, starting at 0
   */
  getLine(options: {
    index: number;
  }): StandardLine | null;
}

/**
 *
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_95095135857}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_95095135857.html}
 */
interface StandardLine {
  accountId: unknown;
  amount: string;
  creditAmount: string;
  deditAmount: string;
  subsidiaryId: number;
  departmentId: number;
  locationId: number;
  classId: number;
  entityId: number;
  id: number;
  isPosting: boolean;
  isTaxable: boolean;
  memo: string;
  taxAmount: string;
  taxableAmount: string;
  taxType: string;

  /**
   *
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_95095135857#subsect_0815095325}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_95095135857.html#subsect_0815095325}
   *
   * @param options
   * @param options.segmentId - String value of the standard segment ID
   */
  getSegmentValueId(options: {
    segmentId: string,
  }): number;
}