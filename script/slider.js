$(document).ready(function(){
    $('.slider').slick({
        vertical: true,         //追記
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        dots: true,
        arrows: true,
    }); // この行にセミコロンを追加
}); // この行でdocument.readyの閉じ括弧とセミコロンを追加
