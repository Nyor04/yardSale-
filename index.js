const piupiu = document.querySelector(".desktop-menu");
const pato = document.querySelector(".navbar-email");

pato.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    piupiu.classList.toggle("inactive")
}