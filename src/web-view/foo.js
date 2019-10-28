module.exports = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Ecg-test3</title>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    </head>
    
    <body>
        <div style="margin-top: 100px;">
            <canvas id="canvas" width="500" height="160" style="background-color: black;"></canvas>
        </div>
    
        <script>
    
            var EcgData = ["905,923,950,979,997,1033,1090,1157,1232,1320,1398,1495,1613,1736,1866,2011,2170,2331,2499,2683,2880,3085,3291,3490,3689,3906,4123,4320,4503,4671,4815,4946,5048,5121,5172,5197,5195,5173,5111,5024,4924,4792,4637,4469,4283,4081,3878,3674,3451,3230,3018,2819,2606,2403,2213,2031,1868,1723,1558,1396,1254,1101,921,726,497,251,1,-280,-585,-858,-1058,-1159,-1133,-946,-546,170,1225,2521,3993,5614,7314,9024,10649,11994,12978,13593,13841,13662,13084,12019,10582,8884,7036,5148,3310,1609,111,-1032,-1871,-2389,-2648,-2674,-2518,-2206,-1825,-1410,-1002,-615,-255,56,298,467,612,732,844,939,1010,1088,1174,1268,1353,1447,1537,1631,1758,1874,2010,2148,2287,2443,2607,2771,2931,3111,3280,3465,3660,3837,4028,4239,4444,4650,4851,5053,5268,5491,5683,5879,6068,6248,6415,6565,6699,6844,6993,7129,7251,7361,7458,7537,7581,7577,7544,7485,7404,7306,7190,7055,6920,6783,6637,6478,6295,6106,5905,5708,5498,5279,5050,4817,4590,4364,4138,3910,3680,3480,3272,3068,2868,2674,2486,2310,2145,1963,1786,1634,1500,1374,1256,1138,1021,921,849,771,684,615,557,510,465,426,384,353,333,312,288,272,272,275,282,287,290,291,294,300,306,304,306,304,311,313,316,318,311,309,308,316,312,316,320,323,331,341,340,340,346,354,373,394,413,432,458,473,494,512,513,519,519,520,525,531,536,538,541,537,541,544,542,551,553,551,554,568,587,607,630,648,672,697,721,732,734,735,740,743,739,743,747,744,748,748,753,751,750,751,750,757,766,786,802,823,846,864,885,907,934,961,986,1020,1062,1121,1181,1262,1350,1437,1537,1649,1774,1913,2077,2245,2405,2590,2781,2975,3173,3378,3582,3792,4007,4205,4396,4582,4757,4901,5013,5100,5164,5214,5239,5235,5189,5112,5018,4908,4773,4615,4424,4223,4023,3827,3612,3389,3166,2960,2752,2545,2343,2152,1985,1823,1665,1495,1349,1206,1063,885,677,440,174,-103,-402,-695,-974,-1146,-1203,-1096,-798,-242,580,1711,3060,4632,6310,8039,9725,11249,12511,13385,13882,13910,13523,12703,11496,9972,8199,6283,4404,2614,1012,-352,-1409,-2173,-2592,-2708,-2639,-2404,-2067,-1664,-1243,-828,-463,-140,136,357,519,656,773,869,948,1027,1098,1175,1270,1370,1463,1564,1681,1792,1915,2058,2194,2338,2500,2659,2821,3002,3181,3366,3562,3745,3925,4119,4319,4525,4738,4946,5148,5373,5581,5777,5975,6162,6334,6498,6645,6776,6926,7084,7219,7337,7436,7510,7562,7595,7577,7531,7454,7370,7264,7157,7031,6894,6745,6584,6413,6226,6034,5832,5620,5400,5177,4955,4734,4509,4279,4048,3824,3608,3404,3196,2988,2782,2589,2402,2214,2043,1872,1702,1550,1419,1291,1164,1061,956,863,790,704,629,562,513,462,405,359,329,312,290,275,260,252,254,246,242,240,243,240,234,236,242,247,250,253,253,261,266,265,265,271,273,271,277,276,279,282,285,284,285,284,280,291,311,331,352,373,393,414,436,448,454,454,450,446,454,458,457,465,466,472,478,489,487,490,496,493,494,509,530,551,576,597,619,637,652,659,661,663,659,664,662,665,671,670,671,671,675,675,674,675,678,682,694,716,732,746,773,793,813,836,860,876,901,940,983,1050,1127,1213,1299,1389,1500,1625,1760,1896,2044,2208,2377,2567,2764,2958,3164,3371,3576,3788,4000,4198,4384,4557,4711,4844,4960,5029,5091,5118,5118,5096,5042,4957,4850,4723,4566,4399,4219,4024,3824,3617,3397,3170,2965,2767,2551,2337,2139,1958,1798,1656,1493,1334,1192,1048,880,685,467,224,-41,-330,-629,-915,-1137,-1265,-1279,-1135,-736,-66,938,2190,3648,5257,6956,8687,10325,11722,12785,13483,13811,13702,13185,12197,10793,9127,7288,5387,3509,1767,230,-988,-1878,-2455,-2767,-2836,-2711,-2415,-2035,-1626,-1212,-821,-458,-144,111,289,438,572,695,791,872,948,1023,1114,1205,1293,1379,1481,1599,1715,1856,2002,2141,2295,2457,2612,2779,2964,3142,3321,3512,3688,3880,4088,4291,4491,4698,4902,5118,5342,5537,5731,5925,6113,6279,6438,6581,6719,6875,7012,7135,7239,7342,7411,7457,7467,7445,7392,7324,7235,7125,6996,6865,6730,6578,6417,6240,6048,5844,5641,5433,5213,4985,4753,4524,4291,4062,3833,3606,3389,3185,2981,2770,2576,2397,2227,2055,1886,1712,1548,1417,1288,1160,1031,916,804,722,642,551,479,415,368,319,278,237,206,189,169,147,132,129,125,125,126,125,122,120,123,123,126,134,139,142,145,160,165,167,170,166,169,176,175,169,165,168,163,166,166,163,168,184,200,218,242,263,283,310,333,337,337,342,342,342,346,349,349,351,355,357,362,364,362,357,360,365,374,402,422,442,467,491,510,533,551,546,548,551,553,556,554,551,547,555,556,556,559,558,563,565,570,569,589,614,629,652,669,695,718,742,760,776,806,843,898,969,1046,1129,1222,1328,1438,1557,1691,1838,2006,2175,2350,2539,2735,2942,3149,3347,3547,3762,3967,4163,4344,4512,4657,4786,4875,4947,4997,5020,5017,4979,4908,4814,4714,4583,4429,4254,4057,3858,3655,3444,3213,2978,2752,2536,2323,2125,1940,1769,1619,1469,1305,1157,1014,862,685,475,236,-21,-283,-582,-873,-1153,-1350,-1427,-1357,-1100,-598,172,1260,2603,4138,5824,7551,9256,10808,12142,13066,13608,13719,13392,12652,11525,10031,8285,6388,4492,2681,1037,-382,-1512,-2302,-2784,-2939,-2890,-2677,-2352,-1956,-1536,-1115,-731,-398,-119,102,276,420,541,641,724,789,861,944,1034,1124,1218,1311,1422,1551,1673,1813,1955,2101,2265,2426,2586,2747,2928,3111,3301,3491,3667,3857,4056,4266,4477,4677,4877,5091,5305,5507,5707,5891,6065,6225,6379,6519,6664,6817,6952,7073,7178,7265,7331,7369,7369,7321,7251,7168,7074,6965,6834,6693,6546,6393,6229,6044,5853,5643,5436,5218,4997,4769,4551,4327,4091,3861,3631,3401,3194,2989,2786,2582,2390,2205,2039,1877,1713,1540,1379,1243,1114,984,867,756,649,574,496,421,354,312,265,213,171,132,108,80,67,45,34,31,33,34,28,32,35,37,39,44,46,50,55,54,45,40,35,34,39,37,39,46,57,64,66,72,68,71,73,67,70,89,116,133,153,176,198,224,238,242,240,235,239,237,236,236,239,242,247,256,255,264,268,266,266,265,278,300,324,337,357,381,406,425,436,438,442,442,445,445,445,447,441,446,445,450,454,459,459,466,473,475,494,511,533,554,575,595,612,645,669,691,723,773,835,902,992,1076,1173,1290,1406,1532,1669,1827,1987,2149,2326,2512,2711,2909,3114,3314,3523,3743,3945,4136,4310,4471,4606,4718,4802,4860,4895,4901,4887,4843,4768,4674,4553,4401,4239,4056,3859,3654,3443,3220,2998,2787,2586,2383,2175,1979,1802,1634,1486,1324,1162,1011,861,699,510,302,60,-193,-478,-780,-1065,-1306,-1455,-1488,-1383,-1032,-401,535,1741,3153,4724,6411,8150,9800,11238,12365,13134,13526,13515,13027,12123,10792,9183,7370,5485,3611,1852,306,-966,-1914,-2553,-2900,-2998,-2897,-2640,-2268,-1868,-1456,-1052,-683,-366,-98,104,256,396,520,611,686,764,833,917,1006,1092,1181,1284,1411,1529,1666,1813,1957,2106,2271,2430,2589,2760,2932,3101,3285,3475,3658,3858,4054,4251,4449,4651,4865,5083,5291,5488,5682,5871,6047,6211,6348,6490,6640,6782,6914,7031,7125,7205,7254,7268,7243,7194,7115,7030,6932,6810,6683,6554,6413,6258,6084,5901,5698,5504,5298,5078,4845,4618,4392,4162,3929,3704,3477,3258,3050,2843,2644,2441,2265,2086,1914,1750,1578,1410,1267,1146,1015,896,779,659,578,512,429,353,294,241,188,155,116,76,48,23,-2,-19,-23,-31,-30,-20,-11,-5,4,7,11,12,6,2,-2,1,2,5,12,17,20,17,16,16,14,10,9,11,19,25,34,36,61,82,95,115,136,160,183,204,202,209,222,230,230,227,229,236,248,255,255,262,264,268,268,270,265,271,289,301,324,354,379,400,420,436,441,446,455,451,448,445,446,445,442,441,431,434,437,438,441,442,450,467,487,504,530,555,578,602,625,650,679,710,743,789,849,923,1011,1102,1200,1312,1434,1572,1727,1889,2052,2222,2411,2600,2799,3006,3206,3412,3622,3833,4023,4212,4386,4533,4656,4756,4831,4884,4916,4915,4888,4829,4741,4643,4521,4366,4187,4001,3796,3595,3387,3170,2943,2732,2528,2319,2120,1924,1748,1572,1418,1258,1101,959,808,655,457,238,-11,-271,-554,-848,-1130,-1349,-1447,-1408,-1198,-751,-48,969,2290,3781,5427,7137,8855,10431,11817,12821,13404,13603,13370,12721,11671,10252,8531,6670,4781,2958,1283,-172,-1367,-2204,-2720,-2929,-2929,-2749,-2452,-2063,-1651,-1237,-850,-518,-219,26,211,349,481,592,679,757,828,890,976,1077,1169,1257,1370,1498,1621,1773,1915,2054,2209,2368,2517,2675,2855,3032,3221,3415,3591,3783,3991,4198,4400,4601,4810,5020,5238,5443,5645,5843,6022,6188,6334,6474,6615,6764,6891,7009,7117,7216,7283,7327,7333,7302,7240,7161,7072,6957,6822,6689,6549,6396,6232,6057,5864,5666,5470,5262,5040,4817,4592,4368,4137,3909,3677,3451,3245,3049,2845,2638,2443,2264,2087,1920,1756,1580,1423,1300,1173,1049,941,834,723,643,565,481,412,353,303,252,211,168,143,121,105,87,64,61,65,80,81,74,74,73,80,82,79,71,72,79,82,90,97,96,94,97,100,102,103,100,104,112,124,124,127,133,145,165,186,206,230,256,275,298,312,315,315,321,320,326,335,338,336,350,355,358,358,358,363,366,376,375,389,409,438,461,481,505,527,546,557,565,563,567,567,567,567,572,576,580,584,587,587,592,593,597,596,593,608,625,652,676,697,723,744,778,810,837,860,902,963,1027,1113,1200,1285,1385,1510,1642,1779,1942,2101,2269,2452,2642,2837,3031,3230,3428,3639,3853,4046,4240,4418,4590,4732,4845,4928,4986,5031,5049,5042,4996,4921,4833,4720,4582,4418,4245,4053,3852,3647,3427,3211,3003,2802,2595,2375,2172,1991,1832,1678,1525,1361,1213,1068,916,732,518,278,21,-262,-562,-856,-1106,-1282,-1334,-1264,-951,-365,509,1680,3057,4609,6287,8045,9713,11203,12412,13253,13732,13827,13405,12563,11299,9732,7938,6059,4156,2334,759,-573,-1573,-2279,-2678,-2835,-2752,-2520,-2160,-1762,-1351,-949,-571,-235,37,251,407,545,668,775,863,941,1014,1101,1192,1284,1379,1478,1599,1715,1846,1985,2124,2271,2431,2586,2745,2918,3095,3273,3470,3661,3849,4049,4253,4451,4652,4852,5056,5273,5487,5687,5881,6073,6253,6422,6576,6720,6870,7013,7139,7254,7357,7431,7484,7499,7475,7431,7362,7271,7175,7051,6919,6790,6656,6497,6331,6144,5944,5749,5554,5331,5103,4873,4646,4420,4194,3969,3737,3520,3316,3109,2908,2713,2526,2346,2172,2010,1832,1663,1518,1383,1257,1132,1018,900,818,745,663,590,521,468,419,374,332,303,280,260,237,215,208,205,195,188,192,194,203,209,211,213,214,214,213,214,213,215,218,222,225,229,227,227,234,236,239,241,250,256,263,267,277,294,310,331,351,372,395,417,430,435,443,451,454,461,461,461,464,472,472,468,469,471,472,472,477,485,500,523,546,563,588,615,633,648,658,664,670,676,676,679,681,682,688,692,692,692,693,694,693,698,697,699,714,735,759,777,799,817,839,872,896,915,951,1002,1066,1149,1244,1327,1426,1546,1668,1804,1956,2110,2265,2433,2617,2801,3008,3210,3414,3622,3840,4052,4249,4441,4612,4771,4896,4997,5071,5125,5161,5169,5149,5087,5001,4896,4776,4630,4462,4272,4073,3870,3675,3454,3230,3015,2811,2592,2389,2200,2015,1849,1700,1536,1372,1240,1088,923,726,506,257,-6,-287,-592,-881,-1105,-1219,-1211,-1034,-639,18,956,2250,3716,5352,7061,8789,10417,11855,12963,13615,13882,13722,13148,12170,10800,9089,7242,5340,3500,1778,271,-985,-1880,-2424,-2695,-2727,-2587,-2307,-1927,-1503,-1097,-703,-349,-47,208,405,553,678,793,892,968,1043,1113,1202,1289,1385,1468,1567,1684,1807,1953,2100,2246,2406,2574,2730,2896,3075,3245,3432,3626,3805,3997,4210,4415,4622,4832,5035,5235,5446,5640,5836,6028,6212,6379,6537,6682,6831,6988,7135,7266,7371,7463,7543,7588,7597,7568,7511,7430,7350,7248,7116,6983,6845,6694,6531,6354,6162,5954,5755,5542,5320,5094,4869,4642,4411,4181,3950,3723,3511,3309,3104,2893,2694,2508,2335,2169,2005,1827,1664,1531,1405,1283,1165,1053,942,860,781,700,634,577,526,472,438,400,368,345,323,300,287,283,275,268,272,272,273,274,272,274,281,288,290,293,295,296,291,289,285,286,290,285,287,285,293,296,299,299,294,291,302,327,352,378,397,420,449,482,494,492,491,497,504,507,505,505,502,511,516,515,517,514,519,521,527,525,531,552,574,599,621,644,670,698,716,719,723,726,726,726,724,721,717,715,713,708,710,710,712,714,722,726,746,770,794,822,842,867,884,909,932,954,978,1011,1068,1132,1215,1305,1398,1504,1623,1750,1891,2041,2207,2366,2543,2734,2932,3132,3319,3523,3726,3948,4160,4352,4533,4699,4860,4981,5078,5148,5186,5201,5192,5154,5078,4981,4868,4725,4568,4393,4203,3999,3798,3588,3365,3141,2929,2724,2510,2311,2125,1956,1802,1655,1489,1329,1194,1034,853,646,409,162,-106,-394,-697,-955,-1142,-1228,-1161,-905,-366,450,1576,2917,4435,6101,7860,9552,11088,12341,13257,13794,13966,13638,12844,11660,10132,8383,6503,4597,2745,1116,-266,-1339,-2099,-2554,-2757,-2703,-2478,-2131,-1724,-1312,-907,-525,-184,95,312,471,606,730,837,924,1002,1072,1153,1237,1327,1422,1523,1638,1760,1887,2023,2163,2315,2472,2631,2791,2962,3133,3313,3513,3700,3882,4083,4283,4485,4693,4897,5102,5315,5526,5717,5913,6099,6274,6440,6581,6719,6866,7016,7151,7269,7370,7454,7514,7550,7541,7501,7435,7352,7252,7136,6997,6860,6720,6571,6397,6215,6025,5825,5626,5414,5185,4950,4723,4503,4269,4041,3821,3601,3387,3186,2979,2772,2592,2408,2227,2055,1884,1716,1568,1446,1309,1193,1085,972,886,816,731,650,580,522,465,422,374,331,307,286,268,250,243,242,240,237,235,228,228,232,233,232,229,236,236,245,247,244,248,255,262,267,261,261,256,260,256,254,255,255,271,269,284,312,337,359,380,399,422,448,459,454,452,452,451,454,453,456,462,465,472,481,490,487,485,486,493,499,517,536,558,591,616,641,661,678,684,684,689,690,693,696,692,697,700,710,707,705,708,703,706,701,702,702,723,742,755,780,804,833,853,882,905,931,972,1012,1073,1147,1230,1323,1420,1527,1640,1780,1928,2085,2250,2408,2577,2758,2964,3169,3364,3559,3771,3984,4187,4387,4559,4714,4843,4954,5034,5095,5128,5137,5115,5062,4982,4887,4770,4625,4465,4285,4085,3883,3686,3468,3236,3021,2820,2608,2396,2202,2015,1846,1698,1539,1371,1235,1102,949,763,549,305,50,-233,-541,-829,-1068,-1206,-1225,-1079,-738,-120,794,2023,3456,5052,6751,8471,10130,11593,12743,13454,13794,13720,13225,12325,11046,9379,7549,5652,3796,2044,499,-804,-1785,-2371,-2681,-2742,-2623,-2360,-1995,-1581,-1162,-761,-399,-93,173,379,537,673,784,874,949,1025,1095,1177,1261,1345,1431,1534,1652,1777,1911,2059,2207,2364,2531,2686,2850,3033,3216,3392,3585,3765,3947,4150,4354,4549,4748,4955,5157,5375,5585,5779,5974,6157,6331,6487,6629,6769,6921,7062,7190,7301,7400,7474,7529,7543,7520,7470,7398,7306,7196,7065,6930,6791,6644,6487,6313,6128,5930,5733,5526,5303,5081,4854,4625,4396,4170,3944,3725,3511,3310,3099,2897,2697,2514,2333,2162,2002,1826,1664,1530,1402,1279,1168,1057,942,856,775,690,615,553,502,454,409,366,339,319,297,274,249,239,240,243,244,245,250,253,251,254,253,246,247,244,247,252,257,264,273,289,297,307,310,312,313,310,305,299,292,284,285,303,327,350,379,411,436,462,481,487,491,495,498,499,502,507,512,517,521,531,532,535,542,544,550,550,560,576,600,619,632,652,667,686,704,702,700,702,711,711,719,721,719,724,728,726,724,733,733,734,734,734,750,775,796,812,838,869,896,924,949,972,1002,1041,1086,1148,1222,1300,1391,1494,1612,1737,1873,2017,2184,2357,2529,2708,2897,3097,3296,3495,3692,3907,4115,4317,4496,4666,4818,4942,5039,5113,5158,5178,5180,5146,5072,4988,4882,4743,4591,4424,4235,4032,3831,3624,3409,3192,2987,2784,2568,2371,2187,2017,1851,1708,1538,1377,1241,1089,917,718,497,246,-28,-323,-615,-882,-1080,-1197,-1152,-928,-435,333,1387,2691,4159,5795,7525,9223,10789,12097,13076,13680,13882,13643,12922,11820,10343,8647,6797,4904,3080,1434,16,-1109,-1920,-2431,-2682,-2672,-2477,-2161,-1766,-1357,-940,-549,-200,90,327,501,640,765,873,960,1039,1107,1180,1268,1361,1453,1549,1657,1770,1890,2029,2167,2306,2459,2610,2766,2936,3120,3300,3496,3692,3879,4076,4278,4479,4675,4877,5079,5293,5509,5703,5907,6101,6291,6462,6612,6743,6894,7049,7187,7305,7411,7494,7559,7599,7593,7561,7501,7418,7321,7206,7085,6955,6820,6662,6496,6320,6131,5932,5732,5518,5297,5075,4851,4621,4402,4175,3955,3730,3518,3309,3103,2904,2705,2522,2340,2171,2010,1844,1695,1567,1444,1322,1207,1094,983,907,826,744,674,624,578,529,490,451,423,396,374,353,340,345,345,342,345,355,359,356,359,363,373,377,374,375,372,377,382,376,375,379,388,394,396,401,396,405,408,409,409,404,411,429,455,474,495,513,528,549,572"
            ];
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            var w = canvas.width,
                h = canvas.height,
                speed = 1,
                scanBarWidth = 20,
                i = 0,
                data = EcgData[0].split(','),
                color = '#00ff00';
            var px = 0;
            var opx = 0;
            var py = h / 2;
            var opy = py;
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.setTransform(1, 0, 0, -1, 0, h);
    
    
            drawWave();
    
            function drawWave() {
                px += speed;
                ctx.clearRect(px, 0, scanBarWidth, h);
                ctx.beginPath();
                ctx.moveTo(opx, opy);
                ctx.lineJoin = 'round';
                py = (data[++i >= data.length ? i = 0 : i++] / 450 + 10);
                ctx.lineTo(px, py);
                ctx.stroke();
                opx = px;
                opy = py;
                if (opx > w) { px = opx = -speed; }
    
                setTimeout(drawWave, 1000 / 60);
    
                // requestAnimationFrame(drawWave);
            }
    
        </script>
    </body>
    
    </html>
    `;
}