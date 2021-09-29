import React, { useEffect, useState } from "react";
import GaleryImg from "../GaleryImg/GaleryImg";
import ContactForm from "../ContactForm/ContactForm";

import CardComponent from "../Card/Card";
import { useParams } from "react-router";
import { propertyById } from "../../Functions/api/property";
import GoogleMap from "../GoogleMap/GoogleMap";

import phoneImg from "../../images/telefono-03.jpg";

import style from "./PropertyDetail.module.css";

export default function PropertyDetail() {
  let { id } = useParams();
  const [inm, setInm] = useState({});
  const [img, setImg] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetail(id); // eslint-disable-next-line
  }, [update]);

  async function getDetail(id) {
    const inmDetail = await propertyById(id);
    setInm(inmDetail);
    setImg(inmDetail.Images[0].url);
    return inmDetail;
  }

  function foceUpdate() {
    setUpdate(!update);
  }

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
            id={id * 1}
            image={img}
            condition={inm.condition}
            description={inm.description}
            transaction={inm.transaction}
            area={inm.area}
            contrat={inm.Contract}
            hideImage={true}
            update={foceUpdate}
          />
        </div>
        <div className={style.galery}>
          <GaleryImg images={inm.Images} />
        </div>
      </div>

      <div className={style.map}>
        <GoogleMap lat={inm.lat} lng={inm.lng} />
      </div>
      <div className={style.contact}>
        <ContactForm
          msg={`Hola, tengo interés en ${inm.name} en ${inm.address}, ¿Podemos coordinar una visita?`}
        />
        <img className={style.img} src={phoneImg} alt="imagen" />
      </div>
    </div>
  );
}
