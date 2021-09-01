import "./App.css";
import { Route } from "react-router";

import UserList from "./Components/UserList/UserList";
function App() {
  return (
    <div className="App">
      <Route exact path="/admin/:id" component={UserList} />
    </div>
  );
}

export default App;
