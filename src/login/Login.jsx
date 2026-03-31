import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-container">

      <div className="login-box">

        {/* Left Side */}
        <div className="login-left">
          <h2>KKart</h2>
          <p>Shop smarter, faster, better.</p>
        </div>

        {/* Right Side */}
        <div className="login-right">

          <h3>Login</h3>

          {/* ✅ FIXED LOGIN FUNCTION */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // ✅ STORE LOGIN STATUS
              localStorage.setItem("user", "true");

              // ✅ SUCCESS MESSAGE
              alert("Login successful ✅");

              // ✅ REDIRECT TO HOME
              navigate("/");
            }}
          >

            <input
              type="email"
              placeholder="Email address"
              required
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>

          </form>

          <p className="or">OR</p>

          {/* Social Login */}
          <div className="social-login">
            <button className="google">Login with Google</button>
            <button className="facebook">Login with Facebook</button>
          </div>

          {/* Register */}
          <p className="register-text">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>
              Register
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;