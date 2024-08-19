"use client";
import { useEffect, useState } from "react";
import { district, province, regency } from "../../../utils/fetchLocation";
import { setCookie } from "../../../utils/cookies";

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

  function handleSubmitLocation(e: any) {
    e.preventDefault();
    setCookie(
      "location",
      JSON.stringify({
        provinsi: e.target.provinsi.value,
        kota_kab: e.target.kota_kab.value,
        kecamatan: e.target.kecamatan.value,
      }),
      1000 * 3600
    );
  }

  return (
    <>
      <div className="pt-[6rem] flex bg-black  min-h-screen absolute">
        <form
          onSubmit={handleSubmitLocation}
          className="w-1/2 flex flex-col p-10 bg-white absolute"
        >
          <h1 className="text-2xl font-semibold mb-3 place-self-center">
            Alamat Penerima
          </h1>
          <form className="flex flex-col gap-4" action="">
            <div className="flex flex-col">
              <label htmlFor="provinsi">Provinsi :</label>
              <select
                name="provinsi"
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
            </div>
            <div className="flex flex-col">
              <label htmlFor="provinsi">Kota/Kabupaten :</label>
              {regencies.length > 0 ? (
                <select
                  name="kota_kab"
                  className="cursor-pointer"
                  onChange={(e: any) =>
                    e.target.value && SetId([id[0], e.target.value])
                  }
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
            </div>
            <div className="flex flex-col">
              <label htmlFor="provinsi">Kecamatan :</label>
              {districts.length > 0 ? (
                <select name="kecamatan" className="cursor-pointer" id="">
                  <option value="">pilih kecamatan</option>
                  {districts.map((data: any, i: number) => (
                    <option key={i} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select name="" className="cursor-pointer" disabled id="">
                  <option value="">pilih kecamatan</option>
                  {districts.map((data: any, i: number) => (
                    <option key={i} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="flex gap-5">
              <label htmlFor="Kode Pos">Kode Pos :</label>
              <input
                className="w-20"
                pattern="[0-9]+"
                required
                name="Kode Pos"
                id="Kode Pos"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="">Alamat Lengkap :</label>
              <input name="" id="" />
            </div>

            <input
              type="submit"
              value="Submit"
              className="bg-blueP py-2 rounded-md cursor-pointer text-white"
            />
          </form>
        </form>
      </div>
    </>
  );
}
