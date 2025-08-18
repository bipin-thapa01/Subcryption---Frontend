"use client";

import {useRef} from "react";
import PromoPage from "./promoPage";
import Filter from "./filter";
import CardContainer from "./cardContainer";
import "./homepage.css";

export default function HomePage(){
  const childRef = useRef();

  const passFilter = (type) =>{
    childRef.current.filterCard(type);
  }

  return(
    <div className="homepage">
      <PromoPage/>
      <Filter onTrigger={passFilter}/>
      <CardContainer ref={childRef}/>  
    </div>
  );
}