'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "661d595a28f27de5de5227dbeb679d22",
"assets/lib/assets/general-05_2022_06_27.json": "00fb677c30932b9b82671177c6ae34c8",
"assets/lib/assets/general-08_2022_07_14.json": "d03c587c0b86355e19eab5544cdc4623",
"assets/lib/assets/general-07_2022_06_24.json": "b2ed1aa1edc7c07de83f986ef3b031fb",
"assets/lib/assets/general-08_2022_06_23.json": "51e0079328f857a176451a3b70b4a60c",
"assets/lib/assets/general-01_2022_07_07.json": "cc7aa4107415341c2f4fdff17094b56e",
"assets/lib/assets/general-08_2022_07_05.json": "7527c2192e615ac7945e81fdc752ae39",
"assets/lib/assets/general-06_2022_07_03.json": "3e2edd646c4df0d7e81b61b62709011b",
"assets/lib/assets/general-06_2022_07_08.json": "221c6fd84502e6fb46c0c3027cc96635",
"assets/lib/assets/general-04_2022_06_29.json": "532cf7a2c22cbce9aa94a2757f060f77",
"assets/lib/assets/general-07_2022_07_07.json": "9a0994946b904b85e1dd8628f1dc8b9a",
"assets/lib/assets/general-11_2022_07_01.json": "3e8887a099060e0c15e6abce3ade1fef",
"assets/lib/assets/file_names.txt": "66387fa03749fbc2e1d7d7373aa12fe9",
"assets/lib/assets/general-03_2022_06_29.json": "38fb2c71bac43859c93f3417ee199e43",
"assets/lib/assets/general-06_2022_06_29.json": "cfd7b4a1eb865bb099df9a331be83868",
"assets/lib/assets/general-04_2022_07_07.json": "3f48b0b636bd9934fbbd1174620df5a2",
"assets/lib/assets/general-11_2022_07_02.json": "98aa118d7270079858705c199cb4e06d",
"assets/lib/assets/general-10_2022_07_06.json": "126c2087552bff0abf9639973f0d1847",
"assets/lib/assets/general-06_2022_06_21.json": "532589e1ecfd1579b9e09f89a25f6596",
"assets/lib/assets/general-10_2022_06_29.json": "3e8d27b6fa2cdae692d3d81f4bec7ce4",
"assets/lib/assets/general-01_2022_07_13.json": "9677b197dd962e59527013544cf30dd4",
"assets/lib/assets/general-03_2022_07_13.json": "95f52006d41e12c4a38d99296deae62b",
"assets/lib/assets/general-04_2022_07_06.json": "17aec5e85797db140c7d1dcdde0d306a",
"assets/lib/assets/general-04_2022_06_28.json": "69771cfe60bfdc4f05346f13f96d894f",
"assets/lib/assets/general-11_2022_07_03.json": "15b0bd59b3db31755c861106357d8c24",
"assets/lib/assets/general-04_2022_07_13.json": "82f3c2479244a3161a79aa541796936f",
"assets/lib/assets/general-03_2022_06_22.json": "da329e6b019ba0f83908517bf6621fb3",
"assets/lib/assets/general-09_2022_06_27.json": "4ec7c923f935c16db09500192a10ce2a",
"assets/lib/assets/general-11_2022_07_05.json": "46ee22e013c6e5ee72e02ec4e88c850f",
"assets/lib/assets/general-10_2022_07_14.json": "7f3c905afb89ce72a5c124d1003bf8f8",
"assets/lib/assets/file_names%2520copy.txt": "66387fa03749fbc2e1d7d7373aa12fe9",
"assets/lib/assets/general-08_2022_06_22.json": "d1da68bdf992a985186272fe97558025",
"assets/lib/assets/general-04_2022_06_20.json": "58ae303c8b554e020e8685e3b6c55361",
"assets/lib/assets/general-08_2022_06_30.json": "d21330117dcf58e96aff198d377f740e",
"assets/lib/assets/general-08_2022_07_06.json": "e3826e70ed7f8222b86f3ef1cc900407",
"assets/lib/assets/general-10_2022_07_07.json": "ceed06ecbaead2e673e1d7c1fa36bf4a",
"assets/lib/assets/general-04_2022_06_22.json": "2260aeb8875b900a2c36b8fac7f8699b",
"assets/lib/assets/general-10_2022_07_05.json": "964bf1e6ee950a1ca03201f45771a9be",
"assets/lib/assets/general-01_2022_07_06.json": "01562c621634ed3ca0e6bda84d582089",
"assets/lib/assets/general-06_2022_07_12.json": "0fe2ff25c92133d0e880a2947172f304",
"assets/lib/assets/general-03_2022_07_01.json": "254f3e93983a3b4432414d3c5cc63909",
"assets/lib/assets/general-10_2022_07_03.json": "eaafd95d7df6f902d473649a4b6766c3",
"assets/lib/assets/general-11_2022_06_20.json": "18d641ad3d41863a477cf10b95fd6495",
"assets/lib/assets/general-01_2022_07_04.json": "5f1f7c5441a0d2b6051ad5277d1594c0",
"assets/lib/assets/general-06_2022_07_14.json": "67e4df51168a51e0e0ac41b92b03ea4e",
"assets/lib/assets/general-10_2022_06_22.json": "84551ab10a161a5d693667aaae40deeb",
"assets/lib/assets/general-06_2022_06_26.json": "e1def8882bb2c6aefc752eeb333736e3",
"assets/lib/assets/general-03_2022_06_23.json": "0bd6c5453966f53e6a9edc10ef44d185",
"assets/lib/assets/general-11_2022_06_22.json": "31643984958072ad9aeecfbaf8d8368d",
"assets/lib/assets/general-05_2022_07_16.json": "c28697b287fca4ec1e31ba78b35ceb61",
"assets/lib/assets/general-03_2022_07_16.json": "d870f893ea43c0539231b938e6d5b536",
"assets/lib/assets/general-05_2022_07_14.json": "5206ae1995b16798582886e9159000ac",
"assets/lib/assets/general-07_2022_07_11.json": "51e22ede498c83b91567d39e5c1d8ea8",
"assets/lib/assets/general-08_2022_07_11.json": "946fe479b447a494db98b4cb9e2b3ae3",
"assets/lib/assets/general-05_2022_06_21.json": "8887f8a05bcc4bba5c6fd1318792bdc2",
"assets/lib/assets/general-04_2022_06_25.json": "ff7369ba04229c3dcbbf50de97cf0b61",
"assets/lib/assets/general-06_2022_07_04.json": "2fe849c25ab44204a403a3310f8a282b",
"assets/lib/assets/general-04_2022_07_04.json": "35360c11766b7154c69faad893a340df",
"assets/lib/assets/general-11_2022_06_28.json": "2c09f4d7649ddebab9c69ce977200da4",
"assets/lib/assets/general-07_2022_07_12.json": "c64e851256150517a05801fa4886578a",
"assets/lib/assets/general-01_2022_06_20.json": "7601d488238d7300774832f43dd6407e",
"assets/lib/assets/general-06_2022_07_09.json": "b28ee7719fce7df509c69ea806ecbc73",
"assets/lib/assets/general-01_2022_06_24.json": "120def47d4be18958855ede7040c49f4",
"assets/lib/assets/general-06_2022_06_27.json": "675cca916f6e335440bca9c902e24397",
"assets/lib/assets/general-11_2022_07_13.json": "713e3f0f870f9ea0296b76fc3499e0c8",
"assets/lib/assets/general-08_2022_07_10.json": "b09c681b1cfc7e0e354259ead4809de8",
"assets/lib/assets/general-03_2022_07_06.json": "35ee3514b763137bb9d3f223597c66ca",
"assets/lib/assets/general-04_2022_07_17.json": "398c02840983bd613e9c8354b8552794",
"assets/lib/assets/general-05_2022_06_23.json": "0e8bde23badc46de3189879aa324e248",
"assets/lib/assets/general-01_2022_07_09.json": "b5958eeb835ad6bb91f862ce503f8110",
"assets/lib/assets/general-09_2022_07_17.json": "3eb92d5298b203f0738609e6bcb58ee7",
"assets/lib/assets/general-01_2022_07_15.json": "de3b20ef6f8357295d93baf68e49d507",
"assets/lib/assets/general-04_2022_07_14.json": "7de7e353d61f690aaa41aebd02c8020a",
"assets/lib/assets/general-06_2022_06_28.json": "b0ea6dba7792623774fbba16d4576c28",
"assets/lib/assets/general-08_2022_06_27.json": "16d257dcf1c130174e48d292c0aca0a1",
"assets/lib/assets/general-09_2022_07_05.json": "8239e2b7f6b66457fa1a76978f47720b",
"assets/lib/assets/general-03_2022_07_07.json": "db3faa2e0dc46fdb21b2a2d634a42ed5",
"assets/lib/assets/general-03_2022_06_24.json": "82a7af95e3bdb70752297c26e3de0b2f",
"assets/lib/assets/general-05_2022_07_12.json": "fbaf2ec732dc9679db15ea15ec7cf8f6",
"assets/lib/assets/general-04_2022_06_30.json": "e7c1aad4826dd877e25c4882e4f41921",
"assets/lib/assets/general-01_2022_07_12.json": "b576daf17982aaa601c7b097727eff10",
"assets/lib/assets/general-07_2022_07_06.json": "f2dfae2a6e520191475a7218685023df",
"assets/lib/assets/general-08_2022_07_04.json": "f276b1cada1d89511cf56c263b3eaf11",
"assets/lib/assets/general-03_2022_06_25.json": "98386d67196238eee6fd3a3d9e30e2af",
"assets/lib/assets/general-09_2022_07_11.json": "6427758a1b8af73f529de000adde1d54",
"assets/lib/assets/general-06_2022_06_30.json": "b41da526fd8aa618909923c68e38d93b",
"assets/lib/assets/general-11_2022_07_04.json": "33941a4d450479b713dd49b0bc0fdc54",
"assets/lib/assets/general-10_2022_06_26.json": "b5928331930366efa36d8973fc095247",
"assets/lib/assets/general-06_2022_07_17.json": "22a0f7a3dc69515eb70ef917053299c6",
"assets/lib/assets/general-04_2022_06_24.json": "d6cfb29a97ba4e51b18961dd35cd2b2a",
"assets/lib/assets/general-09_2022_06_22.json": "9ba6275cc7bf58415b7fbf2d1a73589f",
"assets/lib/assets/general-03_2022_07_02.json": "4dc263ba72b3ef51fe598ee10e80de67",
"assets/lib/assets/general-04_2022_06_26.json": "d4ccc43cdea6fb977b76879c239ddf44",
"assets/lib/assets/general-05_2022_07_13.json": "85d2a3b5517c7adc23c6334e66ea8280",
"assets/lib/assets/general-01_2022_07_10.json": "173681fbae3eae21ab8d8fc6e6e144f7",
"assets/lib/assets/general-05_2022_06_22.json": "105877045eeae286c4a464d22ad9a22c",
"assets/lib/assets/general-10_2022_07_08.json": "fb29b1f48f056144d0f55aaf1031405d",
"assets/lib/assets/general-05_2022_06_29.json": "3cda4bb3cbe7086b70dc40a6d10af1e2",
"assets/lib/assets/general-05_2022_07_08.json": "a022c50c009e10656d7bb511527c8245",
"assets/lib/assets/general-01_2022_06_25.json": "43c2b014a15b1a7b66dc96a1609973e0",
"assets/lib/assets/general-11_2022_06_29.json": "305b29a1d8d52f19e9044863fa320a08",
"assets/lib/assets/general-08_2022_07_16.json": "2973a9a4cb1d5321d543a7c6c3d1d14e",
"assets/lib/assets/general-07_2022_06_26.json": "36bb87fa100d22b78889824d4c88d8ef",
"assets/lib/assets/general-04_2022_06_23.json": "9eaf7414e0df6c4ac19c2525b19f7446",
"assets/lib/assets/general-10_2022_07_11.json": "b4d579c732684e74a29a29831dbcaf14",
"assets/lib/assets/general-10_2022_07_15.json": "c7238530602ff5ccc0e179d8c47ab1c4",
"assets/lib/assets/general-04_2022_07_15.json": "ada627197bfeaf27d58ded03d86e5602",
"assets/lib/assets/general-03_2022_07_05.json": "0884d209ecfb34b5d3fbd82b0164f871",
"assets/lib/assets/general-04_2022_07_01.json": "21256d8f6e73c5faf830fc0f227c5a9a",
"assets/lib/assets/general-03_2022_07_09.json": "9918cabba92026158df4737f05ec093d",
"assets/lib/assets/general-03_2022_07_03.json": "1052fa73969fe7c8e4917a0034496aad",
"assets/lib/assets/general-05_2022_07_02.json": "29d1adf4a3692fe70dc6991283e1e600",
"assets/lib/assets/general-01_2022_06_28.json": "89797814926e6a80dbcdd8d7f52b7e66",
"assets/lib/assets/general-08_2022_06_24.json": "af090e7fa529328ea077582ae79f9daf",
"assets/lib/assets/general-04_2022_07_16.json": "ebb408f2f67f7c82519af52dba1e7cde",
"assets/lib/assets/general-06_2022_07_16.json": "a934439a9653931bced0451c6163bc31",
"assets/lib/assets/general-04_2022_07_05.json": "54e04120d80198d9ced3f25b27ecc98a",
"assets/lib/assets/general-11_2022_07_14.json": "a22e4852cd5093bc0fd7030840d148d0",
"assets/lib/assets/general-07_2022_06_25.json": "cb16d2b069e3d75155d35828a8671f06",
"assets/lib/assets/general-10_2022_07_17.json": "bb13a5c392d34cd847ba574a7a143914",
"assets/lib/assets/general-08_2022_06_28.json": "7d1ff1ce96cbabf5b8e60600c561b94b",
"assets/lib/assets/general-06_2022_06_25.json": "98b00b229bbe16c79d20a3f04213d8d6",
"assets/lib/assets/general-08_2022_07_03.json": "ef353a2f7dc64eff7a8d14c18ef66714",
"assets/lib/assets/general-07_2022_06_22.json": "77cd222b96af09b63317dbe951c61fc8",
"assets/lib/assets/general-10_2022_06_25.json": "beff1cbdc9de7ea66c534fc4c03c39d5",
"assets/lib/assets/general-03_2022_07_12.json": "82fec51c6cd09a29bd39a26f9b8acdc3",
"assets/lib/assets/general-01_2022_07_17.json": "64ca05de31bd782bd812e160ee811c40",
"assets/lib/assets/general-04_2022_07_11.json": "a6c4ff9f0bd7e988ed69f57be661c0af",
"assets/lib/assets/general-09_2022_06_24.json": "fd69c4d62710158523bbe9d4d910233c",
"assets/lib/assets/general-08_2022_07_08.json": "cde9f2a81a7fd4d5639c9486b67b71b4",
"assets/lib/assets/general-01_2022_06_27.json": "98644b00d138154a84cc11cfdac5e25c",
"assets/lib/assets/general-09_2022_07_08.json": "90baa83492f28137a34aaef528955026",
"assets/lib/assets/general-09_2022_07_14.json": "5ccd254ffcccb965494ef74616981662",
"assets/lib/assets/general-05_2022_06_20.json": "2ba35af9e4a09eda83a28690d16bf547",
"assets/lib/assets/general-06_2022_06_24.json": "8cb1461c3766d7fb1f64b6c9370fc5ca",
"assets/lib/assets/general-03_2022_07_10.json": "946d5ef58d6d56603ebcb49e788e41b3",
"assets/lib/assets/general-04_2022_07_12.json": "f25d4ab58935593d7604dd207593e17f",
"assets/lib/assets/general-01_2022_06_22.json": "98367281fe101ce59b1a170cffa5e1e4",
"assets/lib/assets/general-03_2022_06_21.json": "5f9fe9848fe9b75d0c86ec3b017af2ff",
"assets/lib/assets/general-01_2022_06_30.json": "0e6491f5da8c9a5a303534ae95231a5b",
"assets/lib/assets/general-09_2022_06_26.json": "65b6cf5adc59632968f5c2aa65166572",
"assets/lib/assets/general-07_2022_06_23.json": "004d3e733036b2e7b15bac317e0a3271",
"assets/lib/assets/general-07_2022_07_08.json": "ff936cdf082188eb1b9b2a7bc5896973",
"assets/lib/assets/general-04_2022_07_02.json": "a7b2b9b71f2c815ad71bb2985c374f03",
"assets/lib/assets/general-09_2022_07_04.json": "f95d39895e9b4c92b3eac0915ce5419d",
"assets/lib/assets/general-01_2022_07_05.json": "12251088cbd4a5acba2152691b17f660",
"assets/lib/assets/general-03_2022_06_26.json": "b2ffebf3e87795b2f97b2639202fba5b",
"assets/lib/assets/general-01_2022_06_23.json": "2342f4f5b8f1a547affc7657a3fa2d22",
"assets/lib/assets/general-07_2022_07_04.json": "117095f272a058f24dcc7fc95deb7904",
"assets/lib/assets/general-06_2022_07_01.json": "09b3d366a216319183e634421b89d0f6",
"assets/lib/assets/general-01_2022_07_02.json": "5efc57e77636310367449440328779d1",
"assets/lib/assets/general-05_2022_07_11.json": "aba41cf4840d43b46cb1ac045eac12b1",
"assets/lib/assets/general-07_2022_07_14.json": "b60ad11878eb649e3bdb504be6e1a436",
"assets/lib/assets/general-07_2022_07_03.json": "4c6ee6843392b6f7116c13807178d642",
"assets/lib/assets/general-08_2022_07_01.json": "b465a3131d6b27c8f45fe665f7a6e119",
"assets/lib/assets/general-05_2022_06_24.json": "96d1b49d0413b5d3080bc69fdd0871ed",
"assets/lib/assets/general-08_2022_07_12.json": "f8c3b69e2f919b7e237d9b9a88e6bfa7",
"assets/lib/assets/general-11_2022_06_30.json": "b19f944ce7101d97a975ef149fecf671",
"assets/lib/assets/general-07_2022_06_30.json": "797359e6a6483225d4d9986c8e4299d4",
"assets/lib/assets/general-08_2022_07_17.json": "48ff6a8566be5348970553969917218d",
"assets/lib/assets/general-06_2022_07_07.json": "9d6ec6b007b615b0f6cdd0537920feba",
"assets/lib/assets/general-09_2022_07_12.json": "f61f7e7cab01d08023724f65b19ea7b3",
"assets/lib/assets/general-04_2022_07_10.json": "41551e7f3ab94959649e427e4469072b",
"assets/lib/assets/general-11_2022_07_08.json": "6576fd2ba7ff94fc5286b3836523c142",
"assets/lib/assets/general-06_2022_07_10.json": "46121086f16a09d130fd7ae2c8bea835",
"assets/lib/assets/general-10_2022_07_09.json": "9813e9cae8eedc1373cf9423b3fcec18",
"assets/lib/assets/general-05_2022_07_09.json": "81ce8942bd6760af5d89c9f51544b6dc",
"assets/lib/assets/general-06_2022_07_05.json": "4f9030912538f9af2a4d8351761f9d0b",
"assets/lib/assets/general-01_2022_06_26.json": "939570387c9fd38da3f79929836e4153",
"assets/lib/assets/general-10_2022_06_23.json": "3eac99f071b6368c8369dd7268371957",
"assets/lib/assets/general-09_2022_06_25.json": "ad13e181f86f337b095d9899ad7150ee",
"assets/lib/assets/general-09_2022_07_09.json": "5e31273436ec5791cead268b4a8b1a9c",
"assets/lib/assets/general-03_2022_06_30.json": "3a3c321360b14e65416b14287814612a",
"assets/lib/assets/general-07_2022_07_09.json": "aca26a505516c9982788be4f92f53afb",
"assets/lib/assets/general-09_2022_07_16.json": "08b4b477d3b6288e20e00cd6d94f4b77",
"assets/lib/assets/general-11_2022_06_21.json": "4297f5f851e3c38c72d5a318839a859e",
"assets/lib/assets/general-07_2022_07_13.json": "4ccac8d209f1973bd37d892dc628f43f",
"assets/lib/assets/general-10_2022_06_30.json": "4ac05359c540fac43dfc3cb761df5ea7",
"assets/lib/assets/general-08_2022_07_07.json": "066638ad30c042cb9d26479b7f486255",
"assets/lib/assets/general-08_2022_07_02.json": "22a9cc82282e415f9d5de299e43eec07",
"assets/lib/assets/general-07_2022_07_10.json": "f16949574c9331213f8df88f59ba1e3e",
"assets/lib/assets/general-11_2022_06_27.json": "ad52a9b11ce8f21195586abca3175be9",
"assets/lib/assets/general-11_2022_07_11.json": "c874d90745a0673b5160eeda1fc2651e",
"assets/lib/assets/general-06_2022_07_13.json": "db3ca68bdfe916f65e27c74160ec8013",
"assets/lib/assets/general-10_2022_07_10.json": "386933ddd24575fa6a2ce2adfabb2abb",
"assets/lib/assets/general-09_2022_06_30.json": "6b0009885433cb01d54ce6a263d9167d",
"assets/lib/assets/general-03_2022_07_15.json": "b87eb43a3fd87ba426c7e40bfbf84391",
"assets/lib/assets/general-03_2022_06_28.json": "b503e0151418cd554659295e6bcd6acc",
"assets/lib/assets/general-03_2022_07_08.json": "585892ed785cb8497fa43fc1fc507354",
"assets/lib/assets/general-05_2022_07_04.json": "d00e163e78f332e58878b6f18b295bb7",
"assets/lib/assets/general-08_2022_06_25.json": "49f40c584d489d2f1885b6621d44c4c3",
"assets/lib/assets/general-01_2022_06_21.json": "b3cd078f1c173a996f98275eb358b695",
"assets/lib/assets/general-09_2022_07_03.json": "9db8578f3a5034ceaa5f1eb2561a2eb4",
"assets/lib/assets/general-03_2022_07_14.json": "9ef399be0f6dddb697aae10ba217b309",
"assets/lib/assets/general-11_2022_07_09.json": "170ccc32e1bee0a7d15310b3a0c09ea7",
"assets/lib/assets/general-03_2022_06_20.json": "b1b6b419e405e1c53ae1abd622cfbef1",
"assets/lib/assets/general-11_2022_06_24.json": "e380183ceddd0b1a3068e643a2c14921",
"assets/lib/assets/general-09_2022_07_06.json": "b48ad217ebc94e376a06ee7fd86ce7ce",
"assets/lib/assets/general-10_2022_06_28.json": "9a9ebbf2b06323d7d986627d3189f64b",
"assets/lib/assets/general-05_2022_07_06.json": "e7db6466077605411c8509b50ced8cdb",
"assets/lib/assets/general-10_2022_07_04.json": "d67f86d9e719b1541027d1bcfb93e117",
"assets/lib/assets/general-11_2022_07_16.json": "1d451c3aa868d1c99db18d0b26013726",
"assets/lib/assets/general-11_2022_07_06.json": "99065ed61008bc0dbb6b21251278e306",
"assets/lib/assets/general-09_2022_06_29.json": "612981e244ca8d4bc020016fc16e39d7",
"assets/lib/assets/general-08_2022_06_26.json": "89beb77a2c10e9debdb627e12697eada",
"assets/lib/assets/general-10_2022_07_02.json": "42f8887d1a31f69a03ee39c21bd3e7e3",
"assets/lib/assets/general-07_2022_07_16.json": "2c8d8e79adfa9a8559a3f0503bbfd6f7",
"assets/lib/assets/general-05_2022_07_01.json": "577f4d12b7b4439a34dbe4ac11e5a712",
"assets/lib/assets/general-11_2022_07_17.json": "9e197d91efac8172d72e882c8600893f",
"assets/lib/assets/general-10_2022_07_13.json": "c2d314be47fb919f2eab114d952e5ae5",
"assets/lib/assets/general-10_2022_07_12.json": "4a0280e8d8b821e40dd7136f763c355d",
"assets/lib/assets/general-04_2022_07_03.json": "e4e545fbc312444e7a55415a68b8ccfa",
"assets/lib/assets/general-06_2022_06_23.json": "c36e595754563eb25ddba1649050f789",
"assets/lib/assets/general-04_2022_06_21.json": "15dad37aba0e8ed5e5ece873f6622b1b",
"assets/lib/assets/general-04_2022_07_09.json": "863617e8eae64c9dc0d3daee6c5785ba",
"assets/lib/assets/general-09_2022_07_13.json": "b802c3834c4bbed9d1e6fd5ee61d0cc8",
"assets/lib/assets/general-03_2022_07_04.json": "0864d0e4941b3e99c89765ef7a0d88b5",
"assets/lib/assets/general-03_2022_07_11.json": "8fd62a17b00fc01ae5dc2c08d5c01c29",
"assets/lib/assets/general-10_2022_07_01.json": "dc6f90e026fcbd6c230b9e9dccea8b82",
"assets/lib/assets/general-06_2022_07_02.json": "09e2c3be02b48c261fdc0e4025b254b1",
"assets/lib/assets/general-07_2022_07_17.json": "ee33f7801c95928dc272ab2105504419",
"assets/lib/assets/general-04_2022_06_27.json": "7b08294ee26975a6850ec6ce6a1e76a2",
"assets/lib/assets/general-01_2022_06_29.json": "b41354d450f36da4634f98288dafab44",
"assets/lib/assets/general-09_2022_07_01.json": "89d3656ba13b805a622aff7c7ac3baad",
"assets/lib/assets/general-07_2022_07_02.json": "7f965a1f202674cd402f1f87c22c7c99",
"assets/lib/assets/general-08_2022_07_13.json": "cf705320ed7086fe6cfa8ea466dc6d8a",
"assets/lib/assets/general-06_2022_07_06.json": "7264e92c71bb13d513d04e79aeee2102",
"assets/lib/assets/general-07_2022_06_27.json": "07b7b79c9f1ea567ce9dce38292e47b8",
"assets/lib/assets/general-08_2022_06_29.json": "7d06cde8dc0ac6b10cad31d0c4f8add4",
"assets/lib/assets/general-05_2022_07_17.json": "c8f48b567297f7e3c7c28c7ecd04534c",
"assets/lib/assets/general-03_2022_07_17.json": "7ed2cd8d374fe53afb40006684464925",
"assets/lib/assets/general-11_2022_06_26.json": "622f83dcce112d6130493231cd2f8985",
"assets/lib/assets/general-07_2022_07_01.json": "e5d91664cf24fe4d0eed7152a08fa3be",
"assets/lib/assets/general-11_2022_06_25.json": "3fb41521cf5a5bd473fef27e745e9678",
"assets/lib/assets/general-11_2022_07_12.json": "eb335ecad39bf44810df9483a9c21a94",
"assets/lib/assets/general-09_2022_06_23.json": "7516510eb385b7abfbc42f71a603df22",
"assets/lib/assets/general-06_2022_07_15.json": "9f901534e1610c566af3b4d6be4f78e2",
"assets/lib/assets/general-06_2022_06_22.json": "c4d6067116045eceab349ee6e1acee98",
"assets/lib/assets/test.json": "64ca05de31bd782bd812e160ee811c40",
"assets/lib/assets/general-11_2022_07_10.json": "98822e2ea66e33734bfc1dc41cf40e93",
"assets/lib/assets/general-07_2022_07_05.json": "e0d67b4da59fd0b3f15b29356d37fb05",
"assets/lib/assets/general-05_2022_07_03.json": "7466a4e497690170e9126ec645b20713",
"assets/lib/assets/general-08_2022_07_15.json": "723fd558d0d74c30a4ed3de3456f11f5",
"assets/lib/assets/general-05_2022_06_30.json": "73d958650153ad3641233f07f18eac0b",
"assets/lib/assets/general-03_2022_06_27.json": "aa1dc6f118864b4146d59624708aa70a",
"assets/lib/assets/general-05_2022_07_05.json": "3ae4ad58553c4595d6c0ccb343ac8d25",
"assets/lib/assets/general-10_2022_06_27.json": "a3551b5ec47b467dc5ad8d410d86acfd",
"assets/lib/assets/general-07_2022_06_29.json": "f0d5ab831eb9630995b4b75274674ace",
"assets/lib/assets/general-06_2022_07_11.json": "22d1148bd3aac9154357c541324f057f",
"assets/lib/assets/general-01_2022_07_11.json": "cab6f629c450c4d9bf8e52767bf976d4",
"assets/lib/assets/general-01_2022_07_14.json": "7eb25c227fe8fab4e234c6bea545ba38",
"assets/lib/assets/general-09_2022_07_07.json": "a3c4c49c6c0aecdd7598516b470d61b8",
"assets/lib/assets/general-07_2022_06_28.json": "1ddfc1b8061fbfd6f6a37b06aac1a7b0",
"assets/lib/assets/general-09_2022_07_02.json": "fb8d9cc09cbe6c6e48ef4bc67857676e",
"assets/lib/assets/general-10_2022_06_24.json": "a13512e1146a83e3087c4979338aae9e",
"assets/lib/assets/general-05_2022_06_28.json": "9c25bfaef48810d9a0f5a80ce90def2e",
"assets/lib/assets/general-01_2022_07_16.json": "dc50c279f42a18868a5197fe9a51a7fb",
"assets/lib/assets/general-09_2022_07_10.json": "6bfc60f7f063e1e48e6abd0225c70630",
"assets/lib/assets/general-04_2022_07_08.json": "e6aad06dc52641a1eef3a403b61b7d26",
"assets/lib/assets/general-09_2022_07_15.json": "439d5505b9de57fc5703f524bb9b5090",
"assets/lib/assets/general-11_2022_06_23.json": "70603a7b75f5bf949686ed895d1de59e",
"assets/lib/assets/general-05_2022_06_26.json": "4ec30b9b6b4ea98cfaffd29c3186d4ac",
"assets/lib/assets/general-05_2022_07_10.json": "bf5fde6f1c530869e3dab755882e4cfd",
"assets/lib/assets/general-05_2022_07_07.json": "371de2428344ab6e0870533897529bb8",
"assets/lib/assets/general-01_2022_07_08.json": "cda6c74522a165ce75694a67bcced319",
"assets/lib/assets/general-07_2022_07_15.json": "155265b3ea010b67dd8db5c2a961ab71",
"assets/lib/assets/general-09_2022_06_28.json": "c82f551619028fe5115c8f5206f95fa5",
"assets/lib/assets/general-08_2022_07_09.json": "1c982848d0f0438f9ceb543a765e64b3",
"assets/lib/assets/general-05_2022_06_25.json": "403db0cd81a580c5dfd8c9975b721d47",
"assets/lib/assets/general-10_2022_07_16.json": "ae78ebae5086fbe199573efc5ef84a2c",
"assets/lib/assets/general-01_2022_07_01.json": "3a35ddd6392d304f76529717db7796c1",
"assets/lib/assets/general-06_2022_06_20.json": "2880e4308c09c269e888bb2e67541a03",
"assets/lib/assets/general-11_2022_07_15.json": "d1b5662cf97cec2753982bb6b09ff842",
"assets/lib/assets/general-01_2022_07_03.json": "5ae8452e27ce70254ed17f20df14b685",
"assets/lib/assets/general-05_2022_07_15.json": "0a7f800912899702baffeb6854b0af6a",
"assets/lib/assets/general-11_2022_07_07.json": "d0fb17cd95260f2cf4d460af25283998",
"assets/fonts/MaterialIcons-Regular.otf": "d3ce52873234a85c8cf1ae48a696ba55",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "d6f4cbfc1f0bcbc45abff0bf90b0a0eb",
"assets/AssetManifest.bin": "c2999ff972a1eda10d11a9a1dac112dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "f69077c63d58dc632547d324056f947b",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"main.dart.js": "a5bf392f5d7d7ab84e67a471245b12cd",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "30024dfffdbe3fd398f6a05ee195b847",
"/": "30024dfffdbe3fd398f6a05ee195b847",
"version.json": "3e64c12453e6b999d4f4f89be67f460b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
