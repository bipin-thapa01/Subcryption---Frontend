"use client";

import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import "./global.css";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="nav">
      <div className="icon icon1" onClick={()=>{router.push('/')}}>
        <AiFillHome />
        <div>Home</div>
      </div>
      <div className="icon icon2" onClick={()=>{router.push('/history')}}>
        <MdOutlineHistory />
        <div>History</div>
      </div>
      <div className="icon" onClick={()=>{router.push('/profile')}}>
        <IoPerson />
        <div>Profile</div>
      </div>
    </div>
  );
}