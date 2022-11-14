/// <reference path="./record.d.ts" />
/// <reference path="./task.d.ts" />

/**
 * SuiteScript action module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1510761537}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510761537.html}
 *
 * @since 2018.2
 *
 * @module N/action
 * @NApiVersion 2.x
 */
interface action {

  find: {

    /**
     * Performs a search for available record actions. If only the recordType parameter is provided, all actions available
     * for the record type are returned. If recordId is also provided, then only actions that qualify for execution on the
     * given record instance are returned. If id is provided, then only the action with the given ID is returned. In other
     * words, the recordId and id parameters act as additional filters and may result in an empty result set being returned.
     * If the recordId is provided than the returned actions are "qualified" and you don't have to provide the recordId
     * again when executing an Action object from the result set.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509389605}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509389605.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {record.Type|string} options.recordType record type
     * @param {number|string} [options.recordId] record instance ID
     * @param {action.ActionID} [options.id] action ID
     * @return {Object<action.ActionID, action.Action>} a set of actions (@see Action) defined on the record type indexed by action ID
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if an action is specified and such action doesn't exist on the said record type
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
     *
     * @since 2018.2
     */<ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | string,
      recordId?: number | string,
      id?: ID
    }): { [p in ID]: () => action.Action<ID> };

    /**
     * Performs a search for available record actions. If only the recordType parameter is provided, all actions available
     * for the record type are returned. If recordId is also provided, then only actions that qualify for execution on the
     * given record instance are returned. If id is provided, then only the action with the given ID is returned. In other
     * words, the recordId and id parameters act as additional filters and may result in an empty result set being returned.
     * If the recordId is provided than the returned actions are "qualified" and you don't have to provide the recordId
     * again when executing an Action object from the result set.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509391246}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509391246.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {record.Type|string} options.recordType record type
     * @param {number|string} [options.recordId] record instance ID
     * @param {action.ActionID} [options.id] action ID
     * @return {Promise<Object<action.ActionID, action.Action>>} a set of actions (@see Action) defined on the record type indexed by action ID
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if an action is specified and such action doesn't exist on the said record type
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
     *
     * @since 2018.2
     */
    promise<ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | string,
      recordId?: number | string,
      id?: ID
    }): Promise<{ [p in ID]: action.Action<ID> }>;
  };

  get: {

    /**
     * Returns an executable record action for the given record type. If the recordId parameter is provided, then the
     * action object is only returned if the given record instance qualifies for execution of the given record action.
     * Also, if recordId is provided than the returned action is "qualified" and you don't have to provide the recordId
     * again when executing the Action object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509384818}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509384818.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {record.Type|string} options.recordType record type
     * @param {string} [options.recordId] record instance ID
     * @param {string} options.id action ID
     * @return {action.Action} record action executor for action specified by options
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn’t exist on the said record type OR
     *                                                  the specified record instance does not qualify for executing the action
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
     */<ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | string,
      recordId?: number | string,
      id: ID,
    }): action.Action<ID>;

    /**
     * Returns an executable record action for the given record type. If the recordId parameter is provided, then the
     * action object is only returned if the given record instance qualifies for execution of the given record action.
     * Also, if recordId is provided than the returned action is "qualified" and you don't have to provide the recordId
     * again when executing the Action object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509385970}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509385970.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {record.Type|string} options.recordType record type
     * @param {string} [options.recordId] record instance ID
     * @param {string} options.id action ID
     * @return {Promise<action.Action>} record action executor for action specified by options
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn’t exist on the said record type OR
     *                                                  the specified record instance does not qualify for executing the action
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if a record ID is specified and that record instance doesn't exist
     */
    promise<ID extends action.ActionID>(options: {
      recordType: record.Type | `${record.Type}` | string,
      recordId?: number | string,
      id: ID,
    }): Promise<action.Action<ID>>;
  };

  execute: {

    /**
     * Executes a record action and returns its result.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509391388}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509391388.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {record.Type|string} options.recordType record type
     * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
     * @param {Object<string, number|string>} options.params action arguments
     * @param {number|string} options.params.recordId record instance ID
     * @return {{notifications: [], response: {action:string, id:string, recordCount:number, success:boolean}}} action result; the actual return value returned by the action implementation is stored in the response property
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
     *
     * @since 2018.2
     */
    (options: {
      recordType: record.Type | `${record.Type}` | string,
      id: action.ActionID,
      params?: {
        recordId: number | string,
        [p: string]: number | string,
      },
    }): {
      notifications: any[],
      response: {
        action: string,
        id: string,
        recordCount: number,
        success: boolean,
      },
    };

    /**
     * Executes a record action and returns its result.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509392030}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509392030.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {record.Type|string} options.recordType record type
     * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
     * @param {Object<string, number|string>} options.params action arguments
     * @param {number|string} options.params.recordId record instance ID
     * @return {Promise<{notifications: [], response: {action:string, id:string, recordCount:number, success:boolean}}>} action result; the actual return value returned by the action implementation is stored in the response property
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
     * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
     * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
     *
     * @since 2018.2
     */
    promise(options: {
      recordType: record.Type | `${record.Type}` | string,
      id: action.ActionID,
      params?: {
        recordId: number | string,
        [p: string]: number | string,
      },
    }): Promise<{
      notifications: any[],
      response: {
        action: string,
        id: string,
        recordCount: number,
        success: boolean,
      },
    }>;
  };

  /**
   * Executes an asynchronous bulk record action and returns its task ID for status queries with action.getBulkStatus(options)
   * The options.params parameter is mutually exclusive to options.condition and options.paramCallback.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540815927}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540815927.html}
   *
   * @governance 50 units
   *
   * @param {Object} options
   * @param {record.Type|string} options.recordType record type
   * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
   * @param {Object<string, number|string>} [options.params] action arguments
   * @param {number|string} options.params.recordId record instance ID
   * @param {string} [options.condition] used to select record IDs of records for which the action is to be executed
   * @param {function} [options.paramCallback] function that takes record ID and returns the parameter object for the specified record ID
   * @return {string} - taskId
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
   * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
   * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
   * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
   *
   * @since 2019.1
   */
  executeBulk(options: {
    recordType: record.Type | `${record.Type}` | string,
    id: action.ActionID,
    params?: {
      recordId: number | string,
      [p: string]: number | string,
    },
    condition?: string,
    paramCallback?<RecordID extends number | string>(recordId: RecordID): {
      recordId: RecordID,
      [p: string]: number | string,
    },
  }): string;

  /**
   * Returns the current status of action.executeBulk(options) for the specified task ID. The bulk execution status is returned in a status object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540816132}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540816132.html}
   *
   * @governance none
   *
   * @param {Object} options
   * @param {string} options.taskId
   */
  getBulkStatus(options: {
    taskId: string,
  }): task.RecordActionTaskStatus;
}

