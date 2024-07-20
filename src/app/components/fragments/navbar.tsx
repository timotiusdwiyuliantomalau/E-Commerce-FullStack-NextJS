import Link from "next/link";
import { Search } from "react-feather";
import { ShoppingCart } from "react-feather";

export default function Navbar() {
return(
    <>
    <div className="fixed flex w-full top-0 justify-between px-12 py-4 items-center bg-white z-10">
        <div className="flex gap-8 items-center">
        <Link className="font-bold text-3xl" href="/">SHOPin.</Link>
        <Link className="font-medium text-lg" href="">Kategori</Link>
        </div>
        <span className="flex relative w-[35rem]">
        <Search className="w-15 absolute text-gray-400 top-1/2 -translate-y-1/2 left-3"></Search>
        <input type="search" name="" id="" className="w-full border-[1px] border-gray-400 h-10 rounded-md pl-12" />
        </span>
        <div className="flex gap-6 items-center">
        <ShoppingCart></ShoppingCart>
        <p className="text-3xl font-extralight text-gray-300">|</p>
        <button  className="p-2 font-medium rounded-lg bg-[#00224D] text-white">Masuk</button>
        </div>
    </div>
    </>
)
}