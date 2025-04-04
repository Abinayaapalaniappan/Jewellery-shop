import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Mock API call
    const fetchProducts = async () => {
      const mockProducts = [
        {
          id: 1,
          name: "Diamond Ring",
          price: 1299.99,
          image: "/images/ring1.jpg"
        },
        // Add more products...
      ]
      setProducts(mockProducts)
    }
    fetchProducts()
  }, [])

  return (
    <div className="shop-page">
      <h1>Our Collection</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop