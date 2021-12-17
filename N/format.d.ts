/**
 * SuiteScript format module
 * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388721627}
 *
 * @module N/format
 * @NApiVersion 2.x
 */
interface format {

  /**
   * Parse a value from the appropriate preference formatted-value to a raw value.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
   *
   * @param {string|number|boolean} value the data you wish to parse
   * @param {format.Type|string} type the field type i.e. DATE, CURRENCY, INTEGER
   * @return {Date|string|number} If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  parse(
    value: string | number | boolean,
    type: format.Type | string,
  ): Date | string | number;

  /**
   * Parse a value from the appropriate preference formatted-value to a raw value.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
   *
   * @param {Object} options
   * @param {string|number|boolean} options.value the data you wish to parse
   * @param {format.Type|string} options.type the field type i.e. DATE, CURRENCY, INTEGER
   * @param {format.Timezone} [options.timezone] (applicable to type DATETIME only) specifies which timezone the value is from.
   *                                  default is the timezone set in the user's preferences
   * @return {Date|string|number} If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  parse(options: {
    value: string | number | boolean,
    type: format.Type | string,
    timezone?: format.Timezone | string,
  }): Date | string | number;

  /**
   * Parse a value from the raw value to its appropriate preference formatted-value.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
   *
   * @param {Date|string|number|boolean} value the data you wish to format
   * @param {format.Type|string} type the field type i.e. DATE, CURRENCY, INTEGER
   * @return {string} If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  format(
    value: Date | string | number | boolean,
    type: format.Type | string,
  ): string;

  /**
   * Parse a value from the raw value to its appropriate preference formatted-value.
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388843892}
   *
   * @param {Object} options
   * @param {Date|string|number|boolean} options.value the data you wish to format
   * @param {format.Type} options.type the field type i.e. DATE, CURRENCY, INTEGER
   * @param {format.Timezone} [options.timezone] (applicable to type DATETIME only) specifies which timezone to format to.
   *                                  default is the timezone set in the user's preferences
   * @return {string} If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @since 2015.2
   */
  format(options: {
    value: Date | string | number | boolean,
    type: format.Type,
    timezone?: format.Timezone | string,
  }): string;
}

declare namespace format {

  /**
   * Enum for field types
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388844232}
   *
   * @enum {string}
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
   * @see [Help Center]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4407050795}
   *
   * @enum {string}
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