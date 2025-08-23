import Nav from "./nav";
import HomePage from "./homePage";
import Footer from "./footer";
import "./global.css";


export default function Page(){
  return(
    <div className="main-bg">
      <Nav/>
      <HomePage/>
      <Footer/>
    </div>
  );
};