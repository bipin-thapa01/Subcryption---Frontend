"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import "./card.css";

export default function Card({param}){
  const router = useRouter();
  return(
    <div className="card" onClick={()=>router.push(`/items/${param.id}`)}>
        <Image className="card-image" src={param.imgurl} width={100} height={100} alt="photo"/>
        <div className="detail-container">
          <div className="title">{param.name}</div>
          <div className="company">{param.company}</div>
        </div>
      </div>
  );
}