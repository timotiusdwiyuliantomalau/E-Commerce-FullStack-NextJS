export async function apiTopClothes() {
  const url =
    "https://real-time-product-search.p.rapidapi.com/search?q=Unisex%20Top%20Clothes&country=us&language=en&page=1&limit=15&sort_by=BEST_MATCH&product_condition=ANY&min_rating=4";
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1580f6d4eemshf6ce41360b72c81p1dce3djsn18728304776a',
		'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
	}
};

  try {
    const response = fetch(url, options);
    return (await response).json();
  } catch (error) {
    console.error(error);
  }
}
export async function apiUnderClothes() {
  const url =
    "https://real-time-product-search.p.rapidapi.com/search?q=Unisex%20Under%20Clothes&country=us&language=en&page=1&limit=15&sort_by=BEST_MATCH&product_condition=ANY&min_rating=4";
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1580f6d4eemshf6ce41360b72c81p1dce3djsn18728304776a',
		'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
	}
};

  try {
    const response = fetch(url, options);
    return (await response).json();
  } catch (error) {
    console.error(error);
  }
}
export async function apiShoes() {
  const url =
    "https://real-time-product-search.p.rapidapi.com/search?q=Shoes&country=us&language=en&page=1&limit=15&sort_by=BEST_MATCH&product_condition=ANY&min_rating=4";
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1580f6d4eemshf6ce41360b72c81p1dce3djsn18728304776a',
		'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
	}
};

  try {
    const response = fetch(url, options);
    return (await response).json();
  } catch (error) {
    console.error(error);
  }
}

export async function apiBags() {
  const url =
    "https://real-time-product-search.p.rapidapi.com/search?q=Bags&country=us&language=en&page=1&limit=15&sort_by=BEST_MATCH&product_condition=ANY&min_rating=4";
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1580f6d4eemshf6ce41360b72c81p1dce3djsn18728304776a',
		'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
	}
};

  try {
    const response = fetch(url, options);
    return (await response).json();
  } catch (error) {
    console.error(error);
  }
}

export async function apiAccessories() {
  const url =
    "https://real-time-product-search.p.rapidapi.com/search?q=Accessories&country=us&language=en&page=1&limit=15&sort_by=BEST_MATCH&product_condition=ANY&min_rating=4";
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1580f6d4eemshf6ce41360b72c81p1dce3djsn18728304776a',
		'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
	}
};

  try {
    const response = fetch(url, options);
    return (await response).json();
  } catch (error) {
    console.error(error);
  }
}

export async function dataProducts(callback: any) {
  const topClothes=await apiTopClothes();
  const underClothes=await apiUnderClothes();
  const shoes=await apiShoes();
  const bags=await apiBags();
  const accessories=await apiAccessories();
  callback([topClothes, underClothes, shoes, bags, accessories]);
}