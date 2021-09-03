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
import UserPanel from "./Views/UserPanel/UserPanel";

const inmuebles = require("./inmuebles.json");

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase
          filter="filters"
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
