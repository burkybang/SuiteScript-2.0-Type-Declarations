/// <reference path="../typings.d.ts" />
/// <reference path="./error.d.ts" />
/// <reference path="./format.d.ts" />
/// <reference path="./currentRecord.d.ts" />
/// <reference path="./ui/serverWidget.d.ts" />

/**
 * SuiteScript record module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267255811}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html}
 * @module N/record
 * @NApiVersion 2.x
 */
interface record {

  create: {

    /**
     * Create a new record object based on provided type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258059}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258059.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): record.Record

    /**
     * Create a new record object based on provided type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258059}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258059.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): currentRecord.CurrentRecord

    /**
     * Create a new record object based on provided type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440822690}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440822690.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<record.Record>

    /**
     * Create a new record object based on provided type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440822690}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440822690.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<currentRecord.CurrentRecord>
  };

  load: {

    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258486}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258486.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): record.Record

    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258486}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258486.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): currentRecord.CurrentRecord

    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440830173}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440830173.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<record.Record>

    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440830173}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440830173.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<currentRecord.CurrentRecord>
  };

  copy: {

    /**
     * Copy a record object based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258260}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258260.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): record.Record

    /**
     * Copy a record object based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258260}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258260.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): currentRecord.CurrentRecord

    /**
     * Copy a record object based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440821922}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440821922.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<record.Record>

    /**
     * Copy a record object based on provided type, id
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440821922}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440821922.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] record default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<currentRecord.CurrentRecord>
  };

  transform: {

    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258715}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258715.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.fromType record type to be transformed from
     * @param options.fromId record id to be transformed from
     * @param options.toType record type to be transformed to
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] transformed record's default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.fromType, options.fromId, or options.toType is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.fromType or options.toType is not a valid record type
     * @throws {error.SuiteScriptError} INVALID_INITIALIZE_REF If no source record with options.fromId exists
     */
    (options: {
      fromType: record.Type | `${record.Type}` | record.CustomType | string,
      fromId: number | string,
      toType: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): record.Record

    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267258715}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267258715.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.fromType record type to be transformed from
     * @param options.fromId record id to be transformed from
     * @param options.toType record type to be transformed to
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] transformed record's default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.fromType, options.fromId, or options.toType is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.fromType or options.toType is not a valid record type
     * @throws {error.SuiteScriptError} INVALID_INITIALIZE_REF If no source record with options.fromId exists
     */
    (options: {
      fromType: record.Type | `${record.Type}` | record.CustomType | string,
      fromId: number | string,
      toType: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): currentRecord.CurrentRecord

    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440843375}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440843375.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.fromType record type to be transformed from
     * @param options.fromId record id to be transformed from
     * @param options.toType record type to be transformed to
     * @param [options.isDynamic=false] record is dynamic
     * @param [options.defaultValues] transformed record's default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.fromType, options.fromId, or options.toType is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.fromType or options.toType is not a valid record type
     * @throws {error.SuiteScriptError} INVALID_INITIALIZE_REF If no source record with options.fromId exists
     */
    promise(options: {
      fromType: record.Type | `${record.Type}` | record.CustomType | string,
      fromId: number | string,
      toType: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic?: false,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<record.Record>

    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440843375}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440843375.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.fromType record type to be transformed from
     * @param options.fromId record id to be transformed from
     * @param options.toType record type to be transformed to
     * @param options.isDynamic record is dynamic
     * @param [options.defaultValues] transformed record's default values
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.fromType, options.fromId, or options.toType is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.fromType or options.toType is not a valid record type
     * @throws {error.SuiteScriptError} INVALID_INITIALIZE_REF If no source record with options.fromId exists
     */
    promise(options: {
      fromType: record.Type | `${record.Type}` | record.CustomType | string,
      fromId: number | string,
      toType: record.Type | `${record.Type}` | record.CustomType | string,
      isDynamic: true,
      defaultValues?: Record<string, record.FieldValue>,
    }): Promise<currentRecord.CurrentRecord>
  };

  delete: {

    /**
     * Delete a record object based on provided type, id and return the id of deleted record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267283372}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267283372.html}
     *
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @return recordId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
    }): number

    /**
     * Delete a record object based on provided type, id and return the id of deleted record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440823302}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440823302.html}
     *
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @return recordId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type or options.id is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
    }): Promise<number>
  };

  submitFields: {

    /**
     * Commit record field updates to the system
     *
     * Only supported for records and fields that support inline editing.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267283788}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267283788.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param options.values field and value mapping to be submitted
     * @param [options.options] additional flags for submission
     * @param [options.options.enableSourcing=true] enable sourcing during record update
     * @param [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @param [options.options.disableTriggers=false] disable triggers during record submission (undocumented)
     * @return id of submitted record
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type, options.id, or options.values is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    (options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      values: Record<string, record.FieldValue>,
      options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
        disableTriggers?: boolean,
      },
    }): number

    /**
     * Commit record field updates to the system
     *
     * Only supported for records and fields that support inline editing.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440830813}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440830813.html}
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.type record type
     * @param options.id record id
     * @param options.values field and value mapping to be submitted
     * @param [options.options] additional flags for submission
     * @param [options.options.enableSourcing=true] enable sourcing during record update
     * @param [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @param [options.options.disableTriggers=false] disable triggers during record submission (undocumented)
     * @return id of submitted record
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.type, options.id, or options.values is missing
     * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE If options.type is not a valid record type
     * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST If no record with options.id exists
     */
    promise(options: {
      type: record.Type | `${record.Type}` | record.CustomType | string,
      id: number | string,
      values: Record<string, record.FieldValue>,
      options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
        disableTriggers?: boolean,
      },
    }): Promise<number>
  };

  attach: {

    /**
     * Attach record to another record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267284169}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267284169.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.record record to be attached or object with the type and id of the record to be attached
     * @param options.to the destination record where options.record will be attached to or object with the type and id of the destination record
     * @param [options.attributes] name/value pairs containing attributes
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.record, options.to, or their type/id are missing
     */
    (options: {
      record: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      to: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      attributes?: Record<string, string | number>,
    }): void

    /**
     * Attach record to another record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440821175}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440821175.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.record record to be attached or object with the type and id of the record to be attached
     * @param options.to the destination record where options.record will be attached to or object with the type and id of the destination record
     * @param [options.attributes] name/value pairs containing attributes
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.record, options.to, or their type/id are missing
     */
    promise(options: {
      record: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      to: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      attributes?: Record<string, string | number>,
    }): Promise<void>
  };

  detach: {

    /**
     * Detach record from another record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267284360}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267284360.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.record record to be detached or object with type and id of the record to be detached
     * @param options.from the destination record where options.record will be detached from or object with the type and id of the destination record
     * @param [options.attributes] name/value pairs containing attributes
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.record, options.from, or their type/id are missing
     */
    (options: {
      record: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      from: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      attributes?: Record<string, string | number>,
    }): void;

    /**
     * Detach record from another record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440824016}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440824016.html}
     *
     * @governance 10 units
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.record record to be detached or object with type and id of the record to be detached
     * @param options.from the destination record where options.record will be detached from or object with the type and id of the destination record
     * @param [options.attributes] name/value pairs containing attributes
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If options.record, options.from, or their type/id are missing
     */
    promise(options: {
      record: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      from: record.Record | currentRecord.CurrentRecord | {
        type: record.Type | `${record.Type}` | record.CustomType | string,
        id: number | string,
      },
      attributes?: Record<string, string | number>,
    }): Promise<void>;
  };
}

