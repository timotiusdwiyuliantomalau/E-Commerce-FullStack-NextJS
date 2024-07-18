import Image from "next/image";
import ForYou from "../fragments/Home/forYou";
export default function TengahHomepage(homeClassName: any) {
  return (
    <>
      <div className={homeClassName.homeClassName}>
        <main className="w-full flex flex-col gap-5 ">
          <h1 className="text-left text-2xl font-semibold w-full">
            Lagi trending nih
          </h1>
          <div className="flex gap-4 flex-wrap ">
            <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg ">
              <Image
                src="/images/diskon_sepatu.png"
                alt="Diskon Sepatu"
                width={100}
                height={100}
                className="w-28 h-full block bg-blue-900 rounded-full"
              ></Image>
              <span className="flex flex-col gap-2">
                <h1 className="font-bold">Nike Shoes</h1>
                <p className="">12.6rb terjual</p>
              </span>
            </span>
            <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg ">
              <Image
                src="/images/diskon_sepatu.png"
                alt="Diskon Sepatu"
                width={100}
                height={100}
                className="w-28 h-full block bg-blue-900 rounded-full"
              ></Image>
              <span className="flex flex-col gap-2">
                <h1 className="font-bold">Nike Shoes</h1>
                <p className="">12.6rb terjual</p>
              </span>
            </span>
            <span className="w-[18rem] h-[7rem]  flex gap-5 items-center rounded-lg ">
              <Image
                src="/images/diskon_sepatu.png"
                alt="Diskon Sepatu"
                width={100}
                height={100}
                className="w-28 h-full block bg-blue-900 rounded-full"
              ></Image>
              <span className="flex flex-col gap-2">
                <h1 className="font-bold">Nike Shoes</h1>
                <p className="">12.6rb terjual</p>
              </span>
            </span>
          </div>
        </main>

        <ForYou></ForYou>
      </div>
    </>
  );
}
