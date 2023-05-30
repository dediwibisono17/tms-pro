$(".slick-banner").slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // arrows: false,
        autoplaySpeed: 2000,
        // dots: true
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
    $("#navbarCollapse").removeClass("show");
    // return false;
});

$(document).ready(function () {
    $('ul.menu li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});