declare namespace record {

  type FieldValue = string | string[] | number | Date | boolean | null;

  export type CustomType = `${'customrecord' | 'customtransaction' | 'customsale' | 'custompurchase'}${string}`;

  /**
   * Enum for record Type
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273205732}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273205732.html}
   */
  export enum Type {
    ACCOUNT = 'account',
    ACCOUNTING_BOOK = 'accountingbook',
    ACCOUNTING_CONTEXT = 'accountingcontext',
    ACCOUNTING_PERIOD = 'accountingperiod',
    ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry',
    ALLOCATION_SCHEDULE = 'allocationschedule',
    AMORTIZATION_SCHEDULE = 'amortizationschedule',
    AMORTIZATION_TEMPLATE = 'amortizationtemplate',
    ANALYTICAL_IMPACT = 'analyticalimpact',
    AS_CHARGED_PROJECT_REVENUE_RULE = 'aschargedprojectrevenuerule',
    ASSEMBLY_BUILD = 'assemblybuild',
    ASSEMBLY_ITEM = 'assemblyitem',
    ASSEMBLY_UNBUILD = 'assemblyunbuild',
    AUTOMATED_CLEARING_HOUSE = 'automatedclearinghouse',
    BALANCE_TRX_BY_SEGMENTS = 'balancetrxbysegments',
    BILLING_ACCOUNT = 'billingaccount',
    BILLING_CLASS = 'billingclass',
    BILLING_RATE_CARD = 'billingratecard',
    BILLING_REVENUE_EVENT = 'billingrevenueevent',
    BILLING_SCHEDULE = 'billingschedule',
    BIN = 'bin',
    BIN_TRANSFER = 'bintransfer',
    BIN_WORKSHEET = 'binworksheet',
    BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder',
    BOM = 'bom',
    BOM_REVISION = 'bomrevision',
    BONUS = 'bonus',
    BONUS_TYPE = 'bonustype',
    BUDGET_CATEGORY = 'budgetcategory',
    BUDGET_EXCHANGE_RATE = 'budgetexchangerate',
    BUDGET_IMPORT = 'budgetimport',
    BULK_OWNERSHIP_TRANSFER = 'bulkownershiptransfer',
    BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
    CALENDAR_EVENT = 'calendarevent',
    CAMPAIGN = 'campaign',
    CAMPAIGN_AUDIENCE = 'campaignaudience',
    CAMPAIGN_CATEGORY = 'campaigncategory',
    CAMPAIGN_CHANNEL = 'campaignchannel',
    CAMPAIGN_FAMILY = 'campaignfamily',
    CAMPAIGN_OFFER = 'campaignoffer',
    CAMPAIGN_RESPONSE = 'campaignresponse',
    CAMPAIGN_SEARCH_ENGINE = 'campaignsearchengine',
    CAMPAIGN_SUBSCRIPTION = 'campaignsubscription',
    CAMPAIGN_TEMPLATE = 'campaigntemplate',
    CAMPAIGN_VERTICAL = 'campaignvertical',
    CARDHOLDER_AUTHENTICATION = 'cardholderauthentication',
    CASH_REFUND = 'cashrefund',
    CASH_SALE = 'cashsale',
    CHARGE = 'charge',
    CHARGE_PERIOD_SEGMENT = 'chargeperiodsegment',
    CHARGE_RULE = 'chargerule',
    CHECK = 'check',
    CLASSIFICATION = 'classification',
    CLIENT_SCRIPT = 'clientscript',
    CMS_CONTENT = 'cmscontent',
    CMS_CONTENT_TYPE = 'cmscontenttype',
    CMS_PAGE = 'cmspage',
    COMMERCE_CATEGORY = 'commercecategory',
    COMPETITOR = 'competitor',
    CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate',
    CONTACT = 'contact',
    CONTACT_CATEGORY = 'contactcategory',
    CONTACT_ROLE = 'contactrole',
    COST_CATEGORY = 'costcategory',
    COUPON_CODE = 'couponcode',
    CREDIT_CARD_CHARGE = 'creditcardcharge',
    CREDIT_CARD_REFUND = 'creditcardrefund',
    CREDIT_MEMO = 'creditmemo',
    CURRENCY = 'currency',
    CURRENCY_RATE = 'currencyrate',
    CUSTOM_PURCHASE = 'custompurchase',
    CUSTOM_RECORD = 'customrecord',
    CUSTOM_SALE = 'customsale',
    CUSTOM_TRANSACTION = 'customtransaction',
    CUSTOMER = 'customer',
    CUSTOMER_CATEGORY = 'customercategory',
    CUSTOMER_DEPOSIT = 'customerdeposit',
    CUSTOMER_MESSAGE = 'customermessage',
    CUSTOMER_PAYMENT = 'customerpayment',
    CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization',
    CUSTOMER_REFUND = 'customerrefund',
    CUSTOMER_STATUS = 'customerstatus',
    CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship',
    DEPARTMENT = 'department',
    DEPOSIT = 'deposit',
    DEPOSIT_APPLICATION = 'depositapplication',
    DESCRIPTION_ITEM = 'descriptionitem',
    DISCOUNT_ITEM = 'discountitem',
    DOWNLOAD_ITEM = 'downloaditem',
    EMAIL_TEMPLATE = 'emailtemplate',
    EMPLOYEE = 'employee',
    EMPLOYEE_CHANGE_REQUEST = 'employeechangerequest',
    EMPLOYEE_CHANGE_REQUEST_TYPE = 'employeechangerequesttype',
    EMPLOYEE_EXPENSE_SOURCE_TYPE = 'employeeexpensesourcetype',
    EMPLOYEE_STATUS = 'employeestatus',
    EMPLOYEE_TYPE = 'employeetype',
    ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping',
    ENTITY_GROUP = 'entitygroup',
    ESTIMATE = 'estimate',
    EXPENSE_AMORTIZATION_EVENT = 'expenseamortizationevent',
    EXPENSE_CATEGORY = 'expensecategory',
    EXPENSE_PLAN = 'expenseplan',
    EXPENSE_REPORT = 'expensereport',
    EXPENSE_REPORT_POLICY = 'expensereportpolicy',
    FAIR_VALUE_FORMULA = 'fairvalueformula',
    FAIR_VALUE_PRICE = 'fairvalueprice',
    FINANCIAL_INSTITUTION = 'financialinstitution',
    FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule',
    FOLDER = 'folder',
    FORMAT_PROFILE = 'formatprofile',
    FULFILLMENT_REQUEST = 'fulfillmentrequest',
    GENERAL_TOKEN = 'generaltoken',
    GENERIC_RESOURCE = 'genericresource',
    GIFT_CERTIFICATE = 'giftcertificate',
    GIFT_CERTIFICATE_ITEM = 'giftcertificateitem',
    GL_NUMBERING_SEQUENCE = 'glnumberingsequence',
    GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping',
    GLOBAL_INVENTORY_RELATIONSHIP = 'globalinventoryrelationship',
    GOAL = 'goal',
    HCM_JOB = 'hcmjob',
    IMPACT_SUBCATEGORY = 'impactsubcategory',
    IMPORTED_EMPLOYEE_EXPENSE = 'importedemployeeexpense',
    INBOUND_SHIPMENT = 'inboundshipment',
    INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry',
    INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder',
    INTERCOMP_ALLOCATION_SCHEDULE = 'intercompallocationschedule',
    INVENTORY_ADJUSTMENT = 'inventoryadjustment',
    INVENTORY_COST_REVALUATION = 'inventorycostrevaluation',
    INVENTORY_COUNT = 'inventorycount',
    INVENTORY_DETAIL = 'inventorydetail',
    INVENTORY_ITEM = 'inventoryitem',
    INVENTORY_NUMBER = 'inventorynumber',
    INVENTORY_STATUS = 'inventorystatus',
    INVENTORY_STATUS_CHANGE = 'inventorystatuschange',
    INVENTORY_TRANSFER = 'inventorytransfer',
    INVENTORY_WORKSHEET = 'inventoryworksheet',
    INVOICE = 'invoice',
    INVOICE_GROUP = 'invoicegroup',
    ISSUE = 'issue',
    ISSUE_PRODUCT = 'issueproduct',
    ISSUE_PRODUCT_VERSION = 'issueproductversion',
    ITEM_ACCOUNT_MAPPING = 'itemaccountmapping',
    ITEM_COLLECTION = 'itemcollection',
    ITEM_COLLECTION_ITEM_MAP = 'itemcollectionitemmap',
    ITEM_DEMAND_PLAN = 'itemdemandplan',
    ITEM_FULFILLMENT = 'itemfulfillment',
    ITEM_GROUP = 'itemgroup',
    ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration',
    ITEM_PROCESS_FAMILY = 'itemprocessfamily',
    ITEM_PROCESS_GROUP = 'itemprocessgroup',
    ITEM_RECEIPT = 'itemreceipt',
    ITEM_REVISION = 'itemrevision',
    ITEM_SUPPLY_PLAN = 'itemsupplyplan',
    JOB = 'job',
    JOB_STATUS = 'jobstatus',
    JOB_TYPE = 'jobtype',
    JOURNAL_ENTRY = 'journalentry',
    KIT_ITEM = 'kititem',
    LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule',
    LEAD = 'lead',
    LEAD_SOURCE = 'leadsource',
    LOCATION = 'location',
    LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem',
    LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem',
    MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate',
    MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask',
    MANUFACTURING_ROUTING = 'manufacturingrouting',
    MAP_REDUCE_SCRIPT = 'mapreducescript',
    MARKUP_ITEM = 'markupitem',
    MASSUPDATE_SCRIPT = 'massupdatescript',
    MEM_DOC = 'memdoc',
    MERCHANDISE_HIERARCHY_LEVEL = 'merchandisehierarchylevel',
    MERCHANDISE_HIERARCHY_NODE = 'merchandisehierarchynode',
    MERCHANDISE_HIERARCHY_VERSION = 'merchandisehierarchyversion',
    MESSAGE = 'message',
    MFG_PLANNED_TIME = 'mfgplannedtime',
    NEXUS = 'nexus',
    NON_INVENTORY_ITEM = 'noninventoryitem',
    NOTE = 'note',
    NOTE_TYPE = 'notetype',
    OPPORTUNITY = 'opportunity',
    ORDER_RESERVATION = 'orderreservation',
    ORDER_SCHEDULE = 'orderschedule',
    ORDER_TYPE = 'ordertype',
    OTHER_CHARGE_ITEM = 'otherchargeitem',
    OTHER_NAME = 'othername',
    OTHER_NAME_CATEGORY = 'othernamecategory',
    PARTNER = 'partner',
    PARTNER_CATEGORY = 'partnercategory',
    PAYCHECK = 'paycheck',
    PAYCHECK_JOURNAL = 'paycheckjournal',
    PAYMENT_CARD = 'paymentcard',
    PAYMENT_CARD_TOKEN = 'paymentcardtoken',
    PAYMENT_ITEM = 'paymentitem',
    PAYMENT_METHOD = 'paymentmethod',
    PAYROLL_ITEM = 'payrollitem',
    PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule',
    PERFORMANCE_METRIC = 'performancemetric',
    PERFORMANCE_REVIEW = 'performancereview',
    PERFORMANCE_REVIEW_SCHEDULE = 'performancereviewschedule',
    PERIOD_END_JOURNAL = 'periodendjournal',
    PHONE_CALL = 'phonecall',
    PICK_DECOMPOSITION = 'pickdecomposition',
    PICK_STRATEGY = 'pickstrategy',
    PICK_TASK = 'picktask',
    PLANNED_ORDER = 'plannedorder',
    PLANNING_ITEM_CATEGORY = 'planningitemcategory',
    PLANNING_ITEM_GROUP = 'planningitemgroup',
    PLANNING_RULE_GROUP = 'planningrulegroup',
    PLANNING_VIEW = 'planningview',
    PORTLET = 'portlet',
    PRICE_BOOK = 'pricebook',
    PRICE_LEVEL = 'pricelevel',
    PRICE_PLAN = 'priceplan',
    PRICING_GROUP = 'pricinggroup',
    PROJECT_EXPENSE_TYPE = 'projectexpensetype',
    PROJECT_IC_CHARGE_REQUEST = 'projecticchargerequest',
    PROJECT_TASK = 'projecttask',
    PROJECT_TEMPLATE = 'projecttemplate',
    PROMOTION_CODE = 'promotioncode',
    PROSPECT = 'prospect',
    PURCHASE_CONTRACT = 'purchasecontract',
    PURCHASE_ORDER = 'purchaseorder',
    PURCHASE_REQUISITION = 'purchaserequisition',
    REALLOCATE_ITEM = 'reallocateitem',
    RECEIVE_INBOUND_SHIPMENT = 'receiveinboundshipment',
    RESOURCE_ALLOCATION = 'resourceallocation',
    RESOURCE_GROUP = 'resourcegroup',
    RESTLET = 'restlet',
    RETURN_AUTHORIZATION = 'returnauthorization',
    REV_REC_FIELD_MAPPING = 'revrecfieldmapping',
    REV_REC_SCHEDULE = 'revrecschedule',
    REV_REC_TEMPLATE = 'revrectemplate',
    REVENUE_ARRANGEMENT = 'revenuearrangement',
    REVENUE_COMMITMENT = 'revenuecommitment',
    REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal',
    REVENUE_PLAN = 'revenueplan',
    SAAS_METRIC = 'saasmetric',
    SALES_CAMPAIGN = 'salescampaign',
    SALES_CHANNEL = 'saleschannel',
    SALES_ORDER = 'salesorder',
    SALES_PRICE_RULE = 'salespricerule',
    SALES_PRICE_RULE_ENTRY = 'salespriceruleentry',
    SALES_ROLE = 'salesrole',
    SALES_TAX_ITEM = 'salestaxitem',
    SCHEDULED_SCRIPT = 'scheduledscript',
    SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance',
    SCRIPT_DEPLOYMENT = 'scriptdeployment',
    SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem',
    SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem',
    SERVICE_ITEM = 'serviceitem',
    SHIP_ITEM = 'shipitem',
    SITE_CATEGORY = 'sitecategory',
    SOLUTION = 'solution',
    STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry',
    STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment',
    SUBSCRIPTION = 'subscription',
    SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder',
    SUBSCRIPTION_LINE = 'subscriptionline',
    SUBSCRIPTION_PLAN = 'subscriptionplan',
    SUBSCRIPTION_TERM = 'subscriptionterm',
    SUBSIDIARY = 'subsidiary',
    SUBSIDIARY_SETTINGS = 'subsidiarysettings',
    SUBTOTAL_ITEM = 'subtotalitem',
    SUITELET = 'suitelet',
    SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot',
    SUPPLY_CHAIN_SNAPSHOT_SIMULATION = 'supplychainsnapshotsimulation',
    SUPPLY_CHANGE_ORDER = 'supplychangeorder',
    SUPPLY_PLAN_DEFINITION = 'supplyplandefinition',
    SUPPORT_CASE = 'supportcase',
    SUPPORT_CASE_ORIGIN = 'supportcaseorigin',
    SUPPORT_CASE_PRIORITY = 'supportcasepriority',
    SUPPORT_CASE_STATUS = 'supportcasestatus',
    SUPPORT_CASE_TYPE = 'supportcasetype',
    TASK = 'task',
    TAX_ACCT = 'taxacct',
    TAX_GROUP = 'taxgroup',
    TAX_LIABILITY_PAYMENT = 'taxliabilitypayment',
    TAX_PERIOD = 'taxperiod',
    TAX_SCHEDULE = 'taxschedule',
    TAX_TYPE = 'taxtype',
    TERM = 'term',
    TIME_BILL = 'timebill',
    TIME_ENTRY = 'timeentry',
    TIME_OFF_CHANGE = 'timeoffchange',
    TIME_OFF_PLAN = 'timeoffplan',
    TIME_OFF_REQUEST = 'timeoffrequest',
    TIME_OFF_RULE = 'timeoffrule',
    TIME_OFF_TYPE = 'timeofftype',
    TIME_SHEET = 'timesheet',
    TOPIC = 'topic',
    TRANSFER_ORDER = 'transferorder',
    UNITS_TYPE = 'unitstype',
    UNLOCKED_TIME_PERIOD = 'unlockedtimeperiod',
    USAGE = 'usage',
    USEREVENT_SCRIPT = 'usereventscript',
    VENDOR = 'vendor',
    VENDOR_AUTOMATED_CLEARING_HOUSE = 'vendorautomatedclearinghouse',
    VENDOR_BILL = 'vendorbill',
    VENDOR_CATEGORY = 'vendorcategory',
    VENDOR_CREDIT = 'vendorcredit',
    VENDOR_PAYMENT = 'vendorpayment',
    VENDOR_PREPAYMENT = 'vendorprepayment',
    VENDOR_PREPAYMENT_APPLICATION = 'vendorprepaymentapplication',
    VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
    VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship',
    WAVE = 'wave',
    WBS = 'wbs',
    WEBSITE = 'website',
    WIN_LOSS_REASON = 'winlossreason',
    WORK_ORDER = 'workorder',
    WORK_ORDER_CLOSE = 'workorderclose',
    WORK_ORDER_COMPLETION = 'workordercompletion',
    WORK_ORDER_ISSUE = 'workorderissue',
    WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
    WORKPLACE = 'workplace',
    ZONE = 'zone',
  }

