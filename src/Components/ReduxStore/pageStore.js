import { createStore } from "redux";
import reducer from "./reducers/pageReducer";

const store = createStore(reducer);
//console.log(store);
export default store;
