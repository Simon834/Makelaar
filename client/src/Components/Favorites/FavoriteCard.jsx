import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";

import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

import style from "./FavoriteCard.module.css";
import { deleteFavorite } from "../../Redux/Actions/favoriteActions";

const useStyles = makeStyles({
  root: {
    margin: "0px",
    width: "90%",
    boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
    height: "90%",
    marginTop: "1.5rem",
    marginLeft: "1rem",
  },
  media: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 12,
    color: "#4C3C90",
    width: "100%",
  },
  address: {
    fontWeight: "450",
    fontSize: 12,
    color: "#E1535E",
    marginBottom: 0,
  },
  info: {
    fontWeight: "500",
    fontSize: 14,
  },
  align: {
    alignSelf: "flex-end",
  },
  flexBox: {
    display: "flex",
    flexDirection: "column",
  },
  iconDelete: {
    display: "flex",
    justifyContent: "flex-end",
  },
  priceTxt: {
    fontSize: 14,
    fontWeight: 500,
  },
});

export default function FavoriteCard(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = (id) => {
    dispatch(deleteFavorite(id));
  };
  return (
    <Card
      className={classes.root}
      key={props.id}
      onClick={() => history.push(`/property/${props.id}`)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.flexBox}>
          <div className={style.descriptionCard}>
            <Typography className={classes.title}>{props.title}</Typography>
          </div>
          <div className={style.iconPrice}>
            <Typography>
              <span className={classes.priceTxt}>
                Precio ${new Intl.NumberFormat().format(props.price)}
              </span>
            </Typography>
          </div>
          <div className={classes.iconDelete}>
            <IconButton
              aria-label="delete"
              color="secondary"
              className={classes.align}
              onClick={() => handleOnClick(props.id)}
            >
              <DeleteIcon
                className={classes.align}
                onClick={() => {
                  handleOnClick(props.id);
                }}
              />
            </IconButton>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
