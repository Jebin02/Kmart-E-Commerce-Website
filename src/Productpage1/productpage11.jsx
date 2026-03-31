import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

// ✅ EXPORT THIS
export const products = [
  { id: 1101, name: "Watches", price: "₹2999", image:"https://i.pinimg.com/736x/08/e7/0a/08e70a94d43b007efda8ef04962e4895.jpg" },
  { id: 1102, name: "Watches", price: "₹999", image: "https://i.pinimg.com/736x/af/be/bf/afbebf53fc5ecd6e6c1780498c387fe1.jpg" },
  { id: 1103, name: "Watches", price: "₹1999", image: "https://i.pinimg.com/736x/50/7c/64/507c64e29a9c2a23ea0956c18889096a.jpg" },
  { id: 1104, name: "Watches", price: "₹19999", image: "https://i.pinimg.com/736x/2c/1f/0f/2c1f0f69822429d56693f5693c461411.jpg" },
  { id: 1105, name: "Watches", price: "₹15999", image: "https://i.pinimg.com/1200x/b6/34/81/b63481e87950aab6b4ade318f54fc8d0.jpg" },
  { id: 1106, name: "Watches", price: "₹1299", image: "https://i.pinimg.com/1200x/62/b4/8a/62b48a9f6c433d9785d4afaed176e583.jpg" },
  { id: 1107, name: "Watches", price: "₹1299", image: "https://i.pinimg.com/736x/34/07/7d/34077d43beea4c9897e63186a85c727d.jpg" },
  { id: 1108, name: "Watches", price: "₹1499", image: "https://i.pinimg.com/1200x/36/18/79/361879aae0ebd7e22af746d931a94979.jpg" },
  { id: 1109, name: "Watches", price: "₹1299", image: "https://i.pinimg.com/736x/cb/eb/d5/cbebd5d94403aff4d867e203b1ff3001.jpg" },
  { id: 1110, name: "Watches", price: "₹899", image: "https://i.pinimg.com/1200x/f3/67/d0/f367d0dc87ac7b38d4a0cba82c589eec.jpg" },
  { id: 1111, name: "Watches", price: "₹2599", image: "https://i.pinimg.com/1200x/11/35/da/1135dae13c5db93287e089bd7be4a0db.jpg" },
  { id: 1112, name: "Watches", price: "₹799", image: "https://i.pinimg.com/736x/8e/b7/9c/8eb79c31b5710dcf92dc1cf816fcb772.jpg" },
  { id: 1113, name: "Watches", price: "₹699", image: "https://i.pinimg.com/736x/1f/fa/0c/1ffa0c5dbde4000bd74c8f8e83875981.jpg" },
  { id: 1114, name: "Watches", price: "₹1199", image: "https://i.pinimg.com/736x/3a/e7/dd/3ae7ddfe638c1475310f8c0a95a82fab.jpg" },
  { id: 1115, name: "Watches", price: "₹499", image: "https://i.pinimg.com/736x/68/40/2c/68402ccf1d66ea3134acf6fca0ab8f22.jpg" },
  { id: 1116, name: "Watches", price: "₹1299", image: "https://i.pinimg.com/736x/ea/1b/15/ea1b1520ee5a32ab54a03d3760862b20.jpg" },
  { id: 1117, name: "Watches", price: "₹1799", image: "https://i.pinimg.com/736x/dc/c4/1b/dcc41b2d664b6bdc16836169a53dda0b.jpg" },
  { id: 1118, name: "Watches", price: "₹1099", image: "https://i.pinimg.com/736x/12/e1/c2/12e1c2d543ae8057fc24a54c87019b4d.jpg" }
];

const ProductPage11 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {

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

      <h2 className="title">Watches</h2>

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

export default ProductPage11;