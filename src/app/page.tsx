"use client";

import { dataProducts } from "../../utils/fetchData";
import Atas from "./components/fragments/Homepage/atas";
import Main from "./components/fragments/main";
import Navbar from "./components/fragments/navbar";

export default function Home() {
  dataProducts(async (response: any) => {
    console.log(await response);
    if (!response) return false;
    response.then((data: any) => {
      localStorage.setItem("products", JSON.stringify(data.data));
    });
  });
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Atas></Atas>
      </div>
    </>
  );
}
