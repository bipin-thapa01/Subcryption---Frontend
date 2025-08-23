import { IoMdInformationCircleOutline } from "react-icons/io";
import "./message.css";

export default function Message(){
  return (
    <div className="message">
      <IoMdInformationCircleOutline className="message-icon"/>
      <div className="message-content">Login is under development so reach us at subcryption638@gmail.com</div>
    </div>
  );
}