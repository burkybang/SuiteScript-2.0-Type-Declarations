/// <reference path="../error.d.ts" />

/**
 * SuiteScript i18n module
 *
 * Provides locale-aware formatting and parsing for numbers, currencies, and
 * phone numbers, plus a number-to-words spelling helper. All members are
 * exposed both via `require('N/format/i18n')` and as the `i18n` property of
 * the `N/format` module (`format.i18n` and `require('N/format/i18n')` resolve
 * to the same singleton instance).
 *
 * Locale identifiers accepted on input use BCP-47 form with either hyphen or
 * underscore separators (e.g. `'en-US'` or `'en_US'`). Locale identifiers
 * returned from formatter properties use NetSuite's internal underscore form
 * (e.g. `'en_US'`, `'fr_FR_EURO'`).
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543861741}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543861741.html}
 *
 * @module N/format/i18n
 * @NApiVersion 2.x
 *
 * @restriction Client-side and server-side scripts
 */
interface i18n {

  /**
   * The maximum length permitted for phone-number field values.
   *
   * Typed `string` because the runtime exposes the value as a string (e.g.
   * `'32'`), not a number — call `parseInt(i18n.PhoneFieldMaxLength)` if a
   * numeric comparison is needed.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  readonly PhoneFieldMaxLength: string;

  /**
   * The country code of the current subsidiary, in NetSuite's 2-letter ISO
   * form (e.g. `'US'`). Drives the default `defaultCountry` value on parsers
   * created with no explicit `defaultCountry` option.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  readonly SubsidiaryCountry: string;

  /**
   * Spells out a number as words in the specified locale (e.g.
   * `spellOut({number: 42})` returns `'forty-two'`; with `locale: 'fr'`,
   * returns `'quarante-deux'`). Negative numbers, zero, and decimal values
   * are supported.
   *
   * The `number` option MUST be an actual JS `number`. Passing a string
   * (e.g. `'42'`) errors with `SSS_INVALID_TYPE_ARG` even though the value
   * is numeric. The Help Center documents `number` as type `number` but
   * the existing type file claimed `string`; the type file was wrong.
   *
   * Invalid locales silently fall back to English; no error is thrown.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1549297222}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1549297222.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.number The number to spell out.
   * @param [options.locale] BCP-47 locale tag (e.g. `'en'`, `'fr'`, `'en-US'`). Underscore form (`'en_US'`) also accepted. If omitted or invalid, English is used.
   * @return The spelled-out form of `number` in `locale`'s language.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.number` is missing/null.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.number` is not a JS number, or `options.locale` is not a string.
   */
  spellOut(options: {
    number: number,
    locale?: string,
  }): string;

  /**
   * Creates a `CurrencyFormatter` configured for a specific currency or locale.
   * Exactly one of `currency` or `locale` must be provided — both is an error,
   * neither is an error.
   *
   * When `currency` is specified, the formatter uses that currency's symbol
   * and the account's default locale. When `locale` is specified, the
   * formatter uses the locale's default currency (e.g. `'de-DE'` → EUR,
   * `'ja-JP'` → JPY) and locale-appropriate number formatting (group
   * separator, decimal separator, negative-number style).
   *
   * The `Currency` enum lists all ISO currency codes the type system
   * supports, but at runtime only currencies enabled in the current
   * account are valid — passing an enabled-elsewhere code (e.g. `'JPY'`
   * in an account where JPY isn't enabled) errors with
   * `SSS_INVALID_CURRENCY_ID`. The locale form bypasses this check
   * (i.e. `{locale: 'ja-JP'}` works even when JPY isn't enabled, returning
   * a formatter with `currency: 'JPY'`).
   *
   * Malformed-but-unrecognized locales (e.g. `'xx-XX'`) silently fall back
   * to defaults — the formatter is returned without error. Only locales
   * the platform fails to parse at all (e.g. `'bogus-locale'`) raise
   * `INVALID_LOCALE`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023369}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023369.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.currency An enabled currency code (e.g. `i18n.Currency.USD` or `'USD'`). Mutually exclusive with `options.locale`.
   * @return A `CurrencyFormatter` configured with the resolved currency, locale, symbol, and embedded `NumberFormatter`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.currency` is missing/null/empty string.
   * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If both `options.currency` and `options.locale` are missing or null.
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If both `options.currency` and `options.locale` are provided.
   * @throws {error.SuiteScriptError} SSS_INVALID_CURRENCY_ID If `options.currency` is not a recognized currency, or is not enabled in the current account.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.currency` is not a string.
   */
  getCurrencyFormatter(options: {
    currency: i18n.Currency | `${i18n.Currency}`,
  }): i18n.CurrencyFormatter;

  /**
   * Creates a `CurrencyFormatter` configured from a locale's default currency.
   * Exactly one of `currency` or `locale` must be provided — both is an
   * error, neither is an error.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023369}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023369.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.1
   *
   * @param options
   * @param options.locale A BCP-47 locale tag (e.g. `'de-DE'`, `'ja-JP'`). Mutually exclusive with `options.currency`.
   * @return A `CurrencyFormatter` configured with the locale's default currency, locale, symbol, and embedded `NumberFormatter`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.locale` is missing/null/empty string.
   * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED If both `options.currency` and `options.locale` are missing or null.
   * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS If both `options.currency` and `options.locale` are provided.
   * @throws {error.SuiteScriptError} INVALID_LOCALE If `options.locale` is in a form the platform cannot parse.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.locale` is not a string.
   */
  getCurrencyFormatter(options: {
    locale: string,
  }): i18n.CurrencyFormatter;

  /**
   * Creates a `NumberFormatter` configured for number-to-string formatting.
   * All options are optional — calling with no arguments returns a formatter
   * using account-default settings.
   *
   * The `locale` option is accepted at runtime but not documented in the
   * Help Center; passing a locale resolves locale-appropriate `groupSeparator`,
   * `decimalSeparator`, and `negativeNumberFormat` defaults.
   *
   * Invalid `negativeNumberFormat` values (e.g. `'BOGUS'`) and negative
   * `precision` values are silently accepted — no error, but formatting
   * behavior is unspecified for those inputs.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023913}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023913.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.2
   *
   * @param [options]
   * @param [options.groupSeparator] The character(s) used to separate groups of digits (e.g. `','` in `'1,234,567'`).
   * @param [options.decimalSeparator] The character(s) used to separate integer and fractional parts (e.g. `'.'` in `'1.5'`).
   * @param [options.precision] The number of digits after the decimal separator. Must be a JS number; strings error with `SSS_INVALID_TYPE_ARG`.
   * @param [options.negativeNumberFormat] How negative numbers are formatted. `BRACKETS` wraps in parentheses (e.g. `(100)`); `MINUS` prefixes with `-` (e.g. `-100`).
   * @param [options.locale] BCP-47 locale tag. Resolves locale-specific defaults for separators and negative-number format. Undocumented in the Help Center.
   * @return A `NumberFormatter` with the requested or default configuration.
   *
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.precision` is not a number, or `options.groupSeparator`/`options.decimalSeparator`/`options.negativeNumberFormat`/`options.locale` is not a string.
   */
  getNumberFormatter(options?: {
    groupSeparator?: string,
    decimalSeparator?: string,
    precision?: number,
    negativeNumberFormat?: i18n.NegativeNumberFormat | `${i18n.NegativeNumberFormat}`,
    locale?: string,
  }): i18n.NumberFormatter;

  /**
   * Creates a `PhoneNumberFormatter` for a given format type. Use the
   * formatter's `format()` method on `PhoneNumber` instances produced by
   * `PhoneNumberParser.parse()`.
   *
   * Passing an empty options object (`{}`) is accepted: the returned
   * formatter has `formatType: null` and formats in INTERNATIONAL style by
   * default. Passing `formatType: null` explicitly has the same effect.
   * Passing an unrecognized format-type string errors with
   * `SSS_INVALID_FORMAT_TYPE`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_20131717237}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_20131717237.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.2
   *
   * @param options
   * @param [options.formatType] The phone-number format type (e.g. `E164`, `INTERNATIONAL`, `NATIONAL`, `RFC3966`). If omitted or null, the formatter defaults to INTERNATIONAL.
   * @return A `PhoneNumberFormatter` parameterized by `FormatType`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null.
   * @throws {error.SuiteScriptError} SSS_INVALID_FORMAT_TYPE If `options.formatType` is a string that is not one of the `PhoneNumberFormatType` enum values.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.formatType` is provided as a non-string non-null value.
   */
  getPhoneNumberFormatter<FormatType extends i18n.PhoneNumberFormatType>(options: {
    formatType?: FormatType | `${FormatType}`,
  }): i18n.PhoneNumberFormatter<FormatType>;

  /**
   * Creates a `PhoneNumberParser` for parsing phone-number strings into
   * `PhoneNumber` objects. The parser's `parse()` method is the entry
   * point for actual parsing.
   *
   * Passing an empty options object (`{}`) is accepted: the parser's
   * `defaultCountry` is `null`, which means only fully-international-format
   * strings (with a leading `+CC`) can be parsed.
   *
   * If `defaultCountry` is not provided, parsers default to interpreting
   * national-format numbers in the context of the current subsidiary's
   * country (`i18n.SubsidiaryCountry`).
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_77132343780}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_77132343780.html}
   *
   * @governance none
   * @restriction Client-side and server-side scripts
   * @since 2019.2
   *
   * @param options
   * @param [options.defaultCountry] An `i18n.Country` enum value. If omitted, the subsidiary's country is used. If provided as `null` or the empty enum value (`i18n.Country.defaultCountry`), only fully-international-format numbers can be parsed.
   * @return A `PhoneNumberParser` parameterized by `DefaultCountry`.
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing or null.
   * @throws {error.SuiteScriptError} SSS_INVALID_COUNTRY_ID If `options.defaultCountry` is a string that is not one of the `Country` enum values.
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.defaultCountry` is provided as a non-string non-null value.
   */
  getPhoneNumberParser<DefaultCountry extends i18n.Country>(options: {
    defaultCountry?: DefaultCountry | `${DefaultCountry}`,
  }): i18n.PhoneNumberParser<DefaultCountry>;
}

declare namespace i18n {

  /**
   * Holds string values for the supported countries. Used as the type of
   * `options.defaultCountry` when calling `getPhoneNumberParser()`, and as
   * the `defaultCountry` property of `PhoneNumberParser` instances.
   *
   * `defaultCountry` is a runtime-added sentinel whose value reflects the
   * subsidiary's country (e.g. `'US'` in a US-rooted account). It is
   * mutable and present on the enum object itself; treat it as informational
   * rather than as a stable enum member.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626866748}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626866748.html}
   *
   * @since 2019.2
   */
  export enum Country {
    defaultCountry = '',

    AFGHANISTAN = 'AFGHANISTAN',
    ALAND_ISLANDS = 'ALAND_ISLANDS',
    ALBANIA = 'ALBANIA',
    ALGERIA = 'ALGERIA',
    AMERICAN_SAMOA = 'AMERICAN_SAMOA',
    ANDORRA = 'ANDORRA',
    ANGOLA = 'ANGOLA',
    ANGUILLA = 'ANGUILLA',
    ANTARCTICA = 'ANTARCTICA',
    ANTIGUA_AND_BARBUDA = 'ANTIGUA_AND_BARBUDA',
    ARGENTINA = 'ARGENTINA',
    ARMENIA = 'ARMENIA',
    ARUBA = 'ARUBA',
    AUSTRALIA = 'AUSTRALIA',
    AUSTRIA = 'AUSTRIA',
    AZERBAIJAN = 'AZERBAIJAN',
    BAHAMAS = 'BAHAMAS',
    BAHRAIN = 'BAHRAIN',
    BANGLADESH = 'BANGLADESH',
    BARBADOS = 'BARBADOS',
    BELARUS = 'BELARUS',
    BELGIUM = 'BELGIUM',
    BELIZE = 'BELIZE',
    BENIN = 'BENIN',
    BERMUDA = 'BERMUDA',
    BHUTAN = 'BHUTAN',
    BOLIVIA = 'BOLIVIA',
    BONAIRE = 'BONAIRE',
    BOSNIA_AND_HERZEGOVINA = 'BOSNIA_AND_HERZEGOVINA',
    BOTSWANA = 'BOTSWANA',
    BOUVET_ISLAND = 'BOUVET_ISLAND',
    BRAZIL = 'BRAZIL',
    BRITISH_INDIAN_OCEAN_TERRITORY = 'BRITISH_INDIAN_OCEAN_TERRITORY',
    BRUNEI_DARUSSALAM = 'BRUNEI_DARUSSALAM',
    BULGARIA = 'BULGARIA',
    BURKINAFASO = 'BURKINAFASO',
    BURUNDI = 'BURUNDI',
    CAMBODIA = 'CAMBODIA',
    CAMEROON = 'CAMEROON',
    CANADA = 'CANADA',
    CANARY_ISLANDS = 'CANARY_ISLANDS',
    CAPEVERDE = 'CAPEVERDE',
    CAYMAN_ISLANDS = 'CAYMAN_ISLANDS',
    CENTRAL_AFRICAN_REPUBLIC = 'CENTRAL_AFRICAN_REPUBLIC',
    CEUTA_AND_MELILLA = 'CEUTA_AND_MELILLA',
    CHAD = 'CHAD',
    CHILE = 'CHILE',
    CHINA = 'CHINA',
    CHRISTMAS_ISLAND = 'CHRISTMAS_ISLAND',
    COCOS_ISLANDS = 'COCOS_ISLANDS',
    COLOMBIA = 'COLOMBIA',
    COMOROS = 'COMOROS',
    COOK_ISLANDS = 'COOK_ISLANDS',
    COSTARICA = 'COSTARICA',
    COTE_DIVOIRE = 'COTE_DIVOIRE',
    CROATIA = 'CROATIA',
    CUBA = 'CUBA',
    CURACAO = 'CURACAO',
    CYPRUS = 'CYPRUS',
    CZECH_REPUBLIC = 'CZECH_REPUBLIC',
    DEMOCRATIC_REPUBLIC_OF_CONGO = 'DEMOCRATIC_REPUBLIC_OF_CONGO',
    DENMARK = 'DENMARK',
    DJIBOUTI = 'DJIBOUTI',
    DOMINICA = 'DOMINICA',
    DOMINICAN_REPUBLIC = 'DOMINICAN_REPUBLIC',
    EASTTIMOR = 'EASTTIMOR',
    ECUADOR = 'ECUADOR',
    EGYPT = 'EGYPT',
    ELSALVADOR = 'ELSALVADOR',
    EQUATORIAL_GUINEA = 'EQUATORIAL_GUINEA',
    ERITREA = 'ERITREA',
    ESTONIA = 'ESTONIA',
    ETHIOPIA = 'ETHIOPIA',
    FALKLAND_ISLANDS = 'FALKLAND_ISLANDS',
    FAROE_ISLANDS = 'FAROE_ISLANDS',
    FIJI = 'FIJI',
    FINLAND = 'FINLAND',
    FRANCE = 'FRANCE',
    FRENCH_POLYNESIA = 'FRENCH_POLYNESIA',
    FRENCH_SOUTHERN_TERRITORIES = 'FRENCH_SOUTHERN_TERRITORIES',
    FRENCHGUIANA = 'FRENCHGUIANA',
    GABON = 'GABON',
    GAMBIA = 'GAMBIA',
    GEORGIA = 'GEORGIA',
    GERMANY = 'GERMANY',
    GHANA = 'GHANA',
    GIBRALTAR = 'GIBRALTAR',
    GREECE = 'GREECE',
    GREENLAND = 'GREENLAND',
    GRENADA = 'GRENADA',
    GUADELOUPE = 'GUADELOUPE',
    GUAM = 'GUAM',
    GUATEMALA = 'GUATEMALA',
    GUERNSEY = 'GUERNSEY',
    GUINEA = 'GUINEA',
    GUINEA_BISSAU = 'GUINEA_BISSAU',
    GUYANA = 'GUYANA',
    HAITI = 'HAITI',
    HEARD_AND_MCDONALD_ISLANDS = 'HEARD_AND_MCDONALD_ISLANDS',
    HONDURAS = 'HONDURAS',
    HONGKONG = 'HONGKONG',
    HUNGARY = 'HUNGARY',
    ICELAND = 'ICELAND',
    INDIA = 'INDIA',
    INDONESIA = 'INDONESIA',
    IRAN = 'IRAN',
    IRAQ = 'IRAQ',
    IRELAND = 'IRELAND',
    ISLEOFMAN = 'ISLEOFMAN',
    ISRAEL = 'ISRAEL',
    ITALY = 'ITALY',
    JAMAICA = 'JAMAICA',
    JAPAN = 'JAPAN',
    JERSEY = 'JERSEY',
    JORDAN = 'JORDAN',
    KAZAKHSTAN = 'KAZAKHSTAN',
    KENYA = 'KENYA',
    KIRIBATI = 'KIRIBATI',
    KOREA_NORTH = 'KOREA_NORTH',
    KOREA_SOUTH = 'KOREA_SOUTH',
    KOSOVO = 'KOSOVO',
    KUWAIT = 'KUWAIT',
    KYRGYZSTAN = 'KYRGYZSTAN',
    LAOS = 'LAOS',
    LATVIA = 'LATVIA',
    LEBANON = 'LEBANON',
    LESOTHO = 'LESOTHO',
    LIBERIA = 'LIBERIA',
    LIBYA = 'LIBYA',
    LIECHTENSTEIN = 'LIECHTENSTEIN',
    LITHUANIA = 'LITHUANIA',
    LUXEMBOURG = 'LUXEMBOURG',
    MACAU = 'MACAU',
    MACEDONIA = 'MACEDONIA',
    MADAGASCAR = 'MADAGASCAR',
    MALAWI = 'MALAWI',
    MALAYSIA = 'MALAYSIA',
    MALDIVES = 'MALDIVES',
    MALI = 'MALI',
    MALTA = 'MALTA',
    MARSHALL_ISLANDS = 'MARSHALL_ISLANDS',
    MARTINIQUE = 'MARTINIQUE',
    MAURITANIA = 'MAURITANIA',
    MAURITIUS = 'MAURITIUS',
    MAYOTTE = 'MAYOTTE',
    MEXICO = 'MEXICO',
    MICRONESIA = 'MICRONESIA',
    MOLDOVA = 'MOLDOVA',
    MONACO = 'MONACO',
    MONGOLIA = 'MONGOLIA',
    MONTENEGRO = 'MONTENEGRO',
    MONTSERRAT = 'MONTSERRAT',
    MOROCCO = 'MOROCCO',
    MOZAMBIQUE = 'MOZAMBIQUE',
    MYANMAR = 'MYANMAR',
    NAMIBIA = 'NAMIBIA',
    NAURU = 'NAURU',
    NEPAL = 'NEPAL',
    NETHERLANDS = 'NETHERLANDS',
    NETHERLANDS_ANTILLES = 'NETHERLANDS_ANTILLES',
    NEWCALEDONIA = 'NEWCALEDONIA',
    NEWZEALAND = 'NEWZEALAND',
    NICARAGUA = 'NICARAGUA',
    NIGER = 'NIGER',
    NIGERIA = 'NIGERIA',
    NIUE = 'NIUE',
    NORFOLKISLAND = 'NORFOLKISLAND',
    NORTHERN_MARIANA_ISLANDS = 'NORTHERN_MARIANA_ISLANDS',
    NORWAY = 'NORWAY',
    OMAN = 'OMAN',
    PAKISTAN = 'PAKISTAN',
    PALAU = 'PALAU',
    PANAMA = 'PANAMA',
    PAPUA_NEW_GUINEA = 'PAPUA_NEW_GUINEA',
    PARAGUAY = 'PARAGUAY',
    PERU = 'PERU',
    PHILIPPINES = 'PHILIPPINES',
    PITCAIRN_ISLAND = 'PITCAIRN_ISLAND',
    POLAND = 'POLAND',
    PORTUGAL = 'PORTUGAL',
    PUERTORICO = 'PUERTORICO',
    QATAR = 'QATAR',
    REPUBLIC_OF_CONGO = 'REPUBLIC_OF_CONGO',
    REUNION_ISLAND = 'REUNION_ISLAND',
    ROMANIA = 'ROMANIA',
    RUSSIAN_FEDERATION = 'RUSSIAN_FEDERATION',
    RWANDA = 'RWANDA',
    SAINT_BARTHELEMY = 'SAINT_BARTHELEMY',
    SAINT_HELENA = 'SAINT_HELENA',
    SAINT_KITTS_AND_NEVIS = 'SAINT_KITTS_AND_NEVIS',
    SAINT_VINCENT_AND_THE_GRENADINES = 'SAINT_VINCENT_AND_THE_GRENADINES',
    SAINTLUCIA = 'SAINTLUCIA',
    SAINTMARTIN = 'SAINTMARTIN',
    SAMOA = 'SAMOA',
    SANMARINO = 'SANMARINO',
    SAOTOME_AND_PRINCIPE = 'SAOTOME_AND_PRINCIPE',
    SAUDI_ARABIA = 'SAUDI_ARABIA',
    SENEGAL = 'SENEGAL',
    SERBIA = 'SERBIA',
    SERBIA_AND_MONTENEGRO = 'SERBIA_AND_MONTENEGRO',
    SEYCHELLES = 'SEYCHELLES',
    SIERRALEONE = 'SIERRALEONE',
    SINGAPORE = 'SINGAPORE',
    SINT_MAARTEN = 'SINT_MAARTEN',
    SLOVAK_REPUBLIC = 'SLOVAK_REPUBLIC',
    SLOVENIA = 'SLOVENIA',
    SOLOMON_ISLANDS = 'SOLOMON_ISLANDS',
    SOMALIA = 'SOMALIA',
    SOUTH_GEORGIA = 'SOUTH_GEORGIA',
    SOUTHAFRICA = 'SOUTHAFRICA',
    SOUTHSUDAN = 'SOUTHSUDAN',
    SPAIN = 'SPAIN',
    SRILANKA = 'SRILANKA',
    ST_PIERREANDMIQUELON = 'ST_PIERREANDMIQUELON',
    STATE_OF_PALESTINE = 'STATE_OF_PALESTINE',
    SUDAN = 'SUDAN',
    SURINAME = 'SURINAME',
    SVALBARD_AND_JANMAYEN_ISLANDS = 'SVALBARD_AND_JANMAYEN_ISLANDS',
    SWAZILAND = 'SWAZILAND',
    SWEDEN = 'SWEDEN',
    SWITZERLAND = 'SWITZERLAND',
    SYRIAN_ARAB_REPUBLIC = 'SYRIAN_ARAB_REPUBLIC',
    TAIWAN = 'TAIWAN',
    TAJIKISTAN = 'TAJIKISTAN',
    TANZANIA = 'TANZANIA',
    THAILAND = 'THAILAND',
    TOGO = 'TOGO',
    TOKELAU = 'TOKELAU',
    TONGA = 'TONGA',
    TRINIDADANDTOBAGO = 'TRINIDADANDTOBAGO',
    TUNISIA = 'TUNISIA',
    TURKEY = 'TURKEY',
    TURKMENISTAN = 'TURKMENISTAN',
    TURKSAND_CAICOS_ISLANDS = 'TURKSAND_CAICOS_ISLANDS',
    TUVALU = 'TUVALU',
    UGANDA = 'UGANDA',
    UKRAINE = 'UKRAINE',
    UNITED_ARAB_EMIRATES = 'UNITED_ARAB_EMIRATES',
    UNITED_KINGDOM = 'UNITED_KINGDOM',
    UNITEDSTATES = 'UNITEDSTATES',
    URUGUAY = 'URUGUAY',
    US_MINOR_OUTLYING_ISLANDS = 'US_MINOR_OUTLYING_ISLANDS',
    UZBEKISTAN = 'UZBEKISTAN',
    VANUATU = 'VANUATU',
    VATICAN = 'VATICAN',
    VENEZUELA = 'VENEZUELA',
    VIETNAM = 'VIETNAM',
    VIRGINISLANDS_UK = 'VIRGINISLANDS_UK',
    VIRGINISLANDS_USA = 'VIRGINISLANDS_USA',
    WALLIS_AND_FUTUNA = 'WALLIS_AND_FUTUNA',
    WESTERN_SAHARA = 'WESTERN_SAHARA',
    YEMEN = 'YEMEN',
    ZAMBIA = 'ZAMBIA',
    ZIMBABWE = 'ZIMBABWE',
  }

