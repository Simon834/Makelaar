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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import Alert from "@material-ui/lab/Alert";

import style from "./Card.module.css";

const useStyles = makeStyles({
  root: {
    margin: "0px",
    width: "100%",
    boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  media: {
    height: 350,
    "&:hover": {
      backgroundColor: "transparent",
    },
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
  cardArea: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export default function CardComponent(props) {
  const [fav, setFav] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const history = useHistory();

  useEffect(() => {
    if (favorites.length > 0) {
      const searFav = favorites.filter((e) => e.id*1 === props.id*1);
      console.log("favorites",favorites, "searFav",searFav, "id", props.id)
      if (searFav.length) {
        setFav(true);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    if (favorites.length === 0) {
      localStorage.setItem("favorites", JSON.stringify([]));
    } // eslint-disable-next-line
  }, [favorites]);
  
  console.log("favorites",props )

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddFavorite = (obj) => {
    dispatch(addFavorite(obj));
  };
  const handleDeleteFavorite = (id) => {
    dispatch(deleteFavorite(id));
    setFav(false);
  };

  return (
    <Card className={classes.root}>
        {props.contrat ? (
        <Alert severity="info" elevation={6} variant="filled">
          {`Ocupada`}{" "}
        </Alert>
      ) : (
        <></>
      )}
      {props.transaction && !props.contrat ? (
        <Alert severity="success" elevation={6} variant="filled">
          {`Disponible para ${props.transaction} ${props.condition}`}{" "}
        </Alert>
      ) : (
        <></>
      )}
      {!props.hideImage ? (
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
          onClick={() => history.push(`/property/${props.id}`)}
        />
      ) : (
        <></>
      )}
      <CardContent>
        <Typography className={classes.title}>{props.title}</Typography>
        <Typography className={classes.address}>{props.address}</Typography>
        <Typography className={style.ContainerInfo}>
          <img
            className={style.imageTitle}
            src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-amountrooms.png"
            alt="rooms"
          />
          <span className={style.infoTitle}>
            Ambientes
            <span className={style.infoText}>{props.rooms}</span>
          </span>
          <Divider flexItem={true} />
          <img
            className={style.imageTitle}
            src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-bathrooms.png"
            alt="rooms"
          />
          <span className={style.infoTitle}>
            Baños
            <span className={style.infoText}>{props.bathroom}</span>
          </span>
          <Divider flexItem={true} />
          <img
            className={style.imageTitle}
            src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-bedrooms.png"
            alt="rooms"
          />
          <span className={style.infoTitle}>
            Dormitorios
            <span className={style.infoText}>{props.bedroom}</span>
          </span>
          {props.type ?<>
          <Divider flexItem={true} />
          <img
            className={style.imageTitle}
            src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-type.png"
            alt="type"
          />
          <span className={style.infoTitle}>
            Tipo
            <span className={style.infoText}>{props.type}</span>
          </span></>
          :<></>}
          
          {props.area ?<>
          <Divider flexItem={true} />
          <img
            className={style.imageTitle}
            src="http://garbero.com.ar/wp-content/themes/realtyelite/img/ico-areasize.png"
            alt="area"
          />
          <span className={style.infoTitle}>
            Superficie
            <span className={style.infoText}>{`${props.area} m2`}</span>
          </span></>
          :<></>}

        </Typography>
        <Divider flexItem={true} />
        <em>{props.description}</em>

        <Divider light />
        <div className={style.footerCard}>
          {/* <IconButton
              aria-label="add to favorites"
              onClick={() => handleOnClick(props)}
            > */}
          {/* <FavoriteIcon
              className={style.FavoriteButton}
              aria-label="add to favorites"
              onClick={() => handleOnClick(props)}
            /> */}

          <div className={style.heart}>
            <input
              type="checkbox"
              className={style.heart__checkbox}
              aria-label="add to favorites"
              onClick={() =>
                fav ? handleDeleteFavorite(props.id*1) : handleAddFavorite(props)
              }
              checked={fav}
            />
            <div className={style.heart__icon} />
          </div>
          {/* </IconButton> */}
          <span className={style.priceTxt}>Precio ${props.price}</span>
        </div>
      </CardContent>
    </Card>
  );
}
