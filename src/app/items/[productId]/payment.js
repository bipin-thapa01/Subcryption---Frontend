import { useState, useEffect } from "react";
import Image from "next/image";
import "./itemContainer.css";

export default function Payment({ onSelect }) {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [detailsCards, setDetailsCards] = useState(null);
  const [qrUrl, setQrUrl] = useState('');
  const [imageTag, setImageTag] = useState(null);
  const [rules, setRules] = useState(null);
  const [preview, setPreview] = useState("/not.png");

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
      setDetailsCards(
        paymentDetails.map((item, index) => {
          return <div className="payment-type-card" key={index} onClick={(e) => { selectPayment(e) }}>
            <Image className="payment-type-card-image" src={item.img} alt="image"
              width={100} height={100} />
            <div>
              <div className="payment-type-card-title">{item.title}</div>
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
    const method = e.currentTarget.querySelector('.payment-type-card-title').innerText;
    box.style.borderColor = 'purple';
    box.classList.add('selected');
    onSelect({
      method: method
    });

    const qrCard = document.getElementById('qr-card-id');
    qrCard.style.display = 'flex';
    for (let item of paymentDetails) {
      if (item.title === method) {
        setQrUrl(item.qrImg);
        setRules(item.paymentRules);
      }
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="item-card payment-card">
        <div className="title"><span>3.</span>Select the Payment Method</div>
        <div className="payment-cards-container">
          {
            detailsCards
          }
        </div>
      </div>
      <div className="item-card qr-card" id="qr-card-id">
        <div className="title"><span>4.</span>Scan Below QR to Pay</div>
        <div>
          {imageTag}
          <div className="qr-rules-container">
            <div className="note">Note:</div>
            <div className="qr-rules">{rules}</div>
          </div>
          <div className="proof-image-container">
            <input type="text" className="input"/>
            <div>Note: Upload the ScreenShot of the payment receipt.</div>
            <input type="file" accept="image/*" onChange={handleFileChange} className="proof-image-button"/>
            <img src={preview} alt="Preview" width={200}/>
          </div>
        </div>
      </div>
    </>
  );
}