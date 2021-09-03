import React from "react";
import { Route } from "react-router";
import UserList from "../UserList/UserList";
import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import FormContraseña from "../FormContraseña/FormContraseña";
import UserDetail from "../UserDetail/UserDetail";
import Cards from "../Cards/Cards";

const inmuebles = require("../../inmuebles.json");

export default function UserBody() {
  return (
    <div>
      <Route path="/user/datos">
        <UserDetail />
      </Route>
      <Route path="/user/properties">
        <Cards />
      </Route>
    </div>
  );
}
