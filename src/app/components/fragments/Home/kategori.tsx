import Image from "next/image";

export default function Kategori(width:any) {
  return (
    <>
      <main className={`flex flex-col ${width.width}`}>
        <h1 className="text-left text-2xl font-semibold w-full mb-10">
          Kategori Pilihan
        </h1>
        <div className="grid grid-cols-3 justify-items-center gap-12 cursor-pointer">
          <span className="w-72 relative">
            <Image
              src="/images/kategori_baju.png"
              alt="baju"
              width={500}
              height={500}
              className="w-full opacity-70 hover:opacity-100"
            ></Image>
            {/* <div className="w-3/4 h-3/4 hidden block bg-yellow-300 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-lg"></div> */}
          </span>
        </div>
      </main>
    </>
  );
}
