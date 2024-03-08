const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");
const mobileMenuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector(".mobile-menu");
const productDetails = document.querySelector(".product-detail");
const shoppingCar = document.querySelector(".navbar-shopping-cart");   
const cardsContainer = document.querySelector(".cards-container"); 
const itemDetailsCloseBtn = document.querySelector(".item-detail-close");
const itemDetailMenu = document.querySelector(".item-detail");

// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
//     <div class="item-info">
//       <p>$35,00</p>
//       <p>Bike</p>
//       <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
//       <button class="primary-button add-to-cart-button">
//         <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//         Add to cart
//       </button>
//     </div>






itemDetailsCloseBtn.addEventListener("click", closeItemDetailMenu);
navbarEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuLogo.addEventListener("click", toggleMobileMenu);
shoppingCar.addEventListener("click", toggleShoppingCar);

function closeItemDetailMenu(){
    itemDetailMenu.classList.add("inactive");
}

function openItemDetailMenu(){
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetails.classList.add("inactive")
    itemDetailMenu.classList.remove("inactive");
}

function toggleShoppingCar(){
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    itemDetailMenu.classList.add("inactive");
    productDetails.classList.toggle("inactive")
    
}

function toggleDesktopMenu(){
    productDetails.classList.add("inactive");
    itemDetailMenu.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    
    productDetails.classList.add("inactive");
    itemDetailMenu.classList.add("inactive");   
    mobileMenu.classList.toggle("inactive");
}


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


for (x of productDB){
    const productCardDiv = document.createElement("div");
    productCardDiv.classList.add("product-card");
  

    const productImg =  document.createElement("img");
    productImg.setAttribute("src", x.image);
    productImg.addEventListener("click", openItemDetailMenu);

    const productInfoDiv = document.createElement("div");
    productInfoDiv.classList.add("product-info");
    
    
    const div = document.createElement("div");
    
    
    const productPrice = document.createElement("p");
    productPrice.innerText = '$' + x.price;
    const productName = document.createElement("p");
    productName.innerText = x.name;

    const productFigure = document.createElement("figure");
   

    const figureImg =  document.createElement("img");
    figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productCardDiv.append(productImg, productInfoDiv);
    productInfoDiv.append(div, productFigure);
    div.append(productPrice, productName);
    productFigure.append(figureImg);

    cardsContainer.appendChild(productCardDiv);

}