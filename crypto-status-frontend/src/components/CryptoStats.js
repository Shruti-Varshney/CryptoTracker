// src/components/CryptoStats.js
import React, { useState } from "react";
import axios from "axios";

const CryptoStats = () => {
  const [coin, setCoin] = useState("bitcoin");
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/stats?coin=${coin}`);
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <div>
      <h2>Cryptocurrency Stats</h2>
      <select value={coin} onChange={(e) => setCoin(e.target.value)}>
        <option value="bitcoin">Bitcoin</option>
        <option value="matic-network">Matic</option>
        <option value="ethereum">Ethereum</option>
      </select>
      <button onClick={fetchStats}>Get Stats</button>
      {stats && (
        console.log(stats),
        <div>
          <p><strong>Price:</strong> ${stats.price}</p>
          <p><strong>Market Cap:</strong> ${stats.marketCap}</p>
          <p><strong>24h Change:</strong> {stats["change24h"]}%</p>
        </div>
      )}
    </div>
  );
};

export default CryptoStats;
