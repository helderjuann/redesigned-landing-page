$(function() {
    $('.mosaic .wraper-mosaic').slick({
        centerMode: false,
        slidesToShow: 5,
        autoplay: true,
        playspeed: 2000,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    autoplay: true,
                    playspeed: 2000,
                    slidesToShow: 3,
                    infinite: true
                }
            },

            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    infinite: true
                }
            },

            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]
    });

    $('.statement .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
    });
})