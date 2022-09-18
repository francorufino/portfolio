$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  var type = new Typed('.typing', {
    strings: ['FrontEnd Developer', 'Website Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // var type = new Typed('.typing2', {
  //   strings: ['FrontEnd Developer', 'Website Developer', 'Freelancer'],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });

  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

var year = new Date().getFullYear();
var date = ` Andreza Campbell &copy; ${year}. |  All rights reserved`;
document.getElementsByTagName('footer')[0].innerHTML = date;
