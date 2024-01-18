$(document).ready(function(){
  // 'h2 .letters'の各文字を<span>でラップする
  $('#DIVE_title .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  // アニメーションの定義
  anime.timeline({loop: false})
    .add({
        targets: '#DIVE_title .letter',
        scale: [0, 1],
        translateY: [function() { return anime.random(-360, 360); }, 0],
        translateX: [function() { return anime.random(-360, 0); }, 0],
        opacity: [0, 1],
        filter: ["blur(15px)", "blur(0px)"],
        duration: 750,
        elasticity: 300,
        delay: function(el, i) {
          return 35 * (i+1);
        }
    }).add({
        targets: '#DIVE_title',
        opacity: 1,
        duration: 250,
        easing: "easeOutExpo",
        delay: 250
    });
});


// ふわふわでデてくるテキスト


function BlurTextAnimeControl() {
  $('.blurTrigger').each(function(){ // blurTriggerというクラス名が
      var elemPos = $(this).offset().top + $(this).outerHeight() / 2; // 要素の中央位置を取得
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var windowCenter = scroll + windowHeight / 2; // ウィンドウの中央位置を計算

      // 要素がウィンドウの中央に来たらblurクラスを追加
      if (windowCenter >= elemPos - windowHeight / 4 && // ウィンドウの中央が要素の上部に達し、
          windowCenter <= elemPos + windowHeight / 4 && // ウィンドウの中央が要素の下部を超えるまで
          !$(this).hasClass('blur')) { // まだblurクラスが追加されていない場合
          $(this).addClass('blur'); // blurクラスを追加
      }
  });
}

// 画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
  BlurTextAnimeControl(); // アニメーション用の関数を呼ぶ
});
