/// <reference path="./error.d.ts" />
/// <reference path="./file.d.ts" />

/**
 * SuiteScript compress module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584507367}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584507367.html}
 *
 * @module N/compress
 * @NApiVersion 2.x
 * @restriction Server-side scripts only
 */
interface compress {

  /**
   * Compresses a file by using gzip and returns it as a temporary file object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584918027}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584918027.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.file - The file to be compressed
   * @param [options.level] - The compression level
   *
   * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS The contents of the file to be compressed cannot be retrieved.
   * @throws {error.SuiteScriptError} COMPRESS_API_COMPRESSION_LEVEL_OUT_OF_RANGE The specified compression level is outside of the valid range (0 - 9).
   */
  gzip(options: {
    file: file.File,
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  }): file.File;

  /**
   * Decompresses a file that was compressed using gzip and returns it as a temporary file object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584955171}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584955171.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.file - The file to be decompressed
   *
   * @throws {error.SuiteScriptError} COMPRESS_API_DECOMPRESS_ERROR The file cannot be decompressed.
   * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS The contents of the file to be decompressed cannot be retrieved.
   */
  gunzip(options: {
    file: file.File,
  }): file.File;

  /**
   * Creates a `compress.Archiver` object that can be used for creating file archives, such as ZIP or TAR files
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584980366}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584980366.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   */
  createArchiver(): compress.Archiver;
}

/**
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584507367}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584507367.html}
 */
declare namespace compress {

  /**
   * Holds the string values for the archive types
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584877701}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584877701.html}
   */
  export enum Type {
    CPIO = 'CPIO',
    TAR = 'TAR',
    TGZ = 'TGZ',
    TBZ2 = 'TBZ2',
    ZIP = 'ZIP',
  }

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584592144}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584592144.html}
   */
  interface Archiver {

    /**
     * Adds a file to be archived
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584723528}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584723528.html}
     *
     * @param options
     * @param options.file - The name of the archive file
     * @param [options.directory]
     *
     * @throws {error.SuiteScriptError} COMPRESS_API_DUPLICATE_PATH A file has already been added using the same target path.
     */
    add(options: {
      file: file.File,
      directory?: string,
    }): void;

    /**
     * Creates an archive with the added files and returns it as a temporary file object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584789142}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584789142.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.name - The name of the archive file
     *
     * @throws {error.SuiteScriptError} COMPRESS_API_UNSUPPORTED_ARCHIVE_TYPE The `options.type` parameter is an invalid archive type.
     * @throws {error.SuiteScriptError} COMPRESS_API_UNRECOGNIZED_ARCHIVE_FILE_EXTENSION The `options.type` parameter is not specified and the archive type cannot be determined.
     * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS The contents cannot be retrieved for any of the files to be archived.
     */
    archive(options: {
      name: `${string}${'.cpio' | '.tar' | '.tar.gz' | '.tar.bz2' | '.tgz' | '.tbz2' | '.zip'}`,
    }): file.File;

    /**
     * Creates an archive with the added files and returns it as a temporary file object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158584789142}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158584789142.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     *
     * @param options
     * @param options.name - The name of the archive file
     * @param [options.type] - The archive type, This parameter does not need to be specified if `options.name` has one of the supported extensions: .cpio, .tar, .tar.gz, .tar.bz2, .tgz, .tbz2, .zip
     *
     * @throws {error.SuiteScriptError} COMPRESS_API_UNSUPPORTED_ARCHIVE_TYPE The `options.type` parameter is an invalid archive type.
     * @throws {error.SuiteScriptError} COMPRESS_API_UNRECOGNIZED_ARCHIVE_FILE_EXTENSION The `options.type` parameter is not specified and the archive type cannot be determined.
     * @throws {error.SuiteScriptError} COMPRESS_API_UNABLE_TO_RETRIEVE_FILE_CONTENTS The contents cannot be retrieved for any of the files to be archived.
     */
    archive(options: {
      name: string,
      type: Type | `${Type}`,
    }): file.File;
  }
}