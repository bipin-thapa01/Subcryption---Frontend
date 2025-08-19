import { useState, useEffect } from "react";

export default function Amount({ amount }) {
  const [amountCard, setAmountCard] = useState(null);

  const amountSelected = (e) =>{
    const amounts = document.getElementsByClassName('amount');
    for (let div of amounts) {
      div.style.borderColor = "#090818";
      div.classList.remove('selected');
    }
    const amount = e.currentTarget;
    amount.style.borderColor = 'orange';
    amount.classList.add('selected');
  }

  useEffect(() => {
    if (amount) {
      console.log(amount)
      setAmountCard(
        <div className="item-card amount-card">
          <div className="amount-title title">
            <span>2. </span>
            Select the Type You Want to Purchase</div>
          <div className="amount-container">
            {
              amount.map((item, index) => {
                return <div key={index} id={index} className="amount" onClick={amountSelected}>
                  <div className="amount-type">{item.type}</div>
                  <div className="amount-type-price">{`Rs. ${item.price}`}</div>
                </div>
              })
            }
          </div>
        </div>
      );
    }
  }, [amount]);
  return (
    <>
      {amountCard}
    </>
  );
}