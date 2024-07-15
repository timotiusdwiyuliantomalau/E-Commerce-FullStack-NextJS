"use client";

import AtasHomepage from "./components/fragments/Homepage/atas";
import TengahHomepage from "./components/fragments/Homepage/tengah";
import Navbar from "./components/fragments/navbar";

export default function Home() {
  const styleHome = "pl-12 flex flex-col gap-20";
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="grid gap-20">
        <AtasHomepage homeClassName={styleHome}></AtasHomepage>
        <TengahHomepage homeClassName={styleHome}></TengahHomepage>
        </div>
      </div>
    </>
  );
}
