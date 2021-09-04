import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import FavoriteCard from "../FavoriteCard"

const useStyles = makeStyles({
  root: {
      
      width: "50%",
      boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
      height:"100%",
      display:"flex",
      
      
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

export default function FavoriteCards({ inmuebles }) {

  const classes = useStyles();
    
  return (
    <Grid className={classes.root}container spacing={1}>
      {inmuebles.map((inm) => (
        <Grid item  xs={12} sm={6} md={6}>
          <FavoriteCard
            title={inm.title}
            image={inm.image}
            type={inm.type}
            bathroom={inm.bathroom}
            bedroom={inm.bedroom}
            rooms={inm.rooms}
            price={inm.price}
            address={inm.address}
            garage={inm.garage}
          />
        </Grid>
      ))}
    </Grid>
  );
}
