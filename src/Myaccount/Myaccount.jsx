import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyAccount.css";

const MyAccount = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <h2 style={{ textAlign: "center" }}>No user data found</h2>;

  return (
    <div className="account-container">
      <div className="account-box">

        <h2>My Account</h2>

        {/* 👤 Profile Image */}
        <div className="account-image">
          <img
            src={
              user.image ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
          />
        </div>

        {/* DETAILS */}
        <div className="account-details">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>DOB:</strong> {user.dob}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>

        {/* ✏️ EDIT BUTTON */}
        <button
          className="edit-profile-btn"
          onClick={() => navigate("/profile")}
        >
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default MyAccount;