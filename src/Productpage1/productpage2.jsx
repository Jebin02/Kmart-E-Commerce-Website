import React from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductPage.css";

export const products = [
  { id: 201, name: "Apple Iphone ", price: "₹299999", image: "https://i.pinimg.com/1200x/19/28/7c/19287c8799f8c0ce38103cfe7a240bea.jpg" },
  { id: 202, name: "Apple Iphone", price: "₹99999", image: "https://i.pinimg.com/736x/5c/6e/6f/5c6e6f9b890b4f1178c529769370d9d6.jpg" },
  { id: 203, name: "Apple Iphone", price: "₹19999", image: "https://i.pinimg.com/736x/9b/3d/93/9b3d93c4683a5eeb25e70f94582b57a6.jpg" },
  { id: 204, name: "Apple Iphone", price: "₹199999", image: "https://i.pinimg.com/736x/f2/78/f5/f278f5127dc015e062911b29f01e55d1.jpg" },
  { id: 205, name: "Samsung Phones", price: "₹15999", image: "https://i.pinimg.com/736x/56/12/c0/5612c00e7e579814bf9d0e64a332481e.jpg" },
  { id: 206, name: "Samsung Phones", price: "₹14999", image: "https://i.pinimg.com/736x/55/c5/bd/55c5bd72186d30d640ea926ed1ac52af.jpg" },
  { id: 207, name: "Samsung Phones", price: "₹12999", image: "https://i.pinimg.com/736x/90/2d/92/902d923bb904a464cca5eb609f7c404e.jpg" },
  { id: 208, name: "Samsung Phones", price: "₹89999", image: "https://i.pinimg.com/736x/ad/2a/c3/ad2ac3f18cd1cb2ee904a87ecd1212a2.jpg" },
  { id: 209, name: "Pixel", price: "₹25999", image: "https://i.pinimg.com/736x/53/40/de/5340de90e12b18e5dce9a9092cbb7613.jpg" },
  { id: 210, name: "Pixal", price: "₹79999", image: "https://i.pinimg.com/736x/20/24/7b/20247bed1c362a7c4bb134133841d1b7.jpg" },
  { id: 211, name: "Redmi Phones", price: "₹69999", image: "https://i.pinimg.com/736x/08/f4/0f/08f40f32f850d2ced58e1235804bba7d.jpg" },
  { id: 212, name: "Redmi Phones", price: "₹11999", image: "https://i.pinimg.com/736x/52/86/cd/5286cdd0f99a6340d8c0eeb561cde4bf.jpg" },
  { id: 213, name: "Realme Phones", price: "₹49999", image: "https://i.pinimg.com/736x/98/b8/33/98b83398e6e078accc4f37bea34da177.jpg" },
  { id: 214, name: "Realme Phones", price: "₹12999", image: "https://i.pinimg.com/736x/24/84/47/248447cbde0b71d3b753f1430aa345e6.jpg" },
  { id: 215, name: "Vivo Phones", price: "₹17999", image: "https://i.pinimg.com/736x/1b/c4/8d/1bc48dfce913428448114a13114b6bae.jpg" },
  { id: 216, name: "Vivo Phones", price: "₹10999", image: "https://i.pinimg.com/736x/7d/a6/15/7da61517c14cf18b7af73b57d4d99459.jpg" }
];

const ProductPage2 = ({ wishlist = [], setWishlist, cart = [], setCart }) => {


// ✅ CHECK IF ITEM EXISTS
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // ✅ FIXED TOGGLE (BEST VERSION)
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      return exists
      ? prev.filter((item)=>item.id !==product.id)
      :[...prev,product];
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

      <h2 className="title">Mobile Phones</h2>

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

            <button className="cart-btn"
            onClick={(e)=>{
              e.stopPropagation();
              addToCart(item)
            }}>

            Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage2;