import { createStore } from "redux";
import { plainTextReducer } from "./plain_text/plainTextReducer";

export const store = createStore(plainTextReducer);
