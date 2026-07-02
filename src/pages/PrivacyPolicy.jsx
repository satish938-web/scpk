import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: July 2026</p>
      </div>
      <div className="about-content policy-content">
        <section className="about-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to SCPK. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>
        </section>
        
        <section className="about-section">
          <h2>2. The Data We Collect About You</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            <br/><br/>
            • <strong>Identity Data:</strong> includes first name, last name, username or similar identifier.<br/>
            • <strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.<br/>
            • <strong>Financial Data:</strong> includes bank account and payment card details (processed securely via third-party gateways).<br/>
            • <strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.
          </p>
        </section>

        <section className="about-section">
          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to process your orders, manage your account, and provide you with customer support. We do not sell your personal data to third parties.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

