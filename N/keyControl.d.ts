/// <reference path="./file.d.ts" />

/**
 * SuiteScript keyControl module
 *
 * Use the N/keyControl module to use SSH keys and access key storage. Keys can also be managed in the UI
 * at Setup > Company > Preferences > Keys. The SSH keys managed by this module are used to transfer files
 * and manage directories via the SSH file transfer (SFTP) protocol (see also `N/sftp`).
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557413213}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557413213.html}
 *
 * @module N/keyControl
 * @NApiVersion 2.x
 */
interface keyControl {

  /**
   * Returns a list of keys that are available to the user.
   *
   * `name` and `description` can each be either a plain string (matched as equals by default) or a filter
   * object with `value` (required), `operator` (one of `keyControl.Operator`, defaults to `EQUALS`), and
   * `ignoreCase` (defaults to `true`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557413246}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557413246.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param [options]
   * @param [options.restriction] The internal ID of an employee selected in the Restrict to Employees field.
   * @param [options.name] The name of the key, as a string (equals match) or a filter object.
   * @param [options.description] The description of the key, as a string (equals match) or a filter object.
   * @return Metadata about the keys that match the filter.
   */
  findKeys(options?: {
    restriction?: number,
    name?: string | {
      value: string,
      operator?: keyControl.Operator | `${keyControl.Operator}`,
      ignoreCase?: boolean,
    },
    description?: string | {
      value: string,
      operator?: keyControl.Operator | `${keyControl.Operator}`,
      ignoreCase?: boolean,
    },
  }): keyControl.KeyMetadata[];

  /**
   * Creates a key record on the Keys page using a file from the File Cabinet.
   *
   * Can be called with the full options to produce a populated `keyControl.Key`, or with no arguments to
   * return an empty `keyControl.Key` on which properties are set manually before calling `Key.save()`.
   * `Key.save()` returns `{scriptId: string}` — capture it for subsequent operations, since the original
   * `Key` instance's `scriptId` property remains `null` after save.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557417459}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557417459.html}
   *
   * @governance 10 units
   * @since 2019.2
   *
   * @param [options]
   * @param options.file The File Cabinet file containing the key. The key must be in PEM format.
   * @param options.name The name of the key.
   * @param [options.description] The description of the key.
   * @param [options.password] The password that is associated with the key. The script ID of an API secret is accepted for this value.
   * @param [options.scriptId] The script ID for the newly-created key. NetSuite prepends this ID with `'custkey'`. If you do not provide an ID, one is auto-generated.
   * @param [options.restrictions] The array of employee internal IDs selected in the Restricted to Employees field. If you select employees, only those employees can use this key.
   * @return The created key object (not yet persisted — call `Key.save()` to persist).
   */
  createKey(options?: {
    file: file.File,
    name: string,
    description?: string,
    password?: string,
    scriptId?: string,
    restrictions?: (number | string)[],
  }): keyControl.Key;

  /**
   * Deletes a key.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557417847}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557417847.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.scriptId The script ID of the key to be deleted. `Key.save()` and `keyControl.findKeys(options)` return the script ID.
   * @return An object containing the script ID of the deleted key.
   */
  deleteKey(options: {
    scriptId: string,
  }): { scriptId: string };

  /**
   * Loads a key.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557417962}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557417962.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2019.2
   *
   * @param options
   * @param options.scriptId The script ID of the key to be loaded. `Key.save()` and `keyControl.findKeys(options)` return the script ID.
   * @return The loaded key.
   */
  loadKey(options: {
    scriptId: string,
  }): keyControl.Key;

  /**
   * Locks a key that has been uploaded to the Private Keys list in the UI or created using
   * `keyControl.createKey(options)`. Locked keys cannot be edited in the UI until they are unlocked with
   * `keyControl.unlock(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161351701469}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161351701469.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.id The script ID or internal ID for the key you want to lock.
   *
   * @throws {error.SuiteScriptError} KEY_NOT_FOUND The key with the ID provided does not exist in this account.
   * @throws {error.SuiteScriptError} ACCESS_TO_KEY_RESTRICTED The current employee or script does not have permission to access or edit the key.
   * @throws {error.SuiteScriptError} KEY_ALREADY_LOCKED The key has already been locked.
   */
  lock(options: {
    id: string,
  }): void;

  /**
   * Unlocks a key that has been locked with `keyControl.lock(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161351774208}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161351774208.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.id The script ID or internal ID for the key you want to unlock.
   *
   * @throws {error.SuiteScriptError} KEY_NOT_FOUND The key with the ID provided does not exist in this account.
   * @throws {error.SuiteScriptError} ACCESS_TO_KEY_RESTRICTED The current employee or script does not have permission to access or edit the key.
   * @throws {error.SuiteScriptError} KEY_NOT_LOCKED The key is not locked and cannot be unlocked.
   */
  unlock(options: {
    id: string,
  }): void;
}

