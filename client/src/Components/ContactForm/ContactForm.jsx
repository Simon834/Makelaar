import React from 'react'
import TextField from "@material-ui/core/TextField";
import emailjs from "emailjs-com";
import { Button } from "@material-ui/core";

import style from "../Contact/Contact.module.css";

function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5jnncph",
        "template_u47dtrp",
        e.target,
        "user_Hd51CXPAMjhaoeevm1IG3"
      )
      .then(
        (result) => {
          alert("Email enviado con Exito");
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          document.getElementById("email").value = "";
        },
        (error) => {
          alert(
            "Oh no ocurrio un error al eviar el email,intentelo nuevamente"
          );
        }
      );
  }




export default function ContactForm() {
    return (
        <div className={style.container_Form}>
            <form className={style.form_contact} onSubmit={sendEmail}>
                <h2 className={style.title}>Formulario de Contacto</h2>
                <p>Personalmente te responderemos a la brevedad.</p>
                <TextField
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    variant="outlined"
                    style={{
                        marginBottom: "10px",
                        marginTop: "1rem",
                    }}
                />
                <TextField
                    id="phone"
                    variant="outlined"
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    id="email"
                    variant="outlined"
                    type="email"
                    name="email"
                    placeholder="email@makelaar.com"
                    style={{
                        marginBottom: "10px",
                    }}
                />
                <TextField
                    aria-label="minimum height"
                    multiline
                    id="message"
                    name="message"
                    placeholder="Tu mensaje"
                    rows={4}
                    rowsMin={3}
                    cols="20"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    color="primary"
                    p={5}
                    type="submit"
                    style={{ marginTop: "1rem" }}
                >
                    Enviar
                </Button>
            </form>
        </div>
    )
}