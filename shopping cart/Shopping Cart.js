import {cart} from '../data/cart.js'; 
import { newArrivals, topSelling} from '../data/products.js';
import {removeCart} from '../data/cart.js';
console.log(cart);

let cartTable = "";
//cartProduct would be the name of the object of the cart
let subTotal = 0;
cart.forEach((cartProduct) =>{
  //productId is asigned variable to access each of the items id within the cart
  const productId = cartProduct.productId
  
   let matchingProduct;
  // topSelling,
 newArrivals.forEach((products)=>{
      if (products.id === productId){
          matchingProduct = products
          subTotal = parseInt(matchingProduct.priceCents/10) + subTotal
      }
           
      // let matchingProdut;
          // newArrivals.forEach((products) => {
          //   if (products.id = matchingItemId){
          //       matchingProdut = products
          //   }
          //   console.log(matchingProdut);
          // }
          // )
          
})

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


})  

document.querySelector(".table-body").innerHTML = cartTable

let shippingTotal = document.querySelector('.shipping').innerHTML
document.querySelector('.subtotal').innerHTML = subTotal

let total = parseInt(shippingTotal) + parseInt(subTotal)

document.querySelector(".total-amount").innerHTML = `$${total}`
document.querySelector('.shipping').innerHTML = `$${shippingTotal}`
document.querySelector('.subTotal').innerHTML = `$${subTotal}`

const deleteCart = document.querySelectorAll(".delete-cart")
deleteCart.forEach((deletebutton) =>{
    deletebutton.addEventListener("click", () =>{
       const productIdToBeDeleted = deletebutton.dataset.productId;
       removeCart(productIdToBeDeleted);

      const container = document.querySelector(`.deleted-product-class${productIdToBeDeleted}`)
         console.log(container);
         container.remove()

    //   document.remove()
            //   container.remove()
}
)

})



   
