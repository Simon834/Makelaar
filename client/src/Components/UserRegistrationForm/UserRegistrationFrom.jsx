import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Button,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { useFormControls } from "./FormControls";


const useStyle = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "440px",
      margin: theme.spacing(3),
    },
  },
  root: {
    width: "min-content",

    padding: theme.spacing(4),
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
  const update = props.update;
  const classes = useStyle();
  const {
    handleChange,
    handleSubmit,
    formIsValid,
    errors,
    user,
    handleSwitch,
  } = useFormControls(isAdmin, update);
  const { userInfo } = useSelector((state) => state);
  const history = useHistory();

  const [showPass, setShowPass] = useState(false);

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
      <Paper className={classes.root} elevation={0}>
        <Container className={classes.header}>
          {isAdmin ? "Registrar usuario" : "Regístrate"}
        </Container>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item xs={6}>
              {isAdmin ? (
                <FormControlLabel
                  className={classes.switch}
                  label="Admin"
                  control={
                    <Switch
                      checked={user.isAdmin}
                      value={user.isAdmin}
                      onChange={handleSwitch}
                    />
                  }
                />
              ) : (
                <></>
              )}

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
                label="Confirma tu Email"
                name="confirmEmail"
                type="email"
                value={user.confirmEmail}
                onChange={handleChange}
                {...(errors.confirmEmail && {
                  error: true,
                  helperText: errors.confirmEmail,
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
                <InputLabel htmlFor="outlined-adornment-password">
                  Contraseña
                </InputLabel>
                <OutlinedInput
                 
                  label="Contraseña"
                  name="password"
                  type={showPass ? "text" : "password"}
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
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirma tu Contraseña
                </InputLabel>
                <OutlinedInput
                 
                  label="confirmaContraseña"
                  name="confirmPassword"
                  type={showPass ? "text" : "password"}
                  value={user.confirmPassword}
                  onChange={handleChange}
                  required
                  {...(errors.confirmPassword && {
                    error: true,
                    helperText: errors.confirmPassword,
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
                <em>{errors.confirmPassword}</em>
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