  /**
   * Undocumented enum for record Event
   */
  export enum Event {
    CONFIRM = 'CONFIRM',
    CREATE_LINE = 'CREATE_LINE',
    CREATE_SUBRECORD = 'CREATE_SUBRECORD',
    ERROR = 'ERROR',
    FIELD_IS_DISABLED_CHANGE = 'FIELD_IS_DISABLED_CHANGE',
    FIELD_IS_DISPLAY_CHANGE = 'FIELD_IS_DISPLAY_CHANGE',
    FIELD_IS_HIDDEN_CHANGE = 'FIELD_IS_HIDDEN_CHANGE',
    FIELD_IS_MANDATORY_CHANGE = 'FIELD_IS_MANDATORY_CHANGE',
    FIELD_IS_READ_ONLY_CHANGE = 'FIELD_IS_READ_ONLY_CHANGE',
    FIELD_IS_VISIBLE_CHANGE = 'FIELD_IS_VISIBLE_CHANGE',
    FIELD_LABEL_CHANGE = 'FIELD_LABEL_CHANGE',
    HANDLE_CHANGE_CALL = 'HANDLE_CHANGE_CALL',
    INSERT_LINE = 'INSERT_LINE',
    LINE_COMMITTABLE = 'LINE_COMMITTABLE',
    LINE_NOT_COMMITTABLE = 'LINE_NOT_COMMITTABLE',
    MOVE_LINE = 'MOVE_LINE',
    NOTIFY = 'NOTIFY',
    RECORD_INITIALIZED = 'RECORD_INITIALIZED',
    RECORD_NOT_SAVABLE = 'RECORD_NOT_SAVABLE',
    RECORD_SAVABLE = 'RECORD_SAVABLE',
    REMOVE_LINE = 'REMOVE_LINE',
    REMOVE_SUBRECORD = 'REMOVE_SUBRECORD',
    SELECT_LINE = 'SELECT_LINE',
    SUBLIST_COLUMN_IS_DISABLED_CHANGE = 'SUBLIST_COLUMN_IS_DISABLED_CHANGE',
    SUBLIST_COLUMN_IS_DISPLAY_CHANGE = 'SUBLIST_COLUMN_IS_DISPLAY_CHANGE',
    SUBLIST_COLUMN_IS_MANDATORY_CHANGE = 'SUBLIST_COLUMN_IS_MANDATORY_CHANGE',
    SUBLIST_COLUMN_LABEL_CHANGE = 'SUBLIST_COLUMN_LABEL_CHANGE',
    SUBLIST_IS_DISPLAY_CHANGE = 'SUBLIST_IS_DISPLAY_CHANGE',
    SUBLIST_IS_HIDDEN_CHANGE = 'SUBLIST_IS_HIDDEN_CHANGE',
    UPDATE_ALL = 'UPDATE_ALL',
    UPDATE_FIELD_OPTIONS = 'UPDATE_FIELD_OPTIONS',
    UPDATE_FIELD_VALUE = 'UPDATE_FIELD_VALUE',
    UPDATE_LINE = 'UPDATE_LINE',
    UPDATE_RELATED_RECORD_VIEW = 'UPDATE_RELATED_RECORD_VIEW',
    UPDATE_SUBLIST = 'UPDATE_SUBLIST',
    UPDATE_SUBRECORD = 'UPDATE_SUBRECORD',
    VALIDATION_FAILED = 'VALIDATION_FAILED',
  }

