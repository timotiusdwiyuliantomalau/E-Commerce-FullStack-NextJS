import React, { useState } from "react";
import { Edit2, MinusCircle, PlusCircle } from "react-feather";
export default function KananDetail(products: any) {
  const [qty, setQty] = useState(1);
  const product = products.products;
  return (
    <>
      <main className="flex text-sm fixed flex-col gap-4 border-[1px] w-[18rem] mr-[2rem] rounded-lg border-gray-300 p-4 mt-[2rem] right-0 pt-6 pb-4">
        <p className="font-semibold mb-1 text-lg">Atur jumlah dan catatan</p>
        <span className="flex items-center gap-2">
          <span className="flex justify-between items-center px-2 py-1 w-[5rem] border-[1px] rounded-lg scale-110 border-gray-300">
            <MinusCircle onClick={() => qty!=1&&setQty(qty - 1)} className={`${qty==1?`text-gray-200 cursor-not-allowed`:`opacity-50 text-blueP hover:opacity-90 cursor-pointer`} w-4`}></MinusCircle>
            <span>{qty}</span>
            <PlusCircle onClick={() => setQty(qty + 1)} className="w-4 opacity-50 text-blueP hover:opacity-90 cursor-pointer rounded-full "></PlusCircle>
          </span>
          <span className="flex gap-1 text-xs">
            <p>Stok Total</p>
            <p>:</p>
            <p className="font-bold">50</p>
          </span>
        </span>
        <span className="flex gap-1 items-center">
          <Edit2 className="text-blueP w-3"></Edit2>
          <p className="text-blueP text-xs font-bold">Tambah Catatan</p>
        </span>
        <span className="flex items-center justify-between">
          <p className="text-gray-600 ">Subtotal</p>
          <p className="font-bold text-lg">
            $ {(product.typical_price_range[0].split('$')[1]*qty).toString().split('.').length>1?(parseFloat(product.typical_price_range[0].split('$')[1])*qty).toString().split('.')[0]+"."+(parseFloat(product.typical_price_range[0].split('$')[1])*qty).toString().split('.')[1].substring(0,2) :parseFloat(product.typical_price_range[0].split('$')[1])*qty}
          </p>
        </span>
        <span className="grid gap-2 mt-2 mb-2">
          <p className="bg-blueP font-bold py-2 rounded-lg text-white text-center hover:opacity-90 cursor-pointer">
            Beli
          </p>
          <p className="border-blueP border-[1px] font-bold py-2 rounded-lg text-blueP text-center hover:bg-gray-200 cursor-pointer ">
            + Keranjang
          </p>
        </span>
        <span className="flex text-xs justify-center gap-4">
          <p>Chat</p>
          <p>Wishlist</p>
          <p>Share</p>
        </span>
      </main>
    </>
  );
}
