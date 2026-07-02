import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const Checkout = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="page-container checkout-page">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h1>Checkout</h1>
        <p>Complete your order securely</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          {/* Shipping Details */}
          <div className="checkout-section">
            <h2>1. Shipping Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required placeholder="Doe" />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" required placeholder="123 Main St, Apt 4B" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" required placeholder="New Delhi" />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" required placeholder="110001" />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" required placeholder="+91 98765 43210" />
            </div>
          </div>

          {/* Payment Details */}
          <div className="checkout-section">
            <h2>2. Payment Method</h2>
            <div className="payment-methods">
              <label className="payment-option">
                <input type="radio" name="payment" defaultChecked />
                <span>Credit / Debit Card</span>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                <span>UPI / Net Banking</span>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                <span>Cash on Delivery (COD)</span>
              </label>
            </div>
            
            <div className="card-details-box">
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="password" placeholder="123" />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn checkout-submit" disabled={isProcessing}>
            {isProcessing ? 'Processing Order...' : 'Place Order - ₹5097'}
          </button>
        </form>

        <div className="checkout-sidebar">
          <h2>Order Summary</h2>
          <div className="mini-cart-item">
            <span>1x Premium Anarkali Suit</span>
            <span>₹2499</span>
          </div>
          <div className="mini-cart-item">
            <span>2x Yellow Cotton Kurti Set</span>
            <span>₹2598</span>
          </div>
          <hr />
          <div className="mini-cart-total">
            <strong>Total</strong>
            <strong>₹5097</strong>
          </div>
          <div className="guarantee-box">
            <FiCheckCircle />
            <span>30-Day Easy Returns Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

