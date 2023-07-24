// Placeholder service for fetching ramen product data from the server

const fetchRamenProducts = async () => {
  // const response = await fetch('http://webservice.recruit.co.jp/hotpepper/gourmet/v1?key=329b6d29b7321768&large_area=Z011&format=json',
  //   {
  //     mode: 'cors'
  //   });
  // const movies = await response.json();
  const ramens = {
    "results": {
      "api_version": "1.26",
      "results_available": 30712,
      "results_returned": "10",
      "results_start": 1,
      "shop": [
        {
          "access": "【JR池袋駅徒歩１分】 個室 2時間飲み放題付きコース3500円から 池袋個室肉＆チーズ",
          "address": "東京都豊島区南池袋１-27-8　サンパレスビル5F",
          "band": "不可",
          "barrier_free": "なし ：ご不安な点がございましたら、お気軽にご相談くださいませ。",
          "budget": {
            "average": "3,000円 【SNSやTVで話題のかまくらビストロ♪】",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "",
          "capacity": 150,
          "card": "利用可",
          "catch": "厳選肉寿司食べ放題☆ 【★少人数様個室★】",
          "charter": "貸切可 ：貸切宴会喜んで承ります。大宴会にピッタリな豪華コースもご用意しています。",
          "child": "お子様連れOK ：お子様連れの方にもピッタリの広々個室ございます♪",
          "close": "不定休 事前にお問い合わせください。※1月1日は休業日となります。",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ001051651/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ001051651/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "あり ：3時間飲み放題付コース2980円～！ゆったり3時間でお楽しみください♪",
          "free_food": "なし ：コースはご満足頂けるボリューム感でご提供します。豪華コースは4580円☆",
          "genre": {
            "catch": "肉とチーズが自慢のお店♪シカゴピザも◎",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：足を延ばせる掘りごたつ席は、接待から学生の飲み会や女子会にもピッタリです！",
          "id": "J001051651",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.729433963,
          "lng": 139.7129324355,
          "logo_image": "https://imgfp.hotp.jp/IMGH/96/34/P039069634/P039069634_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y050",
            "name": "池袋"
          },
          "midnight": "営業している",
          "mobile_access": "【JR池袋駅徒歩1分】自慢のかまくら個室は予約必須!",
          "name": "肉寿司 チーズフォンデュ食べ放題 プライベート個室 KAMAKURAYA 池袋店",
          "name_kana": "にくずし　ちーずふぉんでゅたべほうだい　ぷらいぺーとこしつ　かまくらや　いけぶくろてん",
          "non_smoking": "一部禁煙",
          "open": "月～金、祝前日: 15:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）土、日、祝日: 12:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）",
          "other_memo": "宴会のご人数やご予算についてはお気軽にお電話にてご相談ください。",
          "parking": "なし ：お近くのコインパーキングをご利用ください。",
          "party_capacity": 150,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/68/95/P040396895/P040396895_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/68/95/P040396895/P040396895_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/68/95/P040396895/P040396895_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/68/95/P040396895/P040396895_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/68/95/P040396895/P040396895_58_s.jpg"
            }
          },
          "private_room": "あり ：個室有！扉付で周りを気にせずお楽しみいただけます。席の希望がありましたらお電話にて確認をお願いします",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "学生限定プランや女子会プランなどご利用シーンに合わせてお得なコースをお選び頂けます♪",
          "show": "なし",
          "small_area": {
            "code": "X145",
            "name": "池袋東口"
          },
          "station_name": "池袋",
          "sub_genre": {
            "code": "G006",
            "name": "イタリアン・フレンチ"
          },
          "tatami": "なし ：お座敷タイプの個室は、団体様のご宴会に人気です。お早目にご予約くださいませ。",
          "tv": "なし",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ001051651/?vos=nhppalsa000016"
          },
          "wedding": "大宴会にピッタリの団体様向け個室ございます。お気軽にご相談ください。",
          "wifi": "未確認"
        },
        {
          "access": "西武池袋線，東武東上線，東京メトロ，ＪＲ池袋駅４０出口より徒歩約2分",
          "address": "東京都豊島区南池袋１-23-11 池袋ブロンズビル３F",
          "band": "不可",
          "barrier_free": "なし ：お手伝いが必要な際はお気軽にご連絡ください。",
          "budget": {
            "average": "3時間食べ放題＆飲み放題コース3000円~♪",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "",
          "capacity": 120,
          "card": "利用可",
          "catch": "3H食べ飲み放題3000円！ 牛タンor豚しゃぶしゃぶ♪",
          "charter": "貸切不可 ：お気軽にお問い合わせくださいませ！",
          "child": "お子様連れOK ：ママ会にもお使いいただけます。",
          "close": "不定休日あり",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ002648433/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ002648433/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "あり ：単品飲み放題1500円。もちろんコースも飲み放題付です。",
          "free_food": "あり",
          "genre": {
            "catch": "国産牛タンとしゃぶしゃぶ食べ放題",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：掘りごたつ席ございます。女子会やママ会に好評です。",
          "id": "J002648433",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.728986504,
          "lng": 139.7125785947,
          "logo_image": "https://imgfp.hotp.jp/IMGH/13/61/P039421361/P039421361_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y050",
            "name": "池袋"
          },
          "midnight": "営業している",
          "mobile_access": "東京ﾒﾄﾛ,JR池袋駅40出口より徒歩約2分",
          "name": "4種の牛タン＆炙り肉寿司食べ放題　完全個室居酒屋　やまと　池袋",
          "name_kana": "よんしゅのぎゅうたんあんどあぶりにくずしたべほうだい　かんぜんこしついざかや　やまと　いけぶくろ",
          "non_smoking": "禁煙席なし",
          "open": "月～日、祝日、祝前日: 12:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）",
          "other_memo": "ご不明点がございましたらお気軽にお問合せください♪",
          "parking": "なし ：近隣のパーキングをご利用ください。",
          "party_capacity": 150,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/13/63/P039421363/P039421363_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/13/63/P039421363/P039421363_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/13/63/P039421363/P039421363_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/13/63/P039421363/P039421363_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/13/63/P039421363/P039421363_58_s.jpg"
            }
          },
          "private_room": "なし ：個室席完備♪半個室・区切られたスペースのお席がございます。",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "食べ放題コースはゆったり3時間コース～ご用意しております。",
          "show": "なし",
          "small_area": {
            "code": "X145",
            "name": "池袋東口"
          },
          "station_name": "池袋",
          "sub_genre": {
            "code": "G004",
            "name": "和食"
          },
          "tatami": "なし ：お座敷ご用意ございます。宴会に大変人気なお部屋となっております",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ002648433/?vos=nhppalsa000016"
          },
          "wedding": "お気軽にご相談下さい。",
          "wifi": "あり"
        },
        {
          "access": "JR・小田急線町田駅徒歩1分　※食べ放題飲み放題1980円～♪貸切60名あります♪西友の裏/町田最安値級宴会/女子会／学生",
          "address": "東京都町田市森野１－１４－９　MKビル1F",
          "band": "不可",
          "barrier_free": "なし ：(◆町田食べ放題飲み放題居酒屋　炉のだいどころ◆)",
          "budget": {
            "average": "いつでも2178円～食べ放題・飲み放題宴会！学生に最適！",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "お通し代300円　チャージ料無 paypay使えます",
          "capacity": 76,
          "card": "利用不可",
          "catch": "串焼き盛り合わせがお得 3時間[食放]&[飲放]2508円",
          "charter": "貸切可 ：貸切も可能です。お気軽にご相談下さい",
          "child": "お子様連れOK ：(◆町田　昼宴会　食べ放題　飲み放題居酒屋　炉のだいどころ◆)",
          "close": "なし",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ000015577/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ000015577/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "あり ：ゆったり3時間飲み放題がございます。",
          "free_food": "あり ：毎日OK♪3H食べ放題＆飲み放題コースは2508円～",
          "genre": {
            "catch": "最大80名様！個室有◎2178円～食べ飲み放題",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：(◆町田昼宴会食べ放題飲み放題居酒屋　炉のだいどころ◆)",
          "id": "J000015577",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.5436677093,
          "lng": 139.4430030867,
          "logo_image": "https://imgfp.hotp.jp/IMGH/27/90/P000992790/P000992790_69.jpg",
          "lunch": "なし",
          "middle_area": {
            "code": "Y105",
            "name": "町田"
          },
          "midnight": "営業している",
          "mobile_access": "2名～70名食べ放題&飲み放題1980円～!!町田駅徒歩1分",
          "name": "炉のだいどころ 田 でん 町田西口",
          "name_kana": "ろのだいどころ　でん　でん　まちだにしぐちてん",
          "non_smoking": "禁煙席なし",
          "open": "月: 14:00～16:59火～日、祝日、祝前日: 14:00～16:5917:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）",
          "other_memo": "大画面プロジェクターあり　(◆町田昼宴会食べ放題飲み放題居酒屋　炉のだいどころ◆)",
          "parking": "なし ：(◆町田食べ放題飲み放題居酒屋　炉のだいどころ◆)",
          "party_capacity": 76,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/48/36/P028724836/P028724836_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/48/36/P028724836/P028724836_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/48/36/P028724836/P028724836_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/48/36/P028724836/P028724836_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/48/36/P028724836/P028724836_58_s.jpg"
            }
          },
          "private_room": "あり ：少(◆町田昼宴会食べ放題飲み放題居酒屋　炉のだいどころ◆)",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "(◆町田昼宴会　食べ放題　飲み放題　居酒屋　炉のだいどころ◆)",
          "show": "なし",
          "small_area": {
            "code": "X210",
            "name": "町田駅"
          },
          "station_name": "町田",
          "sub_genre": {
            "code": "G004",
            "name": "和食"
          },
          "tatami": "なし ：(◆町田昼宴会食べ放題飲み放題居酒屋　炉のだいどころ◆)",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ000015577/?vos=nhppalsa000016"
          },
          "wedding": "(◆町田昼宴会食べ放題飲み放題居酒屋　炉のだいどころ◆)",
          "wifi": "あり"
        },
        {
          "access": "八王子駅徒歩1分！2名様~120名様まで完全個室完備！2時間100種以上全品食べ飲み放題コース3000円~",
          "address": "東京都八王子市旭町6-9　7階A",
          "band": "不可",
          "barrier_free": "あり ：バリアフリーの詳細はお店にお問合せください。",
          "budget": {
            "average": "2500円　◆100品以上食べ飲み放題2000円～",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "",
          "capacity": 90,
          "card": "利用可",
          "catch": "当店自慢の豊富な品揃え♪ 和も洋も選べる食べ放題♪",
          "charter": "貸切不可 ：お日にち,お時間によっては少人数でも貸切可能です。お気軽にお問い合わせください。",
          "child": "お子様連れOK ：お子様大歓迎！完全個室席でお子様連れのお客様も安心♪",
          "close": "無休",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ001296225/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ001296225/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "あり",
          "free_drink": "あり ：全100品以上食べ放題＆飲み放題コース2,000円～",
          "free_food": "あり ：全100品以上食べ放題＆飲み放題コース2,000円～",
          "genre": {
            "catch": "100種以上全品食べ飲み放題3000円♪",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：広々掘りごたつ個室は各種ご宴会に◎昼宴会,貸切宴会なども承ります。",
          "id": "J001296225",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.6569002277,
          "lng": 139.3379833821,
          "logo_image": "https://imgfp.hotp.jp/IMGH/25/44/P041212544/P041212544_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y110",
            "name": "八王子・立川"
          },
          "midnight": "営業している",
          "mobile_access": "八王子駅徒歩1分  和食全品or洋食全品食べ放題3000円",
          "name": "全140種食べ飲み放題2000円　全席完全個室　おすすめファーム　八王子店",
          "name_kana": "おすすめふぁーむ　はちおうじ",
          "non_smoking": "禁煙席なし",
          "open": "月～日、祝日、祝前日: 12:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）",
          "other_memo": "お昼の宴会、深夜の宴会も承ります。お気軽にお問い合わせください。",
          "parking": "あり ：お近くのコインパーキングをご利用ください。",
          "party_capacity": 100,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/25/43/P041212543/P041212543_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/25/43/P041212543/P041212543_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/25/43/P041212543/P041212543_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/25/43/P041212543/P041212543_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/25/43/P041212543/P041212543_58_s.jpg"
            }
          },
          "private_room": "なし ：2名様～団体様まで個室でご案内可能です。",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "お昼の宴会、深夜の宴会も承ります。お気軽にお問い合わせください。",
          "show": "なし",
          "small_area": {
            "code": "X220",
            "name": "八王子"
          },
          "station_name": "八王子",
          "sub_genre": {
            "code": "G003",
            "name": "創作料理"
          },
          "tatami": "なし ：広々お座敷個室は各種ご宴会に◎昼宴会,貸切宴会なども承ります。",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ001296225/?vos=nhppalsa000016"
          },
          "wedding": "貸切の婚礼などパーティーを承ります。お気軽にご相談下さい。",
          "wifi": "あり"
        },
        {
          "access": "【ＪＲ浜松町駅徒歩2分】駅近好立地な焼肉屋！新鮮なお肉をリーズナブルな価格で楽しめるホルモン居酒屋。",
          "address": "東京都港区浜松町２－５－８ー１Ｆ",
          "band": "不可",
          "barrier_free": "なし ：お困りの事が御座いましたら、お気軽にスタッフまでお申し付けください。",
          "budget": {
            "average": "3000円～",
            "code": "B003",
            "name": "3001～4000円"
          },
          "budget_memo": "",
          "capacity": 70,
          "card": "利用可",
          "catch": "お得なクーポンあります 18時までハイボール299円",
          "charter": "貸切可 ：(最大100名様までご利用可能!貸切宴会に◎)",
          "child": "お子様連れ歓迎 ：完全個室完備☆ママ会・ご家族でのお食事などにもってこい♪",
          "close": "なし",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ001250410/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ001250410/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "なし ：ゆったり3時間飲み放題付コース3000円～ご用意しております♪",
          "free_food": "なし ：エリア人気食べ放題コースあり♪♪ご予約お願いします。",
          "genre": {
            "catch": "焼肉 ホルモン 浜松町 飲み放題 居酒屋 ",
            "code": "G008",
            "name": "焼肉・ホルモン"
          },
          "horigotatsu": "あり ：駅徒歩1分!飲み放題付プラン3000円～ご用意!",
          "id": "J001250410",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.6541916462,
          "lng": 139.7561156775,
          "logo_image": "https://imgfp.hotp.jp/IMGH/00/53/P038610053/P038610053_69.jpg",
          "lunch": "なし",
          "middle_area": {
            "code": "Y025",
            "name": "品川･目黒･田町･浜松町･五反田"
          },
          "midnight": "営業していない",
          "mobile_access": "JR浜松町駅徒歩2分",
          "name": "浜松町ホルモン 浜松町本店",
          "name_kana": "にほんげんきさかばはままつちょうほるもんやきにくいざかやはままつちょうほんてん",
          "non_smoking": "禁煙席なし",
          "open": "月～日、祝日、祝前日: 15:00～23:30 （料理L.O. 22:30 ドリンクL.O. 23:00）",
          "other_memo": "完全個室多数◎ご宴会・二次会承ります♪",
          "parking": "なし ：近隣にコインパーキング有◎",
          "party_capacity": 100,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/00/57/P038610057/P038610057_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/00/57/P038610057/P038610057_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/00/57/P038610057/P038610057_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/00/57/P038610057/P038610057_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/00/57/P038610057/P038610057_58_s.jpg"
            }
          },
          "private_room": "あり ：2名様からご利用可能な個室席完備しております◎",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "コロナ対策完全個室でのご案内♪♪♪",
          "show": "なし",
          "small_area": {
            "code": "X085",
            "name": "浜松町"
          },
          "station_name": "浜松町",
          "sub_genre": {
            "code": "G001",
            "name": "居酒屋"
          },
          "tatami": "なし ：幹事様1名無料!などお得なクーポン多数",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ001250410/?vos=nhppalsa000016"
          },
          "wedding": "プロジェクター・マイク等のご用意有り◎ウェディング・二次会にもご利用可能です。",
          "wifi": "未確認"
        },
        {
          "access": "JR新橋駅 烏森口を出て徒歩3分　24時まで営業中！当日予約や宴会予約など、お電話でもお問い合わせください",
          "address": "東京都港区新橋３－６－１　碧山ビル",
          "band": "不可",
          "barrier_free": "あり ：※バリアフリーはありませんが、貸切可能人数40名様 ～100名様",
          "budget": {
            "average": "3000円（通常平均） 3000円（宴会平均）3000円（ランチ平均）",
            "code": "B003",
            "name": "3001～4000円"
          },
          "budget_memo": "キャンセル：前日はコース料金50%、当日は100%頂戴しております",
          "capacity": 120,
          "card": "利用可",
          "catch": "市場直送！刺身盛り合わせ 当店名物！絶品炭火焼き鳥",
          "charter": "貸切可 ：プロジェクター・スクリーンご利用可能♪扉付き完全個室完備◎フロア貸切可能人数30名様 ～120名様",
          "child": "お子様連れOK ：お子様連れご相談ください",
          "close": "年中無休で営業しております！営業時間外のご予約もお気軽にお問い合わせ下さい。毎週月曜～金曜(祝日は除く)は11時から営業中！",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ001294936/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ001294936/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "あり",
          "free_drink": "あり ：プロジェクター・スクリーンご利用可能♪扉付き完全個室完備◎フロア貸切可能人数30名様 ～120名様",
          "free_food": "あり ：プロジェクター・スクリーンご利用可能♪扉付き完全個室完備◎フロア貸切可能人数30名様 ～120名様",
          "genre": {
            "catch": "伊勢海老など新選海鮮が旨い個室居酒屋◎",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：扉付き完全個室完備◎フロア貸切可能人数30名様 ～120名様",
          "id": "J001294936",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.6664627459,
          "lng": 139.755396635,
          "logo_image": "https://imgfp.hotp.jp/IMGH/53/72/P039865372/P039865372_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y005",
            "name": "銀座・有楽町・新橋・築地・月島"
          },
          "midnight": "営業している",
          "mobile_access": "飲み放題付きｺｰｽも充実☆完全個室で宴会を",
          "name": "華の粋 はなのすい 別邸 新橋店",
          "name_kana": "じどりたべくらべ　いせえびさしみ　ぜんしつこしつ　はなのすい　べっかん　しんばしてん",
          "non_smoking": "禁煙席なし",
          "open": "月～木、祝前日: 11:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）金: 11:00～翌5:00 （料理L.O. 翌4:00 ドリンクL.O. 翌4:30）土、日、祝日: 15:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）",
          "other_memo": "朝までオープン/スポーツ観戦ができる/マイク利用可/プロジェクター・スクリーンあり",
          "parking": "なし ：（近くにコインパーキングあります）",
          "party_capacity": 120,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/53/73/P039865373/P039865373_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/53/73/P039865373/P039865373_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/53/73/P039865373/P039865373_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/53/73/P039865373/P039865373_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/53/73/P039865373/P039865373_58_s.jpg"
            }
          },
          "private_room": "あり ：扉付き完全個室完備◎フロア貸切可能人数30名様 ～120名様",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "",
          "show": "なし",
          "small_area": {
            "code": "X020",
            "name": "新橋"
          },
          "station_name": "新橋",
          "sub_genre": {
            "code": "G004",
            "name": "和食"
          },
          "tatami": "なし ：扉付き完全個室完備◎フロア貸切可能人数30名様 ～120名様",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ001294936/?vos=nhppalsa000016"
          },
          "wedding": "貸し切り宴会受付中！大人数様のご予約大歓迎です！",
          "wifi": "あり"
        },
        {
          "access": "【渋谷駅3分！道玄坂】もつ鍋・しゃぶしゃぶ・炭火焼き鳥・野菜巻き食べ放題！食べ飲み放題・単品飲み放題プランあり！",
          "address": "東京都渋谷区道玄坂２-29-13 若槻ビル201",
          "band": "可",
          "barrier_free": "なし ：渋谷店にはご用意ありませんが、大きな段差はありません。不便な際はスタッフがお手伝いさせていただきます",
          "budget": {
            "average": "2480円《渋谷駅徒歩3分！本格焼き鳥食べ飲み放題♪》",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "渋谷駅徒歩3分！焼き鳥食べ飲み放題♪渋谷 焼き鳥 個室 居酒屋",
          "capacity": 80,
          "card": "利用不可",
          "catch": "2名様より自慢の個室空間 誕生日サプライズ無料♪",
          "charter": "貸切可 ：予算・人数・時間をお気軽にご相談下さい　。系列店での対応可能な場合もご相談させていただいております。",
          "child": "お子様連れ歓迎 ：混み合う場合もある為早めの時間でしたらお子様連れOKです。個室席のご用意もあるのでお子様連れでも安心♪",
          "close": "年末年始、お盆その他休まず営業中♪おいしい宴会料理やとおしゃれな完全個室、素敵なスタッフがお客様をお待ちしております。",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ001195055/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ001195055/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "あり",
          "free_drink": "あり ：最大80種類以上の飲み放題をご用意しております。飲み放題の内容のご相談はお気軽にお問合せください。",
          "free_food": "あり ：焼き鳥などが食べ放題の贅沢宴会コースをご用意しております♪女子会や合コンにオススメです！",
          "genre": {
            "catch": "個室 炭火焼き鳥 しゃぶしゃぶ 鍋 食べ放題",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：掘りごたつはありませんが、渋谷で個室居酒屋/女子会/誕生日/個室宴会/送別会/記念日/会社宴会に最適です♪",
          "id": "J001195055",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.6596633633,
          "lng": 139.6978579067,
          "logo_image": "https://imgfp.hotp.jp/IMGH/57/12/P031755712/P031755712_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y030",
            "name": "渋谷"
          },
          "midnight": "営業している",
          "mobile_access": "【渋谷駅3分】もつ鍋･しゃぶしゃぶ･焼き鳥食べ放題",
          "name": "トリ一番 渋谷店",
          "name_kana": "やきとりしゃぶしゃぶはもつなべたべほうだいのみほうだいこしついざかやとりいちばんしぶやてん",
          "non_smoking": "全面禁煙",
          "open": "月～日、祝日、祝前日: 12:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）",
          "other_memo": "渋谷駅徒歩3分！本格焼き鳥食べ飲み放題♪",
          "parking": "なし ：渋谷という土地柄の為、専用の駐車場のご用意はありません。近くにパーキングを利用下さいませ。渋谷駅近♪",
          "party_capacity": 100,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/57/17/P031755717/P031755717_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/57/17/P031755717/P031755717_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/57/17/P031755717/P031755717_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/57/17/P031755717/P031755717_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/57/17/P031755717/P031755717_58_s.jpg"
            }
          },
          "private_room": "あり ：～6名様/～8名様/～15名様/～20名様",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "当日のキャンセルはキャンセル料が発生します。大型宴会・貸切の場合のキャンセルはお問い合わせください。",
          "show": "なし",
          "small_area": {
            "code": "X090",
            "name": "道玄坂"
          },
          "station_name": "渋谷",
          "sub_genre": {
            "code": "G002",
            "name": "ダイニングバー・バル"
          },
          "tatami": "あり ：個室席をご用意しています！渋谷で個室居酒屋/女子会/誕生日/個室宴会/送別会/記念日/宴会に最適です",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ001195055/?vos=nhppalsa000016"
          },
          "wedding": "貸切の婚礼などパーティーを承ります。お気軽にご相談下さい。居酒屋/個室/記念日に",
          "wifi": "あり"
        },
        {
          "access": "【上野駅徒歩2分/上野御徒町駅徒歩3分】肉寿司＆直送鮮魚が豪華食べ放題！【上野　全席個室　居酒屋】",
          "address": "東京都台東区上野４-8-9 3F",
          "band": "不可",
          "barrier_free": "あり ：上野　居酒屋　肉バル　食べ放題　個室　宴会　誕生日　女子会　接待",
          "budget": {
            "average": "2980円 《話題の肉寿司＆鮪＆焼鳥食べ放題！》",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "",
          "capacity": 80,
          "card": "利用可",
          "catch": "◆お洒落な寛ぎ個室空間 ◆飲み放題付き宴会コース",
          "charter": "貸切可 ：30名様以上で貸切相談承ります◎お気軽にお問い合わせ下さいませ。",
          "child": "お子様連れOK ：お子様もコース料金は、大人と同一の金額となります。混雑時はお断りする場合がございます。",
          "close": "※土・日・祝日は毎日11:00～営業中。※月～金ランチは8名様～予約制。",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ003298689/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ003298689/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "あり ：最大3H飲み放題＆食べ放題プラン多数ご用意！",
          "free_food": "あり ：肉寿司＆鮪・ブリ刺身＆炭火焼鳥など豪華食べ放題！",
          "genre": {
            "catch": "★NEW OPEN★隠れ家個室 肉寿司 食べ放題",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：上野で女子会/誕生日/個室宴会/送別会/記念日/宴会に最適な個室肉バル！",
          "id": "J003298689",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.7097494795,
          "lng": 139.7739377647,
          "logo_image": "https://imgfp.hotp.jp/IMGH/69/51/P040496951/P040496951_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y015",
            "name": "上野・御徒町・浅草"
          },
          "midnight": "営業している",
          "mobile_access": "上野駅 徒歩2分/京成上野駅 徒歩1分 【全席個室】",
          "name": "全席個室ダイニング　肉寿司＆まぐろ食べ放題　奏　上野店",
          "name_kana": "ぜんせきこしつだいにんぐにくずしまぐろたべほうだいかなでうえのてん",
          "non_smoking": "禁煙席なし",
          "open": "月～日、祝日、祝前日: 11:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）",
          "other_memo": "《NEWOPEN》全席個室にてご案内！2名様～80名様！当日予約OK♪",
          "parking": "なし ：上野　居酒屋　肉バル　食べ放題　個室　宴会　誕生日　女子会　接待",
          "party_capacity": 80,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/02/70/P040950270/P040950270_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/02/70/P040950270/P040950270_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/02/70/P040950270/P040950270_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/02/70/P040950270/P040950270_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/02/70/P040950270/P040950270_58_s.jpg"
            }
          },
          "private_room": "あり ：隠れ家個室　2名～最大80名までの個室多数完備",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "上野駅近にNEW OPEN★洗練された全席個室空間！食べ放題飲み放題が大人気！当日予約OK！",
          "show": "なし",
          "small_area": {
            "code": "X045",
            "name": "上野"
          },
          "station_name": "上野",
          "sub_genre": {
            "code": "G002",
            "name": "ダイニングバー・バル"
          },
          "tatami": "なし ：上野で女子会/誕生日/個室宴会/送別会/記念日/宴会に最適な個室肉バル！",
          "tv": "なし",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ003298689/?vos=nhppalsa000016"
          },
          "wedding": "結婚式・2次会大歓迎！貸切も50名様～承っております！営業時間外も◎",
          "wifi": "未確認"
        },
        {
          "access": "JR八王子駅北口徒歩1分/京王線京王八王子駅徒歩3分 お得な飲み放題付プランは2980円～♪",
          "address": "東京都八王子市東町12-14",
          "band": "不可",
          "barrier_free": "なし ：八王子　居酒屋　個室　宴会",
          "budget": {
            "average": "2000円☆お得なクーポン有☆",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "",
          "capacity": 150,
          "card": "利用可",
          "catch": "2H飲み放題777円地域最安! ☆スーパーサプライズ演出",
          "charter": "貸切可 ：貸切可 ：貸切可能人数最大150名様 /10名・20名・30名の個室完備！半貸切＆完全貸切も可能です★",
          "child": "お子様連れ歓迎 ：ゆったり寛げるお座敷個室もあるのでお子様連れでも安心♪",
          "close": "年中無休☆毎日ＯＫ☆お会計から１０％OFF♪◆幹事特典◆宴会コース３名分無料",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ001261235/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ001261235/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "あり",
          "free_drink": "あり ：2時間飲み放題777円◎",
          "free_food": "あり ：食べ飲み放題2000円◎",
          "genre": {
            "catch": "八王子駅2分完全個室×居酒屋料理食べ放題",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "あり ：八王子で女子会/誕生日/個室宴会/送別会/記念日/宴会に最適な個室居酒屋！",
          "id": "J001261235",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.6582259169,
          "lng": 139.3381858122,
          "logo_image": "https://imgfp.hotp.jp/IMGH/27/56/P038002756/P038002756_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y110",
            "name": "八王子・立川"
          },
          "midnight": "営業している",
          "mobile_access": "JR八王子駅 北口 徒歩1分/京王八王子駅 徒歩3分  ",
          "name": "薫仙 八王子店",
          "name_kana": "にせんえん　たべほうだいのみほうだい　くんせん　はちおうじてん",
          "non_smoking": "禁煙席なし",
          "open": "月～日、祝日、祝前日: 16:00～翌0:00",
          "other_memo": "営業時間外の宴会もお気軽にお問合せ下さい♪八王子で居酒屋/女子会/誕生日をお楽しみ",
          "parking": "あり ：近くのコインパーキングをご利用ください。（八王子　居酒屋　個室　宴会）",
          "party_capacity": 180,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/27/59/P038002759/P038002759_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/27/59/P038002759/P038002759_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/27/59/P038002759/P038002759_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/27/59/P038002759/P038002759_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/27/59/P038002759/P038002759_58_s.jpg"
            }
          },
          "private_room": "あり ：2/4/6/8/10/20/30/40/50/60/70/80/100/140名様個室あり　八王子　居酒屋　個室　宴会",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "ご予約は当日キャンセルの場合、キャンセル料を頂戴いたしますので、必ず前日までにご連絡下さい",
          "show": "あり",
          "small_area": {
            "code": "X220",
            "name": "八王子"
          },
          "station_name": "八王子",
          "sub_genre": {
            "code": "G004",
            "name": "和食"
          },
          "tatami": "なし ：八王子で女子会/誕生日/個室宴会/送別会/記念日/宴会に最適な個室居酒屋！",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ001261235/?vos=nhppalsa000016"
          },
          "wedding": "価格など是非ご相談ください。",
          "wifi": "あり"
        },
        {
          "access": "JR総武線 水道橋駅 西口 徒歩1分/地下鉄都営三田線 水道橋駅 A2番口 徒歩2分★東京ドームから歩いてすぐ！",
          "address": "東京都千代田区神田三崎町２－１８－９　ISM水道橋　１F",
          "band": "不可",
          "barrier_free": "なし ：詳細はお問い合わせ下さい。",
          "budget": {
            "average": "2900円(通常平均)/4000円(宴会平均)",
            "code": "B003",
            "name": "3001～4000円"
          },
          "budget_memo": "お通し　500円(税抜)　クレジットはディナー帯のみご利用可能",
          "capacity": 118,
          "card": "利用可",
          "catch": "初夏のおすすめフェア 産地直送！旨味溢れる海鮮",
          "charter": "貸切可 ：50名様。詳細はお気軽に店舗までご相談下さい。",
          "child": "お子様連れOK ：ご家族でのお食事も可能です。ご不明な点はお気軽にお問合せ下さい。",
          "close": "【定休日】年末年始",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ000244964/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ000244964/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "あり ：単品飲み放題120分1500円(税抜)！+500円(税抜)で地酒5種追加も可能◎",
          "free_food": "なし ：一品一品真心込めてご提供いたします♪",
          "genre": {
            "catch": "後楽園・東京ドーム・ドームシティすぐ",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：堀ごたつ個室(4名～12名様用/20名～30名様用)/堀ごたつ半個室(2名～6名様用)",
          "id": "J000244964",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.7013437509,
          "lng": 139.7528607269,
          "logo_image": "https://imgfp.hotp.jp/IMGH/01/42/P030760142/P030760142_69.jpg",
          "lunch": "あり",
          "middle_area": {
            "code": "Y006",
            "name": "水道橋・飯田橋・神楽坂"
          },
          "midnight": "営業していない",
          "mobile_access": "総武線水道橋駅 徒歩1分/都営三田線 水道橋駅 徒歩2分",
          "name": "酒蔵 匠 水道橋店",
          "name_kana": "しゅぞう　しょう　すいどうばしてん",
          "non_smoking": "全面禁煙",
          "open": "月～日: 11:30～15:00 （料理L.O. 14:30 ドリンクL.O. 14:30）16:30～23:10 （料理L.O. 22:30 ドリンクL.O. 22:50）祝日: 16:30～23:10 （料理L.O. 22:30 ドリンクL.O. 22:50）祝前日: 11:30～15:00 （料理L.O. 14:30 ドリンクL.O. 14:30）16:30～23:10 （料理L.O. 22:50 ドリンクL.O. 22:50）",
          "other_memo": "スポーツ観戦ができます。",
          "parking": "なし ：詳細はお問い合わせ下さい。",
          "party_capacity": 40,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/58/55/P032375855/P032375855_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/58/55/P032375855/P032375855_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/58/55/P032375855/P032375855_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/58/55/P032375855/P032375855_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/58/55/P032375855/P032375855_58_s.jpg"
            }
          },
          "private_room": "あり ：堀ごたつ個室(4名～12名様用/20名～30名様用)/堀ごたつ半個室(2名～6名様用)",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "予算、人数、日程などの不明点等ございましたら、お気軽に店舗へご相談下さい。",
          "show": "なし",
          "small_area": {
            "code": "X071",
            "name": "水道橋"
          },
          "station_name": "水道橋",
          "sub_genre": {
            "code": "G004",
            "name": "和食"
          },
          "tatami": "なし ：堀ごたつ個室(4名～12名様用/20名～30名様用)/堀ごたつ半個室(2名～6名様用)",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ000244964/?vos=nhppalsa000016"
          },
          "wedding": "結婚式2次会、各種歓送迎会OKです！",
          "wifi": "未確認"
        }
      ]
    }
  }
  return ramens;
};

const fetchRamenProductById = async (id: number): Promise<any> => {
  // Implement API call to fetch ramen product data by ID
  // Return the fetched data as an object
  return { id: 1, name: 'Ramen 1', price: 5.99 };
};


export default { fetchRamenProducts, fetchRamenProductById }