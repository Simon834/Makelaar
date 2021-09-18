import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllUserApi } from "../../Functions/api/users";
import { allProperties } from "../../Functions/api/property"; // eslint-disable-next-line
import { getAllContract, getContractById } from "../../Functions/api/contract"; // eslint-disable-next-line
import UploadFile from "../Upload/UploadFile";
import {
  // eslint-disable-next-line
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText, // eslint-disable-next-line
  ListItemSecondaryAction,
} from "@material-ui/core"; // eslint-disable-next-line
import { Delete as DeleteIcon, Folder as FolderIcon } from "@material-ui/icons";
import BtnPayment from "../BtnPayment/BtnPayment";

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
import { UseFormControls } from "./FormContractEditControls";

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
  header: {
    fontSize: "25px",
  },
  list: {
    width: "100%",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

export default function NewContractForm({ user, update }) {
  const classes = useStyle();
  const {
    handleChange,
    handleSubmit,
    formIsValid,
    errors,
    contract,
    handleSelect, // eslint-disable-next-line
    selectValues,
    setContract, // eslint-disable-next-line
    setFile,
    setEmail,
    handleClickConfirm,
    handleClickCancel,
  } = UseFormControls(update);

  const { idcont } = useParams();

  const [userList, setUserList] = useState([]);
  const [propertyList, setPropertyList] = useState([]);
  const [auth, setAuth] = useState(false);

  let userEmail = userList.find((p) => p.id === contract.UserId);

  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail.email);
    } // eslint-disable-next-line
  }, [contract]);

  useEffect(() => {
    console.log("STATUS", contract.status);
    if (
      user &&
      (contract.status === "pendiente" || contract.status === "modificado")
    ) {
      setAuth(true);
    }
    if (
      user &&
      (contract.status === "rechazado" || contract.status === "activo")
    ) {
      setAuth(false);
    } // eslint-disable-next-line
  }, [contract]);

  useEffect(() => {
    async function getAllUser() {
      const allUsersApi = await getAllUserApi();
      setUserList(allUsersApi);
    }

    async function getAllProperties() {
      const allPropertiesApi = await allProperties();
      setPropertyList(allPropertiesApi);
    }

    async function getContract() {
      const oldContract = await getContractById(idcont);
      // console.log("XXXXXXXX", oldContract);
      setContract(oldContract);
    }
    getContract();
    getAllUser();
    getAllProperties(); // eslint-disable-next-line
  }, []);

  console.log("AUTH", auth);

  return (
    <>
      <Paper className={classes.root}>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid>
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
                disabled={!!user}
              />
              <FormControl className={classes.formControl}>
                <Select
                  disabled={!!user}
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
                  disabled={!!user}
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
                disabled={!!user}
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
                disabled={!!user}
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
                disabled={!!user}
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
                disabled={!!user}
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
              <TextField
                disabled={!!user}
                variant="outlined"
                label="Agregue un comentario (opcional)"
                multiline
                rows={4}
                name="comments"
                value={contract.comments}
                onChange={handleChange}
              />
              <List className={classes.list}>
                {console.log(contract.Files)}
                {contract.Files?.map((e, pos) => (
                  <ListItem onClick={() => window.open(e.url, "_blank")}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={e.url} />
                  </ListItem>
                ))}
              </List>
              <p>
                {user ? (
                  <BtnPayment
                    id={idcont}
                    title={contract.name}
                    description={`Pago contrato ${contract.name} por ${contract.PropertyId}`}
                    price={contract.amount}
                    className={classes.buttonPayment}
                  />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                    disabled={!formIsValid()}
                  >
                    Enviar
                  </Button>
                )}
                {auth ? (
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClickConfirm}
                      className={classes.buttonConfirm}
                    >
                      Confirmar
                    </Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClickCancel}
                      className={classes.buttonReject}
                    >
                      Rechazar
                    </Button>
                  </div>
                ) : null}
              </p>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}
