import { configureStore, combineReducers } from "@reduxjs/toolkit";
import nuoveReducer from "../reducer";

const Reducer = combineReducers({
  nuove: nuoveReducer,
});

const store = configureStore({
  reducer: Reducer,
});

export default store;
