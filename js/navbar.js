const navBar = document.querySelector('.navContainer');

window.addEventListener('scroll', () => {
    if(scrollY >= 204) {
        navBar.classList.add('navScroll');
    }else if(scrollY < 204) {
        navBar.classList.remove('navScroll');
    }
})
