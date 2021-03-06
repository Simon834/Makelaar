import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FavoriteCard from "../FavoriteCard";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "100%",
    paddingBottom: "2rem",
    paddingTop: "2rem",
    height: "100%",
    display: "flex",
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

export default function FavoriteCards() {
  const inmuebles = useSelector((state) => state.favorites);
  const classes = useStyles();

  useEffect(() => {
    if (inmuebles.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(inmuebles));
    }
    if (inmuebles.length === 0) {
      localStorage.setItem("favorites", JSON.stringify([]));
    } // eslint-disable-next-line
  }, [inmuebles]);

  return (
    <>
      {inmuebles.length > 0 ? (
        <Grid className={classes.root} container spacing={1}>
          {inmuebles.map((inm) => (
            <Grid item xs={12} sm={6} md={6} key={inm.id}>
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
                id={inm.id}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h4>No has selecionado ningun favorito</h4>
      )}
    </>
  );
}
