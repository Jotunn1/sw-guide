import { createSlice } from "@reduxjs/toolkit";
import { Specie } from "../../types";

interface SpeciesState {
  speciesList: Specie[] | [];
  activeSpecie: Specie | {};
}

const initialState: SpeciesState = {
  speciesList: [],
  activeSpecie: {},
};

export const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    setSpeciesList: (state, action) => {
      state.speciesList = [...action.payload];
    },
    setActiveSpecie: (state, action) => {
      state.activeSpecie = action.payload;
    },
  },
});

export const { setActiveSpecie, setSpeciesList } = speciesSlice.actions;
export const selectActiveSpecie = (state: {
  species: { activespecies: any };
}) => state.species.activespecies;
export const selectSpeciesList = (state: { species: { speciesList: any } }) =>
  state.species.speciesList;
export default speciesSlice.reducer;
