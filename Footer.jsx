function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Gem Palace Jewelry</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer