console.log('start01');
 
const player = videojs('video1', {
    autoplay: false, // 自動再生を無効
    fluid: true, // 動画コンテンツを親要素いっぱいに広げる
    loop: false, // 繰り返し再生無効
    controls: true, // コントローラ表示
    preload: 'auto', // videoタグがロードされた瞬間に動画をダウンロード
    languages: {
        ja: {
            'Play': '再生',
            'Pause': '停止',
            'Play Video': '再生',
            'Mute': '消音',
            'Playback Rate': '再生速度',
            'Picture-in-Picture': 'ピクチャインピクチャ',
            'Fullscreen': '全画面表示',
            'Non-Fullscreen': '通常表示'
        }
    }, // 日本語の言語対応
    language: 'ja' // 言語を日本語に設定
});
 
// コントローラに10秒戻しボタンと10秒送りボタンを追加
const rewindButton = player.getChild('ControlBar').addChild('button');
const forwardButton = player.getChild('ControlBar').addChild('button');
rewindButton.controlText('5秒戻し');
forwardButton.controlText('5秒送り');
 
// アイコンを設定
player.getChild('ControlBar')
    .el()
    .insertBefore(
        rewindButton.el(),
        player.getChild('ControlBar').getChild('pictureInPictureToggle').el()
    )
    .innerHTML = `<img src='10modo.png' width=20 />`;
 
player.getChild('ControlBar')
    .el()
    .insertBefore(
        forwardButton.el(),
        player.getChild('ControlBar').getChild('pictureInPictureToggle').el()
    )
    .innerHTML = `<img src='10susu.png' width=20 />`;
 
// スキップ処理を追加
rewindButton.el().addEventListener('click', () => {
    player.currentTime(player.currentTime() - 10);
});
forwardButton.el().addEventListener('click', () => {
    player.currentTime(player.currentTime() + 10);
});