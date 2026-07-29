/// <reference path="./error.d.ts" />

/**
 * SuiteScript file module
 *
 * Read, write, copy, and delete files in the NetSuite File Cabinet. New files
 * begin as in-memory `file.File` wrappers via `file.create(...)`; calling
 * `file.save()` persists them and assigns an ID. Existing files are loaded
 * by ID or path via `file.load(...)`. Use `file.copy(...)` to duplicate a
 * stored file with conflict-resolution semantics, and `file.delete(...)` to
 * remove one.
 *
 * In-memory content limit is 10 MB (returns and accumulators like
 * `File.getContents()`); streaming methods (`File.save()`) are not subject
 * to that limit.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4205693274}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4205693274.html}
 *
 * @module N/file
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface file {

  /**
   * Copies an existing file in the NetSuite File Cabinet to a target folder.
   * The copied file inherits properties from the original (e.g. `isOnline`,
   * `description`). Use `conflictResolution` to control behavior when a file
   * with the same name already exists in the target folder.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161167269293}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161167269293.html}
   *
   * @governance 20 units
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.id The internal ID of the file to copy. The file must already exist in the File Cabinet.
   * @param options.folder The internal ID of the target folder. The folder must already exist.
   * @param [options.conflictResolution] How to resolve a same-name conflict in the target folder. Defaults to `FAIL`.
   * @return The copied `File`. When `conflictResolution` is `OVERWRITE` or `OVERWRITE_CONTENT_AND_ATTRIBUTES` and a conflict occurred, the returned file's `id` is the ID of the OVERWRITTEN existing file (not a new one). When `RENAME_TO_UNIQUE` and a conflict occurred, the returned file has a new ID and a name like `originalName (1).ext`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or if `options.id` or `options.folder` is absent. Message format: `"file.copy: Missing a required argument: <name>"`.
   * @throws {error.SuiteScriptError} INVALID_CONFLICT_RESOLUTION_1 If `options.conflictResolution` is provided but is not one of the `file.NameConflictResolution` enum values. Message format: `"Invalid conflict resolution: <value>"`.
   * @throws {error.SuiteScriptError} A_FILE_OR_FOLDER_WITH_THE_SAME_NAME_ALREADY_EXISTS_IN_THE_SELECTED_FOLDER If `conflictResolution` is `FAIL` (the default) and a same-name file exists in the target folder. Message: `"A file or folder with the same name already exists in the selected folder"`.
   * @throws {error.SuiteScriptError} FILE_DOES_NOT_EXIST_OR_YOU_DON_T_HAVE_ACCESS_TO_THE_FILE If no file with the given `id` exists or the script lacks read permission. Message: `"File does not exist or you don't have access to the file"`.
   * @throws {error.SuiteScriptError} FOLDER_DOES_NOT_EXIST_OR_YOU_DON_T_HAVE_ACCESS_TO_THE_FOLDER If no folder with the given `folder` ID exists or the script lacks access. Message: `"Folder does not exist or you don't have access to the folder"`.
   */
  copy(options: {
    id: number | string,
    folder: number | string,
    conflictResolution?: file.NameConflictResolution | `${file.NameConflictResolution}`,
  }): file.File;

  /**
   * Creates a new in-memory `File` wrapper. The file is NOT persisted to the
   * File Cabinet until `File.save()` is called; before that, `File.id` is
   * `null` and `File.url` is `null`.
   *
   * Content held in memory is limited to 10 MB. For binary file types
   * (e.g. `PDF`), `contents` must be base64-encoded.
   *
   * The `fileType` parameter is matched case-sensitively against the
   * `file.Type` enum values. Unknown values throw `SSS_INVALID_TYPE_ARG`.
   *
   * Unknown properties in the options bag are silently ignored — including
   * common typos like `inInactive` (vs the correct `isInactive`). Such
   * typos compile but do nothing at runtime.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4223861820}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4223861820.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.name The file name including extension (sets `File.name`).
   * @param options.fileType One of the `file.Type` enum values (sets `File.fileType`, read-only after creation).
   * @param [options.contents] The file's content as a string. For binary file types, base64-encoded. Defaults to empty.
   * @param [options.description] Free-form description (sets `File.description`).
   * @param [options.folder] Internal ID of the target File Cabinet folder. Required before `File.save()` (but does not need to be set at create time — can be assigned to `File.folder` later).
   * @param [options.encoding] Character encoding (sets `File.encoding`). Pass `file.Encoding` enum values, not the enum key names — e.g. `file.Encoding.UTF_8` (value `'UTF-8'`), not the literal string `'UTF_8'`.
   * @param [options.isInactive = false] If `true`, the file is marked inactive (sets `File.isInactive`).
   * @param [options.isOnline = false] If `true`, the file is downloadable without a NetSuite login (sets `File.isOnline`).
   * @return The new in-memory `File` wrapper.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or if `options.name` or `options.fileType` is absent. Message formats: for missing options bag, `"file.create: Missing a required argument: options object"`; for missing field, `"file.create: Missing a required argument: <name>"`.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.name` is a non-string, `options.fileType` is not a valid `file.Type` value, or other typed-parameter mismatches. Message format for non-string param: `"You have entered an invalid type argument: <paramName>"`; for unrecognized string `fileType` value: `"You have entered an invalid type argument: <value>"` (asymmetric — value-in-message vs name-in-message depending on input type).
   * @throws {error.SuiteScriptError} INVALID_FILE_ENCODING If `options.encoding` is a string but not a valid `file.Encoding` value. Message format: `"The file encoding: <value> is not valid. Please refer to the documentation for a list of supported file encodings."`.
   * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED If `options.contents` exceeds 10 MB. Message: `"The file you are trying to create exceeds the maximum allowed file size of 10.0 MB."`.
   */
  create(options: {
    name: string,
    fileType: file.Type | `${file.Type}`,
    contents?: string,
    description?: string,
    folder?: number | string,
    encoding?: file.Encoding | `${file.Encoding}`,
    isInactive?: boolean,
    isOnline?: boolean,
  }): file.File;

  /**
   * Permanently deletes a file from the NetSuite File Cabinet. Returns
   * `undefined`. Deleting a non-existent or already-deleted file does NOT
   * throw — this method is idempotent on missing files (different from
   * `file.load`, which throws `INSUFFICIENT_PERMISSION` for unknown IDs).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4226573892}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4226573892.html}
   *
   * @governance 20 units
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.id Internal ID of the file to delete. Number or string. `0`, `-1`, large unknown IDs all silently succeed (no-op).
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or if `options.id` is `null` or empty string. Message format: `"file.delete: Missing a required argument: id"`.
   * @throws {TypeError} If `options` is provided but contains no `id` key (`delete({})`) or `id` is a non-numeric string (`delete({id: "abc"})`). Java-layer crash leak: `"execute on com.netledger.app.common.scripting.api.file.FileApiCommonInterfaceV2.nlapiDeleteFile failed due to: Cannot convert '<value>' ... to Java type 'int'"`. Not wrapped as `SuiteScriptError`.
   */
  delete(options: {
    id: number | string,
  }): void;

  load: {

    /**
     * Loads an existing file from the NetSuite File Cabinet. The file's
     * content is NOT loaded into memory until `File.getContents()`,
     * `File.lines.iterator()`, or similar is called — `load` returns a
     * lightweight wrapper.
     *
     * The argument can be a numeric/string internal ID, or an absolute path
     * (e.g. `'SuiteScripts/folder/file.txt'`), or a relative path
     * (e.g. `'./folder/file.txt'` or `'../sibling/file.txt'`).
     *
     * Unknown IDs surface as `INSUFFICIENT_PERMISSION` (NOT
     * `RCRD_DSNT_EXIST`) — the runtime treats "no such ID" identically to
     * "no access" to avoid leaking ID existence. Unknown PATHS surface as
     * `RCRD_DSNT_EXIST`.
     *
     * The file size limit for this method is 2 GB.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4226574300}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4226574300.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param id The internal ID (number or numeric string) or absolute/relative path to the file.
     * @return The loaded `File` wrapper.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `id` is missing, `null`, or empty string. Message format: `"file.load: Missing a required argument: id"`.
     * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION If the file ID is not found OR the script lacks access. Message: `"You do not have access to the media item you selected."` Note: NetSuite uses this error code for both genuine permission denials and unknown-ID lookups, to avoid leaking ID existence.
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If a path is supplied that doesn't resolve to any file. Message format: `"That record does not exist. path: <path>"`.
     */
    (
      id: number | string,
    ): file.File;

    /**
     * Loads an existing file from the NetSuite File Cabinet. The file's
     * content is NOT loaded into memory until `File.getContents()`,
     * `File.lines.iterator()`, or similar is called — `load` returns a
     * lightweight wrapper.
     *
     * The `id` can be a numeric/string internal ID, or an absolute path
     * (e.g. `'SuiteScripts/folder/file.txt'`), or a relative path
     * (e.g. `'./folder/file.txt'` or `'../sibling/file.txt'`).
     *
     * Unknown IDs surface as `INSUFFICIENT_PERMISSION` (NOT
     * `RCRD_DSNT_EXIST`) — the runtime treats "no such ID" identically to
     * "no access" to avoid leaking ID existence. Unknown PATHS surface as
     * `RCRD_DSNT_EXIST`.
     *
     * The file size limit for this method is 2 GB.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4226574300}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4226574300.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @param options
     * @param options.id The internal ID (number or numeric string) or absolute/relative path to the file.
     * @return The loaded `File` wrapper.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or if `options.id` is missing/null/empty. Message format: `"file.load: Missing a required argument: id"`.
     * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION If the file ID is not found OR the script lacks access. Message: `"You do not have access to the media item you selected."` NetSuite uses this code for both genuine permission denials and unknown-ID lookups.
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If a path is supplied that doesn't resolve to any file. Message format: `"That record does not exist. path: <path>"`.
     */
    (options: {
      id: number | string,
    }): file.File;
  };
}

