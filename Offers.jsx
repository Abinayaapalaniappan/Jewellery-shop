function Offers() {
    const offers = [
      {
        id: 1,
        title: "Summer Sale",
        discount: "20% OFF",
        code: "GEM20",
        image: "/images/offer1.jpg"
      }
      // Add more offers...
    ]
  
    return (
      <div className="offers-page">
        <h1>Special Offers</h1>
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card">
              <img src={offer.image} alt={offer.title} />
              <h3>{offer.title}</h3>
              <p>{offer.discount}</p>
              <p>Use code: <strong>{offer.code}</strong></p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Offers