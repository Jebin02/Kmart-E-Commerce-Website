import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

export const products5 = [
  { id: 501, name: "Sneaker", price: "₹2999", image: "https://i.pinimg.com/736x/2e/5f/30/2e5f303c472892d480070d1063a37ab2.jpg" },
  { id: 502, name: "Sneaker", price: "₹9999", image: "https://i.pinimg.com/736x/98/35/5b/98355b80af49682ca2b304af67d44b8a.jpg" },
  { id: 503, name: "Sneaker", price: "₹1999", image: "https://i.pinimg.com/736x/99/0c/24/990c246d7c09f5e59db58a7c1633d41a.jpg" },
  { id: 504, name: "Sneaker", price: "₹1999", image: "https://i.pinimg.com/1200x/ea/1b/95/ea1b95014800b49f75e2ffce1c42c9cf.jpg" },
  { id: 505, name: "Sneaker", price: "₹1999", image: "https://i.pinimg.com/736x/dd/11/7f/dd117f59cdbc0ffaf83e8614b3cf05bd.jpg" },
  { id: 506, name: "Sneaker", price: "₹1499", image: "https://i.pinimg.com/1200x/b9/8c/01/b98c01fa9e08b701e5b477c56c3367da.jpg" },
  { id: 507, name: "Sneaker", price: "₹1299", image: "https://i.pinimg.com/1200x/15/03/7e/15037e811a24338f8d6cd7737d52d3b1.jpg" },
  { id: 508, name: "Sneaker", price: "₹8999", image: "https://i.pinimg.com/736x/df/67/af/df67afadf48915064dcbdd8f1996f39b.jpg" },
  { id: 509, name: "Sneaker", price: "₹2599", image: "https://i.pinimg.com/736x/39/ab/6d/39ab6de307f35375167960ab2c2d3eb6.jpg" },
  { id: 510, name: "Sneaker", price: "₹7999", image: "https://i.pinimg.com/1200x/39/ab/6d/39ab6de307f35375167960ab2c2d3eb6.jpg" },
  { id: 511, name: "Sneaker", price: "₹6999", image: "https://i.pinimg.com/736x/13/55/d7/1355d7f8b5abc61eecc977b6c0372959.jpg" },
  { id: 512, name: "Sneaker", price: "₹1199", image: "https://i.pinimg.com/736x/87/95/d1/8795d1a630b91dc3d12e627c63f2f79a.jpg" },
  { id: 513, name: "Sneaker", price: "₹4999", image: "https://i.pinimg.com/736x/f3/52/16/f35216ea5182b60c56b14cdc2beddf64.jpg" },
  { id: 514, name: "Sneaker", price: "₹1299", image: "https://i.pinimg.com/1200x/e9/a0/90/e9a0903e6c1f1ed1f6137295a95a4f77.jpg" },
  { id: 515, name: "Sneaker", price: "₹1799", image: "https://i.pinimg.com/736x/bb/8d/ea/bb8dea50490202860e3da054f74ec7f3.jpg" },
  { id: 516, name: "Sneaker", price: "₹1099", image: "https://i.pinimg.com/736x/fd/67/fc/fd67fc72752141609b4e6ce513e566f6.jpg" }
];

const ProductPage12 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {
  
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
      <h2 className="title">Sneakers</h2>

      <div className="product-grid">
        {products5.map((item) => (
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

export default ProductPage12;