import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import InfoWindow from "./InfoWindow";
import marker from "../../images/gps-icon-makelaar.png";
import style from "./GoogleMap.module.css";

require("dotenv").config();

const { REACT_APP_GOOGLE_API_KEY } = process.env;

//Enviar por props latitud y longitus paraa centrar el mapa

export function MapContainer({ lat, lng, estates }) {
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const [show, setShow] = useState(null);

  useEffect(() => {
    if (estates) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ ...coordinates, lat: latitude, lng: longitude });
        }
      );
    } else {
      setCoordinates({ ...coordinates, lat: lat, lng: lng });
    }
  }, [lat, lng, estates]);

  const Marker = ({ onClick, lat, lng }) => {
    return (
      <div className={style.marker} lat={lat} lng={lng} onClick={onClick}>
        <img src={marker} alt={"logo"} className={style.markerIcon} />
      </div>
    );
  };
  const Markers = estates?.map((estate) => {
    return (
      <Marker
        lat={estate.lat}
        lng={estate.lng}
        onClick={() =>
          setShow({
            id: estate.id,
            name: estate.name,
            img: estate.Images[0].url,
            address: estate.address,
            transaction: estate.transaction,
            price: estate.price,
          })
        }
      />
    );
  });

  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: { REACT_APP_GOOGLE_API_KEY } }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
      >
        {estates ? (
          Markers
        ) : (
          <Marker lat={coordinates.lat} lng={coordinates.lng} />
        )}
      </GoogleMapReact>
      {show && (
        <InfoWindow
          name={show.name}
          address={show.address}
          img={show.img}
          type={show.type}
          price={show.price}
          id={show.id}
          setShow={setShow}
        />
      )}
    </>
  );
}

export default MapContainer;
