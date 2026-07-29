/// <reference path="./error.d.ts" />
/// <reference path="./file.d.ts" />

/**
 * SuiteScript compress module
 *
 * Compresses and decompresses individual files (`gzip`/`gunzip`), or builds
 * multi-file archives (`createArchiver`) in formats such as ZIP, TAR, and CPIO.
 *
 * All methods are synchronous — no `.promise()` variants are available on any
 * member of this module.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584507367}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584507367.html}
 *
 * @module N/compress
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface compress {

  /**
   * Compresses a file using gzip and returns the compressed contents as a
   * temporary `file.File` instance. The returned file's name is the source
   * file's name with `.gz` appended (e.g. `report.txt` → `report.txt.gz`) and
   * its `fileType` is `file.Type.GZIP`.
   *
   * The output is a transient (unsaved) file — call `.save()` on it to persist
   * into the File Cabinet, or pass it directly to another API that consumes a
   * `file.File`.
   *
   * Compression `level` accepts integers `0`–`9`. Values are validated strictly
   * as numbers: strings (even numeric strings like `"5"`), booleans, arrays, and
   * objects are rejected with `SSS_INVALID_TYPE_ARG`. Floats are silently
   * truncated to their integer part. `NaN` is accepted but treated as `0` (no
   * compression). `null` and `undefined` use the default level. `Infinity` is
   * rejected as out of range.
   *
   * Extra properties on the options bag are silently ignored — no `UNKNOWN_PARAM`
   * is thrown (unlike some other modules).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584918027}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584918027.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.file The file to be compressed. Must be a `file.File` instance — strings, numbers, plain objects, and arrays are rejected with `SSS_INVALID_TYPE_ARG`. The maximum input size is 680 MB for text files and 2 GB for binary/ASCII files; oversized files throw `COMPRESS_API_FILE_IS_TOO_LARGE`.
   * @param [options.level] The compression level, an integer `0`–`9`. `0` produces a gzip-wrapped but uncompressed output (same size as the input). `9` is the maximum compression level. Out-of-range integers throw `COMPRESS_API_COMPRESSION_LEVEL_OUT_OF_RANGE`. Floats are truncated to their integer part; `NaN` is treated as `0`.
   * @return A new transient `file.File` containing the gzip-compressed data, named `<original>.gz` with `fileType` `file.Type.GZIP`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing, `null`, or `undefined` — error message: `"gzip: Missing a required argument: options"`. Also thrown if `options.file` is missing, `null`, or `undefined` — error message: `"gzip: Missing a required argument: options.file"`.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive (string, number, boolean), or if `options.file` is not a `file.File` instance, or if `options.level` is a non-number type (string, boolean, array, object). Error message format: `"You have entered an invalid type argument: options"` or `"...options.file"` or `"...options.level"`.
   * @throws {error.SuiteScriptError} COMPRESS_API_COMPRESSION_LEVEL_OUT_OF_RANGE If `options.level` is an integer outside `0`–`9` (negative values, values greater than `9`, or `Infinity`). Error message: `"Compression level out of range."`.
   * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS If the contents of the file to be compressed cannot be retrieved.
   * @throws {error.SuiteScriptError} COMPRESS_API_FILE_IS_TOO_LARGE If the file exceeds the size limit — 680 MB for text files, 2 GB for binary/ASCII files.
   */
  gzip(options: {
    file: file.File,
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  }): file.File;

  /**
   * Decompresses a file that was compressed using gzip and returns the
   * decompressed contents as a temporary `file.File` instance. The returned
   * file's name is the source file's name with the `.gz` extension stripped
   * (e.g. `report.txt.gz` → `report.txt`) and its `fileType` is restored to
   * match the original file's type before compression (typically `PLAINTEXT`,
   * `CSV`, or similar — gzip metadata preserves the original type).
   *
   * The output is a transient (unsaved) file — call `.save()` on it to persist
   * into the File Cabinet, or pass it directly to another API that consumes a
   * `file.File`.
   *
   * This method handles only single-file gzip-wrapped content. It does not
   * decompose multi-file archives produced via `createArchiver` — gzipped TAR
   * (`.tar.gz`) and similar formats cannot be unwrapped back to their
   * constituent files via this API.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584955171}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584955171.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.file The file to be decompressed. Must be a `file.File` instance containing gzip-compressed data — strings, numbers, plain objects, and arrays are rejected with `SSS_INVALID_TYPE_ARG`. Empty files and files that are not gzip-formatted throw `COMPRESS_API_DECOMPRESS_ERROR`.
   * @return A new transient `file.File` containing the decompressed data, with the `.gz` extension stripped from the name and the original `fileType` restored.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing, `null`, or `undefined` — error message: `"gunzip: Missing a required argument: options"`. Also thrown if `options.file` is missing, `null`, or `undefined` — error message: `"gunzip: Missing a required argument: options.file"`.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive (string, number, boolean), or if `options.file` is not a `file.File` instance. Error message format: `"You have entered an invalid type argument: options"` or `"...options.file"`.
   * @throws {error.SuiteScriptError} COMPRESS_API_DECOMPRESS_ERROR If the file cannot be decompressed — either because it is not gzip-formatted, is empty, or is corrupted. Error message format: `"Failed to decompress file: '<file-name>'"`.
   * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS If the contents of the file to be decompressed cannot be retrieved.
   */
  gunzip(options: {
    file: file.File,
  }): file.File;

  /**
   * Creates a new `compress.Archiver` instance used to build multi-file archives
   * (ZIP, TAR, TGZ, TBZ2, or CPIO). Each call returns a fresh independent
   * archiver — successive calls do not return the same reference. The returned
   * archiver is mutable (not frozen) and can be reused: call `archive` multiple
   * times, and continue calling `add` between archive operations to grow the
   * collection.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584980366}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584980366.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @return A new, empty `compress.Archiver` instance.
   */
  createArchiver(): compress.Archiver;
}

