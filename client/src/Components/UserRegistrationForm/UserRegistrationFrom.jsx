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
} from "@material-ui/core";
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

export default function UserRegistrationForm() {
  const classes = useStyle();
  const { handleChange, handleSubmit, formIsValid, errors, user } =
    useFormControls();

  return (
    <>
      <Paper className={classes.root}>
        <Container className={classes.header}>Registrate</Container>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Name"
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
              />
              <TextField
                variant="outlined"
                label="Whatsapp"
                name="whatsapp"
                type="number"
                value={user.whatsapp}
                onChange={handleChange}
                required
              />
              <TextField
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                required
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
