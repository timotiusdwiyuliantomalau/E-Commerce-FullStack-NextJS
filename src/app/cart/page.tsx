"use client";
import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import ModalLogin from "../Modals/loginModal";
import ModalRegister from "../Modals/registerModal";
import { useAppsSelector } from "../../../utils/redux/store";
import { Heart, Trash2 } from "react-feather";
import { getCookie, setCookie } from "../../../utils/cookies";
import React, { useEffect,useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CartPage() {
  const isLoginModal = useAppsSelector((state) => state.modalSlice.login);
  const isRegisterModal = useAppsSelector((state) => state.modalSlice.register);
  const allCart = useAppsSelector((state) => state.addToCartSlice).reduce(
    (acc: number, curr: any) => acc + curr.qty,
    0
  );
  const [productsCart, setProductsCart] = useState([]);
  const [listCart, setListCart] = useState(Array);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const router=useRouter();
  const idUser=JSON.parse(localStorage.getItem("user")||"").id;

  useEffect(() => {
    getCookie("isLogin").then((res) => {
      if (res)
        setProductsCart(JSON.parse(localStorage.getItem("user") || "").cart);
    });
  }, []);

  const priceCart = listCart.reduce(
    (acc: number, curr: any) =>
      acc + (parseFloat(curr.product.typical_price_range[0].split("$")[1])*curr.qty),
    0
  );

  async function handleRemoveCart(e: any) {
    const result = await fetch("http://localhost:3000/api/update", {
      method:"PUT",
      body:JSON.stringify({data:{cart:[]},id:idUser})
    })
    const res=await result.json();
    localStorage.setItem("user",JSON.stringify({id:idUser,cart:[],location:JSON.parse(localStorage.getItem("user")||"").location}));
  }


  return (
    <>
      {isLoginModal && <ModalLogin></ModalLogin>}
      {isRegisterModal && <ModalRegister></ModalRegister>}
      <div className="flex flex-col pt-[7rem] items-center ">
        <h1 className="text-2xl font-semibold w-11/12 mb-5">Keranjang Saya</h1>
        <div className="flex gap-5 w-11/12">
          <main className="flex flex-col w-8/12 ">
            <div className="flex justify-between bg-redP text-white rounded-md py-3 px-5 ">
              <span className="flex gap-4 items-center ">
                <span className="block w-5 h-5 overflow-hidden  relative rounded-full ">
                  <FaCheck className="block absolute  bg-green-600 w-5 h-5 p-1 top-0"></FaCheck>
                  <input
                    type="checkbox"
                    onClick={(e: any) => {
                      setCheckboxChecked(!checkboxChecked);
                      if (e.target.id) {
                        e.target.removeAttribute("id");
                        return setListCart([]);
                      }
                      setListCart(
                        productsCart.map((data: any) => data)
                      );
                      e.target.setAttribute("id", 1);
                    }}
                    className={`group absolute w-5 h-5 bg-white top-0 checked:opacity-0 opacity-100 cursor-pointer`}
                  ></input>
                </span>
                <p className="font-semibold">
                  Pilih Semua{" "}
                  <span className="font-normal text-white">
                    ({productsCart.length > 0 && allCart})
                  </span>
                </p>
              </span>
              <p className="font-semibold">Hapus</p>
            </div>

            <div className="bg-white flex flex-col pt-5 pb-8 px-5 rounded-md -mt-1 gap-7 shadow-md">
              {productsCart.map((data: any, i: number) => (
                <div key={i}>
                  <span className="flex gap-4 items-center">
                    <span className="flex gap-1 items-center">
                      <IoStorefrontSharp className="text-blue-400" />
                      <p className="font-semibold">
                        {data.product.offer.store_name}
                      </p>
                    </span>
                  </span>
                  <span className="flex gap-4">
                    <span className="flex cursor-pointer ">
                      <span className="block w-5 h-5 overflow-hidden  relative rounded-full cursor-pointer">
                        <FaCheck className="block absolute  bg-green-600 w-5 h-5 p-1 top-0 text-white"></FaCheck>
                        {!checkboxChecked && (
                          <input
                            type="checkbox"
                            className={`${
                              checkboxChecked && "hidden"
                            } absolute w-7 h-7 bg-white -left-1 -top-1 checked:opacity-0 opacity-100 cursor-pointer `}
                            onClick={() => {
                              setListCart([...listCart, data]);
                              if (
                                listCart.find(
                                  (items: any) =>
                                    items.product.product_id == data.product.product_id
                                )
                              )
                                return setListCart(
                                  listCart.filter(
                                    (items: any) =>
                                      items.product.product_id !=
                                      data.product.product_id
                                  )
                                );
                            }}
                          ></input>
                        )}
                        {checkboxChecked && (
                          <>
                            <input
                              type="checkbox"
                              className={`absolute w-7 h-7 bg-white -left-1 -top-1 checked:opacity-0 opacity-100 cursor-pointer `}
                              onClick={() => {
                                setListCart([...listCart, data]);
                                if (
                                  listCart.find(
                                    (items: any) =>
                                      items.product.product_id ==
                                      data.product.product_id
                                  )
                                )
                                  return setListCart(
                                    listCart.filter(
                                      (items: any) =>
                                        items.product.product_id !=
                                        data.product.product_id
                                    )
                                  );
                              }}
                            ></input>
                            <span
                              id="check"
                              onClick={(e: any) => {
                                if (e.target.parentElement.id == "check") {
                                  e.target.parentElement.classList.toggle(
                                    "hidden"
                                  );
                                  setListCart(
                                    listCart.filter(
                                      (items: any) =>
                                        items.product.product_id !=
                                        data.product.product_id
                                    )
                                  );
                                  if (
                                    !listCart.find(
                                      (items: any) =>
                                        items.product.product_id ==
                                        data.product.product_id
                                    )
                                  )
                                    return setListCart([
                                      ...listCart,
                                      data,
                                    ]);
                                } else if (
                                  e.target.parentElement.parentElement.id ==
                                  "check"
                                ) {
                                  e.target.parentElement.parentElement.classList.toggle(
                                    "hidden"
                                  );
                                  setListCart(
                                    listCart.filter(
                                      (items: any) =>
                                        items.product.product_id !=
                                        data.product.product_id
                                    )
                                  );
                                  if (
                                    !listCart.find(
                                      (items: any) =>
                                        items.product.product_id ==
                                        data.product.product_id
                                    )
                                  )
                                    return setListCart([
                                      ...listCart,
                                      data,
                                    ]);
                                }
                              }}
                              className="flex items-center absolute  bg-green-600 w-5 h-5 p-1 top-0 text-white"
                            >
                              <FaCheck></FaCheck>
                            </span>
                          </>
                        )}
                      </span>
                    </span>
                    <Image
                      src={data.product.product_photos[0]}
                      className="w-[6rem] h-[6rem]"
                      alt="Gambar Produk"
                      width={300}
                      height={300}
                    ></Image>
                    <Link href={`/detail/${data.product.product_id}`} className="font-medium w-full hover:underline">
                      {data.product.product_title}
                    </Link>
                    <span className="grid h-[6rem] justify-between">
                      <p className="font-semibold text-lg text-right">
                        $ {parseFloat(
                          data.product.typical_price_range[0].split("$")[1]
                        ) * data.qty}
                      </p>
                      <span className="flex gap-4 place-self-end items-center text-gray-500 ">
                        <SlNote className="w-5 h-5"></SlNote>
                        <Heart className="w-5 h-5"></Heart>
                        <Trash2 onClick={handleRemoveCart} className="w-5 h-5"></Trash2>
                        <span className="  flex gap-4 items-center border-[1px] border-gray-300 py-1 px-2 rounded-md">
                          <BiMinus className="hover:bg-gray-200 cursor-pointer rounded-md"></BiMinus>
                          <p className="text-black">{data.qty}</p>
                          <BiPlus className="hover:bg-gray-200 cursor-pointer rounded-md"></BiPlus>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </main>

          <main className="flex flex-col bg-yellow-300 h-full items-center p-8 rounded-lg gap-8 w-4/12 ">
            <span className="w-full grid gap-2">
              <h1 className="font-semibold text-lg">Rincian Belanja</h1>
              <span className="flex justify-between pb-2 border-b-[1px] border-black border-opacity-40">
                <p>Total</p>
                <p className="font-semibold text-lg">$ {priceCart.toString().substring(0,5)}</p>
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
            <input
            type="submit"
              onClick={() => {
                if(listCart.length>0){
                localStorage.setItem("cartShipment", JSON.stringify(listCart));
                router.push("/cart/shipment");}else{
                  alert("Silahkan pilih produk terlebih dahulu")
                }
              }}
              value={"Beli"}
              className=" cursor-pointer bg-blueP text-center py-2 w-full rounded-md text-white font-semibold"
            ></input>
          </main>
        </div>
      </div>
    </>
  );
}
