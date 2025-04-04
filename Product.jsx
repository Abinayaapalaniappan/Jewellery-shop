import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      // Mock API call
      const mockProducts = [
        {
          id: 1,
          name: "Diamond Ring",
          price: 1299.99,
          description: "18K gold with 0.5 carat diamond",
          image: "/images/ring1.jpg"
        }
        // Add more products...
      ]
      setProduct(mockProducts.find(p => p.id === parseInt(id)))
    }
    fetchProduct()
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
        <Link to="/shop" className="back-button">← Back to Shop</Link>
      </div>
    </div>
  )
}

export default Product