let ArrProducts=[
  {
    id:1,
    name:  "T-shirt with tape details",
    image: "images/2.jpg",
    rating: "4.5/5",
    price: "100"
  },
  {
    id:2,
    name:  "T-shirt with tape details",
    image: "img/n2.png",
    rating: "4.5/5",
    price: "100"
  },

  {
    id:3,
    name:  "T-shirt with tape details",
    image: "img/n3.png",
    rating: "4.5/5",
    price: "100"
  },

  {
    id:4,
    name:  "T-shirt with tape details",
    image: "img\n4.",
    rating: "4.5/5",
    price: "100"
  },

  {
    id:5,
    name:  "T-shirt with tape details",
    image: "img\n5.",
    rating: "4.5/5",
    price: "100"
  },

  {
    id:6,
    name:  "T-shirt with tape details",
    image: "images\n6.",
    rating: "4.5/5",
    price: "100"
  },

  {
    id:7,
    name:  "T-shirt with tape details",
    image: "img\n7.",
    rating: "4.5/5",
    price: "100"
  },

  {
    id:8,
    name:  "T-shirt with tape details",
    image: "img\n8.",
    rating: "4.5/5",
    price: "100"
  },

];

const body = document.querySelector("body");
var products = document.getElementById("products");

let checkOutlist = [];
function onInIt() {
  ArrProducts.forEach((item, key) => {
   let div = document.createElement("div");
    div.classList.add("item");

     div.innerHTML=`
 
           <img class="img-flud mb-3" src="img/${item.image}" width="100%">
           <div class="ranting">
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
           </div>
           <h5 class="p-name">itailina Shoe</h5>
           <h4 class="p-price">$92.00</h4>
           <button class="buy-btnn">Buy now</button>
          </div>


      `;
     products.appendChild(div);

  });
}
onInIt()


function addTocart(Id) {
  console.log(ArrProducts[Id]);
  if (checkOutlist[Id] == null) {
    checkOutlist[Id] = ArrProducts[Id];
  }
}



