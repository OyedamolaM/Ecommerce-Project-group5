import { cart } from "./shop cart.js";

let productsHtml = '';

products.forEach((product) =>{
productsHtml += `
    <div class="row">
            <div class="row-img">
              <img src="${product.image}">  
            </div>
            <h3>${product.name}</h3>
            <div class="stars">
              <a href="#"><i class="ri-star-fill"></i></a>
              <a href="#"><i class="ri-star-fill"></i></a>
              <a href="#"><i class="ri-star-fill"></i></a>
              <a href="#"><i class="ri-star-fill"></i></a>
              <a href="#"><i class="ri-star-half-fill"></i></a>
              <a href="#">${product.rating.stars}</a>
            </div>
            <div class="row-in">

              <button class="row-left js-add-to-cart" 
              data-product-id="${product.id}">
                Add to Cart
                  <i class="ri-shopping-cart-2-fill"></i>
              </button>
              <div class="row-right">
                <h6>#${(product.pricecent / 100).toFixed(2)}</h6>
              </div>
            </div>
          </div>
`;
});
// console.log(productsHtml);
document.querySelector('.js-products-grid').
innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click', () =>{
   const productId = button.dataset.productId; 

   let matchingItem;
          // to check if the product is already in the cart//
   cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item
    }
   });

   if (matchingItem) {
    matchingItem.quantity += 1;
   } else {
    cart.push({
      productId: productId,
      quantity: 1
     });
   }

   let cartQuantity = 0;

   cart.forEach((item) => {
cartQuantity += item.quantity;
   });

document.querySelector('.js-cart-quanitity') 
 .innerHTML = cartQuantity

    });
});