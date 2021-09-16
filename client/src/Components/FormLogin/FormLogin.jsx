import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogIn } from "../../Redux/Actions/userActions";

//material
import TextField from "@material-ui/core/TextField";
import { makeStyles, Button } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import "./formLogin.css";

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
  const [showPass, setShowPass] = useState(false);
  const classes = useStyle();

  const [input, setInput] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userInfo.token) {
      if (userInfo.user.isAdmin) {
        history.push(`/admin/${userInfo.user.id}/dashboard`);
        action();
      } else {
        history.push(`/user/${userInfo.user.id}/data`);
        action();
      }
    }
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("USERINFO", userInfo);
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

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            // variant="outlined"
            label="Contraseña"
            name="password"
            id="password"
            type={showPass ? "text" : "password"}
            value={input.password}
            onChange={(e) => handleChange(e)}
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

        {/* <label htmlFor="password"></label>
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
        />*/}
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
      {/* 
      <Typography className={classes.link}>
        <Link href="/resetpassword">¿Olvidaste tu contraseña?</Link>
      </Typography> */}

      {/* <Typography className={classes.link}>
        <Link href="/register">REGISTRARSE</Link>
      </Typography> */}
    </form>
  );
}
