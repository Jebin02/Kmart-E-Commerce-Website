import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AdminLogin from "./Adminlogin/Adminlogin";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Login from "./login/Login";
import Navbar from "./Navbar/Navbar";
import Register from "./Register/Register";

import ProductPage from "./Productpage1/productpage";
import Productpage1 from "./Productpage1/productpage1";
import Productpage2 from "./Productpage1/productpage2";
import Productpage3 from "./Productpage1/productpage3";
import Productpage4 from "./Productpage1/productpage4";
import Productpage5 from "./Productpage1/productpage5";
import Productpage6 from "./Productpage1/productpage6";
import Productpage7 from "./Productpage1/productpage7";
import Productpage8 from "./Productpage1/productpage8";
import Productpage9 from "./Productpage1/productpage9";
import Productpage10 from "./Productpage1/productpage10";
import Productpage11 from "./Productpage1/productpage11";
import ProductPage12 from "./Productpage1/productpage12";

import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import About from "./About/About";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";
import Terms from "./Terms/Terms";
import Faq from "./Faq/Faq";
import Privacy from "./Privacy/Privacy";
import Profile from "./Profile/Profile";
import MyAccount from "./Myaccount/Myaccount";
import Order from"./Order/Order"
import AdminDashboard   from "./Admindashboard/Admindashboard";


function App() {
  // ❤️ WISHLIST STATE
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // 🛒 CART STATE
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🔎 GLOBAL SEARCH STATE
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved ? JSON.parse(saved) : false;
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
  };

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={cart.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      <Routes>
        {/* Homepage with login protection */}
        <Route
          path="/"
          element={
            <Homepage
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/homepage"
          element={
            <Homepage
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />

        {/* Login/Register/Admin */}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Info pages */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile" element={<Profile />} />
       <Route path="/myaccount" element={<MyAccount />} />
       <Route path="/Order" element={<Order />} />
       <Route path="/Admindashboard" element={<AdminDashboard />} />


        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              wishlist={wishlist}
              setCart={setCart}
              setWishlist={setWishlist}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />

        {/* Cart & Wishlist */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} setCart={setCart} />}
        />

        {/* Product Pages */}
        <Route
          path="/productpage"
          element={
            <ProductPage
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage1"
          element={
            <Productpage1
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage2"
          element={
            <Productpage2
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage3"
          element={
            <Productpage3
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage4"
          element={
            <Productpage4
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage5"
          element={
            <Productpage5
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage6"
          element={
            <Productpage6
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage7"
          element={
            <Productpage7
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage8"
          element={
            <Productpage8
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage9"
          element={
            <Productpage9
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage10"
          element={
            <Productpage10
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage11"
          element={
            <Productpage11
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
        <Route
          path="/productpage12"
          element={
            <ProductPage12
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              isLoggedIn={isLoggedIn}
              triggerLogin={handleLogin}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;