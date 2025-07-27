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
