$(function() {

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
});
