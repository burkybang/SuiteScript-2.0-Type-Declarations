/**
 * SuiteScript Event Subscriber Script Context
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524954}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524954.html}
 */

/**
 * Defines the function that handles a subscribed event
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524955}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524955.html}
 *
 * @since 2026.2
 */
interface HandleOptions {

  /**
   * Contains context about the event
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524955}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524955.html}
   *
   * @type {HandleOptions.Context} context
   * @readonly
   *
   * @since 2026.2
   */
  context: HandleOptions.Context;

  /**
   * Contains the event payload
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524955}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524955.html}
   *
   * @type {HandleOptions.Payload} payload
   * @readonly
   *
   * @since 2026.2
   */
  payload: HandleOptions.Payload;
}

declare namespace HandleOptions {

  /**
   * Context about the event that triggered the Event Subscriber script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524955}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524955.html}
   *
   * @since 2026.2
   */
  export interface Context {

    /**
     * The record type ID of the record that triggered the event. The Help Center samples compare this against uppercase values, such as `SALESORDER` and `CUSTOMER`
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524955}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524955.html}
     *
     * @type {string} recordType
     * @readonly
     *
     * @since 2026.2
     */
    recordType: string;
  }

  /**
   * The payload of the event that triggered the Event Subscriber script
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524955}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524955.html}
   *
   * @since 2026.2
   */
  export interface Payload {

    /**
     * Internal ID of the record that triggered the event
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9100524955}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9100524955.html}
     *
     * @type {string} recordId
     * @readonly
     *
     * @since 2026.2
     */
    recordId: string;
  }
}