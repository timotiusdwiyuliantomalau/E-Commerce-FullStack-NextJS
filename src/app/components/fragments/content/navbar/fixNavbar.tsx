"use client";
import Link from "next/link";
import { Search } from "react-feather";
export default function FixNavbar({children}:any) {
  return (
    <>
      <div className="fixed flex w-full top-0 justify-between px-12 py-4 items-center bg-white z-10 overflow-hidden">
        <main className="flex gap-[5rem] absolute -right-[15rem]">
          {/* <div className="w-[10rem] h-screen bg-gradient-to-tr from-green-300 to to-white blur-xl opacity-40 rounded-full left-0  rotate-[30deg] -translate-x-[28rem] -z-10"></div> */}
          <div className="w-[20rem] h-screen bg-gradient-to-l from-red-100 to-white blur-xl opacity-60 rounded-full rotate-[30deg] -translate-x-[6rem]"></div>
          <div className="w-[25rem] h-screen bg-gradient-to-tr from-blue-200 to to-blue-100 blur-xl opacity-40 rounded-full translate-x-24  rotate-[45deg] -z-10"></div>
        </main>

        <main className="flex gap-8 items-center z-10">
          <Link
            className="font-bold text-3xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-10 before:bg-blue-500 before:opacity-80 relative inline-block"
            href="/"
          >
            <span className="tracking-widest">BELI </span>
            <span className="text-white text-2xl -ml-1">in.</span>
          </Link>
          <Link className="font-medium text-lg" href="">
            Kategori
          </Link>
        </main>
        <main className="flex relative w-[35rem]">
          <Search className="w-15 absolute text-gray-400 top-1/2 -translate-y-1/2 left-3"></Search>
          <input
            type="search"
            name=""
            id=""
            className="w-full border-[1px] border-gray-400 h-10 rounded-md pl-12"
          />
        </main>
        {children}
      </div>
    </>
  );
}
