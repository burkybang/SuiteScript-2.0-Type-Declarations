/**
 * SuiteScript i18n module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1543861741}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543861741.html}
 *
 * @module N/format/i18n
 * @NApiVersion 2.x
 */
interface i18n {

  /**
   * The maximum length for phone numbers
   */
  readonly PhoneFieldMaxLength: number;

  /**
   * The country code of the current subsidiary
   */
  readonly SubsidiaryCountry: string;

  spellOut: {

    /**
     * Spells out positive and negative number as a string in a specific language
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
     *
     * @param options
     * @param options.number The number to be spelled out in a string
     * @param options.locale The language code that specifies the string’s language
     *
     * @since 2019.1
     */
    (options: {
      number: string,
      locale?: string,
    }): string;

    /**
     * Spells out positive and negative number as a string in a specific language
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4388837989}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388837989.html}
     *
     * @param options
     * @param options.number The number to be spelled out in a string
     * @param options.locale The language code that specifies the string’s language
     *
     * @since 2019.1
     */
    promise(options: {
      number: string,
      locale?: string,
    }): Promise<string>;
  };

  getCurrencyFormatter: {

    /**
     * Create i18n.CurrencyFormatter object to format numbers into currency strings
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023369}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023369.html}
     *
     * @param options
     * @param options.currency Code of the currency that is used by formatter
     *
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED Both currency and locale parameters are missing
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Currency parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_CURRENCY_ID The currency is not valid
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG The parameter type is wrong
     *
     * @since 2019.1
     */
    (options: {
      currency: i18n.Currency | `${i18n.Currency}`,
    }): i18n.CurrencyFormatter;

    /**
     * Create i18n.CurrencyFormatter object to format numbers into currency strings
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023369}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023369.html}
     *
     * @param options
     * @param options.locale Code of the locale that is used by formatter
     *
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED Both currency and locale parameters are missing
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Locale parameter is missing
     * @throws {error.SuiteScriptError} INVALID_LOCALE The locale is not valid
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG The parameter type is wrong
     *
     * @since 2019.1
     */
    (options: {
      locale: string,
    }): i18n.CurrencyFormatter;

    /**
     * Create i18n.CurrencyFormatter object to format numbers into currency strings asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023369}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023369.html}
     *
     * @param options
     * @param options.currency Code of the currency that is used by formatter
     *
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED Both currency and locale parameters are missing
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Currency parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_CURRENCY_ID The currency is not valid
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG The parameter type is wrong
     *
     * @since 2019.1
     */
    promise(options: {
      currency: i18n.Currency | `${i18n.Currency}`,
    }): Promise<i18n.CurrencyFormatter>;

    /**
     * Create i18n.CurrencyFormatter object to format numbers into currency strings asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023369}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023369.html}
     *
     * @param options
     * @param options.locale Code of the locale that is used by formatter
     *
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED Both currency and locale parameters are missing
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Locale parameter is missing
     * @throws {error.SuiteScriptError} INVALID_LOCALE The locale is not valid
     * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG The parameter type is wrong
     *
     * @since 2019.1
     */
    promise(options: {
      locale: string,
    }): Promise<i18n.CurrencyFormatter>;
  };

  getNumberFormatter: {

    /**
     * Create i18n.NumberFormatter object to format numbers into strings
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023913.html}
     *
     * @param options
     * @param options.groupSeparator Indicates the group separator
     * @param options.decimalSeparator Indicates the decimal separator
     * @param options.precision Indicates the precision
     * @param options.negativeNumberFormat Indicates the negative number format
     *
     * @since 2019.2
     */
    (options?: {
      groupSeparator?: string,
      decimalSeparator?: string,
      precision?: number,
      negativeNumberFormat?: i18n.NegativeNumberFormat | `${i18n.NegativeNumberFormat}`,
    }): i18n.NumberFormatter;

    /**
     * Create i18n.NumberFormatter object to format numbers into strings asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558023913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558023913.html}
     *
     * @param options
     * @param options.groupSeparator Indicates the group separator
     * @param options.decimalSeparator Indicates the decimal separator
     * @param options.precision Indicates the precision
     * @param options.negativeNumberFormat Indicates the negative number format
     *
     * @since 2019.2
     */
    promise(options?: {
      groupSeparator?: string,
      decimalSeparator?: string,
      precision?: number,
      negativeNumberFormat?: i18n.NegativeNumberFormat | `${i18n.NegativeNumberFormat}`,
    }): Promise<i18n.NumberFormatter>;
  };

