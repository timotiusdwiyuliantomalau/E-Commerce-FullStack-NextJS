import Image from "next/image";
import { BsClock, BsFillStarFill, BsStar, BsTruck } from "react-icons/bs";
import { GoLocation, GoVerified } from "react-icons/go";

export default function TengahDetail(products: any) {
  const product = products.products;
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
  return (
    <>
      <main className="w-[36rem] translate-x-[2rem] h-[31rem] overflow-y-scroll scrollbar-hide">
        <h1 className="text-xl font-bold w-5/6">{product.product_title}</h1>
        <span className="flex gap-12">
          <p>Terjual {product.product_num_offers || 0}</p>
          <p className="flex items-center gap-2">
            <BsFillStarFill className="text-yellow-500 inline" />
            {product.product_rating} ({product.product_num_reviews || 0})
          </p>
        </span>
        <p className="font-bold text-3xl mt-1 mb-6">
          {product.typical_price_range[0]}
        </p>

        <div className="grid gap-4 pb-7 border-b-[2px] border-gray-200 ">
          <span className="text-sm">{productAtt}</span>
          <span className="grid gap-2">
            {product.product_description
              .split("-----")
              .map((detail: any, i: number) => (
                <p key={i} className="text-sm">
                  {detail}
                </p>
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
            <span className="grid text-sm">
              <p className="font-bold flex gap-1 items-center ">
                <GoVerified className="text-blue-500"></GoVerified>
                {product.offer.store_name}
              </p>
              <p className="">
                <span className="">Online</span>
                <span className="font-semibold text-gray-500  ml-1">
                  2 jam lalu
                </span>
              </p>
              <p className="text-xs flex items-center gap-2">
                <BsStar></BsStar>{" "}
                <span>
                  5 <span className="text-gray-600 ">(23)</span>
                </span>
              </p>
              <p className="text-xs flex gap-2 items-center">
                <BsClock></BsClock>{" "}
                <span>
                  {" "}
                  +20 jam{" "}
                  <span className="text-gray-600">pesanan diproses</span>{" "}
                </span>
              </p>
            </span>
            <span className="w-28 rounded-lg text-sm flex bg-redP hover:bg-redS h-7 justify-center items-center font-semibold text-white cursor-pointer">
              Follow
            </span>
          </span>
        </div>

        <div className="mt-4 ml-5 pb-4 text-sm">
          <h2 className="font-bold">Pengiriman</h2>
          <p className="flex gap-2 items-center">
            <GoLocation></GoLocation> Dikirim dari{" "}
            <span className="font-medium">Jakarta Barat</span>
          </p>
          <p className="flex gap-2 items-center">
            <BsTruck></BsTruck> Ongkir reguler 8 rb - 10 rb
          </p>
          <p className="text-gray-500 text-xs">Estimasi tiba besok - 30 Juli</p>
        </div>
      </main>
    </>
  );
}
