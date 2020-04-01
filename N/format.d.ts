/**
 * SuiteScript format module
 *
 * @module N/format
 * @NApiVersion 2.x
 *
 */

interface format {
  
  /**
   * Parse a value from the appropriate preference formatted-value to a raw value.
   *
   * @param {Object} options
   * @param {string} options.value the data you wish to parse
   * @param {string} options.type the field type i.e. DATE, CURRENCY, INTEGER
   * @param {string} options.timezone (optional & applicable to type DATETIME only) specifies which timezone the value is from.
   *                                  default is the timezone set in the user's preferences
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @return {Date|string|number} If parseable, the parsed value. If not or given an invalid Type, the value passed in options.value
   *
   * @since 2015.2
   */
  parse(options)
  
  /**
   * Parse a value from the raw value to its appropriate preference formatted-value.
   *
   * @param {Object} options
   * @param {Date|string|number} options.value the data you wish to format
   * @param {string} options.type the field type i.e. DATE, CURRENCY, INTEGER
   * @param {string} options.timezone (optional & applicable to type DATETIME only) specifies which timezone to format to.
   *                                  default is the timezone set in the user's preferences
   *
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if either value or type is missing
   *
   * @return {string} If format-able, the formatted value. If not or given an invalid Type, the value passed in options.value
   *
   * @since 2015.2
   */
  format(options)
}

declare namespace format {
  
  /**
   * Enum for field types.
   * @enum {string}
   */
  export enum Type {
    DATE = 'date',
    TIME = 'time',
    TIMETRACK = 'timetrack',
    TIMEOFDAY = 'timeofday',
    DATETIME = 'datetime',
    DATETIMETZ = 'datetimetz',
    INTEGER = 'integer',
    POSINTEGER = 'posinteger',
    PERCENT = 'percent',
    RATE = 'rate',
    RATEHIGHPRECISION = 'ratehighprecision',
    FLOAT = 'float',
    POSFLOAT = 'posfloat',
    NONNEGFLOAT = 'nonnegfloat',
    POSCURRENCY = 'poscurrency',
    NONNEGCURRENCY = 'nonnegcurrency',
    CURRENCY = 'currency',
    CURRENCY2 = 'currency2',
    EMAIL = 'email',
    EMAILS = 'emails',
    URL = 'url',
    CHECKBOX = 'checkbox',
    CCNUMBER = 'ccnumber',
    RADIO = 'radio',
    PHONE = 'phone',
    FULLPHONE = 'fullphone',
    IDENTIFIER = 'identifier',
    IDENTIFIERANYCASE = 'identifieranycase',
    FUNCTION = 'function',
    QUOTEDFUNCTION = 'function',
    MMYYDATE = 'mmyydate',
    CCEXPDATE = 'ccexpdate',
    CCVALIDFROM = 'ccvalidfrom',
    COLOR = 'color',
    PACKAGE = 'package',
    FURIGANA = 'furigana',
    ADDRESS = 'address',
    TEXT = 'text',
  }
  
