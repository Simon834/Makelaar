import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ViewBase from "../ViewBase/view-base";
import Carrusel from "../../Components/Carrusel/Carrusel";
import Cards from "../../Components/Cards/Cards";
// import FavoriteCard from "../../Components/Favorites/FavoriteCard";
// import FavoriteCards from "../../Components/Favorites/FavoritesCards/FavoriteCards";

import Filter from "../Filters/Filters";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FilterPrice from "../../Components/FilterPrice/FilterPrice";
import FilterModel from "../../Components/FilterModel/FilterModel";
import { constantFilter } from "../../Functions/constant/constant";
import {
  FILTER_CONCEPT,
  FILTER_TIPE,
  FILTER_BEDROOM,
  FILTER_BATHROOM,
  // RESET_FILTER,
} from "../../Redux/Constants/constants";
import { filterEstates } from "../../Functions/filters/filters";

import { clearFilter } from "../../Redux/Actions/filterActions";
import { getAllProperties } from "../../Redux/Actions/propertyActions";
import ChatSocket from "../../Components/ChatSocket/ChatSocket";

const inmuebles = require("../../inmuebles.json");

export default function Home() {
  const { concept, tipe, bedroom, bathroom, price, search,properties } = useSelector(
    (state) => state
  );


  const [estates, setEstates] = useState(properties);

  const dispatch = useDispatch();

  useEffect(() => {
    getEstates()
  }, [concept, tipe, bedroom, bathroom, price, search, properties]);

  async function getEstates(){
    const estatesApi = await filterEstates(properties, concept, tipe, bedroom, bathroom, price, search)
    setEstates(estatesApi.filter(e=>e.premium && !e.Contract && e.status==="activo"))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearFilter());
    dispatch(getAllProperties());

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ViewBase
        filters={
          <Filter
            searchBar={<SearchBar />}
            type={
              <FilterModel
                title="Tipo"
                list={constantFilter.tipeFilter}
                constant={FILTER_TIPE}
                value={tipe}
              />
            }
            sellRent={
              <FilterModel
                title="Condición"
                list={constantFilter.conceptFilter}
                constant={FILTER_CONCEPT}
                value={concept}
              />
            }
            price={<FilterPrice valuePrice={price} />}
            bedrooms={
              <FilterModel
                title="Dormitorios"
                list={constantFilter.bedroomFilter}
                constant={FILTER_BEDROOM}
                value={bedroom}
              />
            }
            bathrooms={
              <FilterModel
                title="Baños"
                list={constantFilter.bathroomFilter}
                constant={FILTER_BATHROOM}
                value={bathroom}
              />
            }
          />
        }
        carousel={<Carrusel />}
        content={<Cards inmuebles={estates}/>}
      />
    </div>
  );
}
