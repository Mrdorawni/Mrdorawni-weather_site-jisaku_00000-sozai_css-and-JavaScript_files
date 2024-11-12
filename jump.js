// URLのパラメータを取得
const urlParams = new URLSearchParams(window.location.search);

// 地域ごとの座標とズームレベルを設定
const regions = {
  zenkoku: { latLng: [35.681236, 139.767125], zoom: 5.5 },
  kita: { latLng: [41.16301, 141.13527], zoom: 6.7 },
  higashi: { latLng: [36.6023, 139.15558], zoom: 8 },
  nishi: { latLng: [33.45112, 133.50337], zoom: 7.6 },

  hokkaido: { latLng: [43.43622, 142.20694], zoom: 7.8 },
  tohoku: { latLng: [39.21031, 140.68216], zoom: 7.7 },
  kanto: { latLng: [36.03406, 139.69909], zoom: 8.7 },
  chubu: { latLng: [35.98384, 137.94363], zoom: 8.5 },
  kinki: { latLng: [34.60016, 135.57041], zoom: 8.8 },
  chugoku: { latLng: [34.73638, 133.06506], zoom: 9 },
  shikoku: { latLng: [33.57843, 133.53091], zoom: 9.2 },
  kyushu: { latLng: [32.51407, 131.01024], zoom: 8.5 },
  okinawa: { latLng: [25.47918, 125.92723], zoom: 8.4 },
};

// 各地域のURLパラメータがあるかチェックしてズーム
for (const [key, { latLng, zoom }] of Object.entries(regions)) {
  if (urlParams.has(key)) {
    map.setView(latLng, zoom);
    break;
  }
}
