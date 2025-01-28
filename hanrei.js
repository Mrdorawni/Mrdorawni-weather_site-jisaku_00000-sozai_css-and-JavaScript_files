const hanrei = document.getElementById("hanrei");

// ドラッグ状態管理
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// ドラッグ開始
hanrei.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - hanrei.offsetLeft;
  offsetY = e.clientY - hanrei.offsetTop;
  hanrei.style.cursor = "grabbing"; // カーソル変更
});

// ドラッグ中
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  hanrei.style.left = `${e.clientX - offsetX}px`;
  hanrei.style.top = `${e.clientY - offsetY}px`;
});

// ドラッグ終了
document.addEventListener("mouseup", () => {
  isDragging = false;
  hanrei.style.cursor = "auto"; // カーソルを戻す
});

    // タッチドラッグイベント
    hanrei.addEventListener("touchstart", (e) => {
      isDragging = true;
      offsetX = e.touches[0].clientX - hanrei.offsetLeft;
      offsetY = e.touches[0].clientY - hanrei.offsetTop;
      hanrei.style.cursor = "grabbing";
    });

    document.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      e.preventDefault(); // タッチ移動時の画面のスクロールを防ぐ
      hanrei.style.left = `${e.touches[0].clientX - offsetX}px`;
      hanrei.style.top = `${e.touches[0].clientY - offsetY}px`;
    });

    document.addEventListener("touchend", () => {
      isDragging = false;
      hanrei.style.cursor = "grab";
    });

// 初期設定
hanrei.style.position = "absolute";
hanrei.style.cursor = "auto"; // 通常時のカーソル設定