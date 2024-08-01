import Image from "next/image";
import React from "react";

export default function KiriDetail(products: any) {
  const [imageSelected, setImageSelected] = React.useState(0);
  const product = products.products;
  function selectingImage(e: any) {
    setImageSelected(e.target.id);
  }
  return (
    <>
      <main className=" fixed left-0 w-[22rem] ml-[2rem]">
        <div className="">
          <Image
            className="w-full h-[22rem] object-cover object-center rounded-lg"
            src={product.product_photos[imageSelected]}
            alt="Gambar Produk"
            width={300}
            height={300}
          ></Image>
          <span className="flex gap-3 w-full mt-3 overflow-x-scroll">
            {product.product_photos.map((url: any, i: number) => (
              <Image
                onClick={selectingImage}
                className={`h-[4rem] w-[4rem] object-cover object-center rounded-lg cursor-pointer ${
                  imageSelected == i && `border-[2px] border-yellow-500`
                }`}
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
    </>
  );
}
