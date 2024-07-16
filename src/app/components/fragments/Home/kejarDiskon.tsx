import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function KejarDiskon() {
  const [time, setTime] = useState(1);
  const countdownAnimate = React.useRef<HTMLInputElement>(null);
  const [soon, setSoon] = useState(Date.now() + 10 * 1000);
  //   let countdown: NodeJS.Timeout = setInterval(animationCountdown, 1000);
  console.log(time);
  const hour = time / 1000 / 3600;
  const min = time / 1000 / 60;
  const sec = (time % (1000 * 60)) / 1000;
  while (time> 0) {
        setTime(soon - Date.now());
        countdownAnimate.current?.classList.add("animate-spin");
  }

  // if (time < 0) {
  //   clearInterval(countdown);
  // }
  return (
    <>
      <main className="w-full">
        <div className="flex items-end gap-3 mb-3">
          <h1 className="text-left text-2xl font-semibold">
            Kejar Diskon Spesial
          </h1>
          <p className="ml-4 text-gray-700">Berakhir dalam </p>
          <span className="flex gap-2 text-#A0153E font-semibold items-center">
            <p className="p-2 rounded-md w-10 text-center bg-[#A0153E] text-white">
              {hour.toString().split(".")[0]}
            </p>
            :
            <p className="p-2 rounded-md w-10 text-center bg-[#A0153E] text-white">
              {min < 1
                ? min.toString().substring(0, 1) + "0"
                : min.toString().substring(0, 2)}
            </p>
            :
            <p
              ref={countdownAnimate}
              className="p-2 rounded-md w-10 text-center bg-[#A0153E] text-white"
            >
              {sec < 10
                ? "0" + sec.toString().split(".")[0]
                : sec.toString().split(".")[0]}
            </p>
          </span>
          <p className="bg-[#A0153E] text-white font-bold w-12 h-12 hover:translate-y-5 hover:rotate-90 hover:transition-all">
            fds
          </p>
        </div>
        <div>
          <div className="flex gap-10">
            <div className="w-[17rem] h-[20rem] shadow-md flex flex-col">
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
                    <span className="text-[#A0153E] font-bold ml-1">40%</span>
                  </p>
                </span>
                <span className="h-2 bg-gray-300 rounded-lg w-[95%] block">
                  <span className="block w-[63%] h-2 justify-center bg-[#A0153E] rounded-lg"></span>
                  <p className="text-gray-500 text-sm">Tersedia</p>
                </span>
              </div>
            </div>
            <div className="w-[17rem] h-[20rem] shadow-md flex flex-col">
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
                    <span className="text-[#A0153E] font-bold ml-1">40%</span>
                  </p>
                </span>
                <span className="h-2 bg-gray-300 rounded-lg w-[95%] block">
                  <span className="block w-[63%] h-2 justify-center bg-[#A0153E] rounded-lg"></span>
                  <p className="text-gray-500 text-sm">Tersedia</p>
                </span>
              </div>
            </div>
            <div className="w-[17rem] h-[20rem] shadow-md flex flex-col">
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
                    <span className="text-[#A0153E] font-bold ml-1">40%</span>
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
    </>
  );
}
