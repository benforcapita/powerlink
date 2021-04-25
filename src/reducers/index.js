import { combineReducers } from "redux";
import TeamsReducer from "./TeamsReducer";

const allReducers = combineReducers({
  TeamsReducer: TeamsReducer,
});

export default allReducers;
