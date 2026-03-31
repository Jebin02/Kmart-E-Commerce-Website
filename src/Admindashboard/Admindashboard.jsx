import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Mock sold data (you can connect to cart/orders later)
  const [sales, setSales] = useState([
    { id: 1, name: "T-Shirt", sold: 5 },
    { id: 2, name: "Shoes", sold: 3 },
  ]);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Product
  const handleAddProduct = () => {
    if (!form.name || !form.price) {
      alert("Fill all fields");
      return;
    }

    const newProduct = {
      ...form,
      id: Date.now(),
    };

    setProducts([...products, newProduct]);
    resetForm();
  };

  // Edit Product
  const handleEdit = (product) => {
    setForm(product);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updatedProducts = products.map((p) =>
      p.id === form.id ? form : p
    );

    setProducts(updatedProducts);
    setIsEditing(false);
    resetForm();
  };

  // Delete Product
  const handleDelete = (id) => {
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
  };

  const resetForm = () => {
    setForm({ id: null, name: "", price: "", image: "" });
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      {/* FORM */}
      <div className="form-section">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        {isEditing ? (
          <button onClick={handleUpdate}>Update Product</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>

      {/* PRODUCT LIST */}
      <h3>All Products</h3>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>

            <button onClick={() => handleEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* SALES SECTION */}
      <h3>Sales Report</h3>
      <div className="sales-section">
        {sales.map((item) => (
          <div key={item.id} className="sales-card">
            <h4>{item.name}</h4>
            <p>Sold: {item.sold}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;