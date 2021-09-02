import "./App.css";
import "./";
import ViewBase from "./Views/ViewBase/view-base";
import { Route } from "react-router";
import AdminPanel from "./Views/AdminPanel/AdminPanel";
import Carrusel from "./Components/Carrusel/Carrusel";
import NavBar from "./Components/NavBar/NavBar";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ViewBase
          topBar={<TopBar />}
          filter="filters"
          navBar={<NavBar />}
          carousel={<Carrusel />}
        />
      </Route>
      <Route path="/admin" component={AdminPanel} />
    </div>
  );
}

export default App;
