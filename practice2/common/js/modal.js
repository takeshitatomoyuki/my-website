// // モーダルを表示するスクリプト
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];

// // ボタンをクリックしたときにモーダルを開く
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// // <span> (x) をクリックしたときにモーダルを閉じる
// span.onclick = function () {
//   modal.style.display = "none";
// }

// // モーダルの外側をクリックしたときにモーダルを閉じる
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


//モーダルのhtml
// <button id="myBtn1">モーダル1を開く</button>
// <div id="myModal1" class="modal">
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>モーダル1の内容</p>
//   </div>
// </div>

// <!-- ボタン2とモーダル2 -->
// <button id="myBtn2">モーダル2を開く</button>
// <div id="myModal2" class="modal">
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>モーダル2の内容</p>
//   </div>
// </div>

// <!-- ボタン3とモーダル3 -->
// <button id="myBtn3">モーダル3を開く</button>
// <div id="myModal3" class="modal">
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>モーダル3の内容</p>
//   </div>
// </div>

// <!-- ボタン4とモーダル4 -->
// <button id="myBtn4">モーダル4を開く</button>
// <div id="myModal4" class="modal">
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>モーダル4の内容</p>
//   </div>
// </div>

// それぞれのボタンとモーダルを取得
const modals = [
  document.getElementById('myModal1'),
  document.getElementById('myModal2'),
  document.getElementById('myModal3'),
  document.getElementById('myModal4')
];

const buttons = [
  document.getElementById('myBtn1'),
  document.getElementById('myBtn2'),
  document.getElementById('myBtn3'),
  document.getElementById('myBtn4')
];

const closeButtons = document.querySelectorAll('.close');

// 各ボタンにイベントリスナーを設定
buttons.forEach((button, index) => {
  button.onclick = function () {
    modals[index].style.display = "block";
  };
});

// 各モーダルの閉じるボタンにイベントリスナーを設定
closeButtons.forEach((closeBtn, index) => {
  closeBtn.onclick = function () {
    modals[index].style.display = "none";
  };
});

// モーダルの外側をクリックしたときに閉じる
window.onclick = function (event) {
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
