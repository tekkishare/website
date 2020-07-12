import { CombineReducers } from "redux";
import pageReducer from "./pageReducer";

const joinReducer = CombineReducers({
  pageReducer,
});

export default joinReducer;
