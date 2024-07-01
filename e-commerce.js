
//products list for New Arrivals section
const newArrivals = [{
    image: 'assets/image 7.png',
    name: 'T-Shirt with tape details',
    rating: {
        stars: 4.5,
        count: 87,
    },
    priceCents: 1090

},
{
    image: 'assets/skinny fit jeans.png',
    name: 'Skinny-fit Jeans',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

},
{
    image: 'assets/Checkered Shirt.png',
    name: 'Checkered Shirt',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

},
{
    image: 'assets/Sleeve Striped T-Shirt.png',
    name: 'Sleeve Striped T-Shirt',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

},
]

let productsHTML = "";
// rendering of New Arrivals section
newArrivals.forEach((product) => {
    productsHTML +=`
    <div class="col-md-3">
            <div class="thumbnail">
                <img src='${product.image}' alt="tape details" style="width:100%; height:300px" class="rounded-3">
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
                       </div>
                       <div class="row">
                        <div class="col-md-6">
                            <h5 class="product-price">${product.priceCents /100}</h5>
                        </div>
                       </div>
                    </div>
            </div>
            </div>
          </div>
    `
//  

            
})
console.log(productsHTML);

document.querySelector('.new-arrivals-grid').innerHTML = productsHTML; 


const topSelling = [{
    image: 'assets/Vertical Striped Shirt.png',
    name: 'Vertical-Striped Shirt',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

},
{
    image: 'assets/Courage Graphic T-shirt.png',
    name: 'Courage Graphic T-Shirt',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

},
{
    image: 'assets/bermuda shorts.png',
    name: 'Loose-fit Bermuda Shorts',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

},
{
    image: 'assets/Faded Skinny jeans.png',
    name: 'Faded Skinny Jeans',
    rating: {
        stars: 4,
        count: 61,
    },
    priceCents: 1090

},
]

let topSellingHTML = "";
// rendering of New Arrivals section
topSelling.forEach((product) => {
    topSellingHTML +=`
    <div class="col-md-3">
            <div class="thumbnail">
                <img src='${product.image}' alt="tape details" style="width:100%; height:300px" class="rounded-3">
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
            </div>
          </div>
    `
//  

            
})
console.log(topSellingHTML);

document.querySelector('.top-selling').innerHTML = topSellingHTML; 


