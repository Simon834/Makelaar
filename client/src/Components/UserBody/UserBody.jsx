import React from "react";
import { Route } from "react-router";
import UserList from "../UserList/UserList";
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
      <Route path="/user/:id">
        <UserDetail />
      </Route>
      <Route path="/user/:id/properties">
        <Cards inmuebles={inmueblesFiltrados} />
      </Route>
    </div>
  );
}
