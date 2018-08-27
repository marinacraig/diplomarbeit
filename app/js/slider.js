/*
Da Codeschnipsel für slider auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let sliderNeu = document.getElementById('slider');
if (sliderNeu !==null) {


    var $slider = $('.slider');

    var $slickTrack = $('.slick-track');
    var $slickCurrent = $('.slick-current');

    var slideDuration = 900;

//RESET ANIMATIONS
// On init slide change
    $slider.on('init', function (slick) {
        TweenMax.to($('.slick-track'), 0.9, {
            marginLeft: 0
        });
        TweenMax.to($('.slick-active'), 0.9, {
            x: 0,
            zIndex: 2
        });
    });
// On before slide change
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        TweenMax.to($('.slick-track'), 0.9, {
            marginLeft: 0
        });
        TweenMax.to($('.slick-active'), 0.9, {
            x: 0
        });
    });

// On after slide change
    $slider.on('afterChange', function (event, slick, currentSlide) {
        TweenMax.to($('.slick-track'), 0.9, {
            marginLeft: 0
        });
        $('.slick-slide').css('z-index', '1');
        TweenMax.to($('.slick-active'), 0.9, {
            x: 0,
            zIndex: 2
        });
    });

//SLICK INIT
    $slider.slick({
        speed: slideDuration,
        dots: true,
        waitForAnimate: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
    })

//PREV
    $('.slick-prev').on('mouseenter', function () {
        TweenMax.to($('.slick-track'), 0.6, {
            marginLeft: "180px",
            ease: Quad.easeOut
        });
        TweenMax.to($('.slick-current'), 0.6, {
            x: -100,
            ease: Quad.easeOut
        });
    });

    $('.slick-prev').on('mouseleave', function () {
        TweenMax.to($('.slick-track'), 0.4, {
            marginLeft: 0,
            ease: Sine.easeInOut
        });
        TweenMax.to($('.slick-current'), 0.4, {
            x: 0,
            ease: Sine.easeInOut
        });
    });

//NEXT
    $('.slick-next').on('mouseenter', function () {

        TweenMax.to($('.slick-track'), 0.6, {
            marginLeft: "-180px",
            ease: Quad.easeOut
        });
        TweenMax.to($('.slick-current'), 0.6, {
            x: 100,
            ease: Quad.easeOut
        });
    });

    $('.slick-next').on('mouseleave', function () {
        TweenMax.to($('.slick-track'), 0.4, {
            marginLeft: 0,
            ease: Quad.easeInOut
        });
        TweenMax.to($('.slick-current'), 0.4, {
            x: 0,
            ease: Quad.easeInOut
        });
    });


//Der Teil von Veith - geht der überhaupt hier? oder seperat?
    /*

    fullscreen = (elem)=>{if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    // optionales Attribut
        elem.setAttribute("fullscreen", true);
    }
    */
}