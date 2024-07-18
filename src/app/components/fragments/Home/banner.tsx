import Image from "next/image";
import { Banner1, Banner2, Banner3 } from "../content/homepage/sampleBanner";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const banners = [<Banner1 />, <Banner2 />, <Banner3 />];
  const [banner, setBanner] = useState(Array);
  let [num, setNum] = useState(0);
  const [aksi, setAksi] = useState("");
  let number = 0;
  // useEffect(() => {
  //   console.log(banners[0].type.name);
  //   setInterval(() => {
  //     if (number != 2) {
  //       number += 0.5;
  //       console.log(number);
  //       setBanner([banners[number]]);
  //     } else {
  //       console.log(number);
  //       number=-0.5;
  //     }
  //   }, 4000);
  // }, []);

  return (
    <>
      {banner[0] ?? banners[0]}
      <p>{aksi}</p>
    </>
  );
}
