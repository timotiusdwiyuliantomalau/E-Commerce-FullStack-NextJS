"use client";

import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { HiRefresh } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { MdChangeCircle, MdVerified } from "react-icons/md";

export default function Shipment() {
  const products = JSON.parse(localStorage.getItem("cartShipment") || "");
  return (
    <>
      <div className="mt-[9rem] flex flex-col items-center scale-110">
        <h1 className="w-9/12 text-2xl font-bold mb-6 ">Pengiriman</h1>
        <div className="flex justify-between w-9/12 ">
          <main className="flex flex-col gap-12 ">
            <div className="flex flex-col border-l-blueP border-l-8 p-4 border-gray-200 border-[1px]">
              <h2 className="text-slate-600 font-semibold mb-1 text-lg">
                ALAMAT PENGIRIMAN
              </h2>
              <span className="flex gap-1 items-center ">
                <GoLocation />
                <p className="font-semibold">Rumah . Timotius</p>
              </span>
              <span className="flex  justify-between items-start">
                <p className="w-[27rem]">
                  Jalan Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt saepe sunt voluptate{" "}
                </p>
                <span className=" text-white text-sm rounded-md bg-redP p-2 flex gap-1 cursor-pointer group">
                  <HiRefresh className="text-lg group-hover:animate-spin"></HiRefresh>{" "}
                  <p>Ganti</p>
                </span>
              </span>
            </div>

            {products.length > 0 &&
              products.map((data: any, i: number) => (
                <div className="flex flex-col relative p-6 shadow-md rounded-lg border-[1px] border-gray-200">
                  <h2 className="text-slate-600 font-semibold mb-1 text-lg ">
                    PESANAN {i + 1}
                  </h2>
                  <span className="flex gap-1 items-center">
                    <MdVerified className="text-blue-400"></MdVerified>
                    <p className="font-semibold">{data.product.offer.store_name}</p>
                  </span>
                  <span className="flex gap-4 mt-1">
                    <Image
                      src={data.product.product_photos[0]}
                      width={300}
                      height={300}
                      alt="Gambar Produk"
                      className="w-32 h-32"
                    ></Image>
                    <span className="flex flex-col gap-2">
                      <p className="w-[20em] h-12 overflow-hidden">
                        {data.product.product_title}
                      </p>
                      <select
                        className="w-44 bg-redP text-white pl-2 cursor-pointer"
                        name=""
                        id=""
                      >
                        <option className="" value="">
                          Pilih Pengiriman
                        </option>
                        <option className="flex gap-6" value="Reguler">Reguler (+$1.2)
                        </option>
                        <option className="" value="Kargo">
                          Kargo (+$1.6)
                        </option>
                      </select>
                    </span>
                    <p className="text-lg font-semibold">5 x ${data.product.typical_price_range[0].split("$")[1]}</p>
                  </span>
                </div>
              ))}
          </main>
          <main className="bg-yellow-300 h-full p-6 rounded-lg pb-10 ">
            <h2 className="font-semibold text-xl mb-2">Rekap Belanja</h2>
            <span className="flex justify-between">
              <p className="text-sm text-slate-700">Total Harga (8 barang)</p>
              <p className="font-semibold text-slate-700">$64</p>
            </span>
            <p className="font-semibold">Total Belanja</p>
            <span className="flex justify-between w-full bg-red-100 border-2 border-redP py-1 rounded-md gap-2 items-center cursor-pointer p-4 mt-3">
              <span className="flex gap-2 items-center">
                <Image
                  src={"/images/voucher.png"}
                  className="w-8 h-8 object-contain object-center"
                  width={300}
                  height={300}
                  alt="Gambar Produk"
                ></Image>
                <p className="text-sm">Makin hemat pakai promo</p>
              </span>
              <IoIosArrowForward className="text-gray-600" />{" "}
            </span>
            <button className="w-full py-2 bg-blueP text-white font-semibold rounded-md mt-5">
              Pilih Pembayaran
            </button>
          </main>
        </div>
      </div>
    </>
  );
}