  /**
   * Holds string values for ISO currency codes. Used as the type of
   * `options.currency` when calling `getCurrencyFormatter()`, and as the
   * `currency` property of `CurrencyFormatter` instances.
   *
   * The enum lists all currencies the type system supports, but at runtime
   * the enum object exposes only currencies enabled in the current account
   * — and `getCurrencyFormatter({currency: code})` rejects codes that
   * aren't in the enabled set with `SSS_INVALID_CURRENCY_ID`. To format
   * a currency that isn't enabled, use the `locale` form of
   * `getCurrencyFormatter()` instead.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558027087}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558027087.html}
   *
   * @since 2019.1
   */
  export enum Currency {
    AED = 'AED',
    AFN = 'AFN',
    ALL = 'ALL',
    AMD = 'AMD',
    ANG = 'ANG',
    AOA = 'AOA',
    ARS = 'ARS',
    AUD = 'AUD',
    AWG = 'AWG',
    AZN = 'AZN',
    BAM = 'BAM',
    BBD = 'BBD',
    BDT = 'BDT',
    BGN = 'BGN',
    BHD = 'BHD',
    BIF = 'BIF',
    BMD = 'BMD',
    BND = 'BND',
    BOB = 'BOB',
    BOV = 'BOV',
    BRL = 'BRL',
    BSD = 'BSD',
    BTN = 'BTN',
    BWP = 'BWP',
    BYN = 'BYN',
    BZD = 'BZD',
    CAD = 'CAD',
    CDF = 'CDF',
    CHE = 'CHE',
    CHF = 'CHF',
    CHW = 'CHW',
    CLF = 'CLF',
    CLP = 'CLP',
    CNY = 'CNY',
    COP = 'COP',
    COU = 'COU',
    CRC = 'CRC',
    CUC = 'CUC',
    CUP = 'CUP',
    CVE = 'CVE',
    CZK = 'CZK',
    DJF = 'DJF',
    DKK = 'DKK',
    DOP = 'DOP',
    DZD = 'DZD',
    EGP = 'EGP',
    ERN = 'ERN',
    ETB = 'ETB',
    EUR = 'EUR',
    FJD = 'FJD',
    FKP = 'FKP',
    GBP = 'GBP',
    GEL = 'GEL',
    GHS = 'GHS',
    GIP = 'GIP',
    GMD = 'GMD',
    GNF = 'GNF',
    GTQ = 'GTQ',
    GYD = 'GYD',
    HKD = 'HKD',
    HNL = 'HNL',
    HRK = 'HRK',
    HTG = 'HTG',
    HUF = 'HUF',
    IDR = 'IDR',
    ILS = 'ILS',
    INR = 'INR',
    IQD = 'IQD',
    IRR = 'IRR',
    ISK = 'ISK',
    JMD = 'JMD',
    JOD = 'JOD',
    JPY = 'JPY',
    KES = 'KES',
    KGS = 'KGS',
    KHR = 'KHR',
    KMF = 'KMF',
    KPW = 'KPW',
    KRW = 'KRW',
    KWD = 'KWD',
    KYD = 'KYD',
    KZT = 'KZT',
    LAK = 'LAK',
    LBP = 'LBP',
    LKR = 'LKR',
    LRD = 'LRD',
    LSL = 'LSL',
    LYD = 'LYD',
    MAD = 'MAD',
    MDL = 'MDL',
    MGA = 'MGA',
    MKD = 'MKD',
    MMK = 'MMK',
    MNT = 'MNT',
    MOP = 'MOP',
    MRU = 'MRU',
    MUR = 'MUR',
    MVR = 'MVR',
    MWK = 'MWK',
    MXN = 'MXN',
    MXV = 'MXV',
    MYR = 'MYR',
    MZN = 'MZN',
    NAD = 'NAD',
    NGN = 'NGN',
    NIO = 'NIO',
    NOK = 'NOK',
    NPR = 'NPR',
    NZD = 'NZD',
    OMR = 'OMR',
    PAB = 'PAB',
    PEN = 'PEN',
    PGK = 'PGK',
    PHP = 'PHP',
    PKR = 'PKR',
    PLN = 'PLN',
    PYG = 'PYG',
    QAR = 'QAR',
    RON = 'RON',
    RSD = 'RSD',
    RUB = 'RUB',
    RWF = 'RWF',
    SAR = 'SAR',
    SBD = 'SBD',
    SCR = 'SCR',
    SDG = 'SDG',
    SEK = 'SEK',
    SGD = 'SGD',
    SHP = 'SHP',
    SLL = 'SLL',
    SOS = 'SOS',
    SRD = 'SRD',
    SSP = 'SSP',
    STN = 'STN',
    SVC = 'SVC',
    SYP = 'SYP',
    SZL = 'SZL',
    THB = 'THB',
    TJS = 'TJS',
    TMT = 'TMT',
    TND = 'TND',
    TOP = 'TOP',
    TRY = 'TRY',
    TTD = 'TTD',
    TWD = 'TWD',
    TZS = 'TZS',
    UAH = 'UAH',
    UGX = 'UGX',
    USD = 'USD',
    USN = 'USN',
    UYI = 'UYI',
    UYU = 'UYU',
    UYW = 'UYW',
    UZS = 'UZS',
    VES = 'VES',
    VND = 'VND',
    VUV = 'VUV',
    WST = 'WST',
    XAF = 'XAF',
    XAG = 'XAG',
    XAU = 'XAU',
    XBA = 'XBA',
    XBB = 'XBB',
    XBC = 'XBC',
    XBD = 'XBD',
    XCD = 'XCD',
    XDR = 'XDR',
    XOF = 'XOF',
    XPD = 'XPD',
    XPF = 'XPF',
    XPT = 'XPT',
    XSU = 'XSU',
    XTS = 'XTS',
    XUA = 'XUA',
    XXX = 'XXX',
    YER = 'YER',
    ZAR = 'ZAR',
    ZMW = 'ZMW',
    ZWL = 'ZWL',
  }

