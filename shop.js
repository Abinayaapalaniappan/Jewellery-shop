function renderShopPage(products) {
    let html = `
      <h2>Our Collection</h2>
      <div class="products-grid">
    `;
  
    products.forEach(product => {
      html += `
        <div class="product-card" data-id="${product.id}">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button class="view-details">View Details</button>
        </div>
      `;
    });
  
    html += `</div>`;
    document.getElementById('app').innerHTML = html;
  
    // Add event listeners to product cards
    document.querySelectorAll('.view-details').forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = e.target.closest('.product-card').getAttribute('data-id');
        renderProductPage(productId);
      });
    });
  }
  
  function renderProductPage(productId) {
    // Implement in product.js
  }