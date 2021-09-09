import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { addFavorite } from "../../../Redux/Actions/favoriteActions.js";
import { useDispatch } from "react-redux";

import style from './PropertyInfo.jsx'

const useStyles = makeStyles({
  root: {
    margin: "0px",
    width: "100%",
    // minWidth: "380px",
    // maxWidth: "380px",
    boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
  },
  media: {
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    color: "#4C3C90",
  },
  address: {
    fontWeight: "450",
    fontSize: 14,
    color: "#E1535E",
    marginBottom: 15,
  },
  info: {
    fontWeight: "500",
    fontSize: 14,
  },
});

export default function PropertyInfo({info}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleOnClick = (obj) => {
    dispatch(addFavorite(obj));
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.title}>{info.title}</Typography>
          <Typography className={classes.address}>{info.address}</Typography>
          <Typography className="Container-info">
            <img
            
              className="image-title"
              src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-amountrooms.png"
              alt="rooms"
            />
            <span className="info-title">
              Ambientes
              <p className="info-text">{info.rooms}</p>
            </span>
            <Divider flexItem={true} />
            <img
              className="image-title"
              src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-bathrooms.png"
              alt="rooms"
            />
            <span className="info-title">
              Baños
              <p className="info-text">{info.bathroom}</p>
            </span>
            <Divider flexItem={true} />
            <img
              className="image-title"
              src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-bedrooms.png"
              alt="rooms"
            />
            <span className="info-title">
              Dormitorios
              <p className="info-text">{info.bedroom}</p>
            </span>
          </Typography>
          <Divider light />
          <div className="footer-card">
            <IconButton aria-label="add to favorites" onClick={() => handleOnClick(info)}>
              <FavoriteIcon className="Favorite-button" />
            </IconButton>
            <span className="price-txt">Precio ${info.price}</span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}