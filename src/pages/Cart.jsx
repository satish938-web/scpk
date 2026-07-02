import React from 'react';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      title: "Premium Embroidered Anarkali Suit",
      price: 2499,
      size: "M",
      color: "Rose Pink",
      quantity: 1,
      img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      title: "Yellow Cotton Kurti Set",
      price: 1299,
      size: "L",
      color: "Yellow",
      quantity: 2,
      img: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="page-container">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h1>Shopping Cart</h1>
        <p>Review your items before checkout</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item-card">
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Size: {item.size} | Color: {item.color}</p>
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button><FiMinus /></button>
                    <span>{item.quantity}</span>
                    <button><FiPlus /></button>
                  </div>
                  <span className="cart-item-price">₹{item.price * item.quantity}</span>
                </div>
              </div>
              <button className="cart-remove-btn" aria-label="Remove item"><FiTrash2 /></button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout <FiArrowRight />
          </Link>
          <div className="secure-checkout-msg">
            <p>🔒 Secure Encrypted Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

