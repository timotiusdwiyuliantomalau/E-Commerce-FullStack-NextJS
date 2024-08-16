"use client";
import { useEffect, useState } from "react";
import { district, province, regency } from "../../../utils/fetchLocation";

export default function locationFormModal() {
  const [provinces, setProvinces] = useState(Array);
  const [id, SetId] = useState(Array);
  const [regencies, setRegencies] = useState(Array);
  const [districts, setDistricts] = useState(Array);

  useEffect(() => {
    async function getLocation() {
      const dataProvince = await province();
      dataProvince && setProvinces(dataProvince);
      if(id.length>0){
        setRegencies(await regency(id[0]));
      }if(id.length>1){
        setDistricts(await district(id[1]));
      }
    }
    getLocation();
  }, [id]);

  return (
    <>
      <main className="pt-[6rem]">
        <div className="">
          <h1>Modal</h1>
          <form className="flex flex-col" action="">
            <label htmlFor="provinsi">Provinsi</label>
            <select name="" className="cursor-pointer" onChange={(e:any)=>SetId([...id,e.target.value])} id="">
              {provinces.length > 0 &&
                provinces.map((data: any,i:number) => (
                  <option key={i} value={data.id}>{data.name}</option>
                ))}
            </select>
            {regencies.length>0&&(
              <>
              <label htmlFor="provinsi">Kota/Kabupaten</label>
            <select name="" className="cursor-pointer" onChange={(e:any)=>SetId([...id,e.target.value])} id="">
              {regencies.map((data: any,i:number) => (
                  <option key={i} value={data.id}>{data.name}</option>
                ))}
            </select>
            </>
            )}
            <select name="" className="cursor-pointer" onChange={(e:any)=>SetId([...id,e.target.value])} id="">
              {districts.length > 0 &&
                districts.map((data: any,i:number) => (
                  <option key={i} value={data.id}>{data.name}</option>
                ))}
            </select>
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
