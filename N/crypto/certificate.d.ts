/// <reference path="../encode.d.ts" />
/// <reference path="../error.d.ts" />
/// <reference path="../file.d.ts" />
/// <reference path="../https.d.ts" />
/// <reference path="../xml.d.ts" />

/**
 * SuiteScript crypto/certificate module
 *
 * Sign and verify plain strings or XML documents using digital certificates
 * registered in the NetSuite certificate store. The certificate is identified
 * by its script ID (e.g. `custcertificate_my_cert`) and is loaded from the
 * SuiteApp/Custom certificate area. The actual private key never leaves
 * NetSuite — the script only references the certificate by ID.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543432423}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543432423.html}
 *
 * @module N/crypto/certificate
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface certificate {

  /**
   * Creates a `Signer` for producing digital signatures over plain (non-XML)
   * string content. Pair with `Signer.update()` to feed in the data to sign,
   * then call `Signer.sign()` to produce the signature.
   *
   * The hash algorithm must be one of the `certificate.HashAlg` enum values.
   * Matching is **case-sensitive** — `'sha256'` is rejected as
   * `INVALID_ALGORITHM`.
   *
   * Algorithm support depends on the certificate's encryption algorithm:
   * SHA256, SHA384, and SHA512 work for RSA and ECDSA certificates; only
   * SHA256 works for DSA. SHA1 is exposed at runtime and accepted here, but
   * is cryptographically broken and should not be used for new work — see
   * `signXml` which rejects it outright.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547071865}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547071865.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param options
   * @param options.certId The script ID of the digital certificate in the NetSuite certificate store (e.g. `'custcertificate_my_cert'`). Empty string and `null` are treated as missing.
   * @param options.algorithm The hash algorithm — one of the `certificate.HashAlg` enum values. Case-sensitive.
   * @return A `certificate.Signer` bound to the specified certificate and algorithm.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.certId` (missing, empty string, or null), or `options.algorithm` (missing or null) is absent. Message format: `"certificate.createSigner: Missing a required argument: <name>"`.
   * @throws {error.SuiteScriptError} INVALID_ALGORITHM If `options.algorithm` is not one of the `certificate.HashAlg` enum values. Message format: `"Invalid algorithm: <value>"`.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND If no certificate with the given `certId` exists in the certificate store. Message format: `"Certificate '<certId>' not found"`.
   */
  createSigner(options: {
    certId: string,
    algorithm: certificate.HashAlg | `${certificate.HashAlg}`,
  }): certificate.Signer;

  /**
   * Creates a `Verifier` for verifying digital signatures over plain (non-XML)
   * string content. Pair with `Verifier.update()` to feed in the data that
   * was signed, then call `Verifier.verify()` with the signature to test.
   *
   * The hash algorithm and certificate must match those used to produce the
   * signature. The `algorithm` parameter is **case-sensitive** — `'sha256'`
   * is rejected as `INVALID_ALGORITHM`.
   *
   * SHA1, SHA256, SHA384, and SHA512 are all accepted at runtime; SHA1 is
   * exposed for backward compatibility but is cryptographically broken.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547089078}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547089078.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param options
   * @param options.certId The script ID of the digital certificate in the NetSuite certificate store. Empty string and `null` are treated as missing.
   * @param options.algorithm The hash algorithm — one of the `certificate.HashAlg` enum values. Case-sensitive.
   * @return A `certificate.Verifier` bound to the specified certificate and algorithm.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options`, `options.certId` (missing, empty string, or null), or `options.algorithm` (missing or null) is absent. Message format: `"certificate.createVerifier: Missing a required argument: <name>"`.
   * @throws {error.SuiteScriptError} INVALID_ALGORITHM If `options.algorithm` is not one of the `certificate.HashAlg` enum values. Message format: `"Invalid algorithm: <value>"`.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND If no certificate with the given `certId` exists in the certificate store. Message format: `"Certificate '<certId>' not found"`.
   */
  createVerifier(options: {
    certId: string,
    algorithm: certificate.HashAlg | `${certificate.HashAlg}`,
  }): certificate.Verifier;

  /**
   * Signs an input XML string with the specified certificate, producing a
   * `SignedXml` wrapper that exposes the result as a string, file, or
   * `xml.Document`. The signature is embedded inline using the W3C XML
   * Signature standard (`http://www.w3.org/2000/09/xmldsig#`); the
   * `Signature` element is appended as the last child of `rootTag` by
   * default, or inside `insertionTag` if supplied. Formatting (line breaks,
   * indentation) is stripped from the output.
   *
   * The `algorithm` parameter is **case-sensitive** — `'sha256'` is rejected
   * as `INVALID_ALGORITHM`. Unlike `createSigner` and `createVerifier`,
   * **SHA1 is rejected here** with `HASHING_ALGORITHM_IS_NO_LONGER_VALID`,
   * as SHA1 is deprecated for XML DSig.
   *
   * Validation order: `options` → `algorithm` → `rootTag` → certificate
   * lookup → XML parsing. Note that `certId` is NOT validated before
   * `algorithm` despite being alphabetically prior in the options bag.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547090628}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547090628.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param options
   * @param options.xmlString The XML string to sign. Must be well-formed; malformed input throws `XML_PARSING_ERROR`.
   * @param options.certId The script ID of the digital certificate in the NetSuite certificate store.
   * @param options.algorithm The hash algorithm — one of the `certificate.HashAlg` enum values, excluding `SHA1`. Case-sensitive.
   * @param options.rootTag The local name of the XML element that contains the content to be signed. The `Signature` block is appended inside this element by default.
   * @param [options.insertionTag] Optional local name of an element inside `rootTag` where the `Signature` block should be inserted. If omitted, the `Signature` is appended as the last child of `rootTag`.
   * @return A `certificate.SignedXml` wrapping the signed XML document.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null, or if `options.algorithm`, `options.rootTag`, or `options.signedXml` is missing/empty/null. Message format for the missing-options case: `"certificate.signXml: Missing a required argument: options"`; for missing fields: `"signXml: Missing a required argument: <name>"` (note the inconsistent prefix).
   * @throws {error.SuiteScriptError} INVALID_ALGORITHM If `options.algorithm` is not one of the `certificate.HashAlg` enum values. Message format: `"Invalid algorithm: <value>"`.
   * @throws {error.SuiteScriptError} HASHING_ALGORITHM_IS_NO_LONGER_VALID If `options.algorithm` is `SHA1`. Message: `"SHA1 hashing algorithm is no longer valid"`. SHA1 is deprecated for XML DSig.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND If no certificate with the given `certId` exists in the certificate store. Message format: `"Certificate '<certId>' not found"`.
   * @throws {error.SuiteScriptError} XML_PARSING_ERROR If `options.xmlString` is not well-formed XML. Message: `"An error occurred during XML parsing."`.
   */
  signXml(options: {
    xmlString: string,
    certId: string,
    algorithm: Exclude<certificate.HashAlg, certificate.HashAlg.SHA1> | Exclude<`${certificate.HashAlg}`, 'SHA1'>,
    rootTag: string,
    insertionTag?: string,
  }): certificate.SignedXml;

  /**
   * Verifies the W3C XML Signature embedded in `signedXml`. Returns
   * `undefined` on success; throws `INVALID_SIGNATURE` on any failure
   * (tampered content, wrong certificate, algorithm mismatch, etc.).
   *
   * The `certId` parameter is optional — when omitted, the verifier uses
   * the certificate information embedded in the signature itself (the
   * `X509Data` element). When supplied, the named certificate must exist
   * in the NetSuite certificate store. `certId: null` is treated as
   * omitted; `certId: ''` (empty string) is treated as a real-but-invalid
   * cert ID and triggers `CERTIFICATE_NOT_FOUND`.
   *
   * Validation order: `signedXml` → `rootTag` → certificate lookup →
   * signature check. Despite `rootTag` being alphabetically prior to
   * `signedXml` in the options bag, missing-field errors are reported in
   * this order.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547090251}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547090251.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param options
   * @param [options.certId] Optional script ID of the digital certificate to verify against. When omitted, the certificate is sourced from the `X509Data` embedded in the signature. `null` is treated as omitted; `''` (empty string) is treated as a real-but-invalid cert ID.
   * @param options.rootTag The local name of the XML element that contains the signed content. Missing, empty string, and `null` are all rejected.
   * @param options.signedXml The signed XML string to verify, as produced by `signXml(...).asString()`. Missing, empty string, and `null` are all rejected.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or if `options.signedXml` or `options.rootTag` is missing/empty/null. Message format: `"certificate.verifyXmlSignature: Missing a required argument: <name>"`.
   * @throws {error.SuiteScriptError} CERTIFICATE_NOT_FOUND If `certId` is provided as a non-empty string but no matching certificate exists. Message format: `"Certificate '<certId>' not found"`.
   * @throws {error.SuiteScriptError} TAG_NOT_FOUND If the element named by `rootTag` is not present in `signedXml`. Message format: `"Tag \\"<rootTag>\\" not found"`.
   * @throws {error.SuiteScriptError} INVALID_SIGNATURE If signature verification fails (tampered content, wrong certificate, algorithm mismatch, etc.). Message: `"Invalid signature"`.
   */
  verifyXmlSignature(options: {
    certId?: string,
    rootTag: string,
    signedXml: string,
  }): void;
}

