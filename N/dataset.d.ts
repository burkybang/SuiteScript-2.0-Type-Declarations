/// <reference path="./error.d.ts" />
/// <reference path="./query.d.ts" />
/// <reference path="./workbook.d.ts" />

/**
 * SuiteScript dataset module
 *
 * Use the `N/dataset` module to create, load, list, or save datasets. Datasets are the foundation
 * for workbooks: a dataset combines record-type fields and filters into a query whose results can
 * be used as source data for one or more workbooks.
 *
 * Server scripts only.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_158946741680}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_158946741680.html}
 *
 * @module N/dataset
 * @NApiVersion 2.x
 */
interface dataset {

  /**
   * Creates a dataset based on a record type. The returned `dataset.Dataset` is not yet persisted —
   * call `Dataset.save(options)` to persist it.
   *
   * Note: only `options.type` is meaningful on the returned `Dataset` object — `name`,
   * `description`, and `id` are accepted as parameters but **do not populate the returned
   * `Dataset`'s read-only `name`/`description` properties** (the `id` is also `null` on the
   * returned object). To set these, pass them to `Dataset.save(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158989971922}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158989971922.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.type The internal ID of the record type on which to build the dataset. Use values from `query.Type` or any string internal ID found via the Records Catalog.
   * @param [options.columns] The fields (columns) in the dataset. Use `dataset.createColumn(options)` to create columns.
   * @param [options.condition] The condition (criteria) to be applied to the dataset. Child conditions are combined using `AND`/`OR`.
   * @param [options.description] Accepted, but **ignored** in the returned `Dataset` (whose `description` is read-only and remains `null`). Use `Dataset.save(options)` to set the description.
   * @param [options.id] Accepted, but **ignored** in the returned `Dataset` (whose `id` is `null` until saved). Use `Dataset.save(options)` to set the ID.
   * @param [options.name] Accepted, but **ignored** in the returned `Dataset` (whose `name` is read-only and remains `null`). Use `Dataset.save(options)` to set the name.
   * @return A new `dataset.Dataset` (unsaved).
   *
   * @throws {error.SuiteScriptError} INVALID_SEARCH_TYPE The `options.type` parameter is invalid.
   */
  create(options: {
    type: query.Type | `${query.Type}` | string,
    columns?: dataset.Column[],
    condition?: dataset.Condition,
    description?: string,
    id?: string,
    name?: string,
  }): dataset.Dataset;

  /**
   * Creates a dataset column based on a field or on a formula and a type. Provide either `fieldId`
   * (for a record-field column) or `formula` (for a calculated column). These two forms are
   * mutually exclusive — supplying both throws `MUTUALLY_EXCLUSIVE_ARGUMENTS`; supplying neither
   * throws `NEITHER_ARGUMENT_DEFINED`.
   *
   * When using `formula`, also provide `type` (the return type, e.g. `'STRING'`/`'INTEGER'`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158990102328}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158990102328.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param [options.fieldId] The field ID for the column. Mutually exclusive with `formula`.
   * @param [options.formula] The formula for the column (e.g. `'{email}'`, `'{total} - {tax}'`). Mutually exclusive with `fieldId`/`join`.
   * @param [options.type] The return type of the formula (e.g. `'INTEGER'`, `'STRING'`). Used with `formula`.
   * @param [options.alias] The alias for the column. Used by `Dataset.getExpressionFromColumn(options)`.
   * @param [options.join] The joined record on which the field is present. Use only with `fieldId`.
   * @param [options.id] The numeric ID of the column.
   * @param [options.label] The column label to display in the UI.
   * @return A new `dataset.Column`. Properties not provided in `options` are `null` on the returned object.
   *
   * @throws {error.SuiteScriptError} INVALID_FORMULA_TYPE The `options.type` parameter is invalid.
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS Both `formula` and `fieldId` are specified, or both `formula` and `join` are specified.
   * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED Neither `formula` nor `fieldId` is specified.
   */
  createColumn(options: {
    fieldId?: string,
    formula?: string,
    type?: string,
    alias?: string,
    join?: dataset.Join,
    id?: number,
    label?: string,
  }): dataset.Column;

