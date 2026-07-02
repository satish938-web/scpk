import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-maroon text-rose-soft font-body pt-14"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="w-[95%] max-w-[1600px] mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9">

        {/* Brand */}
        <div>
          <h3 itemProp="name" className="font-display italic font-semibold text-ivory text-2xl mb-4">
            SCPK
          </h3>
          <p itemProp="description" className="text-sm leading-relaxed text-rose-soft mb-5">
            Your ultimate destination for premium ethnic wear. We bring you the finest designer kurtis, anarkali sets, and exquisite gowns crafted with love and tradition.
          </p>
          <nav className="flex gap-3" aria-label="Social Media Links">
            <a
              href="#"
              aria-label="Follow us on Facebook"
              itemProp="sameAs"
              className="w-9 h-9 rounded-full border border-rose-soft/30 flex items-center justify-center text-rose-soft transition-colors hover:bg-gold hover:border-gold hover:text-maroon"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Follow us on Instagram"
              itemProp="sameAs"
              className="w-9 h-9 rounded-full border border-rose-soft/30 flex items-center justify-center text-rose-soft transition-colors hover:bg-gold hover:border-gold hover:text-maroon"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Follow us on Twitter"
              itemProp="sameAs"
              className="w-9 h-9 rounded-full border border-rose-soft/30 flex items-center justify-center text-rose-soft transition-colors hover:bg-gold hover:border-gold hover:text-maroon"
            >
              <FaTwitter aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Follow us on Pinterest"
              itemProp="sameAs"
              className="w-9 h-9 rounded-full border border-rose-soft/30 flex items-center justify-center text-rose-soft transition-colors hover:bg-gold hover:border-gold hover:text-maroon"
            >
              <FaPinterestP aria-hidden="true" />
            </a>
          </nav>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="font-display italic font-semibold text-ivory text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" title="Navigate to Home" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="/shop" title="Browse our Shop Collection" className="hover:text-gold transition-colors">Shop Collection</a></li>
            <li><a href="/wholesale" title="Learn about Wholesale Orders" className="hover:text-gold transition-colors">Wholesale Orders</a></li>
            <li><a href="/about" title="Read About Us" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="/blog" title="Read Our Blog" className="hover:text-gold transition-colors">Blog</a></li>
          </ul>
        </nav>

        {/* Customer Care */}
        <nav aria-label="Customer Care Links">
          <h3 className="font-display italic font-semibold text-ivory text-2xl mb-4">Customer Care</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/shipping-policy" title="Read our Shipping Policy" className="hover:text-gold transition-colors">Shipping Policy</a></li>
            <li><a href="/return-policy" title="Read about Returns and Exchanges" className="hover:text-gold transition-colors">Returns & Exchanges</a></li>
            <li><a href="/privacy-policy" title="Read our Privacy Policy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="/contact" title="Contact our Support Team" className="hover:text-gold transition-colors">Contact Us</a></li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="font-display italic font-semibold text-ivory text-2xl mb-4">Contact Info</h3>
          <address
            className="not-italic"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <strong className="text-ivory font-medium">Address:</strong>{' '}
                <span itemProp="streetAddress">Chandni Chowk, New Delhi, India 110006</span>
              </li>
              <li>
                <strong className="text-ivory font-medium">Email:</strong>{' '}
                <a href="mailto:support@scpk.com" itemProp="email" className="hover:text-gold transition-colors">
                  support@scpk.com
                </a>
              </li>
              <li>
                <strong className="text-ivory font-medium">Phone:</strong>{' '}
                <a href="tel:+919876543210" itemProp="telephone" className="hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <strong className="text-ivory font-medium">Hours:</strong> Mon - Sat: 10:00 AM - 7:00 PM
              </li>
            </ul>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-[95%] max-w-[1600px] mx-auto px-6 py-5 border-t border-rose-soft/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-rose-soft m-0">
          &copy; {new Date().getFullYear()} <span itemProp="legalName">SCPK</span>. All Rights Reserved.
        </p>
        <div className="flex gap-3 text-2xl text-rose-soft" aria-label="Accepted Payment Methods">
          <FaCcVisa aria-label="Visa Accepted" />
          <FaCcMastercard aria-label="Mastercard Accepted" />
          <FaCcPaypal aria-label="PayPal Accepted" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;