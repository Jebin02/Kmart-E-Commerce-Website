import React from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ FIXED
import "./Cart.css";

const Cart = ({ cart = [], setCart }) => {

  const navigate = useNavigate(); // ✅

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ➕ INCREASE QTY
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 💰 SAFE TOTAL CALCULATION (FIXED ERROR)
  const totalAmount = cart.reduce((total, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace("₹", ""))
        : Number(item.price);

    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>My Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <>
          {/* 🧾 CART ITEMS */}
          <div className="cart-grid">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <h4>{item.name}</h4>
                <p>{item.price}</p>

                {/* ✅ QUANTITY CONTROLS */}
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                {/* ❌ REMOVE */}
                <FaTrash
                  className="delete-icon"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))}
          </div>

          {/* 💰 SUMMARY */}
          <div className="cart-summary">
            <h3>Total: ₹{totalAmount}</h3>

            {/* ✅ FIXED BUTTON */}
            <button
              className="order-btn"
              onClick={() => navigate("/checkout")}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;