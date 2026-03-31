import React from "react";
import "./Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy & Policy</h1>
      <p className="privacy-intro">
        Your privacy is important to us. Please read our privacy policy carefully to understand how we collect, use, and protect your information.
      </p>

      {/* Information Collection */}
      <section className="privacy-section">
        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information such as your name, email, address, phone number, and payment details when you place an order or create an account.
        </p>
      </section>

      {/* How We Use */}
      <section className="privacy-section">
        <h2>2. How We Use Your Information</h2>
        <p>
          Your information is used to process orders, provide customer support, improve our services, and send updates about promotions or offers. We do not share your personal data with third parties for marketing purposes.
        </p>
      </section>

      {/* Cookies */}
      <section className="privacy-section">
        <h2>3. Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience, track user preferences, and improve website functionality. You can disable cookies in your browser settings.
        </p>
      </section>

      {/* Data Security */}
      <section className="privacy-section">
        <h2>4. Data Security</h2>
        <p>
          We take all reasonable precautions to protect your personal information. However, no method of transmission over the Internet is completely secure.
        </p>
      </section>

      {/* Changes */}
      <section className="privacy-section">
        <h2>5. Changes to Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. All changes will be posted on this page, and the last updated date will be indicated.
        </p>
      </section>

      {/* Contact */}
      <section className="privacy-section">
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about our privacy policy, please contact us at support@yourstore.com or call +91 123 456 7890.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;