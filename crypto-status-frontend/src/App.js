// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import CryptoStats from "./components/CryptoStats";
import CryptoDeviation from "./components/CryptoDeviation";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <CryptoStats />
        <hr />
        <CryptoDeviation />
      </div>
    </div>
  );
}

export default App;
