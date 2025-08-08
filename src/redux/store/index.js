import { configureStore, combineReducers } from "@reduxjs/toolkit";
import nuoveReducer from "../reducer";
import audioReducer from "../audioReducer";

const Reducer = combineReducers({
  nuove: nuoveReducer,
  audio: audioReducer,
});

const store = configureStore({
  reducer: Reducer,
});

export default store;
