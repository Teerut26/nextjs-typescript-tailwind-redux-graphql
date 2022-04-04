import { combineReducers } from "@reduxjs/toolkit";
import countSlice, { initialStateInterface } from "./slice/counterSlice";

export interface RootState {
  countSlice: initialStateInterface;
}

const rootReducer = combineReducers({
  countSlice: countSlice,
});

export default rootReducer;

