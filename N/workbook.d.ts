/// <reference path="./error.d.ts" />

/**
 * SuiteScript workbook module
 *
 * Use the `N/workbook` module to create new workbooks, load existing ones, or list all available
 * workbooks. A workbook is built on a `dataset.Dataset` (see also `N/dataset`) and may contain
 * pivot tables, table views, charts, and conditional formats. Workbook expressions
 * (`workbook.Expression`) are the lingua franca used throughout the module to describe filters,
 * calculations, sort keys, and styled-cell predicates.
 *
 * Server scripts only.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_159006350818}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_159006350818.html}
 *
 * @module N/workbook
 * @NApiVersion 2.x
 */
interface workbook {

  /**
   * The `workbook.ChildNodesSelector` module-level singleton instance. Pass this directly into
   * `createMeasureValueSelector(options)` (as `columnSelector` or `rowSelector`) when you want to
   * select child nodes only.
   *
   * The docs say "There is no method that creates this object" but don't reveal that you obtain
   * the instance from the `workbook.ChildNodesSelector` module-level singleton itself.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163405579141}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163405579141.html}
   *
   * @since 2021.2
   */
  readonly ChildNodesSelector: workbook.ChildNodesSelector;

  /**
   * The `workbook.DescendantOrSelfNodesSelector` module-level singleton instance. Pass this
   * directly into `createMeasureValueSelector(options)` (as `columnSelector` or `rowSelector`)
   * or `createSortByMeasure(options)` when you want to select descendant-or-self nodes.
   *
   * Note: the docs spell this `DescendantorSelfNodesSelector` (lowercase `or`), but the runtime
   * export is `DescendantOrSelfNodesSelector` (camelCase `Or`). Same module-level singleton pattern
   * as `ChildNodesSelector`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170591936}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170591936.html}
   *
   * @since 2021.2
   */
  readonly DescendantOrSelfNodesSelector: workbook.DescendantOrSelfNodesSelector;

  /**
   * Creates a new (empty or partially-populated) `Workbook`. All `options` properties are
   * optional — calling `workbook.create({})` returns a workbook with defaults (`id` auto-set,
   * `name`/`description` `null`, `pivots`/`charts`/`tables` empty arrays).
   *
   * Note: the workbook produced by `create()` is mutable at create time but becomes read-only once
   * loaded via `workbook.load()`. The result object has 6 own properties (`name, description,
   * pivots, charts, tables, id`) plus the `runPivot` method. `charts` is undocumented but is part
   * of the runtime Workbook shape.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008744522}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008744522.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param [options] All options are optional.
   * @param [options.id] The workbook's script ID.
   * @param [options.name] The workbook's display name.
   * @param [options.description] The workbook's description.
   * @param [options.pivots] The initial set of pivots.
   * @param [options.charts] The initial set of charts. **Undocumented in the Help Center** but accepted at runtime.
   * @param [options.tables] The initial set of tables.
   * @return A new (unloaded) `workbook.Workbook`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `options` is missing (must pass at least an empty object).
   */
  create(options?: {
    id?: string,
    name?: string,
    description?: string,
    pivots?: workbook.Pivot[],
    charts?: workbook.Chart[],
    tables?: workbook.Table[],
  }): workbook.Workbook;

  /**
   * Creates a chart aspect — a visual mapping rule (color or value) for a measure within a
   * chart series.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007796216}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007796216.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.measure The measure mapped to the aspect.
   * @param options.type The aspect type. **Runtime requires lowercase** (`'color'` or `'value'`) — see `workbook.AspectType`.
   * @return A new `workbook.Aspect`.
   *
   * @throws {error.SuiteScriptError} INVALID_ASPECT_TYPE The `options.type` value is not in the `workbook.AspectType` enum (case-sensitive — runtime requires lowercase).
   */
  createAspect(options: {
    measure: workbook.CalculatedMeasure | workbook.DataMeasure,
    type: workbook.AspectType | `${workbook.AspectType}` | string,
  }): workbook.Aspect;

  /**
   * Creates a calculated measure — a measure whose value is computed from a single `Expression`
   * (or a list of `Expression`s reduced together).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159019930437}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159019930437.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param [options.expression] The expression that yields the measure's value (XOR with `expressions`).
   * @param [options.expressions] An array of expressions reduced into the measure value (XOR with `expression`).
   * @param options.label The label for the calculated measure (string or translated `Expression`).
   * @return A new `workbook.CalculatedMeasure`.
   */
  createCalculatedMeasure(options: {
    expression?: workbook.Expression,
    expressions?: workbook.Expression[],
    label: workbook.Expression | string,
  }): workbook.CalculatedMeasure;

  /**
   * Creates a chart category — the categorical axis of a chart (often the X axis), backed by a
   * data dimension or section.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007978137}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007978137.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.axis The chart axis associated with this category.
   * @param options.root The dimension (or section) that drives the category axis values.
   * @param options.sortDefinitions Sort definitions applied to the category. Pass `[]` for no sort.
   * @return A new `workbook.Category`.
   */
  createCategory(options: {
    axis: workbook.ChartAxis,
    root: workbook.DataDimension | workbook.Section,
    sortDefinitions: workbook.SortDefinition[],
  }): workbook.Category;

  /**
   * Creates a chart definition. A chart wraps a series of measures (with optional aggregation
   * filters and category/legend axes) and selects a visualization `type` (bar, line, etc.).
   *
   * Note: `options.id` is REQUIRED at create-time even though the docs don't clearly mark it
   * required — `createChart` throws `SSS_MISSING_REQD_ARGUMENT` without it. Likely all the listed
   * fields are required at create; the docs' per-field `required` flags are unreliable for this
   * method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.id The chart's identifier. Required at create time despite docs ambiguity.
   * @param options.name The chart's display name.
   * @param options.type The chart visualization type. Use values from `workbook.ChartType`.
   * @param options.title The chart title text.
   * @param options.subTitle The chart subtitle text.
   * @param options.stacking The chart stacking mode. Use values from `workbook.Stacking`.
   * @param options.category The chart category (categorical axis).
   * @param options.legend The chart legend.
   * @param options.series The chart series.
   * @param [options.aggregationFilters] Aggregation-level filters applied to the chart data.
   * @param [options.filterExpressions] Additional filter expressions applied at the chart level.
   * @return A new `workbook.Chart`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument is missing (e.g. `options.id`).
   * @throws {error.SuiteScriptError} INVALID_CHART_TYPE The `options.type` value is not in the `workbook.ChartType` enum.
   * @throws {error.SuiteScriptError} INVALID_STACKING_TYPE The `options.stacking` value is not in the `workbook.Stacking` enum.
   */
  createChart(options: {
    id: string,
    name: string,
    type: workbook.ChartType | `${workbook.ChartType}` | string,
    title: string,
    subTitle: string,
    stacking: workbook.Stacking | `${workbook.Stacking}` | string,
    category: workbook.Category,
    legend: workbook.Legend,
    series: workbook.Series,
    aggregationFilters?: (workbook.LimitingFilter | workbook.ConditionalFilter)[],
    filterExpressions?: workbook.Expression[],
  }): workbook.Chart;

  /**
   * Creates a chart axis (for use as a category axis or legend axis).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008145231}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008145231.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.title The chart axis title.
   * @return A new `workbook.ChartAxis`.
   */
  createChartAxis(options: {
    title: string,
  }): workbook.ChartAxis;

  /**
   * Creates a color object — an RGBA tuple usable as a `Style` color property or anywhere a
   * `Color` is accepted.
   *
   * Note: `red`, `green`, `blue` are integers in `0..255`. `alpha` is a fraction in `0..1` (NOT
   * `0..255` as docs claim — see `workbook.Color` interface). Passing `alpha: 0` is normalized to
   * `alpha: null` on the returned object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159019930574}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159019930574.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.red Red channel (0-255).
   * @param options.green Green channel (0-255).
   * @param options.blue Blue channel (0-255).
   * @param [options.alpha] Alpha channel (0-1 fraction; `null`/omitted = fully opaque). NOT 0-255 as docs claim.
   * @return A new `workbook.Color`.
   *
   * @throws {error.SuiteScriptError} INVALID_ALPHA_VALUE `alpha` is outside `0..1`.
   * @throws {error.SuiteScriptError} INVALID_COLOR_VALUE `red`, `green`, or `blue` is outside `0..255`.
   */
  createColor(options: {
    red: number,
    green: number,
    blue: number,
    alpha?: number | null,
  }): workbook.Color;

  /**
   * Creates a complex record key — a record key composed of multiple named values. Used to
   * identify records with composite primary keys.
   *
   * Note: the `options` object's own enumerable properties BECOME the record key's `properties`.
   * There is no documented "properties" wrapper — pass the key fields directly as top-level
   * options. The internal error name is `workbook.createRecordKey` (shared error namespace with
   * `createSimpleRecordKey`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519030417}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519030417.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options An object whose enumerable properties become the record key's `properties`.
   * @return A new `workbook.RecordKey`.
   *
   * @throws {error.SuiteScriptError} You have entered an invalid type argument: `options` is missing or not an object.
   */
  createComplexRecordKey(options: { [key: string]: any }): workbook.RecordKey;

  /**
   * Creates a conditional filter — a filter that excludes rows or columns based on a predicate
   * expression evaluated against a measure.
   *
   * Note: the docs list `filteredNodesSelector` and `otherAxisSelector` as input parameters. These
   * are NOT actual parameter names at runtime — they're silently ignored. Real required params:
   * `row`, `rowSelector`, `columnSelector`, `predicate`, `measure` (only those 5 properties appear
   * on the returned `ConditionalFilter`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008152586}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008152586.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.row Whether the filter is applied to rows (`true`) or columns (`false`).
   * @param options.rowSelector The row selector — accepts `DimensionSelector`, `PathSelector`, `DescendantOrSelfNodesSelector`, or `ChildNodesSelector`.
   * @param options.columnSelector The column selector — same accepted types as `rowSelector`.
   * @param options.measure The measure whose values are filtered.
   * @param options.predicate The predicate `Expression` evaluated against the measure values; rows/columns for which it evaluates falsy are excluded.
   * @return A new `workbook.ConditionalFilter`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument is missing.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE A value has the wrong type.
   */
  createConditionalFilter(options: {
    row: boolean,
    rowSelector: workbook.DimensionSelector | workbook.PathSelector | workbook.DescendantOrSelfNodesSelector | workbook.ChildNodesSelector,
    columnSelector: workbook.DimensionSelector | workbook.PathSelector | workbook.DescendantOrSelfNodesSelector | workbook.ChildNodesSelector,
    measure: workbook.CalculatedMeasure | workbook.DataMeasure,
    predicate: workbook.Expression,
  }): workbook.ConditionalFilter;

  /**
   * Creates a conditional format — a styling overlay applied to a workbook based on a set of
   * filter rules.
   *
   * Note: the docs type `rules` as a singular `ConditionalFormatRule`. Runtime requires an ARRAY —
   * `createConditionalFormat({rules: singleRule})` throws `"You have entered an invalid type
   * argument: options.rules"`. Same singular-vs-array bug pattern as `PathSelector.elements`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170026948}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170026948.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.rules The conditional-format rules. Must be a non-empty array.
   * @return A new `workbook.ConditionalFormat`.
   *
   * @throws {error.SuiteScriptError} NO_RULE_DEFINED No rules were provided.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for `options.rules` is not an array of `workbook.ConditionalFormatRule`.
   */
  createConditionalFormat(options: {
    rules: workbook.ConditionalFormatRule[],
  }): workbook.ConditionalFormat;

  /**
   * Creates a conditional-format rule — pairs a filter (when to apply) with a style (what to
   * apply). Used as elements of `ConditionalFormat.rules`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170087636}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170087636.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.filter The table-column filter that triggers this rule.
   * @param options.style The style to apply when the filter matches.
   * @return A new `workbook.ConditionalFormatRule`.
   */
  createConditionalFormatRule(options: {
    filter: workbook.TableColumnFilter,
    style: workbook.Style,
  }): workbook.ConditionalFormatRule;

  /**
   * Creates a constant `Expression` — wraps a literal value as an Expression for use in
   * predicates and parameters.
   *
   * Note: of the values declared in `ConstantType`, the runtime accepts `TEXT`, `INTEGER`,
   * `BOOLEAN`, `CURRENCY`, `DURATION`. Rejected: `FLOAT` (use `DECIMAL`?), `DATE`, `DATETIME`
   * (use `DATE_TIME`?), `NULL`. Returns an `Expression` with `functionId === 'CONSTANT'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051033752}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051033752.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.type The constant type. Use values from `workbook.ConstantType`.
   * @param options.value The constant value (type depends on `type`).
   * @return A new `workbook.Expression` representing the constant.
   *
   * @throws {error.SuiteScriptError} You have entered an invalid type argument: `type` is not in `ConstantType`.
   */
  createConstant(options: {
    type: workbook.ConstantType | `${workbook.ConstantType}` | string,
    value: any,
  }): workbook.Expression;

  /**
   * Creates a currency object — pairs an amount with a currency record ID.
   *
   * Note: both `amount` and `id` are required. The `id`'s expected type is unclear: an integer,
   * a numeric string `'1'` (throws `INVALID_CURRENCY: '1'`), an internal-id object
   * `{internalId: 1}`, and the actual numeric currency ID are all rejected. The accepted form is
   * not documented.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170128090}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170128090.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.amount The monetary amount.
   * @param options.id The currency identifier (exact accepted type is not documented).
   * @return A new `workbook.Currency`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required argument is missing.
   * @throws {error.SuiteScriptError} INVALID_CURRENCY The `id` value does not identify a known currency.
   */
  createCurrency(options: {
    amount: number,
    id: string | number,
  }): workbook.Currency;

  /**
   * Creates a data dimension — a column or row dimension in a workbook, composed of one or
   * more `DataDimensionItem`s.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159020010174}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159020010174.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.items The dimension items composing this data dimension.
   * @param [options.totalLine] Total-line display mode. Use values from `workbook.TotalLine`.
   * @return A new `workbook.DataDimension`.
   */
  createDataDimension(options: {
    items: workbook.DataDimensionItem[],
    totalLine?: workbook.TotalLine | `${workbook.TotalLine}` | string,
  }): workbook.DataDimension;

