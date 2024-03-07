const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");
const mobileMenuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector(".mobile-menu");

navbarEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuLogo.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}