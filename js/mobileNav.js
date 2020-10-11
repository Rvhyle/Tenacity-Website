const burger = document.querySelector('#menu');
const mobileNav = document.querySelector('.mobileNav');
const exit = document.querySelector('.exit');
const items = document.querySelector('.parent-item');

// Burger
burger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
})

// exit 
exit.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
})

// items
items.addEventListener('click',function(e) {
    if(e.target.classList.contains('burger-item')) {
        mobileNav.classList.toggle('show');
    }
})