declare namespace compress {

  /**
   * Enum of supported archive types. Use these values to set the `type`
   * parameter of `Archiver.archive(options)` when the archive `name` does not
   * have a recognized extension. Member values are the constant names
   * themselves (e.g. `compress.Type.ZIP === 'ZIP'`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584877701}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584877701.html}
   *
   * @since 2020.2
   */
  export enum Type {

    /**
     * Copy In, Copy Out archive format. Returned files have `fileType` `MISCBINARY`.
     */
    CPIO = 'CPIO',

    /**
     * Tape Archive format (uncompressed). Returned files have `fileType` `TAR`.
     */
    TAR = 'TAR',

    /**
     * Gzip-compressed TAR archive (`.tar.gz` / `.tgz`). Returned files have
     * `fileType` `TARCOMP`.
     */
    TGZ = 'TGZ',

    /**
     * Bzip2-compressed TAR archive (`.tar.bz2` / `.tbz2`). Returned files have
     * `fileType` `TARCOMP`.
     */
    TBZ2 = 'TBZ2',

    /**
     * ZIP archive format. Returned files have `fileType` `ZIP`.
     */
    ZIP = 'ZIP',
  }

  /**
   * Builder for multi-file archives. Obtained via `compress.createArchiver()`.
   *
   * The archiver is reusable: `archive` can be called multiple times, and `add`
   * can be called between archive operations to extend the collection. Added
   * files are tracked by their target path (`directory + file.name`).
   * Attempting to add two files to the same target path throws
   * `COMPRESS_API_DUPLICATE_PATH`.
   *
   * Note: the runtime object additionally exposes a `toJSON()` method that
   * returns an empty object (`{}`). It is omitted from this type because the
   * empty-return value carries no information and the TypeScript `{}` type
   * incorrectly represents "any non-nullish value" rather than "empty object".
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584592144}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584592144.html}
   *
   * @since 2020.2
   */
  interface Archiver {

