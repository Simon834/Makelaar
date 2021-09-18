import { mergeClasses } from "@material-ui/styles";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import style from "./GoogleMap.module.css";
import marker from "../../images/gps-icon-makelaar.png";
import MiniCardComponent from "../Card/miniCard";

require("dotenv").config();

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const initialState = {
  activeMarker: {},
  selectedPlace: {},
};

//Enviar por props latitud y longitus paraa centrar el mapa

export function MapContainer({ lat, lng, estates }) {
  const [popupInfo, setPopUpInfo] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });

  const AnyReactComponent = ({ estate, lat, lng }) => (
    <div className={style.marker} lat={lat} lng={lng}>
      <img src={marker} alt={"logo"} className={style.markerIcon} />
      {popupInfo && <MiniCardComponent estate={estate} />}
    </div>
  );

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

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAVef8w7jcOU7gqCZ6JtorzeFKFR2AsDdw" }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={""}
      onChange={""}
      onChildClick={(e) => setPopUpInfo(e)}
    >
      {estates ? (
        estates.map((estate) => {
          return (
            <AnyReactComponent
              lat={estate.lat}
              lng={estate.lng}
              estate={estate}
            />
          );
        })
      ) : (
        <AnyReactComponent lat={coordinates.lat} lng={coordinates.lng} />
      )}
    </GoogleMapReact>
  );
}

export default MapContainer;
