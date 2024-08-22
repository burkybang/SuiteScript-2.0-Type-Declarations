/**
 * SuiteScript crypto/random module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_13113107585}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_13113107585.html}
 *
 * @module N/crypto/random
 * @NApiVersion 2.x
 * @restriction none - Client-side and server-side scripts
 */
interface random {

  /**
   * Method used to generate cryptographically strong pseudorandom data
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547071865}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547071865.html}
   *
   * @governance none
   * @restriction none - Client-side and server-side scripts
   *
   * @param options
   * @param options.size - The number of bytes to generate
   *
   * @since 2023.1
   */
  generateBytes(options: {
    size: number,
  }): Uint8Array;

  /**
   * Method used to generate cryptographically strong pseudorandom number
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547071865}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547071865.html}
   *
   * @governance none
   * @restriction none - Client-side and server-side scripts
   *
   * @param options
   * @param [options.min = 0] - Start of random range. Default is 0.
   * @param options.max - End of random range (exclusive)
   *
   * @since 2023.1
   */
  generateInt(options: {
    min?: number,
    max: number,
  }): number;

  /**
   * Method used to generate a v4 UUID using a cryptographically secure random number generator
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0526122721}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0526122721.html}
   *
   * @governance none
   * @restriction none - Client-side and server-side scripts
   *
   * @since 2023.1
   */
  generateUUID(): string;
}