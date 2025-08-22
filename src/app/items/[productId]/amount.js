import { useState, useEffect } from "react";

export default function Amount({ amount,amountCard, setAmountCard, onSelect }) {
  const amountSelected = (e) => {
    const amounts = document.getElementsByClassName('amount');
    for (let div of amounts) {
      div.style.borderColor = "#090818";
      div.classList.remove('selected');
    }
    const amount = e.currentTarget;
    const type = e.currentTarget.querySelector('.amount-type').innerText;
    const price = e.currentTarget.querySelector('.amount-type-price').innerText;
    amount.style.borderColor = 'purple';
    amount.classList.add('selected');
    onSelect({
      type: type,
      price: price
    });
  }

  useEffect(() => {
    if (amount) {
      setAmountCard(
        amount.map((item, index) => {
          return <div key={index} id={index} className="amount" onClick={amountSelected}>
            <div className="amount-type">{item.type}</div>
            <div className="amount-type-price">{`Rs. ${item.price}`}</div>
          </div>
        })
      );
    }
  }, [amount]);
  return (
    <div className="item-card amount-card">
      <div className="amount-title title">
        <span>2. </span>
        <div>Select the Type You Want to Purchase</div></div>
      <div className="amount-container">
        {
          amountCard
        }
      </div>
    </div>
  );
}