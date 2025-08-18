import Nav from "./nav";
import HomePage from "./homePage";
import "./global.css";
import { metadata } from "./layout";

export default function Page(){
  return(
    <div className="main-bg">
      <Nav/>
      <HomePage/>
    </div>
  );
};