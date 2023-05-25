$(".slick-banner").slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
)

$(document).ready(function(){
    AOS.init()
})

$('ul.menu').find('a').click(function () {
    var $href = $(this).attr('href');
    // alert($href)
    var $anchor = $($href).offset();
    $('body,html').animate({ scrollTop: $anchor.top - 40 }, 200);
    // return false;
});

$(document).ready(function () {
    $('ul.menu li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});