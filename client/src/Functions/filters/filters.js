import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";
export function filterEstates(
  estates,
  concept,
  tipe,
  bedroom,
  bathroom,
  price,
  search
) {
  console.log(estates, "INMUEBLES");
  const estatesFiltred = backFilters(
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

function backFilters(estates, concept, tipe, bedroom, bathroom, price, search) {
  if (!search && !concept && !tipe && !bedroom && !bathroom) {
    let resultado = estates.filter((estate) =>
      filterPrice(estate.price, price)
    );
    console.log("entre aca primero", resultado);
    return resultado;
  } else if (price) {
    const data = llamadoBack(tipe, bedroom, bathroom, search);
    console.log("ACA no entre", data);

    return data.filter((estate) => filterPrice(estate.price, price));
  } else {
    const data = llamadoBack(tipe, bedroom, bathroom, search);
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

function generateRoute(tipe, bedroom, bathroom, search) {
  let aux = [];
  if (tipe) aux.push(`types=${tipe}&`);
  if (bedroom) aux.push(`bedroom=${bedroom}&`);
  if (bathroom) aux.push(`bathroom=${bathroom}&`);
  if (search) aux.push(`search=${search}&`);
  console.log(aux, "AUX");
  let acumulador = aux.toString();

  for (let i = 0; i < aux.length - 1; i++) {
    if (i === 0) acumulador = acumulador + aux[i];
    acumulador = acumulador + "&" + aux[i];
  }
  return acumulador;
}
async function llamadoBack(tipe, bedroom, bathroom, search) {
  const ruta = generateRoute(tipe, bedroom, bathroom, search);
  let backEstates = await axios.get(`${BACK_SERVER}/property/filter?${ruta}`);
  const data = await backEstates.data;

  console.log(data, "LA DATA");
  return data;
}
