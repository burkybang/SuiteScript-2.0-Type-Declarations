/// <reference path="./file.d.ts" />
/// <reference path="./record.d.ts" />

/**
 * SuiteScript email module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358552361}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358552361.html}
 *
 * @module N/email
 * @NApiVersion 2.x
 */
interface email {

  send: {

    /**
     * Send email with bounce back
     *
     * @governance 20 units
     * @restriction The maximum number of total recipients (recipient + cc + bcc) allowed is 10
     *
     * @param {Object} options Email options
     * @param {number} options.author Sender of the email.
     * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.cc] CC recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.bcc] BCC recipients of the email as an EmailEntity, Interal ID or Email Address.
     * @param {string} options.subject Email subject.
     * @param {string} options.body Email Body/contents.
     * @param {string} [options.replyTo]
     * @param {file.File[]} [options.attachments] Email file attachments. Not supported in client side.
     * @param {email.RelatedRecords} [options.relatedRecords]
     * @param {boolean} [options.isInternalOnly] Do not show Message record when viewed from external Entity. Default to false
     * @return {void}
     */
    (options: {
      author: number | string,
      recipients: number | string | string[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): void

    /**
     * Send email with bounce back
     *
     * @governance 20 units
     * @restriction The maximum number of total recipients (recipient + cc + bcc) allowed is 10
     *
     * @param {Object} options Email options
     * @param {number} options.author Sender of the email.
     * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.cc] CC recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.bcc] BCC recipients of the email as an EmailEntity, Interal ID or Email Address.
     * @param {string} options.subject Email subject.
     * @param {string} options.body Email Body/contents.
     * @param {string} [options.replyTo]
     * @param {file.File[]} [options.attachments] Email file attachments. Not supported in client side.
     * @param {email.RelatedRecords} [options.relatedRecords]
     * @param {boolean} [options.isInternalOnly] Do not show Message record when viewed from external Entity. Default to false
     * @return {Promise<void>}
     */
    promise(options: {
      author: number | string,
      recipients: number | string | string[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): Promise<void>
  };

  sendBulk: {

    /**
     * Send email without bounce back
     *
     * @governance 10 units
     * @restriction The maximum number of total recipients (recipient + cc + bcc) allowed is 10
     *
     * @param {Object} options Email options
     * @param {number|string} options.author Sender of the email.
     * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.cc] CC recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.bcc] BCC recipients of the email as an EmailEntity, Interal ID or Email Address.
     * @param {string} options.subject Email subject.
     * @param {string} options.body Email Body/contents.
     * @param {string} [options.replyTo]
     * @param {file.File[]} [options.attachments] Email file attachments.  Not supported in client side.
     * @param {email.RelatedRecords} [options.relatedRecords]
     * @param {boolean} [options.isInternalOnly] Do not show Message record when viewed from external Entity. Default to false
     * @return {void}
     */
    (options: {
      author: number | string,
      recipients: number | string | string[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): void

    /**
     * Send email without bounce back
     *
     * @governance 10 units
     * @restriction The maximum number of total recipients (recipient + cc + bcc) allowed is 10
     *
     * @param {Object} options Email options
     * @param {number|string} options.author Sender of the email.
     * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.cc] CC recipients of the email, Interal ID or array of Email Addresses.
     * @param {string[]} [options.bcc] BCC recipients of the email as an EmailEntity, Interal ID or Email Address.
     * @param {string} options.subject Email subject.
     * @param {string} options.body Email Body/contents.
     * @param {string} [options.replyTo]
     * @param {file.File[]} [options.attachments] Email file attachments.  Not supported in client side.
     * @param {email.RelatedRecords} [options.relatedRecords]
     * @param {boolean} [options.isInternalOnly] Do not show Message record when viewed from external Entity. Default to false
     * @return {Promise<void>}
     */
    promise(options: {
      author: number | string,
      recipients: number | string | string[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): Promise<void>

  };

  sendCampaignEvent: {

    /**
     * Send a single "on-demand" campaign email to a specified recipient and return a campaign response ID to track the email
     * @governance 10 units
     *
     * @param {Object} options Email options
     * @param {number|string} options.campaignEventId  The internal ID of the campaign event.
     * @param {number|string} options.recipientId The internal ID of the recipient. Note that the recipient must have an email.
     * @return {number} A campaign response ID (tracking code) as an integer, or -1 if the send fails
     *
     */
    (options: {
      campaignEventId: number | string,
      recipientId: number | string,
    }): number

    /**
     * Send a single "on-demand" campaign email to a specified recipient and return a campaign response ID to track the email
     * @governance 10 units
     *
     * @param {Object} options Email options
     * @param {number|string} options.campaignEventId  The internal ID of the campaign event.
     * @param {number|string} options.recipientId The internal ID of the recipient. Note that the recipient must have an email.
     * @return {Promise<number>} A campaign response ID (tracking code) as an integer, or -1 if the send fails
     */
    promise(options: {
      campaignEventId: number | string,
      recipientId: number | string,
    }): Promise<number>
  };

}

declare namespace email {

  /**
   * RelatedRecords represents the NetSuite records to which an Email Message record should be attached
   */
  interface RelatedRecords {

    /**
     * Transaction record to attach Message record to
     * @type {number|string}
     */
    transactionId?: number | string,

    /**
     * Activity record to attach Message record to
     * @type {number|string}
     */
    activityId?: number | string,

    /**
     * Entity record to attach Message record to
     * @type {number|string}
     */
    entityId?: number | string,

    /**
     * Custom record to attach Message record to
     */
    customRecord?: {

      /**
       * Custom record instance ID to attach Message record to
       * @type {number|string}
       */
      id: number | string,

      /**
       * Custom record instance ID to attach Message record to
       * @type {record.Type|record.CustomType}
       */
      recordType: record.Type | `${record.Type}` | record.CustomType,
    },
  }

}