
import axios from "axios";
export function filterEstates(
  estates,
  concept,
  tipe,
  bedroom,
  bathroom,
  price,
  search
) {
  const estatesFiltred = backFilters(
    estates,
    concept,
    tipe,
    bedroom,
    bathroom,
    price,
    search
  );
  const ordenador_premium = estatesFiltred(estates).sort(
    (a, b) => b.premium - a.premium
  );
  return ordenador_premium;
}



function filterPrice(estatePrice, price) {
  if (price[0]) {
    return estatePrice * 1 > price[0]
      ? estatePrice * 1 < price[1]
        ? true
        : false
      : false;
  } else {
    return true;
  }
}
async function backFilters(
  estates,
  concept,
  tipe,
  bedroom,
  bathroom,
  price,
  search
) {
  if (!search && !concept && !tipe && !bedroom && !bathroom) {
    return estates.filter((estate) => filterPrice(estate.price, price));
  } else if (price) {
    let backEstates = await axios.get(`${BACK_SERVER}/property?types=${tipe}&bedroom=${bedroom}&bathroom=${bathroom}&search=${search}`);

    return backEstates.data.filter((estate) => filterPrice(estate.price, price));

  } else {
    let backEstates = await axios.get(`${BACK_SERVER}/property?types=${tipe}&bedroom=${bedroom}&bathroom=${bathroom}&search=${search}`);
    return backEstates.data;
  }
}

//await axios.get(`${BACK_SERVER}/property?types=${tipe}&bedroom=${bedroom}&bathroom=${bathroom}&search=${search}`)