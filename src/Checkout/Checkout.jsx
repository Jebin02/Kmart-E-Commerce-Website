import React, { useState, useEffect } from "react";
import "./Checkout.css";

const Checkout = ({ cart = [], setCart }) => {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Auto-fill from Profile
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [form, setForm] = useState({
    name: storedUser.firstName || "",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
    city: "",
    pincode: "",
  });

  // ✅ ONLY CART ITEMS
  const allItems = cart;

  // ✅ TOTAL CALCULATION
  const totalAmount = allItems.reduce((total, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9.]/g, ""))
        : Number(item.price);

    const qty = item.quantity || 1;

    return total + price * qty;
  }, 0);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ PLACE ORDER
  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
      alert("Please fill all details");
      return;
    }

    if (allItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    // ✅ SAVE ORDER
    const newOrders = allItems.map((item) => ({
      ...item,
      status: "Delivered",
      date: new Date().toLocaleDateString(),
    }));

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, ...newOrders])
    );

    // ✅ CLEAR CART ONLY
    setCart([]);

    setShowPopup(true);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout 🧾</h2>

      {/* Shipping */}
      <div className="checkout-form">
        <h3>Shipping Address</h3>

        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} />
      </div>

      {/* Summary */}
      <div className="checkout-summary">
        <h3>Order Summary</h3>

        {allItems.length === 0 ? (
          <p>No items in your cart</p>
        ) : (
          allItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name}</span>
              <span>
                ₹
                {typeof item.price === "string"
                  ? item.price.replace(/[^0-9.]/g, "")
                  : item.price}{" "}
                x {item.quantity || 1}
              </span>
            </div>
          ))
        )}

        <h3 className="total">Total: ₹{totalAmount.toFixed(2)}</h3>
      </div>

      {/* Button */}
      <div className="confirm-container">
        <button className="confirm-btn" onClick={handleOrder}>
          Confirm Order
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Order Confirmed!</h2>
            <p>Your order has been placed successfully.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;