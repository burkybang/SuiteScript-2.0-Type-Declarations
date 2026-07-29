/**
 * SuiteScript log module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html}
 *
 * @module N/log
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface log {

  /**
   * Logs a Debug-level message. Debug entries appear on the Execution Log subtab only when the
   * script deployment's Log Level is set to Debug. Use for development and troubleshooting.
   *
   * The method never throws — any value passed (including `null`, `undefined`, numbers, objects,
   * arrays, booleans, or `title` strings over 99 characters and `details` over 3999 characters)
   * is accepted silently. `title` longer than 99 characters and `details` longer than 3999
   * characters are truncated in the rendered log entry, not rejected. If `title` is `null`,
   * `undefined`, an empty string, or omitted, the log entry displays as "Untitled".
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385329}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385329.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — up to 100,000 log calls per 60-minute window across all scripts in the account, with NetSuite raising a script's log level automatically if it exceeds the limit)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param options
   * @param options.title Text shown in the Title column of the Execution Log. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted causes "Untitled" to display. Any value type is accepted at runtime (numbers, objects, arrays, etc. are coerced for display).
   * @param [options.details] The body of the log entry. If a JavaScript object/array, `JSON.stringify` is called before display. Non-object types (strings, numbers, booleans) are shown as-is. Truncated at 3999 characters.
   */
  debug(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Positional-form overload of `log.debug`. Equivalent to `log.debug({title, details})`. Logs a
   * Debug-level message. Debug entries appear on the Execution Log subtab only when the script
   * deployment's Log Level is set to Debug.
   *
   * Like the options form, this overload never throws on bad input — any value is accepted silently.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385329}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385329.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — 100,000 calls / 60 minutes / account)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param title Text shown in the Title column. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted displays as "Untitled".
   * @param [details] The body of the log entry. Object/array values are `JSON.stringify`d; primitives shown as-is. Truncated at 3999 characters.
   */
  debug(title: any, details?: any): void;

  /**
   * Logs an Audit-level message. Audit entries appear when the deployment's Log Level is Audit or
   * Debug. Use for scripts in production to record routine events worth retaining (data changes,
   * external calls, workflow milestones, etc.).
   *
   * The method never throws on bad input — any value is accepted silently. Truncation and
   * "Untitled" behavior are identical to `log.debug`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430384449}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430384449.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — 100,000 calls / 60 minutes / account)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param options
   * @param options.title Text shown in the Title column. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted displays as "Untitled". Any value type accepted.
   * @param [options.details] Object/array values are `JSON.stringify`d; primitives shown as-is. Truncated at 3999 characters.
   */
  audit(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Positional-form overload of `log.audit`. Equivalent to `log.audit({title, details})`. Logs an
   * Audit-level message. Audit entries appear when the deployment's Log Level is Audit or Debug.
   *
   * The method never throws on bad input — any value is accepted silently.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430384449}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430384449.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — 100,000 calls / 60 minutes / account)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param title Text shown in the Title column. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted displays as "Untitled".
   * @param [details] Object/array values are `JSON.stringify`d; primitives shown as-is. Truncated at 3999 characters.
   */
  audit(title: any, details?: any): void;

  /**
   * Logs an Error-level message. Error entries appear when the deployment's Log Level is Error,
   * Audit, or Debug. Use for unexpected script errors that should be captured even in production.
   *
   * The method never throws on bad input — any value is accepted silently.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385812}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385812.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — 100,000 calls / 60 minutes / account)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param options
   * @param options.title Text shown in the Title column. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted displays as "Untitled". Any value type accepted.
   * @param [options.details] Object/array values are `JSON.stringify`d; primitives shown as-is. Truncated at 3999 characters.
   */
  error(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Positional-form overload of `log.error`. Equivalent to `log.error({title, details})`. Logs an
   * Error-level message. Error entries appear when the deployment's Log Level is Error, Audit, or
   * Debug.
   *
   * The method never throws on bad input — any value is accepted silently.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385812}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385812.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — 100,000 calls / 60 minutes / account)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param title Text shown in the Title column. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted displays as "Untitled".
   * @param [details] Object/array values are `JSON.stringify`d; primitives shown as-is. Truncated at 3999 characters.
   */
  error(title: any, details?: any): void;

  /**
   * Logs an Emergency-level message. Emergency entries always appear, regardless of the
   * deployment's Log Level setting. Use for critical issues that demand immediate attention.
   *
   * The method never throws on bad input — any value is accepted silently.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385611}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385611.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — 100,000 calls / 60 minutes / account)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param options
   * @param options.title Text shown in the Title column. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted displays as "Untitled". Any value type accepted.
   * @param [options.details] Object/array values are `JSON.stringify`d; primitives shown as-is. Truncated at 3999 characters.
   */
  emergency(options: {
    title: any,
    details?: any,
  }): void;

  /**
   * Positional-form overload of `log.emergency`. Equivalent to `log.emergency({title, details})`.
   * Logs an Emergency-level message. Emergency entries always appear, regardless of the
   * deployment's Log Level setting.
   *
   * The method never throws on bad input — any value is accepted silently.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4430385611}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4430385611.html}
   *
   * @governance none (per-call cost is 0; throttled at the account level — 100,000 calls / 60 minutes / account)
   * @restriction Client-side and server-side scripts (except form-attached client scripts, where `console.log` should be used instead — the N/log methods are no-ops in that context)
   * @since 2016.1
   *
   * @param title Text shown in the Title column. Truncated at 99 characters. `null`, `undefined`, empty string, or omitted displays as "Untitled".
   * @param [details] Object/array values are `JSON.stringify`d; primitives shown as-is. Truncated at 3999 characters.
   */
  emergency(title: any, details?: any): void;

  /**
   * Read-only tuple of supported log-level names in increasing severity order. Useful for
   * iteration or building level-aware UI. The tuple values match the method names of this module
   * uppercased: `DEBUG` → `log.debug`, `AUDIT` → `log.audit`, etc.
   *
   * The runtime value is a plain array (not frozen), but consumers should treat it as read-only.
   * Undocumented in the Help Center — `LOG_LEVELS` is exposed at runtime but not in the published
   * `N/log Module` reference.
   */
  LOG_LEVELS: [
    'DEBUG',
    'AUDIT',
    'ERROR',
    'EMERGENCY',
  ];
}

declare const log: log;
