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

import Filter from "./Views/Filters/Filters.jsx"
import SearchBar from "./Components/SearchBar/SearchBar";
import FilterPrice from "./Components/FilterPrice/FilterPrice";

import UserPanel from "./Views/UserPanel/UserPanel";


const inmuebles = require("./inmuebles.json");

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase
          filters={
            <Filter
              searchBar={<SearchBar/>}
              type="Componente-type"
              sellRent="Componente-sellRent"
              price={<FilterPrice/>}
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
      <Route path="/user" component={UserPanel}/>
    </div>
  );
}

export default App;