  /**
   * Creates a data dimension item — pairs an expression with a label, optionally with
   * date-time hierarchy.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159020014389}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159020014389.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.expression The expression yielding the item's value.
   * @param options.label The label for the item (string or translated `Expression`).
   * @param [options.dateTimeHierarchy] Date-time hierarchy mode if applicable.
   * @return A new `workbook.DataDimensionItem`.
   */
  createDataDimensionItem(options: {
    expression: workbook.Expression,
    label: workbook.Expression | string,
    dateTimeHierarchy?: workbook.DateTimeHierarchy | `${workbook.DateTimeHierarchy}` | string,
  }): workbook.DataDimensionItem;

  /**
   * Creates a data measure — a measure aggregating an expression (or list of expressions) using
   * the given aggregation function.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159020026220}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159020026220.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.aggregation Aggregation function. Use values from `workbook.Aggregation`.
   * @param [options.expression] The expression to aggregate (XOR with `expressions`).
   * @param [options.expressions] Multiple expressions to aggregate (XOR with `expression`).
   * @param options.label The measure label (string or translated `Expression`).
   * @return A new `workbook.DataMeasure`.
   */
  createDataMeasure(options: {
    aggregation: workbook.Aggregation | `${workbook.Aggregation}` | string,
    expression?: workbook.Expression,
    expressions?: workbook.Expression[],
    label: workbook.Expression | string,
  }): workbook.DataMeasure;

  /**
   * Creates a dimension selector — wraps a `DataDimension` in a node-selector for use in
   * `MeasureValueSelector` or `SortDefinition`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159020038614}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159020038614.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.dimension The dimension to wrap.
   * @return A new `workbook.DimensionSelector`.
   */
  createDimensionSelector(options: {
    dimension: workbook.DataDimension | workbook.Section,
  }): workbook.DimensionSelector;

  /**
   * Creates a duration object — pairs an `amount` with `units` (note plural).
   *
   * Note: the documented input parameter name is `unit` (singular, matching the `Duration.unit`
   * property), but the runtime requires `units` (plural). Passing `unit` throws `"Missing a
   * required argument: options.units"`. The returned object exposes the value as `unit`
   * (singular). Required: `amount`, `units`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170200061}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170200061.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.amount The duration amount (number of units).
   * @param options.units The unit of duration (note plural input name despite singular result property). Use values from `workbook.Unit`.
   * @return A new `workbook.Duration`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `amount` or `units` is missing.
   */
  createDuration(options: {
    amount: number,
    units: workbook.Unit | `${workbook.Unit}` | string,
  }): workbook.Duration;

  /**
   * Creates an expression — the core building block for workbook filters, predicates, and
   * measures. The `functionId` selects which expression type, and `parameters` supplies the
   * type-specific parameters (see `workbook.ExpressionType` for the full vocabulary).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051196833}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051196833.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.functionId The expression's function ID. Use values from `workbook.ExpressionType`.
   * @param options.parameters Type-specific parameter object.
   * @return A new `workbook.Expression`.
   *
   * @throws {error.SuiteScriptError} You have entered an invalid type argument: `functionId` is not in `ExpressionType`.
   */
  createExpression(options: {
    functionId: workbook.ExpressionType | `${workbook.ExpressionType}` | string,
    parameters: object,
  }): workbook.Expression;

  /**
   * Creates a field-context object — controls how a field's value is presented (e.g.
   * `DISPLAY` vs `RAW_VALUE`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159020075472}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159020075472.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.name The field context name (e.g. `'DISPLAY'`, `'RAW_VALUE'`).
   * @return A new `workbook.FieldContext`.
   */
  createFieldContext(options: {
    name: string,
  }): workbook.FieldContext;

  /**
   * Creates a font-size object — a named font size for use in `Style.fontSize`. Accepts a name
   * from `workbook.FontSize` (e.g. `'LARGE'`); the resulting `FontSize` is a `{ value: number;
   * unit: Unit }` pair.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170257614}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170257614.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param [options.name] A named font size from the `workbook.FontSize` enum.
   * @param [options.value] Numeric font size value (paired with `unit`).
   * @param [options.unit] Unit for the font size (when supplied as `value`+`unit`).
   * @return A new `workbook.FontSize` object.
   *
   * @throws {error.SuiteScriptError} INVALID_FONT_SIZE The `name` value is not in `workbook.FontSize`.
   */
  createFontSize(options: {
    name?: workbook.FontSizeName | string,
    value?: number,
    unit?: workbook.Unit | `${workbook.Unit}` | string,
  }): workbook.FontSize;

  /**
   * Creates a chart legend — the legend axis of a chart (often the secondary categorical axis or
   * the series-color key).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008316064}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008316064.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.axes The chart axes associated with this legend.
   * @param options.root The dimension (or section) driving the legend values.
   * @param options.sortDefinitions Sort definitions applied to the legend. Pass `[]` for no sort.
   * @return A new `workbook.Legend`.
   */
  createLegend(options: {
    axes: workbook.ChartAxis[],
    root: workbook.DataDimension | workbook.Section,
    sortDefinitions: workbook.SortDefinition[],
  }): workbook.Legend;

  /**
   * Creates a limiting filter — a "top-N"-style filter that keeps only the first/last `limit`
   * rows or columns after sorting.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008328944}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008328944.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.row Whether the filter is applied to rows (`true`) or columns (`false`).
   * @param options.filteredNodesSelector The selector for the nodes to which the limit applies.
   * @param options.limit The maximum number of rows or columns to keep.
   * @param options.sortBys The sort orderings applied before the limit takes effect.
   * @return A new `workbook.LimitingFilter`.
   */
  createLimitingFilter(options: {
    row: boolean,
    filteredNodesSelector: workbook.PathSelector | workbook.DimensionSelector,
    limit: number,
    sortBys: (workbook.SortByDataDimensionItem | workbook.SortByMeasure)[],
  }): workbook.LimitingFilter;

  /**
   * Creates a measure selector — wraps a `DataMeasure` or `CalculatedMeasure` in a selector for
   * use in `MeasureValueSelector` or `SortByMeasure`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051550708}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051550708.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.measure The measure to wrap.
   * @return A new `workbook.MeasureSelector`.
   */
  createMeasureSelector(options: {
    measure: workbook.DataMeasure | workbook.CalculatedMeasure,
  }): workbook.MeasureSelector;

  /**
   * Creates a measure-value selector — pairs a measure selector with row/column selectors to
   * pinpoint a measure value at a specific row × column intersection in a pivot.
   *
   * Note: `columnSelector` and `rowSelector` accept any of the four node-selector types
   * (`DimensionSelector`, `PathSelector`, `DescendantOrSelfNodesSelector`, `ChildNodesSelector`),
   * not just `DimensionSelector`/`PathSelector` as docs imply.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051571632}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051571632.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.measure The measure selector.
   * @param options.columnSelector The column-axis selector. Accepts all 4 node-selector types.
   * @param options.rowSelector The row-axis selector. Accepts all 4 node-selector types.
   * @return A new `workbook.MeasureValueSelector`.
   */
  createMeasureValueSelector(options: {
    measure: workbook.MeasureSelector,
    columnSelector: workbook.DimensionSelector | workbook.PathSelector | workbook.DescendantOrSelfNodesSelector | workbook.ChildNodesSelector,
    rowSelector: workbook.DimensionSelector | workbook.PathSelector | workbook.DescendantOrSelfNodesSelector | workbook.ChildNodesSelector,
  }): workbook.MeasureValueSelector;

  /**
   * Creates a path selector — selects a specific path through a hierarchy of dimensions by an
   * ordered list of dimension selectors.
   *
   * Note: `elements` is an ARRAY of `DimensionSelector`, despite the docs' singular
   * `DimensionSelector`. The plural property name is the tell.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051599466}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051599466.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.dimension The root dimension.
   * @param options.elements The path elements (an array of dimension selectors).
   * @return A new `workbook.PathSelector`.
   */
  createPathSelector(options: {
    dimension: workbook.DataDimension,
    elements: workbook.DimensionSelector[],
  }): workbook.PathSelector;

  /**
   * Creates a pivot — the cross-tab presentation of a dataset with row/column axes, optional
   * filters, and report-style overlays.
   *
   * Note: `dataset` and `datasetLink` are XOR — at least one must be provided, but not both.
   * Required: `id`, `name`, `dataset` OR `datasetLink`, `columnAxis`, `rowAxis`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051610759}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051610759.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.id The pivot's script ID.
   * @param options.name The pivot's display name.
   * @param [options.portletName] The portlet display name (string or translated `Expression`).
   * @param [options.dataset] The dataset backing the pivot. XOR with `datasetLink`.
   * @param [options.datasetLink] The dataset link backing the pivot. XOR with `dataset`.
   * @param options.columnAxis The pivot's column axis.
   * @param options.rowAxis The pivot's row axis.
   * @param [options.filterExpressions] Pivot-level filter expressions (before aggregation).
   * @param [options.aggregationFilters] Aggregation-level filters.
   * @param [options.reportStyles] Report-style overlays.
   * @return A new `workbook.Pivot`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT One of the following arguments is mandatory: `dataset`, `datasetLink`.
   */
  createPivot(options: {
    id: string,
    name: string,
    portletName?: string | workbook.Expression,
    dataset?: dataset.Dataset,
    datasetLink?: datasetLink.DatasetLink,
    columnAxis: workbook.PivotAxis,
    rowAxis: workbook.PivotAxis,
    filterExpressions?: workbook.Expression[],
    aggregationFilters?: (workbook.LimitingFilter | workbook.ConditionalFilter)[],
    reportStyles?: workbook.ReportStyle[],
  }): workbook.Pivot;

  /**
   * Creates a pivot axis — either the row axis or column axis of a `Pivot`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051729422}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051729422.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.root The dimension (or section) driving the axis values.
   * @param options.sortDefinitions Sort definitions applied to the axis. Pass `[]` for no sort.
   * @return A new `workbook.PivotAxis`.
   */
  createPivotAxis(options: {
    root: workbook.DataDimension | workbook.Section,
    sortDefinitions: workbook.SortDefinition[],
  }): workbook.PivotAxis;

  /**
   * Creates a pivot-storage handle.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * Exposed as `workbook.createPivotStorage`. Returns a `number` (likely a handle/ID) rather than
   * an object. The exact purpose and parameter shape are not documented; it appears to be the
   * create-side counterpart to `workbook.loadPivotResults({id})`, for asynchronous pivot execution
   * that stores results indexed by the returned handle.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051729422}
   *
   * @restriction Server-side scripts only
   *
   * @param [options] The parameter shape is not documented; accepts `{}` at minimum.
   * @return A numeric handle.
   */
  createPivotStorage(options?: object): number;

  /**
   * Creates a position-percent — a `Style` background-image position expressed as `x`/`y`
   * percentages.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170729070}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170729070.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.x X-axis percentage.
   * @param options.y Y-axis percentage.
   * @return A new `workbook.PositionPercent`.
   */
  createPositionPercent(options: {
    x: number,
    y: number,
  }): workbook.PositionPercent;

  /**
   * Creates a position-units — a `Style` background-image position expressed as `x`/`y` numeric
   * values with an explicit `Unit`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170748293}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170748293.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.x X-axis numeric value.
   * @param options.y Y-axis numeric value.
   * @param options.unit The unit for the values. Use values from `workbook.Unit`.
   * @return A new `workbook.PositionUnits`.
   */
  createPositionUnits(options: {
    x: number,
    y: number,
    unit: workbook.Unit | `${workbook.Unit}` | string,
  }): workbook.PositionUnits;

  /**
   * Creates a position-values — a `Style` background-image position expressed using named
   * `Position` enum keywords (e.g. `CENTER`, `TOP_LEFT`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170755810}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170755810.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.x X-axis position keyword.
   * @param options.y Y-axis position keyword.
   * @return A new `workbook.PositionValues`.
   */
  createPositionValues(options: {
    x: workbook.Position | `${workbook.Position}` | string,
    y: workbook.Position | `${workbook.Position}` | string,
  }): workbook.PositionValues;

  /**
   * Creates a range — a half-open or closed interval defined by string-typed `start`/`end`
   * endpoints. Used by range-typed `Constant` expressions.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519011317}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519011317.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.start The range start (string-encoded).
   * @param options.end The range end (string-encoded).
   * @return A new `workbook.Range`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `start` or `end` is missing.
   */
  createRange(options: {
    start: string,
    end: string,
  }): workbook.Range;

  /**
   * Creates a report style — a styling overlay that applies styled cells to a set of
   * measure-value selectors.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171063813}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171063813.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.rules The report-style rules.
   * @param options.selectors The measure-value selectors targeted by this report style.
   * @return A new `workbook.ReportStyle`.
   *
   * @throws {error.SuiteScriptError} NO_RULE_DEFINED No rules were provided.
   * @throws {error.SuiteScriptError} NO_SELECTORS_DEFINED No selectors were provided.
   */
  createReportStyle(options: {
    rules: workbook.ReportStyleRule[],
    selectors: workbook.MeasureValueSelector[],
  }): workbook.ReportStyle;

  /**
   * Creates a report-style rule — pairs a predicate expression with a style.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171130796}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171130796.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.expression The predicate expression for the rule.
   * @param options.style The style to apply when the expression matches.
   * @return A new `workbook.ReportStyleRule`.
   */
  createReportStyleRule(options: {
    expression: workbook.Expression,
    style: workbook.Style,
  }): workbook.ReportStyleRule;

  /**
   * Creates a section — a grouping construct that aggregates child dimensions/sections under a
   * label.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159052015852}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159052015852.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.children The child dimensions/sections grouped by this section.
   * @param [options.label] An optional label for the section (string or translated `Expression`).
   * @return A new `workbook.Section`.
   */
  createSection(options: {
    children: (workbook.DataDimension | workbook.Section)[],
    label?: workbook.Expression | string,
  }): workbook.Section;

  /**
   * Creates a chart series — a collection of visual aspects (color, value) applied to chart
   * measures.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008573032}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008573032.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.aspects The visual aspects applied to chart measures.
   * @return A new `workbook.Series`.
   */
  createSeries(options: {
    aspects: workbook.Aspect[],
  }): workbook.Series;

