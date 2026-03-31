import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

// ✅ export products (needed for App.jsx)
export const products = [
  { id: 801, name: "Dress for Kids", price: "₹2999", image: "https://i.pinimg.com/736x/95/b6/61/95b66183770537578be001721d035116.jpg" },
  { id: 802, name: "Dress for Kids", price: "₹999", image: "https://i.pinimg.com/736x/30/89/cd/3089cddcd7002879ad24310ce50a63fd.jpg" },
  { id: 803, name: "Dress for Kids", price: "₹1999", image: "https://i.pinimg.com/736x/6e/61/ca/6e61caea315bdf6047097312aef16fea.jpg" },
  { id: 804, name: "Dress for Kids", price: "₹19999", image: "https://i.pinimg.com/736x/4e/57/22/4e5722fd88a703686a16a176d71d77f4.jpg" },
  { id: 805, name: "Dress for Kids", price: "₹1599", image: "https://i.pinimg.com/736x/c8/38/89/c83889ff48fa75ec882a658ccdedc4d5.jpg" },
  { id: 806, name: "Dress for Kids", price: "₹1299", image: "https://i.pinimg.com/736x/f8/98/05/f8980590f4483ea68fe71fc5c7ec92b3.jpg" },
  { id: 807, name: "Dress for Kids", price: "₹899", image: "https://i.pinimg.com/736x/df/4d/20/df4d20df303660d6c65c0d245aa7b8da.jpg" },
  { id: 808, name: "Dress for Kids", price: "₹799", image: "https://i.pinimg.com/736x/37/0e/a2/370ea2c54ba0e3eb5bbd891ed886dab5.jpg" },
  { id: 809, name: "Dress for Kids", price: "₹699", image: "https://i.pinimg.com/736x/3e/05/5e/3e055e3149b4cd74f2c47af9400bc699.jpg" },
  { id: 810, name: "Dress for Kids", price: "₹1199", image: "https://i.pinimg.com/736x/ff/f5/f5/fff5f576aec353699a78ad5acd093eb6.jpg" },
  { id: 811, name: "Dress for Kids", price: "₹499", image: "https://i.pinimg.com/1200x/d5/b2/7a/d5b27a581ea35a64a0bdaea9ffda3654.jpg" },
  { id: 812, name: "Dress for Kids", price: "₹25999", image: "https://i.pinimg.com/736x/2c/b9/d5/2cb9d593c8fb6477257b126441754e1b.jpg" },
  { id: 813, name: "Dress for Kids", price: "₹1299", image: "https://i.pinimg.com/736x/17/87/fd/1787fd94e3fe54373ca8c4052d0187e3.jpg" },
  { id: 814, name: "Dress for Kids", price: "₹1799", image: "https://i.pinimg.com/736x/42/dc/28/42dc28e136cef4d05fd4c0da1eac1af2.jpg" },
  { id: 815, name: "Dress for Kids", price: "₹1099", image: "https://i.pinimg.com/736x/54/04/d9/5404d94318d42f09d092dbeec3f599fc.jpg" },
  { id: 816, name: "Dress for Kids", price: "₹1099", image: "https://i.pinimg.com/736x/9b/0d/51/9b0d517325b1da0142e229e422342c5f.jpg" }
];

const ProductPage8 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {

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
      <h2 className="title">Kids Dress</h2>

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

export default ProductPage8;