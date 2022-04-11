import { createStore } from "redux";
import { reducer } from "./Reducer";
import { rootReducer } from "./RootReducer";

export const store = createStore(rootReducer);
