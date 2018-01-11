/*

Configuration data for the Resonant Orbit Calculator v1.3 (https://meyerweb.com/eric/ksp/resonant-orbits/).

The following are REQUIRED for each body:
	"color":  "six-digit hexadecimal RGB value" (e.g. white = #FFFFFF), MUST be quoted
	"mass":   mass, in kilograms (E+ notation preferred but not required)
	"eqr":    equatorial radius, in meters
	"day":    rotational period (i.e., length of a day), in seconds; use negative for retrograde spin (e.g., Venus)
	"atm":    outer edge of the atmosphere, in meters; use 0 if there is no atmosphere
	"SOI":    the sphere of influence radius, in meters; use 1E+15 or higher for the system's central sun

The color values were chosen based on the in-game appearance of each planet, NOT the orbit color in Map view.

The following is OPTIONAL:
	"default": true|false
		this is the body that should be the default for the system; if no body chosen, the first listed will be used
		only ONE body should be marked default

You can add other properties if you feel like it, but they’ll be ignored.

*/

var systems = {
	"KSP Stock" : {
		"Kerbol": {
			"color": "#FE9",
			"mass": 1.7565459E+28,
			"eqr": 261600000,
			"day": 432000,
			"atm": 600000,
			"SOI": 1E+15
			},
		"Moho": {
			"color": "#80736B",
			"mass": 2.52633139930162E+21,
			"eqr": 250000,
			"day": 1210000,
			"atm": 0,
			"SOI": 9646663.02332811
			},
		"Eve": {
			"color": "#897695",
			"mass": 1.2243980038014E+23,
			"eqr": 700000,
			"day": 80500,
			"atm": 90000,
			"SOI": 85109364.7382441
			},
		"Gilly": {
			"color": "#867D78",
			"mass": 1.24203632781093E+17,
			"eqr": 13000,
			"day": 28255,
			"atm": 0,
			"SOI": 126123.271704568
			},
		"Kerbin": {
			"default": true,
			"color": "#495B66",
			"mass": 5.29151583439215E+22,
			"eqr": 600000,
			"day": 21549.4251830898,
			"atm": 70000,
			"SOI": 84159286.4796305
			},
		"Mun": {
			"color": "#888",
			"mass": 9.7599066119646E+20,
			"eqr": 200000,
			"day": 138984.376574476,
			"atm": 0,
			"SOI": 2429559.11656475
			},
		"Minmus": {
			"color": "#9BB4A5",
			"mass": 2.64575795662095E+19,
			"eqr": 60000,
			"day": 40400,
			"atm": 0,
			"SOI": 2247428.3879023
			},
		"Duna": {
			"color": "#905646",
			"mass": 4.51542702477492E+21,
			"eqr": 320000,
			"day": 65517.859375,
			"atm": 50000,
			"SOI": 47921949.369738
			},
		"Ike": {
			"color": "#888",
			"mass": 2.78216152235874E+20,
			"eqr": 130000,
			"day": 65517.8621348081,
			"atm": 0,
			"SOI": 1049598.93931162
			},
		"Dres": {
			"color": "#878482",
			"mass": 3.21909365785247E+20,
			"eqr": 138000,
			"day": 34800,
			"atm": 0,
			"SOI": 32832839.5767762
			},
		"Jool": {
			"color": "#708D4B",
			"mass": 4.23321273059351E+24,
			"eqr": 6000000,
			"day": 36000,
			"atm": 200000,
			"SOI": 2455985185.42347
			},
		"Laythe": {
			"color": "#5C6068",
			"mass": 2.93973106291216E+22,
			"eqr": 500000,
			"day": 52980.8790593796,
			"atm": 50000,
			"SOI": 3723645.81113302
			},
		"Vall": {
			"color": "#879192",
			"mass": 3.10876554482042E+21,
			"eqr": 300000,
			"day": 105962.088893924,
			"atm": 0,
			"SOI": 2406401.44479404
			},
		"Tylo": {
			"color": "#9B9894",
			"mass": 4.23321273059351E+22,
			"eqr": 600000,
			"day": 211926.35802123,
			"atm": 0,
			"SOI": 10856518.3683586
			},
		"Bop": {
			"color": "#655D57",
			"mass": 3.72610898343278E+19,
			"eqr": 65000,
			"day": 544507.428516654,
			"atm": 0,
			"SOI": 1221060.86284253
			},
		"Pol": {
			"color": "#938C7E",
			"mass": 1.08135065806823E+19,
			"eqr": 44000,
			"day": 901902.623531173,
			"atm": 0,
			"SOI": 1042138.89230178
			},
		"Eeloo": {
			"color": "#959B9B",
			"mass": 1.1149224E+21,
			"eqr": 210000,
			"day": 19460,
			"atm": 0,
			"SOI": 119082941.6
			}
		},
	"Outer Planets Mod" : {
		"Kerbol": {
			"color": "#FE9",
			"mass": 1.7565459E+28,
			"eqr": 261600000,
			"day": 432000,
			"atm": 600000,
			"SOI": 1E+15
			},
		"Moho": {
			"color": "#80736B",
			"mass": 2.52633139930162E+21,
			"eqr": 250000,
			"day": 1210000,
			"atm": 0,
			"SOI": 9646663.02332811
			},
		"Eve": {
			"color": "#897695",
			"mass": 1.2243980038014E+23,
			"eqr": 700000,
			"day": 80500,
			"atm": 90000,
			"SOI": 85109364.7382441
			},
		"Gilly": {
			"color": "#867D78",
			"mass": 1.24203632781093E+17,
			"eqr": 13000,
			"day": 28255,
			"atm": 0,
			"SOI": 126123.271704568
			},
		"Kerbin": {
			"default": true,
			"color": "#495B66",
			"mass": 5.29151583439215E+22,
			"eqr": 600000,
			"day": 21549.4251830898,
			"atm": 70000,
			"SOI": 84159286.4796305
			},
		"Mun": {
			"color": "#888",
			"mass": 9.7599066119646E+20,
			"eqr": 200000,
			"day": 138984.376574476,
			"atm": 0,
			"SOI": 2429559.11656475
			},
		"Minmus": {
			"color": "#9BB4A5",
			"mass": 2.64575795662095E+19,
			"eqr": 60000,
			"day": 40400,
			"atm": 0,
			"SOI": 2247428.3879023
			},
		"Duna": {
			"color": "#905646",
			"mass": 4.51542702477492E+21,
			"eqr": 320000,
			"day": 65517.859375,
			"atm": 50000,
			"SOI": 47921949.369738
			},
		"Ike": {
			"color": "#888",
			"mass": 2.78216152235874E+20,
			"eqr": 130000,
			"day": 65517.8621348081,
			"atm": 0,
			"SOI": 1049598.93931162
			},
		"Dres": {
			"color": "#878482",
			"mass": 3.21909365785247E+20,
			"eqr": 138000,
			"day": 34800,
			"atm": 0,
			"SOI": 32832839.5767762
			},
		"Jool": {
			"color": "#708D4B",
			"mass": 4.23321273059351E+24,
			"eqr": 6000000,
			"day": 36000,
			"atm": 200000,
			"SOI": 2455985185.42347
			},
		"Laythe": {
			"color": "#5C6068",
			"mass": 2.93973106291216E+22,
			"eqr": 500000,
			"day": 52980.8790593796,
			"atm": 50000,
			"SOI": 3723645.81113302
			},
		"Vall": {
			"color": "#879192",
			"mass": 3.10876554482042E+21,
			"eqr": 300000,
			"day": 105962.088893924,
			"atm": 0,
			"SOI": 2406401.44479404
			},
		"Tylo": {
			"color": "#9B9894",
			"mass": 4.23321273059351E+22,
			"eqr": 600000,
			"day": 211926.35802123,
			"atm": 0,
			"SOI": 10856518.3683586
			},
		"Bop": {
			"color": "#655D57",
			"mass": 3.72610898343278E+19,
			"eqr": 65000,
			"day": 544507.428516654,
			"atm": 0,
			"SOI": 1221060.86284253
			},
		"Pol": {
			"color": "#938C7E",
			"mass": 1.08135065806823E+19,
			"eqr": 44000,
			"day": 901902.623531173,
			"atm": 0,
			"SOI": 1042138.89230178
			},
		"Sarnus": {
			"color": "#888",
			"mass": 1.22997779398809E+24,
			"eqr": 5300000,
			"day": 28500,
			"atm": 580000,
			"SOI": 2740126708.15753
			},
		"Hale": {
			"color": "#888",
			"mass": 1.21663303406612E+16,
			"eqr": 6000,
			"day": 23555.3138379232,
			"atm": 0,
			"SOI": 41000
			},
		"Ovok": {
			"color": "#888",
			"mass": 1.98657954354758E+17,
			"eqr": 26000,
			"day": 29440.1470076036,
			"atm": 0,
			"SOI": 94000
			},
		"Eeloo": {
			"color": "#888",
			"mass": 1.11492242417007E+21,
			"eqr": 210000,
			"day": 57914.7837330607,
			"atm": 0,
			"SOI": 1159066.15680512
			},
		"Slate": {
			"color": "#D1B7A1",
			"mass": 2.96498760110757E+22,
			"eqr": 540000,
			"day": 192771.154552164,
			"atm": 0,
			"SOI": 9598158.64601184
			},
		"Tekto": {
			"color": "#888",
			"mass": 2.88340853582816E+21,
			"eqr": 280000,
			"day": 666154.482822571,
			"atm": 95000,
			"SOI": 8637005.19544461
			},
		"Urlum": {
			"color": "#CBDFE6",
			"mass": 1.7896959235771E+23,
			"eqr": 2177000,
			"day": 41000,
			"atm": 325000,
			"SOI": 2562260673.07757
			},
		"Polta": {
			"color": "#8DAB9E",
			"mass": 1.3512267368686E+21,
			"eqr": 220000,
			"day": 73017.1106367597,
			"atm": 0,
			"SOI": 1661114.85305207
			},
		"Priax": {
			"color": "#6D6A64",
			"mass": 5.0691279849807E+19,
			"eqr": 74000,
			"day": 73017.1106367597,
			"atm": 0,
			"SOI": 446767.601978615
			},
		"Wal": {
			"color": "#84724C",
			"mass": 7.44276727953516E+21,
			"eqr": 370000,
			"day": 1009410.78951369,
			"atm": 0,
			"SOI": 18933504.6847765
			},
		"Tal": {
			"color": "#7D7361",
			"mass": 3.20027385047827E+18,
			"eqr": 22000,
			"day": 48874.4834835978,
			"atm": 0,
			"SOI": 139966.651259813
			},
		"Neidon": {
			"color": "#B697FD",
			"mass": 2.1228216518685E+23,
			"eqr": 2145000,
			"day": 40250,
			"atm": 260000,
			"SOI": 4415723830.49107
			},
		"Thatmo": {
			"color": "#D5D6DA",
			"mass": 2.78836304732338E+21,
			"eqr": 286000,
			"day": 306442.674516556,
			"atm": 35000,
			"SOI": 5709379.08853188
			},
		"Nissee": {
			"color": "#D7CDBE",
			"mass": 5.95092244923645E+18,
			"eqr": 30000,
			"day": 27924.8723,
			"atm": 0,
			"SOI": 7366476.63525513
			},
		"Plock": {
			"color": "#B59676",
			"mass": 7.76809612833529E+20,
			"eqr": 189000,
			"day": 106309.606989054,
			"atm": 0,
			"SOI": 612762335.918708
			},
		"Karen": {
			"color": "#8F7D74",
			"mass": 7.01490572670278E+19,
			"eqr": 85050,
			"day": 106327.763381606,
			"atm": 0,
			"SOI": 939354.324277521
			}
		},
	"Real Solar System" : {
		"Sun": {
			"color": "#FCD440",
			"mass": 1.988E+30,
			"eqr": 696392000,
			"day": 432000,
			"atm": 600000,
			"SOI": 1E+18
			},
		"Mercury": {
			"color": "#52515A",
			"mass": 3.3022E+23,
			"eqr": 2439700,
			"day": 5067031.68,
			"atm": 0,
			"SOI": 112424173.3
			},
		"Venus": {
			"color": "#B36229",
			"mass": 4.86747E+24,
			"eqr": 6049000,
			"day": -20996797.02,
			"atm": 145000,
			"SOI": 616281980.7
			},
		"Earth": {
			"default": true,
			"color": "#004763",
			"mass": 5.97237E+24,
			"eqr": 6371000,
			"day": 86164.0989,
			"atm": 140000,
			"SOI": 924650434.7
			},
		"Moon": {
			"color": "#E1E1E1",
			"mass": 7.34767E+22,
			"eqr": 1737100,
			"day": 2356558.618,
			"atm": 0,
			"SOI": 66173072.96
			},
		"Mars": {
			"color": "#A16331",
			"mass": 6.41711E+23,
			"eqr": 3375800,
			"day": 88642.6848,
			"atm": 125000,
			"SOI": 577254493.5
			},
		"Phobos": {
			"color": "#8F7463",
			"mass": 1.072E+16,
			"eqr": 7250,
			"day": 27575.06417,
			"atm": 0,
			"SOI": 47250
			},
		"Deimos": {
			"color": "#765F50",
			"mass": 1.48E+15,
			"eqr": 5456,
			"day": 109082.8775,
			"atm": 0,
			"SOI": 45456
			},
		"Jupiter": {
			"color": "#BF9766",
			"mass": 1.89819E+27,
			"eqr": 70941833.42,
			"day": 35730,
			"atm": 1550000,
			"SOI": 48196239907
			},
		"Io": {
			"color": "#958065",
			"mass": 8.9319E+22,
			"eqr": 1811300,
			"day": 153039.6428,
			"atm": 0,
			"SOI": 7841031.532
			},
		"Europa": {
			"color": "#685743",
			"mass": 4.7998E+22,
			"eqr": 1550800,
			"day": 307002.3723,
			"atm": 0,
			"SOI": 9728374.712
			},
		"Ganymede": {
			"color": "#A5A15D",
			"mass": 1.4819E+23,
			"eqr": 2624100,
			"day": 618553.2791,
			"atm": 0,
			"SOI": 24361825.13
			},
		"Callisto": {
			"color": "#C6C7AD",
			"mass": 1.07594E+23,
			"eqr": 2409300,
			"day": 1443315.918,
			"atm": 0,
			"SOI": 37706560.89
			},
		"Saturn": {
			"color": "#EAD8B5",
			"mass": 5.68336E+26,
			"eqr": 59216476.99,
			"day": 38052,
			"atm": 2000000,
			"SOI": 54475373438
			},
		"Mimas": {
			"color": "#E1E1E1",
			"mass": 3.7493E+19,
			"eqr": 198200,
			"day": 81843.87407,
			"atm": 0,
			"SOI": 396400
			},
		"Enceladus": {
			"color": "#E1E1E1",
			"mass": 1.08022E+20,
			"eqr": 252100,
			"day": 118762.9628,
			"atm": 0,
			"SOI": 504200
			},
		"Tethys": {
			"color": "#E1E1E1",
			"mass": 6.17449E+20,
			"eqr": 531100,
			"day": 163440.0316,
			"atm": 0,
			"SOI": 1213895.698
			},
		"Dione": {
			"color": "#E1E1E1",
			"mass": 1.09545E+21,
			"eqr": 561400,
			"day": 236765.9216,
			"atm": 0,
			"SOI": 1954724.558
			},
		"Rhea": {
			"color": "#E1E1E1",
			"mass": 2.30652E+21,
			"eqr": 763800,
			"day": 390536.924,
			"atm": 0,
			"SOI": 3675585.654
			},
		"Titan": {
			"color": "#B38040",
			"mass": 1.34522E+23,
			"eqr": 2573300,
			"day": 1377912.606,
			"atm": 600000,
			"SOI": 43324648.46
			},
		"Iapetus": {
			"color": "#E1E1E1",
			"mass": 1.805E+21,
			"eqr": 734500,
			"day": 6853119.643,
			"atm": 0,
			"SOI": 22501874.86
			},
		"Uranus": {
			"color": "#6194C7",
			"mass": 8.68125E+25,
			"eqr": 24893873.43,
			"day": 62063.712,
			"atm": 1400000,
			"SOI": 51692538810
			},
		"Neptune": {
			"color": "#315591",
			"mass": 1.02434E+26,
			"eqr": 24223903.01,
			"day": 58000.32,
			"atm": 1250000,
			"SOI": 86643720667
			},
		"Triton": {
			"color": "#E1E1E1",
			"mass": 2.13947E+22,
			"eqr": 1353400,
			"day": -507728.9877,
			"atm": 110000,
			"SOI": 11964329.55
			},
		"Pluto": {
			"color": "#AD9179",
			"mass": 1.305E+22,
			"eqr": 1187000,
			"day": 552731.9654,
			"atm": 110000,
			"SOI": 3116527989
			},
		"Charon": {
			"color": "#E1E1E1",
			"mass": 1.52E+21,
			"eqr": 603500,
			"day": 552731.9654,
			"atm": 0,
			"SOI": 8292108.138
			}
		},
	"Galileo’s Planet Pack" : {
		"Ciro": {
			"color": "#FF9",
			"mass": 1.9023392400E+28,
			"eqr": 70980000,
			"day": 540000,
			"atm": 1600000,
			"SOI": 1E+15
			},
		"Icarus": {
			"color": "#696559",
			"mass": 6.0185131734E+20,
			"eqr": 160000,
			"day": 766931.0655,
			"atm": 0,
			"SOI": 3491161.222
			},
		"Thalia": {
			"color": "#5E2E1B",
			"mass": 3.2134981226E+21,
			"eqr": 270000,
			"day": 72000,
			"atm": 0,
			"SOI": 13645687.92
			},
		"Eta": {
			"color": "#807B73",
			"mass": 2.6448544219E+19,
			"eqr": 60000,
			"day": 515362.4882,
			"atm": 0,
			"SOI": 1656715.488
			},
		"Niven": {
			"color": "#7E6247",
			"mass": 1.1754908542E+22,
			"eqr": 400000,
			"day": 43200,
			"atm": 65000,
			"SOI": 34386218.42
			},
		"Gael": {
			"default": true,
			"color": "#527D7D",
			"mass": 5.2897088438E+22,
			"eqr": 600000,
			"day": 21549.41452,
			"atm": 70000,
			"SOI": 83667623.55
			},
		"Iota": {
			"color": "#9EA09E",
			"mass": 1.2489590326E+20,
			"eqr": 100000,
			"day": 495456.2682,
			"atm": 0,
			"SOI": 2491177.09
			},
		"Ceti": {
			"color": "#5D5655",
			"mass": 4.4631918369E+20,
			"eqr": 150000,
			"day": 1363993.543,
			"atm": 0,
			"SOI": 8144195.754
			},
		"Tellumo": {
			"color": "#4D6D88",
			"mass": 2.7917907787E+23,
			"eqr": 1000000,
			"day": 57600,
			"atm": 45000,
			"SOI": 260440071.5
			},
		"Lili": {
			"color": "#48443E",
			"mass": 4.3199288891E+16,
			"eqr": 7000,
			"day": 2554.684189,
			"atm": 0,
			"SOI": 40000
			},
		"Gratian": {
			"color": "#906042",
			"mass": 3.3336185942E+22,
			"eqr": 550000,
			"day": 139245.7813,
			"atm": 50000,
			"SOI": 194786348.7
			},
		"Geminus": {
			"color": "#46413C",
			"mass": 1.7100453201E+21,
			"eqr": 230000,
			"day": 139245.7813,
			"atm": 0,
			"SOI": 3139597.025
			},
		"Otho": {
			"color": "#AD8151",
			"mass": 1.6559727408E+24,
			"eqr": 3500000,
			"day": 50400,
			"atm": 600000,
			"SOI": 1701552278
			},
		"Augustus": {
			"color": "#CC9770",
			"mass": 6.2998962966E+21,
			"eqr": 350000,
			"day": 53456.75179,
			"atm": 60000,
			"SOI": 2153486.147
			},
		"Hephaestus": {
			"color": "#5C4E3D",
			"mass": 1.8367044596E+20,
			"eqr": 125000,
			"day": 108188.8589,
			"atm": 0,
			"SOI": 837807.8343
			},
		"Jannah": {
			"color": "#473C2D",
			"mass": 1.0529826667E+20,
			"eqr": 105000,
			"day": 313204.2218,
			"atm": 0,
			"SOI": 1362261.78
			},
		"Gauss": {
			"color": "#70807F",
			"mass": 9.4590279672E+23,
			"eqr": 2500000,
			"day": 61200,
			"atm": 400000,
			"SOI": 2652003276
			},
		"Loki": {
			"color": "#4D4842",
			"mass": 4.7607379594E+20,
			"eqr": 180000,
			"day": 62924.31582,
			"atm": 0,
			"SOI": 886957.5516
			},
		"Catullus": {
			"color": "#907E7E",
			"mass": 1.9042951838E+23,
			"eqr": 1200000,
			"day": 340308.8105,
			"atm": 280000,
			"SOI": 30021332.15
			},
		"Tarsiss": {
			"color": "#645A52",
			"mass": 2.5578680987E+21,
			"eqr": 320000,
			"day": 25902.63259,
			"atm": 130000,
			"SOI": 1070061.653
			},
		"Nero": {
			"color": "#9E715D",
			"mass": 3.5632066517E+24,
			"eqr": 5000000,
			"day": 39600,
			"atm": 560000,
			"SOI": 8835394858
			},
		"Hadrian": {
			"color": "#595D60",
			"mass": 2.3803689797E+21,
			"eqr": 300000,
			"day": 66949.22302,
			"atm": 80000,
			"SOI": 1610803.495
			},
		"Narisse": {
			"color": "#4D3F38",
			"mass": 4.7607379594E+19,
			"eqr": 90000,
			"day": 135495.7007,
			"atm": 0,
			"SOI": 538982.3508
			},
		"Muse": {
			"color": "#737063",
			"mass": 1.9865795435E+20,
			"eqr": 130000,
			"day": 291540.329,
			"atm": 0,
			"SOI": 1590728.15
			},
		"Minona": {
			"color": "#6C625C",
			"mass": 1.2695301225E+20,
			"eqr": 120000,
			"day": 639093.3695,
			"atm": 0,
			"SOI": 2244163.881
			},
		"Agrippina": {
			"color": "#4E5047",
			"mass": 1.1020226758E+19,
			"eqr": 50000,
			"day": 28800,
			"atm": 0,
			"SOI": 5002991.847
			},
		"Julia": {
			"color": "#736D5D",
			"mass": 1.9836408164E+18,
			"eqr": 30000,
			"day": 36000,
			"atm": 0,
			"SOI": 5118022.32
			},
		"Hox": {
			"color": "#6F6B69",
			"mass": 1.2856931217E+21,
			"eqr": 250000,
			"day": 64800,
			"atm": 40000,
			"SOI": 567558458
			},
		"Argo": {
			"color": "#606069",
			"mass": 3.2913743917E+19,
			"eqr": 80000,
			"day": 947939.2886,
			"atm": 0,
			"SOI": 2885399.812
			},
		"Leto": {
			"color": "#67686B",
			"mass": 7.7758720003E+20,
			"eqr": 210000,
			"day": 21600,
			"atm": 35000,
			"SOI": 600295990.2
			},
		"Grannus": {
			"color": "#FF3300",
			"mass": 9.5494442933E+27,
			"eqr": 30170000,
			"day": 1296000,
			"atm": 400000,
			"SOI": 5E+11
			},
		"Sarnus": {
			"color": "#E59F88",
			"mass": 1.2299777940E+24,
			"eqr": 5300000,
			"day": 28500,
			"atm": 580000,
			"SOI": 3496577901
			},
		"Hale": {
			"color": "#C4B3AF",
			"mass": 1.2166330341E+16,
			"eqr": 6000,
			"day": 23555.31384,
			"atm": 0,
			"SOI": 41000
			},
		"Ovok": {
			"color": "#CECCCA",
			"mass": 1.9865795435E+17,
			"eqr": 26000,
			"day": 29440.14701,
			"atm": 0,
			"SOI": 94000
			},
		"Eeloo": {
			"color": "#8F9394",
			"mass": 1.1149224242E+21,
			"eqr": 210000,
			"day": 57914.78373,
			"atm": 0,
			"SOI": 1159066.157
			},
		"Slate": {
			"color": "#D1B7A1",
			"mass": 2.9649876011E+22,
			"eqr": 540000,
			"day": 192771.1546,
			"atm": 0,
			"SOI": 9598158.646
			},
		"Tekto": {
			"color": "#888",
			"mass": 2.8834085358E+21,
			"eqr": 280000,
			"day": 666154.4828,
			"atm": 95000,
			"SOI": 8637005.195
			},
		"Urlum": {
			"color": "#CBDFE6",
			"mass": 1.7896959236E+23,
			"eqr": 2177000,
			"day": 41000,
			"atm": 325000,
			"SOI": 2517599239
			},
		"Polta": {
			"color": "#8DAB9E",
			"mass": 1.3512267369E+21,
			"eqr": 220000,
			"day": 73017.11064,
			"atm": 0,
			"SOI": 1661114.853
			},
		"Priax": {
			"color": "#6D6A64",
			"mass": 5.0691279850E+19,
			"eqr": 74000,
			"day": 73017.11064,
			"atm": 0,
			"SOI": 446767.602
			},
		"Wal": {
			"color": "#84724C",
			"mass": 7.4427672795E+21,
			"eqr": 370000,
			"day": 1009410.79,
			"atm": 0,
			"SOI": 18933504.68
			},
		"Tal": {
			"color": "#7D7361",
			"mass": 3.2002738505E+18,
			"eqr": 22000,
			"day": 48874.48348,
			"atm": 0,
			"SOI": 139966.6513
			},
		"Neidon": {
			"color": "#B697FD",
			"mass": 2.1228216519E+23,
			"eqr": 2145000,
			"day": 40250,
			"atm": 260000,
			"SOI": 3944323312
			},
		"Thatmo": {
			"color": "#D5D6DA",
			"mass": 2.7883630473E+21,
			"eqr": 286000,
			"day": 306442.6745,
			"atm": 35000,
			"SOI": 5709379.089
			},
		"Nissee": {
			"color": "#D7CDBE",
			"mass": 5.9509224492E+18,
			"eqr": 30000,
			"day": 27924.8723,
			"atm": 0,
			"SOI": 7366476.635
			},
		"Plock": {
			"color": "#B59676",
			"mass": 7.7680961283E+20,
			"eqr": 189000,
			"day": 106309.607,
			"atm": 0,
			"SOI": 586443111.1
			},
		"Karen": {
			"color": "#8F7D74",
			"mass": 7.0149057267E+19,
			"eqr": 85050,
			"day": 106327.7634,
			"atm": 0,
			"SOI": 939354.3243
			}
		}
};