declare namespace file {

  /**
   * Character encoding names recognized by `File.encoding` and accepted by
   * `file.create({encoding: ...})`.
   *
   * **IMPORTANT — the enum value strings are NOT the enum key names.** Each
   * member's value is the canonical encoding name the runtime uses
   * internally (e.g. `'UTF-8'` with a dash, `'windows-1252'` lowercase,
   * `'Big5'` mixed-case). Passing the enum KEY name (e.g. the literal
   * string `'UTF_8'` with an underscore) throws `INVALID_FILE_ENCODING` —
   * always use the enum reference (`file.Encoding.UTF_8`) or the literal
   * value (`'UTF-8'`), not the key name as a string.
   *
   * The Help Center description-field strings (e.g. "Unicode", "Western",
   * "Chinese Simplified") are human-readable labels for the encodings, NOT
   * valid runtime values.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4228998505}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4228998505.html}
   *
   * @restriction Server-side scripts only
   * @since 2015.2
   */
  export enum Encoding {
    /** Unicode UTF-8. */
    UTF_8 = 'UTF-8',
    /** Western (Windows-1252) — the default for the U.S. edition. */
    WINDOWS_1252 = 'windows-1252',
    /** Western (ISO-8859-1) — Latin-1. */
    ISO_8859_1 = 'ISO-8859-1',
    /** Chinese Simplified (GB18030). */
    GB18030 = 'GB18030',
    /** Japanese (Shift JIS). */
    SHIFT_JIS = 'SHIFT_JIS',
    /** Western (Mac Roman). */
    MAC_ROMAN = 'MacRoman',
    /** Chinese Simplified (GB2312). */
    GB2312 = 'GB2312',
    /** Chinese Traditional (Big5). */
    BIG5 = 'Big5',
  }

