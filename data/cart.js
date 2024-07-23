export let cart =[
    {
productId: "jersey1",
quantity: 2
},
{
    productId: "jersey2",
    quantity: 1
    }
]

export function addToCart(productId) {
    let matchingItem;
      cart.forEach((cartItem)=>{
          if (productId === cartItem.productId){
            matchingItem = cartItem;
          } 
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
  }
// export let cart = (localStorage.getItem('cart'));

// if(!cart){
//     cart =[
//         {
//         productId: "jersey1",
//         quantity: 2  
//     },
//     {
//         productId: "jersey2",
//         quantity: 2  
//     }
//     ];
// }
// export function cartLocalStorage(){
//     localStorage.setItem('cart', JSON.stringify(cart));
// }


// 
//     cartLocalStorage();
//   }

//   export function removeCart(productId) {


//     cart.forEach((cartItem) =>{
// if (cartItem.productId !== productId){
//     console.log(productId);
//     console.log(cartItem.productId);
   
//     cart.pop(productId);
// }
//     }
// );
// cartLocalStorage();
//   }

   