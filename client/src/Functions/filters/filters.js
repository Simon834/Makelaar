import axios from "axios";

require("dotenv").config();

const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

<<<<<<< HEAD
export async function filterEstates(
=======
export function filterEstates(
>>>>>>> dev
  estates,
  concept,
  tipe,
  bedroom,
  bathroom,
  price,
  search
) {
<<<<<<< HEAD
  console.log(estates, "INMUEBLES");
  const estatesFiltred = await backFilters(
=======
  const estatesFiltred = backFilters(
>>>>>>> dev
    estates,
    concept,
    tipe,
    bedroom,
    bathroom,
    price,
    search
  );

  if (estatesFiltred.length > 0) {
    const ordenador_premium = estatesFiltred.sort(
      (a, b) => b.premium - a.premium
    );
    return ordenador_premium;
  }
  console.log("estates filtered variable", estatesFiltred);
  return estatesFiltred;
}

async function backFilters(estates, concept, tipe, bedroom, bathroom, price, search) {
  if (!search && !concept && !tipe && !bedroom && !bathroom) {
    let resultado = estates.filter((estate) =>
      filterPrice(estate.price, price)
    );
    return resultado;
  } else if (price) {
<<<<<<< HEAD
    const data = await llamadoBack(tipe, bedroom, bathroom, search, concept);
    console.log("ACA no entre", data);
=======
    const data = llamadoBack(tipe, bedroom, bathroom, search);
>>>>>>> dev

    if (data.length > 0) {
      return data.filter((estate) => filterPrice(estate.price, price));
    }
    return data;
  } else {
<<<<<<< HEAD
    const data = await llamadoBack(tipe, bedroom, bathroom, search, concept);
    console.log(data, "Data");
=======
    const data = llamadoBack(tipe, bedroom, bathroom, search);

>>>>>>> dev
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
  let acumulador = aux.toString();

  for (let i = 0; i < aux.length - 1; i++) {
    if (i === 0) acumulador = acumulador + aux[i];
    acumulador = acumulador + "&" + aux[i];
  }
  return acumulador;
}
<<<<<<< HEAD

async function llamadoBack(tipe, bedroom, bathroom, search, concept) {
  try {
    const ruta = generateRoute(tipe, bedroom, bathroom, search, concept);
    const backEstates = await axios.get(`${BACK_SERVER}/property/filter?${ruta}`);
    console.log(backEstates.data, "LA DATA DEL GET");
    return backEstates.data;

  
  } catch (err) {
    console.log(err);
  }
=======
async function llamadoBack(tipe, bedroom, bathroom, search) {
  const ruta = generateRoute(tipe, bedroom, bathroom, search);
  const backEstates = await axios.get(`${BACK_SERVER}/property/filter?${ruta}`);
  return backEstates.data;
>>>>>>> dev
}
