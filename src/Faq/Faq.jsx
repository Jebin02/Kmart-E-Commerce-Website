import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email after the order is shipped.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "We accept returns within 14 days of delivery. Items must be unused and in original packaging.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Currently, we only ship within India. International shipping will be available soon.",
    },
    {
      id: 4,
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team via the contact page, email, or phone. We are available 24/7.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div
            className={`faq-item ${active === faq.id ? "active" : ""}`}
            key={faq.id}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;