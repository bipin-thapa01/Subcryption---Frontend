"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const [purchaseType,setPurchaseType] = useState(null);
  const [paymentType, setPaymentType] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    if(requiredInfo==null||purchaseType==null||paymentType==null){
      alert('Before submitting make sure to enter data properly!');
      return;
    }
    const res = await fetch('https://subcryption-backend.onrender.com/upload-form',
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...requiredInfo,...purchaseType,...paymentType}),
    });
    const data = await res.json();
    console.log(data);
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

  return (
    <div className="item-container">
      <div className="left-cards">
        <IntroCard data={basicData} desc={description} />
        <DescriptionCard desc={description} />
      </div>
      <form className="right-cards" onSubmit={(e) => { submitForm(e) }}>
        <Requirement requirement={requirement} onEnter={setRequiredInfo}/>
        <Amount amount={amount} onSelect={setPurchaseType}/>
        <Payment onSelect={setPaymentType}/>
        <button className="form-submit-button">Pay Now</button>
      </form>
    </div>
  );
}