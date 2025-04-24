/// <reference path="./encode.d.ts" />

/**
 * SuiteScript crypto module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358549582}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358549582.html}
 *
 * @module N/crypto
 * @NApiVersion 2.x
 */
interface crypto_ {

  /**
   * Method used to create a new crypto_.SecretKey object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358653390}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358653390.html}
   *
   * @param options
   * @param options.guid
   * @param [options.encoding=encode.Encoding.HEX]
   *
   * @since 2015.2
   */
  createSecretKey(options: {
    guid: string,
    encoding?: encode.Encoding | `${encode.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Method used to create a new crypto_.SecretKey object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358653390}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358653390.html}
   *
   * @param options
   * @param options.secret
   * @param [options.encoding=encode.Encoding.HEX]
   *
   * @since 2015.2
   */
  createSecretKey(options: {
    secret: string,
    encoding?: encode.Encoding | `${encode.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Method used to create a crypto.Hash object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647370}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358647370.html}
   *
   * @param options
   * @param options.algorithm
   *
   * @since 2015.2
   */
  createHash(options: {
    algorithm: crypto_.HashAlg | `${crypto_.HashAlg}`,
  }): crypto_.Hash;

  /**
   * Method used to create a crypto.Hmac object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647613}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358647613.html}
   *
   * @param options
   * @param options.algorithm
   * @param options.key
   *
   * @since 2015.2
   */
  createHmac(options: {
    algorithm: crypto_.HashAlg | `${crypto_.HashAlg}`,
    key: crypto_.SecretKey,
  }): crypto_.Hmac;

  /**
   * Method used to create and return a crypto.EncryptionAlg object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358650498}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358650498.html}
   *
   * @param options
   * @param options.algorithm
   * @param options.key
   * @param [options.padding=crypto_.Padding.PKCS5Padding]
   *
   * @since 2015.2
   */
  createCipher(options: {
    algorithm: crypto_.EncryptionAlg | `${crypto_.EncryptionAlg}`,
    key: crypto_.SecretKey,
    padding?: crypto_.Padding | `${crypto_.Padding}`,
  }): crypto_.Cipher;

  /**
   * Method used to create a crypto.Decipher object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358650886}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358650886.html}
   *
   * @param options
   * @param options.algorithm
   * @param options.key
   * @param [options.padding=crypto_.Padding.PKCS5Padding]
   * @param options.iv
   *
   * @since 2015.2
   */
  createDecipher(options: {
    algorithm: crypto_.EncryptionAlg | `${crypto_.EncryptionAlg}`,
    key: crypto_.SecretKey,
    padding?: crypto_.Padding | `${crypto_.Padding}`,
    iv: string,
  }): crypto_.Decipher;
}

declare namespace crypto_ {

  /**
   * Enum describing available crypto hashing algorithms
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655346}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358655346.html}
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
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655796}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358655796.html}
   *
   * @since 2015.2
   */
  export enum EncryptionAlg {
    AES = 'AES',
  }

  /**
   * Enum describing available padding options
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655564}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358655564.html}
   *
   * @since 2015.2
   */
  export enum Padding {
    NoPadding = 'NoPadding',
    PKCS5Padding = 'PKCS5Padding',
  }

  /**
   * Returns a new instance of SecretKey used for hmac, cipher and decipher
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620976}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620976.html}
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
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455843444823}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455843444823.html}
     *
     * @since 2015.2
     */
    guid: string;

    /**
     * The encoding used for the clear text value of the secret key
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458478637694}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458478637694.html}
     *
     * @since 2015.2
     */
    encoding: encode.Encoding | `${encode.Encoding}`;
  }

  /**
   * Encapsulates a cipher payload
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358619238}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358619238.html}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface CipherPayload {

    /**
     * Initialization vector for the cipher payload
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46186462402}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46186462402.html}
     *
     * @since 2015.2
     */
    iv: string;

    /**
     * The result of the ciphering process
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455083557128}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455083557128.html}
     *
     * @since 2015.2
     */
    ciphertext: string;
  }

  /**
   * Encapsulates a hash
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620745}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620745.html}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Hash {

    /**
     * Method used to update clear data with the encoding specified
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453249145507}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453249145507.html}
     *
     * @param options
     * @param options.input
     * @param [options.inputEncoding=encode.Encoding.UTF_8]
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Calculates the digest of the data to be hashed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456370178222}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456370178222.html}
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.HEX]
     *
     * @since 2015.2
     */
    digest(options: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): string;
  }

  /**
   * Encapsulates an hmac
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620874}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620874.html}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Hmac {

    /**
     * Method used to update the clear data with the encoding specified
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457765136718}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457765136718.html}
     *
     * @param options
     * @param options.input
     * @param [options.inputEncoding=encode.Encoding.UTF_8]
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     *
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459978271483}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459978271483.html}
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.HEX]
     *
     * @since 2015.2
     */
    digest(options: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): string;
  }

  /**
   * Encapsulates a cipher
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358574527}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358574527.html}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Cipher {

    /**
     * Method used to update the clear data with the specified encoding
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454552856444}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454552856444.html}
     *
     * @param options
     * @param options.input
     * @param [options.inputEncoding=encode.Encoding.UTF_8]
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Method used to return the cipher data
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454422851562}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454422851562.html}
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.HEX]
     *
     * @since 2015.2
     */
    final(options: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): CipherPayload;
  }

  /**
   * Encapsulates a decipher
   * This object has methods that decrypt
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620478}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620478.html}
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Decipher {

    /**
     * Method used to update cipher data with the specified encoding
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453919616698}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453919616698.html}
     *
     * @param options
     * @param options.input
     * @param [options.inputEncoding=encode.Encoding.HEX]
     *
     * @since 2015.2
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Method used to return the clear data
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458502441405}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458502441405.html}
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.UTF_8]
     *
     * @since 2015.2
     */
    final(options: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): string;
  }
}
