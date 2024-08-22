/// <reference path="./error.d.ts" />
/// <reference path="./crypto/certificate.d.ts" />

/**
 * SuiteScript pgp module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_5095832176}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_5095832176.html}
 *
 * @module N/pgp
 * @NApiVersion 2.x
 * @restriction Server-side scripts only
 */
interface pgp {

  /**
   * Creates a new `pgp.Config` object. A configuration object stores general configuration options that can be used for message decryption.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113524}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113524.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @param options
   * @param [options.allowInsecureDecryptionWithSigningKeys = false] - Enables decryption that is not secured with signing keys on configuration objects
   * @param [options.allowMessagesWithoutIntegrityProtection = false] - Allows messages without integrity protection on configuration objects
   * @param [options.useRelaxedSignatureParsing = false] - Allows relaxed signature parsing for configuration objects
   *
   * @return General configuration options that can be used for message decryption
   *
   * @since 2024.2
   */
  createConfig(options: {
    allowInsecureDecryptionWithSigningKeys?: boolean,
    allowMessagesWithoutIntegrityProtection?: boolean,
    useRelaxedSignatureParsing?: boolean,
  }): pgp.Config;

  /**
   * Creates a new `pgp.MessageData` object. A message data object stores message content with metadata.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113223}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113223.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.content - Content of the message
   * @param [options.filename] - File name if the message represents a file, empty string otherwise
   * @param [options.date] - Date of the message or modification date of the file. Defaults to the current date
   * @param [options.format = Format.UTF8 | Format.BINARY] - Literal data packet type. Default is Format.UTF8 if content is a string or Format.BINARY otherwise
   *
   * @return Message data
   *
   * @since 2024.2
   */
  createMessageData(options: {
    content: string,
    filename?: string,
    date?: Date,
    format?: pgp.Format,
  }): pgp.MessageData;

  /**
   * Creates a `certificate.Signer` object for signing plain strings. If the given PGP key contains multiple valid signing sub keys, the most recently added will be used. This behavior is consistent with `MessageData.encrypt(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113742}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113742.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.key - PGP key to use for signing
   * @param options.algorithm - Signing hash algorithm to use
   *
   * @return A created signature (signer) for plain strings
   *
   * @since 2024.2
   */
  createSigner(options: {
    key: pgp.Key,
    algorithm: string,
  }): certificate.Signer;

  /**
   * Creates an empty verification object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113648}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113648.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @return Verification results
   *
   * @since 2024.2
   */
  createVerification(): pgp.Verification;

  /**
   * Loads a key contents that are securely stored in a secret
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923112727}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923112727.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.secret - Secret that contains a PGP key in ASCII armored format
   * @param [options.password] - Secret that contains a password to unlock the key. Applicable for private keys
   *
   * @return Multiple cryptographic keys and metadata
   *
   * @throws {error.SuiteScriptError} REFERENCED_SECRET_IS_NOT_AVAILABLE The secret/password parameter references a non-existing secret or you lack permission
   * @throws {error.SuiteScriptError} PGP_NONSTANDARD_KEY_DOES_NOT_COMPLY_WITH_PGP_KEY_FORMAT if parsing of the key fails
   * @throws {error.SuiteScriptError} PGP_YOU_CANNOT_PROVIDE_PASSWORD_FOR_A_PUBLIC_KEY if you provide a password, but the key is public
   * @throws {error.SuiteScriptError} PGP_INVALID_KEY_PASSWORD if you provide a password, but it is wrong or the private key is not password protected
   * @throws {error.SuiteScriptError} PGP_THIS_KEY_IS_PASSWORD_PROTECTED if you do not provide any password, but the private key is password protected
   *
   * @since 2024.2
   */
  loadKeyFromSecret(options: {
    secret: { scriptId: string },
    password?: { scriptId: string },
  }): pgp.Key;

