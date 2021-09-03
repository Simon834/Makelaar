import "./App.css";
import "./";
import ViewBase from "./Views/ViewBase/view-base";
import { Route } from "react-router";
import AdminPanel from "./Views/AdminPanel/AdminPanel";
import Carrusel from "./Components/Carrusel/Carrusel";
import FormLogin from "./Components/FormLogin/FormLogin";
import FormContraseña from "./Components/FormContraseña/FormContraseña";
import UserRegistrationForm from "./Components/UserRegistrationForm/UserRegistrationFrom";
import UserDetail from "./Components/UserDetail/UserDetail"



function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase
          filter="filters"
          // carousel={<Carrusel />}
          content={<UserDetail/>}
        />
      </Route>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/form" >
      
      
      <FormLogin/>
      <FormContraseña/>
      <UserRegistrationForm/>
      </Route>
    </div>
  );
}

export default App;
