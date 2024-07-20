"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function ForYou() {
  const [allProduct, setAllProduct] = React.useState<any>([]);
  const arrProducts =
    localStorage.getItem("products") &&
    JSON.parse(localStorage.getItem("products") || "");

  return (
    <>
      <main className="w-full">
        <h1 className="text-left text-2xl font-semibold w-full mb-7">
          For You
        </h1>
        <div className="flex gap-8  flex-wrap">
          {arrProducts &&
            arrProducts?.map((products: any, index: number) =>
              products.data?.map((product: any, i: number) => (
                <span
                  key={i}
                  className="flex flex-col rounded-lg  w-[13rem] h-[25rem] border-2 border-gray-200 shadow-md cursor-pointer group"
                >
                  <Image
                    className="h-[13rem] group rounded-lg rounded-br-[2.5em] bg-blue-900"
                    src={product.product_photos[0]}
                    alt={`Gambar ${index + 1}`}
                    width={300}
                    height={300}
                  ></Image>
                  <span className="pl-2 grid">
                    <Link
                      href={`detail/${product.product_id}`}
                      className=" mb-2 h-[3.5rem] overflow-hidden text-xl group-hover:underline"
                    >
                      {product.product_title}
                    </Link>
                    <p className="text-2xl font-semibold">
                      {product.typical_price_range != null
                        ? product.typical_price_range[0]
                        : "$32"}
                    </p>
                    <p className=" text-gray-600 text-xl h-8 overflow-hidden hover:underline hover:group-[:nth-child(1)]:no-underline">
                      {product.offer.store_name}
                    </p>
                    <span className="flex gap-1  text-gray-600 text-lg">
                      <span>{product.product_rating}</span>
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
