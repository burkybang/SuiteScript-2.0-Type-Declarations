/**
 * SuiteScript encode module
 *
 * @module N/encode
 * @NApiVersion 2.x
 *
 */

interface encode {
  
  /**
   * @param {Object} options
   * @param {string} options.string String to encode
   * @param {string} options.inputEncoding Encoding of the input string.
   * @param {string} options.outputEncoding Encoding to apply to the output string.
   * @return {string} Reencoded string
   *
   * @since 2015.1
   */
  convert(options: { string: string, inputEncoding: encode.Encoding, outputEncoding: encode.Encoding }): string
}

declare namespace encode {
  
  /**
   * @enum
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