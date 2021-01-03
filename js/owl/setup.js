/*$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
})*/

$(() => {

    $('#carousel1').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });

    $('#carousel2').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });



});