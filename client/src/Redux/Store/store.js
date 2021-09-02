import { createStore, applyMiddleware } from "redux";
import Reducer from "../Reducer/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
