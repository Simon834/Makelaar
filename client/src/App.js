import "./App.css";
import "./";
import ViewBase from "./Views/ViewBase/view-base";
import { Route } from "react-router";
import AdminPanel from "./Views/AdminPanel/AdminPanel";
import Carrusel from "./Components/Carrusel/Carrusel";
import FormLogin from "./Components/FormLogin/FormLogin";
import FormContraseña from "./Components/FormContraseña/FormContraseña";
import UserRegistrationForm from "./Components/UserRegistrationForm/UserRegistrationFrom";
<<<<<<< HEAD
import UserDetail from "./Components/UserDetail/UserDetail"


=======
import Cards from "./Components/Cards/Cards";
const inmuebles = require("./inmuebles.json");
>>>>>>> dev

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase
          filter="filters"
<<<<<<< HEAD
          // carousel={<Carrusel />}
          content={<UserDetail/>}
        />
      </Route>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/form" >
      
      
      <FormLogin/>
      <FormContraseña/>
      <UserRegistrationForm/>
=======
          carousel={<Carrusel />}
          content={<Cards inmuebles={inmuebles} />}
        />
      </Route>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/form">
        <FormLogin />
        <FormContraseña />
        <UserRegistrationForm />
>>>>>>> dev
      </Route>
    </div>
  );
}

export default App;
