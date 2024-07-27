"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
export default function ForYou() {
  const [allProduct, setAllProduct] = React.useState<any>([]);
  const arrProducts =
    localStorage.getItem("products") &&
    JSON.parse(localStorage.getItem("products") || "");

  return (
    <>
      <main className="w-full ">
        <h1 className="text-left text-2xl font-semibold w-full mb-7">
          For You
        </h1>
        <div className="flex gap-8 flex-wrap">
          {arrProducts &&
            arrProducts?.map((products: any, index: number) =>
              products.data?.map((product: any, i: number) => (
                <span
                  key={i}
                  className="flex flex-col rounded-lg  w-[11rem] h-[20rem] border-2 border-gray-200 cursor-pointer group"
                >
                  <Image
                    className="h-[11rem] group rounded-lg rounded-br-[2.5em] bg-blue-900 object-cover object-center"
                    src={product.product_photos[0]}
                    alt={`Gambar ${index + 1}`}
                    width={300}
                    height={300}
                  ></Image>
                  <span className="pl-2 grid">
                    <Link
                      href={`detail/${product.product_id}`}
                      className=" mb-1 h-[3rem] overflow-hidden group-hover:underline"
                    >
                      {product.product_title}
                    </Link>
                    <p className="text-xl font-semibold">
                      {product.typical_price_range != null
                        ? product.typical_price_range[0]
                        : "$32"}
                    </p>
                    <span className="flex gap-1 items-center overflow-hidden">
                      <GoVerified className="text-blue-400 w-4 h-4"></GoVerified>
                      <p className="text-sm text-gray-600 h-6 w-full overflow-hidden">
                        {product.offer.store_name}
                      </p>
                    </span>
                    <span className="flex gap-1 text-sm items-center text-gray-600">
                      <BsFillStarFill className="text-yellow-500 inline" />{" "}
                      {product.product_rating}
                      <span>|</span>
                      <span>{product.product_num_reviews} terjual</span>
                    </span>
                  </span>
                </span>
              ))
            )}
        </div>
      </main>
    </>
  );
}
