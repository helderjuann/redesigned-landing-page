$(function() {
    $('.part-2 .scroll-wrapper').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false
    });

    $('.call-2-slider').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        playspeed: 100
    });
})
