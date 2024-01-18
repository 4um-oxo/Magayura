// 初期状態で全てのFAQコンテンツを非表示に
$('.faq-content').hide();

// タイトルがクリックされた時の動作
$('.faq-ttl').click(function() {
    // 他の全てのFAQコンテンツを閉じ、対応するタイトルのクラスを削除
    $('.faq-content').not($(this).next()).slideUp();
    $('.faq-ttl').not($(this)).removeClass('is-active');

    // クリックされたタイトルの次のコンテンツの表示状態をトグル
    $(this).next('.faq-content').slideToggle();

    // クリックされたタイトルのクラスをトグル
    $(this).toggleClass('is-active');
});
