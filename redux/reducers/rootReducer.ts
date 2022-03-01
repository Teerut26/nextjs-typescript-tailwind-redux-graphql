import { combineReducers } from "redux";
import counterReducter from "./counterReducter";

const rootReducer = combineReducers({
  counterReducter,
});

export default rootReducer;
