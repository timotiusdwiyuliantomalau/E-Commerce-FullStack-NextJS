"use client";

import { useAppsSelector } from "../../utils/redux/store";
import LocationFormModal from "./Modals/addLocationModal";
import ModalLogin from "./Modals/loginModal";
import ModalRegister from "./Modals/registerModal";
export default function Router() {
  const isLoginModal = useAppsSelector((state) => state.modalSlice.login);
  const isRegisterModal = useAppsSelector((state) => state.modalSlice.register);
  const addLocationModal = useAppsSelector((state) => state.addLocationSlice);

  return (
    <>
      {isLoginModal && <ModalLogin></ModalLogin>}
      {isRegisterModal && <ModalRegister></ModalRegister>}
      {addLocationModal && <LocationFormModal />}
    </>
  );
}
