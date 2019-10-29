/**
 * SuiteScript encode module
 *
 * @module N/encode
 * @NApiVersion 2.x
 *
 */
function encode() {
}

/**
 * @param {Object} options
 * @param {string} options.string String to encode
 * @param {string} options.inputEncoding Encoding of the input string.
 * @param {string} options.outputEncoding Encoding to apply to the output string.
 * @return {string} Reencoded string
 *
 * @since 2015.1
 */
encode.prototype.convert = function (options) {
};


encode = new encode();

/**
 * @enum
 */
function encodeEncoding() {
  this.UTF_8 = 'UTF_8';
  this.BASE_16 = 'BASE_16';
  this.BASE_32 = 'BASE_32';
  this.BASE_64 = 'BASE_64';
  this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
  this.HEX = 'HEX';
}

encode.Encoding = encodeEncoding();

/**
 * @type {encode}
 */
N.prototype.encode = encode;