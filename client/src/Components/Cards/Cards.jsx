import { Grid } from "@material-ui/core";
import React from "react";
import CardComponent from "../Card/Card";
const inmuebles = require("../../inmuebles.json");

export default function Cards() {
  return (
    <Grid container spacing={4}>
      {inmuebles.map((inm) => (
        <Grid item xs={12} sm={12} md={4}>
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
          />
        </Grid>
      ))}
    </Grid>
  );
}
