/**
 * SuiteScript encode module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4369847722}
 *
 * @module N/encode
 * @NApiVersion 2.x
 */
interface encode {

  /**
   * Converts a string to another type of encoding
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4369851165}
   *
   * @param {Object} options
   * @param {string} options.string String to encode
   * @param {string} options.inputEncoding Encoding of the input string.
   * @param {string} options.outputEncoding Encoding to apply to the output string.
   * @return {string} Reencoded string
   *
   * @since 2015.1
   */
  convert(options: {
    string: string,
    inputEncoding: encode.Encoding,
    outputEncoding: encode.Encoding,
  }): string;
}

declare namespace encode {

  /**
   * Holds the string values for the supported character set encoding
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4369865177}
   *
   * @enum {string}
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