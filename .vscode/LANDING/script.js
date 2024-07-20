
 let ArrProducts =[
  {

    id:1,
    name: "HTML",
    image:"ada.jpg",
    price:"1000",
    rating:5,
  },
  {

    id:2,
    name: "CSS",
    image:"image/ahii.jpg",
    price:"1000",
    rating:5,
  },
  {

    id:1,
    name: "HTML",
    image:"images/istockphoto-1330867859-612x612.jpg",
    price:"1000",
    rating:5,
  },
  {

    id:1,
    name: "HTML",
    image:"images/istockphoto-1330867859-612x612.jpg",
    price:"1000",
    rating:5,
  },
  {

    id:1,
    name: "HTML",
    image:"images/istockphoto-1330867859-612x612.jpg",
    price:"1000",
    rating:5,
  },
  {

    id:1,
    name: "HTML",
    image:"images/istockphoto-1330867859-612x612.jpg",
    price:"1000",
    rating:5,
  },

 ]


 const body = document.querySelector("body");
 products = document.querySelector(".products");

let checkOutList =[

];
  function onInIt() {
    ArrProducts.forEach((item, key) => {
      
      let div = document.createElement("div");
         div.classList.add('item');

       div.innerHTML=`
       <img src="image/${item.image}" />;
       <div class="name">${item.name}</div>
       <div class="price">$<small> ${item.price}</div>
       <button onclick="addToCart(${key})">add to cart </button> 
       `;

       products.appendChild(div);
    });
  }
  onInIt();

  
  function addToCart(Id) {
    console.log(ArrProducts[Id]);
if (checkOutList [Id] == null){
  checkOutList [Id]  = ArrProducts[Id];
  
}
  };