  /**
   * Conflict-resolution strategies for `file.copy(options)`. When a file
   * with the same name already exists in the target folder, this enum
   * determines what happens.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161167377495}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161167377495.html}
   *
   * @restriction Server-side scripts only
   * @since 2021.1
   */
  export enum NameConflictResolution {
    /** Throw an error if a conflict occurs. This is the default. */
    FAIL = 'FAIL',
    /** Overwrite the existing file's content; preserve its attributes (description, isOnline, etc.) and permissions. The returned `File`'s `id` is the EXISTING file's ID, not a new one. */
    OVERWRITE = 'OVERWRITE',
    /** Overwrite the existing file's content AND replace its attributes and permissions with those of the source. The returned `File`'s `id` is the EXISTING file's ID. */
    OVERWRITE_CONTENT_AND_ATTRIBUTES = 'OVERWRITE_CONTENT_AND_ATTRIBUTES',
    /** Add a numeric suffix to make the copied file's name unique (e.g. `file.txt` → `file (1).txt`). The returned `File` has a new ID. */
    RENAME_TO_UNIQUE = 'RENAME_TO_UNIQUE',
  }

  /**
   * File-type identifiers used by `File.fileType` and accepted by
   * `file.create({fileType: ...})`. Members map 1:1 to NetSuite's internal
   * file type taxonomy — each name corresponds to a single MIME-type
   * grouping (e.g. `JPGIMAGE` = JPEG image, `XMLDOC` = XML document,
   * `PLAINTEXT` = `.txt`).
   *
   * Once a file is created with a given `fileType`, the property is
   * read-only — attempting to reassign throws `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4228999954}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4228999954.html}
   *
   * @restriction Server-side scripts only
   * @since 2015.2
   */
  export enum Type {
    APPCACHE = 'APPCACHE',
    AUTOCAD = 'AUTOCAD',
    BMPIMAGE = 'BMPIMAGE',
    CERTIFICATE = 'CERTIFICATE',
    CONFIG = 'CONFIG',
    CSV = 'CSV',
    EXCEL = 'EXCEL',
    FLASH = 'FLASH',
    FREEMARKER = 'FREEMARKER',
    GIFIMAGE = 'GIFIMAGE',
    GZIP = 'GZIP',
    HTMLDOC = 'HTMLDOC',
    ICON = 'ICON',
    JAVASCRIPT = 'JAVASCRIPT',
    JPGIMAGE = 'JPGIMAGE',
    JSON = 'JSON',
    MESSAGERFC = 'MESSAGERFC',
    MP3 = 'MP3',
    MPEGMOVIE = 'MPEGMOVIE',
    MSPROJECT = 'MSPROJECT',
    PDF = 'PDF',
    PJPGIMAGE = 'PJPGIMAGE',
    PLAINTEXT = 'PLAINTEXT',
    PNGIMAGE = 'PNGIMAGE',
    POSTSCRIPT = 'POSTSCRIPT',
    POWERPOINT = 'POWERPOINT',
    QUICKTIME = 'QUICKTIME',
    RTF = 'RTF',
    SCSS = 'SCSS',
    SMS = 'SMS',
    STYLESHEET = 'STYLESHEET',
    SVG = 'SVG',
    TAR = 'TAR',
    TIFFIMAGE = 'TIFFIMAGE',
    VISIO = 'VISIO',
    WEBAPPPAGE = 'WEBAPPPAGE',
    WEBAPPSCRIPT = 'WEBAPPSCRIPT',
    WORD = 'WORD',
    XMLDOC = 'XMLDOC',
    XSD = 'XSD',
    ZIP = 'ZIP',
  }

