import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

const configureStore = initialState => {
  // support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancers());
};

export default configureStore;
