
var map = L.map('map').setView([36.575, 137.984], 6);
map.zoomControl.setPosition('bottomleft')



//オープンストリートマップのleafletタイルデータ取得
//＜参考＞
    /*
        オープンストリート　https://tile.openstreetmap.org/{z}/{x}/{y}.png
        地理院　標準　https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png
        地理院　淡色　https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png
        地理院　写真　https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg
    */

//レイヤの順番z-index
map.createPane("back").style.zIndex = 1; //地図
map.createPane("pane_map").style.zIndex = 5; //地図
map.createPane("nihon").style.zIndex = 6; //地図
map.createPane("nihon2").style.zIndex = 7; //地図


var PolygonLayer_Style_nerv_1 = {
    "color": "#ffffff",
    "weight": 1,
    "opacity": 1,
    "fillColor": "#3a3a3a",
    "fillOpacity": 1,
}

//日本
var PolygonLayer_Style_nerv_J = {
    "color": "#000000",
    "weight": 1.0,
    "opacity": 1,
    "fillColor": "#ECEDEC",
    "fillOpacity": 1
}
//海外
var PolygonLayer_Style_nerv_W = {
    "color": "#9BACC5",
    "weight": 1.0,
    "opacity": 1,
    "fillColor": "#4F617B",
    "fillOpacity": 1
}

//日本境
var nihon2 = {
    "color": "#000000",
    "weight": 1.5,
    "opacity": 1,
    "fillColor": "#ECEDEC",
    "fillOpacity": 0
}

var nihon = {
    "color": "#ffffff",
    "weight": 5.5,
    "opacity": 1,
    "fillColor": "#ECEDEC",
    "fillOpacity": 0
}

$.getJSON("source/prefectures.geojson", function (data) {
    L.geoJson(data, {
        pane: "back",
        style: PolygonLayer_Style_nerv_J
    }).addTo(map);
});

$.getJSON("source/prefectures2.geojson", function (data) {
    L.geoJson(data, {
        pane: "back",
        style: PolygonLayer_Style_nerv_W
    }).addTo(map);
});


//自作geojson
var base = L.tileLayer('', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: ''
}).addTo(map);

//ここからタイルマップ

var google1 = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>'
});

var google2 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>'
}); //最初に表示させるタイルに addTo() をつける

var google3 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>'
});

var google4 = L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>'
});

var tanshoku = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
});

var hyojun = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
});

var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://carto.com/" target="_blank">CARTO Dark</a>'
});

var inei = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
});

var hyoko_color = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
});





L.control.layers({
    "単色(black)": base,
    "地図": google1,  
    "航空写真": google2,
    "航空+地図": google3,
    "地図(透過)": google4,
    "地理院地図(淡色)": tanshoku,
    "地理院地図(標準)": hyojun,
    "CARTO Dark": dark,
    "地理院陰影起伏図": inei,
    "地理院色別標高図": hyoko_color,
    
}).addTo(map);

$.getJSON("source/prefectures.geojson", function (data) {
    L.geoJson(data, {
        pane: "nihon2",
        style: nihon2
    }).addTo(map);
});


$.getJSON("source/prefectures.geojson", function (data) {
    L.geoJson(data, {
        pane: "nihon",
        style: nihon
    }).addTo(map);
});

