const burger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container');

function showMobileContainer() {
    mobileContainer.classList.toggle('d-block'); 
    burger.classList.toggle('active');
}

burger.addEventListener('click', showMobileContainer);

const swiper = new Swiper('.swiper-product', {
  slidesPerView: 4,
  loop: true,
  speed: 500,
  spaceBetween: 48,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      // when window width is >= 0px
      0: {
          slidesPerView: 1,
          spaceBetween: 48,
      },
      // when window width is >= 480px
      768: {
          slidesPerView: 2,
          spaceBetween: 48,
      },
      1125: {
          slidesPerView: 3,
          spaceBetween: 48,
      },
      // when window width is >= 640px
      1500: {
          slidesPerView: 4,
          spaceBetween: 48,
      }
  }
});

let swiperEvents;

function checkMediaQuery() {
    if (window.matchMedia("(min-width: 1025px)").matches) {
        swiperEvents?.destroy();
        swiperEvents = null;
    } else if (!swiperEvents) {
        swiperEvents = new Swiper('.swiper-events', {
            loop: true,
            navigation: {
                nextEl: '.swiper-events-button-next',
                prevEl: '.swiper-events-button-prev',
            },
        });
    }
}

checkMediaQuery();
window.addEventListener('resize', checkMediaQuery);
window.addEventListener('orientationchange', () => setTimeout(checkMediaQuery, 300));