import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/AddUsersAditya.css";

export default function AddUserAditya() {
  const [newUser, setNewUser] = useState({
    name: "",
    gender: "",
    phone: ""
  });

  const addUser = async () => {
    if (!newUser.name || !newUser.gender || !newUser.phone) {
      alert("Please fill all fields");
      return;
    }
    await axios.post("http://localhost:5000/users", newUser);
    setNewUser({ name: "", gender: "", phone: "" });
    alert("User Added Successfully!");
  };

  return (
    <div className="box">
    <Link to="/" className="back-link">⬅ Back</Link>
      <h2>Add New User</h2>
        <label>Name</label>
      <input
        type="text"
        className="add-user-input"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <label>Gender</label>
      <input
        type="text"
        className="add-user-input"
        placeholder="Gender"
        value={newUser.gender}
        onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
      />
      <label>Phone no.</label>
      <input
        type="text"
        className="add-user-input"
        placeholder="Phone"
        value={newUser.phone}
        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
      />
      <button className="add-user-btn" onClick={addUser}>
        Add User
      </button>

      <br />
    </div>
  );
}
