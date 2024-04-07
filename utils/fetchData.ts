export function dataProducts(callback: Function) {
  if (localStorage.getItem("products")) return false;
  const url =
    "https://real-time-product-search.p.rapidapi.com/search?q=Shoes&country=us&language=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ab9c13475msh3f3edc7f34b9652p1b21dfjsn58b5f096c008",
      "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
    },
  };

  try {
    fetch(url, options).then((response) => {
      callback(response.json());
    });
  } catch (error) {
    console.error(error);
  }
}
