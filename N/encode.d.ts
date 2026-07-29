/// <reference path="./error.d.ts" />

/**
 * SuiteScript encode module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4369847722}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4369847722.html}
 *
 * @module N/encode
 * @NApiVersion 2.x
 */
interface encode {

  /**
   * Converts a string to another type of encoding.
   *
   * When `outputEncoding` is `UTF_8` and the decoded binary data is not valid UTF-8, the operation
   * succeeds and the result contains the Unicode replacement character (U+FFFD) in place of each
   * invalid byte sequence. No error is thrown for this case — callers that need strict UTF-8
   * validation must check the result.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4369851165}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4369851165.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.1
   *
   * @param options
   * @param options.string The string to encode. Use the empty string `''` for an empty-input encoding (this is treated as valid input and returns `''`, NOT as a missing required argument).
   * @param options.inputEncoding The encoding of the input string. Use `encode.Encoding` enum values; passing arbitrary strings causes `UNEXPECTED_ERROR`.
   * @param options.outputEncoding The encoding to apply to the output string. Use `encode.Encoding` enum values; passing arbitrary strings causes `UNEXPECTED_ERROR`.
   * @return The re-encoded string.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.string` is missing or `null`, OR `options.inputEncoding` is missing or `null`, OR `options.outputEncoding` is missing or `null`. Validation order: `string` is checked first (as `"value"` in the error message), then `inputEncoding`, then `outputEncoding`. Empty string `''` for any of these is NOT treated as missing — `string: ''` succeeds; `inputEncoding: ''` / `outputEncoding: ''` instead trigger `UNEXPECTED_ERROR`. Any non-object `options` argument (string, number, `null`, `undefined`) is treated as `{}` and produces this error against the `string` parameter.
   * @throws {error.SuiteScriptError} FAILED_TO_DECODE_STRING_ENCODED_BINARY_DATA_USING_1_ENCODING If `options.string` is not valid binary data encoded with `options.inputEncoding`. Message format: `"Failed to decode string-encoded binary data using '<inputEncoding>' encoding"`. Note: an empty `string: ''` succeeds even when decoding (returns `''`), but whitespace-only strings DO trigger this error.
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR Undocumented in the Help Center: thrown when `inputEncoding` or `outputEncoding` is provided but not a valid `encode.Encoding` value. Includes empty strings (`''`), unrecognized names (`'BOGUS'`), incorrect casing (`'utf_8'`), and alternate spellings (`'UTF-8'`). The error message is the generic `"An unexpected SuiteScript error has occurred"` with no detail about which encoding parameter was invalid.
   * @throws {TypeError} Undocumented Java-layer leak: if `options.string` is a value not coercible to a Java string (plain object, array), the underlying `EncodeApi.reencode` call fails with a string-coercion `TypeError`. Numbers and booleans are silently coerced to their string representations (`12345` → `"12345"`, `true` → `"true"`) and encoded as that string.
   */
  convert(options: {
    string: string,
    inputEncoding: encode.Encoding | `${encode.Encoding}`,
    outputEncoding: encode.Encoding | `${encode.Encoding}`,
  }): string;
}

declare namespace encode {

  /**
   * Holds the string values for the supported character set encodings. Used with `N/encode` and
   * `N/crypto` to set the `inputEncoding` and `outputEncoding` parameter values.
   *
   * `HEX` and `BASE_16` produce identical output at runtime — both emit upper-case hexadecimal
   * digits (e.g. `'A'` → `'41'`) and accept each other's output for decoding.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4369865177}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4369865177.html}
   *
   * @since 2015.1
   */
  export enum Encoding {
    UTF_8 = 'UTF_8',
    BASE_16 = 'BASE_16',
    BASE_32 = 'BASE_32',
    BASE_64 = 'BASE_64',
    BASE_64_URL_SAFE = 'BASE_64_URL_SAFE',
    HEX = 'HEX',
  }
}
