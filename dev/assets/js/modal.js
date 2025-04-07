const triger = document.querySelector('#triger')
const modal = document.querySelector('.modal')
const close = document.querySelector('.btn-close')
const body = document.querySelector('body')

function showModal() {
    modal.classList.add('d-flex')
    body.classList.add('overflow-hidden')
}

function closeModal() {
    modal.classList.remove('d-flex')
    body.classList.remove('overflow-hidden')
}

triger.addEventListener('click', showModal)
close.addEventListener('click', closeModal)