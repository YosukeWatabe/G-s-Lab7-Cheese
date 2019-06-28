<script>
    AOS.init();
</script>

// jsを記述する際はここに記載していく
//■page topボタン

$(function () {
    var topBtn = $('#pageTop');
    topBtn.hide();



    //◇ボタンの表示設定
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {

            //---- 画面を80pxスクロールしたら、ボタンを表示する
            topBtn.fadeIn();

        } else {

            //---- 画面が80pxより上なら、ボタンを表示しない
            topBtn.fadeOut();

        }
    });



    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;

    });


});

<script>
    AOS.init();
</script>
var $slider_container = $('.slider-container'),
    $slider = $('.slider'),
    $slider_nav_container = $('.slider-nav-container'),
    $slider_nav = $('.slider-nav');

// ナビゲーション用に複製
$slider_nav.append($slider.contents().clone());

// スライド初期化時にクラスを追加
// はじめはdisplay:noneしておき、.initializedが追加されたらdisplay:block
$slider.on('init', function () {
    $slider_container.addClass('initialized');
});
$slider_nav.on('init', function () {
    $slider_nav_container.addClass('initialized');
});

$slider.slick({
    arrows: false,
    asNavFor: $slider_nav,
    fade: true,
    waitForAnimate: false
});
$slider_nav.slick({
    appendArrows: $slider_nav_container,
    prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
    nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
    slidesToShow: 3,
    asNavFor: $slider,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '40px'
});

// スライドの横幅を小数点以下pxまで表示
// 今回はcenterPaddingもあるのでその分も計算しています
$slider_nav.on('setPosition', function () {
    var slider_width = $slider_nav.width(),
        slide_gutter = $slider_nav.find('.slick-slide').eq(0).css('margin-right').split('px')[0],
        slides_num = $slider_nav.slick('slickGetOption', 'slidesToShow'),
        slides_center_padding = $slider_nav.slick('slickGetOption', 'centerPadding').split('px')[0],
        slide_width = (slider_width - slide_gutter * (slides_num - 1) - (slides_center_padding * 2)) / slides_num;
    $slider_nav.find('.slick-slide').css('width', slide_width + 'px');
});