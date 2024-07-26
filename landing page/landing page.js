// let newArrivalsHTMl ="";
import {cart, addToCart} from "../data/cart.js"
import {newArrivals} from "../data/products.js"
import {topSelling} from "../data/products.js"
console.log(cart);
let NewArrivalHtml = "";

  
  newArrivals.forEach((product) =>{
      NewArrivalHtml += `
        <div class="col">
        <div class="col-img">
          <img src="${product.image}" alt="tape details">
        </div>
        <div class="col-icon">
          <a ><i class="ri-heart-line"></i></a>
          <a ><i class="ri-eye-line"></i></a>
          <a ><i class="ri-shopping-cart-fill js-add-to-cart"  data-product-id="${product.id}"></i></a>
        </div>
        <h5 class="p-name">${product.name}</h5>
    <h4 class="p-price">$${(product.priceCents/100).toFixed(2)}</h4>
    <button class="buy-btnn js-add-to-cart" data-product-id="${product.id}">>Buy now</button>
  </div>`
  })



  
  document.getElementById("new-arrival-products").innerHTML = NewArrivalHtml
  
  
  let topSellingHTML = "";
  topSelling.forEach((product) =>{
      topSellingHTML += `
        <div class="col">
        <div class="col-img">
          <img src="${product.image}" alt="tape details">
        </div>
        <div class="col-icon">
          <a ><i class="ri-heart-line"></i></a>
          <a ><i class="ri-eye-line"></i></a>
          <a ><i class="ri-shopping-cart-fill js-add-to-cart" data-product-id="${product.id}"></i></a>
        </div>
        <h5 class="p-name">${product.name}</h5>
        <h4 class="p-price">$${(product.priceCents/100).toFixed(2)}</h4>
        <button class="buy-btnn js-add-to-cart" data-product-id="${product.id}">>Buy now</button>

  </div>`
  })

  document.getElementById("top-selling-products").innerHTML = topSellingHTML
  
  
  

  //cart quantity function
  function updateCartQuantity(cartItem) {
    let cartQuantity = 0;
                cart.forEach((cartItem) =>{
                  cartQuantity += cartItem.quantity
                });
                document.querySelector(".cart-quantity").innerHTML = cartQuantity
                console.log (cart);
                
  }
  
let addToCartClass = document.querySelectorAll(".js-add-to-cart")  
  addToCartClass.forEach((button)=>{
    button.addEventListener('click', ()=>{
      const productId = button.dataset.productId;
        addToCart(productId);
       
        updateCartQuantity();       
    });
  });