/**
 * SuiteScript util module
 *
 * Utility helpers for type checking, simple iteration, and object merging. The
 * module is also exposed as the global `util` object — scripts don't need to
 * `require('N/util')` to use it. The `N/util` require form and the global
 * resolve to the same underlying object.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4569538303}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4569538303.html}
 *
 * @module N/util
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface util {

  each: {

    /**
     * Iterates over each member of an Array, calling `callback` for each element.
     * Returns the original collection unchanged.
     *
     * Behavior notes that may surprise consumers familiar with native
     * `Array.prototype.forEach` or Underscore/Lodash `_.each`:
     *  - The callback's return value is IGNORED — returning `false` does NOT
     *    short-circuit the iteration (all elements are visited regardless).
     *  - Sparse-array holes ARE visited with `value === undefined`, where
     *    native `Array.forEach` would skip them.
     *  - Non-iterable inputs (`null`, `undefined`, strings, numbers, booleans,
     *    empty arrays) are silently accepted — the callback is simply not
     *    invoked.
     *  - A missing, `null`, or non-function `callback` throws a plain
     *    `TypeError: callback is not a function` (NOT a `SuiteScriptError`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541697371}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4541697371.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2016.1
     *
     * @param iterable The Array to iterate over.
     * @param callback Invoked once per element with `(value, index, originalArray)`. Return value is ignored.
     * @return The original `iterable` Array, returned unchanged for chaining.
     *
     * @throws {TypeError} If `callback` is missing, `null`, or a non-function value. Message format: `"callback is not a function"`. Not wrapped as a `SuiteScriptError`.
     */
    <T>(iterable: T[], callback: (value: T, index: number, arr: T[]) => void): T[];

    /**
     * Iterates over each own enumerable property of an Object, calling `callback`
     * for each entry. Returns the original collection unchanged.
     *
     * Behavior notes:
     *  - Inherited properties from the prototype chain are NOT visited (own
     *    properties only — equivalent to `for...in` filtered by
     *    `hasOwnProperty`).
     *  - The callback's return value is IGNORED — returning `false` does NOT
     *    short-circuit the iteration.
     *  - Non-iterable inputs (`null`, `undefined`, primitives) are silently
     *    accepted — the callback is simply not invoked.
     *  - Array-like objects with a numeric `length` property are iterated in
     *    array-style (numeric `key`, indices `0` to `length - 1`) rather than
     *    object-style.
     *  - A missing, `null`, or non-function `callback` throws a plain
     *    `TypeError: callback is not a function` (NOT a `SuiteScriptError`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541697371}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4541697371.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2016.1
     *
     * @param iterable The Object whose own properties to iterate over.
     * @param callback Invoked once per own property with `(value, key, originalObject)`. Return value is ignored.
     * @return The original `iterable` Object, returned unchanged for chaining.
     *
     * @throws {TypeError} If `callback` is missing, `null`, or a non-function value. Message format: `"callback is not a function"`. Not wrapped as a `SuiteScriptError`.
     */
    <V>(iterable: { [key: string]: V }, callback: (value: V, key: string, obj: { [key: string]: V }) => void): { [key: string]: V };
  };

  /**
   * Shallow-copies the own enumerable properties of `contributor` onto
   * `receiver` and returns `receiver`. Overlapping keys are overwritten with
   * values from `contributor` (last write wins). Mutates `receiver` in place.
   *
   * Behavior notes:
   *  - `extend.length === 2` — only two positional arguments are accepted.
   *    Additional source arguments (`extend(target, src1, src2)`) are silently
   *    IGNORED; only `src1` is merged. Use multiple calls to merge multiple
   *    sources.
   *  - `extend(target, null)` and `extend(target, undefined)` are no-ops —
   *    `target` is returned unchanged.
   *  - `extend(null, source)` and `extend(undefined, source)` throw plain
   *    `TypeError: Cannot set property 'X' of null/undefined`. The receiver
   *    must be a real object.
   *  - `extend(null, null)` returns `null` (no work to do; returns the
   *    nullish target as-is).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4541702994}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4541702994.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param receiver The destination object — mutated in place to add `contributor`'s properties.
   * @param contributor The source object whose own properties are copied onto `receiver`. May be `null` or `undefined`, in which case the call is a no-op.
   * @return The `receiver` object (same reference), now containing the merged properties.
   *
   * @throws {TypeError} If `receiver` is `null` or `undefined` AND `contributor` has properties to assign. Message format: `"Cannot set property 'X' of null/undefined"`. Not wrapped as a `SuiteScriptError`.
   */
  extend<R extends object, C extends object>(receiver: R, contributor: C): C & R;

  /**
   * Deep-merges the own enumerable properties of `contributor` onto `receiver`,
   * recursing into nested plain-object values. Returns `receiver`. Mutates
   * `receiver` in place.
   *
   * Behavior notes:
   *  - Arrays are REPLACED, not merged element-wise: a `contributor` array
   *    overwrites the entire `receiver` array at the same key (length
   *    included).
   *  - Recursion only into plain-object values; primitives, dates, regexps,
   *    and other non-plain-object values are replaced by reference.
   *  - Like `extend`, only two positional arguments are honored.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param receiver The destination object — mutated in place.
   * @param contributor The source object whose properties are deep-merged onto `receiver`.
   * @return The `receiver` object (same reference), now containing the deep-merged properties.
   */
  deepExtend<R extends object, C extends object>(receiver: R, contributor: C): C & R;

  /**
   * Returns `true` if `value` is a plain JavaScript object (`new Object()` or
   * `{}`); `false` otherwise. Class instances, arrays, dates, regexps, errors,
   * and functions all return `false` — this is a strict plain-object check,
   * not a `typeof === 'object'` shortcut.
   *
   * Use this method, for example, to verify that a variable is a plain
   * JavaScript object literal and not a more specialized object type.
   *
   * Throws `TypeError: obj.hasOwnProperty is not a function` when passed an
   * object created with `Object.create(null)` (a NetSuite-side bug — the
   * implementation calls `obj.hasOwnProperty` rather than
   * `Object.prototype.hasOwnProperty.call(obj, ...)`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434780923}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434780923.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is a plain object; `false` otherwise.
   *
   * @throws {TypeError} If `value` is an object whose prototype is `null` (e.g. `Object.create(null)`). Message format: `"obj.hasOwnProperty is not a function"`. Not wrapped as a `SuiteScriptError`.
   */
  isObject(value: unknown): value is { [key: string]: any };

  /**
   * Returns `true` if `value` is a JavaScript Function (including arrow
   * functions, `async function`s, classes, and native functions); `false`
   * otherwise.
   *
   * Generator functions (regular `function*` and `async function*`) return
   * `false` despite being callable function objects — this carve-out is
   * undocumented in the Help Center but stable at runtime.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434697652}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434697652.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is a function or async function (not a generator); `false` otherwise.
   */
  isFunction(value: unknown): value is (...args: any[]) => any;

  /**
   * Returns `true` if `value` is a JavaScript `async function` or async arrow
   * function; `false` otherwise. Regular functions, arrow functions, classes,
   * regular generators, and async generators all return `false`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159485198809}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159485198809.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2020.1
   *
   * @param value The value to test.
   * @return `true` if `value` is an async function; `false` otherwise.
   */
  isAsyncFunction(value: unknown): value is (...args: any[]) => Promise<any>;

  /**
   * Returns `true` if `value` is a JavaScript Array (equivalent to
   * `Array.isArray(value)`); `false` otherwise.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434638201}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434638201.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is an Array; `false` otherwise.
   */
  isArray(value: unknown): value is any[];

  /**
   * Returns `true` if `value` is a JavaScript Boolean (primitive `true`/`false`);
   * `false` otherwise.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434638340}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434638340.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is a boolean; `false` otherwise.
   */
  isBoolean(value: unknown): value is boolean;

  /**
   * Returns `true` if `value` is a JavaScript String — either a primitive
   * string or a `new String(...)` wrapper object; `false` otherwise.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434798099}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434798099.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is a string primitive or `String` wrapper; `false` otherwise.
   */
  isString(value: unknown): value is string;

  /**
   * Returns `true` if `value` is a JavaScript Number — either a primitive
   * number or a `new Number(...)` wrapper object; `false` otherwise. Numeric
   * strings (e.g. `'42'`) return `false`.
   *
   * Note that `NaN`, `Infinity`, and `-Infinity` all return `true` — this is
   * a "is the type Number?" check, not a "is a finite, usable number?" check.
   * Consumers who need finiteness should follow up with `Number.isFinite(...)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434771374}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434771374.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is a number primitive or `Number` wrapper (including `NaN`, `Infinity`, `-Infinity`); `false` otherwise.
   */
  isNumber(value: unknown): value is number;

  /**
   * Returns `true` if `value` is either a number or a string (the union of
   * `util.isNumber` and `util.isString` semantics); `false` otherwise.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a number or string; `false` otherwise.
   */
  isNumberOrString(value: unknown): value is number | string;

  /**
   * Returns `true` if `value` is a JavaScript `Date` object; `false` otherwise.
   * Date validity is NOT checked — `new Date('garbage')` (an Invalid Date with
   * `NaN` time value) returns `true`. Timestamp numbers and ISO date strings
   * return `false`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434642842}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434642842.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is a `Date` instance (regardless of validity); `false` otherwise.
   */
  isDate(value: unknown): value is Date;

  /**
   * Returns `true` if `value` is a JavaScript `RegExp` object; `false`
   * otherwise.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4434785140}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4434785140.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2016.1
   *
   * @param value The value to test.
   * @return `true` if `value` is a `RegExp`; `false` otherwise.
   */
  isRegExp(value: unknown): value is RegExp;

  /**
   * Returns `true` if `value` is a JavaScript `Error` instance (including
   * subclasses like `TypeError`, `RangeError`, `SyntaxError`, etc.); `false`
   * otherwise. Duck-typed plain objects with `name`/`message` properties
   * return `false` — only true `Error` instances are matched.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is an `Error` instance; `false` otherwise.
   */
  isError(value: unknown): value is Error;

  /**
   * Returns `true` if `value` is a JavaScript `BigInt` primitive; `false`
   * otherwise.
   *
   * Note: returns `null` (not `false`) when `value` is `null`. This is a
   * NetSuite-side bug — the predicate's truth value still narrows correctly
   * for `if (util.isBigInt(x))` control flow (since `null` is falsy), but
   * code that strictly checks `=== true` or `=== false` should be aware.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a `bigint` primitive; `false` (or `null` when `value === null`) otherwise.
   */
  isBigInt(value: unknown): value is bigint;

  /**
   * Returns `true` if `value` is a `Temporal.Duration` instance; `false`
   * otherwise.
   *
   * **Currently non-functional in many runtime contexts.** The implementation
   * references the `Temporal` global which is not yet defined in standard
   * SuiteScript execution environments. Calling this method in such a context
   * throws `ReferenceError: Temporal is not defined` regardless of the input.
   * This is a future-feature stub awaiting Temporal API availability.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a `Temporal.Duration`; `false` otherwise.
   *
   * @throws {ReferenceError} If the `Temporal` global is not defined in the current runtime context. Message: `"Temporal is not defined"`.
   */
  isDuration(value: unknown): boolean;

  /**
   * Returns `true` if `value` is a `Temporal.Instant` instance; `false`
   * otherwise.
   *
   * **Currently non-functional in many runtime contexts.** The implementation
   * references the `Temporal` global which is not yet defined in standard
   * SuiteScript execution environments. Calling this method in such a context
   * throws `ReferenceError: Temporal is not defined` regardless of the input.
   * This is a future-feature stub awaiting Temporal API availability.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a `Temporal.Instant`; `false` otherwise.
   *
   * @throws {ReferenceError} If the `Temporal` global is not defined in the current runtime context. Message: `"Temporal is not defined"`.
   */
  isInstant(value: unknown): boolean;

  /**
   * Returns `true` if `value` is a `Temporal.PlainDate` instance; `false`
   * otherwise.
   *
   * **Currently non-functional in many runtime contexts.** The implementation
   * references the `Temporal` global which is not yet defined in standard
   * SuiteScript execution environments. Calling this method in such a context
   * throws `ReferenceError: Temporal is not defined` regardless of the input.
   * This is a future-feature stub awaiting Temporal API availability.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a `Temporal.PlainDate`; `false` otherwise.
   *
   * @throws {ReferenceError} If the `Temporal` global is not defined in the current runtime context. Message: `"Temporal is not defined"`.
   */
  isPlainDate(value: unknown): boolean;

  /**
   * Returns `true` if `value` is a `Temporal.PlainDateTime` instance; `false`
   * otherwise.
   *
   * **Currently non-functional in many runtime contexts.** The implementation
   * references the `Temporal` global which is not yet defined in standard
   * SuiteScript execution environments. Calling this method in such a context
   * throws `ReferenceError: Temporal is not defined` regardless of the input.
   * This is a future-feature stub awaiting Temporal API availability.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a `Temporal.PlainDateTime`; `false` otherwise.
   *
   * @throws {ReferenceError} If the `Temporal` global is not defined in the current runtime context. Message: `"Temporal is not defined"`.
   */
  isPlainDateTime(value: unknown): boolean;

  /**
   * Returns `true` if `value` is a `Temporal.PlainTime` instance; `false`
   * otherwise.
   *
   * **Currently non-functional in many runtime contexts.** The implementation
   * references the `Temporal` global which is not yet defined in standard
   * SuiteScript execution environments. Calling this method in such a context
   * throws `ReferenceError: Temporal is not defined` regardless of the input.
   * This is a future-feature stub awaiting Temporal API availability.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a `Temporal.PlainTime`; `false` otherwise.
   *
   * @throws {ReferenceError} If the `Temporal` global is not defined in the current runtime context. Message: `"Temporal is not defined"`.
   */
  isPlainTime(value: unknown): boolean;

  /**
   * Returns `true` if `value` is a `Temporal.PlainYearMonth` instance; `false`
   * otherwise.
   *
   * **Currently non-functional in many runtime contexts.** The implementation
   * references the `Temporal` global which is not yet defined in standard
   * SuiteScript execution environments. Calling this method in such a context
   * throws `ReferenceError: Temporal is not defined` regardless of the input.
   * This is a future-feature stub awaiting Temporal API availability.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is a `Temporal.PlainYearMonth`; `false` otherwise.
   *
   * @throws {ReferenceError} If the `Temporal` global is not defined in the current runtime context. Message: `"Temporal is not defined"`.
   */
  isPlainYearMonth(value: unknown): boolean;

  /**
   * Returns `true` if `value` is any `Temporal` API instance (`Instant`,
   * `PlainDate`, `PlainDateTime`, `PlainTime`, `PlainYearMonth`, `Duration`,
   * etc.); `false` otherwise.
   *
   * **Currently non-functional in many runtime contexts.** The implementation
   * references the `Temporal` global which is not yet defined in standard
   * SuiteScript execution environments. Calling this method in such a context
   * throws `ReferenceError: Temporal is not defined` regardless of the input.
   * This is a future-feature stub awaiting Temporal API availability.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` is any `Temporal` API instance; `false` otherwise.
   *
   * @throws {ReferenceError} If the `Temporal` global is not defined in the current runtime context. Message: `"Temporal is not defined"`.
   */
  isTemporal(value: unknown): boolean;

  /**
   * Returns `true` if `value` is "thenable" — that is, an object or function
   * with a callable `then` property (the Promises/A+ duck-typed check). Native
   * `Promise` instances, manually constructed `{then: fn}` objects, and
   * functions augmented with a `then` property all return `true`. Plain
   * values, objects without a `then` property, and objects whose `then` is
   * not a function all return `false`.
   *
   * Note: returns `null` (not `false`) when `value` is `null`, and `undefined`
   * (not `false`) when `value` is `undefined` or omitted. This is a
   * NetSuite-side bug — the predicate's truth value still narrows correctly
   * for `if (util.isThenable(x))` control flow (since `null` and `undefined`
   * are falsy), but code that strictly checks `=== true` or `=== false`
   * should be aware.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param value The value to test.
   * @return `true` if `value` has a callable `then` property; `false` (or `null`/`undefined` for nullish inputs) otherwise.
   */
  isThenable(value: unknown): value is PromiseLike<unknown>;

  /**
   * Returns the current time in nanoseconds since the Unix epoch. Intended
   * for measuring elapsed time between two events (subtract one `nanoTime()`
   * reading from another).
   *
   * **May throw in certain execution contexts.** The implementation reads
   * from a Java-layer `nsNanoTime` provider that isn't always available; when
   * absent, the call throws `TypeError: Cannot read property 'nsNanoTime' of
   * undefined` rather than returning a value. Standard server-side script
   * contexts generally work; custom-tool and other restricted contexts may
   * not.
   *
   * Note: a present-day epoch time in nanoseconds (~1.7×10¹⁸) exceeds
   * `Number.MAX_SAFE_INTEGER` (~9×10¹⁵), so individual readings may have
   * imprecise low-order digits. Differences between two readings taken
   * closely together remain accurate enough for elapsed-time measurements.
   *
   * Documented at one point in the Help Center (legacy section
   * `4434803691`), but no longer cross-referenced from the `N/util` module
   * page.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @return The current epoch time in nanoseconds.
   *
   * @throws {TypeError} If the underlying `nsNanoTime` provider is not initialized in the current execution context. Message format: `"Cannot read property 'nsNanoTime' of undefined"`. Not wrapped as a `SuiteScriptError`.
   */
  nanoTime(): number;

  /**
   * Removes leading and trailing whitespace from a string and returns the
   * trimmed result. Coerces non-string inputs to strings first via the
   * standard JavaScript `String(value)` semantics — `null` becomes `'null'`,
   * `undefined` becomes `'undefined'`, numbers and booleans stringify per
   * their primitive `toString`, plain objects become `'[object Object]'`,
   * and so on.
   *
   * The set of whitespace characters trimmed matches ECMAScript's
   * `String.prototype.trim` (ASCII whitespace, Unicode whitespace including
   * NBSP `\u00A0` and em-space `\u2003`). Zero-width spaces (`\u200B`) and
   * other non-printing-non-whitespace characters are NOT trimmed.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   *
   * @param str The value to trim. Coerced to a string if not already one.
   * @return The string with leading and trailing whitespace removed. Always a string (never `null` or `undefined`).
   */
  trim(str: unknown): string;
}

declare const util: util;