  /**
   * Holds string values for the negative-number format. Used as the type of
   * `options.negativeNumberFormat` when calling `getNumberFormatter()`,
   * and as the `negativeNumberFormat` property of `NumberFormatter` instances.
   *
   * `MINUS` is the default for stand-alone `NumberFormatter` instances;
   * `BRACKETS` is the default for the `NumberFormatter` embedded in a
   * `CurrencyFormatter`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031974}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031974.html}
   *
   * @since 2019.2
   */
  export enum NegativeNumberFormat {
    BRACKETS = 'BRACKETS',
    MINUS = 'MINUS',
  }

  /**
   * Holds string values for the supported phone-number format types. Used
   * as the type of `options.formatType` when calling
   * `getPhoneNumberFormatter()`, and as the `formatType` property of
   * `PhoneNumberFormatter` instances.
   *
   * Format-output examples for the phone number `+1 415 555 1234`:
   * `E164` → `'+14155551234'`,
   * `INTERNATIONAL` → `'+1 415-555-1234'`,
   * `NATIONAL` → `'(415) 555-1234'`,
   * `RFC3966` → `'tel:+1-415-555-1234'`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626858431}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626858431.html}
   *
   * @since 2019.2
   */
  export enum PhoneNumberFormatType {
    E164 = 'E164',
    INTERNATIONAL = 'INTERNATIONAL',
    NATIONAL = 'NATIONAL',
    RFC3966 = 'RFC3966',
  }

