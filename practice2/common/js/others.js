'usestrict'

// JavaScriptでメニューリストを閉じる機能を追加
// メニューアイコンのチェックボックスとリンク要素を取得
document.addEventListener('DOMContentLoaded', function () {
  const menuCheckbox = document.querySelector('.MenuList .menu-btn');
  const menuLinks = document.querySelectorAll('.MenuList .list li a');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuCheckbox.checked = false;
    });
  });
});
