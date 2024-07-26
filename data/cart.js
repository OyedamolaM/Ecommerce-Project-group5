export let cart = JSON.parse(localStorage.getItem('cart'));

// import { newArrivals } from "./products";

 if(!cart){
let cart = [
        ];
 }
    
    



//Local Storage JS function code
function CartLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
  }

export function addToCart(productId) {
    let matchingItem;
    let matchingItemId;
      cart.forEach((cartItem)=>{
          if (productId === cartItem.productId){
            matchingItem = cartItem;
            // console.log(matchingItem.productId);
            // console.log(cartItem);
            matchingItemId = matchingItem.productId
          } 
          console.log(matchingItemId);
          
          
          // let matchingProduct;
          // newArrivals.forEach((products) => {
          //   if (products.id = matchingItemId){
          //       matchingProduct = products
          //   }
          //   console.log(matchingProduct);
          // }
          // )
          
          
          
          // console.log(matchingItemId);
          // cart.forEach((cartProduct) =>{
          //   //productId is asigned variable to access each of the items id within the cart
          //   const productId = cartProduct.productId
            
          //    let matchingProduct;
          //   // topSelling,
          //   newArrivals.forEach((products)=>{
          //       if (products.id === productId){
          //           matchingProduct = products
          //       }
          //       console.log(matchingProduct);
                
          // })
      });
      if(matchingItem){
            matchingItem.quantity +=1
          }
            else{
            cart.push(
      {
        productId: productId,
        quantity: 1
      })
      
          }
          CartLocalStorage();
  }

  export function removeCart(productIdToBeDeleted) {
    const newCart = [];

    cart.forEach((cartItem) =>{
if (cartItem.productId !== productIdToBeDeleted){
    newCart.push(cartItem);
}

    }
);
    cart = newCart;

    CartLocalStorage();
  }

  

//   export function removeCart(productId) {


//     cart.forEach((cartItem) =>{
// if (cartItem.productId !== productId){
//     console.log(productId);
//     console.log(cartItem.productId);
   
//     cart.pop(productId);
// }
//     }
// );
// 