import Link from "next/link";

export default function Navbar() {
return(
    <>
    <div className="flex p-4 justify-evenly bg-slate-200 mb-8">
        <Link className="font-bold" href="">LOGO</Link>
        <Link className="font-medium" href="">Kategori</Link>
        <Link href="">SearchBar</Link>
        <Link href="">Cart</Link>
        <Link href="">Masuk</Link>
    </div>
    </>
)
}