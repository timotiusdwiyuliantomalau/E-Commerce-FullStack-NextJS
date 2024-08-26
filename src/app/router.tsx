"use client";

import { useAppsSelector } from "../../utils/redux/store";
import CartPage from "./cart/page";
import Shipment from "./cart/shipment/page";
import DetailProduct from "./detail/[id]/page";
import LocationFormModal from "./Modals/addLocationModal";
import ModalLogin from "./Modals/loginModal";
import ModalRegister from "./Modals/registerModal";
import Home from "./page";
import { usePathname } from "next/navigation";

export default function Router(props:any) {
  const isLoginModal = useAppsSelector((state) => state.modalSlice.login);
  const isRegisterModal = useAppsSelector((state) => state.modalSlice.register);
  const addLocationModal=useAppsSelector((state)=>state.addLocationSlice);
  const url = usePathname();
  return (
    <>
      {isLoginModal && <ModalLogin></ModalLogin>}
      {isRegisterModal && <ModalRegister></ModalRegister>}
      {addLocationModal && <LocationFormModal/>}
      {url === "/" && <Home />}
      {url.split("/").length === 3 && url.split("/")[1]==="detail" && <DetailProduct />}
      {url === "/cart" && <CartPage />}
      {url === "/cart/shipment" && <Shipment />}
    </>
  );
}
