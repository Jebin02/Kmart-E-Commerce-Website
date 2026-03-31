import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

// ✅ export products (needed for App.jsx)
export const products = [
  { id: 901, name: "Earbuds", price: "₹2999", image: "https://i.pinimg.com/736x/71/1b/00/711b00dc657c11b15eb894f07eae276f.jpg" },
  { id: 902, name: "Earbuds", price: "₹999", image: "https://i.pinimg.com/736x/0f/da/2c/0fda2c77e5e6282e9b8026af3a2c75a1.jpg" },
  { id: 903, name: "Earbuds", price: "₹1999", image: "https://i.pinimg.com/736x/da/f8/a8/daf8a8099950034b113242ae8342cc97.jpg" },
  { id: 904, name: "Earbuds", price: "₹19999", image: "https://i.pinimg.com/736x/31/bc/06/31bc061e4a17cbacbee6fcc93f5174c2.jpg" },
  { id: 905, name: "Earbuds", price: "₹15999", image: "https://i.pinimg.com/736x/01/25/11/01251172996a8bb811c24441acbd5df9.jpg" },
  { id: 906, name: "Earbuds", price: "₹1499", image: "https://i.pinimg.com/1200x/5e/63/1c/5e631cdbf1b2c1de6788cf808da41f88.jpg" },
  { id: 907, name: "Earbuds", price: "₹1299", image: "https://i.pinimg.com/736x/fc/af/54/fcaf54426f9f69925bf510bb5c8d7cfb.jpg" },
  { id: 908, name: "Earbuds", price: "₹899", image: "https://i.pinimg.com/1200x/ef/e7/1e/efe71efc64dc984f25a2f951153fd77b.jpg" },
  { id: 909, name: "Earbuds", price: "₹25999", image: "https://i.pinimg.com/736x/61/99/00/6199005f78bbc58c9eaf981103d3133b.jpg" },
  { id: 910, name: "Earbuds", price: "₹799", image: "https://i.pinimg.com/736x/06/b4/f7/06b4f7df75dd54a849d985e541d98b25.jpg" },
  { id: 911, name: "Earbuds", price: "₹699", image: "https://i.pinimg.com/736x/e7/7d/51/e77d51fc35ea2424f1e76ca5ebbdae68.jpg" },
  { id: 912, name: "Earbuds", price: "₹1199", image: "https://i.pinimg.com/736x/59/8a/4d/598a4d2c97cceaebfe13c3a096b0d8cb.jpg" },
  { id: 913, name: "Earbuds", price: "₹499", image: "https://i.pinimg.com/736x/83/4b/73/834b7329ec341dd76f1261f6f0058b70.jpg" },
  { id: 914, name: "Earbuds", price: "₹1299", image: "https://i.pinimg.com/1200x/76/8d/76/768d76b64b3e648bc7660210cee57f6d.jpg" },
  { id: 915, name: "Earbuds", price: "₹1799", image: "https://i.pinimg.com/736x/3a/f4/45/3af445a9fcafe873a21d1d27f1192414.jpg" },
  { id: 916, name: "Earbuds", price: "₹1099", image: "https://i.pinimg.com/1200x/d5/e7/b0/d5e7b05f8478a52bda36f8d982cc2f04.jpg" }
];

const ProductPage9 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {

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
      <h2 className="title">Earbuds</h2>

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

export default ProductPage9;