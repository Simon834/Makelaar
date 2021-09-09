import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState } from "react";

const logo = require("../../images/logo-color.png");

const initialState = {
  activeMarker: {},
  selectedPlace: {},
};

//Enviar por props latitud y longitus paraa centrar el mapa

export function MapContainer(props) {
  const { lat, lng } = props.mapCenter;
  console.log(lat, lng);
  const [place, setPlace] = useState(initialState);

  return (
    <Map google={props.google} initialCenter={{ lat: lat, lng: lng }}>
      <Marker
        icon={{
          url: "https://images-ext-2.discordapp.net/external/o99jtUKbWm-2Ma9V8GIugxdmEc42iT-hm0MFK3Zr-FY/https/pbs.twimg.com/profile_images/1179813611662954497/fr-5Z4pZ_400x400.png",
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
          scaledSize: new window.google.maps.Size(60, 60),
        }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAVef8w7jcOU7gqCZ6JtorzeFKFR2AsDdw",
})(MapContainer);
