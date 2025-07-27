// このスクリプトは、スクロールに応じて要素をフェードインさせるためのものです
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

