google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
    var data = google.visualization.arrayToDataTable(/* REPLACE */[['Name', 'Net Worth 1/1/20', 'YTD Change', { role: 'style' }], ['Elon R Musk', 169707483156, 31647727097, 'fill-color: #4fcc29'], ['Jeff Bezos', 190285827382, 2764224137, 'fill-color: #4fcc29'], ['Bill Gates', 131716988772, 1885573153, 'fill-color: #4fcc29'], ['Bernard Arnault', 112335690064, 2066657346, 'fill-color: #dd2323'], ['Mark Zuckerberg', 103481619023, 56683291, 'fill-color: #dd2323'], ['Zhong Shanshan', 78217170319, 12870208860, 'fill-color: #4fcc29'], ['Warren Buffett', 87644152654, 1566976328, 'fill-color: #4fcc29'], ['Larry Page', 82431101347, 5563258285, 'fill-color: #4fcc29'], ['Sergey Brin', 79806506145, 5350725886, 'fill-color: #4fcc29'], ['Steve Ballmer', 80397517936, 924799571, 'fill-color: #4fcc29'], ['Mukesh Ambani', 76707372441, 4463210586, 'fill-color: #4fcc29'], ['Larry Ellison', 79148831479, 507868201, 'fill-color: #dd2323'], ['Francoise Bettencourt Meyers', 71842679488, 3958777873, 'fill-color: #dd2323'], ['Pony Ma', 56442548724, 10955273913, 'fill-color: #4fcc29'], ['Amancio Ortega', 65684746312, 825903239, 'fill-color: #dd2323'], ['Rob Walton', 62641693384, 694162175, 'fill-color: #4fcc29'], ['Jim Walton', 62495183194, 704125099, 'fill-color: #4fcc29'], ['Alice Walton', 62382971542, 601096636, 'fill-color: #4fcc29'], ['Colin Huang', 60904468616, 1712839057, 'fill-color: #dd2323'], ['MacKenzie Scott', 58521860340, 1001096612, 'fill-color: #4fcc29'], ['Charles Koch', 56879901145, 1270502440, 'fill-color: #4fcc29'], ['Julia Flesher Koch', 56879901145, 1270502440, 'fill-color: #4fcc29'], ['Carlos Slim', 55484571337, 829789032, 'fill-color: #dd2323'], ['Phil Knight', 53872926352, 343367567, 'fill-color: #4fcc29'], ['Jack Ma', 50587387288, 3310902814, 'fill-color: #4fcc29'], ['Francois Pinault', 44916385615, 2839400978, 'fill-color: #dd2323'], ['Tadashi Yanai', 44852897720, 325086003, 'fill-color: #dd2323'], ['Michael Dell', 40133587694, 1605461203, 'fill-color: #4fcc29'], ['Jacqueline Mars', 40515727319, 1238374220, 'fill-color: #dd2323'], ['John Mars', 40515727319, 1238374220, 'fill-color: #dd2323'], ['Len Blavatnik', 38115018952, 1197041258, 'fill-color: #4fcc29'], ['Alain Wertheimer', 37867985750, 1567433665, 'fill-color: #dd2323'], ['Gerard Wertheimer', 37867985750, 1567433665, 'fill-color: #dd2323'], ['He Xiangjian', 36801515915, 1049675255, 'fill-color: #4fcc29'], ['William Ding', 30463224000, 5999712000, 'fill-color: #4fcc29'], ['Gautam Adani', 33787241657, 1448366730, 'fill-color: #4fcc29'], ['Zeng Yuqun', 30991973789, 3863272311, 'fill-color: #4fcc29'], ['Li Ka-Shing', 31107421767, 2319627347, 'fill-color: #4fcc29'], ['Giovanni Ferrero', 33314010110, 790531095, 'fill-color: #dd2323'], ['Dan Gilbert', 32959184536, 335335073, 'fill-color: #dd2323'], ['Vladimir Potanin', 30015442907, 2738417960, 'fill-color: #4fcc29'], ['Pang Kang', 31886043353, 729498080, 'fill-color: #4fcc29'], ['Yang Huiyan', 29996796262, 2187205897, 'fill-color: #4fcc29'], ['Takemitsu Takizaki', 31702859149, 647455305, 'fill-color: #dd2323'], ['Masayoshi Son', 27826217982, 2929442722, 'fill-color: #4fcc29'], ['Jay Y Lee', 28008468694, 2505913398, 'fill-color: #4fcc29'], ['Gina Rinehart', 28645775416, 1303300546, 'fill-color: #4fcc29'], ['Lei Jun', 29747371635, 1568848574, 'fill-color: #dd2323'], ['Zhang Zhidong', 24243867000, 4969945500, 'fill-color: #4fcc29'], ['Wang Wei', 25132298483, 3943038263, 'fill-color: #4fcc29'], ['Azim Premji', 25359165034, 2985721905, 'fill-color: #4fcc29'], ['Wang Xing', 21781452183, 5961366649, 'fill-color: #4fcc29'], ['Pallonji Mistry', 24519743933, 3210760849, 'fill-color: #4fcc29'], ['Dieter Schwarz', 26344627821, 1051943623, 'fill-color: #4fcc29'], ['Leonard  Lauder', 26993385796, 875463325, 'fill-color: #dd2323'], ['James Dyson', 23914699396, 2321050850, 'fill-color: #4fcc29'], ['Leonid Mikhelson', 24766551808, 1209042978, 'fill-color: #4fcc29'], ['Jim Ratcliffe', 25855980201, 1317448739, 'fill-color: #dd2323'], ['Klaus-Michael Kuehne', 24131955689, 1670214801, 'fill-color: #4fcc29'], ['Hui Ka Yan', 23281096186, 2436158359, 'fill-color: #4fcc29'], ['Shiv Nadar', 24137885606, 1104559214, 'fill-color: #4fcc29'], ['Li Xiting', 23232809849, 1977882331, 'fill-color: #4fcc29'], ['Vladimir Lisin', 23860414086, 1205395611, 'fill-color: #4fcc29'], ['Zhang Yiming', 25000000000, 0, 'fill-color: #dd2323'], ['Qin Yinglin', 22750779993, 2101953415, 'fill-color: #4fcc29'], ['Abby  Johnson', 24006450999, 528843497, 'fill-color: #4fcc29'], ['Li Shu Fu', 22190211454, 1617906491, 'fill-color: #4fcc29'], ['Andrew Forrest', 22339314997, 1439752631, 'fill-color: #4fcc29'], ['Zhong Huijuan', 19790093600, 3799561400, 'fill-color: #4fcc29'], ['Leonardo del Vecchio', 23583662767, 1146472828, 'fill-color: #dd2323'], ['Alexey Mordashov', 23062521766, 334377083, 'fill-color: #4fcc29'], ['Jorge Paulo Lemann', 23153657908, 663465983, 'fill-color: #dd2323'], ['Goh Cheng Liang', 23142303972, 4421600799, 'fill-color: #dd2323'], ['Lukas Walton', 22589641567, 416088380, 'fill-color: #4fcc29'], ['Jim Simons', 22775000000, 225000000, 'fill-color: #4fcc29'], ['Susanne Klatten', 22778857687, 123368023, 'fill-color: #dd2323'], ['Lee Shau Kee', 21138710113, 1417493494, 'fill-color: #4fcc29'], ['Stefan Persson', 21188846445, 1144625894, 'fill-color: #4fcc29'], ['Thomas Peterffy', 19582947618, 2505430555, 'fill-color: #4fcc29'], ['Alisher Usmanov', 21112315846, 912409169, 'fill-color: #4fcc29'], ['Steve Schwarzman', 21515670043, 349482169, 'fill-color: #4fcc29'], ['Zuo Hui', 18160480277, 3499891064, 'fill-color: #4fcc29'], ['Iris Fontbona', 20214803299, 1440299584, 'fill-color: #4fcc29'], ['Ken Griffin', 21174061500, 255085425, 'fill-color: #4fcc29'], ['Carl Icahn', 20203328829, 1151190072, 'fill-color: #4fcc29'], ['Richard Liu', 19715551284, 1592826727, 'fill-color: #4fcc29'], ['Laurene Powell Jobs', 21160680302, 117147612, 'fill-color: #dd2323'], ['Heinz Hermann Thiele', 20633780385, 448750514, 'fill-color: #4fcc29'], ['Chen Bang', 20546066714, 389619907, 'fill-color: #4fcc29'], ['Sun Piaoyang', 20925750270, 379970964, 'fill-color: #dd2323'], ['Xu Hang', 19268319378, 1630815457, 'fill-color: #4fcc29'], ['Henry Cheng', 20353696485, 504421220, 'fill-color: #4fcc29'], ['Eric Schmidt', 19415266708, 1255731856, 'fill-color: #4fcc29'], ['Chen Zhiping', 15608366266, 4813690371, 'fill-color: #4fcc29'], ['Ernesto Bertarelli', 20029758360, 184318152, 'fill-color: #4fcc29'], ['Elaine Marshall', 19569446588, 432960372, 'fill-color: #4fcc29'], ['Zhou Qunfei', 15028243096, 4674122631, 'fill-color: #4fcc29'], ['John Menard Jr', 18430155902, 1226076439, 'fill-color: #4fcc29'], ['Fan Hongwei', 12518502539, 7055847045, 'fill-color: #4fcc29'], ['Wang Chuan-Fu', 16109095406, 3460715278, 'fill-color: #4fcc29'], ['Vagit Alekperov', 17280491622, 2101541442, 'fill-color: #4fcc29'], ['Andrey Melnichenko', 18098948144, 894216940, 'fill-color: #4fcc29'], ['Roman Abramovich', 18417394975, 560117667, 'fill-color: #4fcc29'], ['Donald Newhouse', 18507562807, 430348963, 'fill-color: #4fcc29'], ['Lee Man Tat', 18446155474, 445676363, 'fill-color: #4fcc29'], ['Jiang Rensheng', 18316340301, 554909811, 'fill-color: #4fcc29'], ['Lui Che Woo', 18401397288, 417706354, 'fill-color: #4fcc29'], ['Stefan Quandt', 18623430857, 156635178, 'fill-color: #dd2323'], ['Eric Yuan', 16395178936, 2170549300, 'fill-color: #4fcc29'], ['Robert Kuok', 17463854828, 1089671061, 'fill-color: #4fcc29'], ['Robin Li', 15656047404, 2537189979, 'fill-color: #4fcc29'], ['Peter Woo', 18043340488, 10284574, 'fill-color: #4fcc29'], ['Budi Hartono', 17379879365, 659061718, 'fill-color: #4fcc29'], ['Sara Mota de Larrea', 16853331160, 1069007576, 'fill-color: #4fcc29'], ['Gennady Timchenko', 16648527931, 1196729105, 'fill-color: #4fcc29'], ['Aliko Dangote', 17773352065, 33757428, 'fill-color: #dd2323'], ['Dietrich Mateschitz', 17655160699, 470825384, 'fill-color: #dd2323'], ['Ernie Garcia', 15451921860, 2200773308, 'fill-color: #4fcc29'], ['Cen Junda', 16915812609, 642952401, 'fill-color: #4fcc29'], ['Carl Cook', 17214839040, 114000000, 'fill-color: #dd2323'], ['Charoen Sirivadhanabhakdi', 15705899530, 1417221200, 'fill-color: #4fcc29'], ['Dustin Moskovitz', 16675929713, 440257277, 'fill-color: #4fcc29'], ['Michael Hartono', 16303425346, 632581533, 'fill-color: #4fcc29'], ['Lakshmi Mittal', 16402474729, 276193824, 'fill-color: #4fcc29'], ['Reinhold Wuerth', 16295322683, 371279042, 'fill-color: #4fcc29'], ['Viktor Vekselberg', 16102884301, 453453201, 'fill-color: #4fcc29'], ['Wu Yajun', 16122214260, 50156543, 'fill-color: #4fcc29'], ['Thomas Frist', 15790984660, 280420740, 'fill-color: #4fcc29'], ['Charlene de Carvalho-Heineken', 16046274542, 40490411, 'fill-color: #dd2323'], ['Alwaleed Al Saud', 15898799601, 325813781, 'fill-color: #dd2323'], ['Cyrus Poonawalla', 15678461517, 579951803, 'fill-color: #dd2323'], ['Ray Dalio', 15525000000, 0, 'fill-color: #dd2323'], ['Shu Ping', 14543557113, 912102559, 'fill-color: #4fcc29'], ['Uday Kotak', 15440703432, 909119900, 'fill-color: #dd2323'], ['Zhang Yong', 14447413914, 912200124, 'fill-color: #4fcc29'], ['Petr Kellner', 14450353900, 750763963, 'fill-color: #4fcc29'], ['Mikhail Fridman', 14429140103, 682183809, 'fill-color: #4fcc29'], ['Brian Chesky', 12490438014, 2567754907, 'fill-color: #4fcc29'], ['Hasso Plattner', 15038452716, 170973560, 'fill-color: #dd2323'], ['Huang Shilin', 13312267080, 1632079633, 'fill-color: #4fcc29'], ['Eduardo Saverin', 14783489194, 15504313, 'fill-color: #dd2323'], ['Radhakishan Damani', 14712438015, 220251087, 'fill-color: #dd2323'], ['Li Shuirong', 11751163126, 2886768854, 'fill-color: #4fcc29'], ['Leng You-Bin', 10741340455, 3872614699, 'fill-color: #4fcc29'], ['Wu Shaoxun', 14493221638, 1963278803, 'fill-color: #dd2323'], ['Scott Farquhar', 14343336645, 18382796, 'fill-color: #4fcc29'], ['Mike Cannon-Brookes', 14343336645, 18382796, 'fill-color: #4fcc29'], ['Karl Albrecht Jr', 13960254841, 316288934, 'fill-color: #4fcc29'], ['Beate Heister', 13960254841, 316288934, 'fill-color: #4fcc29'], ['Dave Duffield', 14246845258, 453307722, 'fill-color: #dd2323'], ['Wang Jianlin', 14147856408, 907907908, 'fill-color: #dd2323'], ['Ned Johnson III', 13715739817, 321412560, 'fill-color: #4fcc29'], ['Wei Jian Jun', 12807472044, 1139075129, 'fill-color: #4fcc29'], ['Phil Anschutz', 13781889280, 142341807, 'fill-color: #4fcc29'], ['Jorge Moll', 13839248312, 507814620, 'fill-color: #dd2323'], ['Ricardo Salinas', 12967740198, 822031292, 'fill-color: #4fcc29'], ['Patrick Drahi', 13787784791, 459882774, 'fill-color: #dd2323'], ['Liu Yonghao', 13361482633, 406172375, 'fill-color: #4fcc29'], ['Joseph Tsai', 12638057990, 1073617310, 'fill-color: #4fcc29'], ['Zhang Bangxin', 12535884089, 1137764971, 'fill-color: #4fcc29'], ['Jim Davis', 13466250000, 213750000, 'fill-color: #dd2323'], ['Ma Jianrong', 13159124740, 302741236, 'fill-color: #4fcc29'], ['Aloys Wobben', 12657722009, 727349575, 'fill-color: #4fcc29'], ['Gustaf Douglas', 13372005140, 88429640, 'fill-color: #dd2323'], ['Hugh Grosvenor', 12665000000, 525000000, 'fill-color: #4fcc29'], ['Qi Shi', 10183097109, 2945674677, 'fill-color: #4fcc29'], ['Jensen Huang', 12302008581, 746801673, 'fill-color: #4fcc29'], ['Mikhail Prokhorov', 12779478567, 213876374, 'fill-color: #4fcc29'], ['Jim Goodnight', 12971350732, 78533333, 'fill-color: #dd2323'], ['Seo Jung-Jin', 12935738199, 2157422373, 'fill-color: #dd2323'], ['Forrest Li', 10945700434, 1940561126, 'fill-color: #4fcc29'], ['David Tepper', 12822000000, 50000000, 'fill-color: #4fcc29'], ['Frank Wang', 9653879734, 3071552942, 'fill-color: #4fcc29'], ['Chen Jianhua', 9281859831, 3365982703, 'fill-color: #4fcc29'], ['Jack Dorsey', 12620861859, 13871557, 'fill-color: #dd2323'], ['Jay Chaudhry', 11816083652, 788743099, 'fill-color: #4fcc29'], ['Joe Gebbia', 10263628472, 2338460443, 'fill-color: #4fcc29'], ['Nathan Blecharczyk', 10263618490, 2338458158, 'fill-color: #4fcc29'], ['Gordon Moore', 10270999225, 2059663393, 'fill-color: #4fcc29'], ['Alejandro Santo Domingo', 12324701526, 199429124, 'fill-color: #dd2323'], ['Jan Koum', 12025000000, 250000000, 'fill-color: #4fcc29'], ['Donald Bren', 12272545602, 303124578, 'fill-color: #dd2323'], ['Raymond Kwok', 11204398536, 822740971, 'fill-color: #4fcc29'], ['Gong Hongjia', 10050047369, 1965246514, 'fill-color: #4fcc29'], ['Pierre Omidyar', 11235635907, 644068137, 'fill-color: #4fcc29'], ['Dang Yanbao', 9400475472, 2394820456, 'fill-color: #4fcc29'], ['Thomas Strungmann', 10158687002, 1402345057, 'fill-color: #4fcc29'], ['Andreas Strungmann', 10133687002, 1427345057, 'fill-color: #4fcc29'], ['Lu Zhongfang', 11556128424, 229976490, 'fill-color: #dd2323'], ['Thomas Kwok', 10763264529, 782340582, 'fill-color: #4fcc29'], ['Robert Pera', 11465416013, 690111199, 'fill-color: #dd2323'], ['Melker Schorling', 11375202601, 18248795, 'fill-color: #4fcc29'], ['Mat Ishbia', 11350500000, 0, 'fill-color: #dd2323'], ['David Geffen', 11083890000, 248680000, 'fill-color: #4fcc29'], ['Victor Rashnikov', 11180963553, 105756170, 'fill-color: #4fcc29'], ['Graeme Hart', 11265821350, 530931850, 'fill-color: #dd2323'], ['Patrick Soon-Shiong', 10592576995, 482732664, 'fill-color: #4fcc29'], ['Sherry Brydson', 10977171768, 70435321, 'fill-color: #4fcc29'], ['Marcel Telles', 10976146249, 331952265, 'fill-color: #dd2323'], ['Bobby Murphy', 10092761300, 851191461, 'fill-color: #4fcc29'], ['Wang Laisheng', 10481068185, 443836597, 'fill-color: #4fcc29'], ['Wang Wenyin', 9862383596, 983473570, 'fill-color: #4fcc29'], ['Yongxing Liu', 9762915632, 1060598628, 'fill-color: #4fcc29'], ['Ding Shizhong', 9748993036, 966323696, 'fill-color: #4fcc29'], ['Charlie Ergen', 10686388923, 23672273, 'fill-color: #4fcc29'], ['Lin Bin', 10646801434, 1179643867, 'fill-color: #dd2323'], ['Cheng Xue', 10382821000, 236872315, 'fill-color: #4fcc29'], ['Luis Sarmiento', 10615922748, 76460022, 'fill-color: #dd2323'], ['Charles Schwab', 9870522338, 735146238, 'fill-color: #4fcc29'], ['Michael Otto', 10059229315, 530743839, 'fill-color: #4fcc29'], ['Liu Jincheng', 8093136486, 2430290113, 'fill-color: #4fcc29'], ['Dmitry Rybolovlev', 10374698277, 134490758, 'fill-color: #4fcc29'], ['Eyal Ofer', 10369349004, 91254863, 'fill-color: #4fcc29'], ['Shigenobu Nagamori', 9585390797, 846600161, 'fill-color: #4fcc29'], ['Georg Schaeffler', 10431248779, 318650965, 'fill-color: #dd2323'], ['Ding Shijia', 9484313502, 939165498, 'fill-color: #4fcc29'], ['Li Zhenguo', 8298854085, 2085841610, 'fill-color: #4fcc29'], ['Tobias Lutke', 9832829934, 544721068, 'fill-color: #4fcc29'], ['Emmanuel Besnier', 10184564413, 167933484, 'fill-color: #4fcc29'], ['Wang Laichun', 9846096818, 416314197, 'fill-color: #4fcc29'], ['German Khan', 9787769856, 455074852, 'fill-color: #4fcc29'], ['Sunil Mittal', 8897572819, 1305290415, 'fill-color: #4fcc29'], ['Heinrich Deichmann', 10196063681, 391743251, 'fill-color: #dd2323'], ['David Sun', 10048525000, 146600000, 'fill-color: #4fcc29'], ['John Tu', 10048525000, 146600000, 'fill-color: #4fcc29'], ['Evan Spiegel', 9423451365, 769528548, 'fill-color: #4fcc29'], ['Steve Cohen', 10147039000, 20520000, 'fill-color: #4fcc29'], ['Kim Jungju', 10158373554, 157249398, 'fill-color: #dd2323'], ['Johann Graf', 10085774095, 25000000, 'fill-color: #4fcc29'], ['Christy Walton', 10007477947, 98726095, 'fill-color: #4fcc29'], ['Jorn Rausing', 9801110589, 300441430, 'fill-color: #4fcc29'], ['Marijke Mars', 10095109632, 308663845, 'fill-color: #dd2323'], ['Victoria Mars', 10095109632, 308663845, 'fill-color: #dd2323'], ['Pam Mars-Wright', 10095109632, 308663845, 'fill-color: #dd2323'], ['Valerie Mars', 10095109632, 308663845, 'fill-color: #dd2323'], ['Unknown', 8776450380, 1308335980, 'fill-color: #4fcc29'], ['Michael Kadoorie', 9879161244, 204467708, 'fill-color: #4fcc29'], ['Alberto Bailleres', 10071241108, 191362464, 'fill-color: #dd2323'], ['Dilip Shanghvi', 10063658690, 159263518, 'fill-color: #dd2323'], ['Micky Arison', 10051808472, 28816962, 'fill-color: #dd2323'], ['Michael Platt', 4887000000, 5150000000, 'fill-color: #4fcc29'], ['Suleiman Kerimov', 9888297943, 83290272, 'fill-color: #4fcc29'], ['Paolo Rocca', 9964733702, 19961039, 'fill-color: #dd2323'], ['Leon Black', 9889477956, 83726634, 'fill-color: #dd2323'], ['Stefano Pessina', 8758329659, 1123677545, 'fill-color: #4fcc29'], ['Denise Coates', 9837443483, 406933581, 'fill-color: #dd2323'], ['Anders Holch Povlsen', 9374385144, 443286964, 'fill-color: #4fcc29'], ['Carlos Sicupira', 9740011835, 290250766, 'fill-color: #dd2323'], ['Harry Triguboff', 9700000000, 0, 'fill-color: #dd2323'], ['Hui Wing Mau', 9505139840, 129242702, 'fill-color: #4fcc29'], ['Ruan Liping', 8566921274, 968349903, 'fill-color: #4fcc29'], ['August von Finck', 9441199841, 77215733, 'fill-color: #4fcc29'], ['Ruan Xueping', 8541921274, 968349903, 'fill-color: #4fcc29'], ['Dietmar Hopp', 9483227681, 217339040, 'fill-color: #dd2323'], ['He Xiaopeng', 7467587345, 2001585400, 'fill-color: #4fcc29'], ['Tim Sweeney', 9448000000, 0, 'fill-color: #dd2323'], ['Gianluigi Aponte', 9422511664, 134356082, 'fill-color: #dd2323'], ['Reinhold Schmieding', 8752699125, 665000000, 'fill-color: #4fcc29'], ['Yu Renrong', 6732438076, 2671781003, 'fill-color: #4fcc29'], ['Antonia Axson Johnson', 9127752640, 252142820, 'fill-color: #4fcc29'], ['Cai Kui', 9268983451, 73641178, 'fill-color: #4fcc29'], ['Rocco Commisso', 9334800041, 597721105, 'fill-color: #dd2323'], ['Blair Parry-Okeden', 9254114519, 73491347, 'fill-color: #4fcc29'], ['Jim Kennedy', 9254114519, 73491347, 'fill-color: #4fcc29'], ['Gabe Newell', 9172713366, 145047047, 'fill-color: #4fcc29'], ['Sarath Ratanavadi', 9260140608, 21321352, 'fill-color: #4fcc29'], ['Galen Weston', 8997705560, 187797484, 'fill-color: #4fcc29'], ['Sun Hongbin', 7805683002, 1296792831, 'fill-color: #4fcc29'], ['Takahisa Takahara', 9045562227, 50656039, 'fill-color: #dd2323'], ['Andy Beal', 8799971906, 242305531, 'fill-color: #4fcc29'], ['Hansjoerg Wyss', 8922405072, 114468004, 'fill-color: #4fcc29'], ['William Li', 7524254192, 1485016829, 'fill-color: #4fcc29'], ['Marc Benioff', 8923704618, 13671770, 'fill-color: #4fcc29'], ['John Fredriksen', 8698322469, 238243551, 'fill-color: #4fcc29'], ['Li Ge', 7797288104, 1136208297, 'fill-color: #4fcc29'], ['Iskander Makhmudov', 7849260897, 1061066007, 'fill-color: #4fcc29'], ['Niels Louis-Hansen', 8904806973, 386213944, 'fill-color: #dd2323'], ['Theo Albrecht Jr', 8657566368, 221325505, 'fill-color: #4fcc29'], ['Wee Cho Yaw', 8473150945, 382431969, 'fill-color: #4fcc29'], ['John Albert Sobrato', 8838777626, 0, 'fill-color: #dd2323'], ['George Lucas', 8810493579, 367059122, 'fill-color: #dd2323'], ['Alexander Abramov', 8384722228, 418925063, 'fill-color: #4fcc29'], ['Pei Zhenhua', 7856679282, 928764674, 'fill-color: #4fcc29'], ['Yao Liangsong', 8409639584, 352438128, 'fill-color: #4fcc29'], ['Alain Merieux', 8125633558, 432064978, 'fill-color: #4fcc29'], ['Wang Wenjing', 7863445298, 672161182, 'fill-color: #4fcc29'], ['Larry Chen', 5635924663, 2899590667, 'fill-color: #4fcc29'], ['George Roberts', 8332119406, 157505004, 'fill-color: #4fcc29'], ['Kei Hoi Pang', 8405388254, 80509106, 'fill-color: #4fcc29'], ['Les Wexner', 7964561557, 513824310, 'fill-color: #4fcc29'], ['Li Jianquan', 7386690559, 1082373372, 'fill-color: #4fcc29'], ['Willi Liebherr', 7897176909, 543554669, 'fill-color: #4fcc29'], ['Isolde Liebherr', 7897176909, 543554669, 'fill-color: #4fcc29'], ['Johann Rupert', 8021299032, 413819426, 'fill-color: #4fcc29'], ['Magdalena Martullo-Blocher', 8421829499, 89932328, 'fill-color: #dd2323'], ['Stephen Ross', 8361483232, 53695543, 'fill-color: #4fcc29'], ['Xu Shihui', 7951395147, 455936853, 'fill-color: #4fcc29'], ['Alexander Otto', 7997857621, 383024459, 'fill-color: #4fcc29'], ['Henry Kravis', 8240233344, 129023257, 'fill-color: #4fcc29'], ['Stan Kroenke', 8352000000, 0, 'fill-color: #dd2323'], ['Juan Beckmann', 8333234630, 95415808, 'fill-color: #dd2323'], ['Shahid Khan', 8193119728, 79325743, 'fill-color: #4fcc29'], ['Anthony Wood', 6545730739, 1724301960, 'fill-color: #4fcc29'], ['Anthony Bamford', 7817878301, 451681363, 'fill-color: #4fcc29'], ['Pham Nhat Vuong', 8259267693, 260425013, 'fill-color: #dd2323'], ['Lin Jianhua', 7251151258, 1004716147, 'fill-color: #4fcc29'], ['John Malone', 8073278257, 138905756, 'fill-color: #4fcc29'], ['Joseph Lau', 7649220358, 539552162, 'fill-color: #4fcc29'], ['Rahel Blocher', 8171829499, 114932328, 'fill-color: #dd2323'], ['Silvio Berlusconi', 8084855299, 30428777, 'fill-color: #4fcc29'], ['Marcos Galperin', 7050880000, 1059880000, 'fill-color: #4fcc29'], ['Jude Reyes', 7940100000, 137750000, 'fill-color: #4fcc29'], ['Chris Reyes', 7940100000, 137750000, 'fill-color: #4fcc29'], ['John P Grayken', 8006842820, 206057195, 'fill-color: #dd2323'], ['Nusli Wadia', 7892527582, 96808862, 'fill-color: #4fcc29'], ['Brian Kim', 6941684414, 1038634066, 'fill-color: #4fcc29'], ['Zhao Yan', 7071635021, 902402609, 'fill-color: #4fcc29'], ['Andrew Currie', 7969685771, 408451745, 'fill-color: #dd2323'], ['Anthony Pratt', 7770880000, 152950000, 'fill-color: #4fcc29'], ['John Reece', 7919771246, 405893592, 'fill-color: #dd2323'], ['Martin Lorentzon', 7139734625, 752611304, 'fill-color: #4fcc29'], ['Rinat Akhmetov', 7529453866, 356752085, 'fill-color: #4fcc29'], ['Mohammed Al-Amoudi', 7564978105, 216769716, 'fill-color: #4fcc29'], ['Alexey Kuzmichev', 7417338995, 344319484, 'fill-color: #4fcc29'], ['Sandra Ortega Mera', 7717701438, 32949311, 'fill-color: #4fcc29'], ['Yu Yong', 5406551954, 2300515743, 'fill-color: #4fcc29'], ['Arthur Irving', 7526605824, 160326882, 'fill-color: #4fcc29'], ['Rupert Murdoch', 7454633082, 228160157, 'fill-color: #4fcc29'], ['Ernest Garcia', 6741410390, 929005415, 'fill-color: #4fcc29'], ['Savitri Jindal', 7328044753, 298258648, 'fill-color: #4fcc29'], ['Frank Lowy', 7400000000, 225000000, 'fill-color: #4fcc29'], ['Finn Rausing', 7616764243, 75902373, 'fill-color: #dd2323'], ['Kirsten Rausing', 7616764243, 75902373, 'fill-color: #dd2323'], ['George Soros', 7600000000, 0, 'fill-color: #dd2323'], ['Jim Pattison', 7583174925, 7652865, 'fill-color: #dd2323'], ['Giorgio Armani', 7544940220, 87069206, 'fill-color: #dd2323'], ['Leonid Fedun', 6661277378, 873185492, 'fill-color: #4fcc29'], ['Laurent Dassault', 7524162760, 118878403, 'fill-color: #dd2323'], ['Olivier Dassault', 7524162760, 118878403, 'fill-color: #dd2323'], ['Marie-Helene Habert-Dassault', 7524162760, 118878403, 'fill-color: #dd2323'], ['Thierry Dassault', 7524162760, 118878403, 'fill-color: #dd2323'], ['Ralph Lauren', 7358532548, 129351360, 'fill-color: #4fcc29'], ['Benu Gopal Bangur', 7485132972, 83394127, 'fill-color: #dd2323'], ['Elizabeth Johnson', 7326890796, 156947626, 'fill-color: #4fcc29'], ['Ned Johnson IV', 7327431134, 155869250, 'fill-color: #4fcc29'], ['Dennis Washington', 7129104614, 351234071, 'fill-color: #4fcc29'], ['Nicky Oppenheimer', 7150000000, 325000000, 'fill-color: #4fcc29'], ['Kumar Birla', 6868185595, 589500690, 'fill-color: #4fcc29'], ['Terry Gou', 6601366338, 819124972, 'fill-color: #4fcc29'], ['Ludwig Merckle', 7363257699, 39990193, 'fill-color: #dd2323'], ['Kjeld Kristiansen', 7111228925, 223854819, 'fill-color: #4fcc29'], ['Shi Yonghong', 6892246426, 434256605, 'fill-color: #4fcc29'], ['Li Haiyan', 6892246426, 427260419, 'fill-color: #4fcc29'], ['Steven Spielberg', 7150000000, 150000000, 'fill-color: #4fcc29'], ['Geoffrey Kwok', 6707949911, 568478422, 'fill-color: #4fcc29'], ['Richard Kinder', 6809271439, 458174220, 'fill-color: #4fcc29'], ['Martin Viessmann', 6990972480, 259136440, 'fill-color: #4fcc29'], ['Zeng Fangqin', 7137746443, 105603381, 'fill-color: #4fcc29'], ['Ronda Stryker', 7210915589, 8611323, 'fill-color: #dd2323'], ['Chung Mong-Koo', 5686864443, 1516027666, 'fill-color: #4fcc29'], ['Mohamed Al Jaber', 7190937157, 1199625, 'fill-color: #4fcc29'], ['Andy Bechtolsheim', 6866620957, 318985952, 'fill-color: #4fcc29'], ['Prakash Lohia', 6895575991, 243818362, 'fill-color: #4fcc29'], ['Agnete Thinggaard', 6936228925, 198871600, 'fill-color: #4fcc29'], ['Thomas Kristiansen', 6936221213, 198879312, 'fill-color: #4fcc29'], ['Sofie Kiaer Kristiansen', 6936228925, 198854819, 'fill-color: #4fcc29'], ['Charles Gerald John Cadogan', 7064000000, 25000000, 'fill-color: #4fcc29'], ['Teh Hong Piow', 6882204043, 180211630, 'fill-color: #4fcc29'], ['Robert Smith', 7050000000, 0, 'fill-color: #dd2323'], ['Nancy Walton Laurie', 6975844947, 66876953, 'fill-color: #4fcc29'], ['Unknown', 1875655522, 5152124657, 'fill-color: #4fcc29'], ['Peter A Thiel', 6642674353, 378290552, 'fill-color: #4fcc29'], ['Carl Bennet', 6867248779, 120628029, 'fill-color: #4fcc29'], ['Liz Mohn', 6759522077, 198512904, 'fill-color: #4fcc29'], ['Majid Al Futtaim', 6603392497, 334250769, 'fill-color: #4fcc29'], ['K P Singh', 5663079684, 1273252104, 'fill-color: #4fcc29'], ['Xavier Niel', 6876720590, 433571756, 'fill-color: #dd2323'], ['Eli Broad', 6875000000, 0, 'fill-color: #dd2323'], ['David Thomson', 6806413674, 60717629, 'fill-color: #4fcc29'], ['Taylor Thomson', 6808936451, 57468647, 'fill-color: #4fcc29'], ['Peter Thomson', 6808936451, 57468647, 'fill-color: #4fcc29'], ['Izzy Englander', 6764893871, 67027234, 'fill-color: #4fcc29'], ['Prajogo Pangestu', 6773341488, 55625635, 'fill-color: #4fcc29'], ['Lai Meisong', 6175750807, 648570902, 'fill-color: #4fcc29'], ['German Mota-Velasco', 6309244145, 509675832, 'fill-color: #4fcc29'], ['Jiang Bin', 6082029666, 724983281, 'fill-color: #4fcc29'], ['Bob Rich', 6801043350, 285000000, 'fill-color: #dd2323'], ['Antti Herlin', 6784981254, 46271500, 'fill-color: #dd2323'], ['Manny Villar', 6672231047, 75981926, 'fill-color: #4fcc29'], ['Yasumitsu Shigeta', 6721157005, 372889793, 'fill-color: #dd2323'], ['Stef Wertheimer', 6525000000, 175000000, 'fill-color: #4fcc29'], ['Shari Arison', 6551029106, 132259084, 'fill-color: #4fcc29'], ['Tito Beveridge', 6658971885, 257307500, 'fill-color: #dd2323'], ['Reed Hastings', 6585394692, 158253788, 'fill-color: #dd2323'], ['Nassef Sawiris', 6565009353, 32142155, 'fill-color: #dd2323'], ['Fredrik Lundberg', 6397851416, 155937707, 'fill-color: #4fcc29'], ['Joe Lewis', 6493217362, 38350121, 'fill-color: #4fcc29'], ['John Sall', 6485675268, 39266667, 'fill-color: #dd2323'], ['Kenneth Dart', 6318792777, 162071503, 'fill-color: #4fcc29'], ['Robert Rowling', 6139787857, 315196814, 'fill-color: #4fcc29'], ['Ronald McAulay', 6312103645, 129963393, 'fill-color: #4fcc29'], ['Jerry Jones', 6391557144, 49885715, 'fill-color: #4fcc29'], ['Simon Reuben', 6350000000, 75000000, 'fill-color: #4fcc29'], ['David Reuben', 6350000000, 75000000, 'fill-color: #4fcc29'], ['Jean-Michel Besnier', 6283192221, 103603681, 'fill-color: #4fcc29'], ['Natie Kirsh', 6385468931, 72617859, 'fill-color: #dd2323'], ['Tamara Hughes Gustavson', 6384864914, 104266165, 'fill-color: #dd2323'], ['Terry Pegula', 6300000000, 75000000, 'fill-color: #4fcc29'], ['JK Irving', 6252992191, 117762376, 'fill-color: #4fcc29'], ['Guenther Fielmann', 5987998581, 379698974, 'fill-color: #4fcc29'], ['Petr Aven', 6117806200, 231854197, 'fill-color: #4fcc29'], ['Lin Li', 6100275057, 243349688, 'fill-color: #4fcc29'], ['Lynn Schusterman', 6201327742, 131783000, 'fill-color: #4fcc29'], ['Randa Duncan Williams', 5855934308, 469795513, 'fill-color: #4fcc29'], ['Dannine Avara', 5855677092, 469758354, 'fill-color: #4fcc29'], ['Scott Duncan', 5855677092, 469758354, 'fill-color: #4fcc29'], ['Milane Duncan Frantz', 5855677092, 469758354, 'fill-color: #4fcc29'], ['Richard Branson', 5723769081, 593877823, 'fill-color: #4fcc29'], ['Andre Hoffmann', 5924148795, 338796711, 'fill-color: #4fcc29'], ['Andrey Skoch', 5732268493, 465984644, 'fill-color: #4fcc29'], ['Margaretta Taylor', 6117029605, 73617352, 'fill-color: #4fcc29'], ['Katharine Rayner', 6117029605, 73617352, 'fill-color: #4fcc29'], ['Gwendolyn Sontheim Meyer', 6035110648, 142374821, 'fill-color: #4fcc29'], ['Pauline MacMillan Keinath', 6035110648, 142374821, 'fill-color: #4fcc29'], ['Unknown', 5470635909, 699250796, 'fill-color: #4fcc29'], ['James Chambers', 6117029605, 48617352, 'fill-color: #4fcc29'], ['Ann Walton Kroenke', 6103737447, 52940453, 'fill-color: #4fcc29'], ['Henry Samueli', 5888820157, 255458194, 'fill-color: #4fcc29'], ['George Kaiser', 5969186302, 151991279, 'fill-color: #4fcc29'], ['Tilman Fertitta', 5669262968, 438594102, 'fill-color: #4fcc29'], ['Joshua Harris', 6105802161, 5203693, 'fill-color: #dd2323'], ['Vikram Lal', 5311704515, 759359474, 'fill-color: #4fcc29'], ['Li Xiang', 4904031133, 1163505501, 'fill-color: #4fcc29'], ['Dong Wei', 6060214253, 121287574, 'fill-color: #dd2323'], ['Laurence Graff', 6059653851, 132151412, 'fill-color: #dd2323'], ['Chip Wilson', 5958782148, 87933505, 'fill-color: #4fcc29'], ['Vera Michalski-Hoffmann', 5848074760, 196396291, 'fill-color: #4fcc29'], ['Maja Hoffmann', 5848074760, 196396291, 'fill-color: #4fcc29'], ['Eric Smidt', 5587548000, 454191000, 'fill-color: #4fcc29'], ['Francis Choi', 6037609064, 459916, 'fill-color: #4fcc29'], ['David Shaw', 5871999729, 140796097, 'fill-color: #4fcc29'], ['Kwon Hyuk-Bin', 5997293438, 36209313, 'fill-color: #dd2323'], ['Dan Cathy', 5979119854, 6744993, 'fill-color: #dd2323'], ['Bubba Cathy', 5979119854, 6744993, 'fill-color: #dd2323'], ['Lu Weiding', 5543308795, 409305118, 'fill-color: #4fcc29'], ['Harold Hamm', 5105795432, 798520203, 'fill-color: #4fcc29'], ['Peter-Alexander Wacker', 5726170864, 165521575, 'fill-color: #4fcc29'], ['Udo Tschira', 5880705986, 106945541, 'fill-color: #dd2323'], ['Harald Tschira', 5880705986, 106945541, 'fill-color: #dd2323'], ['Hiroshi Mikitani', 5857916179, 75293835, 'fill-color: #dd2323'], ['Unknown', 5853117141, 94328662, 'fill-color: #dd2323'], ['Isaac Perlmutter', 5850512000, 251460000, 'fill-color: #dd2323'], ['Tsai Eng-Meng', 5841201721, 112131043, 'fill-color: #dd2323'], ['Dhanin Chearavanont', 5507225584, 328894049, 'fill-color: #4fcc29'], ['Stan Druckenmiller', 5831408866, 0, 'fill-color: #dd2323'], ['Olav Thon', 5826237243, 5185719, 'fill-color: #dd2323'], ['Rahul Bajaj', 5565675547, 210494182, 'fill-color: #4fcc29'], ['Guo Guangchang', 5730605475, 40430667, 'fill-color: #4fcc29'], ['Ashwin Dani', 5749577743, 66349529, 'fill-color: #dd2323'], ['Bidzina Ivanishvili', 5670000000, 75000000, 'fill-color: #4fcc29'], ['Leonard Stern', 5495509832, 232341876, 'fill-color: #4fcc29'], ['Zhang Lei', 5637300535, 80706337, 'fill-color: #4fcc29'], ['Gary Rollins', 5712353204, 162223314, 'fill-color: #dd2323'], ['Alan Trefler', 5325505905, 362743698, 'fill-color: #4fcc29'], ['Abhay Vakil', 5686888226, 91147847, 'fill-color: #dd2323'], ['Anthony von Mandl', 5686075750, 313500000, 'fill-color: #dd2323'], ['Bertil Hult', 5672179930, 12862086, 'fill-color: #4fcc29'], ['Miuccia Prada', 5681309908, 270054247, 'fill-color: #dd2323'], ['Patrizio Bertelli', 5660111431, 270307367, 'fill-color: #dd2323'], ['Barry Lam', 5503029316, 152479792, 'fill-color: #4fcc29'], ['Pat Stryker', 5634764698, 32572052, 'fill-color: #dd2323'], ['Barry Diller', 5549651972, 57925419, 'fill-color: #4fcc29'], ['Yusuo Wang', 4764987852, 838711009, 'fill-color: #4fcc29'], ['Axel Oberwelland', 5602303841, 227040342, 'fill-color: #dd2323'], ['Ray Hunt', 4715266626, 885337084, 'fill-color: #4fcc29'], ['Clive Calder', 5450000000, 150000000, 'fill-color: #4fcc29'], ['Michael Herz', 5592370093, 212100762, 'fill-color: #dd2323'], ['Wolfgang Herz', 5592370093, 212100762, 'fill-color: #dd2323'], ['Charles Dolan', 5529122994, 62868107, 'fill-color: #4fcc29'], ['Akio Nitori', 5511164254, 74737952, 'fill-color: #4fcc29'], ['Marie Besnier Beauvalot', 5488118626, 90493696, 'fill-color: #4fcc29'], ['Andrey Guryev', 5115470573, 447644371, 'fill-color: #4fcc29'], ['Naguib Sawiris', 5485634696, 71617511, 'fill-color: #4fcc29'], ['Johan Johannson', 5345084548, 204582379, 'fill-color: #4fcc29'], ['Tom Morris', 5549629498, 47477660, 'fill-color: #dd2323'], ['Edward Roski', 5540918673, 281832143, 'fill-color: #dd2323'], ['Steven Yang', 4978666575, 555362557, 'fill-color: #4fcc29'], ['Jean-Pierre Cayard', 5530143134, 231520534, 'fill-color: #dd2323'], ['Unknown', 4670129092, 858685654, 'fill-color: #4fcc29'], ['Andrey Kozitsyn', 4214918313, 1287045270, 'fill-color: #4fcc29'], ['Pedro Moreira Salles', 5497796884, 167849473, 'fill-color: #dd2323'], ['Marian Ilitch', 5447716410, 44085957, 'fill-color: #4fcc29'], ['Jane Lauder', 5489739440, 217730069, 'fill-color: #dd2323'], ['Thomas Schmidheiny', 5286443214, 201142174, 'fill-color: #4fcc29'], ['M A Yusuff Ali', 5430183918, 44720840, 'fill-color: #4fcc29'], ['Daniel Ek', 4935766674, 519659921, 'fill-color: #4fcc29'], ['Frits Goldschmeding', 5258635523, 188010232, 'fill-color: #4fcc29'], ['Dagmar Dolby', 5445417248, 84499178, 'fill-color: #dd2323'], ['Top 20% of Americans', 630754, 0, 'fill-color: #000000'], ['Median American', 68828, 0, 'fill-color: #000000'], ['Median European', 24742, 0, 'fill-color: #000000'], ['Median Chinese', 20942, 0, 'fill-color: #000000'], ['Median World', 7087, 0, 'fill-color: #000000'], ['Median South America', 4929, 0, 'fill-color: #000000'], ['Median Asia-Pacific', 4188, 0, 'fill-color: #000000'], ['Median India', 4188, 0, 'fill-color: #000000'], ['Median Africa', 1219, 0, 'fill-color: #000000'], ['Bottom 20% of Americans', -6029, 0, 'fill-color: #000000'], ['US Treasury Cash Reserves', 35700000000, 0, 'fill-color: #000000']]/* REPLACE */);

    var options = {
        // title: 'Greederboard',
        chartArea: { width: '60%', height: '99%', top: 0},
        backgroundColor: 'black',
        colors: ['#FFFFFF', '#004411'],
        isStacked: true,
        fontSize: 14,
        hAxis: {
            // title: 'Net worth (USD)',
            minValue: 0,
            format: 'short',
            titleTextStyle: {
                color: '#FFFFFF'
            },
            textStyle: {
                color: 'white',
            },
            gridlines: {
                color: 'black'
            },
        },
        vAxis: {
            // title: 'Person/Group',
            titleTextStyle: {
                color: '#FFFFFF'
            },
            textStyle: {
                color: 'white',
            }
        },
        animation: {
            duration: 10000,
            easing: 'out',
            startup: true
        },
        explorer: {
            keepInBounds: true,
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            maxZoomIn: 100000,
            zoomDelta: 5000
        },
        legend: {
            textStyle: {
                color: 'white'
            },
            position: 'none'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('greederboard'));
    chart.draw(data, options);
}