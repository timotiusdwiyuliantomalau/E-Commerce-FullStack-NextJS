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
          <main className="flex flex-col w-full min-h-screen pt-4 mb-5">
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
            <div className="flex items-end gap-3 mb-3">
              <h1 className="text-left text-2xl font-semibold">
                Kejar Diskon Spesial
              </h1>
              <p className="ml-4 text-gray-700">Berakhir dalam </p>
              <span className="flex gap-2 text-#A0153E font-semibold items-center">
                <p className="p-2 rounded-md w-10 text-center bg-[#A0153E] text-white">
                  04
                </p>
                :
                <p className="p-2 rounded-md w-10 text-center bg-[#A0153E] text-white">
                  53
                </p>
                :
                <p className="p-2 rounded-md w-10 text-center bg-[#A0153E] text-white">
                  10
                </p>
              </span>
            </div>
            <div>
              <div className="flex gap-10">
                <div className="w-[17rem] h-[20rem] shadow-xl flex flex-col">
                  <Image
                    className="h-48 w-full object-cover mx-auto"
                    src="/images/diskon_sepatu.png"
                    alt="Image Discount"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="pl-3 flex flex-col gap-7">
                    <span className="flex flex-col">
                      <p className="font-bold text-xl">Rp. 1.000.000</p>
                      <p className="text-gray-700">
                        Rp. 1.000.000{" "}
                        <span className="text-[#A0153E] font-bold ml-1">
                          40%
                        </span>
                      </p>
                    </span>
                    <span className="h-2 bg-gray-300 rounded-lg w-[95%] block">
                      <span className="block w-[63%] h-2 justify-center bg-[#A0153E] rounded-lg"></span>
                    <p className="text-gray-500 text-sm">Tersedia</p>
                    </span>
                  </div>
                </div>
                <div className="w-[17rem] h-[20rem] shadow-xl flex flex-col">
                  <Image
                    className="h-48 w-full object-cover mx-auto"
                    src="/images/diskon_sepatu.png"
                    alt="Image Discount"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="pl-3 flex flex-col gap-7">
                    <span className="flex flex-col">
                      <p className="font-bold text-xl">Rp. 1.000.000</p>
                      <p className="text-gray-700">
                        Rp. 1.000.000{" "}
                        <span className="text-[#A0153E] font-bold ml-1">
                          40%
                        </span>
                      </p>
                    </span>
                    <span className="h-2 bg-gray-300 rounded-lg w-[95%] block">
                      <span className="block w-[63%] h-2 justify-center bg-[#A0153E] rounded-lg"></span>
                    <p className="text-gray-500 text-sm">Tersedia</p>
                    </span>
                  </div>
                </div>
                <div className="w-[17rem] h-[20rem] shadow-xl flex flex-col">
                  <Image
                    className="h-48 w-full object-cover mx-auto"
                    src="/images/diskon_sepatu.png"
                    alt="Image Discount"
                    width={500}
                    height={500}
                  ></Image>
                  <div className="pl-3 flex flex-col gap-7">
                    <span className="flex flex-col">
                      <p className="font-bold text-xl">Rp. 1.000.000</p>
                      <p className="text-gray-700">
                        Rp. 1.000.000{" "}
                        <span className="text-[#A0153E] font-bold ml-1">
                          40%
                        </span>
                      </p>
                    </span>
                    <span className="h-2 bg-gray-300 rounded-lg w-[95%] block">
                      <span className="block w-[63%] h-2 justify-center bg-[#A0153E] rounded-lg"></span>
                    <p className="text-gray-500 text-sm">Tersedia</p>
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
          </main>
          <main className="w-full flex flex-col gap-5">
            <h1 className="text-left text-2xl font-semibold w-full">
              Lagi trending nih
            </h1>
            <div className="flex gap-4 flex-wrap">
              <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg">
                <Image src="/images/diskon_sepatu.png" alt="Diskon Sepatu" width={100} height={100} className="bg-red-600 w-28 h-full block rounded-lg"></Image>
                <span className="flex flex-col gap-2">
                  <h1 className="font-bold">Nike Shoes</h1>
                  <p className="">12.6rb terjual</p>
                </span>
              </span>
              <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg">
                <Image src="/images/diskon_sepatu.png" alt="Diskon Sepatu" width={100} height={100} className="bg-red-600 w-28 h-full block rounded-lg"></Image>
                <span className="flex flex-col gap-2">
                  <h1 className="font-bold">Nike Shoes</h1>
                  <p className="">12.6rb terjual</p>
                </span>
              </span>
              <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg">
                <Image src="/images/diskon_sepatu.png" alt="Diskon Sepatu" width={100} height={100} className="bg-red-600 w-28 h-full block rounded-lg"></Image>
                <span className="flex flex-col gap-2">
                  <h1 className="font-bold">Nike Shoes</h1>
                  <p className="">12.6rb terjual</p>
                </span>
              </span>
            </div>
          </main>
          <main className="w-full">
            <h1 className="text-left text-2xl font-semibold w-full mb-7">
              For You
            </h1>
            <div className="">
              <span className="flex w-[18rem] h-[18rem] bg-green-500 flex-col justify-between rounded-lg border-2 border-gray-300 ">
                <Image
                  className="w-full h-full bg-white rounded-lg rounded-br-3xl"
                  src="/images/kategori_topi.png"
                  alt="topi"
                  width={500}
                  height={500}
                ></Image>
                <h3>Topi Keren</h3>
                {/* <p>Rp 500.0000</p>
                <span className="flex gap-3">
                  <span>Rating</span>
                  <span>|</span>
                  <span>30K terjual</span>
                </span> */}
              </span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
