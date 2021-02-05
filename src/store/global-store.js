import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { surveySlice } from "./survey-slice";
import { responseSlice } from "./response-slice";

const rootReducer = combineReducers({
  surveys: surveySlice.reducer,
  responses: responseSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });