import "../scss/vendor.scss";
import "../scss/main.scss";

import 'owl.carousel';

$(document).ready(function(){
    $('.slider-carousel').owlCarousel(
        {
            nav: true,
            dots: false,
            items: 1
        }
    );

    $('.packs-carousel').owlCarousel(
        {
            nav: true,
            dots: false,
            items: 1,
            responsive:{
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                860: {
                    items: 3
                },
                1280: {
                    items: 4
                },
                1600: {
                    items: 5
                }
                
            },
            loop: true,
            margin: 20
        }
    );
});