import "./history.css";

export default function HistoryCard({ transactionId, data }) {
  const transaction = JSON.parse(data[1]);
  return (
    <div className="history-table-row">
      <div className="history-cell">
        <div className="history-subtitle">Transaction Number:</div>
        <div className="transaction-id">{transactionId + 1}</div>
      </div>
      <div className="history-cell">
        <div className="history-subtitle">Game:</div>
        <div>{transaction[0].name}</div>
      </div>
      <div className="history-cell">
        <div className="history-subtitle">Payment Method:</div>
        <div>{transaction.method}</div>
      </div>
      <div className="history-cell">
        <div className="history-subtitle">Amount:</div>
        <div className="history-table-amount">{transaction.price}</div>
      </div>
      <div className="history-cell">
        <div className="history-subtitle">Purchase Type</div>
        <div>{transaction.type}</div>
      </div>
      <div className="history-cell">
        <div className="history-subtitle">Time</div>
        <div>{transaction.time + "  " + transaction.date}</div>
      </div>
    </div>
  )
}