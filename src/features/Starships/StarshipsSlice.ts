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

export const StarshipsSlice = createSlice({
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

export const { setActiveStarship, setStarshipsList } = StarshipsSlice.actions;
export const selectActiveStarship = (state: {
  starships: { activeStarship: any };
}) => state.starships.activeStarship;
export const selectStarshipsList = (state: {
  starships: { starshipsList: any };
}) => state.starships.starshipsList;
export default StarshipsSlice.reducer;
