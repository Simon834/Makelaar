export function filterEstates(
  estates,
  concept,
  tipe,
  bedroom,
  bathroom,
  price,
  search
) {
  const estatesFiltred = estates.filter(
    (estate) =>
      filterProp(estate.concept, concept) &&
      filterProp(estate.type, tipe) &&
      filterProp(estate.bedroom, bedroom) &&
      filterProp(estate.bathroom, bathroom) &&
      filterPrice(estate.price, price) &&
      searchFilter(estate, search)
  );
  const ordenador_premium = estatesFiltred.sort(
    (a, b) => b.premium - a.premium
  );
  return ordenador_premium;
}

function filterProp(estateProp, prop) {
  if (prop) {
    return estateProp === prop ? true : false;
  } else {
    return true;
  }
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

function searchFilter(estate, search) {
  if (search) {
    return (
      estate.title?.toUpperCase().includes(search.toUpperCase()) ||
      estate.address?.toUpperCase().includes(search.toUpperCase()) ||
      estate.type?.toUpperCase().includes(search.toUpperCase()) ||
      estate.price?.toUpperCase().includes(search.toUpperCase()) ||
      estate.area?.toUpperCase().includes(search.toUpperCase())
    );
  } else {
    return true;
  }
}
