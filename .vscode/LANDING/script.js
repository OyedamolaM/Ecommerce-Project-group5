let ArrProducts = [
  {
    id: 1,
    name: "HTML",
    image: "/images/2.jpg",
    price: "1000",
    rating: 5,
  },
  {
    id: 2,
    name: "CSS",
    image: "/images/ahii.jpg",
    price: "1000",
    rating: 5,
  },
  {
    id: 3,
    name: "JavaScript",
    image: "images/istockphoto-1330867859-612x612.jpg",
    price: "1000",
    rating: 5,
  },
  {
    id: 4,
    name: "React",
    image: "images/istockphoto-1330867859-612x612.jpg",
    price: "1000",
    rating: 5,
  },
  {
    id: 5,
    name: "Node.js",
    image: "images/istockphoto-1330867859-612x612.jpg",
    price: "1000",
    rating: 5,
  },
  {
    id: 6,
    name: "Express",
    image: "images/istockphoto-1330867859-612x612.jpg",
    price: "1000",
    rating: 5,
  },
];

const productsContainer = document.querySelector(".products");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModalBtn = document.querySelector(".close");

// Initialize products in localStorage (for testing purposes)
localStorage.setItem('products', JSON.stringify(ArrProducts));

// Retrieve products from localStorage
const NewProduct = JSON.parse(localStorage.getItem('products'));

function onInIt() {
  NewProduct.forEach((item, key) => {
    let div = document.createElement("div");
    div.classList.add('item');
    div.innerHTML = `
      <img src="${item.image}" />
      <div class="name">${item.name}</div>
      <div class="price">$<small>${item.price}</small></div>
    `;
    
    // Add event listener to show modal on click
    div.addEventListener('click', () => {
      showModal(item);
    });

    productsContainer.appendChild(div);
  });
}

function showModal(product) {
  // Populate modal with product details
  document.getElementById('modal-name').textContent = product.name;
  document.getElementById('modal-image').src = product.image;
  document.getElementById('modal-price').textContent = `Price: $${product.price}`;

  // Display modal
  modal.style.display = "block";

  // Close modal when close button is clicked
  closeModalBtn.onclick = function() {
    modal.style.display = "none";
  }

  // Close modal when clicking outside of the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Initialize product display
onInIt();

// Function to add a new product (testing purpose)
function addProduct() {
  const newProduct = {
    id: ArrProducts.length + 1,
    name: 'New Product',
    price: '2000',
    image: 'images/new-product.jpg'
  };
  
  ArrProducts.push(newProduct);
  localStorage.setItem('products', JSON.stringify(ArrProducts));
  
  // Refresh product display
  productsContainer.innerHTML = '';
  onInIt();
}

// Example: addProduct(); // Uncomment this line to test adding a new product