declare namespace certificate {

  /**
   * Holds the string values for hash algorithm names used by
   * `certificate.createSigner`, `certificate.createVerifier`, and
   * `certificate.signXml`.
   *
   * **Algorithm support varies by call site and by certificate type:**
   *  - `createSigner` / `createVerifier` accept all four values (SHA1 still
   *    works at runtime but is cryptographically broken).
   *  - `signXml` REJECTS `SHA1` with `HASHING_ALGORITHM_IS_NO_LONGER_VALID` —
   *    SHA1 is deprecated for XML DSig.
   *  - For DSA certificates, only `SHA256` works; SHA384/SHA512 are
   *    unsupported.
   *  - For RSA and ECDSA certificates, SHA256/SHA384/SHA512 all work.
   *
   * `SHA1` is exposed at runtime but is NOT listed in the Help Center for
   * this module — its presence is undocumented but stable.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1549631688}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1549631688.html}
   *
   * @since 2019.1
   */
  export enum HashAlg {
    SHA1 = 'SHA1',
    SHA256 = 'SHA256',
    SHA384 = 'SHA384',
    SHA512 = 'SHA512',
  }

  /**
   * Wrapper for an XML string that has been digitally signed. Returned by
   * `certificate.signXml(options)`. Provides three accessor methods to
   * retrieve the signed XML in different forms: as a plain string, as a
   * `file.File` (for saving to the File Cabinet or returning from a
   * RESTlet), or as an `xml.Document` (for further DOM manipulation).
   *
   * The wrapped XML includes the original content plus a W3C XML Signature
   * (`<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">`) embedded
   * inline.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547156078}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547156078.html}
   *
   * @since 2019.1
   */
  export interface SignedXml {

