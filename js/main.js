AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$(document).ready(function () {
  $('#hero-slider').owlCarousel({
      loop: true,
      margin: 8,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimport:5000,
      autoplayHoverPause:false,
      smartSpeed: 1000,
      navText:["prev", "next"],
      responsive: {
          0: {
              items: 1,
          },
          768: {
              items: 1,
          },
          1024: {
              items: 1,
          }
      }
  });

  $('#project-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      smartSpeed: 1000,
      margin: 10,
      navText:["PREV", "NEXT"],
      responsive: {
          0: {items: 1,
             nav: false,
             margin: 0,
          },
          768: {items: 2,
             
          },
          1140: {items: 2,
                center: true,
                dots: true,
          }
      }
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      items:1,
      smartSpeed:800,
      
  })
});