import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../images/logo-purple.png'


//DAR ESTILOS, ACOMODAR PARA QUE SE VEA BIEN EN LA WEB

export default function NavBar() {
  return (
    <nav>
      <div>
        {/* <NavLink to="/"><img src={logo} alt="logo" /></NavLink> */}
      </div>
      <div >
        <div >
          <NavLink to="/home">Inicio</NavLink>
          <NavLink to="/property" >Propiedades</NavLink>
          <NavLink to="/about" >Nosotros</NavLink>
          <NavLink to="/contact" >Contacto</NavLink>

        </div>
      </div>

    </nav>
  )
}