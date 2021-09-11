import React, { useEffect, useState } from "react";
import { getAllUserApi } from "../../Functions/api/users";
import { allProperties } from "../../Functions/api/property";
import UploadFile from "../Upload/UploadFile";

import {
  MenuItem,
  Select,
  TextField,
  FormControl,
  FormHelperText,
  Grid,
  makeStyles,
  Paper,
  Button,
} from "@material-ui/core";
import { UseFormControls } from "./FormContractControls";

const useStyle = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "650px",
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
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(36),
  },
  header: {
    fontSize: "25px",
  },
  
}));

export default function NewContractForm() {
  const classes = useStyle();
  const {
    handleChange,
    handleSubmit,
    formIsValid,
    errors,
    contract,
    handleSelect,
    selectValues,
    setContract,
    setFile
  } = UseFormControls();

  const [userList, setUserList] = useState([]);
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    setContract({
      ...contract,
      UserId: selectValues.UserId,
      PropertyId: selectValues.PropertyId,
    });
  }, [selectValues]);

  useEffect(() => {
    async function getAllUser() {
      const allUsersApi = await getAllUserApi();
      setUserList(allUsersApi);
    }

    async function getAllProperties() {
      const allPropertiesApi = await allProperties();
      setPropertyList(allPropertiesApi);
    }
    getAllUser();
    getAllProperties();
  }, []);

  return (
    <>
      <Paper className={classes.root}>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Titulo"
                name="name"
                onBlur={handleChange}
                value={contract.name}
                onChange={handleChange}
                {...(errors.name && {
                  error: true,
                  helperText: errors.name,
                })}
                required
              />
              <FormControl className={classes.formControl}>
                <Select
                  onChange={handleSelect}
                  name="UserId"
                  value={contract.UserId}
                  inputLabel="User"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                  {...(errors.UserId && {
                    error: true,
                    helperText: errors.UserId,
                  })}
                >
                  <MenuItem selected disabled value="">
                    <em>Seleccione el usuario</em>
                  </MenuItem>
                  {userList.map((u) => (
                    <MenuItem value={u.id}>
                      {u.name} - {u.email}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Seleccione el usuario</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  name="PropertyId"
                  onChange={handleSelect}
                  value={contract.PropertyId}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                  {...(errors.PropertyId && {
                    error: true,
                    helperText: errors.PropertyId,
                  })}
                >
                  <MenuItem value="">
                    <em>Seleccione la propiedad</em>
                  </MenuItem>
                  {propertyList.length > 0 ? (
                    propertyList.map((p) => (
                      <MenuItem value={p.id}>{p.name}</MenuItem>
                    ))
                  ) : (
                    <MenuItem selected disabled value="">
                      No hay propiedades
                    </MenuItem>
                  )}
                </Select>
                <FormHelperText>Seleccione la propiedad</FormHelperText>
              </FormControl>
              <TextField
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                label="Fecha de inicio"
                name="startDate"
                type="date"
                value={contract.startDate}
                onChange={handleChange}
                required
                {...(errors.startDate && {
                  error: true,
                  helperText: errors.startDate,
                })}
              />
              <TextField
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                label="Fecha de cierre"
                name="endDate"
                type="date"
                value={contract.endDate}
                onChange={handleChange}
                required
                {...(errors.endDate && {
                  error: true,
                  helperText: errors.endDate,
                })}
              />
              <TextField
                variant="outlined"
                label="Monto a pagar"
                name="amount"
                defaultValue="none"
                type="number"
                value={contract.amount}
                onChange={handleChange}
                required
                {...(errors.amount && {
                  error: true,
                  helperText: errors.amount,
                })}
              />
              <TextField
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                label="Fecha de pago"
                type="date"
                name="paymentDate"
                value={contract.paymentDate}
                onChange={handleChange}
                {...(errors.paymentDate && {
                  error: true,
                  helperText: errors.paymentDate,
                })}
                required
              />

              <UploadFile files={contract.file} setFiles={setFile}/>

              {/* <TextField
                variant="outlined"
                label="Archivo adjunto"
                name="file"
                value={contract.file}
                onChange={handleChange}
                required
              /> */}
              <TextField
                variant="outlined"
                label="Agregue un comentario (opcional)"
                multiline
                rows={4}
                name="comments"
                value={contract.comments}
                onChange={handleChange}
              />
              <p>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.button}
                  disabled={!formIsValid()}
                >
                  Enviar
                </Button>
              </p>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}