  /**
   * Encapsulates a column of a sublist on a standard or custom record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600354269}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600354269.html}
   *
   * @since 2015.2
   */
  export interface Column {

    /**
     * Returns the internal ID of the column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600364069}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600364069.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly id: string;

    /**
     * Returns the label of the column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600366751}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600366751.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly label: string;

    /**
     * Returns the internal ID of the standard or custom sublist that contains the column
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600369846}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600369846.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly sublistId: string;

    /**
     * Returns the column type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600370892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600370892.html}
     *
     * @since 2015.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly type: Lowercase<serverWidget.FieldType>;

    /**
     * Indicates whether the column is disabled
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158592991246}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158592991246.html}
     *
     * @since 2020.2
     */
    readonly isDisabled: boolean;

    /**
     * Indicates whether the column is displayed
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593019143}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158593019143.html}
     *
     * @since 2020.2
     */
    readonly isDisplay: boolean;

    /**
     * Indicates whether the column is mandatory
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593030499}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158593030499.html}
     *
     * @since 2020.2
     */
    readonly isMandatory: boolean;

    /**
     * Indicates whether the column is sortable
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158593039336}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158593039336.html}
     *
     * @since 2020.2
     */
    readonly isSortable: boolean;

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     */
    toString(): 'sublist.Column';

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a record macro
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1529089092}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1529089092.html}
   *
   * @governance none
   * @since 2018.2
   */
  export interface Macro {

    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730768}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509730768.html}
     *
     * @since 2018.2
     *
     * @param options
     * @param options.id macro id
     * @param [options.params] The macro arguments
     */
    constructor(options: {
      id: string,
      params?: alias.Record<string, any>,
    }): {
      notifications: alias.Record<string, unknown>[],
      response: alias.Record<string, unknown>,
    };

    /**
     * Performs a macro operation and returns its result in a plain JavaScript object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730798}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509730798.html}
     *
     * @since 2018.2
     *
     * @param options
     * @param options.id macro id
     * @param [options.params] The macro arguments
     */
    promise(options: {
      id: string,
      params?: alias.Record<string, any>,
    }): Promise<{
      notifications: alias.Record<string, unknown>[],
      response: alias.Record<string, unknown>,
    }>;

    /**
     * The ID of the macro
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731173}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509731173.html}
     *
     * @since 2018.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly id: string;

    /**
     * The label of the macro
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731186}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509731186.html}
     *
     * @since 2018.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly label: string;

    /**
     * The description of the macro
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731199}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509731199.html}
     *
     * @since 2018.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly description: string;

    /**
     * The defined attributes of the macro
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509731214}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509731214.html}
     *
     * @since 2018.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly attributes: alias.Record<string, unknown>;

    execute: {
      /**
       * Performs a macro operation and returns its result in a plain JavaScript object
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730726}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509730726.html}
       *
       * @since 2018.2
       *
       * @param options
       * @param options.id macro id
       * @param [options.params] The macro arguments
       */
      (options: {
        id: string,
        params?: alias.Record<string, any>,
      }): {
        notifications: alias.Record<string, unknown>[],
        response: alias.Record<string, unknown>,
      };

      /**
       * Performs a macro operation and returns its result in a plain JavaScript object
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1509730748}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509730748.html}
       *
       * @since 2018.2
       *
       * @param options
       * @param options.id macro id
       * @param [options.params] The macro arguments
       */
      promise(options: {
        id: string,
        params?: alias.Record<string, any>,
      }): Promise<{
        notifications: alias.Record<string, unknown>[],
        response: alias.Record<string, unknown>,
      }>;
    };

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2018.2
     */
    toString(): string;

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2018.2
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a NetSuite record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4205869719}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4205869719.html}
   *
   * @since 2015.2
   */
  export interface RecordReadonly {

    /**
     * The internal ID of the record, or null if the record has not been saved
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296706656}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296706656.html}
     *
     * @since 2015.2
     */
    readonly id: number | null;

    /**
     * The type of the record
     *
     * This property is not available for subrecords.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296706984}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296706984.html}
     *
     * @since 2015.2
     */
    readonly type: record.Type | `${record.Type}` | record.CustomType | string;

    /**
     * Indicates whether the record is in dynamic or standard mode
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296707316}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296707316.html}
     *
     * @since 2015.2
     */
    readonly isDynamic: boolean;

    /**
     * Indicates whether the record is read-only or editable
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly isReadOnly: boolean;

    /**
     * Indicates whether the record is new or not
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly isNew: boolean;

    /**
     * Return value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273154686}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273154686.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue<T extends FieldValue>(
      fieldId: string,
    ): T | undefined;

    /**
     * Return value of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273154686}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273154686.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue<T extends FieldValue>(options: {
      fieldId: string,
    }): T | undefined;

    setValue: {

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273155868}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273155868.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @param value
       * @param [ignoreFieldChange=false] Ignore the field change script
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(
        this: R,
        fieldId: string,
        value: FieldValue,
        ignoreFieldChange?: boolean,
      ): R;

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273155868}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273155868.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @param options.value
       * @param [options.ignoreFieldChange=false] Ignore the field change script
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(this: R, options: {
        fieldId: string,
        value: FieldValue,
        ignoreFieldChange?: boolean,
      }): R;

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273155868}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273155868.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @param value
       * @param [ignoreFieldChange=false] Ignore the field change script
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(
        fieldId: string,
        value: FieldValue,
        ignoreFieldChange?: boolean,
      ): Promise<RecordReadonly>;

      /**
       * Set value of the field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273155868}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273155868.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @param options.value
       * @param [options.ignoreFieldChange=false] Ignore the field change script
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(options: {
        fieldId: string,
        value: FieldValue,
        ignoreFieldChange?: boolean,
      }): Promise<RecordReadonly>;
    };

    getText: {

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273156769}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273156769.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setValue
       */
      <T extends string | string[]>(
        fieldId: string,
      ): T;

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273156769}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273156769.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setValue
       */
      <T extends string | string[]>(options: {
        fieldId: string,
      }): T;

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273156769}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273156769.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setValue
       */
      promise<T extends string | string[]>(
        fieldId: string,
      ): Promise<T>;

      /**
       * Get value of the field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273156769}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273156769.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setValue
       */
      promise<T extends string | string[]>(options: {
        fieldId: string,
      }): Promise<T>;
    };

    setText: {

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157034}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157034.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @param text ----- The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @param [ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(
        this: R,
        fieldId: string,
        text: string | string[] | null,
        ignoreFieldChange?: boolean,
      ): R;

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157034}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157034.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @param options.text ----- The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(this: R, options: {
        fieldId: string,
        text: string | string[] | null,
        ignoreFieldChange?: boolean,
      }): R;

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157034}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157034.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @param text ----- The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @param [ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(
        fieldId: string,
        text: string | string[] | null,
        ignoreFieldChange?: boolean,
      ): Promise<RecordReadonly>;

      /**
       * Set value of the field by text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157034}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157034.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @param options.text ----- The text or texts to change the field value to.
       *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
       *     null value. Passing in null deselects all currently selected values. If the field type is not multiselect: this
       *     parameter accepts only a single string value.
       * @param [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(options: {
        fieldId: string,
        text: string | string[] | null,
        ignoreFieldChange?: boolean,
      }): Promise<RecordReadonly>;
    };

    removeField: {

      /**
       * Remove a field from the record and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * The observable effect is that the field's value is cleared; the field remains returned by getField and listed by
       * getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(
        this: R,
        fieldId: string,
      ): R;

      /**
       * Remove a field from the record and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * The observable effect is that the field's value is cleared; the field remains returned by getField and listed by
       * getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      <R>(this: R, options: {
        fieldId: string,
      }): R;

      /**
       * Remove a field from the record and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * The observable effect is that the field's value is cleared; the field remains returned by getField and listed by
       * getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(
        fieldId: string,
      ): Promise<RecordReadonly>;

      /**
       * Remove a field from the record and clear its value
       *
       * Undocumented in the Help Center; present at runtime.
       *
       * The observable effect is that the field's value is cleared; the field remains returned by getField and listed by
       * getFields. An unknown fieldId is a silent no-op.
       *
       * @governance none
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
       */
      promise(options: {
        fieldId: string,
      }): Promise<RecordReadonly>;
    };

    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157398}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157398.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     * @param fieldId
     * @param value
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    findSublistLineWithValue(
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
    ): number;

    /**
     * Return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157398}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157398.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.value
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     */
    findSublistLineWithValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
    }): number;

    /**
     * Return value of a sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166148}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273166148.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     * @param fieldId
     * @param line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue<T extends FieldValue>(
      sublistId: string,
      fieldId: string,
      line: number,
    ): T | undefined;

    /**
     * Return value of a sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166148}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273166148.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue<T extends FieldValue>(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): T | undefined;

    setSublistValue: {

      /**
       * Set the value of a sublist field (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166777}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273166777.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @param value
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        line: number,
        value: FieldValue,
      ): R;

      /**
       * Set the value of a sublist field (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166777}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273166777.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @param options.value
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        line: number,
        value: FieldValue,
      }): R;

      /**
       * Set the value of a sublist field (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166777}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273166777.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @param value
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      promise(
        sublistId: string,
        fieldId: string,
        line: number,
        value: FieldValue,
      ): Promise<RecordReadonly>;

      /**
       * Set the value of a sublist field (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273166777}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273166777.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @param options.value
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        line: number,
        value: FieldValue,
      }): Promise<RecordReadonly>;
    };

    getSublistText: {

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167233}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167233.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistValue
       */
      <T extends string | string[]>(
        sublistId: string,
        fieldId: string,
        line: number,
      ): T;

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167233}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167233.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistValue
       */
      <T extends string | string[]>(options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): T;

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167233}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167233.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistValue
       */
      promise<T extends string | string[]>(
        sublistId: string,
        fieldId: string,
        line: number,
      ): Promise<T>;

      /**
       * Return value of a sublist field in text representation
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167233}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167233.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       * @throws {error.SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistValue
       */
      promise<T extends string | string[]>(options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): Promise<T>;
    };

    setSublistText: {

      /**
       * Set the value of a sublist field in text representation (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167591}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167591.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @param text
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        line: number,
        text: string | string[],
      ): R;

      /**
       * Set the value of a sublist field in text representation (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167591}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167591.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @param options.text
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        line: number,
        text: string | string[],
      }): R;

      /**
       * Set the value of a sublist field in text representation (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167591}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167591.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @param text
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      promise(
        sublistId: string,
        fieldId: string,
        line: number,
        text: string | string[],
      ): Promise<RecordReadonly>;

      /**
       * Set the value of a sublist field in text representation (available for deferred dynamic only)
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273167591}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273167591.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @param options.text
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        line: number,
        text: string | string[],
      }): Promise<RecordReadonly>;
    };

    /**
     * Return line count of sublist, or -1 if the sublist does not exist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157892.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     */
    getLineCount(
      sublistId: string,
    ): number;

    /**
     * Return line count of sublist, or -1 if the sublist does not exist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273157892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273157892.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     */
    getLineCount(options: {
      sublistId: string,
    }): number;

    insertLine: {

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273158210}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273158210.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(
        this: R,
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): R;

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273158210}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273158210.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(this: R, options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): R;

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273158210}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273158210.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): Promise<RecordReadonly>;

      /**
       * Insert a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273158210}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273158210.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): Promise<RecordReadonly>;
    };

    removeLine: {

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273165479}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273165479.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(
        this: R,
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): R;

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273165479}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273165479.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      <R>(this: R, options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): R;

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273165479}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273165479.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param line
       * @param [ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      ): Promise<RecordReadonly>;

      /**
       * Remove a sublist line
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273165479}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273165479.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.line
       * @param [options.ignoreRecalc=false] ignore recalc scripting
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or line is missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the sublist id or line index is invalid or if the
       *     sublist is not editable
       */
      promise(options: {
        sublistId: string,
        line: number,
        ignoreRecalc?: boolean,
      }): Promise<RecordReadonly>;
    };

    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600438392}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600438392.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param fieldId
     */
    hasSubrecord(
      fieldId: string,
    ): boolean;

    /**
     * Return a value indicating if the field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600438392}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600438392.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.fieldId
     */
    hasSubrecord(options: {
      fieldId: string,
    }): boolean;

    getSubrecord: {

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709996}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296709996.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       */
      (
        fieldId: string,
      ): RecordReadonly;

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709996}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296709996.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       */
      (options: {
        fieldId: string,
      }): RecordReadonly;

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709996}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296709996.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       */
      promise(
        fieldId: string,
      ): Promise<RecordReadonly>;

      /**
       * Get the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296709996}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296709996.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       * @throws {error.SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
       */
      promise(options: {
        fieldId: string,
      }): Promise<RecordReadonly>;
    };

    removeSubrecord: {

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710374}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296710374.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @return same object for chaining
       */
      <R>(
        this: R,
        fieldId: string,
      ): R;

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710374}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296710374.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       */
      <R>(this: R, options: {
        fieldId: string,
      }): R;

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710374}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296710374.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param fieldId
       * @return same object for chaining
       */
      promise(
        fieldId: string,
      ): Promise<RecordReadonly>;

      /**
       * Remove the subrecord for the associated field
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296710374}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296710374.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.fieldId
       * @return same object for chaining
       */
      promise(options: {
        fieldId: string,
      }): Promise<RecordReadonly>;
    };

    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600435332}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600435332.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     * @param fieldId
     * @param line
     */
    hasSublistSubrecord(
      sublistId: string,
      fieldId: string,
      line: number,
    ): boolean;

    /**
     * Return a value indicating if the associated sublist field has a subrecord
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600435332}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600435332.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.line
     */
    hasSublistSubrecord(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): boolean;

    getSublistSubrecord: {

      /**
       * Get the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296711506}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296711506.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       */
      (
        sublistId: string,
        fieldId: string,
        line: number,
      ): RecordReadonly;

      /**
       * Get the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296711506}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296711506.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       */
      (options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): RecordReadonly;

      /**
       * Get the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296711506}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296711506.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       */
      promise(
        sublistId: string,
        fieldId: string,
        line: number,
      ): Promise<RecordReadonly>;

      /**
       * Get the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296711506}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296711506.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @return client-side subrecord implementation
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
       * @throws {error.SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): Promise<RecordReadonly>;
    };

    removeSublistSubrecord: {

      /**
       * Remove the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712585}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296712585.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @return same object for chaining
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        line: number,
      ): R;

      /**
       * Remove the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712585}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296712585.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @return same object for chaining
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): R;

      /**
       * Remove the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712585}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296712585.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId
       * @param fieldId
       * @param line
       * @return same object for chaining
       */
      promise(
        sublistId: string,
        fieldId: string,
        line: number,
      ): Promise<RecordReadonly>;

      /**
       * Remove the subrecord for the associated sublist field
       *
       * Available only on a standard-mode (deferred dynamic) record; not available in dynamic mode.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296712585}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296712585.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId
       * @param options.fieldId
       * @param options.line
       * @return same object for chaining
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        line: number,
      }): Promise<RecordReadonly>;
    };

    /**
     * Return array of names of all sublists
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599718205}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599718205.html}
     *
     * @governance none
     * @since 2015.2
     */
    getSublists(): string[];

    /**
     * Returns the specified sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599715398}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599715398.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     */
    getSublist(
      sublistId: string,
    ): Sublist | null;

    /**
     * Returns the specified sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599715398}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599715398.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     */
    getSublist(options: {
      sublistId: string,
    }): Sublist | null;

    /**
     * Return array of field IDs of all body fields including machine header fields and matrix header fields
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152646}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152646.html}
     *
     * @governance none
     * @since 2015.2
     */
    getFields(): string[];

    /**
     * Return field object from record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153320}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273153320.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getField(
      fieldId: string,
    ): Field | null;

    /**
     * Return field object from record
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153320}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273153320.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.fieldId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options: {
      fieldId: string,
    }): Field | null;

    /**
     * Return array of names of all fields in a sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152943.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     */
    getSublistFields(
      sublistId: string,
    ): string[];

    /**
     * Return array of names of all fields in a sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273152943}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273152943.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined
     */
    getSublistFields(options: {
      sublistId: string,
    }): string[];

    /**
     * Return field object from record's sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153882}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273153882.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId
     * @param fieldId
     * @param line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(
      sublistId: string,
      fieldId: string,
      line: number,
    ): Field | null;

    /**
     * Return field object from record's sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4273153882}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4273153882.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId
     * @param options.fieldId
     * @param options.line
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(options: {
      sublistId: string,
      fieldId: string,
      line: number,
    }): Field | null;

    /**
     * Get the field for the specified header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599679237}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599679237.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixHeaderField(
      sublistId: string,
      fieldId: string,
      column: number,
    ): Field;

    /**
     * Get the field for the specified header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599679237}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599679237.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixHeaderField(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): Field;

    /**
     * Get the field for the specified sublist in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599708431}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599708431.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     * @param line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixSublistField(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    ): Field;

    /**
     * Get the field for the specified sublist in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599708431}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599708431.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     * @param options.line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixSublistField(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    }): Field;

    /**
     * Get the value for the associated header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599703938}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599703938.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixHeaderValue<FieldType extends string | string[] | number | Date | boolean>(
      sublistId: string,
      fieldId: string,
      column: number,
    ): FieldType;

    /**
     * Get the value for the associated header in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599703938}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599703938.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixHeaderValue<FieldType extends string | string[] | number | Date | boolean>(options: {
      sublistId: string,
      fieldId: string,
      column: number,
    }): FieldType;

    setMatrixHeaderValue: {

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600547643}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600547643.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        column: number,
        value: FieldValue,
      ): R;

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600547643}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600547643.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.value the value to set it to
       * @param [options.ignoreFieldChange] Ignore the field change script (default false)
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        column: number,
        value: FieldValue,
        ignoreFieldChange?: boolean,
      }): R;

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600547643}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600547643.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      promise(
        sublistId: string,
        fieldId: string,
        column: number,
        value: FieldValue,
      ): Promise<RecordReadonly>;

      /**
       * Set the value for the associated header in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600547643}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600547643.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.value the value to set it to
       * @param [options.ignoreFieldChange] Ignore the field change script (default false)
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        column: number,
        value: FieldValue,
        ignoreFieldChange?: boolean,
      }): Promise<RecordReadonly>;
    };

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599712373}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599712373.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param column the column number for the field
     * @param line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixSublistValue<FieldType extends string | string[] | number | Date | boolean>(
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    ): FieldType;

    /**
     * Get the value for the associated field in the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599712373}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599712373.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.column the column number for the field
     * @param options.line the line number for the field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @throws {error.SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if the specified column is invalid
     */
    getMatrixSublistValue<FieldType extends string | string[] | number | Date | boolean>(options: {
      sublistId: string,
      fieldId: string,
      column: number,
      line: number,
    }): FieldType;

    setMatrixSublistValue: {

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600551458}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600551458.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param line the line number for the field
       * @param value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      <R>(
        this: R,
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: FieldValue,
      ): R;

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600551458}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600551458.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.line the line number for the field
       * @param options.value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      <R>(this: R, options: {
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: FieldValue,
      }): R;

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600551458}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600551458.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param sublistId the id of sublist in which the matrix is in.
       * @param fieldId the id of the matrix field
       * @param column the column number for the field
       * @param line the line number for the field
       * @param value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      promise(
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: FieldValue,
      ): Promise<RecordReadonly>;

      /**
       * Set the value for the associated field in the matrix
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600551458}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600551458.html}
       *
       * @governance none
       * @since 2015.2
       *
       * @param options
       * @param options.sublistId the id of sublist in which the matrix is in.
       * @param options.fieldId the id of the matrix field
       * @param options.column the column number for the field
       * @param options.line the line number for the field
       * @param options.value the value to set it to
       * @return same object for chaining
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
       */
      promise(options: {
        sublistId: string,
        fieldId: string,
        column: number,
        line: number,
        value: FieldValue,
      }): Promise<RecordReadonly>;
    };

    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4597993860}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4597993860.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     * @param value the value to search for
     * @param column the column number for the field
     * @return line number
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    findMatrixSublistLineWithValue(
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
      column: number,
    ): number;

    /**
     * Returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4597993860}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4597993860.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     * @param options.value the value to search for
     * @param options.column the column number for the field
     * @return line number
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    findMatrixSublistLineWithValue(options: {
      sublistId: string,
      fieldId: string,
      value: string | string[] | number | Date | boolean,
      column: number,
    }): number;

    /**
     * Returns the number of columns for the specified matrix.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599668537}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599668537.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param sublistId the id of sublist in which the matrix is in.
     * @param fieldId the id of the matrix field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderCount(
      sublistId: string,
      fieldId: string,
    ): number;

    /**
     * Returns the number of columns for the specified matrix.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4599668537}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4599668537.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.sublistId the id of sublist in which the matrix is in.
     * @param options.fieldId the id of the matrix field
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     */
    getMatrixHeaderCount(options: {
      sublistId: string,
      fieldId: string,
    }): number;

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'standard record';

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): {
      type: string;
      isDynamic: boolean;
      fields: alias.Record<string, string | string[]>;
      sublists: alias.Record<string, alias.Record<string, alias.Record<string, string | string[]>>>;
    };
  }

  export interface Record extends RecordReadonly {

    save: {

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267286323.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       * @since 2015.2
       *
       * @param [options]
       * @param [options.enableSourcing=false] enable sourcing during record update
       * @param [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      (options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      }): number;

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267286323}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267286323.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       * @since 2015.2
       *
       * @param [enableSourcing=false] enable sourcing during record update
       * @param [ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      (
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      ): number;

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440842328}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440842328.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       * @since 2015.2
       *
       * @param [options]
       * @param [options.enableSourcing=false] enable sourcing during record update
       * @param [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      promise(options?: {
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      }): Promise<number>;

      /**
       * Save record updates to the system
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4440842328}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4440842328.html}
       *
       * @governance 20 units for transactions, 4 for custom records, 10 for all other records
       * @since 2015.2
       *
       * @param [enableSourcing=false] enable sourcing during record update
       * @param [ignoreMandatoryFields=false] ignore mandatory field during record submission
       * @return id of submitted record
       */
      promise(
        enableSourcing?: boolean,
        ignoreMandatoryFields?: boolean,
      ): Promise<number>;
    };
  }

  /**
   * Encapsulates a sublist on a standard or custom record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600574625}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600574625.html}
   *
   * @since 2015.2
   */
  export interface Sublist {

    /**
     * Returns the internal ID of the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600577122}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600577122.html}
     *
     * @since 2015.2
     */
    readonly id: string;

    /**
     * Returns the sublist type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600594177}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600594177.html}
     *
     * @since 2015.2
     */
    readonly type: Lowercase<serverWidget.SublistType>;

    /**
     * A flag to indicate whether or not the sublist supports multi-line buffer feature
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    readonly isMultilineEditable: boolean;

    /**
     * Indicates whether the sublist has changed on the record form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600574626}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600574626.html}
     *
     * @since 2015.2
     */
    readonly isChanged: boolean;

    /**
     * Indicates whether the sublist is displayed on the record form
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600593345}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600593345.html}
     *
     * @since 2015.2
     */
    readonly isDisplay: boolean;

    /**
     * Returns a column in the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600579417}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600579417.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param fieldId
     */
    getColumn(
      fieldId: string,
    ): Column | null;

    /**
     * Returns a column in the sublist
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4600579417}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4600579417.html}
     *
     * @governance none
     * @since 2015.2
     *
     * @param options
     * @param options.fieldId
     */
    getColumn(options: {
      fieldId: string,
    }): Column | null;

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'sublist.Sublist';

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a body or sublist field on a standard or custom record
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435738444}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4435738444.html}
   *
   * @since 2015.2
   */
  export interface Field {

    /**
     * Returns the UI label for a standard or custom field body or sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435738555}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4435738555.html}
     *
     * @since 2015.2
     */
    label: string;

    /**
     * Returns the internal ID of a standard or custom body or sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435754429}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4435754429.html}
     *
     * @since 2015.2
     */
    readonly id: string;

    /**
     * Return type of the field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435754577}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4435754577.html}
     *
     * @since 2015.2
     */
    readonly type: Lowercase<serverWidget.FieldType>;

    /**
     * Returns the sublist ID if this field is a sublist field
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4834774974}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4834774974.html}
     *
     * @since 2015.2
     */
    readonly sublistId?: string;

    /**
     * Returns true if the standard or custom field is mandatory on the record form or false otherwise.
     * Note: this reflects the form's mandatory flag — some system-populated fields (e.g. customform, trandate, subsidiary) report true even though NetSuite supplies a default value, so true does not guarantee the user must enter it
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4435755588}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4435755588.html}
     *
     * @since 2015.2
     */
    isMandatory: boolean;

    /**
     * Returns the object type name
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toString(): 'Field';

    /**
     * Convert to JSON object
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2015.2
     */
    toJSON(): ExcludeMethods<this>;
  }
}