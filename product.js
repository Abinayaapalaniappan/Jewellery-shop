function renderProductPage(productId) {
    const product = products.find(p => p.id == productId);
    
    const html = `
      <div class="product-page">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h2>${product.name}</h2>
          <p class="price">$${product.price.toFixed(2)}</p>
          <p class="description">${product.description}</p>
          <button class="add-to-cart">Add to Cart</button>
          <button class="back-to-shop">← Back to Shop</button>
        </div>
      </div>
    `;
  
    document.getElementById('app').innerHTML = html;
  
    // Event Listeners
    document.querySelector('.add-to-cart').addEventListener('click', () => {
      addToCart(product);
    });
  
    document.querySelector('.back-to-shop').addEventListener('click', () => {
      renderShopPage(products);
    });
  }
  
  function addToCart(product) {
    // Implement cart functionality
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  }