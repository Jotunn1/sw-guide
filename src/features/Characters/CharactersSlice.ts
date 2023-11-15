import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types";

interface CharactersState {
  charactersList: Character[] | [];
  activeCharacter: Character | {};
}

const initialState: CharactersState = {
  charactersList: [],
  activeCharacter: {},
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharactersList: (state, action) => {
      state.charactersList = [...action.payload];
    },
    setActiveCharacter: (state, action) => {
      state.activeCharacter = action.payload;
    },
  },
});

export const { setActiveCharacter, setCharactersList } =
  charactersSlice.actions;
export const selectActiveCharacter = (state: {
  characters: { activeCharacter: any };
}) => state.characters.activeCharacter;
export const selectCharactersList = (state: {
  characters: { charactersList: any };
}) => state.characters.charactersList;
export default charactersSlice.reducer;
