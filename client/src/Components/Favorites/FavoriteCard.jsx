import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";


import "./FavoriteCard.css";

const useStyles = makeStyles({
    root: {
        margin: "0px",
        width: "75%",
        boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
        height:"95%",
        marginTop:"5%",
        alignItems:"center",
        marginLeft: "10%"
      },
      media: {
        height: 200,
        width:"100%"
      },
      title: {
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 12,
        color: "#4C3C90",
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
    });


export default function FavoriteCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent >
          <Typography className={classes.title}>{props.title}</Typography>
          <Typography className={classes.address}>

          <IconButton aria-label="add to favorites">
              <FavoriteIcon className="Favorite-button" />
            </IconButton>
            <span className="price-txt">Precio ${props.price}</span>
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
