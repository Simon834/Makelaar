import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { Container, Grid, makeStyles, Paper, Button } from "@material-ui/core";
import { useFormControls } from "./FormControls";

//import "./Styles.css";

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
}));

export default function UserRegistrationForm(props) {
  const isAdmin = props.isAdmin;
  const classes = useStyle();
  const { handleChange, handleSubmit, formIsValid, errors, user } =
    useFormControls(isAdmin);
  const { userInfo } = useSelector((state) => state);
  const history = useHistory();

  const [showPass, setShowPass]=useState(false)

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (userInfo.user && !userInfo.user.isAdmin) {
      history.push(`/user/${userInfo.user.id}/data`);
    }
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Paper className={classes.root}>
        <Container className={classes.header}>
          {isAdmin ? "Registrar admin" : "Registrate"}
        </Container>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Nombre"
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
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                {...(errors.email && {
                  error: true,
                  helperText: errors.email,
                })}
                required
              />
              <TextField
                variant="outlined"
                label="Telefono"
                name="phone"
                type="number"
                value={user.phone}
                onChange={handleChange}
                {...(errors.phone && {
                  error: true,
                  helperText: errors.phone,
                })}
              />
              <TextField
                variant="outlined"
                label="Whatsapp"
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
               <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                // variant="outlined"
                label="Contraseña"
                name="password"
                type={showPass ? 'text' : 'password'}
                value={user.password}
                onChange={handleChange}
                required
                {...(errors.password && {
                  error: true,
                  helperText: errors.password,
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <em>{errors.password}</em>
              </FormControl>
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