  /**
   * Creates a dataset condition (criteria). A condition is applied to a column with an operator and
   * (for non-grouping operators) values. To group conditions, pass them as `children` with operator
   * `AND` or `OR` — grouped conditions have `column: null` and `values: []`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158990217350}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158990217350.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.column The column to apply the condition to. For top-level/grouping conditions, pass `null`.
   * @param options.operator The operator for the condition. Use values from `query.Operator`. Top-level/grouping conditions can only use `AND`/`OR`.
   * @param [options.children] Child conditions to combine. Use with operator `AND` or `OR`.
   * @param [options.values] Values for the condition. For top-level/grouping conditions, pass an empty array.
   * @return A new `dataset.Condition`.
   *
   * @throws {error.SuiteScriptError} INVALID_OPERATOR The `options.operator` parameter is invalid.
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS Both `column` and `children` are specified.
   */
  createCondition(options: {
    column: dataset.Column | null,
    operator: query.Operator | `${query.Operator}` | 'AND' | 'OR',
    children?: dataset.Condition[],
    values?: (null | object | number | string | boolean | Date)[],
  }): dataset.Condition;

  /**
   * Creates a dataset join. Supports multi-level, inverse, and polymorphic joins. Use joins when
   * creating dataset columns to reference fields on joined records.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158990279568}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158990279568.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.fieldId The ID of the record field for the join (e.g. `'entity'` to join transaction to customer).
   * @param [options.join] An existing join used as the parent in a multi-level join.
   * @param [options.source] The internal ID of the source record type for the join, used to create an inverse join. Mutually exclusive with `target`.
   * @param [options.target] The polymorphic target of the join. Mutually exclusive with `source`.
   * @return A new `dataset.Join`. Properties not provided in `options` are `null` on the returned object.
   *
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS Both `source` and `target` are specified.
   */
  createJoin(options: {
    fieldId: string,
    join?: dataset.Join,
    source?: string,
    target?: string,
  }): dataset.Join;

  /**
   * Creates a translation expression based on a Translation Collection. Returns a
   * `workbook.Expression` that can be used wherever an expression is accepted (e.g. as the `name`
   * or `description` of `Dataset.save(options)`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162853138869}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162853138869.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.collection The Translation Collection to use.
   * @param options.key The translation term to use.
   * @return An expression representing the translated value.
   */
  createTranslation(options: {
    collection: string,
    key: string,
  }): workbook.Expression;

  /**
   * Retrieves information about a dataset, including name, description, and a list of columns and
   * formulas with their labels and types.
   *
   * Note: the docs' `Object[]` return type is **wrong**. It returns a
   * single object (not an array) with shape `{name, description, record, id, columns}`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162853496011}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162853496011.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2021.2
   */
  describe: {

    /**
     * Retrieves information about a dataset.
     *
     * @param options
     * @param options.id The ID of the dataset to describe.
     * @return Information about the dataset.
     */
    (options: {
      id: string,
    }): dataset.DescribeInfo;

    /**
     * Retrieves information about a dataset, asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0507043830}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0507043830.html}
     *
     * @param options
     * @param options.id The ID of the dataset to describe.
     * @return A promise that resolves to information about the dataset.
     */
    promise(options: {
      id: string,
    }): Promise<dataset.DescribeInfo>;
  };

  /**
   * Lists all existing datasets. Each returned entry contains a name, a description (or `null`),
   * and the dataset's script ID.
   *
   * Note: the docs describe the return as having `id`, `name`, `record`, and optional `description`.
   * The **actual shape has no `record` property** and
   * `description` is always present (may be `null`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158990317009}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158990317009.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @return An array of dataset summaries.
   */
  list(): dataset.ListInfo[];

