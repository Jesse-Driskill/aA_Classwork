import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunkMiddleware from "../middleware/thunk";
import { applyMiddleware } from "redux";

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
}

export default configureStore;