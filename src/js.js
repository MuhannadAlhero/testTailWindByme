const mobileButton = document.querySelector('#mobile-btn')
const mobile = document.querySelector('#mobile')
mobileButton.addEventListener('click',()=> {
    mobile.classList.toggle('hidden')
})