/**
 * SuiteScript crypto module
 *
 * @module N/crypto
 * @NApiVersion 2.x
 *
 */
function crypto() {
}

/**
 *
 * @param options
 * @string options.guid
 * @string options.encoding
 * @return {SecretKey}
 */
crypto.prototype.createSecretKey = function (options) {
};

/**
 *
 * @param {Object} options
 * @param {string} options.algorithm
 * @return {Hash}
 */
crypto.prototype.createHash = function (options) {
};

/**
 *
 * @param {Object} options
 * @param {string} options.algorithm
 * @param {SecretKey} options.key
 * @return {Hmac}
 */
crypto.prototype.createHmac = function (options) {
};

/**
 *
 * @param {Object} options
 * @param {string} options.algorithm
 * @param {crypto.SecretKey} options.key
 * @param {string} options.blockCipherMode
 * @param {string} options.padding
 * @return {Cipher}
 */
crypto.prototype.createCipher = function (options) {
};

/**
 *
 * @param {Object} options
 * @param {string} options.algorithm
 * @param {string} options.key
 * @param {string} options.blockCipherMode
 * @param {string} options.padding
 * @param {string} options.iv
 * @return {Decipher}
 */
crypto.prototype.createDecipher = function (options) {
};

/**
 * @enum
 */
function cryptoHashAlg() {
  this.SHA1 = 'SHA1';
  this.SHA256 = 'SHA256';
  this.SHA512 = 'SHA512';
  this.MD5 = 'MD5';
}

crypto.prototype.HashAlg = cryptoHashAlg;

/**
 * @enum
 */
function cryptoEncryptionAlg() {
  this.AES = 'AES';
}

crypto.prototype.EncryptionAlg = cryptoEncryptionAlg;

/**
 * @enum
 */
function cryptoEncoding() {
  this.UTF_8 = 'UTF_8';
  this.BASE_16 = 'BASE_16';
  this.BASE_32 = 'BASE_32';
  this.BASE_64 = 'BASE_64';
  this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
  this.HEX = 'HEX';
}

crypto.prototype.Encoding = cryptoEncoding;

/**
 * @enum
 */
function cryptoPadding() {
  this.NoPadding = 'NoPadding';
  this.PKCS5Padding = 'PKCS5Padding';
}

crypto.prototype.Padding = cryptoPadding;

/**
 * Returns a new instance of SecretKey used for hmac, cipher and decipher
 *
 * @protected
 * @class
 * @classdesc
 * @param guid
 * @param encoding
 * @return {crypto.SecretKey}
 *
 * @constructor
 */
function SecretKey() {
  
  /**
   * @type string
   */
  this.prototype.guid = undefined;
  /**
   * @type string
   */
  this.prototype.encoding = undefined;
}

/**
 *
 * @protected
 * @constructor
 */
function CipherPayload() {
  
  /**
   * @type string
   */
  this.prototype.iv = undefined;
  /**
   * @type string
   */
  this.prototype.ciphertext = undefined;
}

/**
 * @class
 * @classdesc Encapsulation of a Hash
 * @return {crypto.Hash}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Hash() {
  
  /**
   *
   * @param {Object} options
   * @param {string} options.input
   * @param {string} options.inputEncoding
   *
   */
  this.prototype.update = function (options) {
  };
  
  /**
   * @param {Object} options
   * @param {string} options.outputEncoding
   * @return {string}
   */
  this.prototype.digest = function (options) {
  };
  
  /**
   * Returns the object type name (crypto.Hash)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
}

/**
 * @class
 * @classdesc Encapsulation of a Hash
 * @return {crypto.Hmac}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Hmac() {
  
  /**
   *
   * @param {Object} options
   * @param {string} options.input
   * @param {string} options.inputEncoding
   *
   */
  this.prototype.update = function (options) {
  };
  
  /**
   * @param {Object} options
   * @param {string} options.outputEncoding
   * @return {string}
   */
  this.prototype.digest = function (options) {
  };
  
  /**
   * Returns the object type name (crypto.Hash)
   * @returns {string}
   */
  this.prototype.toString = function () {
  };
}

/**
 * @protected
 * @constructor
 */
function Cipher() {
  
  /**
   *
   * @param {Object} options
   * @param {string} options.input
   * @param {string} options.inputEncoding
   *
   */
  this.prototype.update = function (options) {
  };
  
  /**
   * @param {Object} options
   * @param {string} options.outputEncoding
   * @return {CipherPayload}
   */
  this.prototype['final'] = function (options) {
  };
}

/**
 * @protected
 * @constructor
 */
function Decipher() {
  
  /**
   *
   * @param {Object} options
   * @param {string} options.input
   * @param {string} options.inputEncoding
   *
   */
  this.prototype.update = function (options) {
  };
  
  /**
   * @param {Object} options
   * @param {string} options.outputEncoding
   * @return {string}
   */
  this.prototype['final'] = function (options) {
  };
}

crypto = new crypto();
/**
 * @type {crypto}
 */
N.prototype.crypto = crypto;