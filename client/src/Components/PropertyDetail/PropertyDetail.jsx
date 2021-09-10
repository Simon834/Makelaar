import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GaleryImg from "../GaleryImg/GaleryImg";
import ContactForm from "../ContactForm/ContactForm";
import inmuebles from "../../inmuebles.json";
import Card from "@material-ui/core/Card";
import CardComponent from "../Card/Card";
import { useParams } from "react-router";
import { propertyById } from "../../Functions/api/property";
import GoogleMap from "../GoogleMap/GoogleMap";

import style from "./PropertyDetail.module.css";

const useStyles = makeStyles({
  root: {
    boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
    padding: 20,
  },
});

export default function PropertyDetail() {
  let { id } = useParams();
  const [inm, setInm] = useState({});

  useEffect(() => {
    getDetail(id);
  }, []);

  async function getDetail(id) {
    const inmDetail = await propertyById(id);
    setInm(inmDetail);
    return inmDetail;
  }

  const classes = useStyles();

  return (
    <div>
    <div className={style.conteiner}>
      <div className={style.info}>
        <CardComponent
          title={inm.name}
          type={inm.type}
          bathroom={inm.bathrooms}
          bedroom={inm.rooms}
          rooms={inm.rooms + inm.bathrooms + 2}
          price={inm.price}
          address={inm.address}
          garage={inm.garage}
          id={inm.id}
        />


        <div>
          <ContactForm
            msg={`Hola, tengo interés en ${inm.name} en ${inm.address}, ¿podriamos coordinar una visita?`}
          />
        </div>
      </div>
      <div className={style.galery}>
        <GaleryImg images={inm.Images} />
      </div>
    </div>

        <div className={style.map}>
          <GoogleMap lat={inm.lat} lng={inm.lng} />
        </div>
    </div>
  );
}
