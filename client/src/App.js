import "./App.css";
import "./";
import { Route } from "react-router";
import Home from "./Views/Home/Home";
import AdminPanel from "./Views/AdminPanel/AdminPanel";
import UserPanel from "./Views/UserPanel/UserPanel";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/user" component={UserPanel}/>

    </div>
  );
}

export default App;
