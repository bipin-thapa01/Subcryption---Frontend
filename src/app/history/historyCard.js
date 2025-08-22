import "./history.css";

export default function HistoryCard ({transactionId, data}){
  const transaction = JSON.parse(data[1]);
  return(
    <div className="history-table-row">
      <div>{transactionId+1}</div>
      <div>{transaction[0].name}</div>
      <div>{transaction.method}</div>
      <div className="history-table-amount">{transaction.price}</div>
      <div>{transaction.type}</div>
      <div>{transaction.time+"  "+transaction.date}</div>
    </div>
  )
}