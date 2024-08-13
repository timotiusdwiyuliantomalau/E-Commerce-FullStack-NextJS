import Image from "next/image";
import { useState } from "react";
import Banner from "../fragments/Home/banner";
import Kategori from "../fragments/Home/kategori";
import KejarDiskon from "../fragments/Home/kejarDiskon";

export default function AtasHomepage(homeClassName: any) {
  const width="w-[76rem]"
  return (
    <>
        <div
        className={`mt-[5rem] ${homeClassName.homeClassName}`}
        >
          <Banner/>
          <Kategori width={width}></Kategori>
          <KejarDiskon width={width}></KejarDiskon>
        </div>
    </>
  );
}
