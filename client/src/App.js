import "./App.css";
import "./";
import ViewBase from "./Views/ViewBase/view-base";
import { Route } from "react-router";
import AdminPanel from "./Views/AdminPanel/AdminPanel";
import Carrusel from "./Components/Carrusel/Carrusel";
import FormLogin from "./Components/FormLogin/FormLogin";
import FormContraseña from "./Components/FormContraseña/FormContraseña";
import UserRegistrationForm from "./Components/UserRegistrationForm/UserRegistrationFrom";
import Cards from "./Components/Cards/Cards";
import Contact from "./Views/Contact/Contact";
import Filter from "./Views/Filters/Filters.jsx";
import UserPanel from "./Views/UserPanel/UserPanel";

const inmuebles = require("./inmuebles.json");

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase
          filters={
            <Filter
              searchBar="Componente-searchBar"
              type="Componente-type"
              sellRent="Componente-sellRent"
              price="Componente-price"
              city="Componente-city"
              province="Componente-province"
              neighbothood="Componente-neighbothood"
              street="Componente-street"
              bedrooms="Componente-bedrooms"
              bathrooms="Componente-bathrooms"
            />
          }
          carousel={<Carrusel />}
          content={<Cards inmuebles={inmuebles} />}
        />
      </Route>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/form">
        <FormLogin />
        <FormContraseña />
        <UserRegistrationForm />
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/user" component={UserPanel} />
    </div>
  );
}

export default App;
