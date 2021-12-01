function ouTer(e)
{
  var es = '#' + e;
  $('html, body').animate({
    scrollTop: $(es).offset().top - $("header").outerHeight() + "px"
  }, 1);
}

// LOADING
(function () {
    window.onload = function () {
      var preloader = document.querySelector('.page-loading');
      preloader.classList.remove('active');
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    };
  })();

  // HEADER
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //>=, not <=
    if (scroll >= 100) {
        $("header").addClass("shadow-sm");
      }else{
      $("header").removeClass("shadow-sm");
    }
}); //missin

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });

  AOS.init();

//   ANIMATION
// tsParticles.load("tsparticles", { preset: "links" });
