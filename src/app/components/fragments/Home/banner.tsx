import Image from "next/image";
import { Banner1, Banner2, Banner3 } from "../content/homepage/sampleBanner";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const banners = [<Banner1 />, <Banner2 />, <Banner3 />];
  const [banner, setBanner] = useState(Array);
  let [num, setNum] = useState(0);
  const [aksi, setAksi] = useState(Array);
  const numBanner = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    setInterval(() => {
      if (num === banners.length-1) {
        setNum(0);
      } else {
        setNum(num+1);
      }
    }, 3000);
  }, [num]);

  useEffect(() => {
    setBanner([banners[num]]);
  }, [num]);
  return (
    <>
      {banner[0]}
    </>
  );
}
