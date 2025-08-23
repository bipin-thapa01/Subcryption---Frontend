import "./history.css";

export default function HistoryCard({ transactionId, data }) {
  let transaction;
  try {
    transaction = JSON.parse(data[1]);
  } catch (e) {
    return <div>Invalid transaction data</div>;
  }

  return (
    <div className="history-table-row">
      <div className="history-cell">
        <div className="history-subtitle">Transaction Number:</div>
        <div className="transaction-id">{transactionId + 1}</div>
      </div>

      <div className="history-cell">
        <div className="history-subtitle">Game:</div>
        <div>{transaction[0]?.name || "N/A"}</div>
      </div>

      <div className="history-cell">
        <div className="history-subtitle">Payment Method:</div>
        <div>{transaction.method || "N/A"}</div>
      </div>

      <div className="history-cell">
        <div className="history-subtitle">Amount:</div>
        <div className="history-table-amount">{transaction.price || "N/A"}</div>
      </div>

      <div className="history-cell">
        <div className="history-subtitle">Purchase Type</div>
        <div>{transaction.type || "N/A"}</div>
      </div>

      <div className="history-cell">
        <div className="history-subtitle">Time</div>
        <div>{transaction.time && transaction.date ? `${transaction.time} ${transaction.date}` : "N/A"}</div>
      </div>
    </div>
  );
}
