"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "react-feather";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { deleteCookie } from "../../../../utils/cookies";

export default function NavbarLogin() {
  return (
    <>
      <div className="fixed flex w-full top-0 justify-between px-12 py-4 items-center bg-white z-10 overflow-hidden">
        <div className="flex gap-[5rem] absolute -right-[15rem]">
          <div className="w-[10rem] h-screen bg-gradient-to-tr from-purple-400 to to-white blur-xl opacity-40 rounded-full left-0  rotate-[30deg] -translate-x-[28rem] -z-10"></div>
          <div className="w-[20rem] h-screen bg-gradient-to-l from-red-200 to-white blur-xl opacity-60 rounded-full rotate-[30deg]"></div>
          <div className="w-[25rem] h-screen bg-gradient-to-tr from-blue-400 to to-blue-100 blur-xl opacity-40 rounded-full   rotate-[30deg] -z-10"></div>
        </div>

        <div className="flex gap-8 items-center z-10">
          <Link className="font-bold text-3xl" href="/">
            SHOPin.
          </Link>
          <Link className="font-medium text-lg" href="">
            Kategori
          </Link>
        </div>
        <span className="flex relative w-[35rem]">
          <Search className="w-15 absolute text-gray-400 top-1/2 -translate-y-1/2 left-3"></Search>
          <input
            type="search"
            name=""
            id=""
            className="w-full border-[1px] border-gray-400 h-10 rounded-md pl-12"
          />
        </span>
        <div className="flex gap-8 items-center z-10">
          <span className="flex gap-4 ">
            <IoMdNotificationsOutline className="w-7 h-7 opacity-60 hover:opacity-100 cursor-pointer rounded-md text-2xl" />
            <MdOutlineEmail className="w-7 h-7 opacity-60 hover:opacity-100 cursor-pointer rounded-md p-[2px]"></MdOutlineEmail>
            <Link href="/cart">
              <FiShoppingCart className="w-7 h-7 opacity-60 hover:opacity-100 cursor-pointer rounded-md p-[2px]" />
            </Link>
          </span>
          <p className="text-3xl font-extralight text-gray-400">|</p>
          <Image
            className="w-10 rounded-full cursor-pointer"
            src="/images/user_profile.png"
            alt="user_profile"
            width={100}
            height={100}
            onClick={() => {
              deleteCookie("isLogin").then(res=>{
                if(!res) window.location.href="/";
              })
            }}
          ></Image>
        </div>
      </div>
    </>
  );
}
