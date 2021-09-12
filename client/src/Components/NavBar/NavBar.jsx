import React, { Fragment, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo-color-horizontal.png";
import style from "./NavBar.module.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SliderData";
import { useState } from "react";

export default function NavBar() {
  const [SideBar, SetSideBar] = useState(true);

  const [size, setSize] = useState({
    widthWindow: window.innerWidth,
  });
  const updateSize = () =>
    setSize({
      widthWindow: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);
  const showSidebar = () => SetSideBar(!SideBar);

  return size.widthWindow > 1000 ? (
    <div className={style.navBarContainer}>
      <div className={style.logo}>
        <NavLink to="/">
          <img className={style.centerImg} src={logo} alt="logo" />
        </NavLink>
      </div>
      <div>
        <div className={style.links}>
          <NavLink className={style.texto} activeClassName={style.selected} exact  to="/">
            Inicio
          </NavLink>
          <NavLink className={style.texto} activeClassName={style.selected} to="/property">
            Propiedades
          </NavLink>
          <NavLink className={style.texto} activeClassName={style.selected} to="/about">
            Nosotros
          </NavLink>
          <NavLink className={style.texto} activeClassName={style.selected} to="/contact">
            Contacto
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <Fragment>
      <div className={style.navbar}>
        <Link to="#" className={style.menu_bars}>
          {SideBar ? (
            <FaIcons.FaBars onClick={showSidebar} />
          ) : (
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          )}
        </Link>
      </div>
      <nav className={SideBar ? style.nav_menu : style["nav_menu active"]}>
        <ul className={style.nav_menu_item}>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={style.nav_text}>
                <Link to={item.path} className={style.text}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
}