  /**
   * Creates a simple record key — a single-value primary-key record reference. The result has
   * a `properties` map keyed by the special name `__key__`.
   *
   * Note: the result object's `properties` is `{__key__: <value>}`, not a property named after the
   * field. The internal error name is `workbook.createRecordKey` (shared error namespace with
   * `createComplexRecordKey`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519031203}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519031203.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.key The primitive value identifying the record (typically a number or string).
   * @return A new `workbook.RecordKey` with `properties: {__key__: <key>}`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `options.key` is missing.
   */
  createSimpleRecordKey(options: {
    key: number | string | boolean | Date,
  }): workbook.RecordKey;

  /**
   * Creates a sort settings object — direction, locale, case-sensitivity, null-placement, and
   * order index for use in a `SortBy*` instance.
   *
   * Note: ALL options are optional. `createSort({})` returns a Sort with `ascending: false,
   * caseSensitive: false, nullsLast: false, order: 0, locale: null`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159052013072}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159052013072.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param [options] All options are optional.
   * @param [options.ascending] Whether to sort ascending (default `false` = descending).
   * @param [options.caseSensitive] Whether string comparisons are case-sensitive (default `false`).
   * @param [options.nullsLast] Whether nulls are placed last (default `false` = first).
   * @param [options.order] The sort order index (lower numbers sort first when multiple sorts compose).
   * @param [options.locale] Locale code for string collation (e.g. `'en_US'`). Defaults to `null` (system default).
   * @return A new `workbook.Sort`.
   */
  createSort(options?: {
    ascending?: boolean,
    caseSensitive?: boolean,
    nullsLast?: boolean,
    order?: number,
    locale?: string,
  }): workbook.Sort;

  /**
   * Creates a sort-by-data-dimension-item — a sort key based on a specific dimension item.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173379734}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173379734.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.item The data dimension item to sort by.
   * @param options.sort The sort order/direction settings.
   * @return A new `workbook.SortByDataDimensionItem`.
   */
  createSortByDataDimensionItem(options: {
    item: workbook.DataDimensionItem,
    sort: workbook.Sort,
  }): workbook.SortByDataDimensionItem;

  /**
   * Creates a sort-by-measure — a sort key based on a measure's value, optionally constrained
   * to a specific axis path.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173416538}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173416538.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.measure The measure whose values drive the sort.
   * @param options.otherAxisSelector A selector for the other axis (often the axis perpendicular to the one being sorted).
   * @param options.sort The sort order/direction settings.
   * @return A new `workbook.SortByMeasure`.
   */
  createSortByMeasure(options: {
    measure: workbook.CalculatedMeasure | workbook.DataMeasure,
    otherAxisSelector: workbook.DescendantOrSelfNodesSelector | workbook.PathSelector | workbook.DimensionSelector,
    sort: workbook.Sort,
  }): workbook.SortByMeasure;

  /**
   * Creates a sort definition — a selector + a list of sort-by keys, used in chart categories,
   * legends, and pivot axes.
   *
   * Note: `options.selector` accepts both `ChildNodesSelector` and `DescendantOrSelfNodesSelector`
   * singletons (in addition to the documented `DimensionSelector`/`PathSelector`). Same
   * undocumented-acceptance pattern as `MeasureValueSelector.columnSelector`/`rowSelector`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008585696}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008585696.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.selector The selector identifying what is sorted (e.g. a dimension path).
   * @param options.sortBys The sort-by keys (at least one required at runtime).
   * @return A new `workbook.SortDefinition`.
   *
   * @throws {error.SuiteScriptError} NO_SORT_BY_DEFINED `options.sortBys` is empty.
   */
  createSortDefinition(options: {
    selector: workbook.DimensionSelector | workbook.PathSelector | workbook.DescendantOrSelfNodesSelector | workbook.ChildNodesSelector,
    sortBys: (workbook.SortByDataDimensionItem | workbook.SortByMeasure)[],
  }): workbook.SortDefinition;

  /**
   * Creates a style — a set of visual properties (colors, fonts, alignment, etc.) used by
   * `ConditionalFormatRule` and `ReportStyleRule`.
   *
   * **Case-sensitivity note:** all enum-valued properties (`fontStyle`, `fontWeight`, `textAlign`,
   * `textDecorationLine`, `textDecorationStyle`) are case-sensitive at runtime — uppercase values
   * from the corresponding enums only. Lowercase strings (`'italic'`, `'left'`, etc.) throw
   * `INVALID_<X>`.
   *
   * **Color flexibility:** `backgroundColor`, `color`, `textDecorationColor` accept either a
   * named-color string from `workbook.Color` (e.g. `'BLUE'`) OR a `workbook.Color` object (rgba).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options All style properties are optional — pass only the ones you want to override.
   * @param [options.backgroundColor] Background color — accepts a `Color` rgba object or a `ColorName` string (e.g. `'BLUE'`).
   * @param [options.backgroundImage] Background image. Use values from `workbook.Image`.
   * @param [options.backgroundPosition] Background position — `PositionPercent`, `PositionUnits`, or `PositionValues`.
   * @param [options.color] Foreground (text) color — accepts a `Color` rgba object or a `ColorName` string.
   * @param [options.fontSize] Font size — accepts a `FontSize` object or a `FontSizeName` string (e.g. `'LARGE'`).
   * @param [options.fontStyle] Font style. Use values from `workbook.FontStyle` (uppercase).
   * @param [options.fontWeight] Font weight. Use values from `workbook.FontWeight` (uppercase).
   * @param [options.textAlign] Text alignment. Use values from `workbook.TextAlign` (uppercase).
   * @param [options.textDecorationColor] Text-decoration (underline/strikethrough) color.
   * @param [options.textDecorationLine] Text-decoration line. Use values from `workbook.TextDecorationLine` (uppercase).
   * @param [options.textDecorationStyle] Text-decoration style. Use values from `workbook.TextDecorationStyle` (uppercase).
   * @return A new `workbook.Style`.
   *
   * @throws {error.SuiteScriptError} UNSUPPORTED_COLOR A color value is not a valid `ColorName` or `Color` rgba object.
   * @throws {error.SuiteScriptError} INVALID_FONT_SIZE The `fontSize` value is invalid.
   * @throws {error.SuiteScriptError} INVALID_FONT_STYLE The `fontStyle` value is not in `workbook.FontStyle`.
   * @throws {error.SuiteScriptError} INVALID_FONT_WEIGHT The `fontWeight` value is not in `workbook.FontWeight`.
   * @throws {error.SuiteScriptError} INVALID_IMAGE The `backgroundImage` value is not in `workbook.Image`.
   * @throws {error.SuiteScriptError} INVALID_TEXT_ALIGN The `textAlign` value is not in `workbook.TextAlign`.
   * @throws {error.SuiteScriptError} INVALID_TEXT_DECORATION_LINE The `textDecorationLine` value is not in `workbook.TextDecorationLine`.
   * @throws {error.SuiteScriptError} INVALID_TEXT_DECORATION_STYLE The `textDecorationStyle` value is not in `workbook.TextDecorationStyle`.
   */
  createStyle(options: {
    backgroundColor?: workbook.Color | workbook.ColorName | string,
    backgroundImage?: workbook.Image | `${workbook.Image}` | string,
    backgroundPosition?: workbook.PositionPercent | workbook.PositionUnits | workbook.PositionValues,
    color?: workbook.Color | workbook.ColorName | string,
    fontSize?: workbook.FontSize | workbook.FontSizeName | string,
    fontStyle?: workbook.FontStyle | `${workbook.FontStyle}` | string,
    fontWeight?: workbook.FontWeight | `${workbook.FontWeight}` | string,
    textAlign?: workbook.TextAlign | `${workbook.TextAlign}` | string,
    textDecorationColor?: workbook.Color | workbook.ColorName | string,
    textDecorationLine?: workbook.TextDecorationLine | `${workbook.TextDecorationLine}` | string,
    textDecorationStyle?: workbook.TextDecorationStyle | `${workbook.TextDecorationStyle}` | string,
  }): workbook.Style;

  /**
   * Creates a table — a tabular presentation of a dataset with one or more columns.
   *
   * Note: required at create time: `name`, `dataset`. The `columns` and `id` are accepted but not
   * required.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163344854839}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163344854839.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.name The table's display name (string or translated `Expression`).
   * @param options.dataset The dataset backing the table.
   * @param [options.id] The table's script ID.
   * @param [options.columns] The columns of the table.
   * @return A new `workbook.Table`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `name` or `dataset` is missing.
   */
  createTable(options: {
    name: string | workbook.Expression,
    dataset: dataset.Dataset,
    id?: string,
    columns?: workbook.TableColumn[],
  }): workbook.Table;

  /**
   * Creates a table column. Only `datasetColumnAlias` is required at create time; all other
   * options are optional.
   *
   * Note: the documented parameters `alias`, `filters`, `sort` do NOT exist at runtime. The real
   * runtime parameters are: `datasetColumnAlias` (required), `condition` (singular
   * `TableColumnCondition`), `conditionalFormats` (array of `ConditionalFormat`), `fieldContext`,
   * `label`, `width`. The result is mutable post-create — direct assignment to any property works.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051899414}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051899414.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.datasetColumnAlias The dataset column alias driving this column.
   * @param [options.label] The column's display label.
   * @param [options.width] The column's display width (pixels).
   * @param [options.fieldContext] The field context for the column's values.
   * @param [options.condition] A `TableColumnCondition` controlling display/style behavior.
   * @param [options.conditionalFormats] Conditional-format overlays. **Undocumented but accepted.**
   * @return A new `workbook.TableColumn`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `datasetColumnAlias` is missing.
   */
  createTableColumn(options: {
    datasetColumnAlias: string,
    label?: string,
    width?: number,
    fieldContext?: workbook.FieldContext,
    condition?: workbook.TableColumnCondition,
    conditionalFormats?: workbook.ConditionalFormat[],
  }): workbook.TableColumn;

  /**
   * Creates a table column condition — combines a list of `TableColumnFilter`s with a logical
   * operator.
   *
   * Note: the docs declare the return type as `workbook.TableColumnFilter`, but the actual return
   * is `workbook.TableColumnCondition` (this method's namesake).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519035345}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519035345.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.1
   *
   * @param options
   * @param options.filters The filters combined by this condition.
   * @param options.operator The logical operator (e.g. `'AND'`, `'OR'`). Use values from `query.Operator`.
   * @return A new `workbook.TableColumnCondition`.
   *
   * @throws {error.SuiteScriptError} INVALID_OPERATOR The `operator` is not a valid operator.
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `filters` or `operator` is missing.
   */
  createTableColumnCondition(options: {
    filters: workbook.TableColumnFilter[],
    operator: string,
  }): workbook.TableColumnCondition;

  /**
   * Creates a table column filter — a filter applied to a table column, optionally case-sensitive.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159051923319}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159051923319.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.operator The filter operator. Use values from `query.Operator`.
   * @param options.values The filter values (supported element types: `null`, `object`, `boolean`, `number`, `string`, `Date`).
   * @param [options.caseSensitive] Whether string comparisons are case-sensitive. **Undocumented but accepted at runtime.**
   * @return A new `workbook.TableColumnFilter`.
   *
   * @throws {error.SuiteScriptError} INVALID_OPERATOR The `operator` is not a valid operator.
   */
  createTableColumnFilter(options: {
    operator: string,
    values: (null | object | boolean | number | string | Date)[],
    caseSensitive?: boolean,
  }): workbook.TableColumnFilter;

  /**
   * Creates a translation `Expression` — wraps a translation collection reference (typically from
   * `translation.load(...)`) as a workbook expression for use in label fields.
   *
   * Returns an `Expression` with `functionId === 'TRANSLATE'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519032016}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519032016.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param options
   * @param options.collection The translation collection script ID.
   * @param options.key The key within the collection identifying the translation.
   * @return A new `workbook.Expression` representing the translation.
   */
  createTranslation(options: {
    collection: string,
    key: string,
  }): workbook.Expression;

  /**
   * Lists all existing workbooks. Returns a plain array of workbook metadata entries (script ID,
   * name, description). For large accounts, prefer `listPaged(options)` to avoid loading every
   * workbook's metadata in one call.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159052002745}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159052002745.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @return An array of `workbook.ListInfo` entries — one per accessible workbook.
   */
  list(): workbook.ListInfo[];

  /**
   * Retrieves a paginated set of workbook metadata. Returns a `workbook.PagedInfoData` object
   * with a `count` (total workbooks), per-page descriptors in `pageRanges`, and a `fetch(options)`
   * method to retrieve each `workbook.Page` of `workbook.ListInfo` entries.
   *
   * Note: docs mark `options.pageSize` as required, but the runtime accepts no `pageSize` (or no
   * `options` at all) and defaults to `50`. Typed here as optional to match runtime. The
   * `options.category` parameter defaults to `'ALL'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162887136327}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162887136327.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2021.2
   *
   * @param [options]
   * @param [options.pageSize] The page size (default `50`). Docs claim required; the runtime accepts omission.
   * @param [options.category] The category of workbooks to retrieve. Use values from `workbook.OwnerCategory`. Defaults to `'ALL'`.
   * @return Paginated workbook metadata.
   *
   * @throws {error.SuiteScriptError} INVALID_OWNER_CATEGORY The `options.category` value is not in the `workbook.OwnerCategory` enum.
   */
  listPaged(options?: {
    pageSize?: number,
    category?: workbook.OwnerCategory | `${workbook.OwnerCategory}`,
  }): workbook.PagedInfoData;

  /**
   * Loads an existing `Workbook` by script ID. Returns a read-only `Workbook` (all properties
   * throw `READ_ONLY_PROPERTY` on assignment).
   *
   * **Major docs bug note:** the official NetSuite docs call this method
   * `workbook.loadWorkbook(options)`. **That method does NOT exist at runtime** — calling it throws
   * `workbook.loadWorkbook is not a function`. The actual runtime method is `workbook.load(options)`.
   * The help-center section ID is preserved here even though the docs use the wrong method name.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159052020752}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159052020752.html}
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   * @since 2020.2
   *
   * @param options
   * @param options.id The workbook's script ID (e.g. `'custworkbook_my_workbook'` or `'stdworkbook...'`).
   * @return The loaded `workbook.Workbook` (read-only).
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `options.id` is missing.
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE `options.id` is not a string.
   */
  load(options: {
    id: string,
  }): workbook.Workbook;

