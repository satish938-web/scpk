import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer" itemScope itemType="https://schema.org/Organization">
      <div className="footer-top">
        <div className="footer-col">
          <h3 itemProp="name">SCPK</h3>
          <p itemProp="description">Your ultimate destination for premium ethnic wear. We bring you the finest designer kurtis, anarkali sets, and exquisite gowns crafted with love and tradition.</p>
          <nav className="social-links" aria-label="Social Media Links">
            <a href="#" aria-label="Follow us on Facebook" itemProp="sameAs"><FaFacebookF aria-hidden="true" /></a>
            <a href="#" aria-label="Follow us on Instagram" itemProp="sameAs"><FaInstagram aria-hidden="true" /></a>
            <a href="#" aria-label="Follow us on Twitter" itemProp="sameAs"><FaTwitter aria-hidden="true" /></a>
            <a href="#" aria-label="Follow us on Pinterest" itemProp="sameAs"><FaPinterestP aria-hidden="true" /></a>
          </nav>
        </div>

        <nav className="footer-col" aria-label="Quick Links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/" title="Navigate to Home">Home</a></li>
            <li><a href="/shop" title="Browse our Shop Collection">Shop Collection</a></li>
            <li><a href="/wholesale" title="Learn about Wholesale Orders">Wholesale Orders</a></li>
            <li><a href="/about" title="Read About Us">About Us</a></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Customer Care Links">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="/shipping" title="Read our Shipping Policy">Shipping Policy</a></li>
            <li><a href="/returns" title="Read about Returns and Exchanges">Returns & Exchanges</a></li>
            <li><a href="/faq" title="Frequently Asked Questions">FAQ</a></li>
            <li><a href="/contact" title="Contact our Support Team">Contact Us</a></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <address className="contact-info" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <ul>
              <li><strong>Address:</strong> <span itemProp="streetAddress">123 Fashion Street, Surat, Gujarat 395002</span></li>
              <li><strong>Email:</strong> <a href="mailto:support@scpk.com" itemProp="email">support@scpk.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919876543210" itemProp="telephone">+91 98765 43210</a></li>
              <li><strong>Hours:</strong> Mon - Sat: 10:00 AM - 7:00 PM</li>
            </ul>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <span itemProp="legalName">SCPK</span>. All Rights Reserved.</p>
        <div className="payment-icons" aria-label="Accepted Payment Methods">
          <FaCcVisa aria-label="Visa Accepted" />
          <FaCcMastercard aria-label="Mastercard Accepted" />
          <FaCcPaypal aria-label="PayPal Accepted" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
