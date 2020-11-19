/// <reference path="./file.d.ts" />

/**
 * SuiteScript email module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358552361.html}
 *
 * @module N/email
 * @NApiVersion 2.x
 */
interface email {

  /**
   * Send email with bounce back
   *
   * @governance 20 units
   * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
   *
   * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
   * @typedef {Object} RelatedRecords
   * @property {number|string} transactionId - Transaction record to attach Message record to.
   * @property {number|string} activityId - Activity record to attach Message record to.
   * @property {number|string} entityId - Entity record to attach Message record to.
   * @property {Object} customRecord - Custom record to attach Message record to.
   * @property {number|string} customRecord.id - Custom record instance ID to attach Message record to.
   * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
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
   * @param {RelatedRecords} [options.relatedRecords]
   * @param {boolean} [options.isInternalOnly] Do not show Message record when viewed from external Entity. Default to false
   * @return {void}
   *
   */
  // function sendEmail() {}
  // sendEmail.prototype.promise = function() {};
  // send = new sendEmail();
  send(options: {
    author: number | string,
    recipients: number | string | string[],
    cc?: string[],
    bcc?: string[],
    subject: string,
    body: string,
    replyTo?: string,
    attachments?: file.File[],
    relatedRecords?: {
      transactionId?: number | string,
      activityId?: number | string,
      entityId?: number | string,
      customRecord?: {
        id: number | string,
        recordType: string,
      }[],
    },
    isInternalOnly?: boolean,
  }): void

  /**
   * Send email without bounce back
   *
   * @governance 10 units
   * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
   *
   * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
   * @typedef {Object} RelatedRecords
   * @property {number|string} transactionId - Transaction record to attach Message record to.
   * @property {number|string} activityId - Activity record to attach Message record to.
   * @property {number|string} entityId - Entity record to attach Message record to.
   * @property {Object} customRecord - Custom record to attach Message record to.
   * @property {number|string} customRecord.id - Custom record instance ID to attach Message record to.
   * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
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
   * @param {RelatedRecords} [options.relatedRecords]
   * @param {boolean} [options.isInternalOnly] Do not show Message record when viewed from external Entity. Default to false
   * @return {void}
   *
   */
  // function sendBulkEmail() {}
  // sendBulkEmail.prototype.promise = function() {};
  // sendBulk = new sendBulkEmail();
  sendBulk(options: {
    author: number | string,
    recipients: number | string | string[],
    cc?: string[],
    bcc?: string[],
    subject: string,
    body: string,
    replyTo?: string,
    attachments?: file.File[],
    relatedRecords?: {
      transactionId?: number | string,
      activityId?: number | string,
      entityId?: number | string,
      customRecord?: {
        id: number | string,
        recordType: string,
      }[],
    },
    isInternalOnly?: boolean,
  }): void

  /**
   * Send a single "on-demand" campaign email to a specified recipient and return a campaign response ID to track the email
   * @governance 10 units
   * @restriction Supported by all client and server side scirpts
   *
   * @param {Object} options Email options
   * @param {number|string} options.campaignEventId  The internal ID of the campaign event.
   * @param {number|string} options.recipientId The internal ID of the recipient. Note that the recipient must have an email.
   * @return {number} A campaign response ID (tracking code) as an integer, or -1 if the send fails
   *
   */
  // function sendCampaignEventEmail() {}
  // sendCampaignEventEmail.prototype.promise = function() {};
  // sendCampaignEvent = new sendCampaignEventEmail();
  sendCampaignEvent(options: {
    campaignEventId: number | string,
    recipientId: number | string,
  }): number

}