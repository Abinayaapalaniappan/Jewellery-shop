import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [cartItems] = useState(0) // Replace with your cart state

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Gem Palace</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-icon">
          🛒 {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar