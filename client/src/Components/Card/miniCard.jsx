import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import {
  addFavorite,
  deleteFavorite,
} from "../../Redux/Actions/favoriteActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import icoRoom from "../../images/ico-amountrooms.png";
import icoBeth from "../../images/ico-bathrooms.png";
import icoBed from "../../images/ico-bedrooms.png";
import icoType from "../../images/ico-type.png";
import icoArea from "../../images/ico-areasize.png";
import EditIcon from "@material-ui/icons/Edit";
import style from "./MiniCard.module.css";
import EditProperty from "../../Components/EditProperty/EditProperty";
import { Dialog, DialogContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { stylesColor } from "../Upload/uploadConfig";

const useStyles = makeStyles({
  root: {
    margin: "0px",
    width: "12rem",
    height: "7rem",
    boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
  },
  media: {
    width: "100%",
    height: "2.5rem",
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
});

export default function MiniCardComponent({ estate }) {
  const classes = useStyles();
 
  return estate ? (
    <Card className={classes.root}>
     
      <CardContent className={classes.content}>
        <div className={style.TitleAddress}>
          <Typography className={style.title}>{estate.title}</Typography>
          <Typography className={style.address}>{estate.address}</Typography>
          <span className={style.priceTxt}>Precio ${estate.price}</span>
        </div>
        <ul className={style.icons}>
          <li>
            <img className={style.imageTitle} src={icoRoom} alt="rooms" />
            <span className={style.infoTitle}>
              Ambientes
              <span className={style.infoText}>{estate.rooms}</span>
            </span>
          </li>
          <li>
            <img className={style.imageTitle} src={icoBeth} alt="rooms" />
            <span className={style.infoTitle}>
              Baños
              <span className={style.infoText}>{estate.bathroom}</span>
            </span>
          </li>
          <li>
            <img className={style.imageTitle} src={icoBed} alt="rooms" />
            <span className={style.infoTitle}>
              Dormitorios
              <span className={style.infoText}>{estate.bedroom}</span>
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  ) : (
    <></>
  );
}
