import React from "react";
import { Route } from "react-router";

import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import FormContraseña from "../FormContraseña/FormContraseña";
import UserDetail from "../UserDetail/UserDetail";
import Cards from "../Cards/Cards";

const inmuebles = require("../../inmuebles.json");

export default function UserBody() {
  const inmueblesFiltrados = inmuebles.filter(
    (inmueble) => inmueble.user === "user1"
  );
  return (
    <div>
<<<<<<< HEAD
      <Route path="/user/datos">
=======
      <Route path="/user/:id/data">
>>>>>>> dev
        <UserDetail />
      </Route>
      <Route path="/user/properties">
        <Cards inmuebles={inmueblesFiltrados} />
      </Route>
    </div>
  );
}
