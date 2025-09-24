// src/UsersAditya.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/UsersAditya.css";

export default function UsersAditya() {
  const navigate = useNavigate();

  return (
    <div className="container box">
      <h2>USER MANAGEMENT</h2>

      <div className="button-group">
        <button className="custom-btn" onClick={() => navigate("/display")}>
          Display Users
        </button>
        <button className="custom-btn" onClick={() => navigate("/add")}>
          Add User
        </button>
      </div>
    </div>
  );
}
