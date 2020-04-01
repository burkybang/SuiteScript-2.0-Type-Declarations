/**
 * SuiteScript crypto module
 *
 * @module N/crypto
 * @NApiVersion 2.x
 */
interface crypto_ {
  
  /**
   *
   * @param options
   * @param {string} options.guid
   * @param {crypto_.Encoding} [options.encoding]
   * @return {crypto_.SecretKey}
   */
  createSecretKey(options: { guid: string, encoding?: crypto_.Encoding }): crypto_.SecretKey
  
  /**
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @return {crypto_.Hash}
   */
  createHash(options: { algorithm: crypto_.HashAlg }): crypto_.Hash
  
  /**
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @param {crypto_.SecretKey} options.key
   * @return {crypto_.Hmac}
   */
  createHmac(options: { algorithm: crypto_.HashAlg, key: crypto_.SecretKey }): crypto_.Hmac
  
  /**
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @param {crypto_.SecretKey} options.key
   * @param {crypto_.Padding} options.padding
   * @return {crypto_.Cipher}
   */
  createCipher(options: { algorithm: crypto_.HashAlg, key: crypto_.SecretKey, padding: crypto_.Padding }): crypto_.Cipher
  
  /**
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @param {crypto_.SecretKey} options.key
   * @param {crypto_.Padding} options.padding
   * @param {string} options.iv
   * @return {crypto_.Decipher}
   */
  createDecipher(options: { algorithm: crypto_.HashAlg, key: crypto_.SecretKey, padding: crypto_.Padding, iv: string }): crypto_.Decipher
}

declare namespace crypto_ {
  
  /**
   * Enum describing available crypto hashing algorithms
   * @enum
   * @readonly
   */
  export enum HashAlg {
    SHA1 = 'SHA1',
    SHA256 = 'SHA256',
    SHA512 = 'SHA512',
    MD5 = 'MD5',
  }
  
  /**
   * Enum describing available crypto encryption algorithms
   * @enum
   * @readonly
   */
  export enum EncryptionAlg {
    AES = 'AES',
  }
  
  /**
   * Enum describing available encodings
   * @enum
   * @readonly
   */
  export enum Encoding {
    UTF_8 = 'UTF_8',
    BASE_16 = 'BASE_16',
    BASE_32 = 'BASE_32',
    BASE_64 = 'BASE_64',
    BASE_64_URL_SAFE = 'BASE_64_URL_SAFE',
    HEX = 'HEX',
  }
  
  /**
   * Enum describing available padding options
   * @enum
   * @readonly
   */
  export enum Padding {
    NoPadding = 'NoPadding',
    PKCS5Padding = 'PKCS5Padding',
  }
  
  /**
   * Returns a new instance of SecretKey used for hmac, cipher and decipher
   *
   * @protected
   * @class
   * @classdesc
   * @param guid
   * @param encoding
   * @return {crypto_.SecretKey}
   *
   * @constructor
   */
  export interface SecretKey {
    
    /**
     * @type {string}
     */
    guid: string
    
    /**
     * @type {Encoding}
     */
    encoding: Encoding
  }
  
  /**
   *
   * @protected
   * @constructor
   */
  export interface CipherPayload {
    
    /**
     * @type {string}
     */
    iv: string
    
    /**
     * @type {string}
     */
    ciphertext: string
  }
  
  /**
   * @class
   * @classdesc Encapsulation of a Hash
   * @return {crypto_.Hash}
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Hash {
    
    /**
     * @param {Object} options
     * @param {string} options.input
     * @param {Encoding} options.inputEncoding
     * @return {void}
     */
    update(options: { input: string, inputEncoding: Encoding }): void
    
    /**
     * @param {Object} options
     * @param {Encoding} options.outputEncoding
     * @return {string}
     */
    digest(options: { outputEncoding: Encoding }): string
    
    /**
     * Returns the object type name (crypto_.Hash)
     * @return {string}
     */
    toString(): string
  }
  
  /**
   * @class
   * @classdesc Encapsulation of a Hash
   * @return {crypto_.Hmac}
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Hmac {
    
    /**
     * @param {Object} options
     * @param {string} options.input
     * @param {Encoding} options.inputEncoding
     * @return {void}
     */
    update(options: { input: string, inputEncoding: Encoding }): void
    
    /**
     * @param {Object} options
     * @param {Encoding} options.outputEncoding
     * @return {string}
     */
    digest(options: { outputEncoding: Encoding }): string
    
    /**
     * Returns the object type name (crypto_.Hash)
     * @return {string}
     */
    toString(): string
  }
  
  /**
   * @protected
   * @constructor
   */
  export interface Cipher {
    
    /**
     * @param {Object} options
     * @param {string} options.input
     * @param {Encoding} options.inputEncoding
     * @return {void}
     */
    update(options: { input: string, inputEncoding: Encoding }): void
    
    /**
     * @param {Object} options
     * @param {string} options.outputEncoding
     * @return {CipherPayload}
     */
    final(options: { outputEncoding: Encoding }): CipherPayload
  }
  
  /**
   * @protected
   * @constructor
   */
  export interface Decipher {
    
    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {Encoding} options.inputEncoding
     * @return {void}
     *
     */
    update(options: { input: string, inputEncoding: Encoding }): void
    
    /**
     * @param {Object} options
     * @param {Encoding} options.outputEncoding
     * @return {string}
     */
    final(options: { outputEncoding: Encoding }): string
  }
}