$(function() {

    var amount = $('.about-author').length;
    var curIndex = 0;
    var delay = 3000;
    var indexNow = 0;
    var indexMax = $('.call-2-slider h2').length;

    menuMobile();

    function menuMobile() {
        $('body').on('click','.mobile-menu', function(e) {
            e.stopPropagation();
            $(this).find('ul').slideToggle();
        });

        $('body').on('click', function(e) {
            e.stopPropagation();
            $('.mobile-menu').find('ul').slideUp('open');
        });
    }

    animateOpacity();

    function animateOpacity() {
        const storedOpacity = localStorage.getItem('fadeOpacity');
        if (storedOpacity) {
            $('.call-2-slider h2').css('opacity',storedOpacity);
        }
    }

    textSlider();

    function textSlider() {
        $('.call-2-slider h2').eq(0).fadeIn();
        setInterval(function() {
            switchSlider();
        }, delay);
    }

    function switchSlider() {
        $('.call-2-slider h2').eq(indexNow).fadeOut(1500);
        indexNow+= 1;
        if (indexNow == indexMax)
            indexNow = 0;
        $('.call-2-slider h2').eq(indexNow).fadeIn(1500);
    }

    $(window).on('beforeunload', function() {
        const currentOpacity = $('.call-2-slider h2').css('opacity');
        localStorage.setItem('fadeOpacity', currentOpacity);
    })

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

    contactScroll();
    
    function contactScroll() {
        $('#button-contact').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
            return false;
        });
    }

    authorSlider();

    function authorSlider() {
        var sizeContainer = 100 * amount;
        var sizeBoxSingle = 100 / amount;
        $('.about-author').css('width', sizeBoxSingle+'%');
        $('.scroll-wrapper').css('width', sizeContainer+'%');

        for (var i = 0; i < amount; i++) {
            if (i == 0)
                $('.slider-bullets').append('<span style="background-color: rgb(100,100,100);"></span>')
            else
                $('.slider-bullets').append('<span></span>')
        }
    }
    
    autoPlay();

    function autoPlay() {
        setInterval(function() {
            curIndex++;
            if(curIndex == amount)
                curIndex = 0;
            goToSlider(curIndex);
        }, 5000)
    }

    function goToSlider(curIndex) {
        var offSetX = $('.about-author').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(100,100,100)');
        $('.scroll-team').stop(true, true).animate({'scrollLeft':offSetX+'px'});
    }

    $(window).resize(function() {
        $('.scroll-team').stop().animate({'scrollLeft':0});
    })
});