  /**
   * A NetSuite File Cabinet file wrapper. Returned by `file.create(...)`,
   * `file.load(...)`, and `file.copy(...)`. Encapsulates the file's
   * metadata; content is loaded lazily on demand via `getContents()`,
   * `lines.iterator()`, `getReader()`, or `getSegments()`.
   *
   * **In-memory vs persisted state:** a `File` returned by `create(...)`
   * starts in-memory with `id: null` and `url: null` until `save()` is
   * called. Even after `save()`, the original `File` instance's `id`
   * remains `null` — the new ID is the RETURN VALUE of `save()` and is
   * only populated on a freshly loaded `File`.
   *
   * **Binary content** must be base64-encoded when passed to
   * `file.create({contents})`.
   *
   * @restriction Server-side scripts only
   */
  export interface File {

    /**
     * Free-form description. Editable (writes mutate the in-memory
     * wrapper; persist via `save()`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4223862428}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4223862428.html}
     *
     * @since 2015.2
     */
    description: string | null;

    /**
     * The character encoding (e.g. `'UTF-8'`, `'windows-1252'`). Set
     * to a `file.Encoding` enum value at create time or by assignment.
     * Editable.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229270853}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229270853.html}
     *
     * @since 2015.2
     */
    encoding: Encoding | `${Encoding}` | null;

    /**
     * The file type — one of the `file.Type` enum values. Read-only:
     * must be set via `file.create({fileType})`; reassignment throws
     * `READ_ONLY_PROPERTY: "Read only property: fileType."`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229267378}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229267378.html}
     *
     * @since 2015.2
     */
    readonly fileType: Type | `${Type}`;

    /**
     * Internal ID of the containing File Cabinet folder. Editable.
     * Must be set (non-null) before calling `save()`, or `save()` throws
     * `SSS_MISSING_REQD_ARGUMENT`.
     *
     * Accepts numeric or string values at assignment time; the property
     * returns a number once persisted/loaded.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229265810}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229265810.html}
     *
     * @since 2015.2
     */
    folder: number | string;

