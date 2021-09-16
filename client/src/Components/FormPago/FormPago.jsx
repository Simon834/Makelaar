import React  from 'react';
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

import axios from 'axios';

import {
  Container,
  FormControlLabel,
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  Button,
  FormGroup,
  Typography,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControl from "@material-ui/core/FormControl";


const useStyle = makeStyles((theme) => ({
    form: {
      "& .MuiFormControl-root": {
        width: "25ch",
        margin: theme.spacing(2),
      },
    },
    root: {
      width: "100%",
      // margin: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
      allingItems: "center",
      justifyContent: "center",
    },
    button: {
      width: "100%",
    },
    header: {
      fontSize: "25px",
    },
    check: {
      marginLeft: "2%",
      display: "flex",
    },
    checkBox: {
      flexDirection: "row",
    },
    input: {
      width: "25ch",
    },
    name: {
      width: "100%",
    },
    mapContainer: {
      objectFit: "cover",
      minWidth: "350px",
      maxWidth: "350px",
      maxHeight: "400px",
      height: "400px",
  
      marginBottom: "10%",
    },
    suggestionsContainer: {
      marginLeft: "3%",
      marginBottom: "3%",
    },
    grid: {
      display: "flex",
      flexDirection: "columns",
    },
  }));




export default function Product() {
    const classes = useStyle();
    const [input, setInput] = useState({name: "", lastName:"", phone:""});
    function handleChange(e) {
        setInput(e.target.value);
        
      }

async function onClick(e){
    e.preventDefault()
   
    let peticion = await axios.get('http://localhost:3010/property/paymenttt?title=Prueba')
    peticion = peticion.data
    console.log(peticion, "PETICIONNN")
    return peticion
}

  return (
      <>
        <Paper className={classes.root}>
          <Container className={classes.header}>Registra tu Propiedad</Container>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={onClick}
          >
            <Grid container>
              <Grid item className={classes.grid}>
                <FormGroup>
                  <TextField
                    className={classes.name}
                    variant="outlined"
                    label="Nombre"
                    name="name"
                    onBlur={handleChange}
                    value={input.name}
                    onChange={handleChange}
                
                    required
                  />
  
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    label="Apellido"
                    name="lastname"
                    value={input.lastname}
                    onChange={handleChange}
                   
                    required
                  />
  
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    label="Telefono"
                    name="phone"
                    value={input.phone}
                    onChange={handleChange}    
                    required
                  />

                </FormGroup>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Enviar
            </Button>
          </form>
        </Paper>
      </>
    );
  }
  
  