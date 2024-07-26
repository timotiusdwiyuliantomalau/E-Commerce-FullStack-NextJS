"use client";

import { useEffect } from "react";
import { dataProducts } from "../../utils/fetchData";
import AtasHomepage from "./components/Homepage/atas";
import TengahHomepage from "./components/Homepage/tengah";
import Navbar from "./components/fragments/navbar";

export default function Home() {
  const styleHome = "px-10 flex flex-col gap-20";
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
        <Navbar></Navbar>
        <div className="grid gap-28">
          <AtasHomepage homeClassName={styleHome}></AtasHomepage>
          <TengahHomepage homeClassName={styleHome}></TengahHomepage>
        </div>
      </div>
    </>
  );
}