  /**
   * Loads pivot results by handle.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * Exposed as `workbook.loadPivotResults`. Required argument: `id` (typed as `string` based on the
   * `Workbook.runPivot({id})` pattern, but the accepted type might also be the `number` returned
   * by `workbook.createPivotStorage`; the exact contract is not documented). It appears to retrieve
   * stored pivot results after asynchronous execution (the read-side counterpart to
   * `workbook.createPivotStorage`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159052020752}
   *
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.id Handle/identifier of the stored pivot results.
   * @return Pivot result data. The exact shape is not documented.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT `options.id` is missing.
   */
  loadPivotResults(options: {
    id: string | number,
  }): object;
}

declare namespace workbook {

  // =======================================================================
  // ENUMS
  // =======================================================================

  /**
   * Holds string values for aggregation types. Used to set the `options.aggregation` parameter of
   * the `workbook.createDataMeasure(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159058742898}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159058742898.html}
   *
   * @since 2020.2
   */
  export enum Aggregation {
    AVG = 'AVG',
    COUNT = 'COUNT',
    COUNT_DISTINCT = 'COUNT_DISTINCT',
    MAX = 'MAX',
    MEDIAN = 'MEDIAN',
    MIN = 'MIN',
    SUM = 'SUM',
  }

  /**
   * Holds string values for aspect types. Used to set the `options.type` parameter of the
   * `workbook.createAspect(options)` method.
   *
   * Note: the docs list the values as uppercase (`COLOR`, `VALUE`), but the runtime accepts ONLY
   * lowercase — `createAspect({type: 'COLOR'})` throws `INVALID_ASPECT_TYPE: Invalid aspect type:
   * COLOR`. Values are typed here as the lowercase runtime form. This is the only workbook enum
   * with this case-inversion; `Aggregation`, `ChartType`, `Stacking`, `TotalLine`, etc. all use
   * uppercase.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059139226}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059139226.html}
   *
   * @since 2020.2
   */
  export enum AspectType {
    COLOR = 'color',
    VALUE = 'value',
  }

  /**
   * Holds string values for chart types. Used to pass the `type` value to
   * `workbook.createChart(options)`. For more about charts in SuiteAnalytics, see the Chart Types
   * help topic.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059165881}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059165881.html}
   *
   * @since 2020.2
   */
  export enum ChartType {
    AREA = 'AREA',
    BAR = 'BAR',
    COLUMN = 'COLUMN',
    LINE = 'LINE',
  }

  /**
   * Holds string values for comparison types — used by sort/range/comparison operations.
   *
   * Undocumented in the Help Center; present at runtime. Exposed at runtime as
   * `workbook.ComparisonType` with the values below; the name and usage are inferred from the
   * runtime keys.
   */
  export enum ComparisonType {
    EQUAL = 'EQUAL',
    GREATER = 'GREATER',
    GREATER_OR_EQUAL = 'GREATER_OR_EQUAL',
    LESS = 'LESS',
    LESS_OR_EQUAL = 'LESS_OR_EQUAL',
  }

  /**
   * Named-color values for workbook styles. Used to set the `options.backgroundcolor`,
   * `options.color`, and `options.textDecorationColor` parameters of the
   * `workbook.createStyle(options)` method.
   *
   * NOTE: this declaration coexists with the `workbook.Color` *interface* (the RGBA object
   * returned by `workbook.createColor(options)`). Because TypeScript does not permit an enum and
   * an interface to share a name in the same namespace, the named-color values are declared here
   * as a `const` object literal rather than an `export enum`. At runtime `workbook.Color` is in
   * fact a plain object with these keys, not a `Number`-backed enum.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162887285281}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162887285281.html}
   *
   * @since 2021.2
   */
  const Color: {
    readonly BLACK: 'BLACK';
    readonly BLUE: 'BLUE';
    readonly BROWN: 'BROWN';
    readonly GRAY: 'GRAY';
    readonly GREEN: 'GREEN';
    readonly ORANGE: 'ORANGE';
    readonly PINK: 'PINK';
    readonly PURPLE: 'PURPLE';
    readonly RED: 'RED';
    readonly WHITE: 'WHITE';
    readonly YELLOW: 'YELLOW';
  };

  /**
   * String literal union of the `workbook.Color` named-color values. Use this where docs reference
   * the `workbook.Color` enum (e.g. `Style.backgroundcolor`).
   *
   * @since 2021.2
   */
  type ColorName = typeof Color[keyof typeof Color];

  /**
   * Holds string values for constant types. Used to set the value of the `options.type` parameter
   * of the `workbook.createConstant(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059175435}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059175435.html}
   *
   * @since 2020.2
   */
  export enum ConstantType {
    BOOLEAN = 'BOOLEAN',
    CURRENCY = 'CURRENCY',
    DATE = 'DATE',
    DATE_TIME = 'DATE_TIME',
    DECIMAL = 'DECIMAL',
    DURATION = 'DURATION',
    INTEGER = 'INTEGER',
    NUMBER = 'NUMBER',
    RANGE = 'RANGE',
    RECORD_KEY = 'RECORD_KEY',
    TEXT = 'TEXT',
  }

  /**
   * Currency-code values exposed at runtime on `workbook.Currency`. Likely intended for
   * `Currency.id` or `createCurrency({id})` though the latter rejects these strings at runtime.
   * The values appear to mirror the standard NetSuite multi-currency seed list.
   *
   * NOTE: this declaration coexists with the `workbook.Currency` *interface* (the currency-amount
   * object returned by `workbook.createCurrency(options)`). Same dual-decl pattern as
   * `workbook.Color` and `workbook.FontSize` — TypeScript doesn't permit an enum and interface to
   * share a name in the same namespace, so the named-currency values are declared here as a
   * `const` object literal alongside the `interface Currency { ... }` further down.
   *
   * Undocumented in the Help Center; present at runtime. The runtime values are the four major
   * currencies; on accounts with more enabled currencies, more values may appear.
   */
  const Currency: {
    readonly CAD: 'CAD';
    readonly EUR: 'EUR';
    readonly GBP: 'GBP';
    readonly USD: 'USD';
  };

  /**
   * String literal union of the `workbook.Currency` named-currency values.
   */
  type CurrencyCode = typeof Currency[keyof typeof Currency];

  /**
   * Holds string values for date-time hierarchy types.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059205972}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059205972.html}
   *
   * @since 2020.2
   */
  export enum DateTimeHierarchy {
    MONTH_BASED = 'MONTH_BASED',
    WEEK_BASED = 'WEEK_BASED',
  }

  /**
   * Holds the string values for date-time property types. Used to set the value of the
   * `DATE_TIME_PROPERTY` member in `workbook.ExpressionType`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059226295}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059226295.html}
   *
   * @since 2020.2
   */
  export enum DateTimeProperty {
    DATE = 'DATE',
    DAY_OF_MONTH = 'DAY_OF_MONTH',
    DAY_OF_WEEK = 'DAY_OF_WEEK',
    MONTH = 'MONTH',
    QUARTER = 'QUARTER',
    WEEK_OF_YEAR = 'WEEK_OF_YEAR',
    YEAR = 'YEAR',
  }

  /**
   * Holds string values for expression types. Use these values for the `options.functionId`
   * parameter when creating an expression via `workbook.createExpression(options)`. Each expression
   * type uses a distinct parameter set (specified via `options.parameters` of
   * `workbook.createExpression(options)`); see the Help Center page for the exact parameter names
   * supported by each expression type.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059241921}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059241921.html}
   *
   * @since 2020.2
   */
  export enum ExpressionType {
    AND = 'AND',
    ANY_OF = 'ANY_OF',
    BETWEEN = 'BETWEEN',
    CHILD_OF = 'CHILD_OF',
    COMPARE = 'COMPARE',
    CONSTANT = 'CONSTANT',
    CURRENCY_CONVERSION = 'CURRENCY_CONVERSION',
    DATASET_COLUMN = 'DATASET_COLUMN',
    DATE_RANGE_SELECTOR_ID = 'DATE_RANGE_SELECTOR_ID',
    DATE_SELECTOR_ID = 'DATE_SELECTOR_ID',
    DATE_TIME_PROPERTY = 'DATE_TIME_PROPERTY',
    DIVIDE = 'DIVIDE',
    EQUALS = 'EQUALS',
    FIELD = 'FIELD',
    HIERARCHY = 'HIERARCHY',
    HIERARCHY_TO_TEXT = 'HIERARCHY_TO_TEXT',
    IF = 'IF',
    IN_RANGE = 'IN_RANGE',
    IS_NULL = 'IS_NULL',
    LAMBDA = 'LAMBDA',
    MEASURE_VALUE = 'MEASURE_VALUE',
    MINUS = 'MINUS',
    MULTIPLY = 'MULTIPLY',
    NOT = 'NOT',
    OR = 'OR',
    PLUS = 'PLUS',
    RECORD_DISPLAY_VALUE = 'RECORD_DISPLAY_VALUE',
    RECORD_KEY = 'RECORD_KEY',
    SIMPLE_CONSOLIDATE = 'SIMPLE_CONSOLIDATE',
    TRANSLATE = 'TRANSLATE',
    TRUNCATE_DATE_TIME = 'TRUNCATE_DATE_TIME',
  }

  /**
   * Named font-size values for workbook styles. Used to set the value for the `options.fontSize`
   * parameter of the `workbook.createStyle(options)` method.
   *
   * NOTE: this declaration coexists with the `workbook.FontSize` *interface* (the `{size, unit}`
   * object returned by `workbook.createFontSize(options)`). Because TypeScript does not permit an
   * enum and an interface to share a name in the same namespace, the named font-size values are
   * declared here as a `const` object literal rather than an `export enum`. At runtime
   * `workbook.FontSize` is in fact a plain object with these keys.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162887352651}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162887352651.html}
   *
   * @since 2021.2
   */
  const FontSize: {
    readonly LARGE: 'LARGE';
    readonly LARGER: 'LARGER';
    readonly MEDIUM: 'MEDIUM';
    readonly SMALL: 'SMALL';
    readonly SMALLER: 'SMALLER';
    readonly XX_LARGE: 'XX_LARGE';
    readonly XX_SMALL: 'XX_SMALL';
    readonly X_LARGE: 'X_LARGE';
    readonly X_SMALL: 'X_SMALL';
  };

  /**
   * String literal union of the `workbook.FontSize` named font-size values. Use this where docs
   * reference the `workbook.FontSize` enum (e.g. `Style.fontSize`).
   *
   * @since 2021.2
   */
  type FontSizeName = typeof FontSize[keyof typeof FontSize];

  /**
   * Holds string values for font styles. Used to set the value for the `options.fontStyle`
   * parameter of the `workbook.createStyle(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162887378565}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162887378565.html}
   *
   * @since 2021.2
   */
  export enum FontStyle {
    ITALIC = 'ITALIC',
    NORMAL = 'NORMAL',
    OBLIQUE = 'OBLIQUE',
  }

  /**
   * Holds string values for font weights. Used to set the value for the `options.fontWeight`
   * parameter of the `workbook.createStyle(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104222816}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104222816.html}
   *
   * @since 2021.2
   */
  export enum FontWeight {
    BOLD = 'BOLD',
    NORMAL = 'NORMAL',
  }

  /**
   * Holds string values for images that you can use in workbooks. Used as a value for the
   * `Style.backgroundImage` property.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104240054}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104240054.html}
   *
   * @since 2021.2
   */
  export enum Image {
    EXCLAMATION = 'EXCLAMATION',
    QUESTION = 'QUESTION',
    SMILE = 'SMILE',
  }

  /**
   * Holds string values for owner-category filters. Used to set the `options.category` parameter
   * of `workbook.listPaged(options)` (and `N/dataset.listPaged(options)`).
   *
   * Note: the docs reference `OwnerCategory` only by name (no member list). There are only three
   * valid values: `'ALL'` (all workbooks; default), `'MINE'` (workbooks owned by the current
   * user), `'SHARED'` (workbooks shared with the current user). Other plausible values (`OWNED`,
   * `OWNED_BY_ME`, `SHARED_WITH_ME`, `PUBLIC`, `PRIVATE`) all throw `INVALID_OWNER_CATEGORY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162887136327}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162887136327.html}
   *
   * @since 2021.2
   */
  export enum OwnerCategory {
    ALL = 'ALL',
    MINE = 'MINE',
    SHARED = 'SHARED',
  }

  /**
   * Holds string values for positions. Used to set the value for the `PositionValues.horizontal`
   * and `PositionValues.vertical` properties.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104283914}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104283914.html}
   *
   * @since 2021.2
   */
  export enum Position {
    BOTTOM = 'BOTTOM',
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
  }

  /**
   * Holds stacking types. Used to pass the `stacking` value to `workbook.createChart(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059283191}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059283191.html}
   *
   * @since 2020.2
   */
  export enum Stacking {
    DISABLED = 'DISABLED',
    NORMAL = 'NORMAL',
    PERCENT = 'PERCENT',
  }

  /**
   * Holds string values for temporal units, such as hours or minutes. Used to set the value of the
   * `options.start` and `options.end` parameters of the `workbook.createDuration(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104301627}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104301627.html}
   *
   * @since 2021.2
   */
  export enum TemporalUnit {
    CENTURIES = 'CENTURIES',
    DAYS = 'DAYS',
    DECADES = 'DECADES',
    ERA = 'ERA',
    HALF_DAYS = 'HALF_DAYS',
    HOURS = 'HOURS',
    MICROS = 'MICROS',
    MILLENIA = 'MILLENIA',
    MILLIS = 'MILLIS',
    MINUTES = 'MINUTES',
    MONTHS = 'MONTHS',
    NANOS = 'NANOS',
    SECONDS = 'SECONDS',
    WEEKS = 'WEEKS',
    YEARS = 'YEARS',
  }

  /**
   * Holds string values for text alignments. Used to set the value for the `options.textAlign`
   * parameter of the `workbook.createStyle(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104334844}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104334844.html}
   *
   * @since 2021.2
   */
  export enum TextAlign {
    CENTER = 'CENTER',
    JUSTIFY = 'JUSTIFY',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
  }

