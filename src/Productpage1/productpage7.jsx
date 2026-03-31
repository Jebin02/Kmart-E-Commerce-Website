import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

// ✅ export products (needed for App.jsx)
export const products = [
  { id: 701, name: "Dress for Women", price: "₹2999", image: "https://i.pinimg.com/1200x/a7/88/db/a788dbb7f3ab41964638a234258baf62.jpg" },
  { id: 702, name: "Dress for Women", price: "₹999", image: "https://i.pinimg.com/736x/07/99/cb/0799cbb76d8f03a96c1fb90fc9a9cd11.jpg" },
  { id: 703, name: "Dress for Women", price: "₹1999", image: "https://i.pinimg.com/736x/69/07/1d/69071d583654e4d9830fea9376988fae.jpg" },
  { id: 704, name: "Dress for Women", price: "₹19999", image: "https://i.pinimg.com/736x/f3/86/4c/f3864c264c53523fe3f31c8974d52db3.jpg" },
  { id: 705, name: "Dress for Women", price: "₹1599", image: "https://i.pinimg.com/736x/61/ea/b7/61eab78b60fc7274a04dcf62a1b0fa25.jpg" },
  { id: 706, name: "Dress for Women", price: "₹1299", image: "https://i.pinimg.com/736x/6d/bf/59/6dbf59b4a16c2e0b34364788f4c3f35d.jpg" },
  { id: 707, name: "Dress for Women", price: "₹899", image: "https://i.pinimg.com/736x/2d/03/95/2d0395a174c912382f6ced45691851a5.jpg" },
  { id: 708, name: "Dress for Women", price: "₹799", image: "https://i.pinimg.com/736x/4d/2c/9e/4d2c9e1e06639ecb44794ef8512aa1f1.jpg" },
  { id: 709, name: "Dress for Women", price: "₹699", image: "https://i.pinimg.com/736x/c7/6c/0a/c76c0a4d915c25f693e802d4e9c4009c.jpg" },
  { id: 710, name: "Dress for Women", price: "₹1199", image: "https://i.pinimg.com/736x/d2/c9/cf/d2c9cf67c787cb10abb75bda61eabb4c.jpg" },
  { id: 711, name: "Dress for Women", price: "₹499", image: "https://i.pinimg.com/736x/f9/65/fc/f965fcefd0f58462833cd87b97407980.jpg" },
  { id: 712, name: "Dress for Women", price: "₹25999", image: "https://i.pinimg.com/736x/f0/5a/83/f05a83c1ff9b261c1903699a7ba83608.jpg" },
  { id: 713, name: "Dress for Women", price: "₹1299", image: "https://i.pinimg.com/736x/5f/02/7a/5f027a41723da612a38dbc93f4238f23.jpg" },
  { id: 714, name: "Dress for Women", price: "₹1799", image: "https://i.pinimg.com/736x/4b/02/5e/4b025ef6cd67b5fd18e88e0330d582a2.jpg" },
  { id: 715, name: "Dress for Women", price: "₹1099", image: "https://i.pinimg.com/736x/c3/53/b5/c353b537d1e2100dd885a9ce3400ec4f.jpg" },
  { id: 716, name: "Dress for Women", price: "₹1099", image: "https://i.pinimg.com/736x/c3/53/b5/c353b537d1e2100dd885a9ce3400ec4f.jpg" }
];

const ProductPage7 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {
//  / /✅ CHECK IF ITEM EXISTS
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
      <h2 className="title">Women Dresses</h2>

      <div className="product-grid">
        {products.map((item) => (
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

export default ProductPage7;
