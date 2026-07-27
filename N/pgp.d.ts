/// <reference path="./error.d.ts" />
/// <reference path="./crypto/certificate.d.ts" />

/**
 * SuiteScript pgp module
 *
 * Enables secure messaging, file encryption, and document signing based on the
 * OpenPGP standard. You cannot generate, modify, or inspect PGP keys with this
 * module — keys must be generated externally (GnuPG, OpenPGP, etc.). Keys used
 * with `createSigner` must be stored in Secrets Management and loaded via
 * `loadKeyFromSecret`; keys used only for encryption/decryption may be supplied
 * inline via `parseKey`.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_5095832176}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_5095832176.html}
 *
 * @module N/pgp
 * @NApiVersion 2.x
 *
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
   * @since 2024.2
   *
   * @param options
   * @param [options.allowInsecureDecryptionWithSigningKeys = false] - Enables decryption that is not secured with signing keys on configuration objects
   * @param [options.allowMessagesWithoutIntegrityProtection = false] - Allows messages without integrity protection on configuration objects
   * @param [options.useRelaxedSignatureParsing = false] - Allows relaxed signature parsing for configuration objects
   * @return General configuration options that can be used for message decryption
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
   * @since 2024.2
   *
   * @param options
   * @param options.content - Content of the message
   * @param [options.filename = ''] - File name if the message represents a file, empty string otherwise
   * @param [options.date = new Date()] - Date of the message or modification date of the file. Defaults to the current date
   * @param [options.format] - Literal data packet type. Defaults to `Format.UTF8` when content is a string, `Format.BINARY` otherwise
   * @return Message data
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` or `options.content` is missing
   */
  createMessageData(options: {
    content: string,
    filename?: string,
    date?: Date,
    format?: pgp.Format | `${pgp.Format}`,
  }): pgp.MessageData;

  /**
   * Creates a `certificate.Signer` object for signing plain strings. If the given PGP key contains multiple valid signing sub keys, the most recently added will be used. This behavior is consistent with the `MessageData.encrypt(options)` method.
   *
   * The key must have been loaded with `pgp.loadKeyFromSecret(options)`; a key
   * produced by `pgp.parseKey(options)` is rejected with
   * `PGP_KEY_IN_SECRET_ENFORCED`. The hash algorithm must be one of
   * `certificate.HashAlg` excluding `SHA1` (`SHA1` is rejected as insecure).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113742}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113742.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2024.2
   *
   * @param options
   * @param options.key - PGP key to use for signing. Must be loaded from a secret via `loadKeyFromSecret`
   * @param options.algorithm - Signing hash algorithm to use. One of `certificate.HashAlg`, excluding `SHA1`. Case-sensitive
   * @return A created signature (signer) for plain strings
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.key`, or `options.algorithm` is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.key` is not a `pgp.Key`, or `options.algorithm` is not a recognized `certificate.HashAlg` value
   * @throws {error.SuiteScriptError} HASHING_ALGORITHM_IS_NOT_SECURE If `options.algorithm` is `SHA1`
   * @throws {error.SuiteScriptError} PGP_KEY_IN_SECRET_ENFORCED If `options.key` was not loaded from a secret (e.g. it came from `parseKey`)
   * @throws {error.SuiteScriptError} PGP_NO_SIGNING_KEY_FOUND_IN_KEY_PARAM_1 If no valid signing (sub)key is found in `options.key`
   * @throws {error.SuiteScriptError} UNSUPPORTED_KEY_ALGORITHM If `options.key` uses a key algorithm NetSuite does not support for signing (e.g. Ed25519 — message reads `Unsupported key algorithm: Ed25519`). RSA keys are supported
   * @throws {error.SuiteScriptError} UNSUPPORTED_COMBINATION_OF_KEY_AND_HASH_ALGORITHMS If the key's signing algorithm is not compatible with the given hash algorithm (documented; not reproduced at runtime — RSA and ECDSA P-256 keys both accept SHA256/SHA384/SHA512, and Ed25519 is rejected earlier by `UNSUPPORTED_KEY_ALGORITHM`, so no tried key/hash pairing triggers this)
   */
  createSigner(options: {
    key: pgp.Key,
    algorithm: Exclude<certificate.HashAlg, certificate.HashAlg.SHA1> | Exclude<`${certificate.HashAlg}`, 'SHA1'>,
  }): certificate.Signer;

  /**
   * Creates an empty verification object. Pass it to `Message.decrypt(options)` as `options.verification` to collect signature-verification results instead of having verification failures throw.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113648}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113648.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2024.2
   *
   * @return Verification results
   */
  createVerification(): pgp.Verification;

  /**
   * Loads key contents that are securely stored in a secret. This is the only
   * key-loading method whose result is accepted by `pgp.createSigner(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923112727}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923112727.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2024.2
   *
   * @param options
   * @param options.secret - Secret that contains a PGP key in ASCII armored format
   * @param [options.password] - Secret that contains a password to unlock the key. Applicable for private keys
   * @return Multiple cryptographic keys and metadata
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` or `options.secret` is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.secret` or `options.password` is not a `{scriptId}` object
   * @throws {error.SuiteScriptError} REFERENCED_SECRET_IS_NOT_AVAILABLE If `options.secret`/`options.password` references a non-existent secret or you lack permission
   * @throws {error.SuiteScriptError} PGP_NONSTANDARD_KEY_DOES_NOT_COMPLY_WITH_PGP_KEY_FORMAT If parsing of the key fails
   * @throws {error.SuiteScriptError} PGP_YOU_CANNOT_PROVIDE_PASSWORD_FOR_A_PUBLIC_KEY If you provide a password but the key is public
   * @throws {error.SuiteScriptError} PGP_FAILED_TO_READ_KEY__INVALID_KEY_PASSWORD If the provided password is wrong
   * @throws {error.SuiteScriptError} PGP_FAILED_TO_READ_KEY__THIS_KEY_MIGHT_BE_PASSWORD_PROTECTED If no password is provided but the private key is password protected
   */
  loadKeyFromSecret(options: {
    secret: { scriptId: string },
    password?: { scriptId: string },
  }): pgp.Key;

  /**
   * Parses an existing PGP key supplied inline as an ASCII armored string. The
   * resulting key works for encryption and decryption but is NOT accepted by
   * `pgp.createSigner(options)` — use `pgp.loadKeyFromSecret(options)` for
   * signing keys. Providing a password for a private key that is not actually
   * password protected is silently accepted (no error).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113901}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113901.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2024.2
   *
   * @param options
   * @param options.value - ASCII armored key
   * @param [options.password] - Password to unlock the key. Applicable for private keys
   * @return Multiple cryptographic keys and metadata
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` or `options.value` is missing
   * @throws {error.SuiteScriptError} PGP_NONSTANDARD_KEY_DOES_NOT_COMPLY_WITH_PGP_KEY_FORMAT If parsing of the key fails
   * @throws {error.SuiteScriptError} PGP_YOU_CANNOT_PROVIDE_PASSWORD_FOR_A_PUBLIC_KEY If you provide a password but the key is public
   * @throws {error.SuiteScriptError} PGP_FAILED_TO_READ_KEY__INVALID_KEY_PASSWORD If the provided password is wrong
   * @throws {error.SuiteScriptError} PGP_FAILED_TO_READ_KEY__THIS_KEY_MIGHT_BE_PASSWORD_PROTECTED If no password is provided but the private key is password protected
   */
  parseKey(options: {
    value: string,
    password?: string,
  }): pgp.Key;

  /**
   * Parses a PGP message from its ASCII armored representation.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923113424}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923113424.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2024.2
   *
   * @param options
   * @param options.value - ASCII armored representation of the message
   * @return Processed PGP data
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` or `options.value` is missing
   */
  parseMessage(options: {
    value: string,
  }): pgp.Message;
}

