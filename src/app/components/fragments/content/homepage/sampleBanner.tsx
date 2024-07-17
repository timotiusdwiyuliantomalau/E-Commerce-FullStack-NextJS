import Image from "next/image";

export function Banner1() {
  return (
    <>
      <main className="flex bg-gradient-to-r from-[#FF204E] to-white justify-between items-center pr-[13rem] pl-[5rem] w-full h-[20rem] rounded-lg relative">
        <span className="flex flex-col">
          <h1 className="text-7xl font-semibold text-black">DISKON 30%</h1>
          <h2 className="text-4xl font-medium text-white w-[30rem]">
            Nike Air Jordan Jumpman MVP Toronto Raptors
          </h2>
          <button className="p-2 rounded-full bg-blueP text-xl  text-white w-40 mt-12">
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
export function Banner2() {
  return (
    <>
      <main className="flex bg-gradient-to-r from-yellow-500  to-white justify-between items-center pr-[13rem] pl-[5rem] w-full h-[20rem] rounded-lg relative">
        <span className="flex flex-col">
          <h1 className="text-7xl font-semibold text-black">DISKON 15%</h1>
          <h2 className="text-4xl font-medium text-white w-[30rem]">
          CHANEL N°5 - EAU DE PARFUM SPRAY
          </h2>
          <button className="p-2 rounded-full bg-black opacity-70 hover:opacity-100 text-xl  text-white w-40 mt-12">
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
          src="/images/chanel.png"
          alt="Image Discount"
          width={500}
          height={500}
        ></Image>
      </main>
    </>
  );
}
export function Banner3() {
  return (
    <>
      <main className="flex bg-gradient-to-r from-blue-500  to-white justify-between items-center pr-[13rem] pl-[5rem] w-full h-[20rem] rounded-lg relative">
        <span className="flex flex-col">
          <h1 className="text-7xl font-semibold text-black">DISKON 20%</h1>
          <h2 className="text-4xl font-medium text-white w-[30rem]">
          Submariner Date - 126613LB Blue Steel
          </h2>
          <button className="p-2 rounded-full bg-[#00224D] opacity-75 hover:opacity-100 text-xl  text-white w-40 mt-12">
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
          src="/images/ROLEX.png"
          alt="Image Discount"
          width={500}
          height={500}
        ></Image>
      </main>
    </>
  );
}