  /**
   * A formatter configured to render numbers as locale-aware currency
   * strings. Created via `i18n.getCurrencyFormatter()`. Calling its
   * `format()` method on a JS number returns the formatted string.
   *
   * The embedded `numberFormatter` exposes the same numeric formatting
   * parameters (group separator, decimal separator, precision, etc.) used
   * by `CurrencyFormatter.format()`, without the currency symbol — useful
   * when locale-consistent number formatting is needed without the
   * currency wrapping.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558024548}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558024548.html}
   *
   * @since 2019.2
   */
  export interface CurrencyFormatter {
    /**
     * The ISO currency code (e.g. `'USD'`, `'EUR'`) the formatter is
     * configured for.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031127}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031127.html}
     */
    readonly currency: Currency | `${Currency}`;

    /**
     * The locale of the formatter, in NetSuite's internal underscore form
     * (e.g. `'en_US'`, `'fr_FR_EURO'`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161167908197}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161167908197.html}
     */
    readonly locale: string;

    /**
     * The currency symbol (e.g. `'$'`, `'€'`, `'￥'`) used by the formatter.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031214}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031214.html}
     */
    readonly symbol: string;

    /**
     * The embedded `NumberFormatter` instance derived from this currency
     * formatter, with the same group/decimal separators, precision, and
     * negative-number format — but without the currency symbol.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031250}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031250.html}
     */
    readonly numberFormatter: NumberFormatter;

