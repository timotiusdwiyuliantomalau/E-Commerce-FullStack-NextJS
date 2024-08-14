"use client";
import { useEffect, useState } from "react";
import { district, province, regency } from "../../../utils/fetchLocation";

export default function locationFormModal() {
  const [province, setProvince] = useState(Array);

  useEffect(() => {
    async function getLocation() {
      const dataProvince = await province();
      const dataRegency = await regency();
      const dataDistrict = await district(dataRegency?.data.id);
      setProvince([dataProvince, dataRegency, dataDistrict]);
    }
    getLocation();
  }, []);

  return (
    <>
      <main className="pt-[6rem]">
        <div className="">
          <h1>Modal</h1>
          <form className="flex flex-col" action="">
            {province.length > 0 &&
              province.map((data: any) => (
                <>
                  <label htmlFor="provinsi">{data.type}</label>
                  <select
                    name=""
                    onChange={() => setIdProvince()}
                    className="cursor-pointer"
                    id=""
                  >
                    {data.data.map((loc: any) => (
                      <option value="">{loc.name}</option>
                    ))}
                  </select>
                </>
              ))}
            <label htmlFor="Kode Pos"></label>
            <label htmlFor="">Alamat Lengkap :</label>
            <input type="text" name="" id="" />
            <input type="submit" value="Submit" className="bg-blueP" />
          </form>
        </div>
      </main>
    </>
  );
}
