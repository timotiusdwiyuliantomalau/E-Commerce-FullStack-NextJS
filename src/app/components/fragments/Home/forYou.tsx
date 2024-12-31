"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { dataProducts } from "../../../../../utils/fetchData";
export default function ForYou() {
  const [arrProducts, setArrProducts] = useState<any[]>([]);

  useEffect(() => {
    localStorage.getItem("products") != null
      ? localStorage.getItem("products")
      : dataProducts((res: any) => {
          localStorage.setItem("products", JSON.stringify(res));
          setArrProducts(res);
        });
  }, []);

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
                  className="flex flex-col rounded-lg  w-[11rem] pb-5 border-2 border-gray-200 cursor-pointer group hover:scale-110"
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
                      className=" mb-2 mt-1 h-[2.5rem] text-sm overflow-hidden group-hover:underline"
                    >
                      {product.product_title}
                    </Link>
                    <p className="text-lg font-semibold mb-1">
                      {product.typical_price_range != null
                        ? product.typical_price_range[0]
                        : "$23"}
                    </p>
                    <span className="flex gap-1 mb-1 items-center overflow-hidden">
                      <GoVerified className="text-blue-400 w-4 h-4"></GoVerified>
                      <p className="text-xs text-gray-600 h-4 w-full overflow-hidden">
                        {product.offer.store_name}
                      </p>
                    </span>
                    <span className="flex gap-1 text-xs items-center text-gray-600">
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
