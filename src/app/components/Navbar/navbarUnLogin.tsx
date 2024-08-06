"use client";

import Link from "next/link";
import { Search } from "react-feather";
import { openLoginModal } from "../../../../utils/redux/modalSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../utils/redux/store";
import { FiShoppingCart } from "react-icons/fi";
import FixNavbar from "../fragments/content/navbar/fixNavbar";

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  function openModalLogin() {
    dispatch(openLoginModal());
  }
  return (
    <>
      <FixNavbar>
      <main className="flex gap-6 items-center z-10">
        <FiShoppingCart onClick={()=>dispatch(openLoginModal())} className="w-7 h-7 opacity-60 hover:opacity-100 cursor-pointer rounded-md p-[2px]" />
          <p className="text-3xl font-extralight text-gray-300">|</p>
          <button
            onClick={openModalLogin}
            className="p-2 font-medium rounded-lg text-sm bg-[#00224D] text-white"
          >
            Masuk
          </button>
        </main>
      </FixNavbar>
    </>
  );
}
