import "./filters.css";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../Redux/Actions/filterActions";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  searchButton: {
    marginTop: "1rem",
    marginLeft: "5rem",
  },
}));

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
  const dispatch = useDispatch();
  const { concept } = useSelector((state) => state);
  const classes = useStyles();

  return (
    <div>
      <div className="filters-fixed">
        {searchBar && <div className="searchbar-container">{searchBar}</div>}
        {type && <div className="type-container">{type}</div>}
        {sellRent && <div className="sellRent-container">{sellRent}</div>}
        {concept === "Alquiler" && (
          <div className="price-container">{price}</div>
        )}
        {city && <div className="city-container">{city}</div>}
        {province && <div className="province-container">{province}</div>}
        {neighbothood && (
          <div className="neighbothood-container">{neighbothood}</div>
        )}
        {street && <div className="street-container">{street}</div>}
        {bedrooms && <div className="bedrooms-container">{bedrooms}</div>}
        {bathrooms && <div className="bathrooms-container">{bathrooms}</div>}
        <Button
          className={classes.searchButton}
          variant="contained"
          color="primary"
          onClick={() => dispatch(clearFilter())}
        >
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
}
