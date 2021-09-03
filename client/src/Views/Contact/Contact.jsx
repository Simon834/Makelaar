import { Fragment } from "react";
import { Button } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import Phone from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";
export default function Contact() {
  return (
    <Fragment>
      <div className="container">
        <div className="about_contact">
          <div className="contact">
            <div className="icon">
              <Home />
            </div>
            <div>
              <h3>Estamos en </h3>
              <div className="info">
                <p>Donaciano del Campillo Nº 2195</p>
                <p>Bº Parque Corema, Córdoba</p>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="icon">
              <Phone />
            </div>
            <div>
              <h3>Llamanos al</h3>
              <div className="info">
                <p>(549) 11456982365</p>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="icon">
              <MailOutlineIcon />
            </div>
            <div>
              <h3>Escribinos a</h3>
              <div className="info">
                <p>makelaar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="linea" />
        <div className="container_Form">
          <form className="form_contact">
            <h2 className="title">Formulario de Contacto</h2>
            <p>Personalmente te responderemos tan pronto como podamos.</p>
            <TextField
              id="name"
              type="text"
              name="name"
              placeholder="name"
              style={{
                marginBottom: "15px",
                paddingBottom: "15px",
                marginTop: "1rem",
              }}
            />
            <TextField
              id="phone"
              type="text"
              name="phone"
              placeholder="phone"
              style={{ marginBottom: "15px", paddingBottom: "15px" }}
            />
            <TextField
              id="email"
              type="text"
              name="email"
              placeholder="email@makelaar.com"
              style={{ marginBottom: "15px", paddingBottom: "15px" }}
            />
            <Button variant="contained" color="primary" p={5} type="submit">
              Enviar
            </Button>
          </form>
          <img
            src="http://garbero.com.ar/wp-content/uploads/2019/03/telefono-03.jpg"
            alt="imagen"
          />
        </div>
        <div className="container_redes">
          <div className="red">
            <div className="icon_red">
              <Facebook style={{ width: "30px", height: "30px" }} />
            </div>
            <div className="info">
              <h2>Facebook</h2>
              Para estar actualizado
            </div>
            <div>
              <Button variant="contained" color="primary" p={5} type="submit">
                Seguinos
              </Button>
            </div>
          </div>
          <div className="red">
            <div className="icon_red">
              <Instagram style={{ width: "30px", height: "30px" }} />
            </div>
            <div className="info">
              <h2>Instagram</h2>
              Todas las novedades
            </div>
            <div>
              <Button variant="contained" color="primary" p={5} type="submit">
                Seguinos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