    /**
     * Returns the signed XML as a UTF-8 string, including the XML
     * declaration and the embedded `Signature` block.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547245476}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547245476.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @return The signed XML string.
     */
    asString(): string;

    /**
     * Returns the signed XML as a `file.File` instance. The file has
     * `name: 'signed.xml'` (hardcoded), `fileType: 'XMLDOC'`, and is not
     * yet saved to the File Cabinet (folder: -1). To persist it, call
     * `.save()` on the returned file or assign a folder first.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156565610435}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156565610435.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @return The signed XML wrapped in a `file.File` instance with a hardcoded name of `signed.xml`.
     */
    asFile(): file.File;

    /**
     * Returns the signed XML as an `xml.Document` for further DOM
     * manipulation. The document exposes the standard DOM Level 2 API
     * (`documentElement`, `getElementsByTagName`, `createElement`, etc.).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156565632759}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156565632759.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @return The signed XML as an `xml.Document`.
     */
    asXml(): xml.Document;

    /**
     * Returns an empty plain object. Internal state (the wrapped XML
     * document) is not enumerable and is excluded from JSON serialization.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.1
     *
     * @return An empty plain object (`{}`).
     */
    toJSON(): object;

    /**
     * Returns the literal string `'certificate.SignedXml'` — a class-name
     * tag rather than a serialization of the wrapped XML. To get the
     * actual signed XML as a string, use `asString()`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.1
     *
     * @return The literal `'certificate.SignedXml'`.
     */
    toString(): 'certificate.SignedXml';
  }