declare namespace pgp {

  /**
   * Enum that holds the values for available compression algorithms. Use this enum to set the value of the `options.compressionAlgorithm` parameter of the `MessageData.encrypt(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923112620}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923112620.html}
   *
   * @since 2024.2
   */
  export enum CompressionAlgorithm {
    NONE = 'NONE',
    ZIP = 'ZIP',
    ZLIB = 'ZLIB',
    BZIP2 = 'BZIP2',
  }

  /**
   * Enum that holds the values for literal data packet type. Use this enum to set the value of the `options.format` parameter of the `pgp.createMessageData(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923111016}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923111016.html}
   *
   * @since 2024.2
   */
  export enum Format {
    UTF8 = 'UTF8',
    BINARY = 'BINARY',
    TEXT = 'TEXT',
  }

  /**
   * Message type that specifies how a message is processed. Returned by the
   * `Message.type` property. A message produced by `MessageData.toMessage()` is
   * `PLAIN`; one produced by `MessageData.encrypt(options)` is `ENCRYPTED` (even
   * when signing keys are also supplied). These are the only two values the
   * module can produce — there is no API path that yields a signed-but-unencrypted
   * `Message` (signing produces a `certificate.Signer` over strings, not a
   * `Message`), so no other `type` value is reachable.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @since 2024.2
   */
  export enum MessageType {
    PLAIN = 'PLAIN',
    ENCRYPTED = 'ENCRYPTED',
  }

