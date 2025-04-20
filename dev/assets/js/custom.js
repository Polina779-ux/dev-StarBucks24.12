const burger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container');

function showMobileContainer() {
    mobileContainer.classList.toggle('d-block'); 
    burger.classList.toggle('active');
}

burger.addEventListener('click', showMobileContainer);

