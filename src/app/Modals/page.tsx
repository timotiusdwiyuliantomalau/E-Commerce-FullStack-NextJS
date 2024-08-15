"use client";
import { useEffect, useState } from "react";
import { district, province, regency } from "../../../utils/fetchLocation";

export default function locationFormModal() {
  const [provinces, setProvinces] = useState(Array);
  const [idProvince, setIdProvince] = useState(0);
  const [regencies, setRegencies] = useState(Array);

  useEffect(() => {
    async function getLocation() {
      const dataProvince = await province();
      dataProvince && setProvinces(dataProvince);
      if(idProvince){
        return const dataRegency = await regency(idProvince)}
      dataRegency && setRegencies(dataRegency);
      // const dataDistrict = await district(dataRegency?.data.id);
    }
    getLocation();
  }, [idProvince]);
  console.log(regencies);

  return (
    <>
      <main className="pt-[6rem]">
        <div className="">
          <h1>Modal</h1>
          <form className="flex flex-col" action="">
            <label htmlFor="provinsi">Provinsi</label>
            <select name="" className="cursor-pointer" onChange={(e:any)=>setIdProvince(e.target.value)} id="">
              {provinces.length > 0 &&
                provinces.map((data: any,i:number) => (
                  <option key={i} value={data.id}>{data.name}</option>
                ))}
            </select>
            {regencies.length>0&&(
              <>
              <label htmlFor="provinsi">Kota/Kabupaten</label>
            <select name="" className="cursor-pointer" onChange={(e:any)=>setIdProvince(e.target.value)} id="">
              {regencies.map((data: any,i:number) => (
                  <option key={i} value={data.id}>{data.name}</option>
                ))}
            </select>
            </>
            )}
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
