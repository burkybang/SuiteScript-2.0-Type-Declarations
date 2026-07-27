/// <reference path="./encode.d.ts" />
/// <reference path="./record.d.ts" />
/// <reference path="./crypto/certificate.d.ts" />

/**
 * SuiteScript crypto module
 *
 * Provides symmetric cryptography primitives: secret-key creation, hashing, HMAC,
 * and AES encryption / decryption. Also exposes a password-field check that is
 * timing-attack-safe.
 *
 * The module also re-exposes `encode.Encoding` as `crypto.Encoding` and the entire
 * `N/crypto/certificate` sub-module as `crypto.certificate` for convenience —
 * neither is documented in the Help Center but both are stable runtime properties.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358549582}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358549582.html}
 *
 * @module N/crypto
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface crypto_ {

  /**
   * Creates a new SecretKey object referenced by the `guid` of a SuiteScript "secret"
   * field (a CustomList or Custom Record field holding an encrypted value managed by
   * NetSuite). The same SecretKey instance can then be passed to `createHmac`,
   * `createCipher`, or `createDecipher`.
   *
   * Mutually exclusive with the `secret` form — passing both throws
   * `MUTUALLY_EXCLUSIVE_ARGUMENTS`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358653390}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358653390.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.guid GUID of the secret stored in a SuiteScript field
   * @param [options.encoding=encode.Encoding.HEX] Encoding of the underlying secret value
   * @return A new SecretKey bound to the given GUID
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if both `guid` and `secret` are absent (error names `options.guid` when neither is provided)
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If both `guid` and `secret` are provided in the same call
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `encoding` is not one of the `encode.Encoding` values (case-sensitive)
   */
  createSecretKey(options: {
    guid: string,
    encoding?: encode.Encoding | `${encode.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Creates a new SecretKey object referenced by the script ID of an API Secret
   * (a NetSuite-managed encrypted value addressed by `custsecret_*` identifier).
   * The same SecretKey instance can then be passed to `createHmac`, `createCipher`,
   * or `createDecipher`.
   *
   * Mutually exclusive with the `guid` form — passing both throws
   * `MUTUALLY_EXCLUSIVE_ARGUMENTS`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358653390}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358653390.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.secret Script ID of an API Secret (e.g. `custsecret_my_secret`)
   * @param [options.encoding=encode.Encoding.HEX] Encoding of the underlying secret value
   * @return A new SecretKey bound to the given secret
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if both `guid` and `secret` are absent (error names `options.guid` when neither is provided)
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If both `guid` and `secret` are provided in the same call
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `encoding` is not one of the `encode.Encoding` values (case-sensitive)
   */
  createSecretKey(options: {
    secret: string,
    encoding?: encode.Encoding | `${encode.Encoding}`,
  }): crypto_.SecretKey;

  /**
   * Positional form of `createSecretKey`. The single string argument is treated as
   * a GUID or secret script ID interchangeably — both succeed at the constructor
   * stage. Undocumented in the Help Center; present at runtime.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358653390}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358653390.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param guidOrSecret GUID of a SuiteScript secret field, or script ID of an API Secret
   * @param [encoding=encode.Encoding.HEX] Encoding of the underlying secret value
   * @return A new SecretKey
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If no arguments are provided
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `encoding` is not one of the `encode.Encoding` values (case-sensitive)
   */
  createSecretKey(
    guidOrSecret: string,
    encoding?: encode.Encoding | `${encode.Encoding}`,
  ): crypto_.SecretKey;

  /**
   * Creates a `crypto.Hash` object for computing a message digest. Returned Hash is a
   * stateful streaming hasher: call `update` to feed data, `digest` to finalize. The
   * Hash remains usable after `digest`; further `update` / `digest` calls accumulate
   * onto the existing state rather than producing the same digest again.
   *
   * Note: although `HashAlg` only enumerates supported algorithms (SHA256 and SHA512),
   * the runtime enum object additionally contains `SHA1` and `MD5`. Passing either
   * raises `HASHING_ALGORITHM_IS_NO_LONGER_VALID` — the type file excludes them so
   * IntelliSense reflects the usable API.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647370}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358647370.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.algorithm Hashing algorithm — `SHA256` or `SHA512`
   * @return A new Hash bound to the given algorithm
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `algorithm` is missing or null
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `algorithm` is not a recognized HashAlg value (case-sensitive — lowercase `sha256` rejected)
   * @throws {error.SuiteScriptError} HASHING_ALGORITHM_IS_NO_LONGER_VALID If `algorithm` is `SHA1` or `MD5` (both present in the runtime enum but rejected as obsolete)
   */
  createHash(options: {
    algorithm: crypto_.HashAlg | `${crypto_.HashAlg}`,
  }): crypto_.Hash;

  /**
   * Positional form of `createHash`. Undocumented in the Help Center; present at runtime.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647370}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358647370.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param algorithm Hashing algorithm — `SHA256` or `SHA512`
   * @return A new Hash bound to the given algorithm
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `algorithm` is missing or null
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `algorithm` is not a recognized HashAlg value (case-sensitive)
   * @throws {error.SuiteScriptError} HASHING_ALGORITHM_IS_NO_LONGER_VALID If `algorithm` is `SHA1` or `MD5`
   */
  createHash(
    algorithm: crypto_.HashAlg | `${crypto_.HashAlg}`,
  ): crypto_.Hash;

  /**
   * Creates a `crypto.Hmac` object for computing a keyed message digest. Returned
   * Hmac is a stateful streaming hasher: call `update` to feed data, `digest` to
   * compute the keyed digest.
   *
   * The `key` argument must be a `SecretKey` produced by `createSecretKey`. Passing
   * a plain string raises a Java-layer error (surfaced as `UNEXPECTED_ERROR`).
   *
   * Note: the runtime `HashAlg` enum contains `SHA1` and `MD5` in addition to the
   * supported `SHA256` and `SHA512`. Passing `SHA1` or `MD5` raises
   * `HASHING_ALGORITHM_IS_NO_LONGER_VALID`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647613}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358647613.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.algorithm Hashing algorithm — `SHA256` or `SHA512`
   * @param options.key Secret key produced by `createSecretKey`
   * @return A new Hmac
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `algorithm` or `key` is missing or null
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `algorithm` is not a recognized HashAlg value (case-sensitive)
   * @throws {error.SuiteScriptError} HASHING_ALGORITHM_IS_NO_LONGER_VALID If `algorithm` is `SHA1` or `MD5`
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `key` is not a SecretKey instance (Java-layer TypeError leak)
   */
  createHmac(options: {
    algorithm: crypto_.HashAlg | `${crypto_.HashAlg}`,
    key: crypto_.SecretKey,
  }): crypto_.Hmac;

  /**
   * Positional form of `createHmac`. Undocumented in the Help Center; present at runtime.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358647613}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358647613.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param algorithm Hashing algorithm — `SHA256` or `SHA512`
   * @param key Secret key produced by `createSecretKey`
   * @return A new Hmac
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `algorithm` or `key` is missing or null
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `algorithm` is not a recognized HashAlg value (case-sensitive)
   * @throws {error.SuiteScriptError} HASHING_ALGORITHM_IS_NO_LONGER_VALID If `algorithm` is `SHA1` or `MD5`
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `key` is not a SecretKey instance (Java-layer TypeError leak)
   */
  createHmac(
    algorithm: crypto_.HashAlg | `${crypto_.HashAlg}`,
    key: crypto_.SecretKey,
  ): crypto_.Hmac;

  /**
   * Creates a `crypto.Cipher` object for AES encryption. Returned Cipher is a
   * stateful streaming encryptor: call `update` to feed cleartext, `final` to
   * produce the `CipherPayload` (iv + ciphertext).
   *
   * The `key` must be a SecretKey produced by `createSecretKey`. The default
   * padding is PKCS#5.
   *
   * Note: unlike `createHash`, `createSecretKey`, and `createHmac`, this method
   * does NOT accept a positional form — pass options as a single object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358650498}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358650498.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.algorithm Encryption algorithm — currently only `AES`
   * @param options.key Secret key produced by `createSecretKey`
   * @param [options.padding=crypto_.Padding.PKCS5Padding] Block-cipher padding mode
   * @return A new Cipher
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `algorithm` or `key` is missing or null
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `algorithm` or `padding` is not a recognized value (case-sensitive)
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `key` is not a SecretKey instance (Java-layer TypeError leak)
   */
  createCipher(options: {
    algorithm: crypto_.EncryptionAlg | `${crypto_.EncryptionAlg}`,
    key: crypto_.SecretKey,
    padding?: crypto_.Padding | `${crypto_.Padding}`,
  }): crypto_.Cipher;

  /**
   * Creates a `crypto.Decipher` object for AES decryption. Returned Decipher is a
   * stateful streaming decryptor: call `update` to feed ciphertext, `final` to
   * produce the cleartext string.
   *
   * The `iv` argument is required at the type level but is NOT validated at
   * construction — bad values (empty string, non-hex strings) pass through and
   * fail later inside `update` or `final` with `AN_ERROR_OCCURRED_WHILE_DECRYPT_SECRET`.
   *
   * Unlike `createCipher`, this method requires `iv` because the iv produced by
   * the corresponding `Cipher.final` must be supplied here to recover the cleartext.
   *
   * Note: this method does NOT accept a positional form — pass options as a single object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358650886}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358650886.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.algorithm Encryption algorithm — currently only `AES`
   * @param options.key Secret key produced by `createSecretKey`
   * @param [options.padding=crypto_.Padding.PKCS5Padding] Block-cipher padding mode
   * @param options.iv Initialization vector from the matching `Cipher.final` output
   * @return A new Decipher
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `algorithm` or `key` is missing or null (note: `iv` content is NOT pre-validated and a missing `iv` does not throw at construction)
   * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `algorithm` or `padding` is not a recognized value (case-sensitive)
   * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `key` is not a SecretKey instance (Java-layer TypeError leak)
   */
  createDecipher(options: {
    algorithm: crypto_.EncryptionAlg | `${crypto_.EncryptionAlg}`,
    key: crypto_.SecretKey,
    padding?: crypto_.Padding | `${crypto_.Padding}`,
    iv: string,
  }): crypto_.Decipher;

  /**
   * Checks whether a password value matches the encrypted password stored in a
   * NetSuite record's password field. The check is timing-attack-safe: invalid
   * recordType, missing record, or wrong-field-id all return `false` rather than
   * throwing — only missing required arguments raise.
   *
   * Pre-validation order is `recordType` → `fieldId` → `recordId` → `value`; the
   * first missing argument named is the one reported.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_160806904480}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160806904480.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.fieldId ID of the password field
   * @param options.recordId ID of the record that has the password field
   * @param options.recordType Type of record that has the password field
   * @param options.value Input password value to be checked against the stored password
   * @param [options.sublistId] ID of the sublist if the password field is on a sublist line
   * @param [options.line] Zero-based line index of the password field if it is on a sublist line
   * @return `true` if the supplied value matches the stored password; `false` otherwise (including invalid record type or missing record)
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if any of `recordType`, `fieldId`, `recordId`, or `value` is missing or null (reported in that pre-validation order)
   */
  checkPasswordField(options: {
    fieldId: string,
    recordId: number | string,
    recordType: record.Type | `${record.Type}` | record.CustomType | string,
    value: string,
    sublistId?: string,
    line?: number,
  }): boolean;

  /**
   * Alias for `encode.Encoding`. The `N/crypto` module exposes the `N/encode` Encoding
   * enum as a top-level property for convenience. Undocumented in the Help Center;
   * present at runtime as a reference-equal alias (`crypto.Encoding === encode.Encoding`).
   *
   * @since 2015.2
   */
  readonly Encoding: typeof encode.Encoding;

  /**
   * Alias for the `N/crypto/certificate` module. The `N/crypto` module exposes the
   * entire `N/crypto/certificate` API as a top-level property for convenience.
   * Undocumented in the Help Center; present at runtime.
   *
   * @since 2019.1
   */
  readonly certificate: certificate;
}

declare namespace crypto_ {

  /**
   * Enum describing the available hashing algorithms.
   *
   * Note: the runtime enum object additionally contains `SHA1` and `MD5` keys, but
   * passing either to `createHash` or `createHmac` raises
   * `HASHING_ALGORITHM_IS_NO_LONGER_VALID`. This type file excludes the obsolete
   * algorithms so consumers see only the usable values in IntelliSense.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655346}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358655346.html}
   *
   * @since 2015.2
   */
  export enum HashAlg {
    SHA256 = 'SHA256',
    SHA512 = 'SHA512',
  }

  /**
   * Enum describing the available symmetric encryption algorithms.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358655796}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358655796.html}
   *
   * @since 2015.2
   */
  export enum EncryptionAlg {
    AES = 'AES',
  }

  /**
   * Enum describing the available block-cipher padding options.
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
   * Represents a secret key used as input to `createHmac`, `createCipher`, and
   * `createDecipher`. Constructed via `crypto.createSecretKey` in one of two forms:
   * either bound to a SuiteScript secret field's `guid`, or bound to a NetSuite-managed
   * API Secret's script ID via `secret`. Exactly one of `guid` or `secret` is populated
   * depending on how the SecretKey was constructed.
   *
   * All properties are strictly read-only — writes raise `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620976}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620976.html}
   *
   * @since 2015.2
   */
  export interface SecretKey {

    /**
     * The GUID associated with the secret key. Populated when the SecretKey was
     * constructed via the `guid` form of `createSecretKey`; otherwise undefined.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455843444823}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455843444823.html}
     *
     * @since 2015.2
     */
    readonly guid: string;

    /**
     * The encoding of the underlying secret value.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458478637694}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458478637694.html}
     *
     * @since 2015.2
     */
    readonly encoding: encode.Encoding | `${encode.Encoding}`;

    /**
     * The script ID of an API Secret. Populated when the SecretKey was constructed
     * via the `secret` form of `createSecretKey`; otherwise undefined.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161299949029}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161299949029.html}
     *
     * @since 2021.1
     */
    readonly secret: string;

    /**
     * Returns the class-name literal for this object. Undocumented in the Help
     * Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'crypto.SecretKey';

    /**
     * Returns the SecretKey's settable fields as a plain object. The returned shape
     * matches whichever construction form was used: `{guid, encoding}` or
     * `{secret, encoding}`. Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): { guid: string, encoding: encode.Encoding | `${encode.Encoding}` }
      | { secret: string, encoding: encode.Encoding | `${encode.Encoding}` };
  }

  /**
   * Encapsulates a finalized cipher payload — the iv used during encryption plus
   * the resulting ciphertext, both encoded as strings. Returned by `Cipher.final`
   * and consumed by `createDecipher`'s `iv` parameter plus `Decipher.update`'s
   * `input` parameter.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358619238}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358619238.html}
   *
   * @since 2015.2
   */
  export interface CipherPayload {

    /**
     * Initialization vector for the cipher payload, hex-encoded.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46186462402}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46186462402.html}
     *
     * @since 2015.2
     */
    iv: string;

    /**
     * The encrypted output, encoded per the `outputEncoding` passed to `Cipher.final`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455083557128}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455083557128.html}
     *
     * @since 2015.2
     */
    ciphertext: string;
  }

  /**
   * Stateful streaming message-digest computer produced by `crypto.createHash`.
   * Call `update` one or more times to feed data, then `digest` to finalize.
   *
   * The Hash is reusable: calling `update` after `digest` continues accumulating
   * state, and a subsequent `digest` returns a digest over ALL data fed since the
   * Hash was created (not just data fed after the previous `digest`).
   *
   * Note: the runtime object additionally exposes a `toJSON()` method that
   * returns an empty object (`{}`). It is omitted from this type because the
   * empty-return value carries no information and the TypeScript `{}` type
   * incorrectly represents "any non-nullish value" rather than "empty object".
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620745}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620745.html}
   *
   * @since 2015.2
   */
  export interface Hash {

    /**
     * Feeds clear data into the hash. Can be called multiple times; subsequent
     * calls accumulate.
     *
     * `input` is checked by the Java pre-validator's truthy-check: `''`, `false`,
     * `null`, and `undefined` all raise `SSS_MISSING_REQD_ARGUMENT`. Numbers
     * (including `0`) and other truthy non-string values are silently coerced
     * to string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453249145507}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453249145507.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.input Data to feed into the hash
     * @param [options.inputEncoding=encode.Encoding.UTF_8] Encoding of `input`
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `input` is `''`, `false`, `null`, or `undefined`
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `inputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Computes the digest of all data fed into the hash so far and returns it as a
     * string encoded per `outputEncoding`. Does NOT reset the hash — calling
     * `update` afterward continues accumulating onto the same state.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456370178222}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456370178222.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.HEX] Encoding for the returned digest
     * @return The digest, string-encoded per `outputEncoding`
     *
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `outputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     */
    digest(options?: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): string;

    /**
     * Returns the class-name literal for this object. Undocumented in the Help
     * Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'crypto.Hash';
  }

  /**
   * Stateful streaming HMAC computer produced by `crypto.createHmac`. Call `update`
   * one or more times to feed data, then `digest` to compute the keyed digest.
   *
   * Note: the runtime object additionally exposes a `toJSON()` method that
   * returns an empty object (`{}`). It is omitted from this type because the
   * empty-return value carries no information and the TypeScript `{}` type
   * incorrectly represents "any non-nullish value" rather than "empty object".
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620874}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620874.html}
   *
   * @since 2015.2
   */
  export interface Hmac {

    /**
     * Feeds clear data into the HMAC. Can be called multiple times; subsequent
     * calls accumulate.
     *
     * `input` is checked by the Java pre-validator's truthy-check: `''`, `false`,
     * `null`, and `undefined` all raise `SSS_MISSING_REQD_ARGUMENT`. Numbers
     * (including `0`) and other truthy non-string values are silently coerced
     * to string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457765136718}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457765136718.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.input Data to feed into the HMAC
     * @param [options.inputEncoding=encode.Encoding.UTF_8] Encoding of `input`
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `input` is `''`, `false`, `null`, or `undefined`
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `inputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Returns the computed HMAC over all data fed so far, string-encoded per
     * `outputEncoding`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459978271483}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459978271483.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.HEX] Encoding for the returned digest
     * @return The HMAC, string-encoded per `outputEncoding`
     *
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `outputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     */
    digest(options?: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): string;

    /**
     * Returns the class-name literal for this object. Undocumented in the Help
     * Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'crypto.Hmac';
  }

  /**
   * Stateful streaming AES encryptor produced by `crypto.createCipher`. Call `update`
   * one or more times to feed cleartext, then `final` to produce the `CipherPayload`
   * containing the iv and ciphertext.
   *
   * Note: the runtime object additionally exposes a `toJSON()` method that
   * returns an empty object (`{}`). It is omitted from this type because the
   * empty-return value carries no information and the TypeScript `{}` type
   * incorrectly represents "any non-nullish value" rather than "empty object".
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358574527}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358574527.html}
   *
   * @since 2015.2
   */
  export interface Cipher {

    /**
     * Feeds cleartext data into the cipher. Can be called multiple times before
     * `final`.
     *
     * `input` is checked by the Java pre-validator's truthy-check: `''`, `false`,
     * `null`, and `undefined` all raise `SSS_MISSING_REQD_ARGUMENT`. Numbers
     * (including `0`) and other truthy non-string values are silently coerced
     * to string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454552856444}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454552856444.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.input Cleartext data to encrypt
     * @param [options.inputEncoding=encode.Encoding.UTF_8] Encoding of `input`
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `input` is `''`, `false`, `null`, or `undefined`
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `inputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Finalizes the encryption and returns the resulting `CipherPayload` (iv +
     * ciphertext). The iv is generated by the cipher and embedded in the payload;
     * pass that iv to `createDecipher` to recover the cleartext.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454422851562}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454422851562.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.HEX] Encoding for the ciphertext
     * @return The CipherPayload containing the iv and encrypted ciphertext
     *
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `outputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     * @throws {error.SuiteScriptError} AN_ERROR_OCCURRED_WHILE_DECRYPT_SECRET If the SecretKey's underlying secret cannot be resolved at finalization time
     */
    final(options?: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): CipherPayload;

    /**
     * Returns the class-name literal for this object. Undocumented in the Help
     * Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'crypto.Cipher';
  }

  /**
   * Stateful streaming AES decryptor produced by `crypto.createDecipher`. Call
   * `update` one or more times to feed ciphertext, then `final` to produce the
   * cleartext string.
   *
   * Note: the runtime object additionally exposes a `toJSON()` method that
   * returns an empty object (`{}`). It is omitted from this type because the
   * empty-return value carries no information and the TypeScript `{}` type
   * incorrectly represents "any non-nullish value" rather than "empty object".
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358620478}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358620478.html}
   *
   * @since 2015.2
   */
  export interface Decipher {

    /**
     * Feeds ciphertext data into the decipher. Can be called multiple times before
     * `final`.
     *
     * `input` is checked by the Java pre-validator's truthy-check: `''`, `false`,
     * `null`, and `undefined` all raise `SSS_MISSING_REQD_ARGUMENT`. Numbers
     * (including `0`) and other truthy non-string values are silently coerced
     * to string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453919616698}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453919616698.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.input Ciphertext data to decrypt
     * @param [options.inputEncoding=encode.Encoding.HEX] Encoding of `input` (defaults to HEX, NOT UTF_8)
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `input` is `''`, `false`, `null`, or `undefined`
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `inputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     * @throws {error.SuiteScriptError} AN_ERROR_OCCURRED_WHILE_DECRYPT_SECRET If the iv supplied at construction is invalid, or if the SecretKey's underlying secret cannot be resolved
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Finalizes the decryption and returns the resulting cleartext string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458502441405}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458502441405.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param [options.outputEncoding=encode.Encoding.UTF_8] Encoding for the returned cleartext
     * @return The decrypted cleartext, string-encoded per `outputEncoding`
     *
     * @throws {error.SuiteScriptError} INVALID_ENUM_TYPE_VALUE If `outputEncoding` is not a recognized `encode.Encoding` value (case-sensitive)
     * @throws {error.SuiteScriptError} AN_ERROR_OCCURRED_WHILE_DECRYPT_SECRET If the iv supplied at construction is invalid, or if the SecretKey's underlying secret cannot be resolved
     */
    final(options?: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): string;

    /**
     * Returns the class-name literal for this object. Undocumented in the Help
     * Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'crypto.Decipher';
  }
}
