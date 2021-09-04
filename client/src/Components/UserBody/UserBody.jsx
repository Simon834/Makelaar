import React from "react";
import { Route } from "react-router";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../Redux/Actions/userActions";
import { useHistory } from "react-router";

import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import FormContraseña from "../FormContraseña/FormContraseña";
import UserDetail from "../UserDetail/UserDetail";
import Cards from "../Cards/Cards";

const inmuebles = require("../../inmuebles.json");

export default function UserBody() {
  const dispatch=useDispatch()
  const history=useHistory()
  const inmueblesFiltrados = inmuebles.filter(
    (inmueble) => inmueble.user === "user1"
  );
  return (
    <div>
      <Route path="/user/:id/data">
        <UserDetail />
      </Route>
      <Route path="/user/:id/properties">
        <Cards inmuebles={inmueblesFiltrados} />
      </Route>
      <Route path="/user/:id/logout">
        <button onClick={()=>{
          dispatch(logOutUser())
          history.push(`/`)
          }}>Salir</button>
      </Route>
    </div>
  );
}
