import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms & Policies</h1>
      <p className="terms-intro">
        Please read our terms and policies carefully before using our services.
      </p>

      {/* Terms of Service */}
      <section className="terms-section">
        <h2>Terms of Service</h2>
        <p>
          By using our website, you agree to comply with our terms of service. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="terms-section">
        <h2>Privacy Policy</h2>
        <p>
          We value your privacy. Any personal information you provide will be used solely for order processing and improving your shopping experience. We do not sell your information to third parties.
        </p>
      </section>

      {/* Refund Policy */}
      <section className="terms-section">
        <h2>Refund Policy</h2>
        <p>
          Refunds are accepted within 14 days of purchase for eligible products. Items must be unused and in original packaging. Certain products may not be eligible for return.
        </p>
      </section>

      {/* Shipping Policy */}
      <section className="terms-section">
        <h2>Shipping Policy</h2>
        <p>
          We offer shipping across India. Standard delivery takes 3-7 business days. Shipping charges may vary depending on the location and order size.
        </p>
      </section>
    </div>
  );
};

export default Terms;