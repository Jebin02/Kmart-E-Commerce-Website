import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [user, setUser] = useState({
    firstName: storedUser.firstName || "",
    lastName: storedUser.lastName || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
    dob: storedUser.dob || "",
    gender: storedUser.gender || "",
    image: storedUser.image || "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Saved Successfully ✅");
    navigate("/myaccount");
  };

  return (
    <div className="profile-container">
      <div className="profile-box">

        {/* 👤 PROFILE IMAGE TOP */}
        <div className="profile-image">
          <img
            src={
              user.image ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
          />
          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* NAME */}
        <div className="row">
          <input
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL + PHONE */}
        <div className="row">
          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Mobile Number"
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        {/* DOB + GENDER */}
        <div className="row">
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
          />

          <div className="gender-box">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={user.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={user.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={user.gender === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        {/* ADDRESS */}
        <textarea
          name="address"
          placeholder="Residential Address"
          value={user.address}
          onChange={handleChange}
        />

        {/* SAVE */}
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>

      </div>
    </div>
  );
};

export default Profile;