    /**
     * Formats a JS number as a currency-formatted string (e.g.
     * `format({number: 1234.56})` on a USD formatter returns `'$1,234.56'`).
     * The `number` option must be a JS number; strings error with
     * `SSS_INVALID_TYPE_ARG`. The value `0` IS accepted and formats as
     * `'$0.00'`; the Java truthy-check that affects `N/format.format()`
     * does not apply here for numeric `0`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031335}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031335.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2019.2
     *
     * @param options
     * @param options.number The numeric value to format.
     * @return The formatted currency string.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.number` is missing/null.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.number` is not a JS number.
     */
    format(options: {
      number: number,
    }): string;

    /**
     * Returns a plain-object representation of the formatter, suitable for
     * `JSON.stringify()`. The returned object includes all readable
     * properties plus an `isPrefixSymbol` boolean indicating whether the
     * currency symbol appears before (`true`) or after (`false`) the
     * numeric value in formatted output.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     */
    toJSON(): ExcludeMethods<this> & { isPrefixSymbol: boolean };

    /**
     * Returns the constant string `'format.i18n.CurrencyFormatter'`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     */
    toString(): 'format.i18n.CurrencyFormatter';
  }

  /**
   * A formatter configured to render numbers as locale-aware strings without
   * a currency symbol. Created via `i18n.getNumberFormatter()` or accessed
   * as the `numberFormatter` property of a `CurrencyFormatter`.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558026406}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558026406.html}
   *
   * @since 2019.2
   */
  export interface NumberFormatter {
    /**
     * The character(s) used to separate groups of digits.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031440}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031440.html}
     */
    readonly groupSeparator: string;

    /**
     * The character(s) used to separate integer and fractional parts.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031580}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031580.html}
     */
    readonly decimalSeparator: string;

    /**
     * The precision (number of digits after the decimal separator) used
     * when formatting.
     *
     * The runtime type is inconsistent: when no `precision` was specified
     * at construction, this is a string (e.g. `'2'`); when the user passed
     * a numeric `precision` in the options bag, this is a number. The
     * Help Center documents the property as `number`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031620}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031620.html}
     */
    readonly precision: number | string;

    /**
     * The minimum precision, or `null` if not set (which is the default).
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly minPrecision: number | null;

    /**
     * The maximum precision, or `null` if not set (which is the default).
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly maxPrecision: number | null;

    /**
     * The negative-number format. `BRACKETS` for embedded-in-currency
     * formatters; `MINUS` for stand-alone formatters by default.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031974}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031974.html}
     */
    readonly negativeNumberFormat: NegativeNumberFormat | `${NegativeNumberFormat}`;

    /**
     * The locale of the formatter, in NetSuite's internal underscore form
     * (e.g. `'en_US'`).
     *
     * If a `locale` was passed to `getNumberFormatter()` in BCP-47 hyphen
     * form (e.g. `'de-DE'`), this property may preserve the input hyphen
     * form rather than convert to underscores — observed behavior.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_161167940078}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_161167940078.html}
     */
    readonly locale: string;

    /**
     * Formats a JS number as a locale-aware string (e.g.
     * `format({number: 1234.567})` on a precision-2 formatter returns
     * `'1,234.57'`).
     *
     * The `number` option must be a JS number; strings error with
     * `SSS_INVALID_TYPE_ARG`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558031908}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558031908.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2019.2
     *
     * @param options
     * @param options.number The numeric value to format.
     * @return The formatted string.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.number` is missing/null.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.number` is not a JS number.
     */
    format(options: {
      number: number,
    }): string;

    /**
     * Returns a plain-object representation of the formatter, suitable for
     * `JSON.stringify()`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the constant string `'format.i18n.NumberFormatter'`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2019.2
     */
    toString(): 'format.i18n.NumberFormatter';
  }

  /**
   * A formatter for `PhoneNumber` instances. Created via
   * `i18n.getPhoneNumberFormatter()`. Calling its `format()` method on a
   * `PhoneNumber` (produced by `PhoneNumberParser.parse()`) returns the
   * formatted phone-number string in the configured `FormatType`.
   *
   * The `FormatType` generic parameter constrains the `formatType` property
   * to the format type used at construction time.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626649783}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626649783.html}
   *
   * @since 2020.2
   */
  export interface PhoneNumberFormatter<FormatType extends PhoneNumberFormatType> {
    /**
     * The phone-number format type the formatter is configured for, or
     * `null` if no format type was specified at construction (in which
     * case the formatter defaults to INTERNATIONAL style).
     */
    readonly formatType: FormatType | null;

    /**
     * Formats a `PhoneNumber` instance to a string in the configured
     * format type. The `number` option must be an instance of
     * `PhoneNumber` produced by `PhoneNumberParser.parse()`; passing a
     * raw string errors with `SSS_INVALID_TYPE_ARG`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626687631}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626687631.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2020.2
     *
     * @param options
     * @param options.number The `PhoneNumber` instance to format.
     * @return The formatted phone-number string.
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.number` is missing/null.
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.number` is not a `PhoneNumber` instance.
     */
    format(options: {
      number: PhoneNumber,
    }): string;

