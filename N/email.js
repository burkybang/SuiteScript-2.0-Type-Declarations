/**
 * SuiteScript email common module
 *
 * @module N/email
 * @suiteScriptVersion 2.x
 *
 */
function email() {
}

/**
 * Send email with bounce back
 *
 * @governance 20 units
 * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
 *
 * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
 * @typedef {Object} RelatedRecords
 * @property {number} transactionId - Transaction record to attach Message record to.
 * @property {number} activityId - Activity record to attach Message record to.
 * @property {number} entityId - Entity record to attach Message record to.
 * @property {Object} customRecord - Custom record to attach Message record to.
 * @property {number} customRecord.id - Custom record instance ID to attach Message record to.
 * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
 *
 * @param {Object} options Email options
 * @param {number} options.author Sender of the email.
 * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} [options.cc] CC (optional) recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} [options.bcc] BCC (optional) recipients of the email as an EmailEntity, Interal ID or Email Address.
 * @param {string} options.subject Email subject.
 * @param {string} options.body Email Body/contents.
 * @param {string} [options.replyTo] (optional)
 * @param {file.File[]} [options.attachments] (optional) Email file attachments. Not supported in client side.
 * @param {RelatedRecords} [options.relatedRecords] (optional)
 * @param {boolean} [options.isInternalOnly] (optional) Do not show Message record when viewed from external Entity. Default to false
 * @returns {undefined}
 *
 */
// function sendEmail() {}
// sendEmail.prototype.promise = function() {};
// email.prototype.send = new sendEmail();
email.prototype.send = function (options) {
};

/**
 * Send email without bounce back
 *
 * @governance 10 units
 * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
 *
 * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
 * @typedef {Object} RelatedRecords
 * @property {number} transactionId - Transaction record to attach Message record to.
 * @property {number} activityId - Activity record to attach Message record to.
 * @property {number} entityId - Entity record to attach Message record to.
 * @property {Object} customRecord - Custom record to attach Message record to.
 * @property {number} customRecord.id - Custom record instance ID to attach Message record to.
 * @property {string} customRecord.recordType - Custom Record record type to attach Message record to.
 *
 * @param {Object} options Email options
 * @param {number} options.author Sender of the email.
 * @param {number|string[]} options.recipients Recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} [options.cc] CC (optional) recipients of the email, Interal ID or array of Email Addresses.
 * @param {string[]} [options.bcc] BCC (optional) recipients of the email as an EmailEntity, Interal ID or Email Address.
 * @param {string} options.subject Email subject.
 * @param {string} options.body Email Body/contents.
 * @param {string} [options.replyTo] (optional)
 * @param {file.File[]} [options.attachments] (optional) Email file attachments.  Not supported in client side.
 * @param {RelatedRecords} [options.relatedRecords] (optional)
 * @param {boolean} [options.isInternalOnly] (optional) Do not show Message record when viewed from external Entity. Default to false
 * @returns {undefined}
 *
 */
// function sendBulkEmail() {}
// sendBulkEmail.prototype.promise = function() {};
// email.prototype.sendBulk = new sendBulkEmail();
email.prototype.sendBulk = function (options) {
};

/**
 * Send a single "on-demand" campaign email to a specified recipient and return a campaign response ID to track the email
 * @governance 10 units
 * @restriction Supported by all client and server side scirpts
 *
 * @param {Object} options Email options
 * @param {Number} options.campaignEventId  The internal ID of the campaign event.
 * @param {Number} options.recipientId The internal ID of the recipient. Note that the recipient must have an email.
 * @returns {Number} A campaign response ID (tracking code) as an integer, or -1 if the send fails
 *
 */
// function sendCampaignEventEmail() {}
// sendCampaignEventEmail.prototype.promise = function() {};
// email.prototype.sendCampaignEvent = new sendCampaignEventEmail();
email.prototype.sendCampaignEvent = function (options) {
};

email = new email();
/**
 * @type {email}
 */
N.prototype.email = email;