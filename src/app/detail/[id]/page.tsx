"use client";

import KiriDetail from "./kiri";
import TengahDetail from "./tengah";
import KananDetail from "./kanan";
import { useAppsSelector } from "../../../../utils/redux/store";
import ModalLogin from "@/app/Modals/loginModal";
import ModalRegister from "@/app/Modals/registerModal";
import { usePathname } from "next/navigation";

export default function DetailProduct(props: any) {
  const params = usePathname();
  let product = JSON.parse(localStorage.getItem("products") || "").map(
    (product: any) =>
      product.data.find((product: any) => product.product_id == params.split("/")[2])
  );
  product = product.find((product: any) => product !== undefined);
  const isLoginModal = useAppsSelector((state) => state.modalSlice.login);
  const isRegisterModal = useAppsSelector((state) => state.modalSlice.register);
  return (
    <>
    
      <div className="justify-center flex">
      {isLoginModal && <ModalLogin></ModalLogin>}
      {isRegisterModal && <ModalRegister></ModalRegister>}
      <div className="justify-center flex mt-[7rem]">
        <KiriDetail products={product} />
        <TengahDetail products={product}></TengahDetail>
        <KananDetail products={product}></KananDetail>
        </div>
      </div>
    </>
  );
}
