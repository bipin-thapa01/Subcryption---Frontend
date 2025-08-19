import { useState, useEffect } from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";

export default function IntroCard({ data, desc }) {
  const [introCard, setintroCard] = useState(null);

  useEffect(() => {
    if (data) {
      setintroCard(
        <div className="intro-card item-card">
          <Image src={data.imgurl} alt="Image"
            width={100} height={100} className="intro-card-image" />
          <div className="intro-card-sub">
            <div className="intro-card-title">
              {data.name}
            </div>
            <div className="intro-card-time">
              <PiClockClockwiseBold className="intro-card-icon" style={{ fill: "skyblue" }} />
              <div>
                {desc.time}
              </div>
            </div>
            <div className="intro-card-country">
              <BiWorld 
              style={{ fill: "skyblue" }}/>
              <div>
                {desc.country}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }, [data]);
  return (
    <>
      {introCard}
    </>
  );
}