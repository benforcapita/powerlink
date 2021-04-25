import { createStore, compose } from "redux";
import allReducers from "../reducers";
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(allReducers, enhancers);

export default store;
