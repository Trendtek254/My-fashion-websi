// ========== Mobile Nav Toggle ==========
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========== Button Feedback ==========
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 200);
  });
});
// ========== Highlight Active Page ==========
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active-link");
  }
});
const products = [
  { name: "Black Bomber Jacket", price: 3500, image: "images/men-jacket.jpg" },
  { name: "White Sneakers", price: 2800, image: "images/men-shoes.jpg" },
  { name: "Red Summer Dress", price: 2000, image: "images/women-dress.jpg" },
  { name: "Elegant Heels", price: 2700, image: "images/women-heels.jpg" }
];

function displayProducts() {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";

  products.forEach((product) => {
    productGrid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Ksh ${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", displayProducts);
const products = [
  { name: "Black Bomber Jacket", price: 3500, image: "images/men-jacket.jpg" },
  { name: "White Sneakers", price: 2800, image: "images/men-shoes.jpg" },
  { name: "Red Summer Dress", price: 2000, image: "images/women-dress.jpg" },
  { name: "Elegant Heels", price: 2700, image: "images/women-heels.jpg" }
];

function displayProducts() {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";

  products.forEach((product) => {
    productGrid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Ksh ${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", displayProducts);
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}