  /**
   * Retrieves a paginated set of metadata about datasets.
   *
   * The return type `PagedInfoData` is shared with `N/workbook` (`workbook.listPaged` returns the
   * same type), so it's typed here as `workbook.PagedInfoData`. The
   * returned object has the same shape as `query.PagedData` plus a `category` property reflecting
   * the input filter (defaults to `'ALL'`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162853512391}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162853512391.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.pageSize The page size.
   * @param [options.category] The category of datasets or workbooks to get a paginated listing for. Use values from `workbook.OwnerCategory`. Defaults to `'ALL'` when omitted.
   * @return Paginated metadata about datasets.
   *
   * @throws {error.SuiteScriptError} INVALID_OWNER_CATEGORY The `category` value isn't in the `workbook.OwnerCategory` enum.
   */
  listPaged(options: {
    pageSize: number,
    category?: workbook.OwnerCategory | `${workbook.OwnerCategory}`,
  }): workbook.PagedInfoData;

  /**
   * Loads an existing dataset.
   *
   * Note: the per-method reference page (`section_158990335776.html`) documents this as
   * `loadDataset` and shows `var myLoadedDataset = dataset.loadDataset({...})` in its code sample,
   * but at runtime **`dataset.loadDataset` does not exist** — the working method is
   * `dataset.load`. Multiple other official samples confirm `dataset.load({id})`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158990335776}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158990335776.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2020.2
   */
  load: {

    /**
     * Loads an existing dataset.
     *
     * @param options
     * @param options.id The ID of the dataset to load.
     * @return The loaded dataset.
     */
    (options: {
      id: string,
    }): dataset.Dataset;

    /**
     * Loads an existing dataset asynchronously.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0507050454}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0507050454.html}
     *
     * @param options
     * @param options.id The ID of the dataset to load.
     * @return A promise that resolves to the loaded dataset.
     */
    promise(options: {
      id: string,
    }): Promise<dataset.Dataset>;
  };
}

declare namespace dataset {

  /**
   * A record field (column) in a dataset. Columns are equivalent to the fields you select when
   * building a dataset in SuiteAnalytics. Use `dataset.createColumn(options)` to create one.
   *
   * **Mutability:** only `label` is writable; `formula`, `type`,
   * `fieldId`, `id`, `alias`, and `join` are all read-only.
   *
   * **Nullability:** `formula` and `type` are `null` on
   * field-based columns; `join` is `null` for un-joined columns. When a `Column` appears nested
   * inside a `Condition`, `alias`/`label`/`id` may all be `null` (these are populated only on
   * Columns directly on a `Dataset`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946808345}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946808345.html}
   *
   * @since 2020.2
   */
  interface Column {

    /**
     * The alias of the column. May be `null` for columns embedded in a `Condition`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946930657}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946930657.html}
     */
    readonly alias: string | null;

    /**
     * The ID of the record field associated with the column. `null` for formula-based columns.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946870976}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946870976.html}
     */
    readonly fieldId: string | null;

    /**
     * The formula of the column (e.g. `'{email}'`). `null` for field-based columns. For more
     * information about formulas in SuiteAnalytics, see Formula Fields.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946906503}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946906503.html}
     */
    readonly formula: string | null;

    /**
     * The numeric ID of the column. May be `null` for columns embedded in a `Condition`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946901670}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946901670.html}
     */
    readonly id: number | null;

    /**
     * The join through which this column reaches its field. `null` for un-joined columns.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159310457176}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159310457176.html}
     */
    readonly join: dataset.Join | null;

    /**
     * The label of the column (displayed in the UI). May be `null` for columns embedded in a
     * `Condition`.
     *
     * **Writable** — the only mutable property on `Column`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946922873}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946922873.html}
     */
    label: string | null;

    /**
     * The return type of the formula (e.g. `'INTEGER'`, `'STRING'`). `null` for field-based columns.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946914278}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946914278.html}
     */
    readonly type: string | null;

