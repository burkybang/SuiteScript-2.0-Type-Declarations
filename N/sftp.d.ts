/// <reference path="./file.d.ts" />

/**
 * SuiteScript sftp module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4617004932}
 *
 * @restriction Server-side scripts only
 *
 * @module N/sftp
 * @NApiVersion 2.x
 *
 * @since 2016.2
 */
interface sftp {

  /**
   * Constant representing the minimun time allowed for transferring data over connection
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557238823}
   *
   * @type {1}
   * @readonly
   *
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   *
   * @since 2016.2
   */
  MIN_CONNECT_TIMEOUT: 1;

  /**
   * Constant representing the maximum time allowed for transferring data over connection
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557321286}
   *
   * @type {20}
   * @readonly
   *
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   *
   * @since 2016.2
   */
  MAX_CONNECT_TIMEOUT: 20;

  /**
   * Constant representing the minimun port number
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557327099}
   *
   * @type {0}
   * @readonly
   *
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   *
   * @since 2019.2
   */
  MIN_PORT_NUMBER: 0;

  /**
   * Constant representing the maximum port number
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557327056}
   *
   * @type {65535}
   * @readonly
   *
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   *
   * @since 2019.2
   */
  MAX_PORT_NUMBER: 65535;

  /**
   * Constant representing the default port number
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557327135}
   *
   * @type {22}
   * @readonly
   *
   * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
   *
   * @since 2019.2
   */
  DEFAULT_PORT_NUMBER: 22;

  /**
   * Establishes a connection with a remote server and returns a connection object representing that connection
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4617005472}
   *
   * @param {Object} options
   * @param {string} options.url - host of remote account
   * @param {string} [options.passwordGuid] - the password guid for remote account
   * @param {string} options.hostKey - hostKey for ssh server
   * @param {string} options.username - the username of remote account
   * @param {number} [options.port=22] - port through which to connect to remote account, defaults to 22
   * @param {string} [options.directory] - remote directory of connection
   * @param {number} [options.timeout=Connection.MAX_CONNECT_TIMEOUT] - timeout to establish connection, defaults to Connection.MAX_CONNECT_TIMEOUT
   * @param {string} [options.hostKeyType] - hostKeyType for ssh server, one of rsa, dsa, ecdsa
   * @param {string} [options.keyId] - ID of the key to be used for authentication
   * @return {sftp.Connection} connection - an object that represents the connection
   *
   * @throws {error.SuiteScriptError} FTP_UNKNOWN_HOST - thrown when host cannot be found
   * @throws {error.SuiteScriptError} FTP_CONNECT_TIMEOUT_EXCEEDED - thrown when connection takes longer than options.timeout seconds
   * @throws {error.SuiteScriptError} FTP_CANNOT_ESTABLISH_CONNECTION - thrown when connection fails because of invalid username or password or no permission to access to directory
   * @throws {error.SuiteScriptError} FTP_INVALID_PORT_NUMBER - thrown when format of port number is invalid (e.g. negative or greater than 65535)
   * @throws {error.SuiteScriptError} FTP_INVALID_CONNECTION_TIMEOUT - thrown when timeout parameter is set greater than Connection.MAX_CONNECT_TIMEOUT (currently 20 seconds) or negative
   * @throws {error.SuiteScriptError} FTP_INVALID_DIRECTORY - thrown if directory does not exist on server
   * @throws {error.SuiteScriptError} FTP_INCORRECT_HOST_KEY - thrown if provided host key does not match remote server's presented host key
   * @throws {error.SuiteScriptError} FTP_INCORRECT_HOST_KEY_TYPE - thrown if the host key type does not match the type of the provided host key
   * @throws {error.SuiteScriptError} FTP_MALFORMED_HOST_KEY - thrown when host key is not of the correct format (e.g. base 64, 96+ bytes)
   * @throws {error.SuiteScriptError} FTP_PERMISSION_DENIED - thrown when user does not have access to a file or directory on the remote server
   * @throws {error.SuiteScriptError} FTP_UNSUPPORTED_ENCRYPTION_ALGORITHM - thrown when the remote server does not support one of NetSuite's approved algorithms
   *
   * @since 2016.2
   */
  createConnection(options: {
    url: string,
    passwordGuid?: string,
    hostKey: string,
    username: string,
    port?: number,
    directory?: string,
    timeout?: number,
    hostKeyType?: string,
    keyId?: string,
  }): sftp.Connection;
}

