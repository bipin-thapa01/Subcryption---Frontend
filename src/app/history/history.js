"use client";

import { useState, useEffect } from "react";
import HistoryCard from "./historyCard";
import "./history.css";

export default function History() {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const tran = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      tran[key] = value;
    }
    setTransactions(tran);
  }, []);

  if (!transactions) {
    return <div className="history-loading">Loading. Be Patient...</div>;
  }

  const entries = Object.entries(transactions);

  if (entries.length === 0) {
    return <div className="history-empty">No Payment History Found</div>;
  }

  return (
    <div className="history-cards-container">
      <div className="history-head no-select">Past Purchases</div>
      <div className="history-table-head">
        <div className="no-select">Transaction Number</div>
        <div className="history-game-title no-select">Game</div>
        <div className="no-select">Payment Method</div>
        <div className="no-select">Amount</div>
        <div className="no-select">Purchase Type</div>
        <div className="no-select">Time</div>
      </div>

      {entries.map((item, index) => (
        <HistoryCard key={index} transactionId={index} data={item} />
      ))}
    </div>
  );
}
