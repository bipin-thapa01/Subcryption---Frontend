"use client";

import {useState, useEffect} from "react";
import HistoryCard from "./historyCard";
import "./history.css";

export default function History(){
  const [transactions, setTransactions] = useState(null);
  const [transactionCards, setTransactionCards] = useState(null);

  useEffect(()=>{
    const tran = {};
    for(let i=0;i<localStorage.length;i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      tran[key] = value;
    }
    setTransactions(tran);
  },[]);

  useEffect(()=>{
    if(transactions){
      setTransactionCards(Object.entries(transactions).map((item,index)=>{
        return <HistoryCard key={index} transactionId={index} data={item}/>
      }));
    }
  },[transactions]);

  return(
    <>
      {
        !transactionCards?
        (<div className="history-loading">Loading. Be Patient...</div>):
        (<div className="history-cards-container">
          <div className="history-head">Past Purchases</div>
          <div className="history-table-head">
            <div>Transaction Number</div>
            <div className="history-game-title">Game</div>
            <div>Payment Method</div>
            <div>Amount</div>
            <div>Purchase Type</div>
            <div>Time</div>
          </div>
          {transactionCards}
        </div>)
      }
    </>
  );
}