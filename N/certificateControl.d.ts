/// <reference path="./error.d.ts" />
/// <reference path="./file.d.ts" />

/**
 * SuiteScript certificateControl module
 *
 * Use the N/certificateControl module to enable scripting access to the Digital Certificates list found
 * in the UI at Setup > Company > Certificates. You can find, create, update, read, and delete certificate
 * records.
 *
 * To access this module, the script deployment's Execute As Role must be Administrator or a custom role
 * with the Certificate Access permission.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547247950}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547247950.html}
 *
 * @module N/certificateControl
 * @NApiVersion 2.x
 */
interface certificateControl {

  /**
   * Returns metadata about the certificates that are available to the user. With no parameters, all
   * certificate records are returned.
   *
   * `name` and `description` can each be either a plain string (matched as equals by default) or a filter
   * object with `value` (required), `operator` (one of `certificateControl.Operator`, defaults to `EQUALS`),
   * and `ignoreCase` (defaults to `true`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547249535}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547249535.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.1
   *
   * @param [options]
   * @param [options.description] The certificate description, as a string (equals match) or a filter object.
   * @param [options.name] The certificate name, as a string (equals match) or a filter object.
   * @param [options.notification] The internal ID of an employee selected in the Copy Employees field.
   * @param [options.restriction] The internal ID of an employee selected in the Restrict to Employees field.
   * @param [options.scriptRestriction] Script name to filter for certificates restricted to a particular script.
   * @param [options.subsidiary] The internal ID of the subsidiary.
   * @param [options.type] The certificate file type.
   * @return Metadata about the certificates that match the filter.
   */
  findCertificates(options?: {
    description?: string | {
      value: string,
      operator?: certificateControl.Operator | `${certificateControl.Operator}`,
      ignoreCase?: boolean,
    },
    name?: string | {
      value: string,
      operator?: certificateControl.Operator | `${certificateControl.Operator}`,
      ignoreCase?: boolean,
    },
    notification?: number,
    restriction?: number,
    scriptRestriction?: string,
    subsidiary?: number,
    type?: certificateControl.Type | `${certificateControl.Type}`,
  }): certificateControl.CertificateMetadata[];

  /**
   * Returns an audit trail of how a certificate has been used, including operations performed with timestamps.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156146904779}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156146904779.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param [options]
   * @param [options.from] The start date for the audit trail search.
   * @param [options.to] The end date for the audit trail search.
   * @param [options.id] The script ID of the certificate record.
   * @param [options.operation] The operation performed with the certificate.
   * @param [options.script] The internal ID of a script record that used a certificate record.
   * @param [options.deploy] The internal ID of a script deployment that used a certificate record.
   * @param [options.entity] The internal ID of the employee who performed the operation.
   * @return An array of operations performed.
   *
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG A parameter provided is the wrong type.
   * @throws {error.SuiteScriptError} TOO_MANY_RESULTS There are more than 1000 results.
   */
  findUsages(options?: {
    from?: Date,
    to?: Date,
    id?: string,
    operation?: certificateControl.Operation | `${certificateControl.Operation}`,
    script?: number,
    deploy?: number,
    entity?: number,
  }): certificateControl.Usage[];

  /**
   * Creates a certificate record on the Certificates page using a file from the File Cabinet.
   *
   * The returned `Certificate` is not yet persisted — call `Certificate.save()` to persist it. Unlike
   * `keyControl.createKey`, the `scriptId` property is populated on the returned `Certificate` from the
   * moment of creation: NetSuite prepends `'custcertificate'` to the provided value (e.g. `'_china'`
   * becomes `'custcertificate_china'`) or autogenerates one if no `scriptId` was provided.
   *
   * Your role must have Create, Edit, or Full access to the Certificate Access permission to create
   * certificates using SuiteScript.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156156407497}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156156407497.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.file The File Cabinet file containing the certificate.
   * @param options.name The name of the certificate record.
   * @param [options.description] The description of the certificate record.
   * @param [options.password] The password associated with the digital certificate. The script ID of an API secret is accepted.
   * @param [options.scriptId] The desired script ID of the certificate record. NetSuite prepends `'custcertificate'`. If omitted, one is auto-generated.
   * @param [options.subsidiaries] Internal IDs of subsidiaries associated with the certificate. Numbers or strings accepted.
   * @param [options.restrictions] Internal IDs of employees in the Restricted to Employees field. Numbers or strings accepted.
   * @param [options.notifications] Internal IDs of employees in the Copy Employees field. Numbers or strings accepted.
   * @param [options.weekReminder] The setting for the Expiration Reminder : Week checkbox.
   * @param [options.monthReminder] The setting for the Expiration Reminder : Month checkbox.
   * @param [options.threeMonthsReminder] The setting for the Expiration Reminder : 3 Months checkbox.
   * @return The created certificate object (not yet persisted — call `Certificate.save()` to persist).
   */
  createCertificate(options: {
    file: file.File,
    name: string,
    description?: string,
    password?: string,
    scriptId?: string,
    subsidiaries?: (number | string)[],
    restrictions?: (number | string)[],
    notifications?: (number | string)[],
    weekReminder?: boolean,
    monthReminder?: boolean,
    threeMonthsReminder?: boolean,
  }): certificateControl.Certificate;

