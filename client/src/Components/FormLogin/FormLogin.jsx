import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogIn } from "../../Redux/Actions/userActions";

//material
import TextField from "@material-ui/core/TextField";
import { makeStyles, Button, Typography } from "@material-ui/core";

import Link from "@material-ui/core/Link";

const useStyle = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "450px",
      margin: theme.spacing(1),
    },
  },
  root: {
    width: "min-content",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    flexDirection: "column",
    allingItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "25px",
    marginLeft: theme.spacing(24),
    marginBottom: "15px",
    padding: "10px",
    alignContent: "left",
  },

  link: {
    marginTop: "15px",
    marginBottom: "15px",
    alignContent: "center",
    fontWeight: "400",
  },
}));

//material

export function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = "Se Requiere un Email";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "Email inválido";
  }
  if (!input.password) {
    errors.password = "Se requiere una contraseña";
  }

  return errors;
}

export default function FormLogin({ action }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfo } = useSelector((state) => state);

  const classes = useStyle();

  const [input, setInput] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userInfo.token) {
      if (userInfo.user.isAdmin) {
        history.push(`/admin/${userInfo.user.id}/data`);
        action();
      } else {
        history.push(`/user/${userInfo.user.id}/data`);
        action();
      }
    }
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange(e) {
    e.persist();
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.id]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userLogIn(input));
  }

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <label htmlFor="email"></label>
        <TextField
          label="e-mail"
          variant="outlined"
          placeholder="email@makelaar.com"
          type="email"
          id="email"
          value={input.email}
          onChange={(e) => handleChange(e)}
          {...(errors.email && {
            error: true,
            helperText: errors.email,
          })}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <TextField
          label="Password"
          variant="outlined"
          placeholder="Contraseña"
          type={input.showPassword ? 'text' : 'password'}
          id="password"
          value={input.password}
          onChange={(e) => handleChange(e)}
          {...(errors.password && {
            error: true,
            helperText: errors.password,
          })}
        />
      </div>

      <div>
        <p>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            INGRESAR
          </Button>
        </p>
      </div>

      <Typography className={classes.link}>
        <Link href="/resetpassword">¿Olvidaste tu contraseña?</Link>
      </Typography>

      <Typography className={classes.link}>
        <Link href="/register">REGISTRARSE</Link>
      </Typography>
    </form>
  );
}
