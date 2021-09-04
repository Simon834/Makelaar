import { Button, Grid, Paper, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  message: {
    width: "30rem",
    marginLeft: "1rem",
    padding: theme.spacing(4),
    fontSize: "1.3rem",
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
  },
  cancel: {
    float: "left",
  },
}));

export default function Logout() {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.container}>
        <Grid className={classes.message}>
          ¿Estas seguro que deseas cerrar tu sesión?
        </Grid>
        <Grid classname={classes.buttonContainer}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.cancel}
          >
            Cancelar
          </Button>
          <Button variant="contained" color="primary" className={classes.ok}>
            Si, cerrar sesión!
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}