    /**
     * Returns the Column's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     *
     * @return A snapshot of this Column's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * A filter criterion in a dataset. Conditions are applied to a column with an operator (and
   * values for non-grouping operators), or used as grouping containers when combining child
   * conditions with `AND`/`OR`. Use `dataset.createCondition(options)` to create one.
   *
   * **Mutability:** only `caseSensitive` is writable; `children`,
   * `column`, `operator`, and `values` are all read-only.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946951148}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946951148.html}
   *
   * @since 2020.2
   */
  interface Condition {

    /**
     * Indicates whether the condition (in a sort) is case-sensitive. **Writable** — the only
     * mutable property on `Condition`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0507040252}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0507040252.html}
     */
    caseSensitive: boolean;

    /**
     * The children of the condition (sub-conditions combined with `AND`/`OR`). Empty array if this
     * condition isn't a grouping container.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158946962310}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158946962310.html}
     */
    readonly children: dataset.Condition[];

    /**
     * The column on which the condition is placed. `null` for grouping conditions (those that
     * combine `children` with `AND`/`OR`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948010876}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948010876.html}
     */
    readonly column: dataset.Column | null;

    /**
     * The operator of the condition. Use values from `query.Operator`, or `'AND'`/`'OR'` for
     * grouping conditions.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948026629}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948026629.html}
     */
    readonly operator: query.Operator | `${query.Operator}` | 'AND' | 'OR' | string;

    /**
     * The values for this condition. Empty array for grouping conditions.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948048117}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948048117.html}
     */
    readonly values: (null | object | number | string | boolean | Date)[];

    /**
     * Returns the Condition's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     *
     * @return A snapshot of this Condition's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * Encapsulates a dataset — columns, conditions, joins. Use `dataset.create(options)` or
   * `dataset.load(options)` to obtain one.
   *
   * **Mutability:** `columns`, `condition`, `id`, and `type` are
   * writable; `name` and `description` are read-only and can only be set via `Dataset.save(options)`.
   * Note that `condition` is writable to a `Condition` object but the runtime **rejects `null`**
   * (despite loaded datasets being able to have `condition: null`); an asymmetry to be aware of.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948063457}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948063457.html}
   *
   * @since 2020.2
   */
  interface Dataset {

    /**
     * The columns in the dataset.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948083358}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948083358.html}
     */
    columns: dataset.Column[];

    /**
     * The condition (criteria) for the entire dataset. `null` for datasets without filters.
     *
     * Note: the runtime accepts a `Condition` on assignment but **rejects `null`** (throws
     * "Wrong parameter type: condition is expected as dataset.Condition").
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948103219}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948103219.html}
     */
    condition: dataset.Condition | null;

    /**
     * The description of the dataset. May be `null`.
     *
     * **Read-only** — set via `Dataset.save(options)`. Even on a freshly-created `Dataset`, attempts
     * to assign `description` throw "Read only property: name." (yes, the runtime error mentions
     * the wrong property name, but the error is consistent).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948114518}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948114518.html}
     */
    readonly description: string | null;

    /**
     * The script ID of the dataset. `null` until the dataset is saved.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948123704}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948123704.html}
     */
    id: string | null;

    /**
     * The name of the dataset. `null` until the dataset is saved.
     *
     * **Read-only** — set via `Dataset.save(options)`. Even on a freshly-created `Dataset`, attempts
     * to assign `name` throw "Read only property: name."
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948129533}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948129533.html}
     */
    readonly name: string | null;

    /**
     * The internal ID for the base record type for the dataset.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948136837}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948136837.html}
     */
    type: string;

