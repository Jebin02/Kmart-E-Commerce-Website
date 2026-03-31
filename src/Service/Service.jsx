
import React from "react";
import "./Service.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Free Shipping",
      description: "We offer free shipping on all orders above ₹500.",
      icon: "🚚",
    },
    {
      id: 2,
      title: "24/7 Support",
      description: "Our support team is available 24/7 to help you.",
      icon: "📞",
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "All payments are secured with SSL encryption.",
      icon: "💳",
    },
    {
      id: 4,
      title: "Easy Returns",
      description: "Hassle-free returns within 14 days of purchase.",
      icon: "🔄",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        We provide top-notch services to make your shopping experience seamless and enjoyable.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

































































