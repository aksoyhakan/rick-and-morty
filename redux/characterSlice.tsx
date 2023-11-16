"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterType } from "../types/types";

interface FavoriteCharacterType {
  favoriteCharacters: CharacterType[];
}

const initialState = {
  favoriteCharacters: [],
} as FavoriteCharacterType;

export const characterSlice = createSlice({
  name: "favoriteCharacter",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CharacterType>) => {
      state.favoriteCharacters = [...state.favoriteCharacters, action.payload];
    },
    remove: (state, action: PayloadAction<CharacterType>) => {
      state.favoriteCharacters = [
        ...state.favoriteCharacters.filter(
          (char: CharacterType) => char.id !== action.payload.id
        ),
      ];
    },
  },
});

export const { add, remove } = characterSlice.actions;

export default characterSlice.reducer;
