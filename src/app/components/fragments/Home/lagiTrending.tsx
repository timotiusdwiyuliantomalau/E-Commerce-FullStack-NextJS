import Image from "next/image";

export default function LagiTrending() {
  return (
    <>
      <main className="w-full flex flex-col gap-5 ">
        <h1 className="text-left text-2xl font-semibold w-full">
          Lagi trending nih
        </h1>
        <div className="flex gap-4 flex-wrap ">
          <span className="w-[18rem] h-[7rem]  flex gap-2 items-center rounded-lg ">
            <div className="relative w-[7.5rem] h-[7.5rem] ">
              <span className="absolute  w-[7.5rem] h-[7.5rem]  bg-gradient-to-r from-blueP via-redP to-redS rounded-full animate-spin"></span>
              <Image
                src="/images/diskon_sepatu.png"
                alt="Diskon Sepatu"
                width={100}
                height={100}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-28 h-28 block rounded-full bg-white "
              ></Image>
            </div>

            <span className="flex flex-col gap-2 bg-red">
              <h1 className="font-bold">Nike Shoes</h1>
              <p className="">12.6rb terjual</p>
            </span>
          </span>
        </div>
      </main>
    </>
  );
}
