// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>

      <div className="dashboard-section">
        <h3>Section 1</h3>
        <p>Content for section 1 goes here...</p>
      </div>

      <div className="dashboard-section">
        <h3>Section 2</h3>
        <p>Content for section 2 goes here...</p>
      </div>

      <div className="dashboard-section">
        <h3>Section 3</h3>
        <p>Content for section 3 goes here...</p>
      </div>

      <div className="dashboard-actions">
        <Link to="/admin/product">
          <button className="add-product-button">Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
