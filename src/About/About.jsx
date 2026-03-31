import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Our Store</strong> – your ultimate destination for premium products and unbeatable service.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To deliver high-quality products that enhance your lifestyle, backed by excellent customer service and seamless shopping experience.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become the most trusted online store where customers can find everything they need with confidence and convenience.
        </p>
      </section>

      {/* Story / Team */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2023, Our Store started with a passion for bringing the best products to your doorstep. Our dedicated team works tirelessly to source top-quality items and make online shopping simple and enjoyable.
        </p>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> Only the best products for our customers.</li>
          <li><strong>Trust:</strong> Transparent and reliable service every step of the way.</li>
          <li><strong>Innovation:</strong> Constantly improving our store for a better shopping experience.</li>
          <li><strong>Customer First:</strong> Your satisfaction is our top priority.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;