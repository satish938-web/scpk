import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Shipping Policy</h1>
        <p>Fast & Secure Delivery</p>
      </div>
      <div className="about-content policy-content">
        <section className="about-section">
          <h2>Order Processing Time</h2>
          <p>
            All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders during festive seasons, shipments may be delayed by a few days.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Shipping Rates & Delivery Estimates</h2>
          <p>
            We offer <strong>Free Standard Shipping</strong> on all domestic orders above ₹1999.
            <br/><br/>
            • Standard Delivery: 4-6 Business Days (Free over ₹1999, else ₹99)<br/>
            • Express Delivery: 2-3 Business Days (₹250 flat rate)<br/>
            <br/>
            Delivery delays can occasionally occur due to unforeseen courier issues, but we will provide you with tracking information as soon as your order leaves our warehouse.
          </p>
        </section>

        <section className="about-section">
          <h2>International Shipping</h2>
          <p>
            We currently ship to over 50 countries globally. International shipping rates are calculated at checkout based on the weight of the items and the destination country. Please note that customs duties or import taxes are the responsibility of the customer.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;

