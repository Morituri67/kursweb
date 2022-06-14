$(function() {

    $('.new-arrivals__carousel').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,


    });

    $('.new-arrivals__carousel-slide').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt="next"></button>',


    });

    ///////////


    $(".newarrival__products").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".vbrands__slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1279,
                settings: {}
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            open: function() {
                $("body").css("overflow", "hidden");
            },
            close: function() {
                $("body").css("overflow", "auto");
            }
        }
    });


    $(".popup-auth__switcher li").on("click", function(e) {
        $(this).parent().find("._active").removeClass("_active");
        $(this).addClass("_active");
        $(".popup-auth__tabs").find(".popup-auth__tab").hide().removeClass("_active");
        $(".popup-auth__tabs").find(".popup-auth__tab").eq($(this).index()).fadeIn().addClass("_active");
    });

    $(".popup-form__cb_account input").on("click", function(e) {
        let fields =  $(".popup-form__row_no-account")
        if ($(this).is(':checked')){
            fields.hide();
        } else {
            fields.show();
        }
    });




});