    /**
     * Adds a file to the archive's pending file collection. The file is not
     * compressed or written until `archive()` is called.
     *
     * In the archive, the target path is `options.directory + '/' + options.file.name`
     * when `options.directory` is supplied, or just `options.file.name` (placed
     * in the archive's root) otherwise. Empty-string and `null`/`undefined`
     * `directory` values are treated as "root" — same as omitting the property.
     * Multi-segment paths (e.g. `"a/b/c"`) are accepted and produce nested
     * directories in the archive.
     *
     * Extra properties on the options bag are silently ignored — no
     * `UNKNOWN_PARAM` is thrown.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584723528}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584723528.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2020.2
     *
     * @param options
     * @param options.file The file to be archived. Must be a `file.File` instance — strings, numbers, plain objects, and arrays are rejected with `SSS_INVALID_TYPE_ARG`. Oversized files (>680 MB text / >2 GB binary) throw `COMPRESS_API_FILE_IS_TOO_LARGE`.
     * @param [options.directory] The target directory within the archive. Defaults to the archive's root when omitted, `null`, `undefined`, or an empty string. Accepts multi-segment paths (e.g. `"a/b/c"`). Non-string values (numbers, booleans, arrays, objects) are rejected with `SSS_INVALID_TYPE_ARG`.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing, `null`, or `undefined` — error message: `"Archiver.add: Missing a required argument: options"`. Also thrown if `options.file` is missing, `null`, or `undefined` — error message: `"Archiver.add: Missing a required argument: options.file"`.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive (string, number, boolean), or if `options.file` is not a `file.File` instance, or if `options.directory` is a non-string non-nullish value. Error message format: `"You have entered an invalid type argument: options"` or `"...options.file"` or `"...options.directory"`.
     * @throws {error.SuiteScriptError} COMPRESS_API_DUPLICATE_PATH If a file has already been added with the same target path (same `directory + file.name` combination). Error message format: `"Duplicate path: '<path>'"`. To replace an existing entry, build a fresh archiver instead.
     * @throws {error.SuiteScriptError} COMPRESS_API_FILE_IS_TOO_LARGE If the file exceeds the size limit — 680 MB for text files, 2 GB for binary/ASCII files.
     */
    add(options: {
      file: file.File,
      directory?: string,
    }): void;

