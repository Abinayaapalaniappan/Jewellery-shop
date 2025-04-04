// Cart functionality
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

// Other utilities...