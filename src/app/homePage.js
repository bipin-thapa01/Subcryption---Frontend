import PromoPage from "./promoPage";
import Filter from "./filter";
import CardContainer from "./cardContainer";
import "./homepage.css";

export default function HomePage(){
  return(
    <div className="homepage">
      <PromoPage/>
      <Filter/>
      <CardContainer/>  
    </div>
  );
}