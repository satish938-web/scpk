import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const OrderSuccess = () => {
  return (
    <div className="page-container success-page">
      <div className="success-content">
        <FiCheckCircle className="success-icon" />
        <h1>Order Confirmed!</h1>
        <p>Thank you for shopping with SCPK. Your order #ORD-{Math.floor(Math.random() * 1000000)} has been placed successfully.</p>
        <p className="email-msg">We've sent a confirmation email to you with the tracking details.</p>
        
        <div className="success-actions">
          <Link to="/shop" className="btn-continue">Continue Shopping</Link>
          <Link to="/" className="btn-home">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

