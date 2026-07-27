/// <reference path="./error.d.ts" />
/// <reference path="./dataset.d.ts" />
/// <reference path="./workbook.d.ts" />

/**
 * SuiteScript datasetLink module
 *
 * Use the `N/datasetLink` module to logically link two (or more) datasets so that data from both
 * can be used in workbook visualizations such as pivots. Linking is **not** a join — the datasets
 * aren't merged. Instead, you supply a column expression for each dataset (typically representing
 * a shared field like a date), and the linked-dataset object exposes both datasets together to
 * downstream workbook components.
 *
 * Useful when record types can't be joined explicitly in the SuiteAnalytics Workbook UI or via
 * `N/dataset` joins (e.g. between Fixed Assets and Transactions).
 *
 * Server scripts only.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_162609851226}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_162609851226.html}
 *
 * @module N/datasetLink
 * @NApiVersion 2.x
 */
interface datasetLink {

  /**
   * Links two (or more) datasets using common column expressions.
   *
   * To link datasets, both datasets must include columns that share common data (such as a date).
   * Use `Dataset.getExpressionFromColumn(options)` to obtain a `workbook.Expression` for each
   * linking column, then pass the datasets and the expressions to this method.
   *
   * The `expressions` argument is a **matrix** (`workbook.Expression[][]`). Two valid shapes are
   * supported:
   * - **Paired form** (matches official sample): `expressions: [[expr1, expr2]]` — outer length 1,
   *   inner length equal to `datasets.length`. Each inner array represents one set of paired
   *   expressions across all datasets.
   * - **Parallel form**: `expressions: [[expr1], [expr2]]` — outer length equal to `datasets.length`,
   *   each inner length 1. One expression per dataset.
   *
   * Multiple expressions per dataset (outer length × inner length both > 1) also work — both
   * dimensions are flexible.
   *
   * Note: the docs' Parameters table marks `options.id` as optional and says an ID is auto-generated
   * when omitted. **`id` is actually required** — calling without it
   * throws `"Missing a required argument: options"`. Both official code samples on docs pages
   * include `id`, corroborating the runtime behavior. Typed as required here.
   *
   * No documented `.promise()` form (`datasetLink.create.promise` is
   * `undefined`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162626675925}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162626675925.html}
   *
   * @governance None
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.datasets The datasets to link.
   * @param options.expressions The column expressions used to link the datasets, as a matrix. See description for shape details.
   * @param options.id The ID of the linked dataset. Required at runtime despite docs marking it optional.
   * @return A `datasetLink.DatasetLink` object representing the linked datasets.
   *
   * @throws {error.SuiteScriptError} NO_DATASET_DEFINED The `options.datasets` parameter is an empty array (documented; runtime emits `SSS_MISSING_REQD_ARGUMENT` instead — same condition, different code).
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The `options.id` parameter (or other required parameter) is not specified.
   */
  create(options: {
    datasets: dataset.Dataset[],
    expressions: workbook.Expression[][],
    id: string,
  }): datasetLink.DatasetLink;
}

declare namespace datasetLink {

  /**
   * A representation of datasets linked using `datasetLink.create(options)`. Use this object as
   * the data source for workbook visualizations (e.g. pass to `workbook.createPivot(options)`).
   *
   * **Mutability:** `id` and `datasets` are writable; `expressions`
   * is read-only (assignment throws `"Wrong parameter type: expressions is expected as
   * workbook.Expression[][]."`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162626627810}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162626627810.html}
   *
   * @since 2021.2
   */
  interface DatasetLink {

    /**
     * The script ID of the linked dataset.
     *
     * Note: this property is **undocumented** on the per-object page (which lists only `datasets`
     * and `expressions`), but is present at runtime and is required to be supplied to
     * `datasetLink.create(options)`. Writable at runtime.
     */
    id: string;

    /**
     * The linked datasets that this `DatasetLink` represents.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162626649573}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162626649573.html}
     */
    datasets: dataset.Dataset[];

    /**
     * The column expressions for the link, as a matrix. See `datasetLink.create(options)` for
     * shape details.
     *
     * Read-only at runtime — assignment throws `"Wrong parameter type: expressions is expected as
     * workbook.Expression[][]."` (the error message also confirms the matrix shape).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162626666908}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162626666908.html}
     */
    readonly expressions: workbook.Expression[][];

    /**
     * Returns the DatasetLink's own data properties (not its methods) as a plain object.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2021.2
     *
     * @return A snapshot of this DatasetLink's data properties.
     */
    toJSON(): ExcludeMethods<this>;
  }
}
