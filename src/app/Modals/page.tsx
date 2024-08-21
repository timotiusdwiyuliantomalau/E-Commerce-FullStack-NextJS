"use client";
import { useEffect, useState } from "react";
import { district, province, regency } from "../../../utils/fetchLocation";
import { setCookie } from "../../../utils/cookies";
import { updateData } from "../../../utils/firebase/service";
import { action } from "../../../utils/redux/actionSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../utils/redux/store";

export default function locationFormModal() {
  const [provinces, setProvinces] = useState(Array);
  const [id, SetId] = useState(Array);
  const [regencies, setRegencies] = useState(Array);
  const [districts, setDistricts] = useState(Array);
  let user = JSON.parse(localStorage.getItem("user") || "");
  const dispatch = useDispatch<AppDispatch>();

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

  async function handleSubmitLocation(e: any) {
    e.preventDefault();
    const result = await fetch("http://localhost:3000/api/update", {
      method: "PUT",
      body: JSON.stringify({
        id: user.id,
        data: {
          location: {
            provinsi: e.target.provinsi.value,
            kota_kab: e.target.kota_kab.value,
            kecamatan: e.target.kecamatan.value,
            kode_pos: e.target.kode_pos.value,
            alamat_lengkap: e.target.alamat_lengkap.value,
          },
        },
      }),
    });
    const res = await result.json();
    localStorage.setItem(
      "user",
      JSON.stringify({ id: user.id, cart: user.cart, location: res.data })
    );
    dispatch(action())
  }

  return (
    <>
      <div className="pt-[6rem] flex bg-black justify-center min-h-screen bg-opacity-80">
        <main className="w-1/3 flex flex-col p-10 bg-white h-full">
          <h1 className="text-2xl font-semibold mb-3 place-self-center">
            Alamat Penerima
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmitLocation}>
            <div className="flex flex-col">
              <label
                htmlFor="provinsi"
                className="after:content-['*'] after:text-red-500 "
              >
                Provinsi
              </label>
              <select
                name="provinsi"
                className="cursor-pointer"
                onChange={(e: any) => e.target.value && SetId([e.target.value])}
                id=""
                required
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
              <label
                className="after:content-['*'] after:text-red-500 "
                htmlFor="provinsi"
              >
                Kota/Kabupaten
              </label>
              {regencies.length > 0 ? (
                <select
                  name="kota_kab"
                  required
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
              <label
                htmlFor="provinsi"
                className="after:content-['*'] after:text-red-500 "
              >
                Kecamatan
              </label>
              {districts.length > 0 ? (
                <select
                  name="kecamatan"
                  className="cursor-pointer"
                  id=""
                  required
                >
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
            <div className="flex gap-2">
              <label
                htmlFor="Kode Pos"
                className="after:content-['*'] after:text-red-500 "
              >
                Kode Pos
              </label>
              <span>:</span>
              <input
                className="w-20 border-[1px] border-gray-400 rounded-md"
                pattern="[0-9]+"
                required
                name="kode_pos"
                id="Kode Pos"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label
                className="after:content-['*'] after:text-red-500 "
                htmlFor=""
              >
                Alamat Lengkap
              </label>
              <input
                className="border-[1px] border-gray-400 rounded-md pl-2 text-sm p-1"
                required
                name="alamat_lengkap"
                id=""
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-blueP py-2 rounded-md cursor-pointer text-white"
            />
          </form>
        </main>
      </div>
    </>
  );
}
