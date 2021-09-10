import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GaleryImg from '../GaleryImg/GaleryImg'
import ContactForm from '../ContactForm/ContactForm'
import inmuebles from '../../inmuebles.json'
import Card from "@material-ui/core/Card";
import CardComponent from '../Card/Card';

import style from './PropertyDetail.module.css'

const useStyles = makeStyles({
    root: {
  
        boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
        padding: 20,

      }
    })



export default function PropertyDetail() {
    const classes = useStyles();
    const inm=inmuebles[0]

    return (
        <div className={style.conteiner}>
            <div className={style.info}>
            <CardComponent
            title={inm.title}
            type={inm.type}
            bathroom={inm.bathroom}
            bedroom={inm.bedroom}
            rooms={inm.rooms}
            price={inm.price}
            address={inm.address}
            garage={inm.garage}
            id={inm.id}
          />
            
            <ContactForm msg={`Hola, tengo interés en ${inm.title} en ${inm.address}, ¿podriamos coordinar una visita?`}/>

            </div>
            <div className={style.galery}>
                <GaleryImg images={[inmuebles[0].image, inmuebles[1].image, inmuebles[2].image]} />
            </div>
        </div>
    )
}
