/**
 * SuiteScript file module
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4205693274.html
 *
 * @module N/file
 * @NApiVersion 2.x
 */

interface file {
  
  /**
   * Method used to create a new file in the NetSuite File Cabinet
   * @param {Object} options
   * @param {string} options.name - The file name and extension
   * @param {Type} options.fileType - The file type
   * @param {string} [options.contents] - The file content
   * @param {string} [options.description] - The file description
   * @param {number} [options.folder] - The internal ID of the folder within the NetSuite File Cabinet
   * @param {Encoding} [options.encoding] - The character encoding on a file
   * @param {boolean} [options.isInactive] - The inactive status of a file
   * @param {boolean} [options.isOnline] - The Available without Login status of a file
   * @return {file.File}
   */
  create(options: {
    name: string,
    fileType: file.Type,
    contents?: string,
    description?: string,
    folder?: number,
    encoding?: file.Encoding,
    inInactive?: boolean,
    isOnline?: boolean,
  }): file.File
  
  /**
   * Method used to delete an existing file from the NetSuite File Cabinet
   * @param {Object} options
   * @param {number|string} options.id - Internal ID of the file
   * @return {number|string} - The internal ID of the deleted file
   */
  delete(options: {
    id: number | string,
  }): number | string
  
  /**
   * Loads an existing file from the NetSuite File Cabinet
   * @param {Object} options
   * @param {number|string} options.id - The internal ID of the file as a number or string, the absolute or relative path
   * @return {file.File} - The internal ID of the loaded file
   */
  load(options: {
    id: number | string,
  }): file.File
}

declare namespace file {
  
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
  
  export interface File {
    
    /**
     * @type {string}
     * @readonly
     */
    description: string
    
    /**
     * @type {Encoding}
     * @readonly
     */
    encoding: Encoding
    
    /**
     * @type {Type}
     * @readonly
     */
    fileType: Type
    
    /**
     * @type {number|string}
     * @readonly
     */
    folder: number | string
    
    /**
     * @type {number}
     * @readonly
     */
    id: number
    
    /**
     * @type {boolean}
     * @readonly
     */
    isInactive: boolean
    
    /**
     * @type {boolean}
     * @readonly
     */
    isOnline: boolean
    
    /**
     * @type {boolean}
     * @readonly
     */
    isText: boolean
    
    /**
     * @type {string}
     * @readonly
     */
    name: string
    
    /**
     * @type {string}
     * @readonly
     */
    path: string
    
    /**
     * @type {number}
     * @readonly
     */
    size: number
    
    /**
     * @type {string}
     * @readonly
     */
    url: string
    
    /**
     * Method used to return the content of the file
     * @return {string}
     */
    getContents(): string
    
    /**
     * Method used to return the reader object for performing special read operations
     * @return {Reader}
     */
    getReader(): Reader
    
    /**
     * Method used to return the iterator of segments delimited by a separator
     * @param {Object} options
     * @param {string} options.separator - The separator to use to divide the segments
     * @return {Iterator}
     */
    getSegments(options: {
      separator: string,
    })
    
    /**
     * Method used to insert a line to the end of a file
     * @param {Object} options
     * @param {string} options.value - String to insert at the end of the file
     * @return {File}
     */
    appendLine(options: {
      value: string,
    }): File
    
    /**
     * Method used to reset the file contents
     * @return {void}
     */
    resetStream(): void
    
    /**
     * Upload a new file or save an updated file to the NetSuite File Cabinet
     * @return {number} - The internal ID of the file
     */
    save(): number
  }
  
  export namespace File.lines {
    
    export interface iterator {
      
      /**
       * Method used to pass the next line as an argument to a developer-defined function
       * @param {function(Object)} callback
       * @return {boolean}
       */
      each(callback: (line: Object) => boolean): void
    }
  }
  
  export interface Reader {
    /**
     * Returns string from current position to the next occurrence of options.tag
     * @param {Object} options
     * @param {string} options.tag - String containing a tag
     * @return {string}
     */
    readUntil(options: {
      tag: string,
    }): string
    
    
    /**
     * Returns the next options.number characters from the current position
     * @param {Object} options
     * @param {number} options.number - The number of characters to read
     * @return {string}
     */
    readChars(options: {
      number: number,
    }): string
  }
}