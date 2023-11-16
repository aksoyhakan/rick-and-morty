"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";

const rootReducer = combineReducers({
  favoriteCharacter: characterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
