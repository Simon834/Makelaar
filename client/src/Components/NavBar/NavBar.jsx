import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-color.png'
import style from './NavBar.module.css'


export default function NavBar() {
  return (
    <div className={style.navBarContainer}>
      <div className={style.logo}>
        <NavLink to="/"><img className={style.centerImg} src={logo} alt="logo" /></NavLink>
      </div>

      <div >
        <div className={style.links}>
          <NavLink className={style.texto}to="/home">Inicio</NavLink>
          <NavLink className={style.texto}to="/property" >Propiedades</NavLink>
          <NavLink className={style.texto}to="/about" >Nosotros</NavLink>
          <NavLink className={style.texto}to="/contact" >Contacto</NavLink>

        </div>
      </div>

    </div>
  )
}