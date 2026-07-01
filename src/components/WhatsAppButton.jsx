import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
