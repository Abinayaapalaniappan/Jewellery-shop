const offers = [
    {
      title: "Summer Sale",
      discount: "20% OFF",
      code: "DIAMOND20",
      image: "images/offer1.jpg"
    }
  ];
  
  function renderOffersPage() {
    let html = `<h2>Special Offers</h2><div class="offers-grid">`;
  
    offers.forEach(offer => {
      html += `
        <div class="offer-card">
          <img src="${offer.image}" alt="${offer.title}">
          <h3>${offer.title}</h3>
          <p>${offer.discount}</p>
          <p>Use code: <strong>${offer.code}</strong></p>
        </div>
      `;
    });
  
    html += `</div>`;
    document.getElementById('app').innerHTML = html;
  }