    archive: {

      /**
       * Builds the archive from the pending files and returns it as a transient
       * `file.File`. The archive type is detected from the `name` extension:
       * `.cpio`, `.tar`, `.tar.gz`, `.tar.bz2`, `.tgz`, `.tbz2`, or `.zip`.
       *
       * Extension matching is CASE-SENSITIVE — `report.ZIP` is unrecognized.
       * Names without any extension (e.g. `"out"` or `"out."`) are also
       * unrecognized.
       *
       * The archiver can be reused: this overload (and the one with explicit
       * `type`) can both be called multiple times on the same archiver, including
       * after calling `add` again to grow the collection. An empty archiver (no
       * files added) is allowed and produces a valid empty archive of the chosen
       * format.
       *
       * The returned file's `fileType` depends on the archive format:
       *  - ZIP → `file.Type.ZIP`
       *  - TAR → `file.Type.TAR`
       *  - TGZ, TBZ2 (and `.tar.gz`, `.tar.bz2`) → `file.Type.TARCOMP`
       *  - CPIO → `file.Type.MISCBINARY`
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584789142}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584789142.html}
       *
       * @governance 25 units
       * @restriction Server-side scripts only
       * @since 2020.2
       *
       * @param options
       * @param options.name The name of the archive file. Must include a recognized extension (`.cpio`, `.tar`, `.tar.gz`, `.tar.bz2`, `.tgz`, `.tbz2`, `.zip`) — extension matching is case-sensitive. Empty string is treated as missing (`SSS_MISSING_REQD_ARGUMENT`); non-string values are rejected with `SSS_INVALID_TYPE_ARG`. For names without a recognized extension, use the overload that accepts `options.type` instead.
       * @return A new transient `file.File` containing the archive, named per `options.name` with `fileType` matching the archive format.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing, `null`, or `undefined` — error message: `"Archiver.archive: Missing a required argument: options"`. Also thrown if `options.name` is missing, `null`, `undefined`, or an empty string — error message: `"Archiver.archive: Missing a required argument: options.name"`.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive (string, number, boolean), or if `options.name` is a non-string value. Error message format: `"You have entered an invalid type argument: options"` or `"...options.name"`.
       * @throws {error.SuiteScriptError} COMPRESS_API_UNRECOGNIZED_ARCHIVE_FILE_EXTENSION If `options.name` does not end in a recognized extension and `options.type` is not specified. Error message format: `"Unrecognized archive file extension: '<name>'"`.
       * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS If the contents cannot be retrieved for any of the pending files.
       */
      (options: {
        name: `${string}${'.cpio' | '.tar' | '.tar.gz' | '.tar.bz2' | '.tgz' | '.tbz2' | '.zip'}`,
      }): file.File;

      /**
       * Builds the archive from the pending files and returns it as a transient
       * `file.File`, using the explicit `type` parameter to select the archive
       * format. Use this overload when `options.name` does not have a recognized
       * extension (e.g. `"report.foo"`), or when overriding the implied extension.
       *
       * The `type` parameter matches case-INSENSITIVELY at the input boundary
       * (`"ZIP"`, `"Zip"`, `"zip"` all resolve to ZIP) but rejects whitespace
       * (`"ZIP "` with trailing space is unsupported). Non-string `type` values
       * (numbers, booleans) are rejected with `SSS_INVALID_TYPE_ARG`. A `null`
       * `type` falls through to extension-based detection rather than failing
       * with a type error.
       *
       * **Runtime quirk:** the `name` must still contain at least one `.`
       * followed by one or more characters (e.g. `"report.foo"` works,
       * `"report"` or `"report."` does NOT) regardless of the `type` value.
       * Names without any extension throw `UNEXPECTED_ERROR` rather than using
       * the `type` parameter as the documentation implies — a NetSuite-side bug.
       *
       * The archiver can be reused: this overload (and the extension-only one)
       * can both be called multiple times on the same archiver, including after
       * calling `add` again to grow the collection. An empty archiver (no files
       * added) is allowed and produces a valid empty archive of the chosen
       * format.
       *
       * The returned file's `fileType` depends on the archive format:
       *  - ZIP → `file.Type.ZIP`
       *  - TAR → `file.Type.TAR`
       *  - TGZ, TBZ2 → `file.Type.TARCOMP`
       *  - CPIO → `file.Type.MISCBINARY`
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584789142}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584789142.html}
       *
       * @governance 25 units
       * @restriction Server-side scripts only
       * @since 2020.2
       *
       * @param options
       * @param options.name The name of the archive file. Must contain a `.` followed by at least one character (a non-empty extension-like suffix) — bare names like `"report"` or `"report."` trigger `UNEXPECTED_ERROR` even when `type` is supplied. Empty string is treated as missing; non-string values are rejected with `SSS_INVALID_TYPE_ARG`.
       * @param options.type The archive type. Matched case-insensitively against `compress.Type` values (`"ZIP"`, `"Zip"`, `"zip"` all work). Non-string values (numbers, booleans) throw `SSS_INVALID_TYPE_ARG`; unrecognized strings throw `COMPRESS_API_UNSUPPORTED_ARCHIVE_TYPE`. No trimming — leading/trailing whitespace causes the value to be rejected as unsupported.
       * @return A new transient `file.File` containing the archive, named per `options.name` with `fileType` matching the archive format.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing, `null`, or `undefined` — error message: `"Archiver.archive: Missing a required argument: options"`. Also thrown if `options.name` is missing, `null`, `undefined`, or an empty string — error message: `"Archiver.archive: Missing a required argument: options.name"`.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options` is a non-object primitive (string, number, boolean), or if `options.name` is a non-string, or if `options.type` is a non-string non-nullish value (e.g. number, boolean). Error message format: `"You have entered an invalid type argument: options"` or `"...options.name"` or `"...options.type"`.
       * @throws {error.SuiteScriptError} COMPRESS_API_UNSUPPORTED_ARCHIVE_TYPE If `options.type` is a string that does not match any `compress.Type` value (case-insensitive). Error message format: `"Unsupported archive type: '<value>'"`. Empty string and whitespace-padded values also throw this error.
       * @throws {error.SuiteScriptError} COMPRESS_API_UNRECOGNIZED_ARCHIVE_FILE_EXTENSION If `options.type` is `null` (or otherwise nullish) and `options.name` does not end in a recognized extension. Error message format: `"Unrecognized archive file extension: '<name>'"`.
       * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS If the contents cannot be retrieved for any of the pending files.
       * @throws {error.SuiteScriptError} UNEXPECTED_ERROR If `options.name` lacks any extension-like structure (e.g. `"report"` or `"report."`) — the runtime crashes before honoring the `type` parameter. Generic message: `"An unexpected SuiteScript error has occurred"`. Workaround: include any non-empty extension on the name (e.g. `"report.archive"`) and rely on `type` to select the format.
       */
      (options: {
        name: string,
        type: Type | `${Type}`,
      }): file.File;
    };

    /**
     * Returns the class-identifier literal `"compress.Archiver"`. Used by
     * `String(archiver)` and string concatenation.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     *
     * @return The literal string `"compress.Archiver"`.
     */
    toString(): 'compress.Archiver';
  }
}
