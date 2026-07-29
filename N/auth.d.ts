/// <reference path="./error.d.ts" />

/**
 * SuiteScript auth module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296360422}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296360422.html}
 *
 * @module N/auth
 * @NApiVersion 2.x
 */
interface auth {

  /**
   * Changes the current user's NetSuite email address (user name).
   *
   * Validation order at runtime: (1) `options.password` presence, (2) `options.newEmail` presence,
   * (3) `options.onlyThisAccount` type (if provided), (4) `newEmail` format, (5) `password` match
   * against the user's actual current password.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4298156427}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4298156427.html}
   *
   * @governance 10 units (billed only for post-validation failures and successes; the pre-validation `SSS_MISSING_REQD_ARGUMENT` and `WRONG_PARAMETER_TYPE` errors do NOT bill any governance)
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.password The logged-in user's current NetSuite password. Used to authenticate the change; must match the user's actual password or `INVALID_PSWD` is thrown. NetSuite throttles wrong-password attempts (~6 seconds per failed call) — consumer code should NOT loop on `INVALID_PSWD`.
   * @param options.newEmail The new email address. Must contain `@` and a TLD; addresses like `foo@bar` (no dot in domain) are rejected with `INVALID_EMAIL` even though they're RFC-valid. Empty strings are treated as missing.
   * @param [options.onlyThisAccount=true] If `true`, the email change applies only to roles within the current NetSuite account. If `false`, it applies to all accounts and roles for this user. Defaults to `true` only when the property is truly omitted; setting it to `null` triggers `WRONG_PARAMETER_TYPE` rather than defaulting.
   *
   * @throws {TypeError} (pre-validation, not a normal SuiteScript code) If `options` is `undefined`/`null`, the JS implementation crashes with `"Cannot read property 'password' of undefined/null"` before any SSS_* check fires. Sibling `changePassword` handles the same input cleanly with `SSS_MISSING_REQD_ARGUMENT` — NetSuite-side inconsistency.
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.password` or `options.newEmail` is missing, `null`, or an empty string. (Docs label this `SSS_MISSING_REQD_PARAMETER` — that's wrong; runtime emits `SSS_MISSING_REQD_ARGUMENT`.) Any non-object `options` primitive (e.g. a string) is treated as `{}` and produces this error.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE If `options.onlyThisAccount` is not a boolean (string, number, `null`, etc.). The runtime error message has a typo — `"options.onlyThisAccoun is expected as boolean."` (missing trailing `t` on the property name).
   * @throws {error.SuiteScriptError} INVALID_EMAIL If `options.newEmail` is not a valid email address format. Message: `"Email address is not valid."`. NetSuite's format check is stricter than RFC — requires a TLD.
   * @throws {error.SuiteScriptError} INVALID_PSWD If `options.password` does not match the user's current password. Message: `"The current password you supplied is incorrect."`. Note that for `changeEmail` this is the only INVALID_PSWD scenario — there is no new password being set, so password-rules validation doesn't apply.
   */
  changeEmail(options: {
    password: string,
    newEmail: string,
    onlyThisAccount?: boolean,
  }): void;

  changePassword: {

    /**
     * Changes the current user's NetSuite password.
     *
     * Validation order at runtime: (1) `options.currentPassword` presence, (2) `options.newPassword`
     * presence, (3) `currentPassword` match against actual password, (4) `newPassword` conforms to
     * the account's password rules (Setup > Company > General Preferences > Password Policy).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4298157647}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4298157647.html}
     *
     * @governance 10 units (billed only for post-validation failures and successes; the pre-validation `SSS_MISSING_REQD_ARGUMENT` error does NOT bill any governance)
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.currentPassword The logged-in user's current NetSuite password. Must match exactly or `INVALID_PSWD` is thrown. NetSuite throttles wrong-password attempts (~6 seconds per failed call) — consumer code should NOT loop on `INVALID_PSWD`.
     * @param options.newPassword The new password. Must conform to the account's password rules (see Help Center "Creating a Strong Password"). Empty strings are treated as missing.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.currentPassword` or `options.newPassword` is missing, `null`, or an empty string. Unlike `changeEmail`, `options=undefined`/`null` is handled cleanly here (also produces this error) rather than crashing with `TypeError`.
     * @throws {error.SuiteScriptError} INVALID_PSWD Two distinct scenarios: (a) `currentPassword` does not match the user's actual password — message `"The current password you supplied is incorrect."` (fires before `newPassword` rule validation, so this is the typical case observed at runtime); (b) `newPassword` does not conform to the account's password rules — only reachable when `currentPassword` matches.
     */
    (options: {
      currentPassword: string,
      newPassword: string,
    }): void;

    /**
     * Changes the current user's NetSuite password. Positional-form overload of
     * {@link auth.changePassword}; equivalent to `auth.changePassword({currentPassword, newPassword})`.
     *
     * Validation order at runtime: (1) `currentPassword` presence, (2) `newPassword`
     * presence, (3) `currentPassword` match against actual password, (4) `newPassword` conforms to
     * the account's password rules (Setup > Company > General Preferences > Password Policy).
     *
     * The runtime's `SSS_MISSING_REQD_ARGUMENT` messages use `options.<field>` wording
     * even when called positionally — the error reports `options.currentPassword` /
     * `options.newPassword` regardless of call form.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4298157647}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4298157647.html}
     *
     * @governance 10 units (billed only for post-validation failures and successes; the pre-validation `SSS_MISSING_REQD_ARGUMENT` error does NOT bill any governance)
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param currentPassword The logged-in user's current NetSuite password. Must match exactly or `INVALID_PSWD` is thrown. NetSuite throttles wrong-password attempts (~6 seconds per failed call) — consumer code should NOT loop on `INVALID_PSWD`.
     * @param newPassword The new password. Must conform to the account's password rules (see Help Center "Creating a Strong Password"). Empty strings are treated as missing.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `currentPassword` or `newPassword` is missing, `null`, or an empty string. Calling `auth.changePassword()` with no arguments (so both effectively `undefined`) is handled cleanly here (also produces this error) rather than crashing with `TypeError` the way `auth.changeEmail` does.
     * @throws {error.SuiteScriptError} INVALID_PSWD Two distinct scenarios: (a) `currentPassword` does not match the user's actual password — message `"The current password you supplied is incorrect."` (fires before `newPassword` rule validation, so this is the typical case observed at runtime); (b) `newPassword` does not conform to the account's password rules — only reachable when `currentPassword` matches.
     */
    (
      currentPassword: string,
      newPassword: string,
    ): void;
  };
}
