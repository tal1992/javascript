window.onload = function () {
    data = {
        insertIdHere: 'searchcountryhere', // id of the element where searchlist needs to be inserted
        id: 'searchcountry', // fresh id of the new input searchlist
        placeholder: 'Search Country', // placeholder of new input searchlist
        name: 'SearchCountry', // name of new input searchlist
        initvalue: 'India', // default value of new input searchlist
        listdata: [{    // pass json data to be shown in searchlist, change key.name in searchlist.js line 12 as per your json file
                "name": "Albania",
                "code": "AL"
            },
            {
                "name": "Algeria",
                "code": "DZ"
            },
            {
                "name": "Antigua and Barbuda",
                "code": "AG"
            },
            {
                "name": "Argentina",
                "code": "AR"
            },
            {
                "name": "Armenia",
                "code": "AM"
            },
            {
                "name": "Australia",
                "code": "AU"
            },
            {
                "name": "Austria",
                "code": "AT"
            },
            {
                "name": "Azerbaijan",
                "code": "AZ"
            },
            {
                "name": "Bahamas",
                "code": "BS"
            },
            {
                "name": "Bahrain",
                "code": "BH"
            },
            {
                "name": "Bhutan",
                "code": "BT"
            },
            {
                "name": "Bolivia",
                "code": "BO"
            },
            {
                "name": "Brunei Darussalam",
                "code": "BN"
            },
            {
                "name": "Bulgaria",
                "code": "BG"
            },
            {
                "name": "Burkina Faso",
                "code": "BF"
            },
            {
                "name": "Burundi",
                "code": "BI"
            },
            {
                "name": "Cambodia",
                "code": "KH"
            },
            {
                "name": "Cameroon",
                "code": "CM"
            },
            {
                "name": "Canada",
                "code": "CA"
            },
            {
                "name": "Cape Verde",
                "code": "CV"
            },
            {
                "name": "Cayman Islands",
                "code": "KY"
            },
            {
                "name": "Central African Republic",
                "code": "CF"
            },
            {
                "name": "Chad",
                "code": "TD"
            },
            {
                "name": "Chile",
                "code": "CL"
            },
            {
                "name": "China",
                "code": "CN"
            },
            {
                "name": "Croatia",
                "code": "HR"
            },
            {
                "name": "Cuba",
                "code": "CU"
            },
            {
                "name": "Cyprus",
                "code": "CY"
            },
            {
                "name": "Czech Republic",
                "code": "CZ"
            },
            {
                "name": "Denmark",
                "code": "DK"
            },
            {
                "name": "Djibouti",
                "code": "DJ"
            },
            {
                "name": "Dominica",
                "code": "DM"
            },
            {
                "name": "Dominican Republic",
                "code": "DO"
            },
            {
                "name": "Ecuador",
                "code": "EC"
            },
            {
                "name": "Egypt",
                "code": "EG"
            },
            {
                "name": "El Salvador",
                "code": "SV"
            },
            {
                "name": "Equatorial Guinea",
                "code": "GQ"
            },
            {
                "name": "Eritrea",
                "code": "ER"
            },
            {
                "name": "Estonia",
                "code": "EE"
            },
            {
                "name": "Ethiopia",
                "code": "ET"
            },
            {
                "name": "Gabon",
                "code": "GA"
            },
            {
                "name": "Gambia",
                "code": "GM"
            },
            {
                "name": "Georgia",
                "code": "GE"
            },
            {
                "name": "Germany",
                "code": "DE"
            },
            {
                "name": "Ghana",
                "code": "GH"
            },
            {
                "name": "Gibraltar",
                "code": "GI"
            },
            {
                "name": "Greece",
                "code": "GR"
            },
            {
                "name": "Greenland",
                "code": "GL"
            },
            {
                "name": "Grenada",
                "code": "GD"
            },
            {
                "name": "Guadeloupe",
                "code": "GP"
            },
            {
                "name": "Guam",
                "code": "GU"
            },
            {
                "name": "Iceland",
                "code": "IS"
            },
            {
                "name": "India",
                "code": "IN"
            },
            {
                "name": "Indonesia",
                "code": "ID"
            },
            {
                "name": "Iran, Islamic Republic Of",
                "code": "IR"
            },
            {
                "name": "Iraq",
                "code": "IQ"
            },
            {
                "name": "Ireland",
                "code": "IE"
            },
            {
                "name": "Isle of Man",
                "code": "IM"
            },
            {
                "name": "Israel",
                "code": "IL"
            },
            {
                "name": "Italy",
                "code": "IT"
            },
            {
                "name": "Jamaica",
                "code": "JM"
            },
            {
                "name": "Japan",
                "code": "JP"
            },
            {
                "name": "Jersey",
                "code": "JE"
            },
            {
                "name": "Jordan",
                "code": "JO"
            },
            {
                "name": "Kazakhstan",
                "code": "KZ"
            },
            {
                "name": "Kenya",
                "code": "KE"
            },
            {
                "name": "Lao People\"S Democratic Republic",
                "code": "LA"
            },
            {
                "name": "Latvia",
                "code": "LV"
            },
            {
                "name": "Lebanon",
                "code": "LB"
            },
            {
                "name": "Lesotho",
                "code": "LS"
            },
            {
                "name": "Liberia",
                "code": "LR"
            },
            {
                "name": "Malta",
                "code": "MT"
            },
            {
                "name": "Marshall Islands",
                "code": "MH"
            },
            {
                "name": "Martinique",
                "code": "MQ"
            },
            {
                "name": "Mauritania",
                "code": "MR"
            },
            {
                "name": "Mauritius",
                "code": "MU"
            },
            {
                "name": "Mayotte",
                "code": "YT"
            },
            {
                "name": "Mexico",
                "code": "MX"
            },
            {
                "name": "Micronesia, Federated States of",
                "code": "FM"
            },
            {
                "name": "Moldova, Republic of",
                "code": "MD"
            },
            {
                "name": "Namibia",
                "code": "NA"
            },
            {
                "name": "Nauru",
                "code": "NR"
            },
            {
                "name": "Nepal",
                "code": "NP"
            },
            {
                "name": "Netherlands",
                "code": "NL"
            },
            {
                "name": "Netherlands Antilles",
                "code": "AN"
            },
            {
                "name": "New Caledonia",
                "code": "NC"
            },
            {
                "name": "New Zealand",
                "code": "NZ"
            },
            {
                "name": "Norfolk Island",
                "code": "NF"
            },
            {
                "name": "Northern Mariana Islands",
                "code": "MP"
            },
            {
                "name": "Norway",
                "code": "NO"
            },
            {
                "name": "Oman",
                "code": "OM"
            },
            {
                "name": "Pakistan",
                "code": "PK"
            },
            {
                "name": "Palau",
                "code": "PW"
            },
            {
                "name": "Palestinian Territory, Occupied",
                "code": "PS"
            },
            {
                "name": "Panama",
                "code": "PA"
            },
            {
                "name": "Papua New Guinea",
                "code": "PG"
            },
            {
                "name": "Russian Federation",
                "code": "RU"
            },
            {
                "name": "RWANDA",
                "code": "RW"
            },
            {
                "name": "Saint Helena",
                "code": "SH"
            },
            {
                "name": "Saint Kitts and Nevis",
                "code": "KN"
            },
            {
                "name": "Saint Lucia",
                "code": "LC"
            },
            {
                "name": "Saint Pierre and Miquelon",
                "code": "PM"
            },
            {
                "name": "Saint Vincent and the Grenadines",
                "code": "VC"
            },
            {
                "name": "Samoa",
                "code": "WS"
            },
            {
                "name": "San Marino",
                "code": "SM"
            },
            {
                "name": "Sao Tome and Principe",
                "code": "ST"
            },
            {
                "name": "Saudi Arabia",
                "code": "SA"
            },
            {
                "name": "Spain",
                "code": "ES"
            },
            {
                "name": "Sri Lanka",
                "code": "LK"
            },
            {
                "name": "Sudan",
                "code": "SD"
            },
            {
                "name": "Suriname",
                "code": "SR"
            },
            {
                "name": "Svalbard and Jan Mayen",
                "code": "SJ"
            },
            {
                "name": "Swaziland",
                "code": "SZ"
            },
            {
                "name": "Sweden",
                "code": "SE"
            },
            {
                "name": "Switzerland",
                "code": "CH"
            },
            {
                "name": "Tunisia",
                "code": "TN"
            },
            {
                "name": "Turkey",
                "code": "TR"
            },
            {
                "name": "Turkmenistan",
                "code": "TM"
            },
            {
                "name": "Turks and Caicos Islands",
                "code": "TC"
            },
            {
                "name": "Tuvalu",
                "code": "TV"
            },
            {
                "name": "Uganda",
                "code": "UG"
            },
            {
                "name": "Ukraine",
                "code": "UA"
            },
            {
                "name": "United Arab Emirates",
                "code": "AE"
            },
            {
                "name": "United Kingdom",
                "code": "GB"
            },
            {
                "name": "Uruguay",
                "code": "UY"
            },
            {
                "name": "Uzbekistan",
                "code": "UZ"
            },
            {
                "name": "Vanuatu",
                "code": "VU"
            },
            {
                "name": "Yemen",
                "code": "YE"
            },
            {
                "name": "Zambia",
                "code": "ZM"
            },
            {
                "name": "Zimbabwe",
                "code": "ZW"
            }
        ]
    }
    searchlist.init(data);
}