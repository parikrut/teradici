import { combineReducers } from "redux";
import TaskReducer from "./task";
import GlobalReducer from "./global";

const rootReducer = combineReducers({
  Task: TaskReducer,
  Global: GlobalReducer,
});

export default rootReducer;
