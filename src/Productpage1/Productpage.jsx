import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

export const products = [
  { id: 1, name: "Jacket", price: "₹2999", image: "https://i.pinimg.com/1200x/6e/3b/6c/6e3b6cff7af0c7e6445103d02f2bef5e.jpg" },
  { id: 2, name: "Jacket", price: "₹999", image: "https://i.pinimg.com/736x/dd/79/5b/dd795bd69a4d984df48c95ce02ff0108.jpg" },
  { id: 3, name: "Jacket", price: "₹1999", image: "https://i.pinimg.com/736x/78/64/b0/7864b0502a8e7a7208b8ff2ac0256358.jpg" },
  { id: 4, name: "Jacket", price: "₹19999", image: "https://i.pinimg.com/736x/3a/f5/68/3af568308434c30efff34289fe68e465.jpg" },
  { id: 5, name: "Jacket", price: "₹15999", image: "https://i.pinimg.com/736x/6c/36/ce/6c36ce1bbde953daa9a3cef358132484.jpg" },
  { id: 6, name: "Jacket", price: "₹1499", image: "https://i.pinimg.com/736x/94/7e/75/947e75fd9184a04b94bbb2f8cc049777.jpg" },
  { id: 7, name: "Jacket", price: "₹1299", image: "https://i.pinimg.com/736x/a4/35/f5/a435f5abe04daadc6aec61aee42a9728.jpg" },
  { id: 8, name: "Jacket", price: "₹899", image: "https://i.pinimg.com/736x/80/46/ff/8046ff40ad16db771946861c8242e07e.jpg" },
  { id: 9, name: "Jacket", price: "₹25999", image: "https://i.pinimg.com/736x/45/d7/f9/45d7f98345d864a6d9a16d08b012148e.jpg" },
  { id: 10, name: "Jacket", price: "₹799", image: "https://i.pinimg.com/736x/c7/ba/78/c7ba788d3d201ce2c807ef11ad2a4163.jpg" },
  { id: 11, name: "Jacket", price: "₹699", image: "https://i.pinimg.com/736x/cc/36/ef/cc36efc820cf4628e98111c1ca86b283.jpg" },
  { id: 12, name: "Jacket", price: "₹1199", image: "https://i.pinimg.com/1200x/f6/3e/0f/f63e0ff81af0214375bc526bb0583c9a.jpg" }
];

const ProductPage = ({ wishlist = [], setWishlist, cart = [], setCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ❤️ CHECK WISHLIST
  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  // ❤️ TOGGLE WISHLIST
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists ? prev.filter((item) => item.id !== product.id) : [...prev, product];
    });
  };

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="product-container">
      <h2 className="title">Jackets</h2>

      {/* 🔎 SEARCH BAR */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jackets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="image-container">
                {/* ❤️ HEART */}
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

              {/* 🛒 BUTTON */}
              <button className="cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;