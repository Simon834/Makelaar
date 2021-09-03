import "./filters.css";

export default function Filter({
    searchBar,
    type,
    sellRent,
    price,
    city,
    province,
    neighbothood,
    street,
    bedrooms,
    bathrooms,
    }) {
    return (
        <div>
            <div className="filters-fixed">
            {searchBar && <div className="searchbar-container">{searchBar}</div>}
            {type && <div className="type-container">{type}</div>}
            {sellRent && <div className="sellRent-container">{sellRent}</div>}
            {price && <div className="price-container">{price}</div>}
            {city && <div className="city-container">{city}</div>}
            {province && <div className="province-container">{province}</div>}
            {neighbothood && <div className="neighbothood-container">{neighbothood}</div>}
            {street && <div className="street-container">{street}</div>}
            {bedrooms && <div className="bedrooms-container">{bedrooms}</div>}
            {bathrooms && <div className="bathrooms-container">{bathrooms}</div>}
            </div>
        </div>
    );
}
