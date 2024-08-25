import CartPage from "./cart/page";
import Shipment from "./cart/shipment/page";
import DetailProduct from "./detail/[id]/page";
import Home from "./page";

export default function Router() {
    const url=window.location.pathname;
  return (<>
  {url==="/"&&<Home/>}
  {url==="/[id]"&&<DetailProduct/>}
  {url==="/cart"&&<CartPage/>}
  {url==="/cart/shipment"&&<Shipment/>}
  </>)
}
