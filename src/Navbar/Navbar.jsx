import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaSignOutAlt
} from "react-icons/fa";

import "./Navbar.css";

const Navbar = ({ wishlistCount = 0, cartCount = 0 }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("user");
  alert("Logout successful ✅");
  navigate("/");
};

  

  const handleProfileClick = () => {
    const isLoggedIn = localStorage.getItem("user");

    if (isLoggedIn) {
      navigate("/login");
    } else {
      setShowDropdown(true);
    }
  };

  // ✅ NEW: Common navigation handler (FIX)
  const handleNavigate = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  useEffect(() => {
    const closeAll = () => {
      setShowBrands(false);
      setShowCategories(false);
    };

    
    document.addEventListener("click", closeAll);
    return () => document.removeEventListener("click", closeAll);
  }, []);

  return (
    <div className="navbar-container">

      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <FaMapMarkerAlt />
          <span>Add delivery location</span>
        </div>

        <div className="top-right">
          <span>    </span>      
          <span>EN</span>
          <button
  className="orders-btn"
  onClick={() => navigate("/order")}
>
  Return & Orders
</button>
          <span>Customer care</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">

        <div className="logo">
          <h2 onClick={() => navigate("/")}>
            K<span>Mart</span>
          </h2>
        </div>

        <div
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </div>

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>

          {/* Menu */}
          <div className="menu">

            <div
              className="menu-item"
              onClick={(e) => {
                e.stopPropagation();
                setShowBrands(!showBrands);
                setShowCategories(false);
              }}
            >
              <span>Brands ▾</span>

              {showBrands && (
                <div className="dropdown">
                  <button onClick={() => navigate("productpage3")}>Nike</button>
                  <button onClick={() => navigate("productpage6")}>Puma</button>
                  <button onClick={() => navigate("productpage7")}>Adidas</button>
                  <button onClick={() => navigate("productpage2")}>Apple</button>
                </div>
              )}
            </div>

            <div
              className="menu-item"
              onClick={(e) => {
                e.stopPropagation();
                setShowCategories(!showCategories);
                setShowBrands(false);
              }}
            >
              <span>Categories ▾</span>

              {showCategories && (
                <div className="dropdown">
                  <button onClick={() => navigate("productpage")}>Clothing</button>
                  <button onClick={() => navigate("productpage4")}>Shoes</button>
                  <button onClick={() => navigate("productpage11")}>Electronics</button>
                  <button onClick={() => navigate("productpage10")}>Accessories</button>
                </div>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="search-bar">
            <input type="text" placeholder="What are you looking for?" />
          </div>

          {/* ✅ PROFILE BUTTON */}
{localStorage.getItem("user") && (
  <button
    className="profile-btn"
    onClick={() => navigate("/profile")}
  >
    My Profile
  </button>
)}

             
          {/* Icons */}
          <div className="icons">
          


            {/* Profile */}
            <div className="profile" onClick={handleProfileClick}>
              <FaUser />
            </div>

            {/* ❤️ Wishlist */}
            <div
              className="wishlist-icon-nav"
              onClick={() => navigate("/wishlist")}
            >
              <FaHeart color={wishlistCount > 0 ? "red" : "white"} />

              {wishlistCount > 0 && (
                <span className="wishlist-count">{wishlistCount}</span>
              )}
            </div>

            {/* 🛒 Cart */}
            <div
              className="cart-icon"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart />

              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </div>
            {localStorage.getItem("user") && (
  <div className="logout-icon" onClick={handleLogout}>
    <FaSignOutAlt title="Logout" />
  </div>
)}

          </div>
        </div>
      </div>

      {/* Modal */}
      {showDropdown && (
        <div className="modal-overlay" onClick={() => setShowDropdown(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <button
              className="close-btn"
              onClick={() => setShowDropdown(false)}
            >
              ×
            </button>

            <h3 className="modal-title">Welcome to KMart</h3>
            <p className="modal-text">
              Please log in or register to continue
            </p>

            <div className="modal-buttons">
              {/* ✅ FIXED BUTTONS */}
              <button
                className="btn login-btn"
                onClick={() => handleNavigate("/login")}
              >
                Login
              </button>

              <button
                className="btn register-btn"
                onClick={() => handleNavigate("/register")}
              >
                Register
              </button>

              <button
                className="btn admin-btn"
                onClick={() => handleNavigate("/adminlogin")}
              >
                Admin Login
              </button>
         
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;