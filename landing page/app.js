// select element 
const productsEl = document.querySelector(".n-content"); 
// let shoppingBasket = document.querySelector(".shoppingBasket");

// RENDER PRODUCTS?
 function renderProducts(){
  products. forEach((product) => {
    
    

    productsEl.innerHTML += `
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
 };
 renderProducts();



// shoppingBasket.onclick = () =>{
//   body.classList.add("active")

    // cart array
// let cart = [];

        // add to cart 
 function addToCart(id) {
  
  // check if product already exist in cartb
    // if (cart.some((item) => item.id === id)){
    //   alert("product already in cart")
    // }else {
    //   const item = products.find((product) => product.id === id);
    //   cart.push(item);
    // }

  console.log(id);
  
   
   
 }