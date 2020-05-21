const jQuery = require('./jquery-2.2.4.min.js')
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
;(function($){
    "use strict"


    var nav_offset_top = $('header').height() + 50; 
/*-------------------------------------------------------------------------------
Navbar 
-------------------------------------------------------------------------------*/

//* Navbar Fixed  
function navbarFixed(){
    if ( $('.header-area').length ){ 
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();   
            if (scroll >= nav_offset_top ) {
                $(".header-area").addClass("navbar-fixed");
            } else {
                $(".header-area").removeClass("navbar-fixed");
            }
        });
    };
};
navbarFixed();









if(document.getElementById("number-section")){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
}


// //------- Owl Carusel  js --------//




// $(document).ready(function() {

//     $('.active-testimonial-carusel').owlCarousel({
//         items: 2,
//         loop: true,
//         margin: 30,
//         autoplayHoverPause: true,
//         smartSpeed:500,
//         dots: true,
// // autoplay: true,
// responsive: {
//     0: {
//         items: 1
//     },
//     480: {
//         items: 1,
//     },
//     992: {
//         items: 2,
//     }
// }
// });



//       /*-------------------------------------------------------------------------------
//     Brand Slider 
//     -------------------------------------------------------------------------------*/
//     $(".brand-carousel").owlCarousel({
//         items: 1,
//         autoplay:false,
//         loop:true,
//         nav:false,
//         margin: 30,
//         dots:false,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             420: {
//                 items: 1,
//             },
//             480: {
//                 items: 3,
//             },
//             768: {
//                 items: 3,
//             },
//             992: {
//                 items: 5,
//             }
//         }
//       });






// });




// //------- mailchimp --------//  
// function mailChimp() {
//     $('#mc_embed_signup').find('form').ajaxChimp();
// }
// mailChimp();

// //-------- Counter js --------//
// $(window).on("load", function() {


//     $('.portfolio-filter ul li').on('click', function () {
//         $('.portfolio-filter ul li').removeClass('active');
//         $(this).addClass('active');

//         var data = $(this).attr('data-filter');
//         $workGrid.isotope({
//             filter: data
//         });
//     });

//     if (document.getElementById('portfolio')) {
//         var $workGrid = $('.portfolio-grid').isotope({
//             itemSelector: '.all',
//             percentPosition: true,
//             masonry: {
//                 columnWidth: '.grid-sizer'
//             }
//         });
//     }
// });


})(jQuery)