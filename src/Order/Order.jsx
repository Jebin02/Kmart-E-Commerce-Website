import React, { useState, useEffect } from "react";
import "./Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleReturn = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = "Returned";
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="orders-container">
      <h2>My Orders & Returns</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">

            {/* IMAGE */}
            <img src={order.image} alt={order.name} />

            {/* DETAILS */}
            <div className="order-details">
              <h3>{order.name}</h3>
              <p>Price: ₹{order.price}</p>
              <p>Status: <b>{order.status}</b></p>

              {/* RETURN BUTTON */}
              {order.status === "Delivered" && (
                <button onClick={() => handleReturn(index)}>
                  Return Item
                </button>
              )}
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default Orders;