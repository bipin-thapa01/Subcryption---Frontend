import { useState, useEffect } from "react";
import Image from "next/image";
import "./itemContainer.css";

export default function Payment({ paymentDetailsCards, setPaymentDetailsCards, onSelect }) {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [qrUrl, setQrUrl] = useState('');
  const [imageTag, setImageTag] = useState(null);
  const [rules, setRules] = useState(null);
  const [preview, setPreview] = useState("/not.png");
  const [method, setMethod] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('https://subcryption-backend.onrender.com/payment');
      const data = await res.json();
      setPaymentDetails(data);
    }

    fetchDetails();
  }, []);

  useEffect(() => {
    if (paymentDetails) {
      setPaymentDetailsCards(
        paymentDetails.map((item, index) => {
          return <div className="payment-type-card" key={index} onClick={(e) => { selectPayment(e) }}>
            <Image className="payment-type-card-image" src={item.img} alt="image"
              width={100} height={100} />
            <div>
              <div className="payment-type-card-title" >{item.title}</div>
              <div className="payment-type-card-desc">{item.desc}</div>
            </div>
          </div>
        })
      );
    }
  }, [paymentDetails]);

  useEffect(() => {
    setImageTag(qrUrl === "" ? null : <Image src={qrUrl} alt="qr code" width={100} height={100} className="qr-image" />);
  }, [qrUrl]);

  const selectPayment = (e) => {
    const boxes = document.getElementsByClassName('payment-type-card');
    for (let box of boxes) {
      box.style.borderColor = "#090818";
      box.classList.remove('payment-selected');
    }
    const box = e.currentTarget;
    box.style.borderColor = 'purple';
    box.classList.add('selected');
    const qrBox = document.getElementById('qr-card-id');
    qrBox.style.display = 'flex';
    setMethod(e.currentTarget.querySelector('.payment-type-card-title').innerText);
    const qrCard = document.getElementById('qr-card-id');
    qrCard.style.display = 'flex';
    for (let item of paymentDetails) {
      if (item.title === e.currentTarget.querySelector('.payment-type-card-title').innerText) {
        setQrUrl(item.qrImg);
        setRules(item.paymentRules);
      }
    }
    setFormData();
  }

  const setFormData = () =>{
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const remark = document.getElementById('remark-input').value;
    const image = document.getElementById('image-input').files[0];
    if(method){
      onSelect({
        method: method,
        name: name,
        email: email,
        remark: remark,
        image: image,
      });
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
    setFormData();
  };

  return (
    <>
      <div className="item-card payment-card">
        <div className="title"><span>3.</span><div>Select the Payment Method</div></div>
        <div className="payment-cards-container">
          {
            paymentDetailsCards
          }
        </div>
      </div>
      <div className="item-card qr-card" id="qr-card-id">
        <div className="title"><span>4.</span><div>Scan Below QR to Pay</div></div>
        <div>
          {imageTag}
          <div className="qr-rules-container">
            <div className="note">Note:</div>
            <div className="qr-rules">{rules}</div>
          </div>
          <div className="proof-image-container">
            <input name="email" placeholder="Enter your email"
              autoComplete="off" type="text" className="input" onChange={setFormData} id="email-input"/>
            <input name="name" placeholder="Enter your name"
              autoComplete="off" type="text" className="input" onChange={setFormData} id="name-input"/>
            <div style={{ color: 'red' }}>Login is under development so fill below field to verify your payment.</div>
            <div>Note: Upload the ScreenShot of the payment receipt.</div>
            <input type="text" onChange={setFormData} className="input" autoComplete="off" placeholder="Enter payment remark" id="remark-input"/>
            <input type="file" accept="image/*" onChange={handleFileChange} className="proof-image-button" id="image-input"/>
            <img src={preview} alt="Preview" width={200} />
          </div>
        </div>
      </div>
    </>
  );
}