import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // ✅ Dummy admin check (replace with backend later)
    if (email === "admin@kkart.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-dashboard");
    } else { 
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-container">

      <div className="admin-box">

        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            required
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Error */}
          {error && <p className="error">{error}</p>}

          <button type="submit" className="admin-btn">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;