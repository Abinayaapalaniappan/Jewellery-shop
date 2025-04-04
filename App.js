import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>GEN PALACE JEWELRY</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Collections</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <section className="hero">
        <h2>Exquisite Handcrafted Jewelry</h2>
        <button>Shop Now</button>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Gen Palace Jewelry</p>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;