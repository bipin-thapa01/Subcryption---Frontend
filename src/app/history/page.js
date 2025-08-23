import Nav from "../nav";
import History from "./history";
import Footer from "../footer";
import "../global.css";

export default function Page(){
  return (
    <div className="history-page">
      <Nav />
      <History />
      <Footer/>
    </div>
  );
}