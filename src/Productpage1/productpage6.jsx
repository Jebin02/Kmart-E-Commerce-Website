import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

export const products = [
  { id: 601, name: "Shirt For Men", price: "₹2999", image: "https://i.pinimg.com/1200x/be/2f/44/be2f44cc237dc4322c94b84087ab965f.jpg" },
  { id: 602, name: "Shirt For Men", price: "₹999", image: "https://i.pinimg.com/736x/e5/94/95/e59495f58262ea4bf4efb64abc953e64.jpg" },
  { id: 603, name: "Shirt For Men", price: "₹1999", image: "https://i.pinimg.com/736x/71/42/5a/71425a1ff6e9e805754449ea80e50301.jpg" },
  { id: 604, name: "Shirt For Men", price: "₹19999", image: "https://i.pinimg.com/736x/fb/58/3e/fb583ec74d91341063f1574086abbc4b.jpg" },
  { id: 605, name: "T-shirt for Men", price: "₹15999", image: "https://i.pinimg.com/736x/20/2e/8a/202e8a39913c72d54e296f909a128900.jpg" },
  { id: 606, name: "T-shirt for Men", price: "₹1499", image: "https://i.pinimg.com/1200x/11/1a/69/111a69d78683969774b026a5d1fbf9c5.jpg" },
  { id: 607, name: "T-shirt for Men", price: "₹1299", image: "https://i.pinimg.com/736x/85/6a/d1/856ad1a60848b3c68adeaa1ec1362f5f.jpg" },
  { id: 608, name: "T-shirt for Men", price: "₹899", image: "https://i.pinimg.com/1200x/eb/f7/92/ebf7929ae8023a8b3126837be4b96ae6.jpg" },
  { id: 609, name: "Formal Pants", price: "₹2599", image: "https://i.pinimg.com/1200x/e6/a2/e8/e6a2e8fc690a8a779849a6a2df56dc09.jpg" },
  { id: 610, name: "Formal Pants", price: "₹799", image: "https://i.pinimg.com/736x/7e/40/e4/7e40e4836057401128652d3f1386b97e.jpg" },
  { id: 611, name: "Baggy Pants", price: "₹699", image: "https://i.pinimg.com/1200x/c6/0d/1a/c60d1a8160c050849550470b36ea3081.jpg" },
  { id: 612, name: "Mom-Fit Pant", price: "₹1199", image: "https://i.pinimg.com/736x/6f/1c/9f/6f1c9f4d34576c7eb1c2cd8e5eb5e46b.jpg" },
  { id: 613, name: "Casual Pant", price: "₹499", image: "https://i.pinimg.com/1200x/42/1f/b8/421fb86767c65e0eac873aaca2194b71.jpg" },
  { id: 614, name: "Trouser", price: "₹1299", image: "https://i.pinimg.com/736x/4f/ac/fd/4facfdab5d4c8b5d4e443a2c2df05558.jpg" },
  { id: 615, name: "Trouser", price: "₹1799", image: "https://i.pinimg.com/736x/4f/ac/fd/4facfdab5d4c8b5d4e443a2c2df05558.jpg" },
  { id: 616, name: "Trouser", price: "₹1099", image: "https://i.pinimg.com/1200x/55/74/2c/55742c0e8c87da92e45422c340b6df0a.jpg" }
];

const ProductPage6 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {
  
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

      <h2 className="title">Men Collection</h2>

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
            }

            }>Add to Cart</button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductPage6;