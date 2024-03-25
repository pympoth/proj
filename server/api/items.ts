
export default defineEventHandler((event) => {
  return {
    body: {
      printers: [
        { id: 1, name: 'Принтер лазерный', price: 41299, model: 'Pantum CP1100', pic: 'https://ir-3.ozone.ru/s3/multimedia-z/6735717071.jpg' },
        { id: 2, name: 'Принтер лазерный 2', price: 35000, model: 'Pantum CP1200', pic: 'https://p.propartner.ru/get-mpic/1574389/img_id5217548176929971146.jpeg/200x200' },
        { id: 3, name: 'Принтер струйный', price: 5000, model: 'Epson L3150', pic: 'https://img.mvideo.ru/Pdb/30041770b.jpg' },
        { id: 4, name: 'МФУ лазерное', price: 25000, model: 'HP LaserJet Pro MFP M28w', pic: 'https://img.mvideo.ru/Pdb/30032666b.jpg' },
        { id: 5, name: 'Принтер фото', price: 15000, model: 'Canon PIXMA iP8750', pic: ' https://ir.ozone.ru/s3/multimedia-1/c1000/6782417461.jpg' }
      ],
      monitors: [
        { id: 1, name: '23.8" Монитор черный Philips', price: 12499, model: '245E1S', pic: 'https://images.philips.com/is/image/PhilipsConsumer/245E1S_00-RTP-global-001?$jpglarge$&wid=960' },
        { id: 2, name: '24" Монитор Philips', price: 11999, model: '245E2S', pic: 'https://images.philips.com/is/image/PhilipsConsumer/245E1S_01-IMS-ru_RU?$jpglarge$&wid=1250' },
        { id: 3, name: '27" Игровой монитор', price: 30000, model: 'ASUS TUF Gaming VG27WQ1B', pic: 'https://avatars.mds.yandex.net/get-mpic/4407413/img_id5122344204394570067.jpeg/orig' },
        { id: 4, name: '21.5" Монитор', price: 8000, model: 'Dell E2220H', pic: 'https://avatars.mds.yandex.net/get-mpic/5425309/img_id5960044980538840876.jpeg/5' },
        { id: 5, name: '32" Монитор', price: 25000, model: 'LG 32UN880-B', pic: 'https://www.lg.com/ru/images/monitors/md07515339/gallery/MNT-32UN880-Gallery-MobileZoom-01.jpg' }
      ],
      robotsCleaners: [
        { id: 1, name: 'Робот-пылесос Polaris белый', price: 12999, model: 'PVCR 3600 WIFI IQ Home', pic: 'https://ipioneer.ru/static/content/images/items/266b66027371a8b1957f8b2af027943a980491612ebff97b93f2f854e9c2c804.jpg' },
        { id: 2, name: 'Робот-пылесос Polaris черный', price: 13999, model: 'PVCR 3600 WIFI IQ Home Black', pic: 'https://e52e3ee2-628b-49a9-9e26-e5a61fd72b20.selcdn.net/upload/resize_cache/iblock/4c4/rlry3ud6cfzp2mr7wkbkz8eg80dm32e3/960_640_1/PVCR%203200%20IQ%20Home%20Aqua%2001.png' },
        { id: 3, name: 'Робот-пылесос Xiaomi', price: 20000, model: 'Xiaowa E202-00', pic: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/74/90/29/13/76/23/100024277301b0.jpg' },
        { id: 4, name: 'Робот-пылесос Neato', price: 18000, model: 'D450', pic: 'https://qrobots.ru/wp-content/uploads/9hq-3355.jpeg' },
        { id: 5, name: 'Робот-пылесос Samsung', price: 15000, model: 'POWERbot VR20T6001MW/SC', pic: 'https://images.samsung.com/is/image/samsung/ru-samsung-powerbot-vr7000m-vr10m7010uw-ev-dynamicwhite-68146954?$650_519_PNG$' }
      ],
      chargingStation: [
        { id: 1, name: 'Набор аккумуляторов и зарядных устройств Makita', price: 10889, model: '191A25-2 LXT 18V', pic: 'https://ir.ozone.ru/s3/multimedia-b/c1000/6699256139.jpg' },
        { id: 2, name: 'Набор аккумуляторов и зарядных устройств Makita 2', price: 11999, model: '191A25-3 LXT 18V', pic: 'https://ir.ozone.ru/s3/multimedia-r/c1000/6354181563.jpg' },
        { id: 3, name: 'Зарядная станция для электромобиля', price: 35000, model: 'Tesla Wall Connector', pic: 'https://electricmotorsclub.ru/upload/iblock/664/66433317752247149f6d93ae8f7bf68e.png' },
        { id: 4, name: 'Зарядное устройство для смартфонов', price: 1500, model: 'Anker PowerPort 2', pic: 'https://madrobots.ru/upload/resize_cache/iblock/d92/600_480_0/d924ecc9abe093a0097440c7a3baed78.jpg' },
        { id: 5, name: 'Зарядная станция для ноутбуков', price: 10000, model: 'Belkin Thunderbolt 3 Dock Pro', pic: 'https://m.chodo.ru/userfiles/images/photogalleries/11998_1/1575535800_belkin_thunderbolt_3_dock_pro.jpeg' }
      ],
      notepads: [
        { id: 1, name: 'Hоутбук Huawei MateBook', price: 49990, model: 'D 15 BoDe-WDH9 53013WRP', pic: 'https://cdn.citilink.ru/qt-ZfNTbZoHEMO_ow20JXQQ1rIYqNXeSUr5Vr_DLnls/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/7860f414-1842-4e2b-b0a8-2153aa896d87.jpg' },
        { id: 2, name: 'Hоутбук Huawei MateBook 2', price: 54990, model: 'D 15 BoDe-WDH9 53013WRP-2', pic: 'https://www.regard.ru/photo/goods/1064286.jpg' },
        { id: 3, name: 'Ноутбук Apple MacBook Air', price: 90000, model: 'M1, 13", 8GB, 256GB, Gold', pic: 'https://img.mvideo.ru/Pdb/30064275b.jpg' },
        { id: 4, name: 'Ноутбук Dell XPS', price: 120000, model: '13.4", 16GB, 512GB, Silver', pic: 'https://avatars.mds.yandex.net/get-mpic/1853752/2a0000018b669253d05396d5c2c3b7969726/300x400' },
        { id: 5, name: 'Ноутбук Lenovo ThinkPad', price: 80000, model: 'E14 Gen 2, 14", 16GB, 512GB, Black', pic: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e14-gen-2-hero.png?context=bWFzdGVyfHJvb3R8MjY4OTA2fGltYWdlL3BuZ3xoYTAvaGIyLzE0MTA2OTIyMzE5OTAyLnBuZ3xkMTM5OTVhY2M3ODRhNGZlOGZiN2M0N2RlNjJiYTA4Zjg2ZjUwM2RhY2UyM2VkZWYwMzY4OTA3ZmQ3ZTlkYjVh' }
      ],
      miniOvens: [
        { id: 1, name: 'Мини-печь StarWind бежевый', price: 3990, model: 'SMO2023', pic: 'https://avatars.mds.yandex.net/get-mpic/6251774/img_id7597273126291040013.jpeg/300x400' },
        { id: 2, name: 'Мини-печь StarWind черный', price: 4290, model: 'SMO2023-B', pic: 'https://cdn.citilink.ru/gM1nWadDugc-VoL73TXxKZaHb60N2FocxNWH_apR-Vo/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/10067d1a-0eca-4cbf-a2ea-41fdbae41a33.jpg' },
        { id: 3, name: 'Мультиварка', price: 5000, model: 'Redmond RMC-M90', pic: 'https://static.onlinetrade.ru/img/items/m/redmond_rmc_m90_cherniy_1.jpg' },
        { id: 4, name: 'Духовка Samsung', price: 15000, model: 'NV75N5671RS', pic: 'https://www.tradeinn.com/f/13775/137754243_2/samsung-nv75n5671rs-ec-%D0%94%D0%B2%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9-%D0%BF%D0%BE%D0%B2%D0%B0%D1%80-flex-75%D0%BB-%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%94%D1%83%D1%85%D0%BE%D0%B2%D0%BE%D0%B9-%D1%88%D0%BA%D0%B0%D1%84.jpg' },
        { id: 5, name: 'Хлебопечка Panasonic', price: 8000, model: 'SD-YR2550', pic: 'https://ir.ozone.ru/s3/multimedia-l/c1000/6251743701.jpg' }
      ],
      laminators: [
        { id: 1, name: 'Ламинатор Buro', price: 1990, model: 'BU-L280 A4', pic: 'https://www.nps.ru/upload/iblock/634/buro_bu_l280_bu_l280_big_00_00012851.jpg' },
        { id: 2, name: 'Ламинатор Buro 2', price: 2290, model: 'BU-L320 A4', pic: 'https://basket-04.wbbasket.ru/vol595/part59587/59587434/images/big/1.webp' },
        { id: 3, name: 'Ламинатор Fellowes', price: 3000, model: 'L125 A4', pic: 'https://www.foroffice.ru/upload/iblock/2de/l125_a4_hero_lp.jpg' },
        { id: 4, name: 'Ламинатор Peach', price: 2500, model: 'PL750', pic: 'https://8.allegroimg.com/s360/03f5a4/958418434a5fb147cc2406b1ca08' },
        { id: 5, name: 'Ламинатор Saturn', price: 1800, model: 'SL125 A4', pic: 'https://prima-office.ru/i/offer/photo/products/lamination/a4/fellowes-saturn-a4.jpg' }
      ],
      tablets: [
        { id: 1, name: 'Планшет Digma темно-серый', price: 7990, model: 'CITI 1313C 4G 10.1", 3ГБ, 32GB, 3G, LTE, Android', pic: 'https://cdn.citilink.ru/nGB-YaqO3Q5EOdBRXImGzLVyxtMJ08YBUhUR40VfPiE/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/ff6a6cfc-b69f-4cf6-b6f3-f01d8729f441.jpg' },
        { id: 2, name: 'Планшет Digma черный', price: 8490, model: 'CITI 1313C-B 10.1", 4ГБ, 64GB, 4G, LTE, Android', pic: 'https://cdn.citilink.ru/nGB-YaqO3Q5EOdBRXImGzLVyxtMJ08YBUhUR40VfPiE/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/ff6a6cfc-b69f-4cf6-b6f3-f01d8729f441.jpg' },
        { id: 3, name: 'Планшет Samsung Galaxy Tab', price: 20000, model: 'S7, 11", 6GB, 128GB, Wi-Fi, Android', pic: 'https://shop.9282922.ru/upload/iblock/2dd/2ddab04bab682f6262c6271b59af9d70.jpeg' },
        { id: 4, name: 'Планшет Apple iPad', price: 30000, model: 'Pro 12.9", 8GB, 256GB, Wi-Fi, iPadOS', pic: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/304/626/220/102/620/47/100044068100b0.jpg' },
        { id: 5, name: 'Планшет Huawei MatePad', price: 15000, model: '11", 4GB, 64GB, Wi-Fi, Android', pic: 'https://avatars.mds.yandex.net/get-mpic/6237625/img_id5182068069687745026.jpeg/orig' }
      ]
    }
  }
})