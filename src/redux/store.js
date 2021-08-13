import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const MIDDLEWARES = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

console.log(MIDDLEWARES);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...MIDDLEWARES))
);

export const persistor = persistStore(store);