  /**
   * Deletes a certificate record that has been uploaded to the Certificates list in the UI or created
   * using `certificateControl.createCertificate(options)`. The certificate's history is not deleted.
   *
   * Your role must have either Edit or Full access to the Certificate Access permission to delete
   * certificate records using SuiteScript.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156199793585}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156199793585.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.scriptId The script ID or internal ID of the certificate to delete.
   * @return An object containing the script ID of the deleted certificate.
   */
  deleteCertificate(options: {
    scriptId: string,
  }): { scriptId: string };

  /**
   * Loads a certificate record that has been uploaded to the Certificates list in the UI or created
   * using `certificateControl.createCertificate(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156201707058}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156201707058.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.scriptId The script ID or internal ID of the certificate to load.
   * @return The loaded certificate.
   */
  loadCertificate(options: {
    scriptId: string,
  }): certificateControl.Certificate;

  /**
   * Locks a certificate record so that it cannot be edited until it is unlocked with
   * `certificateControl.unlock(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161316650912}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161316650912.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.id The script ID or internal ID of the certificate to lock.
   */
  lock(options: {
    id: string,
  }): void;

  /**
   * Unlocks a certificate record that has been locked with `certificateControl.lock(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161316704169}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161316704169.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.id The script ID or internal ID of the certificate to unlock.
   */
  unlock(options: {
    id: string,
  }): void;
}

declare namespace certificateControl {

  /**
   * Holds the values for the operation when searching for certificates with
   * `certificateControl.findUsages(options)`.
   *
   * Note: at runtime, NetSuite emits a lowercase form of these values in the `Usage.operation` field
   * (e.g. `'find'` for `Operation.FIND`). When comparing a `Usage.operation` value
   * against this enum, case-insensitive comparison is recommended. The case behavior of other members
   * (`POST`, `GET`, `SIGN_STRING`, etc.) at runtime has not been verified.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156348578245}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156348578245.html}
   *
   * @since 2019.2
   */
  export enum Operation {
    CONNECT = 'CONNECT',
    DELETE = 'DELETE',
    FIND = 'FIND',
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST',
    PUT = 'PUT',
    SIGN_STRING = 'SIGN_STRING',
    SIGN_XML = 'SIGN_XML',
    VERIFY_STRING = 'VERIFY_STRING',
    VERIFY_XML = 'VERIFY_XML',
  }

  /**
   * Holds the values for search operators to use with the `name` and `description` parameters of
   * `certificateControl.findCertificates(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156347310616}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156347310616.html}
   *
   * @since 2019.2
   */
  export enum Operator {
    CONTAINS = 'CONTAINS',
    ENDS_WITH = 'ENDS_WITH',
    EQUALS = 'EQUALS',
    STARTS_WITH = 'STARTS_WITH',
  }

  /**
   * Holds the values for the certificate file type to use with the `type` parameter of
   * `certificateControl.findCertificates(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1547250231}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1547250231.html}
   *
   * @since 2019.1
   */
  export enum Type {
    PFX = 'PFX',
    P12 = 'P12',
    PEM = 'PEM',
  }

  /**
   * Metadata about a single certificate, as returned in the array from
   * `certificateControl.findCertificates(options)`. Distinct from the `certificateControl.Certificate`
   * object returned by `certificateControl.loadCertificate` — this is a read-only summary.
   *
   * @since 2019.1
   */
  interface CertificateMetadata {

    /**
     * The script ID of the certificate (e.g. `'custcertificate_china'`).
     */
    readonly id: string;

    /**
     * The start of the certificate's validity period.
     */
    readonly validFrom: Date;

    /**
     * The end of the certificate's validity period.
     */
    readonly validTo: Date;

    /**
     * The filename of the certificate file in the File Cabinet.
     */
    readonly fileName: string;

    /**
     * The display name of the certificate.
     */
    readonly name: string;

    /**
     * The description of the certificate, or `null` if not set.
     */
    readonly description: string | null;

    /**
     * The setting of the Week box for Expiration Reminders.
     */
    readonly weekReminder: boolean;

    /**
     * The setting of the Month box for Expiration Reminders.
     */
    readonly monthReminder: boolean;

    /**
     * The setting of the 3 Months box for Expiration Reminders.
     *
     * Note: NetSuite metadata names this field `threeMonths` (no `Reminder` suffix), while the
     * corresponding field on the loaded `Certificate` is `threeMonthsReminder`.
     */
    readonly threeMonths: boolean;

    /**
     * Internal IDs of employees in the Copy Employees field (empty array if none).
     */
    readonly notifications: number[];

    /**
     * Internal IDs of employees in the Restrict to Employees field (empty array if unrestricted).
     */
    readonly restrictions: number[];

