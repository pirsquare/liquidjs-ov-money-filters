const options = {};

options['currencies'] = [{
    label: 'US Dollar',
    value: 'USD',
    symbol: 'US$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Canadian Dollar',
    value: 'CAD',
    symbol: 'CA$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Euro',
    value: 'EUR',
    symbol: '€',
    symbol_native: '€',
    decimal_digits: 2
  },
  {
    label: 'United Arab Emirates Dirham',
    value: 'AED',
    symbol: 'AED',
    symbol_native: 'د.إ.‏',
    decimal_digits: 2
  },
  {
    label: 'Afghan Afghani',
    value: 'AFN',
    symbol: 'Af',
    symbol_native: '؋',
    decimal_digits: 0
  },
  {
    label: 'Albanian Lek',
    value: 'ALL',
    symbol: 'ALL',
    symbol_native: 'Lek',
    decimal_digits: 0
  },
  {
    label: 'Armenian Dram',
    value: 'AMD',
    symbol: 'AMD',
    symbol_native: 'դր.',
    decimal_digits: 0
  },
  {
    label: 'Argentine Peso',
    value: 'ARS',
    symbol: 'AR$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Australian Dollar',
    value: 'AUD',
    symbol: 'AU$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Azerbaijani Manat',
    value: 'AZN',
    symbol: 'man.',
    symbol_native: 'ман.',
    decimal_digits: 2
  },
  {
    label: 'Bosnia-Herzegovina Convertible Mark',
    value: 'BAM',
    symbol: 'KM',
    symbol_native: 'KM',
    decimal_digits: 2
  },
  {
    label: 'Bangladeshi Taka',
    value: 'BDT',
    symbol: 'Tk',
    symbol_native: '৳',
    decimal_digits: 2
  },
  {
    label: 'Bulgarian Lev',
    value: 'BGN',
    symbol: 'BGN',
    symbol_native: 'лв.',
    decimal_digits: 2
  },
  {
    label: 'Bahraini Dinar',
    value: 'BHD',
    symbol: 'BD',
    symbol_native: 'د.ب.‏',
    decimal_digits: 3
  },
  {
    label: 'Burundian Franc',
    value: 'BIF',
    symbol: 'FBu',
    symbol_native: 'FBu',
    decimal_digits: 0
  },
  {
    label: 'Brunei Dollar',
    value: 'BND',
    symbol: 'BN$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Bolivian Boliviano',
    value: 'BOB',
    symbol: 'Bs',
    symbol_native: 'Bs',
    decimal_digits: 2
  },
  {
    label: 'Brazilian Real',
    value: 'BRL',
    symbol: 'R$',
    symbol_native: 'R$',
    decimal_digits: 2
  },
  {
    label: 'Botswanan Pula',
    value: 'BWP',
    symbol: 'BWP',
    symbol_native: 'P',
    decimal_digits: 2
  },
  {
    label: 'Belarusian Ruble',
    value: 'BYN',
    symbol: 'Br',
    symbol_native: 'руб.',
    decimal_digits: 2
  },
  {
    label: 'Belize Dollar',
    value: 'BZD',
    symbol: 'BZ$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Congolese Franc',
    value: 'CDF',
    symbol: 'CDF',
    symbol_native: 'FrCD',
    decimal_digits: 2
  },
  {
    label: 'Swiss Franc',
    value: 'CHF',
    symbol: 'CHF',
    symbol_native: 'CHF',
    decimal_digits: 2
  },
  {
    label: 'Chilean Peso',
    value: 'CLP',
    symbol: 'CL$',
    symbol_native: '$',
    decimal_digits: 0
  },
  {
    label: 'Chinese Yuan',
    value: 'CNY',
    symbol: 'CN¥',
    symbol_native: 'CN¥',
    decimal_digits: 2
  },
  {
    label: 'Colombian Peso',
    value: 'COP',
    symbol: 'CO$',
    symbol_native: '$',
    decimal_digits: 0
  },
  {
    label: 'Costa Rican Colón',
    value: 'CRC',
    symbol: '₡',
    symbol_native: '₡',
    decimal_digits: 0
  },
  {
    label: 'Cape Verdean Escudo',
    value: 'CVE',
    symbol: 'CV$',
    symbol_native: 'CV$',
    decimal_digits: 2
  },
  {
    label: 'Czech Republic Koruna',
    value: 'CZK',
    symbol: 'Kč',
    symbol_native: 'Kč',
    decimal_digits: 2
  },
  {
    label: 'Djiboutian Franc',
    value: 'DJF',
    symbol: 'Fdj',
    symbol_native: 'Fdj',
    decimal_digits: 0
  },
  {
    label: 'Danish Krone',
    value: 'DKK',
    symbol: 'Dkr',
    symbol_native: 'kr',
    decimal_digits: 2
  },
  {
    label: 'Dominican Peso',
    value: 'DOP',
    symbol: 'RD$',
    symbol_native: 'RD$',
    decimal_digits: 2
  },
  {
    label: 'Algerian Dinar',
    value: 'DZD',
    symbol: 'DA',
    symbol_native: 'د.ج.‏',
    decimal_digits: 2
  },
  {
    label: 'Estonian Kroon',
    value: 'EEK',
    symbol: 'Ekr',
    symbol_native: 'kr',
    decimal_digits: 2
  },
  {
    label: 'Egyptian Pound',
    value: 'EGP',
    symbol: 'EGP',
    symbol_native: 'ج.م.‏',
    decimal_digits: 2
  },
  {
    label: 'Eritrean Nakfa',
    value: 'ERN',
    symbol: 'Nfk',
    symbol_native: 'Nfk',
    decimal_digits: 2
  },
  {
    label: 'Ethiopian Birr',
    value: 'ETB',
    symbol: 'Br',
    symbol_native: 'Br',
    decimal_digits: 2
  },
  {
    label: 'British Pound Sterling',
    value: 'GBP',
    symbol: '£',
    symbol_native: '£',
    decimal_digits: 2
  },
  {
    label: 'Georgian Lari',
    value: 'GEL',
    symbol: 'GEL',
    symbol_native: 'GEL',
    decimal_digits: 2
  },
  {
    label: 'Ghanaian Cedi',
    value: 'GHS',
    symbol: 'GH₵',
    symbol_native: 'GH₵',
    decimal_digits: 2
  },
  {
    label: 'Guinean Franc',
    value: 'GNF',
    symbol: 'FG',
    symbol_native: 'FG',
    decimal_digits: 0
  },
  {
    label: 'Guatemalan Quetzal',
    value: 'GTQ',
    symbol: 'GTQ',
    symbol_native: 'Q',
    decimal_digits: 2
  },
  {
    label: 'Hong Kong Dollar',
    value: 'HKD',
    symbol: 'HK$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Honduran Lempira',
    value: 'HNL',
    symbol: 'HNL',
    symbol_native: 'L',
    decimal_digits: 2
  },
  {
    label: 'Croatian Kuna',
    value: 'HRK',
    symbol: 'kn',
    symbol_native: 'kn',
    decimal_digits: 2
  },
  {
    label: 'Hungarian Forint',
    value: 'HUF',
    symbol: 'Ft',
    symbol_native: 'Ft',
    decimal_digits: 0
  },
  {
    label: 'Indonesian Rupiah',
    value: 'IDR',
    symbol: 'Rp',
    symbol_native: 'Rp',
    decimal_digits: 0
  },
  {
    label: 'Israeli New Sheqel',
    value: 'ILS',
    symbol: '₪',
    symbol_native: '₪',
    decimal_digits: 2
  },
  {
    label: 'Indian Rupee',
    value: 'INR',
    symbol: 'Rs',
    symbol_native: '₹',
    decimal_digits: 2
  },
  {
    label: 'Iraqi Dinar',
    value: 'IQD',
    symbol: 'IQD',
    symbol_native: 'د.ع.‏',
    decimal_digits: 0
  },
  {
    label: 'Iranian Rial',
    value: 'IRR',
    symbol: 'IRR',
    symbol_native: '﷼',
    decimal_digits: 0
  },
  {
    label: 'Icelandic Króna',
    value: 'ISK',
    symbol: 'Ikr',
    symbol_native: 'kr',
    decimal_digits: 0
  },
  {
    label: 'Jamaican Dollar',
    value: 'JMD',
    symbol: 'J$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Jordanian Dinar',
    value: 'JOD',
    symbol: 'JD',
    symbol_native: 'د.أ.‏',
    decimal_digits: 3
  },
  {
    label: 'Japanese Yen',
    value: 'JPY',
    symbol: '¥',
    symbol_native: '￥',
    decimal_digits: 0
  },
  {
    label: 'Kenyan Shilling',
    value: 'KES',
    symbol: 'Ksh',
    symbol_native: 'Ksh',
    decimal_digits: 2
  },
  {
    label: 'Cambodian Riel',
    value: 'KHR',
    symbol: 'KHR',
    symbol_native: '៛',
    decimal_digits: 2
  },
  {
    label: 'Comorian Franc',
    value: 'KMF',
    symbol: 'CF',
    symbol_native: 'FC',
    decimal_digits: 0
  },
  {
    label: 'South Korean Won',
    value: 'KRW',
    symbol: '₩',
    symbol_native: '₩',
    decimal_digits: 0
  },
  {
    label: 'Kuwaiti Dinar',
    value: 'KWD',
    symbol: 'KD',
    symbol_native: 'د.ك.‏',
    decimal_digits: 3
  },
  {
    label: 'Kazakhstani Tenge',
    value: 'KZT',
    symbol: 'KZT',
    symbol_native: 'тңг.',
    decimal_digits: 2
  },
  {
    label: 'Lebanese Pound',
    value: 'LBP',
    symbol: 'LB£',
    symbol_native: 'ل.ل.‏',
    decimal_digits: 0
  },
  {
    label: 'Sri Lankan Rupee',
    value: 'LKR',
    symbol: 'SLRs',
    symbol_native: 'SL Re',
    decimal_digits: 2
  },
  {
    label: 'Lithuanian Litas',
    value: 'LTL',
    symbol: 'Lt',
    symbol_native: 'Lt',
    decimal_digits: 2
  },
  {
    label: 'Latvian Lats',
    value: 'LVL',
    symbol: 'Ls',
    symbol_native: 'Ls',
    decimal_digits: 2
  },
  {
    label: 'Libyan Dinar',
    value: 'LYD',
    symbol: 'LD',
    symbol_native: 'د.ل.‏',
    decimal_digits: 3
  },
  {
    label: 'Moroccan Dirham',
    value: 'MAD',
    symbol: 'MAD',
    symbol_native: 'د.م.‏',
    decimal_digits: 2
  },
  {
    label: 'Moldovan Leu',
    value: 'MDL',
    symbol: 'MDL',
    symbol_native: 'MDL',
    decimal_digits: 2
  },
  {
    label: 'Malagasy Ariary',
    value: 'MGA',
    symbol: 'MGA',
    symbol_native: 'MGA',
    decimal_digits: 0
  },
  {
    label: 'Macedonian Denar',
    value: 'MKD',
    symbol: 'MKD',
    symbol_native: 'MKD',
    decimal_digits: 2
  },
  {
    label: 'Myanma Kyat',
    value: 'MMK',
    symbol: 'MMK',
    symbol_native: 'K',
    decimal_digits: 0
  },
  {
    label: 'Macanese Pataca',
    value: 'MOP',
    symbol: 'MOP$',
    symbol_native: 'MOP$',
    decimal_digits: 2
  },
  {
    label: 'Mauritian Rupee',
    value: 'MUR',
    symbol: 'MURs',
    symbol_native: 'MURs',
    decimal_digits: 0
  },
  {
    label: 'Mexican Peso',
    value: 'MXN',
    symbol: 'MX$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Malaysian Ringgit',
    value: 'MYR',
    symbol: 'RM',
    symbol_native: 'RM',
    decimal_digits: 2
  },
  {
    label: 'Mozambican Metical',
    value: 'MZN',
    symbol: 'MTn',
    symbol_native: 'MTn',
    decimal_digits: 2
  },
  {
    label: 'Namibian Dollar',
    value: 'NAD',
    symbol: 'N$',
    symbol_native: 'N$',
    decimal_digits: 2
  },
  {
    label: 'Nigerian Naira',
    value: 'NGN',
    symbol: '₦',
    symbol_native: '₦',
    decimal_digits: 2
  },
  {
    label: 'Nicaraguan Córdoba',
    value: 'NIO',
    symbol: 'C$',
    symbol_native: 'C$',
    decimal_digits: 2
  },
  {
    label: 'Norwegian Krone',
    value: 'NOK',
    symbol: 'Nkr',
    symbol_native: 'kr',
    decimal_digits: 2
  },
  {
    label: 'Nepalese Rupee',
    value: 'NPR',
    symbol: 'NPRs',
    symbol_native: 'नेरू',
    decimal_digits: 2
  },
  {
    label: 'New Zealand Dollar',
    value: 'NZD',
    symbol: 'NZ$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Omani Rial',
    value: 'OMR',
    symbol: 'OMR',
    symbol_native: 'ر.ع.‏',
    decimal_digits: 3
  },
  {
    label: 'Panamanian Balboa',
    value: 'PAB',
    symbol: 'B/.',
    symbol_native: 'B/.',
    decimal_digits: 2
  },
  {
    label: 'Peruvian Nuevo Sol',
    value: 'PEN',
    symbol: 'S/.',
    symbol_native: 'S/.',
    decimal_digits: 2
  },
  {
    label: 'Philippine Peso',
    value: 'PHP',
    symbol: '₱',
    symbol_native: '₱',
    decimal_digits: 2
  },
  {
    label: 'Pakistani Rupee',
    value: 'PKR',
    symbol: 'PKRs',
    symbol_native: '₨',
    decimal_digits: 0
  },
  {
    label: 'Polish Zloty',
    value: 'PLN',
    symbol: 'zł',
    symbol_native: 'zł',
    decimal_digits: 2
  },
  {
    label: 'Paraguayan Guarani',
    value: 'PYG',
    symbol: '₲',
    symbol_native: '₲',
    decimal_digits: 0
  },
  {
    label: 'Qatari Rial',
    value: 'QAR',
    symbol: 'QR',
    symbol_native: 'ر.ق.‏',
    decimal_digits: 2
  },
  {
    label: 'Romanian Leu',
    value: 'RON',
    symbol: 'RON',
    symbol_native: 'RON',
    decimal_digits: 2
  },
  {
    label: 'Serbian Dinar',
    value: 'RSD',
    symbol: 'din.',
    symbol_native: 'дин.',
    decimal_digits: 0
  },
  {
    label: 'Russian Ruble',
    value: 'RUB',
    symbol: 'RUB',
    symbol_native: '₽.',
    decimal_digits: 2
  },
  {
    label: 'Rwandan Franc',
    value: 'RWF',
    symbol: 'RWF',
    symbol_native: 'FR',
    decimal_digits: 0
  },
  {
    label: 'Saudi Riyal',
    value: 'SAR',
    symbol: 'SR',
    symbol_native: 'ر.س.‏',
    decimal_digits: 2
  },
  {
    label: 'Sudanese Pound',
    value: 'SDG',
    symbol: 'SDG',
    symbol_native: 'SDG',
    decimal_digits: 2
  },
  {
    label: 'Swedish Krona',
    value: 'SEK',
    symbol: 'Skr',
    symbol_native: 'kr',
    decimal_digits: 2
  },
  {
    label: 'Singapore Dollar',
    value: 'SGD',
    symbol: 'S$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Somali Shilling',
    value: 'SOS',
    symbol: 'Ssh',
    symbol_native: 'Ssh',
    decimal_digits: 0
  },
  {
    label: 'Syrian Pound',
    value: 'SYP',
    symbol: 'SY£',
    symbol_native: 'ل.س.‏',
    decimal_digits: 0
  },
  {
    label: 'Thai Baht',
    value: 'THB',
    symbol: '฿',
    symbol_native: '฿',
    decimal_digits: 2
  },
  {
    label: 'Tunisian Dinar',
    value: 'TND',
    symbol: 'DT',
    symbol_native: 'د.ت.‏',
    decimal_digits: 3
  },
  {
    label: 'Tongan Paʻanga',
    value: 'TOP',
    symbol: 'T$',
    symbol_native: 'T$',
    decimal_digits: 2
  },
  {
    label: 'Turkish Lira',
    value: 'TRY',
    symbol: 'TL',
    symbol_native: 'TL',
    decimal_digits: 2
  },
  {
    label: 'Trinidad and Tobago Dollar',
    value: 'TTD',
    symbol: 'TT$',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'New Taiwan Dollar',
    value: 'TWD',
    symbol: 'NT$',
    symbol_native: 'NT$',
    decimal_digits: 2
  },
  {
    label: 'Tanzanian Shilling',
    value: 'TZS',
    symbol: 'TSh',
    symbol_native: 'TSh',
    decimal_digits: 0
  },
  {
    label: 'Ukrainian Hryvnia',
    value: 'UAH',
    symbol: '₴',
    symbol_native: '₴',
    decimal_digits: 2
  },
  {
    label: 'Ugandan Shilling',
    value: 'UGX',
    symbol: 'USh',
    symbol_native: 'USh',
    decimal_digits: 0
  },
  {
    label: 'Uruguayan Peso',
    value: 'UYU',
    symbol: '$U',
    symbol_native: '$',
    decimal_digits: 2
  },
  {
    label: 'Uzbekistan Som',
    value: 'UZS',
    symbol: 'UZS',
    symbol_native: 'UZS',
    decimal_digits: 0
  },
  {
    label: 'Venezuelan Bolívar',
    value: 'VEF',
    symbol: 'Bs.F.',
    symbol_native: 'Bs.F.',
    decimal_digits: 2
  },
  {
    label: 'Vietnamese Dong',
    value: 'VND',
    symbol: '₫',
    symbol_native: '₫',
    decimal_digits: 0
  },
  {
    label: 'CFA Franc BEAC',
    value: 'XAF',
    symbol: 'FCFA',
    symbol_native: 'FCFA',
    decimal_digits: 0
  },
  {
    label: 'CFA Franc BCEAO',
    value: 'XOF',
    symbol: 'CFA',
    symbol_native: 'CFA',
    decimal_digits: 0
  },
  {
    label: 'CFP franc',
    value: 'XPF',
    symbol: 'Fr',
    symbol_native: 'Fr',
    decimal_digits: 0
  },
  {
    label: 'Yemeni Rial',
    value: 'YER',
    symbol: 'YR',
    symbol_native: 'ر.ي.‏',
    decimal_digits: 0
  },
  {
    label: 'South African Rand',
    value: 'ZAR',
    symbol: 'R',
    symbol_native: 'R',
    decimal_digits: 2
  },
  {
    label: 'Zambian Kwacha',
    value: 'ZMK',
    symbol: 'ZK',
    symbol_native: 'ZK',
    decimal_digits: 0
  },
  {
    label: 'Zimbabwean Dollar',
    value: 'ZWL',
    symbol: 'ZWL$',
    symbol_native: 'ZWL$',
    decimal_digits: 0
  }
];


module.exports = options;