declare namespace action {

  /**
   * Supported Record Actions
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1516982564}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1516982564.html}
   */
  export type ActionID =
    'allocate' | 'approve' | 'confirm' |
    'reject' | 'decline' |
    'launch' | 'submit' |
    'cancel' | 'retract' |

    'markforgrouping' | 'unmarkforgrouping' |
    'groupinvoices' |
    'ungroupinvoice' | 'unlinkinvoices' |

    'selectAllBudgetLines' | 'unselectAllBudgetLines' |
    'distributeBudgetTotalAmount' |
    'setBudgetAmountsToCalculated' |
    'clearBudgetAmounts';

  /**
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509380249}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509380249.html}
   *
   * @since 2018.2
   */
  export interface Action<ID extends ActionID> {

    /**
     * The action description
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509388207}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509388207.html}
     *
     * @type {string} description
     *
     * @since 2018.2
     */
    description: string;

    /**
     * The type of the record on which the action is to be performed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387977}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387977.html}
     *
     * @type {record.Type|string} recordType
     *
     * @since 2018.2
     */
    recordType: record.Type | `${record.Type}` | string;

    /**
     * The ID of the action
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387777}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387777.html}
     *
     * @type {action.ActionID} recordType
     *
     * @since 2018.2
     */
    id: ID;

    /**
     * The action label
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509388068}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509388068.html}
     *
     * @type {string} label
     *
     * @since 2018.2
     */
    label: string;

    /**
     * The action parameters
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509389367}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509389367.html}
     *
     * @type {Object<string, number|string>} parameters
     *
     * @since 2018.2
     */
    parameters: {
      recordId: number | string,
      [p: string]: number | string,
    };

