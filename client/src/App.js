import "./App.css";
import "./"
import ViewBase from "./Views/view-base";
import { Route } from "react-router";
import UserList from "./Components/UserList/UserList";

function App() {
  return (
            <div className="App">
              <ViewBase carousel="carousel content" filter="filters"/>
              <Route exact path="/admin/:id" component={UserList} />
            </div>
          )
}

export default App;
