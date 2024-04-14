import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
