export let cart = JSON.parse(localStorage.getItem('cart'));

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
            
            matchingItemId = matchingItem.productId
          } 
          console.log(matchingItemId);
      
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