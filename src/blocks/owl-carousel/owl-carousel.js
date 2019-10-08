$(document).ready(function () {
    var $zoom = $('.product__img img');

    $("#viewed-slider").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        center: false,
        margin: 25,
        navSpeed: 1000,
        responsive: {
            768: {
                items: 2,
                margin: 55
            },
            992: {
                items: 4,
                margin: 25
            }
        },
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();
                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');

                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }

                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }
            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        }
    });

    $(".card__slider").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        center: true,
        navSpeed: 1000
    });

    $("#new-items").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        center: false,
        margin: 25,
        navSpeed: 1000,
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3,
                margin: 25
            },
            1260: {
                items: 3,
                margin: 45,
                slideBy: 3
            }
        },
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();
                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');

                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }

                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }
            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        }
    });

    $('#default-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        center: false,
        navSpeed: 1000,
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();
                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');

                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }

                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }
            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        }
    });

    $('#product-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        dotsData: true,
        dotsContainer: '.product__thumbs',
        dotClass: 'product__thumb',
        loop: true,
        dotsSpeed: 1000,
        animateOut: 'fadeOut',
        onTranslated: function () {
            if ($(window).width() >= 992) {
                $zoom.destroy().magnify();
            }

            $(window).resize(function () {
                if ($(window).width() >= 992) {
                    $zoom.destroy().magnify();
                }
            });
        }
    });

    if ($(window).width() >= 992) {
        $zoom.magnify({
            limitBounds: true
        });
    }

    $(window).resize(function () {
        if ($(window).width() >= 992) {
            $zoom.magnify({
                limitBounds: true
            });
        }
    });

    // Переключение слайда по клику на миниатюру фото на основании индекса элемента

    $('.product__thumb').click(function () {
        $('#product-slider').trigger('to.owl.carousel', [$(this).index(), 1000]);
    });

    //Переключение слайда по клику на текущий слайд

    $('#product-slider .owl-item').click(function () {
        $('#product-slider').trigger('next.owl.carousel');
    })
});
