import React from "react";
import styles from "./AboutUs.module.css";
import logo from "../../images/logo-white-horizontal.png";

export default function AboutUs() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.h2text}>Sobre nosotros</h2>
          <p>
            Somos un equipo de especialistas trabajando dia a dia para ofrecerle
            las mejores opciones para la{" "}
            <strong> Venta, Alquiler y Administración de Propiedades. </strong>
          </p>
          <p>
            Nuestro objetivo es facilitar la venta o alquiler de su propiedad,
            para ello estamos en constante aprendizaje sobre las{" "}
            <strong>nuevas tecnologías</strong>, incorporando nuevos canales de
            comunicación, portales, sistemas y plataformas. Nuestro trabajo es
            brindarle cada día una mejor respuesta.
          </p>
          <br />
          <p>
            En <strong>Makelaar</strong> siempre estamos pensando en el cliente
            y en poder cubrir las necesidades de los mismos, basándonos siempre
            en nuestra experiencia y saber hacer. Si lo que estás buscando es
            disfrutar de la paz y la tranquilidad de un entorno natural en uno
            de los lugares más hermosos de la provincia, tenemos la casa que
            estás buscando. Aquí encontrarás información sobre venta y
            alquileres de departamentos, casas, locales y terrenos.
          </p>
          <img className={styles.image2} src={logo} alt="imagenlogo" />
        </div>
      </div>
    </>
  );
}
