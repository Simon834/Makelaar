import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-color.png'
import './NavBar.css'


export default function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="logo">
        <NavLink to="/"><img className="centerImg" src={logo} alt="logo" /></NavLink>
      </div>

      <div >
        <div className="links">
          <NavLink className="texto"to="/home">Inicio</NavLink>
          <NavLink className="texto"to="/property" >Propiedades</NavLink>
          <NavLink className="texto"to="/about" >Nosotros</NavLink>
          <NavLink className="texto"to="/contact" >Contacto</NavLink>

        </div>
      </div>

    </div>
  )
}
