function renderContactPage() {
    const html = `
      <div class="contact-page">
        <h2>Contact Us</h2>
        <form id="contact-form">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    `;
  
    document.getElementById('app').innerHTML = html;
  
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      loadPage('home');
    });
  }