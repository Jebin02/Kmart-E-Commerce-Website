import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

// ✅ unique name + unique IDs
export const products4 = [
  { id: 401, name: "Casual Shoe", price: "₹2999", image: "https://i.pinimg.com/736x/a0/60/19/a06019beeba3cc711e94876063b35501.jpg" },
  { id: 402, name: "Casual Shoe", price: "₹9999", image: "https://i.pinimg.com/736x/ad/16/63/ad16635158c1a51c57cce85aade3f6f7.jpg" },
  { id: 403, name: "Casual Shoe", price: "₹1999", image: "https://i.pinimg.com/736x/df/78/1f/df781fac7c13c9585d2c34411af61592.jpg" },
  { id: 404, name: "Casual Shoe", price: "₹1999", image: "https://i.pinimg.com/736x/64/99/49/64994931e4581d01b3d22bd24773e504.jpg" },
  { id: 405, name: "Casual Shoe", price: "₹1999", image: "https://i.pinimg.com/736x/ce/af/21/ceaf21c671cc9b4ed6c9c68adcac1d2b.jpg" },
  { id: 406, name: "Casual Shoe", price: "₹1499", image: "https://i.pinimg.com/1200x/e4/b4/52/e4b452e517db6aa441e89a5e1784fcff.jpg" },
  { id: 407, name: "Casual Shoe", price: "₹1299", image: "https://i.pinimg.com/736x/65/25/e3/6525e36eaa7dcf2883c9f031f915d978.jpg" },
  { id: 408, name: "Casual Shoe", price: "₹8999", image: "https://i.pinimg.com/1200x/a3/0f/ea/a30feac65c74113d7c1b2e8a0537a624.jpg" },
  { id: 409, name: "Casual Shoe", price: "₹2599", image: "https://i.pinimg.com/1200x/d2/81/e8/d281e811275ac28c553916ea232d9525.jpg" },
  { id: 410, name: "Casual Shoe", price: "₹7999", image: "https://i.pinimg.com/1200x/12/27/e2/1227e2879acc128dadf0674212fe6cdd.jpg" },
  { id: 411, name: "Casual Shoe", price: "₹6999", image: "https://i.pinimg.com/1200x/2e/d0/c3/2ed0c3655eb93ed1d783e8e365855266.jpg" },
  { id: 412, name: "Casual Shoe", price: "₹1199", image: "https://i.pinimg.com/1200x/7f/78/34/7f783411c4201dda450ab6e667a4ff39.jpg" },
  { id: 413, name: "Casual Shoe", price: "₹4999", image: "https://i.pinimg.com/1200x/7b/dd/e9/7bdde99b43dfad6eeedf2857d822c674.jpg" },
  { id: 414, name: "Casual Shoe", price: "₹1299", image: "https://i.pinimg.com/736x/69/60/62/696062ab78036e682011ab2ba634b1a6.jpg" },
  { id: 415, name: "Casual Shoe", price: "₹1799", image: "https://i.pinimg.com/736x/da/d0/3e/dad03e6ba533a5ba99e858f985dfefaf.jpg" },
  { id: 416, name: "Casual Shoe", price: "₹1099", image: "https://i.pinimg.com/736x/ff/be/6b/ffbe6ba95b504fc8d440d021185a2ee5.jpg" }
];

const ProductPage4 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {
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

      {/* ✅ Fixed title */}
      <h2 className="title">Casual Shoes</h2>

      <div className="product-grid">
        {products4.map((item) => (
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

            <button className="cart-btn"
            onClick={(e)=>{
              e.stopPropagation();
              addToCart(item)
            }}>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductPage4;

