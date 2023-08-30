$(function() {
    $('.part-2 .scroll-wrapper').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false
    });

    function runSlider(words, inputSelector) {
        var indexWord = 0;
        var indexChar = 0;
    
        var elInput = $(inputSelector);
        elInput.focus();
        $(window).scrollTop(0);
    
        run();
    
        function run() {
            interval = setInterval(function() {
                if(indexChar < words[indexWord].length) {
                    indexChar++;
                    elInput.val(words[indexWord].substr(0,indexChar));
                } else if (indexWord < words.length-1) {
                    indexWord++;
                    indexChar = 0;
                } else {
                    indexWord = 0;
                    indexChar = 0;
                }
            },200);
        }
    }
    
    var words1 = ['Desenvolvimento Web','Engenharia de Software','Sistemas Autênticos'];
    runSlider(words1, '.services-slider input[type=text]');
    
    var words2 = ['Introdução','Nossa Equipe','Objetivos'];
    runSlider(words2, '.about-slider input[type=text]');
})