  /**
   * Stores general configuration options that can be used for message decryption. Use the `pgp.createConfig(options)` method to create a new configuration object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921021222}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921021222.html}
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
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly allowInsecureDecryptionWithSigningKeys: boolean;

    /**
     * Allows messages without integrity protection
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921032219}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921032219.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly allowMessagesWithoutIntegrityProtection: boolean;

    /**
     * Allows relaxed signature parsing for configuration objects
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921032557}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921032557.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly useRelaxedSignatureParsing: boolean;
  }

  /**
   * Stores multiple cryptographic keys and metadata. You can use this object in the `Message.decrypt(options)` and `MessageData.encrypt(options)` methods. Created by `pgp.parseKey(options)` or `pgp.loadKeyFromSecret(options)`.
   *
   * The object exposes no documented or enumerable public members; it is an
   * opaque handle whose internal key material is not accessible from script.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0921033205}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0921033205.html}
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
     * @since 2024.2
     */
    asHex(): string;
  }

  /**
   * Stores processed PGP data. Responsible for enabling message serialization and providing a set of single-step processors to convert to a readable message. Use `MessageData.toMessage()` and `MessageData.encrypt(options)` to create a Message object, or `pgp.parseMessage(options)` to parse one from armored text.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923090947}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923090947.html}
   * @constructor
   *
   * @since 2024.2
   */
  export interface Message {

    /**
     * Message type that specifies how a message is processed. Enables you to pick the appropriate method to process a message. A message created by `MessageData.toMessage()` is `PLAIN`; one created by `MessageData.encrypt(options)` is `ENCRYPTED`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923091633}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923091633.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly type: MessageType | `${MessageType}`;

    /**
     * Converts a message to ASCII armored format
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923091739}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923091739.html}
     *
     * @governance none
     * @restriction Server-side scripts only
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
     * @since 2024.2
     *
     * @return The message contents as a `MessageData` object
     *
     * @throws {error.SuiteScriptError} PGP_EXPECTED_UNENCRYPTED_MESSAGE If the message is encrypted
     */
    toMessageData(): MessageData;

    /**
     * Decrypts a message and optionally verifies the signatures
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923092155}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923092155.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2024.2
     *
     * @param options
     * @param options.decryptionKeys - Uses one or more keys to attempt message decryption
     * @param [options.verificationKeys = []] - Uses zero or more keys to attempt message signature verification. If you do not provide a verification key, the message's signature (if any) is ignored. If you do provide a verification key, at least one signature must be verifiable by one of the provided keys, otherwise an error is thrown. An expired key works if the signature was made before the expiration
     * @param [options.verification = null] - An empty verification object created by `pgp.createVerification()`. If you provide a value, the verification results are written into it instead of throwing on an invalid signature
     * @param [options.supressVerificationErrors = false] - If set to true, verification errors are not thrown. Implicitly set to true when the `verification` parameter is provided. NOTE: the runtime parameter name is genuinely misspelled (`supress`, one `p`); the correctly-spelled `suppressVerificationErrors` is rejected as `UNKNOWN_PARAM`
     * @param [options.config] - The configuration. Defaults to `pgp.createConfig({})` when omitted
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.decryptionKeys` is missing
     * @throws {error.SuiteScriptError} PGP_EXPECTED_ENCRYPTED_MESSAGE If the message is not encrypted
     * @throws {error.SuiteScriptError} PGP_NO_MATCHING_DECRYPTION_KEY_ANALYSIS_1 If no matching decryption key is found
     * @throws {error.SuiteScriptError} PGP_MESSAGE_IS_NOT_INTEGRITY_PROTECTED If the message is not integrity protected
     * @throws {error.SuiteScriptError} PGP_INTEGRITY_VERIFICATION_FAILED If the message's integrity protection (MDC) check fails because the ciphertext was altered. Note: `config.allowMessagesWithoutIntegrityProtection` does NOT suppress this — that flag only permits messages that lack integrity protection entirely, not ones whose present MDC check fails
     * @throws {error.SuiteScriptError} PGP_MESSAGE_DOES_NOT_HAVE_SIGNATURE If verification keys are provided but the message is not signed
     * @throws {error.SuiteScriptError} PGP_VERIFICATION_FAILED_1 If none of the signatures could be verified using the provided verification keys
     */
    decrypt(options: {
      decryptionKeys: Key | Key[],
      verificationKeys?: Key | Key[],
      verification?: Verification,
      supressVerificationErrors?: boolean,
      config?: Config,
    }): MessageData;
  }

  /**
   * Stores message data. Use the `pgp.createMessageData(options)` method to create a message data object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923092625}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923092625.html}
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
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly filename: string;

    /**
     * Date of a message or modification date of the file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093419}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093419.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly date: Date;

    /**
     * Literal data packet type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093507}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093507.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly format: Format;

    /**
     * Extracts the contents of the message as text
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923093601}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923093601.html}
     *
     * @governance none
     * @restriction Server-side scripts only
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
     * @since 2024.2
     *
     * @param options
     * @param options.encryptionKeys - One or more keys used to encrypt a message. If a key contains multiple valid encryption (sub)keys, the most recent key added is used
     * @param [options.signingKeys = []] - Zero or more keys used for signing. If a key contains multiple valid signing (sub)keys, the most recent key added is used
     * @param [options.compressionAlgorithm = CompressionAlgorithm.ZLIB] - The compression algorithm to use
     * @return An encrypted (and optionally signed) message
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.encryptionKeys` is missing
     * @throws {error.SuiteScriptError} PGP_NO_ENCRYPTION_KEY_FOUND_IN_KEY_PARAM_1 If no valid encryption (sub)key is found in one of the provided keys
     * @throws {error.SuiteScriptError} PGP_NO_SIGNING_KEY_FOUND_IN_KEY_PARAM_1 If no valid signing (sub)key is found in one of the provided keys (e.g. a public key was passed as a signing key)
     */
    encrypt(options: {
      encryptionKeys: Key | Key[],
      signingKeys?: Key | Key[],
      compressionAlgorithm?: CompressionAlgorithm | `${CompressionAlgorithm}`,
    }): Message;
  }

  /**
   * Stores verification results. Use the `pgp.createVerification()` method to create a Verification object, then pass it to `Message.decrypt(options)` as `options.verification`. The properties remain `null` until decryption populates them.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923094518}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923094518.html}
   * @constructor
   *
   * @since 2024.2
   */
  export interface Verification {

    /**
     * Indicates whether the message verification was successful. `null` on a freshly-created verification object; set to a boolean after `Message.decrypt(options)` populates it.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923094610}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923094610.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly verified: null | boolean;

    /**
     * List of individual verifications, one per each signature. `null` on a freshly-created verification object; populated after `Message.decrypt(options)`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923095811}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923095811.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly signatures: null | VerificationSignature[];
  }

  /**
   * Stores a verification result for a single signature
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923101555}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923101555.html}
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
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly keyId: KeyId;

    /**
     * Date when the message was signed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923103943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923103943.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly dateSigned: Date;

    /**
     * Indicates whether verification was successful
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923105015}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923105015.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly verified: boolean;

    /**
     * List of problems for more fine-grained decision making
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0923105152}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0923105152.html}
     *
     * @since 2024.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY If setting the property is attempted
     */
    readonly problems: string[];
  }
}
