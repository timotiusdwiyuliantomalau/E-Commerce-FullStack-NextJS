"use client";

import { dataProducts } from "../../utils/fetchData";
import AtasHomepage from "./components/Homepage/atas";
import TengahHomepage from "./components/Homepage/tengah";
import Navbar from "./components/fragments/navbar";

export default function Home() {
  const styleHome = "pl-20 flex flex-col gap-20";
  dataProducts();
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
