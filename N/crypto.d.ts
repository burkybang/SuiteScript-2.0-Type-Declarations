/// <reference path="./encode.d.ts" />

/**
 * SuiteScript crypto module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358549582}
 *
 * @module N/crypto
 * @NApiVersion 2.x
 */
interface crypto_ {

  /**
   * Method used to create a new crypto_.SecretKey object
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358653390}
   *
   * @param options
   * @param {string} options.guid
   * @param {encode.Encoding} [options.encoding=encode.Encoding.HEX]
   * @return {crypto_.SecretKey}
   *
   * @since 2015.2
   */
  createSecretKey(options: {
    guid: string,
    encoding?: encode.Encoding,
  }): crypto_.SecretKey;

  /**
   * Method used to create a crypto.Hash object
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647370}
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @return {crypto_.Hash}
   *
   * @since 2015.2
   */
  createHash(options: {
    algorithm: crypto_.HashAlg,
  }): crypto_.Hash;

  /**
   * Method used to create a crypto.Hmac object
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647613}
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @param {crypto_.SecretKey} options.key
   * @return {crypto_.Hmac}
   *
   * @since 2015.2
   */
  createHmac(options: {
    algorithm: crypto_.HashAlg,
    key: crypto_.SecretKey,
  }): crypto_.Hmac;

  /**
   * Method used to create and return a crypto.EncryptionAlg object
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358650498}
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @param {crypto_.SecretKey} options.key
   * @param {crypto_.Padding} [options.padding=crypto_.Padding.PKCS5Padding]
   * @return {crypto_.Cipher}
   *
   * @since 2015.2
   */
  createCipher(options: {
    algorithm: crypto_.HashAlg,
    key: crypto_.SecretKey,
    padding?: crypto_.Padding,
  }): crypto_.Cipher;

  /**
   * Method used to create a crypto.Decipher object
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358650886}
   *
   * @param {Object} options
   * @param {crypto_.HashAlg} options.algorithm
   * @param {crypto_.SecretKey} options.key
   * @param {crypto_.Padding} [options.padding=crypto_.Padding.PKCS5Padding]
   * @param {string} options.iv
   * @return {crypto_.Decipher}
   *
   * @since 2015.2
   */
  createDecipher(options: {
    algorithm: crypto_.HashAlg,
    key: crypto_.SecretKey,
    padding?: crypto_.Padding,
    iv: string,
  }): crypto_.Decipher;
}

declare namespace crypto_ {

  /**
   * Enum describing available crypto hashing algorithms
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655346}
   *
   * @enum {string}
   *
   * @since 2015.2
   */
  export enum HashAlg {
    SHA1 = 'SHA1',
    SHA256 = 'SHA256',
    SHA512 = 'SHA512',
    MD5 = 'MD5',
  }

  /**
   * Enum describing available crypto encryption algorithms
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655796}
   *
   * @enum {string}
   *
   * @since 2015.2
   */
  export enum EncryptionAlg {
    AES = 'AES',
  }

  /**
   * Enum describing available padding options
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655564}
   *
   * @enum {string}
   *
   * @since 2015.2
   */
  export enum Padding {
    NoPadding = 'NoPadding',
    PKCS5Padding = 'PKCS5Padding',
  }

  /**
   * Returns a new instance of SecretKey used for hmac, cipher and decipher
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620976}
   *
   * @protected
   * @classdesc
   *
   * @constructor
   *
   * @since 2015.2
   */
  export interface SecretKey {

    /**
     * The GUID associated with the secret key
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455843444823}
     *
     * @type {string}
     *
     * @since 2015.2
     */
    guid: string;

    /**
     * The encoding used for the clear text value of the secret key
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458478637694}
     *
     * @type {encode.Encoding}
     *
     * @since 2015.2
     */
    encoding: encode.Encoding;
  }

  /**
   * Encapsulates a cipher payload
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358619238}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface CipherPayload {

    /**
     * Initialization vector for the cipher payload
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46186462402}
     *
     * @type {string}
     *
     * @since 2015.2
     */
    iv: string;

    /**
     * The result of the ciphering process
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455083557128}
     *
     * @type {string}
     *
     * @since 2015.2
     */
    ciphertext: string;
  }

  /**
   * Encapsulates a hash
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620745}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Hash {

    /**
     * Method used to update clear data with the encoding specified
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453249145507}
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {encode.Encoding} [options.inputEncoding=encode.Encoding.UTF_8]
     * @return {void}
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding,
    }): void;

    /**
     * Calculates the digest of the data to be hashed
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456370178222}
     *
     * @param {Object} options
     * @param {encode.Encoding} [options.outputEncoding=encode.Encoding.HEX]
     * @return {string}
     *
     * @since 2015.2
     */
    digest(options: {
      outputEncoding?: encode.Encoding,
    }): string;
  }

  /**
   * Encapsulates an hmac
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620874}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Hmac {

    /**
     * Method used to update the clear data with the encoding specified
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457765136718}
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {encode.Encoding} [options.inputEncoding=encode.Encoding.UTF_8]
     * @return {void}
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding,
    }): void;

    /**
     *
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459978271483}
     *
     * @param {Object} options
     * @param {encode.Encoding} [options.outputEncoding=encode.Encoding.HEX]
     * @return {string}
     *
     * @since 2015.2
     */
    digest(options: {
      outputEncoding?: encode.Encoding,
    }): string;
  }

  /**
   * Encapsulates a cipher
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358574527}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Cipher {

    /**
     * Method used to update the clear data with the specified encoding
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454552856444}
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {encode.Encoding} [options.inputEncoding=encode.Encoding.UTF_8]
     * @return {void}
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding,
    }): void;

    /**
     * Method used to return the cipher data
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454422851562}
     *
     * @param {Object} options
     * @param {encode.Encoding} [options.outputEncoding=encode.Encoding.HEX]
     * @return {CipherPayload}
     *
     * @since 2015.2
     */
    final(options: {
      outputEncoding?: encode.Encoding,
    }): CipherPayload;
  }

  /**
   * Encapsulates a decipher
   * This object has methods that decrypt
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620478}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Decipher {

    /**
     * Method used to update cipher data with the specified encoding
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453919616698}
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {encode.Encoding} [options.inputEncoding=encode.Encoding.HEX]
     * @return {void}
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding,
    }): void;

    /**
     * Method used to return the clear data
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458502441405}
     *
     * @param {Object} options
     * @param {encode.Encoding} [options.outputEncoding=encode.Encoding.UTF_8]
     * @return {string}
     *
     * @since 2015.2
     */
    final(options: {
      outputEncoding?: encode.Encoding,
    }): string;
  }
}
