import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllUserApi } from "../../Functions/api/users";
import { allProperties } from "../../Functions/api/property";
import Alert from "@material-ui/lab/Alert";
import TableList from "../TableList/TableList";
import { contractEditConstant } from "./constant";

import { getContractById } from "../../Functions/api/contract";

import {
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
      width: "100%",
      margin: theme.spacing(2),
    },
  },
  root: {
    width: "100%",
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    allingItems: "center",
    justifyContent: "center",
    "& .makeStyles-root-11": {
      width: "100%",
    },
  },
  button: {
    width: "100%",
  },
  header: {
    fontSize: "25px",
  },
  list: {
    width: "100%",
  },
  buttons: {
    display: "flex",
    flexDirection: "columns",
    width: "100%",
  },
  grid: {
    display: "flex",
    flexDirection: "columns",
    padding: theme.spacing(2),
  },
  title: {
    paddingLeft: theme.spacing(4),
  },

  buttonList: {
    display: "flex !Important",
    flexDirection: "row",
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

  const { columnsPaymentList, paymentReference } = contractEditConstant();

  const { idcont } = useParams();

  const [userList, setUserList] = useState([]);
  const [rest, setRest] = useState("");
  const [propertyList, setPropertyList] = useState([]);
  const [auth, setAuth] = useState(false);

  let userEmail = userList.find((p) => p.id === contract.UserId);

  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail.email);
    } // eslint-disable-next-line
  }, [contract]);

  useEffect(() => {
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

  async function getAllUser() {
    const allUsersApi = await getAllUserApi();
    setUserList(allUsersApi);
  }

  async function getAllProperties() {
    const allPropertiesApi = await allProperties();
    setPropertyList(allPropertiesApi);
  }

  async function getContract() {
    const contractApi = await getContractById(idcont);

    if (contractApi.Payments) {
      const resValue = contractApi.Payments.reduce((acc, val) => {
        if (acc.amount) {
          return acc.amount + parseInt(val.amount);
        } else {
          return acc + parseInt(val.amount);
        }
      });

      setRest(resValue);
    }
    setContract(contractApi);
  }

  useEffect(() => {
    if (!user) {
      getAllUser();
      getAllProperties();
    }
    getContract();
    getAllUser();
    getAllProperties(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <Paper className={classes.root}>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h1 className={classes.title}>Contrato</h1>
          {rest < 0 ? (
            <Alert variant="filled" severity="warning">
              {`Contrato con deuda de $ ${new Intl.NumberFormat().format(Math.abs(rest))}`}
            </Alert>
          ) : rest >= 0 ? (
            <Alert variant="filled" severity="success">
              Contrato sin deuda
            </Alert>
          ) : contract.status === "pendiente" ||
            contract.status === "modificado" ? (
            <Alert variant="filled" severity="info">
              Contrato pendiente de confirmación
            </Alert>
          ) : (
            <></>
          )}

          <Grid container>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
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
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={4}>
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
                <FormHelperText>Usuario</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={5}>
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
                <FormHelperText>Propiedad</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
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
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
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
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
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
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
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
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              <TextField
                disabled={!!user}
                variant="outlined"
                label="Agregue un comentario (opcional)"
                multiline
                rows={3}
                name="comments"
                value={contract.comments}
                onChange={handleChange}
              />
            </Grid>

            <Grid item  xs={12} sm={12} md={12}>
              {auth ? (
                <div className={classes.ButtonsConfirm}>
                  <Grid item className={classes.grid} xs={12} sm={6} md={6}>
                    <Alert
                      severity="warning"
                      elevation={6}
                      variant="filled"
                      style={{ width: "100%" }}
                    >
                      {" "}
                      Hay cambios en el contrato
                    </Alert>
                  </Grid>
                  <Grid item className={classes.grid} xs={12} sm={6} md={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClickConfirm}
                      className={classes.buttonConfirm}
                    >
                      Confirmar
                    </Button>
                  </Grid>
                  <Grid item className={classes.grid} xs={12} sm={6} md={3}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClickCancel}
                      className={classes.buttonReject}
                    >
                      Rechazar
                    </Button>
                  </Grid>
                </div>
              ) : null}
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              {user ? (
                <BtnPayment
                  id={idcont}
                  title={contract.name}
                  description={`Pago contrato ${contract.name} por ${contract.PropertyId}`}
                  price={contract.amount}
                  className={classes.button}
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
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              <List className={classes.list}>
                <h2>Documentos</h2>
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
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              <TableList
                columns={columnsPaymentList}
                rows={contract?.Payments || []}
                reference={paymentReference}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}
