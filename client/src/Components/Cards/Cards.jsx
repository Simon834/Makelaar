import { Grid } from "@material-ui/core";
import React from "react";
import CardComponent from "../Card/Card";
import logo from "../../images/logo-color-horizontal.png"
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";

export default function Cards({ inmuebles }) {
  const history = useHistory()
  return (
    <>
    {!inmuebles.length ? 
    <div>
      <h2>Lo sentimos</h2>
      <br/>
      <em>En este momento no contamos con propiedades con estas características</em>
      <br/>
      <em>Lo invitamos a ponerse en contacto con nosotros para mayores consultas </em>
      <br/>
      <br/>
      <Button variant="contained" color="primary" onClick={()=>history.push("/contact")}>
        Contacto
      </Button>
      <br/>
      <br/>
      <br/>
     <img src={logo} alt="logo"/>
     </div>:
    
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
            contrat={inm.Contract}
          />
        </Grid>
      ))}
    </Grid>
      }
      </>
  );
}
