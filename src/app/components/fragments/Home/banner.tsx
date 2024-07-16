import Image from "next/image";

export default function Banner() {
  return (
    <>
      <main className="flex bg-gradient-to-r from-[#FF204E] to-white justify-between items-center pr-[13rem] pl-[5rem] w-full h-[20rem] rounded-lg relative">
        <span className="flex flex-col">
          <h1 className="text-7xl font-semibold text-black">DISKON 50%</h1>
          <h2 className="text-4xl font-medium text-white w-[30rem]">
            Nike Air Jordan Jumpman MVP Toronto Raptors
          </h2>
          <button className="p-2 rounded-full bg-[#00224D] text-xl  text-white w-40 mt-12">
            Jelajahi
          </button>
        </span>
        <Image
          className="w-[7rem] left-[45rem] top-7 absolute"
          src="/images/top_quality.png"
          alt="Top Quality"
          width={500}
          height={500}
        ></Image>
        <Image
          className="w-[25rem]"
          src="/images/diskon_sepatu.png"
          alt="Image Discount"
          width={500}
          height={500}
        ></Image>
      </main>
    </>
  );
}