    /**
     * Returns an expression which can be used in a workbook.
     *
     * The returned `Expression` has `functionId: 'DATASET_COLUMN'` and `parameters: { dataset, alias }`
     * where `dataset` is a snapshot of this dataset.
     *
     * Note: docs and runtime disagree on how `columnId`/`alias` interact:
     * - `alias` is the only actually-required parameter
     * - `columnId` alone throws `SSS_MISSING_REQD_ARGUMENT: Missing a required argument: options.alias`
     * - Supplying both does NOT throw `MUTUALLY_EXCLUSIVE_ARGUMENTS` despite what docs claim; the call succeeds using `alias` and **ignores `columnId` entirely** (the returned Expression's `parameters` carries only `{ dataset, alias }`, so even a nonexistent `columnId` is silently dropped)
     * - Supplying neither throws `SSS_MISSING_REQD_ARGUMENT` (not `NEITHER_ARGUMENT_DEFINED` as docs claim)
     *
     * (The official code sample also shows `getExpressionFromColumn({columnId: 16, alias: 'myExpression'})`,
     * which contradicts the same docs' own `MUTUALLY_EXCLUSIVE_ARGUMENTS` claim — runtime matches the sample.)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948233177}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948233177.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2020.2
     *
     * @param options
     * @param options.alias The alias of the column.
     * @param [options.columnId] The numeric ID of the column. Optional at runtime even though docs mark it required, and ignored whenever `alias` is supplied.
     * @return An expression referring to the column.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The `options.alias` parameter is not specified.
     */
    getExpressionFromColumn(options: {
      alias: string,
      columnId?: number,
    }): workbook.Expression;

    /**
     * Executes the dataset and returns the result set (same shape as `N/query`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948330969}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948330969.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2020.2
     */
    run: {

      /**
       * Executes the dataset synchronously.
       *
       * @return The result set.
       */
      (): query.ResultSet;

      /**
       * Executes the dataset asynchronously, returning a `Promise`.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0507044927}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0507044927.html}
       *
       * @return A promise that resolves to the result set.
       */
      promise(): Promise<query.ResultSet>;
    };

    /**
     * Executes the dataset and returns paginated results. Max page size 1000; min page size 5
     * (except possibly the last page, which may have fewer than 5 rows). Default page size 50.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948363823}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948363823.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2020.2
     *
     * @param options
     * @param options.pageSize The size of each page. Min 5, max 1000. Default 50.
     * @return The paginated result set.
     */
    runPaged(options: {
      pageSize: number,
    }): query.PagedData;

    /**
     * Saves the dataset. Supply `name` (required) — and optionally `description`/`id`. The `id`
     * (if supplied) must start with `custdataset`; if not supplied, one is auto-generated. The
     * returned object contains only the `id` of the saved dataset.
     *
     * This is the **only way** to set `name`/`description` on a `Dataset` — those properties are
     * read-only at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159354415610}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159354415610.html}
     *
     * @governance 10 units
     * @restriction Server-side scripts only
     * @since 2020.2
     *
     * @param options
     * @param options.name The name of the dataset. May be a plain string or a `workbook.Expression` (e.g. from `dataset.createTranslation`).
     * @param [options.description] The description of the dataset. May be a plain string or a `workbook.Expression`.
     * @param [options.id] The script ID of the dataset. Must start with `custdataset`.
     * @return An object containing the script ID of the saved dataset.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `options.name` is missing.
     * @throws {error.SuiteScriptError} AT_LEAST_ONE_COLUMN_IS_REQUIRED The dataset has no columns.
     * @throws {error.SuiteScriptError} INVALID_ID_PREFIX The supplied `options.id` does not start with `custdataset`.
     */
    save(options: {
      name: string | workbook.Expression,
      description?: string | workbook.Expression,
      id?: string,
    }): { id: string };

    /**
     * Returns the Dataset's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     *
     * @return A snapshot of this Dataset's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }

  /**
   * A summary entry returned in the array from `dataset.list()`. The shape is
   * `{name, description, id}` only — no `record` property despite what the docs claim.
   *
   * @since 2020.2
   */
  interface ListInfo {

    /**
     * The script ID of the dataset.
     */
    readonly id: string;

