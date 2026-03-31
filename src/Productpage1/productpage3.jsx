import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

// ✅ unique name + unique IDs
export const products3 = [
  { id: 301, name: "Formal Shoe", price: "₹2999", image: "https://i.pinimg.com/736x/07/d7/be/07d7be474706fc674775292c7ccbb1ae.jpg" },
  { id: 302, name: "Formal Shoe", price: "₹9999", image: "https://i.pinimg.com/736x/5f/67/c7/5f67c7acb48856ec42468711f8a7c6bd.jpg" },
  { id: 303, name: "Formal Shoe", price: "₹1999", image: "https://i.pinimg.com/736x/c7/8f/15/c78f15a18f32e80d541ed4def5f18f89.jpg" },
  { id: 304, name: "Formal Shoe", price: "₹1999", image: "https://i.pinimg.com/1200x/c1/f0/b8/c1f0b8b372ee38bce3000ed527e0fe52.jpg" },
  { id: 305, name: "Formal Shoe", price: "₹1999", image: "https://i.pinimg.com/736x/f6/64/2c/f6642c604c6601ab70a3286a6ad7a5ca.jpg" },
  { id: 306, name: "Formal Shoe", price: "₹1499", image: "https://i.pinimg.com/736x/e0/25/f2/e025f27558fae304f8f13bdc8baf78b2.jpg" },
  { id: 307, name: "Formal Shoe", price: "₹1299", image: "https://i.pinimg.com/1200x/60/80/bd/6080bdd15b4e7327deb6360819aca5ac.jpg" },
  { id: 308, name: "Formal Shoe", price: "₹8999", image: "https://i.pinimg.com/1200x/cf/fd/a1/cffda1ddc96de7b760695a53288fda4f.jpg" },
  { id: 309, name: "Formal Shoe", price: "₹2599", image: "https://i.pinimg.com/736x/dd/26/c6/dd26c60edb4c5387f830bea876215342.jpg" },
  { id: 310, name: "Formal Shoe", price: "₹7999", image: "https://i.pinimg.com/736x/ed/2c/ca/ed2cca976adae26289beb64e48db0793.jpg" },
  { id: 311, name: "Formal Shoe", price: "₹6999", image: "https://i.pinimg.com/736x/25/53/f1/2553f169d20ff9278ce6677347aae262.jpg" },
  { id: 312, name: "Formal Shoe", price: "₹1199", image: "https://i.pinimg.com/1200x/7b/67/95/7b6795274371ebc5717b02c1e686b66c.jpg" },
  { id: 313, name: "Formal Shoe", price: "₹4999", image: "https://i.pinimg.com/736x/40/04/65/40046599951294320cc64c3b0094b548.jpg" },
  { id: 314, name: "Formal Shoe", price: "₹1299", image: "https://i.pinimg.com/736x/3c/5c/77/3c5c77c4bc60098edbde1805d6f5aa0f.jpg" },
  { id: 315, name: "Formal Shoe", price: "₹1799", image: "https://i.pinimg.com/1200x/92/c8/36/92c83694fdcd1e9c344d9d4d99b31a36.jpg" },
  { id: 316, name: "Formal Shoe", price: "₹1099", image: "https://i.pinimg.com/736x/08/57/73/0857735a25c022909a660586b67548f7.jpg" }
];

const ProductPage3 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {
 // ✅ CHECK IF ITEM EXISTS
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // ✅ FIXED TOGGLE (BEST VERSION)
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };
 // 🛒 ADD TO CART (WITH QUANTITY)
  const addToCart = (product) => {
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
  };
  return (
    <div className="product-container">

      {/* ✅ fixed title */}
      <h2 className="title">Formal Shoes</h2>

      <div className="product-grid">
        {products3.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image-container">

              {/* ❤️ HEART ICON */}
              <div
                className={`wishlist-icon ${isInWishlist(item.id) ? "active" : ""}`}
                onClick={() => toggleWishlist(item)}
              >
                <FaHeart />
              </div>

              <img src={item.image} alt={item.name} />
            </div>

            <h4>{item.name}</h4>
            <p>Premium Quality with Affordable price</p>
            <p className="price">{item.price}</p>

            <button className="cart-btn" onClick={(e)=>{
              e.stopPropagation();
              addToCart(item);
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage3;