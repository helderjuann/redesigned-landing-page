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
})