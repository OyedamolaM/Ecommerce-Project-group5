// let newArrivalsHTMl ="";
import {cart, addToCart} from "../data/cart.js"
import {newArrivals} from "../data/products.js"
import {topSelling} from "../data/products.js"
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
        // let matchingProduct;
          // newArrivals.forEach((products) => {
          //   if (products.id = matchingItemId){
          //       matchingProduct = products
          //   }
          //   console.log(matchingProduct);
          // }
          // )
            
        updateCartQuantity();       
    });
  });
  

  

    

  // let checkOutlist = [];
  // function onInIt() {
  //   ArrProducts.forEach((item, key) => {
  //    let div = document.createElement("div");
  //     div.classList.add("item");
  
  //      div.innerHTML=`
   
  //            <img class="img-flud mb-3" src="/img/${item.image}" width="100%">
  //            <div class="ranting">
  //              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
  //              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
  //              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
  //              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
  //              <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
  //            </div>
  //            <h5 class="p-name">itailina Shoe</h5>
  //            <h4 class="p-price">$92.00</h4>
  //            <button class="buy-btnn">Buy now</button>
  //           </div>
  
  
  //       `;
  //      products.appendChild(div);
  
  //   });
  // }
  // onInIt()
  
  
  // function addTocart(Id) {
  //   console.log(ArrProducts[Id]);
  //   if (checkOutlist[Id] == null) {
  //     checkOutlist[Id] = ArrProducts[Id];
  //   }
  // }

























  
  //HOC LANDING JAVASCRIPT COMMENTED
  // let NewArrivalProductsHtml = "";
// // // rendering of New Arrivals section
// // newArrivals.forEach((product) => {
// //     NewArrivalProductsHtml +=`
// //     <div class="col-md-3">
// //             <div class="thumbnail">
// //                 <img src='${product.image}' alt="tape details" style="width:100%; height:300px" class="rounded-3">
// //                 <div class="row">
// //                     <div class="col-md-12">
// //                      <span class="label label-primary">${product.name}</span>
// //                      <div class="row">
// //                         <div class="col-md-8" style="width: 100;">
// //                          <span class="sr-only">Four out of Five Stars</span>
// //                          <span class="glyphicon glyphicon-star"></span>
// //                          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
// //                          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
// //                          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
// //                          <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
// //                          <span class="label label-success">${product.rating.count}</span>
// //                         </div>
// //                        </div>
// //                        <div class="row">
// //                         <div class="col-md-6">
// //                             <h5 class="product-price">$${(product.priceCents /100).toFixed(2)}</h5>
// //                         </div>
// //                        </div>
// //                        <div class="row">
// //                             <div class="col-md-12">
// //                                 <button class="add-to-cart-button button-primary js-add-to-cart" data-product-name="${product.name}">Add to cart</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //             </div>
// //             </div>
// //           </div>
// //     `
// // //  

            
// // })

// // document.querySelector('.new-arrivals-grid').innerHTML = NewArrivalProductsHtml; 





// let topSellingHTML = "";
// // rendering of New Top selling section
// topSelling.forEach((product) => {
//     topSellingHTML +=`
//     <div class="col-md-3">
//             <div class="thumbnail">
//                 <img src='${product.image}' alt="tape details" style="width:100%; height:300px" class="rounded-3">
//                 <div class="row">
//                     <div class="col-md-12">
//                      <span class="label label-primary">${product.name}</span>
//                      <div class="row">
//                         <div class="col-md-8" style="width: 100;">
//                          <span class="sr-only">Four out of Five Stars</span>
//                          <span class="glyphicon glyphicon-star"></span>
//                          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
//                          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
//                          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
//                          <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
//                          <span class="label label-success">${product.rating.count}</span>
//                         </div>
//                        </div>
                    
//                        <div class="row">
//                         <div class="col-md-6">
//                             <h5 class="product-price">$${product.priceCents /100}</h5>
//                         </div>
//                        </div>
//                        <div class="row">
//                             <div class="col-md-12">
//                                 <button class="add-to-cart-button button-primary js-add-to-cart" data-product-name="${product.name}">Add to cart</button>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//             </div>
//           </div>
//     `
// //  

            
// })

// document.querySelector('.top-selling').innerHTML = topSellingHTML; 


// document.querySelectorAll('.js-add-to-cart')
//     .forEach((button) => {
//             button.addEventListener("click", () =>{
//                 const productName = button.dataset.productName
//                 cart.push({
//                     productName: productName,
//                     quantity: 1
//                 });
//                 console.log(cart);
//             });
//     }

//     );