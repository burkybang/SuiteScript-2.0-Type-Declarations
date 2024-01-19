/**
 * SuiteScript format module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388721627}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388721627.html}
 *
 * @module N/format
 * @NApiVersion 2.x
 */
interface format {

  /**
   * Parse a value from the appropriate preference formatted-value to a raw value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
   *
   * @param options
   * @param options.value the data you wish to parse
   * @param options.type the field type i.e. DATE, DATETIME
   * @param [options.timezone] (applicable to type DATETIME only) specifies which timezone the value is from. Default is the timezone set in the user's preferences
   * @return If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  parse(options: {
    value: string,
    type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
      | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
    timezone?: format.Timezone | `${format.Timezone}`,
  }): Date;

  /**
   * Parse a value from the appropriate preference formatted-value to a raw value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
   *
   * @param options
   * @param options.value the data you wish to parse
   * @param options.type the field type i.e. DATE, CURRENCY, INTEGER
   * @param [options.timezone] (applicable to type DATETIME only) specifies which timezone the value is from. Default is the timezone set in the user's preferences
   * @return If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  parse(options: {
    value: string | number | boolean,
    type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>
      | `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
  }): string | number;

  /**
   * Parse a value from the appropriate preference formatted-value to a raw value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
   *
   * @param value the data you wish to parse
   * @param type the field type i.e. DATE, CURRENCY, INTEGER
   * @return If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  parse(
    value: string,
    type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
      | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
  ): Date;

  /**
   * Parse a value from the appropriate preference formatted-value to a raw value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
   *
   * @param value the data you wish to parse
   * @param type the field type i.e. DATE, CURRENCY, INTEGER
   * @return If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  parse(
    value: string | number | boolean,
    type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ> |
      `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
  ): string | number;

  /**
   * Parse a value from the raw value to its appropriate preference formatted-value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
   *
   * @param options
   * @param options.value the data you wish to format
   * @param options.type the field type i.e. DATE, CURRENCY, INTEGER
   * @param [options.timezone] (applicable to type DATETIME only) specifies which timezone to format to. Default is the timezone set in the user's preferences
   * @return If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  format(options: {
    value: Date,
    type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
      | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
    timezone?: format.Timezone | `${format.Timezone}`,
  }): string;

  /**
   * Parse a value from the raw value to its appropriate preference formatted-value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
   *
   * @param options
   * @param options.value the data you wish to format
   * @param options.type the field type i.e. DATE, CURRENCY, INTEGER
   * @param [options.timezone] (applicable to type DATETIME only) specifies which timezone to format to. Default is the timezone set in the user's preferences
   * @return If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  format(options: {
    value: string | number | boolean,
    type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>
      | `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
  }): string;

  /**
   * Parse a value from the raw value to its appropriate preference formatted-value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
   *
   * @param value the data you wish to format
   * @param type the field type i.e. DATE, CURRENCY, INTEGER
   * @return If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  format(
    value: Date,
    type: format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ
      | `${format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ}`,
  ): string;

  /**
   * Parse a value from the raw value to its appropriate preference formatted-value.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388843892.html}
   *
   * @param value the data you wish to format
   * @param type the field type i.e. DATE, CURRENCY, INTEGER
   * @return If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  format(
    value: string | number | boolean,
    type: Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>
      | `${Exclude<format.Type, format.Type.DATE | format.Type.DATETIME | format.Type.DATETIMETZ>}`,
  ): string;
}

declare namespace format {

  /**
   * Enum for field types
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388844232}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388844232.html}
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
    PERCENT = 'percent',
    PHONE = 'phone',
    POSCURRENCY = 'poscurrency',
    POSFLOAT = 'posfloat',
    POSINTEGER = 'posinteger',
    QUOTEDFUNCTION = '\'function\'',
    RADIO = 'radio',
    RATE = 'rate',
    RATEHIGHPRECISION = 'ratehighprecision',
    SELECT = 'select',
    TEXT = 'text',
    TEXTAREA = 'textarea',
    TIME = 'time',
    TIMEOFDAY = 'timeofday',
    TIMETRACK = 'timetrack',
    URL = 'url',
  }

  /**
   * Enum for Time Zones
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407050795}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4407050795.html}
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