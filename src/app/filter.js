"use client";

import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

export default function Filter({onTrigger}) {
  const [all, setAll] = useState(null);
  const [games, setGames] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(()=>{
    setAll(document.getElementById('all'));
    setGames(document.getElementById('games'));
    setSubscription(document.getElementById('subscription'));
    setServices(document.getElementById('services'));
  },[])

  const allFilter = () =>{
    if(all!=null&&games!=null&&subscription!=null&services!=null){
      all.style.backgroundColor = 'gray';
      games.style.backgroundColor = 'inherit';
      subscription.style.backgroundColor = 'inherit';
      services.style.backgroundColor = 'inherit';
      onTrigger("all");
    }
  }

  const  gamesFilter = () =>{
    if(all!=null&&games!=null&&subscription!=null&services!=null){
      all.style.backgroundColor = 'inherit';
      games.style.backgroundColor = 'gray';
      subscription.style.backgroundColor = 'inherit';
      services.style.backgroundColor = 'inherit';
      onTrigger("games");
    }
  }

  const subscriptionFilter = () =>{
    if(all!=null&&games!=null&&subscription!=null&services!=null){
      all.style.backgroundColor = 'inherit';
      games.style.backgroundColor = 'inherit';
      subscription.style.backgroundColor = 'gray';
      services.style.backgroundColor = 'inherit';
      onTrigger("subscription");
    }
  }

  const servicesFilter = () =>{
    if(all!=null&&games!=null&&subscription!=null&services!=null){
      all.style.backgroundColor = 'inherit';
      games.style.backgroundColor = 'inherit';
      subscription.style.backgroundColor = 'inherit';
      services.style.backgroundColor = 'gray';
      onTrigger("services");
    }
  }

  return (
    <div className="filter">
      <div className="filter-by">
        <FaFilter />
        <div>Filter</div>
      </div>
      <div className="filter-container">
        <div className="no-select" id="all" onClick={()=>allFilter()}>All</div>
        <div className="no-select" id="games" onClick={()=>gamesFilter()}>Games</div>
        <div className="no-select" id="subscription" onClick={()=>subscriptionFilter()}>Subscription</div>
        <div className="no-select" id="services" onClick={()=>servicesFilter()}>Services</div>
      </div>
    </div>
  );
}