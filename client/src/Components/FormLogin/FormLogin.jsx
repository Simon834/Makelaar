import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { userLogIn } from "../../Redux/Actions/userActions";
// import { Link } from "react-router-dom";


//material
import TextField from "@material-ui/core/TextField";
import {
  Container,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Grid,
  makeStyles,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";

import Link from '@material-ui/core/Link';


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
    alignContent:"center",
  },
  

  link:{
    padding: theme.spacing(1),
    margin: theme.spacing(27),
    alignContent:"center"
  }
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
  

export default function FormLogin() {
  const dispatch = useDispatch();

  
  const classes = useStyle();


  const [input, setInput] = useState({
    email: "",
    password: "",
  });


  const [errors, setErrors] = useState({});


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
  };


  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(userLogIn(input));
    // setLoading(true);
  }

  return (
     <Paper className={classes.root}>
    
    <form className={classes.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
      
      {/* <Grid container> */}
        {/* <Grid item xs={6}> */}
          
        <div>
          <label htmlFor="email"></label>
          <TextField id="filled-basic" label="e-mail" variant="outlined"

            placeholder="email@makelaar.com"
            type="email"
            id="email"
            value={input.email}
            onChange={e => handleChange(e)}
            {...(errors.email && {
              error: true,
              helperText: errors.email,
            })}
          />
          
        </div>
        <div>
          <label htmlFor="password"></label>
          <TextField id="filled-basic" label="Password" variant="outlined" 
            placeholder="Contraseña"
            type="password"
            id="password"
            value={input.password}
            onChange={e => handleChange(e)}
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

        {/* <Link to="/resetpassword" className={classes.link}> Olvidaste tu contraseña</Link> */}

        <Typography className={classes.link}>
  <Link href="/resetpassword">
    ¿Olvidaste tu contraseña?
  </Link>
  </Typography>

  <Typography className={classes.link}>
  <Link href="/resetpassword">
    REGISTRARSE
  </Link>
  </Typography>
  

        {/* </Grid> */}
        {/* </Grid> */}
      
      </form>

    
    </Paper>
  )

}