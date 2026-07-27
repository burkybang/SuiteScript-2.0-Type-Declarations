/// <reference path="./error.d.ts" />

/**
 * SuiteScript kpi module
 *
 * Provides programmatic access to Key Performance Indicator (KPI) calculations: a single KPI value (`calculate`) and a full KPI-scorecard snapshot (`calculateScorecard`), each scoped to a date range or an accounting-period range.
 *
 * Undocumented in the Help Center; present at runtime.
 *
 * @module N/kpi
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface kpi {

  /**
   * Calculates a single KPI over a date range or accounting-period range and returns the calculated value.
   *
   * One date selector is required: `dateRange`, `dateRangeId`, or `periodRangeId`. `kpiId` must identify an existing KPI by its script ID or internal ID — this includes the standard KPI IDs used in KPI-scorecard formulas (uppercase tokens such as `SALES`, `COGS`, `BANKBAL`, `INCOME`, `EXPENSES`, `ESTIMATES`, `NEWCUSTOMERS`).
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance 10 units
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.kpiId Script ID or internal ID of the KPI to calculate (for example, a standard KPI ID such as `SALES`).
   * @param [options.dateRange] Explicit start/end date range to calculate over.
   * @param [options.dateRangeId] ID of a predefined date range to calculate over.
   * @param [options.periodRangeId] ID of a predefined accounting-period range to calculate over.
   * @return The calculated KPI value, carrying both the raw `value` and its `formatted` display string.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.kpiId` is missing.
   * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If none of `dateRange`, `dateRangeId`, or `periodRangeId` is provided.
   * @throws {error.SuiteScriptError} INVALID_DATE_RANGE_1 If the provided `dateRangeId` or `periodRangeId` is not a valid range.
   * @throws {error.SuiteScriptError} INVALID_ID If `options.kpiId` is not a valid KPI script ID or internal ID.
   */
  calculate(options: {
    kpiId: string | number,
    dateRange?: {
      start: Date,
      end: Date,
    },
    dateRangeId?: string,
    periodRangeId?: string,
  }): kpi.KpiResult;

  /**
   * Calculates all KPIs on a KPI scorecard and returns a snapshot of the results.
   *
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance 100 units
   * @restriction Server-side scripts only
   *
   * @param options
   * @param options.scorecardId Internal ID of the KPI scorecard to calculate.
   * @return A snapshot of the calculated scorecard: its periods, KPIs, and per-cell results.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options.scorecardId` is missing.
   */
  calculateScorecard(options: {
    scorecardId: number,
  }): kpi.Snapshot;
}

declare namespace kpi {

  /**
   * The result of a `kpi.calculate` call: a single calculated KPI value.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  export interface KpiResult {

    /**
     * Type discriminator; always `'kpi.KpiResult'`.
     */
    type: 'kpi.KpiResult';

    /**
     * The raw numeric value of the KPI (for example, `205496`, `-26145.23`, `3`).
     */
    value: number;

    /**
     * The display-formatted value as shown in the KPI portlet (for example, `'$205,496'`, `'($26,145)'`, `'3'`).
     */
    formatted: string;

    /**
     * Underlying data type of the value. Observed values: `'string'`, `'number'`.
     */
    dataType: string;

    /**
     * Field type that drives formatting. Observed values: `'currency'`, `'float'`.
     */
    fieldType: string;
  }

  /**
   * The result of a `kpi.calculateScorecard` call: the calculated scorecard values together with the periods and KPIs they were computed over.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  export interface Snapshot {

    /**
     * Type discriminator; always `'kpi.Snapshot'`.
     */
    type: 'kpi.Snapshot';

    /**
     * Internal ID of the source scorecard.
     */
    id: number;

    /**
     * Display label of the snapshot — the scorecard's name. `null` when the scorecard has no name.
     */
    label: string | null;

    /**
     * The periods (date ranges or accounting-period ranges) the scorecard was calculated over, one per range row defined on the scorecard.
     */
    periods: kpi.PeriodConfig[];

    /**
     * The KPI rows defined on the scorecard.
     */
    kpis: kpi.KpiConfig[];

    /**
     * The calculated result rows, one per KPI row. Each row carries an `indicator` label and one `kpi.ResultCell` per period, keyed by the matching `kpi.PeriodConfig.id`.
     */
    results: kpi.ResultRow[];
  }

  /**
   * A single period column in a `kpi.Snapshot`, one per date range or accounting-period range defined on the scorecard.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  export interface PeriodConfig {

    /**
     * Identifier of the period (for example, `'m1ty_1'`). Used as the key for this period's cell in each `kpi.ResultRow`.
     */
    id: string;

    /**
     * Type discriminator; always `'kpi.PeriodConfig'`.
     */
    type: 'kpi.PeriodConfig';

    /**
     * Human-readable period label (for example, `'January This Year'`).
     */
    label: string;

    /**
     * Whether this period is compared with the previous one.
     */
    compareWithPrevious: boolean;

    /**
     * Whether the comparison for this period is inverted.
     */
    invertComparison: boolean;
  }

  /**
   * A single KPI row in a `kpi.Snapshot`.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  export interface KpiConfig {

    /**
     * Type discriminator; always `'kpi.KpiConfig'`.
     */
    type: 'kpi.KpiConfig';

    /**
     * Human-readable KPI label (for example, `'Sales'`).
     */
    label: string;

    /**
     * Whether this KPI row is compared with the previous one.
     */
    compareWithPrevious: boolean;

    /**
     * Whether the comparison for this KPI row is inverted.
     */
    invertComparison: boolean;

    /**
     * Whether this KPI row is hidden in the portlet display.
     */
    hidden: boolean;

    /**
     * Underlying data type of the KPI's values. Observed values: `'string'`, `'number'`.
     */
    dataType: string;

    /**
     * Field type that drives formatting. Observed values: `'currency'`, `'float'`.
     */
    fieldType: string;
  }

  /**
   * A single calculated cell in a `kpi.ResultRow`: one KPI's value for one period.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  export interface ResultCell {

    /**
     * The raw numeric value (for example, `0`, `-800`).
     */
    value: number;

    /**
     * The display-formatted value (for example, `'$0'`, `'($800)'`).
     */
    formatted: string;
  }

  /**
   * One row of calculated scorecard results: a KPI's values across all periods.
   *
   * Besides `indicator`, the row holds one `kpi.ResultCell` per period, keyed by the corresponding `kpi.PeriodConfig.id` (for example, `row['m1ty_1']`).
   *
   * Undocumented in the Help Center; present at runtime.
   */
  export interface ResultRow {

    /**
     * The KPI label this row reports; matches the corresponding `kpi.KpiConfig.label`.
     */
    indicator: string;

    /**
     * Per-period result cells, keyed by `kpi.PeriodConfig.id`. (`indicator` above is the only non-cell property.)
     */
    [periodId: string]: string | kpi.ResultCell;
  }
}
