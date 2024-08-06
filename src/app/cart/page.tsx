"use client";
import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import Navbar from "../components/Navbar/navbarUnLogin";
import { Heart, Trash2 } from "react-feather";
import { SlNote } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import ModalLogin from "../Modals/loginModal";
import ModalRegister from "../Modals/registerModal";
import { useAppsSelector } from "../../../utils/redux/store";

export default function CartPage() {
  const isLoginModal = useAppsSelector((state) => state.modalSlice.login);
  const isRegisterModal = useAppsSelector((state) => state.modalSlice.register);
  return (
    <>
      {isLoginModal && <ModalLogin></ModalLogin>}
      {isRegisterModal && <ModalRegister></ModalRegister>}
      <div className="flex flex-col h-screen pt-[6rem] items-center ">
        <h1 className="text-2xl font-semibold w-11/12 mb-5">Keranjang Saya</h1>
        <div className="flex gap-5 w-11/12">
          <main className="flex flex-col w-8/12 ">
            <div className="flex justify-between bg-redP text-white rounded-md py-3 px-5 ">
              <span className="flex gap-4 items-center">
                <input type="checkbox" className="w-4 h-4 rounded-md" />
                <p className="font-semibold">
                  Pilih Semua{" "}
                  <span className="font-normal text-white">(1)</span>
                </p>
              </span>
              <p className="font-semibold">Hapus</p>
            </div>
            <div className="bg-white flex flex-col py-5 px-5 rounded-md -mt-2 gap-2 -z-10  shadow-md">
              <span className="flex gap-4 items-center">
                <input type="checkbox" className="w-4 h-4 rounded-md" />
                <span className="flex gap-1 items-center">
                  <MdVerified className="text-blue-400"></MdVerified>
                  <p className="font-semibold">Toko</p>
                </span>
              </span>
              <span className="flex gap-4">
                <span className="flex">
                  <input type="checkbox" className="w-4 h-4 rounded-md" />
                </span>
                <Image
                  src={"/images/diskon_sepatu.png"}
                  className="w-[6rem] h-[6rem]"
                  alt="Gambar Produk"
                  width={300}
                  height={300}
                ></Image>
                <p className="font-medium w-full">Nama Produk Itu Adalah</p>
                <span className="grid h-[6rem] justify-between">
                  <p className="font-semibold text-lg text-right">Rp 20.000</p>
                  <span className="flex gap-4 place-self-end items-center text-gray-500 ">
                    <SlNote className="w-5 h-5"></SlNote>
                    <Heart className="w-5 h-5"></Heart>
                    <Trash2 className="w-5 h-5"></Trash2>
                    <span className="flex gap-4 items-center border-[1px] border-gray-300 py-1 px-2 rounded-md">
                      <BiMinus></BiMinus>
                      <p className="text-black">1</p>
                      <BiPlus></BiPlus>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </main>

          <main className="flex flex-col items-center p-8 rounded-lg gap-8 w-4/12 border-[2px] border-gray-200">
            <span className="w-full grid gap-2">
              <h1 className="font-semibold text-lg">Rincian Belanja</h1>
              <span className="flex justify-between pb-2 border-b-[1px] border-gray-200">
                <p>Total</p>
                <p className="font-semibold text-lg">Rp 20.000</p>
              </span>
            </span>
            <span className="flex justify-between w-full bg-red-100 border-2 border-redP py-3 rounded-md gap-2 items-center cursor-pointer p-4">
              <span className="flex gap-2 items-center">
                <Image
                  src={"/images/voucher.png"}
                  className="w-8 h-8"
                  width={300}
                  height={300}
                  alt="Gambar Produk"
                ></Image>
                <p>Makin hemat pakai promo</p>
              </span>
              <IoIosArrowForward className="text-gray-600" />{" "}
            </span>
            <button className=" bg-blueP py-2 w-full rounded-md text-white font-semibold">
              Beli (1)
            </button>
          </main>
        </div>
      </div>
    </>
  );
}
