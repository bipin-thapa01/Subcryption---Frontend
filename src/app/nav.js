"use client";

import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import "./global.css";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="nav">
      <div className="logo" onClick={() => router.push("/")}>
        Subcryption
      </div>
      <div className="icon-container">
        <div className="icon icon1" onClick={() => { router.push('/') }}>
          <AiFillHome className="home-icon" />
          <div className="icon-name">Home</div>
        </div>
        <div className="icon icon2" onClick={() => { router.push('/history') }}>
          <MdOutlineHistory className="history-icon" />
          <div className="icon-name">History</div>
        </div>
        <div className="icon" onClick={() => { router.push('/profile') }}>
          <IoPerson className="profile-icon" />
          <div className="icon-name">Profile</div>
        </div>
      </div>
      <div className="icon-container2">
        <div className="icon-2">
          <RxHamburgerMenu className="burger" />
          <ImCross className="cross" />
        </div>
        <div className="icon icon1" onClick={() => { router.push('/') }}>
          <div className="icon-name2">Home</div>
        </div>
        <div className="icon icon2" onClick={() => { router.push('/history') }}>
          <div className="icon-name2">History</div>
        </div>
        <div className="icon" onClick={() => { router.push('/profile') }}>
          <div className="icon-name2">Profile</div>
        </div>
      </div>
    </div>
  );
}