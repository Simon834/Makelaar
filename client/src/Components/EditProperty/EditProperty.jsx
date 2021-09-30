import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { propertyById } from "../../Functions/api/property";

import {
  Container,
  Grid,
  makeStyles,
  Button,
  FormGroup,
  MenuItem,
  Select,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

import FormControl from "@material-ui/core/FormControl";
import { Controls } from "./EditPropertyControls";

const transaction = ["Alquiler", "Venta", "Alquiler Temporario"];
const type = ["Casa", "Departamento", "Local", "Duplex", "Terreno"];
const condition = ["A estrenar", "1 a 5 años", "5 a 10 años", "Mas de 10 años"];
const status = ["activo", "eliminado", "pendiente"];

const useStyle = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "500px",
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
    width: "50%",
  },
  mapContainer: {
    objectFit: "cover",
    maxWidth: "500px",
    maxHeight: "300px",
    height: "300px",
    marginLeft: "3%",
    marginBottom: "3%",
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
}));

export default function EditProperty({ id, update, close }) {
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
  } = Controls(update, close);

  const idProps = id;

  const { idprop } = useParams();

  async function getPropertyId() {
    if (idProps) {
      const propertyId = await propertyById(idProps);
      setProperty(propertyId);
    } else {
      const propertyId = await propertyById(idprop);
      setProperty(propertyId);
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
          <Grid item xs={12}>
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
            <FormGroup>
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

              <FormControl component="fieldset">
                <Typography>Tipo de Propiedad</Typography>
                <Select
                  onChange={handleSelect}
                  aria-label="type"
                  name="type"
                  value={property.type}
                >
                  {type &&
                    type.map((t) => (
                      <MenuItem value={t} control={<Radio />} label={t} key={t}>
                        {t}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              <FormControl component="fieldset">
                <Typography>Condicion de la Propiedad</Typography>

                <Select
                  onChange={handleSelect}
                  aria-label="condition"
                  name="condition"
                  value={property.condition}
                >
                  {condition &&
                    condition.map((t) => (
                      <MenuItem
                        value={t}
                        onChange={handleSelect}
                        label={t}
                        key={t}
                      >
                        {t}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </FormGroup>

            <FormGroup>
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

              <FormControl component="fieldset">
                <Typography>Que tipo de actividad desea realizar?</Typography>
                <Select
                  onChange={handleSelect}
                  aria-label="transaction"
                  name="transaction"
                  value={property.transaction}
                >
                  {transaction &&
                    transaction.map((t) => (
                      <MenuItem
                        value={t}
                        onChange={handleSelect}
                        label={t}
                        key={t}
                      >
                        {t}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              <FormControl component="fieldset">
                <Typography>Estado</Typography>
                <Select
                  onChange={handleSelect}
                  aria-label="status"
                  name="status"
                  value={property.status}
                >
                  {status &&
                    status.map((t) => (
                      <MenuItem
                        value={t}
                        onChange={handleSelect}
                        label={t}
                        key={t}
                      >
                        {t}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <p>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.button}
                  disabled={!formValid()}
                >
                  Enviar
                </Button>
              </p>
            </FormGroup>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
