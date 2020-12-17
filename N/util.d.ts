/**
 * SuiteScript util module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4569538303.html}
 *
 * @module N/util
 * @NApiVersion 2.x
 */
interface util {

  /**
   * Iterates over each member in an Array
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541697371.html}
   *
   * @memberof util
   * @name util.each
   *
   * @param {*[]} iterable
   * @param {Function} callback
   * @return {*[]} iterable - original collection
   */
  each<T>(iterable: T[], callback: (value: T, index: number, arr: T[]) => void): T[]

  /**
   * Iterates over each member in an Object
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541697371.html}
   *
   * @memberof util
   * @name util.each
   *
   * @param {Object<string, anu>} iterable
   * @param {Function} callback
   * @return {Object<string, any>} iterable - original collection
   */
  each<K extends string, V>(iterable: { [p: string]: V }, callback: (value: V, key: K, obj: { [p: string]: V }) => void): { [p: string]: V }

  /**
   * Copies the properties in a source object to a destination object
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541702994.html}
   *
   * @memberof util
   * @name util.extend
   *
   * @param {Object} receiver
   * @param {Object} contributor
   * @return {Object} receiver
   */
  extend<R extends object, C extends object>(receiver: R, contributor: C): C & R

  /**
   * @see Unknown
   *
   * @memberof util
   * @name util.deepExtend
   *
   * @param {Object} receiver
   * @param {Object} contributor
   * @return {Object} receiver
   */
  deepExtend<R extends object, C extends object>(receiver: R, contributor: C): C & R

  /**
   * Returns true if the obj parameter is a plain JavaScript object (new Object() or {} for example), and false otherwise
   * Use this method, for example, to verify that a variable is a JavaScript object and not a JavaScript Function.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434780923.html}
   *
   * @memberof util
   * @name util.isObject
   *
   * @param {*} obj
   * @return {boolean}
   */
  isObject(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript Function or AsyncFunction and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434697652.html}
   *
   * @memberof util
   * @name util.isFunction
   *
   * @param {*} obj
   * @return {boolean}
   */
  isFunction(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript AsyncFunction and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159485198809.html}
   *
   * @memberof util
   * @name util.isAsyncFunction
   *
   * @param {*} obj
   * @return {boolean}
   */
  isAsyncFunction(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript Array object and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434638201.html}
   *
   * @memberof util
   * @name util.isArray
   *
   * @param {*} obj
   * @return {boolean}
   */
  isArray(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript Boolean and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434638340.html}
   *
   * @memberof util
   * @name util.isBoolean
   *
   * @param {*} obj
   * @return {boolean}
   */
  isBoolean(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript String object or primitive, and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434798099.html}
   *
   * @memberof util
   * @name util.isString
   *
   * @param {*} obj
   * @return {boolean}
   */
  isString(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript Number object or primitive, and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434771374.html}
   *
   * @memberof util
   * @name util.isNumber
   *
   * @param obj
   * @return {boolean}
   */
  isNumber(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript Number or String object or primitive, and false otherwise
   * @see Unknown
   *
   * @memberof util
   * @name util.isNumberOrString
   *
   * @param obj
   * @return {boolean}
   */
  isNumberOrString(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript Date object and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434642842.html}
   *
   * @memberof util
   * @name util.isDate
   *
   * @param obj
   * @return {boolean}
   */
  isDate(obj: any): boolean

  /**
   * Returns true if the obj parameter is a JavaScript RegExp object, and false otherwise
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434785140.html}
   *
   * @memberof util
   * @name util.isRegExp
   *
   * @param obj
   * @return {boolean}
   */
  isRegExp(obj: any): boolean

  /**
   * Determines if a variable refers to an Error
   * @see Unknown
   *
   * @memberof util
   * @name util.isError
   *
   * @param obj
   * @return {boolean}
   */
  isError(obj: any): boolean

  /**
   * Remove leading and trailing whitespace from a string
   * @see Unknown
   *
   * @memberof util
   * @name util.trim
   *
   * @param {string} str String to have leading/trailing whitespace extracted
   * @return {string}
   */
  trim(str: string): string
}