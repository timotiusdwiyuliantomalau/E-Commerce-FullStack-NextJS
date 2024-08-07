"use client";

import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { deleteCookie } from "../../../../utils/cookies";
import FixNavbar from "../fragments/content/navbar/fixNavbar";
import { useAppsSelector } from "../../../../utils/redux/store";

export default function NavbarLogin() {
  let user = JSON.parse(localStorage.getItem("user") || "");
  const addToCartSlice=useAppsSelector(state=>state.addToCartSlice);
  const cart = addToCartSlice.reduce((acc: any, current: any) => acc + current.qty, 0);
  return (
    <>
      <FixNavbar>
        <main className="flex gap-8 items-center z-10">
          <span className="flex gap-4">
            <IoMdNotificationsOutline className="w-8 h-8 opacity-60 hover:opacity-100 cursor-pointer rounded-md text-2xl" />
            <MdOutlineEmail className="w-8 h-8 opacity-60 hover:opacity-100 cursor-pointer rounded-md p-[2px]"></MdOutlineEmail>
            <Link href="/cart" className="relative">
              <FiShoppingCart className=" w-8 h-8 opacity-60 hover:opacity-100 cursor-pointer rounded-md p-[2px] block"></FiShoppingCart>
              <div className={`bg-red-500 ${cart != 0 ? "block":"hidden"} text-white absolute text-sm rounded-full -right-2 scale-75 w-5 h-5 font-semibold z-10 -top-1 text-center`}>
                {cart}
              </div>
            </Link>
          </span>
          <p className="text-3xl font-extralight text-gray-300">|</p>
          <Image
            className="w-10 rounded-full cursor-pointer"
            src="/images/user_profile.png"
            alt="user_profile"
            width={100}
            height={100}
            onClick={() => {
              deleteCookie("isLogin").then((res) => {
                if (!res) window.location.href = "/";
              });
            }}
          ></Image>
        </main>
      </FixNavbar>
    </>
  );
}
