import Image from "next/image";
import { useState } from "react";
import Banner from "../fragments/Home/banner";
import Kategori from "../fragments/Home/kategori";
import KejarDiskon from "../fragments/Home/kejarDiskon";

export default function AtasHomepage(homeClassName: any) {
  return (
    <>
      <div className="flex mt-[5.5rem]">
        <div
          className={`flex flex-col items-center w-full ${homeClassName.homeClassName}`}
        >
          <Banner/>
          <Kategori></Kategori>
          <KejarDiskon></KejarDiskon>
        </div>
      </div>
    </>
  );
}