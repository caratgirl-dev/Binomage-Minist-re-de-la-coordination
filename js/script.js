const members = [
  {"name":"Gaelle Porquet","phone":"0504938993","dept":"GDC Church","binome":{"name":"Kouame Eunyce","phone":"+1 (819) 635-3051","dept":"Usher Church"}},
  {"name":"Kouame Eunyce","phone":"+1 (819) 635-3051","dept":"Usher Church","binome":{"name":"Gaelle Porquet","phone":"0504938993","dept":"GDC Church"}},
  {"name":"Kouadio Yvann","phone":"+2250103486410","dept":"Usher Church","binome":{"name":"Dreli Seri","phone":"0749698441","dept":"GDC Church"}},
  {"name":"Dreli Seri","phone":"0749698441","dept":"GDC Church","binome":{"name":"Kouadio Yvann","phone":"+2250103486410","dept":"Usher Church"}},
  {"name":"Erica","phone":"+2250778808750","dept":"Protocole Church","binome":{"name":"Goue Carelle","phone":"+2250749525294","dept":"Usher Church"}},
  {"name":"Goue Carelle","phone":"+2250749525294","dept":"Usher Church","binome":{"name":"Erica","phone":"+2250778808750","dept":"Protocole Church"}},
  {"name":"Hillary Akakpovi","phone":"0141388074","dept":"GDC Church","binome":{"name":"Binaté Fayed","phone":"+2250788420589","dept":"Usher Church"}},
  {"name":"Binaté Fayed","phone":"+2250788420589","dept":"Usher Church","binome":{"name":"Hillary Akakpovi","phone":"0141388074","dept":"GDC Church"}},
  {"name":"Nelly Lesly","phone":"+2250797529731","dept":"GDC Church","binome":{"name":"Lohourou Miracle","phone":"+2250141431004","dept":"Usher Church"}},
  {"name":"Lohourou Miracle","phone":"+2250141431004","dept":"Usher Church","binome":{"name":"Nelly Lesly","phone":"+2250797529731","dept":"GDC Church"}},
  {"name":"Ange Gomé","phone":"+2250706239018","dept":"GDC Church","binome":{"name":"Bé Jeancis","phone":"+2250160851654","dept":"Usher Church"}},
  {"name":"Bé Jeancis","phone":"+2250160851654","dept":"Usher Church","binome":{"name":"Ange Gomé","phone":"+2250706239018","dept":"GDC Church"}},
  {"name":"Fréda","phone":"0140135513","dept":"GDC Church","binome":{"name":"Lago Olivia","phone":"+2250788414196","dept":"Usher Church"}},
  {"name":"Lago Olivia","phone":"+2250788414196","dept":"Usher Church","binome":{"name":"Fréda","phone":"0140135513","dept":"GDC Church"}},
  {"name":"Yves Roland","phone":"+2250566608390","dept":"Protocole Church","binome":{"name":"Malan Ange","phone":"+2250103548290","dept":"Usher Church"}},
  {"name":"Malan Ange","phone":"+2250103548290","dept":"Usher Church","binome":{"name":"Yves Roland","phone":"+2250566608390","dept":"Protocole Church"}},
  {"name":"Yannis","phone":"+2250102002898","dept":"Protocole Church","binome":{"name":"Douhouri Hermann","phone":"+2250769890132","dept":"Usher Church"}},
  {"name":"Douhouri Hermann","phone":"+2250769890132","dept":"Usher Church","binome":{"name":"Yannis","phone":"+2250102002898","dept":"Protocole Church"}},
  {"name":"Myriam Camara","phone":"0151825323","dept":"GDC Church","binome":{"name":"Adou Emmanuel","phone":"+2250788330418","dept":"Usher Church"}},
  {"name":"Adou Emmanuel","phone":"+2250788330418","dept":"Usher Church","binome":{"name":"Myriam Camara","phone":"0151825323","dept":"GDC Church"}},
  {"name":"Elisée","phone":"+2250778213804","dept":"Protocole Church","binome":{"name":"Laure Marie","phone":"+2250759702097","dept":"Usher Church"}},
  {"name":"Laure Marie","phone":"+2250759702097","dept":"Usher Church","binome":{"name":"Elisée","phone":"+2250778213804","dept":"Protocole Church"}},
  {"name":"Lucrèce Kambou","phone":"+2250779796737","dept":"GDC Church","binome":{"name":"Kobo Franck","phone":"+2250758707589","dept":"Usher Church"}},
  {"name":"Kobo Franck","phone":"+2250758707589","dept":"Usher Church","binome":{"name":"Lucrèce Kambou","phone":"+2250779796737","dept":"GDC Church"}},
  {"name":"Christ David","phone":"+2250104219675","dept":"Protocole Church","binome":{"name":"Kouassi Camille","phone":"+2250595836719","dept":"Usher Church"}},
  {"name":"Kouassi Camille","phone":"+2250595836719","dept":"Usher Church","binome":{"name":"Christ David","phone":"+2250104219675","dept":"Protocole Church"}},
  {"name":"Joane Liali","phone":"0141926004","dept":"GDC Church","binome":{"name":"Traoré Kadidja Emmanuelle","phone":"+2250711052081","dept":"Usher Church"}},
  {"name":"Traoré Kadidja Emmanuelle","phone":"+2250711052081","dept":"Usher Church","binome":{"name":"Joane Liali","phone":"0141926004","dept":"GDC Church"}},
  {"name":"Coach Akhlaï","phone":"+2250502378240","dept":"Protocole Church","binome":{"name":"Tanoh Konan Esaïe","phone":"+2250789847354","dept":"Usher Church"}},
  {"name":"Tanoh Konan Esaïe","phone":"+2250789847354","dept":"Usher Church","binome":{"name":"Coach Akhlaï","phone":"+2250502378240","dept":"Protocole Church"}},
  {"name":"Marie Jeanne N'guettia","phone":"+2250171425776","dept":"GDC Church","binome":{"name":"Tapé Marie Emmanuelle","phone":"+2250767371477","dept":"Usher Church"}},
  {"name":"Tapé Marie Emmanuelle","phone":"+2250767371477","dept":"Usher Church","binome":{"name":"Marie Jeanne N'guettia","phone":"+2250171425776","dept":"GDC Church"}},
  {"name":"Akmel Akpa","phone":"0141816484","dept":"GDC Church","binome":{"name":"Alangba Prunelle","phone":"+2250767567770","dept":"Usher Church"}},
  {"name":"Alangba Prunelle","phone":"+2250767567770","dept":"Usher Church","binome":{"name":"Akmel Akpa","phone":"0141816484","dept":"GDC Church"}},
  {"name":"Christiane","phone":"0172497399","dept":"Protocole Church","binome":{"name":"N'koumo Joseph","phone":"+2250585440274","dept":"Usher Church"}},
  {"name":"N'koumo Joseph","phone":"+2250585440274","dept":"Usher Church","binome":{"name":"Christiane","phone":"0172497399","dept":"Protocole Church"}},
  {"name":"Aurelie Dago","phone":"0153988751","dept":"GDC Church","binome":{"name":"Kouakou Karell","phone":"+2250566229433","dept":"Usher Church"}},
  {"name":"Kouakou Karell","phone":"+2250566229433","dept":"Usher Church","binome":{"name":"Aurelie Dago","phone":"0153988751","dept":"GDC Church"}},
  {"name":"Grâce Emmanuella Koffi","phone":"0797098374","dept":"GDC Church","binome":{"name":"Yapo Rebecca","phone":"+2250712174013","dept":"Usher Church"}},
  {"name":"Yapo Rebecca","phone":"+2250712174013","dept":"Usher Church","binome":{"name":"Grâce Emmanuella Koffi","phone":"0797098374","dept":"GDC Church"}},
  {"name":"Roxane Massaran","phone":"+2250153063450","dept":"Protocole Church","binome":{"name":"Atché Karelle","phone":"0505004132","dept":"Usher Church"}},
  {"name":"Atché Karelle","phone":"0505004132","dept":"Usher Church","binome":{"name":"Roxane Massaran","phone":"+2250153063450","dept":"Protocole Church"}},
  {"name":"Coach Loïs","phone":"+2250708898803","dept":"Protocole Church","binome":{"name":"Doua Emmanuella","phone":"+2250160396488","dept":"Usher Church"}},
  {"name":"Doua Emmanuella","phone":"+2250160396488","dept":"Usher Church","binome":{"name":"Coach Loïs","phone":"+2250708898803","dept":"Protocole Church"}},
  {"name":"Coach Melissa","phone":"+2250701745426","dept":"Protocole Church","binome":{"name":"Assi Arielle","phone":"+2250501188827","dept":"Usher Church"}},
  {"name":"Assi Arielle","phone":"+2250501188827","dept":"Usher Church","binome":{"name":"Coach Melissa","phone":"+2250701745426","dept":"Protocole Church"}},
  {"name":"King","phone":"+2250787981788","dept":"GDC Church","binome":{"name":"N'guessan Claire-Anne","phone":"+2250701121126","dept":"Usher Church"}},
  {"name":"N'guessan Claire-Anne","phone":"+2250701121126","dept":"Usher Church","binome":{"name":"King","phone":"+2250787981788","dept":"GDC Church"}},
  {"name":"Johanna Angahi","phone":"0768893741","dept":"GDC Church","binome":{"name":"Adinci Olive","phone":"+2250779831101","dept":"Usher Church"}},
  {"name":"Adinci Olive","phone":"+2250779831101","dept":"Usher Church","binome":{"name":"Johanna Angahi","phone":"0768893741","dept":"GDC Church"}},
  {"name":"Clark","phone":"+2250779084394","dept":"Protocole Church","binome":{"name":"Tiohou Jérémie","phone":"+2250564906342","dept":"Usher Church"}},
  {"name":"Tiohou Jérémie","phone":"+2250564906342","dept":"Usher Church","binome":{"name":"Clark","phone":"+2250779084394","dept":"Protocole Church"}},
  {"name":"Leslie Bamgbose","phone":"0143599873","dept":"GDC Church","binome":{"name":"Teh Catherine","phone":"+2250748949184","dept":"Usher Church"}},
  {"name":"Teh Catherine","phone":"+2250748949184","dept":"Usher Church","binome":{"name":"Leslie Bamgbose","phone":"0143599873","dept":"GDC Church"}},
  {"name":"Deborah Boti","phone":"0708641587","dept":"GDC Church","binome":{"name":"N'Goran Raymond","phone":"+2250555215217","dept":"Usher Church"}},
  {"name":"N'Goran Raymond","phone":"+2250555215217","dept":"Usher Church","binome":{"name":"Deborah Boti","phone":"0708641587","dept":"GDC Church"}},
  {"name":"Mayana Vlehi","phone":"+2250172878778","dept":"GDC Church","binome":{"name":"Bandjo Salimata","phone":"+2250160939501","dept":"Usher Church"}},
  {"name":"Bandjo Salimata","phone":"+2250160939501","dept":"Usher Church","binome":{"name":"Mayana Vlehi","phone":"+2250172878778","dept":"GDC Church"}},
  {"name":"Grâce","phone":"+2250575562069","dept":"GDC Church","binome":{"name":"Kambire Sylvie","phone":"+2250161702173","dept":"Usher Church"}},
  {"name":"Kambire Sylvie","phone":"+2250161702173","dept":"Usher Church","binome":{"name":"Grâce","phone":"+2250575562069","dept":"GDC Church"}},
  {"name":"Yohann Gbogou","phone":"0708834732","dept":"GDC Church","binome":{"name":"Kouadio Adélaïde","phone":"+2250545133990","dept":"Usher Church"}},
  {"name":"Kouadio Adélaïde","phone":"+2250545133990","dept":"Usher Church","binome":{"name":"Yohann Gbogou","phone":"0708834732","dept":"GDC Church"}},
  {"name":"Lynda Sepan","phone":"0140189621","dept":"GDC Church","binome":{"name":"Boua Steven","phone":"+2250507486048","dept":"Usher Church"}},
  {"name":"Boua Steven","phone":"+2250507486048","dept":"Usher Church","binome":{"name":"Lynda Sepan","phone":"0140189621","dept":"GDC Church"}},
  {"name":"Christian","phone":"+2250545933925","dept":"Protocole Church","binome":{"name":"Zamble Lou Valérie","phone":"+2250758960303","dept":"Usher Church"}},
  {"name":"Zamble Lou Valérie","phone":"+2250758960303","dept":"Usher Church","binome":{"name":"Christian","phone":"+2250545933925","dept":"Protocole Church"}},
  {"name":"Tchuekia Nathan","phone":"0788302780","dept":"GDC Church","binome":{"name":"Gouanou Roxanne","phone":"+2250759816097","dept":"Usher Church"}},
  {"name":"Gouanou Roxanne","phone":"+2250759816097","dept":"Usher Church","binome":{"name":"Tchuekia Nathan","phone":"0788302780","dept":"GDC Church"}},
  {"name":"Jecolia","phone":"+2250142881415","dept":"Protocole Church","binome":{"name":"Okoin Inès","phone":"+2250778030056","dept":"Usher Church"}},
  {"name":"Okoin Inès","phone":"+2250778030056","dept":"Usher Church","binome":{"name":"Jecolia","phone":"+2250142881415","dept":"Protocole Church"}},
  {"name":"Eslie Moncourt","phone":"0103910382","dept":"GDC Church","binome":{"name":"Ouattara Amissah Oriane","phone":"+2250500202661","dept":"Usher Church"}},
  {"name":"Ouattara Amissah Oriane","phone":"+2250500202661","dept":"Usher Church","binome":{"name":"Eslie Moncourt","phone":"0103910382","dept":"GDC Church"}},
  {"name":"Marylin","phone":"+2250757494441","dept":"Protocole Church","binome":{"name":"Oladapo Emmanuella","phone":"+2250151299363","dept":"Usher Church"}},
  {"name":"Oladapo Emmanuella","phone":"+2250151299363","dept":"Usher Church","binome":{"name":"Marylin","phone":"+2250757494441","dept":"Protocole Church"}},
  {"name":"Chanelle Gla","phone":"0103744088","dept":"GDC Church","binome":{"name":"Yavo Franck","phone":"+2250173963405","dept":"Usher Church"}},
  {"name":"Yavo Franck","phone":"+2250173963405","dept":"Usher Church","binome":{"name":"Chanelle Gla","phone":"0103744088","dept":"GDC Church"}},
  {"name":"Emmanuel Gbetibouo","phone":"+1 (917) 651-1324","dept":"GDC Church","binome":{"name":"Sika Marie Prunelle","phone":"+2250101900119","dept":"Usher Church"}},
  {"name":"Sika Marie Prunelle","phone":"+2250101900119","dept":"Usher Church","binome":{"name":"Emmanuel Gbetibouo","phone":"+1 (917) 651-1324","dept":"GDC Church"}},
  {"name":"Grâce Nimaga","phone":"+2250777708708","dept":"Protocole Church","binome":{"name":"Kanon Marcella","phone":"+2250705817022","dept":"Usher Church"}},
  {"name":"Kanon Marcella","phone":"+2250705817022","dept":"Usher Church","binome":{"name":"Grâce Nimaga","phone":"+2250777708708","dept":"Protocole Church"}},
  {"name":"Oceane Koffi","phone":"0769689264","dept":"GDC Church","binome":{"name":"Akomian Marie-Jeanne","phone":"+2250706417564","dept":"Usher Church"}},
  {"name":"Akomian Marie-Jeanne","phone":"+2250706417564","dept":"Usher Church","binome":{"name":"Oceane Koffi","phone":"0769689264","dept":"GDC Church"}},
  {"name":"Colombe Assoua","phone":"0717832925","dept":"GDC Church","binome":{"name":"Zidé Grâce Berenice","phone":"+2250101116154","dept":"Usher Church"}},
  {"name":"Zidé Grâce Berenice","phone":"+2250101116154","dept":"Usher Church","binome":{"name":"Colombe Assoua","phone":"0717832925","dept":"GDC Church"}},
  {"name":"Tanoh Fram Marc Bryan","phone":"0704931925","dept":"GDC Church","binome":{"name":"Kouakou Aurélie","phone":"+2250172385536","dept":"Usher Church"}},
  {"name":"Kouakou Aurélie","phone":"+2250172385536","dept":"Usher Church","binome":{"name":"Tanoh Fram Marc Bryan","phone":"0704931925","dept":"GDC Church"}},
  {"name":"Armelle Botely","phone":"+2250173460269","dept":"GDC Church","binome":{"name":"Chrison Eunice","phone":"+2250102015389","dept":"Usher Church"}},
  {"name":"Chrison Eunice","phone":"+2250102015389","dept":"Usher Church","binome":{"name":"Armelle Botely","phone":"+2250173460269","dept":"GDC Church"}},
  {"name":"Ornella Akoubet","phone":"0143596512","dept":"GDC Church","binome":{"name":"Atsé Yann-Othniel","phone":"+2250747470064","dept":"Usher Church"}},
  {"name":"Atsé Yann-Othniel","phone":"+2250747470064","dept":"Usher Church","binome":{"name":"Ornella Akoubet","phone":"0143596512","dept":"GDC Church"}},
  {"name":"Angenor Digbeu","phone":"0709380435","dept":"GDC Church","binome":{"name":"Kindou Franck","phone":"+2250787109079","dept":"Usher Church"}},
  {"name":"Kindou Franck","phone":"+2250787109079","dept":"Usher Church","binome":{"name":"Angenor Digbeu","phone":"0709380435","dept":"GDC Church"}},
  {"name":"Nehma","phone":"+2250574597618","dept":"GDC Church","binome":{"name":"Koffi Grâce-Marie","phone":"+2250710834333","dept":"Usher Church"}},
  {"name":"Koffi Grâce-Marie","phone":"+2250710834333","dept":"Usher Church","binome":{"name":"Nehma","phone":"+2250574597618","dept":"GDC Church"}},
  {"name":"Ange Allou","phone":"+2250102308367","dept":"GDC Church","binome":{"name":"Yapi Oriane","phone":"+2250140337642","dept":"Usher Church"}},
  {"name":"Yapi Oriane","phone":"+2250140337642","dept":"Usher Church","binome":{"name":"Ange Allou","phone":"+2250102308367","dept":"GDC Church"}},
  {"name":"N'douba Loïc","phone":"0767503806","dept":"GDC Church","binome":{"name":"Sanogo Sarah","phone":"+2250779223413","dept":"Usher Church"}},
  {"name":"Sanogo Sarah","phone":"+2250779223413","dept":"Usher Church","binome":{"name":"N'douba Loïc","phone":"0767503806","dept":"GDC Church"}},
  {"name":"Bénie","phone":"+2250170296828","dept":"Protocole Church","binome":{"name":"Nango Olivier","phone":"+2250710630827","dept":"Usher Church"}},
  {"name":"Nango Olivier","phone":"+2250710630827","dept":"Usher Church","binome":{"name":"Bénie","phone":"+2250170296828","dept":"Protocole Church"}},
  {"name":"Marc Evrad","phone":"+2250706735181","dept":"Protocole Church","binome":{"name":"Ypoté Kevine","phone":"+2250703004341","dept":"Usher Church"}},
  {"name":"Ypoté Kevine","phone":"+2250703004341","dept":"Usher Church","binome":{"name":"Marc Evrad","phone":"+2250706735181","dept":"Protocole Church"}},
  {"name":"Eunice Houega","phone":"+2250747729923","dept":"Protocole Church","binome":{"name":"Kouadio Carène","phone":"+2250748566748","dept":"Usher Church"}},
  {"name":"Kouadio Carène","phone":"+2250748566748","dept":"Usher Church","binome":{"name":"Eunice Houega","phone":"+2250747729923","dept":"Protocole Church"}},
  {"name":"Paul Emmanuel","phone":"0797428346","dept":"Protocole Church","binome":{"name":"Bengaly Jessica","phone":"+2250711911139","dept":"Usher Church"}},
  {"name":"Bengaly Jessica","phone":"+2250711911139","dept":"Usher Church","binome":{"name":"Paul Emmanuel","phone":"0797428346","dept":"Protocole Church"}},
  {"name":"Déborah","phone":"+2250586699375","dept":"Protocole Church","binome":{"name":"Kouassi Jean-Luc","phone":"+2250160149550","dept":"Usher Church"}},
  {"name":"Kouassi Jean-Luc","phone":"+2250160149550","dept":"Usher Church","binome":{"name":"Déborah","phone":"+2250586699375","dept":"Protocole Church"}},
  {"name":"Nelly","phone":"","dept":"GDC Church","binome":{"name":"Kouadio Auriane","phone":"+22506436401","dept":"Usher Church"}},
  {"name":"Kouadio Auriane","phone":"+22506436401","dept":"Usher Church","binome":{"name":"Nelly","phone":"","dept":"GDC Church"}},
  {"name":"Eunice Kpaï","phone":"+2250787878941","dept":"Protocole Church","binome":{"name":"Kouao Debora","phone":"+2250101880108","dept":"Usher Church"}},
  {"name":"Kouao Debora","phone":"+2250101880108","dept":"Usher Church","binome":{"name":"Eunice Kpaï","phone":"+2250787878941","dept":"Protocole Church"}},
  {"name":"Safi","phone":"0757387553","dept":"Protocole Church","binome":{"name":"Kouassi Alexandra","phone":"+2250759696646","dept":"Usher Church"}},
  {"name":"Kouassi Alexandra","phone":"+2250759696646","dept":"Usher Church","binome":{"name":"Safi","phone":"0757387553","dept":"Protocole Church"}},
  {"name":"Kone Daoud","phone":"+2250554974606","dept":"Protocole Light","binome":{"name":"Anoman Desire","phone":"0502103161","dept":"Usher Light"}},
  {"name":"Anoman Desire","phone":"0502103161","dept":"Usher Light","binome":{"name":"Kone Daoud","phone":"+2250554974606","dept":"Protocole Light"}},
  {"name":"Zegoua Seraia","phone":"0150000360","dept":"Usher Light","binome":{"name":"Guede Nathan","phone":"+2250717074224","dept":"GDC Light"}},
  {"name":"Guede Nathan","phone":"+2250717074224","dept":"GDC Light","binome":{"name":"Zegoua Seraia","phone":"0150000360","dept":"Usher Light"}},
  {"name":"Don Roxane","phone":"0102561742","dept":"Usher Light","binome":{"name":"Kouman Marie Emmanuela","phone":"+2250140408555","dept":"GDC Light"}},
  {"name":"Kouman Marie Emmanuela","phone":"+2250140408555","dept":"GDC Light","binome":{"name":"Don Roxane","phone":"0102561742","dept":"Usher Light"}},
  {"name":"Diabagate Jamil","phone":"0566482045","dept":"Usher Light","binome":{"name":"Womblegnon Bryan","phone":"+2250748961061","dept":"Protocole Light"}},
  {"name":"Womblegnon Bryan","phone":"+2250748961061","dept":"Protocole Light","binome":{"name":"Diabagate Jamil","phone":"0566482045","dept":"Usher Light"}},
  {"name":"Mel Leocadie","phone":"0585153198","dept":"Usher Light","binome":{"name":"Tabo Lousyanna","phone":"+2250787605797","dept":"GDC Light"}},
  {"name":"Tabo Lousyanna","phone":"+2250787605797","dept":"GDC Light","binome":{"name":"Mel Leocadie","phone":"0585153198","dept":"Usher Light"}},
  {"name":"Anna Sery","phone":"+2250140349870","dept":"GDC Light","binome":{"name":"Kouman Samuel","phone":"0142162688","dept":"Usher Light"}},
  {"name":"Kouman Samuel","phone":"0142162688","dept":"Usher Light","binome":{"name":"Anna Sery","phone":"+2250140349870","dept":"GDC Light"}},
  {"name":"Litche David","phone":"+2250713060133","dept":"Protocole Light","binome":{"name":"Grobli Kyria","phone":"0151599001","dept":"Usher Light"}},
  {"name":"Grobli Kyria","phone":"0151599001","dept":"Usher Light","binome":{"name":"Litche David","phone":"+2250713060133","dept":"Protocole Light"}},
  {"name":"Brou Ilan","phone":"0102701863","dept":"Usher Light","binome":{"name":"Blesson Chance Ornella","phone":"+2250711665911","dept":"Protocole Light"}},
  {"name":"Blesson Chance Ornella","phone":"+2250711665911","dept":"Protocole Light","binome":{"name":"Brou Ilan","phone":"0102701863","dept":"Usher Light"}},
  {"name":"Diabagate Inaya","phone":"0768250219","dept":"Usher Light","binome":{"name":"Alipui Elisa","phone":"0566862062","dept":"GDC Light"}},
  {"name":"Alipui Elisa","phone":"0566862062","dept":"GDC Light","binome":{"name":"Diabagate Inaya","phone":"0768250219","dept":"Usher Light"}},
  {"name":"Adou Kevine Ella","phone":"0152217571","dept":"Usher Light","binome":{"name":"Coach Brou Rocksanne","phone":"+2250749106448","dept":"Protocole Light"}},
  {"name":"Coach Brou Rocksanne","phone":"+2250749106448","dept":"Protocole Light","binome":{"name":"Adou Kevine Ella","phone":"0152217571","dept":"Usher Light"}},
  {"name":"Kouame Benie","phone":"0143640145","dept":"Usher Light","binome":{"name":"Yao Jonathan","phone":"+2250702992211","dept":"Protocole Light"}},
  {"name":"Yao Jonathan","phone":"+2250702992211","dept":"Protocole Light","binome":{"name":"Kouame Benie","phone":"0143640145","dept":"Usher Light"}},
  {"name":"Ohouo Norah","phone":"0788210458","dept":"Usher Light","binome":{"name":"Koffi Tania","phone":"+2250799139830","dept":"GDC Light"}},
  {"name":"Koffi Tania","phone":"+2250799139830","dept":"GDC Light","binome":{"name":"Ohouo Norah","phone":"0788210458","dept":"Usher Light"}},
  {"name":"Sery Assia Mael","phone":"0779521500","dept":"Usher Light","binome":{"name":"Kouaffouet Laël","phone":"+2250798485929","dept":"Protocole Light"}},
  {"name":"Kouaffouet Laël","phone":"+2250798485929","dept":"Protocole Light","binome":{"name":"Sery Assia Mael","phone":"0779521500","dept":"Usher Light"}},
  {"name":"Djedjro Johana","phone":"","dept":"Usher Light","binome":{"name":"Yao Mia","phone":"+2250759922860","dept":"GDC Light"}},
  {"name":"Yao Mia","phone":"+2250759922860","dept":"GDC Light","binome":{"name":"Djedjro Johana","phone":"","dept":"Usher Light"}},
  {"name":"Aboua Oceane","phone":"0103273028","dept":"Usher Light","binome":{"name":"Doumbia Maïssane","phone":"+2250768284201","dept":"Protocole Light"}},
  {"name":"Doumbia Maïssane","phone":"+2250768284201","dept":"Protocole Light","binome":{"name":"Aboua Oceane","phone":"0103273028","dept":"Usher Light"}},
  {"name":"Kohi Marvel","phone":"0103525200","dept":"Usher Light","binome":{"name":"Gnougnon Jemima","phone":"+2250778131111","dept":"GDC Light"}},
  {"name":"Gnougnon Jemima","phone":"+2250778131111","dept":"GDC Light","binome":{"name":"Kohi Marvel","phone":"0103525200","dept":"Usher Light"}},
  {"name":"Kouakou Emmanuella","phone":"0779433697","dept":"Usher Light","binome":{"name":"Nobou Maelya","phone":"+2250748961061","dept":"Protocole Light"}},
  {"name":"Nobou Maelya","phone":"+2250748961061","dept":"Protocole Light","binome":{"name":"Kouakou Emmanuella","phone":"0779433697","dept":"Usher Light"}},
  {"name":"Karim Alio Zarah","phone":"+33768600988","dept":"Usher Light","binome":{"name":"Kouao Sarah","phone":"+2250506873122","dept":"GDC Light"}},
  {"name":"Kouao Sarah","phone":"+2250506873122","dept":"GDC Light","binome":{"name":"Karim Alio Zarah","phone":"+33768600988","dept":"Usher Light"}},
  {"name":"Ume Victoria","phone":"0797765777","dept":"Usher Light","binome":{"name":"Kato Anne Davila","phone":"+2250703656037","dept":"GDC Light"}},
  {"name":"Kato Anne Davila","phone":"+2250703656037","dept":"GDC Light","binome":{"name":"Ume Victoria","phone":"0797765777","dept":"Usher Light"}},
  {"name":"Beugre Benie","phone":"0151400356","dept":"Usher Light","binome":{"name":"Kalpi Herveline","phone":"+2250153570930","dept":"Protocole Light"}},
  {"name":"Kalpi Herveline","phone":"+2250153570930","dept":"Protocole Light","binome":{"name":"Beugre Benie","phone":"0151400356","dept":"Usher Light"}},
  {"name":"Depleth Charlene","phone":"0103254430","dept":"Usher Light","binome":{"name":"Ouattara Amissah","phone":"0500202661","dept":"Usher Light"}},
  {"name":"Ouattara Amissah","phone":"0500202661","dept":"Usher Light","binome":{"name":"Depleth Charlene","phone":"0103254430","dept":"Usher Light"}},
  {"name":"Ba Ismail","phone":"0798346188","dept":"Usher Light","binome":{"name":"Zadi Samuel","phone":"0700110964","dept":"Usher Light"}},
  {"name":"Zadi Samuel","phone":"0700110964","dept":"Usher Light","binome":{"name":"Ba Ismail","phone":"0798346188","dept":"Usher Light"}},
  {"name":"Adjaffi Samuel","phone":"0170677360","dept":"Usher Light","binome":{"name":"Magone Yvann","phone":"","dept":"Usher Light"}},
  {"name":"Magone Yvann","phone":"","dept":"Usher Light","binome":{"name":"Adjaffi Samuel","phone":"0170677360","dept":"Usher Light"}},
  {"name":"Amaho Leila","phone":"0102923855","dept":"Usher Light","binome":{"name":"Coulibaly Awa","phone":"0779266157","dept":"Usher Light"}},
  {"name":"Coulibaly Awa","phone":"0779266157","dept":"Usher Light","binome":{"name":"Amaho Leila","phone":"0102923855","dept":"Usher Light"}},
  {"name":"Ziki Jean Elisee","phone":"0105236163","dept":"Usher Light","binome":{"name":"Aboke Christ","phone":"0141496363","dept":"Usher Light"}},
  {"name":"Aboke Christ","phone":"0141496363","dept":"Usher Light","binome":{"name":"Ziki Jean Elisee","phone":"0105236163","dept":"Usher Light"}},
  {"name":"N'da Shaddai El","phone":"0565838662","dept":"Usher Light","binome":{"name":"Malle Sarah","phone":"0586472708","dept":"Usher Light"}},
  {"name":"Malle Sarah","phone":"0586472708","dept":"Usher Light","binome":{"name":"N'da Shaddai El","phone":"0565838662","dept":"Usher Light"}},
  {"name":"Assamoi Anael","phone":"0702766940","dept":"Usher Light","binome":{"name":"Marie Grâce Kouamé","phone":"+2250758099815","dept":"Dress Code Light"}},
  {"name":"Marie Grâce Kouamé","phone":"+2250758099815","dept":"Dress Code Light","binome":{"name":"Assamoi Anael","phone":"0702766940","dept":"Usher Light"}},
  {"name":"Koffi Tania","phone":"+2250799139830","dept":"Dress Code Light","binome":{"name":"Ohouo Norah","phone":"0788210458","dept":"Usher Light"}}
];

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
let validateBtn = document.getElementById("validateBtn");

