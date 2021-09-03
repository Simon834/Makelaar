export function filter(estates, concept, tipe, bedroom, bathroom, price) {

    const estatesFiltred = estates.filter((estate) => (filterProp(estate.concept, concept) && filterProp(estate.tipe, tipe) && filterProp(estate.bedroom, bedroom) && filterProp(estate.bathroom, bathroom) && filterPrice(estate.Price, price)))

    return estatesFiltred

}

function filterProp(estateProp, prop) {
    if (prop) {
        return estateProp === prop ? true : false
    }
    else {
        return true
    }
}

function filterPrice(estatePrice, price) {
    if (prop) {
        return estatePrice > price.min ? estatePrice < price.max ? true : false : false
    }
    else {
        return true
    }
}