  /**
   * Wrapper for a signing operation bound to a specific certificate and
   * hash algorithm. Returned by `certificate.createSigner(options)`. Use
   * `update()` to feed in data, then `sign()` to produce the signature.
   *
   * Multiple `update()` calls accumulate data into the same hash. `sign()`
   * can be called even without a prior `update()` (the signature is taken
   * over an empty body). For RSA signatures, each `sign()` call produces
   * a different result because RSA padding includes random bytes — this
   * is correct behavior.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547242551}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547242551.html}
   *
   * @since 2019.1
   */
  export interface Signer {

    /**
     * Adds string data to the running hash. Can be called multiple times
     * to feed in data incrementally before calling `sign()`.
     *
     * **The `inputEncoding` parameter is broken at runtime.** Every value
     * the Help Center suggests (`'UTF-8'`, `'ISO_8859_1'`, `'ASCII'`)
     * throws `SSS_INVALID_TYPE_ARG` — the parser doesn't recognize them as
     * encoding names. Every `encode.Encoding` enum value name
     * (`'UTF_8'`, `'BASE_64'`, etc.) IS recognized but throws
     * `SSS_UNSUPPORTED_ENCODING` — recognized but not supported. Even
     * passing `null`, `undefined`, or `''` for `inputEncoding` throws.
     * **The only way to use `update()` is to OMIT `inputEncoding` entirely
     * from the options bag** — even `inputEncoding: undefined` (property
     * present with undefined value) is rejected. The type signature uses
     * `encode.Encoding` to document the value space the parser
     * recognizes; in practice the property must not be set.
     *
     * Calling `update()` or `update(null)` (no options bag) throws a plain
     * `TypeError: Cannot read property 'body' of undefined/null` — a
     * Java-layer crash leak that is not wrapped as a `SuiteScriptError`.
     *
     * `update({input: ''})` is accepted (empty string is valid input);
     * `update({input: null})` and non-string inputs throw
     * `SSS_INVALID_TYPE_ARG`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547243336}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547243336.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @param options
     * @param options.input The string data to add to the running hash. Empty string is accepted; `null`, numbers, and other non-string types are rejected. `https.SecureString` is documented as an accepted input type but the runtime behavior was not directly confirmed.
     * @param [options.inputEncoding] Typed as `encode.Encoding` to document the value space the runtime recognizes (`UTF_8`/`BASE_64`/`BASE_32`/`BASE_16`/`HEX`/`BASE_64_URL_SAFE`) — but BROKEN at runtime: every recognized name throws `SSS_UNSUPPORTED_ENCODING`, every unrecognized value (including the Help Center's `'UTF-8'`/`'ISO_8859_1'`/`'ASCII'`) throws `SSS_INVALID_TYPE_ARG`. Must be OMITTED from the options bag entirely; do not set this property.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or `options.input` is absent. Message format: `"certificate.Signer.update: Missing a required argument: <name>"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.input` is `null` or a non-string value, or if `options.inputEncoding` is set to a value the parser doesn't recognize as an encoding name (this catches the Help Center's `'UTF-8'`/`'ISO_8859_1'`/`'ASCII'`, all casing variants, and arbitrary strings). Message format: `"You have entered an invalid type argument: options.<name>"`.
     * @throws {error.SuiteScriptError} SSS_UNSUPPORTED_ENCODING If `options.inputEncoding` is set to a recognized `encode.Encoding` enum value name (`'UTF_8'`, `'BASE_64'`, `'BASE_32'`, `'BASE_16'`, `'HEX'`, `'BASE_64_URL_SAFE'`). Despite being recognized, no value is actually supported — the param is unusable. Message format: `"Encoding '<value>' is not supported."`.
     * @throws {TypeError} If `update()` is called with no arguments or with `null`. Message format: `"Cannot read property 'body' of undefined/null"`. Not wrapped as a `SuiteScriptError`.
     */
    update(options: {
      input: string | https.SecureString,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Signs the data accumulated via `update()` and returns the signature.
     * Can be called even without a prior `update()` (signs an empty body).
     * Can be called multiple times on the same `Signer` instance; for RSA,
     * each call produces a different signature due to randomized padding.
     *
     * `outputEncoding` accepts `encode.Encoding` enum values
     * (`BASE_64` default, `BASE_32`, `BASE_16`, `BASE_64_URL_SAFE`, `HEX`,
     * `UTF_8`) — case-sensitive. The Help Center incorrectly lists
     * `'UTF-8'`, `'ISO_8859_1'`, `'ASCII'` as valid values; in practice,
     * those are rejected with `SSS_INVALID_TYPE_ARG`. The actual valid set
     * is the `encode.Encoding` enum.
     *
     * `useRawFormatForECDSA` only applies to certificates with an ECDSA
     * encryption algorithm. For RSA and DSA certificates, this option is
     * silently ignored. When `true` (and the cert IS ECDSA), the signature
     * is returned as a raw `r || s` byte concatenation; when `false` (the
     * default), the signature is returned in ASN.1 DER format.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244059}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244059.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @param [options]
     * @param [options.outputEncoding] An `encode.Encoding` enum value naming the binary-to-text encoding to apply. Case-sensitive. Defaults to `BASE_64`. The Help Center claims `'UTF-8'`, `'ISO_8859_1'`, `'ASCII'` are valid; in practice, only `encode.Encoding` values work.
     * @param [options.useRawFormatForECDSA = false] For ECDSA certificates, return the signature as raw `r || s` bytes rather than ASN.1 DER. Silently ignored for non-ECDSA certificates.
     * @return The signature, encoded per `outputEncoding`.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.outputEncoding` is not an `encode.Encoding` enum value name. Message format: `"You have entered an invalid type argument: <value>"` (note the value is included, not the param name).
     */
    sign(options?: {
      outputEncoding?: encode.Encoding | `${encode.Encoding}`,
      useRawFormatForECDSA?: boolean,
    }): string;

    /**
     * Returns an empty plain object. Internal hash state is not enumerable
     * and is excluded from JSON serialization.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.1
     *
     * @return An empty plain object (`{}`).
     */
    toJSON(): object;

    /**
     * Returns the literal string `'certificate.Signer'` — a class-name
     * tag rather than a serialization of any signer state.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.1
     *
     * @return The literal `'certificate.Signer'`.
     */
    toString(): 'certificate.Signer';
  }

  /**
   * Wrapper for a verification operation bound to a specific certificate
   * and hash algorithm. Returned by `certificate.createVerifier(options)`.
   * Use `update()` to feed in the data that was signed, then `verify()`
   * with the signature to test.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244665}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244665.html}
   *
   * @since 2019.1
   */
  export interface Verifier {

    /**
     * Adds string data to the running hash that will be verified against
     * the signature in `verify()`. Can be called multiple times to feed
     * in data incrementally.
     *
     * **The `inputEncoding` parameter is broken at runtime.** Every value
     * the Help Center suggests (`'UTF-8'`, `'ISO_8859_1'`, `'ASCII'`)
     * throws `SSS_INVALID_TYPE_ARG` — the parser doesn't recognize them as
     * encoding names. Every `encode.Encoding` enum value name
     * (`'UTF_8'`, `'BASE_64'`, etc.) IS recognized but throws
     * `SSS_UNSUPPORTED_ENCODING` — recognized but not supported. Even
     * passing `null`, `undefined`, or `''` for `inputEncoding` throws.
     * **The only way to use `update()` is to OMIT `inputEncoding` entirely
     * from the options bag** — even `inputEncoding: undefined` (property
     * present with undefined value) is rejected. The type signature uses
     * `encode.Encoding` to document the value space the parser
     * recognizes; in practice the property must not be set.
     *
     * `update({})` (options bag without `input`) throws `UNEXPECTED_ERROR`
     * at the Java layer, NOT `SSS_MISSING_REQD_ARGUMENT` — asymmetric
     * with `Signer.update` which produces the SSS_* code for the same
     * mistake.
     *
     * `update({input: ''})` is accepted; `update({input: null})` and
     * non-string inputs throw `SSS_INVALID_TYPE_ARG`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244829}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244829.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @param options
     * @param options.input The string data to add to the running hash. Empty string is accepted; `null`, numbers, and other non-string types are rejected.
     * @param [options.inputEncoding] Typed as `encode.Encoding` to document the value space the runtime recognizes — but BROKEN at runtime: every recognized name throws `SSS_UNSUPPORTED_ENCODING`, every unrecognized value (including the Help Center's `'UTF-8'`/`'ISO_8859_1'`/`'ASCII'`) throws `SSS_INVALID_TYPE_ARG`. Must be OMITTED from the options bag entirely; do not set this property.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null. Message format: `"Verifier.update: Missing a required argument: options"` (note the absence of the `certificate.` prefix used by `Signer.update`).
     * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `options` is provided but `options.input` is missing. Message: `"An unexpected SuiteScript error has occurred"`. Asymmetric with `Signer.update` which produces `SSS_MISSING_REQD_ARGUMENT` for the same case.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.input` is `null` or a non-string, or if `options.inputEncoding` is set to a value the parser doesn't recognize as an encoding name (the Help Center's `'UTF-8'`/`'ISO_8859_1'`/`'ASCII'`, casing variants, and arbitrary strings all fall here). Message format: `"You have entered an invalid type argument: options.<name>"`.
     * @throws {error.SuiteScriptError} SSS_UNSUPPORTED_ENCODING If `options.inputEncoding` is set to a recognized `encode.Encoding` enum value name. Despite being recognized, no value is actually supported — the param is unusable. Message format: `"Encoding '<value>' is not supported."`.
     */
    update(options: {
      input: string,
      inputEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Verifies the signature against the data fed in via `update()`.
     * Returns `undefined` on successful verification; throws
     * `INVALID_SIGNATURE` on any failure (tampered data, wrong certificate,
     * algorithm mismatch).
     *
     * `signatureEncoding` only meaningfully accepts `BASE_64` (the
     * default) in practice — the Help Center suggests other encodings
     * but at runtime, `BASE_32`, `BASE_16`, `HEX` all trigger
     * `UNEXPECTED_ERROR` (Java-layer crash). The parameter is preserved
     * in the type signature for documentation but should be omitted in
     * practice.
     *
     * `verify()` (no args) or `verify({})` (missing signature) throws
     * `SSS_MISSING_REQD_ARGUMENT` for the no-args case and
     * `UNEXPECTED_ERROR` for the missing-signature case — asymmetric
     * validation. `verify({signature: null})` also throws
     * `UNEXPECTED_ERROR`. Documented `INVALID_SIGNATURE` fires only when
     * the signature parameter has a syntactically valid value that fails
     * cryptographic verification.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244953}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244953.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @param options
     * @param options.signature The signature to verify, BASE_64-encoded.
     * @param [options.signatureEncoding] Documented as the signature's encoding; in practice only `BASE_64` (the default) works reliably. Other `encode.Encoding` values trigger `UNEXPECTED_ERROR`.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null. Message format: `"Verifier.verify: Missing a required argument: options"` (no `certificate.` prefix).
     * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `options.signature` is missing or `null`, or if `signatureEncoding` is a non-`BASE_64` `encode.Encoding` value. Message: `"An unexpected SuiteScript error has occurred"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.signatureEncoding` is not an `encode.Encoding` enum value name. Message format: `"You have entered an invalid type argument: <value>"`.
     * @throws {error.SuiteScriptError} INVALID_SIGNATURE If signature verification fails (tampered data, wrong certificate, algorithm mismatch, or malformed-but-non-null signature value). Message: `"Invalid signature"`.
     */
    verify(options: {
      signature: string,
      signatureEncoding?: encode.Encoding | `${encode.Encoding}`,
    }): void;

    /**
     * Returns an empty plain object. Internal hash state is not enumerable
     * and is excluded from JSON serialization.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.1
     *
     * @return An empty plain object (`{}`).
     */
    toJSON(): object;

    /**
     * Returns the literal string `'certificate.Verifier'` — a class-name
     * tag rather than a serialization of any verifier state.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.1
     *
     * @return The literal `'certificate.Verifier'`.
     */
    toString(): 'certificate.Verifier';
  }
}
