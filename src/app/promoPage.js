"use client";

import {useState, useEffect} from "react";
import "./promo.css";

export default function PromoPage() {

  const [detail, setDetail] = useState(null);

  useEffect(()=>{
    const data = [
      {
        count: "1000+",
        desc: "Real Time Users",
      },
      {
        count: "500+",
        desc: "Positive Feedbacks",
      },
      {
        count: "20+",
        desc: "Subscription Types"
      }
    ];

    setDetail(data.map((item, index) => {
      return (
        <div key={index}>
          <div id={`count${index}`} className="count">{item.count}</div>
          <div id={`desc${index}`} className="desc">{item.desc}</div>
        </div>
      );
    }));
  },[]);

  return (
    <div className="promo-page">
      <div className="part1">
        <div className="promo-title">Subcryption</div>
        <div className="promo-desc">Your goto website to buy services.</div>
      </div>
      <div className="part2">{detail}</div>
    </div>
  );
}