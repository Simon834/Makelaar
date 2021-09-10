import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { forgot_password } from "../../Redux/Actions/formsActions";
import style from "./Styles.module.css";


export function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = "Se requiere un email";
  } else if (
    !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
      input.email
    )
  ) {
    errors.email = "Email inválido";
  }
  if (!input.password) {
    errors.password = "Se requiere una contraseña";
  }

  return errors;
}
export default function FormContraseña() {
  const [input, setInput] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const estado = useSelector((state) => state.msg_password);

  function handleInputChange(e) {
    e.persist();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(forgot_password(input));
    setInput({ email: "" });
  }

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <p className={style.title}>¿Olvidaste tu contraseña?</p>
        <p className={style.text}>
          Te enviaremos un email con instrucciones sobre cómo restablecer tu
          contraseña.
        </p>
        <TextField
          id="email"
          type="text"
          name="email"
          placeholder="email@makelaar.com"
          style={{ marginBottom: "15px", paddingBottom: "20px" }}
          onChange={(e) => handleInputChange(e)}
          value={input.email}
        />
        {errors.email && <p className={style.danger}>{errors.email}</p>}
        <Button variant="contained" color="primary" p={5} type="submit">
          Enviar
        </Button>
        <div>
          {estado.msg ? <p className={style.errorText}>{estado.msg}</p> : null}
        </div>
      </form>
    </div>
  );
}
