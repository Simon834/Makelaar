import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

import style from "./FavoriteCard.module.css";
import { deleteFavorite } from "../../Redux/Actions/favoriteActions";

const useStyles = makeStyles({
  root: {
    margin: "0px",
    width: "75%",
    boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
    height: "95%",
    marginTop: "5%",
    alignItems: "center",
    marginLeft: "10%",
  },
  media: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
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
});

export default function FavoriteCard(props) {
  console.log(props)
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleOnClick = (id) => {
    dispatch(deleteFavorite(id));
  };
  return (
    <Card className={classes.root} key={props.id}>
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
            <Typography className={classes.address}>
              {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon className="Favorite-button" />
              </IconButton> */}
              <span className={style.priceTxt}>Precio ${props.price}</span>
            </Typography>
          </div>
          <div className={classes.iconDelete}>
            <IconButton
              aria-label="delete"
              color="primary"
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
          {/* <button onClick={() => handleOnClick(props.id)}>x</button> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
