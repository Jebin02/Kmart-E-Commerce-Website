import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

export const products = [
  { id: 101, name: "T-shirt for Women ", price: "2999", image: "https://i.pinimg.com/1200x/82/03/8d/82038d537c5ff9f394b2b63e9cc7e5d0.jpg" },
  { id: 102, name: "T-shirt for Women", price: "999", image: "https://i.pinimg.com/736x/2a/34/f4/2a34f49afd629f11926b6599c5ba4f08.jpg" },
  { id: 103, name: "T-shirt for Women", price: "1999", image: "https://i.pinimg.com/1200x/80/79/29/807929b95eebbcac1fcb4cd0a52aa893.jpg" },
  { id: 104, name: "T-shirt for Women", price: "19999", image: "https://i.pinimg.com/736x/3c/db/c3/3cdbc313432ece310b4e7d525356068e.jpg" },
  { id: 105, name: "T-shirt for Women", price: "15999", image: "https://i.pinimg.com/736x/f8/e2/a4/f8e2a47aa23526f29f1df56997aa70f3.jpg" },
  { id: 106, name: "T-shirt for Women", price: "1499", image: "https://i.pinimg.com/1200x/aa/b9/3e/aab93ee41088e55f63011843a2227329.jpg" },
  { id: 107, name: "T-shirt for Women", price: "1299", image: "https://i.pinimg.com/736x/b5/3d/d2/b53dd2ed9f3319bb259dce988a65babb.jpg" },
  { id: 108, name: "T-shirt for Women", price: "899", image: "https://i.pinimg.com/1200x/2f/c5/da/2fc5da2be49ed20d48b4cad36e674279.jpg" },
  { id: 109, name: "T-shirt for Women", price: "2599", image: "https://i.pinimg.com/1200x/2c/3e/4a/2c3e4a9db16104c1d9b033ac2c243f3f.jpg" },
  { id: 110, name: "T-shirt for Women", price: "799", image: "https://i.pinimg.com/736x/bc/a4/44/bca444d5c1bf9f3f1d39c55e0f89eedc.jpg" },
  { id: 111, name: "T-shirt for Women", price: "699", image: "https://i.pinimg.com/736x/ef/d8/a1/efd8a1fc4b38c39be7b0675b504985c7.jpg" },
  { id: 112, name: "T-shirt for Women", price: "1199", image: "https://i.pinimg.com/736x/b3/71/af/b371af7b9d772b5e87ec2a66bb50a51a.jpg" },
  { id: 113, name: "T-shirt for Women", price: "499", image: "https://i.pinimg.com/736x/03/11/14/0311143abc3a4a27b699c80883cfe3b3.jpg" },
  { id: 114, name: "T-shirt for Women", price: "1299", image: "https://i.pinimg.com/736x/d6/7f/98/d67f9878d1400d4cdd1251c6886f63c9.jpg" },
  { id: 115, name: "T-shirt for Women", price: "1799", image: "https://i.pinimg.com/736x/b3/69/b6/b369b6509672aa912bdb584945bce95d.jpg" },
  { id: 116, name: "T-shirt for Women", price: "1099", image: "https://i.pinimg.com/736x/54/df/bb/54dfbb644c6b8d65f20f83bca0f1963a.jpg" }
];

const ProductPage1 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  // ✅ FIXED ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    console.log("Added to cart:", product);
  };

  return (
    <div className="product-container">
      <h2 className="title">T-Shirts for Women</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image-container">

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

            {/* ✅ DISPLAY FIX */}
            <p className="price">₹{item.price}</p>

            {/* ✅ CLICK FIX */}
            <button
              className="cart-btn"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage1;