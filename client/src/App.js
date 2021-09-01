import "./App.css";
import UserList from "./Components/UserList/UserList";
function App() {
  return (
    <div className="App">
      <Route exact path="/admin/:id" component={UserList}></Route>
    </div>
  );
}

export default App;
