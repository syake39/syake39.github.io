// このスクリプトは、スクロールに応じて要素をフェードインさせるためのものです

document.addEventListener('DOMContentLoaded', function() {
    // 1. "fade-in-target" というクラス名を持つすべての要素を取得します
    const targets = document.querySelectorAll('.fade-in-target');

    // 2. 要素が画面内に入ったか・出たかを監視する「監視員」(IntersectionObserver)を作成します
    const observer = new IntersectionObserver(function(entries, observer) {
        // entriesには、監視対象となっている要素が配列として渡されます
        entries.forEach(function(entry) {
            // isIntersectingプロパティで、要素が画面内に少しでも入ったかどうかを判定できます
            if (entry.isIntersecting) {
                // 画面内に入ったら、その要素に "fade-in" というクラスを追加します
                // (CSS側で、.fade-inクラスが付いた要素は表示されるように設定しています)
                entry.target.classList.add('fade-in');

                // アニメーションは一度だけで良いので、一度表示された要素は監視を停止します
                observer.unobserve(entry.target);
            }
        });
    });

    // 3. 取得したすべての監視対象要素について、監視を開始します
    targets.forEach(function(target) {
        observer.observe(target);
    });
});

