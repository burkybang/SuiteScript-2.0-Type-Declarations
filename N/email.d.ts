/// <reference path="./error.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./record.d.ts" />

/**
 * SuiteScript email module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358552361}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358552361.html}
 *
 * @module N/email
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface email {

  send: {

    /**
     * Sends an email and receives bounceback notifications. A maximum of 10 recipients (recipient + cc + bcc) is allowed. The total message size including attachments must be 15 MB or less, and each attachment must not exceed 10 MB.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358681681}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358681681.html}
     *
     * @governance 20 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.author Internal ID or email address of the employee sending the email.
     * @param options.recipients An entity internal ID, an email address, or an array of internal IDs and/or email addresses.
     * @param [options.cc] CC recipients of the email as an array of email addresses.
     * @param [options.bcc] BCC recipients of the email as an array of email addresses.
     * @param options.subject Email subject.
     * @param options.body Email body/contents.
     * @param [options.replyTo] Reply-to email address.
     * @param [options.attachments] Email file attachments. Not supported on the client side.
     * @param [options.relatedRecords] The NetSuite records to which the resulting Email Message record should be attached.
     * @param [options.isInternalOnly=false] Do not show the Message record when viewed from an external Entity.
     *
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_CC_EMAIL One or more cc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_BCC_EMAIL One or more bcc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MAXIMUM_NUMBER_RECIPIENTS_EXCEEDED You may have a maximum number of 10 recipients.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED The file content you are attempting to access exceeds the maximum allowed size of 10 MB.
     * @throws {error.SuiteScriptError} ATTACH_SIZE_EXCEEDED This message exceeds the limit of 15 MB.
     */
    (options: {
      author: number | string,
      recipients: number | string | (number | string)[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): void;

    /**
     * Sends an email and receives bounceback notifications. A maximum of 10 recipients (recipient + cc + bcc) is allowed. The total message size including attachments must be 15 MB or less, and each attachment must not exceed 10 MB.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440805906}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440805906.html}
     *
     * @governance 20 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.author Internal ID or email address of the employee sending the email.
     * @param options.recipients An entity internal ID, an email address, or an array of internal IDs and/or email addresses.
     * @param [options.cc] CC recipients of the email as an array of email addresses.
     * @param [options.bcc] BCC recipients of the email as an array of email addresses.
     * @param options.subject Email subject.
     * @param options.body Email body/contents.
     * @param [options.replyTo] Reply-to email address.
     * @param [options.attachments] Email file attachments. Not supported on the client side.
     * @param [options.relatedRecords] The NetSuite records to which the resulting Email Message record should be attached.
     * @param [options.isInternalOnly=false] Do not show the Message record when viewed from an external Entity.
     *
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_CC_EMAIL One or more cc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_BCC_EMAIL One or more bcc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MAXIMUM_NUMBER_RECIPIENTS_EXCEEDED You may have a maximum number of 10 recipients.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED The file content you are attempting to access exceeds the maximum allowed size of 10 MB.
     * @throws {error.SuiteScriptError} ATTACH_SIZE_EXCEEDED This message exceeds the limit of 15 MB.
     */
    promise(options: {
      author: number | string,
      recipients: number | string | (number | string)[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): Promise<void>;
  };

  sendBulk: {

    /**
     * Sends bulk email (no bounceback notification). Normally routed through a bulk email server. The total message size including attachments must be 15 MB or less, and each attachment must not exceed 10 MB.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358667505}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358667505.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.author Internal ID or email address of the employee sending the email.
     * @param options.recipients An entity internal ID, an email address, or an array of internal IDs and/or email addresses.
     * @param [options.cc] CC recipients of the email as an array of email addresses.
     * @param [options.bcc] BCC recipients of the email as an array of email addresses.
     * @param options.subject Email subject.
     * @param options.body Email body/contents.
     * @param [options.replyTo] Reply-to email address.
     * @param [options.attachments] Email file attachments. Not supported on the client side.
     * @param [options.relatedRecords] The NetSuite records to which the resulting Email Message record should be attached.
     * @param [options.isInternalOnly=false] Do not show the Message record when viewed from an external Entity.
     *
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_CC_EMAIL One or more cc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_BCC_EMAIL One or more bcc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED The file content you are attempting to access exceeds the maximum allowed size of 10 MB.
     * @throws {error.SuiteScriptError} ATTACH_SIZE_EXCEEDED This message exceeds the limit of 15 MB.
     */
    (options: {
      author: number | string,
      recipients: number | string | (number | string)[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): void;

    /**
     * Sends bulk email (no bounceback notification). Normally routed through a bulk email server. The total message size including attachments must be 15 MB or less, and each attachment must not exceed 10 MB.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440806437}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440806437.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.author Internal ID or email address of the employee sending the email.
     * @param options.recipients An entity internal ID, an email address, or an array of internal IDs and/or email addresses.
     * @param [options.cc] CC recipients of the email as an array of email addresses.
     * @param [options.bcc] BCC recipients of the email as an array of email addresses.
     * @param options.subject Email subject.
     * @param options.body Email body/contents.
     * @param [options.replyTo] Reply-to email address.
     * @param [options.attachments] Email file attachments. Not supported on the client side.
     * @param [options.relatedRecords] The NetSuite records to which the resulting Email Message record should be attached.
     * @param [options.isInternalOnly=false] Do not show the Message record when viewed from an external Entity.
     *
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_CC_EMAIL One or more cc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_INVALID_BCC_EMAIL One or more bcc emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED The file content you are attempting to access exceeds the maximum allowed size of 10 MB.
     * @throws {error.SuiteScriptError} ATTACH_SIZE_EXCEEDED This message exceeds the limit of 15 MB.
     */
    promise(options: {
      author: number | string,
      recipients: number | string | (number | string)[],
      cc?: string[],
      bcc?: string[],
      subject: string,
      body: string,
      replyTo?: string,
      attachments?: file.File[],
      relatedRecords?: email.RelatedRecords,
      isInternalOnly?: boolean,
    }): Promise<void>;
  };

  sendCampaignEvent: {

    /**
     * Sends a single on-demand campaign email to a specified recipient and returns a campaign response ID to track the email. The campaign must use a Lead Nurturing (campaigndrip) sublist.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4431144897}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4431144897.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.campaignEventId The internal ID of the campaign event.
     * @param options.recipientId The internal ID of the recipient. The recipient's record must contain an email address.
     * @return A campaign response ID (tracking code) as an integer, or -1 if the send fails.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_CMPGN_EVENT_ID The campaign event is invalid, disabled, or is not a Lead Nurturing Email event.
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     */
    (options: {
      campaignEventId: number | string,
      recipientId: number | string,
    }): number;

    /**
     * Sends a single on-demand campaign email to a specified recipient and returns a campaign response ID to track the email. The campaign must use a Lead Nurturing (campaigndrip) sublist.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4431144897}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4431144897.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param campaignEventId The internal ID of the campaign event.
     * @param recipientId The internal ID of the recipient. The recipient's record must contain an email address.
     * @return A campaign response ID (tracking code) as an integer, or -1 if the send fails.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_CMPGN_EVENT_ID The campaign event is invalid, disabled, or is not a Lead Nurturing Email event.
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     */
    (campaignEventId: number | string, recipientId: number | string): number;

    /**
     * Sends a single on-demand campaign email to a specified recipient and returns a campaign response ID to track the email. The campaign must use a Lead Nurturing (campaigndrip) sublist.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440807100}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440807100.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.campaignEventId The internal ID of the campaign event.
     * @param options.recipientId The internal ID of the recipient. The recipient's record must contain an email address.
     * @return A campaign response ID (tracking code) as an integer, or -1 if the send fails.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_CMPGN_EVENT_ID The campaign event is invalid, disabled, or is not a Lead Nurturing Email event.
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     */
    promise(options: {
      campaignEventId: number | string,
      recipientId: number | string,
    }): Promise<number>;

    /**
     * Sends a single on-demand campaign email to a specified recipient and returns a campaign response ID to track the email. The campaign must use a Lead Nurturing (campaigndrip) sublist.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440807100}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440807100.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param campaignEventId The internal ID of the campaign event.
     * @param recipientId The internal ID of the recipient. The recipient's record must contain an email address.
     * @return A campaign response ID (tracking code) as an integer, or -1 if the send fails.
     *
     * @throws {error.SuiteScriptError} SSS_INVALID_CMPGN_EVENT_ID The campaign event is invalid, disabled, or is not a Lead Nurturing Email event.
     * @throws {error.SuiteScriptError} SSS_AUTHOR_MUST_BE_EMPLOYEE The author internal id or email must match an employee.
     * @throws {error.SuiteScriptError} SSS_INVALID_TO_EMAIL One or more recipient emails are not valid.
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT {method name}: Missing a required argument: {param name}
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE Wrong parameter type: {param name} is expected as {param type}.
     */
    promise(campaignEventId: number | string, recipientId: number | string): Promise<number>;
  };

}

declare namespace email {

  /**
   * RelatedRecords represents the NetSuite records to which an Email Message record should be attached.
   */
  interface RelatedRecords {

    /**
     * Transaction record to attach the Message record to. Use for transaction and opportunity record types.
     */
    transactionId?: number | string,

    /**
     * Activity record to attach the Message record to. Use for Case and Campaign record types.
     */
    activityId?: number | string,

    /**
     * Entity record to attach the Message record to. Use for all Entity record types (for example, customer, contact).
     */
    entityId?: number | string,

    /**
     * Custom record to attach the Message record to. Both the record ID and the record type must be specified.
     */
    customRecord?: {

      /**
       * The instance ID of the custom record to attach the Message record to.
       */
      id: number | string,

      /**
       * The custom record type to attach the Message record to (script ID such as customrecord_x, or the record type ID shown in the record's URL as rectype=N).
       */
      recordType: record.CustomType | number | string,
    },
  }

}
