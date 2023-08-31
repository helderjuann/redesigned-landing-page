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

    disableTextS();

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }

    validateForm();

    function validateForm() {
        $('form').submit(function() {

            var e_error = false;
            var n_name = $('[name=nome]').val();
            var e_email = $('[name=email]').val();
            var m_msg = $('[name=mensagem]').val();
            resetForm();

            if (n_name == "") {
                e_error = true;
                var nm = $('[name=nome]');
                nm.css('border', '2px solid red');
                $('form span').html('Por favor, insira o seu nome!');
            } else if (e_email == "") {
                e_error = true;
                var em = $('[name=email]');
                em.css('border', '2px solid red');
                $('form span').html('Por favor, insira um e-mail válido!');
            } else if (!e_email.includes("@") || !e_email.includes(".")) {
                e_error = true;
                var em = $('[name=email]');
                em.css('border', '2px solid red');
                $('form span').html('Por favor, insira um e-mail válido!');
            } else if (m_msg == "") {
                e_error = true;
                var ms = $('[name=mensagem]');
                ms.css('border', '2px solid red');
                $('form span').html('Por favor, insira sua mensagem!');
            }

            if (e_error == false) {
                $('input[type=text],textarea').fadeIn(function() {
                    setTimeout(function() {
                        $('input[type=text],textarea').css('border','1px solid #ccc');
                    },2500);
                });
                $('input[type=text],textarea').css('border','2px solid green');
                $('.box-success').fadeIn(function() {
                    setTimeout(function() {
                        $('.box-success').fadeOut();
                    },2000);
                });
                $(this)[0].reset();
            }

            return false;
        })
    }

    function resetForm() {
        var rsForm = $('input[type=text],textarea');
        $(rsForm).focus(function() {
            $(this).css('border','1px solid #ccc');
            $('form span').html('');
        })
    }

});
