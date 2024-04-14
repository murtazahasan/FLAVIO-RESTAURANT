import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootState";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
