export const province = async () => {
  const result = fetch(
    `https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
  ).then(async (res) => {
    try {
      const response = await res.json();
      return response;
    } catch (err) {
      console.log(err);
    }
  });
  return result;
};

export const regency = (idRegency:any) => {
  const result = fetch(
    `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${idRegency}.json`
  ).then(async (res) => {
    try {
      const response = await res.json();
      return response;
    } catch (err) {
      console.log(err);
    }
  });
  return result;
};

export const district = (idDistrict:any) => {
    const result = fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${idDistrict}.json`
    ).then(async (res) => {
      try {
        const response = await res.json();
        return response;
      } catch (err) {
        console.log(err);
      }
    });
    return result;
  };
  