let NewArrivalHTML = "";
// rendering of New Arrivals section
newArrivals.forEach((product) => {
    NewArrivalHTML +=`
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
                            <h5 class="product-price">$${(product.priceCents /100).toFixed(2)}</h5>
                        </div>
                       </div>
                       <div class="row">
                            <div class="col-md-12">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
          </div>
    `
//  

            
})
console.log(NewArrivalHTML);

document.querySelector('.new-arrivals-grid').innerHTML = NewArrivalHTML; 



let topSellingHTML = "";
// rendering of New Top selling section
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
                       </div>
                    
                       <div class="row">
                        <div class="col-md-6">
                            <h5 class="product-price">$${product.priceCents /100}</h5>
                        </div>
                       </div>
                       <div class="row">
                            <div class="col-md-12">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
          </div>
    `
//  

            
})
console.log(topSellingHTML);

document.querySelector('.top-selling').innerHTML = topSellingHTML; 