  /**
   * Parses an existing PGP key. Use `pgp.loadKeyFromSecret(options)` to load private keys.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113901}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113901.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.value - ASCII armored key
   * @param [options.password] - Password to unlock the key. Applicable for private keys
   *
   * @return Multiple cryptographic keys and metadata
   *
   * @throws {error.SuiteScriptError} PGP_NONSTANDARD_KEY_DOES_NOT_COMPLY_WITH_PGP_KEY_FORMAT if parsing of the key fails
   * @throws {error.SuiteScriptError} PGP_YOU_CANNOT_PROVIDE_PASSWORD_FOR_A_PUBLIC_KEY if you provide a password when the key is public
   * @throws {error.SuiteScriptError} PGP_INVALID_KEY_PASSWORD if you provide a wrong password or the private key is not password protected
   * @throws {error.SuiteScriptError} PGP_THIS_KEY_IS_PASSWORD_PROTECTED if you don't provide any password, but the private key is password protected
   *
   * @since 2024.2
   */
  parseKey(options: {
    value: string,
    password?: string,
  }): pgp.Key;

  /**
   * Parses a PGP message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113424}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113424.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.value - ASCII armored representation of the message
   *
   * @return Processed PGP data
   *
   * @since 2024.2
   */
  parseMessage(options: {
    value: string,
  }): pgp.Message;
}

declare namespace pgp {

  /**
   * Enum that holds the values for available compression algorithms
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923112620}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923112620.html}
   *
   * @since 2024.2
   */
  export enum CompressionAlgorithm {
    ZLIB = 'ZLIB',
  }

  /**
   * Enum that holds the values for literal data packet type
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923111016}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923111016.html}
   *
   * @since 2024.2
   */
  export enum Format {
    UTF8 = 'UTF8',
    BINARY = 'BINARY',
  }

