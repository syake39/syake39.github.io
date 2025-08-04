// --- ↓↓↓ オープニング画面の機能を追加しました ↓↓↓ ---
// ページが完全に読み込まれたら実行します
window.addEventListener('load', function() {
    // ローダー要素を取得します
    const loader = document.getElementById('loader');

    // 2.5秒後（2500ミリ秒）に、ローダーに.fade-outクラスを付与します
    setTimeout(function() {
        loader.classList.add('fade-out');
    }, 2500);
});


// --- ハンバーガーメニューの機能 ---
const hamburger = document.getElementById('hamburger');
const spNav = document.getElementById('sp-nav');
const navLinks = document.querySelectorAll('.sp-nav a'); // SPナビのリンクを全て取得

// ハンバーガーボタンがクリックされた時の処理
hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    spNav.classList.toggle('is-active');
});

// SPナビのリンクがクリックされた時にメニューを閉じる
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('is-active');
        spNav.classList.remove('is-active');
    });
});


// --- スクロールでフェードインする機能 ---
const targets = document.querySelectorAll('.fade-in-target');

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

targets.forEach(function(target) {
    observer.observe(target);
});
