/// <reference path="./record.d.ts" />

/**
 * SuiteScript action module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510761537.html}
 *
 * @module N/action
 * @NApiVersion 2.x
 */
interface action {

  /**
   * Performs a search for available record actions. If only the recordType parameter is provided, all actions available
   * for the record type are returned. If recordId is also provided, then only actions that qualify for execution on the
   * given record instance are returned. If id is provided, then only the action with the given ID is returned. In other
   * words, the recordId and id parameters act as additional filters and may result in an empty result set being returned.
   * If the recordId is provided than the returned actions are "qualified" and you don't have to provide the recordId
   * again when executing an Action object from the result set.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509389605.html}
   *
   * @param {Object} options
   * @param {record.Record|string} options.recordType record type
   * @param {number|string} [options.recordId] record instance ID
   * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} [options.id] action ID
   * @return {Object<'allocate'|'approve'|'reject'|'submit'|'cancel', action.Action>} a set of actions (@see Action) defined on the record type indexed by action ID
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
   * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if an action is specified and such action doesn't exist on the said record type
   * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
   *
   * @since 2018.2
   */
  find(options: {
    recordType: record.Record | string,
    recordId?: number | string,
    id?: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel'
  }): {
    allocate?: action.Action,
    approve?: action.Action,
    reject?: action.Action,
    submit?: action.Action,
    cancel?: action.Action,
  }

  /**
   * Returns an executable record action for the given record type. If the recordId parameter is provided, then the
   * action object is only returned if the given record instance qualifies for execution of the given record action.
   * Also, if recordId is provided than the returned action is "qualified" and you don't have to provide the recordId
   * again when executing the Action object.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509384818.html}
   *
   * @param {Object} options
   * @param {string} options.recordType record type
   * @param {string} [options.recordId] record instance ID
   * @param {string} options.id action ID
   * @return {action.Action} record action executor for action specified by options
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
   * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn’t exist on the said record type OR
   *                                                  the specified record instance does not qualify for executing the action
   * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
   */
  get(options: {
    recordType: record.Record | string,
    recordId?: number | string,
    id: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel'
  }): action.Action

  /**
   * Executes a record action and returns its result.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509391388.html}
   *
   * @param {Object} options
   * @param {record.Record|string} options.recordType record type
   * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
   * @param {Object<string, number|string>} options.params action arguments
   * @param {number|string} options.params.recordId record instance ID
   * @return {Object} action result; the actual return value returned by the action implementation is stored in the response property
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
   * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
   * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
   *
   * @since 2018.2
   */
  execute(options: {
    recordType: record.Record | string,
    id: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel',
    params?: {
      recordId: number | string,
      [key: string]: number | string,
    },
  }): Object

  /**
   * Executes an asynchronous bulk record action and returns its task ID for status queries with action.getBulkStatus(options)
   * The options.params parameter is mutually exclusive to options.condition and options.paramCallback.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540815927.html}
   *
   * @governance 50 units
   *
   * @param {Object} options
   * @param {record.Record|string} options.recordType record type
   * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
   * @param {Object<string, number|string>} [options.params] action arguments
   * @param {number|string} options.params.recordId record instance ID
   * @param {string} [options.condition] used to select record IDs of records for which the action is to be executed
   * @param {string} [options.paramCallback] function that takes record ID and returns the parameter object for the specified record ID
   * @return {string}
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
   * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
   * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
   *
   * @since 2019.1
   */
  executeBulk(options: {
    recordType: record.Record | string,
    id: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel',
    params?: {
      recordId: number | string,
      [key: string]: number | string,
    },
    condition?: string,
    paramCallback?: string,
  }): string
}

declare namespace action {

  export interface find {

    /**
     * Performs a search for available record actions. If only the recordType parameter is provided, all actions available
     * for the record type are returned. If recordId is also provided, then only actions that qualify for execution on the
     * given record instance are returned. If id is provided, then only the action with the given ID is returned. In other
     * words, the recordId and id parameters act as additional filters and may result in an empty result set being returned.
     * If the recordId is provided than the returned actions are "qualified" and you don't have to provide the recordId
     * again when executing an Action object from the result set.
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509391246.html}
     *
     * @param {Object} options
     * @param {record.Record|string} options.recordType record type
     * @param {number|string} [options.recordId] record instance ID
     * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} [options.id] action ID
     * @return {Promise<Object<'allocate'|'approve'|'reject'|'submit'|'cancel', action.Action>>>} a set of actions (@see Action) defined on the record type indexed by action ID
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if an action is specified and such action doesn't exist on the said record type
     * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
     *
     * @since 2018.2
     */
    promise(options: {
      recordType: record.Record | string,
      recordId?: number | string,
      id?: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel'
    }): Promise<{
      allocate?: action.Action,
      approve?: action.Action,
      reject?: action.Action,
      submit?: action.Action,
      cancel?: action.Action,
    }>
  }

  export interface get {

    /**
     * Returns an executable record action for the given record type. If the recordId parameter is provided, then the
     * action object is only returned if the given record instance qualifies for execution of the given record action.
     * Also, if recordId is provided than the returned action is "qualified" and you don't have to provide the recordId
     * again when executing the Action object.
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509385970.html}
     *
     * @param {Object} options
     * @param {string} options.recordType record type
     * @param {string} [options.recordId] record instance ID
     * @param {string} options.id action ID
     * @return {Promise<action.Action>} record action executor for action specified by options
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn’t exist on the said record type OR
     *                                                  the specified record instance does not qualify for executing the action
     * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
     */
    promise(options: {
      recordType: record.Record | string,
      recordId?: number | string,
      id: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel'
    }): Promise<action.Action>

    /**
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387360.html}
     *
     * todo: Finish this
     *
     * @param {Object} options
     * @constructor
     */
    Action(options: {}): Object
  }

  export interface execute {

    /**
     * Executes a record action and returns its result.
     * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509392030.html}
     *
     * @param {Object} options
     * @param {record.Record|string} options.recordType record type
     * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
     * @param {Object<string, number|string>} options.params action arguments
     * @param {number|string} options.params.recordId record instance ID
     * @return {Promise<Object>} action result; the actual return value returned by the action implementation is stored in the response property
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
     * @throws {SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
     *
     * @since 2018.2
     */
    promise(options: {
      recordType: record.Record | string,
      id: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel',
      params?: {
        recordId: number | string,
        [key: string]: number | string,
      },
    }): Promise<Object>
  }

  /**
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509380249.html}
   *
   * todo: Finish this
   */
  export interface Action {

    description: string

    recordType: record.Record | string

    id: 'allocate' | 'approve' | 'reject' | 'submit' | 'cancel'

    label: string

    parameters: {
      recordId: number | string,
      [key: string]: number | string,
    }

    promise(options: {}): Promise<Object>

    execute(options: {}): Object

    executeBulk(options: {})

    getBulkStatus(options: {})
  }

  /**
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509380249.html}
   *
   * todo: Finish this
   */
  export namespace Action {

    export interface execute {

      promise(options: {}): Promise<Object>
    }
  }
}