  /**
   * Holds string values for text decoration line types, such as underline and strikethrough.
   * Used to set the value for the `options.txtDecorationLine` parameter of the
   * `workbook.createStyle(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104347221}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104347221.html}
   *
   * @since 2021.2
   */
  export enum TextDecorationLine {
    LINE_THROUGH = 'LINE_THROUGH',
    NONE = 'NONE',
    OVERLINE = 'OVERLINE',
    UNDERLINE = 'UNDERLINE',
  }

  /**
   * Holds string values for text decoration line styles, such as solid and dashed. Used to set
   * the value for the `options.textDecoractionStyle` parameter of the
   * `workbook.createStyle(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104360654}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104360654.html}
   *
   * @since 2021.2
   */
  export enum TextDecorationStyle {
    DASHED = 'DASHED',
    DOTTED = 'DOTTED',
    DOUBLE = 'DOUBLE',
    SOLID = 'SOLID',
    WAVY = 'WAVY',
  }

  /**
   * Holds formatting presets for the total line. Used to set the `options.totalLine` parameter of
   * `workbook.createDataDimension(options)` and `workbook.createSection(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159059291106}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159059291106.html}
   *
   * @since 2020.2
   */
  export enum TotalLine {
    FIRST_LINE = 'FIRST_LINE',
    HIDDEN = 'HIDDEN',
    LAST_LINE = 'LAST_LINE',
  }

  /**
   * Holds string values for units of measurement. Used to set the `options.unit` parameter in the
   * `workbook.createPositionUnits(options)` method.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163104381588}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163104381588.html}
   *
   * @since 2020.2
   */
  export enum Unit {
    CH = 'CH',
    CM = 'CM',
    EM = 'EM',
    EX = 'EX',
    IN = 'IN',
    MM = 'MM',
    PC = 'PC',
    PT = 'PT',
    PX = 'PX',
    REM = 'REM',
    VH = 'VH',
    VMAX = 'VMAX',
    VMIN = 'VMIN',
    VW = 'VW',
  }

  // =======================================================================
  // OBJECTS (leaf / near-leaf — alphabetical)
  // =======================================================================

  /**
   * A chart aspect — maps a measure to a visual property (color or value). Use
   * `workbook.createAspect(options)` to create. Aspects are bundled into a `Series` for use in a
   * `Chart`.
   *
   * Note: `Aspect.type` runtime values are lowercase (`'color'`, `'value'`) — not uppercase. See
   * `workbook.AspectType` for the corrected enum.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007796216}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007796216.html}
   *
   * @since 2020.2
   */
  interface Aspect {

    /**
     * The measure mapped to the aspect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007796216}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007796216.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `CalculatedMeasure` or `DataMeasure`.
     */
    measure: CalculatedMeasure | DataMeasure;

    /**
     * The aspect type. Runtime requires lowercase values (`'color'`, `'value'`) — use values from
     * `workbook.AspectType` (the enum has been corrected to declare lowercase values).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007796216}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007796216.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} INVALID_ASPECT_TYPE The value is not in `workbook.AspectType` (uppercase rejected at runtime).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    type: AspectType | `${AspectType}` | string;
  }

  /**
   * A calculated measure object — a measure whose value is computed from an expression (which can
   * reference other measures or fields). Use `workbook.createCalculatedMeasure(options)` to
   * create this object. A calculated measure is accepted in: `Section.children` and
   * `DataDimension.children` arrays, `MeasureSelector.measures`, etc.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163169891173}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163169891173.html}
   *
   * @since 2021.2
   */
  interface CalculatedMeasure {

    /**
     * The expression that produces this measure's value. Mutually exclusive at creation with the
     * (singular) expression — see `MUTUALLY_EXCLUSIVE_ARGUMENTS` throws on the parent
     * `createCalculatedMeasure` and `createDataMeasure` methods.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163169891173}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163169891173.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS Mutually exclusive arguments were supplied at creation time.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a `workbook.Expression`.
     */
    expression: Expression;

    /**
     * The label of the calculated measure. May be a plain string or a `workbook.Expression`
     * (e.g. a `TRANSLATE` expression for i18n labels).
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a string or `workbook.Expression`.
     */
    label: Expression | string;
  }

  /**
   * A chart category — the categorical axis of a `Chart`. Use `workbook.createCategory(options)`
   * to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007978137}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007978137.html}
   *
   * @since 2020.2
   */
  interface Category {

    /**
     * The chart axis associated with this category.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007978137}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007978137.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.ChartAxis`.
     */
    axis: ChartAxis;

    /**
     * The dimension (or section) that drives the category axis values.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007978137}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007978137.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.DataDimension` or `workbook.Section`.
     */
    root: DataDimension | Section;

    /**
     * Sort definitions applied to the category.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007978137}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007978137.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.SortDefinition`.
     */
    sortDefinitions: SortDefinition[];
  }

  /**
   * A chart definition — wraps measures (with optional filters and category/legend axes) and
   * selects a visualization type. Use `workbook.createChart(options)` to create.
   *
   * Note: the docs did not provide a usable type for `Chart.legend`. Modeled here as singular
   * `workbook.Legend` based on the `createChart` parameter docs and the singular property name.
   * Similarly `Chart.series` was typed singular in the docs; the property name is plural-sounding
   * but all existing examples use it as a single `Series`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
   *
   * @since 2020.2
   */
  interface Chart {

    /**
     * Aggregation-level filters applied to the chart data.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `LimitingFilter | ConditionalFilter`.
     */
    aggregationFilters: (LimitingFilter | ConditionalFilter)[];

    /**
     * The chart category (categorical axis).
     *
     * Note: the docs typed this as bare `string`, which is clearly wrong. The real type is
     * `workbook.Category`, per the `createChart` parameter docs.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Category`.
     */
    category: Category;

    /**
     * The dataset backing the chart.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `dataset.Dataset`.
     */
    dataset: dataset.Dataset;

    /**
     * Additional filter expressions applied at the chart level.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.Expression`.
     */
    filterExpressions: Expression[];

    /**
     * The chart's identifier.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    id: string;

    /**
     * The chart legend.
     *
     * Note: the docs did not provide a usable type. Modeled as singular `workbook.Legend` based
     * on the `createChart` parameter docs.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Legend`.
     */
    legend: Legend;

    /**
     * The chart's display name.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    name: string;

    /**
     * The chart series.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Series`.
     */
    series: Series;

    /**
     * The chart stacking mode. Use values from `workbook.Stacking`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} INVALID_STACKING_TYPE The value is not in `workbook.Stacking`.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    stacking: Stacking | `${Stacking}` | string;

    /**
     * The chart subtitle.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    subTitle: string;

    /**
     * The chart title.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    title: string;

    /**
     * The chart visualization type. Use values from `workbook.ChartType`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159007989923}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159007989923.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} INVALID_CHART_TYPE The value is not in `workbook.ChartType`.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    type: ChartType | `${ChartType}` | string;
  }

  /**
   * A chart axis object, used when you create a category or a legend. Use
   * `workbook.createChartAxis(options)` to create this object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008145231}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008145231.html}
   *
   * @since 2020.2
   */
  interface ChartAxis {

    /**
     * The title of the chart axis.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159060132954}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159060132954.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a string.
     */
    title: string;
  }

  /**
   * A selector for child nodes. Use the `workbook.ChildNodesSelector` module-level singleton —
   * there is no factory method. A child-nodes selector is accepted as
   * `columnSelector`/`rowSelector` in `workbook.createMeasureValueSelector(options)`.
   *
   * Note: `workbook.ChildNodesSelector` is exposed as a module-level singleton instance (a plain
   * `NetSuiteObject` with only `toString`/`toJSON`). The docs say "There is no method that creates
   * this object" but don't mention the singleton.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163405579141}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163405579141.html}
   *
   * @since 2021.2
   */
  interface ChildNodesSelector {
    // No documented properties — used as a marker/sentinel selector instance. Obtain via the
    // `workbook.ChildNodesSelector` module-level singleton.
  }

  /**
   * An RGBA color object. Use `workbook.createColor(options)` to create this object. A color
   * object is accepted as a parameter in the `workbook.createStyle(options)` method (alongside
   * the named-color values from the `workbook.Color` const enum).
   *
   * Note: `red`, `green`, `blue` accept integers in `0..255` as docs claim. **`alpha` is actually
   * a 0..1 fraction, NOT 0..255 as the docs claim** — values `> 1` throw `INVALID_ALPHA_VALUE` at
   * runtime. Valid: `0`, `0.0001`, `0.5`, `0.99`, `1`, `null`, omitted. Invalid: `-0.1`, `1.0001`,
   * `1.5`, `2`, and higher up to `255`. Also note: passing `alpha: 0` is normalized to `alpha:
   * null` on the returned object. This is a doc bug.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163169970614}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163169970614.html}
   *
   * @since 2021.2
   */
  interface Color {

    /**
     * The opacity (alpha component) of the color, as a fraction in `0..1`. Docs claim "between
     * 0 and 255" but runtime accepts only `0..1` (see interface JSDoc). Passing `0` is normalized
     * to `null` on the returned object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163169975898}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163169975898.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_ALPHA_VALUE The value of this property is outside the supported range `0..1`. (Docs incorrectly state 0–255.)
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    alpha: number | null;

    /**
     * The blue component of the color (0–255).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163169989032}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163169989032.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_COLOR_VALUE The value of this property is not between 0 and 255.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    blue: number;

    /**
     * The green component of the color (0–255).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170010381}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170010381.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_COLOR_VALUE The value of this property is not between 0 and 255.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    green: number;

    /**
     * The red component of the color (0–255).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170014465}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170014465.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_COLOR_VALUE The value of this property is not between 0 and 255.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    red: number;
  }

  /**
   * A conditional filter — filters rows or columns based on a predicate expression evaluated
   * against a measure. Use `workbook.createConditionalFilter(options)` to create.
   *
   * Note: the docs documented two extra properties (`filteredNodesSelector`, `otherAxisSelector`)
   * and a single `row` boolean. At runtime, `createConditionalFilter` requires `rowSelector` (the
   * docs didn't mention it at all) and silently discards
   * `filteredNodesSelector`/`otherAxisSelector`. The result object's keys are: `row, measure,
   * rowSelector, columnSelector, predicate`. The interface below reflects the runtime shape, not
   * the (incorrect) docs.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008152586}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008152586.html}
   *
   * @since 2020.2
   */
  interface ConditionalFilter {

    /**
     * The column selector. Accepts `DimensionSelector`, `PathSelector`,
     * `DescendantOrSelfNodesSelector`, or `ChildNodesSelector`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008152586}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008152586.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a recognized selector type.
     */
    columnSelector: DimensionSelector | PathSelector | DescendantOrSelfNodesSelector | ChildNodesSelector;

    /**
     * The measure whose values are filtered.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008152586}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008152586.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `CalculatedMeasure` or `DataMeasure`.
     */
    measure: CalculatedMeasure | DataMeasure;

    /**
     * The predicate expression evaluated against the measure values.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008152586}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008152586.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Expression`.
     */
    predicate: Expression;

    /**
     * Whether the filter is applied to rows (`true`) or columns (`false`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008152586}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008152586.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a boolean.
     */
    row: boolean;

    /**
     * The row selector. Accepts the same selector types as `columnSelector`. **Undocumented in
     * the Help Center** but required at create time.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008152586}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008152586.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a recognized selector type.
     */
    rowSelector: DimensionSelector | PathSelector | DescendantOrSelfNodesSelector | ChildNodesSelector;
  }

  /**
   * A conditional format — a styling overlay applied to a workbook table based on filter rules.
   * Use `workbook.createConditionalFormat(options)` to create.
   *
   * Note: the docs type `rules` as a singular `ConditionalFormatRule`. The real type is an array —
   * a singular value fails at runtime with "invalid type argument: options.rules".
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170026948}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170026948.html}
   *
   * @since 2021.2
   */
  interface ConditionalFormat {

    /**
     * The conditional-format rules.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170026948}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170026948.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} NO_RULE_DEFINED `rules` is empty.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.ConditionalFormatRule`.
     */
    rules: ConditionalFormatRule[];
  }

  /**
   * A conditional-format rule — pairs a `TableColumnFilter` predicate with a `Style` to apply
   * when the predicate matches. Use `workbook.createConditionalFormatRule(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170087636}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170087636.html}
   *
   * @since 2021.2
   */
  interface ConditionalFormatRule {

    /**
     * The filter predicate that triggers this rule.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170087636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170087636.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.TableColumnFilter`.
     */
    filter: TableColumnFilter;

    /**
     * The style to apply when the filter matches.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170087636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170087636.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Style`.
     */
    style: Style;
  }

  /**
   * An amount in a particular currency. Returned from a pivot execution, and accepted as the
   * `value` of a `CURRENCY`-typed constant expression. Use `workbook.createCurrency(options)` to
   * create this object.
   *
   * All properties are read-only — attempting to set any property after creation throws
   * `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170117705}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170117705.html}
   *
   * @since 2021.2
   */
  interface Currency {

    /**
     * The amount of the currency.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170128090}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170128090.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Currency` object was created.
     */
    readonly amount: number;

    /**
     * The ID of the currency (e.g. `'USD'`, `'EUR'`, `'GBP'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170140869}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170140869.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Currency` object was created.
     */
    readonly id: string;
  }

  /**
   * A data dimension object — a categorization axis used in pivots, charts, and sections. Use
   * `workbook.createDataDimension(options)` to create this object. A data dimension is accepted
   * in: `Category`, `Legend`, `PivotAxis`, `DimensionSelector.dimension`, `DataDimensionItemValue.item`,
   * and `DataDimensionValue.dataDimension`.
   *
   * Note: `createDataDimension({})` (with no `items`) throws `"Missing a required argument:
   * options.items"` — `items` is required at creation. The resulting object has both `items` (the
   * documented dimension items) and `children` (an initially-empty array that gets populated as
   * the dimension is composed into a workbook). The two collections are distinct.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008172142}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008172142.html}
   *
   * @since 2020.2
   */
  interface DataDimension {