  /**
   * Enum for Time Zones.
   * @enum {string}
   */
  export enum Timezone {
    ETC_GMT_PLUS_12 = 'Etc/GMT+12',
    PACIFIC_SAMOA = 'Pacific/Samoa',
    PACIFIC_HONOLULU = 'Pacific/Honolulu',
    AMERICA_ANCHORAGE = 'America/Anchorage',
    AMERICA_LOS_ANGELES = 'America/Los_Angeles',
    AMERICA_TIJUANA = 'America/Tijuana',
    AMERICA_DENVER = 'America/Denver',
    AMERICA_PHOENIX = 'America/Phoenix',
    AMERICA_CHIHUAHUA = 'America/Chihuahua',
    AMERICA_CHICAGO = 'America/Chicago',
    AMERICA_REGINA = 'America/Regina',
    AMERICA_GUATEMALA = 'America/Guatemala',
    AMERICA_MEXICO_CITY = 'America/Mexico_City',
    AMERICA_NEW_YORK = 'America/New_York',
    US_EAST_INDIANA = 'US/East-Indiana',
    AMERICA_BOGOTA = 'America/Bogota',
    AMERICA_CARACAS = 'America/Caracas',
    AMERICA_HALIFAX = 'America/Halifax',
    AMERICA_LA_PAZ = 'America/La_Paz',
    AMERICA_MANAUS = 'America/Manaus',
    AMERICA_SANTIAGO = 'America/Santiago',
    AMERICA_ST_JOHNS = 'America/St_Johns',
    AMERICA_SAO_PAULO = 'America/Sao_Paulo',
    AMERICA_BUENOS_AIRES = 'America/Buenos_Aires',
    ETC_GMT_PLUS_3 = 'Etc/GMT+3',
    AMERICA_GODTHAB = 'America/Godthab',
    AMERICA_MONTEVIDEO = 'America/Montevideo',
    AMERICA_NORONHA = 'America/Noronha',
    ETC_GMT_PLUS_1 = 'Etc/GMT+1',
    ATLANTIC_AZORES = 'Atlantic/Azores',
    EUROPE_LONDON = 'Europe/London',
    GMT = 'GMT',
    ATLANTIC_REYKJAVIK = 'Atlantic/Reykjavik',
    EUROPE_WARSAW = 'Europe/Warsaw',
    EUROPE_PARIS = 'Europe/Paris',
    ETC_GMT_MINUS_1 = 'Etc/GMT-1',
    EUROPE_AMSTERDAM = 'Europe/Amsterdam',
    EUROPE_BUDAPEST = 'Europe/Budapest',
    AFRICA_CAIRO = 'Africa/Cairo',
    EUROPE_ISTANBUL = 'Europe/Istanbul',
    ASIA_JERUSALEM = 'Asia/Jerusalem',
    ASIA_AMMAN = 'Asia/Amman',
    ASIA_BEIRUT = 'Asia/Beirut',
    AFRICA_JOHANNESBURG = 'Africa/Johannesburg',
    EUROPE_KIEV = 'Europe/Kiev',
    EUROPE_MINSK = 'Europe/Minsk',
    AFRICA_WINDHOEK = 'Africa/Windhoek',
    ASIA_RIYADH = 'Asia/Riyadh',
    EUROPE_MOSCOW = 'Europe/Moscow',
    ASIA_BAGHDAD = 'Asia/Baghdad',
    AFRICA_NAIROBI = 'Africa/Nairobi',
    ASIA_TEHRAN = 'Asia/Tehran',
    ASIA_MUSCAT = 'Asia/Muscat',
    ASIA_BAKU = 'Asia/Baku',
    ASIA_YEREVAN = 'Asia/Yerevan',
    ETC_GMT_MINUS_3 = 'Etc/GMT-3',
    ASIA_KABUL = 'Asia/Kabul',
    ASIA_KARACHI = 'Asia/Karachi',
    ASIA_YEKATERINBURG = 'Asia/Yekaterinburg',
    ASIA_TASHKENT = 'Asia/Tashkent',
    ASIA_CALCUTTA = 'Asia/Calcutta',
    ASIA_KATMANDU = 'Asia/Katmandu',
    ASIA_ALMATY = 'Asia/Almaty',
    ASIA_DHAKA = 'Asia/Dhaka',
    ASIA_RANGOON = 'Asia/Rangoon',
    ASIA_BANGKOK = 'Asia/Bangkok',
    ASIA_KRASNOYARSK = 'Asia/Krasnoyarsk',
    ASIA_HONG_KONG = 'Asia/Hong_Kong',
    ASIA_KUALA_LUMPUR = 'Asia/Kuala_Lumpur',
    ASIA_TAIPEI = 'Asia/Taipei',
    AUSTRALIA_PERTH = 'Australia/Perth',
    ASIA_IRKUTSK = 'Asia/Irkutsk',
    ASIA_MANILA = 'Asia/Manila',
    ASIA_SEOUL = 'Asia/Seoul',
    ASIA_TOKYO = 'Asia/Tokyo',
    ASIA_YAKUTSK = 'Asia/Yakutsk',
    AUSTRALIA_DARWIN = 'Australia/Darwin',
    AUSTRALIA_ADELAIDE = 'Australia/Adelaide',
    AUSTRALIA_SYDNEY = 'Australia/Sydney',
    AUSTRALIA_BRISBANE = 'Australia/Brisbane',
    AUSTRALIA_HOBART = 'Australia/Hobart',
    PACIFIC_GUAM = 'Pacific/Guam',
    ASIA_VLADIVOSTOK = 'Asia/Vladivostok',
    ASIA_MAGADAN = 'Asia/Magadan',
    PACIFIC_KWAJALEIN = 'Pacific/Kwajalein',
    PACIFIC_AUCKLAND = 'Pacific/Auckland',
    PACIFIC_TONGATAPU = 'Pacific/Tongatapu',
  }
}