    /**
     * The internal ID of the file. `null` for in-memory files that
     * haven't been saved (including immediately after `save()` — the
     * returned ID is the only way to find the ID until you re-`load()`).
     * Loaded files have a string ID (e.g. `'30763'`); some legacy code
     * paths may produce numeric IDs.
     *
     * Read-only: reassignment throws `READ_ONLY_PROPERTY`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229266178}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229266178.html}
     *
     * @since 2015.2
     */
    readonly id: number | string | null;

    /**
     * Inactive status. Editable. When `true`, the file is hidden from the
     * UI unless "Show Inactives" is enabled on the File Cabinet page.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229270120}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229270120.html}
     *
     * @since 2015.2
     */
    isInactive: boolean;

    /**
     * "Available without Login" status. Editable. When `true`, websites
     * (e.g. SuiteCommerce) can access the file without an authenticated
     * NetSuite session.
     *
     * Note: this property reflects the value on the FILE record, not the
     * "Available Without Login" setting on Suitelet script deployments
     * (which is a different setting).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229270451}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229270451.html}
     *
     * @since 2015.2
     */
    isOnline: boolean;

    /**
     * Whether the file's type is text-based (e.g. `PLAINTEXT`, `CSV`,
     * `HTMLDOC`, `XMLDOC`, `JSON` are text; `PDF`, `JPGIMAGE`, `ZIP` are
     * binary). Read-only: reassignment throws `READ_ONLY_PROPERTY`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229267767}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229267767.html}
     *
     * @since 2015.2
     */
    readonly isText: boolean;

    /**
     * The file name, including extension. Editable.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229266563}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229266563.html}
     *
     * @since 2015.2
     */
    name: string;

    /**
     * The file's path within the File Cabinet (e.g.
     * `'SuiteScripts/folder/file.txt'`). For an in-memory file whose
     * `folder` is not set, this is just the file name. Read-only:
     * reassignment throws `READ_ONLY_PROPERTY`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229268933}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229268933.html}
     *
     * @since 2015.2
     */
    readonly path: string;

    /**
     * File size in bytes. Reflects any in-memory appends made via
     * `appendLine()` or `append()`. Read-only: reassignment throws
     * `READ_ONLY_PROPERTY`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229266796}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229266796.html}
     *
     * @since 2015.2
     */
    readonly size: number;

    /**
     * The URL at which the file can be accessed. `null` for in-memory
     * files (only populated after `save()`+reload). Read-only:
     * reassignment throws `READ_ONLY_PROPERTY`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229268651}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229268651.html}
     *
     * @since 2015.2
     */
    readonly url: string | null;

    /**
     * Line-iteration accessor. Use `lines.iterator()` to iterate the
     * file's lines as separate strings. Read-only: reassigning `lines`
     * throws `READ_ONLY_PROPERTY: "Read only property: output."`
     * (the internal property name is `output`).
     *
     * **Only yields lines on SAVED files.** An in-memory `File` created
     * via `file.create(...)` produces an iterator that yields zero
     * results, even when `contents` is non-empty. Save first, then
     * re-load to iterate.
     */
    readonly lines: {
      /**
       * Returns an iterator over the file's lines. Each yielded value is
       * wrapped as `{value: string}` (per the NetSuite iterator protocol).
       * Supports both `.each(callback)` and `.next()` styles. The
       * callback receives `{value: 'lineN'}` objects; return `false` to
       * stop iteration, `true` (or any other value) to continue.
       *
       * **Only yields lines on SAVED files** — in-memory files yield
       * zero results.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4769955095}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4769955095.html}
       *
       * @governance none
       * @restriction Server-side scripts only
       * @since 2017.1
       *
       * @return An iterator over the file's lines.
       *
       * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED If a single line exceeds 10 MB. Message: `"The content you are attempting to access exceeds the maximum allowed size of 10 MB."`.
       * @throws {error.SuiteScriptError} YOU_CANNOT_READ_FROM_A_FILE_AFTER_YOU_BEGAN_WRITING_TO_IT If `appendLine()`/`append()` was called and then iteration was attempted on a saved+streaming file without an intervening `resetStream()`.
       */
      iterator(): NetSuiteIterator<string>;
    };

