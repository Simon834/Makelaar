import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import ViewBase from '../ViewBase/view-base'
import Carrusel from '../../Components/Carrusel/Carrusel';
import Cards from '../../Components/Cards/Cards';
import FavoriteCard from '../../Components/Favorites/FavoriteCard';
import FavoriteCards from '../../Components/Favorites/FavoritesCards/FavoriteCards';

import Filter from '../Filters/Filters';
import SearchBar from '../../Components/SearchBar/SearchBar';
import FilterPrice from '../../Components/FilterPrice/FilterPrice';
import FilterModel from '../../Components/FilterModel/FilterModel';
import { constantFilter } from '../../Functions/constant/constant';
import { FILTER_CONCEPT, FILTER_TIPE, FILTER_BEDROOM, FILTER_BATHROOM, RESET_FILTER } from '../../Redux/Constants/constants'
import { filterEstates } from '../../Functions/filters/filters';

const inmuebles = require("../../inmuebles.json");




export default function Home() {
    const { concept, tipe, bedroom, bathroom, price, search } = useSelector(state => state)
    const [estates, setEstates] = useState(inmuebles)

    useEffect(() =>

        setEstates(filterEstates(inmuebles, concept, tipe, bedroom, bathroom, price, search))


        , [concept, tipe, bedroom, bathroom, price, search])


    return (
        <div>
            <ViewBase
                filters={
                    <Filter
                        searchBar={<SearchBar />}
                        type={<FilterModel title="Tipo" list={constantFilter.tipeFilter} constant={FILTER_TIPE} />}
                        sellRent={<FilterModel title="Condición" list={constantFilter.conceptFilter} constant={FILTER_CONCEPT} />}
                        price={<FilterPrice />}
                        bedrooms={<FilterModel title="Dormitorios" list={constantFilter.bedroomFilter} constant={FILTER_BEDROOM} />}
                        bathrooms={<FilterModel title="Baños" list={constantFilter.bathroomFilter} constant={FILTER_BATHROOM} />}
                    />
                }
                carousel={<Carrusel />}
                content={<Cards inmuebles={estates} />}
            />
        </div>
    )
}
