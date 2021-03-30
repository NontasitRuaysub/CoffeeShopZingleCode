// Toggle Navbar menu on mobile Screen
let toggleBar = document.querySelector('.navbar-burger');
let navbarMenu = document.querySelector('.navbar-menu');

function toggleShow() {
    toggleBar.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
}

toggleBar.addEventListener('click', toggleShow);