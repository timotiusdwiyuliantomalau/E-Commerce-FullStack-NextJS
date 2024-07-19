"use client";

import Navbar from "@/app/components/fragments/navbar";

export default function DetailProduct(props: any) {
  const { params } = props;
  let product = JSON.parse(localStorage.getItem("products") || "").map(
    (product: any) =>
      product.data.find((product: any) => product.product_id == params.id)
  );
  product = product.find((product: any) => product !== undefined);
  return(
    <>
      <Navbar />;
      <div className="text-xl mt-[5rem]">
      {product.product_title}
      </div>
      </>
  )
}