  /**
   * Stores general configuration options that can be used for message decryption. Use the `pgp.createConfig(options)` method to create a new configuration object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921021222}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921021222.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface Config {

    /**
     * Enables decryption that is not secured with signing keys
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921031929}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921031929.html}
     *
     * @restriction RESTlet scripts only
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly allowInsecureDecryptionWithSigningKeys: boolean;

    /**
     * Allows messages without integrity protection
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921032219}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921032219.html}
     *
     * @restriction RESTlet scripts only
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly allowMessagesWithoutIntegrityProtection: boolean;

    /**
     * Allows relaxed signature parsing for configuration objects
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921032557}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921032557.html}
     *
     * @restriction RESTlet scripts only
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly useRelaxedSignatureParsing: boolean;
  }

  /**
   * Stores multiple cryptographic keys and metadata. You can use this object in the `Message.decrypt(options)` and `MessageData.encrypt(options)` methods.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921033205}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921033205.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface Key {

  }

  /**
   * Stores an octet scalar that identifies a (sub)key. This object is used for verification signatures. For more information, see `VerificationSignature.keyId`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921033457}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921033457.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface KeyId {

    /**
     * Returns the Key ID as a hexadecimal string
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921033647}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921033647.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @since 2024.2
     */
    asHex(): string;
  }

  /**
   * Stores processed PGP data. Responsible for enabling message serialization and providing a set of single-step processors to covert to a readable message. Use the MessageData.toMessage() and MessageData.encrypt(options) to create a Message object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923090947}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923090947.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface Message {

    /**
     * Message type that specifies how a message is processed. Enables you to pick the appropriate method to process a message.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923091633}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923091633.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly type: boolean;

    /**
     * Converts a message to ASCII armored format
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923091739}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923091739.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @since 2024.2
     */
    asArmored(): string;

    /**
     * Converts a `pgp.Message` object to message data without any processing. This method only works if the message is not encrypted.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923092023}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923092023.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @throws {error.SuiteScriptError} PGP_EXPECTED_UNENCRYPTED_MESSAGE if the message is encrypted
     *
     * @since 2024.2
     */
    toMessageData(): string;

    /**
     * Decrypts a message and optionally verifies the signatures
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923092155}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923092155.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.decryptionKeys - Uses one or more keys to attempt message decryption
     * @param [options.verificationKeys = []] - Uses zero or more keys to attempt message signature verification. If you do not provide a verification key, the message's signature (if any) will be ignored. If you do provide a verification key, at least one signature must be verifiable by one of the provided keys, otherwise an error will be thrown. An expired key works if the signature was made before the expiration.
     * @param [options.verification = null] - An empty verification object. If you provide a value for this parameter, the verification results will be flushed instead of throwing an error for invalid signature
     * @param [options.supressVerificationErrors = false] - If set to true, the verification errors will not be thrown. This value is implicitly set to true when the verification parameter is provided.
     * @param options.config - The configuration
     *
     * @throws {error.SuiteScriptError} PGP_EXPECTED_ENCRYPTED MESSAGE if the message is not encrypted
     * @throws {error.SuiteScriptError} PGP_NO_MATCHING_DECRYPTION_KEY_ANALYSIS_1 if no matching decryption key was found
     * @throws {error.SuiteScriptError} PGP_MESSAGE_IS_NOT_INTEGRITY_PROTECTED if the message is not integrity protected
     * @throws {error.SuiteScriptError} PGP_INTEGRITY_VERIFICATION_FAILED if the message is corrupted
     * @throws {error.SuiteScriptError} PGP_VERIFICATION_FAILED_NO_SIGNATURE if the message is not signed, but verification keys were provided
     * @throws {error.SuiteScriptError} PGP_VERIFICATION_FAILED_1 if none of the signatures could be verified using the provided verification keys
     *
     * @since 2024.2
     */
    decrypt(options: {
      decryptionKeys: Key | Key[],
      verificationKeys?: Key | Key[],
      verification?: Verification,
      supressVerificationErrors?: boolean,
      config: Config,
    }): pgp.MessageData;
  }

  /**
   * Stores message data. Use the `pgp.createMessageData(options)` method to create a message data object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923092625}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923092625.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface MessageData {

    /**
     * The name of a file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093028}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093028.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly filename: string;

    /**
     * Date of a message or modification date of the file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093419}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093419.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly date: Date;

    /**
     * Literal data packet type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093507}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093507.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly format: Format;

    /**
     * Extracts the contents of the message as text
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093601}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093601.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @since 2024.2
     */
    getText(): string;

    /**
     * Creates a message with no signature, compression, or encryption
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093718}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093718.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @since 2024.2
     */
    toMessage(): Message;

    /**
     * Creates an encrypted message that is optionally signed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093832}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093832.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.encryptionKeys - One or more keys used to encrypt a message. If a key contains multiple valid encryption (sub)keys, the most recent key added will be used.
     * @param [options.signingKeys = []] - Zero or more keys used for signing. If a key contains multiple valid signing (sub)keys, the most recent key added will be used.
     * @param [options.compressionAlgorithm = CompressionAlgorithm.ZLIB] - The compression algorithm to use.
     *
     * @throws {error.SuiteScriptError} PGP_NO_ENCRYPTION_KEY_FOUND_IN_KEY_PARAM_1 if no valid encryption (sub)key was found in one of the provided keys
     * @throws {error.SuiteScriptError} PGP_NO_SIGNING_KEY_FOUND_IN_KEY_PARAM_1 if no valid signing (sub)key was found in one of the provided keys
     *
     * @since 2024.2
     */
    encrypt(options: {
      encryptionKeys: Key | Key[],
      signingKeys?: Key | Key[],
      compressionAlgorithm?: CompressionAlgorithm,
    }): Message;
  }

  /**
   * Stores verification results. Use the `pgp.createVerification()` method to create a Verification object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923094518}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923094518.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface Verification {

    /**
     * Indicates whether the message verification was successful
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923094610}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923094610.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly verified: null | boolean;

    /**
     * List of individual verifications, one per each signature
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923095811}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923095811.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly signatures: null | VerificationSignature[];
  }

  /**
   * Stores a verification result for single signature
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923101555}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923101555.html}
   *
   * @constructor
   *
   * @since 2024.2
   */
  export interface VerificationSignature {

    /**
     * ID of the (sub)key that was used for signing
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923101641}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923101641.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly keyId: KeyId;

    /**
     * Date when the message was signed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923103943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923103943.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly dateSigned: Date;

    /**
     * Indicates whether verification was successful
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923105015}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923105015.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly verified: boolean;

    /**
     * List of problems for more fine-grained decision making
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923105152}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923105152.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY if setting the property is attempted
     *
     * @since 2024.2
     */
    readonly problems: string[];
  }
}