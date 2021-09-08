import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GaleryImg from '../GaleryImg/GaleryImg'
import PropertyInfo from './Components/PropertyInfo'
import ContactForm from '../ContactForm/ContactForm'
import inmuebles from '../../inmuebles.json'
import Card from "@material-ui/core/Card";

import style from './PropertyDetail.module.css'

const useStyles = makeStyles({
    root: {
        width: "100%",
        boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
        padding: 20,
        height:"100%"
      }
    })



export default function PropertyDetail() {
    const classes = useStyles();


    return (
        <div className={style.conteiner}>
            <div className={style.info}>
                <PropertyInfo info={inmuebles[0]} />
                <Card className={classes.root}>
                    <ContactForm/>
                </Card>
            </div>
            <div className={style.galery}>
                <GaleryImg images={[inmuebles[0].image, inmuebles[1].image, inmuebles[2].image]} />
            </div>
        </div>
    )
}
