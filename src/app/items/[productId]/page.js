import ItemContainer from "./itemContainer";
import "../../global.css";

export default async function Page({params}){
  const {productId} =  await params;
  return (
    <div className="main-bg">
      <ItemContainer productId={productId}/>
    </div>
  );
}