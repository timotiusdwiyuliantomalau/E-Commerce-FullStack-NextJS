"use client";

import Navbar from "@/app/components/fragments/navbar";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Edit2, MinusCircle, PlusCircle } from "react-feather";
import { BsClock, BsFillStarFill, BsStar, BsTruck } from "react-icons/bs";
import { GoLocation, GoVerified } from "react-icons/go";

export default function DetailProduct(props: any) {
  const { params } = props;
  const [imageSelected, setImageSelected] = React.useState(0);
  let product = JSON.parse(localStorage.getItem("products") || "").map(
    (product: any) =>
      product.data.find((product: any) => product.product_id == params.id)
  );
  product = product.find((product: any) => product !== undefined);
  const productAtt = JSON.stringify(product.product_attributes)
    .replace(/{|}|"/g, "")
    .split(",")
    .map(
      (product: any, i: number) =>
        product.split(":").length > 1 && (
          <span key={i} className="flex gap-2">
            <p className="text-gray-700">{product.split(":")[0]}</p> :{" "}
            <p>{product.split(":")[1]}</p>
          </span>
        )
    );

  function selectingImage(e: any) {
    setImageSelected(e.target.id);
  }

  return (
    <>
      <Navbar />;
      <div className="mt-[5rem] justify-center flex">
        <main className=" fixed left-0 w-[22rem] ml-[2rem]">
          <div className="">
            <Image
              className="w-full h-[22rem] object-cover object-center rounded-lg"
              src={product.product_photos[imageSelected]}
              alt="Gambar Produk"
              width={300}
              height={300}
            ></Image>
            <span
              onClick={selectingImage}
              className="flex gap-3 w-full mt-3 overflow-x-scroll"
            >
              {product.product_photos.map((url: any, i: number) => (
                <Image
                  className="h-[4rem] w-[4rem] object-cover object-center rounded-lg cursor-pointer"
                  key={i}
                  src={url}
                  id={i.toString()}
                  alt={`Gambar ${i + 1}`}
                  width={300}
                  height={300}
                ></Image>
              ))}
            </span>
            <span>
              <h2>ULASAN PEMBELI</h2>
              <p>5.0</p>
              <p>99% pembeli merasa puas</p>
              <p>200 rating . {product.product_num_reviews}</p>
            </span>
          </div>
        </main>

        <main className="w-[36rem] translate-x-[2rem] h-[31rem] overflow-y-scroll">
          <h1 className="text-xl font-bold w-3/4">{product.product_title}</h1>
          <span className="flex gap-12">
            <p>Terjual {product.product_num_offers || 0}</p>
            <p className="flex items-center gap-2">
              <BsFillStarFill className="text-yellow-500 inline" />
              {product.product_rating} ({product.product_num_reviews || 0})
            </p>
          </span>
          <p className="font-bold text-3xl mt-1 mb-8">
            {product.typical_price_range[0]}
          </p>

          <div className="grid gap-4 pb-7 border-b-[2px] border-gray-200 ">
            <span>{productAtt}</span>
            <span className="grid gap-2">
              {product.product_description.split("-----").map((detail: any) => (
                <p className="">{detail}</p>
              ))}
            </span>
          </div>

          <div className="flex mt-[2rem] rounded-lg gap-3 text-black ml-5">
            <Image
              className="w-[4rem] h-[4rem] bg-black rounded-full"
              width={300}
              height={300}
              src={"/images/diskon_sepatu.png"}
              
              alt="Gambar Toko"
            ></Image>
            <span className="flex justify-between w-3/4 ">
              <span className="grid ">
                <p className="font-bold flex gap-1 items-center"><GoVerified className="text-blue-500"></GoVerified>{product.offer.store_name}</p>
                <p className="">
                  <span className="">Online</span>
                  <span className="font-semibold text-gray-500  ml-1">2 jam lalu</span>
                </p>
                <p className="text-sm flex items-center gap-2"><BsStar></BsStar> <span>5 <span className="text-gray-600 ">(23)</span></span></p>
                <p className="text-sm flex gap-2 items-center"><BsClock></BsClock> <span> +20 jam <span className="text-gray-600">pesanan diproses</span> </span></p>
              </span>
              <span className="w-28 rounded-lg flex bg-redP h-7 justify-center items-center font-semibold text-white cursor-pointer">
                Follow
              </span>
            </span>
          </div>

          <div className="mt-4 ml-5">
            <h2 className="font-bold">Pengiriman</h2>
            <p className="flex gap-2 items-center"><GoLocation></GoLocation> Dikirim dari <span className="font-medium">Jakarta Barat</span></p>
            <p className="flex gap-2 items-center"><BsTruck></BsTruck> Ongkir reguler 8 rb - 10 rb</p>
            <p className="text-gray-500 text-sm">Estimasi tiba besok - 30 Juli</p>
          </div>
        </main>

        <main className="flex fixed flex-col gap-6 border-[1px] w-[18rem] mr-[2rem] rounded-lg border-gray-300 h-[24rem] p-4 mt-[2rem] right-0">
          <p className="font-semibold text-lg mb-1">Atur jumlah dan catatan</p>
          <span className="flex items-center gap-2">
            <span className="flex justify-between px-2 py-1 w-[5rem] border-[1px] rounded-lg scale-110 border-gray-300">
              <MinusCircle className=" text-gray-200 w-4"></MinusCircle>
              <span>1</span>
              <PlusCircle className="w-4 opacity-40 text-blueP hover:opacity-90 cursor-pointer rounded-full "></PlusCircle>
            </span>
            <span className="flex gap-1 text-sm">
              <p>Stok Total</p>
              <p>:</p>
              <p className="font-bold">50</p>
            </span>
          </span>
          <span className="flex gap-1 items-center">
            <Edit2 className="text-blueP w-3"></Edit2>
            <p className="text-blueP text-sm font-bold">Tambah Catatan</p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-gray-600 ">Subtotal</p>
            <p className="font-bold text-xl">
              Rp. {product.typical_price_range[0]}
            </p>
          </span>
          <span className="grid gap-2 mt-2">
            <p className="bg-blueP font-bold py-2 rounded-lg text-white text-center">
              Beli
            </p>
            <p className="border-blueP border-[1px] font-bold py-2 rounded-lg text-blueP text-center">
              + Keranjang
            </p>
          </span>
          <span className="flex">
            <p>Chat</p>
            <p>Wishlist</p>
            <p>Share</p>
          </span>
        </main>
      </div>
    </>
  );
}
