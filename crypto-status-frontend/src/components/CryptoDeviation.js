// src/components/CryptoDeviation.js
import React, { useState } from "react";
import axios from "axios";

const CryptoDeviation = () => {
  const [coin, setCoin] = useState("bitcoin");
  const [deviation, setDeviation] = useState(null);

  const fetchDeviation = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/deviation?coin=${coin}`);
      setDeviation(response.data.deviation);
    } catch (error) {
      console.error("Error fetching deviation:", error);
    }
  };

  return (
    <div>
      <h2>Price Deviation</h2>
      <select value={coin} onChange={(e) => setCoin(e.target.value)}>
        <option value="bitcoin">Bitcoin</option>
        <option value="matic-network">Matic</option>
        <option value="ethereum">Ethereum</option>
      </select>
      <button onClick={fetchDeviation}>Get Deviation</button>
      {deviation && (
        <p><strong>Standard Deviation:</strong> {deviation}</p>
      )}
    </div>
  );
};

export default CryptoDeviation;
