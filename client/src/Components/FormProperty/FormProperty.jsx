import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import UploadImage from "../Upload/UploadImage";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

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

import { Controls } from "./Controls";
import GoogleMap from "../GoogleMap/GoogleMap";

const transaction = ["Alquiler", "Venta", "Alquiler Temporario"];
const type = ["Casa", "Departamento", "Local", "Duplex", "Terreno"];
const condition = ["A estrenar", "1 a 5 años", "5 a 10 años", "Mas de 10 años"];

const useStyle = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "100%",
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
    padding: theme.spacing(2),
  },
  check: {
    marginLeft: "2%",
    display: "flex",
  },
  checkBox: {
    flexDirection: "row",
  },
  input: {
    width: "100%",
  },
  name: {
    width: "100%",
  },
  mapContainer: {
    objectFit: "cover",
    minWidth: "100%",
    maxWidth: "100%",
    maxHeight: "400px",
    height: "400px",
    padding: theme.spacing(2),
  },
  suggestionsContainer: {
    marginLeft: "3%",
    marginBottom: "3%",
  },
  upload:{
    padding: theme.spacing(2),
  },
  grid: {
    display: "flex",
    flexDirection: "columns",
  },
}));

export default function FormProperty(props) {
  const update = props.update;
  const classes = useStyle();
  const {
    handleChange,
    handleSubmit,
    handleCheck,
    formValid,
    errors,
    property,
    check,
    setImage,
    address,
    setAddress,
    handleSelect,
    img,
  } = Controls();

  return (
    <>
      <Paper className={classes.root}>
        <Container className={classes.header}>Registra tu Propiedad</Container>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              {/* <FormGroup> */}
              <TextField
                className={classes.name}
                // autoComplete='off'
                // inputProps={{
                //     autocomplete: 'off',
                //     form: {
                //       autocomplete: 'off',
                //     },
                //   }}
                variant="outlined"
                label="Nombre"
                name="name"
                onBlur={handleChange}
                value={property.name}
                onChange={handleChange}
                {...(errors.name && {
                  error: true,
                  helperText: errors.name,
                })}
                required
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                className={classes.input}
                variant="outlined"
                label="Precio"
                name="price"
                value={property.price}
                onChange={handleChange}
                {...(errors.price && {
                  error: true,
                  helperText: errors.price,
                })}
                required
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                className={classes.input}
                variant="outlined"
                label="Area"
                name="area"
                value={property.area}
                onChange={handleChange}
                {...(errors.area && {
                  error: true,
                  helperText: errors.area,
                })}
                required
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                label="Habitaciones"
                name="rooms"
                type="number"
                value={property.rooms}
                onChange={handleChange}
                {...(errors.rooms && {
                  error: true,
                  helperText: errors.rooms,
                })}
                required
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                label="Baños"
                name="bathrooms"
                type="number"
                value={property.bathrooms}
                onChange={handleChange}
                required
                {...(errors.bathrooms && {
                  error: true,
                  helperText: errors.bathrooms,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              <TextField
                variant="outlined"
                label="Descripcion"
                name="description"
                value={property.description}
                multiline
                minRows={8}
                onChange={handleChange}
                required
                {...(errors.description && {
                  error: true,
                  helperText: errors.description,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={4}>
              {/* </FormGroup> */}
              {/* <FormGroup> */}
              <FormControl component="fieldset">
                <Typography>Tipo de Propiedad</Typography>
                <RadioGroup aria-label="type" name="type" value={check.type}>
                  {type &&
                    type.map((t) => (
                      <FormControlLabel
                        value={t}
                        control={<Radio />}
                        onChange={handleCheck}
                        label={t}
                      />
                    ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={4}>
              <FormControl component="fieldset">
                <Typography>Condicion de la Propiedad</Typography>
                {/* <FormLabel component="legend">Condicion de la Propiedad</FormLabel> */}
                <RadioGroup
                  aria-label="condition"
                  name="condition"
                  value={check.condition}
                >
                  {condition &&
                    condition.map((t) => (
                      <FormControlLabel
                        value={t}
                        control={<Radio />}
                        onChange={handleCheck}
                        label={t}
                      />
                    ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={4}>
              <FormControl component="fieldset">
                <Typography>Que tipo de actividad desea realizar?</Typography>
                <RadioGroup
                  aria-label="transaction"
                  name="transaction"
                  value={check.transaction}
                >
                  {transaction &&
                    transaction.map((t) => (
                      <FormControlLabel
                        value={t}
                        control={<Radio />}
                        onChange={handleCheck}
                        label={t}
                      />
                    ))}
                </RadioGroup>
                {/* {console.log("PROPIEDADCHECK", property)} */}
              </FormControl>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              {/* </FormGroup> */}
              {/* <FormGroup> */}
              <TextField
                variant="outlined"
                label="Ciudad"
                name="city"
                value={property.city}
                onChange={handleChange}
                required
                {...(errors.city && {
                  error: true,
                  helperText: errors.city,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                label="Barrio"
                name="neighborhood"
                value={property.neighborhood}
                onChange={handleChange}
                required
                {...(errors.neighborhood && {
                  error: true,
                  helperText: errors.neighborhood,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                label="Provincia"
                name="province"
                value={property.province}
                onChange={handleChange}
                required
                {...(errors.province && {
                  error: true,
                  helperText: errors.province,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                label="Codigo Postal"
                name="cp"
                type="number"
                value={property.cp}
                onChange={handleChange}
                required
                {...(errors.cp && {
                  error: true,
                  helperText: errors.cp,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div style={{ width: "97%" }}>
                    <TextField
                      variant="outlined"
                      label="Dirección"
                      name="address"
                      value={property.address}
                      required
                      {...getInputProps({
                        placeholder: "Busca una dirección ...",
                      })}
                    />

                    <div className={classes.suggestionsContainer}>
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <>
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              {/* </FormGroup>
              <FormGroup> */}
              <div className={classes.mapContainer}>
                <GoogleMap lat={property.lat} lng={property.lng} />
              </div>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              <UploadImage images={img} setImages={setImage} className={classes.upload}/>
              {/* </FormGroup> */}
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
            disabled={!formValid()}
          >
            Enviar
          </Button>
        </form>
      </Paper>
    </>
  );
}
