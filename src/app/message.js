import { IoMdInformationCircleOutline } from "react-icons/io";
import "./message.css";

export default function Message(){
  return (
    <div className="message">
      <IoMdInformationCircleOutline className="message-icon"/>
      <div className="message-content">Login is under development so reach us at yukichin638@gmail.com</div>
    </div>
  );
}