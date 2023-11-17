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
  name: "speciess",
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
  speciess: { activespecies: any };
}) => state.speciess.activespecies;
export const selectSpeciesList = (state: { speciess: { speciesList: any } }) =>
  state.speciess.speciesList;
export default speciesSlice.reducer;
