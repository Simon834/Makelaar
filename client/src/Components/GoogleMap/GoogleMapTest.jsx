import React, { useEffect, useState } from "react";
import marker from "../../images/gps-icon-makelaar.png";
import style from "./GoogleMap.module.css";
// examples:
import GoogleMap from "google-map-react";

// consts: [34.0522, -118.2437]

// InfoWindow component
const InfoWindow = (props) => {
  const { estate } = props;
  const infoWindowStyle = {
    position: "relative",
    bottom: 150,
    left: "-45px",
    width: 220,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <img src={estate.img} alt="" />
      <div style={{ fontSize: 16 }}>{estate.name}</div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: "grey" }}>{estate.address} </span>
      </div>
      <div style={{ fontSize: 14, color: "grey" }}>{estate.type}</div>
      <div style={{ fontSize: 14, color: "grey" }}>{estate.price}</div>
    </div>
  );
};

// Marker component
const Marker = ({ show, estate, lat, lng }) => {
  const markerStyle = {
    border: "1px solid white",
    borderRadius: "50%",
    height: 10,
    width: 10,
    backgroundColor: show ? "red" : "blue",
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <div className={style.marker} lat={lat} lng={lng}>
      <img src={marker} alt={"logo"} className={style.markerIcon} />
      {estate.show && <InfoWindow estate={estate} />}
    </div>
  );
};

export function MarkerInfoWindow({ estates, lat, lng }) {
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const [show, setShow] = useState(estates);

  useEffect(() => {
    if (estates) {
      estates.forEach((estate) => {
        estate.show = false;
      });
      setShow(estates);
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ ...coordinates, lat: latitude, lng: longitude });
        }
      );
    } else {
      setCoordinates({ ...coordinates, lat: lat, lng: lng });
    }
  }, [lat, lng, estates]);

  // onChildClick callback can take two arguments: key and childProps
  const onChildClickCallback = (key) => {
    const index = show.findIndex((e) => e.id === key);
    setShow([...show, (show[index].show = !show[index].show)]);
    console.log("hice clikc en", show[index]);
  };

  return (
    <>
      {show && (
        <GoogleMap
          defaultZoom={16}
          defaultCenter={coordinates}
          bootstrapURLKeys={{ key: "AIzaSyAVef8w7jcOU7gqCZ6JtorzeFKFR2AsDdw" }}
          onChildClick={onChildClickCallback}
        >
          {show.map((place) => (
            <Marker
              id={place.id}
              lat={place.lat}
              lng={place.lng}
              show={place.show}
              estate={place}
            />
          ))}
        </GoogleMap>
      )}
    </>
  );
}

export default MarkerInfoWindow;
