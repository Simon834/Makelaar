import React from "react";
import TextField from "@material-ui/core/TextField";
import { UserDetailControl } from "./UserDetailControl";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BlockIcon from "@material-ui/icons/Block";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
      display: "flex",
      width: "100%",
    },
  },
  root: {
    width: "100%",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    allingItems: "center",
    justifyContent: "center",
  },
  paperLeft: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "#E1535E",
    color: "#fff",
    marginTop: theme.spacing(2),
  },
  "& .MuiGrid-root": {
    width: 150,
  },

  paperRight: {
    padding: theme.spacing(0.1),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
    paddingTop: 10,
    width: "100%",
  },
  gridRight: {
    display: "flex",
    alignItems: "flex-end",
  },
  icon: {
    alingSelf: "flex-end",
    color: "#E1535E",
  },
  btn: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  gridContainer: { display: "flex", flexDirection: "row" },

  paper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default function UserDetail() {
  const classes = useStyles();

  const { handleChange, handleSubmit, errors, user } = UserDetailControl();

  return (
    <div>
      <Paper className={classes.root}>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <Paper className={classes.paperLeft}>Nombre</Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={9} md={9}>
              <Paper className={classes.paperRight}>
                <div className={classes.paper}>
                  <TextField
                    name="name"
                    onBlur={handleChange}
                    value={user.name}
                    onChange={handleChange}
                    {...(errors.name && {
                      error: true,
                      helperText: errors.name,
                    })}
                    required
                  />

                  <Button className={classes.btn} color="secondary">
                    Enviar
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <Paper className={classes.paperLeft}>Email</Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={9} md={9}>
              <Paper className={classes.paperRight}>
                <div className={classes.paper}>
                  <TextField
                    name="email"
                    type="email"
                    value={user.email}
                    disabled
                  />
                  <Tooltip title="Editar">
                    <BlockIcon className={classes.icon} />
                  </Tooltip>
                </div>
              </Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <Paper className={classes.paperLeft}>Telefono</Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={9} md={9}>
              <Paper className={classes.paperRight}>
                <div className={classes.paper}>
                  <TextField
                    name="phone"
                    type="number"
                    value={user.phone}
                    onChange={handleChange}
                    {...(errors.phone && {
                      error: true,
                      helperText: errors.phone,
                    })}
                  />

                  <Button className={classes.btn} color="secondary">
                    Enviar
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <Paper className={classes.paperLeft}>WhatsApp</Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={9} md={9}>
              <Paper className={classes.paperRight}>
                <div className={classes.paper}>
                  <TextField
                    name="whatsapp"
                    type="number"
                    value={user.whatsapp}
                    onChange={handleChange}
                    required
                    {...(errors.whastapp && {
                      error: true,
                      helperText: errors.whastapp,
                    })}
                  />

                  <Button className={classes.btn} color="secondary">
                    Enviar
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={6} md={3}>
              <Paper className={classes.paperLeft}>Password</Paper>
            </Grid>
            <Grid item className={classes.grid} xs={12} sm={9} md={9}>
              <Paper className={classes.paperRight}>
                <div className={classes.paper}>
                  <TextField
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    {...(errors.password && {
                      error: true,
                      helperText: errors.password,
                    })}
                  />

                  <Button className={classes.btn} color="secondary">
                    Enviar
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
