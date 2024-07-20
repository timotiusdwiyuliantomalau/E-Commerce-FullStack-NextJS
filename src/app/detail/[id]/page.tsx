"use client";

import Navbar from "@/app/components/fragments/navbar";
import Image from "next/image";
import { Edit2, MinusCircle, PlusCircle } from "react-feather";

export default function DetailProduct(props: any) {
  const { params } = props;
  let product = JSON.parse(localStorage.getItem("products") || "").map(
    (product: any) =>
      product.data.find((product: any) => product.product_id == params.id)
  );
  product = product.find((product: any) => product !== undefined);
  const productAtt = JSON.stringify(product.product_attributes)
    .replace(/{|}|"/g, "")
    .split(",")
    .map(
      (product: any) =>
        product.split(":").length > 1 && (
          <span className="flex gap-2">
            <p>{product.split(":")[0]}</p> : <p>{product.split(":")[1]}</p>
          </span>
        )
    );

  return (
    <>
      <Navbar />;
      <div className="mt-[5rem] flex">
        <div>
          <Image
            className="w-"
            src={product.product_photos[0]}
            alt="Gambar Produk"
            width={300}
            height={300}
          ></Image>
          <h2>ULASAN PEMBELI</h2>
          <p>5.0</p>
          <p>99% pembeli merasa puas</p>
          <p>200 rating . {product.product_num_reviews}</p>
        </div>

        <div className="w-[40em]">
          <h1 className="text-xl font-bold w-[30rem]">{product.product_title}</h1>

          <span className="flex gap-12">
            <p>Terjual {product.product_num_offers || 0}</p>
            <p>
              {product.product_rating}({product.product_num_reviews || 0})
            </p>
          </span>
          <p className="font-bold text-3xl mt-1 mb-8">{product.typical_price_range[0]}</p>

          <div className="flex flex-col">
            {productAtt}
            <p>{product.product_description}</p>
          </div>

          <div className="grid">
            <span className="flex">
              <Image
                className="w-12 h-12"
                width={300}
                height={300}
                src={"/images/diskon_sepatu.png"}
                alt="Gambar Toko"
              ></Image>
              <span className="flex">
                <span className="grid">
                  <p>Broket</p>
                  <p>Online 2 jam lalu</p>
                </span>
                <span className="">Follow</span>
              </span>
            </span>
            <p>5(23)</p>
            <p>12 menit diproses</p>
          </div>

          <div>
            <h2>Pengiriman</h2>
            <p>Dikirim dari</p>
            <p>Ongkir reguler 8 rb - 10 rb</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-[1px] rounded-lg border-gray-300 h-full p-4 ml-8 w-[18rem] mt-[2rem]">
          <p className="font-semibold text-lg mb-1">Atur jumlah dan catatan</p>
          <span className="flex items-center gap-2">
            <span className="flex justify-between px-1 w-[5rem] border-[1px] rounded-lg scale-110 border-gray-300">
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
            <p className="font-bold text-xl">Rp. {product.typical_price_range[0]}</p>
          </span>
          <span className="grid gap-2 mt-2">
            <p className="bg-blueP font-bold py-2 rounded-lg text-white text-center">Beli</p>
            <p className="border-blueP border-[1px] font-bold py-2 rounded-lg text-blueP text-center">+ Keranjang</p>
          </span>
          <span className="flex">
            <p>Chat</p>
            <p>Wishlist</p>
            <p>Share</p>
          </span>
        </div>
      </div>
    </>
  );
}
