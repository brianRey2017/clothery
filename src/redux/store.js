import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const MIDDLEWARES = [thunk];

if (process.env.NODE_ENV !== "production") {
  MIDDLEWARES.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...MIDDLEWARES))
);

export const persistor = persistStore(store);
