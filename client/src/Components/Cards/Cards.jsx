import { Grid } from "@material-ui/core";
import React from "react";
import CardComponent from "../Card/Card";

export default function Cards({ inmuebles }) {
  return (
    <Grid container spacing={6}>
      {inmuebles.map((inm) => (
        <Grid item lg={4} xs={12} sm={6} md={6}>
          <CardComponent
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
  );
}
