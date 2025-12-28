import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { AuthReducer } from "./authReducer"
import { ShoppingCartReducer } from "./shoppingCartReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  shoppingCart: ShoppingCartReducer,
});

const store = configureStore({
  reducer: reducers,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
