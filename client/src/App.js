import "./App.css";
import { Route } from "react-router";

import UserList from "./Components/UserList/UserList";

//Prueba Mili NavBar
import NavBar from "./Components/NavBar/NavBar";
import TopBar from "./Components/TopBar/TopBar"

function App() {
  return (
    <div className="App">
      <Route exact path="/admin/:id" component={UserList} />
      <NavBar/>
      <TopBar/>
    </div>
  );
}

export default App;
