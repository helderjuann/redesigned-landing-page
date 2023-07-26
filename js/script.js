$(function() {

    menuMobile();

    function menuMobile() {
        $('body').on('click','.mobile-menu', function(e) {
            e.stopPropagation();
            $(this).find('ul').slideToggle();
        })

        $('body').on('click', function(e) {
            e.stopPropagation();
            $('.mobile-menu').find('ul').slideUp('open');
        })
    }

    var indexNow = 0;
    var indexMax = $('.call-2-slider h2').length;
    var delay = 3000;
    textSlider();

    function textSlider() {
        $('.call-2-slider h2').eq(0).fadeIn();
        setInterval(function() {
            switchSlider();
        },delay);
    }

    function switchSlider() {
        $('.call-2-slider h2').eq(indexNow).fadeOut(1500);
        indexNow+= 1;
        if (indexNow == indexMax)
            indexNow = 0;
        $('.call-2-slider h2').eq(indexNow).fadeIn(1500);
    }

    desktopScroll();

    function desktopScroll() {
        $('#contact').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
            return false;
        });
    }

    mobileScroll();

    function mobileScroll() {
        $('#mobile-contact').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
            return false;
        });
    }
});