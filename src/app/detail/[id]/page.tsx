"use client";

import Navbar from "@/app/components/fragments/navbar";
import ModalLogin from "@/app/Modals/loginModal";
import { useAppsSelector } from "../../../../utils/redux/store";
import KiriDetail from "./kiri";
import TengahDetail from "./tengah";
import KananDetail from "./kanan";
import ModalRegister from "@/app/Modals/registerModal";

export default function DetailProduct(props: any) {
  const { params } = props;

  let product = JSON.parse(localStorage.getItem("products") || "").map(
    (product: any) =>
      product.data.find((product: any) => product.product_id == params.id)
  );
  product = product.find((product: any) => product !== undefined);

  const isLoginModal = useAppsSelector((state) => state.modalSlice.login);
  const isRegisterModal = useAppsSelector((state) => state.modalSlice.register);

  return (
    <>
      {isRegisterModal && <ModalRegister></ModalRegister>}
      {isLoginModal && <ModalLogin></ModalLogin>}
      <Navbar />;
      <div className="mt-[5rem] justify-center flex">
        <KiriDetail products={product} />
        <TengahDetail products={product}></TengahDetail>
        <KananDetail products={product}></KananDetail>
      </div>
    </>
  );
}
