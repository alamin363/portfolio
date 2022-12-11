import { createReducer } from "@reduxjs/toolkit";

const initalState = {
  loading: true,
  data: [],
};

export const useReducer = createReducer(
  {},
  {
    GET_USER_REQUEST: (state, action) => {
      state.loading = true;
    },
    GET_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    GET_USER_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
