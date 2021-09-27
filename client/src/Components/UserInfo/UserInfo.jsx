import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../Redux/Actions/actions";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import TextField from "@material-ui/core/TextField";
import { UserInfoControl } from "./UserInfoControl";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import BlockIcon from "@material-ui/icons/Block";
import Tooltip from "@material-ui/core/Tooltip";
import TableList from "../TableList/TableList";
import { userInfoConstant } from "./constant";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(2),
    },
  },
  root: {
    width: "100%",
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
    padding: theme.spacing(2),
  },
  input: {
    width: "100%",
  },
  name: {
    width: "100%",
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
  { name: "Pendiente", color: "super-app-theme--ocupado" },
  { name: "Modificado", color: "super-app-theme--modificado" },
  { name: "Rechazado", color: "super-app-theme--rechazado" },
];

export default function UserInfo({ userInfo, update }) {
  const { columnsContratList } = userInfoConstant();

  const classes = useStyles();
  const { iduser, id } = useParams();
  const [userIdInfo, setUserIdInfo] = useState(
    userInfo.find((e) => e.id === iduser * 1)
  );
  const history = useHistory();

  useEffect(() => {
    if (userInfo.length === 0) {
      history.push(`/admin/${id}/dashboard`);
    }
  }, []);

  const { handleChange, handleSubmit, errors, user } =
    UserInfoControl(userIdInfo, update);

  return (
    <>
      <Paper className={classes.root}>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
             
              <TextField
                name="name"
                variant="outlined"
                label="Nombre"
                onBlur={handleChange}
                value={user?.name}
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
                name="email"
                type="email"
                variant="outlined"
                label="Email"
                value={user?.email}
                disabled
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                name="phone"
                type="number"
                variant="outlined"
                label="Teléfono"
                value={user?.phone}
                onChange={handleChange}
                required
                {...(errors.whastapp && {
                  error: true,
                  helperText: errors.whastapp,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <TextField
                name="whatsapp"
                type="number"
                variant="outlined"
                label="Whatsapp"
                value={user?.whatsapp}
                onChange={handleChange}
                required
                {...(errors.whastapp && {
                  error: true,
                  helperText: errors.whastapp,
                })}
              />
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={12} md={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Actualizar datos
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid item className={classes.grid} xs={12} sm={12} md={12}>
          <h1>Contratos</h1>
        </Grid>
        <Grid item className={classes.grid} xs={12} sm={12} md={12}>
          <TableList
            columns={columnsContratList}
            rows={userIdInfo?.Contracts}
            reference={contractReference}

          />
        </Grid>
      </Paper>
    </>
  );
}
