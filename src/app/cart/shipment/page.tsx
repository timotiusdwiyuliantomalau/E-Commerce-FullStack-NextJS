import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdVerified } from "react-icons/md";

export default function Shipment() {
  return (
    <>
      <div className="mt-[7rem] flex flex-col items-center bg">
        <h1 className="w-10/12 text-2xl font-bold mb-6">Pengiriman</h1>
        <div className="flex justify-between w-10/12">
          <main className="flex flex-col gap-8">
            <div className="flex flex-col border-2 border-gray-300">
              <h2 className="text-gray-700 font-semibold mb-1">
                ALAMAT PENGIRIMAN
              </h2>
              <span className="flex gap-1 items-center text-sm">
                <GoLocation />
                <p>Rumah . Timotius</p>
              </span>
              <p className="text-sm">Jalan Permai 19</p>
              <button className="text-sm text-white bg-redP">
                Ganti Alamat
              </button>
            </div>

            <div className="flex flex-col">
              <h2>PESANAN 1</h2>
              <span className="flex gap-1 items-center">
                <MdVerified className="text-blue-400"></MdVerified>
                <p>Toko</p>
              </span>
              <span className="flex gap-4 mt-1">
                <Image
                  src={"/images/kategori_baju.png"}
                  width={300}
                  height={300}
                  alt="Gambar Produk"
                  className="w-32 h-32"
                ></Image>
                <span>
                  <p>Baju Keren Terkini</p>
                  <select name="" id="">
                    <option value="">Pilih Pengiriman</option>
                    <option value="Reguler">Reguler</option>
                    <option value="Kargo">Kargo</option>
                  </select>
                </span>
                <p>5 x $523</p>
              </span>
            </div>
          </main>
          <main className="bg-yellow-300 h-full p-6 rounded-lg">
            <h2 className="font-semibold text-xl mb-2">Rekap Belanja</h2>
            <span className="flex justify-between">
              <p className="text-sm text-gray-700">Total Harga (8 barang)</p>
              <p className="font-semibold">$64</p>
            </span>
            <p className="font-semibold text-sm">Total Belanja</p>
            <span className="flex justify-between w-full bg-red-100 border-2 border-redP py-1 rounded-md gap-2 items-center cursor-pointer p-4 mt-3">
              <span className="flex gap-2 items-center">
                <Image
                  src={"/images/voucher.png"}
                  className="w-8 h-8"
                  width={300}
                  height={300}
                  alt="Gambar Produk"
                ></Image>
                <p className="text-sm">Makin hemat pakai promo</p>
              </span>
              <IoIosArrowForward className="text-gray-600" />{" "}
            </span>
            <button className="w-full py-2 bg-blueP text-white font-semibold rounded-md mt-5">
              Pilih Pembayaran
            </button>
          </main>
        </div>
      </div>
    </>
  );
}
