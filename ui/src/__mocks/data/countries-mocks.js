import { MOCK_ID, randomIntFromInterval } from "./common";

const countriesData = [];

// Sorted alphabetical by country name (special characters on bottom)
const templateCountryData = [
  { id: MOCK_ID, iso2: "AF", iso3: "AFG", name: "Afghanistan", number: "004" },
  { id: MOCK_ID, iso2: "AL", iso3: "ALB", name: "Albania", number: "008" },
  { id: MOCK_ID, iso2: "DZ", iso3: "DZA", name: "Algeria", number: "012" },
  { id: MOCK_ID, iso2: "AS", iso3: "ASM", name: "American Samoa", number: "016" },
  { id: MOCK_ID, iso2: "AD", iso3: "AND", name: "Andorra", number: "020" },
  { id: MOCK_ID, iso2: "AO", iso3: "AGO", name: "Angola", number: "024" },
  { id: MOCK_ID, iso2: "AI", iso3: "AIA", name: "Anguilla", number: "660" },
  { id: MOCK_ID, iso2: "AQ", iso3: "ATA", name: "Antarctica", number: "010" },
  { id: MOCK_ID, iso2: "AG", iso3: "ATG", name: "Antigua and Barbuda", number: "028" },
  { id: MOCK_ID, iso2: "AR", iso3: "ARG", name: "Argentina", number: "032" },
  { id: MOCK_ID, iso2: "AM", iso3: "ARM", name: "Armenia", number: "051" },
  { id: MOCK_ID, iso2: "AW", iso3: "ABW", name: "Aruba", number: "533" },
  { id: MOCK_ID, iso2: "AU", iso3: "AUS", name: "Australia", number: "036" },
  { id: MOCK_ID, iso2: "AT", iso3: "AUT", name: "Austria", number: "040" },
  { id: MOCK_ID, iso2: "AZ", iso3: "AZE", name: "Azerbaijan", number: "031" },
  { id: MOCK_ID, iso2: "BS", iso3: "BHS", name: "Bahamas (the)", number: "044" },
  { id: MOCK_ID, iso2: "BH", iso3: "BHR", name: "Bahrain", number: "048" },
  { id: MOCK_ID, iso2: "BD", iso3: "BGD", name: "Bangladesh", number: "050" },
  { id: MOCK_ID, iso2: "BB", iso3: "BRB", name: "Barbados", number: "052" },
  { id: MOCK_ID, iso2: "BY", iso3: "BLR", name: "Belarus", number: "112" },
  { id: MOCK_ID, iso2: "BE", iso3: "BEL", name: "Belgium", number: "056" },
  { id: MOCK_ID, iso2: "BZ", iso3: "BLZ", name: "Belize", number: "084" },
  { id: MOCK_ID, iso2: "BJ", iso3: "BEN", name: "Benin", number: "204" },
  { id: MOCK_ID, iso2: "BM", iso3: "BMU", name: "Bermuda", number: "060" },
  { id: MOCK_ID, iso2: "BT", iso3: "BTN", name: "Bhutan", number: "064" },
  { id: MOCK_ID, iso2: "BO", iso3: "BOL", name: "Bolivia (Plurinational State of)", number: "068" },
  { id: MOCK_ID, iso2: "BQ", iso3: "BES", name: "Bonaire, Sint Eustatius and Saba", number: "535" },
  { id: MOCK_ID, iso2: "BA", iso3: "BIH", name: "Bosnia and Herzegovina", number: "070" },
  { id: MOCK_ID, iso2: "BW", iso3: "BWA", name: "Botswana", number: "072" },
  { id: MOCK_ID, iso2: "BV", iso3: "BVT", name: "Bouvet Island", number: "074" },
  { id: MOCK_ID, iso2: "BR", iso3: "BRA", name: "Brazil", number: "076" },
  {
    id: MOCK_ID,
    iso2: "IO",
    iso3: "IOT",
    name: "British Indian Ocean Territory (the)",
    number: "086",
  },
  { id: MOCK_ID, iso2: "BN", iso3: "BRN", name: "Brunei Darussalam", number: "096" },
  { id: MOCK_ID, iso2: "BG", iso3: "BGR", name: "Bulgaria", number: "100" },
  { id: MOCK_ID, iso2: "BF", iso3: "BFA", name: "Burkina Faso", number: "854" },
  { id: MOCK_ID, iso2: "BI", iso3: "BDI", name: "Burundi", number: "108" },
  { id: MOCK_ID, iso2: "CV", iso3: "CPV", name: "Cabo Verde", number: "132" },
  { id: MOCK_ID, iso2: "KH", iso3: "KHM", name: "Cambodia", number: "116" },
  { id: MOCK_ID, iso2: "CM", iso3: "CMR", name: "Cameroon", number: "120" },
  { id: MOCK_ID, iso2: "CA", iso3: "CAN", name: "Canada", number: "124" },
  { id: MOCK_ID, iso2: "KY", iso3: "CYM", name: "Cayman Islands (the)", number: "136" },
  { id: MOCK_ID, iso2: "CF", iso3: "CAF", name: "Central African Republic (the)", number: "140" },
  { id: MOCK_ID, iso2: "TD", iso3: "TCD", name: "Chad", number: "148" },
  { id: MOCK_ID, iso2: "CL", iso3: "CHL", name: "Chile", number: "152" },
  { id: MOCK_ID, iso2: "CN", iso3: "CHN", name: "China", number: "156" },
  { id: MOCK_ID, iso2: "CX", iso3: "CXR", name: "Christmas Island", number: "162" },
  { id: MOCK_ID, iso2: "CC", iso3: "CCK", name: "Cocos (Keeling) Islands (the)", number: "166" },
  { id: MOCK_ID, iso2: "CO", iso3: "COL", name: "Colombia", number: "170" },
  { id: MOCK_ID, iso2: "KM", iso3: "COM", name: "Comoros (the)", number: "174" },
  {
    id: MOCK_ID,
    iso2: "CD",
    iso3: "COD",
    name: "Congo (the Democratic Republic of the)",
    number: "180",
  },
  { id: MOCK_ID, iso2: "CG", iso3: "COG", name: "Congo (the)", number: "178" },
  { id: MOCK_ID, iso2: "CK", iso3: "COK", name: "Cook Islands (the)", number: "184" },
  { id: MOCK_ID, iso2: "CR", iso3: "CRI", name: "Costa Rica", number: "188" },
  { id: MOCK_ID, iso2: "HR", iso3: "HRV", name: "Croatia", number: "191" },
  { id: MOCK_ID, iso2: "CU", iso3: "CUB", name: "Cuba", number: "192" },
  { id: MOCK_ID, iso2: "CW", iso3: "CUW", name: "Curaçao", number: "531" },
  { id: MOCK_ID, iso2: "CY", iso3: "CYP", name: "Cyprus", number: "196" },
  { id: MOCK_ID, iso2: "CZ", iso3: "CZE", name: "Czechia", number: "203" },
  { id: MOCK_ID, iso2: "CI", iso3: "CIV", name: "Côte d'Ivoire", number: "384" },
  { id: MOCK_ID, iso2: "DK", iso3: "DNK", name: "Denmark", number: "208" },
  { id: MOCK_ID, iso2: "DJ", iso3: "DJI", name: "Djibouti", number: "262" },
  { id: MOCK_ID, iso2: "DM", iso3: "DMA", name: "Dominica", number: "212" },
  { id: MOCK_ID, iso2: "DO", iso3: "DOM", name: "Dominican Republic (the)", number: "214" },
  { id: MOCK_ID, iso2: "EC", iso3: "ECU", name: "Ecuador", number: "218" },
  { id: MOCK_ID, iso2: "EG", iso3: "EGY", name: "Egypt", number: "818" },
  { id: MOCK_ID, iso2: "SV", iso3: "SLV", name: "El Salvador", number: "222" },
  { id: MOCK_ID, iso2: "GQ", iso3: "GNQ", name: "Equatorial Guinea", number: "226" },
  { id: MOCK_ID, iso2: "ER", iso3: "ERI", name: "Eritrea", number: "232" },
  { id: MOCK_ID, iso2: "EE", iso3: "EST", name: "Estonia", number: "233" },
  { id: MOCK_ID, iso2: "SZ", iso3: "SWZ", name: "Eswatini", number: "748" },
  { id: MOCK_ID, iso2: "ET", iso3: "ETH", name: "Ethiopia", number: "231" },
  {
    id: MOCK_ID,
    iso2: "FK",
    iso3: "FLK",
    name: "Falkland Islands (the) [Malvinas]",
    number: "238",
  },
  { id: MOCK_ID, iso2: "FO", iso3: "FRO", name: "Faroe Islands (the)", number: "234" },
  { id: MOCK_ID, iso2: "FJ", iso3: "FJI", name: "Fiji", number: "242" },
  { id: MOCK_ID, iso2: "FI", iso3: "FIN", name: "Finland", number: "246" },
  { id: MOCK_ID, iso2: "FR", iso3: "FRA", name: "France", number: "250" },
  { id: MOCK_ID, iso2: "GF", iso3: "GUF", name: "French Guiana", number: "254" },
  { id: MOCK_ID, iso2: "PF", iso3: "PYF", name: "French Polynesia", number: "258" },
  {
    id: MOCK_ID,
    iso2: "TF",
    iso3: "ATF",
    name: "French Southern Territories (the)",
    number: "260",
  },
  { id: MOCK_ID, iso2: "GA", iso3: "GAB", name: "Gabon", number: "266" },
  { id: MOCK_ID, iso2: "GM", iso3: "GMB", name: "Gambia (the)", number: "270" },
  { id: MOCK_ID, iso2: "GE", iso3: "GEO", name: "Georgia", number: "268" },
  { id: MOCK_ID, iso2: "DE", iso3: "DEU", name: "Germany", number: "276" },
  { id: MOCK_ID, iso2: "GH", iso3: "GHA", name: "Ghana", number: "288" },
  { id: MOCK_ID, iso2: "GI", iso3: "GIB", name: "Gibraltar", number: "292" },
  { id: MOCK_ID, iso2: "GR", iso3: "GRC", name: "Greece", number: "300" },
  { id: MOCK_ID, iso2: "GL", iso3: "GRL", name: "Greenland", number: "304" },
  { id: MOCK_ID, iso2: "GD", iso3: "GRD", name: "Grenada", number: "308" },
  { id: MOCK_ID, iso2: "GP", iso3: "GLP", name: "Guadeloupe", number: "312" },
  { id: MOCK_ID, iso2: "GU", iso3: "GUM", name: "Guam", number: "316" },
  { id: MOCK_ID, iso2: "GT", iso3: "GTM", name: "Guatemala", number: "320" },
  { id: MOCK_ID, iso2: "GG", iso3: "GGY", name: "Guernsey", number: "831" },
  { id: MOCK_ID, iso2: "GN", iso3: "GIN", name: "Guinea", number: "324" },
  { id: MOCK_ID, iso2: "GW", iso3: "GNB", name: "Guinea-Bissau", number: "624" },
  { id: MOCK_ID, iso2: "GY", iso3: "GUY", name: "Guyana", number: "328" },
  { id: MOCK_ID, iso2: "HT", iso3: "HTI", name: "Haiti", number: "332" },
  {
    id: MOCK_ID,
    iso2: "HM",
    iso3: "HMD",
    name: "Heard Island and McDonald Islands",
    number: "334",
  },
  { id: MOCK_ID, iso2: "VA", iso3: "VAT", name: "Holy See (the)", number: "336" },
  { id: MOCK_ID, iso2: "HN", iso3: "HND", name: "Honduras", number: "340" },
  { id: MOCK_ID, iso2: "HK", iso3: "HKG", name: "Hong Kong", number: "344" },
  { id: MOCK_ID, iso2: "HU", iso3: "HUN", name: "Hungary", number: "348" },
  { id: MOCK_ID, iso2: "IS", iso3: "ISL", name: "Iceland", number: "352" },
  { id: MOCK_ID, iso2: "IN", iso3: "IND", name: "India", number: "356" },
  { id: MOCK_ID, iso2: "ID", iso3: "IDN", name: "Indonesia", number: "360" },
  { id: MOCK_ID, iso2: "IR", iso3: "IRN", name: "Iran (Islamic Republic of)", number: "364" },
  { id: MOCK_ID, iso2: "IQ", iso3: "IRQ", name: "Iraq", number: "368" },
  { id: MOCK_ID, iso2: "IE", iso3: "IRL", name: "Ireland", number: "372" },
  { id: MOCK_ID, iso2: "IM", iso3: "IMN", name: "Isle of Man", number: "833" },
  { id: MOCK_ID, iso2: "IL", iso3: "ISR", name: "Israel", number: "376" },
  { id: MOCK_ID, iso2: "IT", iso3: "ITA", name: "Italy", number: "380" },
  { id: MOCK_ID, iso2: "JM", iso3: "JAM", name: "Jamaica", number: "388" },
  { id: MOCK_ID, iso2: "JP", iso3: "JPN", name: "Japan", number: "392" },
  { id: MOCK_ID, iso2: "JE", iso3: "JEY", name: "Jersey", number: "832" },
  { id: MOCK_ID, iso2: "JO", iso3: "JOR", name: "Jordan", number: "400" },
  { id: MOCK_ID, iso2: "KZ", iso3: "KAZ", name: "Kazakhstan", number: "398" },
  { id: MOCK_ID, iso2: "KE", iso3: "KEN", name: "Kenya", number: "404" },
  { id: MOCK_ID, iso2: "KI", iso3: "KIR", name: "Kiribati", number: "296" },
  {
    id: MOCK_ID,
    iso2: "KP",
    iso3: "PRK",
    name: "Korea (the Democratic People's Republic of)",
    number: "408",
  },
  { id: MOCK_ID, iso2: "KR", iso3: "KOR", name: "Korea (the Republic of)", number: "410" },
  { id: MOCK_ID, iso2: "KW", iso3: "KWT", name: "Kuwait", number: "414" },
  { id: MOCK_ID, iso2: "KG", iso3: "KGZ", name: "Kyrgyzstan", number: "417" },
  {
    id: MOCK_ID,
    iso2: "LA",
    iso3: "LAO",
    name: "Lao People's Democratic Republic (the)",
    number: "418",
  },
  { id: MOCK_ID, iso2: "LV", iso3: "LVA", name: "Latvia", number: "428" },
  { id: MOCK_ID, iso2: "LB", iso3: "LBN", name: "Lebanon", number: "422" },
  { id: MOCK_ID, iso2: "LS", iso3: "LSO", name: "Lesotho", number: "426" },
  { id: MOCK_ID, iso2: "LR", iso3: "LBR", name: "Liberia", number: "430" },
  { id: MOCK_ID, iso2: "LY", iso3: "LBY", name: "Libya", number: "434" },
  { id: MOCK_ID, iso2: "LI", iso3: "LIE", name: "Liechtenstein", number: "438" },
  { id: MOCK_ID, iso2: "LT", iso3: "LTU", name: "Lithuania", number: "440" },
  { id: MOCK_ID, iso2: "LU", iso3: "LUX", name: "Luxembourg", number: "442" },
  { id: MOCK_ID, iso2: "MO", iso3: "MAC", name: "Macao", number: "446" },
  { id: MOCK_ID, iso2: "MG", iso3: "MDG", name: "Madagascar", number: "450" },
  { id: MOCK_ID, iso2: "MW", iso3: "MWI", name: "Malawi", number: "454" },
  { id: MOCK_ID, iso2: "MY", iso3: "MYS", name: "Malaysia", number: "458" },
  { id: MOCK_ID, iso2: "MV", iso3: "MDV", name: "Maldives", number: "462" },
  { id: MOCK_ID, iso2: "ML", iso3: "MLI", name: "Mali", number: "466" },
  { id: MOCK_ID, iso2: "MT", iso3: "MLT", name: "Malta", number: "470" },
  { id: MOCK_ID, iso2: "MH", iso3: "MHL", name: "Marshall Islands (the)", number: "584" },
  { id: MOCK_ID, iso2: "MQ", iso3: "MTQ", name: "Martinique", number: "474" },
  { id: MOCK_ID, iso2: "MR", iso3: "MRT", name: "Mauritania", number: "478" },
  { id: MOCK_ID, iso2: "MU", iso3: "MUS", name: "Mauritius", number: "480" },
  { id: MOCK_ID, iso2: "YT", iso3: "MYT", name: "Mayotte", number: "175" },
  { id: MOCK_ID, iso2: "MX", iso3: "MEX", name: "Mexico", number: "484" },
  { id: MOCK_ID, iso2: "FM", iso3: "FSM", name: "Micronesia (Federated States of)", number: "583" },
  { id: MOCK_ID, iso2: "MD", iso3: "MDA", name: "Moldova (the Republic of)", number: "498" },
  { id: MOCK_ID, iso2: "MC", iso3: "MCO", name: "Monaco", number: "492" },
  { id: MOCK_ID, iso2: "MN", iso3: "MNG", name: "Mongolia", number: "496" },
  { id: MOCK_ID, iso2: "ME", iso3: "MNE", name: "Montenegro", number: "499" },
  { id: MOCK_ID, iso2: "MS", iso3: "MSR", name: "Montserrat", number: "500" },
  { id: MOCK_ID, iso2: "MA", iso3: "MAR", name: "Morocco", number: "504" },
  { id: MOCK_ID, iso2: "MZ", iso3: "MOZ", name: "Mozambique", number: "508" },
  { id: MOCK_ID, iso2: "MM", iso3: "MMR", name: "Myanmar", number: "104" },
  { id: MOCK_ID, iso2: "NA", iso3: "NAM", name: "Namibia", number: "516" },
  { id: MOCK_ID, iso2: "NR", iso3: "NRU", name: "Nauru", number: "520" },
  { id: MOCK_ID, iso2: "NP", iso3: "NPL", name: "Nepal", number: "524" },
  { id: MOCK_ID, iso2: "NL", iso3: "NLD", name: "Netherlands (the)", number: "528" },
  { id: MOCK_ID, iso2: "NC", iso3: "NCL", name: "New Caledonia", number: "540" },
  { id: MOCK_ID, iso2: "NZ", iso3: "NZL", name: "New Zealand", number: "554" },
  { id: MOCK_ID, iso2: "NI", iso3: "NIC", name: "Nicaragua", number: "558" },
  { id: MOCK_ID, iso2: "NE", iso3: "NER", name: "Niger (the)", number: "562" },
  { id: MOCK_ID, iso2: "NG", iso3: "NGA", name: "Nigeria", number: "566" },
  { id: MOCK_ID, iso2: "NU", iso3: "NIU", name: "Niue", number: "570" },
  { id: MOCK_ID, iso2: "NF", iso3: "NFK", name: "Norfolk Island", number: "574" },
  { id: MOCK_ID, iso2: "MP", iso3: "MNP", name: "Northern Mariana Islands (the)", number: "580" },
  { id: MOCK_ID, iso2: "NO", iso3: "NOR", name: "Norway", number: "578" },
  { id: MOCK_ID, iso2: "OM", iso3: "OMN", name: "Oman", number: "512" },
  { id: MOCK_ID, iso2: "PK", iso3: "PAK", name: "Pakistan", number: "586" },
  { id: MOCK_ID, iso2: "PW", iso3: "PLW", name: "Palau", number: "585" },
  { id: MOCK_ID, iso2: "PS", iso3: "PSE", name: "Palestine, State of", number: "275" },
  { id: MOCK_ID, iso2: "PA", iso3: "PAN", name: "Panama", number: "591" },
  { id: MOCK_ID, iso2: "PG", iso3: "PNG", name: "Papua New Guinea", number: "598" },
  { id: MOCK_ID, iso2: "PY", iso3: "PRY", name: "Paraguay", number: "600" },
  { id: MOCK_ID, iso2: "PE", iso3: "PER", name: "Peru", number: "604" },
  { id: MOCK_ID, iso2: "PH", iso3: "PHL", name: "Philippines (the)", number: "608" },
  { id: MOCK_ID, iso2: "PN", iso3: "PCN", name: "Pitcairn", number: "612" },
  { id: MOCK_ID, iso2: "PL", iso3: "POL", name: "Poland", number: "616" },
  { id: MOCK_ID, iso2: "PT", iso3: "PRT", name: "Portugal", number: "620" },
  { id: MOCK_ID, iso2: "PR", iso3: "PRI", name: "Puerto Rico", number: "630" },
  { id: MOCK_ID, iso2: "QA", iso3: "QAT", name: "Qatar", number: "634" },
  { id: MOCK_ID, iso2: "MK", iso3: "MKD", name: "Republic of North Macedonia", number: "807" },
  { id: MOCK_ID, iso2: "RO", iso3: "ROU", name: "Romania", number: "642" },
  { id: MOCK_ID, iso2: "RU", iso3: "RUS", name: "Russian Federation (the)", number: "643" },
  { id: MOCK_ID, iso2: "RW", iso3: "RWA", name: "Rwanda", number: "646" },
  { id: MOCK_ID, iso2: "RE", iso3: "REU", name: "Réunion", number: "638" },
  { id: MOCK_ID, iso2: "BL", iso3: "BLM", name: "Saint Barthélemy", number: "652" },
  {
    id: MOCK_ID,
    iso2: "SH",
    iso3: "SHN",
    name: "Saint Helena, Ascension and Tristan da Cunha",
    number: "654",
  },
  { id: MOCK_ID, iso2: "KN", iso3: "KNA", name: "Saint Kitts and Nevis", number: "659" },
  { id: MOCK_ID, iso2: "LC", iso3: "LCA", name: "Saint Lucia", number: "662" },
  { id: MOCK_ID, iso2: "MF", iso3: "MAF", name: "Saint Martin (French part)", number: "663" },
  { id: MOCK_ID, iso2: "PM", iso3: "SPM", name: "Saint Pierre and Miquelon", number: "666" },
  { id: MOCK_ID, iso2: "VC", iso3: "VCT", name: "Saint Vincent and the Grenadines", number: "670" },
  { id: MOCK_ID, iso2: "WS", iso3: "WSM", name: "Samoa", number: "882" },
  { id: MOCK_ID, iso2: "SM", iso3: "SMR", name: "San Marino", number: "674" },
  { id: MOCK_ID, iso2: "ST", iso3: "STP", name: "Sao Tome and Principe", number: "678" },
  { id: MOCK_ID, iso2: "SA", iso3: "SAU", name: "Saudi Arabia", number: "682" },
  { id: MOCK_ID, iso2: "SN", iso3: "SEN", name: "Senegal", number: "686" },
  { id: MOCK_ID, iso2: "RS", iso3: "SRB", name: "Serbia", number: "688" },
  { id: MOCK_ID, iso2: "SC", iso3: "SYC", name: "Seychelles", number: "690" },
  { id: MOCK_ID, iso2: "SL", iso3: "SLE", name: "Sierra Leone", number: "694" },
  { id: MOCK_ID, iso2: "SG", iso3: "SGP", name: "Singapore", number: "702" },
  { id: MOCK_ID, iso2: "SX", iso3: "SXM", name: "Sint Maarten (Dutch part)", number: "534" },
  { id: MOCK_ID, iso2: "SK", iso3: "SVK", name: "Slovakia", number: "703" },
  { id: MOCK_ID, iso2: "SI", iso3: "SVN", name: "Slovenia", number: "705" },
  { id: MOCK_ID, iso2: "SB", iso3: "SLB", name: "Solomon Islands", number: "090" },
  { id: MOCK_ID, iso2: "SO", iso3: "SOM", name: "Somalia", number: "706" },
  { id: MOCK_ID, iso2: "ZA", iso3: "ZAF", name: "South Africa", number: "710" },
  {
    id: MOCK_ID,
    iso2: "GS",
    iso3: "SGS",
    name: "South Georgia and the South Sandwich Islands",
    number: "239",
  },
  { id: MOCK_ID, iso2: "SS", iso3: "SSD", name: "South Sudan", number: "728" },
  { id: MOCK_ID, iso2: "ES", iso3: "ESP", name: "Spain", number: "724" },
  { id: MOCK_ID, iso2: "LK", iso3: "LKA", name: "Sri Lanka", number: "144" },
  { id: MOCK_ID, iso2: "SD", iso3: "SDN", name: "Sudan (the)", number: "729" },
  { id: MOCK_ID, iso2: "SR", iso3: "SUR", name: "Suriname", number: "740" },
  { id: MOCK_ID, iso2: "SJ", iso3: "SJM", name: "Svalbard and Jan Mayen", number: "744" },
  { id: MOCK_ID, iso2: "SE", iso3: "SWE", name: "Sweden", number: "752" },
  { id: MOCK_ID, iso2: "CH", iso3: "CHE", name: "Switzerland", number: "756" },
  { id: MOCK_ID, iso2: "SY", iso3: "SYR", name: "Syrian Arab Republic", number: "760" },
  { id: MOCK_ID, iso2: "TW", iso3: "TWN", name: "Taiwan", number: "158" },
  { id: MOCK_ID, iso2: "TJ", iso3: "TJK", name: "Tajikistan", number: "762" },
  { id: MOCK_ID, iso2: "TZ", iso3: "TZA", name: "Tanzania, United Republic of", number: "834" },
  { id: MOCK_ID, iso2: "TH", iso3: "THA", name: "Thailand", number: "764" },
  { id: MOCK_ID, iso2: "TL", iso3: "TLS", name: "Timor-Leste", number: "626" },
  { id: MOCK_ID, iso2: "TG", iso3: "TGO", name: "Togo", number: "768" },
  { id: MOCK_ID, iso2: "TK", iso3: "TKL", name: "Tokelau", number: "772" },
  { id: MOCK_ID, iso2: "TO", iso3: "TON", name: "Tonga", number: "776" },
  { id: MOCK_ID, iso2: "TT", iso3: "TTO", name: "Trinidad and Tobago", number: "780" },
  { id: MOCK_ID, iso2: "TN", iso3: "TUN", name: "Tunisia", number: "788" },
  { id: MOCK_ID, iso2: "TR", iso3: "TUR", name: "Turkey", number: "792" },
  { id: MOCK_ID, iso2: "TM", iso3: "TKM", name: "Turkmenistan", number: "795" },
  { id: MOCK_ID, iso2: "TC", iso3: "TCA", name: "Turks and Caicos Islands (the)", number: "796" },
  { id: MOCK_ID, iso2: "TV", iso3: "TUV", name: "Tuvalu", number: "798" },
  { id: MOCK_ID, iso2: "UG", iso3: "UGA", name: "Uganda", number: "800" },
  { id: MOCK_ID, iso2: "UA", iso3: "UKR", name: "Ukraine", number: "804" },
  { id: MOCK_ID, iso2: "AE", iso3: "ARE", name: "United Arab Emirates (the)", number: "784" },
  {
    id: MOCK_ID,
    iso2: "GB",
    iso3: "GBR",
    name: "United Kingdom of Great Britain and Northern Ireland (the)",
    number: "826",
  },
  {
    id: MOCK_ID,
    iso2: "UM",
    iso3: "UMI",
    name: "United States Minor Outlying Islands (the)",
    number: "581",
  },
  { id: MOCK_ID, iso2: "US", iso3: "USA", name: "United States of America (the)", number: "840" },
  { id: MOCK_ID, iso2: "UY", iso3: "URY", name: "Uruguay", number: "858" },
  { id: MOCK_ID, iso2: "UZ", iso3: "UZB", name: "Uzbekistan", number: "860" },
  { id: MOCK_ID, iso2: "VU", iso3: "VUT", name: "Vanuatu", number: "548" },
  {
    id: MOCK_ID,
    iso2: "VE",
    iso3: "VEN",
    name: "Venezuela (Bolivarian Republic of)",
    number: "862",
  },
  { id: MOCK_ID, iso2: "VN", iso3: "VNM", name: "Viet Nam", number: "704" },
  { id: MOCK_ID, iso2: "VG", iso3: "VGB", name: "Virgin Islands (British)", number: "092" },
  { id: MOCK_ID, iso2: "VI", iso3: "VIR", name: "Virgin Islands (U.S.)", number: "850" },
  { id: MOCK_ID, iso2: "WF", iso3: "WLF", name: "Wallis and Futuna", number: "876" },
  { id: MOCK_ID, iso2: "EH", iso3: "ESH", name: "Western Sahara", number: "732" },
  { id: MOCK_ID, iso2: "YE", iso3: "YEM", name: "Yemen", number: "887" },
  { id: MOCK_ID, iso2: "ZM", iso3: "ZMB", name: "Zambia", number: "894" },
  { id: MOCK_ID, iso2: "ZW", iso3: "ZWE", name: "Zimbabwe", number: "716" },
  { id: MOCK_ID, iso2: "AX", iso3: "ALA", name: "Åland Islands", number: "248" },
];

const countriesWithIds = () => {
  for (let i = 0; i < templateCountryData.length; i++) {
    templateCountryData[i].id = i + 1;
  }
  return templateCountryData;
};

export const countries = () => {
  if (countriesData.length == 0) {
    const calculatedCountries = countriesWithIds();
    countriesData.push(...calculatedCountries);
  }
  return countriesData;
};

export const randomCountry = () => {
  return countries()[randomIntFromInterval(0, 12)];
};