    /**
     * The name of the dataset.
     */
    readonly name: string;

    /**
     * The description of the dataset. Always present, may be `null`.
     */
    readonly description: string | null;
  }

  /**
   * The shape returned by `dataset.describe(options)`. The docs'
   * `Object[]` return type is wrong; the actual return is a single object (not an array) with
   * `{name, description, record, id, columns}`.
   *
   * Notable runtime quirks:
   * - `name` is **not** a plain string: it's a Java-backed translation wrapper. Call its
   *   `getTranslation()` method to read the resolved name (e.g. `'Orders and Returns'`); its own
   *   `toString()` returns an opaque Java identifier (a `ContextTranslatable{...}` or
   *   `...$$Lambda@...` string), not the name.
   * - Each `column.type` is a **Java enum proxy** (not a plain string). `toString()` and `name()`
   *   both return the type name (e.g. `'STRING'`, `'UNKNOWN'`); `ordinal()` and `isNumeric()` are
   *   also exposed as methods (alongside the usual Java `Object`/`Enum` methods).
   *
   * @since 2021.2
   */
  interface DescribeInfo {

    /**
     * The name of the dataset, as a Java-backed translation wrapper. Call `getTranslation()` to
     * read the resolved name as a plain string (e.g. `'Orders and Returns'`). The object's own
     * `toString()` returns an opaque Java identifier, not the name.
     */
    readonly name: {

      /**
       * Returns the resolved dataset name as a plain string (e.g. `'Orders and Returns'`).
       */
      getTranslation(): string;
    };

    /**
     * The description of the dataset, or `null`.
     */
    readonly description: string | null;

    /**
     * The internal ID of the base record type.
     */
    readonly record: string;

    /**
     * The script ID of the dataset.
     */
    readonly id: string;

    /**
     * The columns of the dataset, with each column's alias and type.
     */
    readonly columns: {

      /**
       * The alias of the column.
       */
      readonly alias: string,

      /**
       * The column's data type, as a Java enum proxy. `toString()` and `name()` both return the
       * type name (e.g. `'STRING'`, `'UNKNOWN'`); `ordinal()` returns the enum position and
       * `isNumeric()` whether the type is numeric. (The object also carries the usual Java
       * `Object`/`Enum` methods, e.g. `equals`, `hashCode`, `compareTo`.)
       */
      readonly type: {

        /**
         * Returns the type name, e.g. `'STRING'`, `'UNKNOWN'`.
         */
        toString(): string;

        /**
         * Returns the type name, e.g. `'STRING'`, `'UNKNOWN'` (same value as `toString()`).
         */
        name(): string;

        /**
         * Returns the enum ordinal (position) of the type.
         */
        ordinal(): number;

        /**
         * Returns whether the type is numeric.
         */
        isNumeric(): boolean;
      },
    }[];
  }

  /**
   * A join from one record type to another (or to itself, for inverse and polymorphic joins).
   * Used when creating dataset columns that reach into related records. Use
   * `dataset.createJoin(options)` to create one.
   *
   * **Nullability:** `source`, `target`, and `join` are all
   * nullable. Only `fieldId` is consistently non-null.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948390739}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948390739.html}
   *
   * @since 2020.2
   */
  interface Join {

    /**
     * The ID of the record field on which the join is performed.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948402464}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948402464.html}
     */
    readonly fieldId: string;

    /**
     * The child join, if this is a multi-level join. `null` otherwise.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948412223}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948412223.html}
     */
    readonly join: dataset.Join | null;

    /**
     * The internal ID of the source record type of the join (used for inverse joins). `null` for
     * non-inverse joins.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948418068}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948418068.html}
     */
    readonly source: string | null;

    /**
     * The polymorphic target of the join. `null` for non-polymorphic joins.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158948426433}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158948426433.html}
     */
    readonly target: string | null;

    /**
     * Returns the Join's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     *
     * @return A snapshot of this Join's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }
}