let selectedMember = null;


// ===== AUTOCOMPLETE =====
searchInput.addEventListener("input", function () {

  const value = this.value.toLowerCase().trim();

  suggestions.innerHTML = "";

  if (value === "") {
    suggestions.classList.add("hidden");
    return;
  }

  const filtered = members.filter(member =>
    member.name.toLowerCase().includes(value)
  );

  filtered.slice(0, 8).forEach(member => {

    const li = document.createElement("li");

    li.textContent = member.name;

    li.className =
      "px-6 py-3 cursor-pointer hover:bg-taupeSoft transition";

    li.onclick = () => {
      searchInput.value = member.name;
      selectedMember = member;
      suggestions.classList.add("hidden");
    };

    suggestions.appendChild(li);

  });

  suggestions.classList.remove("hidden");

});


validateBtn.addEventListener("click", function () {

  if (!selectedMember || !selectedMember.binome) {
    alert("Veuillez sélectionner votre nom dans la liste.");
    return;
  }

  const name = selectedMember.binome.name;
  const dept = selectedMember.binome.dept;
  const phone = selectedMember.binome.phone;

  document.getElementById("binomeName").textContent = name;
  document.getElementById("binomeDept").textContent = dept;
  document.getElementById("binomePhone").textContent = phone;

  const result = document.getElementById("result");
  result.classList.remove("hidden");

  setTimeout(() => {
    result.classList.remove("scale-95", "opacity-0");
    result.classList.add("scale-100", "opacity-100");
  }, 50);

});