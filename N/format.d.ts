/// <reference path="./error.d.ts" />
/// <reference path="./format/i18n.d.ts" />

/**
 * SuiteScript format module
 *
 * Provides preference-aware formatting and parsing for NetSuite field-typed
 * values. Use `format.format()` to convert raw values to their formatted-string
 * representation (per the user's date/number-format preferences), and
 * `format.parse()` to convert formatted strings back to their raw values.
 *
 * The `format.i18n` submodule is exposed as a direct property (so
 * `format.i18n.spellOut(...)` is equivalent to `require('N/format/i18n')`
 * followed by the same call) — both forms resolve to the same singleton.
 *
 * Note on timezone semantics: for `DATETIMETZ` values, the `timezone` option
 * controls the formatted output's offset. For `DATETIME` values, the
 * `timezone` option is silently IGNORED at runtime despite Help Center
 * documentation stating otherwise — the formatted output uses the script's
 * own context timezone (server scripts: Pacific; client scripts: user's
 * system time).
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388721627}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388721627.html}
 *
 * @module N/format
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface format {

  parse: {

    /**
     * Parses a formatted string value back to its raw value, using the formatting
     * rules implied by the field `type`. The appropriate preference format is
     * the one selected at *Home > Set Preferences*.
     *
     * For `DATETIME` and `DATETIMETZ` values, the returned `Date` reflects the
     * parsed instant in the specified `timezone` (or the user's preference
     * timezone if omitted). For `DATETIME` (without `TZ`), the `timezone` option
     * is silently ignored.
     *
     * If `value` cannot be parsed as the requested `type` (or `type` is unknown),
     * the runtime returns `options.value` unchanged — so the return type is a
     * union of the parsed form (`Date` for date types) and the input string.
     *
     * Note on the truthy-check bug: `value: false`, `value: ''`, `value: null`,
     * and `value: undefined` all trigger `SSS_MISSING_REQD_ARGUMENT`. The
     * runtime treats every JS-falsy value EXCEPT `0` as "missing" before the
     * method body runs. `value: 0` is accepted and stringified to `"0"`
     * pre-parse.
     *
     * Note on `CHECKBOX` parsing strictness: only the exact string `'T'`
     * (uppercase) returns `true`. Every other string — `'t'`, `'1'`, `'yes'`,
     * `'true'`, etc. — returns `false`. This is undocumented.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.value The formatted string to parse.
     * @param options.type The field type (e.g. `DATE`, `DATETIME`, `DATETIMETZ`). Accepts a `format.Type` enum value or its literal-string equivalent (e.g. `format.Type.DATE` or `'date'`).
     * @param [options.timezone] (`DATETIMETZ` only) The time zone the string represents. Accepts a `format.Timezone` enum value or its literal-string equivalent. If omitted, the user-preference timezone is used. If invalid, the runtime silently falls back to `GMT`. Silently ignored for `DATETIME` and non-datetime types.
     * @return The parsed `Date` if `value` parses as a date type; otherwise `options.value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.value` or `options.type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (options: {
      value: string,
      type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
        | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
      timezone?: format.Timezone | `${format.Timezone}`,
    }): Date | string;

    /**
     * Parses a formatted string value back to its raw value for non-date field
     * types. Numeric types return `number`; checkbox returns `boolean`; text-like
     * types return `string`.
     *
     * If `value` cannot be parsed (e.g. a malformed numeric, an unknown `type`,
     * or a value that doesn't match the type's expected format), the runtime
     * returns `options.value` unchanged.
     *
     * Note on the truthy-check bug: `value: false`, `value: ''`, `value: null`,
     * and `value: undefined` all trigger `SSS_MISSING_REQD_ARGUMENT`. The
     * runtime treats every JS-falsy value EXCEPT `0` as "missing" before the
     * method body runs.
     *
     * Note on `CHECKBOX` parsing strictness: only the exact string `'T'`
     * (uppercase) returns `true`. Every other string — `'t'`, `'1'`, `'yes'`,
     * `'true'`, etc. — returns `false`. This is undocumented.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.value The formatted string to parse.
     * @param options.type The field type (e.g. `INTEGER`, `FLOAT`, `CURRENCY`, `CHECKBOX`). Excludes date types — use the date-typed overload for those. Accepts a `format.Type` enum value or its literal-string equivalent.
     * @return The parsed value (`number` for numeric types, `boolean` for checkbox, `string` for text-like) if parseable; otherwise `options.value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.value` or `options.type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (options: {
      value: string | number | Date,
      type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>
        | `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
    }): string | number | boolean;

    /**
     * Undocumented positional-form overload of `format.parse` for date types
     * (`DATE`, `DATETIME`, `DATETIMETZ`). Functionally equivalent to the
     * options-bag form; arguments map positionally to `options.value`,
     * `options.type`, and `options.timezone`.
     *
     * Undocumented in the Help Center; present at runtime. The function's
     * declared arity is 2 — the timezone argument is accepted via the
     * arguments object.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param value The formatted string to parse.
     * @param type The date field type. Accepts a `format.Type` enum value or its literal-string equivalent.
     * @param [timezone] (`DATETIMETZ` only) The time zone the string represents. Same semantics as the options-bag form's `timezone` parameter.
     * @return The parsed `Date` if `value` parses as a date type; otherwise `value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `value` or `type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (
      value: string,
      type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
        | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
      timezone?: format.Timezone | `${format.Timezone}`,
    ): Date | string;

    /**
     * Undocumented positional-form overload of `format.parse` for non-date field
     * types. Functionally equivalent to the options-bag form; arguments map
     * positionally to `options.value` and `options.type`.
     *
     * Undocumented in the Help Center; present at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param value The formatted string to parse.
     * @param type The non-date field type. Accepts a `format.Type` enum value or its literal-string equivalent.
     * @return The parsed value (`number` for numeric types, `boolean` for checkbox, `string` for text-like) if parseable; otherwise `value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `value` or `type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (
      value: string | number | Date,
      type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>
        | `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
    ): string | number | boolean;
  };

  format: {

    /**
     * Formats a raw value as its preference-formatted string representation,
     * using the formatting rules implied by the field `type`. For `DATETIMETZ`,
     * the `timezone` option controls the formatted output's offset.
     *
     * If `value` cannot be formatted as the requested `type` (or `type` is
     * unknown), the runtime returns `options.value` unchanged — so the return
     * type is a union of `string` and the input type.
     *
     * Note on the truthy-check bug: `value: false`, `value: ''`, `value: null`,
     * and `value: undefined` all trigger `SSS_MISSING_REQD_ARGUMENT`. `value: 0`
     * is accepted and formats as `"0"` for numeric types.
     *
     * Note on context-timezone differences: for client scripts, the formatted
     * string reflects the user's system time. For server scripts (and
     * scheduled, user-event, RESTlet, etc.), the formatted string reflects the
     * current time in Pacific Time. Daylight Savings Time is respected.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.value The raw value to format.
     * @param options.type The date field type. Accepts a `format.Type` enum value or its literal-string equivalent.
     * @param [options.timezone] (`DATETIMETZ` only) The time zone for the formatted output. Accepts a `format.Timezone` enum value or its literal-string equivalent. If omitted, the user-preference timezone is used. If invalid, the runtime silently falls back to `GMT`. Silently ignored for `DATETIME` and non-datetime types despite Help Center claims to the contrary.
     * @return The formatted string if `value` is format-able; otherwise `options.value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.value` or `options.type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (options: {
      value: Date | string | number,
      type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
        | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
      timezone?: format.Timezone | `${format.Timezone}`,
    }): string | Date;

    /**
     * Formats a raw value as its preference-formatted string representation for
     * non-date field types. Numeric values format as locale-aware strings;
     * checkbox values format as `'T'` or `'F'`; text-like types format with any
     * `type`-specific decoration (e.g. `PERCENT` appends `%`).
     *
     * If `value` cannot be formatted (e.g. for an unknown `type`, or for a
     * value that doesn't match the type's expectations), the runtime returns
     * `options.value` unchanged.
     *
     * Note on the truthy-check bug: `value: false`, `value: ''`, `value: null`,
     * and `value: undefined` all trigger `SSS_MISSING_REQD_ARGUMENT`. `value: 0`
     * is accepted and formats as `"0"` for numeric types.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.value The raw value to format.
     * @param options.type The non-date field type. Excludes date types — use the date-typed overload for those. Accepts a `format.Type` enum value or its literal-string equivalent.
     * @return The formatted string if `value` is format-able; otherwise `options.value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.value` or `options.type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (options: {
      value: Date | string | number,
      type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>
        | `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
    }): string | Date | number;

    /**
     * Undocumented positional-form overload of `format.format` for date types.
     * Functionally equivalent to the options-bag form; arguments map
     * positionally to `options.value`, `options.type`, and `options.timezone`.
     *
     * Undocumented in the Help Center; present at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param value The raw value to format.
     * @param type The date field type. Accepts a `format.Type` enum value or its literal-string equivalent.
     * @param [timezone] (`DATETIMETZ` only) The time zone for the formatted output. Same semantics as the options-bag form's `timezone` parameter.
     * @return The formatted string if `value` is format-able; otherwise `value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `value` or `type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (
      value: Date | string | number,
      type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
        | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
      timezone?: format.Timezone | `${format.Timezone}`,
    ): string | Date;

    /**
     * Undocumented positional-form overload of `format.format` for non-date
     * field types. Functionally equivalent to the options-bag form; arguments
     * map positionally to `options.value` and `options.type`.
     *
     * Undocumented in the Help Center; present at runtime.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param value The raw value to format.
     * @param type The non-date field type. Accepts a `format.Type` enum value or its literal-string equivalent.
     * @return The formatted string if `value` is format-able; otherwise `value` unchanged.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `value` or `type` is missing/null/`false`/empty-string (pre-validation; not governance-billed).
     */
    (
      value: Date | string | number,
      type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>
        | `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
    ): string | Date | number;
  };

  /**
   * Direct access to the `N/format/i18n` submodule. Equivalent to importing
   * `N/format/i18n` separately — the runtime exposes the same singleton
   * instance via both paths.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  i18n: i18n;
}

declare namespace format {

  /**
   * Holds the string values for the supported field types. Use this enum
   * to set the value of the `options.type` parameter when calling
   * `format.format()` or `format.parse()`.
   *
   * Members `DURATION`, `PASSWORD`, `PUBLISHER_ID`, `RICHTEXT`, `RTEXT`,
   * `SSNUMBER`, `STRING`, and `SUBRECORD_FIELD_TYPE` are present at runtime
   * but undocumented in the Help Center.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388844232}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388844232.html}
   *
   * @since 2015.2
   */
  export enum Type {
    ADDRESS = 'address',
    CCEXPDATE = 'ccexpdate',
    CCNUMBER = 'ccnumber',
    CCVALIDFROM = 'ccvalidfrom',
    CHECKBOX = 'checkbox',
    CLOBTEXT = 'clobtext',
    COLOR = 'color',
    CURRENCY = 'currency',
    CURRENCY2 = 'currency2',
    DATE = 'date',
    DATETIME = 'datetime',
    DATETIMETZ = 'datetimetz',
    DOCUMENT = 'document',
    DURATION = 'duration',
    DYNAMICPRECISION = 'dynamicprecision',
    EMAIL = 'email',
    EMAILS = 'emails',
    FLOAT = 'float',
    FULLPHONE = 'fullphone',
    FUNCTION = 'function',
    FURIGANA = 'furigana',
    IDENTIFIER = 'identifier',
    IDENTIFIERANYCASE = 'identifieranycase',
    INTEGER = 'integer',
    MMYYDATE = 'mmyydate',
    MULTISELECT = 'multiselect',
    NONNEGCURRENCY = 'nonnegcurrency',
    NONNEGFLOAT = 'nonnegfloat',
    PACKAGE = 'package',
    PASSWORD = 'password',
    PERCENT = 'percent',
    PHONE = 'phone',
    POSCURRENCY = 'poscurrency',
    POSFLOAT = 'posfloat',
    POSINTEGER = 'posinteger',
    PUBLISHER_ID = 'publisher_id',
    QUOTEDFUNCTION = '\'function\'',
    RADIO = 'radio',
    RATE = 'rate',
    RATEHIGHPRECISION = 'ratehighprecision',
    RICHTEXT = 'richtext',
    RTEXT = 'rtext',
    SELECT = 'select',
    SSNUMBER = 'ssnumber',
    STRING = 'string',
    SUBRECORD_FIELD_TYPE = 'summary',
    TEXT = 'text',
    TEXTAREA = 'textarea',
    TIME = 'time',
    TIMEOFDAY = 'timeofday',
    TIMETRACK = 'timetrack',
    URL = 'url',
  }

  /**
   * Holds the string values for the supported time zones. Use this enum to
   * set the value of the `options.timezone` parameter when calling
   * `format.format()` or `format.parse()` for `DATETIMETZ` values.
   *
   * The runtime accepts both enum values (e.g. `format.Timezone.AMERICA_NEW_YORK`)
   * and their literal-string equivalents (e.g. `'America/New_York'`). Invalid
   * timezone strings silently fall back to `GMT`. Non-string non-enum values
   * (e.g. numbers) are silently ignored despite the Help Center documenting
   * `number` as a valid type for `format.format()`'s timezone parameter.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407050795}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407050795.html}
   *
   * @since 2015.2
   */
  export enum Timezone {
    AFRICA_CAIRO = 'Africa/Cairo',
    AFRICA_JOHANNESBURG = 'Africa/Johannesburg',
    AFRICA_NAIROBI = 'Africa/Nairobi',
    AFRICA_WINDHOEK = 'Africa/Windhoek',
    AMERICA_ANCHORAGE = 'America/Anchorage',
    AMERICA_BOGOTA = 'America/Bogota',
    AMERICA_BUENOS_AIRES = 'America/Buenos_Aires',
    AMERICA_CARACAS = 'America/Caracas',
    AMERICA_CHICAGO = 'America/Chicago',
    AMERICA_CHIHUAHUA = 'America/Chihuahua',
    AMERICA_DENVER = 'America/Denver',
    AMERICA_GODTHAB = 'America/Godthab',
    AMERICA_GUATEMALA = 'America/Guatemala',
    AMERICA_HALIFAX = 'America/Halifax',
    AMERICA_HERMOSILLO = 'America/Hermosillo',
    AMERICA_LA_PAZ = 'America/La_Paz',
    AMERICA_LOS_ANGELES = 'America/Los_Angeles',
    AMERICA_MANAUS = 'America/Manaus',
    AMERICA_MEXICO_CITY = 'America/Mexico_City',
    AMERICA_MONTEVIDEO = 'America/Montevideo',
    AMERICA_NEW_YORK = 'America/New_York',
    AMERICA_NORONHA = 'America/Noronha',
    AMERICA_PHOENIX = 'America/Phoenix',
    AMERICA_REGINA = 'America/Regina',
    AMERICA_SANTIAGO = 'America/Santiago',
    AMERICA_SAO_PAULO = 'America/Sao_Paulo',
    AMERICA_ST_JOHNS = 'America/St_Johns',
    AMERICA_TIJUANA = 'America/Tijuana',
    ASIA_ALMATY = 'Asia/Almaty',
    ASIA_AMMAN = 'Asia/Amman',
    ASIA_BAGHDAD = 'Asia/Baghdad',
    ASIA_BAKU = 'Asia/Baku',
    ASIA_BANGKOK = 'Asia/Bangkok',
    ASIA_BEIRUT = 'Asia/Beirut',
    ASIA_CALCUTTA = 'Asia/Calcutta',
    ASIA_DHAKA = 'Asia/Dhaka',
    ASIA_HONG_KONG = 'Asia/Hong_Kong',
    ASIA_IRKUTSK = 'Asia/Irkutsk',
    ASIA_JERUSALEM = 'Asia/Jerusalem',
    ASIA_KABUL = 'Asia/Kabul',
    ASIA_KARACHI = 'Asia/Karachi',
    ASIA_KATMANDU = 'Asia/Katmandu',
    ASIA_KRASNOYARSK = 'Asia/Krasnoyarsk',
    ASIA_KUALA_LUMPUR = 'Asia/Kuala_Lumpur',
    ASIA_MANILA = 'Asia/Manila',
    ASIA_MUSCAT = 'Asia/Muscat',
    ASIA_RANGOON = 'Asia/Rangoon',
    ASIA_RIYADH = 'Asia/Riyadh',
    ASIA_SEOUL = 'Asia/Seoul',
    ASIA_TAIPEI = 'Asia/Taipei',
    ASIA_TASHKENT = 'Asia/Tashkent',
    ASIA_TEHRAN = 'Asia/Tehran',
    ASIA_TOKYO = 'Asia/Tokyo',
    ASIA_VLADIVOSTOK = 'Asia/Vladivostok',
    ASIA_YAKUTSK = 'Asia/Yakutsk',
    ASIA_YEKATERINBURG = 'Asia/Yekaterinburg',
    ASIA_YEREVAN = 'Asia/Yerevan',
    ATLANTIC_AZORES = 'Atlantic/Azores',
    ATLANTIC_REYKJAVIK = 'Atlantic/Reykjavik',
    AUSTRALIA_ADELAIDE = 'Australia/Adelaide',
    AUSTRALIA_BRISBANE = 'Australia/Brisbane',
    AUSTRALIA_DARWIN = 'Australia/Darwin',
    AUSTRALIA_HOBART = 'Australia/Hobart',
    AUSTRALIA_PERTH = 'Australia/Perth',
    AUSTRALIA_SYDNEY = 'Australia/Sydney',
    ETC_GMT_MINUS_1 = 'Etc/GMT-1',
    ETC_GMT_MINUS_3 = 'Etc/GMT-3',
    ETC_GMT_PLUS_1 = 'Etc/GMT+1',
    ETC_GMT_PLUS_3 = 'Etc/GMT+3',
    ETC_GMT_PLUS_12 = 'Etc/GMT+12',
    EUROPE_AMSTERDAM = 'Europe/Amsterdam',
    EUROPE_BUDAPEST = 'Europe/Budapest',
    EUROPE_HELSINKI = 'Europe/Helsinki',
    EUROPE_ISTANBUL = 'Europe/Istanbul',
    EUROPE_KIEV = 'Europe/Kiev',
    EUROPE_LONDON = 'Europe/London',
    EUROPE_MINSK = 'Europe/Minsk',
    EUROPE_MOSCOW = 'Europe/Moscow',
    EUROPE_PARIS = 'Europe/Paris',
    EUROPE_WARSAW = 'Europe/Warsaw',
    GMT = 'GMT',
    PACIFIC_AUCKLAND = 'Pacific/Auckland',
    PACIFIC_GUADALCANAL = 'Pacific/Guadalcanal',
    PACIFIC_GUAM = 'Pacific/Guam',
    PACIFIC_HONOLULU = 'Pacific/Honolulu',
    PACIFIC_KWAJALEIN = 'Pacific/Kwajalein',
    PACIFIC_SAMOA = 'Pacific/Samoa',
    PACIFIC_TONGATAPU = 'Pacific/Tongatapu',
    US_EAST_INDIANA = 'US/East-Indiana',
  }
}
