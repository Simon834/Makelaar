import React from "react"
import { Fragment } from "react";
import { Button } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";
import emailjs from "emailjs-com";
import Home from "@material-ui/icons/Home";
import Phone from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import TextField from "@material-ui/core/TextField";
import style from "./Contact.module.css";
import Swal from "sweetalert2";

export default function Contact() {
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
          Swal.fire("Perfecto!", "Tu mensaje ha sido enviado con éxito!", "success");
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          document.getElementById("email").value = "";
        },
        (error) => {
          Swal.fire("Oh no!", "ocurrio un error al eviar el email,intentelo nuevamente", "error");
        }
      );
  }


  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.about_contact}>
          <div className={style.contact}>
            <div className={style.icon}>
              <Home />
            </div>
            <div>
              <h3>Estamos en </h3>
              <div className={style.info}>
                <p>Donaciano del Campillo Nº 2195</p>
                <p>Bº Parque Corema, Córdoba</p>
              </div>
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.icon}>
              <Phone />
            </div>
            <div>
              <h3>Llamanos al</h3>
              <div className={style.info}>
                <p>(549) 11456982365</p>
              </div>
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.icon}>
              <MailOutlineIcon />
            </div>
            <div>
              <h3>Escribinos a</h3>
              <div className={style.info}>
                <p>info_makelaar@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.linea} />
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
          <img
            className={style.img}
            src="http://garbero.com.ar/wp-content/uploads/2019/03/telefono-03.jpg"
            alt="imagen"
          />
        </div>
        <div className={style.container_redes}>
          <div className={style.red}>
            <div className={style.icon_red}>
              <Facebook style={{ width: "30px", height: "30px" }} />
            </div>
            <div className={style.info}>
              <h2>Facebook</h2>
              Para estar actualizado
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                p={5}
                onClick={() =>
                  window.open(
                    "https://m.facebook.com/Makelaar-110691244682513/",
                    "_blank"
                  )
                }
              >
                Seguinos
              </Button>
            </div>
          </div>
          <div className={style.red}>
            <div className={style.icon_red}>
              <Instagram style={{ width: "30px", height: "30px" }} />
            </div>
            <div className={style.info}>
              <h2>Instagram</h2>
              Todas las novedades
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                p={5}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/makelaar.inmobiliaria/",
                    "_blank"
                  )
                }
              >
                Seguinos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
