import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducers";
import userReducer from "./user/user.reducer";

const PERSIST_CONFIG = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default persistReducer(PERSIST_CONFIG, rootReducer);