  /**
   * Create i18n.PhoneNumberFormatter object to format phone numbers into strings
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_20131717237}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_20131717237.html}
   *
   * @param options
   * @param options.formatType Phone number format type
   *
   * @since 2019.2
   */
  getPhoneNumberFormatter<FormatType extends i18n.PhoneNumberFormatType>(options: {
    formatType: FormatType | `${FormatType}`,
  }): i18n.PhoneNumberFormatter<FormatType>;

  /**
   * Parses a phone number from a string
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_77132343780}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_77132343780.html}
   *
   * @param options Required - Use an empty object if not specifying any options
   * @param options.defaultCountry Parser point of reference. Specify this value if the phone number is not in international formatl. If specified, value must be a format.Country value. If a value is not specified, the company country is used.
   *
   * @since 2019.2
   */
  getPhoneNumberParser<DefaultCountry extends i18n.Country>(options: {
    defaultCountry?: DefaultCountry | `${DefaultCountry}`,
  }): i18n.PhoneNumberParser<DefaultCountry>;
}

declare namespace i18n {

  /**
   * Enum for Country
   * @see Not Documented in NetSuite Help Center
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
   * Enum for Currency
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
   * Enum for Negative Number Format
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
   * Enum for PhoneNumberFormatType
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626858431}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626858431.html}
   */
  export enum PhoneNumberFormatType {
    E164 = 'E164',
    INTERNATIONAL = 'INTERNATIONAL',
    NATIONAL = 'NATIONAL',
    RFC3966 = 'RFC3966',
  }

  /**
   * Return a new instance of CurrencyFormatter
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558024548}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558024548.html}
   *
   * @protected
   * @classDescription The object that formats the number to currency string
   * @constructor
   *
   * @since 2019.2
   */
  export interface CurrencyFormatter {
    readonly currency: Currency | `${Currency}`;
    readonly locale: string;
    readonly symbol: string;
    readonly numberFormatter: NumberFormatter;

    format(options: {
      number: number,
    }): string;

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     */
    toJSON(): ExcludeMethods<this> & { isPrefixSymbol: boolean };

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     */
    toString(): 'format.i18n.CurrencyFormatter';
  }

  /**
   * Return a new instance of NumberFormatter
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1558026406}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1558026406.html}
   *
   * @protected
   * @classDescription The object that formats number to string
   * @constructor
   *
   * @since 2019.2
   */
  export interface NumberFormatter {
    readonly groupSeparator: string;
    readonly decimalSeparator: string;
    readonly precision: string | `${number}`;
    readonly minPrecision: string;
    readonly maxPrecision: string;
    readonly negativeNumberFormat: NegativeNumberFormat | `${NegativeNumberFormat}`,
    readonly locale: string;

    format(options: {
      number: number,
    }): string;

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     */
    toString(): 'format.i18n.NumberFormatter';
  }

  /**
   * Return a new instance of PhoneNumberFormatter
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158626649783}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158626649783.html}
   *
   * @protected
   * @classDescription The object that formats the phone number to string
   * @constructor
   *
   * @since 2020.2
   */
  export interface PhoneNumberFormatter<FormatType extends PhoneNumberFormatType> {
    readonly formatType: FormatType;

    format(options: {
      number: PhoneNumber,
    }): string;

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     */
    toString(): 'format.i18n.PhoneNumberFormatter';
  }

  /**
   * Return a new instance of PhoneNumberParser
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_158627095342}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158627095342.html}
   *
   * @protected
   * @classDescription The object that parses the string with the phone number to an object
   * @constructor
   *
   * @since 2020.2
   */
  export interface PhoneNumberParser<DefaultCountry extends Country> {
    readonly defaultCountry: DefaultCountry;
    readonly defaultCountryCode: string;

    parse: {
      (options: {
        phone: string,
      }): PhoneNumber;

      promise(options: {
        phone: string,
      }): Promise<PhoneNumber>;
    };

    /**
     * Convert to JSON object
     * @see Not Documented in NetSuite Help Center
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     */
    toString(): 'format.i18n.PhoneNumberParser';
  }

  export interface PhoneNumber {
    readonly carrierCode: string;
    readonly countryCode: string;
    readonly extension: string;
    readonly nationalNumber: string;
    readonly numberOfLeadingZeros: number;
    readonly rawInput: string;
    readonly valid: boolean;

    format(
      formatType: Exclude<PhoneNumberFormatType, PhoneNumberFormatType.E164> |
        `${Exclude<PhoneNumberFormatType, PhoneNumberFormatType.E164>}` | 'E.164',
    ): string;

    /**
     * Returns the object type name
     * @see Not Documented in NetSuite Help Center
     */
    toString(): 'format.i18n.PhoneNumber';
  }
}