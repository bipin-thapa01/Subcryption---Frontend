"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import icon from "../../public/icon.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import "./global.css";
import './footer.css';

export default function Footer() {
  const router = useRouter();
  const now = new Date();
  const year = now.getFullYear();
  const instaLink = 'https://www.instagram.com/subcryption?igsh=MTRtZGFpdW9kaXo5Yw==';
  const facebookLink = 'https://www.facebook.com/share/1GbDj5dDq4/';
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <div className="footer-contact-title">Contact Details Below:</div>
        <div className="footer-links">
          <div className="footer-link">
            <FaInstagram />
            <div onClick={() => router.push(`${instaLink}`)}>Instagram</div>
          </div>
          <div className="footer-link">
            <FaFacebook />
            <div onClick={() => router.push(`${facebookLink}`)}>Facebook</div>
          </div>
          <div className="footer-link">
            <MdOutlineEmail />
            <div>helpsubcryption@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright <FaRegCopyright /> {`${year}`} Subcryption All Rights Reserved
      </div>
    </div>
  );
}