import Image from "next/image";

export default function Kategori() {
  return (
    <>
      <main className="flex flex-col w-full min-h-screen mb-5">
        <h1 className="text-left text-2xl font-semibold w-full mb-10">
          Kategori Pilihan
        </h1>
        <div className="grid grid-cols-3 justify-items-center gap-12 cursor-pointer">
          <span className="w-72">
            <Image
              src="/images/kategori_baju.png"
              alt="baju"
              width={500}
              height={500}
              className="w-full hover:bg-red-500 rounded-full"
            ></Image>
          </span>
          <span className="w-72">
            <Image
              src="/images/kategori_celana.png"
              alt="celana"
              width={500}
              height={500}
              className="w-full hover:bg-red-500 rounded-full"
            ></Image>
          </span>
          <span className="w-72">
            <Image
              src="/images/kategori_sepatu.png"
              alt="sepatu"
              width={500}
              height={500}
              className="w-full hover:bg-red-500 rounded-full h-full object-contain"
            ></Image>
          </span>
          <span className="w-72">
            <Image
              src="/images/kategori_tas.png"
              alt="tas"
              width={500}
              height={500}
              className="w-full hover:bg-red-500 rounded-full h-full object-contain"
            ></Image>
          </span>
          <span className="w-72">
            <Image
              src="/images/kategori_topi.png"
              alt="topi"
              width={500}
              height={500}
              className="w-full hover:bg-red-500 rounded-full h-full object-contain"
            ></Image>
          </span>
          <span className="w-72">
            <Image
              src="/images/kategori_kacamata.png"
              alt="kacamata"
              width={500}
              height={500}
              className="w-full hover:bg-red-500 rounded-full h-full object-contain"
            ></Image>
          </span>
        </div>
      </main>
    </>
  );
}
