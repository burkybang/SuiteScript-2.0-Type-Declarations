/// <reference path="../error.d.ts" />
/// <reference path="../file.d.ts" />
/// <reference path="../xml.d.ts" />

/**
 * SuiteScript certificate module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543432423}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543432423.html}
 *
 * @module N/crypto/certificate
 * @NApiVersion 2.x
 * @restriction Server-side scripts only
 */
interface certificate {

  /**
   * Creates the signer object for signing plain strings
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547071865}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547071865.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.certId - The script ID of the digital certificate
   * @param options.algorithm - The hash algorithm
   *
   * @since 2019.1
   */
  createSigner(options: {
    certId: string,
    algorithm: certificate.HashAlg | `${certificate.HashAlg}`,
  }): certificate.Signer;

  /**
   * Creates the verifier object for verifying signatures of plain strings
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547089078}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547089078.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.certId - The script ID of the digital certificate
   * @param options.algorithm - The hash algorithm
   *
   * @since 2019.1
   */
  createVerifier(options: {
    certId: string,
    algorithm: certificate.HashAlg | `${certificate.HashAlg}`,
  }): certificate.Verifier;

  /**
   * Verifies a signature
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547090251}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547090251.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   *
   * @param options
   * @param [options.certId] - The script ID of the digital certificate
   * @param options.rootTag - Signed root XML tag
   * @param options.signedXml - Signed XML
   *
   * @since 2019.1
   */
  verifyXmlSignature(options: {
    certId?: string,
    rootTag: string,
    signedXml: string,
  }): void;

  /**
   * Signs an input XML string using a certificate ID. Formatting, such as line breaks, is disabled.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547090628}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547090628.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.xmlString - Input XML string
   * @param options.certId - The script ID of the digital certificate
   * @param options.algorithm - The hash algorithm
   * @param options.rootTag - Root tag of XML section to sign
   * @param [options.insertionTag] - Tag where the signature should be inserted
   *
   * @since 2019.1
   */
  signXml(options: {
    xmlString: string,
    certId: string,
    algorithm: certificate.HashAlg | `${certificate.HashAlg}`,
    rootTag: string,
    insertionTag?: string,
  }): certificate.SignedXml;
}

declare namespace certificate {

  /**
   * Enum that holds the string values for the hash algorithm types. Supported digest methods are SHA256, SHA384, and SHA512 for RSA and ECDSA encryption algorithms and SHA256 for DSA. Use this enum to set the `option.algorithm` property values for the `certificate.createSigner(options)`, `certificate.createVerifier(options)`, `certificate.signXml(options)` methods.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1549631688}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1549631688.html}
   *
   * @since 2019.1
   */
  export enum HashAlg {
    SHA256 = 'SHA256',
    SHA384 = 'SHA384',
    SHA512 = 'SHA512',
  }

  /**
   * Encapsulates an XML string that has been digitally signed. This object is returned by the `certificate.signXml(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547156078}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547156078.html}
   *
   * @constructor
   *
   * @since 2019.1
   */
  export interface SignedXml {

    /**
     * Returns the signed XML as a string
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547245476}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547245476.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @since 2019.1
     */
    asString(): string;

    /**
     * Returns the signed XML as a file
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156565610435}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156565610435.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @since 2019.2
     */
    asFile(): file.File;

    /**
     * Returns the signed XML as an XML document
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156565632759}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156565632759.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @since 2019.2
     */
    asXml(): xml.Document;
  }

  /**
   * Encapsulates a created signature (signer) for plain strings. This object is returned by the `certificate.createSigner(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547242551}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547242551.html}
   *
   * @constructor
   *
   * @since 2019.1
   */
  export interface Signer {

    /**
     * Updates the input string to be signed. The string can be encoded.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547243336}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547243336.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.input - The string to update
     * @param [options.inputEncoding = 'UTF-8'] - Encoding of the string to sign
     *
     * @throws {error.SuiteScriptError} SSS_UNSUPPORTED_ENCODING if the value for inputEncoding is invalid. This must be a text value, such as UTF-8, ISO_8859_1, ASCII. Values from `encode.Encoding` (N/encode module) are not valid.
     *
     * @since 2019.1
     */
    update(options: {
      input: string,
      inputEncoding?: 'UTF-8' | 'ISO_8859_1' | 'ASCII' | string,
    }): void;

    /**
     * Signs the string and returns the signature. Formatting, such as line breaks, is disabled in signatures.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244059}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244059.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param [options.outputEncoding = 'UTF-8'] - Encoding of the signed string
     *
     * @since 2019.1
     */
    sign(options: {
      outputEncoding?: 'UTF-8' | 'ISO_8859_1' | 'ASCII' | string,
    }): void;
  }

  /**
   * Encapsulates a created verifier for verifying plain string signatures. This object is returned by the `certificate.createVerifier(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244665}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244665.html}
   *
   * @constructor
   *
   * @since 2019.1
   */
  export interface Verifier {

    /**
     * Updates the string to be verified against a specified certificate
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244829}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244829.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.input - The string to verify
     * @param [options.inputEncoding = 'UTF-8'] - Encoding of the string to verify
     *
     * @since 2019.1
     */
    update(options: {
      input: string,
      inputEncoding?: 'UTF-8' | 'ISO_8859_1' | 'ASCII' | string,
    }): void;

    /**
     * Verifies a string against a provided signature using a specified certificate. You can create a verifier object using the `certificate.createVerifier(options)` method.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547244953}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547244953.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.signature - The signature to be verified
     * @param [options.signatureEncoding = 'UTF-8'] - Encoding of the signature
     *
     * @throws {error.SuiteScriptError} INVALID_SIGNATURE if the signature is not verified. This can occur if the certificate or hash algorithm is not correct in the Verifier object or the signature is not valid for the supplied string.
     *
     * @since 2019.1
     */
    verify(options: {
      signature: string,
      signatureEncoding?: 'UTF-8' | 'ISO_8859_1' | 'ASCII' | string,
    }): void;
  }
}