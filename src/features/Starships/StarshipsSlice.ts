import { createSlice } from "@reduxjs/toolkit";
import { Starship } from "../../types";

interface StarshipsState {
  StarshipsList: Starship[] | [];
  activeStarship: Starship | {};
}

const initialState: StarshipsState = {
  StarshipsList: [],
  activeStarship: {},
};

export const StarshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    setStarshipsList: (state, action) => {
      state.StarshipsList = [...action.payload];
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
  starships: { StarshipsList: any };
}) => state.starships.StarshipsList;
export default StarshipsSlice.reducer;
