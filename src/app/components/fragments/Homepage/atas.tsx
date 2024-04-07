import Image from "next/image";

export default function Atas() {
  return (
    <>
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-[75rem]">
        <div className="flex bg-gradient-to-r from-red-200 items-center to-white gap-32 px-[5rem] w-full h-[20rem] rounded-lg">
          <span className="flex flex-col">
            <h1 className="text-7xl font-semibold text-red-700">
              FLAT 50% OFF
            </h1>
            <h2 className="text-4xl font-medium">12 Hours 20 min</h2>
            <button className="p-2 rounded-full bg-red-500 text-xl  text-white w-40 mt-6">
              Explore Now
            </button>
          </span>
          <Image
            className="w-[25rem]"
            src="/images/diskon_sepatu.png"
            alt="Image Discount"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="flex flex-col border-[2px] py-4 px-4 border-gray-100 shadow-xl mt-4 w-full min-h-screen ">
            <h1 className="text-left text-xl font-semibold w-full mb-4">Kategori Pilihan</h1>
            <span className="flex gap-4">
                <span className="w-32 h-32 bg-slate-400"></span>
                <span className="w-32 h-32 bg-slate-400"></span>
                <span className="w-32 h-32 bg-slate-400"></span>
            </span>
        </div>
      </div>
      </div>
    </>
  );
}
