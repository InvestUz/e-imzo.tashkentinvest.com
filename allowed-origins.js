const allowedOrigins = [
  'http://localhost',
  'http://127.0.0.1',
  'http://127.0.0.1:5500',
  'https://9c3f-5-133-120-24.ngrok-free.app',
  'https://e-imzo.toshkentinvest.uz',
  'e-imzo.toshkentinvest.uz',

  'https://smart-agro.uz',
  'https://www.smart-agro.uz',

  'https://cabinet.davbaho.uz',

  'https://eimzo.platon.uz',

  'https://dev.hujjat.uz',
  'https://v1.hujjat.uz',
  'https://coredev.hujjat.uz',
  'https://v3.hujjat.uz',
  'https://hujjat.uz',
  'https://business.hujjat.uz',
  'https://account.hujjat.uz',
  'https://www.account.hujjat.uz',

  'https://smart-mahalla.uz',
  'https://www.smart-mahalla.uz',

  'https://ijara.platon.uz',
  'https://online-ijara.uz',
  'https://www.online-ijara.uz',

  'https://smart-market.uz',
  'https://www.smart-market.uz',
  'https://cabinet.smart-market.uz',
  'https://test.smart-market.uz',

  'https://oilakredit.uz',
  'https://www.oilakredit.uz',
  'https://test.oilakredit.uz',
  'https://www.test.oilakredit.uz',

  'https://hokim-yordamchisi.uz',
  'https://www.hokim-yordamchisi.uz',

  'https://online-mahalla.uz',
  'https://www.online-mahalla.uz',
  'http://online-mahalla.local',

  'https://galla.uz',
  'https://www.galla.uz',

  'https://bolalar-bogchasi.uz',
  'https://www.bolalar-bogchasi.uz',

  'https://nodavlat-bogcha.uz',
  'https://www.nodavlat-bogcha.uz',
  'http://nodavlat-bogcha.local',
  'http://www.nodavlat-bogcha.local',

  'https://cabinet.aziz-ayol.uz',

  'https://xotin-qizlar.uz',

  'https://cabinet.kasbiy-talim.uz',
  'https://kasbiy-talim.uz',


  'https://talim-krediti.uz',
  'https://www.talim-krediti.uz',

  'https://expert.uz',
  'https://www.expert.uz',

  'https://dev.evote.uz',
  'https://evote.uz',
  'https://www.evote.uz',

  'https://tashqi-reklama.uz',
  'https://www.tashqi-reklama.uz',

  'https://test.platon.uz',
  'https://www.test.platon.uz',

  'https://invest-portal.uz',
  'https://www.invest-portal.uz',

  'https://med.platon.uz',
  'https://www.med.platon.uz',

  'https://bank-kredit.uz',
  'https://www.bank-kredit.uz',

  'https://online-bozor.uz',
  'https://www.online-bozor.uz',

  'https://cabinet.online-bozor.uz',
  'https://www.cabinet.online-bozor.uz',
  'https://online-bozorcha.uz',
  'https://www.online-bozorcha.uz',
  'http://dev.online-bozor.uz',
  'http://www.dev.online-bozor.uz',
  'https://new.online-bozor.uz',
  'https://www.new.online-bozor.uz',

  'https://tibbiyot-brigadasi.uz',
  'https://www.tibbiyot-brigadasi.uz',

  'https://ijtimoiy-himoya.uz',
  'https://www.ijtimoiy-himoya.uz',

  'https://keeping.uz',
  'https://www.keeping.uz',

  'https://dev.carting.uz',
  'https://www.dev.carting.uz',


  'https://dev.platon.uz',
  'https://www.dev.platon.uz',

  'https://realsoft.academy',
  'https://www.realsoft.academy',

  'https://cardiovascular.uz',
  'https://www.cardiovascular.uz',

  'https://www.dev-new.platon.uz',
  'https://dev-new.platon.uz',

  'https://tadbirkor.platon.uz',
  'https://www.tadbirkor.platon.uz',

  'https://e-advokat.platon.uz',
  'https://www.e-advokat.platon.uz',

  'https://smart-office.uz',
  'https://www.smart-office.uz',
  'https://dev.smart-office.uz',
  'https://www.dev.smart-office.uz',
  'https://new.smart-office.uz',
  'https://www.new.smart-office.uz',
  'https://old.smart-office.uz',
  'https://www.old.smart-office.uz',
  'https://pre-prod.smart-office.uz',
  'https://www.pre-prod.smart-office.uz',
  'https://hujjat.smart-office.uz',
  'https://www.hujjat.smart-office.uz',

  'https://account.hujjat.uz',
  'https://www.account.hujjat.uz',

  'https://dev.realsoft.academy',
  'https://www.dev.realsoft.academy',

  'https://e-paxta.uz',
  'https://www.e-paxta.uz',

  'https://suvkredit.uz',
  'https://www.suvkredit.uz',

  'https://old.agroonline.uz',
  'https://www.old.agroonline.uz',
  'https://agroonline.uz',
  'https://www.agroonline.uz',

  'https://eco.platon.uz',

  'https://agros-online.uz',

  'https://id.platon.uz',

  'https://suvkredit.uz',

  'https://biznes-portal.uz',
  'https://www.biznes-portal.uz',
  'http://biznes-portal.local',
  'https://hamroh.biznes-portal.uz',
  'https://www.hamroh.biznes-portal.uz',

  'https://agroportal.uz',
  'https://www.agroportal.uz',

  'https://new.expert.uz',
  'https://www.new.expert.uz',

  'https://eco-service.uz',
  'https://www.eco-service.uz',

  'https://sfond.uz',
  'https://www.sfond.uz',

  'https://rs-eimzo.platon.uz',
  'https://www.rs-eimzo.platon.uz',

  'https://raqamli-maktab.uz',
  'https://www.raqamli-maktab.uz',

  'https://pro.smart-market.uz',
  'https://www.pro.smart-market.uz',
  'https://old.smart-market.uz',
  'https://www.old.smart-market.uz',

  'https://new.kasbiy-talim.uz',
  'https://www.new.kasbiy-talim.uz',

  'https://yashilolam.uz',
  'https://www.yashilolam.uz',

  'https://raqamli-mahalla.uz',
  'https://www.raqamli-mahalla.uz',

  'https://talim.uzaudit.uz',
  'https://www.talim.uzaudit.uz',

  'https://d-xarid.uz',
  'https://www.d-xarid.uz',

  'https://new.keeping.uz',
  'https://www.new.keeping.uz',

  'https://office.rs-imzo.uz',

  'https://eco-inspector.uz',

  'https://demo.smart-office.uz',

  'https://polis-market.uz',

  'https://yashil-tulov.uz',

  'https://biznes-navigator.uz',

  'https://qayta-tayyorlash.uz',

  'https://obod-maskan.uz',
  'https://www.obod-maskan.uz',

  'https://ijtimoiy-himoya.uz',
  'https://www.ijtimoiy-himoya.uz',

  'https://toza-hudud.uz',
  'https://www.toza-hudud.uz',

  'https://test.suvkredit.uz',
  'https://www.test.suvkredit.uz',

  'https://clustermonitoring.uz',
  'https://www.clustermonitoring.uz',

  'https://api-test.suvkredit.uz',
  'https://www.api-test.suvkredit.uz',

  'https://qishloq-tadbirkorligi.uz',
  'https://www.qishloq-tadbirkorligi.uz',

  'https://e-nomzod.mgqbb.uz',
  'https://www.e-nomzod.mgqbb.uz',
  'https://nomzod.mgqbb.uz',
  'https://www.nomzod.mgqbb.uz',

  'https://malaka-oshirish.uz',
  'https://www.malaka-oshirish.uz',

  'https://business.stage.realpay.uz',
  'https://www.business.stage.realpay.uz',
  'https://business.realpay.uz',
  'https://www.business.realpay.uz',

  'https://e-nomzod.realsoft.uz',
  'https://www.e-nomzod.realsoft.uz',
  'https://eko.realsoft.uz',
  'https://www.eko.realsoft.uz',
  'https://asaka.realsoft.uz',
  'https://www.asaka.realsoft.uz',
  'https://keeping.realsoft.uz',
  'https://www.keeping.realsoft.uz',

  'https://fond.eco-inspector.uz',
  'https://www.fond.eco-inspector.uz',

  'https://avto-park.uz',
  'https://www.avto-park.uz',

  'https://edu.masofaviyaudit.uz',
  'https://www.edu.masofaviyaudit.uz',

]