    /**
     * Reads the entire file content into memory and returns it as a
     * string. Limited to 10 MB. For larger files, use `lines.iterator()`,
     * `getReader()`, or `getSegments()` which stream.
     *
     * For binary file types, the returned string is the base64-encoded
     * content (as passed to `file.create({contents})` or as stored in
     * the File Cabinet).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229269811}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229269811.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return The file's content as a string (text for text types, base64 for binary).
     *
     * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED If the file content exceeds 10 MB. Message: `"The file content you are attempting to access exceeds the maximum allowed size of 10 MB."`.
     */
    getContents(): string;

    /**
     * Returns a fresh `Reader` over the file's content, positioned at the
     * start. Each call returns a NEW reader with independent position
     * state; multiple readers can be active simultaneously on the same
     * file.
     *
     * Like `lines.iterator()`, the reader only yields content for SAVED
     * files — in-memory files return `null` from the reader's methods.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543843814}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543843814.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @return A fresh `Reader` for the file.
     */
    getReader(): Reader;

    /**
     * Returns a segment iterator wrapper that splits the file by the
     * given separator. The separator is INCLUDED in each yielded
     * segment (except possibly the last one, if the file doesn't end
     * with a separator). The wrapper exposes a single `iterator()`
     * method that returns the actual NetSuite iterator — call
     * `getSegments({separator: '|'}).iterator()` to start iterating.
     *
     * Only yields segments on SAVED files — in-memory files yield zero
     * results.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543844004}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543844004.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @param options
     * @param options.separator The separator string used to divide segments. Must be a non-empty string. `null` and missing are accepted as if omitted (defaults vary); empty string `''` is rejected.
     * @return A wrapper object whose `iterator()` method returns the actual segment iterator.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null. Message format: `"file.getSegments: Missing a required argument: options"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_SEGMENT_SEPARATOR If `options.separator` is the empty string `''`. Message: `"Segment separator must not be empty."`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.separator` is supplied as a non-string. Message format: `"You have entered an invalid type argument: options.separator"`.
     */
    getSegments(options: {
      separator: string,
    }): {
      iterator(): NetSuiteIterator<string>;
    };

    /**
     * Appends a line of text to the end of the file's in-memory buffer.
     * Returns the `File` for chaining. The line separator (newline) is
     * inserted automatically before `value`.
     *
     * Usable on text or `.csv` files. Each line must be less than 10 MB.
     *
     * **Empty-string and null behavior:** `appendLine({value: ''})` and
     * `appendLine({value: null})` both throw `SSS_MISSING_REQD_ARGUMENT`
     * — empty string is treated as missing. To append a blank line, use
     * a non-empty whitespace value or use `append({value: '\n'})`.
     *
     * **Non-string coercion:** non-string `value` (e.g. numbers) is
     * silently coerced to a string via JavaScript's default
     * stringification.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4769938149}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4769938149.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2017.1
     *
     * @param options
     * @param options.value The string to append. Empty string and `null` are rejected.
     * @return The `File` instance (chainable).
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.value` is missing, `null`, or empty string. Message format: `"file.appendLine: Missing a required argument: options"` or `"file.appendLine: Missing a required argument: options.value"`.
     * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED If `value` exceeds 10 MB.
     * @throws {error.SuiteScriptError} YOU_CANNOT_WRITE_TO_A_FILE_AFTER_YOU_BEGAN_READING_FROM_IT If a read stream (`lines.iterator`, `getReader`, `getSegments`) was started on this `File` and not reset via `resetStream()`.
     */
    appendLine(options: {
      value: string,
    }): File;

    /**
     * Appends raw text to the end of the file's in-memory buffer WITHOUT
     * a leading newline. Returns the `File` for chaining. The cousin of
     * `appendLine` — same constraints and error behaviors, but does not
     * insert a separator.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.value The string to append (no newline added). Empty string and `null` are rejected.
     * @return The `File` instance (chainable).
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` or `options.value` is missing/null/empty.
     * @throws {error.SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED If `value` exceeds 10 MB.
     */
    append(options: {
      value: string,
    }): File;

    /**
     * Resets the file's read/write stream — discards any buffered
     * `appendLine()` or `append()` calls that haven't been persisted,
     * and rewinds the read pointer (used by `lines.iterator()` etc.) to
     * the beginning.
     *
     * Use this to "undo" in-flight stream changes before `save()`, or
     * to re-read a file from the start after iteration.
     *
     * Each line must be less than 10 MB for `resetStream` to be usable.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4769955125}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4769955125.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2017.1
     */
    resetStream(): void;

