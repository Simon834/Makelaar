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
  try{
    const resultFiltered = await axios.get(`${BACK_SERVER}/property?types=${tipe}&bedroom=${bedroom}&bathroom=${bathroom}&search=${search}`)
    return resultFiltered.data
    const estatesFiltred = estates.filter(
      (estate) =>
    //     filterProp(estate.concept, concept) &&
    //     filterProp(estate.type, tipe) &&
    //     filterProp(estate.bedroom, bedroom) &&
    //     filterProp(estate.bathroom, bathroom) &&
        filterPrice(estate.price, price)
    //     searchFilter(estate, search)
    );
    const ordenador_premium = estatesFiltred.sort(
      (a, b) => b.premium - a.premium
    );
    return ordenador_premium;
  }


  }catch(err){
    console.log("no funciona el filtro")
  }
}

// function searchFilter(estate, search) {
//   if (search) {
//     return (
//       estate.title?.toUpperCase().includes(search.toUpperCase()) ||
//       estate.address?.toUpperCase().includes(search.toUpperCase()) ||
//       estate.type?.toUpperCase().includes(search.toUpperCase()) ||
//       estate.price?.toUpperCase().includes(search.toUpperCase()) ||
//       estate.area?.toUpperCase().includes(search.toUpperCase())
//     );
//   } else {
//     return true;
//   }
// }
