// 1. 監視対象となるすべての要素を取得します
const targets = document.querySelectorAll('.fade-in-target');

// 2. 要素が画面内に入ったか・出たかを監視する「監視員」を作成します
const observer = new IntersectionObserver(function(entries, observer) {
    // entriesには監視対象の要素が配列として渡されます
    entries.forEach(function(entry) {
        // isIntersectingプロパティで、画面内に入ったかどうかを判定できます
        if (entry.isIntersecting) {
            // 画面内に入ったら、.fade-inクラスを追加します
            entry.target.classList.add('fade-in');
            // 一度表示したら、もう監視する必要はないので監視を停止します
            observer.unobserve(entry.target);
        }
    });
});

// 3. すべての監視対象要素について、監視を開始します
targets.forEach(function(target) {
    observer.observe(target);
});
