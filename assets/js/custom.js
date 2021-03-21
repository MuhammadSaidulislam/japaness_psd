// navbar setting
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbarSticky").style.display = "none";
    document.getElementById("navbarStickyTwo").style.display = "block";
  } else {
     document.getElementById("navbarSticky").style.display = "block";
     document.getElementById("navbarStickyTwo").style.display = "none";
  }
}

// aos slider
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// slider carousel
$('.owl-carousel').owlCarousel({
  items: 5,
  loop: true,
  nav: false,
  margin: 10,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,

    },
    1000: {
      items: 5,
    }
  }
})



// slider carousel
$('.owl-carousel').owlCarousel({
  items: 5,
  loop: true,
  nav: true,
  margin: 10,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,

    },
    1000: {
      items: 5,
    }
  }
  
})
// collapse course js

$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});

// mobile responsive navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// google map

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }