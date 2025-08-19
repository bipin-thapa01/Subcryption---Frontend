import ItemContainer from "./itemContainer";
import Nav from "@/app/nav";
import "@/app/global.css";

export default async function Page({params}){
  const {productId} =  await params;
  return (
    <>
      <Nav/>
      <ItemContainer productId={productId}/>
    </>
  );
}