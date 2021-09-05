import "./App.css";
import "./";
import { Route } from "react-router";
import Home from "./Views/Home/Home";
import AdminPanel from "./Views/AdminPanel/AdminPanel";
import UserPanel from "./Views/UserPanel/UserPanel";
import ViewContact from "./Views/ViewContact/ViewContact";
import ViewProperty from "./Views/ViewProperty/ViewProperty";
import ViewAbout from "./Views/ViewAbout/ViewAbout";
import ViewResetPassword from "./Views/ViewResetPassword/ViewResetPassword";
import VierwRegister from "./Views/ViewRegister/VierwRegister";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  const favorites = useSelector(state => state.favorites) 

  useEffect(() => {
    if(favorites.length > 0){
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  },[favorites])

  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/user" component={UserPanel}/>
      <Route path="/contact" component={ViewContact}/>
      <Route path="/property" component={ViewProperty}/>
      <Route path="/about" component={ViewAbout}/>
      <Route path="/resetpassword" component={ViewResetPassword}/>
      <Route path="/register" component={VierwRegister}/>

    </div>
  );
}

export default App;
