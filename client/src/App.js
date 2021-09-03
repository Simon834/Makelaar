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
<<<<<<< HEAD
      
=======
>>>>>>> e14ac8b7ea4c1cd1c4e7beb7ffc866ecce1ddf85
    </div>
  );
}

export default App;
