import "./App.css";
import "./"
import ViewBase from "./Views/view-base";
import { Route } from "react-router";
import UserList from "./Components/UserList/UserList";
import NavBar from "./Components/NavBar/NavBar";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
            <div className="App">
              <ViewBase navBar={<NavBar/>} topBar={<TopBar/>} carousel="carousel content" filter="filters"/>
              <Route exact path="/admin/:id" component={UserList} />
              
              {/* <TopBar/>
              <NavBar/> */}
            </div>
          )
}

export default App;
