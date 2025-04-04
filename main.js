// DOM Elements
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link');

// Sample Data
const products = [
  {
    id: 1,
    name: "Diamond Ring",
    price: 1299.99,
    image: "images/ring1.jpg",
    description: "18K gold with 0.5 carat diamond"
  },
  // Add more products...
];

// Router
function loadPage(page) {
  switch(page) {
    case 'shop':
      renderShopPage(products);
      break;
    case 'offers':
      renderOffersPage();
      break;
    case 'contact':
      renderContactPage();
      break;
    default:
      app.innerHTML = `<h2>Welcome to our Jewelry Shop</h2>`;
  }
}

// Event Listeners
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.getAttribute('data-page');
    loadPage(page);
  });
});

// Initialize
loadPage('home');