'use strict';

function showImages(startIndex, button) {
  const images = document.querySelectorAll('.image-container img');
  images.forEach(image => image.style.display = 'none');

  // スマホかPCかを判定
  const isPC = window.innerWidth >= 768;

  if (isPC) {
    // PC版は3枚の画像を表示
    const imageOrder = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
      [5, 6, 7]
    ];
    const selectedImages = imageOrder[startIndex - 1];
    selectedImages.forEach(index => {
      document.getElementById(`image${index}`).style.display = 'block';
    });

  } else {
    // スマホ版は1枚のみ表示
    document.getElementById(`image${startIndex}`).style.display = 'block';
  }

  // アクティブボタンの更新
  const buttons = document.querySelectorAll('.button-container button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

// 画面サイズが変更されたらリセット
window.addEventListener('resize', () => {
  const activeButton = document.querySelector('.button-container button.active');
  if (activeButton) {
    const index = Array.from(activeButton.parentNode.children).indexOf(activeButton) + 1;
    showImages(index, activeButton);
  }
});
window.addEventListener('load', () => {
  const firstButton = document.querySelector('.button-container button:first-child');
  showImages(1, firstButton); // 初期状態で1,2,3を表示
});

