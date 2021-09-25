import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import messageReducer from "./messageReducer";

const reducers = combineReducers({
  account: accountReducer,
  messages: messageReducer,
});

export default reducers;
