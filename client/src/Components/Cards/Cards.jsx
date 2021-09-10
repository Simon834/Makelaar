import { Grid } from "@material-ui/core";
import React from "react";
import CardComponent from "../Card/Card";

export default function Cards({ inmuebles }) {
  return (
    <Grid container spacing={6}>
      {inmuebles.map((inm) => (
        <Grid item lg={4} xs={12} sm={6} md={6} key={inm.id}>
          <CardComponent
            title={inm.name}
            image={inm.Images[0].url}
            type={inm.type}
            bathroom={inm.bathrooms}
            bedroom={inm.rooms}
            rooms={inm.rooms + inm.bathrooms + 2}
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