    /**
     * Executes the action and returns the action result in a plain JavaScript object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387360}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387360.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {Object<string, number|string>} options.params action arguments
     * @return {{notifications: [], response: {action:string, id:string, recordCount:number, success:boolean}}} action result; the actual return value returned by the action implementation is stored in the response property
     *
     * @since 2018.2
     */
    (options: {
      params: {
        recordId: number | string,
        [p: string]: number | string,
      },
    }): {
      notifications: any[],
      response: {
        action: string,
        id: string,
        recordCount: number,
        success: boolean,
      },
    };

    /**
     * Executes the action asynchronously and returns the action result in a plain JavaScript object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509387674}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509387674.html}
     *
     * @governance none
     *
     * @param {Object} options
     * @param {Object<string, number|string>} options.params action arguments
     * @return {Promise<{notifications: [], response: {action:string, id:string, recordCount:number, success:boolean}}>} action result; the actual return value returned by the action implementation is stored in the response property
     *
     * @since 2018.2
     */
    promise(options: {
      params: {
        recordId: number | string,
        [p: string]: number | string,
      },
    }): Promise<{
      notifications: any[],
      response: {
        action: string,
        id: string,
        recordCount: number,
        success: boolean,
      },
    }>;

    execute: {

      /**
       * Executes a record action and returns its result.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509386224}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509386224.html}
       *
       * @governance none
       *
       * @param {Object} options
       * @param {record.Type|string} options.recordType record type
       * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
       * @param {Object<string, number|string>} options.params action arguments
       * @param {number|string} options.params.recordId record instance ID
       * @return {{notifications: [], response: {action:string, id:string, recordCount:number, success:boolean}}} action result; the actual return value returned by the action implementation is stored in the response property
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
       * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
       * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
       *
       * @since 2018.2
       */
      (options: {
        recordType: record.Type | `${record.Type}` | string,
        id: action.ActionID,
        params?: {
          recordId: number | string,
          [p: string]: number | string,
        },
      }): {
        notifications: any[],
        response: {
          action: string,
          id: string,
          recordCount: number,
          success: boolean,
        },
      };

      /**
       * Executes a record action and returns its result.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509386721}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509386721.html}
       *
       * @governance none
       *
       * @param {Object} options
       * @param {record.Type|string} options.recordType record type
       * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
       * @param {Object<string, number|string>} options.params action arguments
       * @param {number|string} options.params.recordId record instance ID
       * @return {Promise<{notifications: [], response: {action:string, id:string, recordCount:number, success:boolean}}>} action result; the actual return value returned by the action implementation is stored in the response property
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.recordType or options.id or options.params.recordId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if the specified record type doesn't exist
       * @throws {error.SuiteScriptError} SSS_INVALID_ACTION_ID if the specified action doesn't exist on the said record type
       * @throws {error.SuiteScriptError} RECORD_DOES_NOT_EXIST if the specified record instance doesn't exist
       *
       * @since 2018.2
       */
      promise(options: {
        recordType: record.Type | `${record.Type}` | string,
        id: action.ActionID,
        params?: {
          recordId: number | string,
          [p: string]: number | string,
        },
      }): Promise<{
        notifications: any[],
        response: {
          action: string,
          id: string,
          recordCount: number,
          success: boolean,
        },
      }>;
    };

    /**
     * Executes an asynchronous bulk record action and returns its task ID for status queries with action.getBulkStatus(options)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1540815927}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540815927.html}
     *
     * @param {Object} options
     * @param {record.Type|string} options.recordType record type
     * @param {'allocate'|'approve'|'reject'|'submit'|'cancel'} options.id action ID
     * @param {Object<string, number|string>} [options.params] action arguments
     * @param {number|string} options.params.recordId record instance ID
     * @param {string} [options.condition] used to select record IDs of records for which the action is to be executed
     * @param {function} [options.paramCallback] function that takes record ID and returns the parameter object for the specified record ID
     * @return {string} - taskId
     */
    executeBulk(options: {
      recordType: record.Type | `${record.Type}` | string,
      id: action.ActionID,
      params?: {
        recordId: number | string,
        [p: string]: number | string,
      },
      condition?: string,
      paramCallback?<RecordID extends number | string>(recordId: RecordID): {
        recordId: RecordID,
        [p: string]: number | string,
      },
    }): string;
  }
}