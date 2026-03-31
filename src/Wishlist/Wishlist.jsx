import React from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = ({ wishlist = [], setWishlist, setCart }) => {
  const navigate = useNavigate();

  // REMOVE ITEM FROM WISHLIST
  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // MOVE ITEM TO CART & NAVIGATE
  const moveToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    removeItem(product.id);

    // ✅ Go to cart page
    navigate("/cart");
  };

  // CALCULATE TOTAL PRICE (OPTIONAL)
  const totalAmount = wishlist.reduce((total, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace("₹", ""))
        : Number(item.price);
    return total + price;
  }, 0);

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h3>No items in wishlist</h3>
          <p>Start adding your favorite products ❤️</p>
        </div>
      ) : (
        <>
          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div className="wishlist-card" key={item.id}>
                <div className="wishlist-image-container">
                  <img src={item.image} alt={item.name} />
                  <div
                    className="remove-icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash />
                  </div>
                </div>

                <h4>{item.name}</h4>
                <p className="desc">Premium Quality Product</p>
                <p className="price">{item.price}</p>

                <button
                  className="move-cart-btn"
                  onClick={() => moveToCart(item)}
                >
                  Move to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="wishlist-summary">
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;