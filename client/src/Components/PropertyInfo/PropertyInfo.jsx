import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { propertyById } from "../../Functions/api/property";
import { propertyInfoConstant } from "./constant";
import UploadImage from "../Upload/UploadImage";

import {
  Container,
  Grid,
  makeStyles,
  Button,
  MenuItem,
  Select,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import FormControl from "@material-ui/core/FormControl";
import { Controls } from "./PropertyInfoControls";
import GoogleMap from "../GoogleMap/GoogleMap";
import TableList from "../TableList/TableList";

const transaction = ["Alquiler", "Venta", "Alquiler Temporario"];
const type = ["Casa", "Departamento", "Local", "Duplex", "Terreno"];
const condition = ["A estrenar", "1 a 5 años", "5 a 10 años", "Mas de 10 años"];
const status = ["activo", "eliminado", "pendiente"];

const useStyle = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(2),
    },
  },
  root: {
    width: "min-content",
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    allingItems: "center",
    justifyContent: "center",
  },
  button: {
    marginLeft: theme.spacing(27),
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
  switch: {
    marginTop: "20px",
    marginLeft: "10px",
    marginBottom: "15px",
  },
  grid: {
    display: "flex",
    flexDirection: "columns",
    padding: theme.spacing(2),
  },
}));

const contractReference = [
  { name: "Activo", color: "super-app-theme--activo" },
  { name: "Caducado", color: "super-app-theme--eliminado" },
];

export default function PropertyInfo({ id, update }) {
  const { columnsContratList } = propertyInfoConstant();
  const classes = useStyle();
  const {
    handleChange,
    handleSubmit,
    formValid,
    errors,
    property,
    handleSelect,
    setProperty,
    handleSwitch,
    img,
    setImage,
  } = Controls(update);

  const idProps = id;

  const { idprop } = useParams();

  async function getPropertyId() {
    if (idProps) {
      const propertyId = await propertyById(idProps);
      setProperty(propertyId);
    } else {
      const propertyId = await propertyById(idprop);
      setProperty(propertyId);
      setImage(propertyId.Images.map((i) => i.url));
    }
  }

  useEffect(() => {
    getPropertyId(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container className={classes.header}>Modificá tu propiedad</Container>
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item className={classes.grid} xs={12} sm={6} md={3}>
            <FormControlLabel
              className={classes.switch}
              label="Destacado"
              control={
                <Switch
                  checked={property.premium}
                  value={property.premium}
                  onChange={handleSwitch}
                />
              }
            />
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={9} md={9}>
            <TextField
              className={classes.input}
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
          <Grid item className={classes.grid} xs={12} sm={6} md={3}>
            <FormControl>
              <Typography>Tipo de Propiedad: </Typography>
              <Select
                onChange={handleSelect}
                name="type"
                value={property.type}
                variant="outlined"
                displayEmpty={true}
              >
                {type &&
                  type.map((t) => (
                    <MenuItem value={t} label={t}>
                      {t}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={6} md={3}>
            <FormControl component="fieldset">
              <Typography>Condicion de la Propiedad</Typography>

              <Select
                onChange={handleSelect}
                aria-label="condition"
                name="condition"
                value={property.condition}
                variant="outlined"
              >
                {condition &&
                  condition.map((t) => (
                    <MenuItem value={t} onChange={handleSelect} label={t}>
                      {t}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={6} md={3}>
            <FormControl component="fieldset">
              <Typography>Que tipo de actividad desea realizar?</Typography>
              <Select
                onChange={handleSelect}
                aria-label="transaction"
                name="transaction"
                value={property.transaction}
                variant="outlined"
              >
                {transaction &&
                  transaction.map((t) => (
                    <MenuItem value={t} onChange={handleSelect} label={t}>
                      {t}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={6} md={3}>
            <FormControl component="fieldset">
              <Typography>Estado</Typography>
              <Select
                onChange={handleSelect}
                aria-label="status"
                name="status"
                value={property.status}
                variant="outlined"
              >
                {status &&
                  status.map((t) => (
                    <MenuItem value={t} onChange={handleSelect} label={t}>
                      {t}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={12}>
            <TextField
              variant="outlined"
              label="Descripcion del Inmueble"
              name="description"
              multiline
              minRows={8}
              value={property.description}
              onChange={handleChange}
              required
              {...(errors.description && {
                error: true,
                helperText: errors.description,
              })}
            />
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={12}>
            <div className={classes.mapContainer}>
              <GoogleMap lat={property.lat} lng={property.lng} />
            </div>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={12}>
            <UploadImage
              images={img}
              setImages={setImage}
              className={classes.upload}
            />
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              disabled={!formValid()}
            >
              Cambiar datos
            </Button>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={12}>
            <h1>Contratos</h1>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={12}>
            <TableList
              columns={columnsContratList}
              rows={property?.Contracts || []}
              reference={contractReference}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
