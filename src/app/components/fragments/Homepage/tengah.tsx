import Image from "next/image";
export default function TengahHomepage(homeClassName: any) {
  return (
    <>
      <div className={homeClassName.homeClassName}>
        <main className="w-full flex flex-col gap-5 ">
          <h1 className="text-left text-2xl font-semibold w-full">
            Lagi trending nih
          </h1>
          <div className="flex gap-4 flex-wrap">
            <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg">
              <Image
                src="/images/diskon_sepatu.png"
                alt="Diskon Sepatu"
                width={100}
                height={100}
                className="bg-red-600 w-28 h-full block rounded-lg"
              ></Image>
              <span className="flex flex-col gap-2">
                <h1 className="font-bold">Nike Shoes</h1>
                <p className="">12.6rb terjual</p>
              </span>
            </span>
            <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg">
              <Image
                src="/images/diskon_sepatu.png"
                alt="Diskon Sepatu"
                width={100}
                height={100}
                className="bg-red-600 w-28 h-full block rounded-lg"
              ></Image>
              <span className="flex flex-col gap-2">
                <h1 className="font-bold">Nike Shoes</h1>
                <p className="">12.6rb terjual</p>
              </span>
            </span>
            <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg">
              <Image
                src="/images/diskon_sepatu.png"
                alt="Diskon Sepatu"
                width={100}
                height={100}
                className="bg-red-600 w-28 h-full block rounded-lg"
              ></Image>
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
          <div className="flex gap-4">
            <span className="flex flex-col  justify-between rounded-lg  w-[13rem] h-full border-2 border-gray-200 shadow-md pb-[3rem]">
              <Image
                className="h-[13rem] rounded-lg rounded-br-[2.5em] bg-blue-900"
                src="/images/kategori_topi.png"
                alt="topi"
                width={300}
                height={300}
              ></Image>
              <span className="pl-2 grid ">
                <h3 className=" mb-2">Topi Keren Ala Anak Starboy</h3>
                <p className="text-xl font-semibold">Rp 500.0000</p>
                <p className=" text-gray-600">Jakarta Utara</p>
                <span className="flex gap-1  text-gray-600">
                  <span>4.6</span>
                  <span>|</span>
                  <span>30K terjual</span>
                </span>
              </span>
            </span>
            <span className="flex flex-col  justify-between rounded-lg  w-[13rem] h-full border-2 border-gray-200 shadow-md pb-[3rem]">
              <Image
                className="h-[13rem] rounded-lg rounded-br-[2.5em] bg-blue-900"
                src="/images/kategori_topi.png"
                alt="topi"
                width={300}
                height={300}
              ></Image>
              <span className="pl-2 grid ">
                <h3 className=" mb-2">Topi Keren Ala Anak Starboy</h3>
                <p className="text-xl font-semibold">Rp 500.0000</p>
                <p className=" text-gray-600">Jakarta Utara</p>
                <span className="flex gap-1  text-gray-600">
                  <span>4.6</span>
                  <span>|</span>
                  <span>30K terjual</span>
                </span>
              </span>
            </span>
            <span className="flex flex-col  justify-between rounded-lg  w-[13rem] h-full border-2 border-gray-200 shadow-md pb-[3rem]">
              <Image
                className="h-[13rem] rounded-lg rounded-br-[2.5em] bg-blue-900"
                src="/images/kategori_topi.png"
                alt="topi"
                width={300}
                height={300}
              ></Image>
              <span className="pl-2 grid ">
                <h3 className=" mb-2">Topi Keren Ala Anak Starboy</h3>
                <p className="text-xl font-semibold">Rp 500.0000</p>
                <p className=" text-gray-600">Jakarta Utara</p>
                <span className="flex gap-1  text-gray-600">
                  <span>4.6</span>
                  <span>|</span>
                  <span>30K terjual</span>
                </span>
              </span>
            </span>
            
          </div>
        </main>
      </div>
    </>
  );
}