declare namespace keyControl {

  /**
   * Holds the values for the key operators of `keyControl.findKeys(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557413265}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557413265.html}
   *
   * @since 2019.2
   */
  export enum Operator {
    STARTS_WITH = 'STARTS_WITH',
    CONTAINS = 'CONTAINS',
    ENDS_WITH = 'ENDS_WITH',
    EQUALS = 'EQUALS',
  }

  /**
   * Metadata about a single key, as returned in the array from `keyControl.findKeys(options)`. Distinct
   * from the `keyControl.Key` object returned by `keyControl.loadKey` — this is a read-only summary.
   *
   * @since 2019.2
   */
  interface KeyMetadata {

    /**
     * The script ID of the key (e.g. `'custkey123'`).
     */
    readonly id: string;

    /**
     * The start of the key's validity period, or `null` if not set.
     */
    readonly validFrom: Date | null;

    /**
     * The end of the key's validity period, or `null` if not set.
     */
    readonly validTo: Date | null;

    /**
     * The filename of the PEM file that backs this key.
     */
    readonly fileName: string;

    /**
     * The display name of the key.
     */
    readonly name: string;

    /**
     * The description of the key, or `null` if not set.
     */
    readonly description: string | null;

    /**
     * Internal IDs of employees the key is restricted to (empty array if unrestricted).
     */
    readonly restrictions: number[];

    /**
     * Script IDs the key is restricted to (empty array if unrestricted).
     */
    readonly scriptRestrictions: string[];

    /**
     * Internal IDs of subsidiaries the key is scoped to (empty array if not scoped).
     *
     * This is populated only when a key is scoped to subsidiaries through the Keys UI
     * (Setup > Company > Keys). The `keyControl` API cannot set it: `createKey(options)` has no
     * subsidiaries parameter, `Key` has no subsidiaries property, and neither persists one. As a
     * result it reads as an empty array for every key created from a script. The element type
     * mirrors the documented "internal IDs" and the sibling `restrictions` field.
     */
    readonly subsidiaries: number[];
  }

  /**
   * Represents a key. Returned by `keyControl.createKey(options)` and `keyControl.loadKey(options)`.
   *
   * Note: `scriptId` remains `null` on a `Key` returned from `createKey` even after `save()` is called.
   * Capture the scriptId from `save()`'s return (`{scriptId: string}`) to reference the key afterwards.
   * `password` is effectively write-only — reading it returns the string `'********'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_156035916506}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156035916506.html}
   *
   * @since 2019.2
   */
  interface Key {

    /**
     * The file object of the key.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557418153}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557418153.html}
     *
     * @since 2019.2
     */
    file: file.File;

    /**
     * The password of the key. This property is write-only — reading it returns the sentinel string
     * `'********'`. Either a GUID (created via `Form.addCredentialField(options)`) or an API secret's
     * script ID is accepted.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557418554}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557418554.html}
     *
     * @since 2019.2
     */
    password: string;

    /**
     * The script ID of the key. `Key.save()` and `keyControl.findKeys(options)` return the script ID.
     *
     * On a `Key` returned from `keyControl.createKey(options)`, this property is `null` until the key is
     * loaded via `keyControl.loadKey(options)` — even after `save()`. Capture the scriptId from `save()`'s
     * return value instead.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557418581}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557418581.html}
     *
     * @since 2019.2
     */
    scriptId: string | null;

    /**
     * The name of the key.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557418612}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557418612.html}
     *
     * @since 2019.2
     */
    name: string;

    /**
     * The description of the key.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557418633}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557418633.html}
     *
     * @since 2019.2
     */
    description: string;

    /**
     * An array of employee IDs. Only these employees can access the key.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557418660}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557418660.html}
     *
     * @since 2019.2
     */
    restrictions: (number | string)[];

    /**
     * An array of script IDs. Only these scripts can access the key.
     *
     * Not listed in the public documentation, but present on the runtime `Key` object. Corresponds to
     * the "Restrict to Scripts" field in the UI.
     *
     * @since 2019.2
     */
    scriptRestrictions: string[];

    /**
     * Saves the key.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557418685}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1557418685.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2019.2
     *
     * @return An object containing the script ID of the saved key.
     */
    save(): { scriptId: string };

    /**
     * Returns the Key's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @return A snapshot of this Key's data properties.
     *
     * @since 2019.2
     */
    toJSON(): ExcludeMethods<this>;
  }
}
