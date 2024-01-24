/**
 * SuiteScript log module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html}
 *
 * @module N/log
 * @NApiVersion 2.x
 */
interface log {

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385329}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385329.html}
   *
   * @param options
   * @param options.title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [options.details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  debug(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385329}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385329.html}
   *
   * @param title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  debug(title: any, details?: any): void;

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430384449}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430384449.html}
   *
   * @param options
   * @param options.title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [options.details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  audit(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430384449}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430384449.html}
   *
   * @param title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  audit(title: any, details?: any): void;

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385812}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385812.html}
   *
   * @param options
   * @param options.title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [options.details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  error(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385812}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385812.html}
   *
   * @param title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  error(title: any, details?: any): void;

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385611}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385611.html}
   *
   * @param options
   * @param options.title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [options.details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  emergency(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Log a debug level message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385611}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385611.html}
   *
   * @param title The text to appear in the Title column on the Execution Log tab of the script deployment. Maximum length is 99 characters. If you set this value to null, an empty string (''), or omit it, the word “Untitled” appears for the log entry.
   * @param [details] You can pass any value for this parameter. If the value is a JavaScript Object type, JSON.stringify(obj) is called on the object before displaying the value. NetSuite truncates any resulting string over 3999 characters.
   */
  emergency(title: any, details?: any): void;

  LOG_LEVELS: [
    'DEBUG',
    'AUDIT',
    'ERROR',
    'EMERGENCY',
  ];
}

declare const log: log;