    /**
     * Persists the file to the NetSuite File Cabinet. Returns the
     * newly assigned (or existing) internal ID as a number. For a
     * loaded-and-modified file, the returned ID equals the original;
     * for a newly created file, the returned ID is the freshly assigned
     * one.
     *
     * **Important caveat:** `save()` does NOT update the in-memory
     * `File.id` property — that remains `null` for newly created files
     * even after a successful save. The returned ID is the only way to
     * reference the saved file until you `file.load(returnedId)`.
     *
     * `File.folder` must be set (non-null) before calling `save()`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4229271179}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229271179.html}
     *
     * @governance 20 units
     * @restriction Server-side scripts only
     * @since 2015.2
     *
     * @return The internal ID of the saved file as a number.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `File.folder` is not set. Message format: `"file.File.save: Missing a required argument: folder"`.
     * @throws {error.SuiteScriptError} INVALID_KEY_OR_REF If `File.folder` references a folder that doesn't exist. Message format: `"Invalid folder reference key <folderId>."`.
     */
    save(): number;

    /**
     * Returns a serializable snapshot of the file's metadata as a plain
     * object: `{type: 'file.File', id, name, description, path, url,
     * folder, fileType, isText, size, encoding, isInactive, isOnline}`.
     * Content is NOT included.
     *
     * Used implicitly by `JSON.stringify(file)`. Undocumented in the
     * Help Center; present at runtime.
     *
     * @return A plain object snapshot of the file's metadata.
     */
    toJSON(): {
      type: 'file.File',
      id: number | string | null,
      name: string,
      description: string | null,
      path: string,
      url: string | null,
      folder: number | string,
      fileType: Type | `${Type}`,
      isText: boolean,
      size: number,
      encoding: Encoding | `${Encoding}` | null,
      isInactive: boolean,
      isOnline: boolean,
    };

    /**
     * Returns the literal string `'file.File'` — a class-name tag rather
     * than a representation of the file content. To get the actual
     * content as a string, use `getContents()`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @return The literal `'file.File'`.
     */
    toString(): 'file.File';
  }

  /**
   * A read-state cursor over a file's content. Returned by
   * `File.getReader()`. Each `Reader` has independent position state; a
   * single `File` can have multiple concurrent readers.
   *
   * Readers only yield content for SAVED files — calling `readChars` or
   * `readUntil` on a reader from an in-memory file returns `null`.
   *
   * @restriction Server-side scripts only
   */
  export interface Reader {
    /**
     * Returns the next `options.number` characters from the current
     * position, advancing the cursor. Returns fewer characters if the
     * file ends before that many are available, or `null` if reading is
     * already finished.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543844484}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543844484.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @param options
     * @param options.number Number of characters to read. Must be a positive integer.
     * @return The next characters from the file, or `null` when the reader is past the end.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing. Message format: `"readChars: Missing a required argument: options"` (note: no `file.` prefix).
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.number` is missing, `null`, or a non-number. Message format: `"You have entered an invalid type argument: number"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_READ_SIZE If `options.number` is `0` or negative. Message: `"Read size must be positive."`.
     */
    readChars(options: {
      number: number,
    }): string | null;

    /**
     * Returns the substring from the current position up to and INCLUDING
     * the next occurrence of `options.tag`, advancing the cursor past
     * the tag. If the tag is not found before end-of-file, returns the
     * rest of the file. Returns `null` if reading is already finished.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543844425}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543844425.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2019.1
     *
     * @param options
     * @param options.tag The delimiter string to read up to (and through).
     * @return The substring from the current position up to and including the tag, the rest of the file if no tag remains, or `null` when the reader is past the end.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing. Message format: `"readUntil: Missing a required argument: options"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.tag` is missing, `null`, or a non-string. Message format: `"You have entered an invalid type argument: tag"`.
     * @throws {error.SuiteScriptError} SSS_TAG_CANNOT_BE_EMPTY If `options.tag` is the empty string `''`. Message: `"Tag cannot be empty"`.
     */
    readUntil(options: {
      tag: string,
    }): string | null;

    /**
     * Resets the reader's position to the beginning of the file.
     * Subsequent `readChars`/`readUntil` calls start from position 0.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     * @restriction Server-side scripts only
     */
    reset(): void;
  }
}
