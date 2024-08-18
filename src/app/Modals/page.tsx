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
      if (id.length == 1) {
        setRegencies(await regency(id[0]));
      } else if (id.length == 2) {
        setDistricts(await district(id[1]));
      }
    }
    getLocation();
  }, [id]);

  return (
    <>
      <main className="pt-[6rem]">
        <div className="">
          <h1>Alamat Penerima</h1>
          <form className="flex flex-col" action="">
            <label htmlFor="provinsi">Provinsi</label>
            <select
              name=""
              className="cursor-pointer"
              onChange={(e: any) => e.target.value && SetId([e.target.value])}
              id=""
            >
              <option value="">pilih provinsi</option>
              {provinces.length > 0 &&
                provinces.map((data: any, i: number) => (
                  <option key={i} value={data.id}>
                    {data.name}
                  </option>
                ))}
            </select>

            <label htmlFor="provinsi">Kota/Kabupaten</label>
            {regencies.length > 0 ? (
              <select
                name=""
                className="cursor-pointer"
                onChange={(e: any) => e.target.value && SetId([id[0], e.target.value])}
                id=""
              >
                <option value="">pilih kota/kab</option>
                {regencies.map((data: any, i: number) => (
                  <option key={i} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            ) : (
              <select
                name=""
                disabled
                className="cursor-pointer"
                onChange={(e: any) => SetId([id[0], e.target.value])}
                id=""
              >
                <option value="">pilih kota/kab</option>
              </select>
            )}
            <label htmlFor="provinsi">Kecamatan</label>
            {districts.length>0?<select name="" className="cursor-pointer" id="">
              <option value="">pilih kecamatan</option>
              {districts.map((data: any, i: number) => (
                <option key={i} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>:<select name="" className="cursor-pointer" disabled id="">
              <option value="">pilih kecamatan</option>
              {districts.map((data: any, i: number) => (
                <option key={i} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>}
            <label htmlFor="Kode Pos">Kode Pos</label>
            <input type="text" name="Kode Pos" id="Kode Pos" />
            <label htmlFor="">Alamat Lengkap :</label>
            <input type="text" name="" id="" />
            <input type="submit" value="Submit" className="bg-blueP cursor-pointer text-white" />
          </form>
        </div>
      </main>
    </>
  );
}
