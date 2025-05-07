/**
 * SuiteScript util module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4569538303}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4569538303.html}
 *
 * @module N/util
 * @NApiVersion 2.x
 */
interface util {

  /**
   * Iterates over each member in an Array
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541697371}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4541697371.html}
   *
   * @return iterable - original collection
   */
  each<T>(iterable: T[], callback: (value: T, index: number, arr: T[]) => void): T[];

  /**
   * Iterates over each member in an Object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541697371}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4541697371.html}
   *
   * @return iterable - original collection
   */
  each<K extends string, V>(iterable: { [p: string]: V }, callback: (value: V, key: K, obj: { [p: string]: V }) => void): { [p: string]: V };

  /**
   * Copies the properties in a source object to a destination object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541702994}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4541702994.html}
   */
  extend<R extends object, C extends object>(receiver: R, contributor: C): C & R;

  /**
   * @see Not Documented in NetSuite Help Center
   */
  deepExtend<R extends object, C extends object>(receiver: R, contributor: C): C & R;

  /**
   * Returns true if the value parameter is a plain JavaScript object (new Object() or {} for example), and false otherwise
   * Use this method, for example, to verify that a variable is a JavaScript object and not a JavaScript Function.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434780923}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434780923.html}
   */
  isObject(value: unknown): value is { [key: string]: any };

  /**
   * Returns true if the value parameter is a JavaScript Function or AsyncFunction and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434697652}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434697652.html}
   */
  isFunction(value: unknown): value is (...args: any[]) => any;

  /**
   * Returns true if the value parameter is a JavaScript AsyncFunction and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159485198809}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159485198809.html}
   */
  isAsyncFunction(value: unknown): value is (...args: any[]) => Promise<any>;

  /**
   * Returns true if the value parameter is a JavaScript Array object and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434638201}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434638201.html}
   */
  isArray(value: unknown): value is any[];

  /**
   * Returns true if the value parameter is a JavaScript Boolean and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434638340}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434638340.html}
   */
  isBoolean(value: unknown): value is boolean;

  /**
   * Returns true if the value parameter is a JavaScript String object or primitive, and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434798099}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434798099.html}
   */
  isString(value: unknown): value is string;

  /**
   * Returns true if the value parameter is a JavaScript Number object or primitive, and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434771374}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434771374.html}
   */
  isNumber(value: unknown): value is number;

  /**
   * Returns true if the value parameter is a JavaScript Number or String object or primitive, and false otherwise
   * @see Not Documented in NetSuite Help Center
   */
  isNumberOrString(value: unknown): value is number | string;

  /**
   * Returns true if the value parameter is a JavaScript Date object and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434642842}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434642842.html}
   */
  isDate(value: unknown): value is Date;

  /**
   * Returns true if the value parameter is a JavaScript RegExp object, and false otherwise
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434785140}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434785140.html}
   */
  isRegExp(value: unknown): value is RegExp;

  /**
   * Determines if a variable refers to an Error
   * @see Not Documented in NetSuite Help Center
   */
  isError(value: unknown): value is Error;

  /**
   * Remove leading and trailing whitespace from a string.
   * Converts input to a string if it is not already.
   * @see Not Documented in NetSuite Help Center
   *
   * @param str - String to have leading/trailing whitespace extracted
   */
  trim(str: unknown): string;
}

declare const util: util;