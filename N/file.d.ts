/**
 * SuiteScript file module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4205693274}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4205693274.html}
 *
 * @module N/file
 * @NApiVersion 2.x
 * @restriction Server-side scripts only
 */
interface file {

  /**
   * Method used to create a new file in the NetSuite File Cabinet
   * @param options
   * @param options.name The file name and extension
   * @param options.fileType The file type
   * @param [options.contents] The file content
   * @param [options.description] The file description
   * @param [options.folder] The internal ID of the folder within the NetSuite File Cabinet
   * @param [options.encoding] The character encoding on a file
   * @param [options.isInactive] The inactive status of a file
   * @param [options.isOnline] The Available without Login status of a file
   *
   * @restriction Server-side scripts only
   */
  create(options: {
    name: string,
    fileType: file.Type | `${file.Type}`,
    contents?: string,
    description?: string,
    folder?: number | string,
    encoding?: file.Encoding | `${file.Encoding}`,
    inInactive?: boolean,
    isOnline?: boolean,
    conflictResolution?: file.NameConflictResolution | `${file.NameConflictResolution}`,
  }): file.File;

  /**
   * Method used to delete an existing file from the NetSuite File Cabinet
   * @param options
   * @param options.id Internal ID of the file
   * @return The internal ID of the deleted file
   *
   * @restriction Server-side scripts only
   */
  delete(options: {
    id: number | string,
  }): number | string;

  /**
   * Loads an existing file from the NetSuite File Cabinet
   * @param id The internal ID of the file as a number or string, the absolute or relative path
   * @return The internal ID of the loaded file
   *
   * @restriction Server-side scripts only
   */
  load(
    id: number | string,
  ): file.File;

  /**
   * Loads an existing file from the NetSuite File Cabinet
   * @param options
   * @param options.id The internal ID of the file as a number or string, the absolute or relative path
   * @return The internal ID of the loaded file
   *
   * @restriction Server-side scripts only
   */
  load(options: {
    id: number | string,
  }): file.File;
}

declare namespace file {

  /**
   * Holds the string values for the supported character set encoding
   *
   * @restriction Server-side scripts only
   */
  export enum Encoding {
    UTF_8 = 'Unicode',
    WINDOWS_1252 = 'Western',
    ISO_8859_1 = 'Western',
    GB18030 = 'Chinese Simplified',
    SHIFT_JIS = 'Japanese',
    MAC_ROMAN = 'Western',
    GB2312 = 'Chinese Simplified',
    BIG5 = 'Chinese Tradition',
  }

  /**
   * Holds the string values for supported conflict resolution types
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161167377495}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161167377495.html}
   *
   * @restriction Server-side scripts only
   */
  export enum NameConflictResolution {
    FAIL = 'FAIL',
    OVERWRITE = 'OVERWRITE',
    OVERWRITE_CONTENT_AND_ATTRIBUTES = 'OVERWRITE_CONTENT_AND_ATTRIBUTES',
    RENAME_TO_UNIQUE = 'RENAME_TO_UNIQUE',
  }

  /**
   * Holds the string values for file types
   *
   * @restriction Server-side scripts only
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
   * @restriction Server-side scripts only
   */
  export interface File {

    /**
     *
     */
    readonly description: string;

    /**
     *
     */
    readonly encoding: Encoding | `${Encoding}`;

    /**
     *
     */
    readonly fileType: Type | `${Type}`;

    /**
     *
     */
    readonly folder: number;

    /**
     *
     */
    readonly id: number;

    /**
     *
     */
    readonly isInactive: boolean;

    /**
     *
     */
    readonly isOnline: boolean;

    /**
     *
     */
    readonly isText: boolean;

    /**
     *
     */
    readonly name: string;

    /**
     *
     */
    readonly path: string;

    /**
     *
     */
    readonly size: number;

    /**
     *
     */
    readonly url: string;

    lines: {
      /**
       * Method used to pass the next line as an argument to a developer-defined function
       */
      iterator(): NetSuiteIterator<string>;
    };

    /**
     * Method used to return the content of the file
     */
    getContents(): string;

    /**
     * Method used to return the reader object for performing special read operations
     */
    getReader(): Reader;

    /**
     * Method used to return the iterator of segments delimited by a separator
     * @param options
     * @param options.separator The separator to use to divide the segments
     */
    getSegments(options: {
      separator: string,
    }): NetSuiteIterator<string>;

    /**
     * Method used to insert a line to the end of a file
     * @param options
     * @param options.value String to insert at the end of the file
     */
    appendLine(options: {
      value: string,
    }): File;

    /**
     * Method used to reset the file contents
     */
    resetStream(): void;

    /**
     * Upload a new file or save an updated file to the NetSuite File Cabinet
     * @return The internal ID of the file
     */
    save(): number;
  }

  export interface Reader {
    /**
     * Returns string from current position to the next occurrence of options.tag
     * @param options
     * @param options.tag String containing a tag
     */
    readUntil(options: {
      tag: string,
    }): string;


    /**
     * Returns the next options.number characters from the current position
     * @param options
     * @param options.number The number of characters to read
     */
    readChars(options: {
      number: number,
    }): string;
  }
}