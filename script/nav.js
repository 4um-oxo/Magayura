// JavaScriptでスクロール機能を実装
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    });

JavaScript (ハンバーガーメニューのトグル機能を追加);
``javascript
// ドキュメントの読み込みが完了したら実行されるイベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav > ul');

    // ハンバーガーメニューアイコンがクリックされた時の処理
    burger.addEventListener('click', () => {
        // ナビゲーションの表示/非表示を切り替える
        nav.classList.toggle('nav-active');
        
        // ハンバーガーメニューアイコンのアニメーションを切り替える
        burger.classList.toggle('toggle');
    });
});