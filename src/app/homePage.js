import PromoPage from "./promoPage";
import Filter from "./filter";
import "./homepage.css";

export default function HomePage(){
  const data = {

  }

  return(
    <div className="homepage">
      <PromoPage/>
      <Filter/>  
    </div>
  );
}