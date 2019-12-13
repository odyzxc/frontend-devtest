import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createRootReducer } from "./rootReducer";

const configureStore = (history, initialState) => {
  // support for Redux dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
};

export default configureStore;
