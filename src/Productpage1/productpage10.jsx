import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

// ✅ export products (needed for App.jsx)
export const products = [
  { id: 1001, name: "Laptops", price: "₹2999", image: "https://i.pinimg.com/736x/f1/d9/33/f1d933d32853691458cc8bbfd646ea71.jpg" },
  { id: 1002, name: "Laptops", price: "₹999", image: "https://i.pinimg.com/736x/3c/e2/44/3ce244eecd501f62641bb7589e27c17c.jpg" },
  { id: 1003, name: "Laptops", price: "₹1999", image: "https://i.pinimg.com/736x/c8/c9/57/c8c957b06d10560279fb65c1c7dfdf9d.jpg" },
  { id: 1004, name: "Laptops", price: "₹19999", image: "https://i.pinimg.com/1200x/6d/51/b5/6d51b5c3fe6ce210a6fc1c7c493bed46.jpg" },
  { id: 1005, name: "Laptops", price: "₹15999", image: "https://i.pinimg.com/736x/63/a2/6c/63a26c8a5a61b09b67d85d7ff330dca7.jpg" },
  { id: 1006, name: "Laptops", price: "₹1499", image: "https://i.pinimg.com/736x/fa/f8/f0/faf8f05ec58e4dbdc870059303381cbe.jpg" },
  { id: 1007, name: "Laptops", price: "₹1299", image: "https://i.pinimg.com/1200x/e4/1f/3c/e41f3c01e85ebc7e5a588c52bd558900.jpg" },
  { id: 1008, name: "Laptops", price: "₹899", image: "https://i.pinimg.com/736x/13/e9/56/13e956848c156139dc9f4a8fd7ec6492.jpg" },
  { id: 1009, name: "Laptops", price: "₹2599", image: "https://i.pinimg.com/736x/ba/e6/5d/bae65d74912492f18579fe395758302d.jpg" },
  { id: 1010, name: "Laptops", price: "₹799", image: "https://i.pinimg.com/736x/49/ad/ee/49adee1894b0e2bce8f573c86a32c224.jpg" },
  { id: 1011, name: "Laptops", price: "₹699", image: "https://i.pinimg.com/1200x/fd/30/92/fd309299a8ee57cc782846ae4f185de1.jpg" },
  { id: 1012, name: "Laptops", price: "₹1199", image: "https://i.pinimg.com/1200x/c6/e3/05/c6e305841b8fd635254ded4bc4afcb18.jpg" },
  { id: 1013, name: "Laptops", price: "₹499", image: "https://i.pinimg.com/736x/e2/b9/a0/e2b9a08a7c1faebb412ba0e197bde1e8.jpg" },
  { id: 1014, name: "Laptops", price: "₹1299", image: "https://i.pinimg.com/736x/a5/df/77/a5df770462f72fde940c269397db39d7.jpg" },
  { id: 1015, name: "Laptops", price: "₹1799", image: "https://i.pinimg.com/1200x/c3/e8/8f/c3e88fc16a592fa33c18934638439139.jpg" },
  { id: 1016, name: "Laptops", price: "₹1099", image: "https://i.pinimg.com/736x/57/a3/ca/57a3ca939203cb58c69decfe0cf33ded.jpg" }
];

const ProductPage10 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {

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
      <h2 className="title">Laptops</h2>

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

export default ProductPage10;