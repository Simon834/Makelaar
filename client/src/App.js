import "./App.css";
import "./"
import ViewBase from "./Views/view-base";
import { Route } from "react-router";
import AdminPanel from "./Views/AdminPanel";
import Carrusel from "./Components/Carrusel/Carrusel";
import FormLogin from "./Components/FormLogin/FormLogin"
import SearchBar from "./Components/SearchBar/SearchBar"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase filter="filters" />
      </Route>
      <Route path="/admin" component={AdminPanel} />
    </div>
  )
}

export default App;