declare namespace sftp {

  /**
   * Holds the values to be used to sort listed files and directories
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557239613}
   *
   * @enum {string}
   *
   * @since 2019.2
   */
  export enum Sort {
    DATE = 'DATE',
    DATE_DESC = 'DATE_DESC',
    SIZE = 'SIZE',
    SIZE_DESC = 'SIZE_DESC',
    NAME = 'NAME',
    NAME_DESC = 'NAME_DESC',
  }

  /**
   * Return new instance of SftpConnection used for performing operations over a connection
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4618502733}
   *
   * @since 2016.2
   */
  export interface Connection {

    /**
     * Constant representing the max time allowed for transferring data over connection
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557238937}
     *
     * @type {300}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     *
     * @since 2019.2
     */
    MAX_TRANSFER_TIMEOUT: 300;

    /**
     * Constant representing the max file size allowed to be transferred
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557238973}
     *
     * @type {100000000}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     *
     * @since 2019.2
     */
    MAX_FILE_SIZE: 100000000;

    /**
     * Downloads a file from the remote server
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4618664030}
     *
     * @governance 100 points
     *
     * @param {Object} options
     * @param {string} options.filename - name of file to download to local machine
     * @param {string} [options.directory] - relative path to directory of file that will be downloaded. defaults to current directory
     * @param {number} [options.timeout] - timeout for data transfer, defaults to Connection.MAX_TRANSFER_TIMEOUT (currently 300 seconds)
     * @return {file.File} file
     *
     * @throws {error.SuiteScriptError} FTP_MAXIMUM_FILE_SIZE_EXCEEDED - thrown if file size is > max file size allowed by NetSuite
     * @throws {error.SuiteScriptError} FTP_INVALID_DIRECTORY - thrown if directory does not exist on server
     * @throws {error.SuiteScriptError} FTP_TRANSFER_TIMEOUT_EXCEEDED - thrown if transfer takes longer than options.timeout seconds
     * @throws {error.SuiteScriptError} FTP_INVALID_TRANSFER_TIMEOUT - thrown when timeout parameter is set greater than Connection.MAX_TRANSFER_TIMEOUT (currently 300 seconds) or negative
     * @throws {error.SuiteScriptError} FTP_FILE_DOES_NOT_EXIST - thrown when options.filename does not exist at options.directory
     * @throws {error.SuiteScriptError} FTP_PERMISSION_DENIED - thrown when user does not have access to a file or directory on the remote server
     *
     * @since 2016.2
     */
    download(options: {
      filename: string,
      directory?: string,
      timeout?: number,
    }): file.File;

    /**
     * Uploads a file to the remote server
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4618512910}
     *
     * @governance 100 points
     *
     * @param {Object} options
     * @param {file.File} options.file - file to upload
     * @param {string} [options.filename] - name to give uploaded file on server, defaults to filename of options.file parameter
     * @param {string} [options.directory] - relative path to directory where file will be uploaded. defaults to current directory. Illegal characters will be automatically escaped
     * @param {number} [options.timeout] - timeout for data transfer, defaults to Connection.MAX_TRANSFER_TIMEOUT (very large number TBD)
     * @param {boolean} [options.replaceExisting] - if true, will replace file on server if a file with options.filename is found at options.directory, if false, will throw an exception if a file with options.filename is found at options.directory, defaults to false
     * @return {void}
     *
     * @throws {error.SuiteScriptError} FTP_INVALID_DIRECTORY - thrown if directory does not exist on server
     * @throws {error.SuiteScriptError} FTP_TRANSFER_TIMEOUT_EXCEEDED - thrown if transfer takes longer than options.timeout seconds
     * @throws {error.SuiteScriptError} FTP_INVALID_TRANSFER_IMEOUT - thrown when timeout parameter is set greater than Connection.MAX_TRANSFER_TIMEOUT (currently 300 seconds) or negative
     * @throws {error.SuiteScriptError} FTP_FILE_ALREADY_EXISTS - thrown when replaceExisting is set to false and a file with the same name exists in remote directory
     * @throws {error.SuiteScriptError} FTP_PERMISSION_DENIED - thrown when user does not have access to a file or directory on the remote server
     *
     * @since 2016.2
     */
    upload(options: {
      file: file.File,
      filename?: string,
      directory?: string,
      timeout?: number,
      replaceExisting?: boolean,
    }): void;

