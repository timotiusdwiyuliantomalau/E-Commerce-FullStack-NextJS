"use client";

import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAddLocationAlt, MdOutlineEmail } from "react-icons/md";
import { deleteCookie, getCookie } from "../../../../utils/cookies";
import FixNavbar from "../fragments/content/navbar/fixNavbar";
import { useAppsSelector } from "../../../../utils/redux/store";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import LocationFormModal from "@/app/Modals/addLocationModal";

export default function NavbarLogin() {
  let [user,setUser] = useState(JSON.parse(localStorage.getItem("user") || ""));
  const [addLocation,setAddLocation]=useState(false);
  const addToCartSlice = useAppsSelector((state) => state.addToCartSlice);
  const submitLocation=useAppsSelector((state)=>state.action);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || ""));
  },[submitLocation])
  const cart = addToCartSlice.reduce(
    (acc: any, current: any) => acc + current.qty,
    0
  );

  return (
    <>
      <FixNavbar>
        <main className="flex gap-8 items-center z-10 ">
          {addLocation&&<LocationFormModal/>}
          <div className="flex flex-col gap-4 h-full">
            <span className="flex scale-125 gap-2 place-self-end">
              <IoMdNotificationsOutline className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer rounded-md text-2xl" />
              <MdOutlineEmail className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer rounded-md p-[2px]"></MdOutlineEmail>
              <Link href="/cart" className="relative">
                <FiShoppingCart className=" w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer rounded-md p-[2px] block"></FiShoppingCart>
                <div
                  className={`bg-red-500 ${
                    cart != 0 ? "block" : "hidden"
                  } text-white absolute text-sm rounded-full -right-2 scale-75 w-5 h-5 font-semibold z-10 -top-1 text-center`}
                >
                  {cart}
                </div>
              </Link>
            </span>
            {!user.location ? (
              <span className="flex gap-1 items-center cursor-pointer">
                <MdAddLocationAlt />
                <p onClick={()=>setAddLocation(true)} className="text-xs">Isi Alamat Dahulu!</p>
              </span>
            ) : (
              <span className="text-xs flex items-center gap-1 cursor-pointer group">
               <FaLocationDot className=" text-redP"/> 
               <p className="group-hover:underline">
               {user.location?.alamat_lengkap.substring(0, 25)}...
               </p>
                
              </span>
            )}
          </div>
          <p className="text-3xl font-extralight text-gray-300">|</p>
          <Image
            className="w-10 rounded-full cursor-pointer"
            src="/images/user_profile.png"
            alt="user_profile"
            width={100}
            height={100}
            onClick={() => {
              deleteCookie("isLogin").then((res) => {
                if (!res){
                  localStorage.removeItem("user");
                  localStorage.removeItem("cartShipment");
                  window.location.href = "/";
                } 
              });
            }}
          ></Image>
        </main>
      </FixNavbar>
    </>
  );
}
