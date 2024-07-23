import {cart} from '../data/cart.js'; 
import { newArrivals, topSelling} from '../data/products.js';
import {removeCart} from '../data/cart.js';

let cartTable = "";
//cartProduct would be the name of the object of the cart
cart.forEach((cartProduct) =>{
    //productId is asigned variable to access each of the items id within the cart
    const productId = cartProduct.productId
    
     let matchingProduct;
    newArrivals.forEach((products)=>{
        
        if (products.id === productId){
            matchingProduct = products
        }
        
})
 

 cartTable +=  `<tr class="cart-item-container">
   <td><span class="delete-cart" data-product-id="${matchingProduct.id}"><i class="fas fa-trash-alt" ></i></span>
   </td>

     <td><img src="${matchingProduct.image}"></td>
     <td>
       <h5>${matchingProduct.name}</h5>
     </td>
     <td>$${(matchingProduct.priceCents/10).toFixed(2)}</td>
     <td><input class="w-25 pl-1" value="${cartProduct.quantity}" type="number" ></td>
     <td>$100.00</td>
 </tr>`;
})


            
         
    

document.querySelector(".table-body").innerHTML = cartTable



const deleteCart = document.querySelectorAll(".delete-cart")
deleteCart.forEach((deletebutton) =>{
    deletebutton.addEventListener("click", () =>{
       const productIdToBeDeleted = deletebutton.dataset.productId;
       removeCart(productIdToBeDeleted);
       console.log(cart);
    //   document.remove()
       
        //   const container =  document.querySelector(`.cart-item-container-${productId}`)
        //   container.remove()
}
)

})

   
