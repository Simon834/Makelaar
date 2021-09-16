import { Button, Grid, Paper, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../Redux/Actions/userActions";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => ({
  message: {
    marginLeft: "1rem",
    padding: "3rem",
    fontSize: "1.4rem",
  },

  container: {
    width: "min-content",
    margin: theme.spacing(4),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    allingItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  ok: {
    float: "right",
    padding: "0.5rem",
    marginBottom: "1rem",
  },
  cancel: {
    float: "left",
    padding: "0.5rem",
    marginBottom: "1rem",
  },
}));

export default function Logout({ action, auth }) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Grid className={classes.message}>
        ¿Estás seguro que deseas cerrar tu sesión?
      </Grid>
      <Grid classname={classes.buttonContainer}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.cancel}
          onClick={() => {
            action();
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.ok}
          onClick={() => {
            dispatch(logOutUser());
            action();
            auth(false);
            history.push("/");
          }}
        >
          Si, cerrar sesión!
        </Button>
      </Grid>
    </div>
  );
}
