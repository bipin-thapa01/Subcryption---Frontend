import ItemContainer from "./itemContainer";
import Nav from "@/app/nav";
import Footer from "@/app/footer";
import "@/app/global.css";

export const metadata = {
  title: "Subcryption - Home Page",
  description: "This is the homepage of the Subcryption Site.",
};

export default async function Page({params}){
  const {productId} =  await params;
  return (
    <>
      <Nav/>
      <ItemContainer productId={productId}/>
      <Footer/>
    </>
  );
}