    /**
     * Composed child elements. Initially empty when the dimension is created; populated as the
     * dimension is composed into a workbook section/pivot.
     *
     * Note: the docs typed `children` as a confused multi-array union (e.g. `Array<Section> |
     * Array<DataDimension> | Array < CalculatedMeasure>` etc.). The correct shape is a
     * heterogeneous array, matching `Section.children`, which the docs present cleanly as the flat
     * union below.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008172142}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008172142.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value supplied for this property is not the expected array shape.
     */
    children: (CalculatedMeasure | DataDimension | DataMeasure | Section)[];

    /**
     * The data dimension items that make up this dimension.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008172142}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008172142.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not an array of `workbook.DataDimensionItem`.
     */
    items: DataDimensionItem[];

    /**
     * The total-line formatting preset for the dimension. Use values from `workbook.TotalLine`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008172142}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008172142.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} INVALID_TOTAL_LINE The value is not in the `workbook.TotalLine` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a string.
     */
    totalLine: TotalLine | `${TotalLine}` | string;
  }

  /**
   * A data dimension item object — a single value (often produced by an expression) within a
   * `DataDimension`. Use `workbook.createDataDimensionItem(options)` to create this object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008187726}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008187726.html}
   *
   * @since 2020.2
   */
  interface DataDimensionItem {

    /**
     * The expression that produces the dimension item's value.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008187726}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008187726.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a `workbook.Expression`.
     */
    expression: Expression;

    /**
     * The label of the dimension item. Plain string only (no Expression form — asymmetric with
     * `CalculatedMeasure.label` and `DataMeasure.label`, which both accept Expression for i18n).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008187726}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008187726.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a string.
     */
    label: string;
  }

  /**
   * The value of a data dimension item, returned during pivot execution. `value` is a discriminated
   * union by type — for `Record`-typed dimensions the value is a `workbook.Record`, for `Currency`
   * a `workbook.Currency`, for `Range`/`Duration` similarly, and for primitive-typed dimensions
   * (numeric/string/boolean) the raw scalar.
   *
   * Both properties are read-only — attempting to set throws `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170154453}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170154453.html}
   *
   * @since 2021.2
   */
  interface DataDimensionItemValue {

    /**
     * The owning data dimension.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170154453}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170154453.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly item: DataDimension;

    /**
     * The value of the data dimension item.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170154453}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170154453.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly value: string | number | boolean | Record | Currency | Range | Duration;
  }

  /**
   * A set of item values for a data dimension — returned during pivot execution.
   *
   * Both properties are read-only — attempting to set throws `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170210491}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170210491.html}
   *
   * @since 2021.2
   */
  interface DataDimensionValue {

    /**
     * The owning data dimension.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170210491}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170210491.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly dataDimension: DataDimension;

    /**
     * The item values for the data dimension.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170210491}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170210491.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly itemValues: DataDimensionItemValue[];
  }

  /**
   * A data measure object — a numeric aggregation of an expression (e.g. `SUM(amount)`,
   * `COUNT_DISTINCT(customer)`). Use `workbook.createDataMeasure(options)` to create this object.
   *
   * **Mutually exclusive:** `expression` (single) and `expressions` (array) are mutually exclusive
   * at creation. Passing both throws `MUTUALLY_EXCLUSIVE_ARGUMENTS`. Whichever one is supplied is
   * reflected on the resulting object; the other property exists but is `undefined`. Typed below
   * as optional on both.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170291911}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170291911.html}
   *
   * @since 2021.2
   */
  interface DataMeasure {

    /**
     * The aggregation applied to the measure expression(s). Use values from
     * `workbook.Aggregation`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170291911}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170291911.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_AGGREGATION The value is not in the `workbook.Aggregation` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    aggregation: Aggregation | `${Aggregation}` | string;

    /**
     * The single expression the measure aggregates. Mutually exclusive with `expressions`.
     * `undefined` when `expressions` was used at creation.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170291911}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170291911.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS Mutually exclusive arguments were supplied at creation.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Expression`.
     */
    expression?: Expression;

    /**
     * The list of expressions the measure aggregates. Mutually exclusive with `expression`.
     * `undefined` when `expression` was used at creation.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170291911}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170291911.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS Mutually exclusive arguments were supplied at creation.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Expression[]`.
     */
    expressions?: Expression[];

    /**
     * The label of the measure. May be a plain string or a `workbook.Expression` (e.g. a
     * `TRANSLATE` expression for i18n).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170291911}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170291911.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string or `workbook.Expression`.
     */
    label: Expression | string;
  }

  /**
   * A selector for descendant-or-self nodes. Use the `workbook.DescendantOrSelfNodesSelector`
   * module-level singleton — there is no factory method. A descendant-or-self selector is
   * accepted as `columnSelector`/`rowSelector` in `workbook.createMeasureValueSelector(options)`
   * and `workbook.createSortByMeasure(options)`.
   *
   * Note: the official docs page spells this `DescendantorSelfNodesSelector` (lowercase `or`).
   * The runtime export is in fact `workbook.DescendantOrSelfNodesSelector` (camelCase `Or`). The
   * runtime name is used here; the docs URL still points to the typo'd page.
   *
   * For more about selectors, see the Selectors help topic.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170591936}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170591936.html}
   *
   * @since 2021.2
   */
  interface DescendantOrSelfNodesSelector {
    // No documented properties — used as a marker/sentinel selector instance. Obtain via the
    // `workbook.DescendantOrSelfNodesSelector` module-level singleton.
  }

  /**
   * A dimension selector object — selects a single data dimension or section for use in path
   * selectors, conditional filters, limiting filters, and measure sorts. Use
   * `workbook.createDimensionSelector(options)` to create this object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008193274}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008193274.html}
   *
   * @since 2020.2
   */
  interface DimensionSelector {

    /**
     * The dimension being selected. May be a `workbook.DataDimension` or a `workbook.Section`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008193274}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008193274.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a `workbook.DataDimension` or `workbook.Section`.
     */
    dimension: DataDimension | Section;
  }

  /**
   * A duration object. Both properties are read-only — attempting to set after creation throws
   * `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170370552}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170370552.html}
   *
   * @since 2021.2
   */
  interface Duration {

    /**
     * The amount of the duration.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170373072}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170373072.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Duration` object was created.
     */
    readonly amount: number;

    /**
     * The units of the duration. Use values from `workbook.TemporalUnit`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170386544}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170386544.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Duration` object was created.
     */
    readonly units: TemporalUnit | `${TemporalUnit}` | string;
  }

  /**
   * An expression object, used when creating pivot definitions, data dimension items, measures,
   * conditional filters, constants, table columns, report-style rules, and tables. Use
   * `workbook.createExpression(options)` to create this object.
   *
   * An expression's `parameters` shape depends on its `functionId`; see `workbook.ExpressionType`
   * for the parameter set associated with each expression type.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008229845}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008229845.html}
   *
   * @since 2020.2
   */
  interface Expression {

    /**
     * The ID of the function used in the expression. Uses values from `workbook.ExpressionType`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159060345596}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159060345596.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a `workbook.ExpressionType` string.
     */
    functionId: ExpressionType | `${ExpressionType}` | string;

    /**
     * The parameters for the expression. Parameter names depend on the `functionId` — see
     * `workbook.ExpressionType` for each expression type's parameter set.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159060354863}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159060354863.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not an object.
     */
    parameters: object;
  }

  /**
   * A field context object, used when creating a table column. Use
   * `workbook.createFieldContext(options)` to create this object.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008243498}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008243498.html}
   *
   * @since 2020.2
   */
  interface FieldContext {

    /**
     * The name of the field context (e.g. `'DISPLAY'`, `'CONSOLIDATED'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159060362975}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159060362975.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a string.
     */
    name: string;

    /**
     * The user-specified parameters of the field context, supplied as key/value pairs.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159060373825}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159060373825.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not an object.
     */
    parameters: object;
  }

  /**
   * A font-size object (numeric size + unit). Use `workbook.createFontSize(options)` to create
   * this object. A font-size object is accepted as a parameter in `workbook.createStyle(options)`
   * (alongside the named values from the `workbook.FontSize` const enum).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170399484}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170399484.html}
   *
   * @since 2021.2
   */
  interface FontSize {

    /**
     * The numerical size of the font.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170404227}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170404227.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    size: number;

    /**
     * The unit of the font size. Use values from `workbook.Unit`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170412748}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170412748.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_UNIT The value of this property is not included in the `workbook.Unit` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a string.
     */
    unit: Unit | `${Unit}` | string;
  }

  /**
   * A chart legend — typically the secondary categorical axis or series-color key of a `Chart`.
   * Use `workbook.createLegend(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008316064}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008316064.html}
   *
   * @since 2020.2
   */
  interface Legend {

    /**
     * The chart axes associated with this legend.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008316064}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008316064.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.ChartAxis`.
     */
    axes: ChartAxis[];

    /**
     * The dimension (or section) driving the legend values.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008316064}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008316064.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `DataDimension` or `Section`.
     */
    root: DataDimension | Section;

    /**
     * Sort definitions applied to the legend.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008316064}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008316064.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.SortDefinition`.
     */
    sortDefinitions: SortDefinition[];
  }

  /**
   * A limiting filter — a "top-N"-style filter that keeps only the first/last `limit` rows or
   * columns after applying the sort order. Use `workbook.createLimitingFilter(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008328944}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008328944.html}
   *
   * @since 2020.2
   */
  interface LimitingFilter {

    /**
     * The selector for the nodes to which the limit applies.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008328944}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008328944.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `PathSelector` or `DimensionSelector`.
     */
    filteredNodesSelector: PathSelector | DimensionSelector;

    /**
     * The maximum number of rows/columns to keep.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008328944}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008328944.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a number.
     */
    limit: number;

    /**
     * Whether the filter is applied to rows (`true`) or columns (`false`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008328944}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008328944.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a boolean.
     */
    row: boolean;

    /**
     * The sort orderings applied before the limit takes effect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008328944}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008328944.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of sort-by entries.
     */
    sortBys: (SortByDataDimensionItem | SortByMeasure)[];
  }

  /**
   * A workbook metadata entry returned by `workbook.list()` and present in
   * `workbook.PagedInfoData.fetch().data`. Carries the workbook's script ID, name, and (nullable)
   * description.
   *
   * Note: the docs declare the list return as a bare `Object[]`. The per-item shape is `{name,
   * description, id}` (with `description` nullable). Modeled here as an interface for callsite
   * ergonomics.
   *
   * @since 2020.2
   */
  interface ListInfo {

    /**
     * The script ID of the workbook (e.g. `'stdworkbookSystemNotes2Workbook'`,
     * `'custworkbook_my_pivot'`).
     *
     * @since 2020.2
     */
    readonly id: string;

    /**
     * The display name of the workbook.
     *
     * @since 2020.2
     */
    readonly name: string;

    /**
     * The description of the workbook. Often `null` for stock workbooks.
     *
     * @since 2021.2
     */
    readonly description: string | null;
  }

  /**
   * A measure selector — wraps one or more measures (calculated or data) for use in measure-value
   * selectors and sort definitions. Use `workbook.createMeasureSelector(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170447750}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170447750.html}
   *
   * @since 2021.2
   */
  interface MeasureSelector {

    /**
     * The measures referenced by this selector. Each entry is either a `CalculatedMeasure` or a
     * `DataMeasure`; the entries may be heterogeneous.
     *
     * Note: the docs typed this as `CalculatedMeasure[] | DataMeasure[]` (two separate homogeneous
     * arrays). The correct shape is a single heterogeneous array — a flat union of element types.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170447750}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170447750.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `CalculatedMeasure | DataMeasure`.
     */
    measures: (CalculatedMeasure | DataMeasure)[];
  }

  /**
   * A measure and its value — returned during pivot execution as part of an intersection's
   * measure data.
   *
   * Note: the docs typed `measure` as a recursive `workbook.MeasureValue`, which is clearly wrong
   * (a measure-value can't reference itself by definition). The actual semantic type is a measure
   * selector or the measure itself, typed below as a union of the plausible references
   * (`CalculatedMeasure | DataMeasure | MeasureSelector`). The precise type is not documented.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170481168}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170481168.html}
   *
   * @since 2021.2
   */
  interface MeasureValue {

    /**
     * The measure whose value is being reported. (Best-guess type; the precise type is not
     * documented — see interface JSDoc.)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170481168}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170481168.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly measure: CalculatedMeasure | DataMeasure | MeasureSelector;

    /**
     * The value of the measure. Discriminated by the measure's value type — for `Record`-typed
     * dimensions a `Record`, for `Currency` a `Currency`, etc.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170481168}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170481168.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly value: string | number | boolean | Record | Currency | Range | Duration;
  }

  /**
   * A measure-value selector — pairs a measure selector with row and column dimension selectors
   * (or path/child/descendant selectors) to identify a specific cell in a pivot. Use
   * `workbook.createMeasureValueSelector(options)` to create this object.
   *
   * Note: `columnSelector` and `rowSelector` accept the documented three selector types AND the
   * `ChildNodesSelector` module-level singleton (despite the docs not listing it). Added below.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170568904}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170568904.html}
   *
   * @since 2021.2
   */
  interface MeasureValueSelector {

    /**
     * The column selector for the measure value. May be a `DimensionSelector`, `PathSelector`,
     * `DescendantOrSelfNodesSelector`, or `ChildNodesSelector`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170568904}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170568904.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a recognized selector type.
     */
    columnSelector: DimensionSelector | PathSelector | DescendantOrSelfNodesSelector | ChildNodesSelector;

    /**
     * The measure selector(s) for the measure value.
     *
     * **Property-name caveat:** the property name is singular (`measureSelector`) but the actual
     * value is an ARRAY of measure selectors. Type follows runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170568904}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170568904.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `MeasureSelector`.
     */
    measureSelector: MeasureSelector[];

    /**
     * The row selector for the measure value. Same accepted types as `columnSelector`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170568904}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170568904.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a recognized selector type.
     */
    rowSelector: DimensionSelector | PathSelector | DescendantOrSelfNodesSelector | ChildNodesSelector;
  }

  /**
   * A single page of workbook metadata, returned by `PagedInfoData.fetch(options)`. Holds the
   * page's data items plus a back-reference to the owning `PagedInfoData`.
   *
   * Undocumented in the Help Center; present at runtime. The shape corresponds to
   * `workbook.listPaged({pageSize: 5}).fetch({index: 0})`.
   *
   * @since 2021.2
   */
  interface Page {

