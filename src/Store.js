import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./Reducer/User";

const store = configureStore({
  reducer:{
    user: useReducer,
  }
})

export default store;