    /**
     * Returns a plain-object representation of the formatter, suitable for
     * `JSON.stringify()`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the constant string `'format.i18n.PhoneNumberFormatter'`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     */
    toString(): 'format.i18n.PhoneNumberFormatter';
  }

  /**
   * A parser for phone-number strings. Created via
   * `i18n.getPhoneNumberParser()`. Calling its `parse()` method on a
   * phone-number string returns a `PhoneNumber` instance.
   *
   * The `DefaultCountry` generic parameter reflects the `defaultCountry`
   * option used at construction time, and constrains the parser's
   * `defaultCountry` property to that country.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627095342}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627095342.html}
   *
   * @since 2020.2
   */
  export interface PhoneNumberParser<DefaultCountry extends Country> {
    /**
     * The default country the parser uses when interpreting national-format
     * phone numbers. `null` if no `defaultCountry` was specified at
     * construction (in which case only fully-international-format numbers
     * can be parsed).
     */
    readonly defaultCountry: DefaultCountry | null;

    /**
     * The international dialing code (e.g. `'1'` for US/Canada) for the
     * parser's default country. May be `undefined` for some countries.
     *
     * Undocumented in the Help Center; present at runtime.
     */
    readonly defaultCountryCode?: string;

    /**
     * Parses a phone-number string into a `PhoneNumber` instance, with
     * both synchronous and Promise-based call forms.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626797748}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626797748.html}
     */
    parse: {
      /**
       * Parses a phone-number string into a `PhoneNumber` instance.
       *
       * The option key is `number`, NOT `phone` — the existing type file
       * documented `phone` but the runtime expects `number`. Numeric
       * values are NOT accepted: `parse({number: 4155551234})` errors
       * with `SSS_INVALID_TYPE_ARG`.
       *
       * Unparseable strings raise `CANNOT_PARSE_PHONE_NUMBER`; empty
       * strings raise `SSS_MISSING_REQD_ARGUMENT`.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626797748}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626797748.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2020.2
       *
       * @param options
       * @param options.number The phone-number string to parse.
       * @return A `PhoneNumber` instance representing the parsed value.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT If `options` is missing/null, or `options.number` is missing/null/empty string.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG If `options.number` is not a string.
       * @throws {error.SuiteScriptError} CANNOT_PARSE_PHONE_NUMBER If `options.number` cannot be parsed as a phone number.
       */
      (options: {
        number: string,
      }): PhoneNumber;

      /**
       * Promise-returning form of `parse()`. Same parameters, return type,
       * and error semantics; errors reject the Promise rather than throwing
       * synchronously.
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626797748}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626797748.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2020.2
       *
       * @param options
       * @param options.number The phone-number string to parse.
       * @return A Promise resolving to a `PhoneNumber` instance representing the parsed value.
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT (via Promise rejection) If `options` is missing/null, or `options.number` is missing/null/empty string.
       * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG (via Promise rejection) If `options.number` is not a string.
       * @throws {error.SuiteScriptError} CANNOT_PARSE_PHONE_NUMBER (via Promise rejection) If `options.number` cannot be parsed as a phone number.
       */
      promise(options: {
        number: string,
      }): Promise<PhoneNumber>;
    };

    /**
     * Returns a plain-object representation of the parser, suitable for
     * `JSON.stringify()`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the constant string `'format.i18n.PhoneNumberParser'`.
     *
     * Undocumented in the Help Center; present at runtime.
     *
     * @since 2020.2
     */
    toString(): 'format.i18n.PhoneNumberParser';
  }

  /**
   * A parsed phone-number value. Produced by `PhoneNumberParser.parse()`.
   * Holds the structural components of the parsed number — country code,
   * national number, extension, etc. — but does NOT expose a `format()`
   * method or a `valid` property despite earlier type-file declarations to
   * the contrary; use `PhoneNumberFormatter.format()` to produce formatted
   * output.
   *
   * Undocumented in the Help Center; present at runtime.
   */
  export interface PhoneNumber {
    /**
     * The international dialing code (e.g. `1` for US/Canada).
     *
     * Typed `number` because the runtime returns a JS number, not a string,
     * despite earlier type-file declarations that said `string`.
     */
    readonly countryCode: number;

    /**
     * The national-significant portion of the number (e.g. `'4155551234'`
     * for `'+1 415 555 1234'`), without country code, formatting, or
     * extension.
     */
    readonly nationalNumber: string;

    /**
     * The phone-number extension, or empty string if no extension was
     * present in the input.
     */
    readonly extension: string;

    /**
     * The carrier code embedded in the original input, or empty string if
     * none was present.
     */
    readonly carrierCode: string;

    /**
     * The number of leading zeros in the national-significant portion.
     */
    readonly numberOfLeadingZeros: number;

    /**
     * The original input string passed to `PhoneNumberParser.parse()`,
     * preserved unmodified.
     */
    readonly rawInput: string;

    /**
     * Returns a plain-object representation of the phone number, suitable
     * for `JSON.stringify()`. Includes all readable properties; omits the
     * `toString` and `toJSON` methods themselves.
     *
     * Undocumented in the Help Center; present at runtime.
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the constant string `'format.i18n.PhoneNumber'`.
     *
     * Undocumented in the Help Center; present at runtime.
     */
    toString(): 'format.i18n.PhoneNumber';
  }
}
