import Image from "next/image";
import { Container } from "postcss";
import React, { useEffect, useRef, useState } from "react";

export default function KejarDiskon() {
  const [soon, setSoon] = useState(Date.now() + 2 * 1000);
  const [time, setTime] = useState(0);
  const countdownAnimate = React.useRef<HTMLInputElement>(null);
  const barDiscount = React.useRef<HTMLInputElement>(null);
  const hour = time / 1000 / 3600;
  const min = time / 1000 / 60;
  const sec = (time % (1000 * 60)) / 1000;
  // useEffect(() => {
  //   const countdown = setInterval(intervalCountdown, 1000);
  //   function intervalCountdown() {
  //     interval = soon - Date.now();
  //     countdownAnimate.current?.classList.add("rotate-90");
  //     countdownAnimate.current?.classList.add("transition");
  //     barDiscount.current?.classList.add("animate-pulse");
  //     setTimeout(() => {
  //       countdownAnimate.current?.classList.remove("rotate-90");
  //       countdownAnimate.current?.classList.remove("transition");
  //     }, 500);
  //     if (interval < 0) {
  //       clearInterval(countdown);
  //     } else {
  //       setTime(interval);
  //     }
  //   }
  // }, [time]);

  return (
    <>
      <div className="w-full">
        <main className="flex items-end gap-3 mb-3">
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
        </main>
          <main className="flex gap-10">
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
                  <span
                    ref={barDiscount}
                    className="block w-[63%] h-2 justify-center bg-[#A0153E] rounded-lg"
                  ></span>
                  <p className="text-gray-500 text-sm">Tersedia</p>
                </span>
              </div>
            </div>
          </main>
      </div>
    </>
  );
}
