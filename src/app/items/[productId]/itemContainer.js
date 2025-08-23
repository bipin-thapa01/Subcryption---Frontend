"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ImCross } from "react-icons/im";
import IntroCard from "./introCard";
import DescriptionCard from "./descriptionCard";
import Requirement from "./requirement";
import Amount from "./amount";
import Payment from "./payment";
import "./itemContainer.css"

export default function ItemContainer({ productId }) {
  const router = useRouter();
  const [itemData, setItemData] = useState(null);
  const [basicData, setBasicData] = useState(null);
  const [description, setDescription] = useState(null);
  const [amount, setAmount] = useState(null);
  const [requirement, setRequirement] = useState(null);
  const [requiredInfo, setRequiredInfo] = useState(null);
  const [purchaseType, setPurchaseType] = useState(null);
  const [paymentType, setPaymentType] = useState(null);

  const [requirementCard, setRequirementCard] = useState(null);
  const [paymentDetailsCards, setPaymentDetailsCards] = useState(null);
  const [amountCard, setAmountCard] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    if (requiredInfo == null || purchaseType == null || paymentType == null) {
      alert('Before submitting make sure to enter data properly!');
      return;
    }
    //for database
    console.log(purchaseType);
    const res = await fetch('https://subcryption-backend.onrender.com/upload-form',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...requiredInfo, ...purchaseType, ...paymentType }),
      });

    // for email
    const emailData = new FormData();
    emailData.append("name",paymentType.name);
    emailData.append("email",paymentType.email);
    emailData.append("paymentMethod",paymentType.method);
    emailData.append("purchaseType",purchaseType.type);
    emailData.append("pricePaid",purchaseType.price);
    emailData.append("image",paymentType.image);
    const res2 = await fetch('https://subcryption-backend.onrender.com/send-email',
    {
      method: 'POST',
      body: emailData,
    })
    const data2 = await res2.json();

    //to store data in localhost. i will change this in future after login is added
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '/');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const data = await res.json();
    const length = localStorage.length;
    localStorage.setItem(`purchase${length + 1}`, JSON.stringify({ ...itemData, ...requiredInfo, ...purchaseType, ...paymentType, date: formattedDate, time: formattedTime }));

    const successMessage = document.getElementById('payment-successful-message');
    const errorMessage = document.getElementById('payment-error-message');
    if (data.ok === 'ok') {
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
        router.push('/');
      }, 5000)
    }
    else {
      errorMessage.style.display = 'block'
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://subcryption-backend.onrender.com/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: productId }),
      });
      const data = await res.json();
      setItemData(data);
    }

    fetchData();
  }, [productId]);

  useEffect(() => {
    if (itemData) {
      setBasicData({
        name: itemData[0].name,
        company: itemData[0].company,
        imgurl: itemData[0].imgurl
      });
      setDescription(itemData[0].item_description);
      setAmount(itemData[0].amount);
      setRequirement(itemData[0].requirement);
    }
  }, [itemData]);

  const hideMessage = () => {
    const successMessage = document.getElementById('payment-successful-message');
    const errorMessage = document.getElementById('payment-error-message');
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
  }

  return (
    <>
      {!basicData || !requirement || !amount ? (

        <div className="item-loading">Loading Data. Be Patient...</div>
      ) : (
        <div className="item-container">

          <div id="payment-successful-message" style={{ display: "none" }}>
            <ImCross className="payment-message-cross" onClick={hideMessage} />
            <div className="payment-successful-message-title">
              Payment Request Sent Successfully!
            </div>
            <div className="payment-successful-message-desc">
              Your request will be proceeded soon!
            </div>
          </div>
          <div id="payment-error-message" style={{ display: "none" }}>
            <ImCross className="payment-message-cross" onClick={hideMessage} />
            <div className="payment-successful-message-title">
              Payment Request Error!
            </div>
            <div className="payment-successful-message-desc">
              Try to resubmit with same payment verification!
            </div>
          </div>


          <div className="left-cards">
            <IntroCard data={basicData} desc={description} />
            <DescriptionCard desc={description} />
          </div>

          <form className="right-cards" onSubmit={submitForm}>
            <Requirement
              requirement={requirement}
              requirementCard={requirementCard}
              setRequirementCard={setRequirementCard}
              onEnter={setRequiredInfo}
            />
            <Amount
              amount={amount}
              amountCard={amountCard}
              setAmountCard={setAmountCard}
              onSelect={setPurchaseType}
            />
            <Payment
              paymentDetailsCards={paymentDetailsCards}
              setPaymentDetailsCards={setPaymentDetailsCards}
              onSelect={setPaymentType}
            />
            <button className="form-submit-button">Pay Now</button>
          </form>
        </div>
      )}
    </>
  );
}