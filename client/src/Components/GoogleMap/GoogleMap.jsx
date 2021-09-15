import { mergeClasses } from "@material-ui/styles";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import style from "./GoogleMap.module.css";
import marker from "../../images/gps-icon-makelaar.png";

require("dotenv").config();

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const initialState = {
  activeMarker: {},
  selectedPlace: {},
};
const AnyReactComponent = ({ text, lat, lng }) => (
  <div className={style.marker} lat={lat} lng={lng}>
    <img src={marker} alt={"logo"} className={style.markerIcon} />
  </div>
);

//Enviar por props latitud y longitus paraa centrar el mapa

export function MapContainer(props) {
  const coordinates = { lat: props.lat, lng: props.lng };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAVef8w7jcOU7gqCZ6JtorzeFKFR2AsDdw" }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={16}
      margin={[50, 50, 50, 50]}
      options={""}
      onChange={""}
      onChildClick={""}
    >
      <AnyReactComponent lat={coordinates.lat} lng={coordinates.lng} />
    </GoogleMapReact>
  );
}

export default MapContainer;
