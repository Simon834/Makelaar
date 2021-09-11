import axios from "axios";

require("dotenv").config();

const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export async function filterEstates(
  estates,
  concept,
  tipe,
  bedroom,
  bathroom,
  price,
  search
) {
  console.log(estates, "INMUEBLES");
  const estatesFiltred = await backFilters(
    estates,
    concept,
    tipe,
    bedroom,
    bathroom,
    price,
    search
  );
  console.log("estados", estatesFiltred);
  const ordenador_premium = estatesFiltred.sort(
    (a, b) => b.premium - a.premium
  );
  return ordenador_premium;
}

async function backFilters(estates, concept, tipe, bedroom, bathroom, price, search) {
  if (!search && !concept && !tipe && !bedroom && !bathroom) {
    let resultado = estates.filter((estate) =>
      filterPrice(estate.price, price)
    );
    console.log("entre aca primero", resultado);
    return resultado;
  } else if (price) {
    const data = await llamadoBack(tipe, bedroom, bathroom, search, concept);
    console.log("ACA no entre", data);

    return data.filter((estate) => filterPrice(estate.price, price));
  } else {
    const data = await llamadoBack(tipe, bedroom, bathroom, search, concept);
    console.log(data, "Data");
    return data;
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

function generateRoute(tipe, bedroom, bathroom, search, concept) {
  let aux = [];
  if (tipe) aux.push(`type=${tipe}&`);
  if (concept) aux.push(`transaction=${concept}&`);
  if (bedroom) aux.push(`bedrooms=${bedroom}&`);
  if (bathroom) aux.push(`bathrooms=${bathroom}&`);
  if (search) aux.push(`search=${search}&`);
  console.log(aux, "AUX");
  let acumulador = aux.toString();

  for (let i = 0; i < aux.length - 1; i++) {
    if (i === 0) acumulador = acumulador + aux[i];
    acumulador = acumulador + "&" + aux[i];
  }
  return acumulador;
}

async function llamadoBack(tipe, bedroom, bathroom, search, concept) {
  try {
    const ruta = generateRoute(tipe, bedroom, bathroom, search, concept);
    const backEstates = await axios.get(`${BACK_SERVER}/property/filter?${ruta}`);
    console.log(backEstates.data, "LA DATA DEL GET");
    return backEstates.data;

  
  } catch (err) {
    console.log(err);
  }
}
