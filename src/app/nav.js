"use client";

import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import "./global.css";
import { useState, useEffect } from "react";

export default function Nav() {
  const router = useRouter();

  const [burger, setBurger] = useState(null);
  const [rightNav, setRightNav] = useState(null);

  useEffect(() => {
    setBurger(document.getElementById('burger'));
    setRightNav(document.getElementById('right-nav'));
  }, [])

  const showNav = () => {
    if (burger && rightNav) {
      burger.style.display = "none";
      rightNav.style.display = "flex";
    }
  }

  const hideNav = () => {
    if (burger && rightNav) {
      burger.style.display = "block";
      rightNav.style.display = "none";
    }
  }


  return (
    <div className="nav">
      <div className="logo" onClick={() => router.push("/")}>
        Subcryption
      </div>
      <div className="icon-container">
        <div className="icon icon1 left-icon" onClick={() => { router.push('/') }}>
          <AiFillHome className="home-icon" />
          <div className="icon-name">Home</div>
        </div>
        <div className="icon icon2 left-icon" onClick={() => { router.push('/history') }}>
          <MdOutlineHistory className="history-icon" />
          <div className="icon-name">History</div>
        </div>
        <div className="icon left-icon" id="left-icon-profile" onClick={() => { router.push('/profile') }}>
          <IoPerson className="profile-icon" />
          <div className="icon-name">Profile</div>
        </div>
      </div>
      <div className="icon-container2">
        <RxHamburgerMenu id="burger" onClick={() => { showNav() }} />
        <div id="right-nav">
          <div className="right-nav-cont">
            <ImCross className="cross" onClick={() => { hideNav() }} />
            <div className="font">
              Subcryption
            </div>
          </div>
          <div className="icon r" onClick={() => { router.push('/') }}>
            <AiFillHome className="home-icon" />
            <div className="icon-name2">Home</div>
          </div>
          <div className="icon r" onClick={() => { router.push('/history') }}>
            <MdOutlineHistory className="history-icon" />
            <div className="icon-name2">History</div>
          </div>
          <div className="icon r" id="right-icon-profile" onClick={() => { router.push('/profile') }}>
            <IoPerson className="profile-icon" />
            <div className="icon-name2">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}