    /**
     * Creates an empty directory on the remote server
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557234024}
     *
     * @governance 10 points
     *
     * @param {Object} options
     * @param {string} options.path - relative path of a directory to be created
     * @return {void}
     *
     * @throws {error.SuiteScriptError} FTP_PERMISSION_DENIED - thrown when user does not have access to a file or directory on the remote server
     * @throws {error.SuiteScriptError} FTP_DIRECTORY_NOT_FOUND - thrown when path is non-existent directory on the remote server
     *
     * @since 2019.2
     */
    makeDirectory(options: {
      path: string,
    }): void;

    /**
     * Deletes an empty directory on the remote server
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557234344}
     *
     * @governance 10 points
     *
     * @param {Object} options
     * @param {string} options.path - relative path of a directory to be deleted
     * @return {void}
     *
     * @throws {error.SuiteScriptError} FTP_PERMISSION_DENIED - thrown when user does not have access to a file or directory on the remote server
     * @throws {error.SuiteScriptError} FTP_DIRECTORY_NOT_FOUND - thrown when path leads to a non-existent directory on the remote server
     * @throws {error.SuiteScriptError} FTP_DIRECTORY_NOT_EMPTY - thrown when the directory is not empty on the remote server
     *
     * @since 2019.2
     */
    removeDirectory(options: {
      path: string,
    }): void;

    /**
     * Deletes a file on the remote server
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557234670}
     *
     * @governance 10 points
     *
     * @param {Object} options
     * @param {string} options.path - relative path of a file to be deleted
     * @return {void}
     *
     * @throws {error.SuiteScriptError} FTP_PERMISSION_DENIED - thrown when user does not have access to a file or directory on the remote server
     * @throws {error.SuiteScriptError} FTP_NO_SUCH_FILE_OR_DIRECTORY - thrown when path leads to a non-existent file on the remote server
     *
     * @since 2019.2
     */
    removeFile(options: {
      path: string,
    }): void;

    /**
     * Moves a file or directory from one location to another on the remote server
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557234961}
     *
     * @governance 10 points
     *
     * @param {Object} options
     * @param {string} options.from - relative path of a file to be moved from
     * @param {string} options.to - relative path of a file to be moved to
     * @return {void}
     *
     * @throws {error.SuiteScriptError} FTP_INVALID_MOVE - thrown when source is not readable or the target is not writable or source or target does not exist on the remote server
     *
     * @since 2019.2
     */
    move(options: {
      from: string,
      to: string,
    }): void;

    /**
     * Lists the files and directories in a directory on the remote server
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1557235176}
     * @
     *
     * @governance 10 points
     *
     * @param {Object} options
     * @param {string} options.path - relative path of a file that will be downloaded
     * @param {Sort} [options.sort] - sort option
     * @return {Object[]}
     *
     * @throws {error.SuiteScriptError} FTP_INVALID_DIRECTORY - thrown when path leads to a non-existent directory on the remote server
     * @throws {error.SuiteScriptError} FTP_PERMISSION_DENIED - thrown when user does not have access to a file or directory on the remote server
     *
     * @since 2019.2
     */
    list(options: {
      path: string,
      sort?: Sort,
    }): Object[];
  }
}