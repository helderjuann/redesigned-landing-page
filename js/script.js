$(function() {

    menuMobile();

    function menuMobile() {
        $('body').on('click','.mobile-menu', function(e) {
            e.stopPropagation();
            $(this).find('ul').slideToggle();
        })

        $('body').on('click','.mobile-menu', function() {
            $(this).find('ul').slideUp('open');
        })
    }
})