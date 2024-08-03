import { createSlice } from "@reduxjs/toolkit";
import { Starship } from "../../types";

interface StarshipsState {
  starshipsList: Starship[] | [];
  activeStarship: Starship | {};
}

const initialState: StarshipsState = {
  starshipsList: [],
  activeStarship: {},
};

export const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    setStarshipsList: (state, action) => {
      state.starshipsList = [...action.payload];
    },
    setActiveStarship: (state, action) => {
      state.activeStarship = action.payload;
    },
  },
});

export const { setActiveStarship, setStarshipsList } = starshipsSlice.actions;
export const selectStarshipsList = (state: {
  starships: { starshipsList:  Starship[] };
}) => state.starships.starshipsList;
export const selectActiveStarship = (state: {
  starships: { activeStarship: any };
}) => state.starships.activeStarship;

export default starshipsSlice.reducer;
