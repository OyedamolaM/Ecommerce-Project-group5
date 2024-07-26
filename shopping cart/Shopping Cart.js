import {cart} from '../data/cart.js'; 
import { newArrivals, topSelling} from '../data/products.js';
import {removeCart} from '../data/cart.js';

let cartTable = "";
//cartProduct would be the name of the object of the cart
let subTotal = 0;
cart.forEach((cartProduct) =>{
  //productId is asigned variable to access each of the items id within the cart
  const productId = cartProduct.productId
  
   let matchingProduct;
  // topSelling,
  function addToCartLoop(sectionProduct){
    sectionProduct.forEach((products)=>{
      if (products.id === productId){
          matchingProduct = products
          subTotal = parseInt(matchingProduct.priceCents/10) + subTotal


          cartTable +=  `<tr class="cart-item-container deleted-product-class${matchingProduct.id}">
          <td><span class="delete-cart" data-product-id="${matchingProduct.id}"><i class="fas fa-trash-alt" ></i></span>
          </td>
         
            <td><img src="${matchingProduct.image}"></td>
            <td>
              <h5>${matchingProduct.name}</h5>
            </td>
            <td>$${(matchingProduct.priceCents/10).toFixed(2)}</td>
            <td><input class="w-25 pl-1" value="${cartProduct.quantity}" type="number" ></td>
            <td>${(matchingProduct.priceCents/10) * cartProduct.quantity }</td>
         </tr>`;
      } 
})
  }
  addToCartLoop(newArrivals)
 addToCartLoop(topSelling)



})  

document.querySelector(".table-body").innerHTML = cartTable

//function for the table calculation
function totalTableCalculation(){
  let shippingTotal = document.querySelector('.shipping').innerHTML
document.querySelector('.subtotal').innerHTML = subTotal

let total = parseInt(shippingTotal) + parseInt(subTotal)

document.querySelector(".total-amount").innerHTML = `$${total}`
document.querySelector('.shipping').innerHTML = `$${shippingTotal}`
document.querySelector('.subTotal').innerHTML = `$${subTotal}`
}
totalTableCalculation();


const deleteCart = document.querySelectorAll(".delete-cart")
deleteCart.forEach((deletebutton) =>{
    deletebutton.addEventListener("click", () =>{
       const productIdToBeDeleted = deletebutton.dataset.productId;
       removeCart(productIdToBeDeleted);

      const container = document.querySelector(`.deleted-product-class${productIdToBeDeleted}`)
         console.log(container);
         container.remove()
}
)
})



   
