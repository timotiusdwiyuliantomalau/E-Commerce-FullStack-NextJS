import Image from "next/image";
export default function ForYou() {
  const arrProducts = JSON.parse(localStorage.getItem("products") || "");
  const products = arrProducts?.map((product: any, index: number) => {
    const url = product.image.replace(/^[\[\"\/]+|[\]\"\s\/]+$/g, "");
    return (
      <span
        key={index}
        className="flex flex-col  justify-between rounded-lg  w-[13rem] h-full border-2 border-gray-200 shadow-md pb-[3rem]"
      >
        <Image
          className="h-[13rem] rounded-lg rounded-br-[2.5em] bg-blue-900"
          src={url}
          alt={`Gambar ${index + 1}`}
          width={300}
          height={300}
        ></Image>
        <span className="pl-2 grid ">
          <h3 className=" mb-2 h-12 overflow-hidden">{product.title}</h3>
          <p className="text-xl font-semibold">$ {product.price}</p>
          <p className=" text-gray-600">Jakarta Utara</p>
          <span className="flex gap-1  text-gray-600">
            <span>4.6</span>
            <span>|</span>
            <span>30K terjual</span>
          </span>
        </span>
      </span>
    );
  });

  return (
    <>
      <main className="w-full">
        <h1 className="text-left text-2xl font-semibold w-full mb-7">
          For You
        </h1>
        <div className="flex gap-8  flex-wrap">{products}</div>
      </main>
    </>
  );
}
