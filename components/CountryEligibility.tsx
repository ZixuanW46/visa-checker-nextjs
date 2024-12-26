const countryEligibilityVisaFree = [
  "BN", // Brunei
  "FR", // France
  "DE", // Germany
  "IT", // Italy
  "ES", // Spain
  "NL", // Netherlands (Holland)
  "MY", // Malaysia
  "CH", // Switzerland
  "IE", // Ireland
  "HU", // Hungary
  "AT", // Austria
  "BE", // Belgium
  "LU", // Luxembourg
  "NZ", // New Zealand
  "AU", // Australia
  "PL", // Poland
  "PT", // Portugal
  "GR", // Greece
  "CY", // Cyprus
  "SI", // Slovenia
  "SK", // Slovakia
  "NO", // Norway
  "FI", // Finland
  "DK", // Denmark
  "IS", // Iceland
  "AD", // Andorra
  "MC", // Monaco
  "LI", // Liechtenstein
  "KR", // South Korea
  "BG", // Bulgaria
  "RO", // Romania
  "HR", // Croatia
  "ME", // Montenegro
  "MK", // North Macedonia
  "MT", // Malta
  "EE", // Estonia
  "LV", // Latvia
  "JP", // Japan
] as const;

const countryEligibility240HourVisa = [
  "AT", // Austria (奥地利)
  "BE", // Belgium (比利时)
  "CZ", // Czechia (捷克)
  "DK", // Denmark (丹麦)
  "EE", // Estonia (爱沙尼亚)
  "FI", // Finland (芬兰)
  "FR", // France (法国)
  "DE", // Germany (德国)
  "GR", // Greece (希腊)
  "HU", // Hungary (匈牙利)
  "IS", // Iceland (冰岛)
  "IT", // Italy (意大利)
  "LV", // Latvia (拉脱维亚)
  "LI", // Liechtenstein (立陶宛)
  "LU", // Luxembourg (卢森堡)
  "MT", // Malta (马耳他)
  "NL", // Netherlands (荷兰)
  "PL", // Poland (波兰)
  "PT", // Portugal (葡萄牙)
  "SK", // Slovakia (斯洛伐克)
  "SI", // Slovenia (斯洛文尼亚)
  "ES", // Spain (西班牙)
  "SE", // Sweden (瑞典)
  "CH", // Switzerland (瑞士)
  "MC", // Monaco (摩纳哥)
  "RU", // Russia (俄罗斯)
  "GB", // United Kingdom (英国)
  "IE", // Ireland (爱尔兰)
  "AL", // Albania (塞浦路斯)
  "BG", // Bulgaria (保加利亚)
  "RO", // Romania (罗马尼亚)
  "UA", // Ukraine (乌克兰)
  "RS", // Serbia (塞尔维亚)
  "HR", // Croatia (克罗地亚)
  "BA", // Bosnia and Herzegovina (波黑)
  "ME", // Montenegro (黑山)
  "MK", // North Macedonia (北马其顿)
  "AL", // Albania (阿尔巴尼亚)
  "BY", // Belarus (白俄罗斯)
  "NO", // Norway (挪威)
  "US", // United States (美国)
  "CA", // Canada (加拿大)
  "BR", // Brazil (巴西)
  "MX", // Mexico (墨西哥)
  "AR", // Argentina (阿根廷)
  "CL", // Chile (智利)
  "AU", // Australia (澳大利亚)
  "NZ", // New Zealand (新西兰)
  "KR", // South Korea (韩国)
  "JP", // Japan (日本)
  "SG", // Singapore (新加坡)
  "BN", // Brunei (文莱)
  "AE", // United Arab Emirates (阿联酋)
  "QA", // Qatar (卡塔尔)
] as const;

export { countryEligibilityVisaFree, countryEligibility240HourVisa };

const countryCodeToName: Record<string, string> = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AD: "Andorra",
  AO: "Angola",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BR: "Brazil",
  BN: "Brunei",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CR: "Costa Rica",
  CI: "Côte d'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czechia",
  CD: "Democratic Republic of the Congo",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GR: "Greece",
  GD: "Grenada",
  GT: "Guatemala",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  VA: "Holy See",
  HN: "Honduras",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Laos",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MR: "Mauritania",
  MU: "Mauritius",
  MX: "Mexico",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  KP: "North Korea",
  MK: "North Macedonia",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine State",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PL: "Poland",
  PT: "Portugal",
  QA: "Qatar",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  KR: "South Korea",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

export { countryCodeToName };
