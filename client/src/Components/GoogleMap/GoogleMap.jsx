import { mergeClasses } from "@material-ui/styles";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import style from "./GoogleMap.module.css";
require("dotenv").config();

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const initialState = {
  activeMarker: {},
  selectedPlace: {},
};
const AnyReactComponent = ({ text, lat, lng }) => (
  <div className={style.marker} lat={lat} lng={lng}>
    <img src={text} alt={text} className={style.markerIcon} />
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
      <AnyReactComponent
        lat={coordinates.lat}
        lng={coordinates.lng}
        text="https://images-ext-2.discordapp.net/external/o99jtUKbWm-2Ma9V8GIugxdmEc42iT-hm0MFK3Zr-FY/https/pbs.twimg.com/profile_images/1179813611662954497/fr-5Z4pZ_400x400.png"
      />
    </GoogleMapReact>
  );
}

export default MapContainer;
