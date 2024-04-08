import Image from "next/image";

export default function Atas() {
  return (
    <>
      <div className="flex justify-center mt-[5.5rem]">
        <div className="flex flex-col items-center w-[85rem] gap-20 pl-12">
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
          <main className="flex flex-col border-[4px] px-4 border-gray-100 shadow-xl  w-full min-h-screen pt-4">
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
                  className="w-full"
                ></Image>
              </span>
              <span className="w-72">
                <Image
                  src="/images/kategori_celana.png"
                  alt="celana"
                  width={500}
                  height={500}
                  className="w-full"
                ></Image>
              </span>
              <span className="w-72">
                <Image
                  src="/images/kategori_sepatu.png"
                  alt="sepatu"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                ></Image>
              </span>
              <span className="w-72">
                <Image
                  src="/images/kategori_tas.png"
                  alt="tas"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                ></Image>
              </span>
              <span className="w-72">
                <Image
                  src="/images/kategori_topi.png"
                  alt="topi"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                ></Image>
              </span>
              <span className="w-72">
                <Image
                  src="/images/kategori_kacamata.png"
                  alt="kacamata"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                ></Image>
              </span>
            </div>
          </main>
          <main className="w-full">
            <div className="flex ">
              <h1 className="text-left text-2xl font-semibold mb-5">
                Kejar Diskon Spesial
              </h1>
              <p>Berakhir dalam</p>
              <span>04 : 00 : 00</span>
            </div>
            <div>
              <div className="flex gap-5">
                <span className="w-[17rem] h-[20rem] bg-slate-500">
                  <Image
                    className="h-64"
                    src="/images/diskon_sepatu.png"
                    alt="Image Discount"
                    width={500}
                    height={500}
                  ></Image>
                  <p>Rp. 1.000.000</p>
                  <p>Rp. 1.000.000</p>
                </span>
                <div className="w-[17rem] h-[20rem] bg-slate-500"></div>
                <div className="w-[17rem] h-[20rem] bg-slate-500"></div>
              </div>
            </div>
          </main>
          <main className="w-full flex flex-col gap-5">
            <h1 className="text-left text-2xl font-semibold w-full">
              Lagi trending nih
            </h1>
            <div className="flex gap-4 flex-wrap">
              <span className="w-[18rem] h-[7rem] bg-slate-500 flex gap-7 items-center rounded-lg">
                <span className="bg-red-600 w-28 h-full block rounded-lg"></span>
                <span className="flex flex-col gap-2">
                  <h1>Judul Produk</h1>
                  <p>12.6rb terjual</p>
                </span>
              </span>
            </div>
          </main>
          <main className="w-full">
            <h1 className="text-left text-2xl font-semibold w-full mb-7">
              For You
            </h1>
            <div className="">
              <span className="flex w-[13rem] h-[16rem] bg-green-500 flex-col justify-between rounded-lg border-2 border-gray-300 ">
                <Image
                  className="w-full h-32 bg-white rounded-lg rounded-br-3xl"
                  src="/images/kategori_topi.png"
                  alt="topi"
                  width={500}
                  height={500}
                ></Image>
                <h3>Topi Keren</h3>
                <p>Rp 500.0000</p>
                <span className="flex gap-3">
                  <span>Rating</span>
                  <span>|</span>
                  <span>30K terjual</span>
                </span>
              </span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
