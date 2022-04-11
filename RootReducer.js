import { combineReducers } from "redux";
import { reducer, purchase_Reducer } from "./Reducer";

export const rootReducer = combineReducers({ reducer, purchase_Reducer });
