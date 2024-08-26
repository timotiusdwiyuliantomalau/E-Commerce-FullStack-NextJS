"use client";

import { useEffect } from "react";
import { dataProducts } from "../../utils/fetchData";
import AtasHomepage from "./components/Homepage/atas";
import TengahHomepage from "./components/Homepage/tengah";

export default function Home() {
  const styleHome = "w-[76rem] flex flex-col gap-32 items-center";
  useEffect(() => {
    localStorage.getItem("products") != null
      ? localStorage.getItem("products")
      : dataProducts((res: any) => {
          localStorage.setItem("products", JSON.stringify(res));
        });
  }, []);
  
  return (
    <>
      <div>
        <div className="flex flex-col gap-32">
          <AtasHomepage homeClassName={"flex flex-col gap-32 items-center"}></AtasHomepage>
          <TengahHomepage homeClassName={styleHome}></TengahHomepage>
        </div>
      </div>
    </>
  );
}