    /**
     * The workbook metadata entries on this page.
     *
     * @since 2021.2
     */
    readonly data: ListInfo[];

    /**
     * Whether this page is the first page of the paged set.
     *
     * @since 2021.2
     */
    readonly isFirst: boolean;

    /**
     * Whether this page is the last page of the paged set.
     *
     * @since 2021.2
     */
    readonly isLast: boolean;

    /**
     * Back-reference to the owning `PagedInfoData` (the same object returned by `listPaged`).
     *
     * @since 2021.2
     */
    readonly pagedInfoData: PagedInfoData;

    /**
     * The page-range descriptor for this page (index + size).
     *
     * @since 2021.2
     */
    readonly pageRange: PageRange;
  }

  /**
   * Describes a single page within a `PagedInfoData`: a 0-based `index` and the page's `size`.
   *
   * Undocumented in the Help Center; present at runtime. The shape corresponds to
   * `PagedInfoData.pageRanges` and `Page.pageRange`.
   *
   * @since 2021.2
   */
  interface PageRange {

    /**
     * The 0-based index of the page within the paged set.
     *
     * @since 2021.2
     */
    readonly index: number;

    /**
     * The number of items in this page.
     *
     * @since 2021.2
     */
    readonly size: number;
  }

  /**
   * Paginated workbook metadata — returned by `workbook.listPaged(options)`. Carries the input
   * `pageSize`/`category`, the total `count`, an array of per-page descriptors in `pageRanges`,
   * and a `fetch(options)` method to retrieve a specific `Page`, plus `iterator()` for
   * sequential iteration.
   *
   * **Cross-module:** this type is also returned by `N/dataset.listPaged(options)` — confirmed in
   * the `N/dataset` module's documentation (and reused here).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_162887136327}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162887136327.html}
   *
   * @since 2021.2
   */
  interface PagedInfoData {

    /**
     * The category filter that was applied to produce this paged set (`'ALL'`, `'MINE'`, or
     * `'SHARED'`). Defaults to `'ALL'` when omitted at `listPaged` time.
     *
     * @since 2021.2
     */
    readonly category: OwnerCategory | `${OwnerCategory}` | string;

    /**
     * The total number of workbooks (or datasets) accessible via this paged set.
     *
     * @since 2021.2
     */
    readonly count: number;

    /**
     * Per-page descriptors. The array length is the number of pages.
     *
     * @since 2021.2
     */
    readonly pageRanges: PageRange[];

    /**
     * The page size used to construct this paged set.
     *
     * @since 2021.2
     */
    readonly pageSize: number;

    /**
     * Retrieves a single page from this paged set.
     *
     * @param options
     * @param options.index The 0-based page index to retrieve.
     * @return The requested `Page`.
     */
    fetch(options: {
      index: number,
    }): Page;

    /**
     * Returns a `PagedIterator` for sequential iteration over all pages.
     *
     * @return A `PagedIterator` that yields each `Page` of the set in order.
     */
    iterator(): PagedIterator;
  }

  /**
   * A page iterator returned by `PagedInfoData.iterator()`. Supports both manual iteration (via
   * `next()`) and callback-style iteration (via `each(callback)` — return `false` from the
   * callback to stop early).
   *
   * Undocumented in the Help Center; present at runtime. `Object.keys(paged.iterator())` yields
   * `['next', 'each']`. The exact return type of `next()` and the callback signature for `each()`
   * match the standard NetSuite paged-iterator pattern (see `N/query.PagedData.iterator`).
   *
   * @since 2021.2
   */
  interface PagedIterator {

    /**
     * Returns the next `Page` in the iteration, or `{done: true}` when iteration is exhausted.
     */
    next(): { value: Page, done: false } | { value: undefined, done: true };

    /**
     * Invokes `callback` for each `Page` in order. Return `false` from the callback to stop early.
     *
     * @param callback Receives each `Page`. Return `false` to halt iteration; any other return value (including `undefined` or `true`) continues.
     */
    each(callback: (page: Page) => boolean | void): void;
  }

  /**
   * A path selector object — an ordered list of dimension selectors representing a path through a
   * dimension hierarchy. Used in sort definitions, conditional filters, limiting filters, and
   * measure sorts. Use `workbook.createPathSelector(options)` to create this object.
   *
   * Note: the docs typed `elements` as a single `DimensionSelector` (singular). At runtime
   * `elements` is REQUIRED to be an array of `DimensionSelector` — passing a single selector
   * throws "You have entered an invalid type argument: options.elements." Typed below as array.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008382970}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008382970.html}
   *
   * @since 2020.2
   */
  interface PathSelector {

    /**
     * The dimension selectors that make up this path.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008382970}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008382970.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.DimensionSelector`.
     */
    elements: DimensionSelector[];
  }

  /**
   * A pivot definition — the cross-tab presentation of a dataset with row/column axes, optional
   * filters, and report-style overlays. Use `workbook.createPivot(options)` to create.
   *
   * Note: `dataset` and `datasetLink` are XOR — at least one must be provided, but not both.
   * Runtime error if neither: `"One of the following arguments is mandatory: dataset,
   * datasetLink"`. Required at create: `id`, `name`, `dataset` OR `datasetLink`, `columnAxis`,
   * `rowAxis`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
   *
   * @since 2020.2
   */
  interface Pivot {

    /**
     * Aggregation-level filters applied to the pivot data.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array.
     */
    aggregationFilters: (LimitingFilter | ConditionalFilter)[];

    /**
     * The column axis of the pivot.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.PivotAxis`.
     */
    columnAxis: PivotAxis;

    /**
     * The dataset backing the pivot. XOR with `datasetLink` — exactly one must be set.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `dataset.Dataset`.
     */
    dataset: dataset.Dataset;

    /**
     * The dataset link backing the pivot. XOR with `dataset` — exactly one must be set.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `datasetLink.DatasetLink`.
     */
    datasetLink: datasetLink.DatasetLink;

    /**
     * Filter expressions applied at the pivot level (before aggregation).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.Expression`.
     */
    filterExpressions: Expression[];

    /**
     * The pivot's identifier.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    id: string;

    /**
     * The pivot's display name.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    name: string;

    /**
     * The display name for the pivot when rendered in a portlet. Accepts either a plain string
     * or a translated-string `Expression` (created via `workbook.createTranslation`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string or `workbook.Expression`.
     */
    portletName: string | Expression | null;

    /**
     * Report-style overlays applied to the pivot.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} NO_RULE_DEFINED A report style has no rules.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.ReportStyle`.
     */
    reportStyles: ReportStyle[];

    /**
     * The row axis of the pivot.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008434619}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008434619.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.PivotAxis`.
     */
    rowAxis: PivotAxis;
  }

  /**
   * A pivot axis — either the row axis or column axis of a `Pivot`. Use
   * `workbook.createPivotAxis(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008441105}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008441105.html}
   *
   * @since 2020.2
   */
  interface PivotAxis {

    /**
     * The dimension (or section) that drives the axis values.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008441105}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008441105.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `DataDimension` or `Section`.
     */
    root: DataDimension | Section;

    /**
     * Sort definitions applied to the axis.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008441105}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008441105.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.SortDefinition`.
     */
    sortDefinitions: SortDefinition[];
  }

  /**
   * A pivot intersection — a single row × column cell in a pivot result. Returned in
   * `runPivot()` result data, not created directly.
   *
   * All properties are read-only.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170659013}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170659013.html}
   *
   * @since 2021.2
   */
  interface PivotIntersection {

    /**
     * The column value at this intersection.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170659013}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170659013.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly column: DataDimensionValue | SectionValue;

    /**
     * The measure values at this intersection. May contain multiple entries when the pivot
     * exposes multiple measures.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170659013}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170659013.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly measureValues: MeasureValue[];

    /**
     * The row value at this intersection.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170659013}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170659013.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly row: DataDimensionValue | SectionValue;
  }

  /**
   * A position defined as a percentage of x and y dimensions. Use
   * `workbook.createPositionPercent(options)` to create this object. A `PositionPercent` is
   * accepted as a parameter in `workbook.createStyle(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170729070}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170729070.html}
   *
   * @since 2021.2
   */
  interface PositionPercent {

    /**
     * The percentage of the x dimension.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170734357}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170734357.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    percentX: number;

    /**
     * The percentage of the y dimension.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170743120}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170743120.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    percentY: number;
  }

  /**
   * A position defined using numeric values and a unit. Use
   * `workbook.createPositionUnits(options)` to create this object. A `PositionUnits` is accepted
   * as a parameter in `workbook.createStyle(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170762618}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170762618.html}
   *
   * @since 2021.2
   */
  interface PositionUnits {

    /**
     * The unit of the position. Use values from `workbook.Unit`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170775370}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170775370.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_UNIT The value specified for this property is not included in the `workbook.Unit` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a string.
     */
    unit: Unit | `${Unit}` | string;

    /**
     * The x value of the position.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170786133}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170786133.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    x: number;

    /**
     * The y value of the position.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170792708}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170792708.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a number.
     */
    y: number;
  }

  /**
   * A position defined using position values (e.g. `LEFT` and `CENTER`). Use
   * `workbook.createPositionValues(options)` to create this object. A `PositionValues` is
   * accepted as a parameter in `workbook.createStyle(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170827938}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170827938.html}
   *
   * @since 2021.2
   */
  interface PositionValues {

    /**
     * The horizontal value of the position. Use values from `workbook.Position`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170835215}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170835215.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_POSITION The value specified for this property is not included in the `workbook.Position` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a string.
     */
    horizontal: Position | `${Position}` | string;

    /**
     * The vertical value of the position. Use values from `workbook.Position`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170846977}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170846977.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_POSITION The value specified for this property is not included in the `workbook.Position` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a string.
     */
    vertical: Position | `${Position}` | string;
  }

  /**
   * A date or date-time range. The dates in the range are formatted according to the user's
   * preferences in their account. This object can be returned from a pivot execution.
   *
   * Both properties are read-only — attempting to set after creation throws `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170872703}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170872703.html}
   *
   * @since 2021.2
   */
  interface Range {

    /**
     * The end date or date-time of the range, formatted per the user's account preferences.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170883402}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170883402.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Range` object was created.
     */
    readonly end: string;

    /**
     * The start date or date-time of the range, formatted per the user's account preferences.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170896250}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170896250.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Range` object was created.
     */
    readonly start: string;
  }

  /**
   * A record. This object can be returned from a pivot execution.
   *
   * All properties are read-only — attempting to set after creation throws `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170917603}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170917603.html}
   *
   * @since 2021.2
   */
  interface Record {

    /**
     * The name of the record type for the record.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170925187}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170925187.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Record` object was created.
     */
    readonly name: string;

    /**
     * The primary key of the record.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170936521}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170936521.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Record` object was created.
     */
    readonly primaryKey: number;

    /**
     * The properties of the record.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170947320}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170947320.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.Record` object was created.
     */
    readonly properties: object;
  }

  /**
   * A record key. This object can be returned from a pivot execution. A record key is also
   * accepted as the `value` of a `RECORD`-typed constant expression (via
   * `workbook.createConstant(options)`).
   *
   * The `properties` property is read-only — attempting to set after creation throws
   * `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170962082}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170962082.html}
   *
   * @since 2021.2
   */
  interface RecordKey {

    /**
     * The properties of the record key.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163170982525}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163170982525.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property after the `workbook.RecordKey` object was created.
     */
    readonly properties: object;
  }

  /**
   * A report style — a styling overlay applied to a set of measure-value selectors via a list of
   * rules. Use `workbook.createReportStyle(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171063813}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171063813.html}
   *
   * @since 2021.2
   */
  interface ReportStyle {

    /**
     * The report-style rules.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171063813}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171063813.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} NO_RULE_DEFINED `rules` is empty.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.ReportStyleRule`.
     */
    rules: ReportStyleRule[];

    /**
     * The measure-value selectors targeted by this report style.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171063813}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171063813.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} NO_SELECTORS_DEFINED `selectors` is empty.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.MeasureValueSelector`.
     */
    selectors: MeasureValueSelector[];
  }

  /**
   * A report-style rule — pairs a predicate expression with a style to apply. Use
   * `workbook.createReportStyleRule(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171130796}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171130796.html}
   *
   * @since 2021.2
   */
  interface ReportStyleRule {

    /**
     * The predicate expression that triggers this rule.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171130796}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171130796.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Expression`.
     */
    expression: Expression;

    /**
     * The style to apply when the predicate matches.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163171130796}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163171130796.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Style`.
     */
    style: Style;
  }

  /**
   * A section object — a grouping of children (calculated measures, data dimensions, data
   * measures, nested sections) within a workbook layout. Use `workbook.createSection(options)`
   * to create this object. A `Section` is accepted in: `DataDimension.children`,
   * `DimensionSelector.dimension`, `PivotAxis`, and `Pivot`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008446199}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008446199.html}
   *
   * @since 2020.2
   */
  interface Section {

    /**
     * The composed children of this section. Heterogeneous array — entries may be any mix of
     * `CalculatedMeasure`, `DataDimension`, `DataMeasure`, or nested `Section`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008446199}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008446199.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of the expected types.
     */
    children: (CalculatedMeasure | DataDimension | DataMeasure | Section)[];

    /**
     * The total-line formatting preset for the section. Use values from `workbook.TotalLine`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008446199}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008446199.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} INVALID_TOTAL_LINE The value is not in the `workbook.TotalLine` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a string.
     */
    totalLine: TotalLine | `${TotalLine}` | string;
  }

  /**
   * A section value object — wraps a `workbook.Section` reference for use during pivot execution
   * results. The `section` property is read-only — attempting to set throws `READ_ONLY_PROPERTY`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173206668}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173206668.html}
   *
   * @since 2021.2
   */
  interface SectionValue {

    /**
     * The wrapped section.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173206668}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173206668.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     */
    readonly section: Section;
  }

  /**
   * A chart series — a collection of `Aspect` mappings applied to chart measures. Use
   * `workbook.createSeries(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008573032}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008573032.html}
   *
   * @since 2020.2
   */
  interface Series {

    /**
     * The visual aspects applied to chart measures.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008573032}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008573032.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.Aspect`.
     */
    aspects: Aspect[];
  }

