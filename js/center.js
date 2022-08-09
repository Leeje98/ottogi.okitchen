
$(function() {
  
    $('.your').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

        // arrows : false,
        // dots: true,

    
        centerMode: true,
        centerPadding: '60px',
        centerScale: 1.2,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
        ]
      });

})




// $(document).ready(function(){
//     $('.your').slick({

//         $('.center').slick({
//             centerMode: true,
//             centerPadding: '60px',
//             slidesToShow: 3,
//             responsive: [
//               {
//                 breakpoint: 768,
//                 settings: {
//                   arrows: false,
//                   centerMode: true,
//                   centerPadding: '40px',
//                   slidesToShow: 3
//                 }
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   arrows: false,
//                   centerMode: true,
//                   centerPadding: '40px',
//                   slidesToShow: 1
//                 }
//               }
//             ]
//           });
//     });
//   });



// console.clear();

// $('.slider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });