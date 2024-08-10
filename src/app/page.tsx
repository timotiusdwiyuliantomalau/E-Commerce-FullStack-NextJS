"use client";

import { useEffect } from "react";
import { dataProducts } from "../../utils/fetchData";
import AtasHomepage from "./components/Homepage/atas";
import TengahHomepage from "./components/Homepage/tengah";
import { useAppsSelector } from "../../utils/redux/store";
import ModalLogin from "./Modals/loginModal";
import ModalRegister from "./Modals/registerModal";

export default function Home() {
  const styleHome = "w-[76rem] flex flex-col gap-20";
  useEffect(() => {
    localStorage.getItem("products") != null
      ? localStorage.getItem("products")
      : dataProducts((res: any) => {
          localStorage.setItem("products", JSON.stringify(res));
        });
  }, []);
  
  const isLoginModal = useAppsSelector((state) => state.modalSlice.login);
  const isRegisterModal = useAppsSelector((state) => state.modalSlice.register);
  
  return (
    <>
      <div>
        {isLoginModal && <ModalLogin></ModalLogin>}
        {isRegisterModal && <ModalRegister></ModalRegister>}
        <div className="grid gap-28">
          <AtasHomepage homeClassName={styleHome}></AtasHomepage>
          <TengahHomepage homeClassName={styleHome}></TengahHomepage>
        </div>
      </div>
    </>
  );
}
