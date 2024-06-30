
const products = [{
    image: 'assets/image 7.png,',
    name: 'T-Shirt with tape details',
    rating: {
        stars: 4.5,
        count: 87,
    },
    priceCents: 1090

},
{
    image: 'assets/skinny fit jeans.png',
    name: 'Skinny-fit Jeans ',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

}
]

let productsHTML = "";

products.forEach((product) => {
 productsHTML +=`
 <div class="thumbnail">
              <!-- <a href="/w3images/fjords.jpg" target="_blank"> -->
                <img src="${product.image}" style="width:100%; height:300px" class="rounded-3">
                <div class="row">
                    <div class="col-md-12">
                     <span class="label label-primary">${product.name}</span>
                     <div class="row">
                        <div class="col-md-8" style="width: 100;">
                         <span class="sr-only">Four out of Five Stars</span>
                         <span class="glyphicon glyphicon-star"></span>
                         <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                         <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                         <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                         <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                         <span class="label label-success">${product.rating.count}</span>
                        </div>
                       </div><!-- end row -->
                       <div class="row">
                        <div class="col-md-6">
                            <h5 class="product-price">${product.priceCents /100}</h5>
                        </div>
                       </div>
                    </div>
              <!-- </a> -->
            </div>
            </div>`

            
})
console.log(productsHTML);

document.querySelector('.js-product-grid').innerHTML = productsHTML; 


