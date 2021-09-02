import "./App.css";
import "./"
import ViewBase from "./Views/view-base";
import { Route } from "react-router";
import AdminPanel from "./Views/AdminPanel";
import Carrusel from "./Components/Carrusel/Carrusel";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase carousel={<Carrusel />} filter="filters" />
      </Route>
      <Route path="/admin" component={AdminPanel} />
    </div>
  )
}

export default App;