    /**
     * Script IDs the certificate is restricted to (empty array if unrestricted). Not listed in the
     * public documentation, but present on the runtime metadata.
     */
    readonly scriptRestrictions: string[];

    /**
     * Internal IDs of subsidiaries the certificate is scoped to (empty array if not scoped).
     */
    readonly subsidiaries: number[];
  }

  /**
   * A single usage record from `certificateControl.findUsages(options)`. Each record represents one
   * operation performed with a certificate.
   *
   * @since 2019.2
   */
  interface Usage {

    /**
     * Timestamp of the operation.
     */
    readonly date: Date;

    /**
     * The script ID of the certificate, or `null` if the operation isn't associated with a specific
     * certificate (observed `null` for `'find'` operations).
     */
    readonly id: string | null;

    /**
     * The operation performed. NetSuite emits a lowercase form of `certificateControl.Operation`
     * values at runtime (e.g. `'find'` for `Operation.FIND`). Other members'
     * runtime case has not been verified.
     */
    readonly operation: string;

    /**
     * The internal ID of the script that used the certificate, or `-1` if no script context.
     */
    readonly script: number;

    /**
     * The internal ID of the script deployment that used the certificate, or `-1` if no deployment context.
     */
    readonly deploy: number;

    /**
     * The internal ID of the employee who performed the operation.
     */
    readonly entity: number;
  }

  /**
   * Represents a digital certificate. Returned by `certificateControl.createCertificate(options)` and
   * `certificateControl.loadCertificate(options)`.
   *
   * Note: Unlike `keyControl.Key.scriptId` (which remains `null` until the key is reloaded after save),
   * `Certificate.scriptId` is populated from the moment a `Certificate` is returned by `createCertificate()`.
   * NetSuite prepends `'custcertificate'` to the supplied `scriptId` (e.g. `'_china'` becomes
   * `'custcertificate_china'`) at create time.
   *
   * `password` is effectively write-only — reading it returns the sentinel string `'********'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156201811375}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156201811375.html}
   *
   * @since 2019.2
   */
  interface Certificate {

    /**
     * The file object of the certificate.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156261189191}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156261189191.html}
     *
     * @since 2019.2
     */
    file: file.File;

    /**
     * The script ID of the certificate (e.g. `'custcertificate_china'`).
     *
     * Populated from the moment the `Certificate` is returned by `createCertificate()` — NetSuite
     * prepends `'custcertificate'` to the provided `scriptId` at create time. This differs from
     * `keyControl.Key.scriptId` which remains `null` until the key is reloaded after save.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156269109525}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156269109525.html}
     *
     * @since 2019.2
     */
    scriptId: string;

    /**
     * The name of the certificate record.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156261266478}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156261266478.html}
     *
     * @since 2019.2
     */
    name: string;

    /**
     * The description of the certificate record.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156218882054}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156218882054.html}
     *
     * @since 2019.2
     */
    description: string;

    /**
     * The password for the digital certificate. This property is write-only — reading it returns the
     * sentinel string `'********'`. Either a GUID (created via `Form.addCredentialField(options)`) or
     * an API secret's script ID is accepted.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156263312543}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156263312543.html}
     *
     * @since 2019.2
     */
    password: string;

    /**
     * Internal IDs of subsidiaries associated with the certificate. Numbers or strings accepted on input.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156269250571}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156269250571.html}
     *
     * @since 2019.2
     */
    subsidiaries: (number | string)[];

    /**
     * Internal IDs of employees in the Restrict to Employees field. Numbers or strings accepted on input.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156263396061}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156263396061.html}
     *
     * @since 2019.2
     */
    restrictions: (number | string)[];

    /**
     * Internal IDs of employees in the Copy Employees field. Numbers or strings accepted on input.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156263222400}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156263222400.html}
     *
     * @since 2019.2
     */
    notifications: (number | string)[];

    /**
     * Script IDs the certificate is restricted to. Not listed in the public documentation, but
     * present on the runtime `Certificate` object. Corresponds to the
     * "Restrict to Scripts" field in the UI.
     *
     * @since 2019.2
     */
    scriptRestrictions: string[];

    /**
     * The setting of the Week box for Expiration Reminders.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156269529064}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156269529064.html}
     *
     * @since 2019.2
     */
    weekReminder: boolean;

    /**
     * The setting of the Month box for Expiration Reminders.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156263099184}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156263099184.html}
     *
     * @since 2019.2
     */
    monthReminder: boolean;

    /**
     * The setting of the 3 Months box for Expiration Reminders.
     *
     * Note: This field is named `threeMonthsReminder` on the loaded `Certificate`, but `threeMonths`
     * (no `Reminder` suffix) on the `CertificateMetadata` returned by `findCertificates`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156269504090}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156269504090.html}
     *
     * @since 2019.2
     */
    threeMonthsReminder: boolean;

    /**
     * Saves the certificate record.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156218491774}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156218491774.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @return An object containing the script ID of the saved certificate.
     */
    save(): { scriptId: string };

    /**
     * Returns the Certificate's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     *
     * @return A snapshot of this Certificate's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }
}
