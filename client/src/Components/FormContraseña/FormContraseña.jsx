import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Fragment } from "react";
import "./Styles.css";

export default function FormContraseña() {
  return (
    <Fragment>
      <div style={{ textAlign: "-webkit-center" }}>
        <form className="form">
          <p className="title">Olvidaste tu email/contraseña</p>
          <p>
            Te enviaremos un email con instrucciones sobre cómo restablecer tu
            contraseña.
          </p>
          <TextField
            id="Email"
            type="text"
            placeholder="nombre@ejemplo.com"
            style={{ marginBottom: "15px", paddingBottom: "15px" }}
          />

          <Button variant="contained" color="primary" p={5}>
            Start
          </Button>
        </form>
      </div>
    </Fragment>
  );
}
