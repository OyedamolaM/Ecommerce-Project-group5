// import {cart,} from '../data/cart.js'; 
// import {newArrivals, topSelling } from '../data/products.js';

// let tableBody = "";


// cart.forEach((cartItem) =>{
//     const productId = cartItem.productId;
// //looping through cart to get product Id and assigning it productId variable

//     let matchingProduct;
// //looping through product cart and checking for a match between the productId generated and the product Id in the newarrival product list
//     newArrivals.forEach((product)=> {
//         if (product.id === productId){
//             //if there is a match in product ID assign that product object to a variable that can be reused 
//             matchingProduct = product
            
            
//         }
        
//     });
    
// tableBody +=  `<tr class="cart-item-container">
//   <td><span class="delete-cart" data-product-id="${matchingProduct.id}"><i class="fas fa-trash-alt" ></i></span>
//   </td>

//     <td><img src="${matchingProduct.image}"></td>
//     <td>
//       <h5>${matchingProduct.name}</h5>
//     </td>
//     <td>$${(matchingProduct.priceCents/10).toFixed(2)}</td>
//     <td><input class="w-25 pl-1" value="${cartItem.quantity}" type="number" ></td>
//     <td>$100.00</td>
// </tr>`;

// });
// document.querySelector(".table-body").innerHTML = tableBody
// // console.log(matchingProduct);

// // const deleteCart = document.querySelectorAll(".delete-cart")
// // deleteCart.forEach((link) =>{
// //     deleteSpan.addEventListener("click", () =>{
// //        const productId = link.dataset.productId;
// //        console.log(productId);
// //        removeCart(productId);
// //       document.remove()
       
// //           const container =  document.querySelector(`.cart-item-container-${productId}`)
// //           container.remove()
// // }
// // )

// // })


// // function removeCart(productId) {
// //     const newCart = [];

// //     cart.forEach((cartItem) =>{
// // if (cartItem.id === productId){
// //     console.log(cartItem.id);
// //     newCart.push(cartItem);
// // }

// //     }
// // );
// //     cart = newCart;
// //   }