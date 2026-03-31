import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ add this
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ initialize

  return (
    <div className="register-container">

      <div className="register-box">

        {/* Left Side */}
        <div className="register-left">
          <h2>KKart</h2>
          <p>Create your account & start shopping</p>
        </div>

        {/* Right Side */}
        <div className="register-right">

          <h3>Create Account</h3>

          {/* ✅ handle submit here */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // 👉 later you can add validation/API here

              navigate("/login"); // ✅ redirect after register
            }}
          >

            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            {/* Mobile Number */}
            <div className="phone-box">
              <span>+91</span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                maxLength="10"
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Password */}
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

            <input type="password" placeholder="Confirm Password" required />

            {/* ✅ submit button */}
            <button className="register-btn" type="submit">
              Register
            </button>

          </form>

          <p className="or">OR</p>

          {/* ✅ Login redirect */}
          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;