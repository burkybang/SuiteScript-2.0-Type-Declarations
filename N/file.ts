class file {
  /**
   * Method used to create a new file in the NetSuite File Cabinet
   * @param {Object} options
   * @param {String} options.name - The file name and extension
   * @param {String} options.fileType - The file type
   * @param {String} [options.contents] - The file content
   * @param {String} [options.description] - The file description
   * @param {Number} [options.folder] - The internal ID of the folder within the NetSuite File Cabinet
   * @param {String} [options.encoding] - The character encoding on a file
   * @param {Boolean} [options.isInactive] - The inactive status of a file
   * @param {Boolean} [options.isOnline] - The Available without Login status of a file
   * @returns {File}
   */
  create() {
  }
  
  /**
   * Method used to delete an existing file from the NetSuite File Cabinet
   * @param {Object} options
   * @param {Number|String} options.id - Internal ID of the file
   * @returns {Number|String} - The internal ID of the deleted file
   */
  delete() {
  }
  
  /**
   * Loads an existing file from the NetSuite File Cabinet
   * @param {Object} options
   * @param {Number|String} options.id - The internal ID of the file as a number or string, the absolute or relative path
   * @returns {File} - The internal ID of the deleted file
   */
  load() {
  }
}

namespace file {
  
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
    APPCACHE = '',
    AUTOCAD = '',
    BMPIMAGE = '',
    CERTIFICATE = '',
    CONFIG = '',
    CSV = '',
    EXCEL = '',
    FLASH = '',
    FREEMARKER = '',
    GIFIMAGE = '',
    GZIP = '',
    HTMLDOC = '',
    ICON = '',
    JAVASCRIPT = '',
    JPGIMAGE = '',
    JSON = '',
    MESSAGERFC = '',
    MP3 = '',
    MPEGMOVIE = '',
    MSPROJECT = '',
    PDF = '',
    PJPGIMAGE = '',
    PLAINTEXT = '',
    PNGIMAGE = '',
    POSTSCRIPT = '',
    POWERPOINT = '',
    QUICKTIME = '',
    RTF = '',
    SCSS = '',
    SMS = '',
    STYLESHEET = '',
    SVG = '',
    TAR = '',
    TIFFIMAGE = '',
    VISIO = '',
    WEBAPPPAGE = '',
    WEBAPPSCRIPT = '',
    WORD = '',
    XMLDOC = '',
    XSD = '',
    ZIP = '',
  }
  
  class File {
    
    description = undefined
    encoding = undefined
    fileType = undefined
    folder = undefined
    id = undefined
    isInactive = false
    isOnline = false
    isText = false
    name = undefined
    path = undefined
    size = undefined
    url = undefined
  
    /**
     * Method used to return the content of the file
     * @returns {String}
     */
    getContents() {
    }
  
    /**
     * Method used to return the reader object for performing special read operations
     * @returns {Reader}
     */
    getReader() {
    }
  
    /**
     * Method used to return the iterator of segments delimited by a separator
     * @param {Object} options
     * @param {String} options.separator - The separator to use to divide the segments
     * @returns {Iterator}
     */
    getSegments(options) {
    }
  
    /**
     * Method used to insert a line to the end of a file
     * @param {Object} options
     * @param {String} options.value - String to insert at the end of the file
     * @returns {File}
     */
    appendLine(options) {
    }
  
    lines = {
      /**
       * @callback LineIteratorCallback
       * @param {Iterator} line
       */
      
      /**
       * Method used to pass the next line as an argument to a developer-defined function
       * @param {LineIteratorCallback} line
       * @returns {Boolean}
       */
      iterator(line) {
      }
    }
  
    /**
     * Method used to reset the file contents
     * @returns {void}
     */
    resetStream() {
    }
  
    /**
     * Upload a new file or save an updated file to the NetSuite File Cabinet
     * @returns {number} - The internal ID of the file
     */
    save() {
    }
    
  }
  
  class Reader {
    /**
     * Returns string from current position to the next occurrence of options.tag
     * @param {Object} options
     * @param {String} options.tag - String containing a tag
     * @returns {String}
     */
    readUntil(options) {
    }
  
    /**
     * Returns the next options.number characters from the current position
     * @param {Object} options
     * @param {Number} options.number - The number of characters to read
     * @returns {String}
     */
    readChars(options) {
    }
  }
}

export {file};