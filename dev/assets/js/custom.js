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
  });