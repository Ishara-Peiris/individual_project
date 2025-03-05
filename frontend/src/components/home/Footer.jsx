import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h5>MyCare</h5>
        <p>Your trusted platform for finding the best therapists and mental health support.</p>
      </div>
      <div className="footer-section">
        <h5>Quick Links</h5>
        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/therapists">Therapists</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><a href="/guidance">Guidance Hub</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Contact Us</h5>
        <p>Email: support@mycare.com</p>
        <p>Phone: +94 711 456-7890</p>
        <p></p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MyCare. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer
