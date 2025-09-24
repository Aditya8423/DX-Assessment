import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersAditya from "./components/UsersAditya";
import DisplayAditya from "./components/DisplayAditya";
import AddUserAditya from "./components/AddUsersAditya";

function App() {
  return (

      <Routes>
        <Route path="/" element={<UsersAditya />} />
        <Route path="/display" element={<DisplayAditya />} />
        <Route path="/add" element={<AddUserAditya />} />
      </Routes>

  );
}

export default App;