  /**
   * A sort object, used when creating a table column, dimension sort, or measure sort. Use
   * `workbook.createSort(options)` to create this object. A `Sort` is accepted as a parameter in
   * `workbook.createSortByDataDimensionItem(options)` and `workbook.createTableColumn(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008577679}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008577679.html}
   *
   * @since 2020.2
   */
  interface Sort {

    /**
     * Indicates whether the sort is ascending.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159067491318}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159067491318.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a boolean.
     */
    ascending: boolean;

    /**
     * Indicates whether the sort is case-sensitive.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159067503088}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159067503088.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a boolean.
     */
    caseSensitive: boolean;

    /**
     * The locale of the sort. **`null` when not set** at create time.
     *
     * Note: the docs type this property as `query.Operator (read-only)`, which is clearly wrong
     * (a locale code is not a query operator). Typed here as `string | null`: `createSort({})`
     * returns a Sort with `locale: null`. Real locale values would be IETF/Java locale tags like
     * `'en_US'`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159067507629}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159067507629.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a string.
     */
    readonly locale: string | null;

    /**
     * Indicates whether null values are placed last in the sort order.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159067526653}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159067526653.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a boolean.
     */
    nullsLast: boolean;

    /**
     * The sort order indicator.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0508025608}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0508025608.html}
     *
     * @since 2022.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value for this property is not a number.
     */
    order: number;
  }

  /**
   * A sort key based on a specific data dimension item. Use
   * `workbook.createSortByDataDimensionItem(options)` to create. Used in `LimitingFilter.sortBys`
   * and `SortDefinition.sortBys`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173379734}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173379734.html}
   *
   * @since 2021.2
   */
  interface SortByDataDimensionItem {

    /**
     * The data dimension item to sort by.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173379734}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173379734.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.DataDimensionItem`.
     */
    item: DataDimensionItem;

    /**
     * The sort order/direction settings.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173379734}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173379734.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Sort`.
     */
    sort: Sort;
  }

  /**
   * A sort key based on a measure's value, optionally constrained to a specific axis path. Use
   * `workbook.createSortByMeasure(options)` to create.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173416538}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173416538.html}
   *
   * @since 2021.2
   */
  interface SortByMeasure {

    /**
     * The measure whose values drive the sort.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173416538}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173416538.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `CalculatedMeasure` or `DataMeasure`.
     */
    measure: CalculatedMeasure | DataMeasure;

    /**
     * Selector for the other axis (often perpendicular to the one being sorted).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173416538}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173416538.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a recognized selector type.
     */
    otherAxisSelector: DescendantOrSelfNodesSelector | PathSelector | DimensionSelector;

    /**
     * The sort order/direction settings.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173416538}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173416538.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.Sort`.
     */
    sort: Sort;
  }

  /**
   * A sort definition — a selector + a list of sort-by keys, used in chart categories, legends,
   * and pivot axes. Use `workbook.createSortDefinition(options)` to create.
   *
   * Note: `selector` accepts `ChildNodesSelector` and `DescendantOrSelfNodesSelector` in addition
   * to the documented `DimensionSelector`/`PathSelector` — same undocumented selector-acceptance
   * pattern as `MeasureValueSelector.columnSelector`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008585696}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008585696.html}
   *
   * @since 2020.2
   */
  interface SortDefinition {

    /**
     * The selector identifying what is sorted. Accepts `DimensionSelector`, `PathSelector`,
     * `DescendantOrSelfNodesSelector`, or `ChildNodesSelector`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008585696}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008585696.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a recognized selector type.
     */
    selector: DimensionSelector | PathSelector | DescendantOrSelfNodesSelector | ChildNodesSelector;

    /**
     * The sort-by keys. Must be non-empty at create time.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008585696}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008585696.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} NO_SORT_BY_DEFINED The array is empty.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of sort-by entries.
     */
    sortBys: (SortByDataDimensionItem | SortByMeasure)[];
  }

  /**
   * A style object — a set of visual properties (colors, fonts, alignment, etc.) used by
   * `ConditionalFormatRule` and `ReportStyleRule`. Use `workbook.createStyle(options)` to create.
   *
   * **Case-sensitivity note:** the enum-valued string properties (`fontStyle`, `fontWeight`,
   * `textAlign`, `textDecorationLine`, `textDecorationStyle`) are case-sensitive at runtime —
   * uppercase values from the corresponding enums only.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
   *
   * @since 2021.2
   */
  interface Style {

    /**
     * Background color — accepts a `Color` rgba object or a `ColorName` string (e.g. `'BLUE'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} UNSUPPORTED_COLOR The value is not a valid `ColorName` or `Color` rgba object.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string or `Color` object.
     */
    backgroundColor: Color | ColorName | string;

    /**
     * Background image. Use values from `workbook.Image`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_IMAGE The value is not in `workbook.Image`.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    backgroundImage: Image | `${Image}` | string;

    /**
     * Background position — accepts a `PositionPercent`, `PositionUnits`, or `PositionValues`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a recognized position type.
     */
    backgroundPosition: PositionPercent | PositionUnits | PositionValues;

    /**
     * Foreground (text) color — accepts a `Color` rgba object or a `ColorName` string.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} UNSUPPORTED_COLOR The value is not a valid `ColorName` or `Color` rgba object.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string or `Color` object.
     */
    color: Color | ColorName | string;

    /**
     * Font size — accepts a `FontSize` object or a `FontSizeName` string (e.g. `'LARGE'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_FONT_SIZE The value is invalid.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string or `FontSize` object.
     */
    fontSize: FontSize | FontSizeName | string;

    /**
     * Font style. Use values from `workbook.FontStyle` (uppercase — runtime case-sensitive).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_FONT_STYLE The value is not in `workbook.FontStyle` (uppercase).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    fontStyle: FontStyle | `${FontStyle}` | string;

    /**
     * Font weight. Use values from `workbook.FontWeight` (uppercase — runtime case-sensitive).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_FONT_WEIGHT The value is not in `workbook.FontWeight` (uppercase).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    fontWeight: FontWeight | `${FontWeight}` | string;

    /**
     * Text alignment. Use values from `workbook.TextAlign` (uppercase — runtime case-sensitive).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_TEXT_ALIGN The value is not in `workbook.TextAlign` (uppercase).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    textAlign: TextAlign | `${TextAlign}` | string;

    /**
     * Text-decoration (underline/strikethrough) color.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} UNSUPPORTED_COLOR The value is not a valid `ColorName` or `Color` rgba object.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string or `Color` object.
     */
    textDecorationColor: Color | ColorName | string;

    /**
     * Text-decoration line. Use values from `workbook.TextDecorationLine` (uppercase — runtime
     * case-sensitive).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_TEXT_DECORATION_LINE The value is not in `workbook.TextDecorationLine` (uppercase).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    textDecorationLine: TextDecorationLine | `${TextDecorationLine}` | string;

    /**
     * Text-decoration style. Use values from `workbook.TextDecorationStyle` (uppercase — runtime
     * case-sensitive).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163173520481}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163173520481.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_TEXT_DECORATION_STYLE The value is not in `workbook.TextDecorationStyle` (uppercase).
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    textDecorationStyle: TextDecorationStyle | `${TextDecorationStyle}` | string;
  }

  /**
   * A table — a tabular presentation of a dataset with one or more columns. Use
   * `workbook.createTable(options)` to create.
   *
   * Note: required at create time: `name`, `dataset`. The `columns` and `id` are accepted but not
   * required.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163344915869}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163344915869.html}
   *
   * @since 2021.2
   */
  interface Table {

    /**
     * The columns of the table.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163344915869}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163344915869.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.TableColumn`.
     */
    columns: TableColumn[];

    /**
     * The dataset backing the table.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163344915869}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163344915869.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `dataset.Dataset`.
     */
    dataset: dataset.Dataset;

    /**
     * The table's identifier.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163344915869}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163344915869.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    id: string;

    /**
     * The table's display name. Accepts either a plain string or a translated-string `Expression`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163344915869}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163344915869.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string or `workbook.Expression`.
     */
    name: string | Expression;
  }

  /**
   * A table column. Use `workbook.createTableColumn(options)` to create.
   *
   * Note: the docs declared 7 properties: `alias`, `datasetColumnAlias`, `fieldContext`,
   * `filters`, `label`, `sort`, `width`. The runtime exposes 6 properties: `condition`,
   * `conditionalFormats`, `datasetColumnAlias`, `fieldContext`, `label`, `width`. The docs got it
   * WRONG: `alias`, `filters`, and `sort` do not exist at runtime; `condition` (singular
   * `TableColumnCondition`) and `conditionalFormats` (an array of `ConditionalFormat`) are the
   * real properties. All are writable post-create. Only `datasetColumnAlias` is required at
   * create-time.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008606673}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008606673.html}
   *
   * @since 2020.2
   */
  interface TableColumn {

    /**
     * The column's condition — a `TableColumnCondition` that controls when this column is
     * displayed or styled.
     *
     * Note: the docs typed this property as `filters: TableColumnFilter` (singular). Both the
     * name and the type are wrong — runtime uses `condition: TableColumnCondition` (also
     * singular).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008606673}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008606673.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.TableColumnCondition`.
     */
    condition: TableColumnCondition | null;

    /**
     * Conditional-format overlays applied to this column. **Undocumented in the Help Center** but
     * present at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008606673}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008606673.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.ConditionalFormat`.
     */
    conditionalFormats: ConditionalFormat[];

    /**
     * The dataset column alias driving this column.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008606673}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008606673.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    datasetColumnAlias: string;

    /**
     * The field context applied to the column's values.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008606673}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008606673.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a `workbook.FieldContext`.
     */
    fieldContext: FieldContext | null;

    /**
     * The column's display label.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008606673}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008606673.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    label: string;

    /**
     * The column's display width (pixels).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008606673}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008606673.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a number.
     */
    width: number;
  }

  /**
   * A table column condition — combines a list of `TableColumnFilter`s with a logical operator.
   * Use `workbook.createTableColumnCondition(options)` to create.
   *
   * Note: the docs' `createTableColumnCondition` method declares return type
   * `workbook.TableColumnFilter` (wrong) — the actual return is `workbook.TableColumnCondition`
   * (this interface).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519040723}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519040723.html}
   *
   * @since 2021.1
   */
  interface TableColumnCondition {

    /**
     * The filters combined by this condition.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519040723}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519040723.html}
     *
     * @since 2021.1
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not an array of `workbook.TableColumnFilter`.
     */
    filters: TableColumnFilter[];

    /**
     * The logical operator combining the filters. Use values from `query.Operator` (e.g.
     * `'AND'`, `'OR'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_0519040723}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0519040723.html}
     *
     * @since 2021.1
     *
     * @throws {error.SuiteScriptError} INVALID_OPERATOR The value is not a valid operator.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value is not a string.
     */
    operator: string;
  }

  /**
   * A table column filter object. Use `workbook.createTableColumnFilter(options)` to create this
   * object. A `TableColumnFilter` is accepted as a parameter in
   * `workbook.createConditionalFormatRule(options)`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163182554335}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163182554335.html}
   *
   * @since 2021.2
   */
  interface TableColumnFilter {

    /**
     * Whether string comparisons in this filter are case-sensitive. Undocumented in the Help
     * Center; present at runtime. Default at create-time is `undefined`; can be set to a boolean
     * at create-time or via direct assignment.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163182519828}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163182519828.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a boolean.
     */
    caseSensitive?: boolean;

    /**
     * The operator for the table column filter. Use values from `query.Operator`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163182557155}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163182557155.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} INVALID_OPERATOR The value of this property is not included in the `query.Operator` enum.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not a string.
     */
    operator: string;

    /**
     * The values for the table column filter. Supported element types are `null`, `object`,
     * `boolean`, `number`, `string`, and `Date`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163182580894}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163182580894.html}
     *
     * @since 2021.2
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The value specified for this property is not an array, or an element is not one of the supported types.
     */
    values: (null | object | boolean | number | string | Date)[];
  }

  /**
   * A workbook — the top-level container holding pivots, charts, and tables. Use
   * `workbook.create(options)` to create a new workbook, or `workbook.load({id})` to load an
   * existing one by script ID.
   *
   * Note: all properties on a loaded `Workbook` are READ-ONLY — setting any of them throws
   * `READ_ONLY_PROPERTY`. The `charts` property is undocumented but present at runtime as an array
   * of chart objects. The `runPivot(options)` method takes `id` (the pivot's id, not "pivotId" as
   * one might guess) and returns the pivot's execution result.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008620913}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008620913.html}
   *
   * @since 2020.2
   */
  interface Workbook {

    /**
     * The charts in the workbook. **Undocumented in the Help Center** but present at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008620913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008620913.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property on a loaded `Workbook`.
     */
    readonly charts: Chart[];

    /**
     * The workbook description.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008620913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008620913.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property on a loaded `Workbook`.
     */
    readonly description: string | null;

    /**
     * The workbook's script ID (e.g. `'custworkbook_my_workbook'` or `'stdworkbook...'` for
     * standard workbooks).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008620913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008620913.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property on a loaded `Workbook`.
     */
    readonly id: string;

    /**
     * The workbook's display name.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008620913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008620913.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property on a loaded `Workbook`.
     */
    readonly name: string;

    /**
     * The pivots in the workbook.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008620913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008620913.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property on a loaded `Workbook`.
     */
    readonly pivots: Pivot[];

    /**
     * The tables in the workbook.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_159008620913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159008620913.html}
     *
     * @since 2020.2
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY You attempted to set this property on a loaded `Workbook`.
     */
    readonly tables: Table[];

    /**
     * Executes a pivot in this workbook and returns the result data. The required `id` argument
     * is the pivot's `id` (NOT `pivotId`, despite what one might guess).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_163175005519}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163175005519.html}
     *
     * @governance none
     * @restriction Server-side scripts only
     * @since 2021.2
     *
     * @param options
     * @param options.id The pivot's identifier (`Pivot.id`).
     * @return Pivot execution result. The exact shape is not documented; at minimum it contains
     *   the intersections (`PivotIntersection[]`) of the executed pivot.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT The `options.id` was not provided.
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE The `options.id` is not a string.
     */
    runPivot(options: {
      id: string,
    }): object;
  }
}
