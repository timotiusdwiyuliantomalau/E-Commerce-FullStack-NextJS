"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { dataProducts } from "../../../../utils/fetchData";

export default function Main() {
  dataProducts(async (response: any) => {
    console.log(await response);
    if (!response) return false;
    response.then((data: any) => {
      localStorage.setItem("products", JSON.stringify(data.data));
    });
  });
  
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "")
  );

  return (
    <>
      <div className="grid grid-cols-3">
        {products.map((product: any) => (
          <div className="mb-10" key={product.product_id}>
            <p>
              {product.product_title.search(",") != -1
                ? product.product_title.split(",")[0]
                : product.product_title.search("-") != -1
                ? product.product_title.split("-")[0]
                : product.product_title.search("/") != -1
                ? product.product_title.split("/")[0]
                : product.product_title}
            </p>
            <p>
              {product.typical_price_range
                ? product.typical_price_range[0]
                : "$74"}
            </p>
            <Image
              className="w-72"
              src={product.product_photos[0]}
              width={200}
              height={200}
              alt={product.product_title}
            />
          </div>
        ))}
      </div>
    </>
  );
}
