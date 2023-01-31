import { createSlice } from "@reduxjs/toolkit";
import { Planet } from "../../types";

interface PlanetsState {
    planetsList: Planet[] | [];
    activePlanet: Planet | {};
}

const initialState: PlanetsState = {
    planetsList: [],
    activePlanet: {},
};

export const planetsSlice = createSlice({
    name: "planets",
    initialState,
    reducers: {
        setPlanetsList: (state, action) => {
            console.log(action.payload, "planets from redux");
            state.planetsList = [...action.payload];
        },
        setActivePlanet: (state, action) => {
            state.activePlanet = action.payload;
        },
    },
});

export const { setActivePlanet, setPlanetsList } = planetsSlice.actions;
export const selectActivePlanet = (state: { planets: { activePlanet: any } }) =>
    state.planets.activePlanet;
export const selectPlanetsList = (state: { planets: { planetsList: any } }) =>
    state.planets.planetsList;
export default planetsSlice.reducer;
