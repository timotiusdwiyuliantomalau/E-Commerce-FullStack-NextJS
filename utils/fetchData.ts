export function dataProducts() {
  const url =
    "https://fakestoreapi.com/products";
    // const option = {method:"GET"}
  try {
    fetch(url).then(async (response) => {
      localStorage.setItem("products",JSON.stringify(await response.json()));
      // console.log(await response.json());
    });
  } catch (error) {
    console.error(error);
  }
}
