const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");
const mobileMenuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector(".mobile-menu");
const productDetails = document.querySelector(".product-detail");
const shoppingCar = document.querySelector(".navbar-shopping-cart");

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>

const productDB =[];
productDB.push({
    name:"White Candle",
    price:"120",
    image:"https://images.pexels.com/photos/2402326/pexels-photo-2402326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productDB.push({
    name:"Red Candle",
    price:"150",
    image:"https://images.pexels.com/photos/278600/pexels-photo-278600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productDB.push({
    name:"Purple Candle",
    price:"160",
    image:"https://images.pexels.com/photos/1071285/pexels-photo-1071285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productDB.push({
    name:"Bunch o' Candles",
    price:"200",
    image:"https://images.pexels.com/photos/33197/tealight-candles-tea-lights-wax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});


navbarEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuLogo.addEventListener("click", toggleMobileMenu);
shoppingCar.addEventListener("click", toggleShoppingCar);

function toggleShoppingCar(){
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetails.classList.toggle("inactive")
    
}

function toggleDesktopMenu(){
    productDetails.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    
    productDetails.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}



